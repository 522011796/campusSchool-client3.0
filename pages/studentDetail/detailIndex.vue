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
            <span class="font-bold">{{$t("扫一扫")}}</span>
          </div>
        </van-col>
        <van-col span="6">
          &nbsp;
<!--          <div class="text-right padding-lr-10">-->
<!--            <span style="position: relative;top: -5px">-->
<!--              <van-button plain size="mini" type="primary" @click="scanRecord($event)">-->
<!--                <i class="fa fa-edit"></i>-->
<!--                {{$t("扫码记录")}}-->
<!--              </van-button>-->
<!--            </span>-->
<!--          </div>-->
        </van-col>
      </van-row>
    </div>
    <div style="margin-top:0px;">
      <div ref="container" class="content-block">
        <div style="border:1px solid #dddddd;border-radius: 5px;box-shadow: 0px 0px 3px 3px #dddddd;margin: 10px;padding:0px 0px 10px 0px;" :style="divHeight14">
          <div class="margin-top-20 padding-lr-10">
            <div class="text-center">
              <van-image
                round
                width="100px"
                height="100px"
                :src="detailData.photo_simple"
              />
            </div>
            <div class="margin-top-20">
              <table class="custom-table">
                <tbody>
                <tr>
                  <td style="width: 15%">{{$t("姓名")}}</td>
                  <td style="width: 35%">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{detailData.real_name}}</div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class" style="width: 110px">
                        {{detailData.real_name}}
                      </div>
                    </el-popover>
                  </td>
                  <td style="width: 15%">{{$t("性别")}}</td>
                  <td style="width: 35%" class=" text-center"><my-sex :sex="detailData.sex" tag="text"></my-sex></td>
                </tr>
                <tr>
                  <td style="width: 15%">{{$t("录取号")}}</td>
                  <td style="width: 35%">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{detailData.student_id}}</div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class" style="width: 110px">
                        {{detailData.student_id}}
                      </div>
                    </el-popover>
                  </td>
                  <td style="width: 15%">{{$t("班级")}}</td>
                  <td style="width: 35%">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{detailData.class_name}}</div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class" style="width: 110px">
                        {{detailData.class_name}}
                      </div>
                    </el-popover>
                  </td>
                </tr>
                <tr>
                  <td style="width: 15%">{{$t("学院")}}</td>
                  <td style="width: 35%">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{detailData.college_name}}</div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class" style="width: 110px">
                        {{detailData.college_name}}
                      </div>
                    </el-popover>
                  </td>
                  <td style="width: 15%">{{$t("专业")}}</td>
                  <td style="width: 35%">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{detailData.major_name}}</div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class" style="width: 110px">
                        {{detailData.major_name}}
                      </div>
                    </el-popover>
                  </td>
                </tr>
                <tr>
                  <td style="width: 15%">{{$t("宿舍")}}</td>
                  <td colspan="3" class="text-left" style="width: 65%">
                  <span v-if="detailData.build_name">
                    {{detailData.build_name}}{{detailData.floor_num}}{{$t("层")}}{{detailData.dormitory_no}}
                  </span>
                  <span v-if="detailData.pac_name && !detailData.build_name">
                    {{detailData.pac_name}}
                    <label class="font-size-12 color-muted">
                      (¥{{detailData.pac_price}} -- {{detailData.pac_region}})
                    </label>
                  </span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="margin-top-30 padding-lr-10">
            <div>
              <van-row>
                <van-col span="12">
                  <div class="text-left">
                    <span class="app-title-border-tag"></span>
                    <span class="font-bold" style="position: relative;top: -8px">{{$t("缴费信息")}}</span>
                  </div>
                </van-col>
                <van-col span="12">
                  <div class="text-right">
                    <span class="app-title-border-tag"></span>
                    <span class="font-bold" style="position: relative;top: -8px">
                    <el-tag v-if="detailData.payment_status == 1" size="small" type="danger">{{$t("未缴清")}}</el-tag>
                    <el-tag v-if="detailData.payment_status == 2" size="small" type="warning">{{$t("部分缴清")}}</el-tag>
                    <el-tag v-if="detailData.payment_status == 3" size="small" type="success">{{$t("已缴清")}}</el-tag>
                    <el-tag v-if="detailData.payment_status == 4" size="small" type="warning">{{$t("待核实")}}</el-tag>
                  </span>
                  </div>
                </van-col>
              </van-row>
            </div>
            <div>
              <el-table
                border
                ref="refTable"
                :data="tablePayData"
                header-cell-class-name="custom-table-cell-bg"
                size="medium"
                style="width: 100%">
                <el-table-column align="center" :label="$t('费用名称')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.item_name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.item_name}}
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('缓缴')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.delay_amount}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.delay_amount}}
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('贷款')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.loan_amount}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.loan_amount}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('减免')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.deduction_amount}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.deduction_amount}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('实缴')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.should_amount}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.should_amount}}
                  </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('已缴')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.paid_amount}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.paid_amount}}
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('待缴金额')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.wait_amount}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.wait_amount}}
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>

          <div class="margin-top-30 padding-lr-10">
            <div>
              <van-row>
                <van-col span="12">
                  <div class="text-left">
                    <span class="app-title-border-tag"></span>
                    <span class="font-bold" style="position: relative;top: -8px">{{$t("报到信息")}}</span>
                  </div>
                </van-col>
                <van-col span="12">
                  <div class="text-right">
                    <span class="app-title-border-tag"></span>
                    <span class="font-bold" style="position: relative;top: -8px">
                    <el-tag v-if="signStatus == false" size="small" type="danger">{{$t("未报到")}}</el-tag>
                    <el-tag v-if="signStatus == true" size="small" type="success">{{$t("已报到")}}</el-tag>
                  </span>
                  </div>
                </van-col>
              </van-row>
            </div>
            <div>
              <el-table
                border
                ref="refTable"
                :data="tableSignData"
                header-cell-class-name="custom-table-cell-bg"
                size="medium"
                style="width: 100%">
                <el-table-column align="center" :label="$t('报到状态')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">
                        <label class="color-success" v-if="scope.row.check_status">{{$t("已报到")}}</label>
                        <label class="color-danger" v-if="!scope.row.check_status">{{$t("未报到")}}</label>
                      </div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        <label class="color-success" v-if="scope.row.check_status">{{$t("已报到")}}</label>
                      <label class="color-danger" v-if="!scope.row.check_status">{{$t("未报到")}}</label>
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('报到时间')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{$moment(scope.row.check_time).format("YYYY-MM-DD hh:mm")}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{$moment(scope.row.check_time).format("YYYY-MM-DD hh:mm")}}
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('核验方式')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">
                        <label class="color-success" v-if="scope.row.check_type == 0">{{$t("人工")}}</label>
                        <label class="color-danger" v-if="scope.row.check_type == 1">{{$t("二维码")}}</label>
                        <label class="color-danger" v-if="scope.row.check_type == 2">{{$t("人脸识别")}}</label>
                      </div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        <label class="color-success" v-if="scope.row.check_type == 0">{{$t("人工")}}</label>
                        <label class="color-danger" v-if="scope.row.check_type == 1">{{$t("二维码")}}</label>
                        <label class="color-danger" v-if="scope.row.check_type == 2">{{$t("人脸识别")}}</label>
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('核验人')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">
                        <label v-if="scope.row.check_user_name">({{scope.row.check_user_name}})</label>
                        <label v-else>--</label>
                      </div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        <label v-if="scope.row.check_user_name">({{scope.row.check_user_name}})</label>
                        <label v-else>--</label>
                      </span>
                    </el-popover>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>

        <div class="margin-top-5 text-center">
          <van-button style="width: 150px" v-if="detailData.allowCheckin == true && signStatus == false" hairline type="primary" size="small" :loading="signLoading" @click="signConfirm">{{$t("已报到确认")}}</van-button>
          <van-button style="width: 150px" v-if="detailData.allowCheckin == true && signStatus == true" hairline type="primary" size="small" :loading="signLoading" @click="unSignConfirm">{{$t("撤销报到")}}</van-button>
          <van-button style="width: 150px" v-if="detailData.allowPayment == true && detailData.payment_status == 1" hairline type="warning" size="small" :loading="payLoading" @click="payConfirm(event, 3)">{{$t("已缴费确认")}}</van-button>
          <van-button style="width: 150px" v-if="detailData.allowPayment == true && detailData.payment_status == 3" hairline type="danger" size="small" :loading="payLoading" @click="payConfirm(event, 1)">{{$t("撤销缴费")}}</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";
  import { Dialog } from 'vant';
  import { Toast } from 'vant';

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
        signStatus: '',
        tablePayData: [],
        tableSignData: [],
        container: null,
        signLoading: false,
        payLoading: false,
        checkinId: ''
      }
    },
    mounted() {
      this.container = this.$refs.container;
    },
    created() {
      this.userId = this.$route.query.userId;
      this.topHeight = this.navHeight > 0 ? (parseInt(0) + parseInt(this.navHeight)) : 10;
      console.log(this.userId);
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
        this.initPay();
        this.initSignInfo();
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
      initPay(item){
        let params = {
          userId: this.userId
        };
        this.$axios.get(common.enroll_checkin_pay_list_by_user, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              res.data.data[i]['wait_amount'] = res.data.data[i].should_amount - res.data.data[i].paid_amount;
            }
            this.tablePayData = res.data.data;
          }
        });
      },
      initSignInfo(){
        let params = {
          userId: this.userId
        };
        this.signStatus = false;
        this.$axios.get(common.server_enroll_app_student_checkin_get, {params: params}).then(res => {
          if (res.data.data){
            let data = JSON.stringify(res.data.data);
            if (data != "{}"){
              this.signStatus = res.data.data.check_status;
              this.checkinId = res.data.data.id;
              this.tableSignData = [res.data.data];
            }
          }
        });
      },
      payConfirm(event, type){
        Dialog.confirm({
          title: '提示',
          message: '确认执行该操作？',
        }).then(() => {
            // on confirm
          let url = '';
          let valObj = {};
          let params = '';

          if (type == 3){
            url = common.enroll_payment_set_student_payment;
            valObj = {
              paidAmountValList: [],
              paymentStatus: type,
              paymentType: 1,
              userId: this.userId
            };
            this.$axios.post(url, JSON.stringify(valObj), {dataType: 'stringfy', loading: false}).then(res => {
              if (res.data.code == 200){
                this.initAppServer();
                Toast(res.data.desc);
              }else {
                Toast(res.data.desc);
              }
              this.payLoading = false;
            });
          }else if (type == 1){
            url = common.enroll_payment_set_student_revoke;
            valObj = {
              userId: this.userId
            };
            valObj = this.$qs.stringify(valObj);
            this.$axios.post(url, valObj, {loading: false}).then(res => {
              if (res.data.code == 200){
                this.initAppServer();
                Toast(res.data.desc);
              }else {
                Toast(res.data.desc);
              }
              this.payLoading = false;
            });
          }
          this.payLoading = true;

        }).catch(() => {
            // on cancel
          this.payLoading = false;
        });
      },
      signConfirm(){
        Dialog.confirm({
          title: '提示',
          message: '确认执行该操作？',
        }).then(() => {
          // on confirm
          let params = {
            userId: this.userId
          };

          let url = common.enroll_checkin_handle;
          params = this.$qs.stringify(params);
          this.signLoading = true;
          this.$axios.post(url, params).then(res => {
            if (res.data.code == 200){
              this.initAppServer();
              Toast(res.data.desc);
            }else {
              Toast(res.data.desc);
            }
            this.signLoading = false;
          });
        }).catch(() => {
          // on cancel
          this.signLoading = false;
        });
      },
      unSignConfirm(){
        Dialog.confirm({
          title: '提示',
          message: '确认执行该操作？',
        }).then(() => {
          // on confirm
          let params = {
            checkinId: this.checkinId
          };

          let url = common.enroll_checkin_revoke;
          params = this.$qs.stringify(params);
          this.signLoading = true;
          this.$axios.post(url, params).then(res => {
            if (res.data.code == 200){
              this.initAppServer();
              Toast(res.data.desc);
            }else {
              Toast(res.data.desc);
            }
            this.signLoading = false;
          });
        }).catch(() => {
          // on cancel
          this.signLoading = false;
        });
      },
      scanRecord(){
        this.$router.push({
          path: '/studentDetail/detailRecord',
          query: {
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId,
            userId: this.$route.query.sessionId,
          }
        });
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
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  background: #ffffff;
  width: 100%;
  position: relative;
}
</style>
