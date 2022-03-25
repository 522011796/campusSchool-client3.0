<template>
  <span>
    <el-radio v-if="!group" v-model="value" :label="label" :disabled="disabled" :border="border" :size="size" v-bind="selectModel" @change="handleChange">
      <slot></slot>
    </el-radio>

    <el-radio-group v-if="group" v-model="value" :disabled="disabled" :size="size" v-bind="selectModel" :text-color="textColor" :fill="fill" @change="handleChange">
      <el-radio v-if="!button" v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" :border="border">{{item.label}}</el-radio>
      <el-radio-button v-if="button" v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" :border="border">{{item.label}}</el-radio-button>
    </el-radio-group>
  </span>
</template>

<script>
  import {oneOf} from "../utils/utils";
  export default {
    name: 'myRadio',
    props: {
      selValue: {
        default: '',
        type: [Boolean, String]
      },
      label: {
        default: '',
        type: [Boolean, String]
      },
      group: {
        default: false,
        type: Boolean
      },
      disabled: {
        default: false,
        type: Boolean
      },
      border: {
        default: false,
        type: Boolean
      },
      button: {
        default: false,
        type: Boolean
      },
      textColor: {
        default: '',
        type: String
      },
      fill: {
        default: '',
        type: String
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
