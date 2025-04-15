import os
import sys
import asyncio
import traceback
import random

import nodes
import folder_paths
import execution
import uuid
import urllib
import json
import glob
import struct
import ssl
import socket
import ipaddress
from PIL import Image, ImageOps
from PIL.PngImagePlugin import PngInfo
from io import BytesIO

import aiohttp
from aiohttp import web
import logging

import mimetypes
from comfy.cli_args import args
import comfy.utils
import comfy.model_management
import node_helpers
from comfyui_version import __version__
from app.frontend_management import FrontendManager
from app.user_manager import UserManager
from app.model_manager import ModelFileManager
from app.custom_node_manager import CustomNodeManager
from typing import Optional
from api_server.routes.internal.internal_routes import InternalRoutes

class BinaryEventTypes:
    PREVIEW_IMAGE = 1
    UNENCODED_PREVIEW_IMAGE = 2

async def send_socket_catch_exception(function, message):
    try:
        await function(message)
    except (aiohttp.ClientError, aiohttp.ClientPayloadError, ConnectionResetError, BrokenPipeError, ConnectionError) as err:
        logging.warning("send error: {}".format(err))

@web.middleware
async def cache_control(request: web.Request, handler):
    response: web.Response = await handler(request)
    if request.path.endswith('.js') or request.path.endswith('.css'):
        response.headers.setdefault('Cache-Control', 'no-cache')
    return response


@web.middleware
async def compress_body(request: web.Request, handler):
    accept_encoding = request.headers.get("Accept-Encoding", "")
    response: web.Response = await handler(request)
    if not isinstance(response, web.Response):
        return response
    if response.content_type not in ["application/json", "text/plain"]:
        return response
    if response.body and "gzip" in accept_encoding:
        response.enable_compression()
    return response


def create_cors_middleware(allowed_origin: str):
    @web.middleware
    async def cors_middleware(request: web.Request, handler):
        if request.method == "OPTIONS":
            # Pre-flight request. Reply successfully:
            response = web.Response()
        else:
            response = await handler(request)

        response.headers['Access-Control-Allow-Origin'] = allowed_origin
        response.headers['Access-Control-Allow-Methods'] = 'POST, GET, DELETE, PUT, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        response.headers['Access-Control-Allow-Credentials'] = 'true'
        return response

    return cors_middleware

def is_loopback(host):
    if host is None:
        return False
    try:
        if ipaddress.ip_address(host).is_loopback:
            return True
        else:
            return False
    except:
        pass

    loopback = False
    for family in (socket.AF_INET, socket.AF_INET6):
        try:
            r = socket.getaddrinfo(host, None, family, socket.SOCK_STREAM)
            for family, _, _, _, sockaddr in r:
                if not ipaddress.ip_address(sockaddr[0]).is_loopback:
                    return loopback
                else:
                    loopback = True
        except socket.gaierror:
            pass

    return loopback


def create_origin_only_middleware():
    @web.middleware
    async def origin_only_middleware(request: web.Request, handler):
        #this code is used to prevent the case where a random website can queue comfy workflows by making a POST to 127.0.0.1 which browsers don't prevent for some dumb reason.
        #in that case the Host and Origin hostnames won't match
        #I know the proper fix would be to add a cookie but this should take care of the problem in the meantime
        if 'Host' in request.headers and 'Origin' in request.headers:
            host = request.headers['Host']
            origin = request.headers['Origin']
            host_domain = host.lower()
            parsed = urllib.parse.urlparse(origin)
            origin_domain = parsed.netloc.lower()
            host_domain_parsed = urllib.parse.urlsplit('//' + host_domain)

            #limit the check to when the host domain is localhost, this makes it slightly less safe but should still prevent the exploit
            loopback = is_loopback(host_domain_parsed.hostname)

            if parsed.port is None: #if origin doesn't have a port strip it from the host to handle weird browsers, same for host
                host_domain = host_domain_parsed.hostname
            if host_domain_parsed.port is None:
                origin_domain = parsed.hostname

            if loopback and host_domain is not None and origin_domain is not None and len(host_domain) > 0 and len(origin_domain) > 0:
                if host_domain != origin_domain:
                    logging.warning("WARNING: request with non matching host and origin {} != {}, returning 403".format(host_domain, origin_domain))
                    return web.Response(status=403)

        if request.method == "OPTIONS":
            response = web.Response()
        else:
            response = await handler(request)

        return response

    return origin_only_middleware

class PromptServer():
    def __init__(self, loop):
        PromptServer.instance = self

        mimetypes.init()
        mimetypes.add_type('application/javascript; charset=utf-8', '.js')
        mimetypes.add_type('image/webp', '.webp')

        self.user_manager = UserManager()
        self.model_file_manager = ModelFileManager()
        self.custom_node_manager = CustomNodeManager()
        self.internal_routes = InternalRoutes(self)
        self.supports = ["custom_nodes_from_web"]
        self.prompt_queue = None
        self.loop = loop
        self.messages = asyncio.Queue()
        self.client_session:Optional[aiohttp.ClientSession] = None
        self.number = 0

        middlewares = [cache_control]
        if args.enable_compress_response_body:
            middlewares.append(compress_body)

        if args.enable_cors_header:
            middlewares.append(create_cors_middleware(args.enable_cors_header))
        else:
            middlewares.append(create_origin_only_middleware())

        max_upload_size = round(args.max_upload_size * 1024 * 1024)
        self.app = web.Application(client_max_size=max_upload_size, middlewares=middlewares)
        self.sockets = dict()
        
        # Explicitly specify the web root directory
        custom_web_root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "web")
        
        # Check if custom web directory exists
        if os.path.exists(custom_web_root):
            self.web_root = custom_web_root
            logging.info(f"[Prompt Server] Using custom web root: {self.web_root}")
        else:
            self.web_root = (
                FrontendManager.init_frontend(args.front_end_version)
                if args.front_end_root is None
                else args.front_end_root
            )
            logging.info(f"[Prompt Server] Using default web root: {self.web_root}")
        
        logging.info(f"[Prompt Server] web root: {self.web_root}")
        routes = web.RouteTableDef()
        self.routes = routes
        self.last_node_id = None
        self.client_id = None

        self.on_prompt_handlers = []

        # Dictionary to store conversation history
        conversation_history = {}

        @routes.get('/ws')
        async def websocket_handler(request):
            ws = web.WebSocketResponse()
            await ws.prepare(request)
            sid = request.rel_url.query.get('clientId', '')
            if sid:
                # Reusing existing session, remove old
                self.sockets.pop(sid, None)
            else:
                sid = uuid.uuid4().hex

            self.sockets[sid] = ws

            try:
                # Send initial state to the new client
                await self.send("status", { "status": self.get_queue_info(), 'sid': sid }, sid)
                # On reconnect if we are the currently executing client send the current node
                if self.client_id == sid and self.last_node_id is not None:
                    await self.send("executing", { "node": self.last_node_id }, sid)

                async for msg in ws:
                    if msg.type == aiohttp.WSMsgType.ERROR:
                        logging.warning('ws connection closed with exception %s' % ws.exception())
            finally:
                self.sockets.pop(sid, None)
            return ws

        @routes.get("/")
        async def get_root(request):
            response = web.FileResponse(os.path.join(self.web_root, "index.html"))
            response.headers['Cache-Control'] = 'no-cache'
            response.headers["Pragma"] = "no-cache"
            response.headers["Expires"] = "0"
            return response

        @routes.get("/embeddings")
        def get_embeddings(self):
            embeddings = folder_paths.get_filename_list("embeddings")
            return web.json_response(list(map(lambda a: os.path.splitext(a)[0], embeddings)))

        @routes.get("/models")
        def list_model_types(request):
            model_types = list(folder_paths.folder_names_and_paths.keys())

            return web.json_response(model_types)

        @routes.get("/models/{folder}")
        async def get_models(request):
            folder = request.match_info.get("folder", None)
            if not folder in folder_paths.folder_names_and_paths:
                return web.Response(status=404)
            files = folder_paths.get_filename_list(folder)
            return web.json_response(files)

        @routes.get("/extensions")
        async def get_extensions(request):
            files = glob.glob(os.path.join(
                glob.escape(self.web_root), 'extensions/**/*.js'), recursive=True)

            extensions = list(map(lambda f: "/" + os.path.relpath(f, self.web_root).replace("\\", "/"), files))

            for name, dir in nodes.EXTENSION_WEB_DIRS.items():
                files = glob.glob(os.path.join(glob.escape(dir), '**/*.js'), recursive=True)
                extensions.extend(list(map(lambda f: "/extensions/" + urllib.parse.quote(
                    name) + "/" + os.path.relpath(f, dir).replace("\\", "/"), files)))

            return web.json_response(extensions)

        def get_dir_by_type(dir_type):
            if dir_type is None:
                dir_type = "input"

            if dir_type == "input":
                type_dir = folder_paths.get_input_directory()
            elif dir_type == "temp":
                type_dir = folder_paths.get_temp_directory()
            elif dir_type == "output":
                type_dir = folder_paths.get_output_directory()

            return type_dir, dir_type

        def compare_image_hash(filepath, image):
            hasher = node_helpers.hasher()

            # function to compare hashes of two images to see if it already exists, fix to #3465
            if os.path.exists(filepath):
                a = hasher()
                b = hasher()
                with open(filepath, "rb") as f:
                    a.update(f.read())
                    b.update(image.file.read())
                    image.file.seek(0)
                    f.close()
                return a.hexdigest() == b.hexdigest()
            return False

        def image_upload(post, image_save_function=None):
            image = post.get("image")
            overwrite = post.get("overwrite")
            image_is_duplicate = False

            image_upload_type = post.get("type")
            upload_dir, image_upload_type = get_dir_by_type(image_upload_type)

            if image and image.file:
                filename = image.filename
                if not filename:
                    return web.Response(status=400)

                subfolder = post.get("subfolder", "")
                full_output_folder = os.path.join(upload_dir, os.path.normpath(subfolder))
                filepath = os.path.abspath(os.path.join(full_output_folder, filename))

                if os.path.commonpath((upload_dir, filepath)) != upload_dir:
                    return web.Response(status=400)

                if not os.path.exists(full_output_folder):
                    os.makedirs(full_output_folder)

                split = os.path.splitext(filename)

                if overwrite is not None and (overwrite == "true" or overwrite == "1"):
                    pass
                else:
                    i = 1
                    while os.path.exists(filepath):
                        if compare_image_hash(filepath, image): #compare hash to prevent saving of duplicates with same name, fix for #3465
                            image_is_duplicate = True
                            break
                        filename = f"{split[0]} ({i}){split[1]}"
                        filepath = os.path.join(full_output_folder, filename)
                        i += 1

                if not image_is_duplicate:
                    if image_save_function is not None:
                        image_save_function(image, post, filepath)
                    else:
                        with open(filepath, "wb") as f:
                            f.write(image.file.read())

                return web.json_response({"name" : filename, "subfolder": subfolder, "type": image_upload_type})
            else:
                return web.Response(status=400)

        @routes.post("/upload/image")
        async def upload_image(request):
            post = await request.post()
            return image_upload(post)


        @routes.post("/upload/mask")
        async def upload_mask(request):
            post = await request.post()

            def image_save_function(image, post, filepath):
                original_ref = json.loads(post.get("original_ref"))
                filename, output_dir = folder_paths.annotated_filepath(original_ref['filename'])

                if not filename:
                    return web.Response(status=400)

                # validation for security: prevent accessing arbitrary path
                if filename[0] == '/' or '..' in filename:
                    return web.Response(status=400)

                if output_dir is None:
                    type = original_ref.get("type", "output")
                    output_dir = folder_paths.get_directory_by_type(type)

                if output_dir is None:
                    return web.Response(status=400)

                if original_ref.get("subfolder", "") != "":
                    full_output_dir = os.path.join(output_dir, original_ref["subfolder"])
                    if os.path.commonpath((os.path.abspath(full_output_dir), output_dir)) != output_dir:
                        return web.Response(status=403)
                    output_dir = full_output_dir

                file = os.path.join(output_dir, filename)

                if os.path.isfile(file):
                    with Image.open(file) as original_pil:
                        metadata = PngInfo()
                        if hasattr(original_pil,'text'):
                            for key in original_pil.text:
                                metadata.add_text(key, original_pil.text[key])
                        original_pil = original_pil.convert('RGBA')
                        mask_pil = Image.open(image.file).convert('RGBA')

                        # alpha copy
                        new_alpha = mask_pil.getchannel('A')
                        original_pil.putalpha(new_alpha)
                        original_pil.save(filepath, compress_level=4, pnginfo=metadata)

            return image_upload(post, image_save_function)

        @routes.get("/view")
        async def view_image(request):
            if "filename" in request.rel_url.query:
                filename = request.rel_url.query["filename"]
                filename,output_dir = folder_paths.annotated_filepath(filename)

                if not filename:
                    return web.Response(status=400)

                # validation for security: prevent accessing arbitrary path
                if filename[0] == '/' or '..' in filename:
                    return web.Response(status=400)

                if output_dir is None:
                    type = request.rel_url.query.get("type", "output")
                    output_dir = folder_paths.get_directory_by_type(type)

                if output_dir is None:
                    return web.Response(status=400)

                if "subfolder" in request.rel_url.query:
                    full_output_dir = os.path.join(output_dir, request.rel_url.query["subfolder"])
                    if os.path.commonpath((os.path.abspath(full_output_dir), output_dir)) != output_dir:
                        return web.Response(status=403)
                    output_dir = full_output_dir

                filename = os.path.basename(filename)
                file = os.path.join(output_dir, filename)

                if os.path.isfile(file):
                    if 'preview' in request.rel_url.query:
                        with Image.open(file) as img:
                            preview_info = request.rel_url.query['preview'].split(';')
                            image_format = preview_info[0]
                            if image_format not in ['webp', 'jpeg'] or 'a' in request.rel_url.query.get('channel', ''):
                                image_format = 'webp'

                            quality = 90
                            if preview_info[-1].isdigit():
                                quality = int(preview_info[-1])

                            buffer = BytesIO()
                            if image_format in ['jpeg'] or request.rel_url.query.get('channel', '') == 'rgb':
                                img = img.convert("RGB")
                            img.save(buffer, format=image_format, quality=quality)
                            buffer.seek(0)

                            return web.Response(body=buffer.read(), content_type=f'image/{image_format}',
                                                headers={"Content-Disposition": f"filename=\"{filename}\""})

                    if 'channel' not in request.rel_url.query:
                        channel = 'rgba'
                    else:
                        channel = request.rel_url.query["channel"]

                    if channel == 'rgb':
                        with Image.open(file) as img:
                            if img.mode == "RGBA":
                                r, g, b, a = img.split()
                                new_img = Image.merge('RGB', (r, g, b))
                            else:
                                new_img = img.convert("RGB")

                            buffer = BytesIO()
                            new_img.save(buffer, format='PNG')
                            buffer.seek(0)

                            return web.Response(body=buffer.read(), content_type='image/png',
                                                headers={"Content-Disposition": f"filename=\"{filename}\""})

                    elif channel == 'a':
                        with Image.open(file) as img:
                            if img.mode == "RGBA":
                                _, _, _, a = img.split()
                            else:
                                a = Image.new('L', img.size, 255)

                            # alpha img
                            alpha_img = Image.new('RGBA', img.size)
                            alpha_img.putalpha(a)
                            alpha_buffer = BytesIO()
                            alpha_img.save(alpha_buffer, format='PNG')
                            alpha_buffer.seek(0)

                            return web.Response(body=alpha_buffer.read(), content_type='image/png',
                                                headers={"Content-Disposition": f"filename=\"{filename}\""})
                    else:
                        # Get content type from mimetype, defaulting to 'application/octet-stream'
                        content_type = mimetypes.guess_type(filename)[0] or 'application/octet-stream'

                        # For security, force certain extensions to download instead of display
                        file_extension = os.path.splitext(filename)[1].lower()
                        if file_extension in {'.html', '.htm', '.js', '.css'}:
                            content_type = 'application/octet-stream'  # Forces download

                        return web.FileResponse(
                            file,
                            headers={
                                "Content-Disposition": f"filename=\"{filename}\"",
                                "Content-Type": content_type
                            }
                        )

            return web.Response(status=404)

        @routes.get("/view_metadata/{folder_name}")
        async def view_metadata(request):
            folder_name = request.match_info.get("folder_name", None)
            if folder_name is None:
                return web.Response(status=404)
            if not "filename" in request.rel_url.query:
                return web.Response(status=404)

            filename = request.rel_url.query["filename"]
            if not filename.endswith(".safetensors"):
                return web.Response(status=404)

            safetensors_path = folder_paths.get_full_path(folder_name, filename)
            if safetensors_path is None:
                return web.Response(status=404)
            out = comfy.utils.safetensors_header(safetensors_path, max_size=1024*1024)
            if out is None:
                return web.Response(status=404)
            dt = json.loads(out)
            if not "__metadata__" in dt:
                return web.Response(status=404)
            return web.json_response(dt["__metadata__"])

        @routes.get("/system_stats")
        async def system_stats(request):
            device = comfy.model_management.get_torch_device()
            device_name = comfy.model_management.get_torch_device_name(device)
            cpu_device = comfy.model_management.torch.device("cpu")
            ram_total = comfy.model_management.get_total_memory(cpu_device)
            ram_free = comfy.model_management.get_free_memory(cpu_device)
            vram_total, torch_vram_total = comfy.model_management.get_total_memory(device, torch_total_too=True)
            vram_free, torch_vram_free = comfy.model_management.get_free_memory(device, torch_free_too=True)

            system_stats = {
                "system": {
                    "os": os.name,
                    "ram_total": ram_total,
                    "ram_free": ram_free,
                    "comfyui_version": __version__,
                    "python_version": sys.version,
                    "pytorch_version": comfy.model_management.torch_version,
                    "embedded_python": os.path.split(os.path.split(sys.executable)[0])[1] == "python_embeded",
                    "argv": sys.argv
                },
                "devices": [
                    {
                        "name": device_name,
                        "type": device.type,
                        "index": device.index,
                        "vram_total": vram_total,
                        "vram_free": vram_free,
                        "torch_vram_total": torch_vram_total,
                        "torch_vram_free": torch_vram_free,
                    }
                ]
            }
            return web.json_response(system_stats)

        @routes.get("/prompt")
        async def get_prompt(request):
            return web.json_response(self.get_queue_info())

        def node_info(node_class):
            obj_class = nodes.NODE_CLASS_MAPPINGS[node_class]
            info = {}
            info['input'] = obj_class.INPUT_TYPES()
            info['input_order'] = {key: list(value.keys()) for (key, value) in obj_class.INPUT_TYPES().items()}
            info['output'] = obj_class.RETURN_TYPES
            info['output_is_list'] = obj_class.OUTPUT_IS_LIST if hasattr(obj_class, 'OUTPUT_IS_LIST') else [False] * len(obj_class.RETURN_TYPES)
            info['output_name'] = obj_class.RETURN_NAMES if hasattr(obj_class, 'RETURN_NAMES') else info['output']
            info['name'] = node_class
            info['display_name'] = nodes.NODE_DISPLAY_NAME_MAPPINGS[node_class] if node_class in nodes.NODE_DISPLAY_NAME_MAPPINGS.keys() else node_class
            info['description'] = obj_class.DESCRIPTION if hasattr(obj_class,'DESCRIPTION') else ''
            info['python_module'] = getattr(obj_class, "RELATIVE_PYTHON_MODULE", "nodes")
            info['category'] = 'sd'
            if hasattr(obj_class, 'OUTPUT_NODE') and obj_class.OUTPUT_NODE == True:
                info['output_node'] = True
            else:
                info['output_node'] = False

            if hasattr(obj_class, 'CATEGORY'):
                info['category'] = obj_class.CATEGORY

            if hasattr(obj_class, 'OUTPUT_TOOLTIPS'):
                info['output_tooltips'] = obj_class.OUTPUT_TOOLTIPS

            if getattr(obj_class, "DEPRECATED", False):
                info['deprecated'] = True
            if getattr(obj_class, "EXPERIMENTAL", False):
                info['experimental'] = True
            return info

        @routes.get("/object_info")
        async def get_object_info(request):
            with folder_paths.cache_helper:
                out = {}
                for x in nodes.NODE_CLASS_MAPPINGS:
                    try:
                        out[x] = node_info(x)
                    except Exception:
                        logging.error(f"[ERROR] An error occurred while retrieving information for the '{x}' node.")
                        logging.error(traceback.format_exc())
                return web.json_response(out)

        @routes.get("/object_info/{node_class}")
        async def get_object_info_node(request):
            node_class = request.match_info.get("node_class", None)
            out = {}
            if (node_class is not None) and (node_class in nodes.NODE_CLASS_MAPPINGS):
                out[node_class] = node_info(node_class)
            return web.json_response(out)

        @routes.get("/history")
        async def get_history(request):
            max_items = request.rel_url.query.get("max_items", None)
            if max_items is not None:
                max_items = int(max_items)
            return web.json_response(self.prompt_queue.get_history(max_items=max_items))

        @routes.get("/history/{prompt_id}")
        async def get_history_prompt_id(request):
            prompt_id = request.match_info.get("prompt_id", None)
            return web.json_response(self.prompt_queue.get_history(prompt_id=prompt_id))

        @routes.get("/queue")
        async def get_queue(request):
            queue_info = {}
            current_queue = self.prompt_queue.get_current_queue()
            queue_info['queue_running'] = current_queue[0]
            queue_info['queue_pending'] = current_queue[1]
            return web.json_response(queue_info)

        @routes.post("/prompt")
        async def post_prompt(request):
            logging.info("got prompt")
            json_data =  await request.json()
            json_data = self.trigger_on_prompt(json_data)

            if "number" in json_data:
                number = float(json_data['number'])
            else:
                number = self.number
                if "front" in json_data:
                    if json_data['front']:
                        number = -number

                self.number += 1

            if "prompt" in json_data:
                prompt = json_data["prompt"]
                valid = execution.validate_prompt(prompt)
                extra_data = {}
                if "extra_data" in json_data:
                    extra_data = json_data["extra_data"]

                if "client_id" in json_data:
                    extra_data["client_id"] = json_data["client_id"]
                if valid[0]:
                    prompt_id = str(uuid.uuid4())
                    outputs_to_execute = valid[2]
                    self.prompt_queue.put((number, prompt_id, prompt, extra_data, outputs_to_execute))
                    response = {"prompt_id": prompt_id, "number": number, "node_errors": valid[3]}
                    return web.json_response(response)
                else:
                    logging.warning("invalid prompt: {}".format(valid[1]))
                    return web.json_response({"error": valid[1], "node_errors": valid[3]}, status=400)
            else:
                return web.json_response({"error": "no prompt", "node_errors": []}, status=400)

        @routes.post("/queue")
        async def post_queue(request):
            json_data =  await request.json()
            if "clear" in json_data:
                if json_data["clear"]:
                    self.prompt_queue.wipe_queue()
            if "delete" in json_data:
                to_delete = json_data['delete']
                for id_to_delete in to_delete:
                    delete_func = lambda a: a[1] == id_to_delete
                    self.prompt_queue.delete_queue_item(delete_func)

            return web.Response(status=200)

        @routes.post("/interrupt")
        async def post_interrupt(request):
            nodes.interrupt_processing()
            return web.Response(status=200)

        @routes.post("/free")
        async def post_free(request):
            json_data = await request.json()
            unload_models = json_data.get("unload_models", False)
            free_memory = json_data.get("free_memory", False)
            if unload_models:
                self.prompt_queue.set_flag("unload_models", unload_models)
            if free_memory:
                self.prompt_queue.set_flag("free_memory", free_memory)
            return web.Response(status=200)

        @routes.post("/history")
        async def post_history(request):
            json_data = await request.json()
            if "clear" in json_data:
                if json_data["clear"]:
                    self.prompt_queue.wipe_history()
            if "delete" in json_data:
                to_delete = json_data['delete']
                for id_to_del in to_delete:
                    self.prompt_queue.delete_history(id_to_del)
            return web.Response(status=200)

        @routes.post("/api/aiagent")
        async def post_ai_agent(request):
            print("AI Agent API call received")
            try:
                import openai
                import os
                import json
                import requests
                from datetime import datetime
                
                json_data = await request.json()
                user_message = json_data.get("message", "")
                workflow_json = json_data.get("workflow", "{}")
                session_id = json_data.get("session_id", "default")  # Session ID to distinguish conversations
                
                # Initialize conversation history for each session
                if session_id not in conversation_history:
                    conversation_history[session_id] = []
                
                print(f"User message: {user_message}")
                
                # Save workflow JSON
                workflows_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "workflows")
                os.makedirs(workflows_dir, exist_ok=True)
                
                # Use session ID as file name to avoid creating too many files
                session_workflow_path = os.path.join(workflows_dir, f"workflow_{session_id}.json")
                
                try:
                    # Save the workflow to the session-specific file
                    with open(session_workflow_path, 'w', encoding='utf-8') as f:
                        json.dump(json.loads(workflow_json), f, indent=2, ensure_ascii=False)
                    print(f"Workflow saved: {session_workflow_path}")
                    
                    # Optional: Periodically clean up old workflow files
                    # This runs occasionally (1 in 10 chance) to avoid doing it on every request
                    if random.random() < 0.1:  # 10% chance to run cleanup
                        all_workflow_files = glob.glob(os.path.join(workflows_dir, "workflow_*.json"))
                        if len(all_workflow_files) > 100:  # Keep only 100 most recent files
                            all_workflow_files.sort(key=os.path.getmtime)
                            for old_file in all_workflow_files[:-100]:
                                try:
                                    os.remove(old_file)
                                    print(f"Cleaned up old workflow file: {old_file}")
                                except Exception as e:
                                    print(f"Error deleting old file: {str(e)}")
                except Exception as e:
                    print(f"Error while saving workflow: {str(e)}")
                
                # Carregar configurações da LLM
                api_key_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ai_agent_api.py")
                llm_provider = "openai"
                openai_api_key = ""
                local_llm_url = "http://127.0.0.1:11434/api/chat"
                local_llm_model = "gemma:4b"
                
                if os.path.exists(api_key_path):
                    try:
                        with open(api_key_path, 'r', encoding='utf-8') as file:
                            for line in file:
                                if line.startswith("OPENAI_API_KEY"):
                                    openai_api_key = line.split("=")[1].strip().strip("'").strip('"')
                                elif line.startswith("LOCAL_LLM_URL"):
                                    local_llm_url = line.split("=")[1].strip().strip("'").strip('"')
                                elif line.startswith("LOCAL_LLM_MODEL"):
                                    local_llm_model = line.split("=")[1].strip().strip("'").strip('"')
                                elif line.startswith("LLM_PROVIDER"):
                                    llm_provider = line.split("=")[1].strip().strip("'").strip('"')
                    except Exception as e:
                        print(f"Config reading error: {str(e)}")
                        return web.json_response({"error": "An error occurred while reading the LLM settings."})
                
                # System prompt in English instead of Portuguese
                system_prompt = """You are a ComfyUI expert. Analyze the provided JSON workflow and answer user questions.

Workflow Analysis Steps:
1. First, identify the IDs and types of each node in the "nodes" object.
   - KSampler node IDs
   - VAEDecode node IDs
   - CheckpointLoaderSimple node IDs (which has VAE output)

2. Carefully analyze the "links" array:
   - links format: [output_node_ID, output_slot, input_node_ID, input_slot]
   - Check if the VAE output from CheckpointLoaderSimple (slot 2) is connected to the vae input of VAEDecode
   - Check if all inputs of all nodes are connected

3. Check parameters for each node (important functions) (examples below):
   - KSampler node: steps (15~50 appropriate, 100+ inefficient, 1000+ very abnormal), cfg (7~12 appropriate, 20+ high), denoise (0.5~1.0 appropriate)
   - EmptyLatentImage node: width/height (512~1024 appropriate, 2048+ possible memory issues), batch_size (1~4 appropriate)
   - If you find abnormal parameter values, inform concisely (ex: "KSampler steps is set to 9999. 15~50 is recommended.")
   - Don't mention parameters within normal range.

Important Response Rules:
1. Be clear and concise.
2. Consider both the user's question and the workflow state.
3. Check the connection status of nodes in the workflow.
4. Identify and briefly point out connection errors.
5. If you find problems, suggest specific values for correction.
6. When you find incorrect settings or values, respond in the format "Value X is set to Y. Change it to Z."
7. If all settings are normal, respond only with "There are no issues with the current settings."
8. Ignore seed values of all nodes.
9. If the question is ambiguous, respond based on the current state, but mention that additional information would be helpful.
10. Provide detailed explanations if the user requests.
11. Don't judge the content of text prompts. Base your analysis only on the node connection structure and configuration states.
12. Respond in the same language as the user. For example, if the input is in English, respond in English; if it's in Portuguese, respond in Portuguese.

The ComfyUI workflow JSON consists of the following main sections:

1. Metadata:
   - "id": unique identifier for the workflow
   - "revision": workflow revision number
   - "last_node_id": last used node ID
   - "last_link_id": last used link ID
   - "version": JSON format version

2. Nodes ("nodes" array):
   Each node represents an individual component of the workflow and includes the following main fields:
   - "id": unique identifier for the node
   - "type": node type (ex: "KSampler", "CLIPTextEncode", "CheckpointLoaderSimple")
   - "pos": node position on canvas [x, y]
   - "size": node size [width, height]
   - "inputs": array of input connections
     - "localized_name": user-friendly input name
     - "name": internal input name
     - "type": input data type (ex: "MODEL", "CONDITIONING", "LATENT")
     - "link": connected link ID (null if no connection)
   - "outputs": array of output connections
     - "localized_name": user-friendly output name
     - "name": internal output name
     - "type": output data type
     - "links": array of connected link IDs (null if no connections)
   - "widgets_values": array of node configuration values, varies by node type
     - For KSampler: [seed, control_after_generate, steps, cfg, sampler_name, scheduler, denoise]
     - For CLIPTextEncode: [prompt text]
   - "properties": additional metadata about the node

3. Links ("links" array):
   Each link represents a connection between nodes and is an array in the format:
   [link_id, source_node_id, source_slot_index, target_node_id, target_slot_index, data_type]
   - link_id: unique identifier for the link
   - source_node_id: ID of the source node
   - source_slot_index: output slot index of the source node
   - target_node_id: ID of the target node
   - target_slot_index: input slot index of the target node
   - data_type: type of data being transmitted (ex: "MODEL", "CONDITIONING")

4. Additional data:
   - "groups": node group information (if any)
   - "config": workflow configuration
   - "extra": additional settings and metadata
"""
                
                # Add current workflow configuration to the prompt
                system_prompt = system_prompt + "\n\nCurrent workflow configuration:\n" + json.dumps(json.loads(workflow_json), indent=2, ensure_ascii=False)
                
                # Construct messages including conversation history
                messages = [{"role": "system", "content": system_prompt}]
                
                # Add previous conversation history (up to 5 messages)
                for msg in conversation_history[session_id][-5:]:
                    messages.append(msg)
                
                # Add current user message
                messages.append({"role": "user", "content": user_message})
                
                ai_response = ""
                
                try:
                    # Usar a OpenAI API ou LLM local conforme configurado
                    if llm_provider == "openai":
                        print("Calling OpenAI model")
                        if not openai_api_key:
                            return web.json_response({"error": "OpenAI API key is not configured. Please set it in the LLM options."})
                        
                        client = openai.OpenAI(api_key=openai_api_key)
                        response = client.chat.completions.create(
                            model="gpt-4o-mini",
                            messages=messages
                        )
                        
                        ai_response = response.choices[0].message.content
                    else:  # llm_provider == "local"
                        print(f"Calling local LLM at {local_llm_url}")
                        if not local_llm_url or not local_llm_model:
                            return web.json_response({"error": "The API URL or model of the local LLM is not configured. Please set them in the LLM options."})
                        
                        # Adaptar formato de mensagens se necessário para API local
                        # Formato Ollama
                        response = requests.post(
                            local_llm_url,
                            json={
                                "model": local_llm_model,
                                "messages": messages,
                                "stream": False
                            }
                        )
                        
                        if response.status_code == 200:
                            response_json = response.json()
                            # O formato de resposta varia entre APIs, ajuste conforme necessário
                            if "message" in response_json:
                                ai_response = response_json["message"]["content"]
                            elif "choices" in response_json:
                                ai_response = response_json["choices"][0]["message"]["content"]
                            else:
                                ai_response = response_json.get("response", "")
                        else:
                            error_msg = f"Error with local LLM API: {response.status_code} - {response.text}"
                            print(error_msg)
                            return web.json_response({"error": error_msg})
                    
                    # Save conversation history
                    conversation_history[session_id].append({"role": "user", "content": user_message})
                    conversation_history[session_id].append({"role": "assistant", "content": ai_response})
                    
                    print(f"AI response: {ai_response[:100]}...")
                    return web.json_response({"response": ai_response})
                    
                except Exception as e:
                    print(f"LLM API error: {str(e)}")
                    return web.json_response({"error": f"LLM API error: {str(e)}"})
                    
            except Exception as e:
                print(f"Error during processing: {str(e)}")
                return web.json_response({"error": f"Server error: {str(e)}"})

        @routes.get("/api/llm-config")
        async def get_llm_config(request):
            try:
                import os
                
                # Ler configurações do arquivo
                api_key_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ai_agent_api.py")
                
                llm_provider = "openai"
                openai_key = ""
                local_url = "http://127.0.0.1:11434/api/chat"
                local_model = "gemma:2b"
                
                if os.path.exists(api_key_path):
                    try:
                        with open(api_key_path, 'r', encoding='utf-8') as file:
                            for line in file:
                                if line.startswith("OPENAI_API_KEY"):
                                    openai_key = line.split("=")[1].strip().strip("'").strip('"')
                                elif line.startswith("LOCAL_LLM_URL"):
                                    local_url = line.split("=")[1].strip().strip("'").strip('"')
                                elif line.startswith("LOCAL_LLM_MODEL"):
                                    local_model = line.split("=")[1].strip().strip("'").strip('"')
                                elif line.startswith("LLM_PROVIDER"):
                                    llm_provider = line.split("=")[1].strip().strip("'").strip('"')
                    except Exception as e:
                        print(f"Config reading error: {str(e)}")
                        return web.json_response({"error": "An error occurred while reading the LLM settings."})
                
                # Por segurança, não enviamos a chave completa da API
                masked_key = ""
                if openai_key:
                    if len(openai_key) > 8:
                        masked_key = openai_key[:4] + "..." + openai_key[-4:]
                    else:
                        masked_key = "****"
                
                return web.json_response({
                    "provider": llm_provider,
                    "openaiKey": masked_key,
                    "localUrl": local_url,
                    "localModel": local_model
                })
                
            except Exception as e:
                print(f"Error during config retrieval: {str(e)}")
                return web.json_response({"error": f"Error retrieving configuration: {str(e)}"})

        @routes.post("/api/llm-config")
        async def post_llm_config(request):
            try:
                import os
                
                json_data = await request.json()
                provider = json_data.get("provider", "openai")
                openai_key = json_data.get("openaiKey", "")
                local_url = json_data.get("localUrl", "http://127.0.0.1:11434/api/chat")
                local_model = json_data.get("localModel", "gemma:2b")
                
                # Caminho do arquivo de configuração
                api_key_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ai_agent_api.py")
                
                # Ler o arquivo atual
                existing_config = []
                if os.path.exists(api_key_path):
                    with open(api_key_path, 'r', encoding='utf-8') as file:
                        existing_config = file.readlines()
                
                # Atualizar ou adicionar cada configuração
                updated_openai = False
                updated_local_url = False
                updated_local_model = False
                updated_provider = False
                
                for i, line in enumerate(existing_config):
                    if line.startswith("OPENAI_API_KEY") and openai_key:
                        existing_config[i] = f"OPENAI_API_KEY = '{openai_key}'\n"
                        updated_openai = True
                    elif line.startswith("LOCAL_LLM_URL"):
                        existing_config[i] = f"LOCAL_LLM_URL = '{local_url}'\n"
                        updated_local_url = True
                    elif line.startswith("LOCAL_LLM_MODEL"):
                        existing_config[i] = f"LOCAL_LLM_MODEL = '{local_model}'\n"
                        updated_local_model = True
                    elif line.startswith("LLM_PROVIDER"):
                        existing_config[i] = f"LLM_PROVIDER = '{provider}'\n"
                        updated_provider = True
                
                # Adicionar configurações ausentes
                if not updated_openai and openai_key:
                    existing_config.append(f"OPENAI_API_KEY = '{openai_key}'\n")
                if not updated_local_url:
                    existing_config.append(f"LOCAL_LLM_URL = '{local_url}'\n")
                if not updated_local_model:
                    existing_config.append(f"LOCAL_LLM_MODEL = '{local_model}'\n")
                if not updated_provider:
                    existing_config.append(f"LLM_PROVIDER = '{provider}'\n")
                
                # Escrever o arquivo atualizado
                with open(api_key_path, 'w', encoding='utf-8') as file:
                    file.writelines(existing_config)
                
                return web.json_response({"success": True})
                
            except Exception as e:
                print(f"Error updating config: {str(e)}")
                return web.json_response({"success": False, "error": str(e)})

    async def setup(self):
        timeout = aiohttp.ClientTimeout(total=None) # no timeout
        self.client_session = aiohttp.ClientSession(timeout=timeout)

    def add_routes(self):
        self.user_manager.add_routes(self.routes)
        self.model_file_manager.add_routes(self.routes)
        self.custom_node_manager.add_routes(self.routes, self.app, nodes.LOADED_MODULE_DIRS.items())
        self.app.add_subapp('/internal', self.internal_routes.get_app())

        # Prefix every route with /api for easier matching for delegation.
        # This is very useful for frontend dev server, which need to forward
        # everything except serving of static files.
        # Currently both the old endpoints without prefix and new endpoints with
        # prefix are supported.
        api_routes = web.RouteTableDef()
        for route in self.routes:
            # Custom nodes might add extra static routes. Only process non-static
            # routes to add /api prefix.
            if isinstance(route, web.RouteDef):
                api_routes.route(route.method, "/api" + route.path)(route.handler, **route.kwargs)
        self.app.add_routes(api_routes)
        self.app.add_routes(self.routes)

        # Add routes from web extensions.
        for name, dir in nodes.EXTENSION_WEB_DIRS.items():
            self.app.add_routes([web.static('/extensions/' + name, dir)])

        self.app.add_routes([
            web.static('/', self.web_root),
        ])

    def get_queue_info(self):
        prompt_info = {}
        exec_info = {}
        exec_info['queue_remaining'] = self.prompt_queue.get_tasks_remaining()
        prompt_info['exec_info'] = exec_info
        return prompt_info

    async def send(self, event, data, sid=None):
        if event == BinaryEventTypes.UNENCODED_PREVIEW_IMAGE:
            await self.send_image(data, sid=sid)
        elif isinstance(data, (bytes, bytearray)):
            await self.send_bytes(event, data, sid)
        else:
            await self.send_json(event, data, sid)

    def encode_bytes(self, event, data):
        if not isinstance(event, int):
            raise RuntimeError(f"Binary event types must be integers, got {event}")

        packed = struct.pack(">I", event)
        message = bytearray(packed)
        message.extend(data)
        return message

    async def send_image(self, image_data, sid=None):
        image_type = image_data[0]
        image = image_data[1]
        max_size = image_data[2]
        if max_size is not None:
            if hasattr(Image, 'Resampling'):
                resampling = Image.Resampling.BILINEAR
            else:
                resampling = Image.ANTIALIAS

            image = ImageOps.contain(image, (max_size, max_size), resampling)
        type_num = 1
        if image_type == "JPEG":
            type_num = 1
        elif image_type == "PNG":
            type_num = 2

        bytesIO = BytesIO()
        header = struct.pack(">I", type_num)
        bytesIO.write(header)
        image.save(bytesIO, format=image_type, quality=95, compress_level=1)
        preview_bytes = bytesIO.getvalue()
        await self.send_bytes(BinaryEventTypes.PREVIEW_IMAGE, preview_bytes, sid=sid)

    async def send_bytes(self, event, data, sid=None):
        message = self.encode_bytes(event, data)

        if sid is None:
            sockets = list(self.sockets.values())
            for ws in sockets:
                await send_socket_catch_exception(ws.send_bytes, message)
        elif sid in self.sockets:
            await send_socket_catch_exception(self.sockets[sid].send_bytes, message)

    async def send_json(self, event, data, sid=None):
        message = {"type": event, "data": data}

        if sid is None:
            sockets = list(self.sockets.values())
            for ws in sockets:
                await send_socket_catch_exception(ws.send_json, message)
        elif sid in self.sockets:
            await send_socket_catch_exception(self.sockets[sid].send_json, message)

    def send_sync(self, event, data, sid=None):
        self.loop.call_soon_threadsafe(
            self.messages.put_nowait, (event, data, sid))

    def queue_updated(self):
        self.send_sync("status", { "status": self.get_queue_info() })

    async def publish_loop(self):
        while True:
            msg = await self.messages.get()
            await self.send(*msg)

    async def start(self, address, port, verbose=True, call_on_start=None):
        await self.start_multi_address([(address, port)], call_on_start=call_on_start)

    async def start_multi_address(self, addresses, call_on_start=None, verbose=True):
        runner = web.AppRunner(self.app, access_log=None)
        await runner.setup()
        ssl_ctx = None
        scheme = "http"
        if args.tls_keyfile and args.tls_certfile:
                ssl_ctx = ssl.SSLContext(protocol=ssl.PROTOCOL_TLS_SERVER, verify_mode=ssl.CERT_NONE)
                ssl_ctx.load_cert_chain(certfile=args.tls_certfile,
                                keyfile=args.tls_keyfile)
                scheme = "https"

        if verbose:
            logging.info("Starting server\n")
        for addr in addresses:
            address = addr[0]
            port = addr[1]
            site = web.TCPSite(runner, address, port, ssl_context=ssl_ctx)
            await site.start()

            if not hasattr(self, 'address'):
                self.address = address #TODO: remove this
                self.port = port

            if ':' in address:
                address_print = "[{}]".format(address)
            else:
                address_print = address

            if verbose:
                logging.info("To see the GUI go to: {}://{}:{}".format(scheme, address_print, port))

        if call_on_start is not None:
            call_on_start(scheme, self.address, self.port)

    def add_on_prompt_handler(self, handler):
        self.on_prompt_handlers.append(handler)

    def trigger_on_prompt(self, json_data):
        for handler in self.on_prompt_handlers:
            try:
                json_data = handler(json_data)
            except Exception:
                logging.warning("[ERROR] An error occurred during the on_prompt_handler processing")
                logging.warning(traceback.format_exc())

        return json_data
