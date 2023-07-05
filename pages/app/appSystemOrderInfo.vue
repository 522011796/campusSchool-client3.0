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
            <span class="color-white font-size-14 font-bold">{{$t('单据信息')}}</span>
          </div>
        </van-col>
        <van-col span="5">
          &nbsp;
        </van-col>
      </van-row>
    </div>
    <div class="content-block" :style="{height: divHeight20.height}" style="overflow-y: auto">
      <div class="content-main-block">
        <van-form ref="form" label-width="100" label-align="right" input-align="right" error-message-align="right">
          <van-field required v-model="form.type" :name="$t('费用类型')" :label="$t('费用类型')" :rules="[{ required: true, message: $t('请设置信息') }]" @click="selBlockFun($t('费用类型'),'type')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.typeStr}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('费用类型'),'type')"/>
            </template>
          </van-field>
          <van-field required v-model="form.time" :name="$t('日期')" :label="$t('日期')" :rules="[{ required: true, message: $t('请设置信息') }]" @click="selBlockFun($t('日期'),'time')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.time}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('日期'),'time')"/>
            </template>
          </van-field>
          <van-field
            v-model="form.money"
            required
            :label="$t('金额')"
            :name="$t('金额')"
            placeholder="请填写信息"
            :rules="[{ pattern: moneyReg, message: '请设置整数或者2位小数' }]"
          />
          <van-field
            v-model="form.xfInfo"
            :name="$t('消费说明')"
            :label="$t('消费说明')"
            :placeholder="$t('请填写信息')"
          />
          <template>
            <van-field v-model="form.money" :name="$t('发票')" :label="`${$t('发票')}(${form.fp.length}${$t('张')})`">
              <template #input>
                <template v-if="uploadLoading == false">
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
                  <a href="javascript:;" v-if="form.fp.length == 0" class="color-grand margin-right-10" @click="selFpList">{{$t('选择')}}</a>
                  <a href="javascript:;" v-if="(form.fp.length > 0 && form.fp[0].real == false) || form.fp.length == 0" class="color-success" @click="checkFpInfo">{{$t('验真')}}</a>
                </template>

                <template v-if="uploadLoading == true" style="position: relative">
                  <span>
                    <a href="javascript:;" class="color-muted margin-right-10">{{$t('上传')}}</a>
                    <a href="javascript:;" v-if="form.fp.length == 0" class="color-muted margin-right-10">{{$t('选择')}}</a>
                    <a href="javascript:;" v-if="(form.fp.length > 0 && form.fp[0].real == false) || form.fp.length == 0" class="color-muted">{{$t('验真')}}</a>
                  </span>
                </template>
              </template>
            </van-field>

            <template v-if="form.fp.length > 0">
              <div class="system-order-main-block">
                <div v-for="(item, index) in form.fp" :key="index" class="system-order-item-block" @click="seeFpInfo(item)">
                  <div class="text-center" style="position: absolute;right: 0px;top:0px;background: #cccccc;height: 25px;width: 25px;border-top-right-radius: 5px">
                    <i class="fa fa-times" style="font-size: 15px;margin-top: 3px" @click.stop="removeOrderItem(index)"></i>
                  </div>
                  <div>
                    <span class="color-muted">{{ item.invoiceDate }}</span>
                    <span class="color-success" v-if="item.real == true">({{$t('已验真')}})</span>
                    <span class="color-warning" v-if="item.real == false">({{$t('未验真')}})</span>
                  </div>
                  <div class="margin-top-5 font-size-14">
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
          </template>

          <template>
            <van-field v-model="form.fpType" :name="$t('发票类型')" :label="$t('发票类型')" @click="selBlockFun($t('发票类型'),'fpType')">
              <template #input>
                <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.fpType}}</div>
                <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('发票类型'),'fpType')"/>
              </template>
            </van-field>
            <van-field v-model="form.fpTime" :name="$t('发票日期')" :label="$t('发票日期')" @click="selBlockFun($t('发票日期'),'fpTime')">
              <template #input>
                <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.fpTime}}</div>
                <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('发票日期'),'time')"/>
              </template>
            </van-field>
            <van-field v-model="form.fpNo" :name="$t('发票号码')" :label="$t('发票号码')" :placeholder="$t('请填写信息')">

            </van-field>
            <van-field v-model="form.fpCode" :name="$t('发票代码')" :label="$t('发票代码')" :placeholder="$t('请填写信息')">

            </van-field>
            <van-field v-model="form.fpVerCode" :name="$t('发票验证码')" :label="$t('发票验证码')" :placeholder="$t('请填写信息')">

            </van-field>
            <van-field
              v-if="form.fpType == '增值税专用发票' || form.fpType == '机动车销售统一发票' || form.fpType == '增值税电子专用发票'"
              v-model="form.fpHsMoney"
              :name="$t('含税金额')"
              :label="$t('含税金额')"
              placeholder="请填写信息"
              :rules="[{ pattern: moneyReg, message: '请设置整数或者2位小数' }]">
            </van-field>
            <van-field
              v-if="form.fpType == '电子发票(增值税普通发票)' || form.fpType == '电子发票(增值税专用发票)'"
              v-model="form.fpNHSMoney"
              :name="$t('不含税金额')"
              :label="$t('不含税金额')"
              placeholder="请填写信息"
              :rules="[{ pattern: moneyReg, message: '请设置整数或者2位小数' }]">
            </van-field>
<!--            <van-field v-model="form.sl" :name="$t('税率')" :label="$t('税率')" :rules="[{ required: true, message: $t('请设置信息') }]" @click="selBlockFun($t('税率'),'sl')">-->
<!--              <template #input>-->
<!--                <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.slStr}}</div>-->
<!--                <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('税率'),'sl')"/>-->
<!--              </template>-->
<!--            </van-field>-->
<!--            <van-field v-model="form.sl" :name="$t('税额')" :label="$t('税额')" :rules="[{ required: true, message: $t('请设置信息') }]" @click="selBlockFun($t('税额'),'se')">-->
<!--              <template #input>-->
<!--                <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{(form.se).toFixed(2)}}</div>-->
<!--                <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('税额'),'se')"/>-->
<!--              </template>-->
<!--            </van-field>-->
          </template>
          <van-field v-model="form.sl" :name="$t('其他附件')" :label="$t('其他附件')" :rules="[{ required: true, message: $t('请设置信息') }]" @click="selBlockFun($t('其他附件'),'file')">
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
                multiple
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
        </van-form>
      </div>

      <div class="content-botton-block text-center">
        <el-row style="margin-top: 8px" :gutter="16">
          <el-col :span="12">
            <div class="text-center padding-lr-10">
              <van-button round size="small" block @click="cancelOrderOpr">{{$t("取消")}}</van-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text-center padding-lr-10">
              <van-button round size="small" type="info" block @click="okOrderOpr">{{$t("提交")}}</van-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <van-popup round v-model="showBottomPicker" position="bottom" :style="{ height: '400px' }" @close="closePop">
      <div style="height: 40px;line-height: 40px;background: #f5f5f5">
        <el-row>
          <el-col :span="6">
            <div class="text-center" @click="cancelPop">
              <a href="javascript:;" class="color-muted">{{$t("取消")}}</a>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text-center">
              <span>{{pageTypeStr}}</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="text-center" @click="okPop">
              <a href="javascript:;" class="color-success">{{$t("确认")}}</a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div :style="divHeight18">
        <template v-if="pageType == 'type'">
          <van-picker
            ref="typeRef"
            :columns="moneyList"
          />
        </template>


        <template v-if="pageType == 'sl'">
          <van-picker
            ref="slRef"
            :columns="slTypeOptions"
          />
        </template>

        <template v-if="pageType == 'fpType'">
          <van-picker
            ref="fpTypeRef"
            :columns="filterFpType"
          />
        </template>
      </div>
    </van-popup>

    <van-popup v-model="showTimePicker" position="bottom">
      <van-datetime-picker
        type="date"
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="onTimeConfirm"
        @cancel="showTimePicker = false"
      />
    </van-popup>

    <van-popup v-model="showFpPicker" position="bottom" :style="{ height: '400px' }" @close="closePop">
      <div style="height: 40px;line-height: 40px;background: #f5f5f5">
        <el-row>
          <el-col :span="6">
            <div class="text-center" @click="cancelFpPop">
              <a href="javascript:;" class="color-muted">{{$t("取消")}}</a>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text-center">
              <span>{{$t('发票')}}</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="text-center" @click="okFpPop">
              <a href="javascript:;" class="color-success">{{$t("确认")}}</a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div :style="divHeight21" class="padding-lr-10 padding-tb-10">
        <div v-for="(item, index) in fpList" :key="index" :class="selFpObj.no == item.no ? 'card-list-active-block' : 'card-list-block'" @click="selFpInfo(item, index)">
          <div>
            <span class="color-muted">{{ item.no }}</span>
            <span class="color-success" v-if="item.reals == true">({{$t('已验真')}})</span>
            <span class="color-warning" v-if="item.reals == false">({{$t('未验真')}})</span>
          </div>
          <div class="margin-top-5 font-size-14">
            <div class="system-order-info-item-block">
              <el-row>
                <el-col :span="12">
                  <span class="color-muted font-bold">{{ item.purchaserName }}</span>
                </el-col>
                <el-col :span="12" class="text-right">
                  <span class="color-success font-bold">¥{{ item.total_amount }}</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </van-popup>

    <van-popup v-model="showFpDetailPicker" round position="bottom" :style="{ height: '600px' }">
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
    </van-popup>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  import HBarChart from "~/components/charts/HBarChart";
  import {datalist} from "caniuse-lite/data/features";
  import MySex from "~/components/MySex.vue";
  import {Toast} from "vant";
  import {MessageWarning} from "~/utils/utils";
  export default {
    name: 'appSystemOrderInfo',
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
        uploadFpCheckAction: common.fp_check,
        uploadFpOcrAction: common.fp_ocr,
        active: 6,
        serverAppList: [],
        noticeAppList: [],
        tableTeacherData: [],
        tableTeacherAccountData: [],
        tableObjectData: [],
        tableHtData: [],
        tableTagData: [],
        searchTreeData: '',
        dataTreeList: [],
        fpList: [],
        moneyList: [],
        defaultMenuActive: '',
        isCollapse: false,
        showBottom: false,
        showBottomPicker: false,
        showTimePicker: false,
        showFpPicker: false,
        showFpDetailPicker: false,
        uploadLoading: false,
        departmentPath: '',
        pageType: '',
        pageTypeStr: '',
        searchTeacherValue: '',
        selFpObj: {},
        fpDetailInfo: {},
        fpDetailInfoBak: {},
        fpDetailRealInfo: {},
        moneyReg: /^([0-9]+[0-9]*(\.[0-9]{1,2})?|0\.[1-9][0-9]?|0\.0[1-9])$/,
        leftHeight: {
          'height': '100%',
          'width': '0%'
        },
        toggleTag: {
          'left': '0'
        },
        formList: [],
        formValue: '',
        serchName: '',
        showCalendar: false,
        dateTime: '',
        searchDept: [],
        searchCollege: [],
        currentDate: new Date(),
        minDate: new Date(2022, 0, 1),
        maxDate: new Date(new Date().getFullYear(), 11, 31),
        searchTreeTempIdData: [],
        searchTreeTempValueData: [],
        dataModalList: [],
        dataModalBakList: [],
        orderInfoList: [],
        formObj: {},
        slTypeOptions: [
          {
            label: '0%',
            text: '0%',
            value: 0
          },{
            label: '3%',
            text: '3%',
            value: 3
          },{
            label: '6%',
            text: '6%',
            value: 6
          },{
            label: '11%',
            text: '11%',
            value: 11
          },{
            label: '17%',
            text: '17%',
            value: 17
          }
        ],
        fpOprType: 1,
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
      this.$nextTick(() => {

      });
    },
    created() {
      this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
      this.orderInfoList = this.$route.params.orderInfoList && this.$route.params.orderInfoList.length > 0 ? this.$route.params.orderInfoList : [];
      this.formObj = this.$route.params.formObj && this.$route.params.formObj != '' ? this.$route.params.formObj : {};
    },
    methods: {
      layoutInit(){

      },
      initMoneyList(){
        let params = {
          processId: this.$route.query.id && this.$route.query.id != '' ? this.$route.query.id : ''
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
      initFpList(){
        let params = {};
        this.$axios.get(common.fp_list, {params: params, loading: false}).then(res => {
          if (res.data.code == 200) {
            if (res.data.data){
              this.fpList = res.data.data;
            }
          }
        })
      },
      initOcr(no){
        let params = {
          no: no
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.fp_ocr, params, {loading: false}).then(res => {
          if (res.data.code == 200) {
            this.setBackShowData(res.data);
          }
        })
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
      seeFpInfo(data){
        console.log(data);
        this.fpDetailInfo = data;
        this.fpDetailInfoBak = data;
        this.showFpDetailPicker = true;
      },
      returnIndex(){
        let page = this.$route.query.page ? this.$route.query.page : '/app/appIndex';
        let pageName = this.$route.query.name ? this.$route.query.name : 'app-appIndex';
        let pageParent = this.$route.query.pageParent ? this.$route.query.pageParent : 'app-appIndex';
        this.$router.push({
          name: pageName,
          query: {
            id: this.$route.query.id,
            activeType: this.$route.query.activeType,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId,
            page: pageParent
          },
          params: {
            orderInfoList: this.orderInfoList,
            formObj: this.formObj
          }
        });
      },
      selTeacherInfo(data){
        this.form.user = data.real_name;
        this.form.userId = data.user_id;
        this.showBottomPicker = false;
      },
      selTeacherAccountInfo(data){
        this.form.skAccount = data.account_num;
        this.form.skAccountName = data.account_name + "("+data.account_num+")";
        this.showBottomPicker = false;
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
      async selBlockFun(data, type){
        this.pageType = type;
        this.pageTypeStr = data;
        if (type == 'type'){
          this.initMoneyList();
          this.showBottomPicker = true;
        }else if (type == 'time'){
          this.showTimePicker = true;
        }else if (type == 'fpTime'){
          let timeFormat = "";
          if (this.form.fpTimeFormat != ""){
            timeFormat = this.form.fpTimeFormat.split("-");
            let year = parseInt(timeFormat[0]);
            let month = parseInt(timeFormat[1]);
            let day = parseInt(timeFormat[2]);
            console.log(year, month-1, day);
            this.currentDate = new Date(year, month-1, day);
          }
          this.showTimePicker = true;
        }else if (type == 'account'){
          this.initTeacherAccount();
          this.showBottomPicker = true;
        }else if (type == 'fpType'){
          this.showBottomPicker = true;
        }else if (type == 'sl'){
          this.showBottomPicker = true;
        }else if (type == 'upload'){
          document.querySelector('.avatar-uploader-quill input').click()
        }else if (type == 'orderInfo'){
          console.log(111);
        }
      },
      resetProcessPop(){
        if (this.$refs['SelectorDept']){
          this.dataModalList = this.dataModalBakList;
          this.$refs['SelectorDept'].clearCheckedNodes();
          this.$refs['SelectorDept'].activePath = [];
        }
      },
      searchPop(event){
        if (this.pageType == 'dept'){
          this.searchTreeTempIdData = event;
        }
      },
      onSearchTeacher(event){
        if (this.searchTeacherValue == ''){
          return;
        }
        this.initTeacher();
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
      handleChangeOpr(event){
        this.form.oprType = event;
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
      handleAvatarFpCheckSuccess(res, file){
        // 如果上传成功
        this.form.fp = [];
        if (res.code == '200') {
          console.log(res);
        } else {
          Toast(res.desc);
        }
      },
      handleAvatarFpCheckError(res, file){

      },
      handleAvatarFpOcrProcess(event, file, fileList){
        this.uploadLoading = true;
      },
      handleAvatarFpOcrSuccess(res, file){
        // 如果上传成功
        if (res.code == '200') {
          console.log(res.data);
          this.setBackShowData(res.data);
        } else {
          Toast(res.desc);
        }
        this.uploadLoading = false;
      },
      handleAvatarFpOcrError(res, file){
        this.uploadLoading = false;
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
      closePop(){
        this.searchTreeTempIdData = [];
        this.searchTreeTempValueData = [];
        this.searchTeacherValue = '';
        this.tableTeacherData = [];
        this.tableTeacherAccountData = [];
        this.selFpObj = {};
        this.resetProcessPop();
      },
      cancelFpPop(){
        this.showFpPicker = false;
      },
      okFpPop(){
        if (JSON.stringify(this.selFpObj) == "{}"){
          Toast(this.$t("请选择信息"));
          return;
        }

        this.setBackShowData(this.selFpObj);
        this.showFpPicker = false;
      },
      cancelPop(){
        this.showBottomPicker = false;
      },
      onTimeConfirm(time) {
        if (this.pageType == 'time'){
          this.form.time = this.$moment(time).format("YYYY-MM-DD");
        }else if (this.pageType == 'fpTime'){
          this.form.fpTime = this.$moment(time).format("YYYY年MM月DD日");
          this.form.fpTimeFormat = this.$moment(time).format("YYYY-MM-DD");
        }
        this.showTimePicker = false;
      },
      okPop(value, index){
        if (this.pageType == 'type'){
          if (this.$refs.typeRef.getValues().length == 0 || (this.$refs.typeRef.getValues().length > 0 && !this.$refs.typeRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.type = this.$refs.typeRef.getValues().length > 0 ? this.$refs.typeRef.getValues()[0].value : '';
          this.form.typeId = this.$refs.typeRef.getValues().length > 0 ? this.$refs.typeRef.getValues()[0].value : '';
          this.form.typeStr = this.$refs.typeRef.getValues().length > 0 ? this.$refs.typeRef.getValues()[0].label : '';
          this.form.processId = this.$refs.typeRef.getValues().length > 0 ? this.$refs.typeRef.getValues()[0].processId : '';
        }else if (this.pageType == 'sl'){
          if (this.$refs.slRef.getValues().length == 0 || (this.$refs.slRef.getValues().length > 0 && !this.$refs.slRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.sl = this.$refs.slRef.getValues().length > 0 ? this.$refs.slRef.getValues()[0].value : '';
          this.form.slStr = this.$refs.slRef.getValues().length > 0 ? this.$refs.slRef.getValues()[0].label : '';
        }else if (this.pageType == 'fpType'){
          if (this.$refs.fpTypeRef.getValues().length == 0 || (this.$refs.fpTypeRef.getValues().length > 0 && !this.$refs.fpTypeRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.fpType = this.$refs.fpTypeRef.getValues().length > 0 ? this.$refs.fpTypeRef.getValues()[0].value : '';
        }
        this.showBottomPicker = false;
      },
      cancelFpCancel(){
        this.showFpPicker = false;
      },
      okFpConfirm(value, index){
        console.log(value);
        this.initOcr();
        this.showFpPicker = false;
      },
      cancelOrderOpr(){
        this.returnIndex();
      },
      okOrderOpr(){
        this.$refs.form.validate().then(() => {
          let page = this.$route.query.page ? this.$route.query.page : '/app/appIndex';
          let pageName = this.$route.query.name ? this.$route.query.name : 'app-appIndex';
          let pageParent = this.$route.query.pageParent ? this.$route.query.pageParent : 'app-appIndex';
          this.orderInfoList.push({
            oprType: this.form.oprType,
            type: this.form.type,
            typeStr: this.form.typeStr,
            processId: this.form.processId,
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
          });
          console.log(this.orderInfoList);
          this.$router.push({
            name: pageName,
            props: true,
            query: {
              type: 'order',
              id: this.$route.query.id,
              activeType: this.$route.query.activeType,
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow,
              sessionId: this.$route.query.sessionId,
              page: pageParent
            },
            params: {
              orderInfoList: this.orderInfoList,
              formObj: this.formObj
            }
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
  height: 55px;
  line-height: 55px;
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
  background: #f5f5f5;
  padding: 5px 10px;
  margin-bottom: 8px;
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
  border-bottom: 1px solid #ebedf0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.system-order-info-item-block{
  height: 35px;
  line-height: 35px;
}
.card-list-block{
  height: 60px;
  border-radius: 5px;
  border: 1px solid #dddddd;
  margin-bottom: 10px;
  padding: 10px;
  cursor: default;
}
.card-list-active-block{
  height: 60px;
  border-radius: 5px;
  border: 1px solid #67C23A;
  margin-bottom: 10px;
  padding: 10px;
  cursor: default;
}
</style>
