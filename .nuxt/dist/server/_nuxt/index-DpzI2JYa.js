import { ssrRenderAttrs } from "vue/server-renderer";
import { n as navigateTo } from "../server.mjs";
import { useSSRContext } from "vue";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/reese/20250601Table/node_modules/hookable/dist/index.mjs";
import "/Users/reese/20250601Table/node_modules/unctx/dist/index.mjs";
import "/Users/reese/20250601Table/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/reese/20250601Table/node_modules/radix3/dist/index.mjs";
import "/Users/reese/20250601Table/node_modules/defu/dist/defu.mjs";
import "/Users/reese/20250601Table/node_modules/ufo/dist/index.mjs";
import "element-plus";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    navigateTo("/productForm");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DpzI2JYa.js.map
