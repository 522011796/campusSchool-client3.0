<template>
  <div>
    <div>
      <span>{{realName}}</span>
    </div>
    <div>
      <span>{{$t("由原状态")}}:</span>
      <span>{{dormStatusInfo(srcStatus)}}</span>
      <span>{{$t("改为")}}:</span>
      <span>{{dormStatusInfo(srcStatus)}}</span>
    </div>
    <div>
      <span>{{$t("时间")}}:</span>
      <span>{{time}}</span>
    </div>
  </div>
</template>

<script>
  import {dormStatus} from "../../../utils/utils";

  export default {
    name: 'myDormAttenStatus',
    props: {
      realName: {
        default: '',
        type: [String, Number]
      },
      srcStatus: {
        default: '',
        type: [String, Number]
      },
      newStatus: {
        default: '',
        type: [String, Number]
      },
      time: {
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
      dormStatusInfo(val){
        return dormStatus('set', val);
      }
    }
  }
</script>
