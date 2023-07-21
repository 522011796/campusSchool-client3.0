<template>
  <div>
    <div style="position: relative">
      <div :selectModel="selectModel">
      <span v-if="value.handle == true">
        <el-popover
            popper-class="custom-popper-class"
            placement="top"
            width="400"
            @hide="cancelPop"
            v-model="visibleOk">
          <div class="margin-bottom-10">
            <template v-if="value.agreeType == 'pay'">
              <div class="margin-bottom-10">
                <my-select placeholder="请选择账户" :sel-value="account" width-style="400" :options="schoolAccountIdList" @change="handleAccountChange($event)"></my-select>
              </div>
              <div class="margin-bottom-10">
                <el-input
                    placeholder="请输入金额"
                    v-model="amount">
                </el-input>
              </div>
            </template>
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
          <el-button slot="reference" type="success" size="small">{{value.agreedName}}</el-button>
        </el-popover>

        <el-popover
            popper-class="custom-popper-class"
            placement="top"
            width="400"
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
          <span>{{$t("待提交")}}</span>
        </div>
      </div>
    </div>

    <div class="text-left">
      <dialog-normal top="10vh" :append-to-body="true" :visible="dialogWrite" width-style="550px" :title="$t('签名')" @close="closeDialog" @right-close="cancelDialog">
        <div class="margin-top-10">
          <vue-esign
              ref="esign"
              :width="550"
              :height="300"
              :isCrop="isCrop"
              :lineWidth="lineWidth"
              :lineColor="lineColor"
              :bgColor.sync="bgColor"
              :quality="quality">

          </vue-esign>
        </div>

        <div slot="footer">
          <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
          <el-button size="small" type="primary" @click="okDialog">
            {{$t("确定")}}
          </el-button>
        </div>
      </dialog-normal>
    </div>
  </div>
</template>

<script>
import {MessageWarning, oneOf} from '../../../utils/utils';
  import {common} from "~/utils/api/url";
  import vueEsign from 'vue-esign/src/index.vue'
  import dialogNormal from "~/components/utils/dialog/DialogNormal.vue";
  export default {
    name: 'AuditButton',
    components: {dialogNormal,vueEsign},
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
        this.initSchoolAccount();
        this.cancelPop();
      }
    },
    data() {
      return {
        value: '',
        widthStyle: null,
        widthDesStyle: null,
        textarea: '',
        visibleOk: false,
        visibleNo: false,
        btnLoading: false,
        amount: '',
        account: '',
        schoolAccountIdList: [],
        dialogWrite: false,
        lineWidth: 6,
        lineColor: '#000000',
        bgColor: '#F5f5f5',
        resultImg: '',
        isCrop: false,
        quality: 1
      }
    },
    created() {

    },
    methods: {
      handleOk(data){
        let req = /^([\+]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/;
        if (this.value.agreeType == 'pay'){
          if (this.amount != '' && !req.test(this.amount)){
            MessageWarning(this.$t("正整数或者两位小数！"));
            return;
          }
        }
        if (this.value.sign == true){
          this.visibleOk = false;
          this.dialogWrite = true;
          return;
        }
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
      },
      async initSchoolAccount(){
        let params = {};
        await this.$axios.get(common.school_account_list).then(res=> {
          if (res.data.code == 200) {
            if (res.data.data) {
              let array = [];
              for(let i = 0; i < res.data.data.length; i++){
                array.push({
                  label: res.data.data[i].account_name,
                  text: res.data.data[i].account_name,
                  value: res.data.data[i].account_num
                });
              }
              this.schoolAccountIdList = array;
            }
          }
        });
      },
      handleAccountChange(event){
        this.account = event;
      },
      closeDialog(){
        if (this.$refs['esign']){
          this.$refs.esign.reset();
        }
        this.dialogWrite = false;
      },
      cancelDialog(){
        this.dialogWrite = false;
      },
      okDialog(data){
        let _self = this;
        this.$refs.esign.generate().then(res => {
          this.$emit('ok', data, this.textarea, this.amount, this.account, res, this.value.agreeType);
          if (this.$refs['esign']){
            this.$refs.esign.reset()
          }
          _self.dialogWrite = false;
        }).catch(err => {
          MessageWarning(this.$t("签名错误"));
        })
      }
    }
  }
</script>

<style scoped>

</style>
