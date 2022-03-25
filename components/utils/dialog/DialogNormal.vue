<template>
  <div>
    <el-dialog
      :top="top"
      custom-class="custom-normal-dialog animated fadeInDownBig"
      :visible.sync="visible"
      :width="widthStyle"
      :show-close="false"
      :modal-append-to-body="false"
      :before-close="handleBeforeClose"
      @close="closeDialog">

      <div slot="title" class="dialog-normal-title">
        <slot v-if="header" name="title"></slot>
        <el-row v-if="!header">
          <el-col :span="18">
            <div class="dialog-normal-header">
              <i class="fa fa-cog"></i>
              <span class="title">{{title}}</span>
              <span class="subTitle">{{subTitle}}</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="dialog-normal-close text-right color-disabeld font-size-14">
              <i class="fa fa-close" @click="handleClose"></i>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="dialog-normal-body">
        <slot></slot>
      </div>

      <div slot="footer" v-if="showFooter == true">
        <div class="dialog-normal-footer">
          <slot v-if="footer && showFooter == true" name="footer"></slot>
          <div v-if="!footer">
            <el-button size="small" @click="handleCancel">取 消</el-button>
            <el-button size="small" type="primary" @click="handleOk">确 定</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogNormal',
  props: {
    top: {
      default: '15vh',
      type: String
    },
    widthStyle: {
      default: '550px',
      type: String
    },
    title: {
      default: '信息',
      type: String
    },
    subTitle: {
      default: '',
      type: String
    },
    visible: {
      default: false,
      type: Boolean
    },
    showFooter: {
      default: true,
      type: Boolean
    }
  },
  data(){
    return {
      dialogNormalVisible: true,
      footer: false,
      header: false
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
    closeDialog(data){
      this.$emit("close", data);
    },
    handleBeforeClose(data){
      this.$emit("before-close", data);
    },
    handleClose(data){
      if (this.footer || this.showFooter == false){
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
    }
  }
}
</script>

<style scoped>

</style>
