<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-col span="2">
        <div class="text-left padding-lr-10 color-white" v-if="globalAppShow && globalAppShow != ''">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
            </span>
        </div>
        <div v-else>
          &nbsp;
        </div>
      </van-col>
      <van-col span="20">
        <div class="text-center color-white font-size-16 font-bold">
          <span>{{$t('智慧迎新')}}</span>
        </div>
      </van-col>
      <van-col span="2">
        &nbsp;
      </van-col>
    </div>
    <div class="content-block">
      <div class="padding-lr-10">
        <div class="bg-student-info-block">
          <div class="padding-lr-5 padding-top-5">
            <van-row>
              <van-col span="16">
                <div class="color-muted font-bold font-size-12 text-left">
                  <span>
                    <label class="color-success">{{currentEnrollYear}}</label>
                    <label class="color-warning">{{$t("迎新倒计时")}}:{{currentEnrollTime}}</label>
                  </span>
                </div>
              </van-col>
              <van-col span="8">
                <div class="color-muted font-bold font-size-12 text-right">
                  <van-tag type="danger">
                    {{ $t("所有环节") }}
                    :
                    <label>{{ $t("已完成") }}</label>
                  </van-tag>
                </div>
              </van-col>
            </van-row>
            <van-row class="margin-top-20">
              <van-col span="8">
                <div>
                  <van-image width="100" height="120" :src="headLogo" />
                </div>
              </van-col>
              <van-col span="8">
                <div>
                  <el-tooltip class="item" effect="dark" :content="realName" placement="top">
                    <span class="font-size-20 color-sub-title moon-content-text-ellipsis-class name-display-line font-bold">{{ realName }}</span>
                  </el-tooltip>
                  <span class="color-grand margin-left-5 font-bold" v-if="sex == 1">
                    <van-tag type="success" size="mini">
                      <label class="fa fa-mars"></label>
                    </van-tag>
                  </span>
                  <span class="color-grand margin-left-5 font-bold" v-if="sex == 2">
                    <van-tag type="success" size="mini">
                      <label class="fa fa-venus"></label>
                    </van-tag>
                  </span>
                </div>
                <div class="margin-top-10">
                  <span class="color-sub-title font-bold">{{$t("学号")}}</span>
                  <span class="color-muted moon-content-text-ellipsis-class text-display-line">
                    <el-tooltip class="item" effect="dark" :content="stuNo" placement="top-start">
                      <span>{{ stuNo }}</span>
                    </el-tooltip>
                  </span>
                </div>
                <div class="margin-top-5">
                  <span class="color-sub-title font-bold">{{$t("学院")}}</span>
                  <span class="color-muted moon-content-text-ellipsis-class text-display-line">
                    <el-tooltip class="item" effect="dark" :content="collegeName" placement="top-start">
                      <span>{{ collegeName }}</span>
                    </el-tooltip>
                  </span>
                </div>
              </van-col>
              <van-col span="8">
                <div class="text-center color-muted">
                  <div>
                    <van-icon name="qr" size="90"/>
                  </div>
                  <div class="font-size-12 margin-top-5">
                    <span>{{$t("我的二维码")}}</span>
                  </div>
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
      <div :style="divHeight11">
        <div class="margin-top-10">
          <van-grid :gutter="10">
            <van-grid-item :text="$t('流程引导')"  @click="serverBlock($event, 'flow')">
              <div slot="icon">
                <van-icon size="30" name="label-o" />
              </div>
              <div slot="text" class="moon-content-text-ellipsis-class margin-top-10" style="width: 60px">{{ $t("流程引导") }}</div>
            </van-grid-item>
            <van-grid-item v-for="(item, index) in serverAppList" :key="index" v-if="index < 6" icon="photo-o" @click="serverBlock($event, item)">
              <div slot="icon" class="text-center">
                <van-image width="30" height="30" :src="item.link_logo"/>
              </div>
              <div slot="text" class="moon-content-text-ellipsis-class margin-top-10 text-center" style="width: 60px">{{ item.link_name }}</div>
            </van-grid-item>
            <van-grid-item :text="$t('全部环节')"  @click="serverBlock($event, 'all')">
              <div slot="icon">
                <van-icon size="30" name="apps-o" />
              </div>
              <div slot="text" class="moon-content-text-ellipsis-class margin-top-10" style="width: 60px">{{ $t("全部环节") }}</div>
            </van-grid-item>
          </van-grid>
        </div>

        <div class="margin-top-20 padding-lr-10">
          <div>
            <van-row>
              <van-col span="12">
                <div class="text-left">
                  <span class="app-title-border-tag"></span>
                  <span class="font-bold" style="position: relative;top: -8px">{{$t("迎新公告")}}</span>
                </div>
              </van-col>
              <van-col span="12">
                <div class="text-right">
                  <i class="fa fa-list font-size-14" style="position: relative;top: 5px"></i>
                </div>
              </van-col>
            </van-row>
          </div>
          <div class="margin-top-5">
            <van-empty v-if="noticeAppList.length == 0" image-size="60" description="暂无数据" />
            <div v-else class="notice-list-item border-bottom-1" v-for="(item, index) in noticeAppList" :key="index">
              <van-row>
                <van-col span="12">
                  <div class="text-left moon-content-text-ellipsis-class">
                    <span>x</span>
                  </div>
                </van-col>
                <van-col span="12">
                  <div class="text-right color-muted">
                    <span>x</span>
                  </div>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>

        <div class="margin-top-20 padding-lr-10">
          <div>
            <van-row>
              <van-col span="12">
                <div class="text-left">
                  <span class="app-title-border-tag"></span>
                  <span class="font-bold" style="position: relative;top: -8px">{{$t("常见问题")}}</span>
                </div>
              </van-col>
              <van-col span="12">
                <div class="text-right">
                  <i class="fa fa-list font-size-14" style="position: relative;top: 5px"></i>
                </div>
              </van-col>
            </van-row>
          </div>
          <div class="margin-top-5">
            <van-empty v-if="askAppList.length == 0" image-size="80" description="暂无数据" />
            <div v-else class="notice-list-item border-bottom-1" v-for="(item, index) in askAppList" :key="index">
              <van-row>
                <van-col span="12">
                  <div class="text-left moon-content-text-ellipsis-class">
                    <span></span>
                  </div>
                </van-col>
                <van-col span="12">
                  <div class="text-right color-muted">
                    <span></span>
                  </div>
                </van-col>
              </van-row>
            </div>
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
    name: 'studentIndex',
    layout: 'defaultAppScreen',
    mixins: [mixins,mixinsBridge],
    data(){
      return {
        sex: '',
        active: 6,
        serverAppList: [],
        noticeAppList: [],
        askAppList: [],
        currentEnrollYear: '',
        currentEnrollTime: '00天00时00分00秒',
        collegeName: '',
        majorName: '',
        className: '',
        stuNo: '',
        headLogo: '',
      }
    },
    mounted() {

    },
    created() {
      this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
      if (this.$route.query.sessionId){
        this.initAppConfig();
      }
      this.getCureentEnrollInfo();
      this.initAppServer();
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
      async initAppServer(){
        await this.getSessionInfo();
        this.collegeName = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes) ? this.sessionData.LOGIN_RETURN_INFO.classes.collegeName : '';
        this.className = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes) ? this.sessionData.LOGIN_RETURN_INFO.classes.className : '';
        this.stuNo = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.student) ? this.sessionData.LOGIN_RETURN_INFO.student.studentId : '';
        this.majorName = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes) ? this.sessionData.LOGIN_RETURN_INFO.classes.majorName : '';
        this.sex = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.sex) ? this.sessionData.LOGIN_RETURN_INFO.sex : '';
        this.headLogo = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.studentPhoto) ? this.sessionData.LOGIN_RETURN_INFO.studentPhoto : '';
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
      getCureentEnrollInfo(){
        let params = {};
        this.$axios.get(common.enroll_current_time, {params: params}).then(res => {
          if (res.data.data){
            this.currentEnrollYear = res.data.data.enrollName;
            this.setTimeLoop(res.data.data.endTime)
          }
        });
      },
      setTimeLoop(data){
        let time =this.$moment(data).diff(this.$moment())
        if(time <= 0){
          clearInterval(this.timer);
          return
        }
        let t = time / 1000;
        let d = Math.floor(t / (24 * 3600));  //剩余天数，如果需要可以自行补上
        let h = Math.floor((t - 24 * 3600 * d) / 3600) + d*24;  //不需要天数，把天数转换成小时
        let _h = Math.floor((t - 24 * 3600 * d) / 3600)  //保留天数后得小时
        let m = Math.floor((t - 24 * 3600 * d - _h * 3600) / 60);
        let s = Math.floor((t - 24 * 3600 * d - _h * 3600 - m * 60));

        let hh = String(h).length == 1? '0'+String(h):String(h)
        let mm = String(m).length == 1? '0'+String(m):String(m)
        let ss = String(s).length == 1? '0'+String(s):String(s)


        this.currentEnrollTime = d + "天" + _h + "小时" + mm + "分";
      },
      serverBlock(event, item){
        if (item == 'all'){

        }else if (item.link_sub_type == 4){
          this.$router.push({
            path: '/newStudent/studentInfo',
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
</style>
