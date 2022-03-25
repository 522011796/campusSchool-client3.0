<template>
  <div class="role-block" v-bind="_selArr">
    <el-row>
      <el-col :span="6">
        <div class="role-left-block">
          <div class="role-left-block-line"></div>
          <ul class="role-ul">
            <li class="role-li" v-for="(item, index) in roleList" :key="index">
              <span>
                <el-checkbox v-model="item._checked" @change="_handleChange($event, item.id)" style="margin-right: 0px !important;"></el-checkbox>
                <label class="color-sub-grand" @click="_handleClick(item.id)">{{item.role_name}}</label>
              </span>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="role-right-block">
          <div class="text-right padding-lr-5">
            <my-input-button class="layout-item" size="small" :clearable="true" type="success" plain @click="_handleSearch"></my-input-button>
          </div>
          <el-table
            class="margin-top-5"
            ref="refTable"
            :data="roleTeacherData"
            header-cell-class-name="custom-table-cell-bg"
            :header-row-style="{lineHeight: '30px'}"
            height="254"
            size="mini"
            :loading="roleTableLoading">
            <el-table-column
              align="center"
              width="55">
              <template slot="header" slot-scope="scope">
                <el-checkbox v-model="commAllCheck" @change="_handleSelectionAllSelect"></el-checkbox>
              </template>

              <template slot-scope="scope">
                <el-checkbox v-model="scope.row._checked" @change="_handleSelectionSelect($event, scope.row)"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('姓名')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.real_name}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.real_name}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('工号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.job_num}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.job_num}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {common} from "../../../utils/api/url";
  import MyInputButton from "../../search/MyInputButton";
  import {inArray, MessageWarning} from "../../../utils/utils";

  export default {
    name: 'myRoleList',
    components: {MyInputButton},
    props: {
      status: {
        default: '',
        type: [String, Number]
      },
      selArr: {
        default: function () {
          return [];
        },
        type: Array
      }
    },
    computed: {
      _selArr() {
        //this.roleSelUserArr = this.selArr;
        this.roleSelUserArr = [].concat(this.selArr);
        this.initRole();
      }
    },
    data() {
      return {
        value: '',
        roleList: [],
        roleTeacherData: [],
        roleSelArr: [],
        roleSearchKey: '',
        commAllCheck: false,
        checkboxCount: 0,
        roleSelUserArr: [],
        roleTableLoading: false,
        commSearchRoleId: ''
      }
    },
    created() {

    },
    methods: {
      initRole(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.teacher_role_group_list, {params: params}).then(res => {
          if (res.data.data){
            this.roleList = res.data.data.list;

            for (let i = 0; i < res.data.data.list.length; i++) {
              res.data.data.list[i]['_checked'] = false;
            }

            if (res.data.data.list.length > 0){
              this.commSearchRoleId = res.data.data.list[0].id;
              this.initRoleTeacher(res.data.data.list[0].id);
            }
          }
        });
      },
      initRoleTeacher(roleId, check){
        let params = {
          page: 1,
          num: 9999,
          searchKey: this.roleSearchKey,
          roleId: roleId
        };
        this.roleTableLoading = true;
        this.$axios.get(common.teacher_role_group_user_list, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              if (check == true){
                res.data.data.list[i]['_checked'] = true;
                let checked = inArray(res.data.data.list[i], this.roleSelUserArr, 'user_id');

                if (checked == -1){
                  this.roleSelUserArr.push(res.data.data.list[i]);
                }
                this.checkboxCount++;
              }else if (check == false){
                res.data.data.list[i]['_checked'] = false;

                let checked = inArray(res.data.data.list[i], this.roleSelUserArr, 'user_id');

                if (checked > -1){
                  this.roleSelUserArr.splice(checked,1);
                }
                this.checkboxCount--;
              }else {
                let sel = inArray(res.data.data.list[i], this.roleSelUserArr, 'user_id');
                if (sel > -1){
                  res.data.data.list[i]['_checked'] = true;
                  this.checkboxCount++;
                }else {
                  res.data.data.list[i]['_checked'] = false;
                }
              }
            }
            this.roleTeacherData = res.data.data.list;

            if (this.checkboxCount != 0 && this.checkboxCount == this.roleTeacherData.length){
              this.commAllCheck = true;
            }else {
              this.commAllCheck = false;
            }
            this.roleTableLoading = false;
          }
        });
      },
      _handleSearch(data){
        this.page = 1;
        this.roleSearchKey = data.input;
        if (!this.commSearchRoleId == ""){
          this.initRoleTeacher(this.commSearchRoleId);
        }else {
          MessageWarning(this.$t("请选择左侧角色组再进行搜索"));
        }
      },
      _handleSelectionSelect(event, row){
        if (event){//选中
          this.roleSelUserArr.push(row);
          row._checked = true;
          this.checkboxCount++;
        }else {//取消选中
          let checked = inArray(row, this.roleSelUserArr, 'user_id');
          this.roleSelUserArr.splice(checked,1);
          row._checked = false;
          this.checkboxCount--;
        }
        if (this.checkboxCount != 0 && this.checkboxCount == this.roleTeacherData.length){
          this.commAllCheck = true;
        }else {
          this.commAllCheck = false;
        }
        this.$emit("select", this.roleSelUserArr);
      },
      _handleSelectionAllSelect(selection){
        this.commAllCheck = selection;
        for (let i = 0; i < this.roleTeacherData.length; i++){
          if (selection == true){
            this.roleTeacherData[i]._checked = true;
            let checked = inArray(this.roleTeacherData[i], this.roleSelUserArr, 'user_id');
            if (checked == -1){
              this.roleSelUserArr.push(this.roleTeacherData[i]);
            }
            this.checkboxCount++;
          }else {
            this.roleTeacherData[i]._checked = false;
            this.checkboxCount--;
          }
        }
      },
      _handleChange(event, id){
        if (event == true){
          this.checkboxCount = 0;
        }
        this.initRoleTeacher(id, event);
      },
      _handleClick(id){
        this.checkboxCount = 0;
        this.commSearchRoleId = id;
        this.initRoleTeacher(id);
      },
      _getRoleSelectData(){
        return this.roleSelUserArr;
      },
      _handleResetChange(){
        this.roleSelUserArr = [];
        this.commSearchRoleId = "";
        //this.initRole();
      },
      _handleOpen(){
        this.roleSelUserArr = this.selArr;
        this.initRole();
      }
    }
  }
</script>

<style scoped>
  .role-block{
    border: 1px solid #cccccc;
    background: #fefefe;
    height: 300px;
  }
  .role-left-block{
    height: 300px;
    overflow-y: auto;
    overflow-x: auto;
    width: 100%;
    position: relative;
  }
  .role-left-block-line{
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    right: 0px;
    z-index: 99;
    height: 300px;
    width: 1px;
    background: #dddddd;
  }
  .role-right-block{
    height: 300px;
    width: 100%;
    position: relative;
  }
  .role-ul{
    list-style: none;
  }
  .role-li{
    height: 35px;
    line-height: 35px;
    text-align: left;
    border-bottom: 1px solid #E4E7ED;
    padding: 0px 10px;
  }
</style>
