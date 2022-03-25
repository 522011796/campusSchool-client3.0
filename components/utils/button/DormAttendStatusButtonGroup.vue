<template>
  <span>
    <!--<el-button-group>
      <el-button :size="size" :type="searchStatusAuditType == null ? 'primary' : 'default'" @click="handleStausClick(null)">{{$t("全部")}}</el-button>
      <el-button :size="size" :type="searchStatusAuditType == 0 ? 'primary' : 'default'" @click="handleStausClick(0)">{{$t("待审批")}}</el-button>
      <el-button :size="size" :type="searchStatusAuditType == 3 ? 'primary' : 'default'" @click="handleStausClick(3)">{{$t("已通过")}}</el-button>
      <el-button :size="size" :type="searchStatusAuditType == 4 ? 'primary' : 'default'" @click="handleStausClick(4)">{{$t("已驳回")}}</el-button>
    </el-button-group>-->
    <tab-group-button size="small" :options="options" @click="handleStausClick"></tab-group-button>
  </span>
</template>

<script>
  import {oneOf} from '../../../utils/utils';
  import mixins from "../../../utils/mixins";
  import TabGroupButton from "./TabGroupButton";
  export default {
    name: 'auditStatusButton',
    mixins: [mixins],
    components: {TabGroupButton},
    props: {
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      }
    },
    computed: {

    },
    data() {
      return {
        searchStatusAuditType: null,
        options: [
          {
            label: '全部',
            value: '-1'
          },
          {
            label: '已归寝',
            value: '1'
          },
          {
            label: '晚归',
            value: '3'
          },
          {
            label: '未归',
            value: '0'
          },
          {
            label: '超长未归',
            value: '4'
          },
          {
            label: '请假',
            value: '2'
          }
        ]
      }
    },
    mounted() {

    },
    created() {
      //this.initConfig();
    },
    methods: {
      handleStausClick(data){
        this.searchStatusAuditType = data.value;
        this.$emit("click", data.value);
      }
    }
  }
</script>

<style scoped>

</style>
