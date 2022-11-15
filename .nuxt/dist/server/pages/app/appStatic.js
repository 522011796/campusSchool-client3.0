exports.ids = [8];
exports.modules = {

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("751c3064", content, true, context)
};

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/HBarChart.vue?vue&type=template&id=3fdd64c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"100%"},attrs:{"id":_vm.chartId}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/charts/HBarChart.vue?vue&type=template&id=3fdd64c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/HBarChart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var HBarChartvue_type_script_lang_js_ = ({
  props: {
    chartId: '',
    chartTitle: '',
    dataLegned: {
      default: function () {
        return [];
      },
      type: Array
    },
    dataKey: {
      default: function () {
        return [];
      },
      type: Array
    },
    data: {
      default: function () {
        return [];
      },
      type: Array
    }
  },

  data() {
    return {};
  },

  mounted() {
    this.lineChart();
  },

  created() {},

  methods: {
    lineChart() {
      let _self = this;

      let lineId = document.getElementById(this.chartId); //找到绘制的区域,强烈推荐使用refs

      let myChart = this.$echarts.init(lineId); //初始化

      myChart.setOption({
        //官网例子
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

          }
        },
        legend: {
          show: true,
          data: this.dataLegned
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'category',
          data: this.dataKey,
          axisLabel: {
            interval: 0,
            formatter: function (value) {
              let str = value;

              if (value && value.length >= 5) {
                str = str.substr(0, 4) + "...";
              }

              return str;
            }
          }
        },
        xAxis: {
          type: 'value',
          minInterval: 1
        },
        dataZoom: [//y轴内置滑动
        {
          type: 'slider',
          yAxisIndex: 0,
          orient: 'vertical',
          // 竖直。
          filterMode: 'empty',
          // 当前数据窗口外的数据，被 设置为空。即 不会 影响其他轴的数据范围。
          startValue: 0,
          endValue: this.dataKey.length - 6,
          borderColor: 'transparent',
          handleSize: 0,
          showDetail: false // 是否显示detail，即拖拽时候显示详细数值信息。

        }],
        series: this.data
      }, true);
    }

  },
  watch: {
    data: function (newQuestion, oldQuestion) {
      this.lineChart();
    }
  }
});
// CONCATENATED MODULE: ./components/charts/HBarChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_HBarChartvue_type_script_lang_js_ = (HBarChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/charts/HBarChart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  charts_HBarChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3fdd64c8",
  "b3f1dc3a"
  
)

/* harmony default export */ var HBarChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appStatic_vue_vue_type_style_index_0_id_52bcee9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appStatic_vue_vue_type_style_index_0_id_52bcee9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appStatic_vue_vue_type_style_index_0_id_52bcee9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appStatic_vue_vue_type_style_index_0_id_52bcee9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appStatic_vue_vue_type_style_index_0_id_52bcee9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appStatic_vue_vue_type_style_index_0_id_52bcee9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title-block[data-v-52bcee9c]{height:60px;line-height:60px;width:100%}.content-block[data-v-52bcee9c]{border-top-left-radius:15px;border-top-right-radius:15px;background:#fff;width:100%}.app-title-border-tag[data-v-52bcee9c]{width:5px;height:30px;background:#1ea084;display:inline-block}.notice-list-item[data-v-52bcee9c]{height:45px;line-height:45px}.info-block-left[data-v-52bcee9c]{width:50%;border-right:1px solid #f2f6fc}.info-block-right[data-v-52bcee9c]{margin-left:0;height:100%}.info-block-header[data-v-52bcee9c]{height:45px;line-height:45px;font-size:14px;color:#909399;background:#e9e9e9}.moon-left-menu-tag[data-v-52bcee9c]{position:absolute;top:0;bottom:0;display:flex;left:50%;transition:all .2s ease-in-out;z-index:99}.moon-left-menu-tag .moon-left-menu-tag-container[data-v-52bcee9c]{width:100%;height:100%;display:flex;align-items:center;cursor:pointer}.moon-left-menu-tag .moon-left-menu-tag_indicator[data-v-52bcee9c]{margin-top:-44.5px;width:15px;height:40px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#ebeef5;border-radius:0 4px 4px 0;border:1px solid #e5e5e5;border-left-color:transparent;opacity:1;transition-duration:.2s;transition-timing-function:ease-in-out;color:#ddd;padding-right:2px}.moon-left-menu-tag_indicator[data-v-52bcee9c]:hover{background:#a0cfff;color:#fff}.moon-left-toogle-menu[data-v-52bcee9c]{border-right:0 solid #dcdee2;float:left;box-shadow:2px 0 4px #bbb;position:relative;background:#f2f2f2;background-image:linear-gradient(180deg,#f2f2f2,#f2f2f2);padding:0;position:fixed;transition:all .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:99}.icon-class-left[data-v-52bcee9c]{color:#ddd;transform:rotate(0deg)}.icon-class-right[data-v-52bcee9c]{transform:rotate(180deg)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appStatic.vue?vue&type=template&id=52bcee9c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+(_vm._ssrStyle(null,{height: _vm.navHeight+'px'}, null))+" data-v-52bcee9c></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-title-block",_vm.loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success'))+" data-v-52bcee9c>","</div>",[_c('van-row',[_c('van-col',{attrs:{"span":"5"}},[_c('div',{staticClass:"text-left padding-lr-10 color-white"},[_c('span',{staticClass:"font-bold font-size-14",on:{"click":_vm.returnIndex}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v("\n            "+_vm._s(_vm.$t("返回"))+"\n          ")])])]),_vm._v(" "),_c('van-col',{staticClass:"text-center",attrs:{"span":"14"}},[_c('span',{staticClass:"color-white font-size-14 font-bold"},[_vm._v(_vm._s(_vm.$t('我的统计')))])]),_vm._v(" "),_c('van-col',{attrs:{"span":"5"}},[_vm._v("\n         \n      ")])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-block\" data-v-52bcee9c>","</div>",[_vm._ssrNode("<form action=\"/\" data-v-52bcee9c>","</form>",[_vm._ssrNode("<div style=\"background: #f5f5f5;height: 40px\" data-v-52bcee9c>","</div>",[_c('van-row',[_c('van-col',{staticClass:"text-left",attrs:{"span":8}},[_c('el-select',{staticClass:"margin-left-10",staticStyle:{"margin-top":"5px"},attrs:{"size":"small","placeholder":"请选择表单"},on:{"change":_vm.dropdownItem},model:{value:(_vm.formValue),callback:function ($$v) {_vm.formValue=$$v},expression:"formValue"}},_vm._l((_vm.formList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('van-col',{staticClass:"text-right padding-lr-10",attrs:{"span":16}},[(_vm.fliterType == 1)?_c('van-button',{staticClass:"layout-item",staticStyle:{"margin-top":"5px"},attrs:{"size":"small","type":"warning","plain":"","native-type":"button"},on:{"click":_vm.selSearch}},[_vm._v(_vm._s(_vm.$t('选择部门')))]):_vm._e(),_vm._v(" "),(_vm.fliterType == 2)?_c('van-button',{staticClass:"layout-item",staticStyle:{"margin-top":"5px"},attrs:{"size":"small","type":"warning","plain":"","native-type":"button"},on:{"click":_vm.selSearch}},[_vm._v(_vm._s(_vm.$t('选择院系')))]):_vm._e(),_vm._v(" "),_c('van-button',{staticClass:"layout-item",staticStyle:{"margin-top":"5px"},attrs:{"size":"small","type":"default","plain":"","native-type":"button"},on:{"click":_vm.selTime}},[_c('span',[_vm._v(_vm._s(_vm.dateTime == "" ? _vm.$t('选择时间') : _vm.dateTime))])]),_vm._v(" "),(_vm.dateTime != '' || _vm.searchData.length > 0)?_c('span',{staticClass:"fa fa-times-circle color-muted margin-left-5 font-size-14",staticStyle:{"position":"relative","top":"5px"},on:{"click":_vm.clearTime}}):_vm._e()],1)],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"detail-card padding-lr-10 margin-top-10\""+(_vm._ssrStyle({"position":"relative"},_vm.divHeight9, null))+" data-v-52bcee9c>","</div>",[_c('el-card',{staticStyle:{"height":"150px"},attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticStyle:{"height":"75px","width":"100%"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"text-left padding-lr-5"},[_c('div',[_c('span',{staticClass:"font-size-14 font-bold"},[_vm._v(_vm._s(_vm.cardLabel1 != '' ? _vm.cardLabel1 : '--'))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v(_vm._s(_vm.cardValue1 !== '' ? _vm.cardValue1 : '--'))])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"text-right padding-lr-5"},[_c('div',[_c('span',{staticClass:"font-size-14 font-bold"},[_vm._v(_vm._s(_vm.cardLabel2 != '' ? _vm.cardLabel2 : '--'))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v(_vm._s(_vm.cardValue2 !== '' ? _vm.cardValue2 : '--'))])])])])],1)],1),_vm._v(" "),_c('div',{staticStyle:{"height":"75px","width":"100%"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"text-left padding-lr-5"},[_c('div',[_c('span',{staticClass:"font-size-14 font-bold"},[_vm._v(_vm._s(_vm.cardLabel3 != '' ? _vm.cardLabel3 : '--'))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v(_vm._s(_vm.cardValue3 !== '' ? _vm.cardValue3 : '--'))])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"text-right padding-lr-5"},[_c('div',[_c('span',{staticClass:"font-size-14 font-bold"},[_vm._v(_vm._s(_vm.cardLabel4 != '' ? _vm.cardLabel4 : '--'))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v(_vm._s(_vm.cardValue4 !== '' ? _vm.cardValue4 : '--'))])])])])],1)],1)]),_vm._ssrNode(" "),_c('el-card',{staticStyle:{"height":"240px","margin-top":"20px"},attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.circleParams))])]),_vm._v(" "),_c('div',{staticClass:"text-center;",staticStyle:{"height":"240px","width":"100%"}},[_c('div',{staticClass:"text-center"},[_c('el-progress',{attrs:{"type":"dashboard","width":160,"show-text":false,"percentage":_vm.circleValue}})],1),_vm._v(" "),_c('div',{staticClass:"text-center font-size-12 font-bold",staticStyle:{"position":"relative","top":"-90px"}},[_c('span',[_vm._v(_vm._s(_vm.circleValueText != "" ? _vm.circleValueText : '--'))])]),_vm._v(" "),_c('div',{staticClass:"text-center color-muted",staticStyle:{"position":"relative","top":"-10px"}},[_c('div',[_c('span',[_vm._v(_vm._s(_vm.circleLabel != "" ? _vm.circleLabel : '--'))])])])])]),_vm._ssrNode(" "),_c('el-card',{staticStyle:{"height":"480px","margin-top":"20px"},attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticClass:"text-left"},[_c('span',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.barParams))])]),_vm._v(" "),_c('div',{staticClass:"text-center;",staticStyle:{"height":"440px","width":"100%"}},[_c('h-bar-chart',{attrs:{"chart-id":"barId","data-legned":_vm.barDataLegned,"data-key":_vm.barDataKey,"data":_vm.barData}})],1)])],2)],2),_vm._ssrNode(" "),_c('van-calendar',{attrs:{"type":"range","min-date":_vm.minDate,"max-date":_vm.maxDate},on:{"confirm":_vm.onConfirm},model:{value:(_vm.showCalendar),callback:function ($$v) {_vm.showCalendar=$$v},expression:"showCalendar"}}),_vm._ssrNode(" "),_c('van-popup',{staticClass:"custom-cascader",style:({ height: '350px' }),attrs:{"round":"","position":"bottom"},model:{value:(_vm.showBottom),callback:function ($$v) {_vm.showBottom=$$v},expression:"showBottom"}},[(_vm.fliterType == 1)?_c('el-cascader-panel',{ref:"SelectorDept",style:({ height: '350px' }),attrs:{"props":{multiple: true},"options":_vm.dataDept},on:{"change":_vm.searchTop},model:{value:(_vm.searchDept),callback:function ($$v) {_vm.searchDept=$$v},expression:"searchDept"}}):_vm._e(),_vm._v(" "),(_vm.fliterType == 2)?_c('el-cascader-panel',{ref:"SelectorCollege",style:({ height: '350px' }),attrs:{"props":{multiple: true},"options":_vm.dataCollege},on:{"change":_vm.searchTop},model:{value:(_vm.searchCollege),callback:function ($$v) {_vm.searchCollege=$$v},expression:"searchCollege"}}):_vm._e()],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/app/appStatic.vue?vue&type=template&id=52bcee9c&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/mixins.js
var mixins = __webpack_require__(11);

// EXTERNAL MODULE: ./components/charts/HBarChart.vue + 4 modules
var HBarChart = __webpack_require__(170);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/app/appStatic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var appStaticvue_type_script_lang_js_ = ({
  name: 'appIndex',
  components: {
    HBarChart: HBarChart["default"]
  },
  layout: 'defaultAppScreen',
  mixins: [mixins["a" /* default */]],

  data() {
    return {
      active: 6,
      serverAppList: [],
      noticeAppList: [],
      defaultMenuActive: '',
      isCollapse: false,
      showBottom: false,
      departmentPath: '',
      leftHeight: {
        'height': '100%',
        'width': '0%'
      },
      toggleTag: {
        'left': '0'
      },
      formList: [],
      formValue: '',
      serchName: '',
      showCalendar: false,
      dateTime: '',
      searchDept: [],
      searchCollege: [],
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2030, 12, 1),
      timeData: [],
      searchData: [],
      startTime: '',
      endTime: '',
      collegeId: '',
      majorId: '',
      grandId: '',
      classId: '',
      fliterType: '',
      cardLabel1: '',
      cardValue1: '',
      cardLabel2: '',
      cardValue2: '',
      cardLabel3: '',
      cardValue3: '',
      cardLabel4: '',
      cardValue4: '',
      circleLabel: '',
      circleValue: 0,
      circleValueText: '',
      circleParams: '',
      barLabel: '',
      barValue: '',
      barDataLegned: [],
      barDataKey: [],
      barData: [],
      barParams: ''
    };
  },

  mounted() {
    this.$nextTick(() => {});
  },

  created() {
    this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
    this.getDeptInfo(2);
    this.getCollegeInfo(4);
    this.initForm();
  },

  methods: {
    layoutInit() {},

    initForm() {
      let params = {
        page: 1,
        num: 9999
      };
      this.$axios.get(url["a" /* common */].static_appinfo_form_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let array = [];

          for (let i = 0; i < res.data.data.list.length; i++) {
            array.push({
              label: res.data.data.list[i].stat_name,
              value: res.data.data.list[i].id + ""
            });
          }

          if (array.length > 0) {
            this.formValue = res.data.data.list[0].id + "";
            this.initFormDetail(res.data.data.list[0].id);
          }

          this.formList = array;
        }
      });
    },

    initFormDetail(id) {
      let params = {
        id: id
      };
      this.$axios.get(url["a" /* common */].static_appinfo_form_detail, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let array = [];

          for (let i = 0; i < res.data.data.unitList.length; i++) {
            array.push({
              id: res.data.data.unitList[i].id,
              relaFromField1: res.data.data.unitList[i].relaFromField1,
              relaFromField2: res.data.data.unitList[i].relaFromField2,
              filterType: res.data.data.unitList[i].filterType,
              filterRules: res.data.data.unitList[i].filterRules,
              unitName: res.data.data.unitList[i].unitName
            });
          }

          this.fliterType = res.data.data.unitList[0].filterType;
          this.initData(array[1].id, 1, array);
          this.initData(array[2].id, 2, array);
          this.initData(array[3].id, 3, array);
          this.initData(array[4].id, 4, array);
          this.initData(array[6].id, 5, array);
          this.initData(array[5].id, 6, array);
        }
      });
    },

    initData(id, type, array) {
      let params = {
        unitId: id
      };

      if (this.startTime != "" && this.endTime != "") {
        params['date1'] = this.startTime;
        params['date2'] = this.endTime;
      }

      if (this.fliterType == 1 && this.searchData.length > 0) {
        params['deptId'] = this.searchData;
      } else if (this.fliterType == 2 && this.searchData.length > 0) {
        params['collegeId'] = this.searchData;
      }

      this.$axios.get(url["a" /* common */].static_appinfo_form_info, {
        params: params
      }).then(res => {
        if (res.data.data) {
          switch (type) {
            case 1:
              {
                let obj = JSON.parse(array[1].relaFromField1);
                let filed = array[1].unitName;
                this.cardLabel1 = filed.length > 15 ? filed.substr(0, 14) + "..." : filed;
                this.cardValue1 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }

            case 2:
              {
                let obj = JSON.parse(array[2].relaFromField1);
                let filed = array[2].unitName;
                this.cardLabel2 = filed.length > 15 ? filed.substr(0, 14) + "..." : filed;
                this.cardValue2 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }

            case 3:
              {
                let obj = JSON.parse(array[3].relaFromField1);
                let filed = array[3].unitName;
                this.cardLabel3 = filed.length > 15 ? filed.substr(0, 14) + "..." : filed;
                this.cardValue3 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }

            case 4:
              {
                let obj = JSON.parse(array[4].relaFromField1);
                let filed = array[4].unitName;
                this.cardLabel4 = filed.length > 15 ? filed.substr(0, 14) + "..." : filed;
                this.cardValue4 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }

            case 5:
              {
                let obj = JSON.parse(array[6].relaFromField1);
                let filed = obj[0].n;
                let rate = res.data.data.rate != null ? parseInt(res.data.data.rate) : 0;
                this.circleParams = array[6].unitName;
                this.circleLabel = filed.length > 6 ? filed.substr(0, 5) + "..." : filed;
                this.circleValue = rate;
                this.circleValueText = res.data.data.rate != null ? res.data.data.rate + "%" : "--";
                break;
              }

            case 6:
              {
                let data = res.data.data;
                let legned = array[5].relaFromField2 ? JSON.parse(array[5].relaFromField2) : [];
                let filterType = array[5].filterType;
                let legnedArray = [];
                let key = [];
                let dataF = [];
                let dataValue = [];

                for (let i = 0; i < legned.length; i++) {
                  legnedArray.push(legned[i].n);
                  dataF.push({
                    n: legned[i].n,
                    f: legned[i].f
                  });
                }

                for (let i = 0; i < data.length; i++) {
                  key.push(data[i]._name);
                  let yData = [];
                  let yDataObj = [];
                  let dataObj = {};

                  for (let item in data[i]) {
                    for (let z = 0; z < dataF.length; z++) {
                      if (dataF[z].f + "DateResult" == item) {
                        let value = data[i][item];
                        let name = dataF[z].n;
                        yData.push(value);
                        dataObj = {
                          name: name,
                          type: 'bar',
                          barWidth: 15,
                          data: []
                        };
                        yDataObj.push(dataObj);
                      }
                    }
                  }

                  dataObj['data'] = yData;

                  for (let k = 0; k < yDataObj.length; k++) {
                    yDataObj[k]['data'] = yData;
                  }

                  dataValue = yDataObj;
                }

                this.barParams = array[5].unitName;
                this.barData = dataValue;
                this.barDataKey = key;
                this.barDataLegned = legnedArray;
                break;
              }

            default:
              break;
          }
        }
      });
    },

    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },

    formatDate2(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },

    selTime() {
      this.showCalendar = true;
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
        path: this.$route.query.page ? this.$route.query.page : '/app/appIndex',
        query: {
          activeType: 6,
          userType: this.loginUserAppType,
          navH: this.navHeight,
          appType: this.globalAppShow,
          sessionId: this.$route.query.sessionId
        }
      });
    },

    dropdownItem(event) {
      this.formValue = event;
      this.initFormDetail(event);
    },

    onConfirm(date) {
      const [start, end] = date;
      this.dateTime = `${this.formatDate2(start)} - ${this.formatDate2(end)}`;
      this.startTime = `${this.formatDate(start)}`;
      this.endTime = `${this.formatDate(end)}`;
      this.initFormDetail(this.formValue);
      this.showCalendar = false;
    },

    selSearch() {
      this.showBottom = true;
    },

    searchTop(event) {
      this.searchDept = [];
      this.searchCollege = [];
      this.searchData = event.length > 0 ? JSON.stringify(event) : "";

      if (this.fliterType == 1) {
        this.searchDept = event;
      } else if (this.fliterType == 2) {
        this.searchCollege = event;
      }

      this.initFormDetail(this.formValue);
    },

    clearTime() {
      this.dateTime = "";
      this.startTime = "";
      this.endTime = "";
      this.searchData = [];
      this.searchCollege = [];
      this.searchCollege = [];
      this.resetCasadeSelector('SelectorCollege');
      this.resetCasadeSelector('SelectorDept');
      this.initFormDetail(this.formValue);
    }

  }
});
// CONCATENATED MODULE: ./pages/app/appStatic.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_appStaticvue_type_script_lang_js_ = (appStaticvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/app/appStatic.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(211)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_appStaticvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "52bcee9c",
  "5b84ea72"
  
)

/* harmony default export */ var appStatic = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HBarChart: __webpack_require__(170).default})


/***/ })

};;
//# sourceMappingURL=appStatic.js.map