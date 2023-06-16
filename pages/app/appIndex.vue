<template>
  <div class="container">
<!--    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>-->
<!--    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">-->
<!--      <van-col span="2">-->
<!--        <div class="text-left padding-lr-10 color-white" v-if="globalAppShow && globalAppShow != ''">-->
<!--            <span class="font-bold font-size-14" @click="returnIndex">-->
<!--              <i class="fa fa-chevron-left"></i>-->
<!--            </span>-->
<!--        </div>-->
<!--        <div v-else>-->
<!--          &nbsp;-->
<!--        </div>-->
<!--      </van-col>-->
<!--      <van-col span="20">-->
<!--        <van-tabs v-model="active" @click="activeTabMenu" type="card" class="padding-top-10" color="#1EA084" title-active-color="#ffffff" title-inactive-color="#ffffff" background="#949494">-->
<!--          <van-tab name="6">-->
<!--            <img src="~static/img/student_user_icon.png" style="height: 50px;width: 50px">-->
<!--            <span slot="title" class="font-size-12">{{$t('推荐服务')}}</span>-->
<!--          </van-tab>-->
<!--          <van-tab name="0">-->
<!--            <span slot="title" class="font-size-12">{{$t('学生办事')}}</span>-->
<!--          </van-tab>-->
<!--          <van-tab name="1">-->
<!--            <span slot="title" class="font-size-12">{{$t('老师办事')}}</span>-->
<!--          </van-tab>-->
<!--          <van-tab name="2">-->
<!--            <span slot="title" class="font-size-12">{{$t('单位办事')}}</span>-->
<!--          </van-tab>-->
<!--          <van-tab name="5">-->
<!--          <span slot="title" class="font-size-12">-->
<!--            <i class="fa fa-send"></i>-->
<!--            {{$t('待办')}}-->
<!--          </span>-->
<!--          </van-tab>-->
<!--        </van-tabs>-->
<!--      </van-col>-->
<!--      <van-col span="2">-->
<!--        &nbsp;-->
<!--      </van-col>-->
<!--    </div>-->
    <div style="position: relative">
      <div style="position: relative;height: 180px">
        <img src="~static/img/banner_school_app.png" style="width: 100%; position: absolute" :style="{height: (180 + parseInt(navHeight)) + 'px'}">
        <div v-if="globalAppShow && globalAppShow != ''" class="padding-lr-10 color-white" style="position: absolute; left: 5px" :style="{top: topHeight + 'px'}">
          <span class="font-bold font-size-20" @click="returnIndex">
            <i class="fa fa-chevron-left"></i>
            <label class="font-size-14" style="position: relative; top: -3px;">{{$t("返回")}}</label>
          </span>
        </div>
        <div v-if="loginUserAppType != 5 && loginUserType != 5" style="position: absolute;right: 30px;" :style="{top: topHeight+5 + 'px'}" @click="activeTabMenu(6)">
          <img src="~static/img/static_icon.png" style="width: 30px; height: 30px">
        </div>
        <div class="padding-lr-10" style="position: relative;top:120px; z-index: 99">
          <div class="header-tab-block">
            <van-row>
              <van-col :span="6" class="text-center" style="height: 65px;" @click="activeTabMenu(0)">
                <div class="margin-top-10">
                  <img src="~static/img/student_user_icon.png" style="height: 45px;width: 45px">
                </div>
                <div class="font-size-12">
                  {{$t('学生办事')}}
                </div>
              </van-col>
              <van-col :span="6" class="text-center" @click="activeTabMenu(1)">
                <div class="margin-top-10">
                  <img src="~static/img/teacher_user_icon.png" style="height: 45px;width: 45px">
                </div>
                <div class="font-size-12">
                  {{$t('老师办事')}}
                </div>
              </van-col>
              <van-col :span="6" class="text-center" @click="activeTabMenu(2)">
                <div class="margin-top-10">
                  <img src="~static/img/dept_user_icon.png" style="height: 45px;width: 45px">
                </div>
                <div class="font-size-12">
                  {{$t('单位办事')}}
                </div>
              </van-col>
              <van-col :span="6" class="text-center" @click="activeTabMenu(5)">
                <div class="margin-top-10">
                  <img src="~static/img/dept_user_icon.png" style="height: 45px;width: 45px">
                </div>
                <div class="font-size-12">
                  {{$t('我的待办')}}
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </div>
    <div class="content-block" :style="divHeight3">
      <div class="margin-top-60 padding-lr-10">
        <div>
          <van-row>
            <van-col span="12">
              <div class="text-left">
                <span class="app-title-border-tag"></span>
                <span class="font-bold" style="position: relative;top: -10px">{{$t("推荐服务")}}</span>
              </div>
            </van-col>
            <van-col span="12">
              <div class="text-right">
<!--                <i class="fa fa-list font-size-14" style="position: relative;top: 5px"></i>-->
                &nbsp;
              </div>
            </van-col>
          </van-row>
        </div>
<!--        <van-grid :gutter="5">-->
<!--          <van-grid-item v-for="(item, index) in serverAppList" :key="index" icon="photo-o" @click="serverBlock($event, item)">-->
<!--            <div slot="icon" class="text-center">-->
<!--              <van-image width="30" height="30" :src="item.form_logo"/>-->
<!--            </div>-->
<!--            <div slot="text" class="moon-content-text-ellipsis-class margin-top-10 text-center" style="width: 60px">{{ item.form_name }}</div>-->
<!--          </van-grid-item>-->
<!--          <van-grid-item :text="$t('全部服务')"  @click="serverBlock($event, 'all')">-->
<!--            <div slot="icon">-->
<!--              <van-icon size="30" name="apps-o" />-->
<!--            </div>-->
<!--            <div slot="text" class="moon-content-text-ellipsis-class margin-top-10" style="width: 60px">{{ $t("全部服务") }}</div>-->
<!--          </van-grid-item>-->
<!--        </van-grid>-->
        <el-row :gutter="8" class="margin-top-10 padding-lr-10">
          <el-col :span="6" v-for="(item, index) in serverAppList" :key="index" @click.native="serverBlock($event, item)">
            <div class="margin-bottom-5 text-center padding-tb-10" style="border: 1px solid #dddddd;border-radius: 5px;height: 75px">
              <div style="height: 35px;width: 35px;margin: 0 auto;margin-top: 2px">
                <van-image width="35" height="35" :src="item.form_logo"/>
              </div>
              <div class="margin-top-8">
                <div style="width: 70px;margin: 0 auto;">
                  <div class="text-center;font-family: Simsun,sans-serif,'Helvetica Neue'">
                    <div v-if="item.form_name.length <= 5" class="font-size-12 text-center;font-family: Simsun,sans-serif,'Helvetica Neue'">
                      {{ item.form_name }}
                    </div>
                    <div v-else class="font-size-12" style="margin-left:2px;display: inline-block;text-align: left;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;text-overflow: ellipsis;overflow : hidden;font-family: Simsun,sans-serif,'Helvetica Neue'">
                      {{ item.form_name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6" @click.native="serverBlock($event, 'all')">
            <div class="margin-bottom-5 text-center padding-tb-10" style="border: 1px solid #dddddd;border-radius: 5px;height: 75px">
              <div style="height: 35px;width: 35px;margin: 0 auto;margin-top: 2px">
                <van-icon size="35" name="apps-o" />
              </div>
              <div class="margin-top-8">
                <div style="width: 70px;margin: 0 auto;">
                  <div class="font-size-12 text-center;font-family: Simsun,sans-serif,'Helvetica Neue'">
                    {{ $t('全部服务') }}
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="margin-top-20 padding-lr-10">
        <div>
          <van-row>
            <van-col span="12">
              <div class="text-left">
                <span class="app-title-border-tag"></span>
                <span class="font-bold" style="position: relative;top: -10px">{{$t("通知公告")}}</span>
              </div>
            </van-col>
            <van-col span="12">
              <div class="text-right">
                <i class="fa fa-list font-size-14" style="position: relative;top: 5px"></i>
              </div>
            </van-col>
          </van-row>
        </div>
        <div class="margin-top-10" :style="divHeight5">
          <van-empty v-if="noticeAppList.length == 0" description="暂无数据" />
          <div v-else class="notice-list-item border-bottom-1" v-for="(item, index) in noticeAppList" :key="index">
            <van-row>
              <van-col span="12">
                <div class="text-left moon-content-text-ellipsis-class">
                  <span>xxxxxxxxxxxxx{{index}}</span>
                </div>
              </van-col>
              <van-col span="12">
                <div class="text-right color-muted">
                  <span>2022-11-11 11:11:11</span>
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  import mixinsBridge from "~/utils/mixinsBridge";
  export default {
    name: 'appIndex',
    layout: 'defaultAppScreen',
    mixins: [mixins,mixinsBridge],
    data(){
      return {
        active: 6,
        topHeight: 0,
        serverAppList: [],
        noticeAppList: [],
        pageType: '',
      }
    },
    mounted() {

    },
    created() {
      this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
      this.topHeight = this.navHeight > 0 ? (parseInt(0) + parseInt(this.navHeight)) : 10;

      if (this.$route.query.sessionId){
        this.initAppConfig();
      }else{
        this.pageType = this.$route.query.type ? this.$route.query.type : 'server';
        if (process.browser) {
          let pageType = localStorage.getItem("pageType");
          localStorage.setItem("pageType", this.pageType);
        }

        if (this.active == 6){
          this.initAppRecommend();
        }else {
          this.initAppServer();
        }
      }
    },
    methods: {
      layoutInit(){

      },
      async initAppConfig(){
        await this.autoLoginApp();
        //await this.getSessionInfo();
        setTimeout(()=>{
          if (this.active == 6){
            this.initAppRecommend();
          }else {
            this.initAppServer();
          }
        },1000);
      },
      initAppRecommend(){
        let params = {};
        this.$axios.get(common.server_list_list3, {params: params}).then(res => {
          if (res.data.data){
            this.serverAppList = res.data.data;
          }
        });
      },
      initAppServer(){
        let params = {
          appletType: this.active,
        };
        this.$axios.get(common.server_list_list, {params: params}).then(res => {
          if (res.data.data){
            this.serverAppList = res.data.data;
          }
        });
      },
      serverBlock(event, item){
        if (item == 'all'){
          this.$router.push({
            path: '/app/appAllServer',
            query: {
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              sessionId: this.$route.query.sessionId
            }
          });
        }else {
          // this.$router.push({
          //   path: '/app/appServer',
          //   query: {
          //     id: item.id,
          //     activeType: this.active,
          //     userType: this.loginUserAppType,
          //     navH: this.navHeight,
          //     appType: this.globalAppShow
          //   }
          // });
          this.$router.push({
            path: '/app/appServerForm',
            query: {
              id: item.id,
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId,
              page: '/app/appIndex'
            }
          });
        }
      },
      activeTabMenu(name){
        this.noticeAppList = [];
        this.serverAppList = [];
        if (name == 5) {
          this.$router.push({
            path: '/app/appMyNotice',
            query: {
              id: parseInt(name),
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              sessionId: this.$route.query.sessionId
            }
          });
        // }else if (name == 6){
        //   this.active = name;
        //   this.initAppRecommend();
        // }else {
        //   this.active = name;
        //   this.initAppServer();
        }else if(name == 6){
          this.$router.push({
            path: '/app/appStatic',
            query: {
              id: parseInt(name),
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              sessionId: this.$route.query.sessionId
            }
          });
        }else if(name == 2){
          this.$router.push({
            path: '/app/appOtherServer',
            query: {
              id: parseInt(name),
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              sessionId: this.$route.query.sessionId
            }
          });
        }else {
          this.active = name;
          this.$router.push({
            path: '/app/appAllServer',
            query: {
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              sessionId: this.$route.query.sessionId
            }
          });
        }
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
  line-height: 60px;
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
