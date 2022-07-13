<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-col span="3">
        <div class="text-left padding-lr-10 color-white">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
            </span>
        </div>
      </van-col>
      <van-col span="18">
        <div class="text-center color-white font-size-16 font-bold">
          <span>{{$t('报道单')}}</span>
        </div>
      </van-col>
      <van-col span="3">
        &nbsp;
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
              <div class="pull-right">
                <el-image style="width: 120px; height: 30px" :src="g_BarCode"></el-image>
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

      <div class="margin-top-20 padding-lr-10">
        <div>
          <van-row>
            <van-col span="24">
              <div class="text-left">
                <span class="app-title-border-tag"></span>
                <span class="font-bold" style="position: relative;top: -8px">{{$t("缴费信息")}}</span>
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
                <el-input size="mini" style="width: 70px" v-model="scope.row.paid_amount" @input="changeInputValue(scope.row.paid_amount, scope.$index)"></el-input>
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

      <div class="margin-top-10 padding-lr-10">
        <el-row>
          <el-col :span="12">
            <el-image style="width: 80px; height: 80px" :src="g_QrCode"></el-image>
          </el-col>
          <el-col :span="12">
            <div class="text-right">
              <el-button type="default" size="small" @click="okOrder" class="margin-top-30">
                {{$t("已完成打印")}}
              </el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  import mixinsBridge from "~/utils/mixinsBridge";
  import MySex from "~/components/MySex";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
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
        form: {
          id: '',
          phone: '',
          qq: '',
          email: '',
          wechat: '',
          fatherName: '',
          fatherPhone: '',
          matherName: '',
          matherPhone: '',
          address: '',
          headImg: ''
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

        this.initPay();
        this.initInfo();
        this.getUserQrcode(this.loginUserId);
        this.getUserBarcode(this.loginUserId);
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
      initPay(item){
        let params = {
          userId: this.loginUserId
        };
        this.$axios.get(common.enroll_checkin_pay_list_by_user, {params: params}).then(res => {
          if (res.data.data){
            console.log(res.data.data);
            for (let i = 0; i < res.data.data.length; i++){
              res.data.data[i]['wait_amount'] = res.data.data[i].should_amount - res.data.data[i].paid_amount;
            }
            this.tablePayData = res.data.data;
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
            appType: this.globalAppShow
          }
        });
      },
      okOrder(){
        let params = {
          userId: this.loginUserId
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.enroll_checkin_student_print, params).then(res => {
          if (res.data.data){
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
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
