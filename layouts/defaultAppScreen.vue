<template>
  <div :style="divHeight4">
    <vue-page-transition name="fade-in-right">
      <nuxt></nuxt>
    </vue-page-transition>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  export default {
    name: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        hrefUrl: ''
      }
    },
    mounted () {

    },
    created() {
      if (process.browser){
        this.hrefUrl = window.location.href;
      }
      if (this.$route.query.sessionId){
        this.initAppConfig();
      }else{
        this.init();
      }
    },
    methods: {
      async init(){
        if (this.hrefUrl.indexOf("/newStudent/") > -1){
          this.queryStudentTimeInfo()
        }
      },
      async initAppConfig(){
        await this.autoLoginApp();
        //await this.getSessionInfo();
        setTimeout(()=>{
          if (this.hrefUrl.indexOf("/newStudent/") > -1){
            this.queryStudentTimeInfo();
          }
        },1000);
      }
    },
    watch: {
      '$route': function (to, from) {//监听路由变化,为了浏览器点击后退和前进也能切换菜单选中
        this.$nextTick(() => {

        });
      }
    }
  }
</script>

<style scoped>

</style>
