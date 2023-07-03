<template>
  <div>
    <drawer-layout-right ref="sysFormRef" tabindex="9999" v-bind="selectModel" @close="closeDialog" @changeDrawer="closeDetailDialog" :visible="dialogVisibleInner" size="600px" :title="title" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <el-form ref="form" :model="form" :rules="rules" label-width="100px">
          <el-form-item :label="$t('标题')" prop="title">
            <el-input size="small" v-model="form.title" class="width-415"></el-input>
          </el-form-item>
          <el-form-item :label="$t('申请人')" prop="userId">
            <div style="position: relative;width: 415px;">
              <i style="position: absolute;right: 5px;top: 13px;z-index: 9999" class="fa fa-search"></i>
              <el-select
                v-model="form.user"
                size="small"
                filterable
                remote
                reserve-keyword
                :placeholder="$t('请输入老师姓名')"
                :remote-method="selUserMethod"
                :loading="loading"
                style="width: 415px"
                @change="selBlockFun($event, 'user')">
                <el-option
                  v-for="item in tableTeacherData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item :label="$t('申请部门')" prop="dept">
            <span slot="label">
              <label class="color-danger">*</label>
              {{$t('申请部门')}}
            </span>
            <div class="system-item-block" :class="deptStatusContent > 0 ? 'custom-cascader-w180' : 'custom-cascader-w415'">
              <el-cascader-panel ref="SelectorDept" :style="{ width: '415px',overflowX:'auto' }" :props="{multiple: false,checkStrictly:true}" v-model="dataModalList" :options="dataTreeList" @expand-change="changeDept" @change="searchDept"></el-cascader-panel>
            </div>
          </el-form-item>
          <el-form-item :label="$t('借款日期')" prop="jkTime">
            <my-date-picker size="small" width-style="415" :sel-value="form.jkTime" @change="selBlockFun($event, 'jkTime')"></my-date-picker>
          </el-form-item>
          <el-form-item :label="$t('借款说明')" class="custom-textarea-inner">
            <el-input size="small" type="textarea" v-model="form.des" class="width-415"></el-input>
          </el-form-item>
          <el-form-item :label="$t('单据明细')">
            <span slot="label">
              <label class="color-danger">*</label>
              {{$t('单据明细')}}
            </span>
            <div>
              <el-button size="small" type="primary" @click="addDataInfo">{{$t("添加单据")}}</el-button>
            </div>
            <template v-if="form.orderInfoList.length > 0" class="margin-top-5">
              <div class="system-order-main-block">
                <div v-for="(item, index) in form.orderInfoList" :key="index" class="system-order-item-block">
                  <i class="fa fa-times-circle" style="font-size: 20px;position: absolute;right: 5px;top: 3px" @click="removeOrderItem(index)"></i>
                  <div>
                    <span class="color-muted">{{ item.time }}</span>
                  </div>
                  <div class="margin-top-5 font-size-14">
                    <div class="system-order-info-item-block">
                      <span class="color-muted" style="position: relative;top: -10px">{{$t('费用')}}:</span>
                      <div class="color-muted font-bold moon-content-text-ellipsis-class" style="max-width: 180px;position: relative;top:0px; display: inline-block">{{ item.typeStr }}</div>
                      <span class="color-success font-bold" style="position: relative;top: -10px">¥{{ item.amount }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </el-form-item>
          <el-form-item :label="$t('还款日期')">
            <my-date-picker size="small" width-style="415" :sel-value="form.hkTime" @change="selBlockFun($event, 'hkTime')"></my-date-picker>
          </el-form-item>
          <el-form-item :label="$t('收款账户')">
            <my-select size="small" :sel-value="form.skAccount" :options="tableTeacherAccountData" width-style="415" @change="selBlockFun($event, 'account')"></my-select>
          </el-form-item>
          <el-form-item :label="$t('关联项目')">
            <my-select size="small" :sel-value="form.objectId" :options="tableObjectData" width-style="415" @change="selBlockFun($event, 'object')"></my-select>
          </el-form-item>
          <el-form-item :label="$t('关联合同')">
            <my-select size="small" :sel-value="form.orderId" :options="tableHtData" width-style="415" @change="selBlockFun($event, 'ht')"></my-select>
          </el-form-item>
          <el-form-item :label="$t('合同标签')">
            <my-select size="small" :sel-value="form.tagId" :options="tableTagData" width-style="415" @change="selBlockFun($event, 'tag')"></my-select>
          </el-form-item>
          <el-form-item :label="$t('上传附件')">
            <div class="margin-right-10 color-muted">
              <div>
                <div v-if="form.files.length > 0" v-for="(item, index) in form.files" :key="index" class="pull-left" style="position: relative;top: 1px;margin-right: 10px;height: 25px">
                  <i class="fa fa-close" style="position: absolute; right: -8px; top: -8px;font-size: 15px" @click="deleteRemoveImg(index)"></i>
                  <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 35px;width: 35px;font-size: 35px;position: relative;top: 0px;"></i>
                  <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 35px;width: 35px;font-size: 35px;position: relative;top: 0px;"></i>
                  <img v-else :src="item" class="rp-img"/>
                </div>
              </div>
            </div>
            <el-upload
              class="avatar-uploader-quill"
              :action="uploadAction"
              multiple
              :data="{path: 'appFormFile'}"
              :auto-upload="true"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :on-error="handleAvatarError"
            >
              <el-button size="small" type="primary">{{$t("上传附件")}}</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <el-button size="small" @click="saveForm(1)">{{$t("暂存")}}</el-button>
          <el-button type="primary" size="small" v-loading="btnLoading" @click="saveForm(2)">{{$t("提交")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <system-form-data-info :title="$t('单据信息')" :dialog-visible="dialogChildVisible" :process-id="processId"></system-form-data-info>
  </div>
</template>

<script>
  import MySelect from "~/components/MySelect.vue";
  import {common} from "~/utils/api/url";
  import {Toast} from "vant";
  import mixins from "~/utils/mixins";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight.vue";
  import {Message} from "element-ui";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import systemServerValidater from "~/utils/validater/systemServerValidater";
  import SystemFormDataInfo from "~/components/utils/serverForm/SystemFormDataInfo.vue";
  import MyDatePicker from "~/components/MyDatePicker.vue";

  export default {
    name: 'systemFormJkgl',
    mixins: [mixins, systemServerValidater],
    components: {MyDatePicker, SystemFormDataInfo, DrawerLayoutRight, MySelect},
    props: {
      dialogVisible: {
        default: false,
        type: Boolean
      },
      title: {
        default: '',
        type: String
      },
      formData: {
        default: function (){
          return {};
        },
        type: Object
      }
    },
    computed: {
      selectModel(){
        if (this.dialogVisible == true){
          this.initObject();
          this.initTag();
          this.init();
          this.initDept();
          this.initGys();
          this.initTeacherAccount();
          this.initHt();
          if (JSON.stringify(this.formData) != "{}"){
            this.form = this.formData;
          }
        }
        this.dialogVisibleInner = this.dialogVisible;
      }
    },
    data() {
      return {
        uploadAction: common.upload_file,
        value: '',
        tableTagData: [],
        tableOrderData: [],
        tableObjectData: [],
        tableTeacherData: [],
        tableGysData: [],
        tableDjData: [],
        tableJKData: [],
        tableHtData: [],
        tableTeacherAccountData: [],
        userOptions: [],
        dataTreeList: [],
        dataModalList: [],
        dataModalBakList: [],
        deptStatusContent: 0,
        props: {},
        searchTreeTempIdData: [],
        pageType: '',
        pageTypeStr: '',
        loading: false,
        dialogVisibleInner: false,
        dialogChildVisible: false,
        btnLoading: false,
        moneyTotal: 0.00,
        processId: '',
        backMoneyIndex: '',
        form: {
          title: '',
          user: '',
          userId: '',
          dept: '',
          deptId: '',
          des: '',
          jkTime: '',
          orderInfo: '',
          orderInfoList: [],
          hkTime: '',
          skAccount: '',
          skAccountName: '',
          files: [],
          fileNames: [],
          object: '',
          objectId: '',
          order: '',
          orderId: '',
          tag: '',
          tagId: ''
        }
      }
    },
    mounted() {

    },
    created() {

    },
    methods: {
      async init(){
        await this.getSessionInfo();
        this.form.user = this.realName;
        this.form.userId = this.loginUserId;
      },
      async initDept(){
        await this.getDeptInfo(0);
        this.dataTreeList = this.dataDept;
        this.dataModalList = this.dataModalBakList;
      },
      initHt(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.ht_list, {params: params, loading:false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i]['applyData'] ? res.data.data[i]['applyData'].ht_name20230501.value : '',
                text: res.data.data[i]['applyData'] ? res.data.data[i]['applyData'].ht_name20230501.value : '',
                value: res.data.data[i]._id
              });
            }
            this.tableHtData = array;
          }
        });
      },
      initObject(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.object_order_used_list, {params: params, loading:false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i]['applyData'] ? res.data.data[i]['applyData'].xm_name20230501.value : '',
                text: res.data.data[i]['applyData'] ? res.data.data[i]['applyData'].xm_name20230501.value : '',
                value: res.data.data[i]._id
              });
            }
            this.tableObjectData = array;
          }
        });
      },
      initTeacherAccount(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.teacher_account_list, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].account_num + "("+ res.data.data[i].account_name +")",
                text: res.data.data[i].account_num + "("+ res.data.data[i].account_name +")",
                value: res.data.data[i].account_num
              });
            }
            this.tableTeacherAccountData = array;
          }
        });
      },
      initGys(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.supplier_account_list, {params: params, loading:false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].company,
                text: res.data.data[i].company,
                value: res.data.data[i].id
              });
            }
            this.tableGysData = array;
          }
        });
      },
      initTag(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.tag_list, {params: params, loading:false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].label_name,
                text: res.data.data[i].label_name,
                value: res.data.data[i].label_id
              });
            }
            this.tableTagData = array;
          }
        });
      },
      initTeacher(){
        let params = {
          page: 1,
          num: 9999,
          deleted: 0
        };
        params['realName'] = this.searchTeacherValue;
        this.$axios.get(common.teacher_list, {params: params, loading: false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.page.list.length; i++){
              array.push({
                label: res.data.data.page.list[i].real_name + "("+ res.data.data.page.list[i].department_name +")",
                text: res.data.data.page.list[i].real_name + "("+ res.data.data.page.list[i].department_name +")",
                value: res.data.data.page.list[i].user_id
              });
            }
            this.tableTeacherData = array;
            this.loading = false;
          }
        });
      },
      initMoneyCount(){
        let count = 0;
        for (let i = 0; i < this.form.orderInfoList.length; i++){
          let total = parseFloat(this.form.orderInfoList[i].amount);
          count += total;
        }
        this.moneyTotal = count.toFixed(2);
      },
      deleteRemoveImg(index){
        this.form.files.splice(index, 1);
        this.form.fileNames.splice(index, 1);
      },
      removeOrderItem(index){
        this.form.orderInfoList.splice(index, 1);
        this.form.orderInfo = this.form.orderInfoList.length > 0 ? 'null' : '';
        this.initMoneyCount();
      },
      handleAvatarSuccess(res, file){
        // 如果上传成功
        if (res.code == '200') {
          this.form.files.push(res.data.url);
          this.form.fileNames.push(file.name);
        } else {
          Toast(res.desc);
        }
      },
      handleAvatarError(res, file){

      },
      async selBlockFun(data, type, index){
        this.pageType = type;
        this.pageTypeStr = data;
        this.backMoneyIndex= index;
        if (type == 'object'){
          let obj = {};
          obj = this.tableObjectData.find((item)=>{
            return item.value === data;
          });
          this.form.object = obj.label;
          this.form.objectId = data;
        }else if (type == 'tag'){
          let obj = {};
          obj = this.tableTagData.find((item)=>{
            return item.value === data;
          });
          this.form.tag = obj.label;
          this.form.tagId = data;
        }else if (type == 'user'){
          let obj = {};
          obj = this.tableTeacherData.find((item)=>{
            return item.value === data;
          });
          this.form.user = obj.label;
          this.form.userId = data;
        }else if (type == 'ht'){
          let obj = {};
          obj = this.tableHtData.find((item)=>{
            return item.value === data;
          });
          this.form.order = obj.label;
          this.form.orderId = data;
        }else if (type == 'rules'){
          let obj = {
            stage: 1,
            rate: 1,
            amount: 0,
            time: '',
            des: ''
          };
          this.form.backMoney.splice((this.form.backMoney.length-1)+1, 0, obj);
        }else if (this.pageType == 'zfTime'){
          this.$set(this.form.backMoney[index], 'time', data);
        }else if (this.pageType == 'sqTime'){
          this.form.sqTime = data;
        }else if (this.pageType == 'hkTime'){
          this.form.hkTime = data;
        }else if (this.pageType == 'jkTime'){
          this.form.jkTime = data;
        }else if (type == 'account'){
          let obj = {};
          obj = this.tableTeacherAccountData.find((item)=>{
            return item.value === data;
          });
          this.form.skAccountName = obj.label;
          this.form.skAccount = data;
        }else if (this.pageType == 'gys'){
          let obj = {};
          obj = this.tableGysData.find((item)=>{
            return item.value === data;
          });
          this.form.gys = obj.label;
          this.form.gysId = data;
        }
      },
      selUserMethod(query) {
        this.loading = true;
        if (query != ''){
          this.searchTeacherValue = query;
          this.initTeacher(query);
        }else {
          this.tableTeacherData = [];
          this.loading = false;
        }
      },
      changeDept(event){
        this.deptStatusContent = this.$refs.SelectorDept.activePath.length;
      },
      searchDept(event){
        let deptPath = this.$refs.SelectorDept.getCheckedNodes().length > 0 ? this.$refs.SelectorDept.getCheckedNodes()[0].path : [];
        let deptPathLabel = this.$refs.SelectorDept.getCheckedNodes().length > 0 ? this.$refs.SelectorDept.getCheckedNodes()[0].pathLabels : [];
        let deptPathStr = "";

        for (let i =0; i < deptPathLabel.length; i++){
          deptPathStr += deptPathLabel[i];
          if (deptPath.length-1 != i){
            deptPathStr += "/";
          }
        }

        this.form.dept = deptPathStr;
        this.form.deptId = deptPath.length > 0 ? JSON.parse(JSON.stringify(deptPath)).join() : '';
        this.dataModalList = deptPath.length > 0 ? JSON.parse(JSON.stringify(deptPath)) : [];
        this.dataModalBakList = JSON.parse(JSON.stringify(this.dataModalList));
        //this.deptStatusContent = this.$refs.SelectorDept.getCheckedNodes()[0].children.length;
      },
      closeDialog(){
        this.form = {
          title: '',
          user: '',
          userId: '',
          dept: '',
          deptId: '',
          des: '',
          jkTime: '',
          orderInfo: '',
          orderInfoList: [],
          hkTime: '',
          skAccount: '',
          skAccountName: '',
          files: [],
          fileNames: [],
          object: '',
          objectId: '',
          order: '',
          orderId: '',
          tag: '',
          tagId: ''
        }
        this.dataModalList = [];
        this.dataModalBakList = [];
        this.deptStatusContent = [];
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      cancelDrawDialog(){
        this.$parent.dialogSystemServer = false
        this.dialogVisibleInner = false;
      },
      addDataInfo(data){
        this.processId = this.form.orderInfoList.length > 0 ? this.form.orderInfoList[0].type : '';
        this.dialogChildVisible = true;
      },
      closeDetailDialog(){
        this.$parent.dialogSystemServer = false
        this.btnLoading = false;
        this.dialogVisibleInner = false;
      },
      minTableItem(index){
        this.form.backMoney.splice(index, 1);
      },
      saveForm(type){
        let error = 0;
        let req = /^([1-9][0-9]{0,1}|100)$/;
        this.$refs.form.validate().then(() => {
          if (this.form.deptId.length == 0){
            MessageWarning(this.$t("请设置部门"));
            return;
          }
          if (this.form.orderInfoList.length == 0){
            MessageWarning(this.$t("请设置单据明细"));
            return;
          }
          let contentJson = [
            {
              field: 'jk_name20230501',
              value: this.form.title,
            },
            {
              field: 'jk_des20230501',
              value: this.form.des,
            },
            {
              field: 'jk_date20230501',
              value: this.form.hkTime,
            },
            {
              field: 'jk_files20230501',
              value: this.form.files,
              name: this.form.files
            },
            {
              field: 'apply_dept20230501',
              value: this.form.deptId,
              deptName: this.form.dept,
            },
            {
              field: 'apply_user20230501',
              value: this.form.userId,
            },
            {
              field: 'jk_date20230501',
              value: this.form.jkTime,
            },
            {
              field: 'hk_date20230501',
              value: this.form.hkTime,
            },
            {
              field: 'tag_id20230501',
              value: this.form.tagId,
              name: this.form.tag
            },
            {
              field: 'xm_id20230501',
              value: this.form.objectId,
              name: this.form.object
            },
            {
              field: 'ht_id20230501',
              value: this.form.orderId,
              name: this.form.order
            },
            {
              field: 'jk_account20230501',
              value: this.form.skAccount,
              name: this.form.skAccountName,
            },
            {
              field: 'cost_info20230501',
              value: this.form.orderInfoList,
            }
          ];

          console.log(contentJson);
          let params = {
            formCode: 'JKGL',
            userId: this.form.userId,
          }

          let url = common.server_form_add;
          if (type == 1){
            params['submit'] = false;
          }else if (type == 2){
            params['submit'] = true;
          }
          params['applyContent'] = JSON.stringify(contentJson);
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              this.dialogVisibleInner = false;
              this.$parent.dialogSystemServer = false
              MessageSuccess(res.data.desc);
            }else {
              MessageError(res.data.desc);
            }
            this.btnLoading = false;
          });
        });
      }
    }
  }
</script>

<style scoped>
.rp-img{
  height: 35px;
  width: 35px;
  border: 0px solid #dddddd;
  position: relative;
  top: 1px;
}
.system-item-block{

}
.system-order-main-block{
  padding: 5px 0px;
  position: relative;
}
.system-order-item-block{
  border-radius: 5px;
  background: #FFFFFF;
  padding: 0px 10px;
  margin-bottom: 10px;
  position: relative;
  width: 415px;
}
.system-order-main-block::after {
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  right: 16px;
  bottom: 0;
  left: 16px;
  border-bottom: 0px solid #ebedf0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.system-order-info-item-block{
  height: 30px;
  line-height: 30px;
}
</style>
