<template>
  <span>
    <el-checkbox v-if="!group" v-model="value" :true-label="trueLabel" :false-label="falseLabel" :indeterminate="indeterminate" v-bind="selectModel" :disabled="disabled" :border="border" :size="size" @change="handleChange">
      <slot></slot>
    </el-checkbox>

    <el-checkbox-group v-if="group" v-model="value" v-bind="selectModel" :size="size" :text-color="textColor" :fill="fill" :min="min" :max="max" @change="handleChange">
      <el-checkbox v-if="!button" v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" :border="border" :size="size">{{item.label}}</el-checkbox>
      <el-checkbox-button v-if="button" v-for="item in options" :key="item.value" :label="item.value" :disabled="item.disabled" :border="border">
        <slot>{{item.label}}</slot>
      </el-checkbox-button>
    </el-checkbox-group>
  </span>
</template>

<script>
  import {oneOf} from "../utils/utils";
  export default {
    name: 'myCheck',
    props: {
      selValue: {
        default: false,
        type: [Boolean, Array, Number, String]
      },
      trueLabel: {
        type: [String, Number]
      },
      falseLabel: {
        type: [String, Number]
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      indeterminate: {
        default: false,
        type: Boolean
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
      },
      textColor: {
        default: '',
        type: String
      },
      fill: {
        default: '',
        type: String
      }
    },
    computed: {
      selectModel(){
        this.value = this.selValue;
      }
    },
    data() {
      return {
        value: '',
        valueGroup: []
      }
    },
    methods: {
      handleChange(data) {
        this.$emit('change', data);
      }
    }
  }
</script>
