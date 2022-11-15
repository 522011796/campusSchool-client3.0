exports.ids = [28];
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

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(235);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("9442e190", content, true, context)
};

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailRecord_vue_vue_type_style_index_0_id_472aa0c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailRecord_vue_vue_type_style_index_0_id_472aa0c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailRecord_vue_vue_type_style_index_0_id_472aa0c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailRecord_vue_vue_type_style_index_0_id_472aa0c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailRecord_vue_vue_type_style_index_0_id_472aa0c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailRecord_vue_vue_type_style_index_0_id_472aa0c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-472aa0c3]{height:60px;line-height:60px;width:100%}.content-block[data-v-472aa0c3]{border-top-left-radius:0;border-top-right-radius:0;background:#f5f5f5;width:100%;position:relative}.content-block-item[data-v-472aa0c3]{border-radius:5px;background:#ebeef5;height:50px;margin:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/studentDetail/detailRecord.vue?vue&type=template&id=472aa0c3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-472aa0c3></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block color-white",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-472aa0c3>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"6"}},[_c('div',{staticClass:"text-left padding-lr-10"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n            "+_vm._s(_vm.$t("返回"))+"\n          ")])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-center"},[_c('span',{staticClass:"font-bold"},[_vm._v(_vm._s(_vm.$t("扫码记录")))])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"6"}},[_vm._v("\n         \n      ")])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"margin-top:0px;\" data-v-472aa0c3>","</div>",[_vm._ssrNode("<form action=\"/\" data-v-472aa0c3>","</form>",[_c('van-row',[_c('van-col',{attrs:{"span":12}},[_c('van-search',{attrs:{"placeholder":"请输入姓名/录取号"},on:{"input":_vm.onSearch,"clear":_vm.onClear},model:{value:(_vm.serchName),callback:function ($$v) {_vm.serchName=$$v},expression:"serchName"}})],1),_vm._v(" "),_c('van-col',{attrs:{"span":12}},[_c('div',{staticClass:"layout-inline"},[_c('el-select',{staticClass:"layout-item margin-right-5",staticStyle:{"margin-top":"11px","width":"80px"},attrs:{"size":"small","placeholder":"请选择"},on:{"change":_vm.dropdownItem},model:{value:(_vm.typeId),callback:function ($$v) {_vm.typeId=$$v},expression:"typeId"}},_vm._l((_vm.typeList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1),_vm._v(" "),_c('el-input',{staticClass:"layout-item",staticStyle:{"width":"100px"},attrs:{"size":"small"}})],1)])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-block\""+(_vm._ssrStyle(null,_vm.divHeight9, null))+" data-v-472aa0c3>","</div>",[_vm._ssrNode("<div class=\"content-block-item padding-lr-10 padding-tb-10\" data-v-472aa0c3>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":18}},[_c('div',{staticClass:"font-size-16 font-bold color-sub-title"},[_c('span',[_vm._v("[xxx]")]),_vm._v(" "),_c('span',[_vm._v("[xxx]")]),_vm._v(" "),_c('span',[_vm._v("[xxx]")]),_vm._v(" "),_c('span',[_vm._v("[xxx]")])]),_vm._v(" "),_c('div',{staticClass:"margin-top-10 color-muted font-size-14"},[_c('span',[_vm._v("2022-01-01 11:11:11")])])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('i',{staticClass:"fa fa-check-circle color-success margin-top-20",staticStyle:{"font-size":"15"}})])],1)],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/studentDetail/detailRecord.vue?vue&type=template&id=472aa0c3&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/mixinsBridge.js
var mixinsBridge = __webpack_require__(122);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/studentDetail/detailRecord.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var detailRecordvue_type_script_lang_js_ = ({
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
      tablePayData: [],
      serchName: '',
      typeId: '',
      typeList: [{
        label: '全部',
        value: ''
      }, {
        label: '报到',
        value: '1'
      }, {
        label: '缴费',
        value: '2'
      }],
      searchKey: ''
    };
  },

  mounted() {},

  created() {
    this.userId = this.$route.query.userId;
    this.topHeight = this.navHeight > 0 ? parseInt(0) + parseInt(this.navHeight) : 10;

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
    },

    initInfo() {
      let params = {
        userId: this.userId
      };
      this.$axios.get(url["a" /* common */].enroll_checkin_student_detail2, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.detailData = res.data.data;
        }
      });
    },

    onSearch(value) {
      this.searchKey = value;
    },

    onClear() {},

    dropdownItem(data) {
      this.typeId = data;
    },

    returnIndex() {
      this.$router.push({
        path: '/studentDetail/detailIndex',
        query: {
          userType: this.loginUserAppType,
          navH: this.navHeight,
          appType: this.globalAppShow,
          sessionId: this.$route.query.sessionId,
          userId: this.$route.query.sessionId
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/studentDetail/detailRecord.vue?vue&type=script&lang=js&
 /* harmony default export */ var studentDetail_detailRecordvue_type_script_lang_js_ = (detailRecordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/studentDetail/detailRecord.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(234)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  studentDetail_detailRecordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "472aa0c3",
  "473d866f"
  
)

/* harmony default export */ var detailRecord = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=detailRecord.js.map