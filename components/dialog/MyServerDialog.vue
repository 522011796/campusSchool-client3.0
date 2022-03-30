<template>
  <div>
    <dialog-normal
      :top="top"
      :width="widthStyle"
      :visible.sync="visible"
      :show-close="false"
      :modal-append-to-body="false"
      :before-close="handleBeforeClose"
      @close="closeDialog">
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
  </div>
</template>

<script>
  export default {
    name: 'myServerDialog',
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
        this.$emit("detailClick");
      }
    }
  }
</script>
