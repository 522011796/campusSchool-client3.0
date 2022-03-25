<template>
  <div ref="commTeacherList">
    <div class="layout-inline">
      <my-cascader class="layout-item" ref="SelectorDept" size="small" width-style="160" :sel-value="searchCommDeptData" type="4" sub-type="" @change="_handleCascaderChange($event)"></my-cascader>
      <my-input-button class="layout-item" size="small" :clearable="true" type="success" plain @click="_handleSearch"></my-input-button>
    </div>
    <el-table ref="commTableRef" :data="tableTeacherCommData"
              :max-height="maxHeight"
              size="mini"
              :loading="commLoading"
              :row-key="commGetRowKeys"
              :reserve-selection="true"
              @selection-change="_handleSelectionChange"
              @select="_handleSelectionSelect"
              @select-all="_handleSelectionAllSelect"
              v-bind="_selArr">
      <el-table-column
        v-if="setType == 'check'"
        :reserve-selection="true"
        type="selection"
        align="center"
        width="55"
        prop="user_id">
      </el-table-column>
      <el-table-column align="center" v-if="setType == 'radio'">
        <template slot-scope="scope">
          <my-radio :sel-value="commSelUserVal" v-bind="_selValue" :label="scope.row.user_id" @change="_handleChange(scope.row)"><span></span></my-radio>
        </template>
      </el-table-column>
      <el-table-column property="real_name" align="center" label="姓名">

      </el-table-column>
      <el-table-column property="job_num" align="center" label="工号">

      </el-table-column>
      <el-table-column property="" align="center" label="部门">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
            <div class="text-center">{{scope.row.department_name ? scope.row.department_name : '--'}}</div>
            <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
              {{scope.row.department_name ? scope.row.department_name : '--'}}
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
    name: 'teacherTreeAndList',
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
        let arr = [];
        for (let i = 0; i < this.selArr.length; i++){
          arr.push(this.selArr[i].user_id);
        }
        this.commSelUserArr = arr;
      }
    },
    data() {
      return {
        value: '',
        commPage: 1,
        commNum: 20,
        commTotalTotal: 0,
        tableTeacherCommData: [],
        searchCommDeptData: [],
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
        let params = {
          page: this.commPage,
          num: this.commNum,
          departPath: this.commSearchDept,
          deleted: 0
        };
        this.commLoading = true;
        params['realName'] = this.commSearchKey['input'];
        this.commSelUserArr = [];
        this.commSelUserNameArr = [];
        this.$axios.get(common.teacher_list, {params: params}).then(res => {
          if (res.data.data){
            //this.$refs.commTableRef.clearSelection();
            for (let i = 0; i < res.data.data.page.list.length; i++){
              let sel = inArray(res.data.data.page.list[i], this.selArr, 'user_id');
              if (sel > -1){
                this.commFlag = true;
                res.data.data.page.list[i]['_checked'] = true;
                //this.commSelUserArr.push(res.data.data.page.list[i].user_id);
                //this.commSelUserNameArr.push(res.data.data.page.list[i].real_name);
                this.$refs.commTableRef.toggleRowSelection(res.data.data.page.list[i], true);
              }
            }
            this.commFlag = false;
            this.tableTeacherCommData = res.data.data.page.list;
            this.commTotalTotal= res.data.data.page.totalCount;
            this.commNum = res.data.data.page.num;
            this.commPage = res.data.data.page.currentPage;
            //this._handleSelect();
          }
          this.commLoading = false;
        });
      },
      _handleOpen(){
        this.commPage = 1;
        this.commNum = 20;
        this._initTeacher();
      },
      _handleChange(data, index){
        this.commSelUserVal = data.user_id;
        this.commSelUserValObj = data;
        this.$emit("change", data);
      },
      _handleCascaderChange(data){
        this.commSearchDept = data[data.length-1];
        this._initTeacher();
      },
      _handleSelectionSelect(rows, row){
        let selected = rows.length && rows.indexOf(row) !== -1;
        this.commRow = row;
      },
      _handleSelectionAllSelect(selection){
        let self = this;
        self.commRow = "";
        // 筛选出所有选中项的id
        /*let multipleSelection = selection.filter(item => item);
        if (multipleSelection.length == 0) {
          this.tableTeacherCommData.forEach(function(value, index, arr) {
            if (self.commSelUserArr.indexOf(value.user_id) !== -1) {
              self.commSelUserArr.splice(self.commSelUserArr.indexOf(value.user_id), 1);
            }

            if (self.commSelUserNameArr.indexOf(value.real_name) !== -1) {
              self.commSelUserNameArr.splice(self.commSelUserNameArr.indexOf(value.real_name), 1);
            }
          });

        } else {
          var str = multipleSelection.map(function(value, index, arr) {
            return value.user_id;
          });
          var strName = multipleSelection.map(function(value, index, arr) {
            return value.real_name;
          });

          self.commSelUserArr = self.commSelUserArr.concat(str);
          self.commSelUserArr = [...new Set(self.commSelUserArr)];

          self.commSelUserNameArr = self.commSelUserNameArr.concat(strName);
          self.commSelUserNameArr = [...new Set(self.commSelUserNameArr)];

        }
        this.$emit("select", {
          userIds: self.commSelUserArr,
          userNames: self.commSelUserNameArr
        });*/
      },
      _handleSelectionChange(data){
        let self = this;
        // 筛选出选中项的id
        this.commMultipleSelection = data.filter(item => item);
        let str = this.commMultipleSelection.map(function(value, index, arr) {
          return value.user_id;
        });
        console.log(str);
        if (this.commRow) {
          // 勾选项id
          let selectedId = this.commRow.user_id;
          console.log(str.indexOf(selectedId),self.commSelUserArr.indexOf(selectedId));
          //console.log(inArray(selectedId,str), inArray(selectedId,self.commSelUserArr));
          if (str.indexOf(selectedId) == -1 && self.commSelUserArr.indexOf(selectedId) !== -1) {
            //取消勾选则是从partId中删除
            self.commSelUserArr.splice(self.commSelUserArr.indexOf(selectedId), 1);
            console.log(1);
          } else if (str.indexOf(selectedId) !== -1 && self.commSelUserArr.indexOf(selectedId) == -1) {
            //增加勾选增push进去
            self.commSelUserArr.push(selectedId);
            console.log(2);
          }

          //数组去重
          self.commSelUserArr = [...new Set(self.commSelUserArr)];

          console.log(this.commSelUserArr);
          this.$emit("select", {
            userIds: self.commSelUserArr,
            userNames: self.commSelUserNameArr
          })
        };

        /*let self = this;
        let dataArr = [].concat(data);
        data = data.reverse().filter(function (item, index) {
          const _index = data.findIndex((_item) => {
            return _item.user_id == item.user_id;
          });
          return index == _index;
        });
        // 筛选出选中项的id
        this.commMultipleSelection = data.reverse().filter(function (item, index) {
          const _index = data.findIndex((_item) => {
            return _item.user_id == item.user_id;
          });
          return index == _index;
        });

        let str = this.commMultipleSelection.map(function(value, index, arr) {
          return value.user_id;
        });
        let strName = this.commMultipleSelection.map(function(value, index, arr) {
          return value.real_name;
        });

        str = [...new Set(str)];
        strName = [...new Set(strName)];

        if (this.commRow) {
          // 勾选项id
          let selectedId = this.commRow.user_id;
          console.log(str.indexOf(selectedId),self.commSelUserArr.indexOf(selectedId));
          //console.log(inArray(selectedId,str), inArray(selectedId,self.commSelUserArr));
          if (str.indexOf(selectedId) == -1 && self.commSelUserArr.indexOf(selectedId) !== -1) {
            //取消勾选则是从partId中删除
            self.commSelUserArr.splice(self.commSelUserArr.indexOf(selectedId), 1);
            console.log(1);
          } else if (str.indexOf(selectedId) !== -1 && self.commSelUserArr.indexOf(selectedId) == -1) {
            //增加勾选增push进去
            self.commSelUserArr.push(selectedId);
            console.log(2);
          }

          let selectedName = this.commRow.real_name;
          if (strName.indexOf(selectedName) == -1 && self.commSelUserNameArr.indexOf(selectedName) !== -1) {
            //取消勾选则是从partId中删除
            self.commSelUserNameArr.splice(self.commSelUserNameArr.indexOf(selectedName), 1);
          } else if (strName.indexOf(selectedName) !== -1 && self.commSelUserNameArr.indexOf(selectedName) == -1) {
            //增加勾选增push进去
            self.commSelUserNameArr.push(selectedName);
          } else if (strName.indexOf(selectedName) !== -1 && self.commSelUserNameArr.indexOf(selectedName) != -1) {
            //增加勾选增push进去
            self.commSelUserNameArr.splice(self.commSelUserNameArr.indexOf(selectedName), 1);
          }

          //数组去重
          self.commSelUserArr = [...new Set(self.commSelUserArr)];
          self.commSelUserNameArr = [...new Set(self.commSelUserNameArr)];

          console.log(this.commSelUserArr);
          /!*this.$emit("select", {
            userIds: self.commSelUserArr,
            userNames: self.commSelUserNameArr
          });*!/
        }*/
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
        this._initTeacher();
      },
      _getSelectData(){
        this.$emit("select", this.commSelUserArr);
      }
    }
  }
</script>
