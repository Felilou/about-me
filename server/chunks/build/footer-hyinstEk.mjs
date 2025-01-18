import { defineComponent, toRef, computed, useSSRContext, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, resolveComponent, createTextVNode } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { m as mergeConfig, d as appConfig, e as useUI, _ as _export_sfc, g as __nuxt_component_0$1, f as __nuxt_component_0$2$1 } from './server.mjs';
import { ssrRenderVNode, ssrRenderSlot, ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { b as _sfc_main$1$1, a as __nuxt_component_0$2, _ as _sfc_main$5 } from './ContactCard-aPiNlTRd.mjs';

const container = {
  base: "mx-auto",
  padding: "px-4 sm:px-6 lg:px-8",
  constrained: "max-w-7xl"
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.container, container);
const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("container", toRef(props, "ui"), config);
    const containerClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.padding,
        ui.value.constrained
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      containerClass
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ class: _ctx.containerClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Container.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_UCard = __nuxt_component_0$2$1;
  const _component_LanguageBox = _sfc_main$5;
  const _component_Strong = resolveComponent("Strong");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-3" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_UCard, null, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_LanguageBox, { "language-prop": "at" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Anreise `);
            } else {
              return [
                createTextVNode(" Anreise ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LanguageBox, { "language-prop": "ee" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Aadress `);
            } else {
              return [
                createTextVNode(" Aadress ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LanguageBox, { "language-prop": "ru" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0410\u0434\u0440\u0435c `);
            } else {
              return [
                createTextVNode(" \u0410\u0434\u0440\u0435c ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LanguageBox, { "language-prop": "en" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Address `);
            } else {
              return [
                createTextVNode(" Address ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_LanguageBox, { "language-prop": "at" }, {
            default: withCtx(() => [
              createTextVNode(" Anreise ")
            ]),
            _: 1
          }),
          createVNode(_component_LanguageBox, { "language-prop": "ee" }, {
            default: withCtx(() => [
              createTextVNode(" Aadress ")
            ]),
            _: 1
          }),
          createVNode(_component_LanguageBox, { "language-prop": "ru" }, {
            default: withCtx(() => [
              createTextVNode(" \u0410\u0434\u0440\u0435c ")
            ]),
            _: 1
          }),
          createVNode(_component_LanguageBox, { "language-prop": "en" }, {
            default: withCtx(() => [
              createTextVNode(" Address ")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>`);
        _push2(ssrRenderComponent(_component_LanguageBox, { "language-prop": "at" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Ordination DDr. Klaus Kotschy und Dr. Ali Al-Samarrae Goldeggasse 2/4, 1040 Wien `);
            } else {
              return [
                createTextVNode(" Ordination DDr. Klaus Kotschy und Dr. Ali Al-Samarrae Goldeggasse 2/4, 1040 Wien ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LanguageBox, { "language-prop": "ee" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Ordination DDr. Klaus Kotschy ja Dr. Ali Al-Samarrae, Goldeggasse 2/4, 1040 Viin `);
            } else {
              return [
                createTextVNode(" Ordination DDr. Klaus Kotschy ja Dr. Ali Al-Samarrae, Goldeggasse 2/4, 1040 Viin ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LanguageBox, { "language-prop": "ru" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Ordination DDr. Klaus \u0438 Dr. Ali Al-Samarrae, Goldeggasse 2/4, 1040 Wien `);
            } else {
              return [
                createTextVNode(" Ordination DDr. Klaus \u0438 Dr. Ali Al-Samarrae, Goldeggasse 2/4, 1040 Wien ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LanguageBox, { "language-prop": "en" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Ordination DDr. Klaus Kotschy and Dr. Ali Al-Samarrae, Goldeggasse 2/4, 1040 Vienna `);
            } else {
              return [
                createTextVNode(" Ordination DDr. Klaus Kotschy and Dr. Ali Al-Samarrae, Goldeggasse 2/4, 1040 Vienna ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p><p class="m-0"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_LanguageBox, { "language-prop": "at" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Strong, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`ANREISE:`);
                  } else {
                    return [
                      createTextVNode("ANREISE:")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(` Unsere Ordination liegt in unmittelbarer N\xE4he zum Wiener Hauptbahnhof sowie Schloss Belvedere. Sie erreichen uns bequem mit der U1, den Strassenbahnlinien D / O / 18, den S-Bahn Linien S1/2/3/4, S80 sowie mit Regional- und Fernz\xFCgen. `);
            } else {
              return [
                createVNode(_component_Strong, null, {
                  default: withCtx(() => [
                    createTextVNode("ANREISE:")
                  ]),
                  _: 1
                }),
                createTextVNode(" Unsere Ordination liegt in unmittelbarer N\xE4he zum Wiener Hauptbahnhof sowie Schloss Belvedere. Sie erreichen uns bequem mit der U1, den Strassenbahnlinien D / O / 18, den S-Bahn Linien S1/2/3/4, S80 sowie mit Regional- und Fernz\xFCgen. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LanguageBox, { "language-prop": "ee" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Strong, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Kohalej\xF5udmine:`);
                  } else {
                    return [
                      createTextVNode("Kohalej\xF5udmine:")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(` Meie praksis asub Viini pearaudteejaama ja Belvedere lossi vahetus l\xE4heduses. Meieni saab mugavalt metrooliiniga U1, trammiliinidega D / O / 18, linnal\xE4hirongidega S1/2/3/4, S80 ning ka maakonna - ja kaugliinide rongidega. `);
            } else {
              return [
                createVNode(_component_Strong, null, {
                  default: withCtx(() => [
                    createTextVNode("Kohalej\xF5udmine:")
                  ]),
                  _: 1
                }),
                createTextVNode(" Meie praksis asub Viini pearaudteejaama ja Belvedere lossi vahetus l\xE4heduses. Meieni saab mugavalt metrooliiniga U1, trammiliinidega D / O / 18, linnal\xE4hirongidega S1/2/3/4, S80 ning ka maakonna - ja kaugliinide rongidega. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LanguageBox, { "language-prop": "ru" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Strong, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u041A\u0430\u043A \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F:`);
                  } else {
                    return [
                      createTextVNode("\u041A\u0430\u043A \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F:")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(` \u041D\u0430\u0448\u0430 \u043E\u0440\u0434\u0438\u043D\u0430\u0446\u0438\u044F \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0431\u043B\u0438\u0437\u043E\u0441\u0442\u0438 \u043E\u0442 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0432\u043E\u043A\u0437\u0430\u043B\u0430 \u0412\u0435\u043D\u044B \u0438 \u0434\u0432\u043E\u0440\u0446\u0430 \u0411\u0435\u043B\u044C\u0432\u0435\u0434\u0435\u0440. \u0414\u043E \u043D\u0430\u0441 \u043B\u0435\u0433\u043A\u043E \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u0435\u0442\u0440\u043E \u043B\u0438\u043D\u0438\u0438 U1, \u0442\u0440\u0430\u043C\u0432\u0430\u0439\u043D\u044B\u0445 \u043B\u0438\u043D\u0438\u044F\u0445 D / O / 18, \u043F\u0440\u0438\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0445 \u043F\u043E\u0435\u0437\u0434\u0430\u0445 S1/2/3/4, S80, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0430 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u043C\u0435\u0436\u0434\u0443\u0433\u043E\u0440\u043E\u0434\u043D\u0438\u0445 \u043F\u043E\u0435\u0437\u0434\u0430\u0445. `);
            } else {
              return [
                createVNode(_component_Strong, null, {
                  default: withCtx(() => [
                    createTextVNode("\u041A\u0430\u043A \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F:")
                  ]),
                  _: 1
                }),
                createTextVNode(" \u041D\u0430\u0448\u0430 \u043E\u0440\u0434\u0438\u043D\u0430\u0446\u0438\u044F \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0431\u043B\u0438\u0437\u043E\u0441\u0442\u0438 \u043E\u0442 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0432\u043E\u043A\u0437\u0430\u043B\u0430 \u0412\u0435\u043D\u044B \u0438 \u0434\u0432\u043E\u0440\u0446\u0430 \u0411\u0435\u043B\u044C\u0432\u0435\u0434\u0435\u0440. \u0414\u043E \u043D\u0430\u0441 \u043B\u0435\u0433\u043A\u043E \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u0435\u0442\u0440\u043E \u043B\u0438\u043D\u0438\u0438 U1, \u0442\u0440\u0430\u043C\u0432\u0430\u0439\u043D\u044B\u0445 \u043B\u0438\u043D\u0438\u044F\u0445 D / O / 18, \u043F\u0440\u0438\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0445 \u043F\u043E\u0435\u0437\u0434\u0430\u0445 S1/2/3/4, S80, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0430 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u043C\u0435\u0436\u0434\u0443\u0433\u043E\u0440\u043E\u0434\u043D\u0438\u0445 \u043F\u043E\u0435\u0437\u0434\u0430\u0445. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LanguageBox, { "language-prop": "en" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Strong, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`How to get there:`);
                  } else {
                    return [
                      createTextVNode("How to get there:")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(` Our practice is located in close proximity to Vienna Central Station and Belvedere Palace. You can easily reach us by metro line U1, tram lines D / O / 18, suburban train lines S1/2/3/4, S80, as well as regional and long-distance trains. `);
            } else {
              return [
                createVNode(_component_Strong, null, {
                  default: withCtx(() => [
                    createTextVNode("How to get there:")
                  ]),
                  _: 1
                }),
                createTextVNode(" Our practice is located in close proximity to Vienna Central Station and Belvedere Palace. You can easily reach us by metro line U1, tram lines D / O / 18, suburban train lines S1/2/3/4, S80, as well as regional and long-distance trains. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode(_component_LanguageBox, { "language-prop": "at" }, {
              default: withCtx(() => [
                createTextVNode(" Ordination DDr. Klaus Kotschy und Dr. Ali Al-Samarrae Goldeggasse 2/4, 1040 Wien ")
              ]),
              _: 1
            }),
            createVNode(_component_LanguageBox, { "language-prop": "ee" }, {
              default: withCtx(() => [
                createTextVNode(" Ordination DDr. Klaus Kotschy ja Dr. Ali Al-Samarrae, Goldeggasse 2/4, 1040 Viin ")
              ]),
              _: 1
            }),
            createVNode(_component_LanguageBox, { "language-prop": "ru" }, {
              default: withCtx(() => [
                createTextVNode(" Ordination DDr. Klaus \u0438 Dr. Ali Al-Samarrae, Goldeggasse 2/4, 1040 Wien ")
              ]),
              _: 1
            }),
            createVNode(_component_LanguageBox, { "language-prop": "en" }, {
              default: withCtx(() => [
                createTextVNode(" Ordination DDr. Klaus Kotschy and Dr. Ali Al-Samarrae, Goldeggasse 2/4, 1040 Vienna ")
              ]),
              _: 1
            })
          ]),
          createVNode("p", { class: "m-0" }, [
            createVNode(_component_LanguageBox, { "language-prop": "at" }, {
              default: withCtx(() => [
                createVNode(_component_Strong, null, {
                  default: withCtx(() => [
                    createTextVNode("ANREISE:")
                  ]),
                  _: 1
                }),
                createTextVNode(" Unsere Ordination liegt in unmittelbarer N\xE4he zum Wiener Hauptbahnhof sowie Schloss Belvedere. Sie erreichen uns bequem mit der U1, den Strassenbahnlinien D / O / 18, den S-Bahn Linien S1/2/3/4, S80 sowie mit Regional- und Fernz\xFCgen. ")
              ]),
              _: 1
            }),
            createVNode(_component_LanguageBox, { "language-prop": "ee" }, {
              default: withCtx(() => [
                createVNode(_component_Strong, null, {
                  default: withCtx(() => [
                    createTextVNode("Kohalej\xF5udmine:")
                  ]),
                  _: 1
                }),
                createTextVNode(" Meie praksis asub Viini pearaudteejaama ja Belvedere lossi vahetus l\xE4heduses. Meieni saab mugavalt metrooliiniga U1, trammiliinidega D / O / 18, linnal\xE4hirongidega S1/2/3/4, S80 ning ka maakonna - ja kaugliinide rongidega. ")
              ]),
              _: 1
            }),
            createVNode(_component_LanguageBox, { "language-prop": "ru" }, {
              default: withCtx(() => [
                createVNode(_component_Strong, null, {
                  default: withCtx(() => [
                    createTextVNode("\u041A\u0430\u043A \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F:")
                  ]),
                  _: 1
                }),
                createTextVNode(" \u041D\u0430\u0448\u0430 \u043E\u0440\u0434\u0438\u043D\u0430\u0446\u0438\u044F \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0431\u043B\u0438\u0437\u043E\u0441\u0442\u0438 \u043E\u0442 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0432\u043E\u043A\u0437\u0430\u043B\u0430 \u0412\u0435\u043D\u044B \u0438 \u0434\u0432\u043E\u0440\u0446\u0430 \u0411\u0435\u043B\u044C\u0432\u0435\u0434\u0435\u0440. \u0414\u043E \u043D\u0430\u0441 \u043B\u0435\u0433\u043A\u043E \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u0435\u0442\u0440\u043E \u043B\u0438\u043D\u0438\u0438 U1, \u0442\u0440\u0430\u043C\u0432\u0430\u0439\u043D\u044B\u0445 \u043B\u0438\u043D\u0438\u044F\u0445 D / O / 18, \u043F\u0440\u0438\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0445 \u043F\u043E\u0435\u0437\u0434\u0430\u0445 S1/2/3/4, S80, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0430 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u043C\u0435\u0436\u0434\u0443\u0433\u043E\u0440\u043E\u0434\u043D\u0438\u0445 \u043F\u043E\u0435\u0437\u0434\u0430\u0445. ")
              ]),
              _: 1
            }),
            createVNode(_component_LanguageBox, { "language-prop": "en" }, {
              default: withCtx(() => [
                createVNode(_component_Strong, null, {
                  default: withCtx(() => [
                    createTextVNode("How to get there:")
                  ]),
                  _: 1
                }),
                createTextVNode(" Our practice is located in close proximity to Vienna Central Station and Belvedere Palace. You can easily reach us by metro line U1, tram lines D / O / 18, suburban train lines S1/2/3/4, S80, as well as regional and long-distance trains. ")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/wayCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UDivider = __nuxt_component_0$1;
  const _component_OpenTimesTable = _sfc_main$1$1;
  const _component_ContactCard = __nuxt_component_0$2;
  const _component_WayCard = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col bg-white w-[100%] py-2" }, _attrs))} data-v-726b1d07>`);
  _push(ssrRenderComponent(_component_UDivider, { icon: "i-heroicons-information-circle-solid" }, null, _parent));
  _push(`<div class="flex m-0 flex-col lg:flex-row justify-between" data-v-726b1d07><div class="p-1 lg:w-[50%]" data-v-726b1d07>`);
  _push(ssrRenderComponent(_component_OpenTimesTable, null, null, _parent));
  _push(`</div><div class="p-1 lg:w-[50%]" data-v-726b1d07>`);
  _push(ssrRenderComponent(_component_ContactCard, null, null, _parent));
  _push(ssrRenderComponent(_component_WayCard, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-726b1d07"]]);

export { __nuxt_component_0 as _, __nuxt_component_3 as a };
//# sourceMappingURL=footer-hyinstEk.mjs.map
