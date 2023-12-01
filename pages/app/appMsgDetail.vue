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
                  <span>{{ detailData.applyTime ? $moment(detailData.applyTime).format("YYYY-MM-DD HH:mm") : "" }}</span>
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
                          <label v-if="item.type == 'el-transfer' && item.value && item.value.length > 0" class="font-size-12">{{ item.value.join() }}</label>
                          <label v-else-if="item.type == 'el-transfer' && item.value && item.value.length <= 0" class="font-size-12"></label>
                          <label v-else class="font-size-12">{{ item.value }}</label>
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
                          <label v-if="itemUser.status === -1" class="color-warning">{{$t("待提交")}}</label>
                          <label v-if="itemUser.status === 0" class="color-warning">{{$t("待审核")}}</label>
                          <label v-if="itemUser.status === 3" class="color-success">
                            {{$t("已通过")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <img v-for="(item, index) in itemUser.url" :key="index" :src="item" fit="fit" style="position: relative;top:5px;height: 20px;width:20px;margin-left: 3px" @click="readFile(item)"></img>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 4" class="color-danger">{{$t("未通过")}}</label>
                          <label v-if="itemUser.status === 1" class="color-success">
                            {{$t("已通过")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <img v-for="(item, index) in itemUser.url" :key="index" :src="item" fit="fit" style="position: relative;top:5px;height: 20px;width:20px;margin-left: 3px" @click="readFile(item)"></img>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 2" class="color-warning">
                            {{$t("已驳回")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <img v-for="(item, index) in itemUser.url" :key="index" :src="item" fit="fit" style="position: relative;top:5px;height: 20px;width:20px;margin-left: 3px" @click="readFile(item)"></img>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 5" class="color-warning">{{$t("无需审批")}}</label>
                          <label v-if="itemUser.status === 8" class="color-warning">{{$t("审批中")}}</label>
                          </span>
                            <span class="margin-left-10" v-if="itemUser.handleTime">
                            <label class="color-muted">{{$moment(itemUser.handleTime).format("YYYY-MM-DD HH:mm:ss")}}</label>
                          </span>

                          <div class="margin-top-5" v-if="itemUser.signStr && itemUser.signStr != ''">
                            <span style="position: relative;top: -3px" class="color-muted">
                              <i class="fa fa-pencil"></i>
                              <label>{{$t("手写签名")}}</label>
                            </span>
                              <span>
                              <el-image
                                style="width: 40px; height: 15px"
                                :src="itemUser.signStr"
                                :preview-src-list="[itemUser.signStr]">
                              </el-image>
                            </span>
                          </div>
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
            <el-button size="small" type="primary" @click="handleOk($event, detailData, -1)">撤 销</el-button>
          </div>

          <div v-if="detailData.handle == true">
            <el-button size="mini" type="warning" v-if="detailData.fallback == true" @click="handleOk($event, detailData, 9)">
              {{detailData.fallbackName != undefined && detailData.fallbackName != '' ? detailData.fallbackName : '返回'}}
            </el-button>
            <el-button size="mini" type="success" v-if="detailData.join == true" @click="sianRange($event, 7)">
              {{detailData.joinName != undefined && detailData.joinName != '' ? detailData.joinName : $t('加签')}}
            </el-button>
            <el-button size="mini" type="danger" v-if="detailData.trans == true" @click="sianRange($event, 6)" style="margin-left: 0 !important;">
              {{detailData.transName != undefined && detailData.transName != '' ? detailData.transName : $t('转签')}}
            </el-button>

            <el-popover
              :tabindex="99999"
              placement="top"
              width="300"
              @hide="cancelPop"
              v-model="visibleYes"
              v-if="detailApplyAuditUserData.agreen1 == true">
              <div class="margin-bottom-10">
                <div>
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea">
                  </el-input>
                </div>
                <div class="margin-top-5">
                  <div>
                    <span class="font-size-12 color-muted">{{$t("上传图片")}}</span>
                  </div>
                  <div class="margin-top-10">
                    <span class="pull-left" style="position: relative" v-for="(item, index) in images" :key="index">
                      <i class="fa fa-times-circle color-danger" style="font-size: 14px;position: absolute; right: 2px; top:-5px;" @click="clearImage($event, index)"></i>
                      <img  :src="item.picture_url" fit="fit" style="margin-right: 10px;height: 30px;width:30px"></img>
                    </span>
                    <upload-square ref="upload" class="pull-left margin-left-5" :action="uploadFileListUrl" :limit="3" max-size="5" :data="{path: 'applet'}" accept=".png,.jpg,.jpeg" @success="uploadImgListFileSuccess">
                      <i class="el-icon-plus avatar-uploader-icon" style="height: 30px;line-height:30px;width: 30px"></i>
                    </upload-square>
                    <div class="moon-clearfix"></div>
                  </div>
                </div>
              </div>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="cancelPop">取消</el-button>
                <el-button type="primary" size="small" @click="handleOk($event, detailData, 1)">确定</el-button>
              </div>
              <el-button slot="reference" type="success" size="small">{{$t("同意")}}</el-button>
            </el-popover>

            <el-popover
              :tabindex="99999"
              placement="top"
              width="300"
              @hide="cancelPop"
              v-model="visibleNo"
              v-if="detailApplyAuditUserData.notagreed1 == true">
              <div class="margin-bottom-10">
                <div>
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea">
                  </el-input>
                </div>
                <div class="margin-top-5">
                  <div>
                    <span class="font-size-12 color-muted">{{$t("上传图片")}}</span>
                  </div>
                  <div class="margin-top-10">
                    <span class="pull-left" style="position: relative" v-for="(item, index) in images" :key="index">
                      <i class="fa fa-times-circle color-danger" style="font-size: 14px;position: absolute; right: 2px; top:-5px;" @click="clearImage($event, index)"></i>
                      <img  :src="item.picture_url" fit="fit" style="margin-right: 10px;height: 30px;width:30px"></img>
                    </span>
                    <upload-square ref="upload" class="pull-left margin-left-5" :action="uploadFileListUrl" :limit="3" max-size="5" :data="{path: 'applet'}" accept=".png,.jpg,.jpeg" @success="uploadImgListFileSuccess">
                      <i class="el-icon-plus avatar-uploader-icon" style="height: 30px;line-height:30px;width: 30px"></i>
                    </upload-square>
                    <div class="moon-clearfix"></div>
                  </div>
                </div>
              </div>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="cancelPop">取消</el-button>
                <el-button type="primary" size="small" @click="handleOk($event, detailData, 2)">确定</el-button>
              </div>
              <el-button slot="reference" type="warning" size="small">{{$t("驳回")}}</el-button>
            </el-popover>
          </div>

          <div v-if="detailData.status == -1" class="text-center color-disabeld font-bold font-size-14">待提交</div>
          <div v-if="detailData.status == 3" class="text-center color-success font-bold font-size-14">已通过</div>
          <div v-if="detailData.status == 4" class="text-center color-danger font-bold font-size-14">未通过</div>
          <div v-if="detailData.status == 0" class="text-center color-warning font-bold font-size-14">待审核</div>
        </div>
      </div>
    </div>

    <van-dialog v-model="dialogWrite" title="签名" style="top:50%;" :width="screenWidth.width1-15" :show-confirm-button="false" @close="closeDialog" :before-close="onBeforeClose">
      <div slot="title" class="write-header-block">
        <div>{{$t("签名")}}</div>
      </div>

      <vue-esign
        ref="esign"
        :width="screenWidth.width1-15"
        :height="divHeight10.height1 - 200"
        :isCrop="isCrop"
        :lineWidth="lineWidth"
        :lineColor="lineColor"
        :bgColor.sync="bgColor"
        :quality="quality">

      </vue-esign>

      <div style="height: 50px;line-height: 50px;background: #FFFFFF">
        <el-row>
          <el-col :span="12">
            <div class="write-item-block write-item-left-block" @click="dialogWrite = false">
              <span>{{$t("取消")}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="write-item-block" v-loading="btnLoading" @click="btnLoading == true ? '' : okDialog()">
              <span>{{$t("确定")}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </van-dialog>

    <van-popup v-model="dialogRangeDetail" round position="bottom" :style="{ height: '400px' }" @close="closeRangeDialog">
      <div style="height: 40px;line-height: 40px;background: #f5f5f5">
        <el-row>
          <el-col :span="6">
            <div class="text-center" @click="closeRangeDialog">
              <a href="javascript:;" class="color-warning">{{$t("取消")}}</a>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text-center">
              {{$t("选择人员")}}
            </div>
          </el-col>
          <el-col :span="6">
            <div class="text-center" @click="okRangeDialog">
              <a href="javascript:;" class="color-success">{{$t("确认")}}</a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div style="height: 360px;overflow-y: auto">
        <van-radio-group v-model="transUserId" v-for="(item,index) in signType == 6 ? detailData.transRange : detailData.joinRange" :key="index">
          <van-cell-group>
            <van-cell :title="item.realName" clickable @click="transUserId = item.userId">
              <template #right-icon>
                <van-radio :name="item.userId" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </van-popup>

  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  import mixinsBridge from "~/utils/mixinsBridge";
  import {ImagePreview, Toast} from "vant";
  import {MessageError} from "~/utils/utils";
  import vueEsign from "vue-esign/src/index.vue";
  export default {
    name: 'appMsgDetail',
    layout: 'defaultAppScreen',
    mixins: [mixins,mixinsBridge],
    components: {vueEsign},
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
        visibleYes: false,
        textarea: '',
        images: [],
        uploadFileListUrl: common.upload_file,
        lineWidth: 6,
        lineColor: '#000000',
        bgColor: '#F5f5f5',
        resultImg: '',
        isCrop: false,
        quality: 1,
        params: {},
        transUserId: '',
        transUserIdObj: {},
        signType: '',
        dialogRangeDetail: false,
        dialogWrite: false,
        btnLoading: false
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
      //this.initAppRecommend("6372f39257cd5a294897fc52");
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

        if (this.images.length > 0){
          let images = [];
          for (let i = 0; i < this.images.length; i++){
            images.push(this.images[i].picture_url);
          }

          params['url'] = images.join();
        }

        if (data.sign == true && type == 1){
          this.lineWidth = 6;
          this.lineColor = '#000000';
          this.bgColor = '#F5f5f5';
          this.resultImg = '';
          this.isCrop = false;
          this.quality = 1;
          this.params = params;
          this.visibleYes = false;
          this.dialogWrite = true;
          return;
        }

        this.handleConfirm(params);
      },
      handleConfirm(params, done){
        let paramsTemp = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, paramsTemp, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.images = [];
            this.popUpVisible = false;
            this.dialogSysVisible = false;
            this.initAppRecommend(this.$route.query.msgId);
            this.cancelPop();
            this.popUpVisible = false;
            this.dialogWrite = false;
            this.dialogRangeDetail = false;

            Toast(res.data.desc);
          }else {
            Toast(res.data.desc);
          }
        });
      },
      cancelPop(){
        this.textarea = '';
        this.images = [];
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
      },
      uploadImgListFileSuccess(res,file){
        if (res.code == 200){
          this.images.push({
            picture_url: res.data.url,
          });
        }else {
          MessageError(res.desc);
        }
      },
      clearImage(event, index){
        this.images.splice(index, 1);
      },
      closeDialog(){
        this.params = {};
        if (this.$refs['esign']){
          this.$refs.esign.reset()
        }
      },
      closeRangeDialog(){
        this.transUserId = '';
        this.dialogRangeDetail = false;
      },
      onBeforeClose(action, done) {
        // 点击了确定按钮
        if (action === "confirm") {
          let _self = this;
          this.$refs.esign.generate().then(res => {
            _self.params['signStr'] = res;
            _self.params['schoolAccountId'] = this.account;
            _self.params['amount'] = this.amount;

            _self.handleConfirm(_self.params, done);

            if (this.$refs['esign']){
              this.$refs.esign.reset()
            }
          }).catch(err => {
            Toast(this.$t("签名错误"));
            return done(false);
          })
        }
        // 点击了取消按钮
        else {
          if (this.$refs['esign']){
            this.$refs.esign.reset()
          }
          done(true);
        }
      },
      sianRange(event, type){
        this.signType = type;
        this.dialogRangeDetail = true;
      },
      sianClick(event){
        let params = {
          id: this.detailData.id ? this.detailData.id : this.detailData.id,
          status: this.signType,
          transUserId: this.transUserId,
          des: ''
        };
        this.handleConfirm(params);
      },
      okRangeDialog(){
        if (this.transUserId == ''){
          Toast(this.$t("请选择人员!"));
          return;
        }
        this.sianClick();
        this.dialogRangeDetail = false;
      },
      okDialog(data){
        let _self = this;
        this.$refs.esign.generate().then(res => {
          _self.params['signStr'] = res;
          _self.params['schoolAccountId'] = this.account;
          _self.params['amount'] = this.amount;

          _self.handleConfirm(_self.params);

          if (this.$refs['esign']){
            this.$refs.esign.reset()
          }
        }).catch(err => {
          Toast(this.$t("签名错误"));
        })
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
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px dashed #dddddd;
  font-size: 12px;
}
.write-header-block{
  height: 30px;
  position: relative;
  top: -10px;
  text-align: center
}
.write-item-block{
  width: 100%;
  height: 100%;
  text-align: center;
}
.write-item-left-block{
  border-right: 1px solid #ebebeb;
}
</style>
