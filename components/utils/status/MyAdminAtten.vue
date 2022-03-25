<template>
  <span>
    <label v-if="status == 0">{{$t("未打卡")}}</label>
    <label v-else-if="status == 1">{{$t("正常")}}</label>
    <label v-else-if="status == 2">{{$t("迟到")}}</label>
    <label v-else-if="status == 3">{{$t("早退")}}</label>
    <label v-else-if="status == 4">{{$t("旷工")}}</label>
    <label v-else-if="status == 9">{{$t("事件")}}</label>
    <label v-else-if="status == 100">{{$t("不在考勤区域")}}</label>
    <label v-else-if="status == 101">{{$t("请假")}}</label>
    <label v-else-if="status == 102">{{$t("出差")}}</label>
    <label v-else>--</label>
  </span>
</template>

<script>
  export default {
    name: 'myAdminAtten',
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
