<template>
  <div>
    <el-select v-model="value" v-bind="selectModel" :size="size" :placeholder="$t('请选择')" @change="handleChange">
      <el-option value="1" :label="$t('女')"></el-option>
      <el-option value="0" :label="$t('男')"></el-option>
      <el-option value="2" :label="$t('未知')"></el-option>
    </el-select>
  </div>
</template>

<script>
  import {oneOf} from "../../utils/utils";
  export default {
    name: 'mySexSelect',
    props: {
      selValue: {
        default: '',
        type: String
      },
      label: {
        default: '',
        type: String
      },
      disabled: {
        default: false,
        type: Boolean
      },
      options: {
        default: function () {
          return [];
        },
        type: Array
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      }
    },
    computed: {
      selectModel(){
        this.value = this.selValue;
      }
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {
      handleChange(data) {
        this.$emit('change', data);
      }
    }
  }
</script>
