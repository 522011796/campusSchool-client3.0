<template>
  <div class="container" style="overflow-y: auto; background: url(/img/login-bg.png) no-repeat;background-size: cover;" :style="fullHeight">
    <div v-if="showContent == false" style="position: relative">
      <layout-lr-before></layout-lr-before>
    </div>

    <div v-else style="position: relative;top:13%;">
      <div class=" animated fadeInLeftBig">
        <div>
        <span class="login-title-logo-block">
          <img src="~static/img/login-logo.png" class="login-logo">
        </span>
          <span class="color-sub-grand login-tag-info">
          <label>{{$t("官网")}}</label>
           |
          <label>{{$t("帮助中心")}}</label>
           |
          <label>{{$t("关于我们")}}</label>
        </span>
        </div>
      </div>
      <div class="login-block">
        <div>
          <img src="~static/img/login-screen-icon.png" class="login-bg-icon-class">
          <span class="login-main-title-class">
          <img src="~static/img/login-text-left-icon.png" class="login-main-title-icon-left-class">
          <img src="~static/img/login-icon-left-text.png" class="login-main-title-text-class">
          <img src="~static/img/login-text-right-icon.png" class="login-main-title-icon-right-class">
        </span>
        </div>

        <div class="login-user-opr animated fadeInRightBig">
          <div class="left-top-triangle"></div>
          <div class="right-top-triangle"></div>
          <div class="right-bottom-triangle"></div>
          <div class="left-bottom-triangle"></div>

          <label class="login-user-change-tag select-none" v-if="userType == 1" @click="changeUserType(2)"><i class="fa fa-retweet font-size-12"></i> {{$t("切换教师")}}</label>
          <label class="login-user-change-tag select-none" v-if="userType == 2" @click="changeUserType(1)"><i class="fa fa-retweet font-size-12"></i> {{$t("切换管理员")}}</label>
          <div>
            <span class="login-user-title">{{$t("用户登录")}}</span>
            ｜
            <span class="color-muted font-size-12" v-if="userType == 1">{{$t("管理员登录")}}</span>
            <span class="color-muted font-size-12" v-if="userType == 2">{{$t("教师登录")}}</span>
          </div>
          <div class="line-height"></div>
          <div class="margin-top-30">
            <div class="animated fadeInLeft" v-show="userType == 1">
              <div>
                <div>
                  <span class="login-title-label">{{$t("用户名")}}</span>
                </div>
                <div class="margin-top-5">
                  <el-input v-model="form.username" @keyup.enter.native="login"></el-input>
                </div>
              </div>
              <div class="margin-top-20">
                <div>
                  <span class="login-title-label">{{$t("密码")}}</span>
                </div>
                <div class="margin-top-5">
                  <el-input :show-password="true" v-model="form.password" @keyup.enter.native="login"></el-input>
                </div>
              </div>
            </div>

            <div class="animated fadeInLeft" v-show="userType == 2">
              <div v-if="userSubType == 1">
                <div>
                  <div>
                    <span class="login-title-label">{{$t("用户名/手机号")}}</span>
                  </div>
                  <div class="margin-top-5">
                    <el-input v-model="form.username" @keyup.enter.native="login"></el-input>
                  </div>
                </div>
                <div class="margin-top-20">
                  <div>
                    <span class="login-title-label">{{$t("密码")}}</span>
                  </div>
                  <div class="margin-top-5">
                    <el-input :show-password="true" v-model="form.password" @keyup.enter.native="login"></el-input>
                  </div>
                </div>
              </div>

              <div v-if="userSubType == 3">
                <div>
                  <div>
                    <span class="login-title-label">{{$t("学校编号")}}</span>
                  </div>
                  <div class="margin-top-5">
                    <el-input v-model="form.campusNo" @keyup.enter.native="login"></el-input>
                  </div>
                </div>
                <div class="margin-top-20">
                  <div>
                    <span class="login-title-label">{{$t("工号")}}</span>
                  </div>
                  <div class="margin-top-5">
                    <el-input v-model="form.username" @keyup.enter.native="login"></el-input>
                  </div>
                </div>
                <div class="margin-top-20">
                  <div>
                    <span class="login-title-label">{{$t("密码")}}</span>
                  </div>
                  <div class="margin-top-5">
                    <el-input :show-password="true" v-model="form.password" @keyup.enter.native="login"></el-input>
                  </div>
                </div>
              </div>

              <div v-if="userSubType == 2">
                <div>
                  <div>
                    <span class="login-title-label">{{$t("身份证号码")}}</span>
                  </div>
                  <div class="margin-top-5">
                    <el-input v-model="form.username"></el-input>
                  </div>
                </div>
                <div class="margin-top-20">
                  <div>
                    <span class="login-title-label">{{$t("密码")}}</span>
                  </div>
                  <div class="margin-top-5">
                    <el-input :show-password="true" v-model="form.password" @keyup.enter.native="login"></el-input>
                  </div>
                </div>
              </div>
            </div>

            <div class="margin-top-20">
              <div>
                <el-button type="primary" :loading="dialogLoading" class="login-btn" @click="login">
                  {{$t("登录")}}
                </el-button>
              </div>
            </div>
            <div class="login-bottom-other-block margin-top-40" v-if="userType == 2">
              <div class="line-height"></div>
              <div class="text-center login-bottom-other margin-top-10">
                <label class="color-muted" @click="changeSubType(1)"><i class="fa fa-user-circle-o"></i> {{$t("账号/手机号")}}</label>
                <label class="color-muted" @click="changeSubType(2)"><i class="fa fa-id-card-o"></i> {{$t("身份证")}}</label>
                <label class="color-muted" @click="changeSubType(3)"><i class="fa fa-credit-card"></i> {{$t("工号")}}</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="login-footer">
        <div class="color-muted text-center">
          <span class="font-size-15">Copyright © 2006-2017 All Rights Reserved. 大连网月科技股份有限公司 版权所有 辽ICP备12008717号</span>
        </div>
      </div>
    </div>

    <dialog-normal tabindex="0" :visible="modalVisible" width-style="450px" :title="$t('账户设置')" @close="closeDialog" @right-close="cancelDialog">
      <span tabindex="1"></span>
      <div class="margin-top-10">
        <div class="padding-lr-30">
          <div>
            <span class="color-warning">{{$t("系统检测到您未进行账户激活，需要")}}</span>
          </div>
          <div class="color-grand margin-top-10 font-size-18" style="font-weight: bold">{{$t("绑定手机")}}</div>
          <div class="margin-top-10 color-muted">{{$t("绑定后的手机号可以用于账号登录以及找回密码！")}}</div>
        </div>
        <el-form class="margin-top-20" :model="formAuth" :rules="rules" ref="formAuth" label-width="90px">
          <el-form-item :label="$t('手机号')" prop="phone">
            <el-input v-model="formAuth.phone" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('验证码')" prop="code">
            <el-input v-model="formAuth.code" class="width-260">
              <template slot="append">
                &lt;!&ndash;<timeout-button :action="updatePhoneMms" :data="{newPhone: this.formAuth.phone, userId: this.formAuth.userId}" :auth-before="authBefore">
                <template>{{$t("获取验证码")}}</template>
              </timeout-button>&ndash;&gt;
              </template>
            </el-input>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>
  </div>
</template>

<script>
  import {common} from "../utils/api/url";
  import DialogNormal from "../components/utils/dialog/DialogNormal";
  import TimeoutButton from "../components/utils/button/TimeoutButton";
  import {MessageSuccess, MessageError, getmd5, MessageWarning} from "../utils/utils";
  import loginPhoneValidater from "../utils/validater/loginPhoneValidater";

  export default {
    layout: 'defaultFullScreen',
    mixins: [loginPhoneValidater],
    components: {DialogNormal,TimeoutButton},
    data(){
      return {
        userType: '1',
        userSubType: '1',
        dialogLoading: false,
        modalVisible: false,
        showContent: false,
        updatePhoneMms: common.send_active_account,
        form: {
          username: '',
          password: '',
          campusNo: ''
        },
        formAuth: {
          phone: '',
          code: '',
          userId: ''
        },
        fullHeight: {
          height: ''
        }
      }
    },
    mounted() {
      // 监听窗口大小
      window.onresize = () => {
        this.hh();
      };

      this.showContent = true;
    },
    beforeCreate: function(){
      this.showContent = false;
    },
    created() {
      this.hh();
    },
    methods: {
      hh(){
        if (process.browser) {
          this.fullHeight.height = window.innerHeight + 20 + 'px';
        }
      },
      changeUserType(type){
        this.form.username = "";
        this.form.password = "";
        this.form.campusNo = "";
        this.userType = type;
      },
      changeSubType(type){
        this.form.username = "";
        this.form.password = "";
        this.form.campusNo = "";
        this.userSubType = type;
      },
      login(){
        let userType = "";
        if (this.form.username == "" || this.form.password == ""){
          MessageWarning(this.$t("请输入正确的信息！"));
          return;
        }
        let params = {
          clientType: 0,
          accountType: 0,
          account: this.form.username,
          password: getmd5(this.form.password),
        };
        if (this.userSubType == 3){
          params['campusNo'] = this.form.campusNo;
          params['accountType'] = 1;
        }else if (this.userSubType == 2){
          params['accountType'] = 3;
        }
        if (this.userType == 1){
          userType = 2;
        }if (this.userType == 2){
          userType = 4;
        }
        params['userType'] = userType;
        params = this.$qs.stringify(params);
        this.dialogLoading = true;
        this.$axios.post(common.login_url, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.$router.push("/");
            localStorage.removeItem("menuTabList");
            MessageSuccess(res.data.desc);
          }else if (res.data.code == 2032){
            this.formAuth.userId = res.data.data.userInfo.userId;
            this.modalVisible = true;
          }else {
            MessageError(res.data.desc);
          }
          this.dialogLoading = false;
        });
      },
      closeDialog(event){
        let _self = this;
        this.formAuth = {
          phone: '',
          code: '',
          userId: ''
        };
        if (this.$refs['formAuth']){
          this.$refs['formAuth'].resetFields();
        }
      },
      authBefore(){
        let phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if (this.formAuth.phone == ""){
          MessageWarning(this.$t("请输入正确的手机号"));
          return false;
        }else if (!phoneReg.test(this.formAuth.phone)){
          return false;
        }
        return true;
      },
      okDialog(event){
        let url = "";
        this.$refs['formAuth'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              phone: this.formAuth.phone,
              captcha: this.formAuth.code
            };

            params = this.$qs.stringify(params);
            this.$axios.post(common.set_active_account, params, {loading: false}).then(res => {
              if (res.data.code == 200){
                this.modalVisible = false;
                this.userType = 2;
                this.userSubType = 1;
                this.form.username = "";
                this.form.password = "";
                this.form.campusNo = "";
                MessageSuccess(res.data.desc +","+ this.$t("请使用激活的手机号进行登录！"));
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      cancelDialog(){
        this.modalVisible = false;
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .login-bg-class{
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    min-width: 1200px;
  }
  .login-bg-icon-class{
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translateY(-50%);
    height: 300px;
    width: 350px;
  }
  .login-main-title-class{
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-5%);
  }
  .login-block{
    height: 450px;
    width: 100%;
    min-width: 1200px;
    position: relative;
    top: 13%;
    background: #00CDFF;
    background-image: linear-gradient(to bottom, #00CDFF , #0089D4);
  }
  .login-title{
    height: 88px;
    width: 100%;
    min-width: 1200px;
    position: relative;
    top:-85px;
    left: 0px;
    padding: 0px 0px;
  }
  .login-title-logo-block{
    margin-left: 80px;
  }
  .login-footer{
    height: 80px;
    line-height: 80px;
    width: 100%;
    min-width: 1200px;
    position: relative;
    top:18%;
    left: 0px;
    z-index: 9;
  }
  .login-logo{
    width:300px;
    height: 100%;
  }
  .login-tag-info{
    position: relative;
    bottom: 10px;
  }
  .login-tag-info label{
    padding: 0px 10px;
    font-size: 14px;
  }
  .login-user-opr{
    position: absolute;
    top: -6%;
    right: 8%;
    width: 320px;
    height: 450px;
    background: #FAFAFA;
    padding: 25px 20px;
    box-shadow: 0px 2px 5px rgba(0,0,0,.5);
  }
  .login-user-title{
    color: #0089D4;
    font-weight: bold;
    font-size: 20px;
  }
  .login-title-label{
    color: #515151;
  }
  .login-btn{
    width: 100%;
  }
  .login-bottom-other label{
    padding: 0px 20px;
  }
  .login-main-title-text-class{
    height: 40px;
    width: 400px;
  }
  .login-main-title-icon-left-class{
    height: 40px;
    width: 70px;
  }
  .login-main-title-icon-right-class{
    height: 40px;
    width: 35px;
  }
  .login-bottom-other-block{
    position: absolute;
    left: 0px;
    bottom: 30px;
    width: 100%;
    padding: 0px 0px;
  }
  .login-user-change-tag{
    position: absolute;
    right: 0px;
    top: 0px;
    color: #fefefe;
    font-size: 12px;
    background: #E6A23C;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 2px 8px;
  }
  .left-bottom-triangle{
    width: 0;
    height: 0;
    border-top: 23px solid #909399;
    border-right: 18px solid transparent;
    position: absolute;
    bottom: 0px;
    right: -19px;
  }
  .right-bottom-triangle{
    width: 0;
    height: 0;
    border-top: 23px solid #909399;
    border-left: 18px solid transparent;
    position: absolute;
    bottom: 0px;
    left: -19px;
  }
  .right-top-triangle{
    width: 0;
    height: 0;
    border-bottom: 27px solid #909399;
    border-right: 18px solid transparent;
    position: absolute;
    top: 0px;
    right: -18px;
  }
  .left-top-triangle{
    width: 0;
    height: 0;
    border-bottom: 27px solid #909399;
    border-left: 18px solid transparent;
    position: absolute;
    top: 0px;
    left: -18px;
  }
</style>
