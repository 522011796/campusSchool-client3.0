<template>
  <div class="container" ref="studentRef">
    <div>
      <div class="pull-left block-left padding-lr-10" :style="divHeight">
        <div class="block-left-top-item" :style="{height: divHeight.height1 * 0.40 + 'px'}">
          <div class="block-item-title padding-lr-10">
            <el-row>
              <el-col :span="6">
                <div class="color-sub-grand font-bold font-size-12">
                <span>
                  <i class="fa fa-user"></i>
                  <label>{{$t("我的信息")}}</label>
                </span>
                </div>
              </el-col>
              <el-col :span="18">
                <div class="color-muted font-bold font-size-12 text-right">
                <span>
                  <label class="color-success">{{currentEnrollYear}}</label>
                  <label class="color-warning">{{currentEnrollTime}}</label>
                </span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="margin-top-10 padding-lr-10 font-size-12 color-white">
            <div class="block-item-item">
              <el-row>
                <el-col :span="8">
                  <el-avatar shape="square" :size="90" class="margin-top-40" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                </el-col>
                <el-col :span="16">
                  <div>
                    <div class="margin-top-10">
                      <span class="font-size-20 color-sub-title moon-content-text-ellipsis-class name-display-line">
                        <el-tooltip class="item" effect="dark" :content="realName" placement="top">
                              <span>{{ realName }}</span>
                            </el-tooltip>
                      </span>
                      <span class="color-grand margin-left-5 font-bold" v-if="sex == 1">
                        <el-tag type="success" size="mini">
                          <label class="fa fa-mars"></label>
                        </el-tag>
                      </span>
                      <span class="color-grand margin-left-5 font-bold" v-if="sex == 2">
                        <el-tag type="success" size="mini">
                          <label class="fa fa-venus"></label>
                        </el-tag>
                      </span>
                    </div>
                    <div class="margin-top-10 font-size-14">
                      <el-row>
                        <el-col :span="12">
                          <span class="color-sub-title font-bold">{{$t("学号")}}</span>
                          <span class="color-muted moon-content-text-ellipsis-class text-display-line">
                            <el-tooltip effect="dark" :content="stuNo" placement="top-start">
                              <span>{{ stuNo }}</span>
                            </el-tooltip>
                          </span>
                        </el-col>
                        <el-col :span="12">
                          <span class="color-sub-title font-bold">{{$t("班级")}}</span>
                          <span class="color-muted moon-content-text-ellipsis-class text-display-line">
                            <el-tooltip class="item" effect="dark" :content="className" placement="top-start">
                              <span>{{ className }}</span>
                            </el-tooltip>
                          </span>
                        </el-col>
                      </el-row>
                      <el-row class="margin-top-5">
                        <el-col :span="12">
                          <span class="color-sub-title font-bold">{{$t("专业")}}</span>
                          <span class="color-muted moon-content-text-ellipsis-class text-display-line">
                            <el-tooltip class="item" effect="dark" :content="majorName" placement="top-start">
                              <span>{{ majorName }}</span>
                            </el-tooltip>
                          </span>
                        </el-col>
                        <el-col :span="12">
                          <span class="color-sub-title font-bold">{{$t("学院")}}</span>
                          <span class="color-muted moon-content-text-ellipsis-class text-display-line">
                            <el-tooltip class="item" effect="dark" :content="collegeName" placement="top-start">
                              <span>{{ collegeName }}</span>
                            </el-tooltip>
                          </span>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>

        <div class="block-left-bottom-item" :style="{height: divHeight.height1 * 0.541 + 'px'}">
          <div class="block-item-title padding-lr-10">
            <el-row>
              <el-col :span="12">
                <div class="color-sub-grand font-bold font-size-12">
                <span>
                  <i class="fa fa-volume-up"></i>
                  <label>{{$t("通知公告")}}</label>
                </span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="color-grand font-bold font-size-12 text-right">
                <span>
                  <label>{{$t("更多")}}</label>
                  <i class="fa fa-list"></i>
                </span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="margin-top-10 padding-lr-10 font-size-12 color-white">
            <div class="block-item-item">
              <div v-if="noticeList.length == 0" class="text-center">
                <span class="color-muted">{{$t("暂无数据")}}</span>
              </div>
              <el-row v-if="noticeList.length > 0" v-for="(item, index) in noticeList" :key="index" class="border-bottom-1">
                <el-col :span="16">
                  <div class="moon-content-text-ellipsis-class">
                    <img src="" class="block-icon1-class">
                    <label></label>
                  </div>
                </el-col>
                <el-col :span="8" class="text-right">
                  <span class="color-grand font-bold">{{$t("进入")}}</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <div class="padding-lr-10 padding-tb-10">
        <div class="block-item-right-content">
          <div class="block-item-left-header padding-lr-10">
            <span class="fa fa-user"></span>
            <span>{{$t("办事环节")}}</span>
          </div>
          <div class="padding-lr-10 padding-tb-10" :style="{height: divHeight.height1 - 80 + 'px', 'overflow-y': 'auto'}">
            <el-row :gutter="16">
              <el-col :span="6" v-for="(item, index) in serverDataList" :key="index" @click.native="serverClick($event, item)" class="margin-bottom-20">
                <el-card shadow="always" :body-style="{padding: '12px',background: '#EBEEF5'}" style="position: relative">
                  <div class="moon-content-text-ellipsis-class">
                    <span class="server-tag-block" :class="item.status ? 'bg-success' : 'bg-muted'" style="padding-top: 15px">
                      <i v-if="item.status" class="fa fa-check-circle font-size-12 icon"></i>
                      {{index+1}}
                    </span>
                    <el-image class="block-icon-class margin-left-10" :src="item.link_logo">
                      <div slot="error" class="block-icon-class">
                        <i class="el-icon-picture-outline font-size-15"></i>
                      </div>
                    </el-image>
                    <span>
                      {{ item.link_name }}
                    </span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <!--信息-->
    <dialog-normal top="10vh" width-style="650px" :visible="dialogInfo" :title="$t('信息采集')" @close="closeDialog" @right-close="cancelDialog">
      <div slot="title">
        <div class="head-block">
          <el-row>
            <el-col :span="12">
              <div>
                <span class="fa fa-file"></span>
                <span class="font-bold">{{$t('信息采集')}}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-right">
                <el-tag size="small" v-if="detailData.status" plain type="success">{{$t('已完成')}}</el-tag>
                <el-tag size="small" v-if="!detailData.status" plain type="info">{{$t('待完成')}}</el-tag>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="margin-top-10">
        <div class="card-block">
          <div>
            <span class="tag-class"></span>
            <span class="tag-text-class font-bold">{{$t('照片采集')}}</span>
          </div>
          <div>
            <div class="item-block">
              <el-row>
                <el-col :span="6" class="text-center">
                  <div class="custom-avatar">
                    <el-avatar :size="70" :src="form.headImg" fit="fill"></el-avatar>
                  </div>
                  <div>
                    <upload-square class="margin-top-5" :limit="9999" :action="uploadFile" max-size="20" :data="{path: 'headPhone'}" accept=".png,.jpg,.jpeg" @success="uploadFileSuccess">
                      <el-button size="small" type="primary">{{$t("上传照片")}}</el-button>
                    </upload-square>
                  </div>
                </el-col>
                <el-col :span="18" class="font-size-12 color-muted" style="padding-left: 30px">
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
                </el-col>
              </el-row>
            </div>
          </div>
        </div>

        <div class="info-block">
          <div>
            <span class="tag-class"></span>
            <span class="tag-text-class font-bold">{{$t('联系信息')}}</span>
          </div>
          <div>
            <el-form :model="form" :rules="rules" ref="form" label-width="100px">
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('手机号')" prop="phone">
                    <el-input v-model="form.phone" size="small" class="width-150"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('QQ')">
                    <el-input v-model="form.qq" size="small" class="width-150"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('邮箱')" prop="email">
                    <el-input v-model="form.email" size="small" class="width-150"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('微信号')">
                    <el-input v-model="form.wechat" size="small" class="width-150"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('父亲姓名')">
                    <el-input v-model="form.fatherName" size="small" class="width-150"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('父亲电话')" prop="fatherPhone">
                    <el-input v-model="form.fatherPhone" size="small" class="width-150"></el-input>
                  </el-form-item>
                </el-col>
              </el-row><el-row>
              <el-col :span="12">
                <el-form-item :label="$t('母亲姓名')">
                  <el-input v-model="form.matherName" size="small" class="width-150"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('母亲电话')" prop="matherPhone">
                  <el-input v-model="form.matherPhone" size="small" class="width-150"></el-input>
                </el-form-item>
              </el-col>
            </el-row><el-row>
              <el-col :span="24">
                <el-form-item :label="$t('详细地址')">
                  <el-input v-model="form.address" size="small" class="width-415"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            </el-form>
          </div>
        </div>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" v-if="!detailData.status || detailData.check_repeat == true" type="primary" @click="btnLoading == false ? okDialog() : ''">
          <i class="el-icon-loading" v-if="btnLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <!--接站-->
    <dialog-normal top="10vh" width-style="680px" :visible="dialogStation" :title="$t('接站登记')" @close="closeDialog" @right-close="cancelDialog">
      <div slot="title">
        <div class="head-block">
          <el-row>
            <el-col :span="6">
              <div>
                <span class="fa fa-file"></span>
                <span class="font-bold">{{$t('接站登记')}}</span>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="text-right">
                <span class="color-warning font-size-12 font-bold">
                  ({{$t("如果已进行信息填写，无需重复提交，请前往报道！")}})
                </span>
                <el-tag size="small" v-if="detailData.status" plain type="success">{{$t('已完成')}}</el-tag>
                <el-tag size="small" v-if="!detailData.status" plain type="info">{{$t('待完成')}}</el-tag>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
        <div class="info-block">
          <div>
            <span class="tag-class"></span>
            <span class="tag-text-class font-bold">{{$t('接站信息')}}</span>
          </div>
          <div>
            <el-form :model="formStation" :rules="rules" ref="formStation" label-width="100px">
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('按时报到')" prop="signStatus">
                    <my-select class="layout-item width-200" size="small" :sel-value="formStation.signStatus" :options="filterStatus" @change="handleTypeChange($event, 1)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('到达时间')" prop="signTime">
                    <el-date-picker
                      size="small"
                      v-model="formStation.signTime"
                      type="datetime"
                      style="width:193px"
                      format="yyyy-MM-dd HH:mm"
                      value-format="yyyy-MM-dd HH:mm"
                      placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('需要接站')" prop="interface">
                    <my-select class="layout-item width-200" size="small" :sel-value="formStation.interface" :options="filterStatus" @change="handleTypeChange($event, 2)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('陪同人员')" prop="peopleNum">
                    <el-input v-model="formStation.peopleNum" style="width: 193px" size="small" class="width-200"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="8">
                <el-col :span="12">
                  <el-form-item :label="$t('交通工具')" prop="vehicle">
                    <my-select class="layout-item width-200" size="small" :sel-value="formStation.vehicle" :options="filtersVehicleType" @change="handleTypeChange($event, 3)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('达到站')" prop="address">
                    <my-select class="layout-item width-200" size="small" :sel-value="formStation.address" :options="filtersStationType" @change="handleTypeChange($event, 4)"></my-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item :label="$t('班次/车牌号')" prop="vehicleNo">
                    <el-input v-model="formStation.vehicleNo" size="small" class="width-470"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item :label="$t('备注')">
                    <el-input v-model="formStation.des" size="small" class="width-470"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" v-if="!detailData.status || detailData.check_repeat == true" type="primary" @click="btnLoading == false ? okStationDialog() : ''">
          <i class="el-icon-loading" v-if="btnLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <!--信息-->
    <dialog-normal top="10vh" width-style="450px" :visible="dialogSign" :show-footer="false" :title="$t('报道信息')" @close="closeDialog" @right-close="cancelDialog">
      <div slot="title">
        <div class="head-block">
          <el-row>
            <el-col :span="6">
              <div>
                <span class="fa fa-file"></span>
                <span class="font-bold">{{$t('报道信息')}}</span>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="text-right">
                <span class="color-warning font-size-12 font-bold" v-if="!formSign.checkType">({{$t("请将其他环节信息设置后再查看该数据")}})</span>
                <i class="fa fa-close font-size-14" @click="cancelDialog"></i>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
        <div class="info-block">
          <div>
            <el-form label-width="100px">
              <el-form-item :label="$t('核验人员')" prop="phone">
                <label>{{formSign.checkUserName}}</label>
              </el-form-item>
              <el-form-item :label="$t('报道类型')" prop="phone">
                <label v-if="formSign.checkType == 0">{{$t("人工")}}</label>
                <label v-if="formSign.checkType == 1">{{$t("扫码")}}</label>
                <label v-if="formSign.checkType == 2">{{$t("人脸")}}</label>
                <label v-if="formSign.checkType == 3">{{$t("自动")}}</label>
              </el-form-item>
              <el-form-item :label="$t('是否准时')" prop="phone">
                <label v-if="formSign.onTime">{{$t("是")}}</label>
                <label v-if="!formSign.onTime">{{$t("否")}}</label>
              </el-form-item>
              <el-form-item :label="$t('报道时间')" prop="phone">
                <label>{{$moment(formSign.checkTime).format("YYYY-MM-DD HH:mm")}}</label>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </dialog-normal>

    <!--缴费-->
    <dialog-normal top="10vh" width-style="700px" :visible="dialogPay" :show-footer="false" :title="$t('财务缴费')" @close="closeDialog" @right-close="cancelDialog">
      <div slot="title">
        <div class="head-block">
          <el-row>
            <el-col :span="6">
              <div>
                <span class="fa fa-file"></span>
                <span class="font-bold">{{$t('财务缴费')}}</span>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="text-right">
                <i class="fa fa-close font-size-14" @click="cancelDialog"></i>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
        <div class="info-block">
          <div>
            <div>
              <span class="tag-class"></span>
              <span class="tag-text-class font-bold">{{$t('缴费统计')}}</span>
            </div>
            <div>
              <table class="custom-table">
                <tr>
                  <td style="width: 20%">{{$t("应缴总额")}}</td>
                  <td style="width: 30%">{{totalAmount}}</td>
                  <td style="width: 20%">{{$t("未缴总额")}}</td>
                  <td style="width: 30%">{{shouldAmount - paidAmount}}</td>
                </tr>
                <tr>
                  <td>{{$t("缓缴")}}</td>
                  <td>{{delayAmount}}</td>
                  <td>{{$t("贷款")}}</td>
                  <td>{{loanAmount}}</td>
                </tr>
                <tr>
                  <td>{{$t("减免")}}</td>
                  <td>{{deductionAmount}}</td>
                  <td>{{$t("已缴")}}</td>
                  <td>{{paidAmount}}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="margin-top-20">
            <div>
              <span class="tag-class"></span>
              <span class="tag-text-class font-bold">{{$t('缴费清单')}}</span>
            </div>
            <div class="font-size-12">
              <div class="margin-bottom-5 border-bottom-dashed-1 padding-tb-5 padding-lr-10" v-for="(item, index) in itemUserList" :key="index">
                <div class="margin-top-5">
                  <el-row>
                    <el-col :span="12">
                      <span class="font-bold color-grand" v-if="item.itemName">{{item.itemName}}</span>
                      <span class="font-bold color-grand" v-else>&nbsp;</span>
                    </el-col>
                    <el-col :span="12" class="text-right">
                      <el-tag v-if="item.status == true" size="small" type="success">{{$t("已支付")}}</el-tag>
                      <el-tag v-if="item.status == false" size="small" type="danger">{{$t("未支付")}}</el-tag>
                    </el-col>
                  </el-row>
                </div>
                <div class="margin-top-5">
                  <el-card :body-style="{'padding': '10px 5px'}">
                    <el-row>
                      <el-col :span="24">
                        <el-row :gutter="16">
                          <el-col :span="4">
                            <el-tag size="mini" style="display: inline-block; width: 100%">{{$t("应缴")}} | ¥{{item.totalAmount}}</el-tag>
                          </el-col>
                          <el-col :span="4">
                            <el-tag size="mini" type="warning" style="display: inline-block; width: 100%">{{$t("已缴")}} | ¥{{item.paidAmount}}</el-tag>
                          </el-col>
                          <el-col :span="4">
                            <el-tag size="mini" type="danger" style="display: inline-block; width: 100%">{{$t("未缴")}} | ¥{{item.shouldAmount - item.paidAmount}}</el-tag>
                          </el-col>
                          <el-col :span="4">
                            <el-tag size="mini" type="warning" style="display: inline-block; width: 100%">{{$t("缓缴")}} | ¥{{item.delayAmount}}</el-tag>
                          </el-col>
                          <el-col :span="4">
                            <el-tag size="mini" type="warning" style="display: inline-block; width: 100%">{{$t("贷款")}} | ¥{{item.loanAmount}}</el-tag>
                          </el-col>
                          <el-col :span="4">
                            <el-tag size="mini" type="info" style="display: inline-block; width: 100%">{{$t("减免")}} | ¥{{item.deductionAmount}}</el-tag>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </el-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog-normal>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" :content="messageTips" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import mixins from "../utils/mixins";
  import {common} from "../utils/api/url";
  import DialogNormal from "~/components/utils/dialog/DialogNormal";
  import MyElTree from "~/components/tree/MyElTree";
  import MyServerDialog from "~/components/dialog/MyServerDialog";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import infoValidater from "~/utils/validater/infoValidater";
  import stationValidater from "~/utils/validater/stationValidater";
  export default {
    name: 'student',
    mixins: [mixins, infoValidater, stationValidater],
    components: {DrawerLayoutRight, MyServerDialog, MyElTree, DialogNormal},
    data(){
      return {
        noticeList: [],
        serverDataList: [],
        sex: 1,
        currentEnrollYear: '2022年度',
        currentEnrollTime: '迎新倒计时:xx天xx时xx分xx秒',
        collegeName: '',
        majorName: '',
        className: '',
        stuNo: '',
        subTitle: '',
        messageTips: '',
        dialogInfo: false,
        dialogSign: false,
        dialogDorm: false,
        dialogPay: false,
        dialogStation: false,
        btnLoading: false,
        visibleConfim: false,
        dialogLoading: false,
        uploadFile: common.upload_file,
        uploadResult: {},
        uploadProcess: '',
        detailData: {},
        filterStatus: [{
          label: this.$t("是"),
          value: true,
          text: this.$t("是"),
        },{
          label: this.$t("否"),
          value: false,
          text: this.$t("否"),
        }],
        filtersVehicleType: [],
        filtersStationType: [],
        deductionAmount: 0,
        delayAmount: 0,
        loanAmount: 0,
        paidAmount: 0,
        shouldAmount: 0,
        totalAmount: 0,
        itemUserList: [],
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
        },
        formStation: {
          id: '',
          signStatus: true,
          signTime: '',
          interface: true,
          peopleNum: '',
          address: '',
          vehicle: '',
          vehicleNo: '',
          des: ''
        },
        formSign: {
          id: '',
          onTime: '',
          checkTime: '',
          checkType: '',
          checkUserName: ''
        }
      }
    },
    mounted() {

    },
    created() {
      this.init();
      this.initTransType();
    },
    methods: {
      layoutInit() {

      },
      initTransType(){
        let params = {};
        this.$axios.get(common.enroll_link_arrive_trans_type, {params: params}).then(res => {
          if (res.data.data){
            let obj = [];
            for (let item in res.data.data){
              obj.push({value: item, text: res.data.data[item], label: res.data.data[item]},)
            }
            this.filtersVehicleType = obj;
          }
        });
      },
      initStationType(){
        let params = {};
        this.$axios.get(common.enroll_link_arrive_station_list, {params: params}).then(res => {
          if (res.data.data){
            let obj = [];
            for (let i = 0; i < res.data.data.length; i++){
              obj.push({value: res.data.data[i].arrive_station, text: res.data.data[i].arrive_station, label: res.data.data[i].arrive_station},)
            }
            this.filtersStationType = obj;
          }
        });
      },
      async init(){
        await this.getSessionInfo();
        this.collegeName = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes) ? this.sessionData.LOGIN_RETURN_INFO.classes.collegeName : '';
        this.className = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes) ? this.sessionData.LOGIN_RETURN_INFO.classes.className : '';
        this.stuNo = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.student) ? this.sessionData.LOGIN_RETURN_INFO.student.studentId : '';
        this.majorName = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.classes) ? this.sessionData.LOGIN_RETURN_INFO.classes.majorName : '';
        this.sex = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.sex) ? this.sessionData.LOGIN_RETURN_INFO.sex : '';
        this.initStudentEnroll();
      },
      initStudentEnroll(){
        let params = {
          userId: this.loginUserId,
        };
        this.$axios.get(common.server_enroll_app_process_current, {params: params}).then(res => {
          if (res.data.data){
            this.serverDataList = res.data.data.linkList;
          }
        });
      },
      initArrive(){
        let params = {
          userId: this.loginUserId,
        };
        this.$axios.get(common.server_enroll_app_arrive_get, {params: params}).then(res => {
          if (res.data.data){
            console.log(res.data.data);
            this.formStation = {
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
          }
        });
      },
      initSign(){
        let params = {
          userId: this.loginUserId,
        };
        this.$axios.get(common.server_enroll_app_student_checkin_get, {params: params}).then(res => {
          if (res.data.data){
            console.log(res.data.data);
            this.formSign = {
              id: '',
              onTime: res.data.data.on_time,
              checkTime: res.data.data.check_time,
              checkType: res.data.data.check_type,
              checkUserName: res.data.data.check_real_name,
            };
          }
        });
      },
      initFormInfo(){
        let params = {
          userId: this.loginUserId,
        };
        this.$axios.get(common.server_enroll_app_form_data_get, {params: params}).then(res => {
          if (res.data.data){
            console.log(res.data.data);
          }
        });
      },
      initStudentInfo(){
        let params = {
          userId: this.loginUserId,
        };
        this.$axios.get(common.server_enroll_app_student_info, {params: params}).then(res => {
          if (res.data.data){
            console.log(res.data.data);
            this.deductionAmount = res.data.data.deductionAmount;
            this.loanAmount = res.data.data.loanAmount;
            this.delayAmount = res.data.data.delayAmount;
            this.totalAmount = res.data.data.totalAmount;
            this.shouldAmount = res.data.data.shouldAmount;
            this.paidAmount = res.data.data.paidAmount;
            this.itemUserList = res.data.data.itemUserList;
          }
        });
      },
      serverClick($event, item){
        this.detailData = item;
        if (item.link_sub_type == 4){
          this.dialogInfo = true;
        }else if (item.link_sub_type == 0){
          this.initStationType();
          this.initArrive();
          this.dialogStation = true;
        }else if (item.link_sub_type == 1){
          this.initSign();
          this.dialogSign = true;
        }else if (item.link_sub_type == 3){
          this.initStudentInfo();
          this.dialogPay = true;
        }
      },
      handleTypeChange(event, type){
        if (type == 1){
          this.formStation.signStatus = event;
        }else if (type == 2){
          this.formStation.interface = event;
        }else if (type == 3){
          this.formStation.vehicle = event;
        }else if (type == 4){
          this.formStation.address = event;
        }
      },
      uploadFileSuccess(res, file){
        if (res.code == 200){
          this.form.headImg = res.data.url;
        }else {

        }
      },
      closeDialog(){
        this.form = {
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
        };
        this.formStation = {
          id: '',
          signStatus: true,
          signTime: '',
          interface: true,
          peopleNum: '',
          address: '',
          vehicle: '',
          vehicleNo: '',
          des: ''
        };
        this.btnLoading = false;
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
        if (this.$refs['formStation']){
          this.$refs['formStation'].resetFields();
        }
        this.dialogLoading = false;
        this.visibleConfim = false;
      },
      cancelDialog(){
        this.dialogStation = false;
        this.dialogInfo = false;
        this.dialogSign = false;
        this.dialogPay = false;
      },
      okDialog(){
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.btnLoading = true;
            let url = common.server_enroll_app_student_update;
            if (this.form.headImg == ""){
              MessageWarning(this.$t("请设置照片！"));
              return;
            }
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
            };
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.initStudentEnroll();
                MessageSuccess(res.data.desc);
                this.dialogInfo = false;
                this.btnLoading = false;
              }else {
                MessageError(res.data.desc);
                this.btnLoading = false;
              }
            });
          }
        });
      },
      okStationDialog(){
        this.$refs['formStation'].validate((valid) => {
          if (valid) {
            this.btnLoading = true;
            let url = common.server_enroll_app_arrive_add;
            let params = {
              trainType: this.formStation.vehicle,
              trainNo: this.formStation.vehicleNo,
              estimate: this.formStation.signTime,
              onTime: this.formStation.signStatus,
              escortsNum: this.formStation.peopleNum,
              needReceive: this.formStation.interface,
              arriveStation: this.formStation.address,
              des: this.formStation.des,
            };
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.initStudentEnroll();
                MessageSuccess(res.data.desc);
                this.dialogStation = false;
                this.btnLoading = false;
              }else {
                MessageError(res.data.desc);
                this.btnLoading = false;
              }
            });
          }
        });
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          userId: this.loginUserId,
          linkId: this.detailData.id,
        }
        url = common.server_enroll_app_arrive_checkin;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.initStudentEnroll();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleConfim = false;
          this.dialogLoading = false;
        });
      }
    }
  }
</script>

<style scoped>
.container {

}
.block-left{
  width: 400px;
}
.block-left-top-item{
  background: rgba(255,255,255, 0.6);
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  box-shadow: 0px 0px 10px #909399;
}
.block-left-bottom-item{
  background: rgba(255,255,255, 0.6);
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0px 0px 10px #909399;
}
.block-item-right-content{
  height: 100%;
  margin-left: 420px;
  background: rgba(255, 255, 255, 0.6);
}
.block-item-title{
  height: 40px;
  line-height: 40px;
}
.block-item-item{
  height: 25px;
  line-height: 25px;
}
.block-item-left-header{
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  font-weight:  bold;
  border-bottom: 1px solid #C0C4CC;
}
.text-display-line{
  width: 80px;
  display: inline-block;
  position: relative;
  top: 7px;
}
.name-display-line{
  max-width: 200px;
  display: inline-block;
  position: relative;
  top: 6px;
}
.head-block{
  height: 40px;
  line-height: 40px;
  padding: 0px 10px;
}
.card-block{
  width: 85%;
  margin: 0 auto;
}
.card-block .item-block{
  border-radius: 5px;
  background: #EBEEF5;
  padding: 15px;
}
.info-block{
  width: 90%;
  margin: 20px auto 0px auto;
}
.tag-class{
  width: 10px;
  height: 13px;
  background: #67C23A;
  display: inline-block;
}
.tag-text-class{
  position: relative;
  top: -1px;
}
.server-tag-block{
  height: 100%;
  padding: 0px 5px;
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 0px;
  color: #FFFFFF;
}
.server-tag-block .icon{
  position: absolute;
  top: 2px;
  left: 3px;
  font-weight: normal;
}
</style>
