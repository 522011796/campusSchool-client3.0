<template>
  <span>
    <el-date-picker
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      :size="size"
      :style="width"
      :disabled="disabled"
      :readonly="readonly"
      :range-separator="rangeSeparator"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :unlink-panels="unlinkPanels"
      :format="format"
      :value-format="valueFormat"
      :picker-options="pickerOptions"
      v-bind="selectModel"
      :setWidth="setWidth"
      :clearable="clearable"
      @change="handleChange">
    </el-date-picker>
  </span>
</template>

<script>
  import {oneOf} from "../utils/utils";
  export default {
    name: 'myDatePicker',
    props: {
      selValue: {
        default: '',
        type: [Array, String]
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      type: {
        defalult: 'date',
        validate: function (val) {
          return oneOf(val, ['year','month','date','dates','week','datetime','datetimerange','daterange','monthrange']);
        }
      },
      placeholder: {
        default: '选择日期',
        type: String
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      widthStyle: {
        default: '',
        type: [String, Number]
      },
      disabled: {
        default: false,
        type: Boolean
      },
      readonly: {
        default: false,
        type: Boolean
      },
      rangeSeparator: {
        default: '至',
        type: String
      },
      startPlaceholder: {
        default: '开始时间',
        type: String
      },
      endPlaceholder: {
        default: '结束时间',
        type: String
      },
      format: {
        default: 'yyyy-MM-dd',
        type: String
      },
      valueFormat: {
        default: 'yyyy-MM-dd',
        type: String
      },
      unlinkPanels: {
        default: true,
        type: Boolean
      },
      clearable: {
        default: false,
        type: Boolean
      },
      editable: {
        default: false,
        type: Boolean
      },
      pickerOptions: {
        default: function(){
          return {};
        },
        type: Object,
      }
    },
    computed: {
      selectModel(){
        this.value = this.selValue;
      },
      setWidth(){
        if (!!this.widthStyle){
          this.width = {
            'width': this.widthStyle + "px"
          };
        }
      }
    },
    mounted() {

    },
    data() {
      return {
        value: '',
        width: ''
      }
    },
    methods: {
      handleChange(data) {
        this.$emit('change', data);
      }
    }
  }
</script>
