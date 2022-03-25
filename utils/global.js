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
  filterAppManageType
}
