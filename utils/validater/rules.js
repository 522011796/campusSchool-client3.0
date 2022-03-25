// 电话
let phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
// 必须为数字
let numberReg = /^\d+$|^\d+[.]?\d+$/;
// 必须为数字
let numberNoZeroReg = /^[1-9][0-9]*$/;
//邮箱
let emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
//1-20位名称，只能是中英文或符号
let s1_20Reg = /^[^0-9]{1,20}$/;
//1-10位整数
let n1_10Reg = /^([1-9]{1,10})$/;
//1-20位字母、数字、中文
let all1_20Reg = /^[\u4e00-\u9fa5a-zA-Z0-9]{1,20}$/;
//1-10位字母、数字
let sn1_10Reg = /^[a-zA-Z0-9]{1,10}$/;
//1-20位字母、数字、中文及特殊字符
let allOther1_20Reg = /^[\u4e00-\u9fa5a-zA-Z0-9!@#$%^&*-_,，、。；;()（）\.]{1,20}$/;
//1-30位字母、数字、中文及特殊字符，不能数字、空格、点开头
let allRealName1_30Reg = /^[\u4e00-\u9fa5a-zA-Z][\u4e00-\u9fa5\.\sa-zA-Z0-9]{0,29}$/;
//身份证
let idCard_Reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
//整数或者2位小数
let nf2_Reg = /^([\+ \-]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/;
//整数或者2位小数
let rightnNf2_Reg = /^([\+]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/;
//整数或者1位小数
let rightnNf1_Reg = /^(?!0+(\.0*)?$)\d+(\.\d{1})?$/;
//负数或者2位小数
let mnf2_Reg = /(^(-)[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(-)(0){1}$)|(^(-)[0-9]\.[0-9]([0-9])?$)/;
//0-100
let n0_100_Reg = /^([0-9]{1,2}|100)$/;
//0-100
let n0_100f2_Reg = /^(\d|[1-9]\d|100)(\.\d{1,2})?$/;
//0-999
let n0_999_Reg = /^([0-9]{1,3}|999)$/;
//ip
let ip_Reg = /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/;

let FormValidate = (function () {
  function FormValidate() {
  }

  // From表单验证规则  可用于公用的校验部分
  FormValidate.Form = function () {
    return {
      // 数字验证>0
      validate_numberNoZeroReg (rule, value, callback) {
        if (value && value != ""){
          numberNoZeroReg.test(value) ? callback() : callback(new Error('请输入大于0的正整数'))
        }else {
          callback();
        }
      },
      // ip验证
      validate_ip (rule, value, callback) {
        if (value && value != ""){
          ip_Reg.test(value) ? callback() : callback(new Error('IP地址格式错误'))
        }else {
          callback();
        }
      },
      // 数字验证0-100
      validate0_100Number (rule, value, callback) {
        if (value && value != ""){
          n0_100_Reg.test(value) ? callback() : callback(new Error('0-100正整数'))
        }else {
          callback();
        }
      },
      // 数字验证0-100，两位小数
      validate0_100FloatNumber (rule, value, callback) {
        if (value && value != ""){
          n0_100f2_Reg.test(value) ? callback() : callback(new Error('0-100正整数,可以为两位小数'))
        }else {
          callback();
        }
      },
      // 数字验证0-999
      validate0_999Number (rule, value, callback) {
        if (value && value != ""){
          n0_100_Reg.test(value) ? callback() : callback(new Error('0-999正整数'))
        }else {
          callback();
        }
      },
      // 数字验证
      validateNumber (rule, value, callback) {
        if (value && value != ""){
          numberReg.test(value) ? callback() : callback(new Error('必须为数字'))
        }else {
          callback();
        }
      },
      // 整数或者2位小数
      validateRNf2 (rule, value, callback) {
        if (value && value != ""){
          rightnNf2_Reg.test(value) ? callback() : callback(new Error('正整数或者2位小数'))
        }else {
          callback();
        }
      },
      // 整数或者2位小数
      validateNf2 (rule, value, callback) {
        if (value && value != ""){
          nf2_Reg.test(value) ? callback() : callback(new Error('整数或者2位小数,可以为负数'))
        }else {
          callback();
        }
      },
      // 负数或者2位小数
      validateMnf2 (rule, value, callback) {
        if (value && value != ""){
          mnf2_Reg.test(value) ? callback() : callback(new Error('负数或者2位小数'))
        }else {
          callback();
        }
      },
      // 整数或者1位小数
      validateRNf1 (rule, value, callback) {
        if (value && value != ""){
          rightnNf1_Reg.test(value) ? callback() : callback(new Error('非0整数或者1位小数'))
        }else {
          callback();
        }
      },
      // 电话号码验证
      validatePhone (rule, value, callback) {
        if (value && value != ""){
          phoneReg.test(value) ? callback() : callback(new Error('手机格式不正确'))
        }else {
          callback();
        }
      },
      // 身份证验证
      validateIdCard (rule, value, callback) {
        if (value && value != ""){
          idCard_Reg.test(value) ? callback() : callback(new Error('身份证格式不正确'))
        }else {
          callback();
        }
      },
      // 邮箱验证
      validateEmail (rule, value, callback) {
        if (value && value != ""){
          emailReg.test(value) ? callback() : callback(new Error('邮箱格式不正确'))
        }else {
          callback();
        }
      },
      // 1-20位中英文或字符名称验证
      validateS1_20Reg (rule, value, callback) {
        if (value && !s1_20Reg.test(value)) {
          callback(new Error('请输入1-20位中英文或符号'))
        } else {
          callback()
        }
      },
      // 1-10位正整数验证
      validaten1_10Reg (rule, value, callback) {
        if (value && !n1_10Reg.test(value)) {
          callback(new Error('请输入1-10位正整数'))
        } else {
          callback()
        }
      },
      // 1-10位字母、数字
      validatesn1_10Reg (rule, value, callback) {
        if (value && !sn1_10Reg.test(value)) {
          callback(new Error('请输入1-10位数字、字母'))
        } else {
          callback()
        }
      },
      // 1-20位字母、数字、中文
      validatenall1_20Reg (rule, value, callback) {
        if (value && !all1_20Reg.test(value)) {
          callback(new Error('请输入1-20位中文、数字、字母'))
        } else {
          callback()
        }
      },
      // 1-20位字母、数字、中文、特殊字符
      validatenallOther1_20Reg (rule, value, callback) {
        if (value && !allOther1_20Reg.test(value)) {
          callback(new Error('请输入1-20位字符(包含特殊字符)'))
        } else {
          callback()
        }
      },
      // 1-30位字母、数字、中文、不能数字、空格、点开头
      validateRealName1_30Reg (rule, value, callback) {
        if (value && !allRealName1_30Reg.test(value)) {
          callback(new Error('中文、数字、字母开头的字符，长度1-30'))
        } else {
          callback()
        }
      }
    }
  }

  return FormValidate
}())

exports.FormValidate = FormValidate
