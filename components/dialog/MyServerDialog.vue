<template>
  <div>
    <dialog-normal
      :top="top"
      :width-style="widthStyle"
      :visible.sync="visible"
      :show-close="false"
      :modal-append-to-body="false"
      :show-footer="false"
      :before-close="handleBeforeClose"
      @close="closeDialog">
      <div slot="title">
        <div class="dialog-header-block padding-lr-10">
          <el-row>
            <el-col :span="18">
              <div style="height: 30px;line-height: 30px">
                <i class="fa fa-file-text color-warning"></i>
                <span>{{ data.form_name }}</span>
                <span class="color-muted font-size-12 margin-left-10">
                  <label class="color-sub-title">{{$t("部门")}}:</label>
                  <label class="moon-content-text-ellipsis-class" style="width: 200px;display: inline-block;position: relative;top: 10px">{{ data.department_names }}</label>
                </span>
                <span class="color-muted font-size-12 margin-left-10">
                  <label class="color-sub-title">{{$t("类别")}}:</label>
                  <label>{{ data.category_name }}</label>
                </span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="text-right layout-inline font-size-12">
<!--                <div style="width: 140px;display: inline-block">-->
<!--                  <el-rate-->
<!--                    text-color="#ff9900"-->
<!--                    score-template="{value}">-->
<!--                  </el-rate>-->
<!--                </div>-->
<!--                <span class="color-grand" style="position: relative;top: 2px;">-->
<!--                  <label>{{$t("评价")}}:</label>-->
<!--                  <label>(0)</label>-->
<!--                </span>-->
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
          <div style="line-height: 30px; white-space: pre-line">
            <pre>{{data.des}}</pre>
          </div>
        </div>
      </div>
    </dialog-normal>
  </div>
</template>

<script>
  import DialogNormal from "~/components/utils/dialog/DialogNormal";
  export default {
    name: 'myServerDialog',
    components: {DialogNormal},
    props: {
      top: {
        default: '10vh',
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
      data: {
        type: Object
      }
    },
    computed: {
      selectModel(){
        this.value = this.selValue;
      }
    },
    data() {
      return {
        value: ''
      }
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
      },
      detailClick(){
        this.$emit("detailClick", this.data);
      }
    }
  }
</script>
