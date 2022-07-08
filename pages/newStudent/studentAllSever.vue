<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-col span="4">
        <div class="text-left padding-lr-10 color-white">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
            </span>
        </div>
      </van-col>
      <van-col span="16">
        <div class="text-center color-white font-size-16 font-bold">
          <span>{{$t('全部环节')}}</span>
        </div>
      </van-col>
      <van-col span="4">
        &nbsp;
      </van-col>
    </div>
    <div :style="divHeight10">
      <div>
        <van-grid :gutter="10">
          <van-grid-item v-for="(item, index) in serverAppList" :key="index" icon="photo-o" @click="serverBlock($event, item)">
            <div slot="icon" class="text-center">
              <van-image width="30" height="30" :src="item.link_logo"/>
            </div>
            <div slot="text" class="moon-content-text-ellipsis-class margin-top-10 text-center font-size-12" style="width: 60px">{{ item.link_name }}</div>
          </van-grid-item>
<!--          <van-grid-item :text="$t('报道单')"  @click="serverBlock($event, 'order')">-->
<!--            <div slot="icon">-->
<!--              <van-icon size="30" name="user-circle-o" />-->
<!--            </div>-->
<!--            <div slot="text" class="moon-content-text-ellipsis-class margin-top-10 text-center font-size-12" style="width: 60px">{{ $t("报道单") }}</div>-->
<!--          </van-grid-item>-->
        </van-grid>
      </div>
    </div>

    <van-dialog v-model="showSign" :showConfirmButton="false" :close-on-click-overlay="true">
      <div class="padding-lr-10 padding-tb-10">
        <div>
          <el-form label-width="100px">
            <el-form-item :label="$t('核验人员')" prop="phone">
              <label>{{formSign.checkUserName}}</label>
            </el-form-item>
            <el-form-item :label="$t('报道类型')" prop="phone">
              <label v-if="formSign.checkType == 0">{{$t("人工")}}</label>
              <label v-if="formSign.checkType == 1">{{$t("扫码")}}</label>
              <label v-if="formSign.checkType == 2">{{$t("人脸")}}</label>
              <label v-if="formSign.checkType == 3">{{$t("自动")}}</label>
            </el-form-item>
            <el-form-item :label="$t('是否准时')" prop="phone">
              <label v-if="formSign.onTime">{{$t("是")}}</label>
              <label v-if="!formSign.onTime">{{$t("否")}}</label>
            </el-form-item>
            <el-form-item :label="$t('报道时间')" prop="phone">
              <label>{{$moment(formSign.checkTime).format("YYYY-MM-DD HH:mm")}}</label>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </van-dialog>
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
        serverAppList: [],
        showSign: false,
        detailData: '',
        formSign: {
          id: '',
          onTime: '',
          checkTime: '',
          checkType: '',
          checkUserName: ''
        }
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
      async initAppServer(){
        await this.getSessionInfo();
        this.initStudentEnroll();
      },
      initStudentEnroll(){
        let params = {
          userId: this.loginUserId,
        };
        this.$axios.get(common.server_enroll_app_process_current, {params: params}).then(res => {
          if (res.data.data){
            this.serverAppList = res.data.data.linkList;
          }
        });
      },
      initSign(){
        let params = {
          userId: this.loginUserId,
        };
        this.$axios.get(common.server_enroll_app_student_checkin_get, {params: params}).then(res => {
          if (res.data.data){
            this.formSign = {
              id: '',
              onTime: res.data.data.on_time,
              checkTime: res.data.data.check_time,
              checkType: res.data.data.check_type,
              checkUserName: res.data.data.check_user_name,
            };
          }
        });
      },
      serverBlock(event, item){
        if (item == 'all'){
          this.$router.push({
            path: '/newStudent/studentAllSever',
            query: {
              id: item.id,
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              subPage: '/newStudent/studentAllSever'
            }
          });
        }else if (item == 'order'){
          this.$router.push({
            path: '/newStudent/studentOrder',
            query: {
              id: item.id,
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              subPage: '/newStudent/studentAllSever'
            }
          });
        }else if (item.link_sub_type == 0){
          this.$router.push({
            path: '/newStudent/studentStation',
            query: {
              id: item.id,
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              subPage: '/newStudent/studentAllSever'
            }
          });
        }else if (item.link_sub_type == 4){
          this.$router.push({
            path: '/newStudent/studentInfo',
            query: {
              id: item.id,
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              subPage: '/newStudent/studentAllSever'
            }
          });
        }else if (item.link_sub_type == 3){
          this.$router.push({
            path: '/newStudent/studentBill',
            query: {
              id: item.id,
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              subPage: '/newStudent/studentAllSever'
            }
          });
        }else if (item.link_sub_type == 2){
          this.$router.push({
            path: '/newStudent/studentDorm',
            query: {
              id: item.id,
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              subPage: '/newStudent/studentAllSever'
            }
          });
        }else if (item.link_sub_type == 5){
          this.$router.push({
            path: '/newStudent/studentOrder',
            query: {
              id: item.id,
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              subPage: '/newStudent/studentAllSever'
            }
          });
        }else if (item.link_sub_type == 9){
          this.$router.push({
            path: '/newStudent/studentForm',
            query: {
              id: item.id,
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              linkId: item.id,
              subPage: '/newStudent/studentAllSever'
            }
          });
        }else if (item.link_sub_type == 1){
          this.initSign();
          this.showSign = true;
        }
      },
      returnIndex(){
        this.$router.push({
          path: '/newStudent/studentIndex',
          query: {
            activeType: this.$route.query.activeType,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow
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
