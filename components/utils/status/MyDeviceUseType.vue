<template>
  <span>
    <label v-if="type == 0">{{$t("未定义类型")}}</label>
    <label v-if="type == 1">{{$t("归寝签到")}}</label>
    <label v-if="type == 2">{{$t("课堂签到")}}</label>
    <label v-if="type == 3">{{$t("门禁直连用")}}</label>
    <label v-if="type == 4">{{$t("门禁控制器用")}}</label>
  </span>
</template>

<script>
  export default {
    name: 'myClassAtten',
    props: {
      type: {
        default: '',
        type: [String, Number]
      }
    },
    computed: {

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
