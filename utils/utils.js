import { Message } from 'element-ui'
import crypto from 'crypto';

export function getmd5(str) {
  var a;
  var md5 = crypto.createHash("md5");
  //update("中文", "utf8")
  md5.update(str);
  var a = md5.digest('hex');
  ////console.log(a);
  //47bce5c74f589f4867dbd57e9ca9f808
  return a;
}

export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

export function setChildren(tree, obj, param, param2){//迭代方法
  let _self = this;
  if (tree && tree.length > 0){
    tree.map(function (item,index) {
      obj.push(item);

      if(item[param] != undefined && item[param].length > 0){
        obj[index][param2] = [];
        setChildren(item[param], obj[index][param2], param, param2);
      }
    });
    return obj;
  }
}

export function setDeptChildren(tree, obj, param, param2, type){//迭代方法--部门
  let _self = this;
  if (tree && tree.length > 0){
    tree.map(function (item,index) {
      item['label'] = item.department_name;
      if (type == 'id'){
        item['value'] = item.id;
      }else {
        item['value'] = item.department_path;
      }
      obj.push(item);

      if(item[param] != undefined && item[param].length > 0){
        obj[index][param2] = [];
        setDeptChildren(item[param], obj[index][param2], param, param2, type);
      }
    });
    return obj;
  }
}

export function setSchoolBuildChildren(tree, type){//迭代方法--教学楼
  let _self = this;
  let arr = [];
  if (tree && tree.length > 0){
    for (let i = 0; i < tree.length; i++){
      if (type == 1 || type == 2 || type == 3){
        arr.push({
          label: tree[i].building_name,
          value: tree[i].id,
          id: tree[i].id,
          unit: tree[i].unit,
        });
      }

      if (type == 2 || type == 3){
        if (tree[i].child_list && tree[i].child_list.length > 0){
          let childList = tree[i].child_list;
          arr[i]['children'] = [];
          for (let j = 0; j < childList.length; j++){
            arr[i]['children'].push({
              label: childList[j].floor_num + "楼",
              value: childList[j].floor_num,
              id: childList[j].id,
              buildId: childList[j].build_id,
              floorNum: childList[j].floor_num,
              unit: childList[j].unit,
            });

            if (type == 3){
              if (childList[j].child_list && childList[j].child_list.length > 0){
                let childRoomList = childList[j].child_list;
                arr[i]['children'][j]['children'] = [];
                for (let z = 0; z < childRoomList.length; z++){
                  arr[i]['children'][j]['children'].push({
                    label: childRoomList[z].classroom_no,
                    value: childRoomList[z].id,
                    id: childRoomList[z].id,
                    buildId: childRoomList[z].build_id,
                    floorNum: childRoomList[z].floor_num,
                    unit: childRoomList[z].unit,
                  });
                }
              }
            }
          }
        }
      }
    }
    return arr;
  }
}

export function setDormBuildChildren(tree, type){//迭代方法--宿舍楼
  let _self = this;
  let arr = [];
  if (tree && tree.length > 0){
    for (let i = 0; i < tree.length; i++){
      if (type == 1 || type == 2 || type == 3){
        arr.push({
          label: tree[i].building_name,
          value: tree[i].id,
          id: tree[i].id,
          unit: tree[i].unit,
        });
      }

      if (type == 2 || type == 3){
        if (tree[i].child_list && tree[i].child_list.length > 0){
          let childList = tree[i].child_list;
          arr[i]['children'] = [];
          for (let j = 0; j < childList.length; j++){
            arr[i]['children'].push({
              label: childList[j].floor_num + "楼",
              value: childList[j].floor_num,
              id: childList[j].floor_num,
              buildId: childList[j].build_id,
              floorNum: childList[j].floor_num,
              unit: childList[j].unit,
            });

            if (type == 3){
              if (childList[j].child_list && childList[j].child_list.length > 0){
                let childRoomList = childList[j].child_list;
                arr[i]['children'][j]['children'] = [];
                for (let z = 0; z < childRoomList.length; z++){
                  arr[i]['children'][j]['children'].push({
                    label: childRoomList[z].dormitory_no,
                    value: childRoomList[z].id,
                    id: childRoomList[z].id,
                    buildId: childRoomList[z].build_id,
                    floorNum: childRoomList[z].floor_num,
                    unit: childRoomList[z].unit,
                  });
                }
              }
            }
          }
        }
      }
    }
    return arr;
  }
}

export function setCollegeChildren(tree, type){//迭代方法-学院
  let _self = this;
  let arr = [];
  if (tree && tree.length > 0){
    for (let i = 0; i < tree.length; i++){
      if (type == 1 || type == 2 || type == 3 || type == 4){
        arr.push({
          value: tree[i].id,
          id: tree[i].id,
          label: tree[i].name,
          unit: tree[i].unit
        });
      }

      if (type == 2 || type == 3 || type == 4){
        if (tree[i].children && tree[i].children.length > 0){
          let childList = tree[i].children;
          arr[i]['children'] = [];
          for (let j = 0; j < childList.length; j++){
            arr[i]['children'].push({
              value: childList[j].id,
              id: childList[j].id,
              label: childList[j].name,
              college_id: childList[j].college_id,
              major_no: childList[j].major_no,
              pId: childList[j].pId,
              unit: childList[j].unit,
            });

            if (type == 3 || type ==4){
              if (childList[j].children && childList[j].children.length > 0){
                let childRoomList = childList[j].children;
                arr[i]['children'][j]['children'] = [];
                for (let z = 0; z < childRoomList.length; z++){
                  arr[i]['children'][j]['children'].push({
                    value: childRoomList[z].id,
                    id: childRoomList[z].id,
                    label: childRoomList[z].name,
                    grade: childRoomList[z].grade,
                    pId: childRoomList[z].sch_id,
                    start_time: childRoomList[z].start_time,
                    end_time: childRoomList[z].end_time,
                    major_id: childRoomList[z].major_id,
                    unit: childRoomList[z].unit
                  });

                  if (type == 4){
                    if (childRoomList[z].children && childRoomList[z].children.length > 0) {
                      let childClassList = childRoomList[z].children;
                      arr[i]['children'][j]['children'][z]['children'] = [];
                      for (let ll = 0; ll < childClassList.length; ll++) {
                        arr[i]['children'][j]['children'][z]['children'].push({
                          value: childClassList[ll].id,
                          id: childClassList[ll].id,
                          label: childClassList[ll].name,
                          master_teacher: childClassList[ll].master_teacher,
                          pId: childClassList[ll].pId,
                          class_no: childClassList[ll].class_no,
                          major_id: childClassList[ll].major_id,
                          college_id: childClassList[ll].college_id,
                          classroom_id: childClassList[ll].classroom_id,
                          building_id: childClassList[ll].building_id,
                          create_time: childClassList[ll].create_time,
                          unit: childClassList[ll].unit
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return arr;
  }

  /*let _self = this;
  let arr = [];
  if (tree && tree.length > 0){
    tree.map(function (item,index) {
      obj.push({
        value: item.id,
        id: item.id,
        label: item.name,
      });

      if (item.unit == 1){
        obj[index]['student_manage_id'] = item.student_manage_id;
        obj[index]['pId'] = item.pId;
        obj[index]['director_id'] = item.director_id;
        obj[index]['college_no'] = item.college_no;
        obj[index]['pId'] = item.pId;
        obj[index]['unit'] = item.unit;
      }

      if (item.unit == 2){
        obj[index]['college_id'] = item.college_id;
        obj[index]['major_no'] = item.major_no;
        obj[index]['pId'] = item.pId;
        obj[index]['unit'] = item.unit;
      }

      if (item.unit == 3){
        obj[index]['grade'] = item.grade;
        obj[index]['pId'] = item.sch_id;
        obj[index]['start_time'] = item.start_time;
        obj[index]['end_time'] = item.end_time;
        obj[index]['unit'] = item.unit;
      }

      if (item.unit == 4){
        obj[index]['master_teacher'] = item.master_teacher;
        obj[index]['pId'] = item.sch_id;
        obj[index]['class_no'] = item.class_no;
        obj[index]['major_id'] = item.major_id;
        obj[index]['college_id'] = item.college_id;
        obj[index]['classroom_id'] = item.classroom_id;
        obj[index]['building_id'] = item.building_id;
        obj[index]['unit'] = item.unit;
      }

      if (type == 2 || type == 3 || type == 4){
        if(item[param] != undefined && item[param].length > 0){
          obj[index][param] = [];
          setCollegeChildren(item.children,obj[index][param],param, type);
        }
      }
    });
    return obj;
  }*/
}

export function MessageError(text = '失败',) {
  Message({
    message: text,
    type: 'error',
    duration: 3 * 1000
  })
}
export function MessageInfo(text = '消息') {
  Message({
    message: text,
    type: 'info',
    duration: 3 * 1000
  })
}
export function MessageSuccess(text = '成功') {
  Message({
    message: text,
    type: 'success',
    duration: 3 * 1000
  })
}

export function MessageWarning(text = '警告') {
  Message({
    message: text,
    type: 'warning',
    duration: 3 * 1000
  })
}

export function getLength (str) {
  var realLength = 0, len = str.length, charCode = -1;
  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128)
      realLength += 1;
    else
      realLength += 2;
  }
  return realLength;
}

export function clearData (data, isSerialize) {
  if (data) {
    if (isSerialize) {
      var newData = {};
      for (var i = 0, length = data.length; i < length; i++) {
        if (trim(data[i].value) != '' && trim(data[i].value) != 'null') {
          newData[data[i].name] = $.trim(data[i].value);
        }
      }
      return newData;
    } else {
      for (var key in data) {
        if (data[key] === '' || data[key] == 'null' || data[key] == null) {
          delete data[key];
        }
      };
      return data;
    }
  }
}

export function trim (str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

export function deviceType(type, str){
  let deviceType = {
    "1": "终端机",
    "2": "摄像头",
    "3": "一体机本地版",
    "4": "一体机云端版",
    "6": "门禁控制器",
  };
  if (str && type == 'set') {
    return deviceType[str];
  }
  if (!str && type == 'get'){
    return deviceType;
  }
}

export function workEnjoy(type, str){
  let workEnjoy = {
    "01": "退休",
    "02": "离休",
    "03": "死亡",
    "04": "返聘",
    "05": "调出",
    "06": "辞职",
    "07": "离职",
    "08": "开除",
    "09": "下落不明",
    "11": "在职",
    "12": "延聘",
    "13": "待退休"
  };
  if (str && type == 'set') {
    return workEnjoy[str];
  }
  if (!str && type == 'get'){
    return workEnjoy;
  }
}

export function workTitle(type, str) {
  let workTitle = {
    "01": "一级",
    "02": "二级",
    "03": "三级",
    "04": "四级",
    "05": "五级",
    "06": "六级",
    "07": "七级",
    "08": "八级",
    "09": "九级",
    "10": "十级"
  };
  if (str && type == 'set') {
    return workTitle[str];
  }
  if (!str && type == 'get'){
    return workTitle;
  }
}

export function studentTeachStatus(type, str) {
  let studentTeachStatus = {
    "11":"死亡",
    "99":"其他",
    "01":"在读",
    "12":"保留入学资格",
    "02":"休学",
    "13":"公派出国",
    "03":"退学",
    "14":"开除",
    "04":"停学",
    "15":"下落不明",
    "05":"复学",
    "06":"流失",
    "07":"毕业",
    "08":"结业",
    "09":"肆业",
    "10":"转学"
  };
  if (str && type == 'set') {
    return studentTeachStatus[str];
  }
  if (!str && type == 'get'){
    return studentTeachStatus;
  }
}

export function teachMethod(type, str){
  let teachMethod = {
    "1": "面授讲课",
    "2": "辅导",
    "3": "录像讲课",
    "4": "网络教学",
    "5": "实验",
    "6": "实习"
  };
  if (str && type == 'set') {
    return teachMethod[str];
  }
  if (!str && type == 'get'){
    return teachMethod;
  }
}

export function doorExceptionStatus(type, str){
  let teachMethod = {
    "0": "异常",
    "1": "受限",
    "2": "已解除"
  };
  if (str != null && type == 'set') {
    return doorExceptionStatus[str];
  }
  if (!str && type == 'get'){
    return doorExceptionStatus;
  }
}

export function examMethod(type, str){
  let examMethod = {
    "1": "考试",
    "2": "考查"
  };
  if (str && type == 'set') {
    return examMethod[str];
  }
  if (!str && type == 'get'){
    return examMethod;
  }
}

export function courseProperties(type, str){
  let courseProperties = {
    "1": "必修",
    "2": "限选",
    "3": "任选",
    "4": "辅修",
    "5": "实践",
    "6": "双必",
    "7": "双选",
    "8": "通选",
    "9": "其他"
  };
  if (str && type == 'set') {
    return courseProperties[str];
  }
  if (!str && type == 'get'){
    return courseProperties;
  }
}

export function nationInfo(str){
  let nationInfo = [{"name":"汉族","char_code":"HA","checked":true,"code":"01"},{"name":"蒙古族","char_code":"MG","checked":false,"code":"02"},{"name":"回族","char_code":"HU","checked":false,"code":"03"},{"name":"藏族","char_code":"ZA","checked":false,"code":"04"},{"name":"维吾尔族","char_code":"UG","checked":false,"code":"05"},{"name":"苗族","char_code":"MH","checked":false,"code":"06"},{"name":"彝族","char_code":"YI","checked":false,"code":"07"},{"name":"壮族","char_code":"ZH","checked":false,"code":"08"},{"name":"布依族","char_code":"BY","checked":false,"code":"09"},{"name":"朝鲜族","char_code":"CS","checked":false,"code":"10"},{"name":"满族","char_code":"MA","checked":false,"code":"11"},{"name":"侗族","char_code":"DO","checked":false,"code":"12"},{"name":"瑶族","char_code":"YA","checked":false,"code":"13"},{"name":"白族","char_code":"BA","checked":false,"code":"14"},{"name":"土家族","char_code":"TJ","checked":false,"code":"15"},{"name":"哈尼族","char_code":"HN","checked":false,"code":"16"},{"name":"哈萨克族","char_code":"KZ","checked":false,"code":"17"},{"name":"傣族","char_code":"DA","checked":false,"code":"18"},{"name":"黎族","char_code":"LI","checked":false,"code":"19"},{"name":"傈傈族","char_code":"LS","checked":false,"code":"20"},{"name":"佤族","char_code":"VA","checked":false,"code":"21"},{"name":"畲族","char_code":"SH","checked":false,"code":"22"},{"name":"高山族","char_code":"GS","checked":false,"code":"23"},{"name":"拉祜族","char_code":"LG","checked":false,"code":"24"},{"name":"水族","char_code":"SU","checked":false,"code":"25"},{"name":"东乡族","char_code":"DX","checked":false,"code":"26"},{"name":"纳西族","char_code":"NX","checked":false,"code":"27"},{"name":"景颇族","char_code":"JP","checked":false,"code":"28"},{"name":"柯尔克孜族","char_code":"KG","checked":false,"code":"29"},{"name":"土族","char_code":"TU","checked":false,"code":"30"},{"name":"达翰尔族","char_code":"DU","checked":false,"code":"31"},{"name":"仫佬族","char_code":"ML","checked":false,"code":"32"},{"name":"羌族","char_code":"QI","checked":false,"code":"33"},{"name":"布朗族","char_code":"BL","checked":false,"code":"34"},{"name":"撒拉族","char_code":"SL","checked":false,"code":"35"},{"name":"毛南族","char_code":"MN","checked":false,"code":"36"},{"name":"仡佬族","char_code":"GL","checked":false,"code":"37"},{"name":"锡伯族","char_code":"XB","checked":false,"code":"38"},{"name":"阿昌族","char_code":"AC","checked":false,"code":"39"},{"name":"普米族","char_code":"PM","checked":false,"code":"40"},{"name":"塔吉克族","char_code":"TA","checked":false,"code":"41"},{"name":"怒族","char_code":"NU","checked":false,"code":"42"},{"name":"乌孜别克族","char_code":"UZ","checked":false,"code":"43"},{"name":"俄罗斯族","char_code":"RS","checked":false,"code":"44"},{"name":"鄂温克族","char_code":"EW","checked":false,"code":"45"},{"name":"德昂族","char_code":"DE","checked":false,"code":"46"},{"name":"保安族","char_code":"BN","checked":false,"code":"47"},{"name":"裕固族","char_code":"YG","checked":false,"code":"48"},{"name":"京族","char_code":"GI","checked":false,"code":"49"},{"name":"塔塔尔族","char_code":"TT","checked":false,"code":"50"},{"name":"独龙族","char_code":"DR","checked":false,"code":"51"},{"name":"鄂伦春族","char_code":"OR","checked":false,"code":"52"},{"name":"赫哲族","char_code":"HZ","checked":false,"code":"53"},{"name":"门巴族","char_code":"MB","checked":false,"code":"54"},{"name":"珞巴族","char_code":"LB","checked":false,"code":"55"},{"name":"基诺族","char_code":"JN","checked":false,"code":"56"},{"name":"穿青人族","char_code":"CQ","checked":false,"code":"81"},{"name":"其他","char_code":"QT","checked":false,"code":"97"},{"name":"外国血统中国籍人士","char_code":"WG","checked":false,"code":"98"}];
  return nationInfo;
}

export function teacherTypeInfo(str){
  let typeInfo = [{
    "name": "校本部教职工",
    "checked": true,
    "code": "10"
  }, {
    "name": "专任教师",
    "checked": false,
    "code": "11"
  }, {
    "name": "教辅人员",
    "checked": false,
    "code": "12"
  }, {
    "name": "行政人员",
    "checked": false,
    "code": "13"
  }, {
    "name": "工勤人员",
    "checked": false,
    "code": "14"
  }, {
    "name": "其他校本部教职工",
    "checked": false,
    "code": "19"
  }, {
    "name": "科研机构人员",
    "checked": false,
    "code": "20"
  }, {
    "name": "校办企业职工",
    "checked": false,
    "code": "30"
  }, {
    "name": "其他副设机构人员",
    "checked": false,
    "code": "40"
  }, {
    "name": "聘请校外教师",
    "checked": false,
    "code": "50"
  }, {
    "name": "来自高校以外事业、科研单位",
    "checked": false,
    "code": "51"
  }, {
    "name": "来自校外企业",
    "checked": false,
    "code": "52"
  }, {
    "name": "国外聘请",
    "checked": false,
    "code": "53"
  }, {
    "name": "来自其他高校",
    "checked": false,
    "code": "54"
  }, {
    "name": "代课教师",
    "checked": false,
    "code": "55"
  }, {
    "name": "兼任教师",
    "checked": false,
    "code": "56"
  }, {
    "name": "其他兼任教师",
    "checked": false,
    "code": "59"
  }, {
    "name": "其他人员",
    "checked": false,
    "code": "60"
  }, {
    "name": "附属中小学幼儿园教职工",
    "checked": false,
    "code": "61"
  }, {
    "name": "集体所有制人员",
    "checked": false,
    "code": "62"
  }, {
    "name": "其他教职工",
    "checked": false,
    "code": "99"
  }];
  return typeInfo;
}

export function studyType(type, str){
  let studyType = {
    "1":{"code":1,"name":"走读","checked":true},
    "2":{"code":2,"name":"住校","checked":false},
    "3":{"code":3,"name":"借宿","checked":false},
    "9":{"code":9,"name":"其他","checked":false}};
  if (str && type == 'set') {
    return studyType[str];
  }
  if (!str && type == 'get'){
    return studyType;
  }
}

export function gradeText(val){
  let gradeList = ['一年级','二年级','三年级','四年级','五年级'];
  return gradeList[parseInt(val)-1];
}

export function weekNoText(val){
  let gradeList = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
  return gradeList[parseInt(val)-1];
}

export function weekNoText2(val){
  let gradeList = ['周一','周二','周三','周四','周五','周六','周日'];
  return gradeList[parseInt(val)-1];
}

export function auditStatusText(val){
  let statusList = {
    "0": "待审批",
    "1": "已通过",
    "2": "已驳回",
    "3": "已通过",
    "4": "已驳回",
    "5": "",
  };
  return statusList[val];
}

export function auditStatusColor(val){
  let statusList = {
    "0": "color-muted",
    "1": "color-success",
    "2": "color-danger",
    "3": "color-success",
    "4": "color-success",
    "5": "color-warning",
  };
  return statusList[val];
}

export function insterestText(val){
  let statusList = {
    "0": "独立产权",
    "1": "联合产权",
    "2": "租用"
  };
  return statusList[val];
}

export function dormTypeText(val){
  let statusList = {
    "0": "男生宿舍",
    "1": "女生宿舍"
  };
  return statusList[val];
}

export function areaTypeText(val){
  let statusList = {
    "1": "个人区域",
    "2": "公共区域",
    "3": "空床"
  };
  return statusList[val];
}

export function levelText(val){
  let statusList = {
    "1": "等级1",
    "2": "等级2",
    "3": "等级3"
  };
  return statusList;
}

export function mediaClassText(val){
  let statusList = {
    "true": "多媒体教室",
    "false": "普通教室"
  };
  return statusList[val];
}

export function meetingStatusText(type, str){
  let meetingStatus = {
    "1": "未开始",
    "2": "进行中",
    "3": "已结束"
  };
  if (str && type == 'set') {
    return meetingStatus[str];
  }
  if (!str && type == 'get'){
    return meetingStatus;
  }
}

export function meetingUserStatusText(type, str){
  let meetingUserStatus = {
    "1": "缺勤",
    "2": "请假",
    "3": "正常出勤"
  };
  if (str && type == 'set') {
    return meetingUserStatus[str];
  }
  if (!str && type == 'get'){
    return meetingUserStatus;
  }
}

export function meetingJoinStatusText(type, str){
  let meetingJoinStatus = {
    "1": "缺席",
    "2": "请假",
    "3": "正常"
  };
  if (str && type == 'set') {
    return meetingJoinStatus[str];
  }
  if (!str && type == 'get'){
    return meetingJoinStatus;
  }
}

export function dormStatus(type, str){
  let dormStatusList = {
    "0": "未归",
    "1": "已归寝",
    "2": "请假",
    "3": "晚归",
    "4": "超长未归"
  };
  if (str != null && type == 'set') {
    return dormStatusList[str];
  }
  if (!str && type == 'get'){
    return dormStatusList;
  }
}

export function classAttendStatus(type, str){
  let classStatusList = {
    "1": "出勤",
    "3": "迟到",
    "4": "早退",
    "0": "旷课",
    "2": "请假"
  };
  if (str != null && type == 'set') {
    return classStatusList[str];
  }
  if (!str && type == 'get'){
    return classStatusList;
  }
}

export function getWeekTotalSelect(){
  let arr = [];
  for (let i = 0; i < 52; i++){
    arr.push({
      label: i+1,
      value: i+1
    });
  }
  return arr;
}


export function setSelectOptions(val){
  let arr = [];
  for (let i = 0; i < val; i++){
    arr.push({
      label: i+1,
      value: i+1
    });
  }
  return arr;
}

export function inArray(search,array,tag){
  for(var i in array){
    if (tag){
      if(array[i][tag] == search[tag]){
        return i;
      }
    }else {
      if(array[i] == search){
        return i;
      }
    }
  }
  return -1;
}

export function paddingChecked(src,des,tag,desTag){
  for (let j = 0; j < src.length; j++){
    if (src[j] == des[tag]){
      des[desTag] = true;
    }
  }
}

export function secondsFormat(min) {
  if(min || min == 0){
    var seconds = min * 60;
    var day = Math.floor( seconds/ (24*3600) ); // Math.floor()向下取整
    var hour = Math.floor( (seconds - day*24*3600) / 3600);
    var minute = Math.floor( (seconds - day*24*3600 - hour*3600) /60 );
    var second = seconds - day*24*3600 - hour*3600 - minute*60;
    return day + "天"  + hour + "时" + minute + "分" + second + "秒";
  }else{
    return '--';
  }
}

export function decodeUTF8(str){
  if(str){
    return decodeURIComponent(str);
  }else {
    return '';
  }
}
