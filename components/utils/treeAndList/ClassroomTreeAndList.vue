<template>
  <div ref="commTeacherList">
    <div class="layout-inline">
      <my-cascader class="layout-item" ref="SelectorClassroom" size="small" width-style="160" :sel-value="searchCommClassRoomData" type="3" sub-type="2" @change="_handleCascaderChange($event)"></my-cascader>
      <!--<my-input-button class="layout-item" size="small" :clearable="true" type="success" plain @click="_handleSearch"></my-input-button>-->
    </div>
    <el-table ref="commTableRef" :data="tableTeacherCommData"
              :max-height="maxHeight"
              size="mini"
              :loading="commLoading">
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
          <my-radio :sel-value="commSelUserVal" v-bind="_selValue" :label="scope.row.id" @change="_handleChange(scope.row)"><span></span></my-radio>
        </template>
      </el-table-column>
      <el-table-column property="floor_num" align="center" label="楼层">

      </el-table-column>
      <el-table-column property="classroom_no" align="center" label="房间号">

      </el-table-column>
      <el-table-column property="" align="center" label="容纳人数">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">{{scope.row.people_num ? scope.row.people_num : '--'}}</div>
            <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{scope.row.people_num ? scope.row.people_num : '--'}}
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
  import {inArray} from "../../../utils/utils";
  export default {
    name: 'classroomTreeAndList',
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
        tableTeacherCommData: [],
        searchCommClassRoomData: [],
        commSearchKey: '',
        commSearchDept: '',
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
        commSearchBuild: '',
        commSearchFloor: '',
        commGetRowKeys(row) {
          return row.id
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
          buildId: this.searchCommClassRoomData[0],
          floorNum: this.searchCommClassRoomData[1]
        };
        this.commLoading = true;
        params['realName'] = this.commSearchKey['input'];
        //this.commSelUserArr = [];
        //this.commSelUserNameArr = [];
        this.$axios.get(common.classroom_page, {params: params}).then(res => {
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
      _handleOpen(){
        this.commPage = 1;
        this.commNum = 20;
        this.commSelUserArr = this.selArr;
        this._initTeacher();
      },
      _handleChange(data, index){
        this.commSelUserVal = data.id;
        this.commSelUserValObj = data;
        this.$emit("change", data);
      },
      _handleCascaderChange(data){
        this.searchCommClassRoomData = data;
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
            let checked = inArray(this.tableTeacherCommData[i], this.commSelUserArr, 'id');
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
        this.searchCommClassRoomData =  [];
        this.commSearchKey =  '';
        this.commSearchDept =  '';
        this.commSelUserVal =  '';
        this.commSelUserValObj =  {};
        this.commSelUserValArr =  [];
        this.commSelUserArr = [];

        if (this.$refs.SelectorClassroom && this.$refs.SelectorClassroom.$refs.cascaderSelector) {
          this.$refs.SelectorClassroom.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths()
        }
        if (this.$refs.SelectorClassroom && this.$refs.SelectorClassroom.$refs.cascaderSelector) {
          this.$refs.SelectorClassroom.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths()
        }

        //this.$refs.commTableRef.clearSelection();
      },
      _handleSelect(){
        this.commFlag = true;
        let selArr = [];
        let arr = [].concat(this.tableTeacherCommData);
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
      }
    }
  }
</script>
