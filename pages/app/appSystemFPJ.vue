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
            <span class="color-white font-size-14 font-bold">{{$t('发票夹')}}</span>
          </div>
        </van-col>
        <van-col span="5" class="text-right padding-lr-10">
          <label class="font-bold font-size-14" @click="addFp">
            <i class="fa fa-plus"></i>
            {{$t("添加")}}
          </label>
        </van-col>
      </van-row>
    </div>
    <div class="content-block">
      <div class="content-title-block">
        <el-row>
          <el-col :span="12">
            <div class="text-left padding-lr-10">
              <van-button type="default" size="small" class="width-100" style="position: relative;top: -5px" @click="selBlockFun('type')">
                <span>{{ searchTypeStr }}</span>
                <i class="fa fa-angle-down"></i>
              </van-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text-right padding-lr-10">
              <van-button type="default" size="small" style="position: relative;top: -5px;width: 120px" @click="selBlockFun('time')">
                <span>{{ dateTime }}</span>
                <i class="fa fa-calendar"></i>

                <div v-if="startTime != '' && endTime != ''" style="position: absolute;right: 0;top:0;height: 100%;width: 20px;background: #cccccc" @click.stop="removeTime">
                  <span class="fa fa-trash" style="margin: 0px auto;position: relative;top: 8px"></span>
                </div>
              </van-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="padding-lr-10 padding-tb-10" :style="{height: divHeight22.height}" style="overflow-y: auto;">
        <div class="content-main-block margin-bottom-10" v-for="(item, index) in tableData" :key="index" @click="detailInfo(item)">
          <div class="font-size-12">
            <el-row>
              <el-col :span="12">
                <div>
                  <div>
                    <span>{{item.time}}</span>
                    <span class="color-success" v-if="item.reals == true">({{$t("已验真")}})</span>
                    <span class="color-danger" v-if="item.reals == false">({{$t("未验真")}})</span>
                  </div>
                  <div>
                    <span class="color-success" v-if="item.used == true">{{$t("已使用")}}</span>
                    <span class="color-warning" v-if="item.used == false">{{$t("未使用")}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12" class="text-right" style="position: relative">
                <van-button size="mini" type="primary" style="position: absolute;right: 50px; top: -10px" @click.stop="editFp(item)">
                  <i class="fa fa-edit margin-right-5"></i>
                  {{$t("编辑")}}
                </van-button>

                <van-button size="mini" type="danger" style="position: absolute;right: -10px; top: -10px" @click.stop="delFp(item)">
                  <i class="fa fa-edit margin-right-5"></i>
                  {{$t("删除")}}
                </van-button>
              </el-col>
            </el-row>
          </div>
          <div class="font-size-14 margin-top-20">
            <el-row>
              <el-col :span="12">
                <div class="color-sub-title">
                  <div class="font-bold moon-content-text-ellipsis-class">{{item.header}}</div>
                </div>
              </el-col>
              <el-col :span="12" class="text-right color-success">
                <span class="font-bold">¥{{item.total_amount}}</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model="showFormPicker" position="bottom" :style="{ height: divHeight13.height }" @close="closePop">
      <div style="height: 40px;line-height: 40px;" class="bg-app-success">
        <el-row>
          <el-col :span="6">
            <div class="text-left">
              <div class="color-white text-center" style="width: 60px;" @click="cancelPop">
                <label class="color-white">{{$t("关闭")}}</label>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text-center">
              <span class="color-white font-bold">{{$t("账户设置")}}</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="text-right" style="position: relative">
              <div class="color-white text-center" style="width: 60px;position: absolute;right: 0;top: 0" v-loading="btnLoading" element-loading-background="rgba(0, 0, 0, 0)" @click="btnLoading == true ? '' : okPop()">
                <label class="color-white">{{$t("确定")}}</label>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div :style="{height: divHeight13.height1 - 40 +'px'}" style="overflow-y: auto;background: #ebebeb">
        <div class="content-show-block">
          <van-form ref="form" label-width="90" label-align="left" input-align="right" error-message-align="right">
            <van-field readonly
                       :name="$t('发票类型')"
                       v-model="form.type"
                       :label="$t('发票类型')"
                       :placeholder="$t('请设置信息')"
                       :rules="[{ required: true, message: $t('请填写信息') }]" @click="selBlockFun('fpType')">
            <span slot="right-icon">
              <i class="fa fa-angle-right color-muted" style="font-size: 20px"></i>
            </span>
            </van-field>
            <van-field required :name="$t('发票代码')" v-model="form.code" :label="$t('发票代码')" :placeholder="$t('请设置信息')" :rules="[{ required: true, message: $t('请填写信息') }]">
            <span slot="right-icon">
              <i class="fa fa-edit color-success"></i>
            </span>
            </van-field>
            <van-field required :name="$t('发票号码')" v-model="form.no" :label="$t('发票号码')" :placeholder="$t('请设置信息')" :rules="[{ required: true, message: $t('请填写信息') }]">
              <span slot="right-icon">
                <i class="fa fa-edit color-success"></i>
              </span>
            </van-field>
            <van-field required :name="$t('发票验证码')" v-model="form.checkCode" :label="$t('发票验证码')" :placeholder="$t('请设置信息')" :rules="[{ required: true, message: $t('请填写信息') }]">
              <span slot="right-icon">
                <i class="fa fa-edit color-success"></i>
              </span>
            </van-field>
            <van-field
              required
              :name="$t('发票金额')"
              v-model="form.amount"
              :label="$t('发票金额')"
              :placeholder="$t('请设置信息')"
              :rules="[{ pattern: moneyReg, message: '请设置整数或者2位小数' }]">
            <span slot="right-icon">
              <i class="fa fa-edit color-success"></i>
            </span>
            </van-field>
            <van-field readonly :name="$t('开票日期')" v-model="form.kpTime" :label="$t('开票日期')" :placeholder="$t('请设置信息')" @click="selBlockFun('kpTime')">
            <span slot="right-icon">
              <i class="fa fa-angle-right color-muted" style="font-size: 20px"></i>
            </span>
            </van-field>
            <van-field readonly :name="$t('税率')" v-model="form.slStr" :label="$t('税率')" :placeholder="$t('请设置信息')" @click="selBlockFun('sl')">
            <span slot="right-icon">
              <i class="fa fa-angle-right color-muted" style="font-size: 20px"></i>
            </span>
            </van-field>
            <van-field readonly :name="$t('税额')" :label="$t('税额')">
              <template #input>
                <div class="margin-right-5">{{(form.amount/(1+form.sl) * (form.sl/100)).toFixed(2)}}</div>
              </template>
            </van-field>
            <van-field :name="$t('发票附件')" :label="$t('发票附件')">
              <template #input>
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
                  :data="{path: 'appFormFile'}"
                  :auto-upload="true"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :on-error="handleAvatarError"
                >
                  <van-icon name="plus" size="20" class="color-muted"/>
                </el-upload>
              </template>
            </van-field>
            <van-field :name="$t('销售方名称')" v-model="form.xs" :label="$t('销售方名称')" :placeholder="$t('请设置信息')">
              <span slot="right-icon">
                <i class="fa fa-edit color-success"></i>
              </span>
              </van-field><van-field :name="$t('购买方名称')" v-model="form.gm" :label="$t('购买方名称')" :placeholder="$t('请设置信息')">
              <span slot="right-icon">
                <i class="fa fa-edit color-success"></i>
              </span>
            </van-field>
          </van-form>
        </div>
      </div>
    </van-popup>

    <van-popup v-model="showKpTimePicker" position="bottom">
      <van-datetime-picker
        type="date"
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="onTimeConfirm"
        @cancel="showKpTimePicker = false"
      />
    </van-popup>

    <van-popup v-model="showOprPicker" position="bottom" :style="{ height: '80px' }">
      <div>
        <el-row>
          <el-col :span="12" @click.native="oprFun(1)">
            <div class="text-center">
              <el-upload
                class="avatar-uploader-quill margin-top-10"
                :action="uploadFpOcrAction"
                :data="{path: 'appFormFile'}"
                :auto-upload="true"
                :show-file-list="false"
                :on-success="handleAvatarFpOcrSuccess"
                :on-error="handleAvatarFpOcrError"
              >
                <div>
                  <i class="fa fa-camera color-grand" style="font-size: 28px"></i>
                </div>
                <div class="margin-top-5">
                  <span class="font-size-14 color-sub-title font-bold margin-top-5">{{$t("拍照")}}</span>
                </div>
              </el-upload>
            </div>
          </el-col>
          <el-col :span="12" @click.native="oprFun(2)">
            <div class="text-center">
              <div class="margin-top-10">
                <i class="fa fa-edit color-success" style="font-size: 28px"></i>
              </div>
              <div class="margin-top-5">
                <span class="font-size-14 color-sub-title font-bold">{{$t("手填")}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </van-popup>

    <van-popup v-model="showDetailPicker" round position="bottom" :style="{ height: '600px' }">
      <div class="padding-lr-10 padding-tb-10">
        <div>
          <el-row>
            <el-col :span="18">
              <div class="margin-top-5">
                <span class="color-danger">{{fpDetailInfo.title ? fpDetailInfo.title : fpDetailInfo.type}}</span>
                <template v-if="fpDetailInfo.reals">
                  <span class="color-success" v-if="fpDetailInfo.reals == true">({{$t('已验真')}})</span>
                  <span class="color-warning" v-if="fpDetailInfo.reals == false">({{$t('未验真')}})</span>
                </template>
                <template v-if="fpDetailInfo.real">
                  <span class="color-success" v-if="fpDetailInfo.real == true">({{$t('已验真')}})</span>
                  <span class="color-warning" v-if="fpDetailInfo.real == false">({{$t('未验真')}})</span>
                </template>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="text-right">
                <el-button v-if="fpDetailInfo.reals == false || fpDetailInfo.real == false" plain type="success" size="small" @click="checkFpInfo(fpDetailInfo)">{{$t('验真')}}</el-button>
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
                    <span>{{fpDetailInfo.totalAmount ? fpDetailInfo.totalAmount : fpDetailInfo.total_amount}}{{$t("元")}}</span>
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
                    <span>{{fpDetailInfo.invoiceTax ? fpDetailInfo.invoiceTax : fpDetailInfo.tax_amount}}{{$t("元")}}</span>
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
                    <span>{{fpDetailInfo.purchaserName ? fpDetailInfo.purchaserName : fpDetailInfo.buyer}}</span>
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
                    <span>{{fpDetailInfo.purchaserTaxNumber ? fpDetailInfo.purchaserTaxNumber : '--'}}</span>
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
                    <span>{{fpDetailInfo.sellerName ? fpDetailInfo.sellerName : fpDetailInfo.header}}</span>
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
                    <span>{{fpDetailInfo.invoiceDate ? fpDetailInfo.invoiceDate : fpDetailInfo.time}}</span>
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
                    <span>{{fpDetailInfo.invoiceCode ? fpDetailInfo.invoiceCode : fpDetailInfo.code}}</span>
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
                    <span>{{fpDetailInfo.invoiceNumber ? fpDetailInfo.invoiceNumber : fpDetailInfo.no}}</span>
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
                    <span>{{fpDetailInfo.sellerContactInfo ? fpDetailInfo.sellerContactInfo : '--'}}</span>
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
                    <span>{{fpDetailInfo.remarks ? fpDetailInfo.remarks : '--'}}</span>
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
                    <span>{{item.taxRate}}%</span>
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
    </van-popup>

    <van-action-sheet v-model="showBottomPicker" :actions="typeOptions" @select="onPaySelect" />
    <van-action-sheet v-model="showTypePicker" :actions="filterFpType" :cancel-text="$t('取消')" :description="$t('发票类型')" @select="onFpSelect" />
    <van-action-sheet v-model="showSlPicker" :actions="slTypeOptions" :cancel-text="$t('取消')" :description="$t('税率')" @select="onSlSelect" />
    <van-calendar v-model="showTimePicker" type="range" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" />
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
  import da from "element-ui/src/locale/lang/da";
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
        moneyReg: /^([0-9]+[0-9]*(\.[0-9]{1,2})?|0\.[1-9][0-9]?|0\.0[1-9])$/,
        uploadFpOcrAction: common.fp_ocr_save,
        uploadAction: common.upload_file,
        showBottomPicker: false,
        showTypePicker: false,
        showTimePicker: false,
        showBottomType: false,
        showFormPicker: false,
        showSlPicker: false,
        showKpTimePicker: false,
        btnLoading: false,
        showOprPicker: false,
        showDetailPicker: false,
        active: 6,
        tableData: [],
        searchType: '0',
        searchTypeStr: this.$t("全部"),
        searchTime: this.$t("选择日期"),
        searchTimeDate: [],
        dateTime: this.$t("选择日期"),
        currentDate: new Date(),
        minDate: new Date(2022, 0, 1),
        maxDate: new Date(new Date().getFullYear(), 11, 31),
        startTime: '',
        endTime: '',
        fpDetailInfo: {},
        typeOptions: [
          {label:this.$t("全部"), value: '', text:this.$t("全部"), name:this.$t("全部")},
          {label:this.$t("未使用"), value: false, text:this.$t("未使用"), name:this.$t("未使用")},
          {label:this.$t("已使用"), value: true, text:this.$t("已使用"), name:this.$t("已使用")}
        ],
        slTypeOptions: [
          {
            label: '0%',
            text: '0%',
            value: 0,
            name: '0%',
          },{
            label: '3%',
            text: '3%',
            value: 3,
            name: '3%',
          },{
            label: '6%',
            text: '6%',
            value: 6,
            name: '6%',
          },{
            label: '11%',
            text: '11%',
            value: 11,
            name: '11%',
          },{
            label: '17%',
            text: '17%',
            value: 17,
            name: '17%',
          }
        ],
        form: {
          id: '',
          type: '',
          typeId: '',
          amount: 0,
          no: '',
          code: '',
          files: [],
          fileNames: [],
          se: '0.00',
          slStr: '0%',
          sl: 0,
          kpTime: '',
          kpTimeFormat: '',
          xs: '',
          gm: '',
          checkCode : ''
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
      init() {
        let params = {
          used: this.searchType,
          beginTime: this.startTime,
          endTime: this.endTime,
        };
        this.$axios.get(common.invoice_list, {params: params}).then(res => {
          if (res.data.data) {
            this.tableData = res.data.data;
          }
        });
      },
      returnIndex(){
        let page = this.$route.query.page ? this.$route.query.page : '/app/appIndex';
        console.log(page);
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
      formatDate(date) {
        //date.getMonth() + 1)
        //date.getDate()
        let monthInt = parseInt(date.getMonth());
        let dayInt = parseInt(date.getDate());
        let month = monthInt + 1;
        let day = dayInt + 1;

        return `${date.getFullYear()}-${month > 10 ? month : '0'+month}-${day > 10 ? day : '0'+day}`;
      },
      formatDate2(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      onPaySelect(item) {
        this.searchTypeStr = item.name;
        this.searchType = item.value;
        this.init();
        this.showBottomPicker = false;
      },
      onFpSelect(item) {
        this.form.type = item.name;
        this.form.typeId = item.value;
        this.showTypePicker = false;
      },
      onSlSelect(item) {
        this.form.slStr = item.name;
        this.form.sl = item.value;
        this.showSlPicker = false;
      },
      handleAvatarSuccess(res, file){
        // 如果上传成功
        if (res.code == '200') {
          this.form.files = [];
          this.form.fileNames = [];
          this.form.files.push(res.data.url);
          this.form.fileNames.push(file.name);
        } else {
          Toast(res.desc);
        }
      },
      handleAvatarError(res, file){

      },
      handleAvatarFpOcrSuccess(res, file){
        // 如果上传成功
        if (res.code == '200') {
          this.init();
          this.showOprPicker = false;
        } else {
          Toast(res.desc);
        }
      },
      handleAvatarFpOcrError(res, file){

      },
      deleteRemoveImg(index){
        this.form.files.splice(index, 1);
        this.form.fileNames.splice(index, 1);
      },
      onConfirm(date){
        const [start, end] = date;
        this.dateTime = `${this.formatDate2(start)} - ${this.formatDate2(end)}`;
        this.startTime = `${this.formatDate(start)}`;
        this.endTime = `${this.formatDate(end)}`;

        this.init();
        this.showTimePicker = false;
      },
      selBlockFun(type){
        if (type == 'type'){
          this.showBottomPicker = true;
        }else if (type == 'fpType'){
          this.showTypePicker = true;
        }else if (type == 'time'){
          this.showTimePicker = true;
        }else if (type == 'sl'){
          this.showSlPicker = true;
        }else if (type == 'kpTime'){
          this.showKpTimePicker = true;
        }
      },
      oprFun(type){
        if (type == 2){
          this.showOprPicker = false;
          this.showFormPicker = true;
        }
      },
      removeTime(){
        this.dateTime = this.$t("选择时间");
        this.startTime = '';
        this.endTime = '';
        this.init();
      },
      addFp(){
        this.showOprPicker = true;
      },
      closePop(){
        this.form = {
          id: '',
          type: '',
          typeId: '',
          amount: 0,
          no: '',
          code: '',
          files: [],
          fileNames: [],
          se: '0.00',
          slStr: '0%',
          sl: 0,
          kpTime: '',
          kpTimeFormat: '',
          xs: '',
          gm: '',
          checkCode : ''
        }
        this.btnLoading = false;
      },
      onTimeConfirm(time) {
        this.form.kpTime = this.$moment(time).format("YYYY年MM月DD日");;
        this.form.kpTimeFormat = this.$moment(time).format("YYYY-MM-DD");
        this.showKpTimePicker = false;
      },
      formatter(type, val) {
        if (type === 'year') {
          return `${val}年`;
        } else if (type === 'month') {
          return `${val}月`;
        } else if (type === 'day') {
          return `${val}日`;
        }
        return val;
      },
      detailInfo(item){
        console.log(item,JSON.parse(item.orc_content));
        if (item.reals == true){
          this.fpDetailInfo = JSON.parse(item.orc_content);
          //this.fpDetailInfo['title'] = item.type;
        }else {
          this.fpDetailInfo = item;
          //this.fpDetailInfo['type'] = item.type;
        }
        this.showDetailPicker = true;
      },
      checkFpInfo(item){
        let params = {
          id: item.id
        };
        let url = common.fp_info_check;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.fpDetailInfo = item;
            this.init();
            this.showDetailPicker = false;
          }else {
            Toast(res.data.desc);
          }
        });
      },
      editFp(item){
        console.log(item);
        let time = '';
        let timeFormat = '';
        if (item.time && item.time != ''){
          let timeArr = item.time.split("-");
          time = timeArr[0]+"年"+timeArr[1]+"月"+timeArr[2]+"日";
          timeFormat = item.time;
        }
        this.form = {
          id: item.id,
          type: item.name,
          typeId: item.type,
          amount: item.total_amount,
          no: item.no,
          code: item.code,
          files: item.url == '' ? [] : [item.url],
          fileNames: [],
          se: item.tax_amount,
          slStr: item.tax_rate + '%',
          sl: item.tax_rate,
          kpTime: time,
          kpTimeFormat: timeFormat,
          xs: item.header,
          gm: item.buyer,
          checkCode : item.check_code
        };
        this.showFormPicker = true;
      },
      delFp(data){
        let params = {
          id: data.id
        };
        let url = common.invoice_del;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.init();
            Toast(res.data.desc);
          }else {
            Toast(res.data.desc);
          }
        });
      },
      cancelPop(){
        this.showFormPicker = false;
      },
      okPop(){
        this.$refs.form.validate().then(() => {
          let params = {
            name: this.form.type,
            url: this.form.files.length > 0 ? this.form.files[0] : '',
            type: this.form.typeId,
            no: this.form.no,
            code: this.form.code,
            checkCode: this.form.checkCode,
            totalAmount: this.form.amount,
            taxRate: this.form.sl,
            header: this.form.xs,
            buyer: this.form.gm,
            time: this.form.kpTimeFormat,
            real: false
          }
          if (this.form.id != ''){
            params['id'] = this.form.id;
          }
          let url = common.invoice_save;
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              this.init();
              Toast(res.data.desc);
              this.showFormPicker = false;
            }else {
              Toast(res.data.desc);
            }
            this.btnLoading = false;
          });
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
  padding: 0px 0px;
}
.content-main-block{
  background: #FFFFFF;
  border-radius: 5px;
  padding: 10px 10px;
  box-shadow: 1px 2px 1px 2px #cccccc;
}
.content-title-block{
  height: 50px;
  line-height: 50px;
  background: #FFFFFF;
}
.rp-img{
  height: 25px;
  width: 25px;
  border: 0px solid #dddddd;
}
.content-show-block{
  background: #ffffff;
  border-radius: 5px;
  padding: 10px 10px;
  margin: 10px 10px;
}
</style>
