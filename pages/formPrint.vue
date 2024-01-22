<template>
  <div class="container" :style="divHeight13">
    <div class="text-center font-size-16 font-bold margin-top-30 color-black">
      <span v-if="$route.query.title && $route.query.title != ''">{{$route.query.title}}</span>
      <span v-else>{{$t("打印表单")}}</span>
    </div>
    <div class="margin-top-20">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("基本信息")}}</span>
      </div>
      <table class="custom-table-black">
        <tr>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("姓名")}}</td>
          <td style="width: 20%" class="color-black font-size-12">{{detailData.applyUserName}}</td>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("性别")}}</td>
          <td style="width: 15%" class="color-black font-size-12">
            <my-sex tag="text" :sex="detailData.sex"></my-sex>
          </td>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("工号/学号")}}</td>
          <td style="width: 15%" class="color-black font-size-12">
            <span v-if="detailData.userType == 5">{{detailData.userNo}}</span>
            <span v-if="detailData.userType == 4">{{ detailData.userNo }}</span>
          </td>
        </tr>
        <tr>
          <td class="font-size-12 font-bold">{{$t("班级/部门")}}</td>
          <td class="color-black font-size-12">
            <span v-if="detailData.userType == 5">{{detailData.className}}</span>
            <span v-if="detailData.userType == 4">{{ detailData.departmentName }}</span>
          </td>
          <td class="font-size-12 font-bold">{{$t("申请日期")}}</td>
          <td class="color-black font-size-12">
            {{$moment(detailData.applyTime).format("YYYY-MM-DD HH:mm:ss")}}
          </td>
          <td class="font-size-12 font-bold">{{$t("审批状态")}}</td>
          <td class="color-black font-size-12">
            <label v-if="detailData.status === -1">{{$t("待提交")}}</label>
            <label v-if="detailData.status === 0">{{$t("待审核")}}</label>
            <label v-if="detailData.status === 3">{{$t("通过")}}</label>
            <label v-if="detailData.status === 4">{{$t("未通过")}}</label>
          </td>
        </tr>
        <tr>
          <td class="font-size-12 font-bold">{{$t("编号")}}</td>
          <td class="color-black font-size-12">{{detailData.formId}}</td>
          <td class="font-size-12 font-bold">{{$t("表单名称")}}</td>
          <td class="color-black font-size-12">{{detailData.formName}}</td>
          <td class="font-size-12 font-bold">{{$t("宿舍")}}</td>
          <td class="color-black font-size-12" colspan="3">
            <span v-if="detailData.buildName">
              {{detailData.buildName}}{{detailData.floorNum}}{{$t("层")}}-{{detailData.roomNo}}
            </span>
            <span v-else>
              --
            </span>
          </td>
        </tr>
      </table>
    </div>

    <div class="margin-top-10" v-if="detailData.checkFiledResult != null">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("系统核查(表单数据)")}}</span>
      </div>
      <table class="custom-table-black" v-if="detailData.checkFiledResult != null">
        <tr>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("核查类型")}}</td>
          <td style="width: 20%" class="color-black font-size-12">{{detailData.checkFiledResult.name}}</td>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("核查表名称")}}</td>
          <td style="width: 15%" class="color-black font-size-12">{{detailData.checkFiledResult.formName}}</td>
        </tr>
        <tr>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("核查条件")}}</td>
          <td style="width: 20%" class="color-black font-size-12">{{detailData.checkFiledResult.type}}</td>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("核查结果")}}</td>
          <td style="width: 15%" class="color-black font-size-12">{{detailData.checkFiledResult.result}}</td>
        </tr>
      </table>
    </div>

    <div class="margin-top-10" v-if="detailData.checkApplyResult != null">
      <div class="padding-tb-10 padding-lr-10" v-if="detailData.checkApplyResult != null">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("系统核查(审核状态)")}}</span>
      </div>
      <table class="custom-table-black" v-if="detailData.checkApplyResult != null">
        <tr>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("核查类型")}}</td>
          <td style="width: 20%" class="color-black font-size-12">{{detailData.checkApplyResult.name}}</td>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("核查表名称")}}</td>
          <td style="width: 15%" class="color-black font-size-12">{{detailData.checkApplyResult.formName}}</td>
        </tr>
        <tr>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("核查条件")}}</td>
          <td style="width: 20%" class="color-black font-size-12">{{detailData.checkApplyResult.type}}</td>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("核查结果")}}</td>
          <td style="width: 15%" class="color-black font-size-12">{{detailData.checkApplyResult.result}}</td>
        </tr>
      </table>
    </div>

    <div class="margin-top-10">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("表单内容")}}</span>
      </div>
      <table class="custom-table-black">
        <tr v-for="(item, index) in detailApplyContentData" :key="index" :style="{'height':item.title.indexOf('签字') > 1 ? '60px !important' : '', 'line-height':item.title.indexOf('签字') > 1 ? '60px !important' : ''}">
          <template  v-if="item.type != 'fc-editor' && item.type != 'upload'">
            <td style="width: 20%;text-align: right;padding-right: 15px">
              <span class="color-black">
                <label class="font-size-12 font-bold">{{item.title}}</label>
              </span>
            </td>
            <td style="text-align: left;padding-left: 15px">
              <el-tooltip class="item" effect="dark" :content="item.value" placement="top">
                <span class="">
                  <label class="font-size-12">{{ item.value }}</label>
                </span>
              </el-tooltip>
            </td>
          </template>
          <template v-else-if="item.type != 'fc-editor' && item.type == 'upload'">
            <td style="width: 20%;text-align: right;padding-right: 15px">
              <span v-if="!item.value || item.value.length <= 0" class="moon-content-text-ellipsis-class font-bold">
                {{item.title}}
              </span>
              <span v-else class="color-black font-bold" style="position: relative;">{{item.title}}: </span>
            </td>
            <td style="text-align: left;padding-left: 15px">
              <span v-if="!item.value || item.value.length <= 0">
                <div style="height: 20px;line-height: 20px"></div>
              </span>
              <span v-else class="custom-avatar" style="display: inline-block;margin-right: 5px;position: relative; top: 5px" v-for="(itemImg, indexImg) in item.value" :key="indexImg">
                <el-avatar shape="square" size="small" :src="itemImg" fit="fill"></el-avatar>
              </span>
            </td>
          </template>

          <template v-else>
            <td style="width: 20%;text-align: right;padding-right: 15px">
              <span class="color-black font-bold moon-content-text-ellipsis-class" style="position: relative;top: -50px;">{{item.title}}: </span>
            </td>
            <td style="text-align: left;padding-left: 15px">
              <div v-if="item.type == 'fc-editor'"  v-html="item.value" style="width: 95%;min-height: 150px;overflow-y:auto;display: inline-block;border: 1px solid #dddddd;border-radius: 5px;padding: 0px 10px">
              </div>
            </td>
          </template>
        </tr>
      </table>
    </div>
    <div class="margin-top-10">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("审核信息")}}</span>
      </div>
      <table class="custom-table-black">
        <tr v-for="(itemUser, indexUser) in detailApplyAuditList" :key="indexUser">
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("审核人")}}</td>
          <td style="width: 15%" class="color-black font-size-12">
            {{ itemUser.userName }}

            <span>
              <el-image
                style="width: 40px; height: 15px"
                :src="itemUser.signStr"
                :preview-src-list="[itemUser.signStr]">
              </el-image>
            </span>
          </td>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("审核状态")}}</td>
          <td style="width: 10%" class="color-black font-size-12">
            <label v-if="itemUser.status === -1">{{$t("待提交")}}</label>
            <label v-if="itemUser.status === 0">{{$t("待审核")}}</label>
            <label v-if="itemUser.status === 3">{{$t("通过")}}</label>
            <label v-if="itemUser.status === 4">{{$t("未通过")}}</label>
            <label v-if="itemUser.status === 1">{{$t("已通过")}}</label>
            <label v-if="itemUser.status === 2">{{$t("已驳回")}}</label>
            <label v-if="itemUser.status === 5">{{$t("无需审批")}}</label>
            <label v-if="itemUser.status === 8">{{$t("审批中")}}</label>
          </td>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("审核时间")}}</td>
          <td style="width: 10%" class="color-black font-size-12">
            <label v-if="itemUser.handleTime">
              {{$moment(itemUser.handleTime).format("YYYY-MM-DD HH:mm:ss")}}
            </label>
            <label v-else class="color-black">--</label>
          </td>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("意见")}}</td>
          <td style="width: 25%" class="font-size-12">
            <div v-if="itemUser.des" style="word-break:break-all;word-wrap:break-word;">
              {{itemUser.des}}
            </div>
            <span v-else>--</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="text-right padding-tb-10 color-black">
      <span>{{$t("打印时间")}}</span>
      <span class="margin-left-5">{{$route.query.time}}</span>
    </div>
    <div class="margin-top-20">

    </div>
  </div>
</template>

<script>
  import {common} from "../utils/api/url";
  import mixins from "~/utils/mixins";
  import {MessageError} from "~/utils/utils";

  export default {
    layout: 'defaultFullScreen',
    mixins: [mixins],
    components: {},
    data(){
      return {
        detailData: {},
        tableSignData: [],
        detailApplyAuditList: [],
        detailApplyAuditUserData: {},
        detailApplyContentData: [],
      }
    },
    mounted() {

    },
    created() {
      this.initAuditDetailList();
    },
    methods: {
      initAuditDetailList(){
        let params = {
          id: this.$route.query.serverId
        };
        this.$axios.get(common.server_form_audit_query, {params: params}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
              this.detailData = res.data.data;
              if (res.data.data.applyContent  && res.data.data.applyContent != "[]"){
                this.detailApplyContentData = JSON.parse(res.data.data.applyContent);
              }
              let detailApplyAuditList = [];
              let handleUserList = [];
              for (let i = 0; i < res.data.data.handleList.length; i++){
                if (res.data.data.handleList[i].nodeType == 'handle'){
                  for (let j = 0; j < res.data.data.handleList[i].handleUserList.length; j++){
                    if (res.data.data.handleList[i]['handleUserList']){
                      handleUserList.push(res.data.data.handleList[i].handleUserList[j]);
                    }
                  }
                }
              }
              this.detailApplyAuditList = handleUserList;
            }
          }
        });
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 0px 40px 40px 40px;
  }
</style>
