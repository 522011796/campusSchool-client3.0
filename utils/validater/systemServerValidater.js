import rules from './rules'
export default {
  data(){
    return {
      rules: {
        title: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        userId: [
          { required: true, message: this.$t("请输入信息"), trigger: 'change' }
        ]
      }
    }
  }
}
