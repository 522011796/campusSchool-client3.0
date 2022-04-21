<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-row>
        <van-col span="4">
          <div class="text-left padding-lr-10 color-white">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
            </span>
          </div>
        </van-col>
        <van-col span="16">
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
          </van-tabs>
        </van-col>
        <van-col span="4">
          &nbsp;
        </van-col>
      </van-row>
    </div>
    <div class="content-block">
      <form action="/">
        <van-search v-model="serchName" placeholder="请输入服务名称" @input="onSearch" @clear="onClear"/>
      </form>
      <div class="margin-top-5" :style="divHeight9">
        <van-grid :gutter="10">
          <van-grid-item v-for="(item, index) in serverAppList" :key="index" icon="photo-o" @click="serverBlock($event, item)">
            <div slot="icon" class="text-center">
              <van-image width="30" height="30" :src="item.form_logo"/>
            </div>
            <div slot="text" class="moon-content-text-ellipsis-class margin-top-10 text-center" style="width: 60px">{{ item.form_name }}</div>
          </van-grid-item>
        </van-grid>
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
        noticeAppList: [],
        serchName: ''
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
      if (this.active == 6){
        this.initAppRecommend();
      }else {
        this.initAppServer();
      }
    },
    methods: {
      layoutInit(){

      },
      initAppRecommend(){
        let params = {};
        this.$axios.get(common.server_list_list3, {params: params}).then(res => {
          if (res.data.data){
            this.serverAppList = res.data.data;
          }
        });
      },
      initAppServer(value){
        let params = {
          appletType: this.active,
          searchKey: value
        };
        this.$axios.get(common.server_list_list, {params: params}).then(res => {
          if (res.data.data){
            this.serverAppList = res.data.data;
          }
        });
      },
      serverBlock(event, item){
        if (item == 'all'){

        }else {
          this.$router.push({
            path: '/app/appServer',
            query: {
              id: item.id,
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow
            }
          });
        }
      },
      activeTabMenu(name){
        this.noticeAppList = [];
        this.serverAppList = [];
        this.serchName = '';
        if (name == 5){
          this.$router.push({
            path: '/app/appMyNotice',
            query: {
              id: parseInt(name),
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow
            }
          });
        }else if (name == 6){
          this.active = name;
          this.initAppRecommend();
        }else {
          this.active = name;
          this.initAppServer();
        }
      },
      returnIndex(){
        this.$router.push({
          path: '/app/appIndex',
          query: {
            activeType: this.$route.query.activeType,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow
          }
        });
      },
      onSearch(value){
        console.log(value);
        this.initAppServer(value);
      },
      onClear(){

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
