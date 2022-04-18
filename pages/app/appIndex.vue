<template>
  <div class="container">
    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-tabs v-model="active" @click="activeTabMenu" type="card" class="padding-top-10" color="#1EA084" title-active-color="#ffffff" title-inactive-color="#ffffff" background="#949494">
        <van-tab name="6">
          <span slot="title" class="font-size-12">{{$t('推荐服务')}}</span>
        </van-tab>
        <van-tab name="0">
          <span slot="title" class="font-size-12">{{$t('学生办事')}}</span>
        </van-tab>
        <van-tab name="1">
          <span slot="title" class="font-size-12">{{$t('老师办事')}}</span>
        </van-tab>
        <van-tab name="2">
          <span slot="title" class="font-size-12">{{$t('单位办事')}}</span>
        </van-tab>
        <van-tab name="5" v-if="loginUserAppType == 4">
          <span slot="title" class="font-size-12">
            <i class="fa fa-send"></i>
            {{$t('待办事项')}}
          </span>
        </van-tab>
      </van-tabs>
    </div>
    <div class="content-block" :style="divHeight3">
      <div class="margin-top-30">
        <van-grid :gutter="10">
          <van-grid-item v-for="(item, index) in serverAppList" :key="index" icon="photo-o" @click="serverBlock($event, item)">
            <div slot="icon" class="text-center">
              <van-image width="30" height="30" :src="item.form_logo"/>
            </div>
            <div slot="text" class="moon-content-text-ellipsis-class margin-top-10 text-center" style="width: 60px">{{ item.form_name }}</div>
          </van-grid-item>
          <van-grid-item :text="$t('全部服务')"  @click="serverBlock($event, 'all')">
            <div slot="icon">
              <van-icon size="30" name="apps-o" />
            </div>
            <div slot="text" class="moon-content-text-ellipsis-class margin-top-10" style="width: 60px">{{ $t("全部服务") }}</div>
          </van-grid-item>
        </van-grid>
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
                  <span>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
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
  export default {
    name: 'appIndex',
    layout: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        active: 6,
        serverAppList: [],
        noticeAppList: []
      }
    },
    mounted() {

    },
    created() {
      this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
      if (this.$route.query.sessionId){
        this.initAppConfig();
      }
      if (this.active == 6){
        this.initAppRecommend();
      }else {
        this.initAppServer();
      }
    },
    methods: {
      layoutInit(){

      },
      async initAppConfig(){
        await this.autoLoginApp();
        //await this.getSessionInfo();
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
              userType: this.loginUserAppType
            }
          });
        }else {
          this.$router.push({
            path: '/app/appServer',
            query: {
              id: item.id,
              activeType: this.active,
              userType: this.loginUserAppType
            }
          });
        }
      },
      activeTabMenu(name){
        this.noticeAppList = [];
        this.serverAppList = [];
        if (name == 5){
          this.$router.push({
            path: '/app/appMyNotice',
            query: {
              id: parseInt(name),
              userType: this.loginUserAppType
            }
          });
        }else if (name == 6){
          this.active = name;
          this.initAppRecommend();
        }else {
          this.active = name;
          this.initAppServer();
        }
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
  height: 30px;
  background: #1EA084;
  display: inline-block;
}
.notice-list-item{
  height: 45px;
  line-height: 45px;
}
</style>
