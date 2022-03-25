<template>
  <div>
    <nuxt></nuxt>
  </div>
</template>

<script>
  export default {
    name: 'defaultFullScreen',
    data(){
      return {

      }
    },
    mounted () {

    },
    created() {

    },
    methods: {

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
