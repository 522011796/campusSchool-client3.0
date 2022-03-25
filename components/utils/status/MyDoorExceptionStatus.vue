<template>
  <span>
    <label v-if="status == 0" class="color-danger">{{$t("异常")}}</label>
    <label v-if="status == 1" class="color-warning">{{$t("受限")}}</label>
    <label v-if="status == 2" class="color-success">{{$t("已解除")}}</label>
  </span>
</template>

<script>
  export default {
    name: 'myDoorExceptionStatus',
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
