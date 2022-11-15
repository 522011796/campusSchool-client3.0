exports.ids = [24];
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

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("48428d25", content, true, context)
};

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentStation_vue_vue_type_style_index_0_id_b23699f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentStation_vue_vue_type_style_index_0_id_b23699f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentStation_vue_vue_type_style_index_0_id_b23699f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentStation_vue_vue_type_style_index_0_id_b23699f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentStation_vue_vue_type_style_index_0_id_b23699f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentStation_vue_vue_type_style_index_0_id_b23699f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-b23699f6]{height:60px;line-height:60px;width:100%}.content-block[data-v-b23699f6]{border-top-left-radius:15px;border-top-right-radius:15px;background:#fff;width:100%}.app-title-border-tag[data-v-b23699f6]{width:5px;height:25px;background:#1ea084;display:inline-block}.notice-list-item[data-v-b23699f6]{height:45px;line-height:45px}.bg-student-info-block[data-v-b23699f6]{background:url(/img/bg-student-info.png) no-repeat;height:180px;width:100%;border:1px dashed #ddd}.text-display-line[data-v-b23699f6]{width:80px;top:4px}.name-display-line[data-v-b23699f6],.text-display-line[data-v-b23699f6]{display:inline-block;position:relative}.name-display-line[data-v-b23699f6]{max-width:200px;top:6px}.item-block[data-v-b23699f6]{border-radius:5px;background:#ebeef5;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentStation.vue?vue&type=template&id=b23699f6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-b23699f6></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-b23699f6>","</div>",[_c('van-col',{attrs:{"span":"3"}},[_c('div',{staticClass:"text-left padding-lr-10 color-white"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n            "+_vm._s(_vm.$t("返回"))+"\n          ")])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"18"}},[_c('div',{staticClass:"text-center color-white font-size-16 font-bold"},[_c('span',[_vm._v(_vm._s(_vm.$t('接站信息')))])])]),_vm._ssrNode(" "),_c('van-col',{attrs:{"span":"3"}},[_c('van-button',{attrs:{"size":"small","type":"warning","plain":"","native-type":"button"},on:{"click":_vm.submitInfo}},[_vm._v(_vm._s(_vm.$t("提交")))])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-block\""+(_vm._ssrStyle(null,_vm.divHeight10, null))+" data-v-b23699f6>","</div>",[_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-b23699f6>","</div>",[_vm._ssrNode("<div data-v-b23699f6>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"24"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("基本信息")))])])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b23699f6>","</div>",[_vm._ssrNode("<table class=\"custom-table\" data-v-b23699f6>","</table>",[_vm._ssrNode("<tbody data-v-b23699f6>","</tbody>",[_vm._ssrNode("<tr data-v-b23699f6>","</tr>",[_vm._ssrNode("<td style=\"width: 15%\" data-v-b23699f6>"+_vm._ssrEscape(_vm._s(_vm.$t("姓名")))+"</td> <td style=\"width: 35%\" data-v-b23699f6>"+_vm._ssrEscape(_vm._s(_vm.realName))+"</td> <td style=\"width: 15%\" data-v-b23699f6>"+_vm._ssrEscape(_vm._s(_vm.$t("性别")))+"</td> "),_vm._ssrNode("<td style=\"width: 35%\" data-v-b23699f6>","</td>",[_c('my-sex',{attrs:{"sex":_vm.sex,"tag":"text"}})],1)],2),_vm._ssrNode(" <tr data-v-b23699f6><td style=\"width: 15%\" data-v-b23699f6>"+_vm._ssrEscape(_vm._s(_vm.$t("学号")))+"</td> <td style=\"width: 35%\" data-v-b23699f6>"+_vm._ssrEscape(_vm._s(_vm.stuNo))+"</td> <td style=\"width: 15%\" data-v-b23699f6>"+_vm._ssrEscape(_vm._s(_vm.$t("班级")))+"</td> <td style=\"width: 35%\" data-v-b23699f6>"+_vm._ssrEscape(_vm._s(_vm.className))+"</td></tr> <tr data-v-b23699f6><td style=\"width: 15%\" data-v-b23699f6>"+_vm._ssrEscape(_vm._s(_vm.$t("学院")))+"</td> <td style=\"width: 35%\" data-v-b23699f6>"+_vm._ssrEscape(_vm._s(_vm.collegeName))+"</td> <td style=\"width: 15%\" data-v-b23699f6>"+_vm._ssrEscape(_vm._s(_vm.$t("专业")))+"</td> <td style=\"width: 35%\" data-v-b23699f6>"+_vm._ssrEscape(_vm._s(_vm.majorName))+"</td></tr>")],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20 padding-lr-10\" data-v-b23699f6>","</div>",[_vm._ssrNode("<div data-v-b23699f6>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"24"}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"app-title-border-tag"}),_vm._v(" "),_c('span',{staticClass:"font-bold",staticStyle:{"position":"relative","top":"-8px"}},[_vm._v(_vm._s(_vm.$t("联系信息")))])])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b23699f6>","</div>",[_c('van-form',{ref:"form"},[_c('van-field',{attrs:{"name":_vm.$t('按时报到'),"label":_vm.$t('按时报到')},scopedSlots:_vm._u([{key:"input",fn:function(){return [_c('van-radio-group',{attrs:{"direction":"horizontal"},model:{value:(_vm.form.signStatus),callback:function ($$v) {_vm.$set(_vm.form, "signStatus", $$v)},expression:"form.signStatus"}},[_c('van-radio',{attrs:{"name":true}},[_vm._v(_vm._s(_vm.$t("是")))]),_vm._v(" "),_c('van-radio',{attrs:{"name":false}},[_vm._v(_vm._s(_vm.$t("否")))])],1)]},proxy:true}])}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('到达时间'),"label":_vm.$t('到达时间'),"readonly":"","clickable":"","placeholder":_vm.$t('请选择'),"value":_vm.form.signTime,"rules":[{ required: true, message: '请选择信息' }]},on:{"click":function($event){_vm.showPicker = true}}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('需要接站'),"label":_vm.$t('需要接站')},scopedSlots:_vm._u([{key:"input",fn:function(){return [_c('van-radio-group',{attrs:{"direction":"horizontal"},model:{value:(_vm.form.interface),callback:function ($$v) {_vm.$set(_vm.form, "interface", $$v)},expression:"form.interface"}},[_c('van-radio',{attrs:{"name":true}},[_vm._v(_vm._s(_vm.$t("是")))]),_vm._v(" "),_c('van-radio',{attrs:{"name":false}},[_vm._v(_vm._s(_vm.$t("否")))])],1)]},proxy:true}])}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('陪同人员'),"label":_vm.$t('陪同人员'),"placeholder":_vm.$t('请输入信息'),"autocomplete":"off","rules":_vm.numRules},model:{value:(_vm.form.peopleNum),callback:function ($$v) {_vm.$set(_vm.form, "peopleNum", $$v)},expression:"form.peopleNum"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('交通工具'),"label":_vm.$t('交通工具'),"readonly":"","clickable":"","placeholder":_vm.$t('请选择'),"rules":[{ required: true, message: '请选择信息' }]},on:{"click":function($event){_vm.showTranTypePicker = true}},model:{value:(_vm.form.vehicleLabel),callback:function ($$v) {_vm.$set(_vm.form, "vehicleLabel", $$v)},expression:"form.vehicleLabel"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('到达站'),"label":_vm.$t('到达站'),"readonly":"","clickable":"","placeholder":_vm.$t('请选择'),"rules":[{ required: true, message: '请选择信息' }]},on:{"click":function($event){_vm.showTranStationPicker = true}},model:{value:(_vm.form.addressLabel),callback:function ($$v) {_vm.$set(_vm.form, "addressLabel", $$v)},expression:"form.addressLabel"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('班次/车牌号'),"label":_vm.$t('班次/车牌号'),"placeholder":_vm.$t('请输入信息'),"autocomplete":"off","rules":[{ required: true, message: '请输入信息' }]},model:{value:(_vm.form.vehicleNo),callback:function ($$v) {_vm.$set(_vm.form, "vehicleNo", $$v)},expression:"form.vehicleNo"}}),_vm._v(" "),_c('van-field',{attrs:{"name":_vm.$t('备注'),"label":_vm.$t('备注'),"placeholder":_vm.$t('请输入信息'),"autocomplete":"off"},model:{value:(_vm.form.des),callback:function ($$v) {_vm.$set(_vm.form, "des", $$v)},expression:"form.des"}})],1)],1)],2)],2),_vm._ssrNode(" "),_c('van-popup',{attrs:{"position":"bottom"},model:{value:(_vm.showPicker),callback:function ($$v) {_vm.showPicker=$$v},expression:"showPicker"}},[_c('van-datetime-picker',{attrs:{"type":"datetime","min-date":_vm.minDate,"max-date":_vm.maxDate},on:{"confirm":_vm.onTimeConfirm,"cancel":function($event){_vm.showPicker = false}},model:{value:(_vm.currentDate),callback:function ($$v) {_vm.currentDate=$$v},expression:"currentDate"}})],1),_vm._ssrNode(" "),_c('van-popup',{attrs:{"position":"bottom"},model:{value:(_vm.showTranTypePicker),callback:function ($$v) {_vm.showTranTypePicker=$$v},expression:"showTranTypePicker"}},[_c('van-picker',{attrs:{"show-toolbar":"","title":"交通工具","columns":_vm.filtersVehicleType},on:{"cancel":_vm.onVehicleCancel,"confirm":_vm.onVehicleChange}})],1),_vm._ssrNode(" "),_c('van-popup',{attrs:{"position":"bottom"},model:{value:(_vm.showTranStationPicker),callback:function ($$v) {_vm.showTranStationPicker=$$v},expression:"showTranStationPicker"}},[_c('van-picker',{attrs:{"show-toolbar":"","title":"接站地址","columns":_vm.filtersStationType},on:{"cancel":_vm.onStationCancel,"confirm":_vm.onStationChange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newStudent/studentStation.vue?vue&type=template&id=b23699f6&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/studentStation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var studentStationvue_type_script_lang_js_ = ({
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
      minDate: new Date(2022, 0, 1),
      maxDate: new Date(2050, 11, 31),
      filtersVehicleType: [],
      filtersStationType: [],
      emailReg: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
      phoneReg: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
      numRules: [{
        required: true,
        message: '请填写正确的手机号',
        trigger: 'onBlur'
      }, {
        // 自定义校验规则
        validator: value => {
          return /^\d+$|^\d+[.]?\d+$/.test(value);
        },
        message: '必须为数字',
        trigger: 'onBlur'
      }],
      detailData: '',
      filterStatus: [{
        label: this.$t("是"),
        value: true,
        text: this.$t("是")
      }, {
        label: this.$t("否"),
        value: false,
        text: this.$t("否")
      }],
      showPicker: false,
      showTranTypePicker: false,
      showTranStationPicker: false,
      currentDate: new Date(),
      form: {
        id: '',
        signStatus: true,
        signTime: '',
        interface: true,
        peopleNum: '',
        address: '',
        addressLabel: '',
        vehicle: '',
        vehicleLabel: '',
        vehicleNo: '',
        vehicleNoLabel: '',
        des: ''
      }
    };
  },

  mounted() {},

  created() {
    this.initAppServer();
    this.initTransType();
    this.initStationType();
    this.initArrive();
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

    onTimeConfirm(time) {
      this.form.signTime = this.$moment(time).format("YYYY-MM-DD HH:mm");
      this.showPicker = false;
    },

    onVehicleCancel() {
      this.showTranTypePicker = false;
    },

    onVehicleChange(value, index) {
      this.form.vehicleLabel = value.label;
      this.form.vehicle = value.value;
      this.showTranTypePicker = false;
    },

    onStationCancel() {
      this.showTranStationPicker = false;
    },

    onStationChange(value, index) {
      this.form.addressLabel = value.label;
      this.form.address = value.value;
      this.showTranStationPicker = false;
    },

    studentDetailInfo(userId) {
      let params = {};
      this.$axios.get(api_url["a" /* common */].enroll_student_detail, {
        params: params
      }).then(res => {
        if (res.data.data) {
          //this.detailData = res.data.data;
          console.log(res.data.data); // this.form = {
          //
          // };
        }
      });
    },

    initArrive() {
      let params = {
        userId: this.loginUserId
      };
      this.$axios.get(api_url["a" /* common */].server_enroll_app_arrive_get, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.form = {
            id: '',
            signStatus: res.data.data.on_time,
            signTime: res.data.data.estimate ? this.$moment(res.data.data.estimate).format("YYYY-MM-DD HH:mm") : '',
            interface: res.data.data.need_receive,
            peopleNum: res.data.data.escorts_num,
            address: res.data.data.arrive_station,
            vehicle: res.data.data.train_type,
            vehicleNo: res.data.data.train_no,
            des: res.data.data.des
          };

          for (let i = 0; i < this.filtersVehicleType.length; i++) {
            if (this.filtersVehicleType[i].value == res.data.data.train_type) {
              this.form.vehicleLabel = this.filtersVehicleType[i].label;
            }
          }

          for (let i = 0; i < this.filtersStationType.length; i++) {
            if (this.filtersStationType[i].value == res.data.data.arrive_station) {
              this.form.addressLabel = this.filtersStationType[i].label;
            }
          }
        }
      });
    },

    async initTransType() {
      let params = {};
      await this.$axios.get(api_url["a" /* common */].enroll_link_arrive_trans_type, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let obj = [];

          for (let item in res.data.data) {
            obj.push({
              value: item,
              text: res.data.data[item],
              label: res.data.data[item]
            });
          }

          this.filtersVehicleType = obj;
        }
      });
    },

    async initStationType() {
      let params = {};
      await this.$axios.get(api_url["a" /* common */].enroll_link_arrive_station_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let obj = [];

          for (let i = 0; i < res.data.data.length; i++) {
            obj.push({
              value: res.data.data[i].arrive_station,
              text: res.data.data[i].arrive_station,
              label: res.data.data[i].arrive_station
            });
          } // this.form.addressLabel = obj[0].label;
          // this.form.address = obj[0].value;


          this.filtersStationType = obj;
        }
      });
    },

    submitInfo() {
      this.$refs.form.validate().then(() => {
        this.btnLoading = true;
        let url = api_url["a" /* common */].server_enroll_app_arrive_add;
        let params = {
          trainType: this.form.vehicle,
          trainNo: this.form.vehicleNo,
          estimate: this.form.signTime,
          onTime: this.form.signStatus,
          escortsNum: this.form.peopleNum,
          needReceive: this.form.interface,
          arriveStation: this.form.address,
          des: this.form.des
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
    }

  }
});
// CONCATENATED MODULE: ./pages/newStudent/studentStation.vue?vue&type=script&lang=js&
 /* harmony default export */ var newStudent_studentStationvue_type_script_lang_js_ = (studentStationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/newStudent/studentStation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(230)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  newStudent_studentStationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b23699f6",
  "4275c65a"
  
)

/* harmony default export */ var studentStation = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MySex: __webpack_require__(123).default})


/***/ })

};;
//# sourceMappingURL=studentStation.js.map