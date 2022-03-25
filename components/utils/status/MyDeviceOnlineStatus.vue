<template>
  <span>
    <label v-if="type == true" class="color-success">{{$t("在线")}}</label>
    <label v-if="type == false" class="color-warning">{{$t("离线")}}</label>
  </span>
</template>

<script>
  export default {
    name: 'myDeviceOnlineStatus',
    props: {
      type: {
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
