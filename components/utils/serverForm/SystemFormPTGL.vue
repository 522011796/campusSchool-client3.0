<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item :label="$t('标题')">
        <el-input size="small" v-model="form.name" class="width-300"></el-input>
      </el-form-item>
      <el-form-item :label="$t('申请人')">
        <div style="position: relative;width: 300px;">
          <i style="position: absolute;right: 5px;top: 13px;z-index: 9999" class="fa fa-search"></i>
          <el-select
            v-model="value"
            size="small"
            filterable
            remote
            reserve-keyword
            :placeholder="$t('请输入老师姓名')"
            :remote-method="selUserMethod"
            :loading="loading"
            style="width: 300px"
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
      <el-form-item :label="$t('申请部门')">
        <div class="system-item-block custom-cascader-w300">
          <el-cascader-panel ref="SelectorDept" :style="{ width: '300px',overflowX:'auto' }" :props="{multiple: false,checkStrictly:true}" v-model="dataModalList" :options="dataTreeList" @change="searchPop"></el-cascader-panel>
        </div>
      </el-form-item>
      <el-form-item :label="$t('申请事由')" class="custom-textarea-inner">
        <el-input size="small" type="textarea" v-model="form.des" class="width-300"></el-input>
      </el-form-item>
      <el-form-item :label="$t('单据明细')">

      </el-form-item>
      <el-form-item :label="$t('关联项目')">
        <my-select size="small" :sel-value="form.objectId" :options="tableObjectData" width-style="300" @change="selBlockFun($event, 'object')"></my-select>
      </el-form-item>
      <el-form-item :label="$t('标签')">
        <my-select size="small" :sel-value="form.tagId" :options="tableTagData" width-style="300" @change="selBlockFun($event, 'tag')"></my-select>
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
</template>

<script>
  import MySelect from "~/components/MySelect.vue";
  import {common} from "~/utils/api/url";
  import {Toast} from "vant";
  import mixins from "~/utils/mixins";

  export default {
    name: 'systemFormPtgl',
    mixins: [mixins],
    components: {MySelect},
    props: {
      status: {
        default: '',
        type: [String, Number]
      }
    },
    computed: {

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
        props: {},
        searchTreeTempIdData: [],
        pageType: '',
        pageTypeStr: '',
        loading: false,
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
      deleteRemoveImg(index){
        this.form.files.splice(index, 1);
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
      searchPop(event){
        if (this.pageType == 'dept'){
          this.searchTreeTempIdData = event;
        }
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
