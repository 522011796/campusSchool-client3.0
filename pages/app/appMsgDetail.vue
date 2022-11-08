<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block color-white" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-row class="padding-top-20">
        <van-col span="8">
          <div class="text-left padding-lr-10 header-class">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
              {{$t("返回")}}
            </span>
          </div>
        </van-col>
        <van-col span="8" class="text-center header-class">
          <div class="font-bold">{{$t("消息详情")}}</div>
        </van-col>
        <van-col span="8" class="text-right header-class" style="padding-right: 15px">
          &nbsp;
        </van-col>
      </van-row>
    </div>

    <div style="position: relative">
      <div class="padding-tb-10 bg-white">
        <div :style="divHeight16">
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
          <div style="background: #f5f5f5;height: 10px;margin-top: 10px">

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
          <div style="background: #f5f5f5;height: 10px;margin-top: 10px">

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

        <div style="height: 60px;line-height: 60px;text-align: center;background: #f5f5f5">
          <div v-if="detailData.cancel == true">
            <el-button style="width: 100px" size="small" type="primary" @click="handleOk($event, detailData, -1)">撤 销</el-button>
          </div>

          <div v-if="detailData.handle == true">
            <el-button v-if="detailApplyAuditUserData.agreen1 == true" style="width: 100px" size="small" type="success" @click="handleOk($event, detailData, 1)">同 意</el-button>
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
                <el-button type="primary" size="small" @click="handleOk($event, detailData, 2)">确定</el-button>
              </div>
              <el-button slot="reference" style="width: 100px" type="warning" size="small">{{$t("驳回")}}</el-button>
            </el-popover>
          </div>

          <div v-if="detailData.status == -1" class="text-center color-disabeld font-bold font-size-14">已撤销</div>
          <div v-if="detailData.status == 3" class="text-center color-success font-bold font-size-14">已通过</div>
          <div v-if="detailData.status == 4" class="text-center color-danger font-bold font-size-14">未通过</div>
          <div v-if="detailData.status == 0" class="text-center color-warning font-bold font-size-14">待审核</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  import mixinsBridge from "~/utils/mixinsBridge";
  import {ImagePreview, Toast} from "vant";
  export default {
    name: 'appMsgDetail',
    layout: 'defaultAppScreen',
    mixins: [mixins,mixinsBridge],
    data(){
      return {
        active: 6,
        topHeight: 0,
        serverAppList: [],
        noticeAppList: [],
        pageType: '',
        detailApplyContentData: [],
        detailApplyAuditList: [],
        detailApplyAuditUserData: {},
        detailData: '',
        detailIndex: '',
        visibleNo: false,
        textarea: '',
      }
    },
    mounted() {

    },
    created() {
      this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
      this.topHeight = this.navHeight > 0 ? (parseInt(0) + parseInt(this.navHeight)) : 10;

      if (this.$route.query.sessionId){
        this.initAppConfig();
      }
      //this.initAppRecommend("636392513f238f036cc231f8");
    },
    methods: {
      layoutInit(){

      },
      async initAppConfig(){
        await this.autoLoginApp();
        //await this.getSessionInfo();
        setTimeout(()=>{
          let id = this.$route.query.msgId;
          this.initAppRecommend(id);
        },1000);
      },
      initAppRecommend(id){
        let params = {
          id: id
        };
        this.$axios.get(common.server_form_audit_query, {params: params}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
              this.detailApplyAuditList = res.data.data.handleList;
              let orderIndex = res.data.data.orderIndex;

              this.detailData = res.data.data;

              if (res.data.data.applyContent  && res.data.data.applyContent != "[]"){
                this.detailApplyContentData = JSON.parse(res.data.data.applyContent);
              }

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
      handleOk(event, data, type){
        let params = {
          id: data._id,
          status: type,
          des: this.textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, params).then(res => {
          if (res.data.code == 200){
            this.tableData.splice(this.detailIndex, 1);
            let page = Math.ceil(this.tableData.length / 20);
            this.page = page;
            //this.init();
            this.popUpVisible = false;
            Toast(res.data.desc);
          }else {
            Toast(res.data.desc);
          }
        });
      },
      cancelPop(){
        this.textarea = '';
        this.visibleOk = false;
        this.visibleNo = false;
      },
      readFile(file){//预览
        ImagePreview({
          images: [file],
          closeable: false,
        });
      },
      returnIndex(){
        this.returnGlobalMain(1);
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
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: #FFFFFF;
  width: 100%;
  position: relative;
  top: -15px;
}
.app-title-border-tag{
  width: 5px;
  height: 30px;
  background: #1EA084;
  display: inline-block;
}
.notice-list-item{
  height: 45px;
  line-height: 45px;
}
.header-tab-block{
  background: #ffffff;
  border-radius: 5px;
  height: 80px;
  box-shadow: 0px 0px 4px #bbbbbb;
}
</style>
