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
                <el-option label="撤销" value="-1"></el-option>
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
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="line-height" v-if="item.formApplyNo"></div>
                    <div class="margin-top-5">
                      [<span class="color-warning">{{ item.applyUserName }}</span>]
                      <span>{{$t("提交的")}}</span>
                      [<span class="color-warning moon-content-text-ellipsis-class" style="max-width: 120px;display: inline-block;position: relative; top: 3px">{{ item.formName }}</span>]
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
                      <label v-if="item.status === -1" class="color-danger">{{$t("撤销")}}</label>
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
                <el-button v-else size="mini" @click="handleCancel">取 消</el-button>
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
                <el-tag type="warning" size="small" v-if="detailData.status == -1" class="text-center color-white">已撤销</el-tag>
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
            </el-row>
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
<!--            <div class="block-item-row font-bold margin-bottom-5" v-for="(item, index) in detailApplyContentData">-->
<!--              <span class="color-muted" style="position: relative;top: -3px">{{item.title}}: </span>-->
<!--              <el-tooltip class="item" effect="dark" :content="item.value" placement="top">-->
<!--                  <span class="moon-content-text-ellipsis-class" style="max-width: 300px;display: inline-block">-->
<!--                    {{ item.value }}-->
<!--                  </span>-->
<!--              </el-tooltip>-->
<!--            </div>-->
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
                          <label v-if="itemUser.status === -1" class="color-warning">{{$t("撤销")}}</label>
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
            <div class="text-center">
              &nbsp;
            </div>
          </el-col>
          <el-col :span="6">
            <div class="text-center" @click="cancelProcessPop">
              <a href="javascript:;" class="color-muted">{{$t("取消")}}</a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div :style="divHeight18">
        <el-cascader-panel ref="SelectorDept" :style="{ height: '350px' }" :props="{multiple: true,checkStrictly:false}" v-model="searchDept" :options="dataProcessList" @change="searchProcess"></el-cascader-panel>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";
  import { Toast } from 'vant';
  import { ImagePreview } from 'vant'

  import mixins from "~/utils/mixins";
  import {MessageError, MessageSuccess} from "~/utils/utils";
  export default {
    name: 'appServer',
    layout: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        active: 1,
        tableData: [],
        loading: false,
        finished: false,
        popUpVisible: false,
        refreshing: false,
        detailData: '',
        detailIndex: '',
        detailApplyContentData: [],
        detailApplyAuditList: [],
        textarea: '',
        images: [],
        visibleNo: false,
        visibleYes: false,
        detailApplyAuditUserData: {},
        serchName: '',
        startTime: '',
        endTime: '',
        showCalendar: false,
        urgeDialog: false,
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
      returnIndex(){
        this.$router.push({
          path: '/app/appIndex',
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
        if (item.applyContent  && item.applyContent != "[]"){
          this.detailApplyContentData = JSON.parse(item.applyContent);
        }
        this.initAuditDetailList(item._id);
        this.isCollapse = false;
        this.toggleLeftMenu();
        this.popUpVisible = true;
      },
      initAuditDetailList(id){
        let params = {
          id: id
        };
        this.$axios.get(common.server_form_audit_query, {params: params}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
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
            }
          }
        });
      },
      cancelPop(){
        this.textarea = '';
        this.images = [];
        this.visibleOk = false;
        this.visibleNo = false;
        this.visibleYes = false;
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

        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, params).then(res => {
          if (res.data.code == 200){
            this.tableData.splice(this.detailIndex, 1);
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
        this.getDeptInfo(2);
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
        this.page = 1;
        this.totalAuthPage = 0;
        this.finished = false;
        this.type = "";
        this.tableData = [];
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
        this.processIds = event
        this.searchDept = event;
        this.init();
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
</style>
