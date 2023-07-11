<template>
  <div>
    <div class="text-left" v-bind="selectDetailType">
      <el-button-group>
        <el-button size="small" :type="detailDataType == 1 ? 'primary' : 'default'" @click="changeDetailType($event ,1)">{{ $t("单据信息") }}</el-button>
        <el-button size="small" :type="detailDataType == 2 ? 'primary' : 'default'" @click="changeDetailType($event ,2)">{{ $t("审批详情") }}</el-button>
        <el-button v-if="(extraDataList && extraDataList.length > 0) || (serialDataList && serialDataList.length > 0)" size="small" :type="detailDataType == 3 ? 'primary' : 'default'" @click="changeDetailType($event ,3)">{{ $t("单据列表") }}</el-button>
        <el-button v-if="dataMainDetailObj.formCode == 'XSHT' || dataMainDetailObj.formCode == 'CGHT'" size="small" :type="detailDataType == 3 ? 'primary' : 'default'" @click="changeDetailType($event ,3)">{{ $t("合同单据") }}</el-button>
      </el-button-group>
    </div>

    <div class="margin-top-10 custom-form">
      <template v-if="detailDataType == 1">
        <div class="detail-block" :style="{minHeight: drawHeight}">
          <div class="margin-top-10">
            <div class="font-bold">{{$t("基础信息")}}:</div>
            <template>
              <div class="margin-top-5">
                <template v-if="dataMainDetailObj.formCode != 'CGHT' && dataMainDetailObj.formCode != 'XSHT' && dataMainDetailObj.formCode != 'TYHT'">
                  <el-row>
                    <el-col :span="12">
                      <el-form label-width="80px">
                        <el-form-item :label="$t('申请人')">
                          <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataMainDetailObj.applyUserName)">{{dataMainDetailObj.applyUserName}}</div>
                        </el-form-item>
                      </el-form>
                    </el-col>
                    <el-col :span="12">
                      <el-form label-width="80px">
                        <el-form-item :label="$t('工号')">
                          <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataMainDetailObj.userNo)">{{dataMainDetailObj.userNo}}</div>
                        </el-form-item>
                      </el-form>
                    </el-col>
                  </el-row>
                  <template>
                    <el-row>
                      <el-col :span="24">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('提交日期')">
                            <div class="moon-content-text-ellipsis-class label-item-time-block" @click="toastInfo($moment(dataMainDetailObj.applyTime).format('YYYY-MM-DD HH:mm:ss'))">{{$moment(dataMainDetailObj.applyTime).format("YYYY-MM-DD HH:mm:ss")}}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>
                  <template>
                    <el-row>
                      <el-col :span="24">
                        <el-form label-width="80px">
                          <el-form-item v-if="dataMainDetailObj.formCode =='JKGL'" :label="$t('借款日期')">
                            <div v-if="dataDetailObj['jk_date20230501'] && dataDetailObj['jk_date20230501']['value']" class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['jk_date20230501']['value'])">{{dataDetailObj['jk_date20230501']['value']}}</div>
                            <label v-else>--</label>
                          </el-form-item>
                          <el-form-item v-if="dataMainDetailObj.formCode =='DGDK'" :label="$t('供应商')">
                            <div v-if="dataDetailObj['supplierId20230501'] && dataDetailObj['supplierId20230501']['name']" class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['supplierId20230501']['name'])">{{dataDetailObj['supplierId20230501']['name']}}</div>
                            <label v-else>--</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>
                  <template v-if="dataMainDetailObj.formCode == 'JKGL'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联项目')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['xm_id20230501'] ? (dataDetailObj.xm_id20230501.name ? dataDetailObj.xm_id20230501.name : '--') : '--')">{{ dataDetailObj['xm_id20230501'] ? (dataDetailObj.xm_id20230501.name ? dataDetailObj.xm_id20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联合同')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['ht_id20230501'] ? (dataDetailObj.xm_id20230501.name ? dataDetailObj.xm_id20230501.name : '--') : '--')">{{ dataDetailObj['ht_id20230501'] ? (dataDetailObj.xm_id20230501.name ? dataDetailObj.xm_id20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联标签')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--')">{{ dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('金额')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--')">{{ dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('借款账户')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['jk_account20230501'] ? (dataDetailObj.jk_account20230501.name ? dataDetailObj.jk_account20230501.name : '--') : '--')">{{ dataDetailObj['jk_account20230501'] ? (dataDetailObj.jk_account20230501.name ? dataDetailObj.jk_account20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>
                  <template v-if="dataMainDetailObj.formCode == 'HKD'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联标签')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--')">{{ dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('核销借款')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['borrow_apply20230501'] ? (dataDetailObj.borrow_apply20230501.name ? dataDetailObj.borrow_apply20230501.name : '--') : '--')">{{ dataDetailObj['borrow_apply20230501'] ? (dataDetailObj.borrow_apply20230501.name ? dataDetailObj.borrow_apply20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联单据')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['rela_apply20230501'] ? (dataDetailObj.rela_apply20230501.name ? dataDetailObj.rela_apply20230501.name : '--') : '--')">{{ dataDetailObj['rela_apply20230501'] ? (dataDetailObj.rela_apply20230501.name ? dataDetailObj.rela_apply20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('金额')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--')">{{ dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('还款账户')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['jk_account20230501'] ? (dataDetailObj.jk_account20230501.name ? dataDetailObj.jk_account20230501.name : '--') : '--')">{{ dataDetailObj['jk_account20230501'] ? (dataDetailObj.jk_account20230501.name ? dataDetailObj.jk_account20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>

                  <template v-if="dataMainDetailObj.formCode == 'SKD'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联标签')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--')">{{ dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联单据')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['rela_apply20230501'] ? (dataDetailObj.rela_apply20230501.name ? dataDetailObj.rela_apply20230501.name : '--') : '--')">{{ dataDetailObj['rela_apply20230501'] ? (dataDetailObj.rela_apply20230501.name ? dataDetailObj.rela_apply20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('收款账户')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['jk_account20230501'] ? (dataDetailObj.jk_account20230501.name ? dataDetailObj.jk_account20230501.name : '--') : '--')">{{ dataDetailObj['jk_account20230501'] ? (dataDetailObj.jk_account20230501.name ? dataDetailObj.jk_account20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('金额')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--')">{{ dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>

                  <template v-if="dataMainDetailObj.formCode == 'BZBX'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联标签')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--')">{{ dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('核销借款')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastInfo(dataDetailObj['borrow_apply20230501'] ? (dataDetailObj.borrow_apply20230501.name ? dataDetailObj.borrow_apply20230501.name : '--') : '--')">{{ dataDetailObj['borrow_apply20230501'] ? (dataDetailObj.borrow_apply20230501.name ? dataDetailObj.borrow_apply20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联单据')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{ dataDetailObj['rela_apply20230501'] ? (dataDetailObj.rela_apply20230501.name ? dataDetailObj.rela_apply20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('报销金额')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{ dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('报销账户')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{ dataDetailObj['my_account20230501'] ? (dataDetailObj.my_account20230501.name ? dataDetailObj.my_account20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>

                  <template v-if="dataMainDetailObj.formCode == 'PTGL'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联项目')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{ dataDetailObj['xm_id20230501'] ? (dataDetailObj.xm_id20230501.name ? dataDetailObj.xm_id20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联标签')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{ dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('金额')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{ dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>

                  <template v-if="dataMainDetailObj.formCode == 'DGDK'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联项目')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{ dataDetailObj['xm_id20230501'] ? (dataDetailObj.xm_id20230501.name ? dataDetailObj.xm_id20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联合同')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{ dataDetailObj['ht_id20230501'] ? (dataDetailObj.xm_id20230501.name ? dataDetailObj.xm_id20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联标签')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{ dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('管理单据')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{ dataDetailObj['rela_apply20230501'] ? (dataDetailObj.rela_apply20230501.name ? dataDetailObj.rela_apply20230501.name : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('金额')">
                            <div class="moon-content-text-ellipsis-class label-item-block2" @click="toastExtraInfo($event)">{{ dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--' }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>

                  <template v-else-if="dataMainDetailObj.formCode == 'XMGL'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('项目名称')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['xm_name20230501'] ? dataDetailObj['xm_name20230501']['value'] : '--'}}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('项目编号')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['xm_no20230501'] ? dataDetailObj['xm_no20230501']['value'] : '--'}}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <template>
                      <el-row>
                        <el-col :span="12">
                          <el-form label-width="80px">
                            <el-form-item :label="$t('项目类型')">
                              <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['xm_type20230501'] ? objectTypeInfo(dataDetailObj['xm_type20230501']['value'], 'set') : '--'}}</div>
                            </el-form-item>
                          </el-form>
                        </el-col>
                        <el-col :span="12">
                          <el-form label-width="80px">
                            <el-form-item :label="$t('项目预算')">
                              <label>--</label>
                            </el-form-item>
                          </el-form>
                        </el-col>
                      </el-row>
                    </template>
                    <template>
                      <el-row>
                        <el-col :span="12">
                          <el-form label-width="80px">
                            <el-form-item :label="$t('项目状态')">
                              <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['xm_status20230501'] ? (dataDetailObj['xm_status20230501']['value'] ? objectStatusInfo(dataDetailObj['xm_status20230501']['value'], 'set')  : '--') : '--'}}</div>
                            </el-form-item>
                          </el-form>
                        </el-col>
                        <el-col :span="12">
                          <el-form label-width="80px">
                            <el-form-item :label="$t('审批状态')">
                              <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataMainDetailObj.status || dataMainDetailObj.status === 0   ? auditStatusTextInfo(dataMainDetailObj.status, 'set') : '--'}}</div>
                            </el-form-item>
                          </el-form>
                        </el-col>
                      </el-row>
                    </template>
                    <template>
                      <el-row>
                        <el-col :span="12">
                          <el-form label-width="80px">
                            <el-form-item :label="$t('开始时间')">
                              <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['xm_beginTime20230501'] ? (dataDetailObj['xm_beginTime20230501']['value'] ? dataDetailObj['xm_beginTime20230501']['value'] : '--') : '--'}}</div>
                            </el-form-item>
                          </el-form>
                        </el-col>
                        <el-col :span="12">
                          <el-form label-width="80px">
                            <el-form-item :label="$t('结束时间')">
                              <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['xm_endTime20230501'] ? (dataDetailObj['xm_endTime20230501']['value'] ? dataDetailObj['xm_endTime20230501']['value'] : '--') : '--'}}</div>
                            </el-form-item>
                          </el-form>
                        </el-col>
                      </el-row>
                    </template>
                    <template>
                      <el-row>
                        <el-col :span="12">
                          <el-form label-width="80px">
                            <el-form-item :label="$t('父级项目')">
                              <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)" v-if="dataDetailObj['xm_superId20230501']">
                                <template v-if="dataDetailObj['xm_superId20230501']['value'] == ''">
                                  {{$t("无")}}
                                </template>
                                <template v-else>
                                  {{dataDetailObj['xm_superId20230501'] ? (dataDetailObj['xm_superId20230501']['value'] ? dataDetailObj['xm_superId20230501']['value'] : '--') : '--'}}
                                </template>
                              </div>
                            </el-form-item>
                          </el-form>
                        </el-col>
                        <el-col :span="12">
                          <el-form label-width="80px">
                            <el-form-item :label="$t('负责人')">
                              <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['xm_personId20230501'] ? (dataDetailObj['xm_personId20230501']['userName'] ? dataDetailObj['xm_personId20230501']['userName'] : '--') : '--'}}</div>
                            </el-form-item>
                          </el-form>
                        </el-col>
                      </el-row>
                    </template>
                    <el-form label-width="80px">
                      <el-form-item :label="$t('其他描述')">
                        <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['xm_des20230501'] ? dataDetailObj['xm_des20230501']['value'] : '--'}}</div>
                      </el-form-item>
                    </el-form>
                  </template>

                  <el-form label-width="80px">
                    <el-form-item :label="$t('附件')">
                      <div v-if="(dataMainDetailObj.formCode == 'JKGL' || dataMainDetailObj.formCode == 'HKD' || dataMainDetailObj.formCode == 'SKD') && dataDetailObj['jk_files20230501']">
                        <div v-if="dataDetailObj['jk_files20230501']['value'].length > 0" v-for="(item, index) in dataDetailObj['jk_files20230501']['value']" :key="index" class="pull-left" style="position: relative;margin-right:10px;top: 10px">
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
                      <div v-else-if="(dataMainDetailObj.formCode == 'BZBX') && dataDetailObj['bb_files20230501']">
                        <div v-if="dataDetailObj['bb_files20230501']['value'].length > 0" v-for="(item, index) in dataDetailObj['bb_files20230501']['value']" :key="index" class="pull-left" style="position: relative;margin-right:10px;top: 10px">
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
                      <div v-else-if="(dataMainDetailObj.formCode == 'PTGL' || dataMainDetailObj.formCode == 'DGDK') && dataDetailObj['fk_files20230501']">
                        <div v-if="dataDetailObj['fk_files20230501']['value'].length > 0" v-for="(item, index) in dataDetailObj['fk_files20230501']['value']" :key="index" class="pull-left" style="position: relative;margin-right:10px;top: 10px">
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
                      <div v-else-if="(dataMainDetailObj.formCode == 'CGHT' || dataMainDetailObj.formCode == 'TYHT' || dataMainDetailObj.formCode == 'XSHT') && dataDetailObj['ht_files20230501']">
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
                      <div v-else-if="dataMainDetailObj.formCode == 'XMGL'">
                        <div v-if="dataDetailObj['xm_files20230501']['value'].length > 0" v-for="(item, index) in dataDetailObj['xm_files20230501']['value']" :key="index" class="pull-left" style="position: relative;margin-right:10px;top: 10px">
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
                  <el-form label-width="80px">
                    <el-form-item :label="$t('借款说明')" v-if="dataMainDetailObj.formCode == 'JKGL'">
                      <div style="word-wrap:break-word;word-break:break-all;overflow: hidden;">{{dataDetailObj['jk_des20230501'] ? (dataDetailObj['jk_des20230501']['value'] ? dataDetailObj['jk_des20230501']['value'] : '--') : '--'}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('还款说明')" v-if="dataMainDetailObj.formCode == 'HKD' || dataMainDetailObj.formCode == 'SKD'">
                      <div style="word-wrap:break-word;word-break:break-all;overflow: hidden;">{{dataDetailObj['jk_des20230501'] ? (dataDetailObj['jk_des20230501']['value'] ? dataDetailObj['jk_des20230501']['value'] : '--') : '--'}}</div>
                    </el-form-item>
                  </el-form>
                </template>

                <template v-else>
                  <el-row>
                    <el-col :span="12">
                      <el-form label-width="80px">
                        <el-form-item :label="$t('合同名称')">
                          <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['ht_name20230501'] ? dataDetailObj['ht_name20230501']['value'] : '--'}}</div>
                        </el-form-item>
                      </el-form>
                    </el-col>
                    <el-col :span="12">
                      <el-form label-width="80px">
                        <el-form-item :label="$t('合同编号')">
                          <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['ht_no20230501'] ? dataDetailObj['ht_no20230501']['value'] : '--'}}</div>
                        </el-form-item>
                      </el-form>
                    </el-col>
                  </el-row>
                  <template>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联单据')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['tag_ids20230501'] ? dataDetailObj['tag_ids20230501']['name'] : '--'}}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('合同金额')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['ht_amount20230501'] ? dataDetailObj['ht_amount20230501']['value'] : '--'}}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>
                  <template>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('关联项目')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['xm_id20230501'] ? (dataDetailObj['xm_id20230501']['name'] ? dataDetailObj['xm_id20230501']['name'] : '--') : '--'}}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px">
                          <el-form-item :label="$t('责任人')">
                            <div class="moon-content-text-ellipsis-class label-item-block" @click="toastExtraInfo($event)">{{dataDetailObj['ht_duty20230501'] ? (dataDetailObj['ht_duty20230501']['userName'] ? dataDetailObj['ht_duty20230501']['userName'] : '--') : '--'}}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>
                  <el-form label-width="80px">
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
                  <el-form label-width="80px">
                    <el-form-item :label="$t('其他描述')">
                      <div style="word-wrap:break-word;word-break:break-all;overflow: hidden;">{{dataDetailObj['ht_des20230501'] ? (dataDetailObj['ht_des20230501']['value'] ? dataDetailObj['ht_des20230501']['value'] : '--') : '--'}}</div>
                    </el-form-item>
                  </el-form>

                  <template>
                    <div style="margin-left: 12px">
                      <span v-if="dataMainDetailObj.formCode == 'CGHT'" class="color-muted">{{$t('回款计划')}}</span>
                      <span v-if="dataMainDetailObj.formCode == 'XSHT'" class="color-muted">{{$t('支付计划')}}</span>
                    </div>
                    <table class="custom-table" style="width: 98%;margin-top: 10px;font-size: 12px;margin-left: 12px">
                      <tr>
                        <th width="10%">{{$t("期数")}}</th>
                        <th width="15%">{{$t("比例")}}</th>
                        <th width="15%">{{$t("金额")}}</th>
                        <th width="25%">{{$t("日期")}}</th>
                        <th width="30%">{{$t("备注")}}</th>
                      </tr>
                      <tbody>
                      <tr v-for="(item, index) in tableOrderDetailData" :key="item.id">
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
              </div>
            </template>
          </div>

          <div class="margin-top-20" v-if="dataMainDetailObj['invoiceDataList'] && dataMainDetailObj['invoiceDataList'].length > 0">
            <div class="font-bold">{{$t("明细信息")}}:</div>
            <template>
              <div style="border: 1px solid #ebebeb">
                <div class="info-item-block" v-for="(item, index) in dataMainDetailObj.invoiceDataList" :key="index" :class="index != dataMainDetailObj.invoiceDataList.length-1 ? 'border-bottom-1' : ''">
                  <el-row>
                    <el-col :span="8">
                      <div class="text-center left-bg-block">
                        <span>{{item.costName}}</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-left padding-left-5">
                        <span>{{item.totalAmount}}</span>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </template>
          </div>
        </div>
      </template>

      <template v-if="detailDataType == 2">

<!--        <div class="detail-top-block" style="overflow-x: auto;padding: 20px 0px;white-space:nowrap;">-->
<!--          <div :style="{width: (detailApplyAuditList.length+2) * (600/4)+'px'}">-->
<!--            <div class="pull-left text-center" :style="{width: 600/4+'px'}">-->
<!--              <div class="text-center margin-bottom-5">-->
<!--                <span class="font-size-12"> &nbsp; </span>-->
<!--              </div>-->
<!--              <div class="detail-top-item-green-block">-->
<!--                <span class="font-size-12 color-white">{{$t("开始")}}</span>-->
<!--              </div>-->
<!--              <div class="text-center margin-top-5">-->
<!--                <span class="font-size-12">{{$t("提交")}}</span>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div :style="{width: 600/4+'px'}" class="pull-left text-center" v-for="(item, index) in detailApplyAuditList" :key="index">-->
<!--              <template>-->
<!--                <div class="text-center margin-bottom-5">-->
<!--                      <span class="font-size-12">-->
<!--                        <label>{{ auditStatusTextInfo(item.status) }}</label>-->
<!--                      </span>-->
<!--                </div>-->
<!--                <div class="detail-top-item-warning-block" :class="auditColorInfo(item.status)">-->
<!--                  <el-popover-->
<!--                    placement="left"-->
<!--                    width="150"-->
<!--                    trigger="hover">-->
<!--                    <div style="max-height: 80px;overflow-y: auto">-->
<!--                      <div v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser">-->
<!--                        <div class="font-size-12 padding-tb-5 text-center">-->
<!--                          <el-tag type="success" size="mini">{{itemUser}}</el-tag>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div slot="reference" class="font-size-12 color-white moon-content-text-ellipsis-class text-center">-->
<!--                      {{ item.handleUserNameList.join() }}-->
<!--                    </div>-->
<!--                  </el-popover>-->
<!--                </div>-->
<!--                <div class="text-center margin-top-5">-->
<!--                  <span class="font-size-12">{{ item.nodeName }}</span>-->
<!--                </div>-->
<!--              </template>-->
<!--            </div>-->

<!--            <div class="pull-left text-center" :style="{width: 600/4+'px'}">-->
<!--              <div class="text-center margin-bottom-5">-->
<!--                <span class="font-size-12"> &nbsp; </span>-->
<!--              </div>-->
<!--              <div class="detail-top-item-default-block">-->
<!--                <span class="font-size-12 color-white">{{$t("结束")}}</span>-->
<!--              </div>-->
<!--              <div class="text-center margin-top-5">-->
<!--                <span class="font-size-12">{{$t("完成")}}</span>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="moon-clearfix"></div>-->
<!--          </div>-->
<!--        </div>-->

        <div class="detail-block margin-top-10">
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
                      <div style="height: 80px;overflow-y: auto">
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

        <div class="text-right" style="height: 40px;line-height: 40px;position: fixed;left:0;bottom: 0px;width: 100%;background: #f5f5f5;">
          <div class="margin-left-10 margin-right-10">
            <template  v-if="activeType == 1">
              <el-popover
                :tabindex="99999"
                placement="bottom"
                width="300"
                @hide="cancelPop"
                v-model="visibleSysYes">
                <div class="margin-bottom-10">
                  <div>
                    <el-input
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      v-model="textarea">
                    </el-input>
                  </div>
                  <div class="margin-top-5">
                    <div>
                      <span class="font-size-12 color-muted">{{$t("上传图片")}}</span>
                    </div>
                    <div class="margin-top-10">
                    <span class="pull-left" style="position: relative" v-for="(item, index) in images" :key="index">
                      <i class="fa fa-times-circle color-danger" style="font-size: 14px;position: absolute; right: 2px; top:-5px;" @click="clearImage($event, index)"></i>
                      <img  :src="item.picture_url" fit="fit" style="margin-right: 10px;height: 30px;width:30px"></img>
                    </span>
                      <upload-square ref="upload" class="pull-left margin-left-5" :action="uploadFileListUrl" :limit="3" max-size="5" :data="{path: 'applet'}" accept=".png,.jpg,.jpeg" @success="uploadImgListFileSuccess">
                        <i class="el-icon-plus avatar-uploader-icon" style="height: 30px;line-height:30px;width: 30px"></i>
                      </upload-square>
                      <div class="moon-clearfix"></div>
                    </div>
                  </div>
                </div>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text" @click="cancelPop">取消</el-button>
                  <el-button type="primary" size="mini" @click="handleOk($event, dataMainDetailObj, 1)">确定</el-button>
                </div>
                <el-button slot="reference" type="success" size="mini">{{$t("同意")}}</el-button>
              </el-popover>
              <!--        <el-button size="mini" @click="handleCancel">取 消</el-button>-->
              <!--            <el-button size="mini" type="primary" @click="handleOk($event, detailData, 6)">转 交</el-button>-->
              <!--            <el-button size="mini" type="primary" @click="handleOk($event, detailData, -1)">撤 销</el-button>-->
              <el-popover
                :tabindex="99999"
                placement="bottom"
                width="300"
                @hide="cancelPop"
                v-model="visibleSysNo">
                <div class="margin-bottom-10">
                  <div>
                    <el-input
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      v-model="textarea">
                    </el-input>
                  </div>
                  <div class="margin-top-5">
                    <div>
                      <span class="font-size-12 color-muted">{{$t("上传图片")}}</span>
                    </div>
                    <div class="margin-top-10">
                    <span class="pull-left" style="position: relative" v-for="(item, index) in images" :key="index">
                      <i class="fa fa-times-circle color-danger" style="font-size: 14px;position: absolute; right: 2px; top:-5px;" @click="clearImage($event, index)"></i>
                      <img  :src="item.picture_url" fit="fit" style="margin-right: 10px;height: 30px;width:30px"></img>
                    </span>
                      <upload-square ref="upload" class="pull-left margin-left-5" :action="uploadFileListUrl" :limit="3" max-size="5" :data="{path: 'applet'}" accept=".png,.jpg,.jpeg" @success="uploadImgListFileSuccess">
                        <i class="el-icon-plus avatar-uploader-icon" style="height: 30px;line-height:30px;width: 30px"></i>
                      </upload-square>
                      <div class="moon-clearfix"></div>
                    </div>
                  </div>
                </div>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text" @click="cancelPop">取消</el-button>
                  <el-button type="primary" size="mini" @click="handleOk($event, dataMainDetailObj, 2)">确定</el-button>
                </div>
                <el-button slot="reference" type="warning" size="mini">{{$t("驳回")}}</el-button>
              </el-popover>
            </template>

            <template v-if="activeType == 4">
              <div class="text-right margin-top-5">
                <van-button block type="default" size="small" v-if="dataMainDetailObj.status == 5" class="text-center color-white">无需审批</van-button>
                <van-button block type="warning" size="small" v-if="dataMainDetailObj.status == 8" class="text-center color-white">审批中</van-button>
                <van-button block type="warning" size="small" v-if="dataMainDetailObj.status == -1" class="text-center color-white">待提交</van-button>
                <van-button block type="primary" size="small" v-if="dataMainDetailObj.status == 3" class="text-center color-white">已通过</van-button>
                <van-button block type="danger" size="small" v-if="dataMainDetailObj.status == 4" class="text-center color-white">未通过</van-button>
                <van-button block type="danger" size="small" v-if="dataMainDetailObj.status == 2" class="text-center color-white">已驳回</van-button>
                <van-button block type="danger" size="small" v-if="dataMainDetailObj.status == 1" class="text-center color-white">已通过</van-button>
              </div>
            </template>
          </div>
        </div>
      </template>

      <template v-if="detailDataType == 3">
        <div class="detail-block" v-if="serialDataList.length <= 0">
          <template v-if="dataMainDetailObj.formCode == 'XMGL'">
            <div class="margin-top-10">
              <el-table
                :data="tableOrderDetailData"
                header-cell-class-name="custom-table-cell-bg"
                size="small"
                row-key="id"
                border
                :max-height="drawHeight"
                style="width: 100%">
                <el-table-column
                  align="center"
                  :label="$t('类型')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center"><span>{{formXmTextInfo(scope.row.formCode, 'set')}}</span></div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        <span>{{formXmTextInfo(scope.row.formCode, 'set')}}</span>
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('名称')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center"><span>{{scope.row.applyData['ht_name20230501'] ? scope.row.applyData['ht_name20230501'].value : '--'}}</span></div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        <span>{{scope.row.applyData['ht_name20230501'] ? scope.row.applyData['ht_name20230501'].value : '--'}}</span>
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('编号')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">
                        <span>{{scope.row.formApplyNo}}</span>
                      </div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        <span>{{scope.row.formApplyNo}}</span>
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('金额')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center"><span>{{scope.row.applyData['ht_amount20230501'] ? scope.row.applyData['ht_amount20230501'].value: '--'}}</span></div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        <span>{{scope.row.applyData['ht_amount20230501'] ? scope.row.applyData['ht_amount20230501'].value: '--'}}</span>
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('状态')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">
                        <span>{{auditStatusTextInfo(scope.row.status)}}</span>
                      </div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        <span>{{auditStatusTextInfo(scope.row.status)}}</span>
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </template>
          <template v-else-if="dataMainDetailObj.formCode == 'XSHT' || dataMainDetailObj.formCode == 'CGHT'">
            <div class="margin-top-10">
              <el-table
                :data="tableOrderDetailData"
                header-cell-class-name="custom-table-cell-bg"
                size="small"
                row-key="id"
                border
                :max-height="drawHeight"
                style="width: 100%">
                <el-table-column
                  align="center"
                  :label="$t('期数')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.stage}}</div>
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
                      <div class="text-center">{{scope.row.rate}}%</div>
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
                      <div class="text-center">
                        <div>{{scope.row.des ? scope.row.des : '--'}}</div>
                      </div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        <div class="moon-content-text-ellipsis-class" style="max-width: 200px">{{scope.row.des ? scope.row.des : '--'}}</div>
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </template>
        </div>
        <template class="detail-other-block" v-else-if="serialDataList.length > 0">
          <div class="margin-top-10">
            <div class="system-order-main-block">
              <div v-for="(item, index) in serialDataList" :key="index" class="system-order-item-block margin-bottom-5">
                <div class="border-bottom-1">
                  <el-row>
                    <el-col :span="8">
                      <div class="system-order-item-left-block">
                        <span>{{$t("名称")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-left font-bold system-order-item-right-block">
                        {{item.typeStr ? item.typeStr: '--'}}
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="border-bottom-1">
                  <el-row>
                    <el-col :span="8">
                      <div class="system-order-item-left-block">
                        <span>{{$t("发票日期")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-left font-bold system-order-item-right-block">
                        {{item.fpTime ? item.fpTime : '--'}}
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="border-bottom-1">
                  <el-row>
                    <el-col :span="8">
                      <div class="system-order-item-left-block">
                        <span>{{$t("发票号码")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-left font-bold system-order-item-right-block">
                        {{item.fpNo ? item.fpNo : '--'}}
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="border-bottom-1">
                  <el-row>
                    <el-col :span="8">
                      <div class="system-order-item-left-block">
                        <span>{{$t("发票代码")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-left font-bold system-order-item-right-block">
                        {{item.fpCode ? item.fpCode : '--'}}
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="border-bottom-1">
                  <el-row>
                    <el-col :span="8">
                      <div class="system-order-item-left-block">
                        <span>{{$t("发票验证码")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-left font-bold system-order-item-right-block">
                        {{item.fpCheckCode ? item.fpCheckCode : '--'}}
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="border-bottom-1">
                  <el-row>
                    <el-col :span="8">
                      <div class="system-order-item-left-block">
                        <span>{{$t("金额")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-left font-bold system-order-item-right-block">
                        <span>{{item.fp.length > 0 ? item.fp[0].totalAmount : (item.amount ? item.amount : '--')}}</span>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div>
                  <el-row>
                    <el-col :span="8">
                      <div class="system-order-item-left-block">
                        <span>{{$t("类型")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-left font-bold system-order-item-right-block">
                        {{item.fp.length > 0 ? item.fp[0].invoiceType : (item.fpType ? item.fpType : '--')}}
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import {
  auditStatusBgColor,
  auditStatusColor,
  auditStatusText,
  formXmText, MessageError,
  objectStatus,
  objectType
} from "~/utils/utils";
import {ImagePreview, Toast} from "vant";
import {common} from "~/utils/api/url";

export default {
    name: 'FormSystemH5NormalDetail',
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
        type: String
      },
      tableHeight: {
        default: '',
        type: [String, Number]
      },
      activeType: {
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
        detailDataType: this.detailType,
        visibleNo: false,
        visibleYes: false,
        visibleSysNo: false,
        visibleSysYes: false,
        textarea: '',
        images: [],
        uploadFileListUrl: common.upload_file,
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
        //window.open(file, "_blank");
        Toast('仅支持pc端操作');
      },
      detailOrderInfo(data){
        this.$emit('detailOrderInfo', data);
      },
      toastInfo(value){
        Toast(value);
      },
      toastExtraInfo(event){
        Toast(event.target.innerText);
      },
      cancelPop(){
        this.textarea = '';
        this.images = [];
        this.visibleOk = false;
        this.visibleNo = false;
        this.visibleYes = false;
        this.visibleSysOk = false;
        this.visibleSysNo = false;
        this.visibleSysYes = false;
      },
      uploadImgListFileSuccess(res,file){
        if (res.code == 200){
          this.images.push({
            picture_url: res.data.url,
          });
        }else {
          MessageError(res.desc);
        }
      },
      handleOk(event, data, type){
        let params = {
          id: data._id,
          status: type,
          des: this.textarea
        };
        if (this.images.length > 0){
          let images = [];
          for (let i = 0; i < this.images.length; i++){
            images.push(this.images[i].picture_url);
          }

          params['url'] = images.join();
        }

        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, params).then(res => {
          if (res.data.code == 200){
            this.tableData.splice(this.detailIndex, 1);
            let page = Math.ceil(this.tableData.length / 20);
            this.page = page;
            //this.init();
            this.images = [];
            this.popUpVisible = false;
            this.dialogSysVisible = false;
            this.cancelSysPop();
            this.cancelPop();
            Toast(res.data.desc);
          }else {
            Toast(res.data.desc);
          }
        });
      },
      handleUrge(event, data){
        let params = {
          id: data._id
        };

        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_urge_handle, params).then(res => {
          if (res.data.code == 200){
            //this.tableData[this.detailIndex]['urge'] = true;
            this.$set(this.tableData[this.detailIndex], 'urge', true);
            let page = Math.ceil(this.tableData.length / 20);
            this.page = page;
            //this.init();
            this.images = [];
            this.popUpVisible = false;
            Toast(res.data.desc);
          }else {
            Toast(res.data.desc);
          }
        });
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
  height: 80px;
}
.detail-block{
  border-radius: 5px;
  background: #ffffff;
  padding: 10px 10px;
}
.detail-other-block{
  border-radius: 5px;
  background: #ffffff;
  padding: 0px 0px;
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
.info-item-block{
  height: 35px;
  line-height: 35px;
}
.left-bg-block{
  background: #f5f5f5;
}
.label-item-block{
  max-width: 100px;
}
.label-item-time-block{
  max-width: 180px;
}
.system-order-main-block{
  padding: 0px 0px;
  position: relative;
}
.system-order-item-left-block{
  background: #EBEBEB;
  text-align: center;
  padding: 10px 16px;
  line-height: 24px;
}
.system-order-item-right-block{
  padding: 10px 16px;
  line-height: 24px;
  position: relative;
  background: #FFFFFF;
}
</style>
