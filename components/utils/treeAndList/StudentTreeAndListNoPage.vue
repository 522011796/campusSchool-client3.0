<template>
  <div ref="commTeacherList">
    <div class="layout-inline">
      <my-cascader class="layout-item" ref="SelectorDept" size="small" width-style="160" :sel-value="searchCommDeptData" type="1" sub-type="4" @change="_handleCascaderChange($event)"></my-cascader>
      <my-input-button class="layout-item" size="small" :clearable="true" type="success" plain @click="_handleSearch"></my-input-button>
    </div>
    <el-table ref="commTableRef" :data="tableTeacherCommData"
              :max-height="maxHeight"
              size="mini"
              v-loading="commLoading">
      <el-table-column
        v-if="setType == 'select'"
        align="center">
        <template slot-scope="scope">
          <a href="javascript:;" class="color-grand" v-if="scope.row.bed_no == null" @click="_selectBedno(scope.row)">{{$t("分配")}}</a>
          <label class="color-warning" v-else>{{$t("已分配")}}</label>
        </template>
      </el-table-column>
      <el-table-column
        v-if="setType == 'check'"
        align="center"
        width="55">
        <template slot="header" slot-scope="scope">
          <el-checkbox v-model="commAllCheck" @change="_handleSelectionAllSelect"></el-checkbox>
        </template>

        <template slot-scope="scope">
          <el-checkbox v-model="scope.row._checked" @change="_handleSelectionSelect($event, scope.row)"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column align="center" v-if="setType == 'radio'">
        <template slot-scope="scope">
          <my-radio :sel-value="commSelUserVal" v-bind="_selValue" :label="scope.row.user_id" @change="_handleChange(scope.row)"><span></span></my-radio>
        </template>
      </el-table-column>
      <el-table-column property="real_name" align="center" label="姓名">

      </el-table-column>
      <el-table-column property="student_id" align="center" label="学号">

      </el-table-column>
      <el-table-column property="" align="center" label="班级">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">{{scope.row.class_name ? scope.row.class_name : '--'}}</div>
            <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{scope.row.class_name ? scope.row.class_name : '--'}}
            </div>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <div class="text-right margin-top-10">
      <el-pagination
        @size-change="_handleSizeChange"
        @current-change="_handleCurrentChange"
        :current-page="commPage"
        :page-sizes="[10, 20, 30, 50, 100]"
        :page-size="commNum"
        layout="total, sizes, prev, pager, next"
        :total="commTotalTotal">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import MyCascader from "../select/MyCascader";
  import {common} from "../../../utils/api/url";
  import MyRadio from "../../MyRadio";
  import MyInputButton from "../../search/MyInputButton";
  import {inArray, MessageSuccess, MessageWarning} from "../../../utils/utils";
  export default {
    name: 'studentTreeAndListNoPage',
    components: {MyRadio, MyCascader,MyRadio,MyInputButton},
    props: {
      selValue: {
        default: '',
        type: [String , Array]
      },
      selArr: {
        default: function () {
          return [];
        },
        type: Array
      },
      setType: {
        default: 'radio',
        type: [String, Number]
      },
      userType: {
        default: '',
        type: String
      },
      groupId: {
        default: '',
        type: [String, Number]
      },
      maxHeight: {
        default: '300',
        type: [String, Number]
      }
    },
    computed: {
      _selValue() {
        this.commSelUserVal = this.selValue;
      },
      _selArr() {
        /*let arr = [];
        for (let i = 0; i < this.selArr.length; i++){
          arr.push(this.selArr[i].user_id);
        }*/
        //this.commSelUserArr = this.selArr;
      }
    },
    data() {
      return {
        commAllCheck: false,
        commAllCheckCount: 0,
        value: '',
        commPage: 1,
        commNum: 20,
        commTotalTotal: 0,
        tableTeacherCommData: [],
        searchCommDeptData: [],
        commSex: '',
        commSearchKey: '',
        commSearchDept: '',
        commSearchCollege: '',
        commSearchMajor: '',
        commSearchGrade: '',
        commSearchClass: '',
        commSelUserVal: '',
        commSelUserArr: [],
        commSelUserNameArr: [],
        commSelUserTempArr: [],
        commSelUserValObj: {},
        commSelUserValArr: [],
        commLoading: false,
        commFlag: false,
        commMultipleSelection: [],
        commRow: '',
        commGetRowKeys(row) {
          return row.user_id
        }
      }
    },
    created() {
      //this._initTeacher();
    },
    methods: {
      _initTeacher(){
        this.checkboxCount = 0;
        let params = {
          page: this.commPage,
          num: this.commNum,
          deleted: 0,
          sex: this.commSex.sex,
          collegeId: this.commSearchCollege,
          majorId: this.commSearchMajor,
          grade: this.commSearchGrade,
          clasz: this.commSearchClass,
          groupId: this.groupId
        };
        this.commLoading = true;
        params['realName'] = this.commSearchKey['input'];
        //this.commSelUserArr = [];
        //this.commSelUserNameArr = [];
        //params = this.$qs.stringify(params);
        this.$axios.get(common.dormaccess_student_select_status_page, {params:params}).then(res => {
          if (res.data.data){
            //this.$refs.commTableRef.clearSelection();
            for (let i = 0; i < res.data.data.list.length; i++){
              let sel = inArray(res.data.data.list[i], this.commSelUserArr, 'user_id');
              if (sel > -1){
                this.commFlag = true;
                res.data.data.list[i]['_checked'] = true;
                this.checkboxCount++;
              }else {
                res.data.data.list[i]['_checked'] = false;
              }
            }
            if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherCommData.length){
              this.commAllCheck = true;
            }else {
              this.commAllCheck = false;
            }
            this.commFlag = false;
            this.tableTeacherCommData = res.data.data.list;
            this.commTotalTotal= res.data.data.totalCount;
            this.commNum = res.data.data.num;
            this.commPage = res.data.data.currentPage;
            //this._handleSelect();
          }
          this.commLoading = false;
        });
      },
      _handleOpen(params){
        this.commPage = 1;
        this.commNum = 20;
        this.commSex = params ? params : '';
        this.commSelUserArr = this.selArr;
        this._initTeacher();
      },
      _handleChange(data, index){
        this.commSelUserVal = data.user_id;
        this.commSelUserValObj = data;
        this.$emit("change", data);
      },
      _handleCascaderChange(data){
        //this.commSearchDept = data[data.length-1];
        this.commSearchCollege = "";
        this.commSearchMajor = "";
        this.commSearchGrade = "";
        this.commSearchClass = "";
        if (data.length == 1){
          this.commSearchCollege = data[0];
        }else if (data.length == 2){
          this.commSearchCollege = data[0];
          this.commSearchMajor = data[1];
        }else if (data.length == 3){
          this.commSearchCollege = data[0];
          this.commSearchMajor = data[1];
          this.commSearchGrade = data[2];
        }else if (data.length == 4){
          this.commSearchCollege = data[0];
          this.commSearchMajor = data[1];
          this.commSearchGrade = data[2];
          this.commSearchClass = data[3];
        }
        this.commPage = 1;
        this._initTeacher();
      },
      _handleSelectionSelect(event, row){
        if (event){//选中
          this.commSelUserArr.push(row);
          row._checked = true;
          this.checkboxCount++;
        }else {//取消选中
          let checked = inArray(row, this.commSelUserArr, 'user_id');
          this.commSelUserArr.splice(checked,1);
          row._checked = false;
          this.checkboxCount--;
        }
        if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherCommData.length){
          this.commAllCheck = true;
        }else {
          this.commAllCheck = false;
        }
        this.$emit("select", this.commSelUserArr);
      },
      _handleSelectionAllSelect(selection){
        this.commAllCheck = selection;
        for (let i = 0; i < this.tableTeacherCommData.length; i++){
          if (selection == true){
            this.tableTeacherCommData[i]._checked = true;
            let checked = inArray(this.tableTeacherCommData[i], this.commSelUserArr, 'user_id');
            if (checked == -1){
              this.commSelUserArr.push(this.tableTeacherCommData[i]);
            }
            this.checkboxCount++;
          }else {
            this.tableTeacherCommData[i]._checked = false;
            this.checkboxCount--;
          }
        }
      },
      _handleSelectionChange(data){

      },
      _handleSizeChange(data){
        this.commPage = 1;
        this.commNum = data;
        this._initTeacher();
      },
      _handleCurrentChange(data){
        this.commPage = data;
        this._initTeacher();
      },
      _handleResetChange(){
        this.value = '';
        this.commNum = 20;
        this.commPage = 1;
        this.searchCommDeptData =  [];
        this.commSearchKey =  '';
        this.commSearchDept =  '';
        this.commSelUserVal =  '';
        this.commSelUserValObj =  {};
        this.commSelUserValArr =  [];
        this.commSelUserArr = [];

        if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
          this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths()
        }
        if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
          this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths()
        }

        //this.$refs.commTableRef.clearSelection();
      },
      _handleSelect(){
        this.commFlag = true;
        let selArr = [];
        let arr = [].concat(this.tableTeacherCommData);
        let arrTempUser = [].concat(this.selArr);

        for (let i = 0; i < arr.length; i++){
          let sel = inArray(arr[i], arrTempUser, 'user_id');
          if (sel > -1){
            selArr.push(arr[i]);
            this.$refs.commTableRef.toggleRowSelection(arr[i], true);
          }
        }
        this.commSelUserTempArr = selArr;
        this.commFlag = false;
      },
      _handleSearch(data){
        this.commSearchKey = data;
        this.commPage = 1;
        this._initTeacher();
      },
      _getSelectData(){
        this.$emit("select", this.commSelUserArr);
      },
      _selectBedno(row){
        let params = {
          bedNo: this.commSex.bedNo,
          dromId: this.commSex.dormId,
          studentId: row.user_id,
          majorClassId: row.clasz
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.dorm_user_class_bed_distribute, params).then(res => {
          if (res.data.data){
            this._initTeacher();
            MessageSuccess(res.data.desc);
            this.$emit("distribute", res.data.data);
          }else{
            MessageWarning(res.data.desc);
          }
        });
      }
    }
  }
</script>
