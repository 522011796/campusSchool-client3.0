<template>
  <div ref="commTeacherList" style="height: 370px;">
    <div v-if="!commDrawer">
      <div class="layout-inline">
        <my-cascader class="layout-item" :clearable="true" ref="SelectorDept" size="small" width-style="160" :sel-value="searchCommDeptData" type="2" sub-type="2" @change="_handleCascaderChange($event)"></my-cascader>
      </div>
      <el-table ref="commTableRef" :data="tableTeacherCommDormData"
                :max-height="maxHeight"
                size="mini"
                :loading="commLoading">
        <el-table-column
          v-if="setType == 'select'"
          align="center">
          <template slot-scope="scope">
            <a href="javascript:;" class="color-grand" @click="_selectDorm(scope.row)">{{$t("分配")}}</a>
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
        <el-table-column property="dormitory_no" align="center" label="宿舍编号">

        </el-table-column>
        <el-table-column align="center" label="宿舍类型">
          <template slot-scope="scope">
            <label>{{dormTypeTextInfo(scope.row.type)}}</label>
          </template>
        </el-table-column>
        <el-table-column property="student_id" align="center" label="容纳人数">
          <template slot-scope="scope">
            <label>{{scope.row.has_people_num}}</label>
            /
            <label>{{scope.row.people_num}}</label>
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

    <div v-if="commDrawer">
      <div class="layout-inline">
        <el-button size="small" type="success" plain>
          <i class="fa fa-arrow-left"></i>
          {{$t("返回")}}
        </el-button>
      </div>
      <div class="margin-top-10">
        <el-table ref="commTableRef" :data="tableDormCommDormData"
                  :max-height="maxHeight"
                  size="mini">
          <el-table-column
            label="床号"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.bed_no}}号床</span>
            </template>
          </el-table-column>
          <el-table-column
            label="状态"
            align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.student_id != null" class="color-warning">{{$t("已分配")}}</span>
              <span v-else class="color-success">{{$t("未分配")}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center">
            <template slot-scope="scope">
              <a href="javascript:;" v-if="scope.row.student_id == null" class="color-grand" @click="_selectBedno(scope.row)">{{$t("选择")}}</a>
              <span v-else>--</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  import MyCascader from "../select/MyCascader";
  import {common} from "../../../utils/api/url";
  import MyRadio from "../../MyRadio";
  import MyInputButton from "../../search/MyInputButton";
  import {dormTypeText, inArray, MessageSuccess, MessageWarning} from "../../../utils/utils";
  export default {
    name: 'dormBuildTreeAndList',
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
        tableTeacherCommDormData: [],
        searchCommDeptData: [],
        tableDormCommDormData: [],
        commSex: '',
        commSearchKey: '',
        commSearchBuild: '',
        commSearchFloor: '',
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
        commDrawer: false,
        commUserId: '',
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
          type: this.commSex.type,
          buildId: this.commSearchBuild,
          floorNum: this.commSearchFloor,
        };
        this.commLoading = true;
        params['realName'] = this.commSearchKey['input'];
        //this.commSelUserArr = [];
        //this.commSelUserNameArr = [];
        this.$axios.get(common.dormroom_page, {params: params}).then(res => {
          if (res.data.data){
            //this.$refs.commTableRef.clearSelection();
            for (let i = 0; i < res.data.data.list.length; i++){
              let sel = inArray(res.data.data.list[i], this.commSelUserArr, 'id');
              if (sel > -1){
                this.commFlag = true;
                res.data.data.list[i]['_checked'] = true;
                this.checkboxCount++;
              }else {
                res.data.data.list[i]['_checked'] = false;
              }
            }
            if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherCommDormData.length){
              this.commAllCheck = true;
            }else {
              this.commAllCheck = false;
            }
            this.commFlag = false;
            this.tableTeacherCommDormData = res.data.data.list;
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
        this.commSelUserVal = data.id;
        this.commSelUserValObj = data;
        this.$emit("change", data);
      },
      _handleCascaderChange(data){
        //this.commSearchDept = data[data.length-1];
        this.commSearchBuild = "";
        this.commSearchFloor = "";
        if (data.length == 1){
          this.commSearchBuild = data[0];
        }else if (data.length == 2){
          this.commSearchBuild = data[0];
          this.commSearchFloor = data[1];
        }
        this._initTeacher();
      },
      _handleSelectionSelect(event, row){
        if (event){//选中
          this.commSelUserArr.push(row);
          row._checked = true;
          this.checkboxCount++;
        }else {//取消选中
          let checked = inArray(row, this.commSelUserArr, 'id');
          this.commSelUserArr.splice(checked,1);
          row._checked = false;
          this.checkboxCount--;
        }
        if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherCommDormData.length){
          this.commAllCheck = true;
        }else {
          this.commAllCheck = false;
        }
        this.$emit("select", this.commSelUserArr);
      },
      _handleSelectionAllSelect(selection){
        this.commAllCheck = selection;
        for (let i = 0; i < this.tableTeacherCommDormData.length; i++){
          if (selection == true){
            this.tableTeacherCommDormData[i]._checked = true;
            let checked = inArray(this.tableTeacherCommDormData[i], this.commSelUserArr, 'id');
            if (checked == -1){
              this.commSelUserArr.push(this.tableTeacherCommDormData[i]);
            }
            this.checkboxCount++;
          }else {
            this.tableTeacherCommDormData[i]._checked = false;
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
        this.commDrawer = false;
        this.tableDormCommDormData = [];
        this.commSearchBuild = "";
        this.commSearchFloor = "";

        if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
          this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.activePath = [];
          this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths()
        }
        if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
          this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.activePath = [];
          this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths()
        }

        //this.$refs.commTableRef.clearSelection();
      },
      _handleSelect(){
        this.commFlag = true;
        let selArr = [];
        let arr = [].concat(this.tableTeacherCommDormData);
        let arrTempUser = [].concat(this.selArr);

        for (let i = 0; i < arr.length; i++){
          let sel = inArray(arr[i], arrTempUser, 'id');
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
        this._initTeacher();
      },
      _getSelectData(){
        this.$emit("select", this.commSelUserArr);
      },
      _selectDorm(row){
        let params = {
          page: 1,
          num: 9999,
          dormitoryId: row.id
        };
        this.$axios.get(common.dorm_user_class_bed_list, {params: params}).then(res=>{
          if (res.data.data){
            this.tableDormCommDormData = res.data.data;
          }
        });
        this.commDrawer = true;
      },
      _selectBedno(row){
        let params = {
          bedNo: row.bed_no,
          dromId: row.drom_id,
          studentId: this.commSex.userId,
          majorClassId: this.commSex.majorId
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
      },
      dormTypeTextInfo(val){
        return dormTypeText(val);
      }
    }
  }
</script>
