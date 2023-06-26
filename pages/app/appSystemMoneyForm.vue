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
                        <span class="color-success font-size-14 font-bold">¥0.00</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="font-size-14 color-muted">{{$t("我通过的")}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="text-center">
                      <div>
                        <span class="color-success font-size-14 font-bold">¥0.00</span>
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
                        <span class="color-success font-size-14 font-bold">¥0.00</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="font-size-14 color-muted">{{$t("待我审的")}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="text-center">
                      <div class="margin-top-20">
                        <span class="color-success font-size-14 font-bold">¥0.00</span>
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
                <el-col :span="6">
                  <div class="text-center">
                    <div class="margin-top-10">
                      <span class="color-grand font-size-14 font-bold">0{{$t("笔")}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span class="font-size-14 color-muted">{{$t("待提交")}}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text-center">
                    <div class="margin-top-10">
                      <span class="color-grand font-size-14 font-bold">0{{$t("笔")}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span class="font-size-14 color-muted">{{$t("待审批")}}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text-center">
                    <div class="margin-top-10">
                      <span class="color-grand font-size-14 font-bold">0{{$t("笔")}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span class="font-size-14 color-muted">{{$t("待支付")}}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="text-center">
                    <div class="margin-top-10">
                      <span class="color-grand font-size-14 font-bold">0{{$t("笔")}}</span>
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
              <el-col :span="12">
                <div class="text-left">
                  <van-button :type="searchSubType == 1 ? 'info' : 'default'" size="small" @click="searchSubTypeFun(1)">{{ $t("我提交") }}</van-button>
                  <van-button :type="searchSubType == 2 ? 'info' : 'default'" size="small" @click="searchSubTypeFun(2)">{{ $t("我审批") }}</van-button>
                  <van-button :type="searchSubType == 3 ? 'info' : 'default'" size="small" @click="searchSubTypeFun(3)">{{ $t("看预算") }}</van-button>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="text-right">
                  <el-button type="text" size="small" @click="searchTimeFun">
                    <span class="font-size-14 color-muted">{{searchTime != '' ? searchTime : $t("时间选择")}}</span>
                    <i class="el-icon-caret-bottom color-muted"></i>
                  </el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>

        <div style="position: relative;">
          <div class="system-auto-block">
            <el-table
              ref="refTable"
              :data="tableData"
              size="medium"
              style="width: 100%">
              <el-table-column align="center" :label="$t('单据/费用')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.item_name}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.item_name}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('总金额(元)')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.delay_amount}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.delay_amount}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column align="center" :label="$t('已完成(元)')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.delay_amount}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.delay_amount}}
                  </span>
                  </el-popover>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model="showTimePicker" position="bottom">
      <van-datetime-picker
        type="year-month"
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onTimeConfirm"
        @cancel="showTimePicker = false"
      />
    </van-popup>

    <van-popup v-model="showMoneyPicker" position="bottom">
      <van-picker
        show-toolbar
        title="费用信息"
        :columns="moneyList"
        @cancel="onVehicleCancel"
        @confirm="onVehicleChange"
      />
    </van-popup>

    <van-popup round v-model="showTopOprPicker" position="bottom"  :style="{ height: '70%' }">
      <div class="padding-lr-30 padding-top-20">
        <div v-for="(item, index) in serverAppList" class="system-app-item-block border-bottom-1" @click="selAppFun(index+1, item.form_code)">
          <el-row>
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
          </el-row>
        </div>
      </div>
    </van-popup>
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
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.init();
      this.initCheckForm(this.$route.query.id);
    },
    methods: {
      layoutInit(){

      },
      async init(){
        let list = [];
        let params = {
          id: this.$route.query.id
        };
        await this.getSessionInfo();
        this.$axios.get(common.server_form_allInfo, {params: params}).then(res => {
          if (res.data.code == 200){
            let auditUser = [];
            this.serverDetail = res.data.data;
            this.serverDetailTitle = res.data.data.des ? res.data.data.des.substr(0, 50) + "..." : '';
            let processList = res.data.data.processList;
            this.customUserStatus = false;
            this.fromCreateBtnShow = res.data.data.submitButton;
            this.fromCreateBtnText = res.data.data.buttonName != "" ? res.data.data.buttonName : this.$t("提交");
            this.checkApply = res.data.data.checkApply;

            if (res.data.data.formContent != null && res.data.data.formContent != ''){
              this.formCreateRuleData = JSON.parse(res.data.data.formContent).rule;
              this.formCreateOptionData = JSON.parse(res.data.data.formContent).option;
              this.setFormChildren(this.formCreateRuleData, list, 'children');
            }

            for (let i = 0; i < processList.length; i++){
              if (processList[i].htype == 'CustomUser'){
                let processUser = processList[i].hid;
                let processUserName = processList[i].hname;
                for (let j = 0; j < processUser.length; j++){
                  auditUser.push({
                    label: processUserName[j],
                    value: processUser[j],
                    text: processUserName[j]
                  });
                }
                this.customUserStatus = true;
              }
            }
            this.auditUsers = auditUser;
          }
        });
      },
      initMoneyList(){
        let params = {};
        this.$axios.get(common.cost_list, {params: params, loading: false}).then(res => {
          if (res.data.code == 200) {
            let array = [];
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
      onVehicleCancel(){
        this.showMoneyPicker = false;
      },
      onVehicleChange(value, index){
        this.searchMoney = value.label;
        this.searchMoneyId = value.value;
        this.showMoneyPicker = false;
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
</style>
