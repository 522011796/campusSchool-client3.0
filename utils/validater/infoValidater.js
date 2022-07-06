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
        qq: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        wechat: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        fatherName: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        fatherPhone: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        matherName: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        matherPhone: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        email: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateEmail, trigger: 'blur' }
        ]
      }
    }
  }
}
