import rules from './rules'
export default {
  data(){
    return {
      rules: {
        title: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        userId: [
          { required: true, message: this.$t("请设置信息"), trigger: 'change' }
        ],
        sqTime: [
          { required: true, message: this.$t("请设置信息"), trigger: 'blur' }
        ],
        jkTime: [
          { required: true, message: this.$t("请设置信息"), trigger: 'blur' }
        ],
        skTime: [
          { required: true, message: this.$t("请设置信息"), trigger: 'blur' }
        ],
        hkTime: [
          { required: true, message: this.$t("请设置信息"), trigger: 'blur' }
        ],
        bxTime: [
          { required: true, message: this.$t("请设置信息"), trigger: 'blur' }
        ],
        fkTime: [
          { required: true, message: this.$t("请设置信息"), trigger: 'blur' }
        ],
        amount: [
          { required: false, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateRNf2, trigger: 'blur' }
        ],
      }
    }
  }
}
