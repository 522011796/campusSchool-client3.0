<template>
  <span>
    <label v-if="status == 0">{{$t("旷课")}}</label>
    <label v-if="status == 1">{{$t("正常")}}</label>
    <label v-if="status == 2">{{$t("请假")}}</label>
    <label v-if="status == 3">{{$t("迟到")}}</label>
    <label v-if="status == 4">{{$t("早退")}}</label>
  </span>
</template>

<script>
  export default {
    name: 'myClassAtten',
    props: {
      status: {
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
