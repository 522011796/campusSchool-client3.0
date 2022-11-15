exports.ids = [7];
exports.modules = {

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(210);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("548b4fae", content, true, context)
};

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appServerForm_vue_vue_type_style_index_0_id_5e846832_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appServerForm_vue_vue_type_style_index_0_id_5e846832_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appServerForm_vue_vue_type_style_index_0_id_5e846832_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appServerForm_vue_vue_type_style_index_0_id_5e846832_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appServerForm_vue_vue_type_style_index_0_id_5e846832_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appServerForm_vue_vue_type_style_index_0_id_5e846832_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-5e846832]{height:60px;line-height:60px;width:100%}.content-block[data-v-5e846832]{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;background:#fff}.title-block-tag[data-v-5e846832]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-5e846832]{font-weight:700;position:relative;top:-5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appServerForm.vue?vue&type=template&id=5e846832&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-5e846832></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block color-white",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-5e846832>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"6"}},[_c('div',{staticClass:"text-left padding-lr-10"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnBlock}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n            "+_vm._s(_vm.$t("返回"))+"\n          ")])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"18"}},[_c('div',{staticClass:"text-right padding-lr-10"},[(_vm.customUserStatus == true)?[_c('el-select',{staticStyle:{"width":"130px"},attrs:{"size":"small","multiple":"","collapse-tags":"","placeholder":"请选择审批人"},model:{value:(_vm.auditSelUser),callback:function ($$v) {_vm.auditSelUser=$$v},expression:"auditSelUser"}},_vm._l((_vm.auditUsers),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)]:_vm._e(),_vm._v(" "),_c('span',{staticStyle:{"position":"relative","top":"-5px"}},[(_vm.fromCreateBtnShow == true)?_c('van-button',{attrs:{"plain":"","size":"small","type":"primary","loading":_vm.btnLoading},on:{"click":function($event){return _vm.serverSubBlock($event)}}},[_c('i',{staticClass:"fa fa-edit"}),_vm._v("\n              "+_vm._s(_vm.fromCreateBtnText)+"\n            ")]):_vm._e()],1)],2)])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"margin-top:1px;\" data-v-5e846832>","</div>",[_vm._ssrNode("<div class=\"content-block padding-tb-10\""+(_vm._ssrStyle({"background":"#f5f5f5"},_vm.divHeight7, null))+" data-v-5e846832>","</div>",[_vm._ssrNode("<div class=\"color-muted font-size-12 bg-white padding-lr-10 padding-tb-10\" data-v-5e846832><span data-v-5e846832><label class=\"title-block-tag\" data-v-5e846832></label> <label class=\"title-block-text color-warning\" data-v-5e846832>"+_vm._ssrEscape(_vm._s(_vm.$t("服务简介")))+"</label></span></div> "),_vm._ssrNode("<div class=\"bg-white padding-lr-10\" style=\"padding-bottom: 10px\" data-v-5e846832>","</div>",[_vm._ssrNode("<div data-v-5e846832>","</div>",[(_vm.serverDetail.des && _vm.serverDetail.des != '')?[_vm._ssrNode(((_vm.showCollapse == false)?("<div data-v-5e846832><span data-v-5e846832>"+_vm._ssrEscape(_vm._s(_vm.serverDetailTitle))+"</span> <span data-v-5e846832><i class=\"fa fa-angle-down pull-right\" data-v-5e846832></i></span></div>"):"<!---->")+" "),_c('el-collapse-transition',[(_vm.showCollapse == true)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showCollapse),expression:"showCollapse"}],on:{"click":function($event){_vm.showCollapse = false}}},[_vm._v("\n                "+_vm._s(_vm.serverDetail.des)+"\n                "),_c('span',[_c('i',{staticClass:"fa fa-angle-up pull-right"})])]):_vm._e()])]:[_c('van-empty',{staticStyle:{"padding":"0px !important"},attrs:{"description":"暂无数据","image-size":"50"}})]],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10 bg-white\" data-v-5e846832>","</div>",[_vm._ssrNode("<div class=\"color-muted font-size-12 bg-white padding-lr-10 padding-tb-10\" data-v-5e846832><span data-v-5e846832><label class=\"title-block-tag\" data-v-5e846832></label> <label class=\"title-block-text color-warning\" data-v-5e846832>"+_vm._ssrEscape(_vm._s(_vm.$t("表单内容")))+"</label></span></div> "),_vm._ssrNode("<div class=\"margin-right-10 margin-left-10\" data-v-5e846832>","</div>",[(_vm.formCreateRuleData != '')?_c('form-create',{attrs:{"rule":_vm.formCreateRuleData,"option":_vm.formCreateOptionData},model:{value:(_vm.fApi),callback:function ($$v) {_vm.fApi=$$v},expression:"fApi"}}):_vm._e()],1)],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/appServerForm.vue?vue&type=template&id=5e846832&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(15);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appServerForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var appServerFormvue_type_script_lang_js_ = ({
  name: 'appServerForm',
  layout: 'defaultAppScreen',
  mixins: [mixins["a" /* default */]],

  data() {
    return {
      rateValue: 0,
      serverDetailTitle: '',
      serverDetail: '',
      fApi: {},
      formCreateRuleData: [],
      formCreateOptionData: {},
      btnLoading: false,
      customUserStatus: false,
      fromCreateBtnShow: true,
      showCollapse: false,
      fromCreateBtnText: '',
      auditUsers: [],
      auditSelUser: [],
      activeName: ''
    };
  },

  mounted() {
    this.$nextTick(() => {});
  },

  created() {
    this.init();
  },

  methods: {
    layoutInit() {},

    async init() {
      let list = [];
      let params = {
        id: this.$route.query.id
      };
      await this.getSessionInfo();
      this.$axios.get(api_url["a" /* common */].server_form_allInfo, {
        params: params
      }).then(res => {
        if (res.data.code == 200) {
          let auditUser = [];
          this.serverDetail = res.data.data;
          this.serverDetailTitle = res.data.data.des ? res.data.data.des.substr(0, 50) + "..." : '';
          let processList = res.data.data.processList;
          this.customUserStatus = false;
          this.fromCreateBtnShow = res.data.data.submitButton;
          this.fromCreateBtnText = res.data.data.buttonName != "" ? res.data.data.buttonName : this.$t("提交");

          if (res.data.data.formContent != null && res.data.data.formContent != '') {
            this.formCreateRuleData = JSON.parse(res.data.data.formContent).rule;
            this.formCreateOptionData = JSON.parse(res.data.data.formContent).option;
            this.setFormChildren(this.formCreateRuleData, list, 'children');
          }

          for (let i = 0; i < processList.length; i++) {
            if (processList[i].htype == 'CustomUser') {
              let processUser = processList[i].hid;
              let processUserName = processList[i].hname;

              for (let j = 0; j < processUser.length; j++) {
                auditUser.push({
                  label: processUserName[j],
                  value: processUser[j],
                  text: processUserName[j]
                });
              }

              this.customUserStatus = true;
            }
          }

          this.auditUsers = auditUser;
        }
      });
    },

    setFormChildren(array, obj, param) {
      let _self = this;

      if (array && array.length > 0) {
        array.map(function (item, index) {
          if (item[param] != undefined && item[param].length > 0) {
            _self.setFormChildren(item[param], obj, param);
          } else {
            if (item.type == "upload") {
              item['props'] = {
                uploadType: 'image',
                action: '/proxy/school/multipartFile/upload',
                data: {
                  "path": "applet"
                },

                onSuccess(res, file) {
                  let url = "";

                  if (res.data.url != "") {
                    // let urlHttps = res.data.url.indexOf("https");
                    // let urlHttp = res.data.url.indexOf("http");
                    // if (urlHttps == -1 || urlHttp == -1){
                    //   url = "http:" + res.data.url
                    // }else {
                    //   url = res.data.url
                    // }
                    if (res.data.url.indexOf("files") > -1) {
                      let url1 = res.data.url.split("files")[0];
                      let url2 = res.data.url.split("files")[1];
                      url = "https://campus.9451.com:28090/files/" + url2;
                    }
                  }

                  file.url = url;
                  console.log(url);
                }

              };
            }
          }
        });
        return obj;
      }
    },

    serverSubBlock() {
      this.fApi.submit((formData, fApi) => {
        let url = "";
        let ruleList = [];

        if (this.auditSelUser.length == 0 && this.customUserStatus == true) {
          Object(external_vant_["Toast"])(this.$t("请选择审批人！"));
          return;
        }

        ;
        let params = {
          appletFormId: this.$route.query.id,
          userId: this.loginUserId,
          //applyContent: JSON.stringify(formData),
          customHandleUserIds: JSON.stringify(this.auditSelUser)
        };
        let rule = fApi.rule;
        let ruleObjList = this.setRuleChild(rule, ruleList);
        params['applyContent'] = JSON.stringify(ruleObjList);
        url = api_url["a" /* common */].server_form_add;
        params = this.$qs.stringify(params);
        this.btnLoading = true;
        this.$axios.post(url, params, {
          loading: false
        }).then(res => {
          if (res.data.code == 200) {
            Object(external_vant_["Toast"])(res.data.desc);
          } else {
            Object(external_vant_["Toast"])(res.data.desc);
          }

          this.btnLoading = false;
        });
      });
    },

    returnBlock() {
      let page = this.$route.query.page ? this.$route.query.page : '/app/appIndex';
      this.$router.push({
        path: page,
        query: {
          id: this.$route.query.id,
          activeType: this.$route.query.activeType,
          userType: this.loginUserAppType,
          navH: this.navHeight,
          appType: this.globalAppShow,
          sessionId: this.$route.query.sessionId
        }
      });
    },

    setRuleChild(rule, ruleList) {
      let obj = {};

      for (let i = 0; i < rule.length; i++) {
        if (rule[i]['children'] && rule[i]['children'].length > 0) {
          this.setRuleChild(rule[i]['children'], ruleList);
          continue;
        } else {
          if (rule[i].field) {
            obj = {
              field: rule[i].field,
              title: rule[i].title,
              type: rule[i].type,
              value: rule[i].value
            };
            ruleList.push(obj);
          }
        }
      }

      return ruleList;
    }

  }
});
// CONCATENATED MODULE: ./pages/app/appServerForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_appServerFormvue_type_script_lang_js_ = (appServerFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/app/appServerForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(209)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_appServerFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5e846832",
  "3149f400"
  
)

/* harmony default export */ var appServerForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=appServerForm.js.map