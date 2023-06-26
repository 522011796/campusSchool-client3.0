<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-row>
        <van-col span="5">
          <div class="text-left padding-lr-10">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
              {{$t("返回")}}
            </span>
          </div>
        </van-col>
        <van-col span="14" class="text-center">
          <div>
            <span class="color-white font-size-14 font-bold">{{$t('个人信息')}}</span>
          </div>
        </van-col>
        <van-col span="5">
          &nbsp;
        </van-col>
      </van-row>
    </div>
    <div class="content-block" :style="{height: divHeight10.height}">
      <div class="content-main-block" :style="{height: divHeight20.height}" style="overflow-y: auto;">
        <van-form ref="form" label-width="90" label-align="left" input-align="right" error-message-align="right">
          <van-field :name="$t('姓名')" :label="$t('姓名')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{infoRealName}}</div>
            </template>
          </van-field>
          <van-field :name="$t('工号')" :label="$t('工号')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{infoUserNo ? infoUserNo : ''}}</div>
            </template>
          </van-field>
          <van-field :name="$t('部门')" :label="$t('部门')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{infoUserDept ? infoUserDept : '--'}}</div>
            </template>
          </van-field>
          <van-field :name="$t('手机号')" :label="$t('手机号')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{infoUserPhone ? infoUserPhone : '--'}}</div>
            </template>
          </van-field>
          <van-field :name="$t('个人收款账户')" :label="$t('个人收款账户')" @click="selBlockFun($t('个人收款账户'),'account')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width"></div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('个人收款账户'),'account')"/>
            </template>
          </van-field>
          <template v-if="tableTeacherAccountData.length > 0">
            <div class="system-order-main-block">
              <div v-for="(item, index) in tableTeacherAccountData" :key="index" class="system-order-item-block" @click="detailInfo(item)">
<!--                <i class="fa fa-times-circle" style="font-size: 20px;position: absolute;right: 5px;top: 3px"></i>-->
                <div class="font-size-14">
                  <div class="system-order-info-item-block">
                    <span class="color-muted" style="position: relative;top: 0px">{{$t('卡号')}}:</span>
                    <div class="color-muted font-bold moon-content-text-ellipsis-class" style="max-width: 180px;position: relative;top:4px; display: inline-block">{{ item.account_num }}</div>
                  </div>
                  <div class="system-order-info-item-block">
                    <span class="color-muted" style="position: relative;top: 0px">{{$t('类型')}}:</span>
                    <div class="color-muted font-bold moon-content-text-ellipsis-class color-grand" style="max-width: 180px;position: relative;top:4px; display: inline-block">{{ accountTypeInfo(item.account_type, 'set') }}</div>
                  </div>
                  <div class="system-order-info-item-block">
                    <span class="color-muted" style="position: relative;top: 0px">{{$t('户名')}}:</span>
                    <div class="color-muted font-bold moon-content-text-ellipsis-class" style="max-width: 180px;position: relative;top:4px; display: inline-block">{{ item.account_name }}</div>
                  </div>
                  <div class="system-order-info-item-block">
                    <span class="color-muted" style="position: relative;top: 0px">{{$t('开户行')}}:</span>
                    <div class="color-muted font-bold moon-content-text-ellipsis-class" style="max-width: 180px;position: relative;top:4px; display: inline-block">
                      {{ item.bank_name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </van-form>
      </div>
    </div>

    <van-popup round v-model="showBottomPicker" position="bottom" :style="{ height: '300px' }" @close="closePop">
      <div style="height: 40px;line-height: 40px;background: #f5f5f5">
        <el-row>
          <el-col :span="24">
            <div class="text-center">
              <span>{{$t("账户设置")}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div :style="{height: '210px'}">
        <van-form ref="form" label-width="90" label-align="left" input-align="right" error-message-align="right">
          <van-field readonly :name="$t('账户类型')" v-model="form.type" :label="$t('账户类型')" :placeholder="$t('请设置信息')" @click="selBlockFun($t('请设置信息'),'type')">
            <span slot="right-icon">
              <i class="fa fa-angle-down color-success" style="font-size: 20px"></i>
            </span>
          </van-field>
          <van-field v-if="form.type != 2 && form.type != 3" :name="$t('户名')" v-model="form.accountName" :label="$t('户名')" :placeholder="$t('请设置信息')">
            <span slot="right-icon">
              <i class="fa fa-edit color-success"></i>
            </span>
          </van-field>
          <van-field :name="$t('卡号/账号')" v-model="form.bankAccount" :label="$t('卡号/账号')" :placeholder="$t('请设置信息')">
            <span slot="right-icon">
              <i class="fa fa-edit color-success"></i>
            </span>
          </van-field>
          <van-field v-if="form.type != 2 && form.type != 3" :name="$t('开户行')" v-model="form.bankName" :label="$t('开户行')" :placeholder="$t('请设置信息')">
            <span slot="right-icon">
              <i class="fa fa-edit color-success"></i>
            </span>
          </van-field>
        </van-form>
      </div>
      <div class="bottom-pop-class">
        <el-row>
          <el-col :span="12" class="padding-lr-10">
            <van-button block type="danger" size="small" style="position: relative;top: 10px" @click="cancelPop">
              <span>{{$t("删除")}}</span>
            </van-button>
          </el-col>
          <el-col :span="12" class="padding-lr-10">
            <van-button block type="info" size="small" style="position: relative;top: 10px" @click="okPop">
              <span>{{$t("保存")}}</span>
            </van-button>
          </el-col>
        </el-row>
      </div>
    </van-popup>

    <van-action-sheet v-model="showPayType" :actions="filterAccountType" @select="onPaySelect" />
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  import HBarChart from "~/components/charts/HBarChart";
  import {datalist} from "caniuse-lite/data/features";
  import MySex from "~/components/MySex.vue";
  import {Toast} from "vant";
  import {accountPayType, MessageWarning} from "~/utils/utils";
  export default {
    name: 'appSystemCGHT',
    computed: {
      datalist() {
        return datalist
      }
    },
    components: {MySex, HBarChart},
    layout: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        uploadAction: common.upload_file,
        active: 6,
        serverAppList: [],
        noticeAppList: [],
        tableTeacherData: [],
        tableTeacherAccountData: [],
        tableObjectData: [],
        infoRealName: '',
        infoUserNo: '',
        infoUserPhone: '',
        infoUserDept: '',
        dialogItem: '',
        infoUserId: '',
        showBottomPicker: false,
        showPayType: false,
        form: {
          id: '',
          type: '',
          typeId: '',
          accountName: '',
          bankAccount: '',
          bankName: ''
        }
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
      this.init();
    },
    methods: {
      layoutInit(){

      },
      async init() {
        await this.getLoginStatus();
        if (this.loginStatusInfo == true){
          await this.getSessionInfo();
          this.infoRealName = this.realName;
          this.infoUserNo = this.userJobNum;
          this.infoUserPhone = this.loginUserPhone;
          this.infoUserDept = this.organizeName;
          this.infoUserId = this.loginUserId;
        }
        this.initTeacherAccount();
      },
      initTeacherAccount() {
        let params = {};
        this.$axios.get(common.teacher_account_list, {params: params}).then(res => {
          if (res.data.data) {
            this.tableTeacherAccountData = res.data.data;
          }
        });
      },
      detailInfo(item){
        console.log(item);
        this.form = {
          id: item.id,
          type: accountPayType(item.account_type, 'set'),
          typeId: item.account_type,
          accountName: item.account_name,
          bankAccount: item.account_num,
          bankName: item.bank_name
        }
        this.showBottomPicker = true;
      },
      returnIndex(){
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
      onPaySelect(item) {
        this.form.type = item.name;
        this.form.typeId = item.value;
        this.showPayType = false;
      },
      accountTypeInfo(str, type){
        return accountPayType(str, type);
      },
      async selBlockFun(data, type) {
        if (type == 'account'){
          this.showBottomPicker = true;
        }else if (type == 'type'){
          this.showPayType = true;
        }
      },
      closePop(){

      },
      cancelPop(){
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        }
        url = common.teacher_account_del;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.initTeacherAccount();
            Toast(res.data.desc);
            this.showBottomPicker = false;
          }else {
            Toast(res.data.desc);
          }
        });
      },
      okPop() {
        if (this.form.type == '' && this.form.bankAccount == ''){
          Toast(this.$t("请设置信息"));
          return;
        }
        let params = {
          accountType: this.form.typeId,
          userId: this.infoUserId,
          accountNum: this.form.bankAccount
        };
        if (this.form.type != 2 && this.form.type != 3){
          if (this.form.bankName == '' && this.form.accountName == ''){
            Toast(this.$t("请设置信息"));
            return;
          }

          params['bankName'] = this.form.bankName;
          params['accountName'] = this.form.accountName;
        }
        if (this.form.id != ''){
          params['id'] = this.form.id;
        }
        this.dialogLoading = true;
        let url = common.teacher_account_save;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.initTeacherAccount();
            Toast(res.data.desc);
            this.showBottomPicker = false;
          }else {
            Toast(res.data.desc);
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
  color: #FFFFFF;
}
.content-block{
  width: 100%;
  background: #EBEBEB;
  padding: 10px 0px;
}
.content-main-block{
  background: #FFFFFF;
  border-radius: 10px;
  padding: 10px 0px;
  margin: 0px 10px;
}
.input-width{
  max-width: 200px;
}
.content-botton-block{
  height: 45px;
  line-height: 45px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #f5f5f5;
}
.rp-img{
  height: 25px;
  width: 25px;
  border: 0px solid #dddddd;
}
.system-order-main-block{
  padding: 10px 16px;
  position: relative;
}
.system-order-item-block{
  border-radius: 5px;
  padding: 10px 10px;
  position: relative;
  margin-bottom: 10px;
  border: 0px solid #ebebeb;
  background: #f5f5f5;
}
.system-order-main-block::after {
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  right: 16px;
  bottom: 0;
  left: 16px;
  border-bottom: 1px solid #ebedf0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.system-order-info-item-block{
  padding: 2px 0px;
}
.system-order-item-left-block{
  background: #EBEBEB;
  text-align: center;
  padding: 10px 16px;
  line-height: 24px;
}
.bottom-pop-class{
  height: 50px;
  line-height: 50px;
}
</style>
