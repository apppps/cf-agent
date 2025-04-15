1. Introduce Comfyui-agent.

- With the AI agent included in ComfyUI, it can be a great help for those who are just starting out or are beginners.

- For basic information about ComfyUI, please refer to: https://github.com/comfyanonymous/ComfyUI.

- It reflects the BASE flow nodes in real time and can be directly supervised by the AI.

- It is very informative and comfortable for beginners, and it can answer the explanation of various settings immediately.

- The agent can judge the settings and recommend prompts, connection status, and various numbers.

- It detects flows in real time, so you can immediately identify problems with complex node connections.

- you needs chatgpt api and gpt-4o-mini system defaults. 



2. Architecture & Setup

comfy-agent strucure very easy.

  easy work flow
       
  user prompt -> workflow.json -> session.json -> AI (inc. chat gpt system prompt) -> user.

- First, enter the ChatGPT API in ai_agent_api.py.

- When the Send button is clicked, the user's workflow file [workflow.json] is copied to [session.json]. (This creates a workflow session file inside the ComfyUI-workflow folder.)

- Next, the session.json file is included in the ChatGPT system prompt and sent.

- default system prompt can be modified in the server.py file.

- The user receives a response from AI.




3. additional

- Connecting to a local LLM or other LLMs is not yet supported.
  This version is an early release and is currently connected to GPT.
  The reason is that, so far, GPT has shown the best understanding of ComfyUI JSON files.

- Sometimes it fails to accurately interpret the JSON.
  This is presumed to be a limitation of the GPT-4o-mini's performance.

- It will gradually be updated, and others may contribute to its development as well.
  comfyui-agent will continue to improve.

  Thank you.
  감사합니다.



4. ScreenShot.

![Image](https://github.com/user-attachments/assets/3c169391-330a-4d7d-8d6c-e483df179a8a)
![Image](https://github.com/user-attachments/assets/98492901-6bf7-44be-83e3-572e378979df)
![Image](https://github.com/user-attachments/assets/a3b0d0a9-cb5a-43fb-9509-cae706e4cf58)
