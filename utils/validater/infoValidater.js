import rules from './rules'
export default {
  data(){
    return {
      rules: {
        name: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        phone: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        fatherPhone: [
          { required: false, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        matherPhone: [
          { required: false, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        email: [
          { required: false, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateEmail, trigger: 'blur' }
        ]
      }
    }
  }
}
