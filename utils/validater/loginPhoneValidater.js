import rules from './rules'
export default {
  data(){
    return {
      rules: {
        code: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        phone: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ]
      }
    }
  }
}
