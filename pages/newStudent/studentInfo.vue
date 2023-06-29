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
          <span>{{$t('信息采集')}}</span>
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
                <span class="font-bold" style="position: relative;top: -8px">{{$t("照片采集")}}</span>
              </div>
            </van-col>
          </van-row>
        </div>
        <div class="margin-top-5">
          <div class="item-block">
            <van-row>
              <van-col :span="6" class="text-center">
                <div class="custom-avatar">
                  <el-avatar :size="70" :src="form.headImg" fit="fill"></el-avatar>
                </div>
                <div>
                  <upload-square class="margin-top-5" :limit="9999" :action="uploadFile" max-size="20" :data="{path: 'headPhone'}" accept=".png,.jpg,.jpeg" @success="uploadFileSuccess">
                    <el-button size="small" type="primary">{{$t("上传照片")}}</el-button>
                  </upload-square>
                </div>
              </van-col>
              <van-col :span="18" class="font-size-12 color-muted" style="padding-left: 30px">
                <div class="margin-top-10">
                  <span>{{$t("1. 照片大小不得超过2MB")}}</span>
                </div>
                <div>
                  <span>{{$t("2. 照片格式为JPG或PNG")}}</span>
                </div>
                <div>
                  <span>{{$t("3. 请上传2寸标准证件照")}}</span>
                </div>
                <div>
                  <span>{{$t("4. 照片用于报到及门禁授权")}}</span>
                </div>
              </van-col>
            </van-row>
          </div>
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
            <van-field
              v-model="form.phone"
              :name="$t('手机号')"
              :label="$t('手机号')"
              :placeholder="$t('手机号')"
              :rules="telRules"
              autocomplete="off"
            />
            <van-field
              v-model="form.wechat"
              :name="$t('微信号')"
              :label="$t('微信号')"
              :placeholder="$t('请输入信息')"
              autocomplete="off"
              :rules="[{ required: true, message: $t('请输入信息') }]"
            />
            <van-field
              v-model="form.qq"
              :name="$t('qq')"
              :label="$t('qq')"
              :placeholder="$t('请输入信息')"
              autocomplete="off"
              :rules="[{ required: true, message: $t('请输入信息') }]"
            />
            <van-field
              v-model="form.email"
              :name="$t('邮箱')"
              :label="$t('邮箱')"
              :placeholder="$t('请输入信息')"
              :rules="emailRules"
              autocomplete="off"
            />
            <van-field name="checkboxGroup"
                       label="联系方式"
                       :rules="[{ required: true, message: '请选择信息' }]">
              <template #input>
                <van-checkbox-group v-model="connType" direction="horizontal" @change="handleChangeConnType">
                  <van-checkbox name="1">{{ $t("父亲") }}</van-checkbox>
                  <van-checkbox name="2">{{ $t("母亲") }}</van-checkbox>
                </van-checkbox-group>
              </template>
            </van-field>
            <template v-if="connType.indexOf('1') != -1">
              <van-field
                v-model="form.fatherName"
                :name="$t('父亲姓名')"
                :label="$t('父亲姓名')"
                :placeholder="$t('请输入信息')"
                autocomplete="off"
                :rules="[{ required: true, message: $t('请输入信息') }]"
              />
              <van-field
                v-model="form.fatherPhone"
                :name="$t('父亲电话')"
                :label="$t('父亲电话')"
                :placeholder="$t('请输入信息')"
                :rules="telRules"
                autocomplete="off"
              />
            </template>

            <template v-if="connType.indexOf('2') != -1">
              <van-field
                v-model="form.matherName"
                :name="$t('母亲姓名')"
                :label="$t('母亲姓名')"
                :placeholder="$t('请输入信息')"
                autocomplete="off"
                :rules="[{ required: true, message: $t('请输入信息') }]"
              />
              <van-field
                v-model="form.matherPhone"
                :name="$t('母亲电话')"
                :label="$t('母亲电话')"
                :placeholder="$t('请输入信息')"
                :rules="telRules"
                autocomplete="off"
              />
            </template>
            <van-field
              v-model="form.address"
              :name="$t('家庭地址')"
              :label="$t('家庭地址')"
              :placeholder="$t('请输入信息')"
              autocomplete="off"
              :rules="[{ required: true, message: $t('请输入信息') }]"
            />
            <van-field v-model="form.graduationLabel"
                       :name="$t('毕业类型')"
                       :label="$t('毕业类型')"
                       readonly
                       clickable
                       :placeholder="$t('请选择')"
                       @click="showGraduationPicker = true"
                       :rules="[{ required: true, message: '请选择信息' }]">
            </van-field>
            <van-field v-model="form.graduationSchool"
                       :name="$t('毕业学校')"
                       :label="$t('毕业学校')"
                       :placeholder="$t('请输入信息')"
                       autocomplete="off"
                       :rules="[{ required: true, message: '请输入信息' }]">
            </van-field>
            <van-field v-model="form.bzrName"
                       :name="$t('班主任姓名')"
                       :label="$t('班主任姓名')"
                       :placeholder="$t('请输入信息')"
                       autocomplete="off"
                       :rules="[{ required: true, message: '请输入信息' }]">
            </van-field>
            <van-field v-model="form.bzrPhone"
                       :name="$t('班主任电话')"
                       :label="$t('班主任电话')"
                       :placeholder="$t('请输入信息')"
                       autocomplete="off"
                       :rules="telRules">
            </van-field>
            <van-field v-model="form.adProvinceLabel"
                       :name="$t('所在省份')"
                       :label="$t('所在省份')"
                       readonly
                       clickable
                       :placeholder="$t('请选择')"
                       @click="showAdProvince = true"
                       :rules="[{ required: true, message: '请选择信息' }]">
            </van-field>
            <van-field v-model="form.politicsLabel"
                       :name="$t('政治面貌')"
                       :label="$t('政治面貌')"
                       readonly
                       clickable
                       :placeholder="$t('请选择')"
                       @click="showPoliticsPicker = true"
                       :rules="[{ required: true, message: '请选择信息' }]">
            </van-field>
            <van-field v-model="form.retireLabel"
                       :name="$t('退役士兵')"
                       :label="$t('退役士兵')"
                       readonly
                       clickable
                       :placeholder="$t('请选择')"
                       @click="showRetirePicker = true"
                       :rules="[{ required: true, message: '请选择信息' }]">
            </van-field>
            <van-field v-model="form.hardLabel"
                       :name="$t('困难类型')"
                       :label="$t('困难类型')"
                       readonly
                       clickable
                       :placeholder="$t('请选择')"
                       @click="showHardPicker = true"
                       :rules="[{ required: true, message: '请选择信息' }]">
            </van-field>
          </van-form>
        </div>
      </div>
    </div>

    <van-popup v-model="showGraduationPicker" position="bottom">
      <van-picker
        show-toolbar
        title="毕业类型"
        :columns="filterGraduationType"
        @cancel="onShowPickerCancel"
        @confirm="onGraduationChange"
      />
    </van-popup>

    <van-popup v-model="showPoliticsPicker" position="bottom">
      <van-picker
        show-toolbar
        title="政治面貌"
        :columns="filterPoliticsType"
        @cancel="onShowPickerCancel"
        @confirm="onPoliticsChange"
      />
    </van-popup>

    <van-popup v-model="showRetirePicker" position="bottom">
      <van-picker
        show-toolbar
        title="退役士兵"
        :columns="filterRetireType"
        @cancel="onShowPickerCancel"
        @confirm="onRetireChange"
      />
    </van-popup>

    <van-popup v-model="showHardPicker" position="bottom">
      <van-picker
        show-toolbar
        title="困难类型"
        :columns="filterHardType"
        @cancel="onShowPickerCancel"
        @confirm="onHardChange"
      />
    </van-popup>

    <van-popup v-model="showAdProvince" position="bottom">
      <van-picker
        show-toolbar
        title="所在省市"
        :columns="filterAdProvince"
        @cancel="onShowPickerCancel"
        @confirm="onAdProvince"
      />
    </van-popup>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  import mixinsBridge from "~/utils/mixinsBridge";
  import MySex from "~/components/MySex";
  import {MessageError, MessageSuccess, MessageWarning, provinceArrayInfo} from "~/utils/utils";
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
        filterAdProvince: [],
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
        showGraduationPicker: false,
        showPoliticsPicker: false,
        showRetirePicker: false,
        showHardPicker: false,
        showAdProvince: false,
        emailReg: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
        phoneReg: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
        telRules: [{
          required: true,
          message: '请填写正确的手机号',
          trigger: 'onBlur'
        }, {
          // 自定义校验规则
          validator: value => {
            return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(value)
          },
          message: '请填写正确的手机号',
          trigger: 'onBlur'
        }],
        telRules2: [{
          // 自定义校验规则
          validator: value => {
            if (value != ''){
              return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(value)
            }
          },
          message: '请填写正确的手机号',
          trigger: 'onBlur'
        }],
        emailRules: [{
          required: false,
          message: '请填写正确的邮箱',
          trigger: 'onBlur'
        }, {
          // 自定义校验规则
          validator: value => {
            if (value != ''){
              return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(value)
            }
          },
          message: '请填写正确的邮箱',
          trigger: 'onBlur'
        }],
        detailData: '',
        connType: [],
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
          headImg: '',
          graduation: '',
          graduationLabel: '',
          politics: '',
          politicsLabel: '',
          retire: '',
          retireLabel: '',
          hard: '',
          hardLabel: '',
          graduationSchool: '',
          connType: [],
          adProvince: [],
          adProvinceLabel: '',
          bzrName: '',
          bzrPhone: ''
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
        this.collegeName = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes) ? this.sessionData.LOGIN_RETURN_INFO.classes.collegeName : '';
        this.className = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes) ? this.sessionData.LOGIN_RETURN_INFO.classes.className : '';
        this.stuNo = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.student) ? this.sessionData.LOGIN_RETURN_INFO.student.studentId : '';
        this.majorName = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes) ? this.sessionData.LOGIN_RETURN_INFO.classes.majorName : '';
        this.sex = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.sex) ? this.sessionData.LOGIN_RETURN_INFO.sex : '';

        this.provinceInfoText();
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
      validatorEmail(val) {
        if (val != ''){
          return this.emailReg.test(val);
        }
      },
      studentDetailInfo(userId) {
        let params = {
          userId: userId
        };
        console.log(params);
        this.$axios.get(common.enroll_student_detail, {params: params}).then(res => {
          if (res.data.data) {
            //this.detailData = res.data.data;
            let retireLabel = '';
            if (res.data.data.soldier == true){
              retireLabel = this.$t("是");
            }else if (res.data.data.soldier == false){
              retireLabel = this.$t("否");
            }
            this.form = {
              id: '',
              phone: res.data.data.phone,
              qq: res.data.data.qq,
              email: res.data.data.email,
              wechat: res.data.data.wechat,
              fatherName: res.data.data.father_name,
              fatherPhone: res.data.data.father_phone,
              matherName: res.data.data.mather_name,
              matherPhone: res.data.data.mather_phone,
              address: res.data.data.native_place,
              headImg: res.data.data.photo,
              graduation: res.data.data.graduation_type,
              graduationLabel: res.data.data.graduation_type,
              politics: res.data.data.political_type,
              politicsLabel: res.data.data.political_type,
              retire: res.data.data.soldier,
              retireLabel: retireLabel,
              hard: res.data.data.difficulty_type,
              hardLabel: res.data.data.difficulty_type,
              graduationSchool: res.data.data.high_school ? res.data.data.high_school : '',
              connType: [],
              adProvince: [res.data.data.enroll_province,res.data.data.enroll_city],
              adCity: res.data.data.enroll_city+'',
              adProvinceLabel: res.data.data.enroll_province+","+res.data.data.enroll_city,
              bzrName: res.data.data.master_name,
              bzrPhone: res.data.data.master_phone
            };
            if (!res.data.data.enroll_province || !res.data.data.enroll_city){
              this.form.adProvince = [];
              this.form.adProvinceLabel = "";
            }
            if (res.data.data.father_name && !res.data.data.mather_name){
              this.form.connType = ['1'];
              this.connType = ['1'];
            }else if (!res.data.data.father_name && res.data.data.mather_name){
              this.form.connType = ['2'];
              this.connType = ['2'];
            }else if (res.data.data.father_name && res.data.data.mather_name){
              this.form.connType = ['1','2'];
              this.connType = ['1','2'];
            }
          }
        });
      },
      submitInfo(){
        this.$refs.form.validate().then(() => {
          this.btnLoading = true;
          let url = common.server_enroll_app_student_update;
          // if (this.form.headImg == ""){
          //   Toast(this.$t("请设置照片！"));
          //   return;
          // }
          let params = {
            url: this.form.headImg,
            phone: this.form.phone,
            email: this.form.email,
            qq: this.form.qq,
            wechat: this.form.wechat,
            fatherPhone: this.form.fatherPhone,
            fatherName: this.form.fatherName,
            matherPhone: this.form.matherPhone,
            matherName: this.form.matherName,
            nativePlace: this.form.address,
            graduationType: this.form.graduation,
            politicalType: this.form.politics,
            soldier: this.form.retire,
            difficultyType: this.form.hard,
            highSchool: this.form.graduationSchool,
            enrollProvince: this.form.adProvince.length > 0 ? this.form.adProvince[0] : '',
            enrollCity: this.form.adProvince.length > 0 ? this.form.adProvince[1] : '',
            masterName: this.form.bzrName,
            masterPhone: this.form.bzrPhone,
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
      },
      provinceInfoText(){
        let arr = provinceArrayInfo();
        let province = [];
        for (let i = 0; i < arr.length; i++){
          province.push({
            label: arr[i].label,
            value: arr[i].label,
            text: arr[i].label
          });
          if (arr[i]['children']){
            province[i]['children'] = [];
            for (let j = 0; j < arr[i].children.length; j++){
              province[i]['children'].push({
                label: arr[i].children[j],
                value: arr[i].children[j],
                text: arr[i].children[j]
              });
            }
          }
        }
        //return province;
        console.log(province);
        this.filterAdProvince = province;
      },
      onShowPickerCancel(){
        this.showGraduationPicker = false;
        this.showRetirePicker = false;
        this.showPoliticsPicker = false;
        this.showHardPicker = false;
        this.showAdProvince = false;
      },
      onGraduationChange(value, index){
        this.form.graduationLabel = value.label;
        this.form.graduation = value.value;
        this.showGraduationPicker = false;
      },
      onPoliticsChange(value, index){
        this.form.politicsLabel = value.label;
        this.form.politics = value.value;
        this.showPoliticsPicker = false;
      },
      onRetireChange(value, index){
        this.form.retireLabel = value.label;
        this.form.retire = value.value;
        this.showRetirePicker = false;
      },
      onHardChange(value, index){
        this.form.hardLabel = value.label;
        this.form.hard = value.value;
        this.showHardPicker = false;
      },
      onAdProvince(value, index){
        this.form.adProvince = value;
        this.form.adProvinceLabel = value.join()
        this.showAdProvince = false;
      },
      handleChangeConnType(data){
        console.log(data);
        this.connType = data;
        this.$set(this.form, 'connType', data);
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
.top-block{
  background-image: linear-gradient(to top, #FFFFFF,#4BC66B);
}
</style>
