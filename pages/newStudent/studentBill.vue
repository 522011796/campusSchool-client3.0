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
          <span>{{$t('财务缴费')}}</span>
        </div>
      </van-col>
      <van-col span="4">
        <van-button size="small" type="warning" plain native-type="button" @click="payManage($event, 1)">{{$t("去支付")}}</van-button>
      </van-col>
    </div>
    <div class="content-block" :style="divHeight10">
      <div class="margin-top-20 padding-lr-10">
        <div>
          <van-row>
            <van-col span="12">
              <div class="text-left">
                <span class="app-title-border-tag"></span>
                <span class="font-bold" style="position: relative;top: -8px">{{$t("基本信息")}}</span>
              </div>
            </van-col>
            <van-col span="12">
              <div class="text-right">
                <van-button size="small" type="primary" @click="okPayDialog($event)" style="position: relative; top: -5px;">{{$t("已完成缴费")}}</van-button>
              </div>
            </van-col>
          </van-row>
        </div>
        <div class="margin-top-5">
          <table class="custom-table">
            <tbody>
              <tr>
                <td style="width: 15%">{{$t("姓名")}}</td>
                <td style="width: 35%">{{detailData.real_name}}</td>
                <td style="width: 15%">{{$t("性别")}}</td>
                <td style="width: 35%"><my-sex :sex="detailData.sex" tag="text"></my-sex></td>
              </tr>
              <tr>
                <td style="width: 15%">{{$t("录取号")}}</td>
                <td style="width: 35%">{{detailData.student_id}}</td>
                <td style="width: 15%">{{$t("班级")}}</td>
                <td style="width: 35%">{{detailData.class_name}}</td>
              </tr>
              <tr>
                <td style="width: 15%">{{$t("学院")}}</td>
                <td style="width: 35%">{{detailData.college_name}}</td>
                <td style="width: 15%">{{$t("专业")}}</td>
                <td style="width: 35%">{{detailData.major_name}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="margin-top-20 padding-lr-10">
        <div>
          <van-row>
            <van-col span="24">
              <div class="text-left">
                <span class="app-title-border-tag"></span>
                <span class="font-bold" style="position: relative;top: -8px">{{$t("缴费统计")}}</span>
              </div>
            </van-col>
          </van-row>
        </div>
        <div>
          <table class="custom-table">
            <tr>
              <td style="width: 20%">{{$t("应缴总额")}}</td>
              <td style="width: 30%">{{totalAmount}}</td>
              <td style="width: 20%">{{$t("未缴总额")}}</td>
              <td style="width: 30%">{{shouldAmount - paidAmount}}</td>
            </tr>
            <tr>
              <td>{{$t("缓缴")}}</td>
              <td>{{delayAmount}}</td>
              <td>{{$t("贷款")}}</td>
              <td>{{loanAmount}}</td>
            </tr>
            <tr>
              <td>{{$t("减免")}}</td>
              <td>{{deductionAmount}}</td>
              <td>{{$t("已缴")}}</td>
              <td>{{paidAmount}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="margin-top-20 padding-lr-10">
        <div>
          <span class="app-title-border-tag"></span>
          <span class="font-bold" style="position: relative;top: -8px">{{$t("缴费清单")}}</span>
        </div>
        <div class="font-size-12">
          <div class="margin-bottom-5 border-bottom-dashed-1 padding-tb-5 padding-lr-10" v-for="(item, index) in itemUserList" :key="index">
            <div class="margin-top-5">
              <el-row>
                <el-col :span="12">
                  <span class="font-bold color-grand" v-if="item.itemName">{{item.itemName}}</span>
                  <span class="font-bold color-grand" v-else>&nbsp;</span>
                </el-col>
                <el-col :span="12" class="text-right">
                  <el-tag v-if="item.status == 1" size="small" type="success">{{$t("未缴清")}}</el-tag>
                  <el-tag v-if="item.status == 2" size="small" type="danger">{{$t("部分缴清")}}</el-tag>
                  <el-tag v-if="item.status == 3" size="small" type="danger">{{$t("已缴清")}}</el-tag>
                  <el-tag v-if="item.status == 4" size="small" type="danger">{{$t("待核实")}}</el-tag>
                </el-col>
              </el-row>
            </div>
            <div class="margin-top-5">
              <el-card :body-style="{'padding': '10px 5px'}">
                <van-row>
                  <van-col :span="16">
                    <span>{{$t("应缴")}} | ¥{{item.totalAmount}}</span>
                  </van-col>
                  <van-col :span="8">
                    <div class="text-right">
                      <span class="fa fa-file color-success" @click="showDetailManage($event, item)"></span>
                    </div>
                  </van-col>
                </van-row>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </div>

    <van-dialog v-model="showDetail" title="缴费信息">
      <div class="padding-lr-10 padding-tb-10">
        <el-form label-width="100px">
          <el-form-item :label="$t('已缴')" prop="phone">
            <label>¥{{billDetail.paidAmount}}</label>
          </el-form-item>
          <el-form-item :label="$t('未缴')" prop="phone">
            <label>¥{{billDetail.shouldAmount - billDetail.paidAmount}}</label>
          </el-form-item>
          <el-form-item :label="$t('缓缴')" prop="phone">
            <label>¥{{billDetail.delayAmount}}</label>
          </el-form-item>
          <el-form-item :label="$t('贷款')" prop="phone">
            <label>¥{{billDetail.loanAmount}}</label>
          </el-form-item>
          <el-form-item :label="$t('减免')" prop="phone">
            <label>¥{{billDetail.deductionAmount}}</label>
          </el-form-item>
        </el-form>
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
        sex: '',
        active: 6,
        serverAppList: [],
        noticeAppList: [],
        askAppList: [],
        currentEnrollYear: '',
        currentEnrollTime: '',
        collegeName: '',
        majorName: '',
        className: '',
        stuNo: '',
        headLogo: '',
        uploadFile: common.upload_file,
        uploadResult: {},
        uploadProcess: '',
        detailData: '',
        tablePayData: [],
        deductionAmount: 0,
        delayAmount: 0,
        loanAmount: 0,
        paidAmount: 0,
        shouldAmount: 0,
        totalAmount: 0,
        itemUserList: [],
        billList: [],
        showDetail: false,
        billDetail: '',
        drCode: '',
        billBtnShow: false,
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

        this.initStudentInfo();
        this.initBill();
        this.initInfo();
      },
      initInfo(){
        let params = {
          userId: this.loginUserId
        };
        this.$axios.get(common.enroll_checkin_student_detail, {params: params}).then(res => {
          if (res.data.data){
            this.detailData = res.data.data;
          }
        });
      },
      initStudentInfo(){
        let params = {
          userId: this.loginUserId,
        };
        this.$axios.get(common.server_enroll_app_student_info, {params: params}).then(res => {
          if (res.data.data){
            console.log(res.data.data);
            this.deductionAmount = res.data.data.deductionAmount;
            this.loanAmount = res.data.data.loanAmount;
            this.delayAmount = res.data.data.delayAmount;
            this.totalAmount = res.data.data.totalAmount;
            this.shouldAmount = res.data.data.shouldAmount;
            this.paidAmount = res.data.data.paidAmount;
            this.itemUserList = res.data.data.itemUserList;
            this.paidQrcode = res.data.data.enrollPayCode;
            this.billBtnShow = res.data.data.payAllow;
          }
        });
      },
      initBill(){
        let params = {
          userId: this.loginUserId,
          page: 1,
          num: 9999,
        };
        this.$axios.get(common.server_enroll_app_dorm_bill_page, {params: params}).then(res => {
          if (res.data.data){
            this.billList = res.data.data.list;
          }
        });
      },
      getPayInfo(){
        let params = {};
        this.$axios.get(common.enroll_pay_link_get, {params: params}).then(res => {
          if (res.data.data){
            this.qrCode = res.data.data.enrollPayUrl;
            if(res.data.data.enrollPayUrl){
              window.location.href = res.data.data.enrollPayUrl;
            }else {
              Toast(this.$t("请稍后再试！"));
            }
          }
        });
      },
      showDetailManage(event, data){
        this.billDetail = data;
        this.showDetail = true;
      },
      payManage(event, data){
        if(this.billBtnShow == false){
          Toast(this.$t("未到缴费时间！"));
          return;
        }
        this.drCode = '';
        this.getPayInfo();
        this.dialogPayDrCode = true;
      },
      okPayDialog(event){
        if(this.billBtnShow == false){
          Toast(this.$t("未到缴费时间！"));
          return;
        }
        let params = {};
        params = this.$qs.stringify(params);
        this.$axios.post(common.enroll_pay_item_pay, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.getPayInfo();
            this.returnGIndex();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
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
