<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block color-white" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-row>
        <van-col span="6">
          <div class="text-left padding-lr-10">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
              {{$t("返回")}}
            </span>
          </div>
        </van-col>
        <van-col span="12">
          <div class="text-center">
            <span class="font-bold">{{$t("扫码记录")}}</span>
          </div>
        </van-col>
        <van-col span="6">
          &nbsp;
        </van-col>
      </van-row>
    </div>
    <div style="margin-top:0px;">
      <form action="/">
        <van-row>
          <van-col :span="12">
            <van-search v-model="serchName" placeholder="请输入姓名/录取号" @input="onSearch" @clear="onClear"/>
          </van-col>
          <van-col :span="12">
            <div class="layout-inline">
              <el-select class="layout-item margin-right-5" style="margin-top: 11px;width: 80px" v-model="typeId" size="small" placeholder="请选择" @change="dropdownItem">
                <el-option v-for="(item, index) in typeList" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
              <el-input class="layout-item" size="small" style="width: 100px"></el-input>
            </div>
          </van-col>
        </van-row>
      </form>
      <div class="content-block" :style="divHeight9">
        <div class="content-block-item padding-lr-10 padding-tb-10">
          <el-row>
            <el-col :span="18">
              <div class="font-size-16 font-bold color-sub-title">
                <span>[xxx]</span>
                <span>[xxx]</span>
                <span>[xxx]</span>
                <span>[xxx]</span>
              </div>
              <div class="margin-top-10 color-muted font-size-14">
                <span>2022-01-01 11:11:11</span>
              </div>
            </el-col>
            <el-col :span="4" class="text-center">
              <i class="fa fa-check-circle color-success margin-top-20" style="font-size: 15"></i>
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
  import mixinsBridge from "~/utils/mixinsBridge";
  export default {
    name: 'detailIndex',
    layout: 'defaultAppScreen',
    mixins: [mixins,mixinsBridge],
    data(){
      return {
        active: 6,
        topHeight: 0,
        serverAppList: [],
        noticeAppList: [],
        pageType: '',
        userId: '',
        detailData: '',
        tablePayData: [],
        serchName: '',
        typeId: '',
        typeList: [
          {label: '全部', value: ''},
          {label: '报到', value: '1'},
          {label: '缴费', value: '2'}
        ],
        searchKey: '',
      }
    },
    mounted() {

    },
    created() {
      this.userId = this.$route.query.userId;
      this.topHeight = this.navHeight > 0 ? (parseInt(0) + parseInt(this.navHeight)) : 10;
      if (this.$route.query.sessionId){
        this.initAppConfig();
      }else{
        this.pageType = this.$route.query.type ? this.$route.query.type : 'server';
        this.initAppServer();
      }
    },
    methods: {
      layoutInit(){

      },
      async initAppConfig(){
        await this.autoLoginApp();
        //await this.getSessionInfo();
        setTimeout(()=>{
          this.initAppServer();
        },1000);
      },
      initAppServer(){
        this.initInfo();
      },
      initInfo(){
        let params = {
          userId: this.userId
        };
        this.$axios.get(common.enroll_checkin_student_detail2, {params: params}).then(res => {
          if (res.data.data){
            this.detailData = res.data.data;
          }
        });
      },
      onSearch(value){
        this.searchKey = value;
      },
      onClear(){

      },
      dropdownItem(data){
        this.typeId = data;
      },
      returnIndex(){
        this.$router.push({
          path: '/studentDetail/detailIndex',
          query: {
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId,
            userId: this.$route.query.sessionId,
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
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  background: #f5f5f5;
  width: 100%;
  position: relative;
}
.content-block-item{
  border-radius: 5px;
  background: #EBEEF5;
  height: 50px;
  margin: 10px 10px;
}
</style>
