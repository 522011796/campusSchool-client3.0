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
          <td class="font-size-12 font-bold">{{$t("部门")}}</td>
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
          <td class="color-black font-size-12">{{detailData.formApplyNo}}</td>
          <td class="font-size-12 font-bold">{{$t("表单名称")}}</td>
          <td class="color-black font-size-12">{{detailData.noticeName}}</td>
          <td class="font-size-12 font-bold">{{$t("标签")}}</td>
          <td class="color-black font-size-12" colspan="3">
            <span v-if="detailData.applyData && detailData.applyData['tag_id20230501']">
              {{detailData.applyData['tag_id20230501'] ? detailData.applyData['tag_id20230501'].name : '--'}}
            </span>
            <span v-else>
              --
            </span>
          </td>
        </tr>
      </table>
    </div>

    <div class="margin-top-10" v-if="detailData.applyData && detailData.applyData['cost_info20230501']  && detailData.applyData['cost_info20230501'].value.length > 0">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("表单明细")}}</span>
      </div>
      <div>
        <table class="custom-table-black">
          <tr v-for="(item, index) in detailData.applyData['cost_info20230501'].value" :key="index">
            <td style="width: 10%" class="font-size-12 font-bold">{{item.typeStr}}</td>
            <td style="width: 20%" class="color-black font-size-12">{{item.fp.length > 0 ? item.fp[0].totalAmount : '--'}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="margin-top-10" v-if="detailData.applyData && detailData.applyData['rela_apply20230501']  && detailData.applyData['rela_apply20230501']['value']">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("关联单据")}}</span>
      </div>
      <div>
        <table class="custom-table-black">
          <tr>
            <td style="width: 20%" class="font-size-12 font-bold">{{$t("单据名称")}}</td>
            <td style="width: 30%" class="color-black font-size-12">{{detailData.applyData['rela_apply20230501'].name}}</td>
            <td style="width: 20%" class="font-size-12 font-bold">{{$t("单据编号")}}</td>
            <td style="width: 30%" class="color-black font-size-12">{{detailData._id}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="margin-top-10">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("单据附件")}}</span>
      </div>
      <div>
        <table class="custom-table-black">
          <tr v-if="detailData.applyData && detailData.applyData['jk_files20230501'] && detailData.applyData['jk_files20230501'].value.length > 0">
            <td style="width: 10%" class="font-size-12 font-bold">{{$t("单据附件")}}</td>
            <td style="width: 20%" class="color-black font-size-12">
              <div v-for="(item, index) in detailData.applyData['jk_files20230501'].value" :key="index" class="pull-left" style="position: relative;top: 0px;margin-right: 10px;height: 25px">
                <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: 0px;"></i>
                <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: 0px;"></i>
                <img v-else :src="item" class="rp-img"/>
              </div>
            </td>
          </tr>
          <tr v-if="detailData.applyData && detailData.applyData['fk_files20230501'] && detailData.applyData['fk_files20230501'].value.length > 0">
            <td style="width: 10%" class="font-size-12 font-bold">{{$t("单据附件")}}</td>
            <td style="width: 20%" class="color-black font-size-12">
              <div v-for="(item, index) in detailData.applyData['fk_files20230501'].value" :key="index" class="pull-left" style="position: relative;top: 0px;margin-right: 10px;height: 25px">
                <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: 0px;"></i>
                <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: 0px;"></i>
                <img v-else :src="item" class="rp-img"/>
              </div>
            </td>
          </tr>
          <tr v-if="detailData.applyData && detailData.applyData['bb_files20230501'] && detailData.applyData['bb_files20230501'].value.length > 0">
            <td style="width: 10%" class="font-size-12 font-bold">{{$t("单据附件")}}</td>
            <td style="width: 20%" class="color-black font-size-12">
              <div v-for="(item, index) in detailData.applyData['bb_files20230501'].value" :key="index" class="pull-left" style="position: relative;top: 0px;margin-right: 10px;height: 25px">
                <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: 0px;"></i>
                <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: 0px;"></i>
                <img v-else :src="item" class="rp-img"/>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="margin-top-10" v-if="detailData.applyData && detailData.applyData['borrow_apply20230501']  && detailData.applyData['borrow_apply20230501']['value']">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("核销借款")}}</span>
      </div>
      <div>
        <table class="custom-table-black">
          <tr>
            <td style="width: 20%" class="font-size-12 font-bold">{{$t("单据名称")}}</td>
            <td style="width: 30%" class="color-black font-size-12">{{detailData.applyData['borrow_apply20230501'].name}}</td>
            <td style="width: 20%" class="font-size-12 font-bold">{{$t("单据编号")}}</td>
            <td style="width: 30%" class="color-black font-size-12">{{detailData.applyData['borrow_apply20230501'].value}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="margin-top-10" v-if="detailData.applyData && detailData.applyData['my_account20230501']  && detailData.applyData['my_account20230501']['value']">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("收款账户")}}</span>
      </div>
      <div>
        <table class="custom-table-black">
          <tr>
            <td style="width: 20%" class="font-size-12 font-bold">{{$t("收款人")}}</td>
            <td style="width: 30%" class="color-black font-size-12">
              <div class="moon-content-text-ellipsis-class" style="width: 100%">{{detailData.applyData['my_account20230501'].name}}</div>
            </td>
            <td style="width: 20%" class="font-size-12 font-bold">{{$t("账号")}}</td>
            <td style="width: 30%" class="color-black font-size-12">{{detailData.applyData['my_account20230501'].value}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="margin-top-10" v-if="detailData.applyData && detailData.applyData['jk_account20230501']  && detailData.applyData['jk_account20230501']['value']">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("收款账户")}}</span>
      </div>
      <div>
        <table class="custom-table-black">
          <tr>
            <td style="width: 20%" class="font-size-12 font-bold">{{$t("收款人")}}</td>
            <td style="width: 30%" class="color-black font-size-12">
              <div class="moon-content-text-ellipsis-class" style="width: 100%">{{detailData.applyData['jk_account20230501'].name}}</div>
            </td>
            <td style="width: 20%" class="font-size-12 font-bold">{{$t("账号")}}</td>
            <td style="width: 30%" class="color-black font-size-12">{{detailData.applyData['jk_account20230501'].value}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="margin-top-10" v-if="detailData.applyData && detailData.applyData['supplierId20230501']  && detailData.applyData['supplierId20230501']['value']">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("供应商/客户")}}</span>
      </div>
      <div>
        <table class="custom-table-black">
          <tr>
            <td style="width: 20%" class="font-size-12 font-bold">{{$t("名称")}}</td>
            <td style="width: 30%" class="color-black font-size-12">
              <div class="moon-content-text-ellipsis-class" style="width: 100%">{{detailData.applyData['supplierId20230501'].name}}</div>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="margin-top-10">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text color-black">{{$t("审核信息")}}</span>
      </div>
      <table class="custom-table-black">
        <tr v-for="(itemUser, indexUser) in detailApplyAuditList" :key="indexUser">
          <td style="width: 20%" class="font-size-12 font-bold">{{$t("审核人")}}</td>
          <td style="width: 20%" class="color-black font-size-12">
            {{ itemUser.userName }}
          </td>
          <td style="width: 15%" class="font-size-12 font-bold">{{$t("审核状态")}}</td>
          <td style="width: 15%" class="color-black font-size-12">
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
          <td style="width: 20%" class="color-black font-size-12">
            <label v-if="itemUser.handleTime">
              {{$moment(itemUser.handleTime).format("YYYY-MM-DD HH:mm:ss")}}
            </label>
            <label v-else class="color-black">--</label>
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
              let handleList = res.data.data.handleList && res.data.data.handleList.length > 0 ? res.data.data.handleList : [];
              for (let i = 0; i < handleList.length; i++){
                if (handleList[i].nodeType == 'handle'){
                  for (let j = 0; j < handleList[i].handleUserList.length; j++){
                    if (handleList[i]['handleUserList']){
                      handleUserList.push(handleList[i].handleUserList[j]);
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
  .rp-img{
    height: 25px;
    width: 25px;
    border: 0px solid #dddddd;
  }
</style>
