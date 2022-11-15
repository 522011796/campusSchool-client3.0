exports.ids = [18];
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

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dorm_icon.f3912d3.png";

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(218);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("439aa896", content, true, context)
};

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentDorm_vue_vue_type_style_index_0_id_3875e1c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentDorm_vue_vue_type_style_index_0_id_3875e1c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentDorm_vue_vue_type_style_index_0_id_3875e1c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentDorm_vue_vue_type_style_index_0_id_3875e1c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentDorm_vue_vue_type_style_index_0_id_3875e1c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentDorm_vue_vue_type_style_index_0_id_3875e1c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-3875e1c2]{height:60px;line-height:60px;width:100%}.content-block[data-v-3875e1c2]{border-top-left-radius:15px;border-top-right-radius:15px;background:#fff;width:100%}.app-title-border-tag[data-v-3875e1c2]{width:5px;height:25px;background:#1ea084;display:inline-block}.notice-list-item[data-v-3875e1c2]{height:45px;line-height:45px}.bg-student-info-block[data-v-3875e1c2]{background:url(/img/bg-student-info.png) no-repeat;height:180px;width:100%;border:1px dashed #ddd}.text-display-line[data-v-3875e1c2]{width:80px;top:4px}.name-display-line[data-v-3875e1c2],.text-display-line[data-v-3875e1c2]{display:inline-block;position:relative}.name-display-line[data-v-3875e1c2]{max-width:200px;top:6px}.item-block[data-v-3875e1c2]{border-radius:5px;background:#ebeef5;padding:10px}.info-block-header[data-v-3875e1c2]{height:45px;line-height:45px;font-size:12px;color:#fff;background:#909399}.info-block-left[data-v-3875e1c2]{width:100px;border-right:1px solid #f2f6fc}.info-block-right[data-v-3875e1c2]{margin-left:100px;height:100%}.bed-item-block[data-v-3875e1c2]{height:40px;line-height:40px;text-align:center;border-radius:5px;border:1px solid #dcdfe6}.room-item-block[data-v-3875e1c2]{padding:10px;border-radius:5px;cursor:default}.room-item-block[data-v-3875e1c2]:hover{background:#f5f5f5}.bed-item-block[data-v-3875e1c2]{cursor:default}.bed-item-block[data-v-3875e1c2]:hover{background:#f2f6fc}.bed-item-block-active[data-v-3875e1c2],.bed-item-block-active[data-v-3875e1c2]:hover{background:#e6a23c;color:#fff}.bed-item-block-selected[data-v-3875e1c2],.bed-item-block-selected[data-v-3875e1c2]:hover{background:#f56c6c;color:#fff}.block-icon-class[data-v-3875e1c2]{height:15px;width:15px;position:relative;top:3px}.tag-class[data-v-3875e1c2]{background:#67c23a}.tag-class[data-v-3875e1c2],.tag-danger-class[data-v-3875e1c2]{width:10px;height:13px;display:inline-block}.tag-danger-class[data-v-3875e1c2]{background:#f56c6c}.dialog-header-title-block[data-v-3875e1c2]{height:40px;line-height:40px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentDorm.vue?vue&type=template&id=3875e1c2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-3875e1c2></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-3875e1c2>","</div>",[_c('van-col',{attrs:{"span":"4"}},[_c('div',{staticClass:"text-left padding-lr-10 color-white"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n              "+_vm._s(_vm.$t("返回"))+"\n            ")])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"16"}},[_c('div',{staticClass:"text-center color-white font-size-16 font-bold"},[_c('span',[_vm._v(_vm._s(_vm.$t('线上选寝')))])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"4"}},[_c('van-button',{attrs:{"size":"small","type":"warning","plain":"","native-type":"button"},on:{"click":function($event){return _vm.billManage($event)}}},[_vm._v(_vm._s(_vm.$t("订单")))])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-3875e1c2>","</div>",[(_vm.dormSelType == 0)?_vm._ssrNode("<div data-v-3875e1c2>","</div>",[_c('van-dropdown-menu',[_c('van-dropdown-item',{attrs:{"title":_vm.searchRoomTypeLabel,"options":_vm.filterRoomType},on:{"change":_vm.handleChangeSearchType},model:{value:(_vm.searchRoomType),callback:function ($$v) {_vm.searchRoomType=$$v},expression:"searchRoomType"}}),_vm._v(" "),_c('van-dropdown-item',{attrs:{"title":_vm.searchRoomArrowLabel,"options":_vm.filterRoomArrow},on:{"change":_vm.handleChangeSearchArrow},model:{value:(_vm.searchRoomArrow),callback:function ($$v) {_vm.searchRoomArrow=$$v},expression:"searchRoomArrow"}}),_vm._v(" "),_c('van-dropdown-item',{attrs:{"title":_vm.searchRoomPriceLabel,"options":_vm.filterRoomPrice},on:{"change":_vm.handleChangeSearchPrice},model:{value:(_vm.searchRoomPrice),callback:function ($$v) {_vm.searchRoomPrice=$$v},expression:"searchRoomPrice"}}),_vm._v(" "),_c('van-dropdown-item',{attrs:{"title":_vm.searchRoomStatusLabel,"options":_vm.filterRoomStatus},on:{"change":_vm.handleChangeSearchStatus},model:{value:(_vm.searchRoomStatus),callback:function ($$v) {_vm.searchRoomStatus=$$v},expression:"searchRoomStatus"}})],1)],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pull-left info-block-left\" data-v-3875e1c2>","</div>",[(_vm.dormSelType == 0)?[_vm._ssrNode("<div class=\"info-block-header text-center\" data-v-3875e1c2><span data-v-3875e1c2>"+_vm._ssrEscape(_vm._s(_vm.$t("全部宿舍")))+"</span></div> "),_vm._ssrNode("<div"+(_vm._ssrStyle(null,{height: _vm.divHeight10.height1-90 +'px', overflowY: 'auto'}, null))+" data-v-3875e1c2>","</div>",[_c('el-menu',{staticClass:"el-menu-vertical-demo custon-nav-menu",attrs:{"default-active":_vm.defaultMenuActive,"background-color":"#fefefe","text-color":"#909399","active-text-color":"#ffd04b"}},[_vm._l((_vm.dormTreeList),function(item,index){return [(item.floorList.length > 0)?_c('el-submenu',{attrs:{"index":index+''}},[_c('div',{staticStyle:{"width":"100%"},attrs:{"slot":"title"},on:{"click":function($event){return _vm.selMenu($event, item, index)}},slot:"title"},[_c('span',[_vm._v(_vm._s(item.building_name))])]),_vm._v(" "),(item.floorList.length > 0)?_c('el-menu-item-group',_vm._l((item.floorList),function(itemChild,indexChild){return _c('el-menu-item',{key:indexChild,attrs:{"index":index+'-'+indexChild},on:{"click":function($event){return _vm.selMenu($event, itemChild, index+'-'+indexChild)}}},[_vm._v(_vm._s(itemChild.name))])}),1):_vm._e()],1):_c('el-menu-item',{attrs:{"index":index+''},on:{"click":function($event){return _vm.selMenu($event, item, index)}}},[_vm._v(_vm._s(item.building_name))])]})],2)],1)]:_vm._e(),_vm._ssrNode(" "),(_vm.dormSelType == 1)?[_vm._ssrNode("<div class=\"info-block-header text-center\" data-v-3875e1c2><span data-v-3875e1c2>"+_vm._ssrEscape(_vm._s(_vm.$t("全部套餐")))+"</span></div> "),_vm._ssrNode("<div"+(_vm._ssrStyle(null,{height: _vm.divHeight10.height1-50 +'px', overflowY: 'auto'}, null))+" data-v-3875e1c2>","</div>",[_c('el-menu',{staticClass:"el-menu-vertical-demo custon-nav-menu",attrs:{"default-active":_vm.defaultMenuActive,"background-color":"#fefefe","text-color":"#909399","active-text-color":"#ffd04b"}},[_vm._l((_vm.dormPackageTreeList),function(item,index){return [_c('el-menu-item',{staticStyle:{"text-align":"center"},attrs:{"index":index+''},on:{"click":function($event){return _vm.selMenu($event, item, index)}}},[_vm._v(_vm._s(item.label))])]})],2)],1)]:_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info-block-right\" data-v-3875e1c2>","</div>",[_vm._ssrNode("<div class=\"padding-lr-10 padding-tb-10\""+(_vm._ssrStyle(null,{height: _vm.divHeight10.height1-90+'px', overflowY: 'auto'}, null))+" data-v-3875e1c2>","</div>",[_vm._ssrNode("<div data-v-3875e1c2>","</div>",[_c('el-row',_vm._l((_vm.dormList),function(item,index){return _c('el-col',{key:index,staticClass:"text-center margin-bottom-20 room-item-block",attrs:{"span":8},nativeOn:{"click":function($event){return _vm.selRoomItem($event, item)}}},[_c('div',[_c('img',{staticStyle:{"height":"40px","width":"40px"},attrs:{"src":__webpack_require__(146)}})]),_vm._v(" "),(_vm.dormSelType == 0)?_c('div',{staticClass:"margin-top-5 font-size-12 moon-content-text-ellipsis-class"},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":item.dormitory_no,"placement":"bottom"}},[_c('span',[_vm._v(_vm._s(item.dormitory_no))])])],1):_vm._e(),_vm._v(" "),(_vm.dormSelType == 1)?_c('div',{staticClass:"margin-top-5 font-size-12 moon-content-text-ellipsis-class"},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":item.pacName,"placement":"bottom"}},[_c('div',{staticClass:"text-center"},[_c('div',[_c('span',[_vm._v(_vm._s(item.pacName))])]),_vm._v(" "),_c('div',{staticClass:"color-success"},[_vm._v("\n                        ("),_c('span',{staticClass:"font-size-12 color-danger"},[_vm._v(_vm._s(item.pacNum-item.pacNumChose))]),_vm._v("/"),_c('span',{staticClass:"font-size-12 color-success"},[_vm._v(_vm._s(item.pacNum))]),_vm._v(")\n                      ")])])])],1):_vm._e()])}),1)],1)])])],2),_vm._ssrNode(" "),_c('van-popup',{ref:"dormContainer",style:({ height: '70%' }),attrs:{"round":"","position":"bottom"},on:{"opened":_vm.openedDormDialog,"close":_vm.closeDialog},model:{value:(_vm.showDorm),callback:function ($$v) {_vm.showDorm=$$v},expression:"showDorm"}},[_c('div',[_c('div',{staticClass:"dialog-header-title-block text-center border-bottom-1"},[_c('van-row',[_c('van-col',{attrs:{"span":4}},[_c('van-button',{staticStyle:{"position":"relative","top":"-5px"},attrs:{"plain":"","type":"default","size":"small"},on:{"click":_vm.cancelDormDialog}},[_vm._v(_vm._s(_vm.$t("取消")))])],1),_vm._v(" "),_c('van-col',{attrs:{"span":16}},[_c('span',{staticClass:"font-size-14 font-bold"},[_vm._v(_vm._s(_vm.dormSelTitle))])]),_vm._v(" "),_c('van-col',{attrs:{"span":4}},[_c('van-button',{staticStyle:{"position":"relative","top":"-5px"},attrs:{"plain":"","type":"primary","size":"small"},on:{"click":_vm.okDormDialog}},[_vm._v(_vm._s(_vm.$t("确认")))])],1)],1)],1),_vm._v(" "),_c('div',{style:(_vm.dormHeight)},[_c('div',[_c('van-swipe',{staticClass:"my-swipe",staticStyle:{"height":"200px"},attrs:{"autoplay":3000,"indicator-color":"white"}},_vm._l((_vm.formDorm.imgs),function(item,index){return _c('van-swipe-item',{key:index},[_c('img',{staticStyle:{"height":"100%","width":"100%"},attrs:{"src":item}})])}),1)],1),_vm._v(" "),(_vm.dormSelType == 0)?[_c('div',{staticClass:"padding-lr-10 padding-tb-10"},[_c('div',{},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"tag-class"}),_vm._v(" "),_c('span',{staticClass:"tag-text-class font-bold"},[_vm._v(_vm._s(_vm.roomTypeText))])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('span',{staticClass:"tag-class"}),_vm._v(" "),_c('span',{staticClass:"tag-text-class font-size-12"},[_vm._v(_vm._s(_vm.$t("已选")))]),_vm._v(" "),_c('span',{staticClass:"tag-danger-class margin-left-10"}),_vm._v(" "),_c('span',{staticClass:"tag-text-class font-size-12"},[_vm._v(_vm._s(_vm.$t("未选")))])])],1)],1),_vm._v(" "),_c('div',{staticClass:"padding-lr-10 padding-tb-10"},[_c('el-row',{attrs:{"gutter":8}},_vm._l((_vm.formDorm.beds),function(item,index){return _c('el-col',{key:index,staticClass:"margin-bottom-10",attrs:{"span":6},nativeOn:{"click":function($event){!item.studentId ? _vm.selBedNo($event, item, index) : ''}}},[_c('div',{staticClass:"bed-item-block",class:[_vm.activeBedNo === index ? 'bed-item-block-active' : '',item.studentId ? 'bed-item-block-selected' : '']},[_vm._v("\n                      "+_vm._s(item.bedNo)+_vm._s(_vm.$t("号床"))+"\n                    ")])])}),1)],1),_vm._v(" "),_c('div',{staticClass:"padding-lr-10 padding-tb-10"},[_c('div',[_c('span',{staticClass:"tag-class"}),_vm._v(" "),_c('span',{staticClass:"tag-text-class font-bold"},[_vm._v(_vm._s(_vm.$t("简介")))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-10 font-size-12"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('span',[_vm._v(_vm._s(_vm.$t("容纳人数"))+":")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.formDorm.peopleNum))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('span',[_vm._v(_vm._s(_vm.$t("价格"))+":")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.formDorm.roomPrice)+"/"+_vm._s(_vm.$t("年")))])])],1),_vm._v(" "),_c('el-row',{staticClass:"margin-top-5"},[_c('el-col',{attrs:{"span":12}},[_c('span',[_vm._v(_vm._s(_vm.$t("面积"))+":")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.formDorm.roomArea))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('span',[_vm._v(_vm._s(_vm.$t("朝向"))+":")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.formDorm.roomArrow))])])],1)],1)])])]:_vm._e(),_vm._v(" "),(_vm.dormSelType == 1)?[_c('div',{staticClass:"padding-lr-10 padding-tb-10"},[_c('div',[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"tag-class"}),_vm._v(" "),_c('span',{staticClass:"tag-text-class font-bold"},[_vm._v(_vm._s(_vm.$t("价格")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('span',{staticClass:"color-success font-bold"},[_vm._v(_vm._s(_vm.formDorm.roomPrice)+"元/年")])])],1)],1)])]:_vm._e()],2)])]),_vm._ssrNode(" "),_c('van-popup',{ref:"dormContainer",style:({ height: '70%' }),attrs:{"round":"","position":"bottom"},on:{"opened":_vm.openedDormDialog,"close":_vm.closeDialog},model:{value:(_vm.showBill),callback:function ($$v) {_vm.showBill=$$v},expression:"showBill"}},[_c('div',{staticClass:"dialog-header-title-block text-center border-bottom-1"},[_c('van-row',[_c('van-col',{attrs:{"span":24}},[_c('span',{staticClass:"font-size-14 font-bold"},[_vm._v(_vm._s(_vm.$t("我的订单")))])])],1)],1),_vm._v(" "),_c('div',{staticClass:"padding-lr-10 padding-tb-10",style:(_vm.billHeight)},_vm._l((_vm.billList),function(item,index){return _c('el-card',{key:index,staticClass:"margin-bottom-20",attrs:{"body-style":{padding: '10px',background: '#EBEEF5'}}},[_c('div',{staticClass:"font-size-12"},[_c('el-row',{staticClass:"font-size-14"},[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"fa fa-history"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$moment(item.add_time).format("YYYY-MM-DD HH:mm:ss")))])]),_vm._v(" "),(_vm.dormSelType == 0)?_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[(item.status == 1)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("未支付")))]):_vm._e(),_vm._v(" "),(item.status == 2)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("已支付")))]):_vm._e(),_vm._v(" "),(item.status == 3)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("支付失败")))]):_vm._e(),_vm._v(" "),(item.status == 4)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("支付中")))]):_vm._e(),_vm._v(" "),(item.status == 7)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("订单关闭")))]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.dormSelType == 1)?_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[(item.order_status == true)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("成功")))]):_vm._e(),_vm._v(" "),(item.order_status == false)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("撤销")))]):_vm._e()]):_vm._e()],1),_vm._v(" "),_c('el-row',{staticClass:"margin-top-5"},[_c('el-col',{attrs:{"span":12}},[_c('span',[_vm._v(_vm._s(_vm.$t("姓名")))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.real_name))])]),_vm._v(" "),(_vm.dormSelType == 0)?_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('label',{staticClass:"color-warning font-size-16"},[_vm._v("¥"+_vm._s(item.room_price))])]):_vm._e(),_vm._v(" "),(_vm.dormSelType == 1)?_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('label',{staticClass:"color-warning font-size-16"},[_vm._v("¥"+_vm._s(item.pac_price))])]):_vm._e()],1),_vm._v(" "),_c('el-row',{staticClass:"margin-top-5"},[_c('el-col',{attrs:{"span":24}},[(_vm.dormSelType == 0)?[_c('span',[_vm._v(_vm._s(_vm.$t("学号/录取号")))]),_vm._v(" "),_c('span',{staticClass:"color-success"},[_vm._v(_vm._s(item.student_id)+" / "+_vm._s(item.enroll_no))])]:_vm._e(),_vm._v(" "),(_vm.dormSelType == 1)?[_c('span',[_vm._v(_vm._s(_vm.$t("学号")))]),_vm._v(" "),_c('span',{staticClass:"color-success"},[_vm._v(_vm._s(item.student_id))])]:_vm._e()],2)],1),_vm._v(" "),_c('el-row',{staticClass:"margin-top-5"},[(_vm.dormSelType == 0)?_c('el-col',{attrs:{"span":24}},[_c('span',[_vm._v(_vm._s(_vm.$t("已选寝室")))]),_vm._v(" "),_c('span',{staticClass:"color-success"},[_vm._v(_vm._s(item.build_name)+"-"+_vm._s(item.dormitory_no)+"-"+_vm._s(item.bed_no)+_vm._s(_vm.$t("号床")))])]):_vm._e(),_vm._v(" "),(_vm.dormSelType == 1)?_c('el-col',{attrs:{"span":24}},[_c('span',[_vm._v(_vm._s(_vm.$t("已选套餐")))]),_vm._v(" "),_c('span',{staticClass:"color-success"},[_vm._v(_vm._s(item.pac_name))])]):_vm._e()],1),_vm._v(" "),_c('el-row',{staticClass:"margin-top-5"},[_c('el-col',{staticClass:"text-right",attrs:{"span":24}},[(_vm.dormSelType == 0 && (!_vm.detailData.status || _vm.detailData.check_cancel == true) && item.status == 1)?_c('el-button',{attrs:{"size":"mini","type":"success"},on:{"click":function($event){return _vm.setBillStatus($event, item)}}},[_vm._v(_vm._s(_vm.$t("立即撤销")))]):_vm._e(),_vm._v(" "),(_vm.dormSelType == 1 && (!_vm.detailData.status || _vm.detailData.check_cancel == true) && item.order_status == 1)?_c('el-button',{attrs:{"size":"mini","type":"success"},on:{"click":function($event){return _vm.setBillStatus($event, item)}}},[_vm._v(_vm._s(_vm.$t("立即撤销")))]):_vm._e()],1)],1)],1)])}),1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newStudent/studentDorm.vue?vue&type=template&id=3875e1c2&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentDorm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var studentDormvue_type_script_lang_js_ = ({
  name: 'studentInfo',
  components: {
    MySex: MySex["default"]
  },
  layout: 'defaultAppScreen',
  mixins: [mixins["a" /* default */], mixinsBridge["a" /* default */]],

  data() {
    return {
      dormSelType: '',
      ruleId: '',
      roomDetailData: {},
      activeBedNo: '',
      defaultMenuActive: '',
      dormList: [],
      dormTreeList: [],
      filterRoomType: [],
      filterRoomArrow: [],
      filterRoomPrice: [],
      dormPackageTreeList: [],
      filterRoomStatus: [{
        text: this.$t("全部"),
        label: this.$t("全部"),
        value: ''
      }, {
        text: this.$t("已满"),
        label: this.$t("已满"),
        value: 1
      }, {
        text: this.$t("未满"),
        label: this.$t("未满"),
        value: 0
      }],
      searchRoomType: '',
      searchRoomTypeLabel: this.$t("房型"),
      searchRoomArrow: '',
      searchRoomArrowLabel: this.$t("朝向"),
      searchRoomPrice: '',
      searchRoomPriceLabel: this.$t("价格"),
      searchRoomStatus: '',
      searchRoomStatusLabel: this.$t("状态"),
      roomTypeText: 'xxxxxx',
      commSearchBuild: '',
      commSearchFloor: '',
      commSearchRoom: '',
      commSearchPackage: '',
      showDorm: false,
      showBill: false,
      billList: [],
      detailData: {},
      dormSelTitle: this.$t("床位选择"),
      dormHeight: {
        height: '0px',
        overflowY: 'auto'
      },
      billHeight: {
        height: '0px',
        overflowY: 'auto'
      },
      formDorm: {
        id: '',
        beds: [],
        imgs: [],
        roomArrow: '',
        roomPrice: 0,
        roomArea: 0,
        peopleNum: 0,
        bedId: ''
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
      this.dormSelType = this.$route.query.dormSelType;
      this.ruleId = this.$route.query.ruleId;
      this.initDormTree();
      this.initDormInfo();

      if (this.dormSelType == 1) {
        this.initPackageTree();
      }
    },

    initDormTree() {
      let params = {};
      this.$axios.get(api_url["a" /* common */].server_enroll_app_dorm_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          console.log(res.data.data);
          let arrow = [{
            text: this.$t("全部"),
            label: this.$t("全部"),
            value: ''
          }];
          let price = [{
            text: this.$t("全部"),
            label: this.$t("全部"),
            value: ''
          }];
          let num = [{
            text: this.$t("全部"),
            label: this.$t("全部"),
            value: ''
          }];
          this.dormTreeList = res.data.data.buildingTree;

          for (let i = 0; i < res.data.data.roomOrientList.length; i++) {
            if (res.data.data.roomOrientList[i] != '') {
              arrow.push({
                label: res.data.data.roomOrientList[i],
                text: res.data.data.roomOrientList[i],
                value: res.data.data.roomOrientList[i]
              });
            }
          }

          for (let i = 0; i < res.data.data.peopleNumList.length; i++) {
            num.push({
              label: res.data.data.peopleNumList[i] + this.$t("人间"),
              text: res.data.data.peopleNumList[i] + this.$t("人间"),
              value: res.data.data.peopleNumList[i]
            });
          }

          for (let i = 0; i < res.data.data.roomPriceList.length; i++) {
            price.push({
              label: res.data.data.roomPriceList[i],
              text: res.data.data.roomPriceList[i],
              value: res.data.data.roomPriceList[i]
            });
          }

          this.filterRoomArrow = arrow;
          this.filterRoomPrice = price;
          this.filterRoomType = num;
        }
      });
    },

    initDormInfo() {
      let params = {};
      let url = '';

      if (this.dormSelType == 0) {
        params = {
          page: 1,
          num: 9999,
          userId: this.loginUserId,
          buildId: this.commSearchBuild,
          floorNum: this.commSearchFloor,
          peopleNum: this.searchRoomType,
          roomOrient: this.searchRoomArrow,
          roomPrice: this.searchRoomPrice,
          choseStatus: this.searchRoomStatus
        };
      } else if (this.dormSelType == 1) {
        params = {
          page: 1,
          num: 9999,
          ruleId: this.$route.query.ruleId,
          pacRegion: this.commSearchPackage
        };
      }

      if (this.dormSelType == 0) {
        url = api_url["a" /* common */].server_enroll_app_dorm_room;
        this.$axios.get(url, {
          params: params
        }).then(res => {
          if (res.data.data) {
            this.dormList = res.data.data.list;
          }
        });
      } else if (this.dormSelType == 1) {
        url = api_url["a" /* common */].enroll_rule_package_list;
        this.$axios.get(url, {
          params: params
        }).then(res => {
          if (res.data.data) {
            this.dormList = res.data.data;
          }
        });
      }
    },

    initBill() {
      let params = {
        userId: this.loginUserId,
        page: 1,
        num: 9999
      };
      let url = '';

      if (this.dormSelType == 0) {
        url = api_url["a" /* common */].server_enroll_app_dorm_bill_page;
      } else if (this.dormSelType == 1) {
        url = api_url["a" /* common */].enroll_rule_package_order_list;
      }

      this.$axios.get(url, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.billList = res.data.data.list;
        }
      });
    },

    initPackageTree() {
      let dormPackageTreeList = [];
      let pacRegions = JSON.parse(this.$route.query.pacRegions);

      for (let i = 0; i < pacRegions.length; i++) {
        dormPackageTreeList.push({
          label: pacRegions[i].pac_region,
          value: pacRegions[i].pac_region,
          text: pacRegions[i].pac_region
        });
      }

      this.dormPackageTreeList = dormPackageTreeList;
    },

    selMenuAll() {
      //this.defaultMenuActive = index + '';
      this.commSearchBuild = "";
      this.commSearchFloor = "";
      this.commSearchRoom = "";
      this.commSearchBuild = "";
      this.commSearchFloor = "";
      this.commSearchPackage = "";
      this.initDormInfo();
    },

    selMenu(event, item, index) {
      //this.defaultMenuActive = index + '';;
      if (this.dormSelType == 0) {
        this.commSearchBuild = "";
        this.commSearchFloor = "";
        this.commSearchRoom = "";

        if (item.storey) {
          this.commSearchBuild = item.id;
        } else {
          this.commSearchBuild = item.buildingId;
        }

        this.commSearchFloor = item.floor;
        this.initDormInfo();
      } else if (this.dormSelType == 1) {
        this.commSearchPackage = item.value;
        this.initDormInfo();
      }
    },

    handleChangeSearchType(item) {
      this.searchRoomType = item;
      this.initDormInfo();
    },

    handleChangeSearchArrow(item) {
      this.searchRoomArrow = item;
      this.initDormInfo();
    },

    handleChangeSearchPrice(item) {
      this.searchRoomPrice = item;
      this.initDormInfo();
    },

    handleChangeSearchStatus(item) {
      this.searchRoomStatus = item;
      this.initDormInfo();
    },

    selBedNo(event, item, index) {
      this.formDorm.bedId = item.id;
      this.activeBedNo = index;
    },

    openedDormDialog() {
      this.dormHeight.height = window.innerHeight * 0.7 - 40 + 'px';
      this.billHeight.height = window.innerHeight * 0.7 - 60 + 'px';
    },

    setBillStatus(event, item) {
      let url = "";
      let params = {};

      if (this.dormSelType == 0) {
        url = api_url["a" /* common */].server_enroll_app_dorm_bill_revoke;
        params = {
          id: item.id,
          userId: this.loginUserId
        };
      } else if (this.dormSelType == 1) {
        url = api_url["a" /* common */].enroll_rule_package_order_revoke;
        params = {
          id: item.id
        };
      }

      params = this.$qs.stringify(params);
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200) {
          this.initBill();
          Object(external_vant_["Toast"])(res.data.desc);
        } else {
          Object(external_vant_["Toast"])(res.data.desc);
        }
      });
    },

    selRoomItem(event, item) {
      this.formDorm.id = item.id;

      if (this.dormSelType == 0) {
        let params = {
          id: item.id
        };
        this.dormSelTitle = this.$t("床位选择") + "(" + item.dormitory_no + ")";
        this.$axios.get(api_url["a" /* common */].server_enroll_app_dorm_info, {
          params: params,
          loading: false
        }).then(res => {
          if (res.data.data) {
            let photos = res.data.data.room_photos ? res.data.data.room_photos.split("|") : [];
            this.formDorm.imgs = photos;
            this.formDorm.beds = res.data.data.beds;
            this.formDorm.roomPrice = res.data.data.room_price;
            this.formDorm.roomArrow = res.data.data.room_orient;
            this.formDorm.peopleNum = res.data.data.people_num;
            this.formDorm.roomArea = res.data.data.area;
          }
        });
      } else if (this.dormSelType == 1) {
        this.dormSelTitle = this.$t("套餐选择") + "(" + item.pacName + ")";
        let photos = item.pacLogo ? item.pacLogo.split(",") : [];
        this.formDorm.imgs = photos;
        this.formDorm.roomPrice = item.pacPrice;
      }

      this.showDorm = true;
    },

    billManage() {
      this.initBill();
      this.showBill = true;
    },

    cancelDormDialog() {
      this.showDorm = false;
    },

    okDormDialog() {
      this.btnLoading = true;
      let url = api_url["a" /* common */].server_enroll_app_dorm_chose;
      let params = {};

      if (this.dormSelType == 0) {
        url = api_url["a" /* common */].server_enroll_app_dorm_chose;
        params = {
          userId: this.loginUserId,
          roomId: this.formDorm.id,
          bedId: this.formDorm.bedId
        };
      } else if (this.dormSelType == 1) {
        url = api_url["a" /* common */].enroll_rule_package_order_chose;
        params = {
          linkId: this.detailData.id,
          packageId: this.formDorm.id
        };
      }

      params = this.$qs.stringify(params);
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200) {
          this.showDorm = false;
          let url = this.$route.query.subPage ? this.$route.query.subPage : '/newStudent/studentIndex';
          this.returnGIndex(url);
          Object(external_vant_["Toast"])(res.data.desc);
        } else {
          Object(external_vant_["Toast"])(res.data.desc);
        }

        this.btnLoading = false;
      });
    },

    closeDialog() {
      this.activeBedNo = '';
      this.billList = [];
      this.formDorm = {
        id: '',
        beds: [],
        imgs: [],
        roomArrow: '',
        roomPrice: 0,
        roomArea: 0,
        peopleNum: 0,
        bedId: ''
      };
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
// CONCATENATED MODULE: ./pages/newStudent/studentDorm.vue?vue&type=script&lang=js&
 /* harmony default export */ var newStudent_studentDormvue_type_script_lang_js_ = (studentDormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/newStudent/studentDorm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(217)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  newStudent_studentDormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3875e1c2",
  "295d1412"
  
)

/* harmony default export */ var studentDorm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=studentDorm.js.map