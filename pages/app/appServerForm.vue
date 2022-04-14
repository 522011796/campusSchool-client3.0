<template>
  <div>
    <div class="bg-app-success header-title-block color-white">
      <van-row>
        <van-col span="6">
          <div class="text-left padding-lr-10">
            <span class="font-bold font-size-14" @click="returnBlock">
              <i class="fa fa-chevron-left"></i>
              {{$t("返回")}}
            </span>
          </div>
        </van-col>
        <van-col span="18">
          <div class="text-right padding-lr-10">
            <template v-if="customUserStatus == true">
              <el-select style="width: 130px" size="small" v-model="auditSelUser" multiple collapse-tags placeholder="请选择审批人">
                <el-option
                  v-for="item in auditUsers"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
            <span style="position: relative;top: -5px">
              <van-button plain size="small" type="primary" :loading="btnLoading" @click="serverSubBlock($event)">
                <i class="fa fa-edit"></i>
                {{$t("提交")}}
              </van-button>
            </span>
          </div>
        </van-col>
      </van-row>
    </div>

    <div style="margin-top:1px;" class="margin-left-10 margin-right-10">
      <div class="content-block padding-lr-10 padding-tb-10" :style="divHeight7">
        <form-create v-if="formCreateRuleData != ''" v-model="fApi" :rule="formCreateRuleData" :option="formCreateOptionData"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";
  import { Toast } from 'vant';

  import mixins from "~/utils/mixins";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  export default {
    name: 'appServerForm',
    layout: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        rateValue: 0,
        serverDetail: '',
        fApi: {},
        formCreateRuleData: [],
        formCreateOptionData: {},
        btnLoading: false,
        customUserStatus: false,
        auditUsers: [],
        auditSelUser: []
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.init();
    },
    methods: {
      layoutInit(){

      },
      async init(){
        let params = {
          id: this.$route.query.id
        };
        await this.getSessionInfo();
        this.$axios.get(common.server_form_allInfo, {params: params}).then(res => {
          if (res.data.code == 200){
            let auditUser = [];
            this.serverDetail = res.data.data;
            let processList = res.data.data.processList;
            this.customUserStatus = false;

            if (res.data.data.formContent != null && res.data.data.formContent != ''){
              this.formCreateRuleData = JSON.parse(res.data.data.formContent).rule;
              this.formCreateOptionData = JSON.parse(res.data.data.formContent).option;
            }

            for (let i = 0; i < processList.length; i++){
              if (processList[i].htype == 'CustomUser'){
                let processUser = processList[i].hid;
                let processUserName = processList[i].hname;
                for (let j = 0; j < processUser.length; j++){
                  auditUser.push({
                    label: processUserName[j],
                    value: processUser[j],
                    text: processUserName[j]
                  });
                }
                this.customUserStatus = true;
              }
            }
            this.auditUsers = auditUser;
          }
        });
      },
      serverSubBlock(){
        this.fApi.submit((formData, fApi)=>{
          let url = "";
          let ruleList = [];
          if (this.auditSelUser.length == 0 && this.customUserStatus == true){
            Toast(this.$t("请选择审批人！"));
            return;
          };
          let params = {
            appletFormId: this.$route.query.id,
            userId: this.loginUserId,
            //applyContent: JSON.stringify(formData),
            customHandleUserIds: JSON.stringify(this.auditSelUser),
          }
          let rule = fApi.rule;
          for (let i = 0; i < rule.length; i++){
            let obj = {
              field: rule[i].field,
              title: rule[i].title,
              type: rule[i].type,
              value: rule[i].value
            }
            ruleList.push(obj);
          }
          console.log(JSON.stringify(formData));
          params['applyContent'] = JSON.stringify(ruleList);

          url = common.server_form_add;
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              Toast(res.data.desc);
            }else {
              Toast(res.data.desc);
            }
            this.btnLoading = false;
          });
        });
      },
      returnBlock(){
        this.$router.push({
          path: '/app/appServer',
          query: {
            id: this.$route.query.id,
            activeType: this.$route.query.activeType,
          }
        });
      }
    }
  }
</script>

<style scoped>
.container {

}
.header-title-block{
  height: 60px;
  line-height: 60px;
  width: 100%;
}
.content-block{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #FFFFFF;
}
</style>
