<template>
  <div class="container">
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
            <el-row v-for="n in 20" :key="n" class="border-bottom-1">
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
            <el-row v-for="n in 8" :key="n">
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
              <div class="block-item-left-header-item" :class="activeMenu == 0 ? 'left-menu-active' : ''">
                <span>{{$t("我待办的")}}</span>
                <span>(0)</span>
              </div>
              <div class="block-item-left-header-item" :class="activeMenu == 1 ? 'left-menu-active' : ''">
                <span>{{$t("我发起的")}}</span>
                <span>(0)</span>
              </div>
              <div class="block-item-left-header-item" :class="activeMenu == 2 ? 'left-menu-active' : ''">
                <span>{{$t("我已办的")}}</span>
                <span>(0)</span>
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
              <el-table-column
                align="center"
                :label="$t('业务编号')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">1</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        1
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('申请日期')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">1</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        1
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('名称')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">1</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        1
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('服务部门')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">1</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        1
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('进度')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">1</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        1
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                :label="$t('更新时间')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">1</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        1
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="100"
                :label="$t('操作')">
                <template slot-scope="scope">
                  <a href="javascript:;" class="color-grand" @click="detailClick">{{$t("详情")}}</a>
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
              <span>xxx</span>
            </el-col>
            <el-col :span="12">
              <span>{{$t("学号/工号")}}:</span>
              <span>xxx</span>
            </el-col>
          </el-row>
          <el-row class="margin-top-5">
            <el-col :span="12">
              <span>{{$t("服务名称")}}:</span>
              <span>xxx</span>
            </el-col>
            <el-col :span="12">
              <span>{{$t("班级/部门")}}:</span>
              <span>xxx</span>
            </el-col>
          </el-row>
          <el-row class="margin-top-5">
            <el-col :span="12">
              <span>{{$t("申请日期")}}:</span>
              <span>xxx</span>
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
              <div class="block-item-row padding-lr-10 font-bold" v-for="n in 5">
                <span class="color-muted">字段A: </span>
                <span>xxxxxxx</span>
              </div>
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
              <el-step v-for="(item, index) in 5" :key="index">
                <div slot="icon">
                  <i class="fa fa-flag" style="font-size: 12px"></i>
                </div>
                <div slot="title" class="font-size-12">
                  步骤 1
                </div>
                <div slot="description" class="font-size-12">
                  描述性文字
                </div>
              </el-step>
            </el-steps>
          </div>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "../utils/mixins";
  import {common} from "../utils/api/url";
  import DialogNormal from "~/components/utils/dialog/DialogNormal";
  export default {
    name: 'index',
    mixins: [mixins],
    components: {DialogNormal},
    data(){
      return {
        activeTab: 1,
        activeMenu: 1,
        dialogServer: false,
        dialogServerDetail: false,
        testArea: '',
        tableData: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.init();
    },
    methods: {
      layoutInit(){

      },
      async init(){
        await this.getSessionInfo();
      },
      tabClick(data){
        this.activeTab = data;
      },
      menuClick(event, item){
        item.active = true;
      },
      serverClick($event, item){
        this.dialogServer = true;
      },
      closeDialog(event){
        this.dialogServer = false;
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
        this.init();
      },
      currentPage(event){
        this.page = event;
        this.init();
      },
      jumpPage(data){
        this.page = data;
        this.init();
      },
      detailClick(){
        this.dialogServerDetail = true;
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
