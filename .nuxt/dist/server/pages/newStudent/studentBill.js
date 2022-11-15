exports.ids = [17];
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

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(216);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7134ec77", content, true, context)
};

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentBill_vue_vue_type_style_index_0_id_93e73f00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentBill_vue_vue_type_style_index_0_id_93e73f00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentBill_vue_vue_type_style_index_0_id_93e73f00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentBill_vue_vue_type_style_index_0_id_93e73f00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentBill_vue_vue_type_style_index_0_id_93e73f00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentBill_vue_vue_type_style_index_0_id_93e73f00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-93e73f00]{height:60px;line-height:60px;width:100%}.content-block[data-v-93e73f00]{border-top-left-radius:15px;border-top-right-radius:15px;background:#fff;width:100%}.app-title-border-tag[data-v-93e73f00]{width:5px;height:25px;background:#1ea084;display:inline-block}.notice-list-item[data-v-93e73f00]{height:45px;line-height:45px}.bg-student-info-block[data-v-93e73f00]{background:url(/img/bg-student-info.png) no-repeat;height:180px;width:100%;border:1px dashed #ddd}.text-display-line[data-v-93e73f00]{width:80px;top:4px}.name-display-line[data-v-93e73f00],.text-display-line[data-v-93e73f00]{display:inline-block;position:relative}.name-display-line[data-v-93e73f00]{max-width:200px;top:6px}.item-block[data-v-93e73f00]{border-radius:5px;background:#ebeef5;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentBill.vue?vue&type=template&id=93e73f00&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-93e73f00></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-93e73f00>","</div>",[_c('van-col',{attrs:{"span":"4"}},[_c('div',{staticClass:"text-left padding-lr-10 color-white"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n            "+_vm._s(_vm.$t("返回"))+"\n          ")])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"16"}},[_c('div',{staticClass:"text-center color-white font-size-16 font-bold"},[_c('span',[_vm._v(_vm._s(_vm.$t('财务缴费')))])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"4"}},[(!_vm.$route.query.sessionId)?_c('van-button',{attrs:{"size":"small","type":"warning","plain":"","native-type":"button"},on:{"click":function($event){return _vm.payManage($event, 1)}}},[_vm._v(_vm._s(_vm.$t("去支付")))]):_c('span',[_vm._v(" ")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-block\""+(_vm._ssrStyle(null,_vm.divHeight10, null))+" data-v-93e73f00>","</div>",[_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-93e73f00>","</div>",[_vm._ssrNode("<div data-v-93e73f00>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("基本信息")))])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-right"},[_c('van-button',{staticStyle:{"position":"relative","top":"-5px"},attrs:{"size":"small","type":"primary"},on:{"click":function($event){return _vm.okPayDialog($event)}}},[_vm._v(_vm._s(_vm.$t("已完成缴费")))])],1)])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-93e73f00>","</div>",[_vm._ssrNode("<table class=\"custom-table\" data-v-93e73f00>","</table>",[_vm._ssrNode("<tbody data-v-93e73f00>","</tbody>",[_vm._ssrNode("<tr data-v-93e73f00>","</tr>",[_vm._ssrNode("<td style=\"width: 15%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("姓名")))+"</td> <td style=\"width: 35%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.detailData.real_name))+"</td> <td style=\"width: 15%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("性别")))+"</td> "),_vm._ssrNode("<td style=\"width: 35%\" data-v-93e73f00>","</td>",[_c('my-sex',{attrs:{"sex":_vm.detailData.sex,"tag":"text"}})],1)],2),_vm._ssrNode(" <tr data-v-93e73f00><td style=\"width: 15%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("录取号")))+"</td> <td style=\"width: 35%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.detailData.student_id))+"</td> <td style=\"width: 15%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("班级")))+"</td> <td style=\"width: 35%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.detailData.class_name))+"</td></tr> <tr data-v-93e73f00><td style=\"width: 15%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("学院")))+"</td> <td style=\"width: 35%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.detailData.college_name))+"</td> <td style=\"width: 15%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("专业")))+"</td> <td style=\"width: 35%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.detailData.major_name))+"</td></tr>")],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-93e73f00>","</div>",[_vm._ssrNode("<div data-v-93e73f00>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"24"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("缴费统计")))])])])],1)],1),_vm._ssrNode(" <div data-v-93e73f00><table class=\"custom-table\" data-v-93e73f00><tr data-v-93e73f00><td style=\"width: 20%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("应缴总额")))+"</td> <td style=\"width: 30%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.totalAmount))+"</td> <td style=\"width: 20%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("未缴总额")))+"</td> <td style=\"width: 30%\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.shouldAmount - _vm.paidAmount))+"</td></tr> <tr data-v-93e73f00><td data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("缓缴")))+"</td> <td data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.delayAmount))+"</td> <td data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("贷款")))+"</td> <td data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.loanAmount))+"</td></tr> <tr data-v-93e73f00><td data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("减免")))+"</td> <td data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.deductionAmount))+"</td> <td data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("已缴")))+"</td> <td data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.paidAmount))+"</td></tr></table></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-93e73f00>","</div>",[_vm._ssrNode("<div data-v-93e73f00><span class=\"app-title-border-tag\" data-v-93e73f00></span> <span class=\"font-bold\" style=\"position: relative;top: -8px\" data-v-93e73f00>"+_vm._ssrEscape(_vm._s(_vm.$t("缴费清单")))+"</span></div> "),_vm._ssrNode("<div class=\"font-size-12\" data-v-93e73f00>","</div>",_vm._l((_vm.itemUserList),function(item,index){return _vm._ssrNode("<div class=\"margin-bottom-5 border-bottom-dashed-1 padding-tb-5 padding-lr-10\" data-v-93e73f00>","</div>",[_vm._ssrNode("<div class=\"margin-top-5\" data-v-93e73f00>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":12}},[(item.itemName)?_c('span',{staticClass:"font-bold color-grand"},[_vm._v(_vm._s(item.itemName))]):_c('span',{staticClass:"font-bold color-grand"},[_vm._v(" ")])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[(item.status == 1)?_c('el-tag',{attrs:{"size":"small","type":"success"}},[_vm._v(_vm._s(_vm.$t("未缴清")))]):_vm._e(),_vm._v(" "),(item.status == 2)?_c('el-tag',{attrs:{"size":"small","type":"danger"}},[_vm._v(_vm._s(_vm.$t("部分缴清")))]):_vm._e(),_vm._v(" "),(item.status == 3)?_c('el-tag',{attrs:{"size":"small","type":"danger"}},[_vm._v(_vm._s(_vm.$t("已缴清")))]):_vm._e(),_vm._v(" "),(item.status == 4)?_c('el-tag',{attrs:{"size":"small","type":"danger"}},[_vm._v(_vm._s(_vm.$t("待核实")))]):_vm._e()],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-93e73f00>","</div>",[_c('el-card',{attrs:{"body-style":{'padding': '10px 5px'}}},[_c('van-row',[_c('van-col',{attrs:{"span":16}},[_c('span',[_vm._v(_vm._s(_vm.$t("应缴"))+" | ¥"+_vm._s(item.totalAmount))])]),_vm._v(" "),_c('van-col',{attrs:{"span":8}},[_c('div',{staticClass:"text-right"},[_c('span',{staticClass:"fa fa-file color-success",on:{"click":function($event){return _vm.showDetailManage($event, item)}}})])])],1)],1)],1)],2)}),0)],2)],2),_vm._ssrNode(" "),_c('van-dialog',{attrs:{"title":"缴费信息"},model:{value:(_vm.showDetail),callback:function ($$v) {_vm.showDetail=$$v},expression:"showDetail"}},[_c('div',{staticClass:"padding-lr-10 padding-tb-10"},[_c('el-form',{attrs:{"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":_vm.$t('已缴'),"prop":"phone"}},[_c('label',[_vm._v("¥"+_vm._s(_vm.billDetail.paidAmount))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('未缴'),"prop":"phone"}},[_c('label',[_vm._v("¥"+_vm._s(_vm.billDetail.shouldAmount - _vm.billDetail.paidAmount))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('缓缴'),"prop":"phone"}},[_c('label',[_vm._v("¥"+_vm._s(_vm.billDetail.delayAmount))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('贷款'),"prop":"phone"}},[_c('label',[_vm._v("¥"+_vm._s(_vm.billDetail.loanAmount))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('减免'),"prop":"phone"}},[_c('label',[_vm._v("¥"+_vm._s(_vm.billDetail.deductionAmount))])])],1)],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newStudent/studentBill.vue?vue&type=template&id=93e73f00&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/mixinsBridge.js
var mixinsBridge = __webpack_require__(122);

// EXTERNAL MODULE: ./components/MySex.vue + 4 modules
var MySex = __webpack_require__(123);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(4);

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentBill.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var studentBillvue_type_script_lang_js_ = ({
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
      uploadFile: url["a" /* common */].upload_file,
      uploadResult: {},
      uploadProcess: '',
      detailData: '',
      tablePayData: [],
      deductionAmount: 0,
      delayAmount: 0,
      loanAmount: 0,
      paidAmount: 0,
      shouldAmount: 0,
      totalAmount: 0,
      itemUserList: [],
      billList: [],
      showDetail: false,
      billDetail: '',
      drCode: '',
      billBtnShow: false
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
      this.initStudentInfo();
      this.initBill();
      this.initInfo();
    },

    initInfo() {
      let params = {
        userId: this.loginUserId
      };
      this.$axios.get(url["a" /* common */].enroll_checkin_student_detail, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.detailData = res.data.data;
        }
      });
    },

    initStudentInfo() {
      let params = {
        userId: this.loginUserId
      };
      this.$axios.get(url["a" /* common */].server_enroll_app_student_info, {
        params: params
      }).then(res => {
        if (res.data.data) {
          console.log(res.data.data);
          this.deductionAmount = res.data.data.deductionAmount;
          this.loanAmount = res.data.data.loanAmount;
          this.delayAmount = res.data.data.delayAmount;
          this.totalAmount = res.data.data.totalAmount;
          this.shouldAmount = res.data.data.shouldAmount;
          this.paidAmount = res.data.data.paidAmount;
          this.itemUserList = res.data.data.itemUserList;
          this.paidQrcode = res.data.data.enrollPayCode;
          this.billBtnShow = res.data.data.payAllow;
        }
      });
    },

    initBill() {
      let params = {
        userId: this.loginUserId,
        page: 1,
        num: 9999
      };
      this.$axios.get(url["a" /* common */].server_enroll_app_dorm_bill_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.billList = res.data.data.list;
        }
      });
    },

    getPayInfo() {
      let params = {};
      this.$axios.get(url["a" /* common */].enroll_pay_link_get, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.qrCode = res.data.data.enrollPayUrl;

          if (res.data.data.enrollPayUrl) {
            window.location.href = res.data.data.enrollPayUrl;
          } else {
            Object(external_vant_["Toast"])(this.$t("请稍后再试！"));
          }
        }
      });
    },

    showDetailManage(event, data) {
      this.billDetail = data;
      this.showDetail = true;
    },

    payManage(event, data) {
      if (this.billBtnShow == false) {
        Object(external_vant_["Toast"])(this.$t("未到缴费时间！"));
        return;
      }

      this.drCode = '';
      this.getPayInfo();
      this.dialogPayDrCode = true;
    },

    okPayDialog(event) {
      if (this.billBtnShow == false) {
        Object(external_vant_["Toast"])(this.$t("未到缴费时间！"));
        return;
      }

      let params = {};
      params = this.$qs.stringify(params);
      this.$axios.post(url["a" /* common */].enroll_pay_item_pay, params, {
        loading: false
      }).then(res => {
        if (res.data.code == 200) {
          this.getPayInfo();
          this.returnGIndex();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
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
    }

  }
});
// CONCATENATED MODULE: ./pages/newStudent/studentBill.vue?vue&type=script&lang=js&
 /* harmony default export */ var newStudent_studentBillvue_type_script_lang_js_ = (studentBillvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/newStudent/studentBill.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(215)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  newStudent_studentBillvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "93e73f00",
  "5842e510"
  
)

/* harmony default export */ var studentBill = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MySex: __webpack_require__(123).default})


/***/ })

};;
//# sourceMappingURL=studentBill.js.map