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
          { required: false, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateEmail, trigger: 'blur' }
        ],
        graduation: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        politics: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        retire: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        hard: [
          { required: true, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        graduationSchool: [
          { required: true, message: this.$t("请输入信息"), trigger: 'change' }
        ],
        connType: [
          { required: true, type: 'array', min: 1, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        adProvince: [
          { required: true, type: 'array', min: 2, message: this.$t("请选择信息"), trigger: 'change' }
        ],
        bzrName: [
          { required: true, message: this.$t("请输入姓名"), trigger: 'blur' }
        ],
        bzrPhone: [
          { required: true, message: this.$t("请输入手机号"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validatePhone, trigger: 'blur' }
        ],
        postalCode: [
          { required: true, message: this.$t("请填写邮政编码"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validate_posterCode, trigger: 'blur' }
        ]
      }
    }
  }
}
