<template>
  <div>
    <div class="text-left" v-bind="selectDetailType">
      <el-button-group>
        <el-button size="small" :type="detailDataType == 1 ? 'primary' : 'default'" @click="changeDetailType($event ,1)">{{ $t("单据信息") }}</el-button>
        <el-button size="small" :type="detailDataType == 2 ? 'primary' : 'default'" @click="changeDetailType($event ,2)">{{ $t("审批详情") }}</el-button>
        <el-button size="small" :type="detailDataType == 3 ? 'primary' : 'default'" @click="changeDetailType($event ,3)">{{ $t("预算列表") }}</el-button>
      </el-button-group>
    </div>

    <div class="margin-top-20">
      <template v-if="detailDataType == 1">
        <div class="detail-block" :style="{minHeight: drawHeight}">
          <div class="margin-top-10">
            <div class="font-bold">{{$t("当前审批环节")}}:</div>
            <div class="margin-top-10" style="padding-left:30px">
              <span class="color-warning">{{dataMainDetailObj['handleList'] ? dataMainDetailObj.handleList[dataMainDetailObj.orderIndex-1].nodeName : ''}}</span>
              <span>{{ auditStatusTextInfo(dataMainDetailObj.status) }}</span>
            </div>
          </div>
          <div class="margin-top-20">
            <div class="font-bold">{{$t("基础信息")}}:</div>
            <template>
              <div class="margin-top-5 margin-left-20">
                <template>
                  <el-row>
                    <el-col :span="12">
                      <el-form label-width="100px" :label-position="labelPosition">
                        <el-form-item :label="$t('申请人')">
                          <label>{{dataMainDetailObj.applyUserName}}</label>
                        </el-form-item>
                      </el-form>
                    </el-col>
                    <el-col :span="12">
                      <el-form label-width="100px" :label-position="labelPosition">
                        <el-form-item :label="$t('工号')">
                          <label>{{dataMainDetailObj.userNo}}</label>
                        </el-form-item>
                      </el-form>
                    </el-col>
                  </el-row>
                  <template>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('提交日期')">
                            <label>{{$moment(dataMainDetailObj.applyTime).format("YYYY-MM-DD HH:mm:ss")}}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item v-if="dataMainDetailObj.formCode =='JKGL'" :label="$t('借款日期')">
                            <label v-if="dataDetailObj['jk_date20230501'] && dataDetailObj['jk_date20230501']['value']">{{dataDetailObj['jk_date20230501']['value']}}</label>
                            <label v-else>--</label>
                          </el-form-item>
                          <el-form-item v-if="dataMainDetailObj.formCode =='DGDK'" :label="$t('供应商')">
                            <label v-if="dataDetailObj['supplierId20230501'] && dataDetailObj['supplierId20230501']['name']">{{dataDetailObj['supplierId20230501']['name']}}</label>
                            <label v-else>--</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>
                  <template v-if="dataMainDetailObj.formCode == 'JKGL'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联项目')">
                            <label>{{ dataDetailObj['xm_id20230501'] ? (dataDetailObj.xm_id20230501.name ? dataDetailObj.xm_id20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联合同')">
                            <label>{{ dataDetailObj['ht_id20230501'] ? (dataDetailObj.xm_id20230501.name ? dataDetailObj.xm_id20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联标签')">
                            <label>{{ dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('金额')">
                            <label>{{ dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('借款账户')">
                            <label>{{ dataDetailObj['jk_account20230501'] ? (dataDetailObj.jk_account20230501.name ? dataDetailObj.jk_account20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>
                  <template v-if="dataMainDetailObj.formCode == 'HKD'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联标签')">
                            <label>{{ dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('核销借款')">
                            <label>{{ dataDetailObj['borrow_apply20230501'] ? (dataDetailObj.borrow_apply20230501.name ? dataDetailObj.borrow_apply20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联单据')">
                            <label>{{ dataDetailObj['rela_apply20230501'] ? (dataDetailObj.rela_apply20230501.name ? dataDetailObj.rela_apply20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('金额')">
                            <label>{{ dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('还款账户')">
                            <label>{{ dataDetailObj['jk_account20230501'] ? (dataDetailObj.jk_account20230501.name ? dataDetailObj.jk_account20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>

                  <template v-if="dataMainDetailObj.formCode == 'SKD'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联标签')">
                            <label>{{ dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联单据')">
                            <label>{{ dataDetailObj['rela_apply20230501'] ? (dataDetailObj.rela_apply20230501.name ? dataDetailObj.rela_apply20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('收款账户')">
                            <label>{{ dataDetailObj['jk_account20230501'] ? (dataDetailObj.jk_account20230501.name ? dataDetailObj.jk_account20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('金额')">
                            <label>{{ dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>

                  <template v-if="dataMainDetailObj.formCode == 'BZBX'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联标签')">
                            <label>{{ dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('核销借款')">
                            <label>{{ dataDetailObj['borrow_apply20230501'] ? (dataDetailObj.borrow_apply20230501.name ? dataDetailObj.borrow_apply20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联单据')">
                            <label>{{ dataDetailObj['rela_apply20230501'] ? (dataDetailObj.rela_apply20230501.name ? dataDetailObj.rela_apply20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('报销金额')">
                            <label>{{ dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('报销账户')">
                            <label>{{ dataDetailObj['my_account20230501'] ? (dataDetailObj.my_account20230501.name ? dataDetailObj.my_account20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>

                  <template v-if="dataMainDetailObj.formCode == 'PTGL'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联项目')">
                            <label>{{ dataDetailObj['xm_id20230501'] ? (dataDetailObj.xm_id20230501.name ? dataDetailObj.xm_id20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联标签')">
                            <label>{{ dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('金额')">
                            <label>{{ dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>

                  <template v-if="dataMainDetailObj.formCode == 'DGDK'">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联项目')">
                            <label>{{ dataDetailObj['xm_id20230501'] ? (dataDetailObj.xm_id20230501.name ? dataDetailObj.xm_id20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联合同')">
                            <label>{{ dataDetailObj['ht_id20230501'] ? (dataDetailObj.xm_id20230501.name ? dataDetailObj.xm_id20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('关联标签')">
                            <label>{{ dataDetailObj['tag_id20230501'] ? (dataDetailObj.tag_id20230501.name ? dataDetailObj.tag_id20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('管理单据')">
                            <label>{{ dataDetailObj['rela_apply20230501'] ? (dataDetailObj.rela_apply20230501.name ? dataDetailObj.rela_apply20230501.name : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <el-form label-width="100px" :label-position="labelPosition">
                          <el-form-item :label="$t('金额')">
                            <label>{{ dataDetailObj['cost_allAmount20230501'] ? (dataDetailObj.cost_allAmount20230501.value ? dataDetailObj.cost_allAmount20230501.value : '--') : '--' }}</label>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </template>

                  <el-form label-width="100px" :label-position="labelPosition">
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
                      <div v-else>
                        --
                      </div>
                    </el-form-item>
                  </el-form>
                  <el-form label-width="100px">
                    <el-form-item :label="$t('借款说明')" v-if="dataMainDetailObj.formCode == 'JKGL'">
                      <div style="word-wrap:break-word;word-break:break-all;overflow: hidden;">{{dataDetailObj['jk_des20230501'] ? (dataDetailObj['jk_des20230501']['value'] ? dataDetailObj['jk_des20230501']['value'] : '--') : '--'}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('还款说明')" v-if="dataMainDetailObj.formCode == 'HKD' || dataMainDetailObj.formCode == 'SKD'">
                      <div style="word-wrap:break-word;word-break:break-all;overflow: hidden;">{{dataDetailObj['jk_des20230501'] ? (dataDetailObj['jk_des20230501']['value'] ? dataDetailObj['jk_des20230501']['value'] : '--') : '--'}}</div>
                    </el-form-item>
                  </el-form>
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

          <div class="margin-top-20">
            <template v-if="dataMainDetailObj.formCode == 'XMGL'">
              <div class="font-bold">{{$t("单据信息")}}:</div>
              <div class="margin-top-10">
                <el-table
                    :data="extraDataList"
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
              <div class="font-bold">{{$t("单据信息")}}:</div>
              <div class="margin-top-10">
                <el-table
                    :data="extraDataList"
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
                        <div class="text-center">{{scope.row.amount}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          <span>{{scope.row.amount}}</span>
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
            <template v-else-if="serialDataList.length > 0">
              <div class="font-bold">{{$t("单据信息")}}:</div>
              <div class="margin-top-10">
                <el-table
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
        <div class="detail-block">
          <div class="margin-top-10">
            <div class="system-order-main-block">
              <div v-if="budgetList.length == 0" class="text-center">
                <span>{{$t("暂无数据")}}</span>
              </div>
              <div v-if="budgetList.length > 0" class="system-order-border-block margin-bottom-10" v-for="(item, index) in budgetList" :key="index">
                <el-row>
                  <el-col :span="8">
                    <div class="system-order-item-left-block">
                      <span>{{$t("预算名称")}}</span>
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="text-left font-bold system-order-item-right-block">
                      {{item['budget_name'] ? item['budget_name'] : '--'}}
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <div class="system-order-item-left-block">
                      <span>{{$t("时间范围")}}</span>
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="text-left font-bold system-order-item-right-block">
                      <span v-if="item['time_year']">{{item['time_year']}}年{{item['time_month']}}月</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <div class="system-order-item-left-block">
                      <span>{{$t("预算总额")}}</span>
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="text-left font-bold system-order-item-right-block">
                      {{item['total'] ? item['total'] : '--'}}
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <div class="system-order-item-left-block">
                      <span>{{$t("已占用额度")}}</span>
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="text-left font-bold system-order-item-right-block">
                      <span v-if="item['used']">{{item['used']}}元</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <div class="system-order-item-left-block">
                      <span>{{$t("剩余额度")}}</span>
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="text-left font-bold system-order-item-right-block">
                      <span v-if="item['total']">{{(item['total'] - item['used'] + item['transfer']).toFixed(2)}}元</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <div class="system-order-item-left-block">
                      <span>{{$t("预警状态")}}</span>
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="text-left font-bold system-order-item-right-block">
                      <span v-if="item['used'] > item['warn'] && item['used'] <= item['total']" class="color-warning">{{$t("预警")}}</span>
                      <span v-if="item['used'] > item['total']" class="color-danger">{{$t("超标")}}</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <div class="system-order-item-left-block">
                      <span>{{$t("预警限制")}}</span>
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="text-left font-bold system-order-item-right-block">
                      <span v-if="item.warning_limit == 0">{{$t("无")}}</span>
                      <span v-else-if="item.warning_limit == 1">{{$t("仅提醒")}}</span>
                      <span v-else-if="item.warning_limit == 2">{{$t("禁止提交")}}</span>
                      <span v-else-if="item.warning_limit == 3">{{$t("审批加签")}}</span>
                      <span v-else>--</span>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
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
import {common} from "~/utils/api/url";

export default {
    name: 'FormSystemNormalDetail',
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
        labelPosition: 'left',
        detailDataType: this.detailType,
        budgetList: []
      }
    },
    methods: {
      initBudget(){
        let budget = this.dataDetailObj && this.dataDetailObj['budget_info20230501'] ? this.dataDetailObj['budget_info20230501']['value'] : {};
        let budgetStr = [];
        for (let item in budget){
          budgetStr.push(item);
        }
        let params = {
          ruleId: budgetStr.length > 0 ? budgetStr.join() : ''
        };
        this.$axios.get(common.budget_list, {params: params, loading: false}).then(res => {
          if (res.data.data){
            this.budgetList = res.data.data;
          }
        });
      },
      changeDetailType(event, type){
        this.detailDataType = type;
        this.$emit('changeDetailType', event, type);
        if (type == 3){
          this.initBudget();
        }
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
.info-item-block{
  height: 35px;
  line-height: 35px;
}
.left-bg-block{
  background: #f5f5f5;
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
.system-order-border-block{
  border: 1px solid #EBEBEB;
}
</style>
