import { a as __nuxt_component_0, b as _sfc_main$1 } from './ContactCard-aPiNlTRd.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'tailwind-merge';
import '@vueuse/core';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContactCard = __nuxt_component_0;
  const _component_OpenTimesTable = _sfc_main$1;
  _push(`<!--[--><div class="fixed-bg fixed w-screen h-screen -z-10 bg-[url(&#39;https://raw.githubusercontent.com/Felilou/about-me/refs/heads/build/img/20240916-GZ1A8344.jpg&#39;)]" data-v-d37b362c></div><div class="flex pt-[15vh] flex-col items-center mb-[15vh] mx-auto md:w-[50vw]" data-v-d37b362c>`);
  _push(ssrRenderComponent(_component_ContactCard, { class: "w-full mb-5" }, null, _parent));
  _push(ssrRenderComponent(_component_OpenTimesTable, { class: "w-full" }, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d37b362c"]]);

export { contact as default };
//# sourceMappingURL=contact-Dr7GC59p.mjs.map
