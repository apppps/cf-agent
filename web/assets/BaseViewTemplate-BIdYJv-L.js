import { d as defineComponent, K as ref, p as onMounted, bp as isElectron, a0 as nextTick, bq as electronAPI, o as openBlock, f as createElementBlock, i as withDirectives, v as vShow, j as unref, br as isNativeWindow, m as createBaseVNode, A as renderSlot, a5 as normalizeClass } from "./index-Hblmz8kc.js";
const _hoisted_1 = { class: "flex-grow w-full flex items-center justify-center overflow-auto" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseViewTemplate",
  props: {
    dark: { type: Boolean, default: false }
  },
  setup(__props) {
    const darkTheme = {
      color: "rgba(0, 0, 0, 0)",
      symbolColor: "#d4d4d4"
    };
    const lightTheme = {
      color: "rgba(0, 0, 0, 0)",
      symbolColor: "#171717"
    };
    const topMenuRef = ref(null);
    onMounted(async () => {
      if (isElectron()) {
        await nextTick();
        electronAPI().changeTheme({
          ...__props.dark ? darkTheme : lightTheme,
          height: topMenuRef.value?.getBoundingClientRect().height ?? 0
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["font-sans w-screen h-screen flex flex-col", [
          _ctx.dark ? "text-neutral-300 bg-neutral-900 dark-theme" : "text-neutral-900 bg-neutral-300"
        ]])
      }, [
        withDirectives(createBaseVNode("div", {
          ref_key: "topMenuRef",
          ref: topMenuRef,
          class: "app-drag w-full h-[var(--comfy-topbar-height)]"
        }, null, 512), [
          [vShow, unref(isNativeWindow)()]
        ]),
        createBaseVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=BaseViewTemplate-BIdYJv-L.js.map
