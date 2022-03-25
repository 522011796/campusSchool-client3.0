<template>
  <span>
    <el-select ref="commSelYear" v-model="selectYearValue" :style="widthYearClass" :placeholder="$t('请选择学年')" :size="size" @change="selectYearChange">
      <el-option
        v-for="item in currentYearList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-select ref="commSelTerm" v-model="selectTermValue" :style="widthTermClass" :placeholder="$t('请选择学期')" :size="size" @change="selectTermChange">
      <el-option
        v-for="item in currentTermList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-select ref="commSelWeek" v-if="showWeek" v-model="selectWeekValue" :clearable="clearableWeek" :style="widthWeekClass" :placeholder="$t('请选择学周')" :size="size" @change="selectWeekChange">
      <el-option
        v-for="item in currentWeekList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </span>
</template>

<script>
  import {oneOf} from "../../utils/utils";
  import mixins from "../../utils/mixins";
  export default {
    name: 'myYearTerm',
    mixins: [mixins],
    props: {
      widthYearClass: {
        default: 'width: 150px',
        type: String
      },
      widthTermClass: {
        default: 'width: 150px',
        type: String
      },
      widthWeekClass: {
        default: 'width: 150px',
        type: String
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      clearableWeek: {
        default: false,
        type: Boolean
      },
      showDefaultWeek: {
        default: false,
        type: Boolean
      },
      showWeek: {
        default: true,
        type: Boolean
      }
    },
    computed: {

    },
    mounted() {

    },
    data() {
      return {
        selectYearValue: '',
        selectTermValue: '',
        selectWeekValue: '',
        selectCurrentSetData: {}
      }
    },
    created() {
      this.initCurrentInfo();
    },
    methods: {
      async initCurrentInfo(){
        await this.initCurrentYearList();
        await this.initCurrentTermList(this.currentYearData);
        await this.initCurrentWeekList(this.currentYearData, this.currentTermData);
        this.selectYearValue = this.currentYearData;
        this.selectTermValue = this.currentTermData;

        if (this.showDefaultWeek == true){
          this.selectWeekValue = this.currentWeekData;
        }
      },
      async selectYearChange(data) {
        this.selectYearValue = data;
        this.selectTermValue = "";
        await this.initCurrentTermList(data);
        await this.selectTermChange(this.currentTermData);
        this.selectTermValue = this.currentTermData;
        this.selectCurrentSetData['year'] = data;
        this.selectCurrentSetData['term'] = this.currentTermData;

        this.$emit("changeYear", this.selectCurrentSetData);
      },
      async selectTermChange(data) {
        this.selectTermValue = data;
        this.selectWeekValue = "";
        await this.initCurrentWeekList(this.selectYearValue, data);
        await this.selectWeekChange(this.currentWeekData);
        this.selectWeekValue = this.currentWeekData;

        this.selectCurrentSetData['term'] = data;
        this.selectCurrentSetData['week'] = this.currentWeekData;
        this.selectCurrentSetData['setWeek'] = this.currentSetWeekNum;
        this.$emit("changeTerm", this.selectCurrentSetData);
      },
      async selectWeekChange(data) {
        this.selectWeekValue = data;
        this.selectCurrentSetData['year'] = this.selectYearValue;
        this.selectCurrentSetData['term'] = this.selectTermValue;
        this.selectCurrentSetData['week'] = data;
        this.$emit("changeWeek", this.selectCurrentSetData);
      }
    }
  }
</script>
