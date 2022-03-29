<template>
  <div class="moon-container">
    <div class="moon-top-menu">
      <div class="pull-left moon-top-logo moon-top-logo-shadow animated fadeInLeftBig">
        <span class="color-white moon-top-logo-title">
          <img src="~static/img/system-logo.png" style="height: 50px;width: 220px;position: relative; top: 5px;left: -10px">
        </span>
      </div>
      <div class="pull-right moon-top-right">
        <el-popover
          popper-class="custom-user-popover"
          placement="bottom"
          transition="zoom-in-center"
          trigger="hover"
          :visible-arrow="false">

          <div>
            <div class="moon-top-user-info-container">
              <template>
                <template v-if="loginUserType == 2">
                  <div class="moon-top-user-info-item">
                    <i class="fa fa-user-circle"></i>
                    <span>{{loginUserName}}</span>
                  </div>
                  <div class="moon-top-user-info-item">
                    <i class="fa fa-flag"></i>
                    <span>{{$t("管理员")}}</span>
                  </div>
                </template>
                <template v-if="loginUserType == 4">
                  <div class="moon-top-user-info-item">
                    <i class="fa fa-id-card"></i>
                    <span>{{userJobNum}}</span>
                  </div>
                  <div class="moon-top-user-info-item">
                    <i class="fa fa-users"></i>
                    <span>{{organizeName}}</span>
                  </div>
                </template>
              </template>
            </div>
<!--            <div class="moon-top-user-info-opr">-->
<!--              <el-row>-->
<!--                <el-col :span="12" @click.native="updatePhoneInfo">-->
<!--                  <div>-->
<!--                    <a href="javascript:;" class="color-white font-size-12">-->
<!--                      <i class="fa fa-phone"></i>-->
<!--                      {{$t("修改手机")}}-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </el-col>-->
<!--                <el-col :span="12" @click.native="updatePwdInfo">-->
<!--                  <div>-->
<!--                    <a href="javascript:;" class="color-white font-size-12">-->
<!--                      <i class="fa fa-lock"></i>-->
<!--                      {{$t("修改密码")}}-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </el-col>-->
<!--              </el-row>-->
<!--            </div>-->
            <div class="moon-top-user-info-opr">
              <el-row>
                <el-col :span="24">
                  <div>
                    <a href="javascript:;" class="color-white">{{$t("退出")}}</a>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>

          <span slot="reference">
            <label class="moon-top-right-item top-18" @click="myInfo">
              <el-avatar size="small" v-if="headImage != undefined" :src="headImage"></el-avatar>
              <el-avatar size="small" v-else src="/img/head-boy.png"></el-avatar>
            </label>
          </span>
        </el-popover>
      </div>

      <div class="moon-top-middle-menu">
        <div class="moon-top-middle-menu-title">
          <div style="display: inline-block" :style="topWidth">
            <span class="moon-top-middle-menu-item margin-right-20">

            </span>
            <span class="moon-top-middle-menu-item-text" @click="menuClick">
              <label class="item moon-top-middle-menu-item-text-active font-bold">{{$t("办事大厅")}}</label>
            </span>
          </div>

          <div class="pull-right">
            <span class="moon-top-middle-menu-title-icon">
              <my-input-button ref="teacher width-150" size="mini" plain width-class="width: 180px" :clearable="true" :placeholder="$t('服务名称')" @click="search"></my-input-button>
            </span>
            <span class="moon-top-middle-menu-title-icon">
              <el-button size="mini" class="el-button--0CB5AF">
                <i class="fa fa-tags"></i>
                {{$t("课表")}}
              </el-button>
            </span>
            <span class="moon-top-middle-menu-title-icon">
              <el-button size="mini" class="el-button--0CB5AF">
                <i class="fa fa-bell"></i>
                {{$t("消息")}}
              </el-button>
            </span>
          </div>
          <div class="moon-clearfix"></div>
        </div>
      </div>
      <div class="moon-clearfix"></div>
    </div>
    <div style="position: relative">
      <div v-if="showContent == false" style="position: relative">
        <layout-lr-before></layout-lr-before>
      </div>

      <template v-if="showContent == true">
        <div class="block-top" :style="divHeight1">
          <img src="~static/img/bg.png" style="height: 100%;width: 100%">
        </div>
        <div class="block-bottom" :style="divHeight2"></div>
        <div class="block-main">
          <nuxt ref="childRef"></nuxt>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import mixins from '../utils/mixins';
  import {MessageSuccess, MessageError, MessageWarning, inArray} from "../utils/utils";
  import {common} from "../utils/api/url";
  import MyInputButton from "~/components/search/MyInputButton";
  export default {
    name: 'default',
    mixins: [mixins],
    components: {MyInputButton},
    computed: {

    },
    data(){
      return {
        layout: 'lr',
        showContent: false,
        dialogCustomLoading: false,
        modalPhoneCustomVisible: false,
        modalPwdCustomVisible: false,
        activeTabName: 'all',
        menuTabList: [],
        form: {
          name: '',
          logo: '',
          admin: '',
          phone: '',
          address: '',
          no: '',
          remarks: '',
          imgs: []
        },
        formPhone: {
          hiePhone: '',
          oldPhone: '',
          newPhone: '',
          phoneCode: '',
        },
        formPwd: {
          phone: '',
          phoneCode: '',
          pwd: ''
        },
        topWidth: {
          width: '0px'
        }
      }
    },
    mounted () {
      let rightWidth = this.loginUserType == 2 ? 540 : 540;
      this.screenWidth = document.body.clientWidth;
      let width = document.querySelector(".moon-top-middle-menu-title").clientWidth;
      this.topWidth.width = width - rightWidth + 'px';
      // 监听窗口大小
      window.onresize = () => {
        this.hh();
        this.screenWidth = document.body.clientWidth;
        let width = document.querySelector(".moon-top-middle-menu-title").clientWidth;
        this.topWidth.width = width - rightWidth + 'px';
      };
      this.showContent = true;
    },
    beforeCreate: function(){
      this.showContent = false;
    },
    created() {
      this.hh();
      this.init();
    },
    methods: {
      hh(){
        if (process.browser) {

        }
      },
      async init() {
        await this.getSessionInfo();
      },
      search(data){
        this.initServer(data);
      },
      updatePhoneInfo(){
        if (this.loginUserPhone && this.loginUserPhone != ""){
          let phone = this.loginUserPhone;
          this.formPhone.hidePhone = phone.substr(0,3)+"****"+phone.substr(7);
        }
        this.modalPhoneCustomVisible = true;
      },
      updatePwdInfo(){
        if (this.loginUserPhone && this.loginUserPhone != ""){
          let phone = this.loginUserPhone;
          this.formPwd.phone = phone.substr(0,3)+"****"+phone.substr(7);
        }
        this.modalPwdCustomVisible = true;
      },
      updatePhone(){
        this.$refs['formPhone'].validate((valid) => {
          if (valid) {
            let params = {};
            let url = "";
            if (this.loginUserType == 4){
              params = {
                phone: this.formPhone.oldPhone,
                captcha: this.formPhone.phoneCode,
                userId: this.loginUserId,
                username: this.loginUserName,
                appcode: 12,
              };
              url = common.updatephone_save;
            }else{
              params = {
                newPhone: this.formPhone.newPhone,
                captcha: this.formPhone.phoneCode,
                phone: this.loginUserPhone,
              };
              url = common.updatephone_admin_save_url;
            }
            params = this.$qs.stringify(params);
            this.loading = true;
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.modalPhoneCustomVisible = false;
                MessageSuccess(res.data.desc);
              }else{
                MessageWarning(res.data.desc);
              }
              this.loading = false;
            });
          }
        });
      },
      updatePwd(){
        this.$refs['formPwd'].validate((valid) => {
          if (valid) {
            let url = common.updatepwd_admin_save_pass;
            let params = {
              pass: this.formPwd.pwd,
              captcha: this.formPwd.phoneCode
            };
            if (this.loginUserType == 4){
              params = {
                userId: this.loginUserId,
                password: this.formPwd.pwd,
                appcode: 12,
                captcha: this.formPwd.phoneCode
              };
              url = common.updatepwd_save;
            }
            params = this.$qs.stringify(params);
            this.loading = true;
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                MessageSuccess(res.data.desc);
              }else{
                MessageWarning(res.data.desc);
              }
              this.loading = false;
            });
          }
        });
      },
      myInfo(){
        this.$router.push({
          path: '/myInfo',
          query: {

          }
        });
      },
      menuClick(){
        this.$router.push({
          path: '/',
          query: {

          }
        });
      }
    }
  }
</script>

<style scoped>
.header-block{
  height: 60px;
  line-height: 60px;
  background: #C0C4CC;
}

.moon-top-right .item{
  font-size: 20px;
  color: #FFFFFF;
  position: relative;
  top: 6px;
  margin-right: 10px;
  margin-left: 10px;
}
.moon-top-middle-menu-item{
  position: relative;
  top: 2px;
  font-size: 15px;
  color: #FFFFFF;
  margin-left: 20px;
}
.moon-top-middle-menu-item-text{
  position: relative;
  font-size: 17px;
  color: #FFFFFF;
  margin-left: 0px;
  opacity: 1;
  height: 50px;
  line-height: 50px;
  top: 10px;
  width: 90px;
  display: inline-block;
}
.moon-top-middle-menu-item-text-active:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: calc(50% - 45px);
  width: 70px;
  height: 3px;
  background: #E6A23C;
}
.moon-top-middle-menu-info{
  background: #C0C4CC;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 8px 10px;
  position: relative;
  top: 15px;
  margin-left: 20px;
  font-size: 12px;
  color: #FFFFFF;
}
.moon-top-right-item{
  position: relative;
  color: #FFFFFF;
  font-weight: bold;
}
.moon-top-right-item-eliplse{
  display: inline-block;
  max-width: 55px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  position: relative;
  top: 5px;
}
.moon-top-right-item.top-18{
  top: 18px;
}
.moon-top-right-item.top-6{
  top: 6px;
}
.moon-top-user-info-container{
  padding: 10px 15px;
  color: #fefefe;
}
.moon-top-user-info-item{
  padding:5px 0px;
}
.moon-top-user-info-opr{
  border-top: 1px solid #E4E7ED;
  text-align: center;
  padding: 5px 0px;
  color: #E6A23C;
  cursor: default;
}
.campus-info-container{
  background: #FFFFFF;
  padding: 20px 20px;
  margin: 20px 20px;
  border-radius: 4px;
}
.moon-top-middle-menu-title-icon{
  position: relative;
  top: 18px;
}
.moon-top-middle-menu-title-icon-item{
  font-size: 12px;
  color: #FFFFFF;
  border: 1px solid #dddddd;
  border-radius: 5px;
  display: inline-block;
  background: #67C23A;
  height: 25px;
  line-height: 25px;
}
.moon-top-middle-menu-title-icon .item{
  margin-left: 20px;
}
</style>
