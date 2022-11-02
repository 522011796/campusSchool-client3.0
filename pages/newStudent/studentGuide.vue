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
          <span>{{$t('流程引导')}}</span>
        </div>
      </van-col>
      <van-col span="4">
        &nbsp;
      </van-col>
    </div>
    <div :style="divHeight10">
      <div class="top-block">
        <div class="text-center padding-tb-10">
          <van-image
            round
            width="8rem"
            height="8rem"
            :src="headImg"
          />
        </div>
        <div class="text-center margin-top-5">
          <span class="font-size-18 font-bold">{{ realName }}</span>
        </div>
      </div>

      <div class="margin-top-30">
        <div class="text-center item-main-block" style="position: relative" v-for="(item, index) in serverAppList">
          <i v-if="item.status" class="fa fa-check-circle color-success" style="font-size: 20px"></i>
          <i v-if="!item.status" class="fa fa-circle color-muted" style="font-size: 20px"></i>
          <template>
            <div class="line-v-block"></div>
            <div class="item-block moon-content-text-ellipsis-class" @click="serverBlock($event, item)" :class="[index % 2 == 0 ? 'item-block-even' : 'item-block-odd', item.status ? 'item-true color-sub-grand' : 'item-false color-muted']">
              <span class="font-size-12">{{ item.link_name }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>

    <van-dialog v-model="showSign" :showConfirmButton="false" :close-on-click-overlay="true">
      <div class="padding-lr-10 padding-tb-10">
        <div>
          <el-form label-width="100px">
            <el-form-item :label="$t('核验人员')" prop="phone">
              <label>{{formSign.checkUserName}}</label>
            </el-form-item>
            <el-form-item :label="$t('报到类型')" prop="phone">
              <label v-if="formSign.checkType == 0">{{$t("人工")}}</label>
              <label v-if="formSign.checkType == 1">{{$t("扫码")}}</label>
              <label v-if="formSign.checkType == 2">{{$t("人脸")}}</label>
              <label v-if="formSign.checkType == 3">{{$t("自动")}}</label>
            </el-form-item>
            <el-form-item :label="$t('是否准时')" prop="phone">
              <label v-if="formSign.onTime">{{$t("是")}}</label>
              <label v-if="!formSign.onTime">{{$t("否")}}</label>
            </el-form-item>
            <el-form-item :label="$t('报到时间')" prop="phone">
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
        headImg: '',
        realname: '',
        detailData: '',
        showSign: false,
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
        this.studentDetailInfo();
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
      studentDetailInfo(userId) {
        let params = {

        };
        this.$axios.get(common.enroll_student_detail, {params: params}).then(res => {
          if (res.data.data) {
            this.headImg = res.data.data.photo_simple;
            this.realName = res.data.data.real_name;
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
              subPage: '/newStudent/studentGuide'
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
              subPage: '/newStudent/studentGuide'
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
              subPage: '/newStudent/studentGuide'
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
              subPage: '/newStudent/studentGuide'
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
              subPage: '/newStudent/studentGuide'
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
              subPage: '/newStudent/studentGuide'
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
              dormSelType: item.ruleTypeInfo.rule_type,
              ruleId: item.ruleTypeInfo.rule_id,
              pacRegions: JSON.stringify(item.ruleTypeInfo.pacRegions),
              subPage: '/newStudent/studentGuide'
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
              subPage: '/newStudent/studentGuide'
            }
          });
        }else if (item.link_sub_type == 1){
          this.initSign();
          this.showSign = true;
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
.top-block{
  background-image: linear-gradient(to top, #FFFFFF,#4BC66B);
}
.line-v-block{
  width: 1px;
  border-left: 1px dashed #4BC66B;
  height: 70px;
  margin: 5px auto;
}
.item-block{
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  width: 100px;
}
.item-main-block .item-block-odd{
  position: absolute;
  top: -7px;
  left: 55%;
}
.item-main-block .item-block-even{
  position: absolute;
  top: -7px;
  right: 55%;
}
.item-false{
  border: 1px solid #E4E7ED;
}
.item-true{
  border: 1px solid #4BC66B;
}
</style>
