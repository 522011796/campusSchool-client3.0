<template>
  <div class="container">
    <div class="text-center font-size-16 font-bold margin-top-30">
      <span>{{this.campusName}}</span>
    </div>
    <div class="margin-top-20">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text">{{$t("基本信息")}}</span>

        <div class="pull-right">
          <el-image style="width: 120px; height: 30px" :src="g_BarCode"></el-image>
        </div>
      </div>
      <table class="custom-table">
        <tr>
          <td style="width: 20%" rowspan="2">
            <img v-if="detailData.photo_simple" :src="detailData.photo_simple"style="width: 80px; height: 80px;margin-top: 5px">
          </td>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("姓名")}}</td>
          <td style="width: 20%" class="color-muted font-size-12">{{detailData.real_name}}</td>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("性别")}}</td>
          <td style="width: 10%" class="color-muted font-size-12">
            <my-sex tag="text" :sex="detailData.sex"></my-sex>
          </td>
          <td style="width: 10%" class="font-size-12 font-bold">{{$t("录取号")}}</td>
          <td style="width: 20%" class="color-muted font-size-12">{{detailData.student_id}}</td>
        </tr>
        <tr>
          <td class="font-size-12 font-bold">{{$t("学院")}}</td>
          <td class="color-muted font-size-12">{{detailData.college_name}}</td>
          <td class="font-size-12 font-bold">{{$t("专业")}}</td>
          <td class="color-muted font-size-12">{{detailData.major_name}}</td>
          <td class="font-size-12 font-bold">{{$t("班级")}}</td>
          <td class="color-muted font-size-12">{{detailData.class_name}}</td>
        </tr>
        <tr>
          <td class="font-size-12 font-bold">{{$t("宿舍信息")}}</td>
          <td colspan="6" v-if="detailData.build_name" class="color-muted font-size-12">{{detailData.build_name}}{{$t("楼")}}{{detailData.floor_num}}{{$t("层")}}{{detailData.dormitory_no}}</td>
        </tr>
      </table>
    </div>
    <div class="margin-top-20">
      <div class="padding-tb-10 padding-lr-10">
        <span class="title-block-tag"></span>
        <span class="title-block-text">{{$t("缴费信息")}}</span>
      </div>
      <el-table
        border
        ref="refTable"
        :data="tableSignData"
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
        <el-table-column align="center" :label="$t('未缴金额')">
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
    <div class="margin-top-20">
      <el-image style="width: 80px; height: 80px" :src="g_QrCode"></el-image>
    </div>
  </div>
</template>

<script>
  import {common} from "../utils/api/url";
  import mixins from "~/utils/mixins";

  export default {
    layout: 'defaultFullScreen',
    mixins: [mixins],
    components: {},
    data(){
      return {
        detailData: {},
        tableSignData: []
      }
    },
    mounted() {

    },
    created() {
      this.init();
    },
    methods: {
      async init(){
        await this.getSessionInfo();
        this.signInfo();
      },
      initPay(item){
        let params = {
          userId: this.loginUserId
        };
        this.$axios.get(common.enroll_checkin_pay_list_by_user, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              res.data.data[i]['wait_amount'] = res.data.data[i].should_amount - res.data.data[i].paid_amount;
            }
            this.tableSignData = res.data.data;
          }
        });
      },
      signInfo(event, item){
        let params = {
          userId: this.loginUserId
        };
        this.$axios.get(common.enroll_checkin_student_detail, {params: params}).then(res => {
          if (res.data.data){
            this.detailData = res.data.data;
          }
        });
        this.initPay(item);
        this.getUserQrcode(this.loginUserId);
        this.getUserBarcode(this.loginUserId);
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 0px 40px;
  }
</style>
