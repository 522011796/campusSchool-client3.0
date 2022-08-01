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
        <van-col span="16" class="text-center">
<!--          <van-tabs v-model="active" @click="activeTabMenu" type="card" class="padding-top-10" color="#1EA084" title-active-color="#ffffff" title-inactive-color="#ffffff" background="#949494">-->
<!--            <van-tab name="6">-->
<!--              <span slot="title" class="font-size-12">{{$t('推荐服务')}}</span>-->
<!--            </van-tab>-->
<!--            <van-tab name="0">-->
<!--              <span slot="title" class="font-size-12">{{$t('学生办事')}}</span>-->
<!--            </van-tab>-->
<!--            <van-tab name="1">-->
<!--              <span slot="title" class="font-size-12">{{$t('老师办事')}}</span>-->
<!--            </van-tab>-->
<!--            <van-tab name="2">-->
<!--              <span slot="title" class="font-size-12">{{$t('单位办事')}}</span>-->
<!--            </van-tab>-->
<!--          </van-tabs>-->
          <span class="color-white font-size-14 font-bold">{{$t('全部服务')}}</span>
        </van-col>
        <van-col span="4">
          &nbsp;
        </van-col>
      </van-row>
    </div>
    <div class="content-block">
      <form action="/">
        <van-row>
          <van-col :span="16">
            <van-search v-model="serchName" placeholder="请输入服务名称" @input="onSearch" @clear="onClear"/>
          </van-col>
          <van-col :span="8" class="text-right">
            <el-select class="margin-right-10" style="margin-top: 11px" v-model="categoryId" size="small" placeholder="请选择" @change="dropdownItem">
              <el-option label="全部" value=""></el-option>
              <el-option v-for="(item, index) in categoryMixinsList" :key="index" :label="item.categoryName" :value="item.id"></el-option>
            </el-select>
          </van-col>
        </van-row>
      </form>
      <div :style="divHeight9">
        <div class="pull-left info-block-left">
          <template>
            <div class="info-block-header text-center" @click="selMenu($event, '')">
              <span>{{$t("全部")}}</span>
            </div>
            <div class="custom-el-menu" :style="{height: divHeight10.height1-90 +'px', overflowY: 'auto'}">
              <el-menu
                :default-active="defaultMenuActive"
                background-color="#f2f2f2"
                text-color="#909399"
                active-text-color="#909399"
                class="el-menu-vertical-demo custon-nav-menu">
                <template v-for="(item, index) in dataDept">
                  <el-submenu v-if="item.child_list.length > 0" :index="index+''">
                    <div style="width: 100%" slot="title" @click="selMenu($event, item, index)">
                      <span class="moon-content-text-ellipsis-class" style="width: 55px;display: inline-block">{{ item.department_name }}</span>
                    </div>
                    <el-menu-item-group v-if="item.child_list.length > 0">
                      <el-menu-item v-for="(itemChild, indexChild) in item.child_list" :key="indexChild" :index="index+'-'+indexChild" @click="selMenu($event, itemChild, index+'-'+indexChild)">
                        <span class="moon-content-text-ellipsis-class" style="width: 55px;display: inline-block">{{ itemChild.department_name }}</span>
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item v-else :index="index+''" @click="selMenu($event, item, index)">
                    <span class="moon-content-text-ellipsis-class" style="width: 55px;display: inline-block">{{ item.department_name }}</span>
                  </el-menu-item>
                </template>
              </el-menu>
            </div>
          </template>
        </div>
        <div class="info-block-right">
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
        serchName: '',
        defaultMenuActive: '',
        dormTreeList: [],
        departmentPath: '',
        activeTypeText: '类别',
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
      this.getDeptInfo(2);
      this.initCategoryList();
      if (this.active == 6){
        this.initAppRecommend();
      }else {
        this.initAppServer();
      }
    },
    methods: {
      layoutInit(){

      },
      initAppRecommend(value){
        let params = {
          appletId: this.appletId,
          categoryId: this.categoryId,
          departmentPath: this.departmentPath,
          formType: '',
          searchKey: this.searchKey
        };
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
      initServer(data){
        let params = {
          appletId: this.appletId,
          appletType: this.active,
          categoryId: this.categoryId,
          departmentPath: this.departmentPath,
          formType: '',
          searchKey: this.searchKey
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
          // this.$router.push({
          //   path: '/app/appServer',
          //   query: {
          //     id: item.id,
          //     activeType: this.active,
          //     userType: this.loginUserAppType,
          //     navH: this.navHeight,
          //     appType: this.globalAppShow,
          //     page: '/app/appAllServer'
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
              page: '/app/appAllServer'
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
      selMenu(event, item, index){
        this.departmentPath = item.department_path;
        this.appletType = this.active;
        this.defaultMenuActive = index + '';
        if (this.active == 6){
          this.initAppRecommend();
        }else {
          this.initServer();
        }
      },
      returnIndex(){
        this.$router.push({
          path: '/app/appIndex',
          query: {
            activeType: 6,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow
          }
        });
      },
      onSearch(value){
        console.log(value);
        // if (this.active == 6){
        //   this.initAppRecommend(value);
        // }else {
        //   this.initAppServer(value);
        // }
        this.searchKey = value;
        if (this.active == 6){
          this.initAppRecommend(value);
        }else {
          this.initServer(value);
        }
      },
      dropdownItem(item){
        this.categoryId = item;
        if (this.active == 6){
          this.initAppRecommend();
        }else {
          this.initServer();
        }
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
.info-block-left{
  width: 100px;
  border-right: 1px solid #F2F6FC;
}
.info-block-right{
  margin-left: 100px;
  height: 100%;
}
.info-block-header{
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  color: #909399;
  background: #f2f2f2;
}
</style>
