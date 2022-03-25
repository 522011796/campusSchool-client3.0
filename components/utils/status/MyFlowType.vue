<template>
  <span>
    <template>
      <span v-if="status == 'PunishmentApply'">{{$t("奖惩流程")}}</span>
      <span v-if="status == 'ScoreApply'">{{$t("素质学分流程")}}</span>
      <span v-if="status == 'LeaveApply'">{{$t("学生请假流程")}}</span>
      <span v-if="status == 'TeacherLeaveApply'">{{$t("教师请假流程")}}</span>
      <span v-if="status == 'TeacherBusiTripApply'">{{$t("出差申请流程")}}</span>
      <span v-if="status == 'TeacherAmendSignApply'">{{$t("补卡申请流程")}}</span>
      <span v-if="status == 'DoorOpenApply'">{{$t("学生门禁申请")}}</span>
      <span v-if="status == 'TeacherDoorOpenApply'">{{$t("教师门禁申请")}}</span>
    </template>
  </span>
</template>

<script>
  export default {
    name: 'myFlowCenter',
    props: {
      status: {
        default: 0,
        type: [String, Number]
      },
      handler: {
        default: '',
        type: String, Number
      }
    },
    computed: {
      selectModel(){

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
