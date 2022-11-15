exports.ids = [9];
exports.modules = {

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

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6597e46f", content, true, context)
};

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPrint_vue_vue_type_style_index_0_id_3e16f8fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPrint_vue_vue_type_style_index_0_id_3e16f8fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPrint_vue_vue_type_style_index_0_id_3e16f8fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPrint_vue_vue_type_style_index_0_id_3e16f8fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPrint_vue_vue_type_style_index_0_id_3e16f8fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPrint_vue_vue_type_style_index_0_id_3e16f8fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-3e16f8fa]{padding:0 40px 40px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/formPrint.vue?vue&type=template&id=3e16f8fa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",style:(_vm.divHeight13)},[_vm._ssrNode("<div class=\"text-center font-size-16 font-bold margin-top-30 color-black\" data-v-3e16f8fa>"+((_vm.$route.query.title && _vm.$route.query.title != '')?("<span data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$route.query.title))+"</span>"):("<span data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("打印表单")))+"</span>"))+"</div> "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-3e16f8fa>","</div>",[_vm._ssrNode("<div class=\"padding-tb-10 padding-lr-10\" data-v-3e16f8fa><span class=\"title-block-tag\" data-v-3e16f8fa></span> <span class=\"title-block-text color-black\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("基本信息")))+"</span></div> "),_vm._ssrNode("<table class=\"custom-table-black\" data-v-3e16f8fa>","</table>",[_vm._ssrNode("<tr data-v-3e16f8fa>","</tr>",[_vm._ssrNode("<td class=\"font-size-12 font-bold\" style=\"width: 10%\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("姓名")))+"</td> <td class=\"color-black font-size-12\" style=\"width: 20%\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.detailData.applyUserName))+"</td> <td class=\"font-size-12 font-bold\" style=\"width: 10%\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("性别")))+"</td> "),_vm._ssrNode("<td class=\"color-black font-size-12\" style=\"width: 15%\" data-v-3e16f8fa>","</td>",[_c('my-sex',{attrs:{"tag":"text","sex":_vm.detailData.sex}})],1),_vm._ssrNode(" <td class=\"font-size-12 font-bold\" style=\"width: 10%\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("工号/学号")))+"</td> <td class=\"color-black font-size-12\" style=\"width: 15%\" data-v-3e16f8fa>"+((_vm.detailData.userType == 5)?("<span data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.detailData.userNo))+"</span>"):"<!---->")+" "+((_vm.detailData.userType == 4)?("<span data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.detailData.userNo))+"</span>"):"<!---->")+"</td>")],2),_vm._ssrNode(" <tr data-v-3e16f8fa><td class=\"font-size-12 font-bold\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("班级/部门")))+"</td> <td class=\"color-black font-size-12\" data-v-3e16f8fa>"+((_vm.detailData.userType == 5)?("<span data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.detailData.className))+"</span>"):"<!---->")+" "+((_vm.detailData.userType == 4)?("<span data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.detailData.departmentName))+"</span>"):"<!---->")+"</td> <td class=\"font-size-12 font-bold\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("申请日期")))+"</td> <td class=\"color-black font-size-12\" data-v-3e16f8fa>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$moment(_vm.detailData.applyTime).format("YYYY-MM-DD HH:mm:ss"))+"\n        ")+"</td> <td class=\"font-size-12 font-bold\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("审批状态")))+"</td> <td class=\"color-black font-size-12\" data-v-3e16f8fa>"+((_vm.detailData.status === -1)?("<label data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("撤销")))+"</label>"):"<!---->")+" "+((_vm.detailData.status === 0)?("<label data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("待审核")))+"</label>"):"<!---->")+" "+((_vm.detailData.status === 3)?("<label data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("通过")))+"</label>"):"<!---->")+" "+((_vm.detailData.status === 4)?("<label data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("未通过")))+"</label>"):"<!---->")+"</td></tr> <tr data-v-3e16f8fa><td class=\"font-size-12 font-bold\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("编号")))+"</td> <td class=\"color-black font-size-12\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.detailData.formId))+"</td> <td class=\"font-size-12 font-bold\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("表单名称")))+"</td> <td colspan=\"3\" class=\"color-black font-size-12\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.detailData.formName))+"</td></tr>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-3e16f8fa>","</div>",[_vm._ssrNode("<div class=\"padding-tb-10 padding-lr-10\" data-v-3e16f8fa><span class=\"title-block-tag\" data-v-3e16f8fa></span> <span class=\"title-block-text color-black\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("表单内容")))+"</span></div> "),_vm._ssrNode("<table class=\"custom-table-black\" data-v-3e16f8fa>","</table>",_vm._l((_vm.detailApplyContentData),function(item,index){return _vm._ssrNode("<tr data-v-3e16f8fa>","</tr>",[(item.type != 'fc-editor' && item.type != 'upload')?[_vm._ssrNode("<td style=\"width: 20%;text-align: right;padding-right: 15px\" data-v-3e16f8fa><span class=\"color-black\" data-v-3e16f8fa><label class=\"font-size-12 font-bold\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(item.title))+"</label></span></td> "),_vm._ssrNode("<td style=\"text-align: left;padding-left: 15px\" data-v-3e16f8fa>","</td>",[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":item.value,"placement":"top"}},[_c('span',{},[_c('label',{staticClass:"font-size-12"},[_vm._v(_vm._s(item.value))])])])],1)]:(item.type != 'fc-editor' && item.type == 'upload')?[_vm._ssrNode("<td style=\"width: 20%;text-align: right;padding-right: 15px\" data-v-3e16f8fa>"+((!item.value || item.value.length <= 0)?("<span class=\"moon-content-text-ellipsis-class font-bold\" data-v-3e16f8fa>"+_vm._ssrEscape("\n              "+_vm._s(item.title)+"\n            ")+"</span>"):("<span class=\"color-black font-bold\" style=\"position: relative;\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(item.title)+": ")+"</span>"))+"</td> "),_vm._ssrNode("<td style=\"text-align: left;padding-left: 15px\" data-v-3e16f8fa>","</td>",[(!item.value || item.value.length <= 0)?_vm._ssrNode("<span data-v-3e16f8fa>","</span>",[_vm._ssrNode("<div style=\"height: 20px;line-height: 20px\" data-v-3e16f8fa></div>")],2):_vm._l((item.value),function(itemImg,indexImg){return _vm._ssrNode("<span class=\"custom-avatar\" style=\"display: inline-block;margin-right: 5px;position: relative; top: 5px\" data-v-3e16f8fa>","</span>",[_c('el-avatar',{attrs:{"shape":"square","size":"small","src":itemImg,"fit":"fill"}})],1)})],2)]:_vm._ssrNode("<td style=\"width: 20%;text-align: right;padding-right: 15px\" data-v-3e16f8fa><span class=\"color-black font-bold moon-content-text-ellipsis-class\" style=\"position: relative;top: -50px;\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(item.title)+": ")+"</span></td> <td style=\"text-align: left;padding-left: 15px\" data-v-3e16f8fa>"+((item.type == 'fc-editor')?("<div style=\"width: 95%;min-height: 150px;overflow-y:auto;display: inline-block;border: 1px solid #dddddd;border-radius: 5px;padding: 0px 10px\" data-v-3e16f8fa>"+(_vm._s(item.value))+"</div>"):"<!---->")+"</td>")],2)}),0)],2),_vm._ssrNode(" <div class=\"margin-top-20\" data-v-3e16f8fa><div class=\"padding-tb-10 padding-lr-10\" data-v-3e16f8fa><span class=\"title-block-tag\" data-v-3e16f8fa></span> <span class=\"title-block-text color-black\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("审核信息")))+"</span></div> <table class=\"custom-table-black\" data-v-3e16f8fa>"+(_vm._ssrList((_vm.detailApplyAuditList),function(itemUser,indexUser){return ("<tr data-v-3e16f8fa><td class=\"font-size-12 font-bold\" style=\"width: 20%\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("审核人")))+"</td> <td class=\"color-black font-size-12\" style=\"width: 20%\" data-v-3e16f8fa>"+_vm._ssrEscape("\n          "+_vm._s(itemUser.userName)+"\n        ")+"</td> <td class=\"font-size-12 font-bold\" style=\"width: 15%\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("审核状态")))+"</td> <td class=\"color-black font-size-12\" style=\"width: 15%\" data-v-3e16f8fa>"+((itemUser.status === -1)?("<label data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("撤销")))+"</label>"):"<!---->")+" "+((itemUser.status === 0)?("<label data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("待审核")))+"</label>"):"<!---->")+" "+((itemUser.status === 3)?("<label data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("通过")))+"</label>"):"<!---->")+" "+((itemUser.status === 4)?("<label data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("未通过")))+"</label>"):"<!---->")+" "+((itemUser.status === 1)?("<label data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("已通过")))+"</label>"):"<!---->")+" "+((itemUser.status === 2)?("<label data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("已驳回")))+"</label>"):"<!---->")+" "+((itemUser.status === 5)?("<label data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("无需审批")))+"</label>"):"<!---->")+" "+((itemUser.status === 8)?("<label data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("审批中")))+"</label>"):"<!---->")+"</td> <td class=\"font-size-12 font-bold\" style=\"width: 10%\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("审核时间")))+"</td> <td class=\"color-black font-size-12\" style=\"width: 20%\" data-v-3e16f8fa>"+((itemUser.handleTime)?("<label data-v-3e16f8fa>"+_vm._ssrEscape("\n            "+_vm._s(_vm.$moment(itemUser.handleTime).format("YYYY-MM-DD HH:mm:ss"))+"\n          ")+"</label>"):("<label class=\"color-black\" data-v-3e16f8fa>--</label>"))+"</td></tr>")}))+"</table></div> <div class=\"text-right padding-tb-10 color-black\" data-v-3e16f8fa><span data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$t("打印时间")))+"</span> <span class=\"margin-left-5\" data-v-3e16f8fa>"+_vm._ssrEscape(_vm._s(_vm.$route.query.time))+"</span></div> <div class=\"margin-top-20\" data-v-3e16f8fa></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/formPrint.vue?vue&type=template&id=3e16f8fa&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/formPrint.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var formPrintvue_type_script_lang_js_ = ({
  layout: 'defaultFullScreen',
  mixins: [mixins["a" /* default */]],
  components: {},

  data() {
    return {
      detailData: {},
      tableSignData: [],
      detailApplyAuditList: [],
      detailApplyAuditUserData: {},
      detailApplyContentData: []
    };
  },

  mounted() {},

  created() {
    this.initAuditDetailList();
  },

  methods: {
    initAuditDetailList() {
      let params = {
        id: this.$route.query.serverId
      };
      this.$axios.get(url["a" /* common */].server_form_audit_query, {
        params: params
      }).then(res => {
        if (res.data.code == 200) {
          if (res.data.data) {
            this.detailData = res.data.data;

            if (res.data.data.applyContent && res.data.data.applyContent != "[]") {
              this.detailApplyContentData = JSON.parse(res.data.data.applyContent);
            }

            let detailApplyAuditList = [];
            let handleUserList = [];

            for (let i = 0; i < res.data.data.handleList.length; i++) {
              if (res.data.data.handleList[i].nodeType == 'handle') {
                for (let j = 0; j < res.data.data.handleList[i].handleUserList.length; j++) {
                  if (res.data.data.handleList[i]['handleUserList']) {
                    handleUserList.push(res.data.data.handleList[i].handleUserList[j]);
                  }
                }
              }
            }

            this.detailApplyAuditList = handleUserList;
          }
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/formPrint.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_formPrintvue_type_script_lang_js_ = (formPrintvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/formPrint.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(171)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_formPrintvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e16f8fa",
  "f150c6e2"
  
)

/* harmony default export */ var formPrint = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MySex: __webpack_require__(123).default})


/***/ })

};;
//# sourceMappingURL=formPrint.js.map