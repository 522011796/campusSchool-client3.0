exports.ids = [4];
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

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e3005a82", content, true, context)
};

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appMsgDetail_vue_vue_type_style_index_0_id_0cff84ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appMsgDetail_vue_vue_type_style_index_0_id_0cff84ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appMsgDetail_vue_vue_type_style_index_0_id_0cff84ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appMsgDetail_vue_vue_type_style_index_0_id_0cff84ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appMsgDetail_vue_vue_type_style_index_0_id_0cff84ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appMsgDetail_vue_vue_type_style_index_0_id_0cff84ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-0cff84ae]{height:60px;width:100%}.content-block[data-v-0cff84ae]{border-top-left-radius:15px;border-top-right-radius:15px;background:#fff;width:100%;position:relative;top:-15px}.app-title-border-tag[data-v-0cff84ae]{width:5px;height:30px;background:#1ea084;display:inline-block}.notice-list-item[data-v-0cff84ae]{height:45px;line-height:45px}.header-tab-block[data-v-0cff84ae]{background:#fff;border-radius:5px;height:80px;box-shadow:0 0 4px #bbb}.avatar-uploader-icon[data-v-0cff84ae]{font-size:28px;color:#8c939d;width:60px;height:60px;line-height:60px;text-align:center;border:1px dashed #ddd;font-size:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appMsgDetail.vue?vue&type=template&id=0cff84ae&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-0cff84ae></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block color-white",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-0cff84ae>","</div>",[_c('van-row',{staticClass:"padding-top-20"},[_c('van-col',{attrs:{"span":"8"}},[_c('div',{staticClass:"text-left padding-lr-10 header-class"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n            "+_vm._s(_vm.$t("返回"))+"\n          ")])])]),_vm._v(" "),_c('van-col',{staticClass:"text-center header-class",attrs:{"span":"8"}},[_c('div',{staticClass:"font-bold"},[_vm._v(_vm._s(_vm.$t("消息详情")))])]),_vm._v(" "),_c('van-col',{staticClass:"text-right header-class",staticStyle:{"padding-right":"15px"},attrs:{"span":"8"}},[_vm._v("\n         \n      ")])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"position: relative\" data-v-0cff84ae>","</div>",[_vm._ssrNode("<div class=\"padding-tb-10 bg-white\" data-v-0cff84ae>","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,_vm.divHeight16, null))+" data-v-0cff84ae>","</div>",[_vm._ssrNode("<div class=\"padding-lr-0 bg-white\" data-v-0cff84ae>","</div>",[_vm._ssrNode("<div class=\"color-muted margin-top-0 font-size-12 padding-lr-10 padding-tb-10\" data-v-0cff84ae><span data-v-0cff84ae><label class=\"title-block-tag\" data-v-0cff84ae></label> <label class=\"title-block-text color-warning\" data-v-0cff84ae>"+_vm._ssrEscape(_vm._s(_vm.$t("基础信息")))+"</label></span></div> "),_vm._ssrNode("<div class=\"detail-block-title padding-lr-10 padding-tb-5 font-size-12\" data-v-0cff84ae>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("申请人"))+":")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.detailData.applyUserName))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("学号/工号"))+":")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.detailData.userNo))])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"margin-top-5"},[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("服务名称"))+":")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.detailData.formName))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("班级/部门"))+":")]),_vm._v(" "),_c('span',[(_vm.detailData.userType == 5)?_c('label',[_vm._v(_vm._s(_vm.detailData.className))]):_vm._e(),_vm._v(" "),(_vm.detailData.userType == 4)?_c('label',[_vm._v(_vm._s(_vm.detailData.departmentName))]):_vm._e()])])],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"margin-top-5"},[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("申请日期"))+":")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.detailData.applyTime ? _vm.$moment(_vm.detailData.applyTime).format("YYYY-MM-DD HH:mm") : ""))])])],1)],2)],2),_vm._ssrNode(" <div style=\"background: #f5f5f5;height: 10px;margin-top: 10px\" data-v-0cff84ae></div> "),_vm._ssrNode("<div class=\"margin-top-10 padding-lr-10 bg-white padding-tb-10\" data-v-0cff84ae>","</div>",[_vm._ssrNode("<div class=\"color-muted margin-top-5 font-size-12\" data-v-0cff84ae><span data-v-0cff84ae><label class=\"title-block-tag\" data-v-0cff84ae></label> <label class=\"title-block-text color-warning\" data-v-0cff84ae>"+_vm._ssrEscape(_vm._s(_vm.$t("申请内容")))+"</label></span></div> "),_vm._ssrNode("<div class=\"block-item-bg font-size-12 margin-top-10 color-sub-title\" data-v-0cff84ae>","</div>",[_vm._ssrNode("<table class=\"custom-table\" data-v-0cff84ae>","</table>",_vm._l((_vm.detailApplyContentData),function(item,index){return _vm._ssrNode("<tr data-v-0cff84ae>","</tr>",[(item.type != 'fc-editor' && item.type != 'upload')?[_vm._ssrNode("<td style=\"width: 30%;text-align: right;padding-right: 15px\" data-v-0cff84ae><span class=\"color-muted moon-content-text-ellipsis-class\" data-v-0cff84ae><label class=\"font-size-12\" data-v-0cff84ae>"+_vm._ssrEscape(_vm._s(item.title))+"</label></span></td> "),_vm._ssrNode("<td style=\"text-align: left;padding-left: 15px\" data-v-0cff84ae>","</td>",[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":item.value,"placement":"top"}},[_c('span',{staticClass:"moon-content-text-ellipsis-class"},[_c('label',{staticClass:"font-size-12"},[_vm._v(_vm._s(item.value))])])])],1)]:(item.type != 'fc-editor' && item.type == 'upload')?[_vm._ssrNode("<td style=\"width: 30%;text-align: right;padding-right: 15px\" data-v-0cff84ae>"+((!item.value || item.value.length <= 0)?("<span class=\"color-muted moon-content-text-ellipsis-class\" data-v-0cff84ae>"+_vm._ssrEscape("\n                    "+_vm._s(item.title)+"\n                  ")+"</span>"):("<span class=\"color-muted\" style=\"position: relative;\" data-v-0cff84ae>"+_vm._ssrEscape(_vm._s(item.title)+": ")+"</span>"))+"</td> "),_vm._ssrNode("<td style=\"text-align: left;padding-left: 15px\" data-v-0cff84ae>","</td>",[(!item.value || item.value.length <= 0)?_vm._ssrNode("<span data-v-0cff84ae>","</span>",[_vm._ssrNode("<div style=\"height: 20px;line-height: 20px\" data-v-0cff84ae></div>")],2):_vm._l((item.value),function(itemImg,indexImg){return _vm._ssrNode("<span class=\"custom-avatar\" style=\"display: inline-block;margin-right: 5px;position: relative; top: 5px\" data-v-0cff84ae>","</span>",[_c('el-avatar',{attrs:{"shape":"square","size":"small","src":itemImg,"fit":"fill"}})],1)})],2)]:_vm._ssrNode("<td style=\"width: 30%;text-align: right;padding-right: 15px\" data-v-0cff84ae><span class=\"color-muted font-bold moon-content-text-ellipsis-class\" style=\"position: relative;top: -50px;\" data-v-0cff84ae>"+_vm._ssrEscape(_vm._s(item.title)+": ")+"</span></td> <td style=\"text-align: left;padding-left: 15px\" data-v-0cff84ae>"+((item.type == 'fc-editor')?("<div style=\"width: 90%;height: 150px;overflow-y:auto;display: inline-block;border: 1px solid #dddddd;border-radius: 5px;padding: 0px 10px\" data-v-0cff84ae>"+(_vm._s(item.value))+"</div>"):"<!---->")+"</td>")],2)}),0)])],2),_vm._ssrNode(" <div style=\"background: #f5f5f5;height: 10px;margin-top: 10px\" data-v-0cff84ae></div> "),_vm._ssrNode("<div class=\"margin-top-10 padding-lr-10 bg-white padding-tb-10\" data-v-0cff84ae>","</div>",[_vm._ssrNode("<div class=\"color-muted margin-top-5 font-size-12\" data-v-0cff84ae><span data-v-0cff84ae><label class=\"title-block-tag\" data-v-0cff84ae></label> <label class=\"title-block-text color-warning\" data-v-0cff84ae>"+_vm._ssrEscape(_vm._s(_vm.$t("审批进度")))+"</label></span></div> "),_vm._ssrNode("<div class=\"block-item-bg font-size-12 margin-top-10 color-sub-title\" data-v-0cff84ae>","</div>",[_c('el-steps',{attrs:{"direction":"vertical","space":"60px"}},_vm._l((_vm.detailApplyAuditList),function(item,index){return _c('el-step',{key:index},[_c('div',{attrs:{"slot":"icon"},slot:"icon"},[_c('i',{staticClass:"fa fa-flag",staticStyle:{"font-size":"12px"}})]),_vm._v(" "),_c('div',{staticClass:"font-size-12",attrs:{"slot":"title"},slot:"title"},[(item.nodeType == 'handle')?_c('span',{staticClass:"color-success"},[_vm._v("\n                  "+_vm._s(_vm.$t("审批"))+"\n                  "),(item.andor == 'and')?_c('label',[_vm._v(" ("+_vm._s(_vm.$t("与签"))+") ")]):_vm._e(),_vm._v(" "),(item.andor == 'or')?_c('label',[_vm._v(" ("+_vm._s(_vm.$t("或签"))+") ")]):_vm._e()]):_vm._e(),_vm._v(" "),(item.nodeType == 'cc')?_c('span',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("抄送")))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"font-size-12 color-sub-title",attrs:{"slot":"description"},slot:"description"},[_c('div',[(item.nodeType == 'handle')?_vm._l((item.handleUserList),function(itemUser,indexUser){return _c('div',{key:indexUser},[_c('span',{staticClass:"color-grand"},[_c('i',{staticClass:"fa fa-user"}),_vm._v(" "+_vm._s(itemUser.userName)+" ")]),_vm._v(" "),_c('span',{staticClass:"margin-left-10"},[(itemUser.status === -1)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("撤销")))]):_vm._e(),_vm._v(" "),(itemUser.status === 0)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("待审核")))]):_vm._e(),_vm._v(" "),(itemUser.status === 3)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("通过")))]):_vm._e(),_vm._v(" "),(itemUser.status === 4)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未通过")))]):_vm._e(),_vm._v(" "),(itemUser.status === 1)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("已通过")))]):_vm._e(),_vm._v(" "),(itemUser.status === 2)?_c('label',{staticClass:"color-warning"},[_vm._v("\n                          "+_vm._s(_vm.$t("已驳回"))+"\n                          "),(itemUser.des)?_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":itemUser.des,"placement":"top"}},[_c('i',{staticClass:"fa fa-warning color-warning"})]):_vm._e()],1):_vm._e(),_vm._v(" "),(itemUser.status === 5)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("无需审批")))]):_vm._e(),_vm._v(" "),(itemUser.status === 8)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("审批中")))]):_vm._e()]),_vm._v(" "),(itemUser.handleTime)?_c('span',{staticClass:"margin-left-10"},[_c('label',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$moment(itemUser.handleTime).format("YYYY-MM-DD HH:mm:ss")))])]):_vm._e()])}):_vm._e(),_vm._v(" "),(item.nodeType == 'cc')?[_vm._l((item.handleUserNameList),function(itemUser,indexUser){return (indexUser <= 3)?_c('el-tag',{key:indexUser,attrs:{"size":"mini"}},[_c('div',{staticClass:"moon-content-text-ellipsis-class",staticStyle:{"width":"50px"}},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":itemUser,"placement":"top-start"}},[_c('span',[_vm._v(_vm._s(itemUser))])])],1)]):_vm._e()}),_vm._v(" "),(item.handleUserNameList.length > 3)?_c('el-popover',{attrs:{"placement":"left","width":"200","trigger":"hover"}},[_c('div',{staticStyle:{"height":"100px","overflow-y":"auto"}},_vm._l((item.handleUserNameList),function(itemUser,indexUser){return _c('div',{key:indexUser},[_c('div',{staticClass:"font-size-12 padding-tb-5"},[_c('span',[_vm._v(_vm._s(itemUser))])])])}),0),_vm._v(" "),_c('el-tag',{attrs:{"slot":"reference","size":"mini","type":"success"},slot:"reference"},[_c('div',{staticClass:"moon-content-text-ellipsis-class padding-lr-5"},[_c('i',{staticClass:"fa fa-user"}),_vm._v(" "),_c('label',{staticClass:"margin-left-5"},[_vm._v(_vm._s(item.handleUserNameList.length))])])])],1):_vm._e()]:_vm._e()],2)])])}),1)],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"height: 60px;line-height: 60px;text-align: center;background: #f5f5f5\" data-v-0cff84ae>","</div>",[(_vm.detailData.cancel == true)?_vm._ssrNode("<div data-v-0cff84ae>","</div>",[_c('el-button',{staticStyle:{"width":"100px"},attrs:{"size":"small","type":"primary"},on:{"click":function($event){return _vm.handleOk($event, _vm.detailData, -1)}}},[_vm._v("撤 销")])],1):_vm._e(),_vm._ssrNode(" "),(_vm.detailData.handle == true)?_vm._ssrNode("<div data-v-0cff84ae>","</div>",[(_vm.detailApplyAuditUserData.agreen1 == true)?_c('el-popover',{attrs:{"tabindex":99999,"placement":"top","width":"300"},on:{"hide":_vm.cancelPop},model:{value:(_vm.visibleYes),callback:function ($$v) {_vm.visibleYes=$$v},expression:"visibleYes"}},[_c('div',{staticClass:"margin-bottom-10"},[_c('div',[_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":"请输入内容"},model:{value:(_vm.textarea),callback:function ($$v) {_vm.textarea=$$v},expression:"textarea"}})],1),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('div',[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v(_vm._s(_vm.$t("上传图片")))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_vm._l((_vm.images),function(item,index){return _c('span',{key:index,staticClass:"pull-left",staticStyle:{"position":"relative"}},[_c('i',{staticClass:"fa fa-times-circle color-danger",staticStyle:{"font-size":"14px","position":"absolute","right":"2px","top":"-5px"},on:{"click":function($event){return _vm.clearImage($event, index)}}}),_vm._v(" "),_c('img',{staticStyle:{"margin-right":"10px","height":"30px","width":"30px"},attrs:{"src":item.picture_url,"fit":"fit"}})])}),_vm._v(" "),_c('upload-square',{ref:"upload",staticClass:"pull-left margin-left-5",attrs:{"action":_vm.uploadFileListUrl,"limit":3,"max-size":"5","data":{path: 'applet'},"accept":".png,.jpg,.jpeg"},on:{"success":_vm.uploadImgListFileSuccess}},[_c('i',{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{"height":"30px","line-height":"30px","width":"30px"}})]),_vm._v(" "),_c('div',{staticClass:"moon-clearfix"})],2)])]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"right","margin":"0"}},[_c('el-button',{attrs:{"size":"mini","type":"text"},on:{"click":_vm.cancelPop}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":function($event){return _vm.handleOk($event, _vm.detailData, 1)}}},[_vm._v("确定")])],1),_vm._v(" "),_c('el-button',{staticStyle:{"width":"100px"},attrs:{"slot":"reference","type":"success","size":"small"},slot:"reference"},[_vm._v(_vm._s(_vm.$t("同意")))])],1):_vm._e(),_vm._ssrNode(" "),(_vm.detailApplyAuditUserData.notagreed1 == true)?_c('el-popover',{attrs:{"tabindex":99999,"placement":"top","width":"300"},on:{"hide":_vm.cancelPop},model:{value:(_vm.visibleNo),callback:function ($$v) {_vm.visibleNo=$$v},expression:"visibleNo"}},[_c('div',{staticClass:"margin-bottom-10"},[_c('div',[_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":"请输入内容"},model:{value:(_vm.textarea),callback:function ($$v) {_vm.textarea=$$v},expression:"textarea"}})],1),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('div',[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v(_vm._s(_vm.$t("上传图片")))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_vm._l((_vm.images),function(item,index){return _c('span',{key:index,staticClass:"pull-left",staticStyle:{"position":"relative"}},[_c('i',{staticClass:"fa fa-times-circle color-danger",staticStyle:{"font-size":"14px","position":"absolute","right":"2px","top":"-5px"},on:{"click":function($event){return _vm.clearImage($event, index)}}}),_vm._v(" "),_c('img',{staticStyle:{"margin-right":"10px","height":"30px","width":"30px"},attrs:{"src":item.picture_url,"fit":"fit"}})])}),_vm._v(" "),_c('upload-square',{ref:"upload",staticClass:"pull-left margin-left-5",attrs:{"action":_vm.uploadFileListUrl,"limit":3,"max-size":"5","data":{path: 'applet'},"accept":".png,.jpg,.jpeg"},on:{"success":_vm.uploadImgListFileSuccess}},[_c('i',{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{"height":"30px","line-height":"30px","width":"30px"}})]),_vm._v(" "),_c('div',{staticClass:"moon-clearfix"})],2)])]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"right","margin":"0"}},[_c('el-button',{attrs:{"size":"mini","type":"text"},on:{"click":_vm.cancelPop}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":function($event){return _vm.handleOk($event, _vm.detailData, 2)}}},[_vm._v("确定")])],1),_vm._v(" "),_c('el-button',{staticStyle:{"width":"100px"},attrs:{"slot":"reference","type":"warning","size":"small"},slot:"reference"},[_vm._v(_vm._s(_vm.$t("驳回")))])],1):_vm._e()],2):_vm._e(),_vm._ssrNode(" "+((_vm.detailData.status == -1)?("<div class=\"text-center color-disabeld font-bold font-size-14\" data-v-0cff84ae>已撤销</div>"):"<!---->")+" "+((_vm.detailData.status == 3)?("<div class=\"text-center color-success font-bold font-size-14\" data-v-0cff84ae>已通过</div>"):"<!---->")+" "+((_vm.detailData.status == 4)?("<div class=\"text-center color-danger font-bold font-size-14\" data-v-0cff84ae>未通过</div>"):"<!---->")+" "+((_vm.detailData.status == 0)?("<div class=\"text-center color-warning font-bold font-size-14\" data-v-0cff84ae>待审核</div>"):"<!---->"))],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/appMsgDetail.vue?vue&type=template&id=0cff84ae&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/mixinsBridge.js
var mixinsBridge = __webpack_require__(122);

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(15);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appMsgDetail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var appMsgDetailvue_type_script_lang_js_ = ({
  name: 'appMsgDetail',
  layout: 'defaultAppScreen',
  mixins: [mixins["a" /* default */], mixinsBridge["a" /* default */]],

  data() {
    return {
      active: 6,
      topHeight: 0,
      serverAppList: [],
      noticeAppList: [],
      pageType: '',
      detailApplyContentData: [],
      detailApplyAuditList: [],
      detailApplyAuditUserData: {},
      detailData: '',
      detailIndex: '',
      visibleNo: false,
      visibleYes: false,
      textarea: '',
      images: [],
      uploadFileListUrl: url["a" /* common */].upload_file
    };
  },

  mounted() {},

  created() {
    this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
    this.topHeight = this.navHeight > 0 ? parseInt(0) + parseInt(this.navHeight) : 10;

    if (this.$route.query.sessionId) {
      this.initAppConfig();
    } //this.initAppRecommend("6372f39257cd5a294897fc52");

  },

  methods: {
    layoutInit() {},

    async initAppConfig() {
      await this.autoLoginApp(); //await this.getSessionInfo();

      setTimeout(() => {
        let id = this.$route.query.msgId;
        this.initAppRecommend(id);
      }, 1000);
    },

    initAppRecommend(id) {
      let params = {
        id: id
      };
      this.$axios.get(url["a" /* common */].server_form_audit_query, {
        params: params
      }).then(res => {
        if (res.data.code == 200) {
          if (res.data.data) {
            this.detailApplyAuditList = res.data.data.handleList;
            let orderIndex = res.data.data.orderIndex;
            this.detailData = res.data.data;

            if (res.data.data.applyContent && res.data.data.applyContent != "[]") {
              this.detailApplyContentData = JSON.parse(res.data.data.applyContent);
            }

            for (let i = 0; i < res.data.data.handleList.length; i++) {
              if (res.data.data.handleList[i].orderIndex == orderIndex) {
                this.detailApplyAuditUserData = {
                  agreen1: res.data.data.handleList[i].agreed1,
                  notagreed1: res.data.data.handleList[i].notagreed1
                };
              }
            }
          }
        }
      });
    },

    handleOk(event, data, type) {
      let params = {
        id: data._id,
        status: type,
        des: this.textarea
      };

      if (this.images.length > 0) {
        let images = [];

        for (let i = 0; i < this.images.length; i++) {
          images.push(this.images[i].picture_url);
        }

        params['url'] = images.join();
      }

      params = this.$qs.stringify(params);
      this.$axios.post(url["a" /* common */].server_form_audit_handle, params).then(res => {
        if (res.data.code == 200) {
          //this.tableData.splice(this.detailIndex, 1);
          //let page = Math.ceil(this.tableData.length / 20);
          //this.page = page;
          //this.init();
          this.initAppRecommend(this.$route.query.msgId);
          this.cancelPop();
          this.popUpVisible = false;
          Object(external_vant_["Toast"])(res.data.desc);
        } else {
          Object(external_vant_["Toast"])(res.data.desc);
        }
      });
    },

    cancelPop() {
      this.textarea = '';
      this.images = [];
      this.visibleOk = false;
      this.visibleNo = false;
    },

    readFile(file) {
      //预览
      Object(external_vant_["ImagePreview"])({
        images: [file],
        closeable: false
      });
    },

    returnIndex() {
      this.returnGlobalMain(1);
    },

    uploadImgListFileSuccess(res, file) {
      if (res.code == 200) {
        this.images.push({
          picture_url: res.data.url
        });
      } else {
        Object(utils["a" /* MessageError */])(res.desc);
      }
    },

    clearImage(event, index) {
      this.images.splice(index, 1);
    }

  }
});
// CONCATENATED MODULE: ./pages/app/appMsgDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_appMsgDetailvue_type_script_lang_js_ = (appMsgDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/app/appMsgDetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(203)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_appMsgDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0cff84ae",
  "0086dc69"
  
)

/* harmony default export */ var appMsgDetail = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UploadSquare: __webpack_require__(133).default})


/***/ })

};;
//# sourceMappingURL=appMsgDetail.js.map