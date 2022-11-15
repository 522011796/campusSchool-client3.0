exports.ids = [21];
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

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2c5e8322", content, true, context)
};

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-student-info.d8c660a.png";

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentIndex_vue_vue_type_style_index_0_id_78d2f96a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentIndex_vue_vue_type_style_index_0_id_78d2f96a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentIndex_vue_vue_type_style_index_0_id_78d2f96a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentIndex_vue_vue_type_style_index_0_id_78d2f96a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentIndex_vue_vue_type_style_index_0_id_78d2f96a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentIndex_vue_vue_type_style_index_0_id_78d2f96a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-78d2f96a]{height:60px;line-height:60px;width:100%}.content-block[data-v-78d2f96a]{border-top-left-radius:15px;border-top-right-radius:15px;background:#fff;width:100%}.app-title-border-tag[data-v-78d2f96a]{width:5px;height:25px;background:#1ea084;display:inline-block}.notice-list-item[data-v-78d2f96a]{height:45px;line-height:45px}.bg-student-info-block[data-v-78d2f96a]{height:180px;width:100%}.text-display-line[data-v-78d2f96a]{width:80px;top:4px}.name-display-line[data-v-78d2f96a],.text-display-line[data-v-78d2f96a]{display:inline-block;position:relative}.name-display-line[data-v-78d2f96a]{max-width:200px;top:6px}.top-block[data-v-78d2f96a]{background-image:linear-gradient(0deg,#fff,#4bc66b);position:relative}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentIndex.vue?vue&type=template&id=78d2f96a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-78d2f96a></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-78d2f96a>","</div>",[_c('van-col',{attrs:{"span":"2"}},[(_vm.globalAppShow && _vm.globalAppShow != '')?_c('div',{staticClass:"text-left padding-lr-10 color-white"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n              "+_vm._s(_vm.$t("返回"))+"\n            ")])]):_c('div',[_vm._v("\n           \n        ")])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"20"}},[_c('div',{staticClass:"text-center color-white font-size-16 font-bold"},[_c('span',[_vm._v(_vm._s(_vm.$t('智慧迎新')))])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"2"}},[_vm._v("\n         \n      ")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-block\" data-v-78d2f96a>","</div>",[_vm._ssrNode("<div class=\"padding-lr-10 top-block\" data-v-78d2f96a>","</div>",[_vm._ssrNode("<div data-v-78d2f96a>","</div>",[_vm._ssrNode("<div class=\"bg-student-info-block\" style=\"position: relative\" data-v-78d2f96a>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(223)))+" style=\"height: 180px; width: 100%;position: absolute;left: 0; z-index: 500;border-radius: 5px; background: #fefefe\" data-v-78d2f96a> "),_vm._ssrNode("<div class=\"padding-lr-5 padding-top-5\" style=\"position: absolute;top:0px;z-index: 600;width: 100%;\" data-v-78d2f96a>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"16"}},[_c('div',{staticClass:"color-muted font-bold font-size-12 text-left"},[_c('span',[_c('label',{staticClass:"color-sub-grand"},[_vm._v(_vm._s(_vm.currentEnrollYear))]),_vm._v(" "),_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("迎新倒计时"))+":"+_vm._s(_vm.currentEnrollTime))])])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"8"}},[_c('div',{staticClass:"color-muted font-bold font-size-12 text-right"},[(_vm.completedStatus != '')?_c('van-tag',{attrs:{"type":"danger"}},[_vm._v("\n                      "+_vm._s(_vm.$t("所有环节"))+"\n                      :\n                      "),(_vm.completedStatus == true)?_c('label',[_vm._v(_vm._s(_vm.$t("已完成")))]):_vm._e(),_vm._v(" "),(_vm.completedStatus == false)?_c('label',[_vm._v(_vm._s(_vm.$t("未完成")))]):_vm._e()]):_vm._e()],1)])],1),_vm._ssrNode(" "),_c('van-row',{staticClass:"margin-top-20"},[_c('van-col',{attrs:{"span":"6"}},[_c('div',[_c('van-image',{attrs:{"width":"90","height":"120","src":_vm.headLogo}})],1)]),_vm._v(" "),_c('van-col',{attrs:{"span":"10"}},[_c('div',[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":_vm.realName,"placement":"top"}},[_c('span',{staticClass:"font-size-18 color-sub-title moon-content-text-ellipsis-class name-display-line font-bold"},[_vm._v(_vm._s(_vm.realName))])]),_vm._v(" "),(_vm.sex == 1)?_c('span',{staticClass:"color-grand margin-left-5 font-bold"},[_c('van-tag',{attrs:{"type":"success","size":"mini"}},[_c('label',{staticClass:"fa fa-mars"})])],1):_vm._e(),_vm._v(" "),(_vm.sex == 2)?_c('span',{staticClass:"color-grand margin-left-5 font-bold"},[_c('van-tag',{attrs:{"type":"success","size":"mini"}},[_c('label',{staticClass:"fa fa-venus"})])],1):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"margin-top-10 font-size-12"},[_c('span',{staticClass:"color-sub-title font-bold"},[_vm._v(_vm._s(_vm.$t("学号")))]),_vm._v(" "),_c('span',{staticClass:"color-muted moon-content-text-ellipsis-class text-display-line"},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":_vm.stuNo,"placement":"top-start"}},[_c('span',[_vm._v(_vm._s(_vm.stuNo))])])],1)]),_vm._v(" "),_c('div',{staticClass:"margin-top-5 font-size-12"},[_c('span',{staticClass:"color-sub-title font-bold"},[_vm._v(_vm._s(_vm.$t("学院")))]),_vm._v(" "),_c('span',{staticClass:"color-muted moon-content-text-ellipsis-class text-display-line"},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":_vm.collegeName,"placement":"top-start"}},[_c('span',[_vm._v(_vm._s(_vm.collegeName))])])],1)])]),_vm._v(" "),_c('van-col',{attrs:{"span":"8"}},[_c('div',{staticClass:"text-center color-muted",on:{"click":_vm.drCodeManage}},[_c('div',[_c('van-icon',{attrs:{"name":"qr","size":"90"}})],1),_vm._v(" "),_c('div',{staticClass:"font-size-12 margin-top-5"},[_c('span',[_vm._v(_vm._s(_vm.$t("我的二维码")))])])])])],1)],2)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrStyle(null,_vm.divHeight11, null))+" data-v-78d2f96a>","</div>",[_vm._ssrNode("<div class=\"margin-top-10\" data-v-78d2f96a>","</div>",[_c('van-grid',{attrs:{"gutter":10}},[_c('van-grid-item',{attrs:{"text":_vm.$t('流程引导')},on:{"click":function($event){return _vm.serverBlock($event, 'flow')}}},[_c('div',{attrs:{"slot":"icon"},slot:"icon"},[_c('van-icon',{attrs:{"size":"30","name":"label-o"}})],1),_vm._v(" "),_c('div',{staticClass:"moon-content-text-ellipsis-class margin-top-10 text-center font-size-12",staticStyle:{"width":"60px"},attrs:{"slot":"text"},slot:"text"},[_vm._v(_vm._s(_vm.$t("流程引导")))])]),_vm._v(" "),_vm._l((_vm.serverAppList),function(item,index){return (index < 6)?_c('van-grid-item',{key:index,attrs:{"icon":"photo-o"},on:{"click":function($event){return _vm.serverBlock($event, item)}}},[_c('div',{staticClass:"text-center",attrs:{"slot":"icon"},slot:"icon"},[_c('van-image',{attrs:{"width":"30","height":"30","src":item.link_logo}})],1),_vm._v(" "),_c('div',{staticClass:"moon-content-text-ellipsis-class margin-top-10 text-center font-size-12",staticStyle:{"width":"60px"},attrs:{"slot":"text"},slot:"text"},[_vm._v(_vm._s(item.link_name))])]):_vm._e()}),_vm._v(" "),_c('van-grid-item',{attrs:{"text":_vm.$t('全部环节')},on:{"click":function($event){return _vm.serverBlock($event, 'all')}}},[_c('div',{attrs:{"slot":"icon"},slot:"icon"},[_c('van-icon',{attrs:{"size":"30","name":"apps-o"}})],1),_vm._v(" "),_c('div',{staticClass:"moon-content-text-ellipsis-class margin-top-10 text-center font-size-12",staticStyle:{"width":"60px"},attrs:{"slot":"text"},slot:"text"},[_vm._v(_vm._s(_vm.$t("全部环节")))])])],2)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-78d2f96a>","</div>",[_vm._ssrNode("<div data-v-78d2f96a>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("迎新公告")))])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-right"},[_c('i',{staticClass:"fa fa-list font-size-14",staticStyle:{"position":"relative","top":"5px"}})])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-78d2f96a>","</div>",[(_vm.noticeAppList.length == 0)?_c('van-empty',{attrs:{"image-size":"60","description":"暂无数据"}}):_vm._l((_vm.noticeAppList),function(item,index){return _c('div',{key:index,staticClass:"notice-list-item border-bottom-1"},[_c('van-row',[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-left moon-content-text-ellipsis-class"},[_c('span',[_vm._v("x")])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-right color-muted"},[_c('span',[_vm._v("x")])])])],1)],1)})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-78d2f96a>","</div>",[_vm._ssrNode("<div data-v-78d2f96a>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("常见问题")))])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-right"},[_c('i',{staticClass:"fa fa-list font-size-14",staticStyle:{"position":"relative","top":"5px"}})])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-78d2f96a>","</div>",[(_vm.askAppList.length == 0)?_c('van-empty',{attrs:{"image-size":"80","description":"暂无数据"}}):_vm._l((_vm.askAppList),function(item,index){return _c('div',{key:index,staticClass:"notice-list-item border-bottom-1"},[_c('van-row',[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-left moon-content-text-ellipsis-class"},[_c('span')])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-right color-muted"},[_c('span')])])],1)],1)})],2)],2)],2)],2),_vm._ssrNode(" "),_c('van-dialog',{attrs:{"showConfirmButton":false,"close-on-click-overlay":true},model:{value:(_vm.showDr),callback:function ($$v) {_vm.showDr=$$v},expression:"showDr"}},[_c('div',{staticClass:"padding-lr-10 padding-tb-10 text-center"},[_c('van-image',{attrs:{"width":"100%","height":"100%","src":_vm.g_QrCode}})],1)]),_vm._ssrNode(" "),_c('van-dialog',{attrs:{"showConfirmButton":false,"close-on-click-overlay":true},model:{value:(_vm.showSign),callback:function ($$v) {_vm.showSign=$$v},expression:"showSign"}},[_c('div',{staticClass:"padding-lr-10 padding-tb-10"},[_c('div',[_c('el-form',{attrs:{"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":_vm.$t('核验人员'),"prop":"phone"}},[_c('label',[_vm._v(_vm._s(_vm.formSign.checkUserName))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('报到类型'),"prop":"phone"}},[(_vm.formSign.checkType == 0)?_c('label',[_vm._v(_vm._s(_vm.$t("人工")))]):_vm._e(),_vm._v(" "),(_vm.formSign.checkType == 1)?_c('label',[_vm._v(_vm._s(_vm.$t("扫码")))]):_vm._e(),_vm._v(" "),(_vm.formSign.checkType == 2)?_c('label',[_vm._v(_vm._s(_vm.$t("人脸")))]):_vm._e(),_vm._v(" "),(_vm.formSign.checkType == 3)?_c('label',[_vm._v(_vm._s(_vm.$t("自动")))]):_vm._e()]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('是否准时'),"prop":"phone"}},[(_vm.formSign.onTime)?_c('label',[_vm._v(_vm._s(_vm.$t("是")))]):_vm._e(),_vm._v(" "),(!_vm.formSign.onTime)?_c('label',[_vm._v(_vm._s(_vm.$t("否")))]):_vm._e()]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('报到时间'),"prop":"phone"}},[_c('label',[_vm._v(_vm._s(_vm.$moment(_vm.formSign.checkTime).format("YYYY-MM-DD HH:mm")))])])],1)],1)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newStudent/studentIndex.vue?vue&type=template&id=78d2f96a&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/mixinsBridge.js
var mixinsBridge = __webpack_require__(122);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentIndex.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var studentIndexvue_type_script_lang_js_ = ({
  name: 'studentIndex',
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
      currentEnrollTime: '00天00时00分00秒',
      collegeName: '',
      majorName: '',
      className: '',
      stuNo: '',
      headLogo: '',
      showDr: false,
      showSign: false,
      completedStatus: '',
      detailData: '',
      formSign: {
        id: '',
        onTime: '',
        checkTime: '',
        checkType: '',
        checkUserName: ''
      }
    };
  },

  mounted() {},

  created() {
    this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;

    if (this.$route.query.sessionId) {
      this.initAppConfig();
    } else {
      this.pageType = this.$route.query.type ? this.$route.query.type : "student";

      if (false) {}
    }

    setTimeout(() => {
      this.getCureentEnrollInfo();
      this.initAppServer();
    }, 1000);
  },

  methods: {
    layoutInit() {},

    async initAppConfig() {
      await this.autoLoginApp();
      await this.queryStudentTimeInfo(); //await this.getSessionInfo();
    },

    initAppRecommend() {
      let params = {};
      this.$axios.get(url["a" /* common */].server_list_list3, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.serverAppList = res.data.data;
        }
      });
    },

    async initAppServer() {
      await this.getSessionInfo();
      this.initInfo();
      this.initStudentEnroll();
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
          this.collegeName = res.data.data.college_name;
          this.className = res.data.data.class_name;
          this.stuNo = res.data.data.student_id;
          this.majorName = res.data.data.major_name;
          this.sex = res.data.data.sex;
          this.headLogo = res.data.data.photo_simple;
          this.completedStatus = res.data.data.completed_link_status;
        }
      });
    },

    initStudentEnroll() {
      let params = {
        userId: this.loginUserId
      };
      this.$axios.get(url["a" /* common */].server_enroll_app_process_current, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.serverAppList = res.data.data.linkList;
        }
      });
    },

    getCureentEnrollInfo() {
      let params = {};
      this.$axios.get(url["a" /* common */].enroll_current_time, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.currentEnrollYear = res.data.data.enrollName;
          this.setTimeLoop(res.data.data.endTime);
        }
      });
    },

    setTimeLoop(data) {
      let time = this.$moment(data).diff(this.$moment());

      if (time <= 0) {
        clearInterval(this.timer);
        return;
      }

      let t = time / 1000;
      let d = Math.floor(t / (24 * 3600)); //剩余天数，如果需要可以自行补上

      let h = Math.floor((t - 24 * 3600 * d) / 3600) + d * 24; //不需要天数，把天数转换成小时

      let _h = Math.floor((t - 24 * 3600 * d) / 3600); //保留天数后得小时


      let m = Math.floor((t - 24 * 3600 * d - _h * 3600) / 60);
      let s = Math.floor(t - 24 * 3600 * d - _h * 3600 - m * 60);
      let hh = String(h).length == 1 ? '0' + String(h) : String(h);
      let mm = String(m).length == 1 ? '0' + String(m) : String(m);
      let ss = String(s).length == 1 ? '0' + String(s) : String(s);
      this.currentEnrollTime = d + "天" + _h + "小时" + mm + "分";
    },

    serverBlock(event, item) {
      console.log(item);

      if (item == 'all') {
        this.$router.push({
          path: '/newStudent/studentAllSever',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      } else if (item == 'order') {
        this.$router.push({
          path: '/newStudent/studentOrder',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      } else if (item == 'flow') {
        this.$router.push({
          path: '/newStudent/studentGuide',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      } else if (item.link_sub_type == 0) {
        this.$router.push({
          path: '/newStudent/studentStation',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      } else if (item.link_sub_type == 4) {
        this.$router.push({
          path: '/newStudent/studentInfo',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      } else if (item.link_sub_type == 3) {
        this.$router.push({
          path: '/newStudent/studentBill',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      } else if (item.link_sub_type == 2) {
        this.$router.push({
          path: '/newStudent/studentDorm',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            dormSelType: item.ruleTypeInfo.rule_type,
            ruleId: item.ruleTypeInfo.rule_id,
            pacRegions: JSON.stringify(item.ruleTypeInfo.pacRegions),
            sessionId: this.$route.query.sessionId
          }
        });
      } else if (item.link_sub_type == 9) {
        this.$router.push({
          path: '/newStudent/studentForm',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            linkId: item.id,
            sessionId: this.$route.query.sessionId
          }
        });
      } else if (item.link_sub_type == 5) {
        let otherTitle = '';

        if (item.other_setting && item.other_setting != '') {
          otherTitle = JSON.parse(item.other_setting).checkinSheetName;
        }

        this.$router.push({
          path: '/newStudent/studentOrder',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            title: otherTitle,
            sessionId: this.$route.query.sessionId
          }
        });
      } else if (item.link_sub_type == 1) {
        this.initSign();
        this.showSign = true;
      }
    },

    activeTabMenu(name) {
      this.noticeAppList = [];
      this.serverAppList = [];

      if (name == 5) {
        this.$router.push({
          path: '/app/appMyNotice',
          query: {
            id: parseInt(name),
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      } else if (name == 6) {
        this.active = name;
        this.initAppRecommend();
      } else {
        this.active = name;
        this.initAppServer();
      }
    },

    drCodeManage() {
      this.getUserQrcode(this.loginUserId);
      this.showDr = true;
    },

    initSign() {
      let params = {
        userId: this.loginUserId
      };
      this.$axios.get(url["a" /* common */].server_enroll_app_student_checkin_get, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.formSign = {
            id: '',
            onTime: res.data.data.on_time,
            checkTime: res.data.data.check_time,
            checkType: res.data.data.check_type,
            checkUserName: res.data.data.check_user_name
          };
        }
      });
    },

    returnIndex() {
      this.returnGlobalMain(1);
    }

  }
});
// CONCATENATED MODULE: ./pages/newStudent/studentIndex.vue?vue&type=script&lang=js&
 /* harmony default export */ var newStudent_studentIndexvue_type_script_lang_js_ = (studentIndexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/newStudent/studentIndex.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(224)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  newStudent_studentIndexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "78d2f96a",
  "0e065b31"
  
)

/* harmony default export */ var studentIndex = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=studentIndex.js.map