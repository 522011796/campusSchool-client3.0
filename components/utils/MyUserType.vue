<template>
  <span v-bind="selectModel">
    <template>
      <label v-if="type == 1">{{$t('超级管理')}}</label>
      <label v-if="type == 2">{{$t('学校管理')}}</label>
      <label v-if="type == 3">{{$t('运维管理')}}</label>
      <label v-if="type == 4">{{$t('教师')}}</label>
      <label v-if="type == 5">{{$t('学生')}}</label>
      <label v-if="type == 6">{{$t('游客')}}</label>
      <label v-if="type == 7">{{$t('商家')}}</label>
    </template>
  </span>
</template>

<script>
  export default {
    name: 'mySex',
    props: {
      type: {
        default: 0,
        type: [String, Number]
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
