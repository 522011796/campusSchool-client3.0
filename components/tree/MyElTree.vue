<template>
  <div>
    <div v-if="slotTop" class="padding-tb-5 padding-lr-10">
      <slot name="top" ref="slotTop"></slot>
    </div>
    <div v-if="slotDefault" class="padding-tb-5 padding-lr-10">
      <slot name="middle" ref="slotDefault"></slot>
    </div>
    <div class="tree-container custom-el-tree margin-top-5">
      <div v-if="showCampus" class="text-center" :class="selectCampusAll == true ? 'tree-el-tree-all' : 'tree-el-tree-all-no'" @click="nodeClickCampusAll">
        {{$t('全部')}}
      </div>
      <el-tree
        class="filter-tree"
        :data="data"
        :show-checkbox="showCheckbox"
        :filter-node-method="filterNode"
        :default-checked-keys="defaultCheckedKeys"
        ref="tree"
        node-key="id"
        :highlight-current="selectCampusAll == true ? false : true"
        @node-click="handleNodeClick"
        @check-change="handleCheckChange">
      </el-tree>
    </div>
  </div>
</template>

<script>
  import {oneOf} from "../../utils/utils";
  import mixins from "../../utils/mixins";
  export default {
    name: 'myElTree',
    mixins: [mixins],
    components: {},
    props: {
      selValue: {
        default: false,
        type: [Boolean, Array, Number, String]
      },
      size: {
        defalult: 'small',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      defaultCheckedKeys: {
        default: function () {
          return [];
        },
        type: Array
      },
      width: {
        default: '',
        type: [String, Number]
      },
      iconExtra: {
        default: '',
        type: String
      },
      iconPrefix: {
        default: '',
        type: String
      },
      showCheckbox: {
        default: false,
        type: Boolean
      },
      opr: {
        default: false,
        type: Boolean
      },
      type: {
        default: '',
        type: String
      },
      subType: {
        default: '1',
        type: String
      },
      extraType: {
        default: '',
        type: String
      },
      showCampus: {
        default: true,
        type: Boolean
      }
    },
    computed: {
      selectModel(){
        this.dataCollege = this.setData(this.data);
      },
      setClass(){
        return [

        ]
      }
    },
    data() {
      return {
        data : [],
        filterText: '',
        slotDefault: false,
        slotTop: false,
        nodeTreeCurrentId: '7',
        selectCampusAll: true
      }
    },
    mounted() {
      this.slotDefault = this.$slots.middle !== undefined;
      this.slotTop = this.$slots.top !== undefined;
    },
    created() {
      this.initInfo();
    },
    methods: {
      async initInfo(){
        //await this.getSessionInfo();
        if(this.type == 1){
          await this.getCollegeInfo(this.subType);
          this.data = this.dataCollege;
        }else if(this.type == 2){
          await this.getDormBuildInfo(this.subType);
          this.data = this.dataDormBuild;
        }else if(this.type == 3){
          await this.getSchoolBuildInfo(this.subType);
          this.data = this.dataSchoolBuild;
        }else if(this.type == 4){
          await this.getDeptInfo(this.subType);
          this.data = this.dataDept;
        }else if(this.type == 100){

        }else if(this.type == 110){
          await this.getCategoryInfo();
          this.data = this.categorys;
        }
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleNodeClick(data) {
        this.selectCampusAll = false;
        this.$emit('node-click', data);
      },
      handleCheckChange(data, checked, indeterminate){
        this.$emit('check-change', data, checked, indeterminate);
      },
      nodeClickCampusAll(data){
        this.selectCampusAll = true;
        this.$emit('all-click', data);
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      },
      type(val){
        this.initInfo();
      },
      subType(val){
        this.initInfo();
      }
    }
  }
</script>

<style scoped>
.tree-el-tree-all{
  height: 25px;
  line-height: 25px;
  background: rgba(242,246,252, 0.3);
  padding: 3px 10px;
  text-align: center;
  font-size: 14px;
  color: #606266;
}
.tree-el-tree-all-no{
  height: 25px;
  line-height: 25px;
  padding: 3px 10px;
  text-align: center;
  font-size: 14px;
  color: #dddddd;
}
</style>
