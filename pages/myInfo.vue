<template>
  <div class="container" ref="myInfoRef">
    <div class="pull-left block-left" :style="divHeight">
      <div class="block-left-top-item" :style="{height: divHeight.height1 * 0.43 + 'px'}">
        <div class="block-item-title padding-lr-10">
          <el-row>
            <el-col :span="24">
              <div class="color-muted font-bold font-size-12">
                <span>
                  <i class="fa fa-volume-up"></i>
                  <label>{{$t("我的收藏")}}</label>
                </span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="margin-top-10 padding-lr-10 font-size-12 color-white" :style="{height: divHeight.height1 * 0.43 - 60 + 'px', 'overflow-y': 'auto'}">
          <div class="block-item-item color-sub-title">
            <div v-if="collectionList.length == 0" class="text-center">
              <span class="color-muted">{{$t("暂无数据")}}</span>
            </div>
            <el-row v-if="collectionList.length > 0" v-for="(item, index) in collectionList" :key="index" class="border-bottom-1">
              <el-col :span="16">
                <div class="moon-content-text-ellipsis-class">
                  <img src="" class="block-icon1-class">
                  <label>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</label>
                </div>
              </el-col>
              <el-col :span="8" class="text-right">
                <span class="color-grand font-bold">{{$t("进入")}}</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="block-left-bottom-item" :style="{height: divHeight.height1 * 0.4 + 'px'}">
        <div class="block-item-title padding-lr-10">
          <el-row>
            <el-col :span="12">
              <div class="color-muted font-bold font-size-12">
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
        <div class="margin-top-10 padding-lr-10 font-size-12 color-white" :style="{height: divHeight.height1 * 0.43 - 70 + 'px', 'overflow-y': 'auto'}">
          <div class="block-item-item color-sub-title">
            <div v-if="noticeList.length == 0" class="text-center">
                <span class="color-muted">{{$t("暂无数据")}}</span>
            </div>
            <el-row v-if="noticeList.length > 0" v-for="(item, index) in noticeList" :key="index">
              <el-col :span="16">
                <div class="moon-content-text-ellipsis-class">
                  <span>
                    <i class="fa fa-volume-up"></i>
                    <label>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</label>
                  </span>
                </div>
              </el-col>
              <el-col :span="8" class="text-right">
                <span>2022-11-11</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="block-right" :style="divHeight">
      <div class="block-right-top-item" :style="{height: divHeight.height1 * 0.86 + 10 + 'px'}">
        <div>
          <div class="pull-left block-item-left-tag-menu">
            <div class="block-item-left-header text-center color-sub-title">
              <i class="fa fa-user"></i>
              <span>{{$t("个人中心")}}</span>
            </div>
            <div :style="{height: divHeight.height1 * 0.86 - 35 + 'px', 'overflowY': 'auto'}">
              <div class="block-item-left-header-item" @click="activeMenuClick($event, 1)" :class="activeMenu == 1 ? 'left-menu-active' : ''">
                <span>{{$t("我待办的")}}</span>
              </div>
              <div class="block-item-left-header-item" @click="activeMenuClick($event, 2)" :class="activeMenu == 2 ? 'left-menu-active' : ''">
                <span>{{$t("我发起的")}}</span>
              </div>
              <div class="block-item-left-header-item" @click="activeMenuClick($event, 4)" :class="activeMenu == 4 ? 'left-menu-active' : ''">
                <span>{{$t("我已办的")}}</span>
              </div>
              <div class="block-item-left-header-item" @click="activeMenuClick($event, 3)" :class="activeMenu == 3 ? 'left-menu-active' : ''">
                <span>{{$t("抄送我的")}}</span>
              </div>
            </div>
          </div>
          <div class="block-item-right-tag-content" :style="{height: divHeight.height1 + 'px'}">
            <el-table
              ref="refTable"
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableHeight.height"
              style="width: 100%">
<!--              <el-table-column-->
<!--                align="center"-->
<!--                :label="$t('业务编号')">-->
<!--                <template slot-scope="scope">-->
<!--                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--                    <div class="text-center">1</div>-->
<!--                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">-->
<!--                        1-->
<!--                    </span>-->
<!--                  </el-popover>-->
<!--                </template>-->
<!--              </el-table-column>-->
              <el-table-column
                align="center"
                :label="$t('申请日期')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{$moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm")}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{$moment(scope.row.applyTime).format("YYYY-MM-DD HH:mm")}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('名称')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{scope.row.formName}}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.formName}}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('部门/班级')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.departmentName">{{scope.row.departmentName}}</label>
                      <label v-if="scope.row.className">{{scope.row.className}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.departmentName">{{scope.row.departmentName}}</label>
                      <label v-if="scope.row.className">{{scope.row.className}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('状态')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.status === -1" class="color-warning">{{$t("撤销")}}</label>
                      <label v-if="scope.row.status === 0" class="color-warning">{{$t("待审核")}}</label>
                      <label v-if="scope.row.status === 3" class="color-success">{{$t("通过")}}</label>
                      <label v-if="scope.row.status === 4" class="color-danger">{{$t("未通过")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.status === -1" class="color-warning">{{$t("撤销")}}</label>
                      <label v-if="scope.row.status === 0" class="color-warning">{{$t("待审核")}}</label>
                      <label v-if="scope.row.status === 3" class="color-success">{{$t("通过")}}</label>
                      <label v-if="scope.row.status === 4" class="color-danger">{{$t("未通过")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('更新时间')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.handleTime">{{$moment(scope.row.handleTime).format("YYYY-MM-DD HH:mm")}}</label>
                      <label v-else>--</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.handleTime">{{$moment(scope.row.handleTime).format("YYYY-MM-DD HH:mm")}}</label>
                      <label v-else>--</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="100"
                :label="$t('操作')">
                <template slot-scope="scope">
                  <a href="javascript:;" class="color-grand" @click="detailClick($event, scope.row)">{{$t("详情")}}</a>
                </template>
              </el-table-column>
            </el-table>
            <div class="layout-right-footer text-right">
              <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
            </div>
          </div>
        </div>
        <div class="moon-clearfix"></div>
      </div>
    </div>
    <div class="moon-clearfix"></div>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDialog" :visible="dialogServerDetail" size="600px" :title="$t('详情')" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <div class="detail-block-title padding-lr-10 padding-tb-10 font-size-12">
          <el-row>
            <el-col :span="12">
              <span>{{$t("申请人")}}:</span>
              <span>{{ detailData.applyUserName }}</span>
            </el-col>
            <el-col :span="12">
              <span>{{$t("学号/工号")}}:</span>
              <span>{{ detailData.userNo }}</span>
            </el-col>
          </el-row>
          <el-row class="margin-top-5">
            <el-col :span="12">
              <span>{{$t("服务名称")}}:</span>
              <span>{{ detailData.formName }}</span>
            </el-col>
            <el-col :span="12">
              <span>{{$t("班级/部门")}}:</span>
              <span>
                <label v-if="detailData.userType == 5">{{ detailData.className }}</label>
                <label v-if="detailData.userType == 4">{{ detailData.departmentName }}</label>
              </span>
            </el-col>
          </el-row>
          <el-row class="margin-top-5">
            <el-col :span="12">
              <span>{{$t("申请日期")}}:</span>
              <span>{{ $moment(detailData.applyTime).format("YYYY-MM-DD HH:mm") }}</span>
            </el-col>
          </el-row>
        </div>
        <div class="margin-top-10">
            <div class="color-muted margin-top-5 font-size-12 border-bottom-1">
              <span>
                <label class="title-block-tag"></label>
                <label class="title-block-text color-warning">{{$t("申请内容")}}</label>
              </span>
            </div>
            <div class="block-item-bg font-size-12 margin-top-10 color-sub-title">
              <template v-for="(item, index) in detailApplyContentData">
                <div v-if="item.type != 'fc-editor' && item.type != 'upload'" class="block-item-row padding-lr-10 font-bold">
                  <span class="color-muted" style="position: relative;top: -13px">{{item.title}}: </span>
                  <el-tooltip class="item" effect="dark" :content="item.value" placement="top">
                    <span class="moon-content-text-ellipsis-class" style="max-width: 400px;display: inline-block">
                      {{ item.value }}
                    </span>
                  </el-tooltip>
                </div>
                <div v-else-if="item.type != 'fc-editor' && item.type == 'upload'" class="padding-lr-10 font-bold">
                  <span v-if="!item.value || item.value.length <= 0" class="color-muted" style="position: relative;top: 10px">{{item.title}}: </span>
                  <span v-else class="color-muted" style="position: relative;top: -13px">{{item.title}}: </span>
                  <span v-if="!item.value || item.value.length <= 0">
                    <div style="height: 20px;line-height: 20px"></div>
                  </span>
                  <span v-else class="custom-avatar" style="display: inline-block;margin-right: 5px;" v-for="(itemImg, indexImg) in item.value" :key="indexImg">
<!--                    <el-avatar shape="square" size="small" :src="itemImg"></el-avatar>-->
                    <el-image style="width: 30px; height: 30px"
                              :src="itemImg"
                              :preview-src-list="item.value">
                    </el-image>
                  </span>
                </div>
                <div v-else class="padding-lr-10">
                  <span class="color-muted font-bold" style="position: relative;top: -150px">{{item.title}}: </span>
                  <div v-if="item.type == 'fc-editor'"  v-html="item.value" style="max-width: 400px;height: 150px;overflow-y:auto;display: inline-block;border: 1px solid #dddddd;border-radius: 5px;width: 100%;padding: 10px">
                  </div>
                </div>
              </template>
            </div>
        </div>
        <div class="margin-top-10">
          <div class="color-muted margin-top-5 font-size-12 border-bottom-1">
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
                    {{ $t("审批") }}
                    <label v-if="item.andor == 'and'"> ({{ $t("与签") }}) </label>
                    <label v-if="item.andor == 'or'"> ({{ $t("或签") }}) </label>
                  </span>
                  <span v-if="item.nodeType == 'cc'" class="color-warning">{{ $t("抄送") }}</span>
                </div>
                <div slot="description" class="font-size-12 color-sub-title">
                  <div>
                    <template v-if="item.nodeType == 'handle'">
                      <div v-for="(itemUser, indexUser) in item.handleUserList" :key="indexUser">
                        <span class="color-grand"> <i class="fa fa-user"></i> {{ itemUser.userName }} </span>
                        <span class="margin-left-10">
                          <label v-if="itemUser.status === -1" class="color-warning">{{$t("撤销")}}</label>
                          <label v-if="itemUser.status === 0" class="color-warning">{{$t("待审核")}}</label>
                          <label v-if="itemUser.status === 3" class="color-success">{{$t("通过")}}</label>
                          <label v-if="itemUser.status === 4" class="color-danger">{{$t("未通过")}}</label>
                          <label v-if="itemUser.status === 1" class="color-warning">{{$t("已通过")}}</label>
                          <label v-if="itemUser.status === 2" class="color-warning">{{$t("已驳回")}}</label>
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

      <div slot="footer">
        <template v-if="activeMenu == 1">
          <div class="text-right padding-lr-10">
            <el-button size="small" @click="handleCancel">取 消</el-button>
            <el-button size="small" type="success" @click="handleOk($event, detailData, 1)">同 意</el-button>
<!--            <el-button size="small" type="primary" @click="handleOk($event, detailData, 6)">转 交</el-button>-->
<!--            <el-button size="small" type="primary" @click="handleOk($event, detailData, -1)">撤 销</el-button>-->
            <el-popover
              placement="top"
              width="200"
              @hide="cancelPop"
              v-model="visibleNo">
              <div class="margin-bottom-10">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="textarea">
                </el-input>
              </div>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="cancelPop">取消</el-button>
                <el-button type="primary" size="mini" @click="handleOk($event, detailData, 2)">确定</el-button>
              </div>
              <el-button slot="reference" type="warning" size="small">{{$t("驳回")}}</el-button>
            </el-popover>
          </div>
        </template>
        <template v-if="activeMenu == 2">
          <div class="text-right padding-lr-10">
            <el-button size="small" @click="handleCancel">取 消</el-button>
            <el-button size="small" type="primary" @click="handleOk($event, detailData, -1)">撤 销</el-button>
          </div>
        </template>
        <template v-if="activeMenu == 4">
          <div v-if="detailData.status == 5" class="text-center bg-warning color-white" @click="handleCancel">无需审批</div>
          <div v-if="detailData.status == 8" class="text-center bg-warning color-white" @click="handleCancel">审批中</div>
          <div v-if="detailData.status == -1" class="text-center bg-warning color-white" @click="handleCancel">已撤销</div>
          <div v-if="detailData.status == 3" class="text-center bg-success color-white" @click="handleCancel">通过</div>
          <div v-if="detailData.status == 4" class="text-center bg-danger color-white" @click="handleCancel">未通过</div>
        </template>
      </div>
    </drawer-layout-right>

    <!--服务-->
    <my-server-dialog :visible="dialogServer" width-style="850px" :data="serverDetailData" @close="closeDialog" @detailClick="detailClick"></my-server-dialog>
  </div>
</template>

<script>
  import mixins from "../utils/mixins";
  import {common} from "../utils/api/url";
  import DialogNormal from "~/components/utils/dialog/DialogNormal";
  import {MessageError, MessageSuccess} from "~/utils/utils";
  export default {
    name: 'index',
    mixins: [mixins],
    components: {DialogNormal},
    data(){
      return {
        activeTab: 1,
        activeMenu: 1,
        auditStatus: 1,
        dialogServer: false,
        dialogServerDetail: false,
        testArea: '',
        collectionList: [],
        noticeList: [],
        auditList: [],
        tableData: [],
        detailData: '',
        detailApplyContentData: [],
        detailApplyAuditList: [],
        textarea: '',
        visibleOk: false,
        visibleNo: false,
        serverDetailData: {},
        show: false,
        index: 0,
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.initAuditList();
      this.init();
      this.$parent.$parent.searchServerBlock = false;
    },
    methods: {
      layoutInit(){

      },
      async init(){
        await this.getSessionInfo();
      },
      initAuditList(){
        let params = {
          page: this.page,
          num: this.num,
          queryApplyListType: this.activeMenu
        };
        this.$axios.get(common.server_form_audit_page, {params: params}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
              this.tableData = res.data.data.list;
              this.total = res.data.data.total;
              this.num = res.data.data.num;
              this.page = res.data.data.page;
            }
          }
        });
      },
      initAuditDetailList(id){
        let params = {
          id: id
        };
        this.$axios.get(common.server_form_audit_query, {params: params}).then(res=>{
          if (res.data.code == 200){
            if (res.data.data){
              console.log(res.data.data.handleList);
              this.detailApplyAuditList = res.data.data.handleList;
            }
          }
        });
      },
      tabClick(data){
        this.activeTab = data;
      },
      menuClick(event, item){
        item.active = true;
      },
      serverClick($event, item){
        this.serverDetailData = item;
        this.dialogServer = true;
      },
      closeDialog(event){
        this.detailData = '';
        this.detailApplyContentData = [];
        this.detailApplyAuditList = [];
        this.dialogServer = false;
        this.dialogServerDetail = false;
      },
      cancelDialog(){
        this.dialogServer = false;
      },
      cancelDrawDialog(){
        this.dialogServerDetail = false;
      },
      sizeChange(event){
        this.page = 1;
        this.num = event;
        this.initAuditList();
      },
      currentPage(event){
        this.page = event;
        this.initAuditList();
      },
      jumpPage(data){
        this.page = data;
        this.initAuditList();
      },
      detailClick($event, item){
        this.detailData = item;
        if (item.applyContent  && item.applyContent != "[]"){
          this.detailApplyContentData = JSON.parse(item.applyContent);
        }
        console.log(this.detailApplyContentData);
        this.initAuditDetailList(item._id);
        this.dialogServerDetail = true;
      },
      activeMenuClick(event, type){
        this.activeMenu = type;
        this.page = 1;
        this.initAuditList();
      },
      cancelPop(){
        this.textarea = '';
        this.visibleOk = false;
        this.visibleNo = false;
      },
      handleCancel(){
        this.dialogServerDetail = false;
      },
      handleOk(event, data, type){
        let params = {
          id: data._id,
          status: type,
          des: this.textarea
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_form_audit_handle, params).then(res => {
          if (res.data.code == 200){
            this.initAuditList();
            this.dialogServerDetail = false;
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      }
    }
  }
</script>

<style scoped>
.container {

}
.block-left-item{
  margin: 0 auto;
  height: 100%;
  width: 100%;
}

.block-right-item{
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
.block-left-top-item{
  background: rgba(255,255,255, 0.9);
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
}
.block-left-bottom-item{
  background: rgba(255,255,255, 0.9);
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: 0px 0px 10px #909399;
}
.block-right-top-item{
  background: rgba(255,255,255, 0.9);
  width: 95%;
  margin: 0 auto;
  margin-top: 40px;
  box-shadow: 0px 0px 10px #909399;
}
.block-right-bottom-item{
  background: rgba(255,255,255, 0.9);
  width: 95%;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: 0px 0px 10px #909399;
}
.block-logo-class{
  position: relative;
  top: 40px;
}
.block-logotext-class{
  position: relative;
  top: 50px;
  font-size: 16px;
}
.block-item-title{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #C0C4CC;
}
.block-item-item{
  height: 35px;
  line-height: 35px;
}
.block-icon-class{
  height: 15px;
  width: 15px;
  position: relative;
  top: 3px
}
.block-icon1-class{
  height: 15px;
  width: 15px;
  position: relative;
  top: 3px
}
.block-item-left-tag-menu{
  width: 140px;
  height: 100%;
  background: rgba(246,246,246, 0.9);
}
.block-item-left-header{
  height: 44px;
  line-height: 44px;
  font-size: 12px;
  border-bottom: 1px solid #EBEEF5;
}
.block-item-left-header-item{
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
}
.block-item-right-tag-content{
  margin-left: 140px;
  height: 100%;
}
.block-item-header-tab{
  display: inline-block;
  padding: 0px 10px;
  cursor: default;
}
.left-menu-active{
  background: rgba(0,160,233, 0.8);
  color: #FFFFFF;
}
.detail-block-title{
  border-radius: 5px;
  background: #f6f6f6;
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
.block-item-row{
  height: 35px;
  line-height: 35px;
}
</style>
