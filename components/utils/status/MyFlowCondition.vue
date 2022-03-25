<template>
  <div>
    <span v-for="(item, index) in condition" :key="index">
      <span v-if="item.type == 'leaveType'">
        <span v-if="conditionTypeCode == 'TeacherAmendSignApply'">
          <label class="color-warning">{{item.value1}}</label>
        </span>
        <span v-if="conditionTypeCode != 'TeacherAmendSignApply'">
          <label class="color-warning">{{item.value1}}</label>
        </span>
      </span>

      <span v-if="item.type == 'leaveDay'">
        <span v-if="conditionTypeCode == 'TeacherDoorOpenApply' || conditionTypeCode == 'DoorOpenApply'">
          <label v-if="item.value2 == 0">{{$t("当日授权")}}</label>
        </span>
        <span v-if="conditionTypeCode == 'LeaveApply' || conditionTypeCode == 'TeacherLeaveApply'">
          <label v-if="item.value2 == 0">{{$t("当日假")}}</label>
        </span>

        <span v-if="item.value2 != 0">
          <span>
            <label v-if="item.value1">{{item.value1}}{{$t("天")}}</label>
            <label v-else>--</label>
          </span>
          -
          <span>
            <label v-if="item.value2">{{item.value2}}{{$t("天")}}</label>
            <label v-else>--</label>
          </span>
        </span>
      </span>

      <span v-if="item.type == 'proLevel'">
        <span v-if="item.value1">
          <label>{{item.value1}}</label>
        </span>
        <span v-else>--</span>
      </span>

      <span v-if="item.type == 'scoreType'">
        <span v-if="item.value1">
          <label>{{item.value1}}</label>
        </span>
        <span v-else>--</span>
      </span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'myFlowCenter',
    props: {
      condition: {
        default: function () {
          return [];
        },
        type: Array
      },
      conditionTypeCode: {
        default: '',
        type: [String, Number]
      },
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
