<template>
  <span>
    <label v-if="status == 0" class="color-warning">{{$t("未签到")}}</label>
    <label v-else-if="status == 1" class="color-success">{{$t("已签到")}}</label>
    <label v-else-if="status == 2" class="color-warning">{{$t("请假")}}</label>
    <label v-else-if="status == 4" class="color-danger">{{$t("早退")}}</label>
    <label v-else-if="status == 3" class="color-danger">{{$t("迟到")}}</label>
    <label v-else>--</label>
  </span>
</template>

<script>
  export default {
    name: 'myClassAttendAtten',
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
