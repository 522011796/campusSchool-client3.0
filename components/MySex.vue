<template>
  <span v-bind="selectModel">
    <template v-if="tag == 'text'">
      <label v-if="sex == 1">{{$t('男')}}</label>
      <label v-if="sex == 2">{{$t('女')}}</label>
      <label v-if="sex == 3">{{$t('未知')}}</label>
    </template>
    <template v-if="tag == 'tag'">
      <el-tag v-if="sex == 1" :size="size" :type="type" :effect="effect">{{$t('男')}}</el-tag>
      <el-tag v-if="sex == 2" :size="size" :type="type" :effect="effect">{{$t('女')}}</el-tag>
      <el-tag v-if="sex == 3" :size="size" :type="type" :effect="effect">{{$t('未知')}}</el-tag>
    </template>
  </span>
</template>

<script>
  import {oneOf} from "../utils/utils";
  export default {
    name: 'mySex',
    props: {
      sex: {
        default: 0,
        type: [String, Number]
      },
      tag: {
        default: 'tag',
        validate: function (val) {
          return oneOf(val, ['tag', 'text']);
        }
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
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
          return oneOf(val, ['success', 'info', 'warning', 'danger']);
        }
      },
      effect: {
        defalult: 'light',
        validate: function (val) {
          return oneOf(val, ['dark', 'light', 'plain']);
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

    }
  }
</script>
