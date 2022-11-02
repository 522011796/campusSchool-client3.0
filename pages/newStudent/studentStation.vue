<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-col span="3">
        <div class="text-left padding-lr-10 color-white">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
              {{$t("返回")}}
            </span>
        </div>
      </van-col>
      <van-col span="18">
        <div class="text-center color-white font-size-16 font-bold">
          <span>{{$t('接站信息')}}</span>
        </div>
      </van-col>
      <van-col span="3">
        <van-button size="small" type="warning" plain native-type="button" @click="submitInfo">{{$t("提交")}}</van-button>
      </van-col>
    </div>
    <div class="content-block" :style="divHeight10">
      <div class="margin-top-20 padding-lr-10">
        <div>
          <van-row>
            <van-col span="24">
              <div class="text-left">
                <span class="app-title-border-tag"></span>
                <span class="font-bold" style="position: relative;top: -8px">{{$t("基本信息")}}</span>
              </div>
            </van-col>
          </van-row>
        </div>
        <div class="margin-top-5">
          <table class="custom-table">
            <tbody>
              <tr>
                <td style="width: 15%">{{$t("姓名")}}</td>
                <td style="width: 35%">{{realName}}</td>
                <td style="width: 15%">{{$t("性别")}}</td>
                <td style="width: 35%"><my-sex :sex="sex" tag="text"></my-sex></td>
              </tr>
              <tr>
                <td style="width: 15%">{{$t("学号")}}</td>
                <td style="width: 35%">{{stuNo}}</td>
                <td style="width: 15%">{{$t("班级")}}</td>
                <td style="width: 35%">{{className}}</td>
              </tr>
              <tr>
                <td style="width: 15%">{{$t("学院")}}</td>
                <td style="width: 35%">{{collegeName}}</td>
                <td style="width: 15%">{{$t("专业")}}</td>
                <td style="width: 35%">{{majorName}}</td>
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
                <span class="font-bold" style="position: relative;top: -8px">{{$t("联系信息")}}</span>
              </div>
            </van-col>
          </van-row>
        </div>
        <div class="margin-top-5">
          <van-form ref='form'>
            <van-field :name="$t('按时报到')" :label="$t('按时报到')">
              <template #input>
                <van-radio-group v-model="form.signStatus" direction="horizontal">
                  <van-radio :name="true">{{$t("是")}}</van-radio>
                  <van-radio :name="false">{{$t("否")}}</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-field :name="$t('到达时间')"
                       :label="$t('到达时间')"
                       readonly
                       clickable
                       :placeholder="$t('请选择')"
                       :value="form.signTime"
                       @click="showPicker = true"
                       :rules="[{ required: true, message: '请选择信息' }]">
            </van-field>
            <van-field :name="$t('需要接站')" :label="$t('需要接站')">
              <template #input>
                <van-radio-group v-model="form.interface" direction="horizontal">
                  <van-radio :name="true">{{$t("是")}}</van-radio>
                  <van-radio :name="false">{{$t("否")}}</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-field
              v-model="form.peopleNum"
              :name="$t('陪同人员')"
              :label="$t('陪同人员')"
              :placeholder="$t('请输入信息')"
              autocomplete="off"
              :rules="numRules"
            />
            <van-field v-model="form.vehicleLabel"
                       :name="$t('交通工具')"
                       :label="$t('交通工具')"
                       readonly
                       clickable
                       :placeholder="$t('请选择')"
                       @click="showTranTypePicker = true"
                       :rules="[{ required: true, message: '请选择信息' }]">
            </van-field>
            <van-field v-model="form.addressLabel"
                       :name="$t('到达站')"
                       :label="$t('到达站')"
                       readonly
                       clickable
                       :placeholder="$t('请选择')"
                       @click="showTranStationPicker = true"
                       :rules="[{ required: true, message: '请选择信息' }]">
            </van-field>
            <van-field
              v-model="form.vehicleNo"
              :name="$t('班次/车牌号')"
              :label="$t('班次/车牌号')"
              :placeholder="$t('请输入信息')"
              autocomplete="off"
              :rules="[{ required: true, message: '请输入信息' }]"
            />
            <van-field
              v-model="form.des"
              :name="$t('备注')"
              :label="$t('备注')"
              :placeholder="$t('请输入信息')"
              autocomplete="off"
            />
          </van-form>
        </div>
      </div>
    </div>

    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        type="datetime"
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onTimeConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>

    <van-popup v-model="showTranTypePicker" position="bottom">
      <van-picker
        show-toolbar
        title="交通工具"
        :columns="filtersVehicleType"
        @cancel="onVehicleCancel"
        @confirm="onVehicleChange"
      />
    </van-popup>

    <van-popup v-model="showTranStationPicker" position="bottom">
      <van-picker
        show-toolbar
        title="接站地址"
        :columns="filtersStationType"
        @cancel="onStationCancel"
        @confirm="onStationChange"
      />
    </van-popup>
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
        minDate: new Date(2022, 0, 1),
        maxDate: new Date(2050, 11, 31),
        filtersVehicleType: [],
        filtersStationType: [],
        emailReg: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
        phoneReg: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
        numRules: [{
          required: true,
          message: '请填写正确的手机号',
          trigger: 'onBlur'
        }, {
          // 自定义校验规则
          validator: value => {
            return /^\d+$|^\d+[.]?\d+$/.test(value)
          },
          message: '必须为数字',
          trigger: 'onBlur'
        }],
        detailData: '',
        filterStatus: [{
          label: this.$t("是"),
          value: true,
          text: this.$t("是"),
        },{
          label: this.$t("否"),
          value: false,
          text: this.$t("否"),
        }],
        showPicker: false,
        showTranTypePicker: false,
        showTranStationPicker: false,
        currentDate: new Date(),
        form: {
          id: '',
          signStatus: true,
          signTime: '',
          interface: true,
          peopleNum: '',
          address: '',
          addressLabel: '',
          vehicle: '',
          vehicleLabel: '',
          vehicleNo: '',
          vehicleNoLabel: '',
          des: ''
        }
      }
    },
    mounted() {

    },
    created() {
      this.initAppServer();
      this.initTransType();
      this.initStationType();
      this.initArrive();
    },
    methods: {
      layoutInit(){

      },
      async initAppServer(){
        await this.getSessionInfo();
        this.collegeName = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes) ? this.sessionData.LOGIN_RETURN_INFO.classes.collegeName : '';
        this.className = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes) ? this.sessionData.LOGIN_RETURN_INFO.classes.className : '';
        this.stuNo = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.student) ? this.sessionData.LOGIN_RETURN_INFO.student.studentId : '';
        this.majorName = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes) ? this.sessionData.LOGIN_RETURN_INFO.classes.majorName : '';
        this.sex = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.sex) ? this.sessionData.LOGIN_RETURN_INFO.sex : '';

        this.studentDetailInfo(this.loginUserId);
      },
      initInfo(){
        let params = {};
        this.$axios.get(common.enroll_current_time, {params: params}).then(res => {
          if (res.data.data){

          }
        });
      },
      uploadFileSuccess(res, file){
        if (res.code == 200){
          this.form.headImg = res.data.url;
        }else {

        }
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
      },
      onTimeConfirm(time) {
        this.form.signTime = this.$moment(time).format("YYYY-MM-DD HH:mm");
        this.showPicker = false;
      },
      onVehicleCancel(){
        this.showTranTypePicker = false;
      },
      onVehicleChange(value, index){
        this.form.vehicleLabel = value.label;
        this.form.vehicle = value.value;
        this.showTranTypePicker = false;
      },
      onStationCancel(){
        this.showTranStationPicker = false;
      },
      onStationChange(value, index){
        this.form.addressLabel = value.label;
        this.form.address = value.value;
        this.showTranStationPicker = false;
      },
      studentDetailInfo(userId) {
        let params = {

        };
        this.$axios.get(common.enroll_student_detail, {params: params}).then(res => {
          if (res.data.data) {
            //this.detailData = res.data.data;
            console.log(res.data.data);
            // this.form = {
            //
            // };
          }
        });
      },
      initArrive(){
        let params = {
          userId: this.loginUserId,
        };
        this.$axios.get(common.server_enroll_app_arrive_get, {params: params}).then(res => {
          if (res.data.data){
            this.form = {
              id: '',
              signStatus: res.data.data.on_time,
              signTime: res.data.data.estimate ? this.$moment(res.data.data.estimate).format("YYYY-MM-DD HH:mm") : '',
              interface: res.data.data.need_receive,
              peopleNum: res.data.data.escorts_num,
              address: res.data.data.arrive_station,
              vehicle: res.data.data.train_type,
              vehicleNo: res.data.data.train_no,
              des: res.data.data.des
            };

            for (let i = 0; i < this.filtersVehicleType.length; i++){
              if (this.filtersVehicleType[i].value == res.data.data.train_type){
                this.form.vehicleLabel = this.filtersVehicleType[i].label;
              }
            }
            for (let i = 0; i < this.filtersStationType.length; i++){
              if (this.filtersStationType[i].value == res.data.data.arrive_station){
                this.form.addressLabel = this.filtersStationType[i].label;
              }
            }
          }
        });
      },
      async initTransType(){
        let params = {};
        await this.$axios.get(common.enroll_link_arrive_trans_type, {params: params}).then(res => {
          if (res.data.data){
            let obj = [];
            for (let item in res.data.data){
              obj.push({value: item, text: res.data.data[item], label: res.data.data[item]},)
            }
            this.filtersVehicleType = obj;
          }
        });
      },
      async initStationType(){
        let params = {};
        await this.$axios.get(common.enroll_link_arrive_station_list, {params: params}).then(res => {
          if (res.data.data){
            let obj = [];
            for (let i = 0; i < res.data.data.length; i++){
              obj.push({value: res.data.data[i].arrive_station, text: res.data.data[i].arrive_station, label: res.data.data[i].arrive_station},)
            }
            // this.form.addressLabel = obj[0].label;
            // this.form.address = obj[0].value;
            this.filtersStationType = obj;
          }
        });
      },
      submitInfo(){
        this.$refs.form.validate().then(() => {
          this.btnLoading = true;
          let url = common.server_enroll_app_arrive_add;
          let params = {
            trainType: this.form.vehicle,
            trainNo: this.form.vehicleNo,
            estimate: this.form.signTime,
            onTime: this.form.signStatus,
            escortsNum: this.form.peopleNum,
            needReceive: this.form.interface,
            arriveStation: this.form.address,
            des: this.form.des,
          };
          params = this.$qs.stringify(params);
          this.$axios.post(url, params).then(res => {
            if (res.data.code == 200){
              Toast(res.data.desc);
              let url = this.$route.query.subPage ? this.$route.query.subPage : '/newStudent/studentIndex'
              this.returnGIndex(url);
              this.btnLoading = false;
            }else {
              Toast(res.data.desc);
              this.btnLoading = false;
            }
          });
        })
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
