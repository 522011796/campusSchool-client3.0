exports.ids = [22];
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

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/upload/UploadSquare.vue?vue&type=template&id=780b1d3c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-upload',{ref:"uploadRef",staticClass:"avatar-uploader",attrs:{"action":_vm.action,"accept":_vm.accept,"data":_vm.data,"auto-upload":true,"show-file-list":false,"limit":_vm.limit,"multiple":_vm.multiple,"on-success":_vm.handleAvatarSuccess,"on-error":_vm.handleAvatarError,"before-upload":_vm.beforeAvatarUpload}},[_vm._t("default")],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/upload/UploadSquare.vue?vue&type=template&id=780b1d3c&scoped=true&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/upload/UploadSquare.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UploadSquarevue_type_script_lang_js_ = ({
  name: 'uploadSquare',
  props: {
    selValue: {
      default: '',
      type: String
    },
    action: {
      default: '',
      type: String
    },
    accept: {
      default: '',
      type: String
    },
    data: {
      default: function () {
        return {};
      },
      type: Object
    },
    maxSize: {
      default: 2,
      type: [Number, String]
    },
    limit: {
      default: 1,
      type: Number
    },
    multiple: {
      default: false,
      type: Boolean
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

  methods: {
    handleAvatarSuccess(res, file) {
      if (this.multiple == false) {
        this.$refs.uploadRef.clearFiles();
      }

      this.$emit('success', res, file);
    },

    handleAvatarError(res, file) {
      if (this.multiple == false) {
        this.$refs.uploadRef.clearFiles();
      }

      this.$emit('error', res, file);
    },

    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 > this.maxSize;

      if (isLt2M) {
        Object(utils["c" /* MessageWarning */])('图片大小不能超过' + this.maxSize + "MB");
        return false;
      }

      return !isLt2M;
    }

  }
});
// CONCATENATED MODULE: ./components/utils/upload/UploadSquare.vue?vue&type=script&lang=js&
 /* harmony default export */ var upload_UploadSquarevue_type_script_lang_js_ = (UploadSquarevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/upload/UploadSquare.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  upload_UploadSquarevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "780b1d3c",
  "36348454"
  
)

/* harmony default export */ var UploadSquare = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(227);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("154e3bc6", content, true, context)
};

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentInfo_vue_vue_type_style_index_0_id_344a2c21_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentInfo_vue_vue_type_style_index_0_id_344a2c21_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentInfo_vue_vue_type_style_index_0_id_344a2c21_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentInfo_vue_vue_type_style_index_0_id_344a2c21_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentInfo_vue_vue_type_style_index_0_id_344a2c21_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentInfo_vue_vue_type_style_index_0_id_344a2c21_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-344a2c21]{height:60px;line-height:60px;width:100%}.content-block[data-v-344a2c21]{border-top-left-radius:15px;border-top-right-radius:15px;background:#fff;width:100%}.app-title-border-tag[data-v-344a2c21]{width:5px;height:25px;background:#1ea084;display:inline-block}.notice-list-item[data-v-344a2c21]{height:45px;line-height:45px}.bg-student-info-block[data-v-344a2c21]{background:url(/img/bg-student-info.png) no-repeat;height:180px;width:100%;border:1px dashed #ddd}.text-display-line[data-v-344a2c21]{width:80px;top:4px}.name-display-line[data-v-344a2c21],.text-display-line[data-v-344a2c21]{display:inline-block;position:relative}.name-display-line[data-v-344a2c21]{max-width:200px;top:6px}.item-block[data-v-344a2c21]{border-radius:5px;background:#ebeef5;padding:10px}.top-block[data-v-344a2c21]{background-image:linear-gradient(0deg,#fff,#4bc66b)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentInfo.vue?vue&type=template&id=344a2c21&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-344a2c21></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-344a2c21>","</div>",[_c('van-col',{attrs:{"span":"3"}},[_c('div',{staticClass:"text-left padding-lr-10 color-white"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n            "+_vm._s(_vm.$t("返回"))+"\n          ")])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"18"}},[_c('div',{staticClass:"text-center color-white font-size-16 font-bold"},[_c('span',[_vm._v(_vm._s(_vm.$t('信息采集')))])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"3"}},[_c('van-button',{attrs:{"size":"small","type":"warning","plain":"","native-type":"button"},on:{"click":_vm.submitInfo}},[_vm._v(_vm._s(_vm.$t("提交")))])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-block\""+(_vm._ssrStyle(null,_vm.divHeight10, null))+" data-v-344a2c21>","</div>",[_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-344a2c21>","</div>",[_vm._ssrNode("<div data-v-344a2c21>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"24"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("基本信息")))])])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-344a2c21>","</div>",[_vm._ssrNode("<table class=\"custom-table\" data-v-344a2c21>","</table>",[_vm._ssrNode("<tbody data-v-344a2c21>","</tbody>",[_vm._ssrNode("<tr data-v-344a2c21>","</tr>",[_vm._ssrNode("<td style=\"width: 15%\" data-v-344a2c21>"+_vm._ssrEscape(_vm._s(_vm.$t("姓名")))+"</td> <td style=\"width: 35%\" data-v-344a2c21>"+_vm._ssrEscape(_vm._s(_vm.realName))+"</td> <td style=\"width: 15%\" data-v-344a2c21>"+_vm._ssrEscape(_vm._s(_vm.$t("性别")))+"</td> "),_vm._ssrNode("<td style=\"width: 35%\" data-v-344a2c21>","</td>",[_c('my-sex',{attrs:{"sex":_vm.sex,"tag":"text"}})],1)],2),_vm._ssrNode(" <tr data-v-344a2c21><td style=\"width: 15%\" data-v-344a2c21>"+_vm._ssrEscape(_vm._s(_vm.$t("学号")))+"</td> <td style=\"width: 35%\" data-v-344a2c21>"+_vm._ssrEscape(_vm._s(_vm.stuNo))+"</td> <td style=\"width: 15%\" data-v-344a2c21>"+_vm._ssrEscape(_vm._s(_vm.$t("班级")))+"</td> <td style=\"width: 35%\" data-v-344a2c21>"+_vm._ssrEscape(_vm._s(_vm.className))+"</td></tr> <tr data-v-344a2c21><td style=\"width: 15%\" data-v-344a2c21>"+_vm._ssrEscape(_vm._s(_vm.$t("学院")))+"</td> <td style=\"width: 35%\" data-v-344a2c21>"+_vm._ssrEscape(_vm._s(_vm.collegeName))+"</td> <td style=\"width: 15%\" data-v-344a2c21>"+_vm._ssrEscape(_vm._s(_vm.$t("专业")))+"</td> <td style=\"width: 35%\" data-v-344a2c21>"+_vm._ssrEscape(_vm._s(_vm.majorName))+"</td></tr>")],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-344a2c21>","</div>",[_vm._ssrNode("<div data-v-344a2c21>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"24"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("照片采集")))])])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-344a2c21>","</div>",[_vm._ssrNode("<div class=\"item-block\" data-v-344a2c21>","</div>",[_c('van-row',[_c('van-col',{staticClass:"text-center",attrs:{"span":6}},[_c('div',{staticClass:"custom-avatar"},[_c('el-avatar',{attrs:{"size":70,"src":_vm.form.headImg,"fit":"fill"}})],1),_vm._v(" "),_c('div',[_c('upload-square',{staticClass:"margin-top-5",attrs:{"limit":9999,"action":_vm.uploadFile,"max-size":"20","data":{path: 'headPhone'},"accept":".png,.jpg,.jpeg"},on:{"success":_vm.uploadFileSuccess}},[_c('el-button',{attrs:{"size":"small","type":"primary"}},[_vm._v(_vm._s(_vm.$t("上传照片")))])],1)],1)]),_vm._v(" "),_c('van-col',{staticClass:"font-size-12 color-muted",staticStyle:{"padding-left":"30px"},attrs:{"span":18}},[_c('div',{staticClass:"margin-top-10"},[_c('span',[_vm._v(_vm._s(_vm.$t("1. 照片大小不得超过2MB")))])]),_vm._v(" "),_c('div',[_c('span',[_vm._v(_vm._s(_vm.$t("2. 照片格式为JPG或PNG")))])]),_vm._v(" "),_c('div',[_c('span',[_vm._v(_vm._s(_vm.$t("3. 请上传2寸标准证件照")))])]),_vm._v(" "),_c('div',[_c('span',[_vm._v(_vm._s(_vm.$t("4. 照片用于报到及门禁授权")))])])])],1)],1)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-344a2c21>","</div>",[_vm._ssrNode("<div data-v-344a2c21>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"24"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("联系信息")))])])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-344a2c21>","</div>",[_c('van-form',{ref:"form"},[_c('van-field',{attrs:{"name":_vm.$t('手机号'),"label":_vm.$t('手机号'),"placeholder":_vm.$t('手机号'),"rules":_vm.telRules,"autocomplete":"off"},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('微信号'),"label":_vm.$t('微信号'),"placeholder":_vm.$t('请输入信息'),"autocomplete":"off","rules":[{ required: true, message: _vm.$t('请输入信息') }]},model:{value:(_vm.form.wechat),callback:function ($$v) {_vm.$set(_vm.form, "wechat", $$v)},expression:"form.wechat"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('qq'),"label":_vm.$t('qq'),"placeholder":_vm.$t('请输入信息'),"autocomplete":"off","rules":[{ required: true, message: _vm.$t('请输入信息') }]},model:{value:(_vm.form.qq),callback:function ($$v) {_vm.$set(_vm.form, "qq", $$v)},expression:"form.qq"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('邮箱'),"label":_vm.$t('邮箱'),"placeholder":_vm.$t('请输入信息'),"rules":_vm.emailRules,"autocomplete":"off"},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}}),_vm._v(" "),_c('van-field',{attrs:{"name":"checkboxGroup","label":"联系方式","rules":[{ required: true, message: '请选择信息' }]},scopedSlots:_vm._u([{key:"input",fn:function(){return [_c('van-checkbox-group',{attrs:{"direction":"horizontal"},on:{"change":_vm.handleChangeConnType},model:{value:(_vm.connType),callback:function ($$v) {_vm.connType=$$v},expression:"connType"}},[_c('van-checkbox',{attrs:{"name":"1"}},[_vm._v(_vm._s(_vm.$t("父亲")))]),_vm._v(" "),_c('van-checkbox',{attrs:{"name":"2"}},[_vm._v(_vm._s(_vm.$t("母亲")))])],1)]},proxy:true}])}),_vm._v(" "),(_vm.connType.indexOf('1') != -1)?[_c('van-field',{attrs:{"name":_vm.$t('父亲姓名'),"label":_vm.$t('父亲姓名'),"placeholder":_vm.$t('请输入信息'),"autocomplete":"off","rules":[{ required: true, message: _vm.$t('请输入信息') }]},model:{value:(_vm.form.fatherName),callback:function ($$v) {_vm.$set(_vm.form, "fatherName", $$v)},expression:"form.fatherName"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('父亲电话'),"label":_vm.$t('父亲电话'),"placeholder":_vm.$t('请输入信息'),"rules":_vm.telRules,"autocomplete":"off"},model:{value:(_vm.form.fatherPhone),callback:function ($$v) {_vm.$set(_vm.form, "fatherPhone", $$v)},expression:"form.fatherPhone"}})]:_vm._e(),_vm._v(" "),(_vm.connType.indexOf('2') != -1)?[_c('van-field',{attrs:{"name":_vm.$t('母亲姓名'),"label":_vm.$t('母亲姓名'),"placeholder":_vm.$t('请输入信息'),"autocomplete":"off","rules":[{ required: true, message: _vm.$t('请输入信息') }]},model:{value:(_vm.form.matherName),callback:function ($$v) {_vm.$set(_vm.form, "matherName", $$v)},expression:"form.matherName"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('母亲电话'),"label":_vm.$t('母亲电话'),"placeholder":_vm.$t('请输入信息'),"rules":_vm.telRules,"autocomplete":"off"},model:{value:(_vm.form.matherPhone),callback:function ($$v) {_vm.$set(_vm.form, "matherPhone", $$v)},expression:"form.matherPhone"}})]:_vm._e(),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('家庭地址'),"label":_vm.$t('家庭地址'),"placeholder":_vm.$t('请输入信息'),"autocomplete":"off","rules":[{ required: true, message: _vm.$t('请输入信息') }]},model:{value:(_vm.form.address),callback:function ($$v) {_vm.$set(_vm.form, "address", $$v)},expression:"form.address"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('毕业类型'),"label":_vm.$t('毕业类型'),"readonly":"","clickable":"","placeholder":_vm.$t('请选择'),"rules":[{ required: true, message: '请选择信息' }]},on:{"click":function($event){_vm.showGraduationPicker = true}},model:{value:(_vm.form.graduationLabel),callback:function ($$v) {_vm.$set(_vm.form, "graduationLabel", $$v)},expression:"form.graduationLabel"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('毕业学校'),"label":_vm.$t('毕业学校'),"placeholder":_vm.$t('请输入信息'),"autocomplete":"off","rules":[{ required: true, message: '请输入信息' }]},model:{value:(_vm.form.graduationSchool),callback:function ($$v) {_vm.$set(_vm.form, "graduationSchool", $$v)},expression:"form.graduationSchool"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('所在省份'),"label":_vm.$t('所在省份'),"readonly":"","clickable":"","placeholder":_vm.$t('请选择'),"rules":[{ required: true, message: '请选择信息' }]},on:{"click":function($event){_vm.showAdProvince = true}},model:{value:(_vm.form.adProvinceLabel),callback:function ($$v) {_vm.$set(_vm.form, "adProvinceLabel", $$v)},expression:"form.adProvinceLabel"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('政治面貌'),"label":_vm.$t('政治面貌'),"readonly":"","clickable":"","placeholder":_vm.$t('请选择'),"rules":[{ required: true, message: '请选择信息' }]},on:{"click":function($event){_vm.showPoliticsPicker = true}},model:{value:(_vm.form.politicsLabel),callback:function ($$v) {_vm.$set(_vm.form, "politicsLabel", $$v)},expression:"form.politicsLabel"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('退役士兵'),"label":_vm.$t('退役士兵'),"readonly":"","clickable":"","placeholder":_vm.$t('请选择'),"rules":[{ required: true, message: '请选择信息' }]},on:{"click":function($event){_vm.showRetirePicker = true}},model:{value:(_vm.form.retireLabel),callback:function ($$v) {_vm.$set(_vm.form, "retireLabel", $$v)},expression:"form.retireLabel"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('困难类型'),"label":_vm.$t('困难类型'),"readonly":"","clickable":"","placeholder":_vm.$t('请选择'),"rules":[{ required: true, message: '请选择信息' }]},on:{"click":function($event){_vm.showHardPicker = true}},model:{value:(_vm.form.hardLabel),callback:function ($$v) {_vm.$set(_vm.form, "hardLabel", $$v)},expression:"form.hardLabel"}})],2)],1)],2)],2),_vm._ssrNode(" "),_c('van-popup',{attrs:{"position":"bottom"},model:{value:(_vm.showGraduationPicker),callback:function ($$v) {_vm.showGraduationPicker=$$v},expression:"showGraduationPicker"}},[_c('van-picker',{attrs:{"show-toolbar":"","title":"毕业类型","columns":_vm.filterGraduationType},on:{"cancel":_vm.onShowPickerCancel,"confirm":_vm.onGraduationChange}})],1),_vm._ssrNode(" "),_c('van-popup',{attrs:{"position":"bottom"},model:{value:(_vm.showPoliticsPicker),callback:function ($$v) {_vm.showPoliticsPicker=$$v},expression:"showPoliticsPicker"}},[_c('van-picker',{attrs:{"show-toolbar":"","title":"政治面貌","columns":_vm.filterPoliticsType},on:{"cancel":_vm.onShowPickerCancel,"confirm":_vm.onPoliticsChange}})],1),_vm._ssrNode(" "),_c('van-popup',{attrs:{"position":"bottom"},model:{value:(_vm.showRetirePicker),callback:function ($$v) {_vm.showRetirePicker=$$v},expression:"showRetirePicker"}},[_c('van-picker',{attrs:{"show-toolbar":"","title":"退役士兵","columns":_vm.filterRetireType},on:{"cancel":_vm.onShowPickerCancel,"confirm":_vm.onRetireChange}})],1),_vm._ssrNode(" "),_c('van-popup',{attrs:{"position":"bottom"},model:{value:(_vm.showHardPicker),callback:function ($$v) {_vm.showHardPicker=$$v},expression:"showHardPicker"}},[_c('van-picker',{attrs:{"show-toolbar":"","title":"困难类型","columns":_vm.filterHardType},on:{"cancel":_vm.onShowPickerCancel,"confirm":_vm.onHardChange}})],1),_vm._ssrNode(" "),_c('van-popup',{attrs:{"position":"bottom"},model:{value:(_vm.showAdProvince),callback:function ($$v) {_vm.showAdProvince=$$v},expression:"showAdProvince"}},[_c('van-picker',{attrs:{"show-toolbar":"","title":"所在省市","columns":_vm.filterAdProvince},on:{"cancel":_vm.onShowPickerCancel,"confirm":_vm.onAdProvince}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newStudent/studentInfo.vue?vue&type=template&id=344a2c21&scoped=true&

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

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var studentInfovue_type_script_lang_js_ = ({
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
      filterAdProvince: [],
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
      showGraduationPicker: false,
      showPoliticsPicker: false,
      showRetirePicker: false,
      showHardPicker: false,
      showAdProvince: false,
      emailReg: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
      phoneReg: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
      telRules: [{
        required: true,
        message: '请填写正确的手机号',
        trigger: 'onBlur'
      }, {
        // 自定义校验规则
        validator: value => {
          return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(value);
        },
        message: '请填写正确的手机号',
        trigger: 'onBlur'
      }],
      telRules2: [{
        // 自定义校验规则
        validator: value => {
          if (value != '') {
            return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(value);
          }
        },
        message: '请填写正确的手机号',
        trigger: 'onBlur'
      }],
      emailRules: [{
        required: false,
        message: '请填写正确的邮箱',
        trigger: 'onBlur'
      }, {
        // 自定义校验规则
        validator: value => {
          if (value != '') {
            return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(value);
          }
        },
        message: '请填写正确的邮箱',
        trigger: 'onBlur'
      }],
      detailData: '',
      connType: [],
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
        headImg: '',
        graduation: '',
        graduationLabel: '',
        politics: '',
        politicsLabel: '',
        retire: '',
        retireLabel: '',
        hard: '',
        hardLabel: '',
        graduationSchool: '',
        connType: [],
        adProvince: [],
        adProvinceLabel: ''
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
      this.collegeName = this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes ? this.sessionData.LOGIN_RETURN_INFO.classes.collegeName : '';
      this.className = this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes ? this.sessionData.LOGIN_RETURN_INFO.classes.className : '';
      this.stuNo = this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.student ? this.sessionData.LOGIN_RETURN_INFO.student.studentId : '';
      this.majorName = this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes ? this.sessionData.LOGIN_RETURN_INFO.classes.majorName : '';
      this.sex = this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.sex ? this.sessionData.LOGIN_RETURN_INFO.sex : '';
      this.provinceInfoText();
      this.studentDetailInfo(this.loginUserId);
    },

    initInfo() {
      let params = {};
      this.$axios.get(api_url["a" /* common */].enroll_current_time, {
        params: params
      }).then(res => {
        if (res.data.data) {}
      });
    },

    uploadFileSuccess(res, file) {
      if (res.code == 200) {
        this.form.headImg = res.data.url;
      } else {}
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

    validatorEmail(val) {
      if (val != '') {
        return this.emailReg.test(val);
      }
    },

    studentDetailInfo(userId) {
      let params = {
        userId: userId
      };
      console.log(params);
      this.$axios.get(api_url["a" /* common */].enroll_student_detail, {
        params: params
      }).then(res => {
        if (res.data.data) {
          //this.detailData = res.data.data;
          let retireLabel = '';

          if (res.data.data.soldier == true) {
            retireLabel = this.$t("是");
          } else if (res.data.data.soldier == false) {
            retireLabel = this.$t("否");
          }

          this.form = {
            id: '',
            phone: res.data.data.phone,
            qq: res.data.data.qq,
            email: res.data.data.email,
            wechat: res.data.data.wechat,
            fatherName: res.data.data.father_name,
            fatherPhone: res.data.data.father_phone,
            matherName: res.data.data.mather_name,
            matherPhone: res.data.data.mather_phone,
            address: res.data.data.native_place,
            headImg: res.data.data.photo,
            graduation: res.data.data.graduation_type,
            graduationLabel: res.data.data.graduation_type,
            politics: res.data.data.political_type,
            politicsLabel: res.data.data.political_type,
            retire: res.data.data.soldier,
            retireLabel: retireLabel,
            hard: res.data.data.difficulty_type,
            hardLabel: res.data.data.difficulty_type,
            graduationSchool: res.data.data.high_school ? res.data.data.high_school : '',
            connType: [],
            adProvince: [res.data.data.enroll_province, res.data.data.enroll_city],
            adCity: res.data.data.enroll_city + '',
            adProvinceLabel: res.data.data.enroll_province + "," + res.data.data.enroll_city
          };

          if (!res.data.data.enroll_province || !res.data.data.enroll_city) {
            this.form.adProvince = [];
            this.form.adProvinceLabel = "";
          }

          if (res.data.data.father_name && !res.data.data.mather_name) {
            this.form.connType = ['1'];
            this.connType = ['1'];
          } else if (!res.data.data.father_name && res.data.data.mather_name) {
            this.form.connType = ['2'];
            this.connType = ['2'];
          } else if (res.data.data.father_name && res.data.data.mather_name) {
            this.form.connType = ['1', '2'];
            this.connType = ['1', '2'];
          }
        }
      });
    },

    submitInfo() {
      this.$refs.form.validate().then(() => {
        this.btnLoading = true;
        let url = api_url["a" /* common */].server_enroll_app_student_update; // if (this.form.headImg == ""){
        //   Toast(this.$t("请设置照片！"));
        //   return;
        // }

        let params = {
          url: this.form.headImg,
          phone: this.form.phone,
          email: this.form.email,
          qq: this.form.qq,
          wechat: this.form.wechat,
          fatherPhone: this.form.fatherPhone,
          fatherName: this.form.fatherName,
          matherPhone: this.form.matherPhone,
          matherName: this.form.matherName,
          nativePlace: this.form.address,
          graduationType: this.form.graduation,
          politicalType: this.form.politics,
          soldier: this.form.retire,
          difficultyType: this.form.hard,
          highSchool: this.form.graduationSchool,
          enrollProvince: this.form.adProvince.length > 0 ? this.form.adProvince[0] : '',
          enrollCity: this.form.adProvince.length > 0 ? this.form.adProvince[1] : ''
        };
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200) {
            Object(external_vant_["Toast"])(res.data.desc);
            let url = this.$route.query.subPage ? this.$route.query.subPage : '/newStudent/studentIndex';
            this.returnGIndex(url);
            this.btnLoading = false;
          } else {
            Object(external_vant_["Toast"])(res.data.desc);
            this.btnLoading = false;
          }
        });
      });
    },

    provinceInfoText() {
      let arr = Object(utils["g" /* provinceArrayInfo */])();
      let province = [];

      for (let i = 0; i < arr.length; i++) {
        province.push({
          label: arr[i].label,
          value: arr[i].label,
          text: arr[i].label
        });

        if (arr[i]['children']) {
          province[i]['children'] = [];

          for (let j = 0; j < arr[i].children.length; j++) {
            province[i]['children'].push({
              label: arr[i].children[j],
              value: arr[i].children[j],
              text: arr[i].children[j]
            });
          }
        }
      } //return province;


      console.log(province);
      this.filterAdProvince = province;
    },

    onShowPickerCancel() {
      this.showGraduationPicker = false;
      this.showRetirePicker = false;
      this.showPoliticsPicker = false;
      this.showHardPicker = false;
      this.showAdProvince = false;
    },

    onGraduationChange(value, index) {
      this.form.graduationLabel = value.label;
      this.form.graduation = value.value;
      this.showGraduationPicker = false;
    },

    onPoliticsChange(value, index) {
      this.form.politicsLabel = value.label;
      this.form.politics = value.value;
      this.showPoliticsPicker = false;
    },

    onRetireChange(value, index) {
      this.form.retireLabel = value.label;
      this.form.retire = value.value;
      this.showRetirePicker = false;
    },

    onHardChange(value, index) {
      this.form.hardLabel = value.label;
      this.form.hard = value.value;
      this.showHardPicker = false;
    },

    onAdProvince(value, index) {
      this.form.adProvince = value;
      this.form.adProvinceLabel = value.join();
      this.showAdProvince = false;
    },

    handleChangeConnType(data) {
      console.log(data);
      this.connType = data;
      this.$set(this.form, 'connType', data);
    }

  }
});
// CONCATENATED MODULE: ./pages/newStudent/studentInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var newStudent_studentInfovue_type_script_lang_js_ = (studentInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/newStudent/studentInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(226)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  newStudent_studentInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "344a2c21",
  "ad19bac2"
  
)

/* harmony default export */ var studentInfo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MySex: __webpack_require__(123).default,UploadSquare: __webpack_require__(133).default})


/***/ })

};;
//# sourceMappingURL=studentInfo.js.map