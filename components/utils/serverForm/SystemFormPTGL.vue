<template>
  <div>
    <drawer-layout-right tabindex="9999" v-bind="selectModel" @close="closeDialog" @changeDrawer="closeDetailDialog" :visible="dialogVisibleInner" size="600px" :title="title" @right-close="cancelDrawDialog">
      <div slot="content" class="color-muted">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item :label="$t('标题')" prop="name">
            <el-input size="small" v-model="form.name" class="width-415"></el-input>
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
          <el-form-item :label="$t('申请事由')" class="custom-textarea-inner">
            <el-input size="small" type="textarea" v-model="form.des" class="width-415"></el-input>
          </el-form-item>
          <el-form-item :label="$t('单据明细')">
            <span slot="label">
              <label class="color-danger">*</label>
              {{$t('单据明细')}}
            </span>
            <div>
              <el-button size="small" type="primary">{{$t("添加单据")}}</el-button>
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
                      <div class="color-muted font-bold moon-content-text-ellipsis-class" style="max-width: 180px;position: relative;top:2px; display: inline-block">{{ item.typeStr }}</div>
                      <span class="color-success font-bold" style="position: relative;top: -10px">¥{{ item.amount }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </el-form-item>
          <el-form-item :label="$t('关联项目')">
            <my-select size="small" :sel-value="form.objectId" :options="tableObjectData" width-style="415" @change="selBlockFun($event, 'object')"></my-select>
          </el-form-item>
          <el-form-item :label="$t('标签')">
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
          <el-button type="primary" size="small" @click="saveForm(2)">{{$t("提交")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import MySelect from "~/components/MySelect.vue";
  import {common} from "~/utils/api/url";
  import {Toast} from "vant";
  import mixins from "~/utils/mixins";
  import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight.vue";
  import {Message} from "element-ui";
  import {MessageWarning} from "~/utils/utils";
  import systemServerValidater from "~/utils/validater/systemServerValidater";

  export default {
    name: 'systemFormPtgl',
    mixins: [mixins, systemServerValidater],
    components: {DrawerLayoutRight, MySelect},
    props: {
      dialogVisible: {
        default: false,
        type: Boolean
      },
      title: {
        default: '',
        type: String
      }
    },
    computed: {
      selectModel(){
        this.dialogVisibleInner = this.dialogVisible;
      }
    },
    data() {
      return {
        uploadAction: common.upload_file,
        value: '',
        tableTagData: [],
        tableObjectData: [],
        tableTeacherData: [],
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
        moneyTotal: 0.00,
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
      this.initObject();
      this.initTag();
      this.init();
      this.initDept();
    },
    created() {
      console.log(this.dialogVisible);
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
      async selBlockFun(data, type){
        this.pageType = type;
        this.pageTypeStr = data;
        if (type == 'object'){
          let obj = {};
          obj = this.tableObjectData.find((item)=>{
            return item.value === data;
          });
          this.form.object = data.label;
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
      },
      cancelDrawDialog(){
        this.$parent.dialogSystemServer = false
        this.dialogVisibleInner = false;
      },
      closeDetailDialog(){
        this.$parent.dialogSystemServer = false
        this.btnLoading = false;
        this.dialogVisibleInner = false;
      },
      saveForm(type){
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
              field: 'fk_name20230501',
              value: this.form.title,
            },
            {
              field: 'fk_des20230501',
              value: this.form.des,
            },
            {
              field: 'fk_files20230501',
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
              field: 'xm_id20230501',
              value: this.form.objectId,
              name: this.form.object
            },
            {
              field: 'tag_id20230501',
              value: this.form.tagId,
              name: this.form.tag
            },
            {
              field: 'cost_info20230501',
              value: this.form.orderInfoList,
            }
          ];

          console.log(contentJson);
          let params = {
            formCode: 'PTGL',
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
              this.returnIndex();
              Toast(res.data.desc);
            }else {
              Toast(res.data.desc);
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
</style>
