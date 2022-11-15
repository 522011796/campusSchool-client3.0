exports.ids = [2];
exports.modules = {

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("24a3845f", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appAllServerBak_vue_vue_type_style_index_0_id_70a85c38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appAllServerBak_vue_vue_type_style_index_0_id_70a85c38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appAllServerBak_vue_vue_type_style_index_0_id_70a85c38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appAllServerBak_vue_vue_type_style_index_0_id_70a85c38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appAllServerBak_vue_vue_type_style_index_0_id_70a85c38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appAllServerBak_vue_vue_type_style_index_0_id_70a85c38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-70a85c38]{height:60px;line-height:60px;width:100%}.content-block[data-v-70a85c38]{border-top-left-radius:15px;border-top-right-radius:15px;background:#fff;width:100%}.app-title-border-tag[data-v-70a85c38]{width:5px;height:30px;background:#1ea084;display:inline-block}.notice-list-item[data-v-70a85c38]{height:45px;line-height:45px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appAllServerBak.vue?vue&type=template&id=70a85c38&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-70a85c38></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-70a85c38>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"4"}},[_c('div',{staticClass:"text-left padding-lr-10 color-white"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"})])])]),_vm._v(" "),_c('van-col',{attrs:{"span":"16"}},[_c('van-tabs',{staticClass:"padding-top-10",attrs:{"type":"card","color":"#1EA084","title-active-color":"#ffffff","title-inactive-color":"#ffffff","background":"#949494"},on:{"click":_vm.activeTabMenu},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('van-tab',{attrs:{"name":"6"}},[_c('span',{staticClass:"font-size-12",attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(_vm.$t('推荐服务')))])]),_vm._v(" "),_c('van-tab',{attrs:{"name":"0"}},[_c('span',{staticClass:"font-size-12",attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(_vm.$t('学生办事')))])]),_vm._v(" "),_c('van-tab',{attrs:{"name":"1"}},[_c('span',{staticClass:"font-size-12",attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(_vm.$t('老师办事')))])]),_vm._v(" "),_c('van-tab',{attrs:{"name":"2"}},[_c('span',{staticClass:"font-size-12",attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(_vm.$t('单位办事')))])])],1)],1),_vm._v(" "),_c('van-col',{attrs:{"span":"4"}},[_vm._v("\n         \n      ")])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-block\" data-v-70a85c38>","</div>",[_vm._ssrNode("<form action=\"/\" data-v-70a85c38>","</form>",[_c('van-search',{attrs:{"placeholder":"请输入服务名称"},on:{"input":_vm.onSearch,"clear":_vm.onClear},model:{value:(_vm.serchName),callback:function ($$v) {_vm.serchName=$$v},expression:"serchName"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\""+(_vm._ssrStyle(null,_vm.divHeight9, null))+" data-v-70a85c38>","</div>",[_c('van-grid',{attrs:{"gutter":10}},_vm._l((_vm.serverAppList),function(item,index){return _c('van-grid-item',{key:index,attrs:{"icon":"photo-o"},on:{"click":function($event){return _vm.serverBlock($event, item)}}},[_c('div',{staticClass:"text-center",attrs:{"slot":"icon"},slot:"icon"},[_c('van-image',{attrs:{"width":"30","height":"30","src":item.form_logo}})],1),_vm._v(" "),_c('div',{staticClass:"moon-content-text-ellipsis-class margin-top-10 text-center",staticStyle:{"width":"60px"},attrs:{"slot":"text"},slot:"text"},[_vm._v(_vm._s(item.form_name))])])}),1)],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/appAllServerBak.vue?vue&type=template&id=70a85c38&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appAllServerBak.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var appAllServerBakvue_type_script_lang_js_ = ({
  name: 'appIndex',
  layout: 'defaultAppScreen',
  mixins: [mixins["a" /* default */]],

  data() {
    return {
      active: 6,
      serverAppList: [],
      noticeAppList: [],
      serchName: ''
    };
  },

  mounted() {
    this.$nextTick(() => {});
  },

  created() {
    this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;

    if (this.active == 6) {
      this.initAppRecommend();
    } else {
      this.initAppServer();
    }
  },

  methods: {
    layoutInit() {},

    initAppRecommend(value) {
      let params = {
        searchKey: value
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

    serverBlock(event, item) {
      if (item == 'all') {} else {
        this.$router.push({
          path: '/app/appServer',
          query: {
            id: item.id,
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow
          }
        });
      }
    },

    activeTabMenu(name) {
      this.noticeAppList = [];
      this.serverAppList = [];
      this.serchName = '';

      if (name == 5) {
        this.$router.push({
          path: '/app/appMyNotice',
          query: {
            id: parseInt(name),
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow
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

    returnIndex() {
      this.$router.push({
        path: '/app/appIndex',
        query: {
          activeType: this.$route.query.activeType,
          userType: this.loginUserAppType,
          navH: this.navHeight,
          appType: this.globalAppShow
        }
      });
    },

    onSearch(value) {
      console.log(value);

      if (this.active == 6) {
        this.initAppRecommend(value);
      } else {
        this.initAppServer(value);
      }
    },

    onClear() {}

  }
});
// CONCATENATED MODULE: ./pages/app/appAllServerBak.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_appAllServerBakvue_type_script_lang_js_ = (appAllServerBakvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/app/appAllServerBak.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(196)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_appAllServerBakvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "70a85c38",
  "b5e7607e"
  
)

/* harmony default export */ var appAllServerBak = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=appAllServerBak.js.map