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
                  <label class="color-success">{{$t("年度")}}:{{currentEnrollYear}}</label>
                  <label class="color-warning">{{$t("迎新倒计时")}}:{{currentEnrollTime}}</label>
                </span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="margin-top-10 padding-lr-10 font-size-12 color-white">
            <div class="block-item-item custom-avatar">
              <el-row>
                <el-col :span="8">
                  <el-avatar shape="square" :size="90" class="margin-top-40" fit="fill" :src="headLogo"></el-avatar>
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
                              <span v-if="stuNo">{{ stuNo }}</span>
                              <span v-else>&nbsp;</span>
                            </el-tooltip>
                          </span>
                        </el-col>
                        <el-col :span="12">
                          <span class="color-sub-title font-bold">{{$t("班级")}}</span>
                          <span class="color-muted moon-content-text-ellipsis-class text-display-line">
                            <el-tooltip class="item" effect="dark" :content="className" placement="top-start">
                              <span v-if="className">{{ className }}</span>
                              <span v-else>&nbsp;</span>
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
            <div v-if="noticeList.length == 0" class="text-center">
              <div class="margin-top-40">
                <img src="~static/img/empty.png" style="width: 100px;height: 60px">
              </div>
              <div class="margin-top-10">
                <span class="color-muted">{{$t("暂无数据")}}</span>
              </div>
            </div>
            <div class="block-item-item border-bottom-1" v-if="noticeList.length > 0" v-for="(item, index) in noticeList" :key="index">
              <el-row>
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
            <div v-if="serverDataList.length == 0" class="text-center">
              <div style="margin-top: 100px">
                <img src="~static/img/empty.png" style="width: 100px;height: 60px">
              </div>
              <div class="margin-top-10">
                <span class="color-muted">{{$t("暂无数据")}}</span>
              </div>
            </div>
            <el-row v-else :gutter="16">
              <el-col :span="6" v-for="(item, index) in serverDataList" :key="index" @click.native="serverClick($event, item)" class="margin-bottom-20">
                <el-card shadow="always" :body-style="{padding: '18px',background: '#EBEEF5'}" style="position: relative">
                  <div v-if="item.link_type == 0" class="bg-danger" style="position: absolute; right: 0px; bottom: 0px;border-bottom-right-radius: 5px;border-top-left-radius: 5px;padding:1px 10px;color:#ffffff;">
                    <span class="font-size-12">{{$t("线下")}}</span>
                  </div>
                  <div v-if="item.link_type == 1" class="bg-warning" style="position: absolute; right: 0px; bottom: 0px;border-bottom-right-radius: 5px;border-top-left-radius: 5px;padding:1px 10px;color:#ffffff;">
                    <span class="font-size-12">{{$t("线上")}}</span>
                  </div>
                  <div class="moon-content-text-ellipsis-class">
                    <span class="server-tag-block" :class="item.status ? 'bg-success' : 'bg-muted'" style="padding-top: 15px">
                      <i v-if="item.status" class="fa fa-check-circle font-size-12 icon"></i>
                      <i v-if="!item.status" class="fa fa-times-circle font-size-12 icon"></i>
                      <span class="text">{{index+1}}</span>
                    </span>
                    <el-image class="block-icon-class margin-left-10" :src="item.link_logo">
                      <div slot="error" class="block-icon-class">
                        <i class="el-icon-picture-outline font-size-15"></i>
                      </div>
                    </el-image>
                    <span style="position: relative; top: -6px">
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
                  <el-form-item :label="$t('QQ')" prop="qq">
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
                  <el-form-item :label="$t('微信号')" prop="wechat">
                    <el-input v-model="form.wechat" size="small" class="width-150"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item :label="$t('联系方式')" prop="connType">
                    <el-checkbox-group v-model="connType" @change="handleChangeConnType">
                      <el-checkbox label="1">{{$t('父亲')}}</el-checkbox>
                      <el-checkbox label="2">{{$t('母亲')}}</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <template v-if="connType.indexOf('1') != -1">
                <el-row>
                  <el-col :span="12">
                    <el-form-item :label="$t('父亲姓名')" prop="fatherName">
                      <el-input v-model="form.fatherName" size="small" class="width-150"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('父亲电话')" prop="fatherPhone">
                      <el-input v-model="form.fatherPhone" size="small" class="width-150"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </template>
              <template v-if="connType.indexOf('2') != -1">
                <el-row>
                  <el-col :span="12">
                    <el-form-item :label="$t('母亲姓名')" prop="matherName">
                      <el-input v-model="form.matherName" size="small" class="width-150"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item :label="$t('母亲电话')" prop="matherPhone">
                      <el-input v-model="form.matherPhone" size="small" class="width-150"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </template>
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('毕业类型')" prop="graduation">
                    <my-select size="small" :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.graduation" :options="filterGraduationType" width-style="150" @change="handleSelectChange($event, 1)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('毕业学校')" prop="graduationSchool">
                    <el-input :disabled="form.id != '' && oprType == 'detail'" v-model="form.graduationSchool" size="small" class="width-150"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('退役士兵')" prop="retire">
                    <my-select size="small" :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.retire" :options="filterRetireType" width-style="150" @change="handleSelectChange($event, 3)"></my-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('困难类型')" prop="hard">
                    <my-select size="small" :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.hard" :options="filterHardType" width-style="150" @change="handleSelectChange($event, 4)"></my-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('政治面貌')" prop="politics">
                    <my-select size="small" :disabled="form.id != '' && oprType == 'detail'" :sel-value="form.politics" :options="filterPoliticsType" width-style="150" @change="handleSelectChange($event, 2)"></my-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item :label="$t('详细地址')" prop="address">
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
                  ({{$t("如果已进行信息填写，无需重复提交，请前往报到！")}})
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
    <dialog-normal top="10vh" width-style="450px" :visible="dialogSign" :show-footer="false" :title="$t('报到信息')" @close="closeDialog" @right-close="cancelDialog">
      <div slot="title">
        <div class="head-block">
          <el-row>
            <el-col :span="6">
              <div>
                <span class="fa fa-file"></span>
                <span class="font-bold">{{$t('报到信息')}}</span>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="text-right">
                <span class="color-warning font-size-12 font-bold" v-if="!formSign.checkType"></span>
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
              <el-form-item :label="$t('报到类型')" prop="phone">
                <label v-if="formSign.checkType == 0">{{$t("人工")}}</label>
                <label v-if="formSign.checkType == 1">{{$t("扫码")}}</label>
                <label v-if="formSign.checkType == 2">{{$t("人脸")}}</label>
                <label v-if="formSign.checkType == 3">{{$t("自动")}}</label>
              </el-form-item>
              <el-form-item :label="$t('是否准时')" prop="phone">
                <label v-if="formSign.onTime">{{$t("是")}}</label>
                <label v-if="!formSign.onTime">{{$t("否")}}</label>
              </el-form-item>
              <el-form-item :label="$t('报到时间')" prop="phone">
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
                <el-button size="mini" plain type="success" @click="payManage($event, 1)">{{$t("去支付")}}</el-button>
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
                      <el-tag v-if="item.status == 1" size="small" type="success">{{$t("未缴清")}}</el-tag>
                      <el-tag v-if="item.status == 2" size="small" type="danger">{{$t("部分缴清")}}</el-tag>
                      <el-tag v-if="item.status == 3" size="small" type="danger">{{$t("已缴清")}}</el-tag>
                      <el-tag v-if="item.status == 4" size="small" type="danger">{{$t("待核实")}}</el-tag>
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

    <!--宿舍-->
    <dialog-normal top="10vh" width-style="750px" :visible="dialogDorm" :show-footer="false" :title="$t('线上选寝')" custom-dialog-class="custom-normal-0-dialog animated fadeInDownBig" @close="closeDrawDialog" @right-close="cancelDialog">
      <div slot="title">
        <div class="head-block">
          <el-row>
            <el-col :span="6">
              <div>
                <span class="fa fa-file"></span>
                <span class="font-bold">{{$t('线上选寝')}}</span>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="text-right">
                <el-button size="mini" type="danger" plain @click="cancelDialog">{{$t('取消')}}</el-button>
                <el-button size="mini" type="warning" plain @click="billManage">{{$t('订单')}}</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
        <div class="info-dorm-block">
          <div>
            <div class="pull-left info-block-left">
              <template v-if="dormSelType == 0">
                <div class="info-block-header text-center" @click="selMenuAll">
                  <span>{{$t("全部宿舍")}}</span>
                </div>
                <div :style="{height: 450-45+'px', overflowY: 'auto'}">
                  <el-menu
                    :default-active="defaultMenuActive"
                    background-color="#fefefe"
                    text-color="#909399"
                    active-text-color="#ffd04b"
                    class="el-menu-vertical-demo custon-nav-menu">
                    <template v-for="(item, index) in dormTreeList">
                      <el-submenu v-if="item.floorList.length > 0" :index="index+''">
                        <div style="width: 100%" slot="title" @click="selMenu($event, item, index)">
                          <span>{{ item.building_name }}</span>
                        </div>
                        <el-menu-item-group v-if="item.floorList.length > 0">
                          <el-menu-item v-for="(itemChild, indexChild) in item.floorList" :key="indexChild" :index="index+'-'+indexChild" @click="selMenu($event, itemChild, index+'-'+indexChild)">{{ itemChild.name }}</el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                      <el-menu-item v-else :index="index+''" @click="selMenu($event, item, index)">{{ item.building_name }}</el-menu-item>
                    </template>
                  </el-menu>
                </div>
              </template>
              <template v-if="dormSelType == 1">
                <div class="info-block-header text-center" @click="selMenuAll">
                  <span>{{$t("全部套餐")}}</span>
                </div>
                <div :style="{height: 450+'px', overflowY: 'auto'}">
                  <el-menu
                    :default-active="defaultMenuActive"
                    background-color="#fefefe"
                    text-color="#909399"
                    active-text-color="#ffd04b"
                    class="el-menu-vertical-demo custon-nav-menu">
                    <template v-for="(item, index) in dormPackageTreeList">
                      <el-menu-item :index="index+''" @click="selMenu($event, item, index)" style="text-align: center">{{ item.label }}</el-menu-item>
                    </template>
                  </el-menu>
                </div>
              </template>
            </div>
            <div class="info-block-right">
              <div v-if="dormSelType == 0" class="info-block-header layout-inline text-left padding-lr-10">
                <el-dropdown class="layout-item" size="mini" trigger="click">
                  <span class="el-dropdown-link color-white font-size-12">
                    {{ $t("房型") }}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(item, index) in filterRoomType" :key="index" @click.native="handleChangeSearch($event, item, 1)">{{ item.label }}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown class="layout-item margin-left-10" size="mini" trigger="click">
                  <span class="el-dropdown-link color-white font-size-12">
                    {{ $t("朝向") }}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(item, index) in filterRoomArrow" :key="index" @click.native="handleChangeSearch($event, item, 2)">{{ item.label }}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown class="layout-item margin-left-10" size="mini" trigger="click">
                  <span class="el-dropdown-link color-white font-size-12">
                    {{ $t("价位") }}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(item, index) in filterRoomPrice" :key="index" @click.native="handleChangeSearch($event, item, 3)">{{ item.label }}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown class="layout-item margin-left-10" size="mini" trigger="click">
                  <span class="el-dropdown-link color-white font-size-12">
                    {{ $t("状态") }}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(item, index) in filterRoomStatus" :key="index" @click.native="handleChangeSearch($event, item, 4)">{{ item.label }}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div :style="{height: 450-65+'px', overflowY: 'auto'}" class="padding-lr-10 padding-tb-10">
                <div>
                  <el-row>
                    <el-col :span="6" v-for="(item, index) in dormList" :key="index" class="text-center margin-bottom-20 room-item-block" @click.native="selRoomItem($event, item)">
                      <div>
                        <img src="~static/img/dorm_icon.png" style="height: 40px;width: 40px">
                      </div>
                      <div v-if="dormSelType == 0" class="margin-top-5 font-size-12 moon-content-text-ellipsis-class">
                        <el-tooltip class="item" effect="dark" :content="item.dormitory_no" placement="bottom">
                          <span>{{ item.dormitory_no }}</span>
                        </el-tooltip>
                      </div>
                      <div v-if="dormSelType == 1" class="margin-top-5 font-size-12 moon-content-text-ellipsis-class">
                        <el-tooltip class="item" effect="dark" :content="item.pacName" placement="bottom">
                          <div class="text-center">
                            <div>
                              <span>{{ item.pacName }}</span>
                            </div>
                            <div class="color-success">
                              (<span class="font-size-12 color-danger">{{ item.pacNum-item.pacNumChose }}</span>/<span class="font-size-12 color-success">{{ item.pacNum }}</span>)
                            </div>
                          </div>
                        </el-tooltip>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
            <div class="moon-clearfix"></div>
          </div>
        </div>
      </div>
    </dialog-normal>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawDialog" :visible="drawerRoom" size="550px" :title="dormSelTitle" @right-close="cancelDrawDialog">
      <div slot="content">
        <div>
          <el-carousel height="240px">
            <el-carousel-item v-for="(item, index) in formDorm.imgs" :key="index">
              <img :src="item" style="height: 100%;width: 100%">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="padding-tb-10">
          <template v-if="dormSelType == 0">
            <div class="">
              <el-row>
                <el-col :span="12">
                  <span class="tag-class"></span>
                  <span class="tag-text-class font-bold">{{roomTypeText}}</span>
                </el-col>
                <el-col :span="12" class="text-right">
                  <span class="tag-class"></span>
                  <span class="tag-text-class font-size-12">{{$t("已选")}}</span>

                  <span class="tag-danger-class margin-left-10"></span>
                  <span class="tag-text-class font-size-12">{{$t("未选")}}</span>
                </el-col>
              </el-row>
            </div>
            <div class="padding-lr-10 padding-tb-10">
              <el-row :gutter="8">
                <el-col :span="6" v-for="(item, index) in formDorm.beds" :key="index" class="margin-bottom-10" @click.native="!item.studentId ? selBedNo($event, item, index) : ''">
                  <div class="bed-item-block" :class="[activeBedNo === index ? 'bed-item-block-active' : '',item.studentId ? 'bed-item-block-selected' : '']">
                    {{item.bedNo}}{{$t("号床")}}
                  </div>
                </el-col>
              </el-row>
            </div>

            <div class="padding-lr-10 padding-tb-10">
              <div>
                <span class="tag-class"></span>
                <span class="tag-text-class font-bold">{{$t("简介")}}</span>
              </div>
              <div class="margin-top-10 font-size-12">
                <el-row>
                  <el-col :span="12">
                    <span>{{$t("容纳人数")}}:</span>
                    <span>{{formDorm.peopleNum}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span>{{$t("价格")}}:</span>
                    <span>{{formDorm.roomPrice}}/{{$t("年")}}</span>
                  </el-col>
                </el-row>
                <el-row class="margin-top-5">
                  <el-col :span="12">
                    <span>{{$t("面积")}}:</span>
                    <span>{{formDorm.roomArea}}</span>
                  </el-col>
                  <el-col :span="12">
                    <span>{{$t("朝向")}}:</span>
                    <span>{{formDorm.roomArrow}}</span>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>
          <template v-if="dormSelType == 1">
            <div class="padding-lr-10 padding-tb-10">
              <div>
                <el-row>
                  <el-col :span="12">
                    <span class="tag-class"></span>
                    <span class="tag-text-class font-bold">{{$t("价格")}}</span>
                  </el-col>
                  <el-col :span="12" class="text-right">
                    <span class="color-success font-bold">{{formDorm.roomPrice}}元/年</span>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="small" type="primary" :loading="btnLoading" @click="okDrawDialog">{{$t("保存")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" :hide-footer="true" @changeDrawer="closeDrawDialog" :visible="drawerBill" size="550px" :title="$t('我的订单')" @right-close="cancelDrawDialog">
      <div slot="content">
        <div class="padding-tb-10 padding-lr-10">
          <el-card :body-style="{padding: '10px',background: '#EBEEF5'}" class="margin-bottom-20" v-for="(item, index) in billList" :key="index">
            <div class="font-size-12">
              <el-row class="font-size-14">
                <el-col :span="12">
                  <span class="fa fa-history"></span>
                  <span>{{ $moment(item.add_time).format("YYYY-MM-DD HH:mm:ss") }}</span>
                </el-col>
                <el-col v-if="dormSelType == 0" :span="12" class="text-right">
                  <label class="color-warning" v-if="item.status == 1">{{$t("未支付")}}</label>
                  <label class="color-warning" v-if="item.status == 2">{{$t("已支付")}}</label>
                  <label class="color-warning" v-if="item.status == 3">{{$t("支付失败")}}</label>
                  <label class="color-warning" v-if="item.status == 4">{{$t("支付中")}}</label>
                  <label class="color-warning" v-if="item.status == 7">{{$t("订单关闭")}}</label>
                </el-col>
                <el-col v-if="dormSelType == 1" :span="12" class="text-right">
                  <label class="color-warning" v-if="item.order_status == true">{{$t("成功")}}</label>
                  <label class="color-warning" v-if="item.order_status == false">{{$t("撤销")}}</label>
                </el-col>
              </el-row>
              <el-row class="margin-top-5">
                <el-col :span="12">
                  <span>{{$t("姓名")}}</span>
                  <span class="color-success">{{ item.real_name }}</span>
                </el-col>
                <el-col v-if="dormSelType == 0" :span="12" class="text-right">
                  <label class="color-warning font-size-16">¥{{item.room_price}}</label>
                </el-col>
                <el-col v-if="dormSelType == 1" :span="12" class="text-right">
                  <label class="color-warning font-size-16">¥{{item.pac_price}}</label>
                </el-col>
              </el-row>
              <el-row class="margin-top-5">
                <template v-if="dormSelType == 0">
                  <span>{{$t("学号/录取号")}}</span>
                  <span class="color-success">{{ item.student_id }} / {{ item.enroll_no }}</span>
                </template>
                <template v-if="dormSelType == 1">
                  <span>{{$t("学号")}}</span>
                  <span class="color-success">{{ item.student_id }}</span>
                </template>
              </el-row>
              <el-row class="margin-top-5">
                <el-col v-if="dormSelType == 0" :span="24">
                  <span>{{$t("已选寝室")}}</span>
                  <span class="color-success">{{ item.build_name }}-{{ item.dormitory_no }}-{{item.bed_no}}{{$t("号床")}}</span>
                </el-col>
                <el-col v-if="dormSelType == 1" :span="24">
                  <span>{{$t("已选套餐")}}</span>
                  <span class="color-success">{{ item.pac_name }}</span>
                </el-col>
              </el-row>
              <el-row class="margin-top-5">
                <el-col :span="24" class="text-right">
                  <el-button size="mini" type="success"  v-if="dormSelType == 0 && (!detailData.status || detailData.check_cancel == true) && item.status == 1" @click="setBillStatus($event, item)">{{$t("立即撤销")}}</el-button>
                  <el-button size="mini" type="success"  v-if="dormSelType == 1 && (!detailData.status || detailData.check_cancel == true) && item.order_status == 1" @click="setBillStatus($event, item)">{{$t("立即撤销")}}</el-button>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </div>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawDialog" :visible="dialogForm" size="700px" :title="formCreateTitleData" @right-close="cancelDrawDialog">
      <div slot="title">
        <div class="head-block">
          <el-row>
            <el-col :span="6">
              <div>
                <span class="fa fa-file"></span>
                <span class="font-bold">{{formCreateTitleData}}</span>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="text-right">
                <span class="color-warning font-size-12 font-bold">({{$t("如已经提交，没有修改内容，请不要重复提交")}})</span>
                <i class="fa fa-close font-size-14" @click="cancelDialog"></i>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <form-create v-if="formCreateRuleData != ''" v-model="fApi" :rule="formCreateRuleData" :option="formCreateOptionData"/>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="small" @click="handleFormCancel">取 消</el-button>
          <el-button size="small" type="primary" :loading="btnLoading" @click="handleFormOk">
            {{ fromCreateBtnText }}
          </el-button>
        </div>
      </div>
    </drawer-layout-right>

    <dialog-normal top="10vh" width-style="350px" :visible="dialogPayDrCode" :title="$t('支付')" @close="closeSubDialog" @right-close="cancelSubDialog">
      <div class="text-center">
        <el-image style="width: 240px; height: 240px;" :src="qrCode"></el-image>
      </div>
      <div class="margin-top-5 color-success text-center font-size-14">
        <div>{{$t("金额")}} ¥{{totalAmount}}</div>
      </div>
      <div class="margin-top-5 color-danger font-size-12">
        <div>{{$t("1、请使用微信扫描该二维码进行支付操作")}}</div>
        <div>{{$t("2、操作完成后请点击以下操作按钮进行确认")}}</div>
        <div>{{$t("3、如果已经确认支付，请等待管理员确认，无需重复支付")}}</div>
      </div>
      <div slot="footer">
        <el-button size="small" type="success" :loading="btnLoading" @click="okPayDialog($event, 1)">{{$t("已完成支付")}}</el-button>
        <el-button size="small" type="danger" :loading="btnLoading" @click="cancelSubDialog($event, 2)">{{$t("未完成支付")}}</el-button>
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
        defaultMenuActive: '',
        noticeList: [],
        serverDataList: [],
        sex: 1,
        currentEnrollYear: '',
        currentEnrollTime: '00天00时00分00秒',
        collegeName: '',
        majorName: '',
        className: '',
        stuNo: '',
        headLogo: '',
        subTitle: '',
        messageTips: '',
        dialogInfo: false,
        dialogSign: false,
        dialogDorm: false,
        dialogPayDrCode: false,
        dialogPay: false,
        dialogStation: false,
        dialogForm: false,
        btnLoading: false,
        visibleConfim: false,
        dialogLoading: false,
        drawerRoom: false,
        drawerBill: false,
        billBtnShow: false,
        uploadFile: common.upload_file,
        uploadResult: {},
        uploadProcess: '',
        detailData: {},
        commSearchBuild: '',
        commSearchFloor: '',
        commSearchRoom: '',
        dormList: [],
        dormTreeList: [],
        dormPackageTreeList: [],
        filterRoomType: [],
        filterRoomArrow: [],
        filterRoomPrice: [],
        filterRoomStatus: [{label: this.$t("已满"),value: 1},{label: this.$t("未满"),value: 0}],
        searchRoomType: '',
        searchRoomArrow: '',
        searchRoomPrice: '',
        searchRoomStatus: '',
        commSearchPackage: '',
        ruleId: {},
        roomTypeText: 'xxxxxx',
        peopleNum: 0,
        arrow: '',
        price: 0,
        area: 0,
        paidQrcode: '',
        roomDetailData: {},
        activeBedNo: '',
        formCreateRuleData: [],
        formCreateOptionData: {},
        formCreateTitleData: '',
        fromCreateBtnText: '',
        fApi: {},
        drCode: '',
        timer: null,
        dormSelType: '',
        dormSelTitle: this.$t("床位选择"),
        connType: [],
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
        billList: [],
        qrCode: '',
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
          politics: '',
          retire: '',
          hard: '',
          graduationSchool: '',
          connType: []
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
        },
        formDorm: {
          id: '',
          beds: [],
          imgs: [],
          roomArrow: '',
          roomPrice: 0,
          roomArea: 0,
          peopleNum: 0,
          bedId: ''
        }
      }
    },
    mounted() {

    },
    created() {
      this.getCureentEnrollInfo();
      this.getDeptInfo(2);
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
        this.headLogo = (this.sessionData != '' && this.sessionData.LOGIN_RETURN_INFO && this.sessionData.LOGIN_RETURN_INFO.studentPhoto) ? this.sessionData.LOGIN_RETURN_INFO.studentPhoto : '';
        this.initStudentEnroll();
      },
      getCureentEnrollInfo(){
        let params = {};
        this.$axios.get(common.enroll_current_time, {params: params}).then(res => {
          if (res.data.data){
            this.currentEnrollYear = res.data.data.enrollName;
            this.setTimeLoop(res.data.data.endTime)
          }
        });
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
              checkUserName: res.data.data.check_user_name,
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
            this.paidQrcode = res.data.data.enrollPayCode;
            this.billBtnShow = res.data.data.payAllow;
          }
        });
      },
      initDormTree(){
        let params = {

        };
        this.$axios.get(common.server_enroll_app_dorm_list, {params: params}).then(res => {
          if (res.data.data){
            console.log(res.data.data);
            let arrow = [];
            let price = [];
            let num = [];
            this.dormTreeList = res.data.data.buildingTree;
            for (let i = 0;i < res.data.data.roomOrientList.length; i++){
              arrow.push({
                label: res.data.data.roomOrientList[i],
                value: res.data.data.roomOrientList[i]
              });
            }

            for (let i = 0;i < res.data.data.peopleNumList.length; i++){
              num.push({
                label: res.data.data.peopleNumList[i] + this.$t("人间"),
                value: res.data.data.peopleNumList[i]
              });
            }

            for (let i = 0;i < res.data.data.roomPriceList.length; i++){
              price.push({
                label: res.data.data.roomPriceList[i],
                value: res.data.data.roomPriceList[i]
              });
            }
            this.filterRoomArrow = arrow;
            this.filterRoomPrice = price;
            this.filterRoomType = num;
          }
        });
      },
      initDormInfo(){
        let url = '';
        let params = {};
        if (this.dormSelType == 0){
          params = {
            page: 1,
            num: 9999,
            userId: this.loginUserId,
            buildId: this.commSearchBuild,
            floorNum: this.commSearchFloor,
            peopleNum: this.searchRoomType,
            roomOrient: this.searchRoomArrow,
            roomPrice: this.searchRoomPrice,
            choseStatus: this.searchRoomStatus
          };
        }else if (this.dormSelType == 1){
          params = {
            page: 1,
            num: 9999,
            ruleId: this.ruleId,
            pacRegion: this.commSearchPackage
          };
        }

        if (this.dormSelType == 0){
          url = common.server_enroll_app_dorm_room;
          this.$axios.get(url, {params: params}).then(res => {
            if (res.data.data){
              this.dormList = res.data.data.list;
            }
          });
        }else if (this.dormSelType == 1){
          url = common.enroll_rule_package_list;
          this.$axios.get(url, {params: params}).then(res => {
            if (res.data.data){
              this.dormList = res.data.data;
            }
          });
        }
      },
      initRoomInfo(){
        this.filterRoomType = [];
        this.filterRoomArrow = [];
        this.filterRoomPrice = [];
      },
      initBill(){
        let params = {
          userId: this.loginUserId,
          page: 1,
          num: 9999,
        };
        let url = '';
        if (this.dormSelType == 0){
          url = common.server_enroll_app_dorm_bill_page;
        }else if (this.dormSelType == 1){
          url = common.enroll_rule_package_order_list;
        }
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            this.billList = res.data.data.list;
          }
        });
      },
      getPayInfo(){
        let params = {};
        this.$axios.get(common.enroll_pay_link_get, {params: params}).then(res => {
          if (res.data.data){
            this.qrCode = res.data.data.enrollPayCode;
          }
        });
      },
      setTimeLoop(data){
        let time =this.$moment(data).diff(this.$moment())
        if(time <= 0){
          clearInterval(this.timer);
          return
        }
        let t = time / 1000;
        let d = Math.floor(t / (24 * 3600));  //剩余天数，如果需要可以自行补上
        let h = Math.floor((t - 24 * 3600 * d) / 3600) + d*24;  //不需要天数，把天数转换成小时
        let _h = Math.floor((t - 24 * 3600 * d) / 3600)  //保留天数后得小时
        let m = Math.floor((t - 24 * 3600 * d - _h * 3600) / 60);
        let s = Math.floor((t - 24 * 3600 * d - _h * 3600 - m * 60));

        let hh = String(h).length == 1? '0'+String(h):String(h)
        let mm = String(m).length == 1? '0'+String(m):String(m)
        let ss = String(s).length == 1? '0'+String(s):String(s)


        this.currentEnrollTime = d + "天" + _h + "小时" + mm + "分";
      },
      studentDetailInfo(userId) {
        let params = {
          userId: this.loginUserId
        };
        this.$axios.get(common.enroll_student_detail, {params: params}).then(res => {
          if (res.data.data) {
            //this.detailData = res.data.data;
            let connType = [];
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
              graduation: res.data.data.graduation_type ? res.data.data.graduation_type : '',
              politics: res.data.data.political_type ? res.data.data.political_type : '',
              retire: res.data.data.soldier,
              hard: res.data.data.difficulty_type ? res.data.data.difficulty_type : '',
              graduationSchool: res.data.data.high_school ? res.data.data.high_school : '',
              connType: []
            };
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
      selMenuAll(){
        //this.defaultMenuActive = index + '';
        this.commSearchBuild = "";
        this.commSearchFloor = "";
        this.commSearchRoom = "";
        this.commSearchBuild = "";
        this.commSearchFloor = "";
        this.commSearchPackage = "";
        this.initDormInfo();
      },
      selMenu(event, item, index){
        //this.defaultMenuActive = index + '';
        if(this.dormSelType == 0){
          this.commSearchBuild = "";
          this.commSearchFloor = "";
          this.commSearchRoom = "";
          if (item.storey){
            this.commSearchBuild = item.id;
          }else {
            this.commSearchBuild = item.buildingId;
          }
          this.commSearchFloor = item.floor;
        }else if(this.dormSelType == 1){
          this.commSearchPackage = item.value;
        }

        this.initDormInfo();
      },
      selRoomItem(event, item){
        this.formDorm.id = item.id;

        if (this.dormSelType == 0){
          let params = {
            id: item.id
          };
          this.dormSelTitle = this.$t("床位选择");
          this.$axios.get(common.server_enroll_app_dorm_info, {params: params, loading: false}).then((res) => {
            if (res.data.data){
              let photos = res.data.data.room_photos ? res.data.data.room_photos.split("|") : [];
              this.formDorm.imgs = photos
              this.formDorm.beds = res.data.data.beds;
              this.formDorm.roomPrice = res.data.data.room_price;
              this.formDorm.roomArrow = res.data.data.room_orient;
              this.formDorm.peopleNum = res.data.data.people_num;
              this.formDorm.roomArea = res.data.data.area;
            }
          });
        }else if (this.dormSelType == 1){
          this.dormSelTitle = this.$t("套餐选择");
          let photos = item.pacLogo ? item.pacLogo.split(",") : [];
          this.formDorm.imgs = photos
          this.formDorm.roomPrice = item.pacPrice;
        }

        this.drawerRoom = true;
      },
      billManage(){
        this.initBill();
        this.drawerBill = true;
      },
      serverClick($event, item){
        this.detailData = item;
        if(item.link_sub_type == 5){
          window.open('/signOrder?checkId=' + item.id, '_blank');
        }else if (item.link_sub_type == 4){
          this.studentDetailInfo();
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
        }else if (item.link_sub_type == 2){
          this.dormSelType = item.ruleTypeInfo.rule_type;
          if (this.dormSelType == 1){
            this.ruleId = item.ruleTypeInfo.rule_id;
            let dormPackageTreeList = [];
            for (let i = 0; i < item.ruleTypeInfo.pacRegions.length; i++){
              dormPackageTreeList.push({
                label: item.ruleTypeInfo.pacRegions[i].pac_region,
                value: item.ruleTypeInfo.pacRegions[i].pac_region,
                text: item.ruleTypeInfo.pacRegions[i].pac_region
              });
            }
            this.dormPackageTreeList = dormPackageTreeList;
          }
          this.initDormTree();
          this.initDormInfo();
          this.dialogDorm = true;
        }else if (item.link_sub_type == 9){
          let rules = '';
          let list = [];
          let params = {
            linkId: this.detailData.id
          };
          this.$axios.get(common.server_enroll_app_student_link_info, {params: params, loading: false}).then((res) => {
            if (res.data.data){
              this.formCreateTitleData = res.data.data.linkName;
              this.formCreateIdData = res.data.data.id;
              //this.fromCreateBtnShow = data.submit_button;
              this.fromCreateBtnText = this.$t("提交")
              if (res.data.data.linkContent != null && item.linkContent != ''){
                this.formCreateRuleData = JSON.parse(res.data.data.linkContent).rule;
                this.formCreateOptionData = JSON.parse(res.data.data.linkContent).option;
                this.setFormChildren(this.formCreateRuleData, list, 'children');
              }
            }
          });

          this.dialogForm = true;
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
      handleChangeSearch(event, item, type){
        if (type == 1){
          this.searchRoomType = item.value;
        }else if (type == 2){
          this.searchRoomArrow = item.value;
        }else if (type == 3){
          this.searchRoomPrice = item.value;
        }else if (type == 4){
          this.searchRoomStatus = item.value;
        }
        this.initDormInfo();
      },
      handleSelectChange(event, type){
        if (type == 1){
          this.form.graduation = event;
        }else if (type == 2){
          this.form.politics = event;
        }else if (type == 3){
          this.form.retire = event;
        }else if (type == 4){
          this.form.hard = event;
        }
      },
      handleChangeConnType(data){
        console.log(data);
        this.connType = data;
        this.$set(this.form, 'connType', data);
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
          headImg: '',
          graduation: '',
          politics: '',
          retire: '',
          hard: '',
          graduationSchool: '',
          connType: []
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
        this.searchRoomType = '';
        this.searchRoomArrow = '';
        this.searchRoomPrice = '';
        this.searchRoomStatus = '';
        this.drCode = '';
        this.paidQrcode = '';
        this.connType = [];
        this.btnLoading = false;
        this.dialogLoading = false;
        this.visibleConfim = false;
      },
      closeSubDialog(){
        this.btnLoading = false;
        this.drCode = '';
        this.paidQrcode = '';
      },
      cancelDialog(){
        this.dialogStation = false;
        this.dialogInfo = false;
        this.dialogSign = false;
        this.dialogPay = false;
        this.dialogDorm = false;
        this.dialogPayDrCode = false;
      },
      cancelSubDialog(){
        this.dialogPayDrCode = false;
      },
      closeDrawDialog(){
        this.activeBedNo = '';
        this.billList = [];
        this.commSearchBuild = "";
        this.commSearchFloor = "";
        this.commSearchRoom = "";
        this.searchRoomType = '';
        this.searchRoomArrow = '';
        this.searchRoomPrice = '';
        this.searchRoomStatus = '';
        this.formDorm = {
          id: '',
          beds: [],
          imgs: [],
          roomArrow: '',
          roomPrice: 0,
          roomArea: 0,
          peopleNum: 0,
          bedId: ''
        };
        this.formCreateRuleData = [];
        this.formCreateOptionData = {};
        this.formCreateTitleData = '';
        this.fromCreateBtnText = '';
        this.dialogForm = false;
        this.drawerRoom = false;
        this.drawerBill = false;
      },
      cancelDrawDialog(){
        this.drawerRoom = false;
        this.drawerBill = false;
        this.dialogForm = false;
      },
      okDrawDialog(){
        this.btnLoading = true;
        let url = common.server_enroll_app_dorm_chose;
        let params = {};
        if (this.dormSelType == 0){
          url = common.server_enroll_app_dorm_chose;
          params = {
            userId: this.loginUserId,
            roomId: this.formDorm.id,
            bedId: this.formDorm.bedId
          }
        }else if (this.dormSelType == 1){
          url = common.enroll_rule_package_order_chose;
          params = {
            linkId: this.detailData.id,
            packageId: this.formDorm.id
          }
        }

        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.initDormInfo();
            this.initStudentEnroll();
            this.drawerRoom = false;
            MessageSuccess(res.data.desc);
            this.dialogInfo = false;
            this.btnLoading = false;
          }else {
            MessageError(res.data.desc);
            this.btnLoading = false;
          }
        });
      },
      okDialog(){
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.btnLoading = true;
            let url = common.server_enroll_app_student_update;
            // if (this.form.headImg == ""){
            //   MessageWarning(this.$t("请设置照片！"));
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
      },
      nodeClick(data){
        this.commSearchBuild = "";
        this.commSearchFloor = "";
        this.commSearchRoom = "";
        if (data.length == 1){
          this.commSearchBuild = data[0];
        }else if (data.length == 2){
          this.commSearchBuild = data[0];
          this.commSearchFloor = data[1];
        }else if (data.length == 3){
          this.commSearchBuild = data[0];
          this.commSearchFloor = data[1];
          this.commSearchRoom = data[2];
        }
      },
      selBedNo(event, item, index){
        this.formDorm.bedId = item.id;
        this.activeBedNo = index;
      },
      setBillStatus(event, item){
        let url = "";
        let params = {}
        if (this.dormSelType == 0){
          url = common.server_enroll_app_dorm_bill_revoke;
          params = {
            id: item.id,
            userId: this.loginUserId
          }
        }else if (this.dormSelType == 1){
          url = common.enroll_rule_package_order_revoke;
          params = {
            id: item.id
          }
          console.log(item.id);
        }

        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.initBill();
            this.initStudentEnroll();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      handleFormCancel(){
        this.dialogForm = false;
      },
      handleFormOk(){
        this.fApi.submit((formData, fApi)=>{
          let url = "";
          let ruleList = [];
          let params = {
            linkId: this.detailData.id
          }
          let rule = fApi.rule;
          let ruleObjList =  this.setRuleChild(rule, ruleList);
          //console.log(ruleObjList);
          params['linkFormDate'] = JSON.stringify(ruleObjList);

          url = common.server_enroll_app_student_form_add;
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              this.dialogForm = false;
              this.initStudentEnroll();
              MessageSuccess(res.data.desc);
            }else {
              MessageError(res.data.desc);
            }
            this.btnLoading = false;
          });
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
                    file.url = res.data.url || ''
                    console.log(res)
                  }
                }
              }
            }
          });
          return obj;
        }
      },
      payManage(event, data){
        if(this.billBtnShow == false){
          MessageWarning(this.$t("未到缴费时间！"));
          return;
        }
        this.drCode = '';
        this.getPayInfo();
        this.dialogPayDrCode = true;
      },
      okPayDialog(event, type){
        if(this.billBtnShow == false){
          MessageWarning(this.$t("未到缴费时间！"));
          return;
        }
        let params = {};
        params = this.$qs.stringify(params);
        this.btnLoading = true;
        this.$axios.post(common.enroll_pay_item_pay, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            this.initStudentInfo();
            this.initStudentEnroll();
            this.dialogPayDrCode = false;
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
            this.btnLoading = false;
          }
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
.info-dorm-block{
  width: 100%;
  height: 450px;
}
.tag-class{
  width: 10px;
  height: 13px;
  background: #67C23A;
  display: inline-block;
}
.tag-danger-class{
  width: 10px;
  height: 13px;
  background: #F56C6C;
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
  top: 17px;
  left: 3px;
  font-weight: normal;
}
.server-tag-block .text{
  position: relative;
  top: 18px;
  left: 0px;
  font-weight: normal;
}
.info-block-left{
  width: 200px;
  height: 450px;
  border-right: 1px solid #F2F6FC;
}
.info-block-right{
  margin-left: 200px;
  height: 100%;
}
.info-block-header{
  height: 45px;
  line-height: 45px;
  font-size: 12px;
  color: #FFFFFF;
  background: #909399;
}
.header-block{
  height: 40px;
  line-height: 40px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.bed-item-block{
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #DCDFE6;
}
.room-item-block{
  padding: 10px;
  border-radius: 5px;
  cursor: default;
}
.room-item-block:hover{
  background: #f5f5f5;
}
.bed-item-block{
  cursor: default;
}
.bed-item-block:hover{
  background: #F2F6FC;
}
.bed-item-block-active,.bed-item-block-active:hover{
  background: #E6A23C;
  color: #FFFFFF;
}
.bed-item-block-selected,.bed-item-block-selected:hover{
  background: #F56C6C;
  color: #FFFFFF;
}
.block-icon-class{
  height: 30px;
  width: 30px;
  position: relative;
  top: 3px
}
</style>
