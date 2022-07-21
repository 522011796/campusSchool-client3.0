<template>
  <div class="moon-container">
    <div class="moon-top-menu min-width-1200">
      <div class="pull-left moon-top-logo moon-top-logo-shadow animated fadeInLeftBig">
        <span class="color-white moon-top-logo-title">
          <img src="~static/img/system-logo.png" style="height: 50px;width: 220px;position: relative; top: 5px;left: -10px">
        </span>
      </div>
      <div class="pull-right moon-top-right">
        <el-popover
          v-if="loginStatusInfo == true"
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
                <template v-if="loginUserType == 5">
                  <div class="moon-top-user-info-item">
                    <i class="fa fa-user-circle"></i>
                    <span>{{realName}}</span>
                  </div>
                  <div class="moon-top-user-info-item">
                    <i class="fa fa-id-card"></i>
                    <span>{{loginUserName}}</span>
                  </div>
                </template>
              </template>
            </div>
            <div class="moon-top-user-info-opr">
              <el-row>
                <el-col :span="12">
                  <div v-if="loginStatusInfo == true" @click="myInfo">
                    <a href="javascript:;" class="color-white font-size-12">
                      <i class="fa fa-user"></i>
                      {{$t("个人中心")}}
                    </a>
                  </div>
                  <div v-else>
                    &nbsp;
                  </div>
                </el-col>
                <el-col :span="12" @click.native="logout">
                  <div>
                    <a href="javascript:;" class="color-white font-size-12">
                      <i class="fa fa-sign-out"></i>
                      {{$t("退出")}}
                    </a>
                  </div>
                </el-col>
              </el-row>
            </div>
<!--            <div class="moon-top-user-info-opr">-->
<!--              <el-row>-->
<!--                <el-col :span="24" @click.native="logout">-->
<!--                  <div>-->
<!--                    <a href="javascript:;" class="color-white">{{$t("退出")}}</a>-->
<!--                  </div>-->
<!--                </el-col>-->
<!--              </el-row>-->
<!--            </div>-->
          </div>

          <span slot="reference">
            <label class="moon-top-right-item top-18">
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
            <span class="moon-top-middle-menu-item-text" @click="menuClick($event, 'index')">
              <label class="item font-bold" :class="activeMenu == 'index' ? 'moon-top-middle-menu-item-text-active' : ''">{{$t("办事大厅")}}</label>
            </span>
            <span v-if="loginUserType == '' || loginUserType == 5" class="moon-top-middle-menu-item-text" @click="menuClick($event, 'student')">
              <label class="item font-bold" :class="activeMenu == 'student' ? 'moon-top-middle-menu-item-text-active' : ''">{{$t("智慧迎新")}}</label>
            </span>
          </div>

          <div class="pull-right margin-right-5">
            <span class="moon-top-middle-menu-title-icon" v-if="searchServerBlock == true">
<!--              <my-input-button ref="teacher width-150" size="mini" plain width-class="width: 180px" :clearable="true" :placeholder="$t('服务名称')" @click="search"></my-input-button>-->
              <el-autocomplete
                suffix-icon="el-input__icon el-icon-search"
                size="mini"
                class="inline-input"
                v-model="inputValue"
                :fetch-suggestions="querySearch"
                :placeholder="$t('服务名称')"
                :trigger-on-focus="false"
                @select="handleSelect"
              >
              </el-autocomplete>
            </span>
<!--            <span class="moon-top-middle-menu-title-icon" v-if="loginStatusInfo == true">-->
<!--              <el-button size="mini" class="el-button&#45;&#45;0CB5AF">-->
<!--                <i class="fa fa-tags"></i>-->
<!--                {{$t("课表")}}-->
<!--              </el-button>-->
<!--            </span>-->
<!--            <span class="moon-top-middle-menu-title-icon" v-if="loginStatusInfo == true">-->
<!--              <el-button size="mini" class="el-button&#45;&#45;0CB5AF" @click="myInfo">-->
<!--                <i class="fa fa-bell"></i>-->
<!--                {{$t("消息")}}-->
<!--              </el-button>-->
<!--            </span>-->
            <span class="moon-top-middle-menu-title-icon" v-if="loginStatusInfo == false">
              <el-button size="mini" type="success" @click="loginPage">
                <i class="fa fa-user"></i>
                {{$t("登录")}}
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
        <div class="block-top min-width-1200" :style="divHeight1">
          <img src="~static/img/bg.png" style="height: 100%;width: 100%">
        </div>
<!--        <div class="block-bottom min-width-1200" :style="divHeight2"></div>-->
        <div class="block-main">
          <nuxt ref="childRef"></nuxt>
        </div>
      </template>
    </div>

    <dialog-normal top="10vh" width-style="550px" :visible="!dialogTime" :title="$t('提示')">
      <div style="height: 100px;" class="text-center">
        <div class="fa fa-info-circle margin-top-20 color-warning" style="font-size: 30px"></div>
        <div class="margin-top-10">
          {{enrollMsg}}
        </div>
      </div>
      <div slot="footer">
        <el-button size="small" @click="closeTimeDialog">{{$t("关闭")}}</el-button>
      </div>
    </dialog-normal>
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
        dialogTime: true,
        activeTabName: 'all',
        menuTabList: [],
        inputValue: '',
        searchServerBlock: true,
        activeMenu: 'index',
        enrollAllow: false,
        enrollMsg: '',
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
      this.activeMenu = this.$route.query.menu ? this.$route.query.menu : 'index';
      this.hh();
      this.init();
      if (this.$route.query.menu == 'student'){
        this.queryStudentTimeInfo();
      }
    },
    methods: {
      hh(){
        if (process.browser) {

        }
      },
      async init() {
        await this.getLoginStatus();
        if (this.loginStatusInfo == true){
          await this.getSessionInfo();
        }
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
      menuClick($event, type){
        if (type == 'index'){
          this.activeMenu = type;
          this.$router.push({
            path: '/',
            query: {
              menu: 'index'
            }
          });
        }else if (type == 'student'){
          this.queryStudentTimeInfo(type);
        }
      },
      queryStudentTimeInfo(type){
        let params = {};
        this.$axios.get(common.enroll_student_current_time, {loading: false}).then(res => {
          if (res.data.data){
            this.dialogTime = res.data.data.enrollAllow;
            this.enrollMsg = res.data.data.enrollMsg;

            if (res.data.data.enrollAllow == true){
              this.activeMenu = type;
              this.$router.push({
                path: '/student',
                query: {
                  menu: 'student'
                }
              });
            }
          }
        });
      },
      querySearch(queryString, cb) {
        let params = {
          searchKey: queryString,
        };
        this.$axios.get(common.server_list_list, {params: params, loading: false}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              res.data.data[i]['value'] = res.data.data[i].form_name;
            }
            cb(res.data.data);
          }
        });
      },
      handleSelect(item) {
        this.$refs.childRef.$children[0].serverClick(null, item);
      },
      loginPage(){
        this.$router.push({
          path: '/login'
        });
      },
      logout(){
        this.$axios.post(common.logout_url).then(res => {
          if (res.data.code == 200){
            this.$router.push("/login");
          }
        });
      },
      closeDialog(){
        this.dialogTime = false;
      },
      cancelDialog(){
        this.dialogTime = false;
      },
      closeTimeDialog(){
        this.dialogTime = true;
        this.activeMenu = 'index';
        this.$router.push({
          path: '/',
          query: {
            menu: 'index'
          }
        });
      }
    },
    watch: {
      '$route': function (to, from) {//监听路由变化,为了浏览器点击后退和前进也能切换菜单选中
        this.$nextTick(() => {
          this.activeMenu = this.$route.query.menu;
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
  width: 100px;
  display: inline-block;
}
.moon-top-middle-menu-item-text-active:after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: calc(0%);
  width: 65px;
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
