const total = 0;
const page = 1;
const num = 20;
const collegeId = "";
const collegeName = "";
const majorId = "";
const majorName = "";
const classId = "";
const className = "";
const gradeId = "";
const dataCollegeList= [];
const dataSchoolBuildList = [];
const dataDormBuildList = [];
const dataDeptList = [];
const currentYearList = [];
const currentTermList = [];
const currentWeekList = [];
const currentSeciton = 20;
const currentYear = "";
const currentMonth = "";
const currentDay = "";
const currentYearId = "";
const currentTermId = "";
const currentWeekNum = "";
const loginUserName = "";
const loginUserType = "";
const loginUserPhone = "";
const campusLogo = "";
const campusName = "";
const currentWeekNo = "";
const userJobNum = "";
const organizeName = "";
const realName = "";
const headImage = "";
const userPhone = "";
const auditCount = 0;
const loginUserId = "";
const buildInterest = [
  {
    label: '独立产权',
    value: "1"
  },
  {
    label: '联合产权',
    value: "2"
  },
  {
    label: '租用',
    value: "3"
  }
];
const classroomUsed = [
  {
    label: '普通教室',
    value: "1"
  },
  {
    label: '计算机房',
    value: "2"
  },
  {
    label: '实验室',
    value: "3"
  },
  {
    label: '实训室',
    value: "4"
  },
  {
    label: '阶梯教室',
    value: "5"
  }
];
const dormroomType = [
  {
    label: '男生宿舍',
    value: "0"
  },
  {
    label: '女生宿舍',
    value: "1"
  }
];
const searchTeacherType = [
  {
    label: "姓名",
    value: 'realName'
  },
  {
    label: "手机",
    value: 'phone'
  },
  {
    label: "工号",
    value: 'jobNum'
  },
  {
    label: "身份证",
    value: 'certificateNum'
  }
];
const searchStudentType = [
  {
    label: "姓名",
    value: 'realName'
  },
  {
    label: "手机",
    value: 'phone'
  },
  {
    label: "学号",
    value: 'studentId'
  },
  {
    label: "身份证",
    value: 'certificateNum'
  }
];

const searchStudentType2 = [
  {
    label: "姓名",
    value: 'realName'
  },
  {
    label: "学号",
    value: 'studentId'
  }
];

const g_sex = [
  {
    label: "男",
    value: '1'
  },
  {
    label: "女",
    value: '2'
  },
  {
    label: "未知",
    value: '3'
  }
];

const filterTypes = [
  { text: "处分", value: '处分' ,label: '处分'},
  { text: '奖励', value: '奖励' ,label: '奖励'}
];

const filterStatus = [
  { text: "待审批", value: '0' ,label: '待审批'},
  { text: '已通过', value: '3' ,label: '已通过'},
  { text: '已驳回', value: '4' ,label: '已驳回'}
];

const filterScoreTypes = [
  { text: "加分", value: 'true' ,label: '加分'},
  { text: '减分', value: 'false' ,label: '减分'}
];

const filterScoreLevels = [
  { text: "达标", value: true ,label: '达标'},
  { text: '不达标', value: false ,label: '不达标'}
];

const weekNoSelect = [
  { text: "周一", value: '1' ,label: '周一'},
  { text: '周二', value: '2' ,label: '周二'},
  { text: '周三', value: '3' ,label: '周三'},
  { text: '周四', value: '4' ,label: '周四'},
  { text: '周五', value: '5' ,label: '周五'},
  { text: '周六', value: '6' ,label: '周六'},
  { text: '周日', value: '7' ,label: '周日'}
];

const switchStatus = [
  { text: "开", value: '1' ,label: '开'},
  { text: '关', value: '0' ,label: '关'}
];

const levelStatus = [
  { text: "高", value: '高' ,label: '高'},
  { text: '中', value: '中' ,label: '中'},
  { text: '低', value: '低' ,label: '低'}
];

const filterCheckStatus = [
  { text: "已检查", value: true ,label: '已检查'},
  { text: '未检查', value: false ,label: '未检查'}
];

const filterAreaStatus = [
  { text: "个人区域", value: '1' ,label: '个人区域'},
  { text: '公共区域', value: '2' ,label: '公共区域'},
  { text: '空床', value: '3' ,label: '空床'}
];

const filterOtherAreaStatus = [
  { text: "个人区域", value: '1' ,label: '个人区域'},
  { text: '公共区域', value: '2' ,label: '公共区域'}
];

const filterEnableStatus = [
  { text: "启用", value: true ,label: '启用'},
  { text: '停用', value: false ,label: '停用'}
];

const filterPhoneOwner = [
  { text: "移动", value: 1 ,label: '移动'},
  { text: '联通', value: 2 ,label: '联通'},
  { text: '电信', value: 3 ,label: '电信'},
  { text: '其他', value: 4 ,label: '其他'}
];

const filterBillStatus = [
  { text: "待缴费", value: 1 ,label: '待缴费'},
  { text: '已缴费', value: 2 ,label: '已缴费'}
];

const filterDeviceUseType = [
  { text: "归寝签到", value: 1 ,label: '归寝签到'},
  { text: '课堂考勤', value: 2 ,label: '课堂考勤'},
  { text: '门禁直连用', value: 3 ,label: '门禁直连用'},
  { text: '门禁控制器用', value: 4 ,label: '门禁控制器用'}
];

const filterOnlineStatus = [
  { text: "在线", value: true, label: '在线'},
  { text: '离线', value: false, label: '离线'}
];

const filterDormBackStatus = [
  { text: "已归寝", value: "1", label: '已归寝'},
  { text: '晚归', value: "3", label: '晚归'},
  { text: '未归', value: "0", label: '未归'},
  { text: '超长未归', value: "4", label: '超长未归'},
  { text: '请假', value: "2", label: '请假'}
];

const filterClassAttendStatus = [
  { text: "出勤", value: "1", label: '出勤'},
  { text: '迟到', value: "3", label: '迟到'},
  { text: '早退', value: "4", label: '早退'},
  { text: '旷课', value: "0", label: '旷课'},
  { text: '请假', value: "2", label: '请假'}
];

const filterAttendTypes = [
  { text: "行政考勤", value: "attend", label: '行政考勤'},
  { text: '会议考勤', value: "meeting", label: '会议考勤'},
  { text: '日常请假', value: "leave", label: '日常请假'}
];

const filterScoreFlowTypes = [
  { text: "加分", value: "加分", label: '加分'},
  { text: '减分', value: "减分", label: '减分'}
];

const filterTripFlowTypes = [
  { text: "出差", value: "出差", label: '出差'}
];

const filterCardFlowTypes = [
  { text: "补卡", value: "补卡", label: '补卡'}
];

const filterUserTypes = [
  { text: "学生", value: "1", label: '学生'},
  { text: '教师', value: "2", label: '教师'},
  { text: '陌生人', value: "3", label: '陌生人'}
];

const filterUserTypes2 = [
  { text: "学生", value: "1", label: '学生'},
  { text: '教师', value: "2", label: '教师'}
];

const filterDoorOpenTypes = [
  { text: "正常", value: "3", label: '正常'},
  { text: '常开', value: "1", label: '常开'},
  { text: '常关', value: "2", label: '常关'}
];

const filterDoorOnlineStatus = [
  { text: "在线", value: 1, label: '在线'},
  { text: '离线', value: 2, label: '离线'}
];

const filterDoorExceptionStatus = [
  { text: "异常", value: "0", label: '异常'},
  { text: '受限', value: "1", label: '受限'},
  { text: '已解除', value: "2", label: '已解除'}
];

const filterDoorInOutStatus = [
  { text: "进入", value: '1' ,label: '进入'},
  { text: '外出', value: '2' ,label: '外出'}
];

const filterDoorSignStatus = [
  { text: '扫码通行', value: '1' ,label: '扫码通行'},
  { text: '刷脸通行', value: '2' ,label: '刷脸通行'},
  { text: '刷卡通行', value: '3' ,label: '刷卡通行'},
  { text: '刷码通行', value: '4' ,label: '刷码通行'},
];

const filterAuthOptions = [
  { text: '全部', value: '' ,label: '全部'},
  { text: '无需授权', value: '-1' ,label: '无需授权'},
  { text: '待授权', value: '0' ,label: '待授权'},
  { text: '已授权', value: '1' ,label: '已授权'},
  { text: '授权失败', value: '2' ,label: '授权失败'}
];

const filterAuthOtherOptions = [
  { text: '待授权', value: '0' ,label: '待授权'},
  { text: '已授权', value: '1' ,label: '已授权'},
  { text: '授权失败', value: '2' ,label: '授权失败'}
];

const filterTimeStatusOptions = [
  { text: '当日', value: '1' ,label: '当日'},
  { text: '本周', value: '2' ,label: '本周'},
  { text: '本月', value: '3' ,label: '本月'},
  { text: '本学期', value: '4' ,label: '本学期'}
];

const filterUserAccountActiveStatusOptions = [
  { text: '已激活', value: true ,label: '已激活'},
  { text: '未激活', value: false ,label: '未激活'}
];

const filterAppManageStatus = [
  { text: "待发布", value: 'false' ,label: '待发布'},
  { text: '已发布', value: 'true' ,label: '已发布'}
];

const filterAppManageType = [
  { text: "学生办事", value: '0' ,label: '学生办事'},
  { text: '老师办事', value: '1' ,label: '老师办事'},
  { text: '单位办事', value: '2' ,label: '单位办事'}
];

const filterGraduationType = [
  { text: "初中毕业", value: '初中' ,label: '初中毕业'},
  { text: '高中毕业', value: '高中' ,label: '高中毕业'},
  { text: '职高毕业', value: '职高' ,label: '职高毕业'},
  { text: '技校毕业', value: '技校' ,label: '技校毕业'},
  { text: '中专毕业', value: '中专' ,label: '中专毕业'}
];

const filterPoliticsType = [
  { text: "群众", value: '群众' ,label: '群众'},
  { text: '团员', value: '团员' ,label: '团员'},
  { text: '党员', value: '党员' ,label: '党员'}
];

const filterRetireType = [
  { text: "是", value: true ,label: '是'},
  { text: '否', value: false ,label: '否'}
];

const filterHardType = [
  { text: "无", value: "无" ,label: '无'},
  { text: '低保', value: '低保' ,label: '低保'},
  { text: '孤儿', value: '孤儿' ,label: '孤儿'},
  { text: '烈士子女', value: '烈士子女' ,label: '烈士子女'},
  { text: '低收入', value: '低收入' ,label: '低收入'},
  { text: '建档立卡', value: '建档立卡' ,label: '建档立卡'},
  { text: '其他', value: '其他' ,label: '其他'}
];

const filterFpType = [
  { text: "电子发票(增值税普通发票)", value: "电子发票(增值税普通发票)" ,label: '电子发票(增值税普通发票)'},
  { text: '电子发票(增值税专用发票)', value: '电子发票(增值税专用发票)' ,label: '电子发票(增值税专用发票)'},
  { text: '增值税普通发票', value: '增值税普通发票' ,label: '增值税普通发票'},
  { text: '增值税专用发票', value: '增值税专用发票' ,label: '增值税专用发票'},
  { text: '货运运输业增值税专用发票', value: '货运运输业增值税专用发票' ,label: '货运运输业增值税专用发票'},
  { text: '机动车销售统一发票', value: '机动车销售统一发票' ,label: '机动车销售统一发票'},
  { text: '增值税普通发票(卷式)', value: '增值税普通发票(卷式)' ,label: '增值税普通发票(卷式)'},
  { text: '二手车销售统一发票', value: '二手车销售统一发票' ,label: '二手车销售统一发票'},
  { text: '区块链电子发票', value: '区块链电子发票' ,label: '区块链电子发票'},
  { text: '财政电子票据', value: '财政电子票据' ,label: '财政电子票据'},
  { text: '定额发票', value: '定额发票' ,label: '定额发票'},
  { text: '通用机打发票', value: '通用机打发票' ,label: '通用机打发票'},
  { text: '通用电子发票', value: '通用电子发票' ,label: '通用电子发票'},
  { text: '医院门诊收费票据 (电子)', value: '医院门诊收费票据 (电子)' ,label: '医院门诊收费票据 (电子)'},
  { text: '剪开式', value: '剪开式' ,label: '剪开式'},
  { text: '全电发票 (普通发票)', value: '全电发票 (普通发票)' ,label: '全电发票 (普通发票)'},
  { text: '全电发票(纸质专用发票)', value: '全电发票(纸质专用发票)' ,label: '全电发票(纸质专用发票)'},
  { text: '通用电子发票', value: '通用电子发票' ,label: '通用电子发票'},
  { text: '全电发票(增值税专用发票)', value: '全电发票(增值税专用发票)' ,label: '全电发票(增值税专用发票)'},
  { text: '增值税普通发票(通行费)', value: '增值税普通发票(通行费)' ,label: '增值税普通发票(通行费)'},
  { text: '增值税电子专用发票', value: '增值税电子专用发票' ,label: '增值税电子专用发票'},
  { text: '火车票', value: '火车票' ,label: '火车票'},
  { text: '飞机票', value: '飞机票' ,label: '飞机票'},
  { text: '客车票', value: '客车票' ,label: '客车票'},
  { text: '其他发票', value: '其他发票' ,label: '其他发票'}
];

const filterBillTypes = [
  { text: "项目管理", value: 'XMGL' ,label: '项目管理'},
  { text: '采购合同单', value: 'CGHT' ,label: '采购合同单'},
  { text: '销售合同单', value: 'XSHT' ,label: '销售合同单'},
  { text: '通用合同单', value: 'TYHT' ,label: '通用合同单'},
  { text: '报账/报销单', value: 'BZBX' ,label: '报账/报销单'},
  { text: '对公打款单', value: 'DGDK' ,label: '对公打款单'},
  { text: '普通申请单', value: 'PIGL' ,label: '普通申请单'},
  { text: '借款单', value: 'JKGL' ,label: '借款单'},
  { text: '收款单', value: 'SKD' ,label: '收款单'},
  { text: '还款单', value: 'HKD' ,label: '还款单'}
];

const filterAccountType = [
  { text: "默认账户", value: '0' ,label: '默认账户', name: "默认账户"},
  { text: "现金账户", value: '1' ,label: '现金账户', name: "现金账户"},
  { text: "支付宝账户", value: '2' ,label: '支付宝账户', name: "支付宝账户"},
  { text: "微信账户", value: '3' ,label: '微信账户', name: "微信账户"},
  { text: "其他账户", value: '99' ,label: '其他账户', name: "其他账户"},
];

export default {
  total,
  page,
  num,
  collegeId,
  collegeName,
  majorId,
  majorName,
  classId,
  className,
  gradeId,
  dataCollegeList: [],
  dataSchoolBuildList: [],
  dataDormBuildList: [],
  dataDeptList: [],
  dataProcessList: [],
  currentDay,
  currentMonth,
  currentTermId,
  currentWeekNum,
  currentYear,
  loginUserName,
  loginUserType,
  loginUserPhone,
  campusLogo,
  campusName,
  currentWeekNo,
  userJobNum,
  organizeName,
  realName,
  headImage,
  userPhone,
  auditCount,
  loginUserId,
  currentSeciton,
  buildInterest,
  classroomUsed,
  dormroomType,
  searchTeacherType,
  g_sex,
  searchStudentType,
  filterStatus,
  filterTypes,
  filterScoreTypes,
  filterScoreLevels,
  weekNoSelect,
  switchStatus,
  levelStatus,
  filterCheckStatus,
  filterAreaStatus,
  filterOtherAreaStatus,
  filterEnableStatus,
  filterPhoneOwner,
  filterBillStatus,
  filterDeviceUseType,
  filterOnlineStatus,
  filterDormBackStatus,
  filterClassAttendStatus,
  currentYearList,
  currentTermList,
  currentWeekList,
  currentYearId,
  filterAttendTypes,
  filterScoreFlowTypes,
  filterTripFlowTypes,
  filterCardFlowTypes,
  filterUserTypes,
  filterUserTypes2,
  filterDoorOpenTypes,
  filterDoorOnlineStatus,
  filterDoorExceptionStatus,
  filterDoorInOutStatus,
  filterDoorSignStatus,
  searchStudentType2,
  filterAuthOptions,
  filterAuthOtherOptions,
  filterTimeStatusOptions,
  filterUserAccountActiveStatusOptions,
  filterAppManageStatus,
  filterAppManageType,
  filterGraduationType,
  filterPoliticsType,
  filterRetireType,
  filterHardType,
  filterFpType,
  filterBillTypes,
  filterAccountType
}
