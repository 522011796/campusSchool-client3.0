exports.ids = [5];
exports.modules = {

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

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(206);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f1e13eb2", content, true, context)
};

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appMyNotice_vue_vue_type_style_index_0_id_7a00e3f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appMyNotice_vue_vue_type_style_index_0_id_7a00e3f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appMyNotice_vue_vue_type_style_index_0_id_7a00e3f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appMyNotice_vue_vue_type_style_index_0_id_7a00e3f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appMyNotice_vue_vue_type_style_index_0_id_7a00e3f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appMyNotice_vue_vue_type_style_index_0_id_7a00e3f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-7a00e3f9]{height:60px;width:100%}.content-block[data-v-7a00e3f9]{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;background:#fff}.content-block-item[data-v-7a00e3f9]{background:#f5f5f5;border-radius:5px;margin-bottom:10px}.title-block-tag[data-v-7a00e3f9]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-7a00e3f9]{font-weight:700;position:relative;top:-5px}.detail-block-title[data-v-7a00e3f9]{border-radius:5px;background:#fff}.content-block-item-tag[data-v-7a00e3f9]{border-top-right-radius:5px;padding:5px;font-size:12px;position:absolute;right:0;top:0}.moon-left-menu-tag[data-v-7a00e3f9]{position:absolute;top:0;bottom:0;display:flex;left:50%;transition:all .2s ease-in-out;z-index:99}.moon-left-menu-tag .moon-left-menu-tag-container[data-v-7a00e3f9]{width:100%;height:100%;display:flex;align-items:center;cursor:pointer}.moon-left-menu-tag .moon-left-menu-tag_indicator[data-v-7a00e3f9]{margin-top:-44.5px;width:15px;height:40px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#ebeef5;border-radius:0 4px 4px 0;border:1px solid #e5e5e5;border-left-color:transparent;opacity:1;transition-duration:.2s;transition-timing-function:ease-in-out;color:#ddd;padding-right:2px}.moon-left-menu-tag_indicator[data-v-7a00e3f9]:hover{background:#a0cfff;color:#fff}.moon-left-toogle-menu[data-v-7a00e3f9]{border-right:1px solid #dcdee2;float:left;box-shadow:2px 0 4px #bbb;position:relative;background:#f2f2f2;background-image:linear-gradient(180deg,#f2f2f2,#f2f2f2);padding:0;position:fixed;transition:all .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:99}.icon-class-left[data-v-7a00e3f9]{color:#ddd;transform:rotate(0deg)}.icon-class-right[data-v-7a00e3f9]{transform:rotate(180deg)}.info-block-header[data-v-7a00e3f9]{height:45px;line-height:45px;font-size:14px;color:#909399;background:#e9e9e9}.avatar-uploader-icon[data-v-7a00e3f9]{font-size:28px;color:#8c939d;width:60px;height:60px;line-height:60px;text-align:center;border:1px dashed #ddd;font-size:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appMyNotice.vue?vue&type=template&id=7a00e3f9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-7a00e3f9></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block color-white",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-7a00e3f9>","</div>",[_c('van-row',{staticClass:"padding-top-20"},[_c('van-col',{attrs:{"span":"8"}},[_c('div',{staticClass:"text-left padding-lr-10 header-class"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n              "+_vm._s(_vm.$t("返回"))+"\n            ")])])]),_vm._v(" "),_c('van-col',{staticClass:"text-center header-class",attrs:{"span":"8"}},[_c('div',{staticClass:"font-bold"},[_vm._v(_vm._s(_vm.$t("我的待办")))]),_vm._v(" "),_c('div',{staticClass:"font-size-12"},[_c('span',[_vm._v(_vm._s(this.dateTime))])])]),_vm._v(" "),_c('van-col',{staticClass:"text-right header-class",staticStyle:{"padding-right":"15px"},attrs:{"span":"8"}},[(this.dateTime)?_c('span',{staticClass:"margin-right-5",on:{"click":_vm.clearSearch}},[_vm._v(_vm._s(_vm.$t("清除")))]):_vm._e(),_vm._v(" "),_c('span',[_c('i',{staticClass:"fa fa-calendar",on:{"click":_vm.calendarManage}})])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"position: relative\" data-v-7a00e3f9>","</div>",[_vm._ssrNode("<div class=\"moon-left-menu-tag\""+(_vm._ssrStyle(null,_vm.toggleTag, null))+" data-v-7a00e3f9><div class=\"moon-left-menu-tag-container\" data-v-7a00e3f9><div class=\"moon-left-menu-tag_indicator\" data-v-7a00e3f9><i"+(_vm._ssrClass("fa fa-chevron-left",_vm.isCollapse == true ? 'icon-class-left' : 'icon-class-right'))+" data-v-7a00e3f9></i></div></div></div> "),_vm._ssrNode("<div class=\"moon-left-toogle-menu info-block-left\""+(_vm._ssrStyle(null,_vm.leftHeight, null))+" data-v-7a00e3f9>","</div>",[[_vm._ssrNode(((_vm.isCollapse == true)?("<div class=\"info-block-header text-center\" data-v-7a00e3f9><span class=\"info-block-header-text\" data-v-7a00e3f9>"+_vm._ssrEscape(_vm._s(_vm.$t("全部")))+"</span></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"custom-el-menu\""+(_vm._ssrStyle(null,{height: _vm.divHeight10.height1-50 +'px', overflowY: 'auto'}, null))+" data-v-7a00e3f9>","</div>",[_c('el-menu',{staticClass:"el-menu-vertical-demo custon-nav-menu",attrs:{"default-active":_vm.defaultMenuActive,"background-color":"#f2f2f2","text-color":"#909399","active-text-color":"#909399"}},[_vm._l((_vm.dataDept),function(item,index){return [(item.child_list.length > 0)?_c('el-submenu',{attrs:{"index":index+''}},[_c('div',{staticStyle:{"width":"100%"},attrs:{"slot":"title"},on:{"click":function($event){return _vm.selMenu($event, item, index)}},slot:"title"},[_c('span',{staticClass:"moon-content-text-ellipsis-class main-menu-class",staticStyle:{"width":"100%","display":"inline-block"}},[_vm._v(_vm._s(item.department_name))])]),_vm._v(" "),(item.child_list.length > 0)?_c('el-menu-item-group',_vm._l((item.child_list),function(itemChild,indexChild){return _c('el-menu-item',{key:indexChild,attrs:{"index":index+'-'+indexChild},on:{"click":function($event){return _vm.selMenu($event, itemChild, index+'-'+indexChild)}}},[_c('span',{staticClass:"moon-content-text-ellipsis-class sub-menu-class",staticStyle:{"width":"100%","display":"inline-block"}},[_vm._v(_vm._s(itemChild.department_name))])])}),1):_vm._e()],1):_c('el-menu-item',{attrs:{"index":index+''},on:{"click":function($event){return _vm.selMenu($event, item, index)}}},[_c('span',{staticClass:"moon-content-text-ellipsis-class main-menu-class",staticStyle:{"width":"100%","display":"inline-block"}},[_vm._v(_vm._s(item.department_name))])])]})],2)],1)]],2),_vm._ssrNode(" "),_vm._ssrNode("<form action=\"/\" data-v-7a00e3f9>","</form>",[_c('van-row',[_c('van-col',{staticClass:"text-left",attrs:{"span":(_vm.active == 1 || _vm.active == 2 || _vm.active == 3) ? 16 : 12}},[_c('van-search',{attrs:{"show-action":true,"placeholder":"姓名/编号/名称"},on:{"search":_vm.onSearch,"clear":_vm.onClear},model:{value:(_vm.serchName),callback:function ($$v) {_vm.serchName=$$v},expression:"serchName"}},[_c('span',{attrs:{"slot":"left-icon"},slot:"left-icon"}),_vm._v(" "),_c('span',{staticClass:"custom-button-small",attrs:{"slot":"action"},slot:"action"},[_c('el-button',{attrs:{"type":"success","size":"small"},on:{"click":_vm.onSearch}},[_c('i',{staticClass:"fa fa-search"})])],1)])],1),_vm._v(" "),_c('van-col',{staticClass:"text-right",attrs:{"span":_vm.active == 4 ? 12 : 8}},[_c('div',{staticClass:"layout-inline",staticStyle:{"position":"relative"}},[(_vm.active == 4)?_c('el-select',{staticClass:"layout-item margin-right-10",staticStyle:{"margin-top":"11px","width":"85px"},attrs:{"size":"small","placeholder":"请选择"},on:{"change":_vm.dropdownItem},model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}},[_c('el-option',{attrs:{"label":"全部","value":""}}),_vm._v(" "),_c('el-option',{attrs:{"label":"通过","value":"3"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"未通过","value":"4"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"撤销","value":"-1"}})],1):_vm._e(),_vm._v(" "),_c('el-button',{staticClass:"layout-item moon-content-text-ellipsis-class",staticStyle:{"margin-top":"11px","margin-right":"2px","width":"70px"},style:(_vm.active == 4 ? {width: '70px'} : {width: '80px'}),attrs:{"size":"small","type":"default","plain":"","native-type":"button"},on:{"click":function($event){_vm.isCollapse == true ? _vm.toggleLeftMenu($event) : _vm.toggleRightMenu($event)}}},[_vm._v(_vm._s(_vm.departmentName != "" && _vm.departmentName != null ? _vm.departmentName : _vm.$t('部门')))]),_vm._v(" "),(_vm.departmentPath != '' && _vm.departmentPath != null)?_c('span',{staticClass:"fa fa-times-circle color-muted margin-right-5 layout-item",staticStyle:{"position":"relative","top":"2px","font-size":"15px"},on:{"click":_vm.clearSearchDept}}):_vm._e()],1)])],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-7a00e3f9>","</div>",[_c('van-tabs',{attrs:{"color":"#007CBB","title-active-color":"#007CBB","title-inactive-color":"#4B4B4B","background":"#f5f5f5"},on:{"click":_vm.activeTabMenu}},[_c('van-tab',{attrs:{"name":"1","title":_vm.$t('我待办')}}),_vm._v(" "),_c('van-tab',{attrs:{"name":"2","title":_vm.$t('我提交')}}),_vm._v(" "),_c('van-tab',{attrs:{"name":"3","title":_vm.$t('抄送我')}}),_vm._v(" "),_c('van-tab',{attrs:{"name":"4","title":_vm.$t('已完成')}})],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrStyle({"position":"relative"},_vm.divHeight15, null))+" data-v-7a00e3f9>","</div>",[_vm._ssrNode("<div style=\"margin-top:5px;position: relative\" data-v-7a00e3f9>","</div>",[_vm._ssrNode("<div class=\"content-block padding-tb-10\""+(_vm._ssrStyle(null,_vm.divHeight12, null))+" data-v-7a00e3f9>","</div>",[(_vm.tableData.length == 0)?_c('van-empty',{attrs:{"description":"暂无数据"}}):_c('van-pull-refresh',{on:{"refresh":_vm.onRefresh},model:{value:(_vm.refreshing),callback:function ($$v) {_vm.refreshing=$$v},expression:"refreshing"}},[_c('van-list',{attrs:{"finished":_vm.finished,"offset":0,"finished-text":"没有更多了"},on:{"load":_vm.onLoad},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},_vm._l((_vm.tableData),function(item,index){return _c('van-cell',{key:index,staticStyle:{"line-height":"15px","padding":"0px 10px"}},[_c('div',{staticClass:"content-block-item padding-lr-10 padding-tb-10",staticStyle:{"position":"relative"},on:{"click":function($event){return _vm.dataDetail($event, item, index)}}},[(item.formApplyNo)?_c('div',{staticClass:"color-muted"},[_c('span',{staticClass:"fa fa-info-circle"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.formApplyNo))])]):_vm._e(),_vm._v(" "),(item.formApplyNo)?_c('div',{staticClass:"line-height"}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_vm._v("\n                      ["),_c('span',{staticClass:"color-warning"},[_vm._v(_vm._s(item.applyUserName))]),_vm._v("]\n                      "),_c('span',[_vm._v(_vm._s(_vm.$t("提交的")))]),_vm._v("\n                      ["),_c('span',{staticClass:"color-warning moon-content-text-ellipsis-class",staticStyle:{"max-width":"120px","display":"inline-block","position":"relative","top":"3px"}},[_vm._v(_vm._s(item.formName))]),_vm._v("]\n                    ")]),_vm._v(" "),_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',{staticClass:"font-size-12"},[_vm._v(_vm._s(item.className ? item.className : item.departmentName))])]),_vm._v(" "),_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',{staticClass:"font-size-12"},[_vm._v(_vm._s(_vm.$moment(item.applyTime).format("YYYY-MM-DD HH:mm")))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5 font-size-12"},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("审核状态")))]),_vm._v(" "),_c('span',[(item.status === -1)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("撤销")))]):_vm._e(),_vm._v(" "),(item.status === 0)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("待审核")))]):_vm._e(),_vm._v(" "),(item.status === 3)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("通过")))]):_vm._e(),_vm._v(" "),(item.status === 4)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未通过")))]):_vm._e()])]),_vm._v(" "),_c('span',{staticClass:"fa fa-angle-right",staticStyle:{"position":"absolute","right":"10px","top":"60px","font-size":"25px","color":"#C0C4CC"}})])])}),1)],1)],1)])])],2),_vm._ssrNode(" "),_c('van-popup',{staticStyle:{"background":"#efefef"},style:({ height: '85%' }),attrs:{"round":"","position":"bottom"},on:{"close":_vm.cancelPop},model:{value:(_vm.popUpVisible),callback:function ($$v) {_vm.popUpVisible=$$v},expression:"popUpVisible"}},[_c('div',{staticClass:"padding-tb-10 padding-lr-10 border-bottom-1 bg-white"},[(_vm.active == 1)?[_c('div',{staticClass:"text-right padding-lr-10"},[(_vm.detailApplyAuditUserData.agreen1 == true)?_c('el-popover',{attrs:{"tabindex":99999,"placement":"bottom","width":"300"},on:{"hide":_vm.cancelPop},model:{value:(_vm.visibleYes),callback:function ($$v) {_vm.visibleYes=$$v},expression:"visibleYes"}},[_c('div',{staticClass:"margin-bottom-10"},[_c('div',[_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":"请输入内容"},model:{value:(_vm.textarea),callback:function ($$v) {_vm.textarea=$$v},expression:"textarea"}})],1),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('div',[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v(_vm._s(_vm.$t("上传图片")))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_vm._l((_vm.images),function(item,index){return _c('span',{key:index,staticClass:"pull-left",staticStyle:{"position":"relative"}},[_c('i',{staticClass:"fa fa-times-circle color-danger",staticStyle:{"font-size":"14px","position":"absolute","right":"2px","top":"-5px"},on:{"click":function($event){return _vm.clearImage($event, index)}}}),_vm._v(" "),_c('img',{staticStyle:{"margin-right":"10px","height":"30px","width":"30px"},attrs:{"src":item.picture_url,"fit":"fit"}})])}),_vm._v(" "),_c('upload-square',{ref:"upload",staticClass:"pull-left margin-left-5",attrs:{"action":_vm.uploadFileListUrl,"limit":3,"max-size":"5","data":{path: 'applet'},"accept":".png,.jpg,.jpeg"},on:{"success":_vm.uploadImgListFileSuccess}},[_c('i',{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{"height":"30px","line-height":"30px","width":"30px"}})]),_vm._v(" "),_c('div',{staticClass:"moon-clearfix"})],2)])]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"right","margin":"0"}},[_c('el-button',{attrs:{"size":"mini","type":"text"},on:{"click":_vm.cancelPop}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.handleOk($event, _vm.detailData, 1)}}},[_vm._v("确定")])],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","type":"success","size":"mini"},slot:"reference"},[_vm._v(_vm._s(_vm.$t("同意")))])],1):_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.handleCancel}},[_vm._v("取 消")]),_vm._v(" "),(_vm.detailApplyAuditUserData.notagreed1 == true)?_c('el-popover',{attrs:{"tabindex":99999,"placement":"bottom","width":"300"},on:{"hide":_vm.cancelPop},model:{value:(_vm.visibleNo),callback:function ($$v) {_vm.visibleNo=$$v},expression:"visibleNo"}},[_c('div',{staticClass:"margin-bottom-10"},[_c('div',[_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":"请输入内容"},model:{value:(_vm.textarea),callback:function ($$v) {_vm.textarea=$$v},expression:"textarea"}})],1),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('div',[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v(_vm._s(_vm.$t("上传图片")))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_vm._l((_vm.images),function(item,index){return _c('span',{key:index,staticClass:"pull-left",staticStyle:{"position":"relative"}},[_c('i',{staticClass:"fa fa-times-circle color-danger",staticStyle:{"font-size":"14px","position":"absolute","right":"2px","top":"-5px"},on:{"click":function($event){return _vm.clearImage($event, index)}}}),_vm._v(" "),_c('img',{staticStyle:{"margin-right":"10px","height":"30px","width":"30px"},attrs:{"src":item.picture_url,"fit":"fit"}})])}),_vm._v(" "),_c('upload-square',{ref:"upload",staticClass:"pull-left margin-left-5",attrs:{"action":_vm.uploadFileListUrl,"limit":3,"max-size":"5","data":{path: 'applet'},"accept":".png,.jpg,.jpeg"},on:{"success":_vm.uploadImgListFileSuccess}},[_c('i',{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{"height":"30px","line-height":"30px","width":"30px"}})]),_vm._v(" "),_c('div',{staticClass:"moon-clearfix"})],2)])]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"right","margin":"0"}},[_c('el-button',{attrs:{"size":"mini","type":"text"},on:{"click":_vm.cancelPop}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.handleOk($event, _vm.detailData, 2)}}},[_vm._v("确定")])],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","type":"warning","size":"mini"},slot:"reference"},[_vm._v(_vm._s(_vm.$t("驳回")))])],1):_vm._e()],1)]:_vm._e(),_vm._v(" "),(_vm.active == 2)?[_c('div',{staticClass:"text-right padding-lr-10"},[(_vm.detailData.allowRevoke == true)?_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":function($event){return _vm.handleOk($event, _vm.detailData, -1)}}},[_vm._v("撤 销")]):_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.handleCancel}},[_vm._v("取 消")])],1)]:_vm._e(),_vm._v(" "),(_vm.active == 3)?[_c('div',{staticClass:"text-right padding-lr-10"},[_c('el-tag',{attrs:{"size":"small","type":"info"}},[_vm._v("抄送信息")])],1)]:_vm._e(),_vm._v(" "),(_vm.active == 4)?[_c('div',{staticClass:"text-right"},[(_vm.detailData.status == 5)?_c('el-tag',{staticClass:"text-center color-white",attrs:{"type":"primary","size":"small"}},[_vm._v("无需审批")]):_vm._e(),_vm._v(" "),(_vm.detailData.status == 8)?_c('el-tag',{staticClass:"text-center color-white",attrs:{"type":"warning","size":"small"}},[_vm._v("审批中")]):_vm._e(),_vm._v(" "),(_vm.detailData.status == -1)?_c('el-tag',{staticClass:"text-center color-white",attrs:{"type":"warning","size":"small"}},[_vm._v("已撤销")]):_vm._e(),_vm._v(" "),(_vm.detailData.status == 3)?_c('el-tag',{staticClass:"text-center color-white",attrs:{"type":"success","size":"small"}},[_vm._v("已通过")]):_vm._e(),_vm._v(" "),(_vm.detailData.status == 4)?_c('el-tag',{staticClass:"text-center color-white",attrs:{"type":"danger","size":"small"}},[_vm._v("未通过")]):_vm._e(),_vm._v(" "),(_vm.detailData.status == 2)?_c('el-tag',{staticClass:"text-center color-white",attrs:{"type":"danger","size":"small"}},[_vm._v("已驳回")]):_vm._e(),_vm._v(" "),(_vm.detailData.status == 1)?_c('el-tag',{staticClass:"text-center color-white",attrs:{"type":"danger","size":"small"}},[_vm._v("已通过")]):_vm._e()],1)]:_vm._e()],2),_vm._v(" "),_c('div',{style:(_vm.divHeight8)},[_c('div',{staticClass:"padding-lr-0 bg-white"},[_c('div',{staticClass:"color-muted margin-top-0 font-size-12 padding-lr-10 padding-tb-10"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("基础信息")))])])]),_vm._v(" "),_c('div',{staticClass:"detail-block-title padding-lr-10 padding-tb-5 font-size-12"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("申请人"))+":")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.detailData.applyUserName))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("学号/工号"))+":")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.detailData.userNo))])])],1),_vm._v(" "),_c('el-row',{staticClass:"margin-top-5"},[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("服务名称"))+":")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.detailData.formName))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("班级/部门"))+":")]),_vm._v(" "),_c('span',[(_vm.detailData.userType == 5)?_c('label',[_vm._v(_vm._s(_vm.detailData.className))]):_vm._e(),_vm._v(" "),(_vm.detailData.userType == 4)?_c('label',[_vm._v(_vm._s(_vm.detailData.departmentName))]):_vm._e()])])],1),_vm._v(" "),_c('el-row',{staticClass:"margin-top-5"},[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("申请日期"))+":")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$moment(_vm.detailData.applyTime).format("YYYY-MM-DD HH:mm")))])])],1)],1)]),_vm._v(" "),_c('div',{staticClass:"margin-top-10 padding-lr-10 bg-white padding-tb-10"},[_c('div',{staticClass:"color-muted margin-top-5 font-size-12"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("申请内容")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12 margin-top-10 color-sub-title"},[_c('table',{staticClass:"custom-table"},_vm._l((_vm.detailApplyContentData),function(item,index){return _c('tr',{key:index},[(item.type != 'fc-editor' && item.type != 'upload')?[_c('td',{staticStyle:{"width":"30%","text-align":"right","padding-right":"15px"}},[_c('span',{staticClass:"color-muted moon-content-text-ellipsis-class"},[_c('label',{staticClass:"font-size-12"},[_vm._v(_vm._s(item.title))])])]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"left","padding-left":"15px"}},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":item.value,"placement":"top"}},[_c('span',{staticClass:"moon-content-text-ellipsis-class"},[_c('label',{staticClass:"font-size-12"},[_vm._v(_vm._s(item.value))])])])],1)]:(item.type != 'fc-editor' && item.type == 'upload')?[_c('td',{staticStyle:{"width":"30%","text-align":"right","padding-right":"15px"}},[(!item.value || item.value.length <= 0)?_c('span',{staticClass:"color-muted moon-content-text-ellipsis-class"},[_vm._v("\n                      "+_vm._s(item.title)+"\n                    ")]):_c('span',{staticClass:"color-muted",staticStyle:{"position":"relative"}},[_vm._v(_vm._s(item.title)+": ")])]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"left","padding-left":"15px"}},[(!item.value || item.value.length <= 0)?_c('span',[_c('div',{staticStyle:{"height":"20px","line-height":"20px"}})]):_vm._l((item.value),function(itemImg,indexImg){return _c('span',{key:indexImg,staticClass:"custom-avatar",staticStyle:{"display":"inline-block","margin-right":"5px","position":"relative","top":"5px"},on:{"click":function($event){return _vm.readFile(itemImg)}}},[_c('el-avatar',{attrs:{"shape":"square","size":"small","src":itemImg,"fit":"fill"}})],1)})],2)]:[_c('td',{staticStyle:{"width":"30%","text-align":"right","padding-right":"15px"}},[_c('span',{staticClass:"color-muted font-bold moon-content-text-ellipsis-class",staticStyle:{"position":"relative","top":"-50px"}},[_vm._v(_vm._s(item.title)+": ")])]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"left","padding-left":"15px"}},[(item.type == 'fc-editor')?_c('div',{staticStyle:{"width":"90%","height":"150px","overflow-y":"auto","display":"inline-block","border":"1px solid #dddddd","border-radius":"5px","padding":"0px 10px"},domProps:{"innerHTML":_vm._s(item.value)}}):_vm._e()])]],2)}),0)])]),_vm._v(" "),_c('div',{staticClass:"margin-top-10 padding-lr-10 bg-white padding-tb-10"},[_c('div',{staticClass:"color-muted margin-top-5 font-size-12"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("审批进度")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12 margin-top-10 color-sub-title"},[_c('el-steps',{attrs:{"direction":"vertical","space":"60px"}},_vm._l((_vm.detailApplyAuditList),function(item,index){return _c('el-step',{key:index},[_c('div',{attrs:{"slot":"icon"},slot:"icon"},[_c('i',{staticClass:"fa fa-flag",staticStyle:{"font-size":"12px"}})]),_vm._v(" "),_c('div',{staticClass:"font-size-12",attrs:{"slot":"title"},slot:"title"},[(item.nodeType == 'handle')?_c('span',{staticClass:"color-success"},[_vm._v("\n                    "+_vm._s(_vm.$t("审批"))+"\n                    "),(item.andor == 'and')?_c('label',[_vm._v(" ("+_vm._s(_vm.$t("与签"))+") ")]):_vm._e(),_vm._v(" "),(item.andor == 'or')?_c('label',[_vm._v(" ("+_vm._s(_vm.$t("或签"))+") ")]):_vm._e()]):_vm._e(),_vm._v(" "),(item.nodeType == 'cc')?_c('span',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("抄送")))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"font-size-12 color-sub-title",attrs:{"slot":"description"},slot:"description"},[_c('div',[(item.nodeType == 'handle')?_vm._l((item.handleUserList),function(itemUser,indexUser){return _c('div',{key:indexUser},[_c('span',{staticClass:"color-grand"},[_c('i',{staticClass:"fa fa-user"}),_vm._v(" "+_vm._s(itemUser.userName)+" ")]),_vm._v(" "),_c('span',{staticClass:"margin-left-10"},[(itemUser.status === -1)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("撤销")))]):_vm._e(),_vm._v(" "),(itemUser.status === 0)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("待审核")))]):_vm._e(),_vm._v(" "),(itemUser.status === 3)?_c('label',{staticClass:"color-success"},[_vm._v("\n                            "+_vm._s(_vm.$t("已通过"))+"\n                            "),(itemUser.des)?_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":itemUser.des,"placement":"top"}},[_c('i',{staticClass:"fa fa-warning color-warning"})]):_vm._e(),_vm._v(" "),(itemUser.url && itemUser.url.length > 0)?_c('span',_vm._l((itemUser.url),function(item,index){return _c('img',{key:index,staticStyle:{"position":"relative","top":"5px","height":"20px","width":"20px","margin-left":"3px"},attrs:{"src":item,"fit":"fit"},on:{"click":function($event){return _vm.readFile(item)}}})}),0):_vm._e()],1):_vm._e(),_vm._v(" "),(itemUser.status === 4)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未通过")))]):_vm._e(),_vm._v(" "),(itemUser.status === 1)?_c('label',{staticClass:"color-success"},[_vm._v("\n                            "+_vm._s(_vm.$t("已通过"))+"\n                            "),(itemUser.des)?_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":itemUser.des,"placement":"top"}},[_c('i',{staticClass:"fa fa-warning color-warning"})]):_vm._e(),_vm._v(" "),(itemUser.url && itemUser.url.length > 0)?_c('span',_vm._l((itemUser.url),function(item,index){return _c('img',{key:index,staticStyle:{"position":"relative","top":"5px","height":"20px","width":"20px","margin-left":"3px"},attrs:{"src":item,"fit":"fit"},on:{"click":function($event){return _vm.readFile(item)}}})}),0):_vm._e()],1):_vm._e(),_vm._v(" "),(itemUser.status === 2)?_c('label',{staticClass:"color-warning"},[_vm._v("\n                            "+_vm._s(_vm.$t("已驳回"))+"\n                            "),(itemUser.des)?_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":itemUser.des,"placement":"top"}},[_c('i',{staticClass:"fa fa-warning color-warning"})]):_vm._e(),_vm._v(" "),(itemUser.url && itemUser.url.length > 0)?_c('span',_vm._l((itemUser.url),function(item,index){return _c('img',{key:index,staticStyle:{"position":"relative","top":"5px","height":"20px","width":"20px","margin-left":"3px"},attrs:{"src":item,"fit":"fit"},on:{"click":function($event){return _vm.readFile(item)}}})}),0):_vm._e()],1):_vm._e(),_vm._v(" "),(itemUser.status === 5)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("无需审批")))]):_vm._e(),_vm._v(" "),(itemUser.status === 8)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("审批中")))]):_vm._e()]),_vm._v(" "),(itemUser.handleTime)?_c('span',{staticClass:"margin-left-10"},[_c('label',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$moment(itemUser.handleTime).format("YYYY-MM-DD HH:mm:ss")))])]):_vm._e()])}):_vm._e(),_vm._v(" "),(item.nodeType == 'cc')?[_vm._l((item.handleUserNameList),function(itemUser,indexUser){return (indexUser <= 3)?_c('el-tag',{key:indexUser,attrs:{"size":"mini"}},[_c('div',{staticClass:"moon-content-text-ellipsis-class",staticStyle:{"width":"50px"}},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":itemUser,"placement":"top-start"}},[_c('span',[_vm._v(_vm._s(itemUser))])])],1)]):_vm._e()}),_vm._v(" "),(item.handleUserNameList.length > 3)?_c('el-popover',{attrs:{"placement":"left","width":"200","trigger":"hover"}},[_c('div',{staticStyle:{"height":"100px","overflow-y":"auto"}},_vm._l((item.handleUserNameList),function(itemUser,indexUser){return _c('div',{key:indexUser},[_c('div',{staticClass:"font-size-12 padding-tb-5"},[_c('span',[_vm._v(_vm._s(itemUser))])])])}),0),_vm._v(" "),_c('el-tag',{attrs:{"slot":"reference","size":"mini","type":"success"},slot:"reference"},[_c('div',{staticClass:"moon-content-text-ellipsis-class padding-lr-5"},[_c('i',{staticClass:"fa fa-user"}),_vm._v(" "),_c('label',{staticClass:"margin-left-5"},[_vm._v(_vm._s(item.handleUserNameList.length))])])])],1):_vm._e()]:_vm._e()],2)])])}),1)],1)])])]),_vm._ssrNode(" "),_c('van-calendar',{attrs:{"type":"range","min-date":_vm.minDate,"max-date":_vm.maxDate},on:{"confirm":_vm.onConfirm},model:{value:(_vm.showCalendar),callback:function ($$v) {_vm.showCalendar=$$v},expression:"showCalendar"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/appMyNotice.vue?vue&type=template&id=7a00e3f9&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(15);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appMyNotice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var appMyNoticevue_type_script_lang_js_ = ({
  name: 'appServer',
  layout: 'defaultAppScreen',
  mixins: [mixins["a" /* default */]],

  data() {
    return {
      active: 1,
      tableData: [],
      loading: false,
      finished: false,
      popUpVisible: false,
      refreshing: false,
      detailData: '',
      detailIndex: '',
      detailApplyContentData: [],
      detailApplyAuditList: [],
      textarea: '',
      images: [],
      visibleNo: false,
      visibleYes: false,
      detailApplyAuditUserData: {},
      serchName: '',
      startTime: '',
      endTime: '',
      showCalendar: false,
      dateTime: '',
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2030, 12, 1),
      totalAuthPage: 0,
      defaultMenuActive: '',
      isCollapse: false,
      serverAppList: [],
      departmentPath: '',
      departmentName: '',
      uploadFileListUrl: url["a" /* common */].upload_file,
      leftHeight: {
        'height': '100%',
        'width': '0%'
      },
      toggleTag: {
        'left': '0'
      }
    };
  },

  mounted() {
    this.$nextTick(() => {});
    document.addEventListener("click", this.bodyCloseMenus);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.bodyCloseMenus);
  },

  created() {
    this.active = 1;
    this.getDeptInfo(2);
    this.init();

    if (this.active == 6) {
      this.initAppRecommend();
    } else {
      this.initAppServer();
    }
  },

  methods: {
    layoutInit() {},

    bodyCloseMenus(event) {
      if (event.target.className.indexOf("info-block-right") != -1 || event.target.className.indexOf("van-grid") != -1 || event.target.className.indexOf("van-grid") != -1 || event.target.className.indexOf("fa-times-circle") != -1 || event.target.className.indexOf("header-class") != -1 || event.target.className.indexOf("sub-menu-class") != -1 || event.target.className.indexOf("info-block-header") != -1 || event.target.className.indexOf("info-block-header-text") != -1 || event.target.className.indexOf("fa-calendar") != -1 || event.target.className.indexOf("content-block") != -1 || event.target.className.indexOf("van-tab") != -1 || event.target.className.indexOf("content-block-item") != -1 || event.target.className.indexOf("van-field__control") != -1) {
        this.isCollapse = false;
        this.toggleLeftMenu();
      }
    },

    initAppRecommend(value) {
      let params = {
        appletId: this.appletId,
        categoryId: this.categoryId,
        departmentPath: this.departmentPath,
        formType: '',
        searchKey: this.searchKey
      };
      this.$axios.get(url["a" /* common */].server_list_list3, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.serverAppList = res.data.data;
        }
      });
    },

    initAppServer(value) {
      let params = {
        appletType: this.active,
        searchKey: value
      };
      this.$axios.get(url["a" /* common */].server_list_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.serverAppList = res.data.data;
        }
      });
    },

    onLoad() {
      // 异步更新数据
      if (this.totalAuthPage == this.page) {
        this.finished = true;
      } else {
        this.page = this.page + 1;
        this.finished = false;
        this.init();
      }
    },

    onRefresh() {
      this.loading = false;
      this.page = 1;
      this.totalAuthPage = 0;
      this.finished = false;
      this.tableData = [];
      this.init();
    },

    async init() {
      let params = {
        page: this.page ? this.page : 1,
        num: 20,
        status: this.type,
        beginTime: this.startTime,
        endTime: this.endTime,
        searchKey: this.searchKey,
        queryApplyListType: this.active,
        departmentPath: this.departmentPath
      };
      await this.getSessionInfo();
      this.$axios.get(url["a" /* common */].server_form_audit_page, {
        params: params,
        loading: false
      }).then(res => {
        if (res.data.code == 200) {
          if (res.data.data) {
            this.tableData = this.tableData.concat(res.data.data.list);
            this.total = res.data.data.total;
            this.num = res.data.data.num;
            this.page = res.data.data.page;
            this.totalAuthPage = res.data.data.pageCount; // 数据全部加载完成

            if (this.page == this.totalAuthPage) {
              this.finished = true;
            }
          }
        }

        this.loading = false;
      });
    },

    serverBlock(event) {
      this.$router.push({
        path: '/app/appServerForm',
        query: {
          userType: this.loginUserAppType,
          navH: this.navHeight,
          appType: this.globalAppShow
        }
      });
    },

    activeTabMenu(name) {
      this.active = name;
      this.page = 1;
      this.finished = false;
      this.tableData = [];
      this.type = "";
      this.init();
    },

    returnIndex() {
      this.$router.push({
        path: '/app/appIndex',
        query: {
          userType: this.loginUserAppType,
          navH: this.navHeight,
          appType: this.globalAppShow,
          sessionId: this.$route.query.sessionId
        }
      });
    },

    dataDetail(event, item, index) {
      this.detailData = item;
      this.detailIndex = index;

      if (item.applyContent && item.applyContent != "[]") {
        this.detailApplyContentData = JSON.parse(item.applyContent);
      }

      this.initAuditDetailList(item._id);
      this.isCollapse = false;
      this.toggleLeftMenu();
      this.popUpVisible = true;
    },

    initAuditDetailList(id) {
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

    cancelPop() {
      this.textarea = '';
      this.images = [];
      this.visibleOk = false;
      this.visibleNo = false;
      this.visibleYes = false;
    },

    handleCancel() {
      this.popUpVisible = false;
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
          this.tableData.splice(this.detailIndex, 1);
          let page = Math.ceil(this.tableData.length / 20);
          this.page = page; //this.init();

          this.images = [];
          this.popUpVisible = false;
          Object(external_vant_["Toast"])(res.data.desc);
        } else {
          Object(external_vant_["Toast"])(res.data.desc);
        }
      });
    },

    readFile(file) {
      //预览
      Object(external_vant_["ImagePreview"])({
        images: [file],
        closeable: false
      });
    },

    onSearch(value) {
      this.searchKey = this.serchName;
      this.page = 1;
      this.totalAuthPage = 0;
      this.finished = false;
      this.type = "";
      this.tableData = [];
      this.init();
    },

    dropdownItem(event) {
      this.type = event;
      this.page = 1;
      this.totalAuthPage = 0;
      this.finished = false;
      this.tableData = [];
      this.isCollapse = false;
      this.toggleLeftMenu();
      this.init();
    },

    onClear() {
      this.finished = false;
      this.serchName = "";
      this.searchKey = "";
      this.tableData = [];
      this.page = 1;
      this.totalAuthPage = 0;
      this.init();
    },

    clearSearch() {
      this.startTime = "";
      this.endTime = "";
      this.dateTime = "";
      this.tableData = [];
      this.page = 1;
      this.totalAuthPage = 0;
      this.finished = false;
      this.isCollapse = false;
      this.toggleLeftMenu();
      this.init();
    },

    calendarManage() {
      this.showCalendar = true;
    },

    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },

    formatDate2(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },

    onConfirm(date) {
      const [start, end] = date;
      this.dateTime = `${this.formatDate2(start)} - ${this.formatDate2(end)}`;
      this.startTime = `${this.formatDate(start)}`;
      this.endTime = `${this.formatDate(end)}`;
      this.page = 1;
      this.totalAuthPage = 0;
      this.tableData = [];
      this.finished = false;
      this.init();
      this.showCalendar = false;
    },

    toggleLeftMenu(event) {
      this.isCollapse = false;
      this.leftHeight.width = "0%";
      this.toggleTag['left'] = "0px";
    },

    toggleRightMenu(event) {
      this.isCollapse = true;
      this.leftHeight.width = "50%";
      this.toggleTag['left'] = "50%";
    },

    selMenu(event, item, index) {
      this.departmentPath = item.department_path;
      this.defaultMenuActive = index + '';
      this.page = 1;
      this.tableData = [];
      this.departmentName = item.department_name;

      if (!item['children']) {
        this.isCollapse = false;
        this.toggleLeftMenu();
      }

      this.init();
    },

    clearSearchDept() {
      this.departmentPath = "";
      this.defaultMenuActive = '';
      this.page = 1;
      this.tableData = [];
      this.departmentName = "";
      this.isCollapse = false;
      this.toggleLeftMenu();
      this.init();
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
// CONCATENATED MODULE: ./pages/app/appMyNotice.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_appMyNoticevue_type_script_lang_js_ = (appMyNoticevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/app/appMyNotice.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(205)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_appMyNoticevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a00e3f9",
  "0c04b686"
  
)

/* harmony default export */ var appMyNotice = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UploadSquare: __webpack_require__(133).default})


/***/ })

};;
//# sourceMappingURL=appMyNotice.js.map