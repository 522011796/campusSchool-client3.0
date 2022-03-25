<template>
  <span>
    <template>
      <span v-if="status == 0">
        <label class="color-muted">{{$t("待审批")}}</label>
      </span>
      <span v-if="status == 3">
        <label class="color-success">{{$t("已通过")}}</label>
      </span>
      <span v-if="status == 4">
        <label class="color-warning">{{$t("已驳回")}}</label>
      </span>

      <span v-if="handler">
        /
        <label>{{handler}}</label>
      </span>
    </template>
  </span>
</template>

<script>
  export default {
    name: 'mySex',
    props: {
      status: {
        default: 0,
        type: [String, Number]
      },
      handler: {
        default: '',
        type: String, Number
      }
    },
    computed: {
      selectModel(){

      }
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
