<template>
  <div class="container">
    <div class="pull-left block-left" :style="divHeight">
      <div class="block-left-top-item" :style="{height: divHeight.height1 * 0.43 + 'px'}">
        <div>
          <div class="text-center block-logo-class" :style="{top: (divHeight.height1 * 0.43 * 0.27)+'px'}">
            <el-avatar :size="100" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
          </div>
          <div class="text-center color-muted font-bold block-logotext-class" :style="{top: (divHeight.height1 * 0.43 * 0.27)+'px'}">
            {{$t("网上办事大厅")}}
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
        <div class="margin-top-10 padding-lr-10 font-size-12 color-white">
          <div class="block-item-item">
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
      <div class="block-right-top-item" :style="{height: divHeight.height1 * 0.43 + 'px'}">
        <div>
          <div class="pull-left block-item-left-tag-menu">
            <div class="block-item-left-header text-center">
              <span>{{$t("类别")}}</span>
            </div>
            <div :style="{height: divHeight.height1 * 0.43 - 40 + 'px', 'overflowY': 'auto'}">
              <div class="block-item-left-header-item" :class="activeMenu === '' ? 'left-menu-active' : ''" @click="selMenu($event, '')">
                <span>{{$t("全部")}}</span>
              </div>
              <div class="block-item-left-header-item" :class="activeMenu === index ? 'left-menu-active' : ''" v-for="(item, index) in 10" :key="index" @click="selMenu($event, index)">
                <span>xxxx</span>
              </div>
            </div>
          </div>
          <div class="block-item-right-tag-content" :style="{height: divHeight.height1 * 0.43 + 'px'}">
            <div class="block-item-left-header">
              <span class="font-bold block-item-header-tab" :class="activeTab === 0 ? 'color-grand': 'color-muted'" @click="tabClick(0)">
                <i class="fa fa-user"></i>
                {{$t("学生办事")}}
              </span>
              <span class="font-bold block-item-header-tab" :class="activeTab === 1 ? 'color-grand': 'color-muted'" @click="tabClick(1)">
                <i class="fa fa-users"></i>
                {{$t("老师办事")}}
              </span>
              <span class="font-bold block-item-header-tab" :class="activeTab === 2 ? 'color-grand': 'color-muted'" @click="tabClick(2)">
                <i class="fa fa-flag"></i>
                {{$t("单位办事")}}
              </span>
            </div>
            <div class="padding-lr-10 padding-tb-10" :style="{height: divHeight.height1 * 0.43 - 62 + 'px', 'overflow-y': 'auto'}">
              <el-row :gutter="16">
                <el-col :span="6" v-for="(item, index) in 20" :key="index" @click.native="serverClick($event, item)" class="margin-bottom-20">
                  <el-card shadow="always" :body-style="{padding: '12px',background: '#EBEEF5'}">
                    <div class="moon-content-text-ellipsis-class">
                      <el-image class="block-icon-class">
                        <div slot="error" class="block-icon-class">
                          <i class="el-icon-picture-outline font-size-15"></i>
                        </div>
                      </el-image>
                      <span>
                        总是显示总是显示
                      </span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="moon-clearfix"></div>
      </div>
      <div class="block-right-bottom-item" :style="{height: divHeight.height1 * 0.4 + 'px'}">
        <div class="block-item-title padding-lr-10">
          <el-row>
            <el-col :span="24">
              <div class="color-muted font-bold font-size-12">
                <span>
                  <i class="fa fa-map"></i>
                  <label>{{$t("推荐服务")}}</label>
                </span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="padding-lr-10 padding-tb-10 font-size-12 color-white" :style="{height: divHeight.height1 * 0.4 - 60 + 'px','overflowY': 'auto'}">
          <el-row :gutter="16">
            <el-col :span="4" v-for="(item, index) in 20" :key="index" class="margin-bottom-20" @click.native="serverClick($event, item)">
              <el-card shadow="always" :body-style="{padding: '12px',background: '#EBEEF5'}">
                <div class="moon-content-text-ellipsis-class">
                  <el-image class="block-icon-class">
                    <div slot="error" class="block-icon-class">
                      <i class="el-icon-picture-outline font-size-15"></i>
                    </div>
                  </el-image>
                  <span>
                    总是显示总是显示
                  </span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="moon-clearfix"></div>

    <!--服务-->
    <dialog-normal top="10vh" width-style="850px" :visible="dialogServer" :show-footer="false">
      <div slot="title">
        <div class="dialog-header-block padding-lr-10">
          <el-row>
            <el-col :span="12">
              <div>
                <i class="fa fa-file-text color-warning"></i>
                <span>xxxxxx</span>
                <span class="color-muted font-size-12 margin-left-10">
                  <label>{{$t("部门")}}:</label>
                  <label>xxxxxx</label>
                </span>
                <span class="color-muted font-size-12 margin-left-10">
                  <label>{{$t("类别")}}:</label>
                  <label>xxxxxx</label>
                </span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-right layout-inline font-size-12">
                <div style="width: 140px;display: inline-block">
                  <el-rate
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                </div>
                <span class="color-grand" style="position: relative;top: 2px;">
                  <label>{{$t("评价")}}:</label>
                  <label>(0)</label>
                </span>
                <span class="margin-left-10">
                  <el-button size="mini" type="primary" @click="closeDialog">{{$t("关闭")}}</el-button>
                  <el-button size="mini" type="success" @click="detailClick">{{$t("业务办理")}}</el-button>
                </span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="custon-dialog-max-height">
        <div class="margin-top-10 font-size-14">
          <div>
            <span class="color-sub-title font-bold">{{$t("服务说明")}}</span>
          </div>
          <div class="line-height"></div>
        </div>
        <div class="margin-top-10 color-sub-title font-size-14">
          <div style="line-height: 30px">
            1、xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>
            2、xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>
            3、xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>
            4、xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>
            5、xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>
            6、xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>
            7、xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>
            8、xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>
            9、xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>
            10、xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>
          </div>
        </div>
      </div>
    </dialog-normal>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDetailDialog" :visible="dialogServerDetail" size="600px" title="" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
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
        dialogServer: false,
        dialogServerDetail: false,
        testArea: '',
        activeMenu: ''
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.initServer();
    },
    methods: {
      layoutInit(){

      },
      tabClick(data){
        this.activeTab = data;
        this.appletType = data;
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
      closeDetailDialog(){
        this.dialogServerDetail = false;
      },
      cancelDialog(){
        this.dialogServer = false;
      },
      cancelDrawDialog(){
        this.dialogServerDetail = false;
      },
      detailClick(){
        this.dialogServerDetail = true;
      },
      selMenu(event, item){
        this.activeMenu = item;
        this.categoryId = item;
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
  /*background: rgba(255,255,255, 0.8);*/
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
}
.block-left-bottom-item{
  background: rgba(255,255,255, 0.4);
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: 0px 0px 10px #909399;
}
.block-right-top-item{
  background: rgba(255,255,255, 0.4);
  width: 95%;
  margin: 0 auto;
  margin-top: 40px;
  box-shadow: 0px 0px 10px #909399;
}
.block-right-bottom-item{
  background: rgba(255,255,255, 0.4);
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
}
.block-item-item{
  height: 25px;
  line-height: 25px;
}
.block-icon-class{
  height: 15px;
  width: 15px;
  position: relative;
  top: 3px
}
.block-item-left-tag-menu{
  width: 140px;
  height: 100%;
  background: rgba(96, 98, 102, 0.7);
}
.block-item-left-header{
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  color: #FFFFFF;
  border-bottom: 1px solid #C0C4CC;
}
.block-item-left-header-item{
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  color: #FFFFFF;
  text-align: center;
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
  background: rgba(242,246,252, 0.3);
  color: #606266;
}
</style>
