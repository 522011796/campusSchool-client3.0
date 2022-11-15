exports.ids = [20];
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

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("71ad9e22", content, true, context)
};

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGuide_vue_vue_type_style_index_0_id_6e3b149e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGuide_vue_vue_type_style_index_0_id_6e3b149e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGuide_vue_vue_type_style_index_0_id_6e3b149e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGuide_vue_vue_type_style_index_0_id_6e3b149e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGuide_vue_vue_type_style_index_0_id_6e3b149e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGuide_vue_vue_type_style_index_0_id_6e3b149e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-6e3b149e]{height:60px;line-height:60px;width:100%}.top-block[data-v-6e3b149e]{background-image:linear-gradient(0deg,#fff,#4bc66b)}.line-v-block[data-v-6e3b149e]{width:1px;border-left:1px dashed #4bc66b;height:70px;margin:5px auto}.item-block[data-v-6e3b149e]{height:35px;line-height:35px;border-radius:5px;width:100px}.item-main-block .item-block-odd[data-v-6e3b149e]{position:absolute;top:-7px;left:55%}.item-main-block .item-block-even[data-v-6e3b149e]{position:absolute;top:-7px;right:55%}.item-false[data-v-6e3b149e]{border:1px solid #e4e7ed}.item-true[data-v-6e3b149e]{border:1px solid #4bc66b}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentGuide.vue?vue&type=template&id=6e3b149e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-6e3b149e></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-6e3b149e>","</div>",[_c('van-col',{attrs:{"span":"4"}},[_c('div',{staticClass:"text-left padding-lr-10 color-white"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n            "+_vm._s(_vm.$t("返回"))+"\n          ")])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"16"}},[_c('div',{staticClass:"text-center color-white font-size-16 font-bold"},[_c('span',[_vm._v(_vm._s(_vm.$t('流程引导')))])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"4"}},[_vm._v("\n       \n    ")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrStyle(null,_vm.divHeight10, null))+" data-v-6e3b149e>","</div>",[_vm._ssrNode("<div class=\"top-block\" data-v-6e3b149e>","</div>",[_vm._ssrNode("<div class=\"text-center padding-tb-10\" data-v-6e3b149e>","</div>",[_c('van-image',{attrs:{"round":"","width":"8rem","height":"8rem","src":_vm.headImg}})],1),_vm._ssrNode(" <div class=\"text-center margin-top-5\" data-v-6e3b149e><span class=\"font-size-18 font-bold\" data-v-6e3b149e>"+_vm._ssrEscape(_vm._s(_vm.realName))+"</span></div>")],2),_vm._ssrNode(" <div class=\"margin-top-30\" data-v-6e3b149e>"+(_vm._ssrList((_vm.serverAppList),function(item,index){return ("<div class=\"text-center item-main-block\" style=\"position: relative\" data-v-6e3b149e>"+((item.status)?("<i class=\"fa fa-check-circle color-success\" style=\"font-size: 20px\" data-v-6e3b149e></i>"):"<!---->")+" "+((!item.status)?("<i class=\"fa fa-circle color-muted\" style=\"font-size: 20px\" data-v-6e3b149e></i>"):"<!---->")+" <div class=\"line-v-block\" data-v-6e3b149e></div> <div"+(_vm._ssrClass("item-block moon-content-text-ellipsis-class",[index % 2 == 0 ? 'item-block-even' : 'item-block-odd', item.status ? 'item-true color-sub-grand' : 'item-false color-muted']))+" data-v-6e3b149e><span class=\"font-size-12\" data-v-6e3b149e>"+_vm._ssrEscape(_vm._s(item.link_name))+"</span></div></div>")}))+"</div>")],2),_vm._ssrNode(" "),_c('van-dialog',{attrs:{"showConfirmButton":false,"close-on-click-overlay":true},model:{value:(_vm.showSign),callback:function ($$v) {_vm.showSign=$$v},expression:"showSign"}},[_c('div',{staticClass:"padding-lr-10 padding-tb-10"},[_c('div',[_c('el-form',{attrs:{"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":_vm.$t('核验人员'),"prop":"phone"}},[_c('label',[_vm._v(_vm._s(_vm.formSign.checkUserName))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('报到类型'),"prop":"phone"}},[(_vm.formSign.checkType == 0)?_c('label',[_vm._v(_vm._s(_vm.$t("人工")))]):_vm._e(),_vm._v(" "),(_vm.formSign.checkType == 1)?_c('label',[_vm._v(_vm._s(_vm.$t("扫码")))]):_vm._e(),_vm._v(" "),(_vm.formSign.checkType == 2)?_c('label',[_vm._v(_vm._s(_vm.$t("人脸")))]):_vm._e(),_vm._v(" "),(_vm.formSign.checkType == 3)?_c('label',[_vm._v(_vm._s(_vm.$t("自动")))]):_vm._e()]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('是否准时'),"prop":"phone"}},[(_vm.formSign.onTime)?_c('label',[_vm._v(_vm._s(_vm.$t("是")))]):_vm._e(),_vm._v(" "),(!_vm.formSign.onTime)?_c('label',[_vm._v(_vm._s(_vm.$t("否")))]):_vm._e()]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('报到时间'),"prop":"phone"}},[_c('label',[_vm._v(_vm._s(_vm.$moment(_vm.formSign.checkTime).format("YYYY-MM-DD HH:mm")))])])],1)],1)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newStudent/studentGuide.vue?vue&type=template&id=6e3b149e&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentGuide.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var studentGuidevue_type_script_lang_js_ = ({
  name: 'studentInfo',
  components: {
    MySex: MySex["default"]
  },
  layout: 'defaultAppScreen',
  mixins: [mixins["a" /* default */], mixinsBridge["a" /* default */]],

  data() {
    return {
      serverAppList: [],
      headImg: '',
      realname: '',
      detailData: '',
      showSign: false,
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
    this.initAppServer();
  },

  methods: {
    layoutInit() {},

    async initAppServer() {
      await this.getSessionInfo();
      this.initStudentEnroll();
      this.studentDetailInfo();
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

    studentDetailInfo(userId) {
      let params = {};
      this.$axios.get(url["a" /* common */].enroll_student_detail, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.headImg = res.data.data.photo_simple;
          this.realName = res.data.data.real_name;
        }
      });
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

    serverBlock(event, item) {
      if (item == 'all') {
        this.$router.push({
          path: '/newStudent/studentAllSever',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            subPage: '/newStudent/studentGuide'
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
            subPage: '/newStudent/studentGuide'
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
            subPage: '/newStudent/studentGuide'
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
            subPage: '/newStudent/studentGuide'
          }
        });
      } else if (item.link_sub_type == 5) {
        this.$router.push({
          path: '/newStudent/studentOrder',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            subPage: '/newStudent/studentGuide'
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
            subPage: '/newStudent/studentGuide'
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
            subPage: '/newStudent/studentGuide'
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
            subPage: '/newStudent/studentGuide'
          }
        });
      } else if (item.link_sub_type == 1) {
        this.initSign();
        this.showSign = true;
      }
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
// CONCATENATED MODULE: ./pages/newStudent/studentGuide.vue?vue&type=script&lang=js&
 /* harmony default export */ var newStudent_studentGuidevue_type_script_lang_js_ = (studentGuidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/newStudent/studentGuide.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(221)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  newStudent_studentGuidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6e3b149e",
  "7b376f4a"
  
)

/* harmony default export */ var studentGuide = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=studentGuide.js.map