<template>
  <div class="container">
    <div class="bg-app-success header-title-block color-white">
      <van-row>
        <van-col span="12">
          <div class="text-left padding-lr-10">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
              {{$t("服务说明")}}
            </span>
          </div>
        </van-col>
        <van-col span="12">
          <div class="text-right padding-lr-10">
            <span>
              <van-rate v-model="rateValue" size="8"/>
              <label class="font-size-12">(0)</label>
            </span>
            <span style="position: relative;top: -5px">
              <van-button plain size="mini" type="primary" @click="serverBlock($event)">
                <i class="fa fa-edit"></i>
                {{$t("业务办理")}}
              </van-button>
            </span>
          </div>
        </van-col>
      </van-row>
    </div>

    <div style="margin-top:1px;" class="margin-left-10 margin-right-10">
      <div class="content-block padding-lr-10" :style="divHeight6">
        <div style="line-height: 30px; white-space: pre-line">
          <pre>{{ serverDetail.des }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  export default {
    name: 'appServer',
    layout: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        serverDetail: '',
        rateValue: 0
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
      init(){
        let params = {
          id: this.$route.query.id
        };
        this.$axios.get(common.server_form_allInfo, {params: params}).then(res => {
          if (res.data.code == 200){
            let auditUser = [];
            this.serverDetail = res.data.data;
          }
        });
      },
      serverBlock(event){
        this.$router.push({
          path: '/app/appServerForm',
          query: {
            id: this.serverDetail.id,
            activeType: this.$route.query.activeType,
          }
        });
      },
      returnIndex(){
        this.$router.push({
          path: '/app/appIndex',
          query: {
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
