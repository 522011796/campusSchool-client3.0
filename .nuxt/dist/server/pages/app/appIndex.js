exports.ids = [3];
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

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/static_icon.c575551.png";

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(202);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("88e98f76", content, true, context)
};

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dept_user_icon.ee7634b.png";

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner_school_app.f0bbbee.png";

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/student_user_icon.90e1390.png";

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/teacher_user_icon.fbfbc2f.png";

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appIndex_vue_vue_type_style_index_0_id_703ca6a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appIndex_vue_vue_type_style_index_0_id_703ca6a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appIndex_vue_vue_type_style_index_0_id_703ca6a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appIndex_vue_vue_type_style_index_0_id_703ca6a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appIndex_vue_vue_type_style_index_0_id_703ca6a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appIndex_vue_vue_type_style_index_0_id_703ca6a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-703ca6a0]{height:60px;line-height:60px;width:100%}.content-block[data-v-703ca6a0]{border-top-left-radius:15px;border-top-right-radius:15px;background:#fff;width:100%;position:relative;top:-15px}.app-title-border-tag[data-v-703ca6a0]{width:5px;height:30px;background:#1ea084;display:inline-block}.notice-list-item[data-v-703ca6a0]{height:45px;line-height:45px}.header-tab-block[data-v-703ca6a0]{background:#fff;border-radius:5px;height:80px;box-shadow:0 0 4px #bbb}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appIndex.vue?vue&type=template&id=703ca6a0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div style=\"position: relative\" data-v-703ca6a0>","</div>",[_vm._ssrNode("<div style=\"position: relative;height: 180px\" data-v-703ca6a0>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(198)))+(_vm._ssrStyle({"width":"100%","position":"absolute"},{height: (180 + parseInt(_vm.navHeight)) + 'px'}, null))+" data-v-703ca6a0> "+((_vm.globalAppShow && _vm.globalAppShow != '')?("<div class=\"padding-lr-10 color-white\""+(_vm._ssrStyle({"position":"absolute","left":"5px"},{top: _vm.topHeight + 'px'}, null))+" data-v-703ca6a0><span class=\"font-bold font-size-20\" data-v-703ca6a0><i class=\"fa fa-chevron-left\" data-v-703ca6a0></i> <label class=\"font-size-14\" style=\"position: relative; top: -3px;\" data-v-703ca6a0>"+_vm._ssrEscape(_vm._s(_vm.$t("返回")))+"</label></span></div>"):"<!---->")+" "+((_vm.loginUserAppType != 5 && _vm.loginUserType != 5)?("<div"+(_vm._ssrStyle({"position":"absolute","right":"30px"},{top: _vm.topHeight+5 + 'px'}, null))+" data-v-703ca6a0><img"+(_vm._ssrAttr("src",__webpack_require__(148)))+" style=\"width: 30px; height: 30px\" data-v-703ca6a0></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"padding-lr-10\" style=\"position: relative;top:120px; z-index: 99\" data-v-703ca6a0>","</div>",[_vm._ssrNode("<div class=\"header-tab-block\" data-v-703ca6a0>","</div>",[_c('van-row',[_c('van-col',{staticClass:"text-center",staticStyle:{"height":"65px"},attrs:{"span":6},on:{"click":function($event){return _vm.activeTabMenu(0)}}},[_c('div',{staticClass:"margin-top-10"},[_c('img',{staticStyle:{"height":"45px","width":"45px"},attrs:{"src":__webpack_require__(199)}})]),_vm._v(" "),_c('div',{staticClass:"font-size-12"},[_vm._v("\n                  "+_vm._s(_vm.$t('学生办事'))+"\n                ")])]),_vm._v(" "),_c('van-col',{staticClass:"text-center",attrs:{"span":6},on:{"click":function($event){return _vm.activeTabMenu(1)}}},[_c('div',{staticClass:"margin-top-10"},[_c('img',{staticStyle:{"height":"45px","width":"45px"},attrs:{"src":__webpack_require__(200)}})]),_vm._v(" "),_c('div',{staticClass:"font-size-12"},[_vm._v("\n                  "+_vm._s(_vm.$t('老师办事'))+"\n                ")])]),_vm._v(" "),_c('van-col',{staticClass:"text-center",attrs:{"span":6},on:{"click":function($event){return _vm.activeTabMenu(2)}}},[_c('div',{staticClass:"margin-top-10"},[_c('img',{staticStyle:{"height":"45px","width":"45px"},attrs:{"src":__webpack_require__(169)}})]),_vm._v(" "),_c('div',{staticClass:"font-size-12"},[_vm._v("\n                  "+_vm._s(_vm.$t('单位办事'))+"\n                ")])]),_vm._v(" "),_c('van-col',{staticClass:"text-center",attrs:{"span":6},on:{"click":function($event){return _vm.activeTabMenu(5)}}},[_c('div',{staticClass:"margin-top-10"},[_c('img',{staticStyle:{"height":"45px","width":"45px"},attrs:{"src":__webpack_require__(169)}})]),_vm._v(" "),_c('div',{staticClass:"font-size-12"},[_vm._v("\n                  "+_vm._s(_vm.$t('我的待办'))+"\n                ")])])],1)],1)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-block\""+(_vm._ssrStyle(null,_vm.divHeight3, null))+" data-v-703ca6a0>","</div>",[_vm._ssrNode("<div class=\"margin-top-60 padding-lr-10\" data-v-703ca6a0>","</div>",[_vm._ssrNode("<div data-v-703ca6a0>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-10px"}},[_vm._v(_vm._s(_vm.$t("推荐服务")))])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-right"},[_vm._v("\n                 \n              ")])])],1)],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"margin-top-10 padding-lr-10",attrs:{"gutter":8}},[_vm._l((_vm.serverAppList),function(item,index){return _c('el-col',{key:index,attrs:{"span":6},nativeOn:{"click":function($event){return _vm.serverBlock($event, item)}}},[_c('div',{staticClass:"margin-bottom-5 text-center padding-tb-10",staticStyle:{"border":"1px solid #dddddd","border-radius":"5px","height":"75px"}},[_c('div',{staticStyle:{"height":"35px","width":"35px","margin":"0 auto","margin-top":"2px"}},[_c('van-image',{attrs:{"width":"35","height":"35","src":item.form_logo}})],1),_vm._v(" "),_c('div',{staticClass:"margin-top-8"},[_c('div',{staticStyle:{"width":"70px","margin":"0 auto"}},[_c('div',{staticClass:"text-center;font-family: Simsun,sans-serif,'Helvetica Neue'"},[(item.form_name.length <= 5)?_c('div',{staticClass:"font-size-12 text-center;font-family: Simsun,sans-serif,'Helvetica Neue'"},[_vm._v("\n                      "+_vm._s(item.form_name)+"\n                    ")]):_c('div',{staticClass:"font-size-12",staticStyle:{"margin-left":"2px","display":"-webkit-box","text-align":"left","-webkit-line-clamp":"2","-webkit-box-orient":"vertical","text-overflow":"ellipsis","overflow":"hidden","font-family":"Simsun,sans-serif,'Helvetica Neue'"}},[_vm._v("\n                      "+_vm._s(item.form_name)+"\n                    ")])])])])])])}),_vm._v(" "),_c('el-col',{attrs:{"span":6},nativeOn:{"click":function($event){return _vm.serverBlock($event, 'all')}}},[_c('div',{staticClass:"margin-bottom-5 text-center padding-tb-10",staticStyle:{"border":"1px solid #dddddd","border-radius":"5px","height":"75px"}},[_c('div',{staticStyle:{"height":"35px","width":"35px","margin":"0 auto","margin-top":"2px"}},[_c('van-icon',{attrs:{"size":"35","name":"apps-o"}})],1),_vm._v(" "),_c('div',{staticClass:"margin-top-8"},[_c('div',{staticStyle:{"width":"70px","margin":"0 auto"}},[_c('div',{staticClass:"font-size-12 text-center;font-family: Simsun,sans-serif,'Helvetica Neue'"},[_vm._v("\n                    "+_vm._s(_vm.$t('全部服务'))+"\n                  ")])])])])])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-703ca6a0>","</div>",[_vm._ssrNode("<div data-v-703ca6a0>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-10px"}},[_vm._v(_vm._s(_vm.$t("通知公告")))])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-right"},[_c('i',{staticClass:"fa fa-list font-size-14",staticStyle:{"position":"relative","top":"5px"}})])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\""+(_vm._ssrStyle(null,_vm.divHeight5, null))+" data-v-703ca6a0>","</div>",[(_vm.noticeAppList.length == 0)?_c('van-empty',{attrs:{"description":"暂无数据"}}):_vm._l((_vm.noticeAppList),function(item,index){return _c('div',{key:index,staticClass:"notice-list-item border-bottom-1"},[_c('van-row',[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-left moon-content-text-ellipsis-class"},[_c('span',[_vm._v("xxxxxxxxxxxxx"+_vm._s(index))])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-right color-muted"},[_c('span',[_vm._v("2022-11-11 11:11:11")])])])],1)],1)})],2)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/appIndex.vue?vue&type=template&id=703ca6a0&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/mixinsBridge.js
var mixinsBridge = __webpack_require__(122);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appIndex.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var appIndexvue_type_script_lang_js_ = ({
  name: 'appIndex',
  layout: 'defaultAppScreen',
  mixins: [mixins["a" /* default */], mixinsBridge["a" /* default */]],

  data() {
    return {
      active: 6,
      topHeight: 0,
      serverAppList: [],
      noticeAppList: [],
      pageType: ''
    };
  },

  mounted() {},

  created() {
    this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
    this.topHeight = this.navHeight > 0 ? parseInt(0) + parseInt(this.navHeight) : 10;

    if (this.$route.query.sessionId) {
      this.initAppConfig();
    } else {
      this.pageType = this.$route.query.type ? this.$route.query.type : 'server';

      if (false) {}

      if (this.active == 6) {
        this.initAppRecommend();
      } else {
        this.initAppServer();
      }
    }
  },

  methods: {
    layoutInit() {},

    async initAppConfig() {
      await this.autoLoginApp(); //await this.getSessionInfo();

      setTimeout(() => {
        if (this.active == 6) {
          this.initAppRecommend();
        } else {
          this.initAppServer();
        }
      }, 1000);
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

    initAppServer() {
      let params = {
        appletType: this.active
      };
      this.$axios.get(url["a" /* common */].server_list_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.serverAppList = res.data.data;
        }
      });
    },

    serverBlock(event, item) {
      if (item == 'all') {
        this.$router.push({
          path: '/app/appAllServer',
          query: {
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      } else {
        // this.$router.push({
        //   path: '/app/appServer',
        //   query: {
        //     id: item.id,
        //     activeType: this.active,
        //     userType: this.loginUserAppType,
        //     navH: this.navHeight,
        //     appType: this.globalAppShow
        //   }
        // });
        this.$router.push({
          path: '/app/appServerForm',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId,
            page: '/app/appIndex'
          }
        });
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
        }); // }else if (name == 6){
        //   this.active = name;
        //   this.initAppRecommend();
        // }else {
        //   this.active = name;
        //   this.initAppServer();
      } else if (name == 6) {
        this.$router.push({
          path: '/app/appStatic',
          query: {
            id: parseInt(name),
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      } else {
        this.active = name;
        this.$router.push({
          path: '/app/appAllServer',
          query: {
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      }
    },

    returnIndex() {
      this.returnGlobalMain(1);
    }

  }
});
// CONCATENATED MODULE: ./pages/app/appIndex.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_appIndexvue_type_script_lang_js_ = (appIndexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/app/appIndex.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(201)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_appIndexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "703ca6a0",
  "e70cd4ee"
  
)

/* harmony default export */ var appIndex = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=appIndex.js.map