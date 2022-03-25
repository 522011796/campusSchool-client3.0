<template>
  <div>
    <span v-for="(item, index) in process" :key="index" v-if="index < 2">
      <span v-if="item.htype == 'NullUser'"><i class="fa fa-arrow-right margin-right-5"></i>{{$t("不需要审批")}}</span>
      <span v-if="item.htype == 'AnyUser'">
        <i class="fa fa-arrow-right margin-right-5"></i>
        <el-tooltip placement="top">
          <span slot="content">
            {{splitName(item.hname)}}
          </span>
          <label class="color-grand">
            {{$t("固定教师")}}
          </label>
        </el-tooltip>
      </span>
      <span v-if="item.htype == 'MasterTeacher'"><i class="fa fa-arrow-right margin-right-5"></i>{{$t("班主任")}}</span>
      <span v-if="item.htype == 'CoachTeacher'"><i class="fa fa-arrow-right margin-right-5"></i>{{$t("辅导员")}}</span>
      <span v-if="item.htype == 'DirectorTeacher'"><i class="fa fa-arrow-right margin-right-5"></i>{{$t("系主任")}}</span>
      <span v-if="item.htype == 'DormitorTeacher'"><i class="fa fa-arrow-right margin-right-5"></i>{{$t("宿管员")}}</span>
      <span v-if="item.htype == 'DeputyDirectorTeacher'"><i class="fa fa-arrow-right margin-right-5"></i>{{$t("系副主任")}}</span>
      <span v-if="item.htype == 'StudentManageTeacher'"><i class="fa fa-arrow-right margin-right-5"></i>{{$t("学管主任")}}</span>
      <span v-if="item.htype == 'SecretaryTeacher'"><i class="fa fa-arrow-right margin-right-5"></i>{{$t("系部主任")}}</span>
    </span>
    <span v-if="process.length > 3">
      <el-popover
        placement="right"
        trigger="hover">
        <div>
          <span v-for="(item, index) in process" :key="index">
            <div v-if="item.htype == 'NullUser'" class="margin-top-5">
              <el-tag><i class="fa fa-arrow-right margin-right-5"></i>{{$t("不需要审批")}}</el-tag>
            </div>
            <div v-if="item.htype == 'AnyUser'" class="margin-top-5">
              <el-tooltip placement="top">
                <span slot="content">
                  {{splitName(item.hname)}}
                </span>
                <label class="color-grand">
                  <el-tag><i class="fa fa-arrow-right margin-right-5"></i>{{$t("固定教师")}}</el-tag>
                </label>
              </el-tooltip>
            </div>
            <div v-if="item.htype == 'MasterTeacher'" class="margin-top-5">
              <el-tag><i class="fa fa-arrow-right margin-right-5"></i>{{$t("班主任")}}</el-tag>
            </div>
            <div v-if="item.htype == 'CoachTeacher'" class="margin-top-5">
              <el-tag><i class="fa fa-arrow-right margin-right-5"></i>{{$t("辅导员")}}</el-tag>
            </div>
            <div v-if="item.htype == 'DirectorTeacher'" class="margin-top-5">
              <el-tag><i class="fa fa-arrow-right margin-right-5"></i>{{$t("系主任")}}</el-tag>
            </div>
            <div v-if="item.htype == 'DormitorTeacher'" class="margin-top-5">
              <el-tag><i class="fa fa-arrow-right margin-right-5"></i>{{$t("宿管员")}}</el-tag>
            </div>
            <div v-if="item.htype == 'DeputyDirectorTeacher'" class="margin-top-5">
              <el-tag><i class="fa fa-arrow-right margin-right-5"></i>{{$t("系副主任")}}</el-tag>
            </div>
            <div v-if="item.htype == 'StudentManageTeacher'" class="margin-top-5">
              <el-tag><i class="fa fa-arrow-right margin-right-5"></i>{{$t("学管主任")}}</el-tag>
            </div>
            <div v-if="item.htype == 'SecretaryTeacher'" class="margin-top-5">
              <el-tag><i class="fa fa-arrow-right margin-right-5"></i>{{$t("系部主任")}}</el-tag>
            </div>
          </span>
        </div>
        <i slot="reference" class="fa fa-ellipsis-v color-warning"></i>
      </el-popover>

    </span>
  </div>
</template>

<script>
  export default {
    name: 'myFlowCenter',
    props: {
      process: {
        default: function () {
          return [];
        },
        type: Array
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
      splitName(value) {
        let arr = value.split(",");
        let html = "";
        for (let i = 0; i < arr.length; i++){
          let arrObj = arr[i].split("@*@");
          html += arrObj[1];
          if (i != arr.length - 1){
            html += ",";
          }
        }
        return html;
      }
    }
  }
</script>
