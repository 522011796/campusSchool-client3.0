exports.ids = [27];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _utils_api_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      testLogin: '',
      value: '',
      testDefault: '',
      navHeight: 0,
      globalAppShow: '',
      isAndroid: false,
      isIos: false
    };
  },

  mounted() {
    this.getUrl();
    this.initBridage();
  },

  created() {},

  methods: {
    getUrl() {
      this.loginUserAppType = this.$route.query.userType;
      this.navHeight = this.$route.query.navH ? this.$route.query.navH : 0;
      this.globalAppShow = this.$route.query.appType;
    },

    returnGlobalMain(value) {
      let _self = this;

      if (this.globalAppShow == 'android') {
        this.setupWebViewJavascriptBridge(function (bridge) {
          //JS 调用 OC 的方法，方法名就是 OC 中提前注册的方法
          bridge.callHandler('returnGlobalMain', {
            'key': value
          }, function responseCallback(responseData) {});
        });
      }

      if (this.globalAppShow == 'ios') {
        this.setupWebViewJavascriptBridge(function (bridge) {
          //JS 调用 OC 的方法，方法名就是 OC 中提前注册的方法
          bridge.callHandler('returnGlobalMain', {
            'key': value
          }, function responseCallback(responseData) {});
        });
      }
    },

    setupWebViewJavascriptBridge(callback) {
      let _self = this; //Android使用


      if (this.globalAppShow == 'android') {
        if (window.WebViewJavascriptBridge) {
          callback(window.WebViewJavascriptBridge);
        } else {
          document.addEventListener('WebViewJavascriptBridgeReady', () => {
            callback(window.WebViewJavascriptBridge);
          }, false);
        }
      } else if (this.globalAppShow == 'ios') {
        if (window.WebViewJavascriptBridge) {
          return callback(WebViewJavascriptBridge);
        }

        if (window.WVJBCallbacks) {
          return window.WVJBCallbacks.push(callback);
        }

        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__'; //WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';

        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function () {
          document.documentElement.removeChild(WVJBIframe);
        }, 0);
      }
    },

    initBridage() {
      let _self = this;

      try {
        this.setupWebViewJavascriptBridge(function (bridge) {
          if (_self.globalAppShow == 'android') {
            //初始化
            bridge.init((message, responseCallback) => {
              var data = {
                'Javascript Responds': 'Wee!'
              };
              responseCallback(data);
            });
          }
        });
      } catch (e) {}
    }

  }
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MySex.vue?vue&type=template&id=516185f2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',_vm._b({},'span',_vm.selectModel,false),[_vm._ssrNode(((_vm.tag == 'text')?(((_vm.sex == 1)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('男')))+"</label>"):"<!---->")+" "+((_vm.sex == 2)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('女')))+"</label>"):"<!---->")+" "+((_vm.sex == 3)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('未知')))+"</label>"):"<!---->")):"<!---->")+" "),(_vm.tag == 'tag')?[(_vm.sex == 1)?_c('el-tag',{attrs:{"size":_vm.size,"type":_vm.type,"effect":_vm.effect}},[_vm._v(_vm._s(_vm.$t('男')))]):_vm._e(),_vm._ssrNode(" "),(_vm.sex == 2)?_c('el-tag',{attrs:{"size":_vm.size,"type":_vm.type,"effect":_vm.effect}},[_vm._v(_vm._s(_vm.$t('女')))]):_vm._e(),_vm._ssrNode(" "),(_vm.sex == 3)?_c('el-tag',{attrs:{"size":_vm.size,"type":_vm.type,"effect":_vm.effect}},[_vm._v(_vm._s(_vm.$t('未知')))]):_vm._e()]:_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MySex.vue?vue&type=template&id=516185f2&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MySex.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MySexvue_type_script_lang_js_ = ({
  name: 'mySex',
  props: {
    sex: {
      default: 0,
      type: [String, Number]
    },
    tag: {
      default: 'tag',
      validate: function (val) {
        return Object(utils["f" /* oneOf */])(val, ['tag', 'text']);
      }
    },
    size: {
      defalult: 'medium',
      validate: function (val) {
        return Object(utils["f" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
      }
    },
    size: {
      defalult: 'medium',
      validate: function (val) {
        return Object(utils["f" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
      }
    },
    type: {
      defalult: '',
      validate: function (val) {
        return Object(utils["f" /* oneOf */])(val, ['success', 'info', 'warning', 'danger']);
      }
    },
    effect: {
      defalult: 'light',
      validate: function (val) {
        return Object(utils["f" /* oneOf */])(val, ['dark', 'light', 'plain']);
      }
    }
  },
  computed: {
    selectModel() {
      this.value = this.selValue;
    }

  },

  data() {
    return {
      value: ''
    };
  },

  methods: {}
});
// CONCATENATED MODULE: ./components/MySex.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MySexvue_type_script_lang_js_ = (MySexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MySex.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MySexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e4beec0"
  
)

/* harmony default export */ var MySex = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("34273fa4", content, true, context)
};

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailIndex_vue_vue_type_style_index_0_id_971f7c9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailIndex_vue_vue_type_style_index_0_id_971f7c9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailIndex_vue_vue_type_style_index_0_id_971f7c9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailIndex_vue_vue_type_style_index_0_id_971f7c9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailIndex_vue_vue_type_style_index_0_id_971f7c9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailIndex_vue_vue_type_style_index_0_id_971f7c9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-971f7c9a]{height:60px;line-height:60px;width:100%}.content-block[data-v-971f7c9a]{border-top-left-radius:0;border-top-right-radius:0;background:#fff;width:100%;position:relative}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/studentDetail/detailIndex.vue?vue&type=template&id=971f7c9a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-971f7c9a></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block color-white",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-971f7c9a>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"6"}},[_c('div',{staticClass:"text-left padding-lr-10"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n              "+_vm._s(_vm.$t("返回"))+"\n            ")])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-center"},[_c('span',{staticClass:"font-bold"},[_vm._v(_vm._s(_vm.$t("扫一扫")))])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"6"}},[_vm._v("\n           \n")])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"margin-top:0px;\" data-v-971f7c9a>","</div>",[_vm._ssrNode("<div class=\"content-block\" data-v-971f7c9a>","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle({"border":"1px solid #dddddd","border-radius":"5px","box-shadow":"0px 0px 3px 3px #dddddd","margin":"10px","padding":"0px 0px 10px 0px"},_vm.divHeight14, null))+" data-v-971f7c9a>","</div>",[_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-971f7c9a>","</div>",[_vm._ssrNode("<div class=\"text-center\" data-v-971f7c9a>","</div>",[_c('van-image',{attrs:{"round":"","width":"100px","height":"100px","src":_vm.detailData.photo_simple}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-971f7c9a>","</div>",[_vm._ssrNode("<table class=\"custom-table\" data-v-971f7c9a>","</table>",[_vm._ssrNode("<tbody data-v-971f7c9a>","</tbody>",[_vm._ssrNode("<tr data-v-971f7c9a>","</tr>",[_vm._ssrNode("<td style=\"width: 15%\" data-v-971f7c9a>"+_vm._ssrEscape(_vm._s(_vm.$t("姓名")))+"</td> "),_vm._ssrNode("<td style=\"width: 35%\" data-v-971f7c9a>","</td>",[_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.detailData.real_name))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",staticStyle:{"width":"110px"},attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(_vm.detailData.real_name)+"\n                      ")])])],1),_vm._ssrNode(" <td style=\"width: 15%\" data-v-971f7c9a>"+_vm._ssrEscape(_vm._s(_vm.$t("性别")))+"</td> "),_vm._ssrNode("<td class=\" text-center\" style=\"width: 35%\" data-v-971f7c9a>","</td>",[_c('my-sex',{attrs:{"sex":_vm.detailData.sex,"tag":"text"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<tr data-v-971f7c9a>","</tr>",[_vm._ssrNode("<td style=\"width: 15%\" data-v-971f7c9a>"+_vm._ssrEscape(_vm._s(_vm.$t("录取号")))+"</td> "),_vm._ssrNode("<td style=\"width: 35%\" data-v-971f7c9a>","</td>",[_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.detailData.student_id))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",staticStyle:{"width":"110px"},attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(_vm.detailData.student_id)+"\n                      ")])])],1),_vm._ssrNode(" <td style=\"width: 15%\" data-v-971f7c9a>"+_vm._ssrEscape(_vm._s(_vm.$t("班级")))+"</td> "),_vm._ssrNode("<td style=\"width: 35%\" data-v-971f7c9a>","</td>",[_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.detailData.class_name))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",staticStyle:{"width":"110px"},attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(_vm.detailData.class_name)+"\n                      ")])])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<tr data-v-971f7c9a>","</tr>",[_vm._ssrNode("<td style=\"width: 15%\" data-v-971f7c9a>"+_vm._ssrEscape(_vm._s(_vm.$t("学院")))+"</td> "),_vm._ssrNode("<td style=\"width: 35%\" data-v-971f7c9a>","</td>",[_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.detailData.college_name))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",staticStyle:{"width":"110px"},attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(_vm.detailData.college_name)+"\n                      ")])])],1),_vm._ssrNode(" <td style=\"width: 15%\" data-v-971f7c9a>"+_vm._ssrEscape(_vm._s(_vm.$t("专业")))+"</td> "),_vm._ssrNode("<td style=\"width: 35%\" data-v-971f7c9a>","</td>",[_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.detailData.major_name))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",staticStyle:{"width":"110px"},attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(_vm.detailData.major_name)+"\n                      ")])])],1)],2),_vm._ssrNode(" <tr data-v-971f7c9a><td style=\"width: 15%\" data-v-971f7c9a>"+_vm._ssrEscape(_vm._s(_vm.$t("宿舍")))+"</td> <td colspan=\"3\" class=\"text-left\" style=\"width: 65%\" data-v-971f7c9a>"+((_vm.detailData.build_name)?("<span data-v-971f7c9a>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.detailData.build_name)+_vm._s(_vm.detailData.floor_num)+_vm._s(_vm.$t("层"))+_vm._s(_vm.detailData.dormitory_no)+"\n                  ")+"</span>"):"<!---->")+" "+((_vm.detailData.pac_name && !_vm.detailData.build_name)?("<span data-v-971f7c9a>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.detailData.pac_name)+"\n                    ")+"<label class=\"font-size-12 color-muted\" data-v-971f7c9a>"+_vm._ssrEscape("\n                      (¥"+_vm._s(_vm.detailData.pac_price)+" -- "+_vm._s(_vm.detailData.pac_region)+")\n                    ")+"</label></span>"):"<!---->")+"</td></tr>")],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-30 padding-lr-10\" data-v-971f7c9a>","</div>",[_vm._ssrNode("<div data-v-971f7c9a>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("缴费信息")))])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-right"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[(_vm.detailData.payment_status == 1)?_c('el-tag',{attrs:{"size":"small","type":"danger"}},[_vm._v(_vm._s(_vm.$t("未缴清")))]):_vm._e(),_vm._v(" "),(_vm.detailData.payment_status == 2)?_c('el-tag',{attrs:{"size":"small","type":"warning"}},[_vm._v(_vm._s(_vm.$t("部分缴清")))]):_vm._e(),_vm._v(" "),(_vm.detailData.payment_status == 3)?_c('el-tag',{attrs:{"size":"small","type":"success"}},[_vm._v(_vm._s(_vm.$t("已缴清")))]):_vm._e(),_vm._v(" "),(_vm.detailData.payment_status == 4)?_c('el-tag',{attrs:{"size":"small","type":"warning"}},[_vm._v(_vm._s(_vm.$t("待核实")))]):_vm._e()],1)])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-971f7c9a>","</div>",[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"border":"","data":_vm.tablePayData,"header-cell-class-name":"custom-table-cell-bg","size":"medium"}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('费用名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.item_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(scope.row.item_name)+"\n                      ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('缓缴')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.delay_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(scope.row.delay_amount)+"\n                      ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('贷款')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.loan_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.loan_amount)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('减免')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.deduction_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.deduction_amount)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('实缴')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.should_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.should_amount)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('已缴')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.paid_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(scope.row.paid_amount)+"\n                      ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('待缴金额')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.wait_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(scope.row.wait_amount)+"\n                      ")])])]}}])})],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-30 padding-lr-10\" data-v-971f7c9a>","</div>",[_vm._ssrNode("<div data-v-971f7c9a>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("报到信息")))])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-right"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[(_vm.signStatus == false)?_c('el-tag',{attrs:{"size":"small","type":"danger"}},[_vm._v(_vm._s(_vm.$t("未报到")))]):_vm._e(),_vm._v(" "),(_vm.signStatus == true)?_c('el-tag',{attrs:{"size":"small","type":"success"}},[_vm._v(_vm._s(_vm.$t("已报到")))]):_vm._e()],1)])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-971f7c9a>","</div>",[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"border":"","data":_vm.tableSignData,"header-cell-class-name":"custom-table-cell-bg","size":"medium"}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('报到状态')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.check_status)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已报到")))]):_vm._e(),_vm._v(" "),(!scope.row.check_status)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未报到")))]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.check_status)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已报到")))]):_vm._e(),_vm._v(" "),(!scope.row.check_status)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未报到")))]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('报到时间')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$moment(scope.row.check_time).format("YYYY-MM-DD hh:mm")))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(_vm.$moment(scope.row.check_time).format("YYYY-MM-DD hh:mm"))+"\n                      ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('核验方式')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.check_type == 0)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("人工")))]):_vm._e(),_vm._v(" "),(scope.row.check_type == 1)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("二维码")))]):_vm._e(),_vm._v(" "),(scope.row.check_type == 2)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("人脸识别")))]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.check_type == 0)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("人工")))]):_vm._e(),_vm._v(" "),(scope.row.check_type == 1)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("二维码")))]):_vm._e(),_vm._v(" "),(scope.row.check_type == 2)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("人脸识别")))]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('核验人')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.check_user_name)?_c('label',[_vm._v("("+_vm._s(scope.row.check_user_name)+")")]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.check_user_name)?_c('label',[_vm._v("("+_vm._s(scope.row.check_user_name)+")")]):_c('label',[_vm._v("--")])])])]}}])})],1)],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5 text-center\" data-v-971f7c9a>","</div>",[(_vm.detailData.allowCheckin == true && _vm.signStatus == false)?_c('van-button',{staticStyle:{"width":"150px"},attrs:{"hairline":"","type":"primary","size":"small","loading":_vm.signLoading},on:{"click":_vm.signConfirm}},[_vm._v(_vm._s(_vm.$t("已报到确认")))]):_vm._e(),_vm._ssrNode(" "),(_vm.detailData.allowCheckin == true && _vm.signStatus == true)?_c('van-button',{staticStyle:{"width":"150px"},attrs:{"hairline":"","type":"primary","size":"small","loading":_vm.signLoading},on:{"click":_vm.unSignConfirm}},[_vm._v(_vm._s(_vm.$t("撤销报到")))]):_vm._e(),_vm._ssrNode(" "),(_vm.detailData.allowPayment == true && _vm.detailData.payment_status == 1)?_c('van-button',{staticStyle:{"width":"150px"},attrs:{"hairline":"","type":"warning","size":"small","loading":_vm.payLoading},on:{"click":function($event){return _vm.payConfirm(_vm.event, 3)}}},[_vm._v(_vm._s(_vm.$t("已缴费确认")))]):_vm._e(),_vm._ssrNode(" "),(_vm.detailData.allowPayment == true && _vm.detailData.payment_status == 3)?_c('van-button',{staticStyle:{"width":"150px"},attrs:{"hairline":"","type":"danger","size":"small","loading":_vm.payLoading},on:{"click":function($event){return _vm.payConfirm(_vm.event, 1)}}},[_vm._v(_vm._s(_vm.$t("撤销缴费")))]):_vm._e()],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/studentDetail/detailIndex.vue?vue&type=template&id=971f7c9a&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(15);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/mixinsBridge.js
var mixinsBridge = __webpack_require__(122);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/studentDetail/detailIndex.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var detailIndexvue_type_script_lang_js_ = ({
  name: 'detailIndex',
  layout: 'defaultAppScreen',
  mixins: [mixins["a" /* default */], mixinsBridge["a" /* default */]],

  data() {
    return {
      active: 6,
      topHeight: 0,
      serverAppList: [],
      noticeAppList: [],
      pageType: '',
      userId: '',
      detailData: '',
      signStatus: '',
      tablePayData: [],
      tableSignData: [],
      container: null,
      signLoading: false,
      payLoading: false,
      checkinId: ''
    };
  },

  mounted() {
    this.container = this.$refs.container;
  },

  created() {
    this.userId = this.$route.query.userId;
    this.topHeight = this.navHeight > 0 ? parseInt(0) + parseInt(this.navHeight) : 10;
    console.log(this.userId);

    if (this.$route.query.sessionId) {
      this.initAppConfig();
    } else {
      this.pageType = this.$route.query.type ? this.$route.query.type : 'server';
      this.initAppServer();
    }
  },

  methods: {
    layoutInit() {},

    async initAppConfig() {
      await this.autoLoginApp(); //await this.getSessionInfo();

      setTimeout(() => {
        this.initAppServer();
      }, 1000);
    },

    initAppServer() {
      this.initInfo();
      this.initPay();
      this.initSignInfo();
    },

    initInfo() {
      let params = {
        userId: this.userId
      };
      this.$axios.get(api_url["a" /* common */].enroll_checkin_student_detail2, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.detailData = res.data.data;
        }
      });
    },

    initPay(item) {
      let params = {
        userId: this.userId
      };
      this.$axios.get(api_url["a" /* common */].enroll_checkin_pay_list_by_user, {
        params: params
      }).then(res => {
        if (res.data.data) {
          for (let i = 0; i < res.data.data.length; i++) {
            res.data.data[i]['wait_amount'] = res.data.data[i].should_amount - res.data.data[i].paid_amount;
          }

          this.tablePayData = res.data.data;
        }
      });
    },

    initSignInfo() {
      let params = {
        userId: this.userId
      };
      this.signStatus = false;
      this.$axios.get(api_url["a" /* common */].server_enroll_app_student_checkin_get, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let data = JSON.stringify(res.data.data);

          if (data != "{}") {
            this.signStatus = res.data.data.check_status;
            this.checkinId = res.data.data.id;
            this.tableSignData = [res.data.data];
          }
        }
      });
    },

    payConfirm(event, type) {
      external_vant_["Dialog"].confirm({
        title: '提示',
        message: '确认执行该操作？'
      }).then(() => {
        // on confirm
        let url = '';
        let valObj = {};
        let params = '';

        if (type == 3) {
          url = api_url["a" /* common */].enroll_payment_set_student_payment;
          valObj = {
            paidAmountValList: [],
            paymentStatus: type,
            paymentType: 1,
            userId: this.userId
          };
          this.$axios.post(url, JSON.stringify(valObj), {
            dataType: 'stringfy',
            loading: false
          }).then(res => {
            if (res.data.code == 200) {
              this.initAppServer();
              Object(external_vant_["Toast"])(res.data.desc);
            } else {
              Object(external_vant_["Toast"])(res.data.desc);
            }

            this.payLoading = false;
          });
        } else if (type == 1) {
          url = api_url["a" /* common */].enroll_payment_set_student_revoke;
          valObj = {
            userId: this.userId
          };
          valObj = this.$qs.stringify(valObj);
          this.$axios.post(url, valObj, {
            loading: false
          }).then(res => {
            if (res.data.code == 200) {
              this.initAppServer();
              Object(external_vant_["Toast"])(res.data.desc);
            } else {
              Object(external_vant_["Toast"])(res.data.desc);
            }

            this.payLoading = false;
          });
        }

        this.payLoading = true;
      }).catch(() => {
        // on cancel
        this.payLoading = false;
      });
    },

    signConfirm() {
      external_vant_["Dialog"].confirm({
        title: '提示',
        message: '确认执行该操作？'
      }).then(() => {
        // on confirm
        let params = {
          userId: this.userId
        };
        let url = api_url["a" /* common */].enroll_checkin_handle;
        params = this.$qs.stringify(params);
        this.signLoading = true;
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200) {
            this.initAppServer();
            Object(external_vant_["Toast"])(res.data.desc);
          } else {
            Object(external_vant_["Toast"])(res.data.desc);
          }

          this.signLoading = false;
        });
      }).catch(() => {
        // on cancel
        this.signLoading = false;
      });
    },

    unSignConfirm() {
      external_vant_["Dialog"].confirm({
        title: '提示',
        message: '确认执行该操作？'
      }).then(() => {
        // on confirm
        let params = {
          checkinId: this.checkinId
        };
        let url = api_url["a" /* common */].enroll_checkin_revoke;
        params = this.$qs.stringify(params);
        this.signLoading = true;
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200) {
            this.initAppServer();
            Object(external_vant_["Toast"])(res.data.desc);
          } else {
            Object(external_vant_["Toast"])(res.data.desc);
          }

          this.signLoading = false;
        });
      }).catch(() => {
        // on cancel
        this.signLoading = false;
      });
    },

    scanRecord() {
      this.$router.push({
        path: '/studentDetail/detailRecord',
        query: {
          userType: this.loginUserAppType,
          navH: this.navHeight,
          appType: this.globalAppShow,
          sessionId: this.$route.query.sessionId,
          userId: this.$route.query.sessionId
        }
      });
    },

    returnIndex() {
      this.returnGlobalMain(1);
    }

  }
});
// CONCATENATED MODULE: ./pages/studentDetail/detailIndex.vue?vue&type=script&lang=js&
 /* harmony default export */ var studentDetail_detailIndexvue_type_script_lang_js_ = (detailIndexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/studentDetail/detailIndex.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(232)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  studentDetail_detailIndexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "971f7c9a",
  "902bdcb8"
  
)

/* harmony default export */ var detailIndex = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MySex: __webpack_require__(123).default})


/***/ })

};;
//# sourceMappingURL=detailIndex.js.map