<template>
  <div :selModel="selModel" :selTime="selTime">
    <el-button type="info" plain :disabled="isDisabled" @click="setTimeoutFun">
      <slot v-if="!isDisabled"></slot>
      <span v-if="isDisabled">{{timeValue}}s</span>
    </el-button>
  </div>
</template>

<script>
  import {oneOf} from '../../../utils/utils';
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {MessageWarning, MessageSuccess} from "../../../utils/utils";
  export default {
    name: 'TimeoutButton',
    mixins: [mixins],
    props: {
      selValue: {
        default: '',
        type: String
      },
      time: {
        default: 60,
        type: Number
      },
      oldPhone: {
        default: '',
        type: String
      },
      newPhone: {
        default: '',
        type: String
      },
      action: {
        default: '',
        type: String
      },
      authBefore: Function,
      data: {
        default: function () {
          return {}
        },
        type: Object
      }
    },
    computed: {
      selModel(){
        this.value = this.selValue;
      },
      selTime(){
        this.timeValue = this.time;
      },
      oldPhone_:{
        get(){
          return this.oldPhone
        },
        set(v){

        }
      },
      newPhone_:{
        get(){
          return this.newPhone
        },
        set(v){

        }
      }
    },
    data() {
      return {
        value: '',
        isDisabled: false,
        timeValue: 0
      }
    },
    mounted() {

    },
    created() {
      //this.initConfig();
    },
    methods: {
      async initConfig() {
        await this.getSessionInfo();
      },
      setTimeoutFun(){
        let me = this;
        if (this.authBefore){
          var before = this.authBefore();
          if (before == false) {
            return;
          }
        }
        /*if (before && before.then) {
          before.then(function (processedFile) {
            console.log(1);
          }, function () {
            console.log(2);
          });
        } else if (before !== false) {
          console.log(3);
        } else {
          console.log(4);
        }*/

        let params = this.data;

        params = this.$qs.stringify(params);
        me.isDisabled = true;
        this.$axios.post(this.action, params, {loading: false}).then(res => {
          if (res.data.code == 200){
            MessageSuccess(res.data.desc);
            let interval = setInterval(function() {
              --me.timeValue;
              if(me.timeValue < 0) {
                me.timeValue = 60;
                me.isDisabled = false;
                clearInterval(interval);
              }
            }, 1000);
          }else {
            me.isDisabled = false;
            MessageWarning(this.$t("请检查信息是否有误！"));
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
