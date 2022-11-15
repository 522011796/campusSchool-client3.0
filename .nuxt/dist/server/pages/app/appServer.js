exports.ids = [6];
exports.modules = {

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4bc89aba", content, true, context)
};

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appServer_vue_vue_type_style_index_0_id_39adffc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appServer_vue_vue_type_style_index_0_id_39adffc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appServer_vue_vue_type_style_index_0_id_39adffc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appServer_vue_vue_type_style_index_0_id_39adffc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appServer_vue_vue_type_style_index_0_id_39adffc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appServer_vue_vue_type_style_index_0_id_39adffc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-39adffc8]{height:60px;line-height:60px;width:100%}.content-block[data-v-39adffc8]{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;background:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appServer.vue?vue&type=template&id=39adffc8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-39adffc8></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block color-white",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-39adffc8>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-left padding-lr-10"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n              "+_vm._s(_vm.$t("服务说明"))+"\n            ")])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"text-right padding-lr-10"},[_c('span',{staticStyle:{"position":"relative","top":"-5px"}},[_c('van-button',{attrs:{"plain":"","size":"mini","type":"primary"},on:{"click":function($event){return _vm.serverBlock($event)}}},[_c('i',{staticClass:"fa fa-edit"}),_vm._v("\n                "+_vm._s(_vm.$t("业务办理"))+"\n              ")])],1)])])],1)],1),_vm._ssrNode(" <div class=\"margin-left-10 margin-right-10\" style=\"margin-top:1px;\" data-v-39adffc8><div class=\"content-block padding-lr-10\""+(_vm._ssrStyle(null,_vm.divHeight10, null))+" data-v-39adffc8><div style=\"line-height: 30px; white-space: pre-line;word-wrap:break-word\" data-v-39adffc8><pre style=\"white-space: pre-wrap;word-wrap: break-word;\" data-v-39adffc8>"+_vm._ssrEscape(_vm._s(_vm.serverDetail.des))+"</pre></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/appServer.vue?vue&type=template&id=39adffc8&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appServer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var appServervue_type_script_lang_js_ = ({
  name: 'appServer',
  layout: 'defaultAppScreen',
  mixins: [mixins["a" /* default */]],

  data() {
    return {
      serverDetail: '',
      rateValue: 0
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

    init() {
      let params = {
        id: this.$route.query.id
      };
      this.$axios.get(url["a" /* common */].server_form_allInfo, {
        params: params
      }).then(res => {
        if (res.data.code == 200) {
          let auditUser = [];
          this.serverDetail = res.data.data;
        }
      });
    },

    serverBlock(event) {
      this.$router.push({
        path: '/app/appServerForm',
        query: {
          id: this.serverDetail.id,
          activeType: this.$route.query.activeType,
          userType: this.loginUserAppType,
          navH: this.navHeight,
          appType: this.globalAppShow
        }
      });
    },

    returnIndex() {
      let page = this.$route.query.page ? this.$route.query.page : '/app/appIndex';
      this.$router.push({
        path: page,
        query: {
          activeType: this.$route.query.page ? this.$route.query.activeType : 6,
          userType: this.loginUserAppType,
          navH: this.navHeight,
          appType: this.globalAppShow,
          sessionId: this.$route.query.sessionId
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/app/appServer.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_appServervue_type_script_lang_js_ = (appServervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/app/appServer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(207)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_appServervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "39adffc8",
  "6bfb791c"
  
)

/* harmony default export */ var appServer = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=appServer.js.map