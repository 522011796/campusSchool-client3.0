<template>
  <div>
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block color-white" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-row>
        <van-col span="6">
          <div class="text-left padding-lr-10">
            <span class="font-bold font-size-14" @click="returnBlock">
              <i class="fa fa-chevron-left"></i>
              {{$t("返回")}}
            </span>
          </div>
        </van-col>
        <van-col span="18">
          <div class="text-right padding-lr-10">
            <template v-if="checkApply == true">
              <el-select  style="width: 130px" size="small" v-model="applyCheckValue" collapse-tags placeholder="关联表单申请">
                <el-option
                  v-for="item in detailApplyCheckList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
            <template v-if="customUserStatus == true">
              <el-select style="width: 130px" size="small" v-model="auditSelUser" multiple collapse-tags placeholder="请选择审批人">
                <el-option
                  v-for="item in auditUsers"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
            <span style="position: relative;top: -5px">
              <van-button plain size="small" type="primary" v-if="fromCreateBtnShow == true" :loading="btnLoading" @click="serverSubBlock($event)">
                <i class="fa fa-edit"></i>
                {{ fromCreateBtnText }}
              </van-button>
            </span>
          </div>
        </van-col>
      </van-row>
    </div>

    <div style="margin-top:1px;">
      <div class="content-block padding-tb-10" :style="divHeight7" style="background: #f5f5f5">
        <div class="color-muted font-size-12 bg-white padding-lr-10 padding-tb-10">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("服务简介")}}</label>
          </span>
        </div>
        <div class="bg-white padding-lr-10" style="padding-bottom: 10px">
          <div>
            <template v-if="serverDetail.des && serverDetail.des != ''">
              <div @click="showCollapse = !showCollapse" v-if="showCollapse == false">
                <span>{{serverDetailTitle}}</span>
                <span>
                <i class="fa fa-angle-down pull-right"></i>
              </span>
              </div>
              <el-collapse-transition>
                <div v-show="showCollapse" @click="showCollapse = false"  v-if="showCollapse == true">
                  {{ serverDetail.des }}
                  <span>
                  <i class="fa fa-angle-up pull-right"></i>
                </span>
                </div>
              </el-collapse-transition>
            </template>
            <template v-else>
              <van-empty description="暂无数据" image-size="50" style="padding: 0px !important;"/>
            </template>
          </div>
        </div>
        <div class="margin-top-10 bg-white">
          <div class="color-muted font-size-12 bg-white padding-lr-10 padding-tb-10">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">{{$t("表单内容")}}</label>
            </span>
          </div>
          <div class="margin-right-10 margin-left-10">
            <form-create v-if="formCreateRuleData != ''" v-model="fApi" :rule="formCreateRuleData" :option="formCreateOptionData"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";
  import { Toast } from 'vant';

  import mixins from "~/utils/mixins";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  export default {
    name: 'appServerForm',
    layout: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        rateValue: 0,
        serverDetailTitle: '',
        serverDetail: '',
        fApi: {},
        formCreateRuleData: [],
        formCreateOptionData: {},
        btnLoading: false,
        customUserStatus: false,
        fromCreateBtnShow: true,
        showCollapse: false,
        fromCreateBtnText: '',
        auditUsers: [],
        auditSelUser: [],
        activeName: '',
        checkApply: false,
        applyCheckValue: [],
        detailApplyCheckList: [],
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.init();
      this.initCheckForm(this.$route.query.id);
    },
    methods: {
      layoutInit(){

      },
      async init(){
        let list = [];
        let params = {
          id: this.$route.query.id
        };
        await this.getSessionInfo();
        this.$axios.get(common.server_form_allInfo, {params: params}).then(res => {
          if (res.data.code == 200){
            let auditUser = [];
            this.serverDetail = res.data.data;
            this.serverDetailTitle = res.data.data.des ? res.data.data.des.substr(0, 50) + "..." : '';
            let processList = res.data.data.processList;
            this.customUserStatus = false;
            this.fromCreateBtnShow = res.data.data.submitButton;
            this.fromCreateBtnText = res.data.data.buttonName != "" ? res.data.data.buttonName : this.$t("提交");
            this.checkApply = res.data.data.checkApply;

            if (res.data.data.formContent != null && res.data.data.formContent != ''){
              this.formCreateRuleData = JSON.parse(res.data.data.formContent).rule;
              this.formCreateOptionData = JSON.parse(res.data.data.formContent).option;
              this.setFormChildren(this.formCreateRuleData, list, 'children');
            }

            for (let i = 0; i < processList.length; i++){
              if (processList[i].htype == 'CustomUser'){
                let processUser = processList[i].hid;
                let processUserName = processList[i].hname;
                for (let j = 0; j < processUser.length; j++){
                  auditUser.push({
                    label: processUserName[j],
                    value: processUser[j],
                    text: processUserName[j]
                  });
                }
                this.customUserStatus = true;
              }
            }
            this.auditUsers = auditUser;
          }
        });
      },
      initCheckForm(id){
        let params = {
          formId: id
        };
        this.$axios.get(common.server_form_check_apply_list,{params: params}).then(res => {
          if (res.data.code == 200){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                value: res.data.data[i].id,
                label: res.data.data[i].name
              });
            }
            this.detailApplyCheckList = array;
          }
        });
      },
      setFormChildren(array, obj, param){
        let _self = this;
        if (array && array.length > 0){
          array.map(function (item,index) {
            if(item[param] != undefined && item[param].length > 0){
              _self.setFormChildren(item[param], obj, param);
            }else {
              if (item.type == "upload"){
                item['props'] = {
                  uploadType: 'image',
                  action: '/proxy/school/multipartFile/upload',
                  data : {
                    "path": "applet"
                  },
                  onSuccess(res, file){
                    let url = "";
                    if (res.data.url != ""){
                      // let urlHttps = res.data.url.indexOf("https");
                      // let urlHttp = res.data.url.indexOf("http");
                      // if (urlHttps == -1 || urlHttp == -1){
                      //   url = "http:" + res.data.url
                      // }else {
                      //   url = res.data.url
                      // }
                      if (res.data.url.indexOf("files") > -1) {
                        let url1 = res.data.url.split("files")[0];
                        let url2 = res.data.url.split("files")[1];

                        url = "https://campus.9451.com:28090/files/" + url2;
                      }

                    }
                    file.url = url
                    console.log(url)
                  }
                }
              }
            }
          });
          return obj;
        }
      },
      serverSubBlock(){
        this.fApi.submit((formData, fApi)=>{
          let url = "";
          let ruleList = [];
          if (this.auditSelUser.length == 0 && this.customUserStatus == true){
            Toast(this.$t("请选择审批人！"));
            return;
          };
          let params = {
            appletFormId: this.$route.query.id,
            userId: this.loginUserId,
            //applyContent: JSON.stringify(formData),
            customHandleUserIds: JSON.stringify(this.auditSelUser),
          }

          if (this.checkApply == true){
            params['checkApplyId'] = this.applyCheckValue;
          }

          let rule = fApi.rule;
          let ruleObjList =  this.setRuleChild(rule, ruleList);
          params['applyContent'] = JSON.stringify(ruleObjList);

          url = common.server_form_add;
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              this.returnBlock();
              Toast(res.data.desc);
            }else {
              Toast(res.data.desc);
            }
            this.btnLoading = false;
          });
        });
      },
      returnBlock(){
        let page = this.$route.query.page ? this.$route.query.page : '/app/appIndex';
        this.$router.push({
          path: page,
          query: {
            id: this.$route.query.id,
            activeType: this.$route.query.activeType,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      },
      setRuleChild(rule, ruleList){
        let obj = {};
        for (let i = 0; i < rule.length; i++){
          if (rule[i]['children'] && rule[i]['children'].length > 0){
            this.setRuleChild(rule[i]['children'], ruleList);
            continue;
          }else {
            if (rule[i].field){
              obj = {
                field: rule[i].field,
                title: rule[i].title,
                type: rule[i].type,
                value: rule[i].value
              }
              ruleList.push(obj);
            }
          }
        }
        return ruleList;
      }
    }
  }
</script>

<style scoped>
.container {

}
.header-title-block{
  height: 60px;
  line-height: 60px;
  width: 100%;
}
.content-block{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #FFFFFF;
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
</style>
