import global from "~/utils/global";
import {common} from "~/utils/api/url";
import {
  setChildren,
  setCollegeChildren,
  setSchoolBuildChildren,
  setDormBuildChildren,
  setDeptChildren,
  MessageSuccess, MessageError
} from "~/utils/utils";
import {Dialog} from "vant";

export default {
  data (){
    return {
      testLogin: '',
      GdialogTime: true,
      GenrollAllow: false,
      GenrollMsg: '',
      value: '',
      testDefault: '',
      navHeight: 0,
      globalAppShow: '',
      isAndroid: false,
      isIos: false,
      sessionData: '',
      g_QrCode: '',
      g_BarCode: '',
      //公共属性
      total: global.total,
      page: global.page,
      num: global.num,
      loginUserName: global.loginUserName,
      collegeId: global.collegeId,
      collegeName: global.collegeName,
      campusName: global.campusName,
      organizeName: global.organizeName,
      loginUserType: global.loginUserType,
      loginUserAppType: '',
      loginUserPhone: global.loginUserPhone,
      campusLogo: global.campusLogo,
      majorId: global.majorId,
      majorName: global.majorName,
      classId: global.classId,
      className: global.className,
      gradeId: global.gradeId,
      dataCollege: global.dataCollegeList,
      dataSchoolBuild: global.dataSchoolBuildList,
      dataDormBuild: global.dataDormBuildList,
      dataDept: global.dataDeptList,
      currentSeciton: global.currentSeciton,
      currentYear: global.currentYear,
      currentMonth: global.currentMonth,
      currentDay: global.currentDay,
      currentTermId: global.currentTermId,
      currentYearId: global.currentYearId,
      currentWeekNum: global.currentWeekNum,
      currentWeekNo: global.currentWeekNo,
      userJobNum: global.userJobNum,
      realName: global.realName,
      headImage: global.headImage,
      userPhone: global.userPhone,
      auditCount: global.auditCount,
      loginUserId: global.loginUserId,
      buildInterest: global.buildInterest,
      classroomUsed: global.classroomUsed,
      dormroomType: global.dormroomType,
      searchTeacherType: global.searchTeacherType,
      searchStudentType: global.searchStudentType,
      searchStudentType2: global.searchStudentType2,
      g_sex: global.g_sex,
      filterStatus: global.filterStatus,
      filterTypes: global.filterTypes,
      filterScoreTypes: global.filterScoreTypes,
      filterScoreLevels: global.filterScoreLevels,
      weekNoSelect: global.weekNoSelect,
      switchStatus: global.switchStatus,
      levelStatus: global.levelStatus,
      filterCheckStatus: global.filterCheckStatus,
      filterAreaStatus: global.filterAreaStatus,
      filterOtherAreaStatus: global.filterOtherAreaStatus,
      filterEnableStatus: global.filterEnableStatus,
      filterPhoneOwner: global.filterPhoneOwner,
      filterBillStatus: global.filterBillStatus,
      filterDeviceUseType: global.filterDeviceUseType,
      filterOnlineStatus: global.filterOnlineStatus,
      filterDormBackStatus: global.filterDormBackStatus,
      filterClassAttendStatus: global.filterClassAttendStatus,
      currentYearList: global.currentYearList,
      currentTermList: global.currentTermList,
      currentWeekList: global.currentWeekList,
      filterAttendTypes: global.filterAttendTypes,
      filterScoreFlowTypes: global.filterScoreFlowTypes,
      filterTripFlowTypes: global.filterTripFlowTypes,
      filterCardFlowTypes: global.filterCardFlowTypes,
      filterUserTypes: global.filterUserTypes,
      filterUserTypes2: global.filterUserTypes2,
      filterDoorOpenTypes: global.filterDoorOpenTypes,
      filterDoorOnlineStatus: global.filterDoorOnlineStatus,
      filterDoorExceptionStatus: global.filterDoorExceptionStatus,
      filterDoorInOutStatus: global.filterDoorInOutStatus,
      filterDoorSignStatus: global.filterDoorSignStatus,
      filterAuthOptions: global.filterAuthOptions,
      filterAuthOtherOptions: global.filterAuthOtherOptions,
      filterTimeStatusOptions: global.filterTimeStatusOptions,
      filterUserAccountActiveStatusOptions: global.filterUserAccountActiveStatusOptions,
      filterAppManageStatus: global.filterAppManageStatus,
      filterAppManageType: global.filterAppManageType,
      filterGraduationType: global.filterGraduationType,
      filterPoliticsType: global.filterPoliticsType,
      filterRetireType: global.filterRetireType,
      filterHardType: global.filterHardType,
      filterProcessLinkParamType: global.filterProcessLinkParamType,
      g_currentDate: {},
      currentYearData: '',
      currentTermData: '',
      currentWeekData: '',
      currentSetWeekNum: 0,
      currentVersion: '',
      versionData: [],
      currentDateStatus: null,
      serverDataList: [],
      serverDataLikeList: [],
      appletId: '',
      categoryId: '',
      departmentPath: '',
      formType: '',
      searchKey: '',
      categorys: [],
      recommends: [],
      noticeDataList: [],
      deptMixinsList: [],
      categoryMixinsList: [],
      loginStatusInfo: false,
      globalAppType: '',
      divHeight: {
        'height': '',
        'height1': '',
        'overflow-y': 'hidden',
        'overflow-x': 'hidden'
      },
      divHeight1: {
        'height': '',
        'height1': '',
        'overflow-y': 'hidden',
        'overflow-x': 'hidden'
      },
      divHeight2: {
        'height': '',
        'height1': '',
        'overflow-y': 'hidden',
        'overflow-x': 'hidden'
      },
      divHeight3: {
        'height': '',
        'height1': '',
        'overflow-y': 'hidden',
        'overflow-x': 'hidden'
      },
      divHeight4: {
        'height': '',
        'height1': '',
        'overflow-y': 'hidden',
        'overflow-x': 'hidden'
      },
      divHeight5: {
        'height': '',
        'height1': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight6: {
        'height': '',
        'height1': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight7: {
        'height': '',
        'height1': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight8: {
        'height': '',
        'height1': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight9: {
        'height': '',
        'height1': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight10: {
        'height': '',
        'height1': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight11: {
        'height': '',
        'height1': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight12: {
        'height': '',
        'height1': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight13: {
        'height': '',
        'height1': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      divHeight14: {
        'height': '',
        'height1': '',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      },
      tableHeight: {
        'height': '',
      },
      drawHeight: {
        'height': ''
      },
      drawHeight2: {
        'height': ''
      }
    }
  },
  mounted(){
    this.getUrl();
    window.addEventListener("resize", () => {
      this.g_HH();
    });
  },
  created() {
    this.getUrl();
    this.g_HH();
  },
  methods: {
    getUrl(){
      this.loginUserAppType = this.$route.query.userType;
      this.navHeight = this.$route.query.navH;
      this.globalAppShow = this.$route.query.appType;
    },
    returnGIndex(url){
      this.$router.push({
        path: url,
        query: {
          activeType: this.$route.query.activeType,
          userType: this.loginUserAppType,
          navH: this.navHeight,
          appType: this.globalAppShow
        }
      });
    },
    async autoLoginCheckApp(){
      let params = {};
      params = this.$qs.stringify(params);
      this.dialogLoading = true;
      await this.$axios.post(common.login_check, params, {loading: false}).then(res => {
        if (res.data.code == 200){
          this.testLogin = res.data.data.loginCheck;
          if(res.data.data.loginCheck == false){
            this.autoLoginApp();
          }
        }else {

        }
      });
    },
    async autoLoginApp(){
      let params = {
        clientType: 3,
        accountType: 5,
        account: this.$route.query.sessionId
      };
      params = this.$qs.stringify(params);
      this.dialogLoading = true;
      await this.$axios.post(common.login_url, params, {loading: false}).then(res => {
        if (res.data.code == 200){

        }else {

        }
      });
    },
    initServer(data){
      let params = {
        appletId: this.appletId,
        appletType: this.appletType,
        categoryId: this.categoryId,
        departmentPath: this.departmentPath,
        formType: '',
        searchKey: data ? data.input : '',
      };
      this.$axios.get(common.server_list_list, {params: params}).then(res => {
        if (res.data.data){
          this.serverDataList = res.data.data;
        }
      });
    },
    initApplet(data, type){
      let params = {};
      if (type == 2 && data != ""){
        params['deptId'] = data.departmentId;
      }else if (type == 1 && data != ""){
        params['categoryId'] = data.id;
      }
      this.$axios.get(common.server_applet_list, {params: params}).then(res => {
        if (res.data.data){
          this.categorys = res.data.data;
        }
      });
    },
    initCategoryList(){
      let params = {};
      this.$axios.get(common.server_type_all_list, {params: params}).then(res => {
        if (res.data.data){
          this.categoryMixinsList = res.data.data;
        }
      });
    },
    initDeptList(){
      let params = {};
      this.$axios.get(common.server_dept_all_list, {params: params}).then(res => {
        if (res.data.data){
          this.deptMixinsList = res.data.data;
        }
      });
    },
    async getCategoryInfo(){
      let params = {};
      await this.$axios.get(common.server_type_all_list, {params: params}).then(res => {
        if (res.data.data){
          for (let i = 0; i < res.data.data.length; i++){
            res.data.data[i]['label'] = res.data.data[i].categoryName;
            if (res.data.data[i]['appletList']){
              for (let j = 0; j < res.data.data[i]['appletList'].length; j++){
                res.data.data[i]['appletList'][j]['label'] = res.data.data[i]['appletList'][j].appletName;
              }
              res.data.data[i]['children'] = res.data.data[i]['appletList'];
            }
          }
          this.categorys = res.data.data;
        }
      });
    },
    initRecommend(){
      let params = {};
      this.$axios.get(common.server_list_list3, {params: params}).then(res => {
        if (res.data.data){
          this.recommends = res.data.data;
        }
      });
    },
    //*****以下函数为公共调用，主要用于封装，全部用两个__开头命名，（后期增加，前期未统一处理，所以前期是分别再不同的页面中）****/
    /**
     * 设置下拉数据选择
     * @param data 传递过来的选择数据
     * @param attr 传递过来需要重新设置的字段
     * @param obj 传递过来需要重新设置的数据对象，这里适用$set进行更新，实时更新数据和视图
     * @private
     */
    __selFunc(data, attr, obj){
      if (obj && typeof obj == 'object'){
        this.$set(obj, attr, data);
      }else {
        this[attr] = data;
      }
    },
    /**
     * 点击分页
     * @param event 页码
     * @param func 需要执行的函数
     * @param pageAttr 需要改变的属性，默认page
     * @private
     */
    __currentPage(event, func, pageAttr){
      if (pageAttr){
        this[pageAttr] = event;
      }else {
        this.page = event;
      }
      if(typeof func == 'function'){
        func();
      }
    },
    /**
     * 分页总条数
     * @param event 总条数
     * @param func 需要执行的函数
     * @param pageAttr 需要改变的当前page属性，默认page = 1
     * @param numAttr 需要改变的属性，默认num
     * @private
     */
    __sizeChange(event, func, pageAttr, numAttr){
      if (pageAttr){
        this[pageAttr] = 1;
      }else {
        this.page = 1;
      }
      if (numAttr){
        this[numAttr] = event;
      }else {
        this.num = event;
      }
      if(typeof func == 'function'){
        func();
      }
    },
    /**
     * 点击跳转分页
     * @param event 页码
     * @param func 需要执行的函数
     * @param pageAttr 需要改变的属性，默认page
     * @private
     */
    __jumpPage(event, func, pageAttr){
      if (pageAttr){
        this[pageAttr] = event;
      }else {
        this.page = event;
      }
      if(typeof func == 'function'){
        func();
      }
    },
    /**
     * 搜索--仅支持单一属性
     * @param event 所搜框数据
     * @param func 需要执行的函数
     * @param pageAttr 需要改变的属性，默认page=1
     * @param attr 传递过来需要重新设置的字段
     * @param obj 传递过来需要重新设置的数据对象，这里适用$set进行更新，实时更新数据和视图
     * @private
     */
    __search(event, func, pageAttr, attr, obj){
      if (event['input']){
        if (obj && typeof obj == 'object'){
          this.$set(obj, attr, event.input);
        }else {
          this[attr] = event.input;
        }
      }else {
        if (obj && typeof obj == 'object'){
          this.$set(obj, attr, event);
        }else {
          this[attr] = event;
        }
      }
      if (pageAttr){
        this[pageAttr] = 1;
      }else {
        this.page = 1;
      }
      if(typeof func == 'function'){
        func();
      }
    },
    /**
     * 关闭弹层或者抽屉
     * @param attr 需要关闭的弹层或者抽屉
     * @private
     */
    __cancelDialog(attr){
      this[attr] = false;
    },
    //*****以下函数为公共调用，主要用于获取系统数据****/
    test() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.testDefault = 1111;
          resolve(this.testDefault);
        }, 3000)
      })
    },
    g_HH(){
      if (process.browser) {
        let itemHeight = this.globalAppShow == 'ios' ? (60 + parseFloat(this.navHeight)) : 60;
        this.testDefault = itemHeight;
        this.divHeight.height = window.innerHeight - 60 + 'px';
        this.divHeight.height1 = window.innerHeight - 60;
        this.divHeight1.height = (window.innerHeight - 60) * 1 + 'px';
        this.divHeight2.height = (window.innerHeight - 60) * 0.4 + 'px';
        this.divHeight1.height1 = (window.innerHeight - 60) * 1;
        this.divHeight2.height1 = (window.innerHeight - 60) * 0.4;
        this.divHeight3.height = window.innerHeight - 60 + 'px';
        this.divHeight4.height = window.innerHeight + 'px';
        this.divHeight5.height = window.innerHeight - itemHeight - 200 + 'px';
        this.divHeight6.height = window.innerHeight - 70 + 'px';
        this.divHeight7.height = window.innerHeight - 90 + 'px';
        this.divHeight8.height = window.innerHeight * 0.85 - 50 + 'px';
        this.divHeight9.height = window.innerHeight - itemHeight - 70 + 'px';
        this.divHeight10.height = window.innerHeight - itemHeight + 'px';
        this.divHeight10.height1 = window.innerHeight - itemHeight;
        this.divHeight11.height = window.innerHeight - itemHeight - 180 + 'px';
        this.divHeight12.height = window.innerHeight - itemHeight - 120 + 'px';
        this.divHeight13.height = window.innerHeight + 'px';
        this.divHeight14.height = window.innerHeight - itemHeight - 80 + 'px';
        this.tableHeight.height = (window.innerHeight - 60) * 0.86 - 30;
        this.drawHeight.height = window.innerHeight - 80 + 'px';
        this.drawHeight2.height = window.innerHeight - 15 + 'px';
      }
    },
    async initVersionData(){
      let params = {
        campusName: this.campusName
      };
      await this.$axios.get("http://campus.9451.com/campusmanage/appapi/system-version", {params: params}).then(res => {
        if (res.data.data){
          this.currentVersion = res.data.data.version;
          this.versionData = res.data.data.logs;
        }
      });
    },
    /**
     * 获取用户未读消息数量
     */
    async getNoReadNum() {
      let params = {
        actionTypeSet: '510,511,512,513,514,515,516,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531',
        applyTypeCodeSet: 'PunishmentApply,LeaveApply,TeacherLeaveApply,ScoreApply',
        actionType: '1,2,3,-1'
      };
      params = this.$qs.stringify(params);
      await this.$axios.post(common.noread_count, params).then(res => {
        if (res.data.data){
          this.auditCount = res.data.data[-2].waitCount;
        }
      });
    },
    /**
     * 获取session
     * 采用同步执行，为了在需要使用的时候，可以先执行完成后再执行下一步操作
     * @returns {Promise<void>}
     */
    async getLoginStatus() {
      let params = {};
      await this.$axios.post(common.login_check, params).then(res => {
        if (res.data.data){
          this.loginStatusInfo = res.data.data.loginCheck;
        }
      });
    },
    /**
     * 获取session
     * 采用同步执行，为了在需要使用的时候，可以先执行完成后再执行下一步操作
     * @returns {Promise<void>}
     */
    async getSessionInfo() {
      let params = {
        keys:'campusId,userType,campusType,userId,username,campusName,campusLogo,realName,externalSystemName,externalSystem,termId,externalSystemName,externalSystem'
      };
      await this.$axios.get(common.session_url, {params: params,loading:false}).then(res => {
        if (res.data.data){
          this.campusId = res.data.data.campusId;
          this.campusName = res.data.data.LOGIN_RETURN_INFO.campusName;
          this.loginUserName = res.data.data.LOGIN_RETURN_INFO.username;
          this.loginUserType = res.data.data.userType;
          this.campusLogo = res.data.data.LOGIN_RETURN_INFO.logo;
          this.currentTermId = res.data.data.currentTermWeek ? res.data.data.currentTermWeek.id : '';
          this.currentYearId = res.data.data.currentTermWeek ? res.data.data.currentTermWeek.schYearId : '';
          this.userJobNum = res.data.data.LOGIN_RETURN_INFO.jobNum;
          this.realName = res.data.data.realName;
          this.headImage = res.data.data.LOGIN_RETURN_INFO.teacherPhoto;
          this.organizeName = res.data.data.LOGIN_RETURN_INFO.organize ? res.data.data.LOGIN_RETURN_INFO.organize.departmentName : '';
          this.headImage = res.data.data.headImage;
          this.loginUserId = res.data.data.LOGIN_RETURN_INFO.userInfo ? res.data.data.LOGIN_RETURN_INFO.userInfo.userId : res.data.data.userId;
          this.loginUserPhone = res.data.data.LOGIN_RETURN_INFO.phone;
          this.sessionData = res.data.data;
        }
      });
    },
    /**
     * 获取当前时间,主要用在年月日周搜索的条件上
     * 采用同步执行，为了在需要使用的时候，可以先执行完成后再执行下一步操作
     * @returns {Promise<void>}
     */
    async getCurrentGDateInfo(campusId) {
      let params = {

      };
      await this.$axios.get(common.date_now, {params: params}).then(res => {
        if (res.data.data){
          this.g_currentDate = res.data.data;
        }
      });
    },
    /**
     * 获取当前学年学期学周
     * 采用同步执行，为了在需要使用的时候，可以先执行完成后再执行下一步操作
     * @returns {Promise<void>}
     */
    async getCurrentWeekInfo(campusId) {
      let params = {
        campusId: campusId
      };
      await this.$axios.get(common.organization_week, {params: params}).then(res => {
        if (res.data.data){
          this.currentYear = res.data.data.name;
          this.currentWeekNum = res.data.data.weekNum;
          this.currentWeekNo = res.data.data.weekNo;
          //this.currentSeciton = res.data.data.section;
        }else{
          if (res.data.code == 466){
            this.currentDateStatus = res.data.desc;
          }else if (res.data.code == 459){
            this.currentDateStatus = this.$t("缺失学年学期相关数据");
          }
        }
      });
    },
    /**
     * 获取当前系统所在的信息
     * 当前年、月、日、学期、学周等信息
     */
    async getCurrentDateInfo(){
      await this.$axios.get(common.session_url).then(res => {
        console.log(3);
      });
    },
    /**
     * 获取学院的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getCollegeInfo(type = 1) {
      await this.$axios.get(common.hierarchical_college).then(res => {
        if (res.data.data){
          this.dataCollege = setCollegeChildren(res.data.data.tree, type);
          console.log(this.dataCollege);
        }
      });
    },
    /**
     * 获取宿舍楼的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getDormBuildInfo(type = 1) {
      let params = {
        buildingType: 1
      };
      await this.$axios.get(common.hierarchical_build, {params: params}).then(res => {
        if (res.data.data){
          this.dataDormBuild = setDormBuildChildren(res.data.data, type);
        }
      });
    },
    /**
     * 获取教学楼的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getSchoolBuildInfo(type=1) {
      let params = {
        buildingType: 0
      };
      await this.$axios.get(common.hierarchical_build, {params: params}).then(res => {
        if (res.data.data){
          this.dataSchoolBuild = setSchoolBuildChildren(res.data.data, type);
        }
      });
    },
    /**
     * 获取部门的list信息
     * 主要用于树形菜单，下来菜单等
     * @returns {Promise<void>}
     */
    async getDeptInfo(type) {
      let params = {
        superDeptId: 0
      };
      await this.$axios.get(common.hierarchical_dept, {params: params}).then(res => {
        let arr = [];
        if (res.data.data){
          this.dataDept = setDeptChildren(res.data.data[0].child_list, arr, 'child_list', 'children', type);
          console.log(this.dataDept);
        }
      });
    },
    /**
     * 重置集联下拉，否则会出现回显问题
     * 用于自定义集联下拉，非自定义不能使用
     */
    resetCasadeSelector(refTag) {
      if (this.$refs[refTag] && this.$refs[refTag].$refs.cascaderSelector) {
        this.$refs[refTag].$refs.cascaderSelector.$refs.panel.activePath = [];
        this.$refs[refTag].$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths();
      }
    },
    async initCurrentYearList(){
      let params = {
        page: 1,
        num: 10000
      };
      await this.$axios.get(common.year_list, {params: params}).then(res => {
        if (res.data.data){
          if (res.data.data.list.length > 0){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['label'] = res.data.data.list[i].name;
              res.data.data.list[i]['value'] = res.data.data.list[i].id;
              if (res.data.data.list[i].current == true){
                this.currentYearData = res.data.data.list[i].id;
              }
            }
          }
          this.currentYearList = res.data.data.list;
        }
      });
    },
    async initCurrentTermList(year,resolve){
      let num = 0;
      let index = 0;
      let params = {
        page: 1,
        num: 999,
        schYearId: year
      };
      this.currentTermData = "";
      this.currentTermList = [];
      await this.$axios.get(common.term_list, {params: params}).then(res => {
        if (res.data.data && res.data.data.list.length > 0){
          for (let i = 0; i < res.data.data.list.length; i++){
            res.data.data.list[i]['label'] = res.data.data.list[i].name;
            res.data.data.list[i]['value'] = res.data.data.list[i].id;
            if (res.data.data.list[i].current == true){
              num++;
              index = i;
            }
          }
          if (num > 0){
            this.currentTermData = res.data.data.list[index].id;
          }else {
            this.currentTermData = res.data.data.list[0].id;
          }
          this.currentTermList = res.data.data.list;
        }
      });
    },
    async initCurrentWeekList(year,term){
      let currentWeekData = [];
      this.currentWeekList = [];
      this.currentSetWeekNum = 0;
      this.currentWeekData = '';
      let params = {
        syearId: year,
        termId: term
      };
      await this.$axios.get(common.week_list, {params: params}).then(res => {
        if (res.data.data && res.data.data.teachSetting){
          for (let i = 0; i < res.data.data.teachSetting.weekNum; i++){
            currentWeekData.push({
              label: this.$t("第")+ (i + 1) + this.$t("周"),
              value: i + 1
            });
          }
          if (currentWeekData.length > 0){
            this.currentWeekData = currentWeekData[0].value;
          }
          this.currentWeekList = currentWeekData;
          this.currentSetWeekNum = res.data.data.teachSetting.weekNum;
        }
      });
    },
    async getUserQrcode(value){
      let params = {
        userId: value
      };
      await this.$axios.get(common.enroll_student_qrcode, {params: params}).then(res => {
        if (res.data.data){
          this.g_QrCode = res.data.data.qrcodeImageBase64;
        }
      });
    },
    async getUserBarcode(value){
      let params = {
        userId: value
      };
      await this.$axios.get(common.enroll_student_barcode, {params: params}).then(res => {
        if (res.data.data){
          this.g_BarCode = res.data.data.barcodeImageBase64;
        }
      });
    },
    async queryStudentTimeInfo(){
      let params = {};
      await this.$axios.get(common.enroll_student_current_time, {loading: false}).then(res => {
        if (res.data.data){
          this.GdialogTime = res.data.data.enrollAllow;
          this.GenrollMsg = res.data.data.enrollMsg;

          if (res.data.data.enrollAllow == false){
            Dialog.confirm({
              title: '',
              message: res.data.data.enrollMsg,
              showCancelButton: false,
              showConfirmButton: this.globalAppShow && this.globalAppShow != '' ? true : false,
              confirmButtonText: '关闭'
            }).then(() => {
              // on confirm
              this.returnGlobalMain(1);
            });
          }
        }
      });
    },
    returnGlobalMain(value){
      let _self = this;
      if (this.globalAppShow == 'android') {
        this.setupWebViewJavascriptBridge(function(bridge) {
          //JS 调用 OC 的方法，方法名就是 OC 中提前注册的方法
          bridge.callHandler('returnGlobalMain', {'key': value}, function responseCallback(responseData) {

          });
        });
      }
      if (this.globalAppShow == 'ios') {
        this.setupWebViewJavascriptBridge(function(bridge) {
          //JS 调用 OC 的方法，方法名就是 OC 中提前注册的方法
          bridge.callHandler('returnGlobalMain', {'key': value}, function responseCallback(responseData) {

          });
        });
      }
    },
    setupWebViewJavascriptBridge(callback) {
      let _self = this;
      //Android使用
      if (this.globalAppShow == 'android') {
        if (window.WebViewJavascriptBridge) {
          callback(window.WebViewJavascriptBridge)
        } else {
          document.addEventListener(
            'WebViewJavascriptBridgeReady',
            () => {
              callback(window.WebViewJavascriptBridge)
            },
            false
          )
        }
      }else if(this.globalAppShow == 'ios'){
        if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        //WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
      }
    },
    initBridage(){
      let _self = this;
      this.setupWebViewJavascriptBridge(function(bridge) {
        if (_self.globalAppShow == 'android') {
          //初始化
          bridge.init((message, responseCallback) => {
            var data = {
              'Javascript Responds': 'Wee!'
            }
            responseCallback(data)
          })
        }
      })
    }
  }
}
