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

      }
    },
    mounted () {

    },
    created() {
      this.init();
    },
    methods: {
      async init(){
        await this.queryStudentTimeInfo();
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
