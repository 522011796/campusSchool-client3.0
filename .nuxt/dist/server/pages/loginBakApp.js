exports.ids = [14];
exports.modules = {

/***/ 129:
/***/ (function(module, exports) {

// 电话
let phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/; // 必须为数字

let numberReg = /^\d+$|^\d+[.]?\d+$/; // 必须为数字

let numberNoZeroReg = /^[1-9][0-9]*$/; //邮箱

let emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; //1-20位名称，只能是中英文或符号

let s1_20Reg = /^[^0-9]{1,20}$/; //1-10位整数

let n1_10Reg = /^([1-9]{1,10})$/; //1-20位字母、数字、中文

let all1_20Reg = /^[\u4e00-\u9fa5a-zA-Z0-9]{1,20}$/; //1-10位字母、数字

let sn1_10Reg = /^[a-zA-Z0-9]{1,10}$/; //1-20位字母、数字、中文及特殊字符

let allOther1_20Reg = /^[\u4e00-\u9fa5a-zA-Z0-9!@#$%^&*-_,，、。；;()（）\.]{1,20}$/; //1-30位字母、数字、中文及特殊字符，不能数字、空格、点开头

let allRealName1_30Reg = /^[\u4e00-\u9fa5a-zA-Z][\u4e00-\u9fa5\.\sa-zA-Z0-9]{0,29}$/; //身份证

let idCard_Reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //整数或者2位小数

let nf2_Reg = /^([\+ \-]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/; //整数或者2位小数

let rightnNf2_Reg = /^([\+]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/; //整数或者1位小数

let rightnNf1_Reg = /^(?!0+(\.0*)?$)\d+(\.\d{1})?$/; //负数或者2位小数

let mnf2_Reg = /(^(-)[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(-)(0){1}$)|(^(-)[0-9]\.[0-9]([0-9])?$)/; //0-100

let n0_100_Reg = /^([0-9]{1,2}|100)$/; //0-100

let n0_100f2_Reg = /^(\d|[1-9]\d|100)(\.\d{1,2})?$/; //0-999

let n0_999_Reg = /^([0-9]{1,3}|999)$/; //ip

let ip_Reg = /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/;

let FormValidate = function () {
  function FormValidate() {} // From表单验证规则  可用于公用的校验部分


  FormValidate.Form = function () {
    return {
      // 数字验证>0
      validate_numberNoZeroReg(rule, value, callback) {
        if (value && value != "") {
          numberNoZeroReg.test(value) ? callback() : callback(new Error('请输入大于0的正整数'));
        } else {
          callback();
        }
      },

      // ip验证
      validate_ip(rule, value, callback) {
        if (value && value != "") {
          ip_Reg.test(value) ? callback() : callback(new Error('IP地址格式错误'));
        } else {
          callback();
        }
      },

      // 数字验证0-100
      validate0_100Number(rule, value, callback) {
        if (value && value != "") {
          n0_100_Reg.test(value) ? callback() : callback(new Error('0-100正整数'));
        } else {
          callback();
        }
      },

      // 数字验证0-100，两位小数
      validate0_100FloatNumber(rule, value, callback) {
        if (value && value != "") {
          n0_100f2_Reg.test(value) ? callback() : callback(new Error('0-100正整数,可以为两位小数'));
        } else {
          callback();
        }
      },

      // 数字验证0-999
      validate0_999Number(rule, value, callback) {
        if (value && value != "") {
          n0_100_Reg.test(value) ? callback() : callback(new Error('0-999正整数'));
        } else {
          callback();
        }
      },

      // 数字验证
      validateNumber(rule, value, callback) {
        if (value && value != "") {
          numberReg.test(value) ? callback() : callback(new Error('必须为数字'));
        } else {
          callback();
        }
      },

      // 整数或者2位小数
      validateRNf2(rule, value, callback) {
        if (value && value != "") {
          rightnNf2_Reg.test(value) ? callback() : callback(new Error('正整数或者2位小数'));
        } else {
          callback();
        }
      },

      // 整数或者2位小数
      validateNf2(rule, value, callback) {
        if (value && value != "") {
          nf2_Reg.test(value) ? callback() : callback(new Error('整数或者2位小数,可以为负数'));
        } else {
          callback();
        }
      },

      // 负数或者2位小数
      validateMnf2(rule, value, callback) {
        if (value && value != "") {
          mnf2_Reg.test(value) ? callback() : callback(new Error('负数或者2位小数'));
        } else {
          callback();
        }
      },

      // 整数或者1位小数
      validateRNf1(rule, value, callback) {
        if (value && value != "") {
          rightnNf1_Reg.test(value) ? callback() : callback(new Error('非0整数或者1位小数'));
        } else {
          callback();
        }
      },

      // 电话号码验证
      validatePhone(rule, value, callback) {
        if (value && value != "") {
          phoneReg.test(value) ? callback() : callback(new Error('手机格式不正确'));
        } else {
          callback();
        }
      },

      // 身份证验证
      validateIdCard(rule, value, callback) {
        if (value && value != "") {
          idCard_Reg.test(value) ? callback() : callback(new Error('身份证格式不正确'));
        } else {
          callback();
        }
      },

      // 邮箱验证
      validateEmail(rule, value, callback) {
        if (value && value != "") {
          emailReg.test(value) ? callback() : callback(new Error('邮箱格式不正确'));
        } else {
          callback();
        }
      },

      // 1-20位中英文或字符名称验证
      validateS1_20Reg(rule, value, callback) {
        if (value && !s1_20Reg.test(value)) {
          callback(new Error('请输入1-20位中英文或符号'));
        } else {
          callback();
        }
      },

      // 1-10位正整数验证
      validaten1_10Reg(rule, value, callback) {
        if (value && !n1_10Reg.test(value)) {
          callback(new Error('请输入1-10位正整数'));
        } else {
          callback();
        }
      },

      // 1-10位字母、数字
      validatesn1_10Reg(rule, value, callback) {
        if (value && !sn1_10Reg.test(value)) {
          callback(new Error('请输入1-10位数字、字母'));
        } else {
          callback();
        }
      },

      // 1-20位字母、数字、中文
      validatenall1_20Reg(rule, value, callback) {
        if (value && !all1_20Reg.test(value)) {
          callback(new Error('请输入1-20位中文、数字、字母'));
        } else {
          callback();
        }
      },

      // 1-20位字母、数字、中文、特殊字符
      validatenallOther1_20Reg(rule, value, callback) {
        if (value && !allOther1_20Reg.test(value)) {
          callback(new Error('请输入1-20位字符(包含特殊字符)'));
        } else {
          callback();
        }
      },

      // 1-30位字母、数字、中文、不能数字、空格、点开头
      validateRealName1_30Reg(rule, value, callback) {
        if (value && !allRealName1_30Reg.test(value)) {
          callback(new Error('中文、数字、字母开头的字符，长度1-30'));
        } else {
          callback();
        }
      }

    };
  };

  return FormValidate;
}();

exports.FormValidate = FormValidate;

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/button/TimeoutButton.vue?vue&type=template&id=6285c2b8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"selModel":_vm.selModel,"selTime":_vm.selTime}},[_c('el-button',{attrs:{"type":"info","plain":"","disabled":_vm.isDisabled},on:{"click":_vm.setTimeoutFun}},[(!_vm.isDisabled)?_vm._t("default"):_vm._e(),_vm._v(" "),(_vm.isDisabled)?_c('span',[_vm._v(_vm._s(_vm.timeValue)+"s")]):_vm._e()],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/button/TimeoutButton.vue?vue&type=template&id=6285c2b8&scoped=true&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(4);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/button/TimeoutButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//




/* harmony default export */ var TimeoutButtonvue_type_script_lang_js_ = ({
  name: 'TimeoutButton',
  mixins: [mixins["a" /* default */]],
  props: {
    selValue: {
      default: '',
      type: String
    },
    time: {
      default: 60,
      type: Number
    },
    oldPhone: {
      default: '',
      type: String
    },
    newPhone: {
      default: '',
      type: String
    },
    action: {
      default: '',
      type: String
    },
    authBefore: Function,
    data: {
      default: function () {
        return {};
      },
      type: Object
    }
  },
  computed: {
    selModel() {
      this.value = this.selValue;
    },

    selTime() {
      this.timeValue = this.time;
    },

    oldPhone_: {
      get() {
        return this.oldPhone;
      },

      set(v) {}

    },
    newPhone_: {
      get() {
        return this.newPhone;
      },

      set(v) {}

    }
  },

  data() {
    return {
      value: '',
      isDisabled: false,
      timeValue: 0
    };
  },

  mounted() {},

  created() {//this.initConfig();
  },

  methods: {
    async initConfig() {
      await this.getSessionInfo();
    },

    setTimeoutFun() {
      let me = this;

      if (this.authBefore) {
        var before = this.authBefore();

        if (before == false) {
          return;
        }
      }
      /*if (before && before.then) {
        before.then(function (processedFile) {
          console.log(1);
        }, function () {
          console.log(2);
        });
      } else if (before !== false) {
        console.log(3);
      } else {
        console.log(4);
      }*/


      let params = this.data;
      params = this.$qs.stringify(params);
      me.isDisabled = true;
      this.$axios.post(this.action, params, {
        loading: false
      }).then(res => {
        if (res.data.code == 200) {
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
          let interval = setInterval(function () {
            --me.timeValue;

            if (me.timeValue < 0) {
              me.timeValue = 60;
              me.isDisabled = false;
              clearInterval(interval);
            }
          }, 1000);
        } else {
          me.isDisabled = false;
          Object(utils["c" /* MessageWarning */])(this.$t("请检查信息是否有误！"));
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/utils/button/TimeoutButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_TimeoutButtonvue_type_script_lang_js_ = (TimeoutButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/button/TimeoutButton.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  button_TimeoutButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6285c2b8",
  "c9498d04"
  
)

/* harmony default export */ var TimeoutButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rules__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      rules: {
        code: [{
          required: true,
          message: this.$t("请输入信息"),
          trigger: 'blur'
        }],
        phone: [{
          required: true,
          message: this.$t("请输入信息"),
          trigger: 'blur'
        }, {
          validator: _rules__WEBPACK_IMPORTED_MODULE_0___default.a.FormValidate.Form().validatePhone,
          trigger: 'blur'
        }]
      }
    };
  }

});

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(185);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("47ca6faf", content, true, context)
};

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginBakApp_vue_vue_type_style_index_0_id_60ff82e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginBakApp_vue_vue_type_style_index_0_id_60ff82e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginBakApp_vue_vue_type_style_index_0_id_60ff82e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginBakApp_vue_vue_type_style_index_0_id_60ff82e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginBakApp_vue_vue_type_style_index_0_id_60ff82e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginBakApp_vue_vue_type_style_index_0_id_60ff82e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".login-bg-class[data-v-60ff82e5]{position:absolute;top:0;left:0;height:100%;width:100%;min-width:1200px}.login-bg-icon-class[data-v-60ff82e5]{position:absolute;top:50%;left:20%;transform:translateY(-50%);height:300px;width:350px}.login-main-title-class[data-v-60ff82e5]{position:absolute;top:50%;left:15%;transform:translateY(-5%)}.login-block[data-v-60ff82e5]{height:450px;top:13%;background:#00cdff;background-image:linear-gradient(180deg,#00cdff,#0089d4)}.login-block[data-v-60ff82e5],.login-title[data-v-60ff82e5]{width:100%;min-width:1200px;position:relative}.login-title[data-v-60ff82e5]{height:88px;top:-85px;left:0;padding:0}.login-title-logo-block[data-v-60ff82e5]{margin-left:80px}.login-footer[data-v-60ff82e5]{height:80px;line-height:80px;width:100%;min-width:1200px;position:relative;top:18%;left:0;z-index:9}.login-logo[data-v-60ff82e5]{width:300px;height:100%}.login-tag-info[data-v-60ff82e5]{position:relative;bottom:10px}.login-tag-info label[data-v-60ff82e5]{padding:0 10px;font-size:14px}.login-user-opr[data-v-60ff82e5]{margin:25% auto 0;padding:25px 20px}.login-user-title[data-v-60ff82e5]{color:#0089d4;font-weight:700;font-size:20px}.login-title-label[data-v-60ff82e5]{color:#515151}.login-btn[data-v-60ff82e5]{width:100%}.login-bottom-other label[data-v-60ff82e5]{padding:0 20px}.login-main-title-text-class[data-v-60ff82e5]{height:40px;width:400px}.login-main-title-icon-left-class[data-v-60ff82e5]{height:40px;width:70px}.login-main-title-icon-right-class[data-v-60ff82e5]{height:40px;width:35px}.login-bottom-other-block[data-v-60ff82e5]{margin-top:60px;width:100%;padding:0}.login-user-change-tag[data-v-60ff82e5]{position:absolute;right:0;top:0;color:#fefefe;font-size:12px;background:#e6a23c;border-top-left-radius:10px;border-bottom-left-radius:10px;padding:2px 8px}.left-bottom-triangle[data-v-60ff82e5]{border-right:18px solid transparent;right:-19px}.left-bottom-triangle[data-v-60ff82e5],.right-bottom-triangle[data-v-60ff82e5]{width:0;height:0;border-top:23px solid #909399;position:absolute;bottom:0}.right-bottom-triangle[data-v-60ff82e5]{border-left:18px solid transparent;left:-19px}.right-top-triangle[data-v-60ff82e5]{border-right:18px solid transparent;right:-18px}.left-top-triangle[data-v-60ff82e5],.right-top-triangle[data-v-60ff82e5]{width:0;height:0;border-bottom:27px solid #909399;position:absolute;top:0}.left-top-triangle[data-v-60ff82e5]{border-left:18px solid transparent;left:-18px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/loginBakApp.vue?vue&type=template&id=60ff82e5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",staticStyle:{"overflow-y":"auto","background":"url(/img/login-bg.png) no-repeat","background-size":"cover"},style:(_vm.fullHeight)},[_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_vm._ssrNode("<div class=\"login-user-opr\" data-v-60ff82e5>","</div>",[_vm._ssrNode("<div class=\"left-top-triangle\" data-v-60ff82e5></div> <div class=\"right-top-triangle\" data-v-60ff82e5></div> <div class=\"right-bottom-triangle\" data-v-60ff82e5></div> <div class=\"left-bottom-triangle\" data-v-60ff82e5></div> <div data-v-60ff82e5><span class=\"login-user-title\" data-v-60ff82e5>"+_vm._ssrEscape(_vm._s(_vm.$t("用户登录")))+"</span></div> <div class=\"line-height\" data-v-60ff82e5></div> "),_vm._ssrNode("<div class=\"margin-top-30\" data-v-60ff82e5>","</div>",[_vm._ssrNode("<div class=\"animated fadeInLeft\""+(_vm._ssrStyle(null,null, { display: (_vm.userType == 1) ? '' : 'none' }))+" data-v-60ff82e5>","</div>",[(_vm.userSubType == 1)?_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5><span class=\"login-title-label\" data-v-60ff82e5>"+_vm._ssrEscape(_vm._s(_vm.$t("用户名/手机号")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-60ff82e5>","</div>",[_c('el-input',{nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.login($event)}},model:{value:(_vm.form.username),callback:function ($$v) {_vm.$set(_vm.form, "username", $$v)},expression:"form.username"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5><span class=\"login-title-label\" data-v-60ff82e5>"+_vm._ssrEscape(_vm._s(_vm.$t("密码")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-60ff82e5>","</div>",[_c('el-input',{attrs:{"show-password":true},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.login($event)}},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1)],2)],2):_vm._e(),_vm._ssrNode(" "),(_vm.userSubType == 2)?_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5><span class=\"login-title-label\" data-v-60ff82e5>"+_vm._ssrEscape(_vm._s(_vm.$t("身份证号码")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-60ff82e5>","</div>",[_c('el-input',{model:{value:(_vm.form.username),callback:function ($$v) {_vm.$set(_vm.form, "username", $$v)},expression:"form.username"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5><span class=\"login-title-label\" data-v-60ff82e5>"+_vm._ssrEscape(_vm._s(_vm.$t("密码")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-60ff82e5>","</div>",[_c('el-input',{attrs:{"show-password":true},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.login($event)}},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1)],2)],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"animated fadeInLeft\""+(_vm._ssrStyle(null,null, { display: (_vm.userType == 2) ? '' : 'none' }))+" data-v-60ff82e5>","</div>",[(_vm.userSubType == 1)?_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5><span class=\"login-title-label\" data-v-60ff82e5>"+_vm._ssrEscape(_vm._s(_vm.$t("用户名/手机号")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-60ff82e5>","</div>",[_c('el-input',{nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.login($event)}},model:{value:(_vm.form.username),callback:function ($$v) {_vm.$set(_vm.form, "username", $$v)},expression:"form.username"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5><span class=\"login-title-label\" data-v-60ff82e5>"+_vm._ssrEscape(_vm._s(_vm.$t("密码")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-60ff82e5>","</div>",[_c('el-input',{attrs:{"show-password":true},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.login($event)}},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1)],2)],2):_vm._e(),_vm._ssrNode(" "),(_vm.userSubType == 3)?_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5><span class=\"login-title-label\" data-v-60ff82e5>"+_vm._ssrEscape(_vm._s(_vm.$t("学校编号")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-60ff82e5>","</div>",[_c('el-input',{nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.login($event)}},model:{value:(_vm.form.campusNo),callback:function ($$v) {_vm.$set(_vm.form, "campusNo", $$v)},expression:"form.campusNo"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5><span class=\"login-title-label\" data-v-60ff82e5>"+_vm._ssrEscape(_vm._s(_vm.$t("工号")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-60ff82e5>","</div>",[_c('el-input',{nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.login($event)}},model:{value:(_vm.form.username),callback:function ($$v) {_vm.$set(_vm.form, "username", $$v)},expression:"form.username"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5><span class=\"login-title-label\" data-v-60ff82e5>"+_vm._ssrEscape(_vm._s(_vm.$t("密码")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-60ff82e5>","</div>",[_c('el-input',{attrs:{"show-password":true},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.login($event)}},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1)],2)],2):_vm._e(),_vm._ssrNode(" "),(_vm.userSubType == 2)?_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5><span class=\"login-title-label\" data-v-60ff82e5>"+_vm._ssrEscape(_vm._s(_vm.$t("身份证号码")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-60ff82e5>","</div>",[_c('el-input',{model:{value:(_vm.form.username),callback:function ($$v) {_vm.$set(_vm.form, "username", $$v)},expression:"form.username"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5><span class=\"login-title-label\" data-v-60ff82e5>"+_vm._ssrEscape(_vm._s(_vm.$t("密码")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-60ff82e5>","</div>",[_c('el-input',{attrs:{"show-password":true},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.login($event)}},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1)],2)],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-60ff82e5>","</div>",[_vm._ssrNode("<div data-v-60ff82e5>","</div>",[_c('el-button',{staticClass:"login-btn",attrs:{"type":"primary","loading":_vm.dialogLoading},on:{"click":_vm.login}},[_vm._v("\n                  "+_vm._s(_vm.$t("登录"))+"\n                ")])],1)]),_vm._ssrNode(" "+((_vm.userType == 2 || _vm.userType == 1)?("<div class=\"login-bottom-other-block margin-top-40\" data-v-60ff82e5><div class=\"line-height\" data-v-60ff82e5></div> <div class=\"text-center login-bottom-other margin-top-10\" data-v-60ff82e5><label class=\"color-muted\" data-v-60ff82e5><i class=\"fa fa-user-circle-o\" data-v-60ff82e5></i>"+_vm._ssrEscape(" "+_vm._s(_vm.$t("账号/手机号")))+"</label> <label class=\"color-muted\" data-v-60ff82e5><i class=\"fa fa-id-card-o\" data-v-60ff82e5></i>"+_vm._ssrEscape(" "+_vm._s(_vm.$t("身份证")))+"</label></div></div>"):"<!---->"))],2)],2)])]),_vm._ssrNode(" "),_c('dialog-normal',{attrs:{"tabindex":"0","visible":_vm.modalVisible,"width-style":"95%","title":_vm.$t('账户设置')},on:{"close":_vm.closeDialog,"right-close":_vm.cancelDialog}},[_c('span',{attrs:{"tabindex":"1"}}),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_c('div',{staticClass:"padding-lr-30"},[_c('div',[_c('span',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("系统检测到您未进行账户激活，需要")))])]),_vm._v(" "),_c('div',{staticClass:"color-grand margin-top-10 font-size-18",staticStyle:{"font-weight":"bold"}},[_vm._v(_vm._s(_vm.$t("绑定手机")))]),_vm._v(" "),_c('div',{staticClass:"margin-top-10 color-muted"},[_vm._v(_vm._s(_vm.$t("绑定后的手机号可以用于账号登录以及找回密码！")))])]),_vm._v(" "),_c('el-form',{ref:"formAuth",staticClass:"margin-top-20 text-center",attrs:{"model":_vm.formAuth,"rules":_vm.rules,"label-width":"0px"}},[_c('el-form-item',{attrs:{"prop":"phone"}},[_c('el-input',{staticStyle:{"width":"95%"},attrs:{"placeholder":_vm.$t('手机号')},model:{value:(_vm.formAuth.phone),callback:function ($$v) {_vm.$set(_vm.formAuth, "phone", $$v)},expression:"formAuth.phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"code"}},[_c('el-input',{staticStyle:{"width":"95%"},model:{value:(_vm.formAuth.code),callback:function ($$v) {_vm.$set(_vm.formAuth, "code", $$v)},expression:"formAuth.code"}},[_c('template',{slot:"append"},[_c('timeout-button',{attrs:{"action":_vm.updatePhoneMms,"data":{newPhone: this.formAuth.phone, userId: this.formAuth.userId},"auth-before":_vm.authBefore}},[[_vm._v(_vm._s(_vm.$t("获取验证码")))]],2)],1)],2)],1)],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.cancelDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){_vm.dialogLoading == false ? _vm.okDialog() : ''}}},[(_vm.dialogLoading)?_c('i',{staticClass:"el-icon-loading"}):_vm._e(),_vm._v("\n          "+_vm._s(_vm.$t("确定"))+"\n        ")])],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/loginBakApp.vue?vue&type=template&id=60ff82e5&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./components/utils/dialog/DialogNormal.vue + 4 modules
var DialogNormal = __webpack_require__(56);

// EXTERNAL MODULE: ./components/utils/button/TimeoutButton.vue + 4 modules
var TimeoutButton = __webpack_require__(130);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(4);

// EXTERNAL MODULE: ./utils/validater/loginPhoneValidater.js
var loginPhoneValidater = __webpack_require__(136);

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/loginBakApp.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var loginBakAppvue_type_script_lang_js_ = ({
  layout: 'defaultFullScreen',
  mixins: [loginPhoneValidater["a" /* default */]],
  components: {
    DialogNormal: DialogNormal["default"],
    TimeoutButton: TimeoutButton["default"]
  },

  data() {
    return {
      userType: '1',
      userSubType: '2',
      userAccountType: '0',
      dialogLoading: false,
      modalVisible: false,
      showContent: false,
      testVisible: true,
      updatePhoneMms: api_url["a" /* common */].send_active_account,
      form: {
        username: '',
        password: '',
        campusNo: ''
      },
      formAuth: {
        phone: '',
        code: '',
        userId: ''
      },
      fullHeight: {
        height: ''
      }
    };
  },

  mounted() {
    // 监听窗口大小
    window.onresize = () => {
      this.hh();
    };

    this.showContent = true;
  },

  beforeCreate: function () {
    this.showContent = false;
  },

  created() {
    this.hh();
  },

  methods: {
    hh() {
      if (false) {}
    },

    changeUserType(type) {
      this.form.username = "";
      this.form.password = "";
      this.form.campusNo = "";
      this.userSubType = "1";
      this.userType = type;
    },

    changeSubType(type) {
      this.form.username = "";
      this.form.password = "";
      this.form.campusNo = "";
      this.userSubType = type;

      if (type == 1) {
        this.userAccountType = 0;
      } else if (type == 2) {
        this.userAccountType = 3;
      }
    },

    login() {
      let userType = "";

      if (this.form.username == "" || this.form.password == "") {
        Object(external_vant_["Toast"])(this.$t("请输入正确的信息！"));
        return;
      }

      let params = {
        clientType: 4,
        accountType: 0,
        account: this.form.username,
        password: Object(utils["e" /* getmd5 */])(this.form.password)
      };

      if (this.userSubType == 1) {
        //params['campusNo'] = this.form.campusNo;
        params['accountType'] = 0;
      } else if (this.userSubType == 2) {
        params['accountType'] = 3;
      }

      if (this.userType == 1) {
        userType = 5;
      }

      if (this.userType == 2) {
        userType = 4;
      }

      params['userType'] = userType;
      params = this.$qs.stringify(params);
      this.dialogLoading = true;
      this.$axios.post(api_url["a" /* common */].login_url, params, {
        loading: false
      }).then(res => {
        if (res.data.code == 200) {
          this.$router.push("/newStudent/studentIndex");
          localStorage.removeItem("menuTabList");
          Object(external_vant_["Toast"])(res.data.desc);
        } else if (res.data.code == 2032) {
          this.formAuth.userId = res.data.data.userInfo.userId;
          this.modalVisible = true;
        } else {
          Object(external_vant_["Toast"])(res.data.desc);
        }

        this.dialogLoading = false;
      });
    },

    closeDialog(event) {
      let _self = this;

      this.formAuth = {
        phone: '',
        code: '',
        userId: ''
      };

      if (this.$refs['formAuth']) {
        this.$refs['formAuth'].resetFields();
      }
    },

    authBefore() {
      let phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

      if (this.formAuth.phone == "") {
        Object(external_vant_["Toast"])(this.$t("请输入正确的手机号"));
        return false;
      } else if (!phoneReg.test(this.formAuth.phone)) {
        return false;
      }

      return true;
    },

    okDialog(event) {
      let url = "";
      this.$refs['formAuth'].validate(valid => {
        if (valid) {
          this.dialogLoading = true;
          let params = {
            phone: this.formAuth.phone,
            captcha: this.formAuth.code
          };
          params = this.$qs.stringify(params);
          this.$axios.post(api_url["a" /* common */].set_active_account, params, {
            loading: false
          }).then(res => {
            if (res.data.code == 200) {
              this.modalVisible = false;
              this.userType = 1;
              this.userSubType = 1;
              this.form.username = "";
              this.form.password = "";
              this.form.campusNo = "";
              Object(external_vant_["Toast"])(res.data.desc + "," + this.$t("请使用激活的手机号进行登录！"));
            } else {
              Object(external_vant_["Toast"])(res.data.desc);
            }

            this.dialogLoading = false;
          });
        }
      });
    },

    cancelDialog() {
      this.modalVisible = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/loginBakApp.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginBakAppvue_type_script_lang_js_ = (loginBakAppvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/loginBakApp.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(184)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginBakAppvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "60ff82e5",
  "7e2d9984"
  
)

/* harmony default export */ var loginBakApp = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TimeoutButton: __webpack_require__(130).default,DialogNormal: __webpack_require__(56).default})


/***/ })

};;
//# sourceMappingURL=loginBakApp.js.map