<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-col span="4">
        <div class="text-left padding-lr-10 color-white">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
              {{$t("返回")}}
            </span>
        </div>
      </van-col>
      <van-col span="16">
        <div class="text-center color-white font-size-16 font-bold">
          <span>{{$t('自定义表单')}}</span>
        </div>
      </van-col>
      <van-col span="4">
        <van-button size="small" type="warning" plain native-type="button" @click="handleFormOk($event)">{{$t("提交")}}</van-button>
      </van-col>
    </div>
    <div :style="divHeight10">
      <div style="margin-top:1px;" class="margin-left-10 margin-right-10">
        <div class="content-block padding-tb-10" :style="divHeight7">
          <form-create v-if="formCreateRuleData != ''" v-model="fApi" :rule="formCreateRuleData" :option="formCreateOptionData"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  import mixinsBridge from "~/utils/mixinsBridge";
  import MySex from "~/components/MySex";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import {Toast} from "vant";
  export default {
    name: 'studentInfo',
    components: {MySex},
    layout: 'defaultAppScreen',
    mixins: [mixins,mixinsBridge],
    data(){
      return {
        formCreateRuleData: [],
        formCreateOptionData: {},
        formCreateTitleData: '',
        fromCreateBtnText: '',
        fApi: {},
      }
    },
    mounted() {

    },
    created() {
      this.initAppServer();
    },
    methods: {
      layoutInit(){

      },
      initAppServer(){
        this.initForm();
      },
      initForm(){
        let rules = '';
        let list = [];
        let params = {
          linkId: this.$route.query.linkId
        };
        this.$axios.get(common.server_enroll_app_student_link_info, {params: params}).then((res) => {
          if (res.data.data){
            this.formCreateTitleData = res.data.data.linkName;
            this.formCreateIdData = res.data.data.id;
            //this.fromCreateBtnShow = data.submit_button;
            this.fromCreateBtnText = this.$t("提交")
            if (res.data.data.linkContent != null && res.data.data.linkContent != ''){
              this.formCreateRuleData = JSON.parse(res.data.data.linkContent).rule;
              this.formCreateOptionData = JSON.parse(res.data.data.linkContent).option;
              this.setFormChildren(this.formCreateRuleData, list, 'children');
            }
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
                    file.url = res.data.url || ''
                    console.log(res)
                  }
                }
              }
            }
          });
          return obj;
        }
      },
      handleFormOk(){
        if (this.fApi['submit']){
          this.fApi.submit((formData, fApi)=>{
            let url = "";
            let ruleList = [];
            let params = {
              linkId: this.$route.query.linkId
            }
            let rule = fApi.rule;
            let ruleObjList =  this.setRuleChild(rule, ruleList);
            //console.log(ruleObjList);
            params['linkFormDate'] = JSON.stringify(ruleObjList);

            url = common.server_enroll_app_student_form_add;
            params = this.$qs.stringify(params);
            this.btnLoading = true;
            this.$axios.post(url, params, {loading: false}).then(res => {
              if (res.data.code == 200){
                this.dialogForm = false;
                let url = this.$route.query.subPage ? this.$route.query.subPage : '/newStudent/studentIndex'
                this.returnGIndex(url);
                Toast(res.data.desc);
              }else {
                Toast(res.data.desc);
              }
              this.btnLoading = false;
            });
          });
        }else {
          let url = "";
          let ruleList = [];
          let params = {
            linkId: this.$route.query.linkId
          }
          params['linkFormDate'] = '';

          url = common.server_enroll_app_student_form_add;
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              this.dialogForm = false;
              let url = this.$route.query.subPage ? this.$route.query.subPage : '/newStudent/studentIndex'
              this.returnGIndex(url);
              Toast(res.data.desc);
            }else {
              Toast(res.data.desc);
            }
            this.btnLoading = false;
          });
        }
      },
      returnIndex(){
        let url = this.$route.query.subPage ? this.$route.query.subPage : '/newStudent/studentIndex'
        this.$router.push({
          path: url,
          query: {
            activeType: this.$route.query.activeType,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
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
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: #FFFFFF;
  width: 100%;
}
.app-title-border-tag{
  width: 5px;
  height: 25px;
  background: #1EA084;
  display: inline-block;
}
.notice-list-item{
  height: 45px;
  line-height: 45px;
}
.bg-student-info-block{
  background: url(/img/bg-student-info.png) no-repeat;
  height: 180px;
  width: 100%;
  border: 1px dashed #dddddd;
}
.text-display-line{
  width: 80px;
  display: inline-block;
  position: relative;
  top: 4px;
}
.name-display-line{
  max-width: 200px;
  display: inline-block;
  position: relative;
  top: 6px;
}
.item-block{
  border-radius: 5px;
  background: #EBEEF5;
  padding: 10px;
}
</style>
