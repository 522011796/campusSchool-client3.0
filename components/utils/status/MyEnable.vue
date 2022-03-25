<template>
  <span>
    <label v-if="status == true" class="color-success">{{$t("启用")}}</label>
    <label v-if="status == false" class="color-danger">{{$t("禁用")}}</label>
  </span>
</template>

<script>
  export default {
    name: 'myEnable',
    props: {
      status: {
        default: '',
        type: [String, Number, Boolean]
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
