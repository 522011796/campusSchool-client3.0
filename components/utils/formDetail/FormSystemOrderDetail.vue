<template>
  <div>
    <div class="text-left" v-bind="selectDetailType">
      <el-button-group>
        <el-button size="small" :type="detailDataType == 1 ? 'primary' : 'default'" @click="changeDetailType($event ,1)">{{ formCode == 'TYHT' || formCode == 'XSHT' || formCode == 'CGHT' ? $t("合同信息") : $t("详细信息") }}</el-button>
        <el-button size="small" :type="detailDataType == 2 ? 'primary' : 'default'" @click="changeDetailType($event ,2)">{{ $t("审批详情") }}</el-button>
        <el-button v-if="(formCode != 'TYHT' && formCode != 'XSHT' && formCode != 'CGHT')  || (serialDataList && serialDataList.length > 0)" size="small" :type="detailDataType == 3 ? 'primary' : 'default'" @click="changeDetailType($event ,3)">{{ $t("合同单据") }}</el-button>
      </el-button-group>
    </div>

    <div class="margin-top-20">
      <template v-if="detailDataType == 1">
        <el-row>
          <el-col :span="12">
            <el-form label-width="100px">
              <el-form-item :label="$t('合同名称')">
                <label>{{dataDetailObj['ht_name20230501'] ? dataDetailObj['ht_name20230501']['value'] : '--'}}</label>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12">
            <el-form label-width="100px">
              <el-form-item :label="$t('合同编号')">
                <label>{{dataDetailObj['ht_no20230501'] ? dataDetailObj['ht_no20230501']['value'] : '--'}}</label>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <template>
          <el-row>
            <el-col :span="12">
              <el-form label-width="100px">
                <el-form-item :label="$t('关联单据')">
                  <label>{{dataDetailObj['tag_ids20230501'] ? dataDetailObj['tag_ids20230501']['name'] : '--'}}</label>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="12">
              <el-form label-width="100px">
                <el-form-item :label="$t('合同金额')">
                  <label>{{dataDetailObj['ht_amount20230501'] ? dataDetailObj['ht_amount20230501']['value'] : '--'}}</label>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </template>
        <template>
          <el-row>
            <el-col :span="12">
              <el-form label-width="100px">
                <el-form-item :label="$t('关联项目')">
                  <label>{{dataDetailObj['xm_id20230501'] ? (dataDetailObj['xm_id20230501']['name'] ? dataDetailObj['xm_id20230501']['name'] : '--') : '--'}}</label>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="12">
              <el-form label-width="100px">
                <el-form-item :label="$t('责任人')">
                  <label>{{dataDetailObj['ht_duty20230501'] ? (dataDetailObj['ht_duty20230501']['userName'] ? dataDetailObj['ht_duty20230501']['userName'] : '--') : '--'}}</label>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </template>
        <el-form label-width="100px">
          <el-form-item :label="$t('附件')">
            <div v-if="dataDetailObj['ht_files20230501']">
              <div v-if="dataDetailObj['ht_files20230501']['value'].length > 0" v-for="(item, index) in dataDetailObj['ht_files20230501']['value']" :key="index" class="pull-left" style="position: relative;margin-right:10px;top: 10px">
                <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 50px;width: 50px;font-size: 50px;position: relative;top: -2px;" @click="readOtherFile(item)"></i>
                <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 50px;width: 50px;font-size: 50px;position: relative;top: -2px;" @click="readOtherFile(item)"></i>
                <el-image
                  v-else
                  style="width: 50px; height: 50px"
                  :src="item"
                  :preview-src-list="[item]">
                </el-image>
              </div>
              <div v-else>
                --
              </div>
            </div>
            <div v-else>
              --
            </div>
          </el-form-item>
        </el-form>
        <el-form label-width="100px">
          <el-form-item :label="$t('其他描述')">
            <div style="word-wrap:break-word;word-break:break-all;overflow: hidden;">{{dataDetailObj['ht_des20230501'] ? (dataDetailObj['ht_des20230501']['value'] ? dataDetailObj['ht_des20230501']['value'] : '--') : '--'}}</div>
          </el-form-item>
        </el-form>

        <template>
          <div style="margin-left: 30px">
            <span class="color-text-default">{{$t('回款计划')}}</span>
          </div>
          <table class="custom-table" style="width: 480px;margin-top: 10px;font-size: 12px;margin-left: 30px">
            <tr>
              <th width="10%">{{$t("期数")}}</th>
              <th width="15%">{{$t("比例")}}</th>
              <th width="15%">{{$t("金额")}}</th>
              <th width="25%">{{$t("日期")}}</th>
              <th width="30%">{{$t("备注")}}</th>
            </tr>
            <tbody>
            <tr v-for="(item, index) in extraDataList" :key="item.id">
              <td>
                <!--                <el-input size="mini" style="width: 45px" v-model="item.stage"></el-input>-->
                <label>{{item.stage}}</label>
              </td>
              <td>
                <label>{{item.rate}}</label>%
              </td>
              <td>
                <label>{{item.shouldAmount}}</label>
              </td>
              <td>
                <label>{{item.time}}</label>
              </td>
              <td>
                <div class="moon-content-text-ellipsis-class" style="max-width: 150px">{{item.des}}</div>
              </td>
            </tr>
            </tbody>
          </table>
        </template>
      </template>

      <template v-if="detailDataType == 2">
        <div class="detail-top-block" style="overflow-x: auto;padding: 20px 0px;white-space:nowrap;">
          <div :style="{width: (detailApplyAuditList.length+2) * (600/4) + (detailApplyAuditList.length+1) * 50 +'px'}">
            <div class="pull-left text-center" :style="{width: 600/4+'px'}">
              <div class="text-center margin-bottom-5">
                <span class="font-size-12"> &nbsp; </span>
              </div>
              <div class="detail-top-item-green-block">
                <span class="font-size-12 color-white">{{$t("开始")}}</span>
              </div>
              <div class="text-center margin-top-5">
                <span class="font-size-12">{{$t("提交")}}</span>
              </div>
            </div>
            <div class="pull-left text-center" :style="{width: 50+'px'}" style="line-height: 93px;">
              <i class="el-icon-right" style="font-size: 30px;"></i>
            </div>
            <div v-for="(item, index) in detailApplyAuditList" :key="index">
              <div :style="{width: 600/4+'px'}" class="pull-left text-center">
                <template>
                  <div class="text-center margin-bottom-5">
                        <span class="font-size-12">
                          <label>{{ auditStatusTextInfo(item.status) }}</label>
                        </span>
                  </div>
                  <div class="detail-top-item-warning-block" :class="auditColorInfo(item.status)">
                    <el-popover
                      placement="left"
                      width="150"
                      trigger="hover">
                      <div style="max-height: 100px;overflow-y: auto">
                        <div v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser">
                          <div class="font-size-12 padding-tb-5 text-center">
                            <el-tag type="success" size="mini">{{itemUser}}</el-tag>
                          </div>
                        </div>
                      </div>
                      <div slot="reference" class="font-size-12 color-white moon-content-text-ellipsis-class text-center">
                        {{ item.handleUserNameList.join() }}
                      </div>
                    </el-popover>
                  </div>
                  <div class="text-center margin-top-5">
                    <span class="font-size-12">{{ item.nodeName }}</span>
                  </div>
                </template>
              </div>
              <div class="pull-left text-center" :style="{width: 50+'px'}" style="line-height: 93px;">
                <i class="el-icon-right" style="font-size: 30px;"></i>
              </div>
            </div>
            <div class="pull-left text-center" :style="{width: 600/4+'px'}">
              <div class="text-center margin-bottom-5">
                <span class="font-size-12"> &nbsp; </span>
              </div>
              <div class="detail-top-item-default-block">
                <span class="font-size-12 color-white">{{$t("结束")}}</span>
              </div>
              <div class="text-center margin-top-5">
                <span class="font-size-12">{{$t("完成")}}</span>
              </div>
            </div>

            <div class="moon-clearfix"></div>
          </div>
        </div>

        <div class="detail-block margin-top-20">
          <el-steps direction="vertical" space="60px">
            <el-step v-for="(item, index) in detailApplyAuditList" :key="index">
              <div slot="icon">
                <i v-if="item.handleLevel == 1" class="fa fa-flag" :class="auditTextColorInfo(item.status)" style="font-size: 12px"></i>
                <i v-if="item.handleLevel == 2" class="fa fa-bullseye" style="font-size: 12px"></i>
              </div>
              <div slot="title" class="font-size-12">
                    <span v-if="item.nodeType == 'handle'" class="color-success">
                      {{item.nodeName}}{{ $t("审批") }}
                      <label v-if="item.andor == 'and'" class="color-warning"> ({{ $t("与签") }}) </label>
                      <label v-if="item.andor == 'or'" class="color-warning"> ({{ $t("或签") }}) </label>
                    </span>
                <span v-if="item.nodeType == 'cc'" class="color-warning">{{ $t("抄送") }}</span>
              </div>
              <div slot="description" class="font-size-12 color-sub-title">
                <div>
                  <template v-if="item.nodeType == 'handle'">
                    <div v-for="(itemUser, indexUser) in item.handleUserList" :key="indexUser">
                      <div>
                        <span class="color-grand"> <i class="fa fa-user"></i> {{ itemUser.userName }} </span>
                        <span class="margin-left-10">
                          <label v-if="itemUser.status === -1" class="color-warning">{{$t("待提交")}}</label>
                          <label v-if="itemUser.status === 0" class="color-warning">{{$t("待审核")}}</label>
                          <label v-if="itemUser.status === 3" class="color-success">
                            {{$t("已通过")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <el-image v-for="(itemImg, indexImg) in itemUser.url" :key="indexImg" :src="itemImg" style="width: 20px; height: 20px;position: relative; top: 5px;margin-left: 5px"
                                        :preview-src-list="[itemImg]">
                              </el-image>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 4" class="color-danger">{{$t("未通过")}}</label>
                          <label v-if="itemUser.status === 1" class="color-success">
                            {{$t("已通过")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <el-image v-for="(itemImg, indexImg) in itemUser.url" :key="indexImg" :src="itemImg" style="width: 20px; height: 20px;position: relative; top: 5px;margin-left: 5px"
                                        :preview-src-list="[itemImg]">
                              </el-image>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 2" class="color-warning">
                            {{$t("已驳回")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <el-image v-for="(itemImg, indexImg) in itemUser.url" :key="indexImg" :src="itemImg" style="width: 20px; height: 20px;position: relative; top: 5px;margin-left: 5px"
                                        :preview-src-list="[itemImg]">
                              </el-image>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 5" class="color-warning">{{$t("无需审批")}}</label>
                          <label v-if="itemUser.status === 8" class="color-warning">{{$t("审批中")}}</label>
                        </span>
                        <span class="margin-left-10" v-if="itemUser.handleTime">
                          <label class="color-muted">{{$moment(itemUser.handleTime).format("YYYY-MM-DD HH:mm:ss")}}</label>
                        </span>
                      </div>
                      <div class="margin-top-5" v-if="itemUser.signStr && itemUser.signStr != ''">
                        <span style="position: relative;top: -3px" class="color-muted">
                          <i class="fa fa-pencil"></i>
                          <label>{{$t("手写签名")}}</label>
                        </span>
                        <span>
                          <el-image
                              style="width: 40px; height: 15px"
                              :src="itemUser.signStr"
                              :preview-src-list="[itemUser.signStr]">
                          </el-image>
                        </span>
                      </div>
                    </div>
                  </template>
                  <template v-if="item.nodeType == 'cc'">
                    <el-tag size="mini" v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser" v-if="indexUser <= 5">
                      <div class="moon-content-text-ellipsis-class" style="width: 50px">
                        <el-tooltip class="item" effect="dark" :content="itemUser" placement="top-start">
                          <span>{{ itemUser }}</span>
                        </el-tooltip>
                      </div>
                    </el-tag>

                    <el-popover
                      placement="left"
                      width="200"
                      trigger="hover"
                      v-if="item.handleUserNameList.length > 5">
                      <div style="height: 100px;overflow-y: auto">
                        <div v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser">
                          <div class="font-size-12 padding-tb-5">
                            <span>{{itemUser}}</span>
                          </div>
                        </div>
                      </div>
                      <el-tag slot="reference" size="mini" type="success">
                        <div class="moon-content-text-ellipsis-class padding-lr-5">
                          <i class="fa fa-user"></i>
                          <label class="margin-left-5">{{item.handleUserNameList.length}}</label>
                        </div>
                      </el-tag>
                    </el-popover>
                  </template>
                </div>
              </div>
            </el-step>
          </el-steps>
        </div>
      </template>

      <template v-if="detailDataType == 3">
        <div class="detail-block" :style="{minHeight: drawHeight}">
<!--          <div>-->
<!--            <span>{{$t("被下列合同/单据关联")}}</span>-->
<!--          </div>-->
          <div class="margin-top-10">
            <el-table
              v-if="tableOrderDetailData.length > 0"
              :data="tableOrderDetailData"
              header-cell-class-name="custom-table-cell-bg"
              size="small"
              row-key="id"
              border
              :max-height="tableHeight"
              style="width: 100%">
              <el-table-column
                align="center"
                :label="$t('类型')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <span v-if="scope.row.payableType == 0" class="color-warning">{{$t("应付")}}</span>
                      <span v-if="scope.row.payableType == 1" class="color-success">{{$t("应收")}}</span>
                    </div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <span v-if="scope.row.payableType == 0" class="color-warning">{{$t("应付")}}</span>
                      <span v-if="scope.row.payableType == 1" class="color-success">{{$t("应收")}}</span>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('期数')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center"><span>{{formXmTextInfo(scope.row.formCode, 'set')}}</span></div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <span>{{scope.row.stage}}</span>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('比例')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.rate}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <span>{{scope.row.rate}}%</span>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('金额')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.shouldAmount}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <span>{{scope.row.shouldAmount}}</span>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('日期')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.time}}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <span>{{scope.row.time}}</span>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('备注')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{ scope.row.des ? scope.row.des : '--' }}</div>
                    <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <span>{{scope.row.des ? scope.row.des : '--'}}</span>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
<!--              <el-table-column-->
<!--                align="center"-->
<!--                label="操作"-->
<!--                width="80">-->
<!--                <template slot-scope="scope">-->
<!--                  <a href="javascript:;" class="color-success" @click="detailOrderInfo(scope.row, false)">{{$t("查看")}}</a>-->
<!--                </template>-->
<!--              </el-table-column>-->
            </el-table>

            <template v-else-if="serialDataList.length > 0">
              <div class="margin-top-10">
                <el-table
                    v-if="serialDataList.length > 0"
                    :data="serialDataList"
                    header-cell-class-name="custom-table-cell-bg"
                    size="small"
                    row-key="id"
                    border
                    :max-height="drawHeight"
                    style="width: 100%">
                  <el-table-column
                      align="center"
                      :label="$t('名称')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">
                          {{scope.row.typeStr ? scope.row.typeStr: '--'}}
                        </div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.typeStr ? scope.row.typeStr: '--'}}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                      align="center"
                      :label="$t('发票日期')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">
                          <span>{{scope.row.fpTime ? scope.row.fpTime : '--'}}</span>
                        </div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.fpTime ? scope.row.fpTime : '--'}}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                      align="center"
                      :label="$t('发票号码')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">
                          <span>{{scope.row.fpNo ? scope.row.fpNo : '--'}}</span>
                        </div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.fpNo ? scope.row.fpNo : '--'}}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                      align="center"
                      :label="$t('发票代码')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">
                          <span>{{scope.row.fpCode ? scope.row.fpCode : '--'}}</span>
                        </div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.fpCode ? scope.row.fpCode : '--'}}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                      align="center"
                      :label="$t('发票验证码')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">
                          <span>{{scope.row.fpCheckCode ? scope.row.fpCheckCode : '--'}}</span>
                        </div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.fpCheckCode ? scope.row.fpCheckCode : '--'}}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                      align="center"
                      :label="$t('金额')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">
                          <span>{{scope.row.fp.length > 0 ? scope.row.fp[0].totalAmount : (scope.row.amount ? scope.row.amount : '--')}}</span>
                        </div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.fp.length > 0 ? scope.row.fp[0].totalAmount : (scope.row.amount ? scope.row.amount : '--')}}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                      align="center"
                      :label="$t('类型')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">
                          <span>{{scope.row.fp.length > 0 ? scope.row.fp[0].invoiceType : (scope.row.fpType ? scope.row.fpType : '--')}}</span>
                        </div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.fp.length > 0 ? scope.row.fp[0].invoiceType : (scope.row.fpType ? scope.row.fpType : '--')}}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import {
  auditStatusBgColor,
  auditStatusColor,
  auditStatusText,
  formXmText,
  objectStatus,
  objectType
} from "~/utils/utils";

export default {
    name: 'FormSystemOrderDetail',
    props: {
      detailType: {
        default: '1',
        type: [String, Number]
      },
      formCode: {
        default: '',
        type: String
      },
      dataDetailObj: {
        default: function (){
          return {};
        },
        type: Object
      },
      dataMainDetailObj: {
        default: function (){
          return {};
        },
        type: Object
      },
      extraDataList: {
        default: function (){
          return [];
        },
        type: Array
      },
      serialDataList: {
        default: function (){
          return [];
        },
        type: Array
      },
      detailApplyAuditList: {
        default: function (){
          return [];
        },
        type: Array
      },
      tableOrderDetailData: {
        default: function (){
          return [];
        },
        type: Array
      },
      drawHeight: {
        default: '',
        type: [String, Number]
      },
      tableHeight: {
        default: '',
        type: [String, Number]
      }
    },
    computed: {
      selectDetailType(){
        this.detailDataType = this.detailType;
      }
    },
    data() {
      return {
        value: '',
        detailDataType: this.detailType
      }
    },
    methods: {
      changeDetailType(event, type){
        this.detailDataType = type;
        this.$emit('changeDetailType', event, type);
      },
      objectTypeInfo(str, type){
        return objectType(type, str);
      },
      objectStatusInfo(str, type){
        return objectStatus(type, str);
      },
      auditStatusTextInfo(str){
        return auditStatusText(str);
      },
      auditColorInfo(val){
        return auditStatusBgColor(val);
      },
      auditTextColorInfo(val){
        return auditStatusColor(val);
      },
      formXmTextInfo(str, type){
        return formXmText(str, type);
      },
      readFile(file){//预览
        ImagePreview({
          images: [file],
          closeable: false,
        });
      },
      readOtherFile(file){
        window.open(file, "_blank");
      },
      detailOrderInfo(data){
        this.$emit('detailOrderInfo', data);
      }
    }
  }
</script>

<style scoped>
.block-item-row{
  height: 35px;
  line-height: 35px;
}
.header-block{
  height: 40px;
  line-height: 40px;
}
.detail-top-block{
  border-radius: 5px;
  background: #ffffff;
  height: 100px;
}
.detail-block{
  border-radius: 5px;
  background: #ffffff;
  padding: 10px 10px;
}
.detail-top-item-green-block{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #67C23A;
  position: relative;
  margin: 0 auto;
}
.detail-top-item-warning-block{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
//background: #67C23A;
  position: relative;
  margin: 0 auto;
}
.detail-top-item-error-block{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #F56C6C;
  position: relative;
  margin: 0 auto;
}
.detail-top-item-default-block{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #C0C4CC;
  position: relative;
  margin: 0 auto;
}
.rp-img{
  height: 50px;
  width: 50px;
  border: 1px solid #dddddd;
}
</style>
