import rules from './rules'
export default {
  data(){
    return {
      rules: {
        signStatus: [
          { required: true, message: this.$t("请输入信息"), trigger: 'change' }
        ],
        signTime: [
          { required: true, message: this.$t("请输入信息"), trigger: 'change' }
        ],
        interface: [
          { required: true, message: this.$t("请输入信息"), trigger: 'change' }
        ],
        peopleNum: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' },
          { validator: rules.FormValidate.Form().validateNumber, trigger: 'blur' }
        ],
        address: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ],
        vehicle: [
          { required: true, message: this.$t("请输入信息"), trigger: 'change' }
        ],
        vehicleNo: [
          { required: true, message: this.$t("请输入信息"), trigger: 'blur' }
        ]
      }
    }
  }
}
