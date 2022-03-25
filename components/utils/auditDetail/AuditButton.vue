<template>
  <div>
    <div :selectModel="selectModel">
      <span v-if="value.handle == true">
        <el-popover
          placement="top"
          width="200"
          @hide="cancelPop"
          v-model="visibleOk">
          <div class="margin-bottom-10">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </div>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="cancelPop">取消</el-button>
            <el-button type="primary" size="mini" @click="handleOk">确定</el-button>
          </div>
          <el-button slot="reference" type="success" size="small">{{$t("同意")}}</el-button>
        </el-popover>

        <el-popover
          placement="top"
          width="200"
          @hide="cancelPop"
          v-model="visibleNo">
          <div class="margin-bottom-10">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </div>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="cancelPop">取消</el-button>
            <el-button type="primary" size="mini" @click="handleNo">确定</el-button>
          </div>
          <el-button slot="reference" type="warning" size="small">{{$t("驳回")}}</el-button>
        </el-popover>
      </span>
      <el-button type="info" size="small" v-if="value.cancel == true" @click="handleCancel">{{$t("撤销")}}</el-button>
    </div>
    <div v-if="value.handle == false">
      <div v-if="value.status == 2" class="bg-danger color-white text-center">
        <span>{{$t("已驳回")}}</span>
      </div>
      <div v-if="value.status == 3" class="bg-success color-white text-center">
        <span>{{$t("已通过")}}</span>
      </div>
      <div v-if="value.status == 4" class="bg-danger color-white text-center">
        <span>{{$t("已驳回")}}</span>
      </div>
      <div v-if="value.status == -1" class="bg-muted color-white text-center">
        <span>{{$t("已撤销")}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {oneOf} from '../../../utils/utils';
  export default {
    name: 'AuditButton',
    props: {
      selValue: {
        default: function () {
          return {};
        },
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
        value: '',
        widthStyle: null,
        widthDesStyle: null,
        textarea: '',
        visibleOk: false,
        visibleNo: false
      }
    },
    created() {

    },
    methods: {
      handleOk(data){
        this.$emit('ok', data, this.textarea);
      },
      handleNo(data){
        this.$emit('no', data, this.textarea);
      },
      handleCancel(data){
        this.$emit('cancel', data);
      },
      cancelPop(){
        this.textarea = '';
        this.visibleOk = false;
        this.visibleNo = false;
      }
    }
  }
</script>

<style scoped>

</style>
