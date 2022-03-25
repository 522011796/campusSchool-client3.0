<template>
  <span>
    <label v-if="status == -1" class="color-warning">{{$t("无需授权")}}</label>
    <label v-else-if="status == 0">{{$t("待授权")}}</label>
    <label v-else-if="status == 1" class="color-success">{{$t("已授权")}}</label>
    <label v-else-if="status == 2" class="color-danger">{{$t("授权失败")}}</label>
    <label v-else>--</label>
  </span>
</template>

<script>
  export default {
    name: 'myAuthOptions',
    props: {
      status: {
        default: '',
        type: [String, Number]
      }
    },
    computed: {

    },
    data() {
      return {
        value: ''
      }
    },
    methods: {

    }
  }
</script>
