<template>
  <div>
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block color-white" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-row>
        <van-col span="6">
          <div class="text-left padding-lr-10">
            <span class="font-bold font-size-14" @click="returnBlock">
              <i class="fa fa-chevron-left"></i>
              {{$t("返回")}}
            </span>
          </div>
        </van-col>
        <van-col span="12">
          <div class="text-center">
            <span>{{$t("财务报销")}}</span>
          </div>
        </van-col>
        <van-col span="6">
          <div class="text-center">
            <span>&nbsp;</span>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="system-main-block" :style="{height: divHeight10.height}">
      <div class="system-top-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
        <div class="system-radius-block"></div>

        <div class="system-menu-main-block">
          <el-row>
            <el-col :span="8">
              <div class="text-center system-menu-item" @click="topBlockOpr(1)">
                <div>
                  <img src="~static/img/pick_file_icon.png" class="margin-top-10" style="height: 35px;width: 35px">
                </div>
                <div class="margin-top-5">
                  <span>{{$t("填单据")}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="text-center system-menu-item" @click="topBlockOpr(2)">
                <div>
                  <img src="~static/img/pick_icon.png" class="margin-top-10" style="height: 35px;width: 35px">
                </div>
                <div class="margin-top-5">
                  <span>{{$t("发票夹")}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="text-center system-menu-item" @click="topBlockOpr(3)">
                <div>
                  <img src="~static/img/pick_my.png" class="margin-top-10" style="height: 35px;width: 35px">
                </div>
                <div class="margin-top-5">
                  <span>{{$t("个人信息")}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

      <div :style="{height: divHeight19.height}" style="overflow-y: auto">
        <div style="position: relative;">
          <div class="system-info-block">
            <div class="system-search-money">
              <el-button type="text" size="small" @click="searchMoneyFun">
                <span class="font-size-12 color-muted">{{ searchMoney ? searchMoney : $t("费用选择") }}</span>
                <i class="el-icon-caret-bottom color-muted"></i>
              </el-button>
            </div>
            <div>
              <span class="font-bold">{{$t("数据看板")}}</span>
            </div>
            <div class="margin-top-10">
              <div>
                <el-row>
                  <el-col :span="12">
                    <div class="text-center">
                      <div>
                        <span class="color-success font-size-14 font-bold">¥{{myEndAmount}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="font-size-14 color-muted">{{$t("我通过的")}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="text-center">
                      <div>
                        <span class="color-success font-size-14 font-bold">¥{{mySubmitSuccessAmount}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="font-size-14 color-muted">{{$t("我提交的")}}</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="12">
                    <div class="text-center">
                      <div class="margin-top-20">
                        <span class="color-warning font-size-14 font-bold">¥{{ waitMeAmount }}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="font-size-14 color-muted">{{$t("待我审的")}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="text-center">
                      <div class="margin-top-20">
                        <span class="color-warning font-size-14 font-bold">¥{{mySubmitWaitAmount}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="font-size-14 color-muted">{{$t("提交待审")}}</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>

        <div style="position: relative;">
          <div class="system-wait-block">
            <div>
              <span class="font-bold">{{$t("我的待办")}}</span>
            </div>
            <div class="margin-top-10">
              <el-row>
                <el-col :span="6" @click.native="jumpAudit('waitSubmitCount')">
                  <div class="text-center">
                    <div class="margin-top-10">
                      <span class="color-grand font-size-14 font-bold">{{waitSubmitCount}}{{$t("笔")}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span class="font-size-14 color-muted">{{$t("待提交")}}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6" @click.native="jumpAudit('waitHandCount')">
                  <div class="text-center">
                    <div class="margin-top-10">
                      <span class="color-grand font-size-14 font-bold">{{waitHandCount}}{{$t("笔")}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span class="font-size-14 color-muted">{{$t("待审批")}}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6" @click.native="jumpAudit('waitPatCount')">
                  <div class="text-center">
                    <div class="margin-top-10">
                      <span class="color-grand font-size-14 font-bold">{{waitPatCount}}{{$t("笔")}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span class="font-size-14 color-muted">{{$t("待支付")}}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6" @click.native="jumpAudit('waitCheckCount')">
                  <div class="text-center">
                    <div class="margin-top-10">
                      <span class="color-grand font-size-14 font-bold">{{waitCheckCount}}{{$t("笔")}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span class="font-size-14 color-muted">{{$t("待签收")}}</span>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>

        <div style="position: relative;" class="padding-lr-10 margin-top-10">
          <div>
            <el-row>
              <el-col :span="16">
                <div class="text-left">
                  <van-button :type="searchSubType == 1 ? 'info' : 'default'" size="small" @click="searchSubTypeFun(1)">{{ $t("我提交") }}</van-button>
                  <van-button :type="searchSubType == 2 ? 'info' : 'default'" size="small" @click="searchSubTypeFun(2)">{{ $t("我审批") }}</van-button>
                  <van-button :type="searchSubType == 3 ? 'info' : 'default'" size="small" @click="searchSubTypeFun(3)">{{ $t("看预算") }}</van-button>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="text-right">
                  <el-button type="text" size="small" @click="searchTimeFun">
                    <span class="font-size-14 color-muted" :style="startTime != '' ? {position: 'relative',top:'-8px'} : ''">{{dateTime}}</span>
                    <i v-if="startTime == ''" class="el-icon-caret-bottom color-muted"></i>
                    <i v-if="startTime != ''" class="el-icon-circle-close color-danger" style="font-size: 23px;position: relative; top: -4px;margin-left: 5px;" @click.stop="clearTime"></i>
                  </el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>

        <div style="position: relative;">
          <div class="system-auto-block">
            <el-table
              v-if="searchSubType == 1 || searchSubType == 2"
              ref="refTable"
              :data="tableData"
              size="medium"
              style="width: 100%">
              <el-table-column align="center" :label="$t('单据/费用')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.costName ? scope.row.costName : '--'}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.costName ? scope.row.costName : '--'}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('总金额(元)')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.totalAmount}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.totalAmount}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('已完成(元)')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.successAmount}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.successAmount ? scope.row.successAmount : '--'}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
            </el-table>

            <el-table
              v-if="searchSubType == 3"
              ref="refTable"
              :data="tableData"
              size="medium"
              style="width: 100%">
              <el-table-column align="center" :label="$t('预算名称')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.budget_name ? scope.row.budget_name : '--'}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.budget_name ? scope.row.budget_name : '--'}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('已占用/总预算')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.used}}/{{scope.row.total}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.used}}/{{scope.row.total}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('预警状态')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.delay_amount}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.used >= scope.row.warn" class="color-warning">{{$t("已预警")}}</label>
                      <label v-else class="color-success">{{$t("未预警")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>

<!--    <van-popup v-model="showTimePicker" position="bottom">-->
<!--      <van-datetime-picker-->
<!--        type="year-month"-->
<!--        v-model="currentDate"-->
<!--        :min-date="minDate"-->
<!--        :max-date="maxDate"-->
<!--        @confirm="onTimeConfirm"-->
<!--        @cancel="showTimePicker = false"-->
<!--      />-->
<!--    </van-popup>-->

    <van-popup v-model="showMoneyPicker" position="bottom">
      <van-picker
        show-toolbar
        title="费用信息"
        :columns="moneyList"
        @cancel="onVehicleCancel"
        @confirm="onVehicleChange"
      />
    </van-popup>

    <van-popup round v-model="showTopOprPicker" position="bottom"  :style="{ height: '35%' }">
      <div class="padding-lr-30 padding-top-20">
        <el-row>
          <el-col :span="8" v-for="(item, index) in serverAppList" :key="index">npm
            <div class="text-center form-type" @click="selAppFun(index+1, item.form_code)">
                <img
                  src="~static/img/pick_write_file_icon.png"
                  class="system-img-list-block"
                  fit="fit" />
              <p>{{item.form_name}}</p>
            </div>
          </el-col>

        </el-row>


<!--          <el-row>
            <el-col :span="12">
              <div class="text-left">
                <span>
                  <img
                    src="~static/img/pick_write_file_icon.png"
                    class="system-img-list-block"
                    fit="fit" />
                </span>
                <span>
                  {{item.form_name}}
                </span>
              </div>
            </el-col>
            <el-col :span="12" class="text-right">
              <div>
                <el-button type="success" size="mini" @click="selAppFun(index+1, item.form_code)">{{ $t("申请") }}</el-button>
              </div>
            </el-col>
          </el-row>-->
      </div>
    </van-popup>

    <van-calendar v-model="showTimePicker" type="range" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" />
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";
  import { Toast } from 'vant';

  import mixins from "~/utils/mixins";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  export default {
    name: 'appServerForm',
    layout: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        searchSubType: 1,
        currentDate: new Date(),
        minDate: new Date(2022, 0, 1),
        maxDate: new Date(new Date().getFullYear(), 11, 31),
        rateValue: 0,
        serverDetailTitle: '',
        serverDetail: '',
        fApi: {},
        formCreateRuleData: [],
        formCreateOptionData: {},
        moneyList: [],
        serverAppList: [],
        searchTime: '',
        searchMoney: '',
        searchMoneyId: '',
        showTimePicker: false,
        showMoneyPicker: false,
        showTopOprPicker: false,
        btnLoading: false,
        customUserStatus: false,
        fromCreateBtnShow: true,
        showCollapse: false,
        fromCreateBtnText: '',
        auditUsers: [],
        auditSelUser: [],
        activeName: '',
        checkApply: false,
        applyCheckValue: [],
        detailApplyCheckList: [],
        tableData: [],
        boardObj: {},
        waitObj: {},
        myEndAmount: 0,
        mySubmitSuccessAmount: 0,
        mySubmitWaitAmount: 0,
        waitMeAmount: 0,
        waitCheckCount: 0,
        waitHandCount: 0,
        waitPatCount: 0,
        waitSubmitCount: 0,
        dateTime: this.$t("选择日期"),
        startTime: '',
        endTime: '',
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.init();
      this.initWait();
      this.initTableData();
      //this.initCheckForm(this.$route.query.id);
    },
    methods: {
      layoutInit(){

      },
      init(id){
        let list = [];
        let params = {
          costId: id
        };
        this.$axios.get(common.cost_static_info, {params: params}).then(res => {
          if (res.data.code == 200){
            this.myEndAmount = res.data.data.myEndAmount;
            this.mySubmitSuccessAmount = res.data.data.mySubmitSuccessAmount;
            this.mySubmitWaitAmount = res.data.data.mySubmitWaitAmount;
            this.waitMeAmount = res.data.data.waitMeAmount;
          }
        });
      },
      initWait(){
        let list = [];
        let params = {};
        this.$axios.get(common.cost_wait_static_info, {params: params}).then(res => {
          if (res.data.code == 200){
            this.waitCheckCount = res.data.data.waitCheckCount;
            this.waitHandCount = res.data.data.waitHandCount;
            this.waitPatCount = res.data.data.waitPatCount;
            this.waitSubmitCount = res.data.data.waitSubmitCount;
          }
        });
      },
      initTableData(){
        let url = '';
        if (this.searchSubType == 1){
          url = common.cost_my_sub_list;
        }else if (this.searchSubType == 2){
          url = common.cost_my_check_list;
        }else if (this.searchSubType == 3){
          url = common.cost_my_budget_list;
        }
        let params = {
          beginTime: this.startTime,
          endTime: this.endTime,
        };
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.code == 200){
            console.log(res.data.data);
            this.tableData = res.data.data;
          }
        });
      },
      initMoneyList(){
        let params = {};
        this.$axios.get(common.cost_list, {params: params, loading: false}).then(res => {
          if (res.data.code == 200) {
            let array = [];
            array.push({
              label: this.$t("全部"),
              text: this.$t("全部"),
              value: ''
            });
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].cost_name,
                text: res.data.data[i].cost_name,
                value: res.data.data[i].cost_id
              });
            }
            this.moneyList = array;
          }
        })
      },
      initServerAppList(){
        let params = {};
        this.$axios.get(common.system_app_server_list, {params: params, loading: false}).then(res => {
          if (res.data.code == 200) {
            this.serverAppList = res.data.data;
          }
        })
      },
      initCheckForm(id){
        let params = {
          formId: id
        };
        this.$axios.get(common.server_form_check_apply_list,{params: params}).then(res => {
          if (res.data.code == 200){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                value: res.data.data[i].id,
                label: res.data.data[i].name
              });
            }
            this.detailApplyCheckList = array;
          }
        });
      },
      setFormChildren(array, obj, param){
        let _self = this;
        if (array && array.length > 0){
          array.map(function (item,index) {
            if(item[param] != undefined && item[param].length > 0){
              _self.setFormChildren(item[param], obj, param);
            }else {
              if (item.type == "upload"){
                item['props'] = {
                  uploadType: 'image',
                  action: '/proxy/school/multipartFile/upload',
                  data : {
                    "path": "applet"
                  },
                  onSuccess(res, file){
                    let url = "";
                    if (res.data.url != ""){
                      // let urlHttps = res.data.url.indexOf("https");
                      // let urlHttp = res.data.url.indexOf("http");
                      // if (urlHttps == -1 || urlHttp == -1){
                      //   url = "http:" + res.data.url
                      // }else {
                      //   url = res.data.url
                      // }

                      // if (res.data.url.indexOf("files") > -1) {
                      //   let url1 = res.data.url.split("files")[0];
                      //   let url2 = res.data.url.split("files")[1];
                      //
                      //   url = "https://campus.9451.com:28090/files/" + url2;
                      // }

                    }
                    file.url = res.data.url
                    //console.log(res.data.url)
                  }
                }
              }
            }
          });
          return obj;
        }
      },
      serverSubBlock(){
        this.fApi.submit((formData, fApi)=>{
          let url = "";
          let ruleList = [];
          if (this.auditSelUser.length == 0 && this.customUserStatus == true){
            Toast(this.$t("请选择审批人！"));
            return;
          };
          let params = {
            appletFormId: this.$route.query.id,
            userId: this.loginUserId,
            //applyContent: JSON.stringify(formData),
            customHandleUserIds: JSON.stringify(this.auditSelUser),
          }

          if (this.checkApply == true){
            params['checkApplyId'] = this.applyCheckValue;
          }

          let rule = fApi.rule;
          let ruleObjList =  this.setRuleChild(rule, ruleList);
          params['applyContent'] = JSON.stringify(ruleObjList);

          url = common.server_form_add;
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              this.returnBlock();
              Toast(res.data.desc);
            }else {
              Toast(res.data.desc);
            }
            this.btnLoading = false;
          });
        });
      },
      returnBlock(){
        let page = this.$route.query.page ? this.$route.query.page : '/app/appIndex';
        this.$router.push({
          path: page,
          query: {
            id: this.$route.query.id,
            activeType: this.$route.query.activeType,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      },
      setRuleChild(rule, ruleList){
        let obj = {};
        for (let i = 0; i < rule.length; i++){
          if (rule[i]['children'] && rule[i]['children'].length > 0){
            this.setRuleChild(rule[i]['children'], ruleList);
            continue;
          }else {
            if (rule[i].field){
              obj = {
                field: rule[i].field,
                title: rule[i].title,
                type: rule[i].type,
                value: rule[i].value
              }
              ruleList.push(obj);
            }
          }
        }
        return ruleList;
      },
      jumpAudit(type){
        this.$router.push({
          path: '/app/appMyNotice',
          query: {
            id: parseInt(5),
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            page: '/app/appSystemMoneyForm'
          }
        });
      },
      topBlockOpr(type){
        if (type == 1){
          this.initServerAppList();
          this.showTopOprPicker = true;
        }else if (type == 3){
          this.$router.push({
            path: '/app/appSystemGRXX',
            query: {
              id: '',
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              page: '/app/appSystemMoneyForm'
            }
          });
        }else if (type == 2){
          this.$router.push({
            path: '/app/appSystemFPJ',
            query: {
              id: '',
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              page: '/app/appSystemMoneyForm'
            }
          });
        }
      },
      selAppFun(type, code){
        if (code == 'JKGL'){
          this.$router.push({
            path: '/app/appSystemJKGL',
            query: {
              id: '',
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              page: '/app/appSystemMoneyForm'
            }
          });
        }else if (code == 'HKD'){
          this.$router.push({
            path: '/app/appSystemHKGL',
            query: {
              id: '',
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              page: '/app/appSystemMoneyForm'
            }
          });
        }else if (code == 'BZBX'){
          this.$router.push({
            path: '/app/appSystemBZBX',
            query: {
              id: '',
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              page: '/app/appSystemMoneyForm'
            }
          });
        }else if (code == 'PTGL'){
          this.$router.push({
            path: '/app/appSystemPTGL',
            query: {
              id: '',
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              page: '/app/appSystemMoneyForm'
            }
          });
        }else if (code == 'DGDK'){
          this.$router.push({
            path: '/app/appSystemDGDK',
            query: {
              id: '',
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              page: '/app/appSystemMoneyForm'
            }
          });
        }else if (code == 'SKD'){
          this.$router.push({
            path: '/app/appSystemSKD',
            query: {
              id: '',
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              page: '/app/appSystemMoneyForm'
            }
          });
        }else if (code == 'TYHT'){
          this.$router.push({
            path: '/app/appSystemTYHT',
            query: {
              id: '',
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              page: '/app/appSystemMoneyForm'
            }
          });
        }else if (code == 'CGHT'){
          this.$router.push({
            path: '/app/appSystemCGHT',
            query: {
              id: '',
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              page: '/app/appSystemMoneyForm'
            }
          });
        }else if (code == 'XSHT'){
          this.$router.push({
            path: '/app/appSystemXSHT',
            query: {
              id: '',
              activeType: this.active,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              page: '/app/appSystemMoneyForm'
            }
          });
        }
      },
      searchSubTypeFun(type){
        this.searchSubType = type;
        this.initTableData();
      },
      searchTimeFun(){
        this.showTimePicker = true;
      },
      searchMoneyFun(){
        this.initMoneyList();
        this.showMoneyPicker = true;
      },
      onTimeConfirm(time) {
        this.searchTime = this.$moment(time).format("YYYY-MM");
        this.showTimePicker = false;
      },
      onConfirm(date){
        const [start, end] = date;
        this.dateTime = `${this.formatDate2(start)} - ${this.formatDate2(end)}`;
        this.startTime = `${this.formatDate(start)}`;
        this.endTime = `${this.formatDate(end)}`;

        this.initTableData();
        this.showTimePicker = false;
      },
      onVehicleCancel(){
        this.showMoneyPicker = false;
      },
      onVehicleChange(value, index){
        this.searchMoney = value.label;
        this.searchMoneyId = value.value;
        this.init(value.value);
        this.showMoneyPicker = false;
      },
      formatDate2(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      formatDate(date) {
        //date.getMonth() + 1)
        //date.getDate()
        let monthInt = parseInt(date.getMonth());
        let dayInt = parseInt(date.getDate());
        let month = monthInt + 1;
        let day = dayInt + 1;

        return `${date.getFullYear()}-${month > 10 ? month : '0'+month}-${day > 10 ? day : '0'+day}`;
      },
      clearTime(){
        this.dateTime = this.$t("选择日期");
        this.startTime = '';
        this.endTime = '';
        this.initTableData();
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
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #FFFFFF;
}
.title-block-tag{
  display: inline-block;
  height: 20px;
  width: 3px;
  background: #E6A23C;
  font-weight: bold;
  border-radius: 3px;
}
.title-block-text{
  font-weight: bold;
  position: relative;
  top: -5px;
}
.system-main-block{
  background: #EBEBEB;
  position: relative;
}
.system-top-block{
  height: 95px;
  position: relative;
  margin:0;
  padding:0;
}
.system-radius-block{
  background: #EBEBEB;
  height: 45px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: absolute;
  bottom: -1px;
  left: 0px;
  width: 100%;
}
.system-menu-main-block{
  background: #FFFFFF;
  height: 80px;
  width: 85%;
  position: relative;
  margin: 0 auto;
  top: 10px;
  border-radius: 5px;
}
.system-info-block{
  background: #FFFFFF;
  height: 140px;
  width: 90%;
  position: relative;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px 10px;
}
.system-wait-block{
  background: #FFFFFF;
  height: 100px;
  width: 90%;
  position: relative;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px 10px;
}
.system-auto-block{
  background: #FFFFFF;
  width: 90%;
  position: relative;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 0px 10px;
}
.system-menu-item{
  height: 80px;
}
.system-search-money{
  position: absolute;
  right: 0;
  top: 0;
  max-width: 150px;
  padding: 0px 10px;
  background: #fefefe;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  border-top-right-radius: 5px;
}
.system-app-item-block{
  height: 45px;
  line-height: 45px;
  background: #FFFFFF;
  padding: 0px 10px;
  text-align: center;
  font-size: 14px;
}
.system-img-list-block{
  position: relative;
  top: 5px;
  height: 20px;
  width: 20px;
}
.form-type{
  background: rgba(208, 208, 208, 0.5);
  margin: 2px;
  padding: 10px;
  border-radius: 5px;
}
</style>
