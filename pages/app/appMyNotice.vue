<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block color-white" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-row class="padding-top-20">
        <van-col span="8">
          <div class="text-left padding-lr-10 header-class">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
              {{$t("返回")}}
            </span>
          </div>
        </van-col>
        <van-col span="8" class="text-center header-class">
          <div class="font-bold">{{$t("我的待办")}}</div>
          <div class="font-size-12">
            <span>{{this.dateTime}}</span>
          </div>
        </van-col>
        <van-col span="8" class="text-right header-class" style="padding-right: 15px">
          <span v-if="this.dateTime" @click="clearSearch" class="margin-right-5">{{$t("清除")}}</span>
          <span>
            <i class="fa fa-calendar" @click="calendarManage"></i>
          </span>
        </van-col>
      </van-row>
    </div>

    <div style="position: relative">
      <div class="moon-left-menu-tag" :style="toggleTag">
        <div class="moon-left-menu-tag-container">
          <div class="moon-left-menu-tag_indicator" @click="isCollapse == true ? toggleLeftMenu($event) : toggleRightMenu($event)">
            <i class="fa fa-chevron-left" :class="isCollapse == true ? 'icon-class-left' : 'icon-class-right'"></i>
          </div>
        </div>
      </div>

      <div class="moon-left-toogle-menu info-block-left" :style="leftHeight">
        <template>
          <div v-if="isCollapse == true" class="info-block-header text-center" @click="selMenu($event, '')">
            <span class="info-block-header-text">{{$t("全部")}}</span>
          </div>
          <div class="custom-el-menu" :style="{height: divHeight10.height1-50 +'px', overflowY: 'auto'}">
            <el-menu
              :default-active="defaultMenuActive"
              background-color="#f2f2f2"
              text-color="#909399"
              active-text-color="#909399"
              class="el-menu-vertical-demo custon-nav-menu">
              <template v-for="(item, index) in dataDept">
                <el-submenu v-if="item.child_list.length > 0" :index="index+''">
                  <div style="width: 100%" slot="title" @click="selMenu($event, item, index)">
                    <span class="moon-content-text-ellipsis-class main-menu-class" style="width: 100%;display: inline-block">{{ item.department_name }}</span>
                  </div>
                  <el-menu-item-group v-if="item.child_list.length > 0">
                    <el-menu-item v-for="(itemChild, indexChild) in item.child_list" :key="indexChild" :index="index+'-'+indexChild" @click="selMenu($event, itemChild, index+'-'+indexChild)">
                      <span class="moon-content-text-ellipsis-class sub-menu-class" style="width: 100%;display: inline-block">{{ itemChild.department_name }}</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item v-else :index="index+''" @click="selMenu($event, item, index)">
                  <span class="moon-content-text-ellipsis-class main-menu-class" style="width: 100%;display: inline-block">{{ item.department_name }}</span>
                </el-menu-item>
              </template>
            </el-menu>
          </div>
        </template>
      </div>

      <form action="/">
        <van-row>
          <van-col :span="(active == 2 || active == 3) ? 16 : 12" class="text-left">
            <van-search v-model="serchName" :show-action="true" placeholder="姓名/编号/名称" @search="onSearch" @clear="onClear">
              <span slot="left-icon">

              </span>
              <span slot="action" class="custom-button-small">
                <el-button type="success" size="small" @click="onSearch">
                  <i class="fa fa-search"></i>
                </el-button>
              </span>
            </van-search>
          </van-col>
          <van-col :span="active == 4 || active == 1 ? 12 : 8" class="text-right">
            <div class="layout-inline" style="position:relative;">
              <el-select v-if="active == 4" class="layout-item margin-right-10" style="margin-top: 11px;width: 85px" v-model="type" size="small" placeholder="请选择" @change="dropdownItem">
                <el-option label="全部" value=""></el-option>
                <el-option label="通过" value="3"></el-option>
                <el-option label="未通过" value="4"></el-option>
                <el-option label="待提交" value="-1"></el-option>
              </el-select>
              <el-button v-if="active == 1" style="margin-top: 11px;margin-right: 2px;width: 70px" class="layout-item moon-content-text-ellipsis-class" size="small" type="default" plain native-type="button" @click="urgeDetial">{{urgeName != "" && urgeName != null ? urgeName : $t('环节')}}</el-button>
              <el-button style="margin-top: 11px;margin-right: 2px;width: 70px" :style="active == 4 ? {width: '70px'} : {width: '80px'}" class="layout-item moon-content-text-ellipsis-class" size="small" type="default" plain native-type="button" @click="isCollapse == true ? toggleLeftMenu($event) : toggleRightMenu($event)">{{departmentName != "" && departmentName != null ? departmentName : $t('部门')}}</el-button>
<!--              <span v-if="(departmentPath != '' && departmentPath != null) || searchDept.length > 0" class="fa fa-times-circle color-muted margin-right-5 layout-item" style="position: relative; top: 2px;font-size: 15px" @click="clearSearchDept"></span>-->
            </div>
          </van-col>
        </van-row>

        <div>
          <van-tabs @click="activeTabMenu" color="#007CBB" title-active-color="#007CBB" title-inactive-color="#4B4B4B" background="#f5f5f5">
            <van-tab name="1" :title="$t('我待办')"></van-tab>
            <van-tab name="2" :title="$t('我提交')"></van-tab>
            <van-tab name="3" :title="$t('抄送我')"></van-tab>
            <van-tab name="4" :title="$t('已完成')"></van-tab>
          </van-tabs>
        </div>
      </form>

      <div :style="divHeight15" style="position: relative">
        <!--      <div>
                <van-tabs @click="activeTabMenu" color="#007CBB" title-active-color="#007CBB" title-inactive-color="#4B4B4B" background="#f5f5f5">
                  <van-tab name="1" :title="$t('我待办')"></van-tab>
                  <van-tab name="2" :title="$t('我提交')"></van-tab>
                  <van-tab name="3" :title="$t('抄送我')"></van-tab>
                  <van-tab name="4" :title="$t('已完成')"></van-tab>
                </van-tabs>
              </div>-->
        <div style="margin-top:5px;position: relative">
          <div class="content-block padding-tb-10" :style="divHeight12">
            <van-empty v-if="tableData.length == 0" description="暂无数据" />
            <van-pull-refresh v-else v-model="refreshing" @refresh="onRefresh">
              <van-list
                v-model:loading="loading"
                :finished="finished"
                @load="onLoad"
                :offset="0"
                finished-text="没有更多了"
              >
                <van-cell v-for="(item, index) in tableData" :key="index" style="line-height: 15px;padding: 0px 10px">
                  <div class="content-block-item padding-lr-10 padding-tb-10" style="position: relative" @click="dataDetail($event, item, index)">
                    <div class="color-muted" v-if="item.formApplyNo">
                      <el-row>
                        <el-col :span="12"  style="position: relative">
                          <div style="height: 20px;line-height: 20px">
                            <span class="fa fa-info-circle"></span>
                            <span>{{ item.formApplyNo }}</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="text-right" style="height: 20px;line-height: 20px">
                            <el-tag v-if="item.urge == true" size="small" effect="dark" type="danger">{{$t("催办")}}</el-tag>
                            <template v-else>
                              <div v-if="item.formCode && item.formCode != '' && item.status ==  -1">
                                <span class="fa fa-edit color-success"></span>
                                <label class="color-success">{{$t("编辑")}}</label>
                              </div>
                              <div v-else-if="(item.formCode == null || item.formCode == 'OTHER') && item.status !=  -1">
                                <i class="fa fa-file color-muted"></i>
                                <label class="color-muted">{{$t("查看")}}</label>
                              </div>
                              <div v-else>
                                <i class="fa fa-file color-muted"></i>
                                <label class="color-muted">{{$t("查看")}}</label>
                              </div>
                            </template>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="line-height" v-if="item.formApplyNo"></div>
                    <div class="margin-top-5">
                      [<span class="color-warning">{{ item.applyUserName }}</span>]
                      <span>{{$t("提交的")}}</span>
                      [<span class="color-warning moon-content-text-ellipsis-class" style="max-width: 120px;display: inline-block;position: relative; top: 3px">{{ item.noticeName }}</span>]
                    </div>
                    <div class="color-muted margin-top-5">
                      <span class="font-size-12">{{ item.className ? item.className : item.departmentName }}</span>
                    </div>
                    <div class="color-muted margin-top-5">
                      <span class="font-size-12">{{ $moment(item.applyTime).format("YYYY-MM-DD HH:mm") }}</span>
                    </div>
                    <div class="margin-top-5 font-size-12">
                      <span class="color-muted">{{$t("审核状态")}}</span>
                      <span>
                      <label v-if="item.status === -1" class="color-danger">{{$t("待提交")}}</label>
                      <label v-if="item.status === 0" class="color-warning">{{$t("待审核")}}</label>
                      <label v-if="item.status === 3" class="color-success">{{$t("通过")}}</label>
                      <label v-if="item.status === 4" class="color-danger">{{$t("未通过")}}</label>
                    </span>
                    </div>
                    <span class="fa fa-angle-right" style="position: absolute; right: 10px; top: 60px; font-size: 25px; color: #C0C4CC"></span>
                  </div>
                </van-cell>
              </van-list>
            </van-pull-refresh>
          </div>
        </div>
      </div>
    </div>

    <van-popup @close="cancelPop" v-model="popUpVisible" round position="bottom" :style="{ height: '85%' }" style="background: #efefef">
      <div class="padding-tb-10 padding-lr-10 border-bottom-1 bg-white">
        <el-row>
          <el-col :span="24">
            <template v-if="active == 1">
              <div class="text-right padding-lr-10">
                <!--            <el-button v-if="detailApplyAuditUserData.agreen1 == true" size="mini" type="success" @click="handleOk($event, detailData, 1)">同 意</el-button>-->
                <el-button size="mini" type="success" v-if="detailData.join == true" @click="sianRange($event, 7)">{{ $t('加签') }}</el-button>
                <el-button size="mini" type="danger" v-if="detailData.trans == true" @click="sianRange($event, 6)" style="margin-left: 0 !important;">{{ $t('转签') }}</el-button>
                <el-button v-if="detailData.urge == true" type="danger" size="mini" @click="handleUrge($event, detailData)">{{$t("催办")}}</el-button>
                <el-popover
                  :tabindex="99999"
                  placement="bottom"
                  width="300"
                  @hide="cancelPop"
                  v-model="visibleYes"
                  v-if="detailApplyAuditUserData.agreen1 == true">
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
                    <el-button type="primary" size="mini" @click="handleOk($event, detailData, 1)">确定</el-button>
                  </div>
                  <el-button slot="reference" type="success" size="mini">{{$t("同意")}}</el-button>
                </el-popover>
                <el-button size="mini" @click="handleCancel">取 消</el-button>
                <!--            <el-button size="mini" type="primary" @click="handleOk($event, detailData, 6)">转 交</el-button>-->
                <!--            <el-button size="mini" type="primary" @click="handleOk($event, detailData, -1)">撤 销</el-button>-->
                <el-popover
                  :tabindex="99999"
                  placement="bottom"
                  width="300"
                  @hide="cancelPop"
                  v-model="visibleNo"
                  v-if="detailApplyAuditUserData.notagreed1 == true">
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
                    <el-button type="primary" size="mini" @click="handleOk($event, detailData, 2)">确定</el-button>
                  </div>
                  <el-button slot="reference" type="warning" size="mini">{{$t("驳回")}}</el-button>
                </el-popover>
              </div>
            </template>
            <template v-if="active == 2">
              <div class="text-right padding-lr-10">
                <el-button v-if="detailData.urge == true" type="danger" size="mini" @click="handleUrge($event, detailData)">{{$t("催办")}}</el-button>
                <el-button v-if="detailData.allowRevoke == true" size="mini" type="primary" @click="handleOk($event, detailData, -1)">撤 销</el-button>
                <el-button v-else size="mini" @click="handleCancel">取 消</el-button>
              </div>
            </template>
            <template v-if="active == 3">
              <div class="text-right padding-lr-10">
                <el-tag size="small" type="info">抄送信息</el-tag>
              </div>
            </template>
            <template v-if="active == 4">
              <div class="text-right">
                <el-tag type="primary" size="small" v-if="detailData.status == 5" class="text-center color-white">无需审批</el-tag>
                <el-tag type="warning" size="small" v-if="detailData.status == 8" class="text-center color-white">审批中</el-tag>
                <el-tag type="warning" size="small" v-if="detailData.status == -1" class="text-center color-white">待提交</el-tag>
                <el-tag type="success" size="small" v-if="detailData.status == 3" class="text-center color-white">已通过</el-tag>
                <el-tag type="danger" size="small" v-if="detailData.status == 4" class="text-center color-white">未通过</el-tag>
                <el-tag type="danger" size="small" v-if="detailData.status == 2" class="text-center color-white">已驳回</el-tag>
                <el-tag type="danger" size="small" v-if="detailData.status == 1" class="text-center color-white">已通过</el-tag>
              </div>
            </template>
          </el-col>
        </el-row>
      </div>
      <div :style="divHeight8">
        <div class="padding-lr-0 bg-white margin-bottom-10" v-if="detailData.currentNodeName">
          <div class="color-muted margin-top-0 font-size-12 padding-top-10 padding-lr-10" style="padding-bottom: 0px;">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">{{$t("当前审批环节")}}</label>
            </span>
          </div>
          <div class="padding-lr-10 padding-tb-5 font-size-12">
            <label class="margin-left-10">{{detailData.currentNodeName}}</label>
          </div>
        </div>
        <div class="padding-lr-0 bg-white">
          <div class="color-muted margin-top-0 font-size-12 padding-lr-10 padding-tb-10">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">{{$t("基础信息")}}</label>
            </span>
          </div>
          <div class="detail-block-title padding-lr-10 padding-tb-5 font-size-12">
            <el-row>
              <el-col :span="12">
                <span class="color-muted">{{$t("申请人")}}:</span>
                <span>{{ detailData.applyUserName }}</span>
              </el-col>
              <el-col :span="12">
                <span class="color-muted">{{$t("学号/工号")}}:</span>
                <span>{{ detailData.userNo }}</span>
              </el-col>
            </el-row>
            <el-row class="margin-top-5">
              <el-col :span="12">
                <span class="color-muted">{{$t("服务名称")}}:</span>
                <span>{{ detailData.formName }}</span>
              </el-col>
              <el-col :span="12">
                <span class="color-muted">{{$t("班级/部门")}}:</span>
                <span>
                <label v-if="detailData.userType == 5">{{ detailData.className }}</label>
                <label v-if="detailData.userType == 4">{{ detailData.departmentName }}</label>
              </span>
              </el-col>
            </el-row>
            <el-row class="margin-top-5">
              <el-col :span="12">
                <span class="color-muted">{{$t("申请日期")}}:</span>
                <span>{{ $moment(detailData.applyTime).format("YYYY-MM-DD HH:mm") }}</span>
              </el-col>
              <el-col :span="12">
                <span class="color-muted">{{$t("宿舍")}}:</span>
                <span v-if="detailData.buildName">
                  <el-tooltip effect="dark" :content="`${detailData.buildName}-${detailData.floorNum}${$t('层')}-${detailData.roomNo}`" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{detailData.buildName}}{{detailData.floorNum}}{{$t("层")}}-{{detailData.roomNo}}
                      </span>
                    </el-tooltip>
                </span>
                <span v-else>
                  --
                </span>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="margin-top-10 padding-lr-10 bg-white padding-tb-10" v-if="detailData.checkFiledResult != null">
          <div class="color-muted margin-top-5 font-size-12">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("系统核查(表单数据)")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
            <div v-if="detailData.checkFiledResult != null">
              <el-row>
                <el-col :span="12">
                  <span>{{$t("核查类型")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailData.checkFiledResult.name" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailData.checkFiledResult.name }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
                <el-col :span="12">
                  <span>{{$t("核查表名称")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailData.checkFiledResult.formName" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailData.checkFiledResult.formName }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
              </el-row>
              <el-row class="margin-top-5">
                <el-col :span="12">
                  <span>{{$t("核查条件")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailData.checkFiledResult.type" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailData.checkFiledResult.type }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
                <el-col :span="12">
                  <span>{{$t("核查结果")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailData.checkFiledResult.result" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailData.checkFiledResult.result }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="margin-top-10 padding-lr-10 bg-white padding-tb-10" v-if="detailData.checkApplyResult != null">
          <div class="color-muted margin-top-5 font-size-12">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("系统核查(审核状态)")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
            <div v-if="detailData.checkApplyResult != null">
              <el-row>
                <el-col :span="12">
                  <span>{{$t("核查类型")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailData.checkApplyResult.name" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailData.checkApplyResult.name }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
                <el-col :span="12">
                  <span>{{$t("核查表名称")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailData.checkApplyResult.formName" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailData.checkApplyResult.formName }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
              </el-row>
              <el-row class="margin-top-5">
                <el-col :span="12">
                  <span>{{$t("核查条件")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailData.checkApplyResult.type" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailData.checkApplyResult.type }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
                <el-col :span="12">
                  <span>{{$t("核查结果")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailData.checkApplyResult.result" placement="top">
                      <span class="moon-content-text-ellipsis-class" style="max-width: 100px;;display: inline-block;position: relative; top: 4px">
                        {{ detailData.checkApplyResult.result }}
                      </span>
                    </el-tooltip>
                    <i v-if="detailData.checkApplyId && detailData.checkApplyId != ''" class="fa fa-file-text color-success" @click="detailCheckClick($event, detailData.checkApplyId)"></i>
                  </span>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="margin-top-10 padding-lr-10 bg-white padding-tb-10">
          <div class="color-muted margin-top-5 font-size-12">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("申请内容")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
            <table class="custom-table">
              <tr v-for="(item, index) in detailApplyContentData" :key="index">
                <template  v-if="item.type != 'fc-editor' && item.type != 'upload'">
                  <td style="width: 30%;text-align: right;padding-right: 15px">
                    <span class="color-muted moon-content-text-ellipsis-class">
                      <label class="font-size-12">{{item.title}}</label>
                    </span>
                  </td>
                  <td style="text-align: left;padding-left: 15px">
                    <el-tooltip class="item" effect="dark" :content="item.value" placement="top">
                    <span class="moon-content-text-ellipsis-class">
                      <label v-if="item.type == 'el-transfer' && item.value && item.value.length > 0" class="font-size-12">{{ item.value.join() }}</label>
                      <label v-else-if="item.type == 'el-transfer' && item.value && item.value.length <= 0" class="font-size-12"></label>
                      <label v-else class="font-size-12">{{ item.value }}</label>
                    </span>
                    </el-tooltip>
                  </td>
                </template>

                <template v-else-if="item.type != 'fc-editor' && item.type == 'upload'">
                  <td style="width: 30%;text-align: right;padding-right: 15px">
                    <span v-if="!item.value || item.value.length <= 0" class="color-muted moon-content-text-ellipsis-class">
                      {{item.title}}
                    </span>
                    <span v-else class="color-muted" style="position: relative;">{{item.title}}: </span>
                  </td>
                  <td style="text-align: left;padding-left: 15px">
                    <span v-if="!item.value || item.value.length <= 0">
                      <div style="height: 20px;line-height: 20px"></div>
                    </span>
                    <span v-else class="custom-avatar" style="display: inline-block;margin-right: 5px;position: relative; top: 5px" v-for="(itemImg, indexImg) in item.value" :key="indexImg" @click="readFile(itemImg)">
                      <el-avatar shape="square" size="small" :src="itemImg" fit="fill"></el-avatar>
                    </span>
                  </td>
                </template>

                <template v-else>
                  <td style="width: 30%;text-align: right;padding-right: 15px">
                    <span class="color-muted font-bold moon-content-text-ellipsis-class" style="position: relative;top: -50px;">{{item.title}}: </span>
                  </td>
                  <td style="text-align: left;padding-left: 15px">
                    <div v-if="item.type == 'fc-editor'"  v-html="item.value" style="width: 90%;height: 150px;overflow-y:auto;display: inline-block;border: 1px solid #dddddd;border-radius: 5px;padding: 0px 10px">
                    </div>
                  </td>
                </template>
              </tr>
            </table>
          </div>
        </div>
        <div class="margin-top-10 padding-lr-10 bg-white padding-tb-10">
          <div class="color-muted margin-top-5 font-size-12">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("审批进度")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
            <el-steps direction="vertical" space="60px">
              <el-step v-for="(item, index) in detailApplyAuditList" :key="index">
                <div slot="icon">
                  <i class="fa fa-flag" style="font-size: 12px"></i>
                </div>
                <div slot="title" class="font-size-12">
                  <span v-if="item.nodeType == 'handle'" class="color-success">
                    <label v-if="item.nodeName">【{{item.nodeName}}】</label>
                    <label>{{ $t("审批") }}</label>
                    <label v-if="item.andor == 'and'"> ({{ $t("与签") }}) </label>
                    <label v-if="item.andor == 'or'"> ({{ $t("或签") }}) </label>
                  </span>
                  <span v-if="item.nodeType == 'cc'" class="color-warning">
                    <label v-if="item.nodeName">【{{item.nodeName}}】</label>
                    <label>{{ $t("抄送") }}</label>
                  </span>
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
                              <img v-for="(item, index) in itemUser.url" :key="index" :src="item" fit="fit" style="position: relative;top:5px;height: 20px;width:20px;margin-left: 3px" @click="readFile(item)"></img>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 4" class="color-danger">{{$t("未通过")}}</label>
                          <label v-if="itemUser.status === 1" class="color-success">
                            {{$t("已通过")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <img v-for="(item, index) in itemUser.url" :key="index" :src="item" fit="fit" style="position: relative;top:5px;height: 20px;width:20px;margin-left: 3px" @click="readFile(item)"></img>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 2" class="color-warning">
                            {{$t("已驳回")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <img v-for="(item, index) in itemUser.url" :key="index" :src="item" fit="fit" style="position: relative;top:5px;height: 20px;width:20px;margin-left: 3px" @click="readFile(item)"></img>
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
                      <el-tag size="mini" v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser" v-if="indexUser <= 3">
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
                        v-if="item.handleUserNameList.length > 3">
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
        </div>
      </div>
    </van-popup>

    <van-popup @close="cancelPop" v-model="popCheckUpVisible" round position="bottom" :style="{ height: '80%' }" style="background: #efefef">
      <div class="padding-tb-10 padding-lr-10 border-bottom-1 bg-white">
<!--        <el-row>-->
<!--          <el-col :span="24">-->
<!--            <template v-if="active == 1">-->
<!--              <div class="text-right padding-lr-10">-->
<!--                &lt;!&ndash;            <el-button v-if="detailApplyAuditUserData.agreen1 == true" size="mini" type="success" @click="handleOk($event, detailData, 1)">同 意</el-button>&ndash;&gt;-->
<!--                <el-button v-if="detailData.urge == true" type="danger" size="mini" @click="handleUrge($event, detailData)">{{$t("催办")}}</el-button>-->
<!--                <el-popover-->
<!--                  :tabindex="99999"-->
<!--                  placement="bottom"-->
<!--                  width="300"-->
<!--                  @hide="cancelPop"-->
<!--                  v-model="visibleYes"-->
<!--                  v-if="detailCheckApplyAuditUserData.agreen1 == true">-->
<!--                  <div class="margin-bottom-10">-->
<!--                    <div>-->
<!--                      <el-input-->
<!--                        type="textarea"-->
<!--                        :rows="2"-->
<!--                        placeholder="请输入内容"-->
<!--                        v-model="textarea">-->
<!--                      </el-input>-->
<!--                    </div>-->
<!--                    <div class="margin-top-5">-->
<!--                      <div>-->
<!--                        <span class="font-size-12 color-muted">{{$t("上传图片")}}</span>-->
<!--                      </div>-->
<!--                      <div class="margin-top-10">-->
<!--                    <span class="pull-left" style="position: relative" v-for="(item, index) in images" :key="index">-->
<!--                      <i class="fa fa-times-circle color-danger" style="font-size: 14px;position: absolute; right: 2px; top:-5px;" @click="clearImage($event, index)"></i>-->
<!--                      <img  :src="item.picture_url" fit="fit" style="margin-right: 10px;height: 30px;width:30px"></img>-->
<!--                    </span>-->
<!--                        <upload-square ref="upload" class="pull-left margin-left-5" :action="uploadFileListUrl" :limit="3" max-size="5" :data="{path: 'applet'}" accept=".png,.jpg,.jpeg" @success="uploadImgListFileSuccess">-->
<!--                          <i class="el-icon-plus avatar-uploader-icon" style="height: 30px;line-height:30px;width: 30px"></i>-->
<!--                        </upload-square>-->
<!--                        <div class="moon-clearfix"></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div style="text-align: right; margin: 0">-->
<!--                    <el-button size="mini" type="text" @click="cancelPop">取消</el-button>-->
<!--                    <el-button type="primary" size="mini" @click="handleOk($event, detailData, 1)">确定</el-button>-->
<!--                  </div>-->
<!--                  <el-button slot="reference" type="success" size="mini">{{$t("同意")}}</el-button>-->
<!--                </el-popover>-->
<!--                <el-button v-else size="mini" @click="handleCancel">取 消</el-button>-->
<!--                &lt;!&ndash;            <el-button size="mini" type="primary" @click="handleOk($event, detailData, 6)">转 交</el-button>&ndash;&gt;-->
<!--                &lt;!&ndash;            <el-button size="mini" type="primary" @click="handleOk($event, detailData, -1)">撤 销</el-button>&ndash;&gt;-->
<!--                <el-popover-->
<!--                  :tabindex="99999"-->
<!--                  placement="bottom"-->
<!--                  width="300"-->
<!--                  @hide="cancelPop"-->
<!--                  v-model="visibleNo"-->
<!--                  v-if="detailCheckApplyAuditUserData.notagreed1 == true">-->
<!--                  <div class="margin-bottom-10">-->
<!--                    <div>-->
<!--                      <el-input-->
<!--                        type="textarea"-->
<!--                        :rows="2"-->
<!--                        placeholder="请输入内容"-->
<!--                        v-model="textarea">-->
<!--                      </el-input>-->
<!--                    </div>-->
<!--                    <div class="margin-top-5">-->
<!--                      <div>-->
<!--                        <span class="font-size-12 color-muted">{{$t("上传图片")}}</span>-->
<!--                      </div>-->
<!--                      <div class="margin-top-10">-->
<!--                    <span class="pull-left" style="position: relative" v-for="(item, index) in images" :key="index">-->
<!--                      <i class="fa fa-times-circle color-danger" style="font-size: 14px;position: absolute; right: 2px; top:-5px;" @click="clearImage($event, index)"></i>-->
<!--                      <img  :src="item.picture_url" fit="fit" style="margin-right: 10px;height: 30px;width:30px"></img>-->
<!--                    </span>-->
<!--                        <upload-square ref="upload" class="pull-left margin-left-5" :action="uploadFileListUrl" :limit="3" max-size="5" :data="{path: 'applet'}" accept=".png,.jpg,.jpeg" @success="uploadImgListFileSuccess">-->
<!--                          <i class="el-icon-plus avatar-uploader-icon" style="height: 30px;line-height:30px;width: 30px"></i>-->
<!--                        </upload-square>-->
<!--                        <div class="moon-clearfix"></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div style="text-align: right; margin: 0">-->
<!--                    <el-button size="mini" type="text" @click="cancelPop">取消</el-button>-->
<!--                    <el-button type="primary" size="mini" @click="handleOk($event, detailData, 2)">确定</el-button>-->
<!--                  </div>-->
<!--                  <el-button slot="reference" type="warning" size="mini">{{$t("驳回")}}</el-button>-->
<!--                </el-popover>-->
<!--              </div>-->
<!--            </template>-->
<!--            <template v-if="active == 2">-->
<!--              <div class="text-right padding-lr-10">-->
<!--                <el-button v-if="detailCheckData.urge == true" type="danger" size="mini" @click="handleUrge($event, detailCheckData)">{{$t("催办")}}</el-button>-->
<!--                <el-button v-if="detailCheckData.allowRevoke == true" size="mini" type="primary" @click="handleOk($event, detailCheckData, -1)">撤 销</el-button>-->
<!--                <el-button v-else size="mini" @click="handleCancel">取 消</el-button>-->
<!--              </div>-->
<!--            </template>-->
<!--            <template v-if="active == 3">-->
<!--              <div class="text-right padding-lr-10">-->
<!--                <el-tag size="small" type="info">抄送信息</el-tag>-->
<!--              </div>-->
<!--            </template>-->
<!--            <template v-if="active == 4">-->
<!--              <div class="text-right">-->
<!--                <el-tag type="primary" size="small" v-if="detailCheckData.status == 5" class="text-center color-white">无需审批</el-tag>-->
<!--                <el-tag type="warning" size="small" v-if="detailCheckData.status == 8" class="text-center color-white">审批中</el-tag>-->
<!--                <el-tag type="warning" size="small" v-if="detailCheckData.status == -1" class="text-center color-white">已撤销</el-tag>-->
<!--                <el-tag type="success" size="small" v-if="detailCheckData.status == 3" class="text-center color-white">已通过</el-tag>-->
<!--                <el-tag type="danger" size="small" v-if="detailCheckData.status == 4" class="text-center color-white">未通过</el-tag>-->
<!--                <el-tag type="danger" size="small" v-if="detailCheckData.status == 2" class="text-center color-white">已驳回</el-tag>-->
<!--                <el-tag type="danger" size="small" v-if="detailCheckData.status == 1" class="text-center color-white">已通过</el-tag>-->
<!--              </div>-->
<!--            </template>-->
<!--          </el-col>-->
<!--        </el-row>-->
        <span class="font-bold">核查详细</span>
      </div>
      <div :style="divHeight8">
        <div class="padding-lr-0 bg-white margin-bottom-10" v-if="detailCheckData.currentNodeName">
          <div class="color-muted margin-top-0 font-size-12 padding-top-10 padding-lr-10" style="padding-bottom: 0px;">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">{{$t("当前审批环节")}}</label>
            </span>
          </div>
          <div class="padding-lr-10 padding-tb-5 font-size-12">
            <label class="margin-left-10">{{detailCheckData.currentNodeName}}</label>
          </div>
        </div>
        <div class="padding-lr-0 bg-white">
          <div class="color-muted margin-top-0 font-size-12 padding-lr-10 padding-tb-10">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">{{$t("基础信息")}}</label>
            </span>
          </div>
          <div class="detail-block-title padding-lr-10 padding-tb-5 font-size-12">
            <el-row>
              <el-col :span="12">
                <span class="color-muted">{{$t("申请人")}}:</span>
                <span>{{ detailCheckData.applyUserName }}</span>
              </el-col>
              <el-col :span="12">
                <span class="color-muted">{{$t("学号/工号")}}:</span>
                <span>{{ detailCheckData.userNo }}</span>
              </el-col>
            </el-row>
            <el-row class="margin-top-5">
              <el-col :span="12">
                <span class="color-muted">{{$t("服务名称")}}:</span>
                <span>{{ detailCheckData.formName }}</span>
              </el-col>
              <el-col :span="12">
                <span class="color-muted">{{$t("班级/部门")}}:</span>
                <span>
                <label v-if="detailCheckData.userType == 5">{{ detailCheckData.className }}</label>
                <label v-if="detailCheckData.userType == 4">{{ detailCheckData.departmentName }}</label>
              </span>
              </el-col>
            </el-row>
            <el-row class="margin-top-5">
              <el-col :span="12">
                <span class="color-muted">{{$t("申请日期")}}:</span>
                <span>{{ $moment(detailCheckData.applyTime).format("YYYY-MM-DD HH:mm") }}</span>
              </el-col>
              <el-col :span="12">
                <span class="color-muted">{{$t("宿舍")}}:</span>
                <span v-if="detailCheckData.buildName">
                  <el-tooltip effect="dark" :content="`${detailCheckData.buildName}-${detailCheckData.floorNum}${$t('层')}-${detailCheckData.roomNo}`" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{detailCheckData.buildName}}{{detailCheckData.floorNum}}{{$t("层")}}-{{detailCheckData.roomNo}}
                      </span>
                    </el-tooltip>
                </span>
                <span v-else>
                  --
                </span>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="margin-top-10 padding-lr-10 bg-white padding-tb-10" v-if="detailCheckData.checkFiledResult != null || detailCheckData.checkApplyResult != null">
          <div class="color-muted margin-top-5 font-size-12">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("系统核查")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
            <div v-if="detailCheckData.checkFiledResult != null">
              <el-row>
                <el-col :span="12">
                  <span>{{$t("核查类型")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailCheckData.checkFiledResult.name" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailCheckData.checkFiledResult.name }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
                <el-col :span="12">
                  <span>{{$t("核查表名称")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailCheckData.checkFiledResult.formName" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailCheckData.checkFiledResult.formName }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
              </el-row>
              <el-row class="margin-top-5">
                <el-col :span="12">
                  <span>{{$t("核查条件")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailCheckData.checkFiledResult.type" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailCheckData.checkFiledResult.type }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
                <el-col :span="12">
                  <span>{{$t("核查结果")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailCheckData.checkFiledResult.result" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailCheckData.checkFiledResult.result }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
              </el-row>
            </div>
            <div class="line-height"></div>
            <div v-if="detailCheckData.checkApplyResult != null">
              <el-row>
                <el-col :span="12">
                  <span>{{$t("核查类型")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailCheckData.checkApplyResult.name" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailCheckData.checkApplyResult.name }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
                <el-col :span="12">
                  <span>{{$t("核查表名称")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailCheckData.checkApplyResult.formName" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailCheckData.checkApplyResult.formName }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
              </el-row>
              <el-row class="margin-top-5">
                <el-col :span="12">
                  <span>{{$t("核查条件")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailCheckData.checkApplyResult.type" placement="top">
                      <span class="moon-content-text-ellipsis-class width-100" style="display: inline-block;position: relative; top: 4px">
                        {{ detailCheckData.checkApplyResult.type }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
                <el-col :span="12">
                  <span>{{$t("核查结果")}}:</span>
                  <span>
                    <el-tooltip effect="dark" :content="detailCheckData.checkApplyResult.result" placement="top">
                      <span class="moon-content-text-ellipsis-class" style="max-width: 100px;;display: inline-block;position: relative; top: 4px">
                        {{ detailCheckData.checkApplyResult.result }}
                      </span>
                    </el-tooltip>
                  </span>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="margin-top-10 padding-lr-10 bg-white padding-tb-10">
          <div class="color-muted margin-top-5 font-size-12">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("申请内容")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
            <table class="custom-table">
              <tr v-for="(item, index) in detailCheckApplyContentData" :key="index">
                <template  v-if="item.type != 'fc-editor' && item.type != 'upload'">
                  <td style="width: 30%;text-align: right;padding-right: 15px">
                    <span class="color-muted moon-content-text-ellipsis-class">
                      <label v-if="item.type == 'el-transfer' && item.value && item.value.length > 0" class="font-size-12">{{ item.value.join() }}</label>
                      <label v-else-if="item.type == 'el-transfer' && item.value && item.value.length <= 0" class="font-size-12"></label>
                      <label v-else class="font-size-12">{{ item.value }}</label>
                    </span>
                  </td>
                  <td style="text-align: left;padding-left: 15px">
                    <el-tooltip class="item" effect="dark" :content="item.value" placement="top">
                    <span class="moon-content-text-ellipsis-class">
                      <label class="font-size-12">{{ item.value }}</label>
                    </span>
                    </el-tooltip>
                  </td>
                </template>

                <template v-else-if="item.type != 'fc-editor' && item.type == 'upload'">
                  <td style="width: 30%;text-align: right;padding-right: 15px">
                    <span v-if="!item.value || item.value.length <= 0" class="color-muted moon-content-text-ellipsis-class">
                      {{item.title}}
                    </span>
                    <span v-else class="color-muted" style="position: relative;">{{item.title}}: </span>
                  </td>
                  <td style="text-align: left;padding-left: 15px">
                    <span v-if="!item.value || item.value.length <= 0">
                      <div style="height: 20px;line-height: 20px"></div>
                    </span>
                    <span v-else class="custom-avatar" style="display: inline-block;margin-right: 5px;position: relative; top: 5px" v-for="(itemImg, indexImg) in item.value" :key="indexImg" @click="readFile(itemImg)">
                      <el-avatar shape="square" size="small" :src="itemImg" fit="fill"></el-avatar>
                    </span>
                  </td>
                </template>

                <template v-else>
                  <td style="width: 30%;text-align: right;padding-right: 15px">
                    <span class="color-muted font-bold moon-content-text-ellipsis-class" style="position: relative;top: -50px;">{{item.title}}: </span>
                  </td>
                  <td style="text-align: left;padding-left: 15px">
                    <div v-if="item.type == 'fc-editor'"  v-html="item.value" style="width: 90%;height: 150px;overflow-y:auto;display: inline-block;border: 1px solid #dddddd;border-radius: 5px;padding: 0px 10px">
                    </div>
                  </td>
                </template>
              </tr>
            </table>
          </div>
        </div>
        <div class="margin-top-10 padding-lr-10 bg-white padding-tb-10">
          <div class="color-muted margin-top-5 font-size-12">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("审批进度")}}</label>
              </span>
          </div>
          <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
            <el-steps direction="vertical" space="60px">
              <el-step v-for="(item, index) in detailCheckApplyAuditList" :key="index">
                <div slot="icon">
                  <i class="fa fa-flag" style="font-size: 12px"></i>
                </div>
                <div slot="title" class="font-size-12">
                  <span v-if="item.nodeType == 'handle'" class="color-success">
                    <label v-if="item.nodeName">【{{item.nodeName}}】</label>
                    <label>{{ $t("审批") }}</label>
                    <label v-if="item.andor == 'and'"> ({{ $t("与签") }}) </label>
                    <label v-if="item.andor == 'or'"> ({{ $t("或签") }}) </label>
                  </span>
                  <span v-if="item.nodeType == 'cc'" class="color-warning">
                    <label v-if="item.nodeName">【{{item.nodeName}}】</label>
                    <label>{{ $t("抄送") }}</label>
                  </span>
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
                              <img v-for="(item, index) in itemUser.url" :key="index" :src="item" fit="fit" style="position: relative;top:5px;height: 20px;width:20px;margin-left: 3px" @click="readFile(item)"></img>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 4" class="color-danger">{{$t("未通过")}}</label>
                          <label v-if="itemUser.status === 1" class="color-success">
                            {{$t("已通过")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <img v-for="(item, index) in itemUser.url" :key="index" :src="item" fit="fit" style="position: relative;top:5px;height: 20px;width:20px;margin-left: 3px" @click="readFile(item)"></img>
                            </span>
                          </label>
                          <label v-if="itemUser.status === 2" class="color-warning">
                            {{$t("已驳回")}}
                            <el-tooltip v-if="itemUser.des" class="item" effect="dark" :content="itemUser.des" placement="top">
                              <i class="fa fa-warning color-warning"></i>
                            </el-tooltip>
                            <span v-if="itemUser.url && itemUser.url.length > 0">
                              <img v-for="(item, index) in itemUser.url" :key="index" :src="item" fit="fit" style="position: relative;top:5px;height: 20px;width:20px;margin-left: 3px" @click="readFile(item)"></img>
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
                      <el-tag size="mini" v-for="(itemUser, indexUser) in item.handleUserNameList" :key="indexUser" v-if="indexUser <= 3">
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
                        v-if="item.handleUserNameList.length > 3">
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
        </div>
      </div>
    </van-popup>

    <van-calendar v-model="showCalendar" type="range" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" />

    <van-popup v-model="urgeDialog" round position="bottom" class="custom-cascader" :style="{ height: '400px' }">
      <div style="height: 40px;line-height: 40px;background: #f5f5f5">
        <el-row>
          <el-col :span="6">
            <div class="text-center" @click="resetProcessPop">
              <a href="javascript:;" class="color-warning">{{$t("重置")}}</a>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text-center">&nbsp;
            </div>
          </el-col>
          <el-col :span="6">
            <div class="text-center" @click="okProcessPop">
              <a href="javascript:;" class="color-success">{{$t("确认")}}</a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div :style="divHeight18">
        <el-cascader-panel ref="SelectorDept" :style="{ height: '350px' }" :props="{multiple: true,checkStrictly:false}" v-model="searchDept" :options="dataProcessList" @change="searchProcess"></el-cascader-panel>
      </div>
    </van-popup>

    <van-popup v-model="dialogSysVisible" position="bottom" class="custom-cascader" :style="{ height: divHeight13.height }">
      <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
      <div style="height: 40px;line-height: 40px;" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
        <el-row>
          <el-col :span="8">
            <div class="text-left padding-left-5" @click="cancelSysPop">
              <a href="javascript:;" class="color-white">
                <i class="fa fa-chevron-left"></i>
                {{$t("返回")}}
              </a>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="text-center color-white font-bold">
              {{dialogSysTitle}}
            </div>
          </el-col>
          <el-col :span="8">
            &nbsp;
          </el-col>
        </el-row>
      </div>

      <div :style="{height: detailType == 2 ? divHeight13.height1-100+'px' : divHeight13.height1-60+'px'}" style="overflow-y: auto;background: #f5f5f5;padding: 10px">
        <div class="sys-top-block">
          <div>
            <el-row>
              <el-col :span="12">
                <div class="text-left">
                  <span>{{$moment(dataMainDetailObj.applyTime).format("YYYY-MM-DD HH:mm:ss")}}</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="text-right">
                  <span :class="auditTextColorInfo(dataMainDetailObj.status)">{{auditStatusTextInfo(dataMainDetailObj.status)}}</span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="padding-lr-10">
            <div class="margin-top-10">
              <el-row>
                <el-col :span="24">
                  <div class="text-left font-bold">
                    <span class="moon-content-text-ellipsis-class" style="display: inline-block;max-width: 150px">
                      <label v-if="dataMainDetailObj.formCode == 'PTGL'">{{dataMainDetailObj['applyData'] ? dataMainDetailObj['applyData']['fk_name20230501'].value : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'JKGL'">{{dataMainDetailObj['applyData'] ? dataMainDetailObj['applyData']['jk_name20230501'].value : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'HKD'">{{dataMainDetailObj['applyData'] ? dataMainDetailObj['applyData']['jk_name20230501'].value : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'SKD'">{{dataMainDetailObj['applyData'] ? dataMainDetailObj['applyData']['jk_name20230501'].value : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'BZBX'">{{dataMainDetailObj['applyData'] ? dataMainDetailObj['applyData']['bb_name20230501'].value : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'DGDK'">{{dataMainDetailObj['applyData'] ? dataMainDetailObj['applyData']['fk_name20230501'].value : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'CGHT'">{{dataMainDetailObj['applyData'] ? (dataMainDetailObj['applyData']['ht_amount20230501'] ? dataMainDetailObj['applyData']['ht_amount20230501']['value'] : '--') : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'XSHT'">{{dataMainDetailObj['applyData'] ? (dataMainDetailObj['applyData']['ht_amount20230501'] ? dataMainDetailObj['applyData']['ht_amount20230501']['value'] : '--') : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'TYHT'">{{dataMainDetailObj['applyData'] ? (dataMainDetailObj['applyData']['ht_amount20230501'] ? dataMainDetailObj['applyData']['ht_amount20230501']['value'] : '--') : '--'}}</label>
                    </span>
                    <span class="moon-content-text-ellipsis-class color-success" style="position: relative;top: -5px">
                      <label v-if="dataMainDetailObj.formCode == 'PTGL'">¥{{dataMainDetailObj['applyData'] ? dataMainDetailObj['applyData']['cost_allAmount20230501'].value : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'JKGL'">¥{{dataMainDetailObj['applyData'] ? dataMainDetailObj['applyData']['cost_allAmount20230501'].value : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'HKD'">¥{{dataMainDetailObj['applyData'] ? dataMainDetailObj['applyData']['cost_allAmount20230501'].value : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'SKD'">¥{{dataMainDetailObj['applyData'] ? dataMainDetailObj['applyData']['cost_allAmount20230501'].value : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'BZBX'">¥{{dataMainDetailObj['applyData'] ? dataMainDetailObj['applyData']['cost_allAmount20230501'].value : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'DGDK'">¥{{dataMainDetailObj['applyData'] ? dataMainDetailObj['applyData']['cost_allAmount20230501'].value : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'CGHT'">¥{{dataMainDetailObj['applyData'] ? (dataMainDetailObj['applyData']['ht_amount20230501'] ? dataMainDetailObj['applyData']['ht_amount20230501']['value'] : '--') : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'XSHT'">¥{{dataMainDetailObj['applyData'] ? (dataMainDetailObj['applyData']['ht_amount20230501'] ? dataMainDetailObj['applyData']['ht_amount20230501']['value'] : '--') : '--'}}</label>
                      <label v-if="dataMainDetailObj.formCode == 'TYHT'">¥{{dataMainDetailObj['applyData'] ? (dataMainDetailObj['applyData']['ht_amount20230501'] ? dataMainDetailObj['applyData']['ht_amount20230501']['value'] : '--') : '--'}}</label>
                    </span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="margin-top-10">
              <el-row>
                <el-col :span="24">
                  <div class="text-left">
                    <span>{{$t("当前审批环节")}}:</span>
                    <span class="moon-content-text-ellipsis-class color-warning" style="display: inline-block;max-width: 200px;position: relative;top: 5px">
                      {{dataMainDetailObj['handleList'] ? dataMainDetailObj.handleList[dataMainDetailObj.orderIndex-1].nodeName : ''}}
                    </span>
<!--                    <span class="color-success" style="position: relative;top: 0px">-->
<!--                      {{auditStatusTextInfo(dataMainDetailObj.status)}}-->
<!--                    </span>-->
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>

        <div class="margin-top-20">
          <form-system-h5-normal-detail
            ref="h5DialogRef"
            :active-type="active"
            :detail-type="detailType"
            :data-detail-obj="dataDetailObj"
            :data-main-detail-obj = "dataMainDetailObj"
            :extra-data-list="tableNormalDetailData"
            :serial-data-list="serialDataList"
            :detail-apply-audit-list="detailApplyAuditList"
            :table-order-detail-data="payableDataList"
            :draw-h5-height="divHeight13.height1-255+'px'"
            @changeDetailType="changeDetailType">

          </form-system-h5-normal-detail>
        </div>
      </div>
    </van-popup>

    <van-dialog v-model="dialogWrite" title="签名" style="top:50%;" :width="screenWidth.width1-15" :show-confirm-button="false" @close="closeDialog" :before-close="onBeforeClose">
      <div slot="title" class="write-header-block">
        <div>{{$t("签名")}}</div>
      </div>

      <vue-esign
          ref="esign"
          :width="screenWidth.width1-15"
          :height="divHeight10.height1 - 200"
          :isCrop="isCrop"
          :lineWidth="lineWidth"
          :lineColor="lineColor"
          :bgColor.sync="bgColor"
          :quality="quality">

      </vue-esign>

      <div style="height: 50px;line-height: 50px;background: #FFFFFF">
        <el-row>
          <el-col :span="12">
            <div class="write-item-block write-item-left-block" @click="dialogWrite = false">
              <span>{{$t("取消")}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="write-item-block" v-loading="btnLoading" @click="btnLoading == true ? '' : okDialog()">
              <span>{{$t("确定")}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </van-dialog>

    <van-popup v-model="dialogRangeDetail" round position="bottom" :style="{ height: '400px' }" @close="closeRangeDialog">
      <div style="height: 40px;line-height: 40px;background: #f5f5f5">
        <el-row>
          <el-col :span="6">
            <div class="text-center" @click="closeRangeDialog">
              <a href="javascript:;" class="color-warning">{{$t("取消")}}</a>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text-center">
              {{$t("选择人员")}}
            </div>
          </el-col>
          <el-col :span="6">
            <div class="text-center" @click="okRangeDialog">
              <a href="javascript:;" class="color-success">{{$t("确认")}}</a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div style="height: 360px;overflow-y: auto">
        <van-radio-group v-model="transUserId" v-for="(item,index) in signType == 6 ? detailData.transRange : detailData.joinRange" :key="index">
          <van-cell-group>
            <van-cell :title="item.realName" clickable @click="transUserId = item.userId">
              <template #right-icon>
                <van-radio :name="item.userId" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";
  import { Toast } from 'vant';
  import { ImagePreview } from 'vant'

  import mixins from "~/utils/mixins";
  import {
    auditStatusBgColor,
    auditStatusColor,
    auditStatusText,
    MessageError,
    MessageSuccess,
    MessageWarning
  } from "~/utils/utils";
  import FormSystemNormalDetail from "~/components/utils/formDetail/FormSystemNormalDetail.vue";
  import FormSystemH5NormalDetail from "~/components/utils/formDetail/FormSystemH5NormalDetail.vue";
  import vueEsign from "vue-esign/src/index.vue";
  export default {
    name: 'appServer',
    components: {FormSystemH5NormalDetail, FormSystemNormalDetail,vueEsign},
    layout: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        detailType: 1,
        detailOrderType: 1,
        detailInfoType: '',
        dataDetailObj: {},
        dataMainDetailObj: {},
        dataOrderDetailObj: {},
        dataOrderMainDetailObj: {},
        tableNormalDetailData: [],
        payableDataList: [],
        serialDataList: [],
        active: 1,
        tableData: [],
        loading: false,
        finished: false,
        popUpVisible: false,
        popCheckUpVisible: false,
        dialogSysVisible: false,
        refreshing: false,
        dialogSysTitle: '',
        detailData: '',
        detailPageData: {},
        detailCheckData: '',
        detailIndex: '',
        detailApplyContentData: [],
        detailApplyAuditList: [],
        detailCheckApplyContentData: [],
        detailCheckApplyAuditList: [],
        textarea: '',
        images: [],
        visibleNo: false,
        visibleYes: false,
        visibleSysNo: false,
        visibleSysYes: false,
        dialogWrite: false,
        dialogRangeDetail: false,
        detailApplyAuditUserData: {},
        detailCheckApplyAuditUserData: {},
        serchName: '',
        startTime: '',
        endTime: '',
        showCalendar: false,
        urgeDialog: false,
        btnLoading: false,
        dateTime: '',
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2030, 12, 1),
        totalAuthPage: 0,
        defaultMenuActive: '',
        isCollapse: false,
        serverAppList: [],
        departmentPath: '',
        departmentName: '',
        urgeName: '',
        uploadFileListUrl: common.upload_file,
        searchDept: [],
        processId: '',
        processIds: [],
        orderIndex: '',
        cascaderIndex: 1,
        lineWidth: 6,
        lineColor: '#000000',
        bgColor: '#F5f5f5',
        resultImg: '',
        isCrop: false,
        quality: 1,
        params: {},
        transUserId: '',
        transUserIdObj: {},
        signType: '',
        leftHeight: {
          'height': '100%',
          'width': '0%'
        },
        toggleTag: {
          'left': '0'
        }
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
      document.addEventListener("click", this.bodyCloseMenus);
    },
    beforeDestroy() {
      document.removeEventListener("click", this.bodyCloseMenus);
    },
    created() {
      this.active = 1;
      this.getDeptInfo(2);
      this.getProcessInfo();
      this.init();
      if (this.active == 6){
        this.initAppRecommend();
      }else {
        this.initAppServer();
      }
    },
    methods: {
      layoutInit(){

      },
      bodyCloseMenus(event){
        if (event.target.className.indexOf("info-block-right") != -1
          || event.target.className.indexOf("van-grid") != -1
          || event.target.className.indexOf("van-grid") != -1
          || event.target.className.indexOf("fa-times-circle") != -1
          || event.target.className.indexOf("header-class") != -1
          || event.target.className.indexOf("sub-menu-class") != -1
          || event.target.className.indexOf("info-block-header") != -1
          || event.target.className.indexOf("info-block-header-text") != -1
          || event.target.className.indexOf("fa-calendar") != -1
          || event.target.className.indexOf("content-block") != -1
          || event.target.className.indexOf("van-tab") != -1
          || event.target.className.indexOf("content-block-item") != -1
          || event.target.className.indexOf("van-field__control") != -1

        ){
          this.isCollapse = false;
          this.toggleLeftMenu();
        }
      },
      async initHt(page, form, coseInfoArray){
        let params = {
          page: 1,
          num: 9999
        };
        await  this.$axios.get(common.ht_list, {params: params, loading:false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              let payableDataList = [];
              if (res.data.data[i].payableDataList && res.data.data[i].payableDataList.length > 0){
                for (let j = 0; j < res.data.data[i].payableDataList.length; j++){
                  payableDataList.push({
                    label: "第"+res.data.data[i].payableDataList[j].stage+"期" + "("+"¥"+res.data.data[i].payableDataList[j].shouldAmount+")",
                    text: "第"+res.data.data[i].payableDataList[j].stage+"期" + "("+"¥"+res.data.data[i].payableDataList[j].shouldAmount+")",
                    value: res.data.data[i].payableDataList[j]._id,
                  });
                }
              }
              array.push({
                label: res.data.data[i]['applyData'] ? res.data.data[i]['applyData'].ht_name20230501.value : '',
                text: res.data.data[i]['applyData'] ? res.data.data[i]['applyData'].ht_name20230501.value : '',
                value: res.data.data[i]._id,
                kxList: payableDataList
              });
            }

            if (form && form.orderId && form.orderId != ''){
              for(let i = 0; i < array.length; i++){
                if (form.orderId == array[i].value){
                  form.kxList = array[i].kxList;
                }
              }
            }

            this.jumpPageParams(page, form, coseInfoArray);
          }
        });
      },
      initAppRecommend(value){
        let params = {
          appletId: this.appletId,
          categoryId: this.categoryId,
          departmentPath: this.departmentPath,
          formType: '',
          searchKey: this.searchKey
        };
        this.$axios.get(common.server_list_list3, {params: params}).then(res => {
          if (res.data.data){
            this.serverAppList = res.data.data;
          }
        });
      },
      initAppServer(value){
        let params = {
          appletType: this.active,
          searchKey: value
        };
        this.$axios.get(common.server_list_list, {params: params}).then(res => {
          if (res.data.data){
            this.serverAppList = res.data.data;
          }
        });
      },
      onLoad() {
        // 异步更新数据
        if (this.totalAuthPage == this.page){
          this.finished = true;
        }else {
          this.page = this.page + 1;
          this.finished = false;
          this.init();
        }
      },
      onRefresh() {
        this.loading = false;
        this.page = 1;
        this.totalAuthPage = 0;
        this.finished = false;
        this.tableData = [];
        this.init();
      },
      async init(){
        let params = {
          page: this.page ? this.page : 1,
          num: 20,
          status: this.type,
          beginTime: this.startTime,
          endTime: this.endTime,
          searchKey: this.searchKey,
          queryApplyListType: this.active,
          departmentPath: this.departmentPath,
          processId: this.processIds.length <= 0 ? '' : JSON.stringify(this.processIds)
        };
        await this.getSessionInfo();
        this.$axios.get(common.server_form_audit_page, {params: params,loading: false}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
              this.tableData = this.tableData.concat(res.data.data.list);
              this.total = res.data.data.total;
              this.num = res.data.data.num;
              this.page = res.data.data.page;
              this.totalAuthPage = res.data.data.pageCount;

              // 数据全部加载完成
              if (this.page == this.totalAuthPage) {
                this.finished = true;
              }
            }
          }
          this.loading = false;
        });
      },
      serverBlock(event){
        this.$router.push({
          path: '/app/appServerForm',
          query: {
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow
          }
        });
      },
      activeTabMenu(name){
        this.active = name;
        this.page = 1;
        this.finished = false;
        this.tableData = [];
        this.type = "";
        this.init();
      },
      changeDetailType(event, type){
        this.detailType = type;
      },
      returnIndex(){
        let page = this.$route.query.page ? this.$route.query.page : '/app/appIndex';
        this.$router.push({
          path: page,
          query: {
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      },
      dataDetail(event, item, index){
        //this.detailData = item;
        this.detailIndex = index;
        if (item.formCode && item.formCode != '' && item.formCode != 'OTHER'){
          if (item.status ==  -1){
            this.initAuditDetailList(item._id, 'edit', item.formCode);
          }else {
            if (item.formCode == 'PTGL'){
              this.dialogSysTitle = this.$t("普通申请单");
            }else if (item.formCode == 'CGHT'){
              this.dialogSysTitle = this.$t("采购合同单");
            }else if (item.formCode == 'XSHT'){
              this.dialogSysTitle = this.$t("销售合同单");
            }else if (item.formCode == 'TYHT'){
              this.dialogSysTitle = this.$t("通用合同单");
            }else if (item.formCode == 'JKGL'){
              this.dialogSysTitle = this.$t("借款单");
            }else if (item.formCode == 'SKD'){
              this.dialogSysTitle = this.$t("收款单");
            }else if (item.formCode == 'HKD'){
              this.dialogSysTitle = this.$t("还款单");
            }else if (item.formCode == 'BZBX'){
              this.dialogSysTitle = this.$t("报账报销");
            }else if (item.formCode == 'DGDK'){
              this.dialogSysTitle = this.$t("对公打款");
            }

            this.initAuditDetailList(item._id, 'detail', item.formCode);
            this.dialogSysVisible = true;
          }
        }else {
          if (item.applyContent  && item.applyContent != "[]"){
            this.detailApplyContentData = JSON.parse(item.applyContent);
          }
          this.initAuditDetailList(item._id, 'main');
          this.isCollapse = false;
          this.toggleLeftMenu();
          this.popUpVisible = true;
        }
      },
      detailCheckClick($event, id){
        this.initAuditDetailList(id, 'check');
        this.isCollapse = false;
        this.toggleLeftMenu();
        this.popCheckUpVisible = true;
      },
      async initAuditDetailList(id, type, formCode){
        let params = {
          id: id
        };
        await this.$axios.get(common.server_form_audit_query, {params: params}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
              if (type == 'main'){
                this.detailData = res.data.data;
                this.detailApplyAuditList = res.data.data.handleList;
                let orderIndex = res.data.data.orderIndex;
                for (let i = 0; i < res.data.data.handleList.length; i++){
                  if (res.data.data.handleList[i].orderIndex == orderIndex){
                    this.detailApplyAuditUserData = {
                      agreen1: res.data.data.handleList[i].agreed1,
                      notagreed1: res.data.data.handleList[i].notagreed1
                    };
                  }
                }
              }else if (type == 'edit'){
                if (formCode == 'JKGL'){
                  let deptArray = [];
                  let dataObj = res.data.data;

                  let dept = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.value : '';
                  let deptName = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.deptName : '';
                  //deptArray = dept != '' ? dept.split(",") : [];

                  let coseInfo = dataObj.applyData['cost_info20230501'] ? dataObj.applyData.cost_info20230501.value : '';
                  let coseInfoArray = coseInfo;

                  let fils = dataObj.applyData['jk_files20230501'] ? dataObj.applyData.jk_files20230501.value : [];
                  let filsName = dataObj.applyData['jk_files20230501'] ? dataObj.applyData.jk_files20230501.name : [];
                  let formObj = {
                    id: dataObj.id,
                    title: dataObj.applyData['jk_name20230501'] ? dataObj.applyData.jk_name20230501.value : '',
                    user: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.name : '',
                    userId: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.value : '',
                    dept: deptName,
                    deptId: dept,
                    des: dataObj.applyData['jk_des20230501'] ? dataObj.applyData.jk_des20230501.value : '',
                    jkTime: dataObj.applyData['jk_date20230501'] ? dataObj.applyData.jk_date20230501.value : '',
                    orderInfo: coseInfoArray.length > 0 ? '&nbsp;' : '',
                    orderInfoList: coseInfoArray,
                    hkTime: dataObj.applyData['hk_date20230501'] ? dataObj.applyData.hk_date20230501.value : '',
                    skAccount: dataObj.applyData['jk_account20230501'] ? dataObj.applyData.jk_account20230501.value : '',
                    skAccountName: dataObj.applyData['jk_account20230501'] ? dataObj.applyData.jk_account20230501.name : '',
                    files: fils,
                    fileNames: filsName,
                    object: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.name : '',
                    objectId: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.value : '',
                    order: dataObj.applyData['ht_id20230501'] ? dataObj.applyData.ht_id20230501.name : '',
                    orderId: dataObj.applyData['ht_id20230501'] ? dataObj.applyData.ht_id20230501.value : '',
                    tag: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.name : '',
                    tagId: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.value : ''
                  };
                  console.log(formObj);
                  this.jumpPageParams('app-appSystemJKGL', formObj, coseInfoArray);
                }else if (formCode == 'SKD'){
                  let deptArray = [];
                  let dataObj = res.data.data;

                  let dept = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.value : '';
                  let deptName = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.deptName : '';
                  deptArray = dept != '' ? dept.split(",") : [];

                  let coseInfo = dataObj.applyData['cost_info20230501'] ? dataObj.applyData.cost_info20230501.value : '';
                  let coseInfoArray = coseInfo;

                  let fils = dataObj.applyData['jk_files20230501'] ? dataObj.applyData.jk_files20230501.value : [];
                  let filsName = dataObj.applyData['jk_files20230501'] ? dataObj.applyData.jk_files20230501.name : [];

                  let formObj = {
                    id: dataObj.id,
                    title: dataObj.applyData['jk_name20230501'] ? dataObj.applyData.jk_name20230501.value : '',
                    user: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.name : '',
                    userId: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.value : '',
                    dept: deptName,
                    deptId: dept,
                    des: dataObj.applyData['jk_des20230501'] ? dataObj.applyData.jk_des20230501.value : '',
                    orderInfo: '',
                    orderInfoList: coseInfoArray,
                    skTime: dataObj.applyData['jk_date20230501'] ? dataObj.applyData.jk_date20230501.value : '',
                    skAccount: dataObj.applyData['jk_account20230501'] ? dataObj.applyData.jk_account20230501.value : '',
                    skAccountName: dataObj.applyData['jk_account20230501'] ? dataObj.applyData.jk_account20230501.name : '',
                    files: fils,
                    fileNames: filsName,
                    object: dataObj.applyData['rela_apply20230501'] ? dataObj.applyData.rela_apply20230501.name : '',
                    objectId: dataObj.applyData['rela_apply20230501'] ? dataObj.applyData.rela_apply20230501.value : '',
                    order: dataObj.applyData['ht_id20230501'] ? dataObj.applyData.ht_id20230501.name : '',
                    orderId: dataObj.applyData['ht_id20230501'] ? dataObj.applyData.ht_id20230501.value : '',
                    tag: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.name : '',
                    tagId: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.value : '',
                    kx: dataObj.applyData['ht_pay20230501'] ? dataObj.applyData.ht_pay20230501.name : '',
                    kxId: dataObj.applyData['ht_pay20230501'] ? dataObj.applyData.ht_pay20230501.value : '',
                    kxList: []
                  };
                  this.initHt('app-appSystemSKD', formObj, coseInfoArray);
                }else if (formCode == 'HKD'){
                  let deptArray = [];
                  let dataObj = res.data.data;

                  let dept = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.value : '';
                  let deptName = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.deptName : '';
                  deptArray = dept != '' ? dept.split(",") : [];

                  let coseInfo = dataObj.applyData['cost_info20230501'] ? dataObj.applyData.cost_info20230501.value : '';
                  let coseInfoArray = coseInfo;

                  let fils = dataObj.applyData['jk_files20230501'] ? dataObj.applyData.jk_files20230501.value : [];
                  let filsName = dataObj.applyData['jk_files20230501'] ? dataObj.applyData.jk_files20230501.name : [];

                  let formObj = {
                    id: dataObj.id,
                    title: dataObj.applyData['jk_name20230501'] ? dataObj.applyData.jk_name20230501.value : '',
                    user: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.name : '',
                    userId: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.value : '',
                    dept: deptName,
                    deptId: dept,
                    des: dataObj.applyData['jk_des20230501'] ? dataObj.applyData.jk_des20230501.value : '',
                    hkTime: dataObj.applyData['jk_date20230501'] ? dataObj.applyData.jk_date20230501.value : '',
                    orderInfo: '',
                    orderInfoList: coseInfoArray,
                    skAccount: dataObj.applyData['jk_account20230501'] ? dataObj.applyData.jk_account20230501.value : '',
                    skAccountName: dataObj.applyData['jk_account20230501'] ? dataObj.applyData.jk_account20230501.name : '',
                    files: fils,
                    fileNames: filsName,
                    object: dataObj.applyData['rela_apply20230501'] ? dataObj.applyData.rela_apply20230501.name : '',
                    objectId: dataObj.applyData['rela_apply20230501'] ? dataObj.applyData.rela_apply20230501.value : '',
                    order: dataObj.applyData['borrow_apply20230501'] ? dataObj.applyData.borrow_apply20230501.name : '',
                    orderId: dataObj.applyData['borrow_apply20230501'] ? dataObj.applyData.borrow_apply20230501.value : '',
                    tag: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.name : '',
                    tagId: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.value : '',
                  };
                  this.jumpPageParams('app-appSystemHKGL', formObj, coseInfoArray);
                }else if (formCode == 'PTGL'){
                  let deptArray = [];
                  let dataObj = res.data.data;

                  let dept = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.value : '';
                  let deptName = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.deptName : '';
                  deptArray = dept != '' ? dept.split(",") : [];

                  let coseInfo = dataObj.applyData['cost_info20230501'] ? dataObj.applyData.cost_info20230501.value : '';
                  let coseInfoArray = coseInfo;

                  let fils = dataObj.applyData['fk_files20230501'] ? dataObj.applyData.fk_files20230501.value : [];
                  let filsName = dataObj.applyData['fk_files20230501'] ? dataObj.applyData.fk_files20230501.name : [];

                  let formObj = {
                    id: dataObj.id,
                    title: dataObj.applyData['fk_name20230501'] ? dataObj.applyData.fk_name20230501.value : '',
                    user: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.name : '',
                    userId: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.value : '',
                    dept: deptName,
                    deptId: dept,
                    des: dataObj.applyData['fk_des20230501'] ? dataObj.applyData.fk_des20230501.value : '',
                    jkTime: '',
                    orderInfo: '',
                    orderInfoList: coseInfoArray,
                    hkTime: '',
                    skAccount: '',
                    skAccountName: '',
                    files: fils,
                    fileNames: filsName,
                    object: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.name : '',
                    objectId: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.value : '',
                    order: '',
                    orderId: '',
                    tag: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.name : '',
                    tagId: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.value : '',
                  };
                  this.jumpPageParams('app-appSystemPTGL', formObj, coseInfoArray);
                }else if (formCode == 'DGDK'){
                  let deptArray = [];
                  let dataObj = res.data.data;

                  let dept = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.value : '';
                  let deptName = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.deptName : '';
                  deptArray = dept != '' ? dept.split(",") : [];

                  let coseInfo = dataObj.applyData['cost_info20230501'] ? dataObj.applyData.cost_info20230501.value : '';
                  let coseInfoArray = coseInfo;

                  let fils = dataObj.applyData['fk_files20230501'] ? dataObj.applyData.fk_files20230501.value : [];
                  let filsName = dataObj.applyData['fk_files20230501'] ? dataObj.applyData.fk_files20230501.name : [];

                  let formObj = {
                    id: dataObj.id,
                    title: dataObj.applyData['fk_name20230501'] ? dataObj.applyData.fk_name20230501.value : '',
                    user: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.name : '',
                    userId: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.value : '',
                    dept: deptName,
                    deptId: dept,
                    des: dataObj.applyData['fk_des20230501'] ? dataObj.applyData.fk_des20230501.value : '',
                    fkTime: dataObj.applyData['fk_date20230501'] ? dataObj.applyData.fk_date20230501.value : '',
                    orderInfo: '',
                    orderInfoList: coseInfoArray,
                    hkTime: '',
                    skAccount: '',
                    skAccountName: '',
                    files: fils,
                    fileNames: filsName,
                    object: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.name : '',
                    objectId: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.value : '',
                    order: dataObj.applyData['ht_id20230501'] ? dataObj.applyData.ht_id20230501.name : '',
                    orderId: dataObj.applyData['ht_id20230501'] ? dataObj.applyData.ht_id20230501.value : '',
                    tag: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.name : '',
                    tagId: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.value : '',
                    dj: dataObj.applyData['rela_apply20230501'] ? dataObj.applyData.rela_apply20230501.name : '',
                    djId: dataObj.applyData['rela_apply20230501'] ? dataObj.applyData.rela_apply20230501.value : '',
                    gys: dataObj.applyData['supplierId20230501'] ? dataObj.applyData.supplierId20230501.name : '',
                    gysId: dataObj.applyData['supplierId20230501'] ? dataObj.applyData.supplierId20230501.value : '',
                    kx: dataObj.applyData['ht_pay20230501'] ? dataObj.applyData.ht_pay20230501.name : '',
                    kxId: dataObj.applyData['ht_pay20230501'] ? dataObj.applyData.ht_pay20230501.value : '',
                    kxList: []
                  };
                  this.initHt('app-appSystemDGDK', formObj, coseInfoArray);
                }else if (formCode == 'BZBX'){
                  let deptArray = [];
                  let dataObj = res.data.data;

                  let dept = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.value : '';
                  let deptName = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.deptName : '';
                  deptArray = dept != '' ? dept.split(",") : [];

                  let coseInfo = dataObj.applyData['cost_info20230501'] ? dataObj.applyData.cost_info20230501.value : '';
                  let coseInfoArray = coseInfo;

                  let fils = dataObj.applyData['bb_files20230501'] ? dataObj.applyData.bb_files20230501.value : [];
                  let filsName = dataObj.applyData['bb_files20230501'] ? dataObj.applyData.bb_files20230501.name : [];

                  let formObj = {
                    id: dataObj.id,
                    title: dataObj.applyData['bb_name20230501'] ? dataObj.applyData.bb_name20230501.value : '',
                    user: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.name : '',
                    userId: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.value : '',
                    dept: deptName,
                    deptId: dept,
                    des: dataObj.applyData['bb_des20230501'] ? dataObj.applyData.bb_des20230501.value : '',
                    bxTime: dataObj.applyData['jk_date20230501'] ? dataObj.applyData.jk_date20230501.value : '',
                    orderInfo: '',
                    orderInfoList: coseInfoArray,
                    skAccount: dataObj.applyData['my_account20230501'] ? dataObj.applyData.my_account20230501.value : '',
                    skAccountName: dataObj.applyData['my_account20230501'] ? dataObj.applyData.my_account20230501.name : '',
                    files: fils,
                    fileNames: filsName,
                    object: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.name : '',
                    objectId: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.value : '',
                    order: dataObj.applyData['borrow_apply20230501'] ? dataObj.applyData.borrow_apply20230501.name : '',
                    orderId: dataObj.applyData['borrow_apply20230501'] ? dataObj.applyData.borrow_apply20230501.value : '',
                    orderMoney: 0,
                    tag: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.name : '',
                    tagId: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.value : '',
                    dj: dataObj.applyData['rela_apply20230501'] ? dataObj.applyData.rela_apply20230501.name : '',
                    djId: dataObj.applyData['rela_apply20230501'] ? dataObj.applyData.rela_apply20230501.value : '',
                  };
                  this.jumpPageParams('app-appSystemBZBX', formObj, coseInfoArray);
                }else if (formCode == 'TYHT'){
                  let deptArray = [];
                  let dataObj = res.data.data;

                  let dept = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.value : '';
                  let deptName = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.deptName : '';
                  deptArray = dept != '' ? dept.split(",") : [];

                  let coseInfo = dataObj.applyData['cost_info20230501'] ? dataObj.applyData.cost_info20230501.value : '';
                  let coseInfoArray = coseInfo;

                  let fils = dataObj.applyData['ht_files20230501'] ? dataObj.applyData.ht_files20230501.value : [];
                  let filsName = dataObj.applyData['ht_files20230501'] ? dataObj.applyData.ht_files20230501.name : [];

                  let formObj = {
                    id: dataObj.id,
                    title: dataObj.applyData['ht_name20230501'] ? dataObj.applyData.ht_name20230501.value : '',
                    user: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.name : '',
                    userId: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.value : '',
                    dept: deptName,
                    deptId: dept,
                    des: dataObj.applyData['ht_des20230501'] ? dataObj.applyData.ht_des20230501.value : '',
                    hkTime: '',
                    orderInfo: '',
                    orderInfoList: [],
                    sqTime: dataObj.applyData['ht_time20230501'] ? dataObj.applyData.ht_time20230501.value : '',
                    skAccount: '',
                    skAccountName: '',
                    files: fils,
                    fileNames: filsName,
                    object: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.name : '',
                    objectId: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.value : '',
                    order: '',
                    orderId: '',
                    tag: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.name : '',
                    tagId: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.value : '',
                  };
                  this.jumpPageParams('app-appSystemTYHT', formObj, coseInfoArray);
                }else if (formCode == 'XSHT'){
                  let deptArray = [];
                  let dataObj = res.data.data;

                  let dept = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.value : '';
                  let deptName = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.deptName : '';
                  deptArray = dept != '' ? dept.split(",") : [];

                  let coseInfo = dataObj.applyData['cost_info20230501'] ? dataObj.applyData.cost_info20230501.value : '';
                  let coseInfoArray = coseInfo;

                  let fils = dataObj.applyData['ht_files20230501'] ? dataObj.applyData.ht_files20230501.value : [];
                  let filsName = dataObj.applyData['ht_files20230501'] ? dataObj.applyData.ht_files20230501.name : [];

                  let stage = dataObj.applyData['stage_id20230501'] ? dataObj.applyData.stage_id20230501.value : 0;
                  let stageArray = [];
                  for (let i = 0; i < stage; i++){
                    stageArray.push({
                      stage: dataObj.applyData['ht_payStage20230501_'+(i+1)].value,
                      rate: dataObj.applyData['ht_payRate20230501_'+(i+1)].value,
                      amount: dataObj.applyData['ht_payAmount20230501_'+(i+1)].value,
                      time: dataObj.applyData['ht_payTime20230501_'+(i+1)].value,
                      des: dataObj.applyData['ht_payDes20230501_'+(i+1)].value,
                    });
                  }
                  let formObj = {
                    id: dataObj.id,
                    title: dataObj.applyData['ht_name20230501'] ? dataObj.applyData.ht_name20230501.value : '',
                    user: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.name : '',
                    userId: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.value : '',
                    dept: deptName,
                    deptName: deptName,
                    deptId: dept,
                    des: dataObj.applyData['ht_des20230501'] ? dataObj.applyData.ht_des20230501.value : '',
                    orderInfo: '',
                    orderInfoList: [],
                    sqTime: dataObj.applyData['ht_time20230501'] ? dataObj.applyData.ht_time20230501.value : '',
                    skAccount: '',
                    skAccountName: '',
                    files: fils,
                    fileNames: filsName,
                    object: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.name : '',
                    objectId: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.value : '',
                    order: '',
                    orderId: '',
                    tag: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.name : '',
                    tagId: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.value : '',
                    gys: dataObj.applyData['ht_supplierId20230501'] ? dataObj.applyData.ht_supplierId20230501.name : '',
                    gysId: dataObj.applyData['ht_supplierId20230501'] ? dataObj.applyData.ht_supplierId20230501.value : '',
                    amount: dataObj.applyData['ht_amount20230501'] ? dataObj.applyData.ht_amount20230501.value : 0,
                    backMoneyIndex: '',
                    backMoney: stageArray
                  };
                  this.jumpPageParams('app-appSystemXSHT', formObj, coseInfoArray);
                }else if (formCode == 'CGHT'){
                  let deptArray = [];
                  let dataObj = res.data.data;

                  let dept = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.value : '';
                  let deptName = dataObj.applyData['apply_dept20230501'] ? dataObj.applyData.apply_dept20230501.deptName : '';
                  deptArray = dept != '' ? dept.split(",") : [];

                  let coseInfo = dataObj.applyData['cost_info20230501'] ? dataObj.applyData.cost_info20230501.value : '';
                  let coseInfoArray = coseInfo;

                  let fils = dataObj.applyData['ht_files20230501'] ? dataObj.applyData.ht_files20230501.value : [];
                  let filsName = dataObj.applyData['ht_files20230501'] ? dataObj.applyData.ht_files20230501.name : [];

                  let stage = dataObj.applyData['stage_id20230501'] ? dataObj.applyData.stage_id20230501.value : 0;
                  let stageArray = [];

                  for (let i = 0; i < stage; i++){
                    stageArray.push({
                      stage: dataObj.applyData['ht_payStage20230501_'+(i+1)].value,
                      rate: dataObj.applyData['ht_payRate20230501_'+(i+1)].value,
                      amount: dataObj.applyData['ht_payAmount20230501_'+(i+1)].value,
                      time: dataObj.applyData['ht_payTime20230501_'+(i+1)].value,
                      des: dataObj.applyData['ht_payDes20230501_'+(i+1)].value,
                    });
                  }
                  let formObj = {
                    id: dataObj.id,
                    title: dataObj.applyData['ht_name20230501'] ? dataObj.applyData.ht_name20230501.value : '',
                    user: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.name : '',
                    userId: dataObj.applyData['apply_user20230501'] ? dataObj.applyData.apply_user20230501.value : '',
                    dept: deptName,
                    deptName: deptName,
                    deptId: dept,
                    des: dataObj.applyData['ht_des20230501'] ? dataObj.applyData.ht_des20230501.value : '',
                    orderInfo: '',
                    orderInfoList: coseInfoArray,
                    sqTime: dataObj.applyData['ht_time20230501'] ? dataObj.applyData.ht_time20230501.value : '',
                    skAccount: '',
                    skAccountName: '',
                    files: fils,
                    fileNames: filsName,
                    object: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.name : '',
                    objectId: dataObj.applyData['xm_id20230501'] ? dataObj.applyData.xm_id20230501.value : '',
                    order: '',
                    orderId: '',
                    tag: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.name : '',
                    tagId: dataObj.applyData['tag_id20230501'] ? dataObj.applyData.tag_id20230501.value : '',
                    gys: dataObj.applyData['ht_supplierId20230501'] ? dataObj.applyData.ht_supplierId20230501.name : '',
                    gysId: dataObj.applyData['ht_supplierId20230501'] ? dataObj.applyData.ht_supplierId20230501.value : '',
                    amount: dataObj.applyData['ht_amount20230501'] ? dataObj.applyData.ht_amount20230501.value : 0,
                    backMoneyIndex: '',
                    backMoney: stageArray
                  };
                  this.jumpPageParams('app-appSystemCGHT', formObj, coseInfoArray);
                }
              }else if (type == 'check'){
                this.detailCheckData = res.data.data;
                this.detailCheckApplyAuditList = res.data.data.handleList;
                let orderIndex = res.data.data.orderIndex;
                for (let i = 0; i < res.data.data.handleList.length; i++){
                  if (res.data.data.handleList[i].orderIndex == orderIndex){
                    this.detailCheckApplyAuditUserData = {
                      agreen1: res.data.data.handleList[i].agreed1,
                      notagreed1: res.data.data.handleList[i].notagreed1
                    };
                  }
                }
              }else if (type == 'detail'){
                this.dataDetailObj = res.data.data['applyData'] ? res.data.data['applyData'] : {};
                this.dataMainDetailObj = res.data.data;
                this.detailApplyAuditList = res.data.data.handleList && res.data.data.handleList.length > 0 ? res.data.data.handleList : [];
                this.payableDataList = res.data.data.payableDataList;
                this.serialDataList = res.data.data.applyData && res.data.data.applyData['cost_info20230501'] ? res.data.data.applyData['cost_info20230501'].value : [];
                this.tableOrderDetailData = res.data.data.payableDataList;

                if (res.data.data.formCode == 'XMGL'){
                  this.initReal(id);
                }else if (res.data.data.formCode == 'XSHT' || res.data.data.formCode == 'CGHT' || res.data.data.formCode == 'TYHT'){
                  let ruleList = [];
                  //let count = res.data.data.applyData['ht_stage20230501'] ? res.data.data.applyData['ht_stage20230501'].value : 0;
                  if (res.data.data['payableDataList']){
                    for (let i = 0; i < res.data.data.payableDataList.length; i++){
                      ruleList.push({
                        stage: res.data.data.payableDataList[i].stage,
                        rate: res.data.data.payableDataList[i].rate,
                        amount: res.data.data.payableDataList[i].shouldAmount,
                        time: res.data.data.payableDataList[i].time,
                        des: res.data.data.payableDataList[i].des,
                      });
                    }
                  }
                  this.tableTagsDetailData = ruleList;
                }
              }
            }
          }
        });
      },
      initReal(id){
        let params = {
          id: id,
          page: 1,
          num: 9999
        };
        this.$axios.get(common.object_xm_real_page, {params: params}).then(res=> {
          if (res.data.code == 200) {
            this.payableDataList = res.data.data.list;
          }
        });
      },
      jumpPageParams(page, formObj, coseInfoArray){
        this.$router.push({
          name: page,
          query: {
            id: '',
            process: '',
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            page: '/app/appMyNotice',
            pageParent: '/app/appMyNotice',
            name: 'app-appMyNotice'
          },
          params: {
            formObj: formObj,
            orderInfoList: coseInfoArray
          }
        });
      },
      cancelSysPop(){
        this.detailData = '';
        this.detailApplyContentData = [];
        this.detailApplyAuditList = [];
        this.tableNormalDetailData = [];
        this.serialDataList = [];
        this.payableDataList = [];
        this.detailType = 1;
        this.textarea = '';
        this.images = [];
        this.visibleOk = false;
        this.visibleSysNo = false;
        this.visibleSysYes = false;
        this.dialogSysVisible = false;
        if (this.$refs['h5DialogRef']){
          this.$refs['h5DialogRef'].cancelPop();
        }
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
      handleCancel(){
        this.popUpVisible = false;
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

        if (data.sign == true && type == 1){
          this.lineWidth = 6;
          this.lineColor = '#000000';
          this.bgColor = '#F5f5f5';
          this.resultImg = '';
          this.isCrop = false;
          this.quality = 1;
          this.params = params;
          this.visibleYes = false;
          this.dialogWrite = true;
          return;
        }

        this.handleConfirm(params);
      },
      handleConfirm(params, done){
        let paramsTemp = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, paramsTemp, {loading: false}).then(res => {
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
      },
      readFile(file){//预览
        ImagePreview({
          images: [file],
          closeable: false,
        });
      },
      onSearch(value){
        this.searchKey = this.serchName;
        this.page = 1;
        this.totalAuthPage = 0;
        this.finished = false;
        this.type = "";
        this.tableData = [];
        this.init();
      },
      dropdownItem(event){
        this.type = event;
        this.page = 1;
        this.totalAuthPage = 0;
        this.finished = false;
        this.tableData = [];
        this.isCollapse = false;
        this.toggleLeftMenu();
        this.init();
      },
      onClear(){
        this.finished = false;
        this.serchName = "";
        this.searchKey = "";
        this.tableData = [];
        this.page = 1;
        this.totalAuthPage = 0;
        this.init();
      },
      clearSearch(){
        this.startTime = "";
        this.endTime = "";
        this.dateTime = "";
        this.tableData = [];
        this.page = 1;
        this.totalAuthPage = 0;
        this.finished = false;
        this.isCollapse = false;
        this.toggleLeftMenu();
        this.init();
      },
      resetProcessPop(){
        this.searchDept = [];
        this.processIds = [];
        this.$refs['SelectorDept'].clearCheckedNodes();
        this.page = 1;
        this.totalAuthPage = 0;
        this.finished = false;
        this.tableData = [];
        this.init();
      },
      cancelProcessPop(){
        // this.searchDept = [];
        // this.$refs['SelectorDept'].clearCheckedNodes();
        this.urgeDialog = false;
      },
      okProcessPop(){
        // if(this.processIds.length == 0){
        //   Toast(this.$t("请选择环节"));
        //   return;
        // }

        this.page = 1;
        this.totalAuthPage = 0;
        this.finished = false;
        this.type = "";
        this.tableData = [];
        this.init();

        this.urgeDialog = false;
      },
      calendarManage(){
        this.showCalendar = true;
      },
      formatDate(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      },
      formatDate2(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      onConfirm(date){
        const [start, end] = date;
        this.dateTime = `${this.formatDate2(start)} - ${this.formatDate2(end)}`;
        this.startTime = `${this.formatDate(start)}`;
        this.endTime = `${this.formatDate(end)}`;
        this.page = 1;
        this.totalAuthPage = 0;
        this.tableData = [];
        this.finished = false;
        this.init();
        this.showCalendar = false;
      },
      urgeDetial(){
        //this.getProcessInfo();
        this.urgeDialog = true;
      },
      toggleLeftMenu(event){
        this.isCollapse = false;
        this.leftHeight.width = "0%";
        this.toggleTag['left'] = "0px";
      },
      toggleRightMenu(event){
        this.isCollapse = true;
        this.leftHeight.width = "50%";
        this.toggleTag['left'] = "50%";
      },
      selMenu(event, item, index){
        this.departmentPath = item.department_path;
        this.defaultMenuActive = index + '';
        this.page = 1;
        this.tableData = [];
        this.departmentName = item.department_name;

        if (!item['children']){
          this.isCollapse = false;
          this.toggleLeftMenu();
        }
        this.init();
      },
      clearSearchDept(){
        this.departmentPath = "";
        this.defaultMenuActive = '';
        this.page = 1;
        this.tableData = [];
        this.departmentName = "";
        this.isCollapse = false;
        this.urgeName = "";
        this.searchDept = [];
        this.processId = '';
        this.orderIndex = '';
        this.processIds = [];
        this.toggleLeftMenu();
        this.init();
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
      clearImage(event, index){
        this.images.splice(index, 1);
      },
      searchProcess(event){
        //console.log(this.$refs['SelectorDept']);
        // this.page = 1;
        // this.totalAuthPage = 0;
        // this.finished = false;
        // this.type = "";
        // this.tableData = [];
        this.processId = '';
        this.orderIndex = '';
        this.urgeName = '';
        this.processIds = [];
        // if(event.length == 1){
        //   this.processId = event[0];
        //   this.urgeName = this.$refs['SelectorDept'].checkedNodePaths[0][0].label;
        // }else if(event.length == 2){
        //   this.processId = event[0];
        //   this.orderIndex = event[1];
        //   this.urgeName = this.$refs['SelectorDept'].checkedNodePaths[0][1].label;
        // }
        this.processIds = event;
        this.searchDept = event;
        //this.init();
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
      closeDialog(){
        this.params = {};
        if (this.$refs['esign']){
          this.$refs.esign.reset()
        }
      },
      closeRangeDialog(){
        this.transUserId = '';
        this.dialogRangeDetail = false;
      },
      onBeforeClose(action, done) {
        // 点击了确定按钮
        if (action === "confirm") {
          let _self = this;
          this.$refs.esign.generate().then(res => {
            _self.params['signStr'] = res;
            _self.params['schoolAccountId'] = this.account;
            _self.params['amount'] = this.amount;

            _self.handleConfirm(_self.params, done);

            if (this.$refs['esign']){
              this.$refs.esign.reset()
            }
          }).catch(err => {
            Toast(this.$t("签名错误"));
            return done(false);
          })
        }
        // 点击了取消按钮
        else {
          if (this.$refs['esign']){
            this.$refs.esign.reset()
          }
          done(true);
        }
      },
      sianRange(event, type){
        this.signType = type;
        this.dialogRangeDetail = true;
      },
      sianClick(event){
        let params = {
          id: this.detailData.id ? this.detailData.id : this.detailData.id,
          status: this.signType,
          transUserId: this.transUserId,
          des: ''
        };
        this.handleConfirm(params);
      },
      okRangeDialog(){
        if (this.transUserId == ''){
          Toast(this.$t("请选择人员!"));
          return;
        }
        this.sianClick();
        this.dialogRangeDetail = false;
      }
    }
  }
</script>

<style scoped>
.container {

}
.header-title-block{
  height: 60px;
  /*line-height: 60px;*/
  width: 100%;
}
.content-block{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #FFFFFF;
}
.content-block-item{
  background: #f5f5f5;
  border-radius: 5px;
  margin-bottom: 10px;
}
.title-block-tag{
  display: inline-block;
  height: 20px;
  width: 3px;
  background: #E6A23C;
  font-weight: bold;
  border-radius: 3px;
}
.title-block-text{
  font-weight: bold;
  position: relative;
  top: -5px;
}
.detail-block-title{
  border-radius: 5px;
  background: #ffffff;
}
.content-block-item-tag{
  border-top-right-radius: 5px;
  padding: 5px;
  font-size: 12px;
  position: absolute;
  right: 0px;
  top: 0px;
}
.moon-left-menu-tag{
  position: absolute;
  top: 0;
  bottom: 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  left: 50%;
  transition: all .2s ease-in-out;
  z-index: 99;
}
.moon-left-menu-tag .moon-left-menu-tag-container {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}
.moon-left-menu-tag .moon-left-menu-tag_indicator {
  margin-top: -44.5px;
  width: 15px;
  height: 40px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #EBEEF5;
  border-radius: 0 4px 4px 0;
  border: 1px solid #e5e5e5;
  border-left-color: transparent;
  opacity: 1;
  /*transition-property: background-color,opacity;*/
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  color: #dddddd;
  padding-right: 2px;
}
.moon-left-menu-tag_indicator:hover{
  background: rgb(160, 207, 255);
  color: #FFFFFF;
}
.moon-left-toogle-menu{
  border-right: 1px solid #dcdee2;
  /*overflow-y: auto;*/
  float: left;
  box-shadow: 2px 0px 4px #bbbbbb;
  position: relative;
  background: #f2f2f2;
  background-image: linear-gradient(to bottom, #f2f2f2 , #f2f2f2);
  padding: 0px 0px;
  position: fixed;
  transition: all .2s ease-in-out;
  user-select: none;
  z-index: 99;
}
.icon-class-left{
  color: #dddddd;
  transform: rotate(0deg);
}
.icon-class-right{
  transform: rotate(180deg);
}
.info-block-header{
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  color: #909399;
  background: #e9e9e9;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px dashed #dddddd;
  font-size: 12px;
}
.sys-top-block{
  padding: 10px;
  border-radius: 5px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px #909399;
}
.write-header-block{
  height: 30px;
  position: relative;
  top: -10px;
  text-align: center
}
.write-item-block{
  width: 100%;
  height: 100%;
  text-align: center;
}
.write-item-left-block{
  border-right: 1px solid #ebebeb;
}
</style>
