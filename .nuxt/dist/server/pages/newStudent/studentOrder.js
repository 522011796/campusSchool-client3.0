exports.ids = [23];
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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("60f974cc", content, true, context)
};

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentOrder_vue_vue_type_style_index_0_id_799cfcef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentOrder_vue_vue_type_style_index_0_id_799cfcef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentOrder_vue_vue_type_style_index_0_id_799cfcef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentOrder_vue_vue_type_style_index_0_id_799cfcef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentOrder_vue_vue_type_style_index_0_id_799cfcef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentOrder_vue_vue_type_style_index_0_id_799cfcef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-799cfcef]{height:60px;line-height:60px;width:100%}.content-block[data-v-799cfcef]{border-top-left-radius:15px;border-top-right-radius:15px;background:#fff;width:100%}.app-title-border-tag[data-v-799cfcef]{width:5px;height:25px;background:#1ea084;display:inline-block}.notice-list-item[data-v-799cfcef]{height:45px;line-height:45px}.bg-student-info-block[data-v-799cfcef]{background:url(/img/bg-student-info.png) no-repeat;height:180px;width:100%;border:1px dashed #ddd}.text-display-line[data-v-799cfcef]{width:80px;top:4px}.name-display-line[data-v-799cfcef],.text-display-line[data-v-799cfcef]{display:inline-block;position:relative}.name-display-line[data-v-799cfcef]{max-width:200px;top:6px}.item-block[data-v-799cfcef]{border-radius:5px;background:#ebeef5;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentOrder.vue?vue&type=template&id=799cfcef&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-799cfcef></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-799cfcef>","</div>",[_c('van-col',{attrs:{"span":"3"}},[_c('div',{staticClass:"text-left padding-lr-10 color-white"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n            "+_vm._s(_vm.$t("返回"))+"\n          ")])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"18"}},[_c('div',{staticClass:"text-center color-white font-size-16 font-bold"},[(_vm.$route.query.title && _vm.$route.query.title != '')?_c('span',[_vm._v(_vm._s(_vm.$route.query.title))]):_c('span',[_vm._v(_vm._s(_vm.$t("报到单")))])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"3"}},[_vm._v("\n       \n    ")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-block\""+(_vm._ssrStyle(null,_vm.divHeight10, null))+" data-v-799cfcef>","</div>",[_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-799cfcef>","</div>",[_vm._ssrNode("<div data-v-799cfcef>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("基本信息")))])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"pull-right"},[_c('el-image',{staticStyle:{"width":"120px","height":"30px"},attrs:{"src":_vm.g_BarCode}})],1)])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-799cfcef>","</div>",[_vm._ssrNode("<table class=\"custom-table\" data-v-799cfcef>","</table>",[_vm._ssrNode("<tbody data-v-799cfcef>","</tbody>",[_vm._ssrNode("<tr data-v-799cfcef>","</tr>",[_vm._ssrNode("<td style=\"width: 15%\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.$t("姓名")))+"</td> <td style=\"width: 35%\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.detailData.real_name))+"</td> <td style=\"width: 15%\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.$t("性别")))+"</td> "),_vm._ssrNode("<td style=\"width: 35%\" data-v-799cfcef>","</td>",[_c('my-sex',{attrs:{"sex":_vm.detailData.sex,"tag":"text"}})],1)],2),_vm._ssrNode(" <tr data-v-799cfcef><td style=\"width: 15%\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.$t("录取号")))+"</td> <td style=\"width: 35%\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.detailData.student_id))+"</td> <td style=\"width: 15%\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.$t("班级")))+"</td> <td style=\"width: 35%\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.detailData.class_name))+"</td></tr> <tr data-v-799cfcef><td style=\"width: 15%\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.$t("学院")))+"</td> <td style=\"width: 35%\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.detailData.college_name))+"</td> <td style=\"width: 15%\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.$t("专业")))+"</td> <td style=\"width: 35%\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.detailData.major_name))+"</td></tr> <tr data-v-799cfcef><td style=\"width: 15%\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.$t("宿舍")))+"</td> <td colspan=\"3\" class=\"text-left\" style=\"width: 65%\" data-v-799cfcef>"+((_vm.detailData.build_name)?("<span data-v-799cfcef>"+_vm._ssrEscape("\n                  "+_vm._s(_vm.detailData.build_name)+_vm._s(_vm.detailData.floor_num)+_vm._s(_vm.$t("层"))+_vm._s(_vm.detailData.dormitory_no)+"\n                ")+"</span>"):"<!---->")+" "+((_vm.detailData.pac_name && !_vm.detailData.build_name)?("<span data-v-799cfcef>"+_vm._ssrEscape("\n                  "+_vm._s(_vm.detailData.pac_name)+"\n                  ")+"<label class=\"font-size-12 color-muted\" data-v-799cfcef>"+_vm._ssrEscape("\n                    (¥"+_vm._s(_vm.detailData.pac_price)+" -- "+_vm._s(_vm.detailData.pac_region)+")\n                  ")+"</label></span>"):"<!---->")+"</td></tr>")],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-799cfcef>","</div>",[_vm._ssrNode("<div data-v-799cfcef>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"24"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("缴费信息")))])])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-799cfcef>","</div>",[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"border":"","data":_vm.tablePayData,"header-cell-class-name":"custom-table-cell-bg","size":"medium"}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('费用名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.item_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                      "+_vm._s(scope.row.item_name)+"\n                    ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('缓缴')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.delay_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                      "+_vm._s(scope.row.delay_amount)+"\n                    ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('贷款')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.loan_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  "+_vm._s(scope.row.loan_amount)+"\n                ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('减免')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.deduction_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  "+_vm._s(scope.row.deduction_amount)+"\n                ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('实缴')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.should_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  "+_vm._s(scope.row.should_amount)+"\n                ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('已缴')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-input',{staticStyle:{"width":"70px"},attrs:{"size":"mini"},on:{"input":function($event){return _vm.changeInputValue(scope.row.paid_amount, scope.$index)}},model:{value:(scope.row.paid_amount),callback:function ($$v) {_vm.$set(scope.row, "paid_amount", $$v)},expression:"scope.row.paid_amount"}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('待缴金额')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.wait_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                      "+_vm._s(scope.row.wait_amount)+"\n                    ")])])]}}])})],1)],1)],2),_vm._ssrNode(" "),(_vm.detailData['5'] && _vm.detailData['5'].checkinSheetTips != null && _vm.detailData['5'].checkinSheetTips != '')?_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-799cfcef>","</div>",[_vm._ssrNode("<div data-v-799cfcef>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"24"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("报到须知")))])])])],1)],1),_vm._ssrNode(" <div class=\"padding-tb-10 padding-lr-10\" style=\"border: 1px solid #dddddd;min-height: 45px;\" data-v-799cfcef>"+((_vm.detailData['5'])?("<span data-v-799cfcef><pre style=\"white-space: pre-wrap;word-wrap: break-word;\" data-v-799cfcef>"+_vm._ssrEscape(_vm._s(_vm.detailData['5'].checkinSheetTips))+"</pre></span>"):"<!---->")+"</div>")],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10 padding-lr-10\" data-v-799cfcef>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-image',{staticStyle:{"width":"80px","height":"80px"},attrs:{"src":_vm.g_QrCode}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"text-right"},[_c('el-button',{staticClass:"margin-top-30",attrs:{"type":"default","size":"small"},on:{"click":_vm.okOrder}},[_vm._v("\n              "+_vm._s(_vm.$t("已完成打印"))+"\n            ")])],1)])],1)],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newStudent/studentOrder.vue?vue&type=template&id=799cfcef&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/mixinsBridge.js
var mixinsBridge = __webpack_require__(122);

// EXTERNAL MODULE: ./components/MySex.vue + 4 modules
var MySex = __webpack_require__(123);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentOrder.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var studentOrdervue_type_script_lang_js_ = ({
  name: 'studentInfo',
  components: {
    MySex: MySex["default"]
  },
  layout: 'defaultAppScreen',
  mixins: [mixins["a" /* default */], mixinsBridge["a" /* default */]],

  data() {
    return {
      sex: '',
      active: 6,
      serverAppList: [],
      noticeAppList: [],
      askAppList: [],
      currentEnrollYear: '',
      currentEnrollTime: '',
      collegeName: '',
      majorName: '',
      className: '',
      stuNo: '',
      headLogo: '',
      uploadFile: api_url["a" /* common */].upload_file,
      uploadResult: {},
      uploadProcess: '',
      detailData: '',
      tablePayData: [],
      form: {
        id: '',
        phone: '',
        qq: '',
        email: '',
        wechat: '',
        fatherName: '',
        fatherPhone: '',
        matherName: '',
        matherPhone: '',
        address: '',
        headImg: ''
      }
    };
  },

  mounted() {},

  created() {
    this.initAppServer();
  },

  methods: {
    layoutInit() {},

    async initAppServer() {
      await this.getSessionInfo();
      this.initPay();
      this.initInfo();
      this.getUserQrcode(this.loginUserId);
      this.getUserBarcode(this.loginUserId);
    },

    initInfo() {
      let params = {
        userId: this.loginUserId
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
        userId: this.loginUserId
      };
      this.$axios.get(api_url["a" /* common */].enroll_checkin_pay_list_by_user, {
        params: params
      }).then(res => {
        if (res.data.data) {
          console.log(res.data.data);

          for (let i = 0; i < res.data.data.length; i++) {
            res.data.data[i]['wait_amount'] = res.data.data[i].should_amount - res.data.data[i].paid_amount;
          }

          this.tablePayData = res.data.data;
        }
      });
    },

    returnIndex() {
      let url = this.$route.query.subPage ? this.$route.query.subPage : '/newStudent/studentIndex';
      this.$router.push({
        path: url,
        query: {
          activeType: this.$route.query.activeType,
          userType: this.loginUserAppType,
          navH: this.navHeight,
          appType: this.globalAppShow,
          sessionId: this.$route.query.sessionId
        }
      });
    },

    okOrder() {
      let params = {
        userId: this.loginUserId
      };
      params = this.$qs.stringify(params);
      this.$axios.post(api_url["a" /* common */].enroll_checkin_student_print, params).then(res => {
        if (res.data.code == 200) {
          let url = this.$route.query.subPage ? this.$route.query.subPage : '/newStudent/studentIndex';
          this.returnGIndex(url);
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/newStudent/studentOrder.vue?vue&type=script&lang=js&
 /* harmony default export */ var newStudent_studentOrdervue_type_script_lang_js_ = (studentOrdervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/newStudent/studentOrder.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(228)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  newStudent_studentOrdervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "799cfcef",
  "26d11bad"
  
)

/* harmony default export */ var studentOrder = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MySex: __webpack_require__(123).default})


/***/ })

};;
//# sourceMappingURL=studentOrder.js.map