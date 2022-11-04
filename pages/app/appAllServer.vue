<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-row>
        <van-col span="5">
          <div class="text-left padding-lr-10 color-white header-class">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
              {{$t("返回")}}
            </span>
          </div>
        </van-col>
        <van-col span="14" class="text-center header-class" style="position: relative">
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
        <van-col span="5" class="text-right header-class">
          <div class="text-right padding-lr-10">
            <div v-if="loginUserAppType != 5 && loginUserType != 5" style="position: relative; top: 5px;" @click="activeTabMenu(7)">
              <img src="~static/img/static_icon.png" style="width: 30px; height: 30px">
            </div>
            <span v-else>&nbsp;</span>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="content-block">
      <template>
        <div class="moon-left-menu-tag" :style="toggleTag">
          <div class="moon-left-menu-tag-container">
            <div class="moon-left-menu-tag_indicator" @click="isCollapse == true ? toggleLeftMenu($event) : toggleRightMenu($event)">
              <i class="fa fa-chevron-left" :class="isCollapse == true ? 'icon-class-left' : 'icon-class-right'"></i>
            </div>
          </div>
        </div>

        <div class="moon-left-toogle-menu info-block-left" :style="leftHeight">
          <template>
            <div v-if="isCollapse == true" class="info-block-header text-center" @click="selMenu($event, '')">
              <span class="info-block-header-text">{{$t("全部")}}</span>
            </div>
            <div class="custom-el-menu" :style="{height: divHeight10.height1-50 +'px', overflowY: 'auto'}">
              <el-menu
                :default-active="defaultMenuActive"
                background-color="#f2f2f2"
                text-color="#909399"
                active-text-color="#909399"
                class="el-menu-vertical-demo custon-nav-menu">
                <template v-for="(item, index) in dataDept">
                  <el-submenu v-if="item.child_list.length > 0" :index="index+''">
                    <div style="width: 100%" slot="title" @click="selMenu($event, item, index)">
                      <span class="moon-content-text-ellipsis-class main-menu-class" style="width: 100%;display: inline-block">{{ item.department_name }}</span>
                    </div>
                    <el-menu-item-group v-if="item.child_list.length > 0">
                      <el-menu-item v-for="(itemChild, indexChild) in item.child_list" :key="indexChild" :index="index+'-'+indexChild" @click="selMenu($event, itemChild, index+'-'+indexChild)">
                        <span class="moon-content-text-ellipsis-class sub-menu-class" style="width: 100%;display: inline-block">{{ itemChild.department_name }}</span>
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item v-else :index="index+''" @click="selMenu($event, item, index)">
                    <span class="moon-content-text-ellipsis-class  sub-menu-class" style="width: 100%;display: inline-block">{{ item.department_name }}</span>
                  </el-menu-item>
                </template>
              </el-menu>
            </div>
          </template>
        </div>
      </template>
      <form action="/">
        <van-row>
          <van-col :span="10" class="text-left">
            <van-search v-model="serchName" :show-action="true" placeholder="服务名称" @search="onSearch" @clear="onClear">
              <span slot="left-icon">

              </span>
              <span slot="action" class="custom-button-small">
                <el-button type="success" size="small" @click="onSearch">
                  <i class="fa fa-search"></i>
                </el-button>
              </span>
            </van-search>
          </van-col>
          <van-col :span="14" class="text-right">
            <div class="layout-inline" style="position:relative;">
              <el-select class="layout-item" style="margin-top: 11px;width: 100px" v-model="categoryId" size="small" placeholder="请选择" @change="dropdownItem">
                <el-option label="全部" value=""></el-option>
                <el-option v-for="(item, index) in categoryMixinsList" :key="index" :label="item.categoryName" :value="item.id"></el-option>
              </el-select>
              <el-button style="margin-top: 11px;margin-right: 2px;width: 65px" class="layout-item moon-content-text-ellipsis-class" size="small" type="default" plain native-type="button" @click="isCollapse == true ? toggleLeftMenu($event) : toggleRightMenu($event)">{{departmentName != "" && departmentName != null ? departmentName : $t('部门')}}</el-button>
              <span v-if="departmentPath != '' && departmentPath != null" class="fa fa-times-circle color-muted margin-right-5 layout-item" style="position: relative; top: 2px;font-size: 15px" @click="clearSearchDept"></span>
            </div>
          </van-col>
        </van-row>
      </form>
      <div :style="divHeight9" style="position: relative">
        <div class="info-block-right">
<!--          <van-grid :gutter="10">-->
<!--            <van-grid-item class="margin-bottom-5" v-for="(item, index) in serverAppList" :key="index" icon="photo-o" @click="serverBlock($event, item)">-->
<!--              <div slot="icon" class="text-center">-->
<!--                <div style="height: 30px;width: 30px">-->
<!--                  <van-image width="30" height="30" :src="item.form_logo"/>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div slot="text" class="margin-top-10">-->
<!--                <div class="text-center" style="width: 75px;margin: 0 auto;font-family: Menlo, Monaco, 'Courier New', monospace">-->
<!--                  {{ item.form_name }}撒123-->
<!--                </div>-->
<!--              </div>-->
<!--            </van-grid-item>-->
<!--          </van-grid>-->
          <el-row :gutter="8" class="margin-top-10 padding-lr-10">
            <el-col :span="6" v-for="(item, index) in serverAppList" :key="index" @click.native="serverBlock($event, item)">
              <div class="margin-bottom-5 text-center padding-tb-10" style="border: 1px solid #dddddd;border-radius: 5px;height: 75px">
                <div style="height: 35px;width: 35px;margin: 0 auto;margin-top: 2px">
                  <van-image width="35" height="35" :src="item.form_logo"/>
                </div>
                <div class="margin-top-8">
                  <div style="width: 70px;margin: 0 auto;">
                    <div v-if="item.form_name.length <= 5" class="font-size-12 text-center;font-family: Simsun,sans-serif,'Helvetica Neue'">
                      {{ item.form_name }}
                    </div>
                    <div v-else class="font-size-12" style="margin-left:2px;display: inline-block;text-align: left;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;text-overflow: ellipsis;overflow : hidden;font-family: Simsun,sans-serif,'Helvetica Neue'">
                      {{ item.form_name }}
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
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
        departmentName: '',
        activeTypeText: '类别',
        isCollapse: false,
        leftHeight: {
          'height': '100%',
          'width': '0%'
        },
        toggleTag: {
          'left': '0'
        }
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
      document.addEventListener("click", this.bodyCloseMenus);
    },
    beforeDestroy() {
      document.removeEventListener("click", this.bodyCloseMenus);
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
      bodyCloseMenus(event){
        if (event.target.className.indexOf("info-block-right") != -1
          || event.target.className.indexOf("van-grid") != -1
          || event.target.className.indexOf("van-grid") != -1
          || event.target.className.indexOf("fa-times-circle") != -1
          || event.target.className.indexOf("header-class") != -1
          || event.target.className.indexOf("sub-menu-class") != -1
          || event.target.className.indexOf("info-block-header") != -1
          || event.target.className.indexOf("info-block-header-text") != -1
          ){
          this.isCollapse = false;
          this.toggleLeftMenu();
        }
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
        }else if (name == 7){
          this.active = name;
          this.$router.push({
            path: '/app/appStatic',
            query: {
              id: parseInt(name),
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              sessionId: this.$route.query.sessionId,
              page: '/app/appAllServer'
            }
          });
        }else {
          this.active = name;
          this.initAppServer();
        }
      },
      selMenu(event, item, index){
        this.departmentPath = item.department_path;
        this.appletType = this.active;
        this.defaultMenuActive = index + '';
        this.departmentName = item.department_name;
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
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
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
        this.searchKey = this.serchName;
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
        this.isCollapse = false;
        this.toggleLeftMenu();
      },
      onClear(){
        this.searchKey = "";
        this.serchName = "";
        if (this.active == 6){
          this.initAppRecommend(this.searchKey);
        }else {
          this.initServer(this.searchKey);
        }
      },
      toggleLeftMenu(event){
        this.isCollapse = false;
        this.leftHeight.width = "0%";
        this.toggleTag['left'] = "0px";
      },
      toggleRightMenu(event){
        this.isCollapse = true;
        this.leftHeight.width = "50%";
        this.toggleTag['left'] = "50%";
      },
      clearSearchDept(){
        this.departmentPath = "";
        this.defaultMenuActive = '';
        this.page = 1;
        this.tableData = [];
        this.departmentName = "";
        if (this.active == 6){
          this.initAppRecommend();
        }else {
          this.initServer();
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
.info-block-left{
  width: 50%;
  border-right: 1px solid #F2F6FC;
}
.info-block-right{
  margin-left: 0px;
  height: 100%;
}
.info-block-header{
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  color: #909399;
  background: #e9e9e9;
}
.moon-left-menu-tag{
  position: absolute;
  top: 0;
  bottom: 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  left: 50%;
  transition: all .2s ease-in-out;
  z-index: 99;
}
.moon-left-menu-tag .moon-left-menu-tag-container {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}
.moon-left-menu-tag .moon-left-menu-tag_indicator {
  margin-top: -44.5px;
  width: 15px;
  height: 40px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #EBEEF5;
  border-radius: 0 4px 4px 0;
  border: 1px solid #e5e5e5;
  border-left-color: transparent;
  opacity: 1;
  /*transition-property: background-color,opacity;*/
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  color: #dddddd;
  padding-right: 2px;
}
.moon-left-menu-tag_indicator:hover{
  background: rgb(160, 207, 255);
  color: #FFFFFF;
}
.moon-left-toogle-menu{
  border-right: 1px solid #dcdee2;
  /*overflow-y: auto;*/
  float: left;
  box-shadow: 2px 0px 4px #bbbbbb;
  position: relative;
  background: #f2f2f2;
  background-image: linear-gradient(to bottom, #f2f2f2 , #f2f2f2);
  padding: 0px 0px;
  position: fixed;
  transition: all .2s ease-in-out;
  user-select: none;
  z-index: 99;
}
.icon-class-left{
  color: #dddddd;
  transform: rotate(0deg);
}
.icon-class-right{
  transform: rotate(180deg);
}
</style>
