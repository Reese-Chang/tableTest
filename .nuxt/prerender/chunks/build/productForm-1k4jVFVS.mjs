import { ref, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, unref, useSSRContext } from 'file:///Users/reese/20250601Table/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Users/reese/20250601Table/node_modules/vue/server-renderer/index.mjs';

const allProduct = /* @__PURE__ */ JSON.parse('[{"id":"P001","name":"\u7121\u7DDA\u6ED1\u9F20","category":"\u96FB\u8166\u5468\u908A","price":4175,"cost":2852,"quantity":84,"stockIn":285,"sold":201,"status":"active"},{"id":"P002","name":"\u6A5F\u68B0\u5F0F\u9375\u76E4","category":"\u96FB\u8166\u5468\u908A","price":4682,"cost":1336,"quantity":74,"stockIn":148,"sold":74,"status":"active"},{"id":"P003","name":"\u85CD\u7259\u5587\u53ED","category":"\u884C\u52D5\u88DD\u7F6E","price":1836,"cost":899,"quantity":132,"stockIn":278,"sold":146,"status":"active"},{"id":"P004","name":"USB-C \u5145\u96FB\u7DDA","category":"\u914D\u4EF6","price":553,"cost":37,"quantity":148,"stockIn":268,"sold":120,"status":"inactive"},{"id":"P005","name":"\u884C\u52D5\u96FB\u6E90 10000mAh","category":"\u884C\u52D5\u88DD\u7F6E","price":4017,"cost":3252,"quantity":119,"stockIn":171,"sold":52,"status":"active"},{"id":"P006","name":"27 \u540B\u87A2\u5E55","category":"\u8FA6\u516C\u7528\u54C1","price":4190,"cost":144,"quantity":13,"stockIn":75,"sold":62,"status":"active"},{"id":"P007","name":"\u7B46\u96FB\u652F\u67B6","category":"\u97F3\u97FF\u8A2D\u5099","price":899,"cost":270,"quantity":0,"stockIn":82,"sold":82,"status":"inactive"},{"id":"P008","name":"USB HUB","category":"\u97F3\u97FF\u8A2D\u5099","price":1497,"cost":144,"quantity":127,"stockIn":150,"sold":23,"status":"active"},{"id":"P009","name":"\u7121\u7DDA\u8033\u6A5F","category":"\u97F3\u97FF\u8A2D\u5099","price":4822,"cost":3308,"quantity":160,"stockIn":231,"sold":71,"status":"inactive"},{"id":"P010","name":"\u9375\u76E4\u6E05\u6F54\u7D44","category":"\u8FA6\u516C\u7528\u54C1","price":3922,"cost":2743,"quantity":63,"stockIn":197,"sold":134,"status":"active"},{"id":"P011","name":"\u96A8\u8EAB\u789F 64GB","category":"\u914D\u4EF6","price":2090,"cost":1517,"quantity":136,"stockIn":263,"sold":127,"status":"active"},{"id":"P012","name":"\u5916\u63A5\u786C\u789F 1TB","category":"\u96FB\u8166\u5468\u908A","price":3054,"cost":3043,"quantity":77,"stockIn":198,"sold":121,"status":"inactive"},{"id":"P013","name":"\u76E3\u8996\u651D\u5F71\u6A5F","category":"\u884C\u52D5\u88DD\u7F6E","price":4486,"cost":2420,"quantity":190,"stockIn":243,"sold":53,"status":"active"},{"id":"P014","name":"\u624B\u6A5F\u4E09\u8173\u67B6","category":"\u914D\u4EF6","price":2080,"cost":1451,"quantity":170,"stockIn":253,"sold":83,"status":"inactive"},{"id":"P015","name":"\u8ECA\u7528\u5145\u96FB\u5668","category":"\u914D\u4EF6","price":2042,"cost":882,"quantity":123,"stockIn":263,"sold":140,"status":"active"},{"id":"P016","name":"HDMI \u50B3\u8F38\u7DDA","category":"\u914D\u4EF6","price":687,"cost":145,"quantity":157,"stockIn":298,"sold":141,"status":"active"},{"id":"P017","name":"\u7121\u7DDA\u6295\u5F71\u5668","category":"\u96FB\u8166\u5468\u908A","price":3370,"cost":2881,"quantity":109,"stockIn":265,"sold":156,"status":"inactive"},{"id":"P018","name":"\u85CD\u5149\u5149\u789F\u6A5F","category":"\u96FB\u8166\u5468\u908A","price":2532,"cost":1213,"quantity":31,"stockIn":141,"sold":110,"status":"active"},{"id":"P019","name":"\u5145\u96FB\u5EA7","category":"\u884C\u52D5\u88DD\u7F6E","price":2709,"cost":1702,"quantity":45,"stockIn":178,"sold":133,"status":"active"},{"id":"P020","name":"\u8033\u9EA5\u7D44","category":"\u97F3\u97FF\u8A2D\u5099","price":4744,"cost":3787,"quantity":127,"stockIn":215,"sold":88,"status":"inactive"},{"id":"P021","name":"USB\u98A8\u6247","category":"\u8FA6\u516C\u7528\u54C1","price":3217,"cost":2955,"quantity":158,"stockIn":286,"sold":128,"status":"active"},{"id":"P022","name":"Type-C\u8F49\u63A5\u982D","category":"\u914D\u4EF6","price":2184,"cost":2032,"quantity":113,"stockIn":236,"sold":123,"status":"active"},{"id":"P023","name":"\u7121\u7DDA\u7C21\u5831\u5668","category":"\u8FA6\u516C\u7528\u54C1","price":4237,"cost":3736,"quantity":41,"stockIn":170,"sold":129,"status":"active"},{"id":"P024","name":"\u96FB\u7AF6\u6ED1\u9F20\u588A","category":"\u96FB\u8166\u5468\u908A","price":2777,"cost":1190,"quantity":30,"stockIn":156,"sold":126,"status":"inactive"},{"id":"P025","name":"\u624B\u6A5F\u51B7\u537B\u5668","category":"\u884C\u52D5\u88DD\u7F6E","price":1488,"cost":914,"quantity":97,"stockIn":143,"sold":46,"status":"active"},{"id":"P026","name":"\u96FB\u6E90\u4F9B\u61C9\u5668","category":"\u96FB\u8166\u5468\u908A","price":3856,"cost":3044,"quantity":28,"stockIn":104,"sold":76,"status":"active"},{"id":"P027","name":"\u4E3B\u6A5F\u677F","category":"\u96FB\u8166\u5468\u908A","price":4763,"cost":3320,"quantity":61,"stockIn":173,"sold":112,"status":"inactive"},{"id":"P028","name":"CPU \u6563\u71B1\u5668","category":"\u96FB\u8166\u5468\u908A","price":3533,"cost":2333,"quantity":140,"stockIn":273,"sold":133,"status":"active"},{"id":"P029","name":"\u986F\u793A\u5361\u652F\u67B6","category":"\u96FB\u8166\u5468\u908A","price":1288,"cost":736,"quantity":66,"stockIn":127,"sold":61,"status":"active"},{"id":"P030","name":"\u56FA\u614B\u786C\u789F 512GB","category":"\u96FB\u8166\u5468\u908A","price":3268,"cost":2699,"quantity":93,"stockIn":243,"sold":150,"status":"active"},{"id":"P031","name":"\u97F3\u6548\u5361","category":"\u97F3\u97FF\u8A2D\u5099","price":2399,"cost":1825,"quantity":19,"stockIn":81,"sold":62,"status":"inactive"},{"id":"P032","name":"\u7121\u7DDA\u5206\u4EAB\u5668","category":"\u884C\u52D5\u88DD\u7F6E","price":3156,"cost":2440,"quantity":121,"stockIn":276,"sold":155,"status":"active"},{"id":"P033","name":"\u7DB2\u8DEF\u7DDA 10m","category":"\u914D\u4EF6","price":811,"cost":409,"quantity":200,"stockIn":250,"sold":50,"status":"active"},{"id":"P034","name":"NAS \u5132\u5B58\u88DD\u7F6E","category":"\u96FB\u8166\u5468\u908A","price":4980,"cost":3900,"quantity":12,"stockIn":98,"sold":86,"status":"inactive"},{"id":"P035","name":"UPS \u4E0D\u65B7\u96FB\u7CFB\u7D71","category":"\u96FB\u8166\u5468\u908A","price":4788,"cost":3980,"quantity":95,"stockIn":200,"sold":105,"status":"active"},{"id":"P036","name":"USB\u71C8\u689D","category":"\u914D\u4EF6","price":356,"cost":200,"quantity":148,"stockIn":260,"sold":112,"status":"inactive"},{"id":"P037","name":"\u591A\u529F\u80FD\u8F49\u63A5\u982D","category":"\u914D\u4EF6","price":799,"cost":453,"quantity":180,"stockIn":220,"sold":40,"status":"active"},{"id":"P038","name":"\u884C\u52D5\u96FB\u6E90\u5FEB\u5145\u7DDA","category":"\u914D\u4EF6","price":688,"cost":320,"quantity":123,"stockIn":198,"sold":75,"status":"active"},{"id":"P039","name":"\u78C1\u5438\u5145\u96FB\u7DDA","category":"\u914D\u4EF6","price":599,"cost":259,"quantity":89,"stockIn":150,"sold":61,"status":"inactive"},{"id":"P040","name":"\u7B46\u8A18\u578B\u96FB\u8166","category":"\u884C\u52D5\u88DD\u7F6E","price":47888,"cost":36888,"quantity":8,"stockIn":28,"sold":20,"status":"active"},{"id":"P041","name":"\u684C\u6A5F\u4E3B\u6A5F","category":"\u96FB\u8166\u5468\u908A","price":35800,"cost":28900,"quantity":14,"stockIn":40,"sold":26,"status":"active"},{"id":"P042","name":"\u5DE5\u4F5C\u7AD9\u96FB\u8166","category":"\u96FB\u8166\u5468\u908A","price":68900,"cost":52800,"quantity":10,"stockIn":25,"sold":15,"status":"active"},{"id":"P043","name":"\u96FB\u7AF6\u8033\u6A5F","category":"\u97F3\u97FF\u8A2D\u5099","price":3588,"cost":2480,"quantity":82,"stockIn":120,"sold":38,"status":"active"},{"id":"P044","name":"\u9AD8\u6548\u80FD\u6ED1\u9F20","category":"\u96FB\u8166\u5468\u908A","price":2688,"cost":1888,"quantity":101,"stockIn":199,"sold":98,"status":"inactive"},{"id":"P045","name":"\u7B46\u96FB\u5305","category":"\u884C\u52D5\u88DD\u7F6E","price":899,"cost":599,"quantity":134,"stockIn":180,"sold":46,"status":"active"},{"id":"P046","name":"\u87A2\u5E55\u639B\u71C8","category":"\u8FA6\u516C\u7528\u54C1","price":1499,"cost":899,"quantity":90,"stockIn":120,"sold":30,"status":"active"},{"id":"P047","name":"Webcam","category":"\u97F3\u97FF\u8A2D\u5099","price":2490,"cost":1890,"quantity":42,"stockIn":100,"sold":58,"status":"inactive"},{"id":"P048","name":"\u904A\u6232\u63A7\u5236\u5668","category":"\u96FB\u8166\u5468\u908A","price":2590,"cost":1990,"quantity":27,"stockIn":87,"sold":60,"status":"active"},{"id":"P049","name":"\u85CD\u7259\u63A5\u6536\u5668","category":"\u914D\u4EF6","price":490,"cost":280,"quantity":183,"stockIn":200,"sold":17,"status":"active"},{"id":"P050","name":"\u651D\u5F71\u88DC\u5149\u71C8","category":"\u8FA6\u516C\u7528\u54C1","price":1890,"cost":1350,"quantity":120,"stockIn":200,"sold":80,"status":"active"}]');
const _sfc_main = {
  __name: "productForm",
  __ssrInlineRender: true,
  setup(__props) {
    const showProduct = ref(allProduct.slice(0, 15));
    function toCurrency(val) {
      if (!val) return "0";
      return "$" + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function grossProfit(price, cost, num) {
      if (num) {
        return toCurrency((price - cost) * num);
      } else {
        return toCurrency(price - cost);
      }
    }
    function handleCurrentChange(val) {
      if (val == 1) {
        showProduct.value = allProduct.slice(0, 15);
      } else {
        showProduct.value = allProduct.slice((val - 1) * 15, val * 15);
      }
    }
    function tag(val) {
      if (val == "active") {
        return "\u8CA9\u552E\u4E2D";
      } else {
        return "\u505C\u8CE3";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_table = resolveComponent("el-table");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_tag = resolveComponent("el-tag");
      const _component_el_pagination = resolveComponent("el-pagination");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "max-height": "100vh", "overflow": "hidden" } }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_table, {
        class: "tableBox",
        ref: "multipleTable",
        data: showProduct.value,
        "tooltip-effect": "dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              type: "index",
              width: "50"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              type: "selection",
              width: "30"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              type: "expand",
              width: "10"
            }, {
              default: withCtx((props, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form, {
                    "label-position": "left",
                    inline: "",
                    class: "detailBox"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><span${_scopeId3}>${ssrInterpolate(props.row.category)}</span><span${_scopeId3}>\u7522\u54C1\uFF1A${ssrInterpolate(props.row.name)}</span><span${_scopeId3}>\u6DE8\u984D\uFF1A${ssrInterpolate(grossProfit(props.row.price, props.row.cost, props.row.sold))}</span><span${_scopeId3}>${ssrInterpolate(tag(props.row.status))}</span></div><div${_scopeId3}><span${_scopeId3}>\u6210\u672C\uFF1A${ssrInterpolate(toCurrency(props.row.cost))}</span><span${_scopeId3}>\u552E\u50F9\uFF1A${ssrInterpolate(toCurrency(props.row.price))}</span><span${_scopeId3}>\u6BDB\u5229\uFF1A${ssrInterpolate(grossProfit(props.row.price, props.row.cost))}</span></div><div${_scopeId3}><span${_scopeId3}>\u9032\u8CA8\u6578\u91CF\uFF1A${ssrInterpolate(props.row.stockIn)}</span><span${_scopeId3}>\u92B7\u552E\u6578\u91CF\uFF1A${ssrInterpolate(props.row.sold)}</span><span${_scopeId3}>\u5269\u9918\u5EAB\u5B58\uFF1A${ssrInterpolate(props.row.quantity)}</span></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("span", null, toDisplayString(props.row.category), 1),
                            createVNode("span", null, "\u7522\u54C1\uFF1A" + toDisplayString(props.row.name), 1),
                            createVNode("span", null, "\u6DE8\u984D\uFF1A" + toDisplayString(grossProfit(props.row.price, props.row.cost, props.row.sold)), 1),
                            createVNode("span", null, toDisplayString(tag(props.row.status)), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("span", null, "\u6210\u672C\uFF1A" + toDisplayString(toCurrency(props.row.cost)), 1),
                            createVNode("span", null, "\u552E\u50F9\uFF1A" + toDisplayString(toCurrency(props.row.price)), 1),
                            createVNode("span", null, "\u6BDB\u5229\uFF1A" + toDisplayString(grossProfit(props.row.price, props.row.cost)), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("span", null, "\u9032\u8CA8\u6578\u91CF\uFF1A" + toDisplayString(props.row.stockIn), 1),
                            createVNode("span", null, "\u92B7\u552E\u6578\u91CF\uFF1A" + toDisplayString(props.row.sold), 1),
                            createVNode("span", null, "\u5269\u9918\u5EAB\u5B58\uFF1A" + toDisplayString(props.row.quantity), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form, {
                      "label-position": "left",
                      inline: "",
                      class: "detailBox"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("span", null, toDisplayString(props.row.category), 1),
                          createVNode("span", null, "\u7522\u54C1\uFF1A" + toDisplayString(props.row.name), 1),
                          createVNode("span", null, "\u6DE8\u984D\uFF1A" + toDisplayString(grossProfit(props.row.price, props.row.cost, props.row.sold)), 1),
                          createVNode("span", null, toDisplayString(tag(props.row.status)), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("span", null, "\u6210\u672C\uFF1A" + toDisplayString(toCurrency(props.row.cost)), 1),
                          createVNode("span", null, "\u552E\u50F9\uFF1A" + toDisplayString(toCurrency(props.row.price)), 1),
                          createVNode("span", null, "\u6BDB\u5229\uFF1A" + toDisplayString(grossProfit(props.row.price, props.row.cost)), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("span", null, "\u9032\u8CA8\u6578\u91CF\uFF1A" + toDisplayString(props.row.stockIn), 1),
                          createVNode("span", null, "\u92B7\u552E\u6578\u91CF\uFF1A" + toDisplayString(props.row.sold), 1),
                          createVNode("span", null, "\u5269\u9918\u5EAB\u5B58\uFF1A" + toDisplayString(props.row.quantity), 1)
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "name",
              label: "\u7522\u54C1",
              width: "220"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "category",
              label: "\u985E\u5225",
              width: "220"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "price",
              label: "\u552E\u50F9",
              width: "120",
              sortable: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "sold",
              label: "\u92B7\u552E\u6578\u91CF",
              width: "120",
              sortable: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "quantity",
              label: "\u5EAB\u5B58",
              width: "120",
              sortable: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              prop: "status",
              label: "\u72C0\u614B",
              width: "120",
              sortable: ""
            }, {
              default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (scope.row.status == "active") {
                    _push3(ssrRenderComponent(_component_el_tag, { type: "success" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(tag(scope.row.status))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(tag(scope.row.status)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_el_tag, { type: "danger" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(tag(scope.row.status))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(tag(scope.row.status)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    scope.row.status == "active" ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      type: "success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tag(scope.row.status)), 1)
                      ]),
                      _: 2
                    }, 1024)) : (openBlock(), createBlock(_component_el_tag, {
                      key: 1,
                      type: "danger"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tag(scope.row.status)), 1)
                      ]),
                      _: 2
                    }, 1024))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                type: "index",
                width: "50"
              }),
              createVNode(_component_el_table_column, {
                type: "selection",
                width: "30"
              }),
              createVNode(_component_el_table_column, {
                type: "expand",
                width: "10"
              }, {
                default: withCtx((props) => [
                  createVNode(_component_el_form, {
                    "label-position": "left",
                    inline: "",
                    class: "detailBox"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("span", null, toDisplayString(props.row.category), 1),
                        createVNode("span", null, "\u7522\u54C1\uFF1A" + toDisplayString(props.row.name), 1),
                        createVNode("span", null, "\u6DE8\u984D\uFF1A" + toDisplayString(grossProfit(props.row.price, props.row.cost, props.row.sold)), 1),
                        createVNode("span", null, toDisplayString(tag(props.row.status)), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("span", null, "\u6210\u672C\uFF1A" + toDisplayString(toCurrency(props.row.cost)), 1),
                        createVNode("span", null, "\u552E\u50F9\uFF1A" + toDisplayString(toCurrency(props.row.price)), 1),
                        createVNode("span", null, "\u6BDB\u5229\uFF1A" + toDisplayString(grossProfit(props.row.price, props.row.cost)), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("span", null, "\u9032\u8CA8\u6578\u91CF\uFF1A" + toDisplayString(props.row.stockIn), 1),
                        createVNode("span", null, "\u92B7\u552E\u6578\u91CF\uFF1A" + toDisplayString(props.row.sold), 1),
                        createVNode("span", null, "\u5269\u9918\u5EAB\u5B58\uFF1A" + toDisplayString(props.row.quantity), 1)
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                prop: "name",
                label: "\u7522\u54C1",
                width: "220"
              }),
              createVNode(_component_el_table_column, {
                prop: "category",
                label: "\u985E\u5225",
                width: "220"
              }),
              createVNode(_component_el_table_column, {
                prop: "price",
                label: "\u552E\u50F9",
                width: "120",
                sortable: ""
              }),
              createVNode(_component_el_table_column, {
                prop: "sold",
                label: "\u92B7\u552E\u6578\u91CF",
                width: "120",
                sortable: ""
              }),
              createVNode(_component_el_table_column, {
                prop: "quantity",
                label: "\u5EAB\u5B58",
                width: "120",
                sortable: ""
              }),
              createVNode(_component_el_table_column, {
                prop: "status",
                label: "\u72C0\u614B",
                width: "120",
                sortable: ""
              }, {
                default: withCtx((scope) => [
                  scope.row.status == "active" ? (openBlock(), createBlock(_component_el_tag, {
                    key: 0,
                    type: "success"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tag(scope.row.status)), 1)
                    ]),
                    _: 2
                  }, 1024)) : (openBlock(), createBlock(_component_el_tag, {
                    key: 1,
                    type: "danger"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tag(scope.row.status)), 1)
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>\u6E2C\u8A66123</div><div class="pageNumBox">`);
      _push(ssrRenderComponent(_component_el_pagination, {
        layout: "prev, pager, next",
        "page-size": 15,
        total: unref(allProduct).length,
        onCurrentChange: handleCurrentChange
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/productForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=productForm-1k4jVFVS.mjs.map
