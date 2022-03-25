<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-button-group>
          <el-button v-if="showDay" :size="size" :type="searchDateType == 1 ? 'primary' : 'default'" @click="handeleSearchDateType(1)">{{$t("日")}}</el-button>
          <el-button v-if="showWeek" :size="size" :type="searchDateType == 2 ? 'primary' : 'default'" @click="handeleSearchDateType(2)">{{$t("周")}}</el-button>
          <el-button :size="size" :type="searchDateType == 3 ? 'primary' : 'default'" @click="handeleSearchDateType(3)">{{$t("月")}}</el-button>
          <el-button v-if="showYear" :size="size" :type="searchDateType == 4 ? 'primary' : 'default'" @click="handeleSearchDateType(4)">{{$t("年")}}</el-button>
          <el-button v-if="showTerm" :size="size" :type="searchDateType == 5 ? 'primary' : 'default'" @click="handeleSearchDateType(5)">{{$t("学期")}}</el-button>
        </el-button-group>
        <slot name="opr"></slot>
      </el-col>

      <el-col :span="16">
        <div class="text-right layout-inline">
          <span>
            <my-date-picker class="layout-item" v-if="searchDateType == 1" :size="size" :sel-value="searchCurrentDatteTime" @change="handleSearchChangeTime($event)"></my-date-picker>

            <my-select class="layout-item" v-if="searchDateType == 2" :size="size" :sel-value="searchCurrentWeekNum" :options="weekList" @change="handleSearchChangeDateTime($event, 1)"></my-select>

            <my-select class="layout-item" v-if="searchDateType == 3" :size="size" :sel-value="searchCurrentMonthData" :options="monthList" @change="handleSearchChangeDateTime($event,2)"></my-select>

            <my-select class="layout-item" v-if="searchDateType == 4" :size="size" :sel-value="searchCurrentYearData" :options="yearList" @change="handleSearchChangeDateTime($event,3)"></my-select>
          </span>
          <slot name="other"></slot>
          <span class="layout-item" v-if="searchDateType != 5 || showSearchBtn == true">
            <el-button :size="size" type="success" plain @click="handleClick">{{$t("搜索")}}</el-button>
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {oneOf} from "../../utils/utils";
  import mixins from "../../utils/mixins";
  import MySelect from "../MySelect";
  import MyDatePicker from "../MyDatePicker";
  export default {
    name: 'mySearchOfDate',
    mixins: [mixins],
    components: {MySelect,MyDatePicker},
    props: {
      selDateTime: '',
      showDay: {
        default: true,
        type: Boolean
      },
      showYear: {
        default: true,
        type: Boolean
      },
      showWeek: {
        default: true,
        type: Boolean
      },
      showTerm: {
        default: true,
        type: Boolean
      },
      placeholder: {
        default: '请输入内容',
        type: String
      },
      widthClass: {
        default: 'width: 150px',
        type: String
      },
      selectWidthClass: {
        default: 'width: 100px',
        type: String
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      type: {
        defalult: '',
        validate: function (val) {
          return oneOf(val, ['success', 'info', 'warning', 'danger', 'primary']);
        }
      },
      plain: {
        default: false,
        type: Boolean
      },
      iconStyle: {
        default: '',
        type: String
      },
      showSelect: {
        default: false,
        type: Boolean
      },
      clearable: {
        default: false,
        type: Boolean
      },
      options: {
        default: function () {
          return [];
        },
        type: Array
      },
      showSearchBtn: {
        default: true,
        type: Boolean
      }
    },
    computed: {

    },
    mounted() {
      this.showIcon = this.iconStyle !== '';
    },
    data() {
      return {
        searchDateType: this.showDay == true ? '1' : '2',
        inputValue: '',
        selectValue: '',
        showIcon: false,
        weekList: [],
        searchCurrentWeekNum: '',
        searchCurrentMonthData: '',
        searchCurrentYearData: '',
        searchCurrentDatteTime: this.selDateTime ? this.selDateTime : this.$moment(new Date()).format("YYYY-MM-DD"),
        searchCurrentDateTermId: '',
        monthList: [],
        yearList: [],
        nowDataObj: {},
        showSearch: true
      }
    },
    created() {
      this.initSearchTopDateInfo();
    },
    methods: {
      async initSearchTopDateInfo(){
        await this.getCurrentGDateInfo();
        this.nowDataObj = this.g_currentDate;
        this.searchCurrentWeekNum = ""+this.g_currentDate.currentWeekNum;
        this.initMonth();
        this.initYear();
        this.initWeek();
      },
      initWeek(){
        let arr = [];
        if (this.nowDataObj && this.nowDataObj.weekNumsOfTerm){
          for (let i = 0; i < this.nowDataObj.weekNumsOfTerm.length; i++){
            arr.push({
              label: this.$t("第")+this.nowDataObj.weekNumsOfTerm[i]+this.$t("周"),
              value: this.nowDataObj.weekNumsOfTerm[i]
            });
          }
          this.searchCurrentWeekNum = this.nowDataObj.currentWeekNum;
        }
        this.weekList = arr;
      },
      initMonth(){
        let arr = [];
        if (this.nowDataObj && this.nowDataObj.monthsOfTerm){
          for (let i = 0; i < this.nowDataObj.monthsOfTerm.length; i++){
            arr.push({
              label: this.nowDataObj.monthsOfTerm[i].yearMonth,
              value: this.nowDataObj.monthsOfTerm[i].yearMonth
            });
          }
          this.searchCurrentMonthData = this.nowDataObj.monthsOfTerm[this.nowDataObj.monthsOfTerm.length - 1].yearMonth;
        }
        this.monthList = arr;
      },
      initYear(){
        let arr = [];
        if (this.nowDataObj && this.nowDataObj.yearList){
          for (let i = 0; i < this.nowDataObj.yearList.length; i++){
            arr.push({
              label: this.nowDataObj.yearList[i],
              value: this.nowDataObj.yearList[i]
            });
          }
          this.searchCurrentYearData = this.nowDataObj.yearList[this.nowDataObj.yearList.length - 1];
        }
        this.yearList = arr;
      },
      handleClick(data) {
        let obj = {};
        let returnStr= "";
        if (this.searchDateType == 1) {
          //returnStr = this.searchCurrentWeekNum;
          obj = {
            timeUnit: this.searchDateType,
            value: this.searchCurrentDatteTime
          };
        }else if (this.searchDateType == 2) {
          //returnStr = this.this.searchCurrentMonthData;
          obj = {
            timeUnit: this.searchDateType,
            value: this.searchCurrentWeekNum
          };
        }else if(this.searchDateType == 3){
          //returnStr = this.this.searchCurrentYearData;
          obj = {
            timeUnit: this.searchDateType,
            value: this.searchCurrentMonthData
          };
        }else if(this.searchDateType == 4){
          //returnStr = this.this.searchCurrentYearData;
          obj = {
            timeUnit: this.searchDateType,
            value: this.searchCurrentYearData
          };
        }else if(this.searchDateType == 5){
          //returnStr = this.nowDataObj.termId;
          obj = {
            timeUnit: this.searchDateType,
            value: ''
          };
        }
        obj['termId'] = this.nowDataObj.termId;
        this.$emit('click', obj);
      },
      selectChange(data) {
        this.selectValue = data;
      },
      handeleSearchDateType(type){
        this.searchDateType = type;
        this.handleClick();
        this.$emit('type-click', type);
      },
      handleSearchChangeTime(data){
        this.searchCurrentDatteTime = data;
      },
      handleSearchChangeDateTime(data, type){
        switch (type) {
          case 1:
            this.searchCurrentWeekNum = data;
            break;
          case 2:
            this.searchCurrentMonthData = data;
            break;
          case 3:
            this.searchCurrentYearData = data;
            break;
        }
      }
    }
  }
</script>
