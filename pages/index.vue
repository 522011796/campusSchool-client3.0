<template>
  <div class="container" ref="indexRef">
    <div>
      <div class="pull-right block-left padding-lr-10" :style="divHeight">
        <div class="block-left-bottom-item" :style="{height: divHeight.height1 * 0.47 + 'px'}">
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
          <div class="margin-top-10 padding-lr-10 font-size-12 color-white" :style="{height: divHeight.height1 * 0.4 - 10 + 'px','overflowY': 'auto'}">
            <div v-if="noticeDataList.length == 0" class="text-center">
              <div class="margin-top-30">
                <img src="~static/img/empty.png" style="width: 100px;height: 60px">
              </div>
              <div class="margin-top-10">
                <span class="color-muted margin-top-10">{{$t("暂无数据")}}</span>
              </div>
            </div>
            <div v-else class="block-item-item" v-for="(item, index) in noticeDataList" :key="index">
              <el-row>
                <el-col :span="16">
                  <div class="moon-content-text-ellipsis-class">
                  <span>block-item-title
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

        <div class="block-right-bottom-item" :style="{height: divHeight.height1 * 0.47 + 'px'}">
          <div class="block-item-title padding-lr-10">
            <el-row>
              <el-col :span="24">
                <div class="color-sub-grand font-bold font-size-12">
                <span>
                  <i class="fa fa-map"></i>
                  <label>{{$t("推荐服务")}}</label>
                </span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="padding-lr-10 padding-tb-10 font-size-12 color-white" :style="{height: divHeight.height1 * 0.4 - 60 + 'px','overflowY': 'auto'}">
            <div v-if="recommends.length == 0" class="text-center">
              <div class="margin-top-30">
                <img src="~static/img/empty.png" style="width: 100px;height: 60px">
              </div>
              <div class="margin-top-10">
                <span class="color-muted margin-top-10">{{$t("暂无数据")}}</span>
              </div>
            </div>
            <el-row v-else :gutter="16">
              <el-col :span="8" v-for="(item, index) in recommends" :key="index" class="margin-bottom-20" @click.native="serverClick($event, item)">
                <el-card shadow="always" :body-style="{padding: '12px',background: '#EBEEF5'}">
                  <div class="moon-content-text-ellipsis-class">
                    <el-image class="block-icon-class" :src="item.form_logo">
                      <div slot="error" class="block-icon-class">
                        <i class="el-icon-picture-outline font-size-15"></i>
                      </div>
                    </el-image>
                    <span style="position: relative; top: -6px">
                      {{ item.form_name }}
                    </span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="padding-lr-10" :style="divHeight">
        <div class="margin-top-10">
          <div class="pull-left block-item-left-tag-menu">
            <div class="block-item-left-header text-center" @click="selMenu($event, '')">
              <label class="font-size-12">
                {{$t("部门筛选")}}
              </label>
            </div>
            <div :style="{height: divHeight.height1 - 60 + 'px', 'overflowY': 'auto'}">
<!--              <div class="block-item-left-header-item" :class="activeMenu === '' ? 'left-menu-active' : ''" @click="selMenu($event, '')">-->
<!--                <span>{{$t("全部")}}</span>-->
<!--              </div>-->
<!--              <div class="block-item-left-header-item moon-content-text-ellipsis-class" :class="activeMenu === item.id ? 'left-menu-active' : ''" v-for="(item, index) in deptMixinsList" :key="index" @click="selMenu($event, item)">-->
<!--                <span>{{ item.departmentName }}</span>-->
<!--              </div>-->
              <el-menu
                :default-active="defaultMenuActive"
                background-color="rgba(96, 98, 102, 0)"
                text-color="#fff"
                active-text-color="#ffd04b"
                class="el-menu-vertical-demo custon-nav-menu">
                <template v-for="(item, index) in dataDept">
                  <el-submenu v-if="item.child_list.length > 0" :index="index+''">
                    <div style="width: 100%" slot="title" @click="selMenu($event, item, index)">
                      <span>{{ item.department_name }}</span>
                    </div>
                    <el-menu-item-group v-if="item.child_list.length > 0">
                      <el-menu-item v-for="(itemChild, indexChild) in item.child_list" :key="indexChild" :index="index+'-'+indexChild" @click="selMenu($event, itemChild, index+'-'+indexChild)">{{ itemChild.department_name }}</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item v-else :index="index+''" @click="selMenu($event, item, index)">{{ item.department_name }}</el-menu-item>
                </template>
              </el-menu>
            </div>
          </div>
          <div class="block-item-right-tag-content" :style="{height: divHeight.height1 - 19 + 'px'}">
            <div class="block-item-left-header">
              <el-row>
                <el-col :span="20">
                  <span class="font-bold block-item-header-tab" :class="activeTab === 0 ? 'color-grand': 'color-sub-grand'" @click="tabClick(0)">
                    <i class="fa fa-user"></i>
                    {{$t("学生办事")}}
                  </span>
                  <span class="font-bold block-item-header-tab" :class="activeTab === 1 ? 'color-grand': 'color-sub-grand'" @click="tabClick(1)">
                    <i class="fa fa-users"></i>
                    {{$t("老师办事")}}
                  </span>
                  <span class="font-bold block-item-header-tab" :class="activeTab === 2 ? 'color-grand': 'color-sub-grand'" @click="tabClick(2)">
                    <i class="fa fa-flag"></i>
                    {{$t("单位办事")}}
                  </span>
                </el-col>
                <el-col :span="4" class="text-right" style="position: relative">
                  <span class="margin-right-20">
                    <el-dropdown class="custon-el-dropdown-block" trigger="click" type="default" size="small" placement="bottom" split-button>
                      <label class="font-size-12 color-sub-grand">
                        {{activeTypeText}}
                      </label>
                      <el-dropdown-menu slot="dropdown">
                        <div style="height: 200px;overflow-y: auto">
                          <el-dropdown-item @click.native="dropdownItem($event, 'all', 1, '全部')">{{$t("全部")}}</el-dropdown-item>
                          <el-dropdown-item v-for="(item, index) in categoryMixinsList" :key="index" @click.native="dropdownItem($event, item, 1, item.categoryName)">{{ item.categoryName }}</el-dropdown-item>
                        </div>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </span>
                </el-col>
              </el-row>
            </div>
            <div class="padding-lr-10 padding-tb-10" :style="{height: divHeight.height1 - 80 + 'px', 'overflow-y': 'auto'}">
              <div v-if="serverDataList.length == 0" class="text-center">
                <div style="margin-top: 100px">
                  <img src="~static/img/empty.png" style="width: 100px;height: 60px">
                </div>
                <div class="margin-top-10">
                  <span class="color-muted margin-top-10">{{$t("暂无数据")}}</span>
                </div>
              </div>
              <el-row v-else :gutter="16">
                <el-col :span="6" v-for="(item, index) in serverDataList" :key="index" @click.native="serverClick($event, item)" class="margin-bottom-20">
                  <el-card shadow="always" :body-style="{padding: '18px',background: '#EBEEF5'}">
                    <div class="moon-content-text-ellipsis-class">
                      <el-image class="block-icon-class" :src="item.form_logo">
                        <div slot="error" class="block-icon-class">
                          <i class="el-icon-picture-outline font-size-15"></i>
                        </div>
                      </el-image>
                      <span style="position: relative; top: -6px">
                        {{ item.form_name }}
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
    </div>
    <div class="moon-clearfix"></div>

    <!--服务-->
    <my-server-dialog :visible="dialogServer" width-style="850px" :data="serverDetailData" @close="closeDialog" @detailClick="detailClick"></my-server-dialog>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDetailDialog" :visible="dialogServerDetail" size="700px" :title="formCreateTitleData" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <form-create v-if="formCreateRuleData != ''" v-model="fApi" :rule="formCreateRuleData" :option="formCreateOptionData"/>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <template v-if="checkApply == true">
            <el-select size="mini" v-model="applyCheckValue" collapse-tags placeholder="请选择关联表单申请">
              <el-option
                v-for="item in detailApplyCheckList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
          <template v-if="customUserStatus == true">
            <span>{{$t("审批人")}}</span>:
            <el-select size="mini" v-model="auditSelUser" multiple collapse-tags placeholder="请选择审批人">
              <el-option
                v-for="item in auditUsers"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
          <el-button size="small" @click="handleFormCancel">取 消</el-button>
          <el-button v-if="fromCreateBtnShow == true" size="small" type="primary" :loading="btnLoading" @click="handleFormOk">
            {{ fromCreateBtnText }}
          </el-button>
        </div>
      </div>
    </drawer-layout-right>
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
  export default {
    name: 'index',
    mixins: [mixins],
    components: {DrawerLayoutRight, MyServerDialog, MyElTree, DialogNormal},
    data(){
      return {
        defaultMenuActive: '',
        activeTypeText: '类别',
        activeTypeVal: '110',
        activeType: '110',
        activeTab: 0,
        formCreateData: '',
        formCreateRuleData: [],
        formCreateOptionData: {},
        fApi: {},
        formCreateTitleData: '',
        formCreateIdData: '',
        fromCreateOptions: '',
        fromCreateBtnText: '',
        fromCreateBtnShow: true,
        dialogServer: false,
        dialogServerDetail: false,
        btnLoading: false,
        customUserStatus: false,
        checkApply: false,
        testArea: '',
        activeMenu: '',
        treeId: '',
        serverDetailData: {},
        auditUsers: [],
        auditSelUser: [],
        detailApplyCheckList: [],
        applyCheckValue: []
      }
    },
    mounted() {

    },
    created() {
      this.appletType = this.activeTab;
      this.initCategoryList();
      this.getDeptInfo(2);
      this.initServer();
      this.initApplet();
      this.initRecommend();
      this.$parent.$parent.searchServerBlock = true;
    },
    methods: {
      layoutInit(){

      },
      initCheckForm(id){
        let params = {
          formId: id
        };
        this.$axios.get(common.server_form_check_apply_list,{params: params}).then(res => {
          if (res.data.code == 200){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                value: res.data.data[i].id,
                label: res.data.data[i].name
              });
            }
            this.detailApplyCheckList = array;
          }
        });
      },
      initAuditUser(id){
        let params = {
          id: id
        };
        this.$axios.get(common.server_form_allInfo, {params: params}).then(res => {
          if (res.data.code == 200){
            let auditUser = [];
            let processList = res.data.data.processList;
            this.customUserStatus = false;
            for (let i = 0; i < processList.length; i++){
              if (processList[i].htype == 'CustomUser'){
                let processUser = processList[i].hid;
                let processUserName = processList[i].hname;
                for (let j = 0; j < processUser.length; j++){
                  auditUser.push({
                    label: processUserName[j],
                    value: processUser[j],
                    text: processUserName[j]
                  });
                }
                this.customUserStatus = true;
              }
            }
            this.auditUsers = auditUser;
          }
        });
      },
      tabClick(data){
        this.activeTab = data;
        this.appletType = data;
        this.initServer();
      },
      menuClick(event, item){
        item.active = true;
      },
      serverClick($event, item){
        this.serverDetailData = item;
        this.dialogServer = true;
      },
      closeDialog(event){
        this.dialogServer = false;
      },
      closeDetailDialog(){
        this.formCreateRuleData = [];
        this.formCreateOptionData = {};
        this.auditSelUser = [];
        this.auditUsers = [];
        this.customUserStatus = false;
        this.btnLoading = false;
        this.dialogServerDetail = false;
      },
      cancelDialog(){
        this.dialogServer = false;
      },
      cancelDrawDialog(){
        this.dialogServerDetail = false;
      },
      async detailClick(data){
        let rules = '';
        let list = [];
        await this.getSessionInfo();
        this.formCreateTitleData = data.form_name;
        this.formCreateIdData = data.id;
        this.fromCreateBtnShow = data.submit_button;
        this.fromCreateBtnText = data.button_name != "" ? data.button_name : this.$t("提交");
        this.checkApply = data.check_apply;
        if (data.form_content != null && data.form_content != ''){
          this.formCreateRuleData = JSON.parse(data.form_content).rule;
          this.formCreateOptionData = JSON.parse(data.form_content).option;
          this.setFormChildren(this.formCreateRuleData, list, 'children');
        }
        this.initAuditUser(data.id);
        this.initCheckForm(data.id);

        this.dialogServerDetail = true;
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
                  }
                }
              }
            }
          });
          return obj;
        }
      },
      selMenu(event, item, index){
        // this.activeMenu = '';
        // if (item){
        //   this.activeMenu = item.id;
        // }
        // this.appletId = item.id;
        // this.initServer();
        this.departmentPath = item.department_path;
        this.appletType = this.activeTab;
        this.defaultMenuActive = index + '';
        this.initServer();
      },
      selType(type){
        this.activeType = type + '';
        this.activeTypeVal = type + '';
        this.appletId = '';
        this.departmentPath = '';
        this.appletType = this.activeTab;
        //this.initServer();
      },
      nodeClick(data){
        if (this.activeType == 110){
          this.appletId = data.id;
        }else {
          this.departmentPath = data.department_path;
        }
        this.appletType = this.activeTab;
        this.initServer();
      },
      dropdownItem(event, item, type, text){
        //this.initApplet(item, type);
        this.categoryId = item.id;
        this.activeTypeText = text;
        this.initServer();
      },
      handleFormCancel(){
        this.dialogServerDetail = false;
      },
      handleFormOk(){
        this.fApi.submit((formData, fApi)=>{
          let url = "";
          let ruleList = [];
          if (this.auditSelUser.length == 0 && this.customUserStatus == true){
            MessageWarning(this.$t("请选择审批人！"));
            return;
          };
          let params = {
            appletFormId: this.formCreateIdData,
            userId: this.loginUserId,
            //applyContent: JSON.stringify(formData),
            customHandleUserIds: JSON.stringify(this.auditSelUser)
          }
          if (this.checkApply == true){
            params['checkApplyId'] = this.applyCheckValue;
          }
          let rule = fApi.rule;
          let ruleObjList =  this.setRuleChild(rule, ruleList);
          //console.log(ruleObjList);
          params['applyContent'] = JSON.stringify(ruleObjList);

          url = common.server_form_add;
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              this.dialogServerDetail = false;
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
  background: rgba(255,255,255, 0.6);
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
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
  background: rgba(255,255,255, 0.6);
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
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
  height: 30px;
  width: 30px;
  position: relative;
  top: 3px
}
.block-item-left-tag-menu{
  width: 180px;
  height: 100%;
  background: rgba(96, 98, 102, 0.85);
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
  margin-left: 180px;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
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
.tab-type-item{
  height: 100%;
  width: 100%;
  display: inline-block;
  color: #606266;
}
.tab-type-item-active-left{
  background: #0CB5AF;
  color: #FFFFFF;
}
.tab-type-item-active-right{
  color: #FFFFFF;
}
.block-left{
  width: 400px;
}
</style>
