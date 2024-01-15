<template>
  <div>
    <drawer-layout-right tabindex="9999" v-bind="selectModel" @close="closeDialog" @changeDrawer="closeDetailDialog" :visible="dialogVisibleInner" size="550px" :title="title" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <el-form ref="form" :model="form" :rules="rules" label-width="100px">
          <el-form-item :label="$t('费用类型')" prop="type">
<!--            <my-select size="small" :sel-value="form.type" :options="moneyList" width-style="415" @change="selBlockFun($event, 'type')"></my-select>-->

            <el-cascader
              size="small"
              :options="moneyTree"
              v-model="form.type"
              :props="{ checkStrictly: true }"
              @change="selBlockFun($event, 'type')"
              ></el-cascader>


          </el-form-item>
          <el-form-item :label="$t('日期')" prop="time">
            <my-date-picker size="small" width-style="415" :sel-value="form.time" @change="selBlockFun($event, 'time')"></my-date-picker>
          </el-form-item>
          <el-form-item :label="$t('金额')" prop="money">
            <el-input size="small" v-model="form.money" class="width-415"></el-input>
          </el-form-item>
          <el-form-item :label="$t('消费说明')">
            <el-input size="small" v-model="form.xfInfo" class="width-415"></el-input>
          </el-form-item>
          <el-form-item :label="$t('发票')">
            <template>
              <template v-if="uploadLoading == false">
                <div class="layout-inline">
                  <div class="layout-item">
                    <el-upload
                      v-if="form.fp.length == 0"
                      class="avatar-uploader-quill"
                      :action="uploadFpOcrAction"
                      multiple
                      :data="{path: 'appFpFile'}"
                      :auto-upload="true"
                      :show-file-list="false"
                      :on-progress="handleAvatarFpOcrProcess"
                      :on-success="handleAvatarFpOcrSuccess"
                      :on-error="handleAvatarFpOcrError"
                    >
                      <a href="javascript:;" class="margin-right-10 color-success">{{$t('上传')}}</a>
                    </el-upload>
                  </div>
                  <a href="javascript:;" v-if="form.fp.length == 0" class="color-grand margin-right-10 layout-item" @click="selFpList">{{$t('选择')}}</a>
                  <a href="javascript:;" v-if="(form.fp.length > 0 && form.fp[0].real == false) || form.fp.length == 0" class="color-success layout-item" @click="checkFpInfo">{{$t('验真')}}</a>
                </div>
              </template>

              <template v-if="uploadLoading == true" style="position: relative">
                  <span v-loading = "uploadLoading">
                    <a href="javascript:;" class="color-muted margin-right-10">{{$t('上传')}}</a>
                    <a href="javascript:;" v-if="form.fp.length == 0" class="color-muted margin-right-10">{{$t('选择')}}</a>
                    <a href="javascript:;" v-if="(form.fp.length > 0 && form.fp[0].real == false) || form.fp.length == 0" class="color-muted">{{$t('验真')}}</a>
                  </span>
              </template>
            </template>

            <template v-if="form.fp.length > 0">
              <div class="system-order-main-block">
                <div v-for="(item, index) in form.fp" :key="index" class="system-order-item-block" @click="seeFpInfo(item)">
                  <div class="text-center" style="position: absolute;right: 0px;top:0px;background: #cccccc;height: 25px;line-height: 25px;width: 25px;border-top-right-radius: 5px">
                    <i class="fa fa-times" style="font-size: 15px;" @click.stop="removeOrderItem(index)"></i>
                  </div>
                  <div>
                    <span class="color-muted">{{ item.invoiceDate }}</span>
                    <span class="color-success" v-if="item.real == true">({{$t('已验真')}})</span>
                    <span class="color-warning" v-if="item.real == false">({{$t('未验真')}})</span>
                  </div>
                  <div class="font-size-14">
                    <div class="system-order-info-item-block">
                      <el-row>
                        <el-col :span="16">
                          <!--                        <span><img src="~static/img/static_icon.png" style="height: 20px;width: 20px;position: relative;top: 5px"/></span>-->
                          <div class="color-muted font-bold moon-content-text-ellipsis-class">{{ item.purchaserName }}</div>
                        </el-col>
                        <el-col :span="8" class="text-right">
                          <span class="color-success font-bold">¥{{item.totalAmount}}</span>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </el-form-item>
          <el-form-item :label="$t('发票类型')">
            <my-select size="small" :sel-value="form.fpType" :options="filterFpType" width-style="415" @change="selBlockFun($event, 'fpType')"></my-select>
          </el-form-item>
          <el-form-item :label="$t('发票日期')">
            <my-date-zh-picker size="small" width-style="415" :sel-value="form.fpTime" @change="selBlockFun($event, 'fpTime')"></my-date-zh-picker>
          </el-form-item>
          <el-form-item :label="$t('发票号码')">
            <el-input size="small" v-model="form.fpNo" class="width-415"></el-input>
          </el-form-item>
          <el-form-item :label="$t('发票代码')">
            <el-input size="small" v-model="form.fpCode" class="width-415"></el-input>
          </el-form-item>
          <el-form-item :label="$t('发票验证码')">
            <el-input size="small" v-model="form.fpVerCode" class="width-415"></el-input>
          </el-form-item>
          <el-form-item v-if="form.fpType == '增值税专用发票' || form.fpType == '机动车销售统一发票' || form.fpType == '增值税电子专用发票'" :label="$t('含税金额')" prop="name">
            <el-input size="small" v-model="form.fpHsMoney" class="width-415"></el-input>
          </el-form-item>
          <el-form-item v-if="form.fpType == '电子发票(增值税普通发票)' || form.fpType == '电子发票(增值税专用发票)'" :label="$t('不含税金额')" prop="name">
            <el-input size="small" v-model="form.fpNHSMoney" class="width-415"></el-input>
          </el-form-item>
          <el-form-item :label="$t('其他附件')">
            <div class="margin-right-10 color-muted">
              <div>
                <div v-if="form.files.length > 0" v-for="(item, index) in form.files" :key="index" class="pull-left" style="position: relative;top: 0px;margin-right: 10px;height: 25px">
                  <i class="fa fa-close" style="position: absolute; right: -8px; top: -8px;font-size: 15px" @click="deleteRemoveImg(index)"></i>
                  <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: 0px;"></i>
                  <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: 0px;"></i>
                  <img v-else :src="item" class="rp-img"/>
                </div>
              </div>
            </div>
            <el-upload
              class="avatar-uploader-quill"
              :action="uploadAction"
              multiple
              :data="{path: 'appFormFile'}"
              :auto-upload="true"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :on-error="handleAvatarError"
            >
              <el-button size="small" type="primary">{{$t("上传附件")}}</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button type="primary" size="small" @click="saveForm(2)">{{$t("提交")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>


    <dialog-normal tabindex="0" :visible="modalVisible" width-style="550px" :title="$t('发票内容')" :show-footer="false" @right-close="cancelDialog">
      <div class="padding-lr-10 padding-tb-10">
        <div>
          <el-row>
            <el-col :span="18">
              <div class="margin-top-5">
                <span class="color-danger">{{fpDetailInfo.title ? fpDetailInfo.title : fpDetailInfo.type}}</span>
                <span class="color-success" v-if="fpDetailInfo.real == true">({{$t('已验真')}})</span>
                <span class="color-warning" v-if="fpDetailInfo.real == false">({{$t('未验真')}})</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="text-right">
                <el-button v-if="fpDetailInfo.real == false" plain type="success" size="small" @click="checkFpInfo">{{$t('验真')}}</el-button>
                <span v-else>&nbsp;</span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="border-bottom-1 margin-top-5"></div>
        <div class="padding-lr-10 padding-tb-10">
          <div class="margin-top-5">
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("税价合计")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{fpDetailInfo.totalAmount}}{{$t("元")}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("税额合计")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{fpDetailInfo.invoiceTax}}{{$t("元")}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("购买方")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{fpDetailInfo.purchaserName}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("纳税识别号")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{fpDetailInfo.purchaserTaxNumber}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="border-bottom-1 margin-top-5"></div>
        <div class="padding-lr-10 padding-tb-10">
          <div class="margin-top-5">
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("销售方")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{fpDetailInfo.sellerName}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("开票日期")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{fpDetailInfo.invoiceDate}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("开票代码")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{fpDetailInfo.invoiceCode}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("开票号码")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{fpDetailInfo.invoiceNumber}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("开票地址")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{fpDetailInfo.sellerContactInfo}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("备注")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{fpDetailInfo.remarks}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="border-bottom-1 margin-top-5"></div>
        <div class="padding-lr-10 padding-tb-10">
          <div class="margin-top-5 margin-bottom-5" v-for="(item, index) in fpDetailInfo.invoiceDetails" :key="index">
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("商品名称")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{item.itemName}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("数量")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{item.quantity}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("金额")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{item.amount}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("税率")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{item.taxRate}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="padding-tb-5">
              <el-row>
                <el-col :span="6">
                  <div>
                    <span class="font-size-14 color-muted">{{$t("税额")}}</span>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="text-right">
                    <span>{{fpDetailInfo.invoiceDetails[0].tax}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </dialog-normal>
  </div>
</template>

<script>
  import MySelect from "~/components/MySelect.vue";
  import {common} from "~/utils/api/url";
  import {Toast} from "vant";
  import mixins from "~/utils/mixins";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight.vue";
  import {Message} from "element-ui";
  import {MessageWarning} from "~/utils/utils";
  import systemServerValidater from "~/utils/validater/systemServerValidater";
  import MyDatePicker from "~/components/MyDatePicker.vue";
  import MyDateZhPicker from "~/components/MyDateZHPicker.vue";
  import DialogNormal from "~/components/utils/dialog/DialogNormal.vue";
  import TimeoutButton from "~/components/utils/button/TimeoutButton.vue";
  import systemServerFormValidater from "~/utils/validater/systemServerFormValidater";

  export default {
    name: 'systemFormDataInfo',
    mixins: [mixins, systemServerFormValidater],
    components: {TimeoutButton, DialogNormal, MyDateZhPicker, MyDatePicker, DrawerLayoutRight, MySelect},
    props: {
      dialogVisible: {
        default: false,
        type: Boolean
      },
      title: {
        default: '',
        type: String
      },
      processId: {
        default: '',
        type: [String, Number]
      }
    },
    computed: {
      selectModel(){
        if (this.dialogVisible == true){
          //this.initMoneyList();
          this.initMoneyTree();
        }
        this.dialogVisibleInner = this.dialogVisible;
      }
    },
    data() {
      return {
        fpDetailInfo: {},
        fpDetailInfoBak: {},
        fpDetailRealInfo: {},
        uploadAction: common.upload_file,
        uploadFpCheckAction: common.fp_check,
        uploadFpOcrAction: common.fp_ocr,
        value: '',
        tableTagData: [],
        tableObjectData: [],
        tableTeacherData: [],
        userOptions: [],
        dataTreeList: [],
        dataModalList: [],
        dataModalBakList: [],
        deptStatusContent: 0,
        props: {},
        searchTreeTempIdData: [],
        moneyList: [],
        moneyTree: [],
        moneyMapping: [],
        pageType: '',
        pageTypeStr: '',
        loading: false,
        dialogVisibleInner: false,
        dialogChildVisible: false,
        modalVisible: false,
        uploadLoading: false,
        moneyTotal: 0.00,
        orderInfoList: [],
        form: {
          index: '',
          type: '',
          typeId: '',
          typeStr: '',
          processId: '',
          time: '',
          money: 0,
          moneyCount: 0,
          xfInfo: '',
          fp: [],
          fpType: '',
          fpCode: '',
          fpTime: '',
          fpTimeFormat: '',
          fpNo: '',
          fpMoney: 0,
          fpHsMoney: 0,
          fpNHSMoney: 0,
          fpVerCode: '',
          sl: 0,
          slStr: '0%',
          se: 0,
          files: [],
          fileNames: [],
          oprType: '1'
        }
      }
    },
    mounted() {

    },
    created() {

    },
    methods: {
      initMoneyList(){
        let params = {
          processId: this.processId && this.processId != '' ? this.processId : ''
        };
        this.$axios.get(common.cost_list, {params: params, loading: false}).then(res => {
          if (res.data.code == 200) {
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].cost_name,
                text: res.data.data[i].cost_name,
                processId: res.data.data[i].form_process_id,
                value: res.data.data[i].cost_id
              });
            }
            this.moneyList = array;
          }
        })
      },
      initMoneyTree(){
        let params = {
          processId: this.processId && this.processId != '' ? this.processId : ''
        };
        this.$axios.get(common.cost_list_tree, {params: params, loading: false}).then(res => {
          if (res.data.code == 200) {
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push(this.formatData(res.data.data[i]))
            }
            this.moneyTree = array;
          }
        })
      },
      formatData(data) {
        let res = {
          label: data.cost_name,
          text: data.cost_name,
          processId: data.form_process_id,
          value: data.cost_id,
          disabled: !data.permission
        }

        this.moneyMapping[data.cost_id] = res
        if(data.child_list && data.child_list.length>0){
          let childs = []
          for (let i = 0; i < data.child_list.length; i++){
            childs.push(this.formatData(data.child_list[i]))
          }
          res.children = childs
        }
        return res
      },
      handleAvatarSuccess(res, file){
        // 如果上传成功
        if (res.code == '200') {
          this.form.files.push(res.data.url);
          this.form.fileNames.push(file.name);
        } else {
          Toast(res.desc);
        }
      },
      handleAvatarError(res, file){

      },
      handleAvatarFpOcrProcess(event, file, fileList){
        this.uploadLoading = true;
      },
      handleAvatarFpOcrSuccess(res, file){
        // 如果上传成功
        if (res.code == '200') {
          this.setBackShowData(res.data);
        } else {
          MessageWarning(res.desc);
        }
        this.uploadLoading = false;
      },
      handleAvatarFpOcrError(res, file){
        this.uploadLoading = false;
      },
      setBackShowData(data){
        console.log(data);
        this.form.fp.push(data);
        //this.form.sl = res.data.invoiceType;
        this.form.se = data.invoiceTax;
        this.form.fpType = data.invoiceType;
        this.form.fpNo = data.invoiceNumber;
        this.form.fpCode = data.invoiceCode;
        this.form.fpHsMoney = data.totalAmount;
        this.form.fpNHSMoney = data.invoiceAmountPreTax;
        this.form.fpVerCode = data.checkCode;
        this.form.fpTime = data.invoiceDate;

        let timeFormat = data.invoiceDate;
        let yearFormat = timeFormat.split("年");
        let monthFormat = yearFormat[1].split("月");
        let dayFormat = monthFormat[1].split("日")[0];
        this.form.fpTimeFormat = yearFormat+"-"+monthFormat+"-"+dayFormat;
      },
      seeFpInfo(data){
        this.fpDetailInfo = data;
        this.fpDetailInfoBak = data;
        this.modalVisible = true;
      },
      selFpList(){
        this.initFpList();
        this.showFpPicker = true;
      },
      selFpInfo(item, index){
        let data = {};
        console.log(item, item.reals);
        if (item.reals == true){
          data = item.check_content != '' ? JSON.parse(item.orc_content) : {};
          data['no'] = data['invoiceNumber'];
        }else {
          let time = '';
          if (item.time && item.time != ''){
            console.log(item.time);
            let timeSplit = item.time.split("-");
            time = timeSplit[0]+"年"+timeSplit[1]+"月"+timeSplit[2]+"日";
          }
          data = {
            "checkCode": item.check_code,
            "invoiceAmountPreTax": item.total_amount,
            "invoiceCode": item.code,
            "invoiceDate": time != '' ? time : '',
            "invoiceNumber": item.no,
            "invoiceType": item.type,
            "totalAmount": item.total_amount,
            "url": item.url,
            "real": item.reals,
            "no": item.no,
            "sellerName": item.buyer,
            "title": item.type
          };
        }
        this.selFpObj = data;
      },
      checkFpInfo(){
        if (this.form.fp.length == 0 && (this.form.fpNo == "" || this.form.fpCode == "" || this.form.fpVerCode == "" || this.form.fpTime == "")){
          Toast(this.$t("请设置发票信息"));
          return;
        }
        if (this.form.fpHsMoney == "" || this.form.fpNHSMoney == ""){
          Toast(this.$t("请设置发票信息"));
          return;
        }

        let timeStr = this.form.fpTime;
        let timeYearSplit = timeStr.split("年")[0];
        let timeMonthSplit = timeStr.split("年")[1].split("月")[0];
        let timeDaySplit = timeStr.split("年")[1].split("月")[1];
        let timeDay = timeDaySplit.split("日")[0];
        let params = {
          no: this.form.fpNo,
          code: this.form.fpCode,
          time: timeYearSplit+timeMonthSplit+timeDay,
          checkCode: this.form.fpVerCode
        };

        if (this.form.fpType == '增值税专用发票'
          || this.form.fpType == '机动车销售统一发票'
          || this.form.fpType == '增值税电子专用发票'){
          if (this.form.fpNHSMoney == ""){
            Toast(this.$t("请设置发票信息"));
            return;
          }
          params['sum'] = this.form.fpNHSMoney;
        }else if (this.form.fpType == '电子发票(增值税普通发票)'
          || this.form.fpType == '电子发票(增值税专用发票)'){
          if (this.form.fpHsMoney == ""){
            Toast(this.$t("请设置发票信息"));
            return;
          }
          params['sum'] = this.form.fpHsMoney;
        }
        params = this.$qs.stringify(params);
        this.btnLoading = true;
        this.form.fp = [];
        this.$axios.post(common.fp_check, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            //this.$set(this.form.fp[0], 'real', res.data.data.real);
            this.fpDetailInfo = res.data.data;
            if (this.fpDetailInfo['invoiceType'] == null){
              this.fpDetailInfo['title'] = this.fpDetailInfoBak['invoiceType'];
            }
            //this.form.fp.push(res.data.data);
            this.setBackShowData(res.data.data);
          }else {
            Toast(res.data.desc);
          }
        });
      },
      deleteRemoveImg(index){
        this.form.files.splice(index, 1);
        this.form.fileNames.splice(index, 1);
      },
      removeOrderItem(index){
        this.form.fp.splice(index, 1);
      },
      async selBlockFun(data, type){
        this.pageType = type;
        this.pageTypeStr = data;
        if (type == 'object'){
          let obj = {};
          obj = this.tableObjectData.find((item)=>{
            return item.value === data;
          });
          this.form.object = obj.label;
          this.form.objectId = data;
        }else if (type == 'tag'){
          let obj = {};
          obj = this.tableTagData.find((item)=>{
            return item.value === data;
          });
          this.form.tag = obj.label;
          this.form.tagId = data;
        }else if (type == 'user'){
          let obj = {};
          obj = this.tableTeacherData.find((item)=>{
            return item.value === data;
          });
          this.form.user = obj.label;
          this.form.userId = data;
        }else if (type == 'fpType'){
          this.form.fpType = data;
        }else if (type == 'fpTime'){
          // let timeFormat = "";
          // timeFormat = data.split("-");
          // let year = parseInt(timeFormat[0]);
          // let month = parseInt(timeFormat[1]);
          // let day = parseInt(timeFormat[2]);
          this.form.fpTime = data;
          this.form.fpTimeFormat = data;
        }else if (type == 'time'){
          this.form.time = data;
        }else if (type == 'type'){

          /*let obj = {};
          obj = this.moneyList.find((item)=>{
            return item.value === data;
          });
          this.form.typeStr = obj.label;
          this.form.type = data;
          this.form.typeId = data;*/
          console.info(11111111111)
          this.form.type = data[data.length-1]
          this.form.typeId = data[data.length-1]
          this.form.typeStr = this.moneyMapping[this.form.typeId]? this.moneyMapping[this.form.typeId].label:''
        }
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      closeDialog(){
        console.log(this.$parent.dialogChildVisible);
        this.form = {
          index: '',
          type: '',
          typeId: '',
          typeStr: '',
          processId: '',
          time: '',
          money: 0,
          moneyCount: 0,
          xfInfo: '',
          fp: [],
          fpType: '',
          fpCode: '',
          fpTime: '',
          fpTimeFormat: '',
          fpNo: '',
          fpMoney: 0,
          fpHsMoney: 0,
          fpNHSMoney: 0,
          fpVerCode: '',
          sl: 0,
          slStr: '0%',
          se: 0,
          files: [],
          fileNames: [],
          oprType: '1'
        }
        this.dataModalList = [];
        this.dataModalBakList = [];
        this.deptStatusContent = [];
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        this.$parent.dialogChildVisible = false;
      },
      cancelDrawDialog(){
        this.dialogVisibleInner = false;
      },
      closeDetailDialog(){
        this.$parent.dialogSystemServer = false
        this.btnLoading = false;
        this.dialogVisibleInner = false;
      },
      saveForm(type){
        this.$refs.form.validate().then(() => {
          let orderInfoList = {
            oprType: this.form.oprType,
            type: parseInt(this.form.type),
            typeStr: this.form.typeStr,
            processId: this.form.processId,
            fpType: this.form.fpType,
            time: this.form.time,
            amount: this.form.money,
            xfDes: this.form.xfInfo,
            sl: this.form.sl,
            se: this.form.se,
            fpNo: this.form.fpNo,
            fpCode: this.form.fpCode,
            fpCheckCode: this.form.fpVerCode,
            fpTime: this.form.fpTime,
            files: this.form.files,
            filename: this.form.fileNames,
            fp: this.form.fp
          }
          this.$parent.form.orderInfoList.push(orderInfoList);
          this.dialogVisibleInner = false;
        });
      }
    }
  }
</script>

<style scoped>
.rp-img{
  height: 35px;
  width: 35px;
  border: 0px solid #dddddd;
  position: relative;
  top: 1px;
}
.system-item-block{

}
.system-order-main-block{
  padding: 0px 0px;
  position: relative;
}
.system-order-item-block{
  border-radius: 5px;
  background: #FFFFFF;
  padding: 5px 10px;
  margin-bottom: 0px;
  position: relative;
}
.system-order-main-block::after {
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  right: 16px;
  bottom: 0;
  left: 16px;
  border-bottom: 0px solid #ebedf0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.system-order-info-item-block{
  height: 35px;
  line-height: 35px;
}
</style>
