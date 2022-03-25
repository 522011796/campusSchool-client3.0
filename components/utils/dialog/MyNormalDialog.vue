<template>
  <div>
    <el-dialog class="custom-dialog" :visible.sync="openCardDialog" :close-on-click-modal="false" :loading="loading" @close="closeDialog">
      <div slot="title">
        <div class="dialog-title">
          {{title}}
        </div>
        <div style="height: 1px; background: #EBEEF5;margin: 0px 0px"></div>
      </div>
      <div class="text-center">
        <div>
          <i class="fa fa-info-circle" style="font-size: 18px"></i>
          {{content}}
        </div>
        <div class="color-muted font-size-12 margin-top-5">
          {{detail}}
        </div>
      </div>
      <div slot="footer">
        <div style="height: 1px; background: #EBEEF5;margin: 0px 0px"></div>
        <el-row>
          <el-col :span="12" class="text-center">
            <div style="background: #ffffff;width: 100%; height: 100%;cursor: default" @click="handleCancelChange">{{$t("取消")}}</div>
          </el-col>
          <el-col :span="12" class="text-center">
            <div style="background: #f5f5f5;width: 100%; height: 100%;cursor: default" @click="loading == false ? handleOkChange() : ''">
              <span :class="{'color-muted': loading}">
                <i class="el-icon-loading" v-if="loading"></i>
                {{$t("确定")}}
              </span>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {oneOf} from "../../../utils/utils";
  export default {
    name: 'myNormalDialog',
    props: {
      visible: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      detail: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '30%'
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      openCardDialog: {
        get() {
          return this.visible;
        },
        set(val) {
          this.$emit('update:visible', val) // openCardDialog改变的时候通知父组件
        }
      },
      setLoading: {
        get() {
          return this.loading;
        },
        set(val) {

        }
      },
    },
    data() {
      return {
        showLoading: false
      }
    },
    methods: {
      handleOkChange(data) {
        this.$emit('ok-click', data);
      },
      handleCancelChange(data) {
        this.$emit('cancel-click', data);
      },
      closeDialog(data){
        this.$emit('close', data);
      }
    }
  }
</script>
