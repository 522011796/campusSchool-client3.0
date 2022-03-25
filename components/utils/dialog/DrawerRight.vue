<template>
  <div class="container">
    <el-drawer
      tabindex="0"
      custom-class="drawer-normal-drawer"
      style="margin-top: 60px"
      :visible.sync="drawer_"
      :direction="direction"
      :wrapperClosable="true"
      :show-close="false"
      :modal-append-to-body="false"
      :size="size">

      <div slot="title" class="drawer-normal-title">
        <span tabindex="1"></span>
        <el-row v-if="!header">
          <el-col :span="12">
            <div class="drawer-normal-header">
              <span class="title">{{title}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="drawer-normal-close text-right color-disabeld font-size-14">
              <i class="fa fa-close" @click="handleClose"></i>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="drawer-normal-body" :style="hideFooter == false ? drawHeight : ''">
        <div>
          <el-button type="primary" size="small" plain @click="download">
            <i class="fa fa-download"></i>
            {{$t("下载模版")}}
          </el-button>
          <span class="font-size-12 color-muted">({{$t("支持Excel2003或者Excel2007")}})</span>
        </div>

        <div class="margin-top-10">
          <div class="padding-tb-5 color-muted">
            <span>{{$t("文件上传")}}</span>
          </div>
          <div>
            <el-upload
              class="custom-upload"
              drag
              :action="action"
              :accept="accept"
              :data="data"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :on-error="handleAvatarError"
              :before-upload="handleAvatarBefore">

              <i class="el-icon-upload"></i>
              <div class="el-upload__text">{{$t("将文件拖到此处，或")}}<em>{{$t("点击上传")}}</em></div>
            </el-upload>
          </div>

          <div class="padding-tb-5 color-muted">
            <span>{{$t("上传结果")}}</span>
          </div>

          <div>
            <el-timeline>
              <el-timeline-item>
                <div class="color-muted font-size-12">
                  <span>{{$t("上传进度")}}</span>
                </div>
                <div class="color-disabeld font-size-12 margin-top-5">
                  <span v-if="process != ''">{{process}}</span>
                  <span v-else>{{$t("文件未上传")}}</span>
                </div>
              </el-timeline-item>

              <el-timeline-item>
                <div class="color-muted font-size-12">
                  <span>{{$t("上传结果")}}</span>
                </div>
                <div class="color-disabeld font-size-12 margin-top-5">
                  <div v-if="Object.keys(result).length > 0">
                    <div v-for="(item, index) in result" :key="index">
                      <span>{{item}}</span>
                    </div>
                  </div>
                  <span v-else>{{$t("暂无数据")}}</span>
                </div>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>

      <div class="drawer-normal-footer" v-if="hideFooter == false" :hide-footer="hideFooter">
        <el-button size="small" @click="handleCancel">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="loading == false ? handleOk() : ''">
          <i class="el-icon-loading" v-if="loading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import mixins from "../../../utils/mixins";
import {oneOf} from "../../../utils/utils";
import {common} from "../../../utils/api/url";
export default {
  mixins: [mixins],
  props: {
    title: {
      default: '信息',
      type: String
    },
    visible: {
      default: false,
      type: Boolean
    },
    direction: {
      default: 'rtl',
      type: String
    },
    hideFooter: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    },
    size: {
      defalult: '30%',
      type: String
    },
    action: {
      default: '',
      type: String
    },
    downloadFile: {
      default: '',
      type: String
    },
    accept: {
      default: '',
      type: String
    },
    data: {
      default: function () {
        return {};
      },
      type: Object
    },
    process: {
      default: '',
      type: String
    },
    result: {
      default: function () {
        return {} || [];
      },
      type: [Object, Array]
    },
    setBefore: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    drawer_:{
      get(){
        return this.visible
      },
      set(v){
        this.$emit("changeDrawer",v)
      }
    }
  },
  data(){
    return {
      drawer: false,
      dialogNormalVisible: false,
      footer: false,
      header: false,
      drawerLoading: false
    }
  },
  mounted() {
    this.dialogNormalVisible = this.visible;
    this.footer = this.$slots.footer !== undefined;
    this.header = this.$slots.title !== undefined;
  },
  created() {

  },
  methods: {
    handleClose(data){
      if (!this.footer){
        this.$emit("right-close", data);
      }else {
        this.handleCancel();
      }
    },
    handleOk(data){
      this.$emit("ok", data);
    },
    handleCancel(data){
      this.$emit("cancel", data);
    },
    download(event){
      window.open(this.downloadFile, '_self');
    },
    handleAvatarSuccess(res, file){
      this.$emit('success', res, file);
    },
    handleAvatarError(res, file){
      this.$emit('error', res, file);
    },
    handleAvatarBefore(file){
      if (this.setBefore){
        this.data['fileName'] = file.name;
      }
    }
  }
}
</script>

<style scoped>
.container {

}
</style>
