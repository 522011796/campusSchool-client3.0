/**
 * 公共接口地址
 * @type {{session_url: string}}
 */
export const common = {
  login_url: 'proxy/user/login', //登录
  logout_url: '/proxy/user/logouts',//注销

  session_url: '/proxy/user/session',
  date_now: '/proxy/course/rollcall/campus/setting/now',//当前时间
  organization_week: '/proxy/edu/edu/term/current/week',//当前学期学周
  noread_num: '/proxy/user/message/notRead/num',//未读消息数
  msg_list: '/proxy//user/message/userMsg/Page',//消息列表
  msgRead_list: '/proxy/user/message/userMsg/Page',//消息列表
  msg_detail: '/proxy/user/message/info',//消息详细，老版本
  msg_detail_center: '/proxy/user/unionapply/apply/info',//统一消息详细，新版本
  msg_readed: '/proxy/user/message/app/msg/read', //设置已读
  msg_handle: '/proxy/user/unionapply/apply/handel',//消息审批操作
  msg_audit_list: '/proxy/user/unionapply/apply/teacher/handle/page',//审批消息列表
  noread_count: '/proxy/user/message/notRead/count',//审批未读消息数
  updatephone_mms: '/proxy/uup/captcha/updPhone/send',//获取修改手机验证码
  updatephone_save: '/proxy/uup/ssoUser/phone',//更新手机
  updatephone_admin_save_url: '/proxy/user/schoolAdmin/upd/phone',//更新手机
  updatepwd_mms: '/proxy/uup/captcha/send',//获取修改密码验证码
  updatepwd_save: '/proxy/uup/ssoUser/reset/pass',//更新密码--teacher
  updatepwd_admin_save_pass: '/proxy/user/school_admin/upd/pass',//更新密码--admin
  school_info: '/proxy/school/school/getSchInfo',//学校信息
  update_school_info: '/proxy/school/school/info/update',//更新学校信息
  updatephone_admin_save: '/proxy/user/captcha/schoolAdmin/phone_sms',//更新手机--admin
  updatephone_teacher_save: '/proxy/uup/captcha/updPhone/send',//更新手机--教师
  updatepwd_admin_save: '/proxy/user/captcha/schoolAdmin/pass_sms',//更新密码--admin

  upload_file: '/proxy/school/multipartFile/upload',//上传文件
  upload_imglist_file: '/proxy/school/school/uploadImg',//上传迎新文件

  organization_url:  '/proxy/school/hierarchical/get-organize-tree',//组织机构列表
  organization_add:  '/proxy/school/school/dept/add',//组织机构添加
  organization_update:  '/proxy/school/school/dept/update',//组织机构编辑
  organization_delete: '/proxy/school/school/dept/delete',//组织机构删除
  organization_file: '/proxy/school/school/organize/download',//组织机构导入文件模版
  organization_upload: '/proxy/school/school/organize/multyImport',//组织机构导入地址

  hierarchical_build: '/proxy/school/hierarchical/get-building-tree',//0教学楼 1宿舍楼
  hierarchical_college: '/proxy/edu/edu/major/year/class/tree',//学院
  hierarchical_dept: '/proxy/school/hierarchical/get-organize-tree',//部门
  teacher_list: '/proxy/user/employee/page',//教师列表

  year_list: '/proxy/edu/edu/year/page',//学年列表
  term_list: '/proxy/edu/edu/term/page',//学期列表
  week_list: '/proxy/edu/edu/teach/getSetting',//学周列表
  add_year: '/proxy/edu/edu/year/add',//添加学年
  update_year: '/proxy/edu/edu/year/update',//修改学年
  delete_year: '/proxy/edu/edu/year/delete',//删除学年
  add_term: '/proxy/edu/edu/term/add',//添加学期
  update_term: '/proxy/edu/edu/term/update',//编辑学期
  delete_term: '/proxy/edu/edu/term/delete',//删除学期
  check_current_year: '/proxy/edu/edu/year/judge',//检查学年是否是当前
  check_current_term: '/proxy/edu/edu/term/judge',//检查学期是否是当前
  set_current_out: '/proxy/edu/edu/year/currentOut',//设置非当前学年
  set_current_in: '/proxy/edu/edu/year/currentIn',//设置当前学年
  set_current_term_out: '/proxy/edu/edu/term/currentOut',//设置非当前学期
  set_current_term_in: '/proxy/edu/edu/term/currentIn',//设置当前学期
  get_term: '/proxy/edu/edu/teach/getSetting',//获取学期详细,
  save_term_info: '/proxy/edu/edu/teach/setting',//保存学期设置

  college_list: '/proxy/school/hierarchical/get-college-list-by-campus-id',//学院列表
  college_delete: '/proxy/edu/edu/college/delete',//删除学院
  college_upate: '/proxy/edu/edu/college/edit',//编辑学院
  college_add: '/proxy/edu/edu/college/add',//编辑学院

  major_list: '/proxy/school/hierarchical/get-major-list-by-college-id',//专业列表
  major_add: '/proxy/edu/edu/major/add',//添加专业
  major_edit: '/proxy/edu/edu/major/edit',//编辑专业
  major_delete: '/proxy/edu/edu/major/delete',//删除专业

  class_list: '/proxy/edu/edu/class/page',//班级列表
  class_add: '/proxy/edu/edu/class/add',//添加班级
  class_edit: '/proxy/edu/edu/class/edit',//编辑班级
  class_delete: '/proxy/edu/edu/class/delete',//删除班级

  build_list: '/proxy/school/hierarchical/get-building-list-by-campus-id-and-type',//建筑楼、宿舍楼列表
  build_add: '/proxy/building/building/add',//添加建筑楼
  build_update: '/proxy/building/building/update',//编辑建筑楼
  build_delete: '/proxy/building/building/delete',//删除建筑楼

  classroom_page: '/proxy/building/classroom/page',//教室列表--分页
  classroom_add: '/proxy/building/classroom/add',//教室添加
  classroom_edit: '/proxy/building/classroom/update',//教室编辑
  classroom_delete: '/proxy/building/classroom/delete',//教室删除
  classroom_list: '/proxy/school/hierarchical/get-room-list-by-floor-num',//教室列表--树形无分页

  dormroom_page: '/proxy/building/dormitory/page',//宿舍列表--分页
  dormroom_add: '/proxy/building/dormitory/add',//宿舍添加
  dormroom_update: '/proxy/building/dormitory/update',//宿舍编辑
  dormroom_delete: '/proxy/building/dormitory/delete',//宿舍删除

  teacher_edit: '/proxy/user/employee/edit',//教师编辑
  teacher_add: '/proxy/user/employee/add',//教师添加
  teacher_delete: '/proxy/user/employee/del',//教师删除
  teacher_upload: '/proxy/user/employee/import2',//教师导入
  teacher_file: '/proxy/user/file/download',//教师导入文件模版
  upload_loop_result: '/proxy/user/import/loop/messages',//导入信息返回

  student_list: '/proxy/user/student/page',//学生列表
  student_edit: '/proxy/user/student/update',//学生编辑
  student_add: '/proxy/user/student/add',//学生添加
  student_delete: '/proxy/user/student/del',//学生删除
  student_upload: '/proxy/user/student/import2',//学生导入
  student_file: '/proxy/user/file/download',//学生导入文件模版

  log_list: '/proxy/log/log/page',//日志
  log_type: '/proxy/log/logtype/get/select/list/exclude/login',//日志类型
  log_clear: '/proxy/log/log/clear',//清空日志

  audit_page: '/proxy/user/unionapply/apply/page',//审批列表统一
  audit_download: '/proxy/user/unionapply/apply/download',//审批列表导出

  audit_re_level: '/proxy/user/unionapply/punishment/level/list',//奖惩级别列表
  audit_re_add: '/proxy/user/unionapply/apply/add',//奖惩申请添加
  audit_re_static: '/proxy/user/unionapply/punishment/apply/count',//奖惩统计
  audit_re_static_add: '/proxy/user/unionapply/punishment/level/add',//奖惩级别添加
  audit_re_static_del: '/proxy/user/unionapply/punishment/level/del',//奖惩级别删除

  audit_credit_type_page: '/proxy/user/quality/type/page',//学分项目列表
  audit_credit_type_fliter: '/proxy/user/quality/type/name',//学分项目筛选
  audit_credit_type_fliter_add: '/proxy/user/quality/type/save',//学分项目添加
  audit_credit_type_fliter_del: '/proxy/user/quality/type/del',//学分项目删除

  audit_credit_score_fliter_page: '/proxy/user/quality/standard/page',//学分分值列表
  audit_credit_score_fliter_save: '/proxy/user/quality/standard/save',//学分分值添加
  audit_credit_score_fliter_del: '/proxy/user/quality/standard/del',//学分分值删除

  audit_credit_static_page: '/proxy/user/quality/student/page',//学分分析列表
  audit_credit_export: '/proxy/user/quality/student/export',//学分导出列表
  audit_credit_static_count: '/proxy/user/quality/student/count',//学分分析统计

  leave_query_page: '/proxy/user/student/leave/apply/page',//请假查询分页
  leave_query_level_list: '/proxy/user/student/leave/apply/grade/list',//请假等级列表
  leave_query_type_list: '/proxy/user/student/leave/apply/type/list',//请假类型列表
  leave_query_level_save: '/proxy/user/student/leave/apply/grade/save',//请假等级修改
  leave_query_level_add: '/proxy/user/student/leave/apply/type/add',//请假类型添加/修改
  leave_query_level_del: '/proxy/user/student/leave/apply/type/del',//请假类型删除
  leave_query_level_count: '/proxy/user/student/leave/stat/count',//请假类型统计
  leave_query_level_manage_page: '/proxy/user/student/leave/stat/page',//请假管理分页
  leave_query_level_manage_export: '/proxy/user/student/leave/stat/export',//请假管理导出
  leave_query_level_manage_unit_page: '/proxy/user/student/leave/apply/timeUnitPage',//请假管理详细列表
  leave_query_level_manage_unit_export: '/proxy/user/student/leave/apply/timeUnitExport',//请假管理导出

  housework_query_page: '/proxy/course/quantization/qtzt-query-page',//内务评比分页
  housework_query_count: '/proxy/course/quantization/qtzt-query-count',//内务评比统计
  housework_query_info: '/proxy/course/quantization/qtzt-query-info',//内务评比公共区域
  housework_query_student_page: '/proxy/course/quantization/qtzt-user-query-page',//内务评比个人区域
  housework_query_edit_info: '/proxy/course/quantization/qtzt-edit-status',//内务评比设置合格不合格
  housework_query_edit_all_info: '/proxy/course/quantization/qtzt-all-pub-edit-status',//内务评比设置合格不合格--公共全部
  housework_query_edit_private_info: '/proxy/course/quantization/qtzt-all-priv-edit-status',//内务评比设置合格不合格--个人全部
  housework_query_save: '/proxy/course/quantization/qtzt-finish',//内务评比设置完成设置
  housework_query_setting: '/proxy/course/quantization/checkconf-query',//内务评比设置完成设置
  housework_query_person_change: '/proxy/course/quantization/qtzt-uncheck-query-page',//内务评比人员变更记录
  housework_query_check_item_page: '/proxy/course/quantization/checkitem-query-page',//内务评比项目列表
  housework_query_check_item_save: '/proxy/course/quantization/checkitem-add',//内务评比保存项目
  housework_query_check_item_edit: '/proxy/course/quantization/checkitem-edit',//内务评比保存项目
  housework_query_check_item_del: '/proxy/course/quantization/checkitem-del',//内务评比删除项目
  housework_query_check_conf_save: '/proxy/course/quantization/checkconf-save',//内务评比设置周期
  housework_query_check_conf_query: '/proxy/course/quantization/checkconf-query',//内务评比查询周期
  housework_query_check_person_list: '/proxy/course/quantization/checkperm-query-page',//内务评比检查人列表
  housework_query_check_person_del: '/proxy/course/quantization/checkperm-del',//内务评比检查人列表--删除
  housework_query_check_college: '/proxy/edu/edu/college/catalog',//内务评比学院列表
  housework_query_check_dorm: '/proxy/building/buildings/type',//内务评比宿舍楼列表
  housework_query_check_person_save: '/proxy/course/quantization/checkperm-add',//内务评比检查人添加
  housework_query_check_person_edit: '/proxy/course/quantization/checkperm-edit',//内务评比检查人删除
  housework_query_record_export: '/proxy/course/quantization/qtzt-query-export',//内务评比记录导出
  housework_query_class_record_export: '/proxy/course/quantization/qtzt-query-export',//内务评比记录导出

  phone_limit_page: '/proxy/user/phone/limit/page',//手机号段限制
  phone_limit_save: '/proxy/user/phone/limit/save',//手机号段设置
  phone_limit_del: '/proxy/user/phone/limit/del',//手机号段删除
  phone_limit_no: '/proxy/user/phone/limit/no',//手机编号自动
  phone_limit_status: '/proxy/user/phone/limit/status',//手机批量操作
  phone_limit_import: '/proxy/user/phone/limit/import',//手机导入
  phone_limit_tips_set: '/proxy/user/phone/limit/setting/update',//手机提示信息设置
  phone_limit_tips_get: '/proxy/user/phone/limit/setting/get',//手机提示信息获取

  file_import_modal: '/proxy/user/file/download',//导入文件模版
  device_take_list: '/proxy/school/device/device/take/list',//拍照、读取卡号设备
  device_take_face: '/proxy/school/device/face/take/img',//拍照
  device_take_get_face: '/proxy/school/device/face/get/take/img',//拍照轮训获取结果
  device_take_get_card: '/proxy/school/device/card/regit',//获取卡号请求结果
  device_take_get_loop_card: '/proxy/school/device/get/card/regit',//获取卡号轮训获取结果

  bed_select_list: '/proxy/building/dormitory/bed/select/list',//床位列表

  stranger_page: '/proxy/school/person/stranger/recognition/page',//陌生人识别记录
  dorm_online_page: '/proxy/building/dormitory/order/page',//在线选寝记录
  dorm_online_handle: '/proxy/building/dormitory/order/handle',//在线选寝确认

  screen_group_page: '/proxy/course/screen/query-screen-group-page',//大屏分组管理
  screen_group_page_add: '/proxy/course/screen/add-screen-group',//大屏分组设置
  screen_group_page_del: '/proxy/course/screen/del-screen-group',//大屏分组删除
  screen_add: '/proxy/course/screen/add-screen',//大屏添加

  screen_my_page: '/proxy/course/screen/query-screen-page',//我的大屏分页
  screen_my_edit: '/proxy/course/screen/edit-screen',//我的大屏启禁用
  screen_my_del: '/proxy/course/screen/del-screen',//我的大屏启删除

  school_static_top: '/proxy/user/student/school/count',//考勤态势顶部统计
  school_static_summary: '/proxy/course/rollcallbigdata/overall/summary',//考勤态势本周本月考勤统计
  school_static_pie: '/proxy/course/rollcallbigdata/overall/chart/pie',//考勤态势排名饼图
  school_static_line: '/proxy/course/rollcallbigdata/overall/chart/line',//考勤态势排名线性图

  school_static_pic: '/proxy/course/rollcallbigdata/overall/rollcall/face/all',//考勤画像

  student_analysis_static: '/proxy/course/rollcallbigdata/overall/rollcall/student/detail/summary',//学生分析课堂统计信息
  student_analysis_bed_static: '/proxy/course/rollcallbed/rollcallbed/student/detail/summary',//学生分析归寝统计信息
  student_analysis_static_page: '/proxy/course/rollcallbigdata/overall/rollcall/student/record/page',//学生分析课堂考勤记录分页--日
  student_analysis_static_count_page: '/proxy/course/rollcallbigdata/overall/rollcall/student/detail/page',//学生分析课堂考勤记录分页--周/年/学期
  student_analysis_bed_static_page: '/proxy/course/rollcallbed/rollcallbed/student/detail/page',//学生分析归寝统计信息
  student_analysis_bed_static_top_page: '/proxy/course/rollcallbigdata/overall/rollcall/student/ranking/page',//学生分析排名

  qtzt_analysis_static_page: '/proxy/course/quantization/query-qtzt-class-statistic-page',//量化统计信息
  qtzt_analysis_static_student_page: '/proxy/course/quantization/query-qtzt-user-statistic-page',//量化统计学生信息
  qtzt_analysis_static_status_list: '/proxy/course/quantization/query-qtzt-statistic-base',//量化统计状态
  qtzt_analysis_static_class_share_list: '/proxy/course/quantization/query-qtzt-class-statistic-info',//量化统计班级公共区域
  qtzt_analysis_static_class_student_list: '/proxy/course/quantization/query-qtzt-user-statistic-page',//量化统计班级个人区域
  qtzt_analysis_static_set: '/proxy/course/quantization/statconf-save',//量化统计设置
  qtzt_analysis_static_set_query: '/proxy/course/quantization/statconf-query',//量化统计设置查询
  qtzt_analysis_static_set_query_export: '/proxy/course/quantization/query-qtzt-class-statistic-export',//量化统计--导出

  local_pad_page: '/proxy/school/device/pad/page',//本地平板查询
  local_pad_sn: '/proxy/school/device/pad/add/get/sn',//本地平板sn查询
  local_pad_add: '/proxy/school/device/pad/add',//本地平板添加
  local_pad_config_get: '/proxy/school/device/pad/config/get',//本地平板配置获取
  local_pad_config_set: '/proxy/school/device/pad/config/set',//本地平板配置
  local_pad_config_delete: '/proxy/school/device/pad/delete',//本地平板删除
  local_pad_config_picsync: '/proxy/school/device/device/clearSyncNum',//本地平板照片同步
  local_pad_config_persync: '/proxy/school/device/user/sync/valid',//本地平板人员同步
  local_pad_muti_delete: '/proxy/school/device/pad/delete/batch',//本地平板批量删除、解绑
  local_pad_muti_reset: '/proxy/school/device/pad/reboot/batch',//本地平板批量重启

  wo_pad_page: '/proxy/school/device/wopad/page',//云端平板查询
  wo_pad_add: '/proxy/school/device/wopad/add',//云端平板添加
  wo_pad_config_get: '/proxy/school/device/wopad/setting/get',//云端平板配置获取
  wo_pad_config_set: '/proxy/school/device/wopad/setting/update',//云端平板配置
  wo_pad_config_delete: '/proxy/school/device/wopad/delete',//云端平板删除
  wo_pad_config_picsync: '/proxy/school/device/device/clearSyncNum',//云端平板照片同步
  wo_pad_config_persync: '/proxy/school/device/user/sync/valid',//云端平板人员同步
  wo_pad_muti_delete: '/proxy/school/device/wopad/delete/batch',//云端平板批量删除、解绑
  wo_pad_muti_reset: '/proxy/school/device/wopad/reboot/batch',//云端平板批量重启

  device_set: '/proxy/school/setting/set',//设备配置
  device_get: '/proxy/school/setting/get',//设备配置获取
  device_pad_local_down: '/proxy/school/setting/set/callbackUrl',//本地平板配置下发
  device_pad_local_check_down: '/proxy/school/setting/set/padCallbackUrl',//本地平板识别配置下发
  device_pad_local_hurt_down: '/proxy/school/setting/set/padHeartCallbackUrl',//本地平板心跳配置下发
  device_pad_wo_check_down: '/proxy/school/setting/set/wopadCallbackUrl',//云端平板识别配置下发
  device_door_down: '/proxy/school/setting/set/padCallbackUrl',//门禁控制配置下发

  device_class_location_page: '/proxy/school/location/classroom/page',//班级位置
  device_dorm_location_page: '/proxy/school/location/pad/location/page',//宿舍位置
  device_unbind_list: '/proxy/school/device/unbind/list',//需要被绑定的设备
  device_bind_build_set: '/proxy/school/location/classroom/device/bind',//绑定设备--教学楼
  device_bind_dorm_set: '/proxy/school/location/pad/location/bind',//绑定设备--宿舍楼
  device_bind_remove: '/proxy/school/location/classroom/device/unbind',//移除设备--教学楼
  device_bind_dorm_remove: '/proxy/school/location/pad/location/unbind',//移除设备--宿舍楼

  attend_meeting_page: '/proxy/school/meeting/query-meeting-page',//会议签到分页
  attend_meeting_static: '/proxy/school/meeting/query-meeting-user-stat',//会议签到详细统计
  attend_meeting_static_page: '/proxy/school/meeting/query-meeting-user-page',//会议签到详细分页
  attend_meeting_expand: '/proxy/school/meeting/export-meeting-list',//会议签到导出
  attend_meeting_add: '/proxy/school/meeting/add-meeting',//会议签到添加
  attend_meeting_device_page: '/proxy/school/device/query-rela-device-page',//人脸识别设备列表
  attend_meeting_edit: '/proxy/school/meeting/edit-meeting',//编辑会议
  attend_meeting_info: '/proxy/school/meeting/query-meeting-info',//获取会议详细
  attend_meeting_delete: '/proxy/school/meeting/del-meeting',//会议签到删除

  attend_dorm_page: '/proxy/course/rollcallbed/rollcallbed/page',//归寝查询
  attend_dorm_stat: '/proxy/course/rollcallbed/rollcallbed/build/stat',//归寝查询统计

  attend_dorm_static_page: '/proxy/course/rollcallbed/rollcallbed/stat/page',//归寝查询统计
  attend_dorm_static_record_page: '/proxy/course/rollcallbed/rollcallbed/user/record/page',//归寝查询统计详细

  attend_dorm_static_face_class_record_page: '/proxy/school/person/student/recognition/page',//归寝查询人脸识别记录

  attend_dorm_static_base: '/proxy/course/rollcallbed/rollcallbed/analyse/base',//归寝统计分析--基础信息统计
  attend_dorm_static_line: '/proxy/course/rollcallbed/rollcallbed/analyse/line/bar/point',//归寝统计分析--散点图
  attend_dorm_static_analyse_page: '/proxy/course/rollcallbed/rollcallbed/analyse/page',//归寝统计分析--分页

  attend_class_page: '/proxy/course/rollcallsta/user/rollCall/pageweb',//归寝统计分析--分页
  attend_class_static_base: '/proxy/course/rollcallbigdata/overall/rollcall/all/base',//归寝统计分析--基础信息统计
  attend_class_static_chart_base: '/proxy/course/rollcallbigdata/overall/rollcall/single/base',//归寝统计分析--图形统计
  attend_class_static_analyse_page: '/proxy/course/rollcallbigdata/overall/rollcall/single/page',//归寝统计分析--分页
  attend_class_static_face_class_record_page: 'proxy/school/person/student/recognition/page',//课堂查询人脸识别记录

  course_list: '/proxy/course/course/list',//课程列表

  attend_class_static_stu_page: '/proxy/course/rollcallsta/stu/sum/page',//课堂考勤--学生统计
  attend_class_static_stu_detail: '/proxy/course/rollcallsta/stu/rollCall/course',//课堂考勤--查询详细

  attend_class_static_ter_page: '/proxy/course/rollcallsta/tch/sum/page',//课堂考勤--学生统计
  attend_class_static_ter_detail: '/proxy/course/rollcallsta/tch/rollCall/course',//课堂考勤--查询详细
  attend_class_static_stu_detail_change_record: '/proxy/course/rollcalleditlog/record/page',//课堂考勤--变更记录
  attend_class_static_stu_detail_change_record_export: '/proxy/course/rollcallsta/stu/sum/export',//课堂考勤--导出
  attend_class_static_ter_detail_change_record_export: '/proxy/course/rollcallsta/tch/sum/export',//课堂考勤--导出

  attend_teacher_static_face_page: '/proxy/school/person/teacher/recognition/page',//综合考勤--识别记录
  attend_teacher_static_list_page: '/proxy/course/employee/summary/stat/page',//综合考勤--查询/报表
  attend_teacher_static_list_attend_detail: '/proxy/course/employee/summary/stat/page',//综合考勤--行政查询详细
  attend_teacher_static_list_meeting_detail: '/proxy/course/employee/summary/stat/page',//综合考勤--会议查询详细
  attend_teacher_static_list_leave_detail: '/proxy/course/employee/summary/stat/page',//综合考勤--请假查询详细
  attend_teacher_static_list_admin_detail_export: '/proxy/user/attendRecords/detail/export',//综合考勤--请假查询详细导出
  attend_teacher_static_list_meeting_detail_export: '/proxy/school/meeting/query-meeting-anyuser-export',//综合考勤--请假查询详细导出
  attend_teacher_static_list_leave_detail_export: '/proxy/user/unionapply/apply/download',//综合考勤--请假查询详细导出

  attend_teacher_static_record_page: '/proxy/course/employee/summary/signDay/page',//综合考勤--考勤记录
  attend_teacher_static_record_export: '/proxy/course/employee/summary/signDay/export',//综合考勤--考勤记录导出


  attend_teacher_static_count: '/proxy/user/attendRecords/detail/count',//综合考勤--考勤统计
  attend_teacher_static_page_export: '/proxy/course/employee/summary/stat/export',//综合考勤--考勤统计导出

  news_page: '/proxy/school/school/news/page',//新闻分页
  news_delete: '/proxy/school/school/news/delete',//删除新闻
  news_add: '/proxy/school/school/news/add',//添加新闻

  circular_page: '/proxy/user/message/page',//公告分页
  circular_delete: '/proxy/user/message/del',//删除公告
  circular_add: '/proxy/user/message/saveAndRelease',//添加公告

  info_page: '/proxy/school/school/information/page',//资讯分页
  info_delete: '/proxy/school/school/information/delete',//删除资讯
  info_add: '/proxy/school/school/information/add',//添加资讯

  flow_center_page: '/proxy/user/unionapply/apply/process/page',//流程中心分页
  flow_center_del: '/proxy/user/unionapply/apply/process/del',//流程中心删除
  flow_center_update: '/proxy/user/unionapply/apply/process/addOrUpdate',//流程中心添加、修改

  teacher_leave_type_list: '/proxy/user/teacher/leave/apply/type/list',//教师请假类型列表

  teacher_role_group_list: '/proxy/user/school/page/role',//教师角色组列表
  teacher_role_group_user_list: '/proxy/user/school/role/employees',//教师角色用户列表

  dorm_bed_info: '/proxy/school/dormitory/student/count',//宿舍床位信息
  dorm_bed_list: '/proxy/school/dormitory/student/count',//宿舍列表
  dorm_user_dorm_list: '/proxy/school/bed/dorm-group/page',//宿舍人员列表--宿舍
  dorm_user_class_list: '/proxy/school/student/class-group/page',//宿舍人员列表--班级
  dorm_user_class_import: '/proxy/building/dormitory/bed/student/import',//宿舍人员导入
  dorm_user_class_export: '/proxy/user/student/pageForBed/export',//宿舍人员导出
  dorm_user_class_bed_into: '/proxy/user/student/pageForBed',//宿舍人员分配列表
  dorm_user_class_bed_distribute: '/proxy/building/dormitory/bed/distribute',//分配宿舍人员
  dorm_user_class_student_clear: '/proxy/building/dormitory/student/clear',//清空宿舍
  dorm_user_class_bed_clear: '/proxy/building/dormitory/bed/remove',//清空床位
  dorm_user_class_bed_enable: '/proxy/building/dormitory/bed/enable',//启用禁用床位
  dorm_user_class_bed_list: '/proxy/building/dormitory/bedStudent/list',//床位列表

  dormaccess_record_stu: '/proxy/school/person/student/recognition/page',//门禁识别记录--学生
  dormaccess_record_ter: '/proxy/school/person/teacher/recognition/page',//门禁识别记录--教师
  dormaccess_record_sta: '/proxy/school/person/stranger/recognition/page',//门禁识别记录--陌生人
  dormaccess_remote: '/proxy/school/device/door/page',//门禁远程控制
  dormaccess_remote_open: '/proxy/school/device/door/set-always-open',//门禁远程控制--常开门
  dormaccess_remote_close: '/proxy/school/device/door/set-always-close',//门禁远程控制--常关门
  dormaccess_remote_only_open: '/proxy/school/device/door/open',//门禁远程控制--开门
  dormaccess_remote_cancel_open: '/proxy/school/device/door/set-normal',//门禁远程控制--取消常开
  dormaccess_remote_cancel_close: '/proxy/school/device/door/set-normal',//门禁远程控制--取消常关
  dormaccess_remote_record: '/proxy/school/person/user/openDoor/page',//门禁远程控制--开门记录
  dormaccess_exception_page: '/proxy/school/person/user/passError/page',//门禁异常
  dormaccess_exception_unbind: '/proxy/school/person/user/passError/normal',//门禁解除异常
  dormaccess_settimeout: '/proxy/school/device/door-task/page',//门禁定时任务分页
  dormaccess_settimeout_del: '/proxy/school/device/door-task/del',//门禁定时任务删除
  dormaccess_settimeout_add: '/proxy/school/device/door-task/add',//门禁定时任务添加
  dormaccess_settimeout_edit: '/proxy/school/device/door-task/edit',//门禁定时任务编辑
  dormaccess_settimeout_enable: '/proxy/school/device/door-task/set-enable',//门禁定时任务启用、禁用
  dormaccess_settimeout_deviceList: '/proxy/school/device/door/list',//门禁定时任务添加
  dormaccess_pass_static_page: '/proxy/course/access-control/get-page-stat',//门禁分析分页
  dormaccess_pass_static_level: '/proxy/course/access-control/get-level-list',//门禁分析评率
  dormaccess_pass_static_export: '/proxy/course/access-control/export-page-stat',//门禁分析导出
  dormaccess_pass_static_total: '/proxy/course/access-control/get-total-stat',//门禁分析总人数
  dormaccess_pass_static_line: '/proxy/course/access-control/get-line-chart-stat',//门禁分析线性图
  dormaccess_pass_static_detail: '/proxy/course/access-control/get-page-detail',//门禁分析详细
  dormaccess_pass_static_detail_export: '/proxy/course/access-control/export-page-detail',//门禁分析详细导出
  dormaccess_pass_static_level_page: '/proxy/course/access-control/get-level-list',//门禁分析频率分页
  dormaccess_pass_static_level_save: '/proxy/course/access-control/save-level',//门禁分析保持频率
  dormaccess_control_device_page: '/proxy/school/device/access-control/page',//门禁控制器分页
  dormaccess_control_device_edit: '/proxy/school/device/access-control/edit',//门禁控制器编辑
  dormaccess_control_device_search: '/proxy/school/device/access-control/search',//门禁控制器设备列表
  dormaccess_control_device_add: '/proxy/school/device/access-control/add/batch',//门禁控制器设备添加
  dormaccess_control_device_del: '/proxy/school/device/access-control/delete/batch',//门禁控制器设备删除--批量
  dormaccess_control_device_del_only: '/proxy/school/device/access-control/delete',//门禁控制器设备删除--单个
  dormaccess_control_device_control_list: '/proxy/school/device/door/list',//门禁控制器接口列表
  dormaccess_control_device_control_type: '/proxy/school/device/door-identify-type/list',//门禁控制器接口列表--类型
  dormaccess_control_device_control_device: '/proxy/school/device/door-select-device/list',//门禁控制器接口列表--设备
  dormaccess_control_device_control_edit: '/proxy/school/device/door/edit/batch',//门禁控制器接口列表--保存
  dormaccess_role_group_page: '/proxy/school/group/page',//门禁权限分页
  dormaccess_role_group_del: '/proxy/school/group/del',//门禁权限删除
  dormaccess_role_group_sync: '/proxy/school/group/sync-passTime',//同步生效
  dormaccess_role_group_device_control: '/proxy/school/device/device/door/group/door/list',//门禁设备--控制器
  dormaccess_role_group_device_line: '/proxy/school/device/device/door/group/face/list',//门禁设备--直连
  dormaccess_role_group_edit: '/proxy/school/group/info',//门禁权限--编辑
  dormaccess_role_group_save: '/proxy/school/group/save',//门禁权限--保存
  dormaccess_exception_export: '/proxy/school/person/user/passError/export',//门禁异常管理--导出


  dormaccess_teacher_select_status_page: '/proxy/user/employee/ac/selected/page',//老师分页--选中自动前排
  dormaccess_student_select_status_page: '/proxy/user/student/info/ac/selected/user/page',//学生分页--选中自动前排

  course_static_date: '/proxy/course/schedule/stat/by/teacher',//课表统计
  course_static_course_list: '/proxy/course/schedule/list/by/teacher',//课表列表

  course_mamage_page: '/proxy/course/course/page',//课程分页
  course_mamage_offer_page: '/proxy/course/course/offer/list',//课程分页--过滤
  course_mamage_add: '/proxy/course/course/add',//课程添加
  course_mamage_edit: '/proxy/course/course/edit',//课程编辑
  course_mamage_del: '/proxy/course/course/delete',//课程删除
  course_mamage_import: '/proxy/course/course/mulImport/check',//课程导入,
  course_mamage_file: '/proxy/course/course/download',//课程导入模版,

  course_search_list: '/proxy/course/schedule/list',//课程表,

  course_plan_list: '/proxy/course/course/offer/page',//任课安排表,
  course_plan_list_delete: '/proxy/course/course/offer/delete',//任课安排表--删除,
  major_all_list: '/proxy/edu/edu/major/list',//任课安排表--专业
  course_plan_add: '/proxy/course/course/offer/add',//任课安排表--添加
  course_plan_change_teacher: '/proxy/course/course/offer/changeTeacher',//任课安排表--修改老师
  course_plan_change_export_file: '/proxy/course/course/offer/download',//任课安排表--导出文件
  course_plan_import: '/proxy/course/course/offer/import',//任课安排表--导入

  course_tach_plan_list: '/proxy/course/schedule/list',//教学排课表
  course_tach_plan_paste: '/proxy/course/schedule/add',//教学排粘贴
  course_tach_plan_delete: '/proxy/course/weekSchedule/delete',//教学排删除
  course_tach_plan_add: '/proxy/course/schedule/add',//教学排添加
  course_tach_plan_edit: '/proxy/course/schedule/edit',//教学排编辑
  course_tech_plan_copy: '/proxy/course/weekSchedule/copy',//教学排复制
  course_tach_plan_search_week: '/proxy/course/schedule/week/list',//教学排查询设置的周

  send_active_account: '/proxy/uup/captcha/registUser/smssend',//发送激活验证码
  set_active_account: '/proxy/uup/ssoUser/phone',//激活账号

  index_sex: '/proxy/course/home/stat/student/sex',//学生性别统计
  index_ter_sex: '/proxy/course/home/stat/teacher/sex',//老师性别统计
  index_device_type: '/proxy/course/home/stat/device/type',//设备类型统计
  index_level_static: '/proxy/course/home/stat/leave',//学生请假统计
  index_credit_static: '/proxy/course/home/stat/score',//学分统计
  index_class_static: '/proxy/course/home/stat/rollCall',//课堂考勤统计
  index_dorm_static: '/proxy/course/home/stat/rollCallBed',//归寝统计

  attend_class_setting_page: '/proxy/building/rollcall/group/page',//课堂考勤设置分页
  attend_class_setting: '/proxy/building/rollcall/group/addOrUpdate',//课堂考勤设置
  attend_class_setting_del: '/proxy/building/rollcall/group/del',//课堂考勤设置--删除

  attend_dorm_setting_page: '/proxy/school/checkbed/checkbed/rule/page',//归寝考勤设置分页
  attend_dorm_setting_delete: '/proxy/school/checkbed/checkbed/rule/delete',//归寝考勤设置--删除
  attend_dorm_setting_clear: '/proxy/school/checkbed/checkbed/rule/day/clear',//归寝考勤设置--重置时间
  attend_dorm_setting_sync: '/proxy/course/rollcallbed/checkbedrull/sync/time',//归寝考勤设置--同步
  attend_dorm_setting_info: '/proxy/school/checkbed/checkbed/rule/day/info',//归寝考勤设置--时间详细
  attend_dorm_setting_add: '/proxy/school/checkbed/checkbed/rule/add',//归寝考勤设置--保存
  attend_dorm_setting_edit: '/proxy/school/checkbed/checkbed/rule/edit',//归寝考勤设置--编辑


  attend_admin_setting_page: '/proxy/user/attend/group/page',//行政考勤设置分页
  attend_admin_setting_delete: '/proxy/user/attend/group/del',//行政考勤设置删除
  attend_admin_setting_device: '/proxy/school/device/query-rela-device-page',//行政考勤设置--设备列表
  attend_admin_setting_edit: '/proxy/user/attend/group/edit',//行政考勤设置--编辑
  attend_admin_setting_add: '/proxy/user/attend/group/add',//行政考勤设置--添加
  attend_admin_setting_admin: '/proxy/user/attendRecords/detail/page',//行政查询--行政考勤
  attend_admin_setting_meeting: '/proxy/school/meeting/query-meeting-anyuser-page',//行政查询--会议考勤
  attend_admin_setting_leave: '/proxy/user/unionapply/apply/page',//行政查询--请假考勤


  student_info_setting: '/proxy/school/person/student/update/and/take/img/add',//学生管理--设置
  tearcher_info_setting: '/proxy/school/person/teacher/photo/add',//教工管理--设置
  tearcher_info_setting_page: '/proxy/school/person/teacher/page',//教工管理--设置

  student_info_warning: '/proxy/user/alarm/list',//学生报警
  student_info_warning_detail_list: '/proxy/user/masterTeacher/userinfo/get',//学生报警
  student_info_warning_detail_map_list: '/proxy/user/alarm/track',//学生报警

  detail_news_search: '/proxy/school/school/news/search',//查询新闻详细
  detail_circle_search: '/proxy/user/message/info',//查询公告详细
  detail_circle_search_reply: '/proxy/user/message/comment/page',//查询公告详细--回复
  detail_info_search: '/proxy/school/school/information/detail',//查询资讯详细

  userinfo_cookie_auth: '/proxy/course/quantization/get-auth',//个人报告cookie

  dorm_stat_count: '/proxy/course/rollcallbed/rollcallbed/build/stat',//归寝统计数量

  teach_course_plan_delete: '/proxy/course/schedule/delete',//删除排课
  teach_course_plan_inport: '/proxy/zuul/course/schedule/multy/import',//排课导入
  teach_course_plan_inport_file: '/proxy/course/schedule/download',//排课导入模版
  teach_course_teacher_info: '/proxy/course/course/arrange/list',//任课获取课程老师


  doomroom_import_file: '/proxy/building/dormitory/bed/student/download',//宿舍导入模版
  doomroom_import: '/proxy/building/dormitory/bed/student/import',//宿舍导入

  classattend_student_sort: '/proxy/course/rollcallbigdata/overall/rollcall/all/sort',//课堂考勤--学生排名
  dormattend_student_sort: '/proxy/course/rollcallbed/rollcallbed/analyse/top',//课堂考勤--学生排名、状态率排名

  role_list: '/proxy/user/school/page/role',//角色管理--列表
  role_menu_list: '/proxy/user/school/page/role',//角色管理--菜单列表
  role_employee_list: '/proxy/user/school/page/role',//角色管理--成员列表
  role_set_employee_info: '/proxy/user/school/add/userRole',//角色管理--设置成员

  class_attend_info_export: '/proxy/course/rollcallsta/user/rollCall/exportweb',//课堂考勤-考勤查询--导出
  reply_delete: '/proxy/user/message/comment/del',//通知公告删除回复
  reply_add: '/proxy/user/message/comment/add',//通知公告回复

  leave_ter_query_level_manage_static: '/proxy/user/teacher/leave/stat/count',//行政考勤-教工请假统计-统计
  leave_ter_query_level_manage_page: '/proxy/user/teacher/leave/stat/page',//行政考勤-教工请假统计-分页
  leave_ter_query_level_manage_type: '/proxy/user/teacher/leave/apply/type/list',//行政考勤-教工请假统计-类型
  leave_ter_query_level_manage_export: '/proxy/user/teacher/leave/stat/export',//行政考勤-教工请假统计-导出
  leave_ter_query_level_manage_time_page: '/proxy/user/teacher/leave/apply/timeUnitPage',//行政考勤-教工请假统计-详细分页
  leave_ter_query_level_manage_time_export: '/proxy/user/teacher/leave/apply/timeUnitExport',//行政考勤-教工请假统计-详细导出

  leave_ter_setting_config_data: '/proxy/user/teacher/leave/apply/grade/list',//教工管理--请假等级设置列表
  leave_ter_setting_config_save: '/proxy/user/teacher/leave/apply/grade/save',//教工管理--请假等级设置
  leave_ter_setting_config_type_page: '/proxy/user/teacher/leave/apply/type/list',//教工管理--类型列表
  leave_ter_setting_config_type_add: '/proxy/user/teacher/leave/apply/type/add',////教工管理--类型列表添加/修改
  leave_ter_setting_config_type_del: '/proxy/user/teacher/leave/apply/type/del',//教工管理--类型删除
  leave_ter_setting_config_time_list: '/proxy/user/teacher/leave/apply/rule/list',//教工管理--时间规则查询
  leave_ter_setting_config_time_save: '/proxy/user/teacher/leave/apply/rule/save',//教工管理--时间规则设置

  menuno_add: '/proxy/school/campus/menuno/add',//设置顶部菜单快捷
  menuno_quick_list: '/proxy/school/campus/menuno/list',//设置顶部菜单快捷列表
  menuno_role_list: '/proxy/user/user/menu/list',//设置顶部菜单角色列表
  menuno_role_list3: '/proxy/school/campus/menu/list3',//设置顶部菜单角色列表
  menuno_quick_list_del: '/proxy/school/campus/menuno/del',//设置顶部菜单快捷列表--删除

  web_auth_group_page: '/proxy/user/school/page/role',//web权限--组列表
  web_auth_group_add: '/proxy/user/school/add/role',//web权限--组添加
  web_auth_group_edit: '/proxy/user/school/edit/roleInfo',//web权限--组修改
  web_auth_group_edit_role: '/proxy/user/school/edit/roleMenu',//web权限--权限修改
  web_auth_group_del: '/proxy/user/school/delete/role',//web权限--组删除
  web_auth_group_role_menu_list: '/proxy/user/school/role/menuIds',//web权限--角色权限菜单
  web_auth_group_role_user_list: '/proxy/user/school/role/employees',//web权限--角色组成员
  web_auth_group_role_user_add: '/proxy/user/school/add/userRole',//web权限--角色组成员添加
  web_auth_group_role_user_del: '/proxy/user/school/delete/userRole',//web权限--角色组成员删除

  face_sync_teacher: '/proxy/school/person/teacher/face/sync',//同步教工授权
  face_sync_teacher_del: '/proxy/school/person/teacher/flush',//删除教工授权
  face_sync_teacher_device_list: '/proxy/school/person/teacher/device/page',//教工授权设备列表
  face_sync_teacher_face_record_list: '/proxy/school/person/teacher/recognition/page',//教工识别记录列表

  face_sync_auth_student_list: '/proxy/school/person/student/page',//授权学生列表
  face_sync_student: '/proxy/school/person/student/face/sync',//同步学生授权
  face_sync_student_del: '/proxy/school/person/student/flush',//删除学生授权
  face_sync_student_device_list: '/proxy/school/person/student/device/page',//教工授权设备列表
  face_sync_student_face_record_list: '/proxy/school/person/student/recognition/page',//教工识别记录列表

  device_join_in_list: '/proxy/school/device/query-device-page',//关联设备列表

  delete_batch_object: '/proxy/course/quantization/checkitem-batch-del',//批量删除项目列表
  edit_batch_object: '/proxy/course/quantization/checkitem-batch-edit',//批量修改项目列表

  sync_device_auth_opr: '/proxy/school/person/teacher/face/device/sync',//同步设备授权
  down_device_auth_opr: '/proxy/school/person/teacher/device/download',//下载设备图片


  sync_device_student_auth_opr: '/proxy/school/person/student/face/device/sync',//同步设备授权
  down_device_student_auth_opr: '/proxy/school/person/student/device/download',//下载设备图片

  student_parent_set: '/proxy/user/student/parent/set',//设置家长信息
  student_parent_get: '/proxy/user/student/parent/get',//获取家长信息
  student_parent_unbind: '/proxy/user/user/unbind',//解绑学生信息
  student_parent_reset_pwd: '/proxy/uup/pass/reset',//重置学生密码

};
