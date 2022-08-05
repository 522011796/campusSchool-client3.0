<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block color-white" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-row class="padding-top-20">
        <van-col span="8">
          <div class="text-left padding-lr-10">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
            </span>
          </div>
        </van-col>
        <van-col span="8" class="text-center">
          <div class="font-bold">{{$t("我的待办")}}</div>
          <div class="font-size-12">
            <span>{{this.dateTime}}</span>
          </div>
        </van-col>
        <van-col span="8" class="text-right" style="padding-right: 15px">
          <span v-if="this.dateTime" @click="clearSearch" class="margin-right-5">{{$t("清除")}}</span>
          <span>
            <i class="fa fa-calendar" @click="calendarManage"></i>
          </span>
        </van-col>
      </van-row>
    </div>

    <form action="/">
      <van-row>
        <van-col :span="16">
          <van-search v-model="serchName" placeholder="姓名或者服务名称" @input="onSearch" @clear="onClear"/>
        </van-col>
        <van-col :span="8" class="text-right">
          <el-select class="margin-right-10" style="margin-top: 11px" v-model="value" size="small" placeholder="请选择" @change="dropdownItem">
            <el-option label="全部" value=""></el-option>
            <el-option label="待审核" value="0"></el-option>
            <el-option label="通过" value="3"></el-option>
            <el-option label="未通过" value="4"></el-option>
          </el-select>
        </van-col>
      </van-row>
    </form>
    <div>
      <van-tabs @click="activeTabMenu" color="#007CBB" title-active-color="#007CBB" title-inactive-color="#4B4B4B" background="#f5f5f5">
        <van-tab name="1" :title="$t('我待办')"></van-tab>
        <van-tab name="2" :title="$t('我提交')"></van-tab>
        <van-tab name="3" :title="$t('抄送我')"></van-tab>
        <van-tab name="4" :title="$t('已完成')"></van-tab>
      </van-tabs>
    </div>
    <div style="margin-top:5px;">
      <div class="content-block padding-tb-10" :style="divHeight12">
        <van-empty v-if="tableData.length == 0" description="暂无数据" />
        <div v-else class="content-block-item padding-lr-10 padding-tb-10" style="position: relative" v-for="(item, index) in tableData" @click="dataDetail($event, item)">
          <div>
            [<span class="color-warning">{{ item.applyUserName }}</span>]
            <span>{{$t("提交的")}}</span>
            [<span class="color-warning moon-content-text-ellipsis-class" style="max-width: 120px;display: inline-block;position: relative; top: 3px">{{ item.formName }}</span>]
          </div>
          <div class="color-muted margin-top-5">
            <span class="font-size-12">{{ $moment(item.applyTime).format("YYYY-MM-DD HH:mm") }}</span>
          </div>
          <div class="margin-top-5 font-size-12">
            <span class="color-muted">{{$t("审核状态")}}</span>
            <span>
              <label v-if="item.status === -1" class="color-danger">{{$t("撤销")}}</label>
              <label v-if="item.status === 0" class="color-warning">{{$t("待审核")}}</label>
              <label v-if="item.status === 3" class="color-success">{{$t("通过")}}</label>
              <label v-if="item.status === 4" class="color-danger">{{$t("未通过")}}</label>
            </span>
          </div>
          <span class="fa fa-angle-right" style="position: absolute; right: 10px; top: 30px; font-size: 25px; color: #C0C4CC"></span>
        </div>
      </div>
    </div>

    <van-popup @close="cancelPop" v-model="popUpVisible" round position="bottom" :style="{ height: '85%' }" style="background: #efefef">
      <div class="padding-tb-10 padding-lr-10 border-bottom-1 bg-white">
        <template v-if="active == 1">
          <div class="text-right padding-lr-10">
            <el-button v-if="detailApplyAuditUserData.agreen1 == true" size="mini" type="success" @click="handleOk($event, detailData, 1)">同 意</el-button>
            <el-button v-else size="mini" @click="handleCancel">取 消</el-button>
            <!--            <el-button size="mini" type="primary" @click="handleOk($event, detailData, 6)">转 交</el-button>-->
<!--            <el-button size="mini" type="primary" @click="handleOk($event, detailData, -1)">撤 销</el-button>-->
            <el-popover
              :tabindex="99999"
              placement="bottom"
              width="200"
              @hide="cancelPop"
              v-model="visibleNo"
              v-if="detailApplyAuditUserData.notagreed1 == true">
              <div class="margin-bottom-10">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="textarea">
                </el-input>
              </div>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="cancelPop">取消</el-button>
                <el-button type="primary" size="mini" @click="handleOk($event, detailData, 2)">确定</el-button>
              </div>
              <el-button slot="reference" type="warning" size="mini">{{$t("驳回")}}</el-button>
            </el-popover>
          </div>
        </template>
        <template v-if="active == 2">
          <div class="text-right padding-lr-10">
            <el-button v-if="detailData.allowRevoke == true" size="mini" type="primary" @click="handleOk($event, detailData, -1)">撤 销</el-button>
            <el-button v-else size="mini" @click="handleCancel">取 消</el-button>
          </div>
        </template>
        <template v-if="active == 3">
          <div class="text-right padding-lr-10">
            <el-tag size="small" type="info">抄送信息</el-tag>
          </div>
        </template>
        <template v-if="active == 4">
          <div class="text-right">
            <el-tag type="primary" size="small" v-if="detailData.status == 5" class="text-center color-white">无需审批</el-tag>
            <el-tag type="warning" size="small" v-if="detailData.status == 8" class="text-center color-white">审批中</el-tag>
            <el-tag type="warning" size="small" v-if="detailData.status == -1" class="text-center color-white">已撤销</el-tag>
            <el-tag type="success" size="small" v-if="detailData.status == 3" class="text-center color-white">已通过</el-tag>
            <el-tag type="danger" size="small" v-if="detailData.status == 4" class="text-center color-white">未通过</el-tag>
            <el-tag type="danger" size="small" v-if="detailData.status == 2" class="text-center color-white">已驳回</el-tag>
            <el-tag type="danger" size="small" v-if="detailData.status == 1" class="text-center color-white">已通过</el-tag>
          </div>
        </template>
      </div>
      <div :style="divHeight8">
        <div class="padding-lr-0 bg-white">
          <div class="color-muted margin-top-0 font-size-12 padding-lr-10 padding-tb-10">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">{{$t("基础信息")}}</label>
            </span>
          </div>
          <div class="detail-block-title padding-lr-10 padding-tb-5 font-size-12">
            <el-row>
              <el-col :span="12">
                <span class="color-muted">{{$t("申请人")}}:</span>
                <span>{{ detailData.applyUserName }}</span>
              </el-col>
              <el-col :span="12">
                <span class="color-muted">{{$t("学号/工号")}}:</span>
                <span>{{ detailData.userNo }}</span>
              </el-col>
            </el-row>
            <el-row class="margin-top-5">
              <el-col :span="12">
                <span class="color-muted">{{$t("服务名称")}}:</span>
                <span>{{ detailData.formName }}</span>
              </el-col>
              <el-col :span="12">
                <span class="color-muted">{{$t("班级/部门")}}:</span>
                <span>
                <label v-if="detailData.userType == 5">{{ detailData.className }}</label>
                <label v-if="detailData.userType == 4">{{ detailData.departmentName }}</label>
              </span>
              </el-col>
            </el-row>
            <el-row class="margin-top-5">
              <el-col :span="12">
                <span class="color-muted">{{$t("申请日期")}}:</span>
                <span>{{ $moment(detailData.applyTime).format("YYYY-MM-DD HH:mm") }}</span>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="margin-top-10 padding-lr-10 bg-white padding-tb-10">
          <div class="color-muted margin-top-5 font-size-12">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("申请内容")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
<!--            <div class="block-item-row font-bold margin-bottom-5" v-for="(item, index) in detailApplyContentData">-->
<!--              <span class="color-muted" style="position: relative;top: -3px">{{item.title}}: </span>-->
<!--              <el-tooltip class="item" effect="dark" :content="item.value" placement="top">-->
<!--                  <span class="moon-content-text-ellipsis-class" style="max-width: 300px;display: inline-block">-->
<!--                    {{ item.value }}-->
<!--                  </span>-->
<!--              </el-tooltip>-->
<!--            </div>-->
            <table class="custom-table">
              <tr v-for="(item, index) in detailApplyContentData" :key="index">
                <template  v-if="item.type != 'fc-editor' && item.type != 'upload'">
                  <td style="width: 30%;text-align: right;padding-right: 15px">
                    <span class="color-muted moon-content-text-ellipsis-class">
                      <label class="font-size-12">{{item.title}}</label>
                    </span>
                  </td>
                  <td style="text-align: left;padding-left: 15px">
                    <el-tooltip class="item" effect="dark" :content="item.value" placement="top">
                    <span class="moon-content-text-ellipsis-class">
                      <label class="font-size-12">{{ item.value }}</label>
                    </span>
                    </el-tooltip>
                  </td>
                </template>

                <template v-else-if="item.type != 'fc-editor' && item.type == 'upload'">
                  <td style="width: 30%;text-align: right;padding-right: 15px">
                    <span v-if="!item.value || item.value.length <= 0" class="color-muted moon-content-text-ellipsis-class">
                      {{item.title}}
                    </span>
                    <span v-else class="color-muted" style="position: relative;">{{item.title}}: </span>
                  </td>
                  <td style="text-align: left;padding-left: 15px">
                    <span v-if="!item.value || item.value.length <= 0">
                      <div style="height: 20px;line-height: 20px"></div>
                    </span>
                    <span v-else class="custom-avatar" style="display: inline-block;margin-right: 5px;position: relative; top: 5px" v-for="(itemImg, indexImg) in item.value" :key="indexImg" @click="readFile(itemImg)">
                      <el-avatar shape="square" size="small" :src="itemImg" fit="fill"></el-avatar>
                    </span>
                  </td>
                </template>

                <template v-else>
                  <td style="width: 30%;text-align: right;padding-right: 15px">
                    <span class="color-muted font-bold moon-content-text-ellipsis-class" style="position: relative;top: -50px;">{{item.title}}: </span>
                  </td>
                  <td style="text-align: left;padding-left: 15px">
                    <div v-if="item.type == 'fc-editor'"  v-html="item.value" style="width: 90%;height: 150px;overflow-y:auto;display: inline-block;border: 1px solid #dddddd;border-radius: 5px;padding: 0px 10px">
                    </div>
                  </td>
                </template>
              </tr>
            </table>
          </div>
        </div>
        <div class="margin-top-10 padding-lr-10 bg-white padding-tb-10">
          <div class="color-muted margin-top-5 font-size-12">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("审批进度")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
            <el-steps direction="vertical" space="60px">
              <el-step v-for="(item, index) in detailApplyAuditList" :key="index">
                <div slot="icon">
                  <i class="fa fa-flag" style="font-size: 12px"></i>
                </div>
                <div slot="title" class="font-size-12">
                  <span v-if="item.nodeType == 'handle'" class="color-success">
                    {{ $t("审批") }}
                    <label v-if="item.andor == 'and'"> ({{ $t("与签") }}) </label>
                    <label v-if="item.andor == 'or'"> ({{ $t("或签") }}) </label>
                  </span>
                  <span v-if="item.nodeType == 'cc'" class="color-warning">{{ $t("抄送") }}</span>
                </div>
                <div slot="description" class="font-size-12 color-sub-title">
                  <div>
                    <template v-if="item.nodeType == 'handle'">
                      <div v-for="(itemUser, indexUser) in item.handleUserList" :key="indexUser">
                        <span class="color-grand"> <i class="fa fa-user"></i> {{ itemUser.userName }} </span>
                        <span class="margin-left-10">
                          <label v-if="itemUser.status === -1" class="color-warning">{{$t("撤销")}}</label>
                          <label v-if="itemUser.status === 0" class="color-warning">{{$t("待审核")}}</label>
                          <label v-if="itemUser.status === 3" class="color-success">{{$t("通过")}}</label>
                          <label v-if="itemUser.status === 4" class="color-danger">{{$t("未通过")}}</label>
                          <label v-if="itemUser.status === 1" class="color-warning">{{$t("已通过")}}</label>
                          <label v-if="itemUser.status === 2" class="color-warning">
                            {{$t("已驳回")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                          </label>
                          <label v-if="itemUser.status === 5" class="color-warning">{{$t("无需审批")}}</label>
                          <label v-if="itemUser.status === 8" class="color-warning">{{$t("审批中")}}</label>
                        </span>
                        <span class="margin-left-10" v-if="itemUser.handleTime">
                          <label class="color-muted">{{$moment(itemUser.handleTime).format("YYYY-MM-DD HH:mm:ss")}}</label>
                        </span>
                      </div>
                    </template>
                    <template v-if="item.nodeType == 'cc'">
                      <el-tag size="mini" v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser" v-if="indexUser <= 3">
                        <div class="moon-content-text-ellipsis-class" style="width: 50px">
                          <el-tooltip class="item" effect="dark" :content="itemUser" placement="top-start">
                            <span>{{ itemUser }}</span>
                          </el-tooltip>
                        </div>
                      </el-tag>

                      <el-popover
                        placement="left"
                        width="200"
                        trigger="hover"
                        v-if="item.handleUserNameList.length > 3">
                        <div style="height: 100px;overflow-y: auto">
                          <div v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser">
                            <div class="font-size-12 padding-tb-5">
                              <span>{{itemUser}}</span>
                            </div>
                          </div>
                        </div>
                        <el-tag slot="reference" size="mini" type="success">
                          <div class="moon-content-text-ellipsis-class padding-lr-5">
                            <i class="fa fa-user"></i>
                            <label class="margin-left-5">{{item.handleUserNameList.length}}</label>
                          </div>
                        </el-tag>
                      </el-popover>
                    </template>
                  </div>
                </div>
              </el-step>
            </el-steps>
          </div>
        </div>
      </div>
    </van-popup>

    <van-calendar v-model="showCalendar" type="range" @confirm="onConfirm" />
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";
  import { Toast } from 'vant';
  import { ImagePreview } from 'vant'

  import mixins from "~/utils/mixins";
  import {MessageError, MessageSuccess} from "~/utils/utils";
  export default {
    name: 'appServer',
    layout: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        active: 1,
        tableData: [],
        popUpVisible: false,
        detailData: '',
        detailApplyContentData: [],
        detailApplyAuditList: [],
        textarea: '',
        visibleNo: false,
        detailApplyAuditUserData: {},
        serchName: '',
        startTime: '',
        endTime: '',
        showCalendar: false,
        dateTime: ''
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.init();
    },
    methods: {
      layoutInit(){

      },
      async init(){
        let params = {
          page: this.page,
          num: this.num,
          status: this.type,
          beginTime: this.startTime,
          endTime: this.endTime,
          searchKey: this.searchKey,
          queryApplyListType: this.active
        };
        await this.getSessionInfo();
        this.$axios.get(common.server_form_audit_page, {params: params}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
              this.tableData = res.data.data.list;
              this.total = res.data.data.total;
              this.num = res.data.data.num;
              this.page = res.data.data.page;
            }
          }
        });
      },
      serverBlock(event){
        this.$router.push({
          path: '/app/appServerForm',
          query: {
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow
          }
        });
      },
      activeTabMenu(name){
        this.active = name;
        this.init();
      },
      returnIndex(){
        this.$router.push({
          path: '/app/appIndex',
          query: {
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow
          }
        });
      },
      dataDetail(event, item){
        console.log(item);
        this.detailData = item;
        if (item.applyContent  && item.applyContent != "[]"){
          this.detailApplyContentData = JSON.parse(item.applyContent);
        }
        this.initAuditDetailList(item._id);
        this.popUpVisible = true;
      },
      initAuditDetailList(id){
        let params = {
          id: id
        };
        this.$axios.get(common.server_form_audit_query, {params: params}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
              this.detailApplyAuditList = res.data.data.handleList;
              let orderIndex = res.data.data.orderIndex;
              for (let i = 0; i < res.data.data.handleList.length; i++){
                if (res.data.data.handleList[i].orderIndex == orderIndex){
                  this.detailApplyAuditUserData = {
                    agreen1: res.data.data.handleList[i].agreed1,
                    notagreed1: res.data.data.handleList[i].notagreed1
                  };
                }
              }
            }
          }
        });
      },
      cancelPop(){
        this.textarea = '';
        this.visibleOk = false;
        this.visibleNo = false;
      },
      handleCancel(){
        this.popUpVisible = false;
      },
      handleOk(event, data, type){
        let params = {
          id: data._id,
          status: type,
          des: this.textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, params).then(res => {
          if (res.data.code == 200){
            this.init();
            this.popUpVisible = false;
            Toast(res.data.desc);
          }else {
            Toast(res.data.desc);
          }
        });
      },
      readFile(file){//预览
        ImagePreview({
          images: [file],
          closeable: false,
        });
      },
      onSearch(value){
        this.searchKey = value;
        this.init();
      },
      dropdownItem(event){
        this.type = event;
        this.init();
      },
      onClear(){

      },
      clearSearch(){
        this.startTime = "";
        this.endTime = "";
        this.dateTime = "";
        this.init();
      },
      calendarManage(){
        this.showCalendar = true;
      },
      formatDate(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      },
      formatDate2(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      onConfirm(date){
        const [start, end] = date;
        this.dateTime = `${this.formatDate2(start)} - ${this.formatDate2(end)}`;
        this.startTime = `${this.formatDate(start)}`;
        this.endTime = `${this.formatDate(end)}`;
        this.init();
        this.showCalendar = false;
      }
    }
  }
</script>

<style scoped>
.container {

}
.header-title-block{
  height: 60px;
  /*line-height: 60px;*/
  width: 100%;
}
.content-block{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #FFFFFF;
}
.content-block-item{
  background: #f5f5f5;
  border-radius: 5px;
  margin-bottom: 10px;
}
.title-block-tag{
  display: inline-block;
  height: 20px;
  width: 3px;
  background: #E6A23C;
  font-weight: bold;
  border-radius: 3px;
}
.title-block-text{
  font-weight: bold;
  position: relative;
  top: -5px;
}
.detail-block-title{
  border-radius: 5px;
  background: #ffffff;
}
.content-block-item-tag{
  border-top-right-radius: 5px;
  padding: 5px;
  font-size: 12px;
  position: absolute;
  right: 0px;
  top: 0px;
}
</style>
