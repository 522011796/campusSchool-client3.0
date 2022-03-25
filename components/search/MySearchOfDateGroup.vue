<template>
  <div>
    <el-row>
      <el-col :span="8">
        <!--<el-button-group>
          <el-button v-if="showDay" :size="size" :type="searchDateType == 1 ? 'primary' : 'default'" @click="handeleSearchDateType(1)">{{$t("日")}}</el-button>
          <el-button v-if="showWeek" :size="size" :type="searchDateType == 2 ? 'primary' : 'default'" @click="handeleSearchDateType(2)">{{$t("周")}}</el-button>
          <el-button :size="size" :type="searchDateType == 3 ? 'primary' : 'default'" @click="handeleSearchDateType(3)">{{$t("月")}}</el-button>
          <el-button v-if="showYear" :size="size" :type="searchDateType == 4 ? 'primary' : 'default'" @click="handeleSearchDateType(4)">{{$t("年")}}</el-button>
          <el-button v-if="showTerm" :size="size" :type="searchDateType == 5 ? 'primary' : 'default'" @click="handeleSearchDateType(5)">{{$t("学期")}}</el-button>
        </el-button-group>-->
        <div class="btn-date-group-block select-none" :class="setClass" :style="setBgColor">
          <div class="btn-date-group-item-active" :style="[transformBtnGroup,setActiveColor]"></div>
          <div class="btn-date-group-item">
            <div class="btn-date-group-item-default pull-left" v-for="(item, index) in options" :class="isActive == index ? 'is-date-active' : ''" :key="index" @click="handeleSearchDateType($event , item, index)">{{item.label}}</div>
            <div class="moon-clearfix"></div>
          </div>
        </div>

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
    name: 'mySearchOfDateGroup',
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
      showSearchBtn: {
        default: true,
        type: Boolean
      },
      bgColor: {
        default: '#409EFF',
        type: String
      },
      activeColor: {
        default: '#FFFFFF',
        type: String
      }
    },
    computed: {
      setClass(){
        return [
          {
            ['tab-date-group-button-medium']: !this.size,
            [`tab-date-group-button-${this.size}`]: !!this.size,
          }
        ]
      },
      setBgColor(){
        this.bgGroupColor.background = this.bgColor;
        return this.bgGroupColor;
      },
      setActiveColor(){
        this.activeGroupColor.background = this.activeColor;
        return this.activeGroupColor;
      }
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
        showSearch: true,
        selVal: 1,
        widthAll: 0,
        isActive: '',
        transformBtnGroup: {
          transform: 'translateX(0px)',
          transition: '0.5s',
          width: '',
        },
        activeGroupColor:{
          background: "#FFFFFF"
        },
        bgGroupColor:{
          background: "#409EFF"
        },
        options: [
          {
            label: '日',
            value: '1'
          },
          {
            label: '周',
            value: '2'
          },
          {
            label: '月',
            value: '3'
          },
          {
            label: '年',
            value: '4'
          },
          {
            label: '学期',
            value: '5'
          }
        ]
      }
    },
    mounted() {
      let widthAll = 0;
      let translateX = widthAll + 10 + "px";
      let groupItem = document.querySelectorAll(".btn-date-group-item-default");
      this.transformBtnGroup.width = groupItem[0].clientWidth + "px";
      this.transformBtnGroup.transform = 'translateX(' + translateX + ')';
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
        this.initDateOptions();
      },
      initDateOptions(){
        let arr = [];
        for (let i = 0; i < this.options.length; i++){
          if (this.showDay == false && this.options[i].value == 1){
            this.options.splice(i, 1);
          }else if (this.showWeek == false && this.options[i].value == 2){
            this.options.splice(i, 1);
          }else if (this.showYear == false && this.options[i].value == 4){
            this.options.splice(i, 1);
          }else if (this.showTerm == false && this.options[i].value == 5){
            this.options.splice(i, 1);
          }
        }
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
      handeleSearchDateType(data , item, index){
        this.searchDateType = item.value;
        this.handleClick();
        this.handelChange(data, item, index);
        this.$emit('type-click', item.value);
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
      },
      handelChange(data, item, index) {
        let padding = 10;
        let widthAll = 0;
        this.selVal = item;
        let groupItem = document.querySelectorAll(".btn-date-group-item-default");
        for (let i = 0; i < groupItem.length; i++) {
          if (i < index) {
            widthAll += groupItem[i].clientWidth;
          }
          if (index == i) {
            this.transformBtnGroup.width = groupItem[i].clientWidth + "px";
            break;
          }
        }
        let translateX = widthAll + 10 + "px";
        this.transformBtnGroup.transform = 'translateX(' + translateX + ')';
        this.isActive = index;
      }
    }
  }
</script>

<style scoped>
  .btn-date-group-block{
    padding: 10px 5px;
    position:relative;
    border-radius: 5px;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    transition: transform .3s;
    z-index: 2;
    line-height: 15px;
  }
  .btn-date-group-item{
    position: relative;
  }
  .btn-date-group-item-default{
    padding: 0px 10px;
    border-radius: 5px;
    display: inline-block;
    cursor: default;
    color: #FFFFFF;
  }
  /*.btn-date-group-item-active{
    position: absolute;
    top: 5px;
    left: 0px;
    height: 30px;
    transform: translateX(0px);
    border-radius: 5px;
  }*/
  .is-date-active{
    color: #595959;
  }
  .tab-date-group-button-medium{
    padding: 10px 10px;
    font-size: 12px;
  }
  .tab-date-group-button-small{
    padding: 9px 10px;
    font-size: 12px;
  }
  .tab-date-group-button-mini{
    padding: 7px 10px;
    font-size: 12px;
  }
  .tab-date-group-button-large{
    padding: 14px 10px;
  }
  .tab-date-group-button-medium .btn-date-group-item-active{
    position: absolute;
    top: 5px;
    left: 0px;
    height: 24px;
    transform: translateX(0px);
    border-radius: 5px;
  }
  .tab-date-group-button-small .btn-date-group-item-active{
    position: absolute;
    top: 5px;
    left: 0px;
    height: 22px;
    transform: translateX(0px);
    border-radius: 5px;
  }
  .tab-date-group-button-mini .btn-date-group-item-active{
    position: absolute;
    top: 5px;
    left: 0px;
    height: 18px;
    transform: translateX(0px);
    border-radius: 5px;
  }
  .tab-date-group-button-large .btn-date-group-item-active{
    position: absolute;
    top: 8px;
    left: 0px;
    height: 28px;
    transform: translateX(0px);
    border-radius: 5px;
  }
</style>
