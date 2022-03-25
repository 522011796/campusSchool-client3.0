<template>
  <div v-bind="_getProcessData">
    <div class="layout-inline margin-bottom-10" v-for="(item, index) in conditionProcessList" :key="index">
      <el-select v-model="item.type" @change="handleChangeSlect($event, item)" :style="{width: widthStyle}">
        <el-option :label="options[0].label" :value="options[0].value" v-if="conditionProcessList.length-1 == index"></el-option>
        <el-option :label="options[1].label" :value="options[1].value"></el-option>
        <el-option v-if="userType != 'teacher'" :label="options[2].label" :value="options[2].value"></el-option>
        <el-option v-if="userType != 'teacher'" :label="options[3].label" :value="options[3].value"></el-option>
        <el-option v-if="userType != 'teacher'" :label="options[4].label" :value="options[4].value"></el-option>
        <el-option v-if="userType != 'teacher'" :label="options[5].label" :value="options[5].value"></el-option>
        <el-option v-if="userType != 'teacher'" :label="options[6].label" :value="options[6].value"></el-option>
        <el-option v-if="userType != 'teacher'" :label="options[7].label" :value="options[7].value"></el-option>
        <el-option v-if="userType != 'teacher'" :label="options[8].label" :value="options[8].value"></el-option>
      </el-select>
      <span class="layout-item">
        <i class="fa fa-plus-circle color-grand" style="font-size: 20px" @click="addProcess(item, index)"></i>
        <i v-if="index != 0 || (index == 0 && conditionProcessList.length > 1)" class="fa fa-minus-circle color-muted margin-left-5" style="font-size: 20px" @click="minusProcess(index)"></i>
      </span>
      <span class="layout-item margin-left-5" v-if="item.type != 'NullUser'">
        <el-popover
          popper-class="custom-popper-class-form"
          v-if="item.type == 'AnyUser'"
          placement="top"
          width="700"
          trigger="click"
          @show="handleShowTeacher(1, index)">
          <div>
            <teacher-tree-and-list :ref="`popverAuditRef${index}`" :sel-arr="item.audit" set-type="check" @select="handleSelAuditUser($event, item, index)"></teacher-tree-and-list>
          </div>
          <el-tag slot="reference" type="success">
            <i class="fa fa-user"></i>
            <label v-if="item.audit.length > 0">{{$t("人数")}}:{{item.audit.length}}</label>
          </el-tag>
        </el-popover>

        <el-popover
          popper-class="custom-popper-class-form"
          placement="top"
          width="700"
          trigger="click"
          @show="handleShowTeacher(2, index)">
          <div>
            <teacher-tree-and-list :ref="`popverShareRef${index}`" :sel-arr="item.share" set-type="check" @select="handleSelShareUser($event, item, index)"></teacher-tree-and-list>
          </div>
          <el-tag slot="reference" type="success">
            <i class="fa fa-share"></i>
            <label v-if="item.share.length > 0">{{$t("人数")}}:{{item.share.length}}</label>
          </el-tag>
        </el-popover>
      </span>
      <span class="layout-item margin-left-5" v-if="item.type != 'NullUser'">
        <el-button-group>
          <el-button size="small" :type="item.notice == 'and' ? 'primary' : 'default'" @click="handleChange('and', item)">{{$t("会签")}}</el-button>
          <el-button size="small" :type="item.notice == 'or' ? 'primary' : 'default'" @click="handleChange('or', item)">{{$t("或签")}}</el-button>
        </el-button-group>
      </span>
    </div>
  </div>
</template>

<script>
  import MySelect from "../../MySelect";
  import TeacherTreeAndList from "../treeAndList/TeacherTreeAndList";
  import {MessageWarning} from "../../../utils/utils";
  export default {
    name: 'myFlowProcessList',
    components: {MySelect,TeacherTreeAndList},
    props: {
      status: {
        default: 0,
        type: [String, Number]
      },
      handler: {
        default: '',
        type: String, Number
      },
      widthStyle: {
        default: '',
        type: [String, Number]
      },
      processData: {
        default: function () {
          return [];
        },
        type: Array
      },
      userType: {
        default: '',
        type: String
      }
    },
    computed: {
      _getProcessData(){
        this.conditionProcessList = [];
        let arr = [];
        if (this.processData.length > 0){
          for (let i = 0; i < this.processData.length; i++){
            let audtiArr = [];
            let shareArr = [];
            for (let j = 0; j < this.processData[i].audit.length; j++){
              audtiArr.push({
                user_id: this.processData[i].audit[j].user_id,
                real_name: this.processData[i].audit[j].real_name,
              });
            }
            for (let j = 0; j < this.processData[i].share.length; j++){
              shareArr.push({
                user_id: this.processData[i].share[j]
              });
            }
            arr.push({
              type: this.processData[i].type,
              audit: audtiArr,
              auditName: this.processData[i].auditName,
              share: shareArr,
              notice: this.processData[i].notice
            });
          }
        }else {
          arr = [{
            type: 'NullUser',
            audit: [],
            auditName: [],
            share: [],
            notice: 'or'
          }];
        }
        this.conditionProcessList = arr;
        //return this.conditionProcessList;
      }
    },
    data() {
      return {
        value: '',
        width: '',
        conditionUserType: 'or',
        conditionProcessList: [{
          type: 'NullUser',
          audit: [],
          auditName: [],
          share: [],
          notice: 'or'
        }],
        options: [
          {
            label: this.$t("不需要审批"),
            value: 'NullUser'
          },
          {
            label: this.$t("固定教师审批"),
            value: 'AnyUser'
          },
          {
            label: this.$t("班主任审批"),
            value: 'MasterTeacher'
          },
          {
            label: this.$t("辅导员审批"),
            value: 'CoachTeacher'
          },
          {
            label: this.$t("系主任审批"),
            value: 'DirectorTeacher'
          },
          {
            label: this.$t("系副主任审批"),
            value: 'DeputyDirectorTeacher'
          },
          {
            label: this.$t("学管主任审批"),
            value: 'StudentManageTeacher'
          },
          {
            label: this.$t("系部干事审批"),
            value: 'SecretaryTeacher'
          },
          {
            label: this.$t("宿管员审批"),
            value: 'DormitoryTeacher'
          }
        ]
      }
    },
    created() {

    },
    methods: {
      handleChange(type, item){
        item.notice = type;
      },
      handleChangeSlect(data, item){
        item.type = data;
      },
      addProcess(item, index){
        if (item.type == "NullUser"){
          MessageWarning(this.$t("你已经选择不需要审核，不能添加下一步流程"));
          return;
        }
        if (item.type == "AnyUser" && item.audit.length == 0){
          MessageWarning(this.$t("请先设置审批人，再进行下一步流程"));
          return;
        }
        let obj = {
          type: 'NullUser',
          audit: [],
          auditName: [],
          share: [],
          notice: 'or'
        };
        if (index != this.conditionProcessList.length - 1){
          obj['type'] = 'AnyUser';
        }
        this.conditionProcessList.splice(index+1, 0, obj);
      },
      minusProcess(index){
        this.conditionProcessList.splice(index, 1);
      },
      handleShowTeacher(type,index){
        if (type == 1){
          this.$refs['popverAuditRef'+index][0]._handleOpen();
        }else if (type == 2){
          this.$refs['popverShareRef'+index][0]._handleOpen();
        }
      },
      handleSelAuditUser(data ,item, index){
        let arr = [];
        let arrName = [];
        for (let i = 0; i < data.length; i++){
          arr.push({
            user_id: data[i].user_id
          });
          arrName.push(data[i].user_id + "@*@" + data[i].real_name);
        }
        item.audit = arr;
        item.auditName = arrName;
      },
      handleSelShareUser(data, item){
        let arr = [];
        for (let i = 0; i < data.length; i++){
          arr.push({
            user_id: data[i].user_id
          });
        }
        item.share = arr;
      },
      _handleResetChange(){
        this.conditionProcessList =  [
          {
            type: 'NullUser',
            audit: [],
            auditName: [],
            share: [],
            notice: 'or'
          }
        ];
      },
      _getFlowProcessData(){
        return this.conditionProcessList;
      }
    }
  }
</script>
