import rules from './rules'
export default {
  data(){
    return {
      rules: {
        type: [
          { required: true, message: this.$t("请输入信息"), trigger: 'change' }
        ],
        time: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        money: [
          { required: true, message: this.$t("请输入信息"), trigger: 'change' },
          { validator: rules.FormValidate.Form().validateRNf2, trigger: 'blur' }
        ]
      }
    }
  }
}
