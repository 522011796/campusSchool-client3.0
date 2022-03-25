<template>
  <div>
    <div>
      <el-input
        v-if="showFilter"
        :size="fliterSize"
        :placeholder="$t('输入关键字进行过滤')"
        v-model="filterText">
      </el-input>
    </div>
    <div class="margin-top-10">
      <el-tree ref="tree" :data="data" :props="props" :selectModel="selectModel"
               :show-checkbox="showCheckbox"
               :filter-node-method="filterNode"
               @node-click="handleNodeClick"
               @check-change="handleCheckChange">
      </el-tree>
    </div>
  </div>
</template>

<script>
  import {oneOf} from "../utils/utils";
  export default {
    name: 'myTree',
    props: {
      selValue: {
        default: false,
        type: [Boolean, Array, Number, String]
      },
      showFilter: {
        default: false,
        type: Boolean
      },
      props: {
        default: function () {
          return {
            children: 'children',
            label: 'label'
          }
        },
        type: Object
      },
      showCheckbox: {
        default: false,
        type: Boolean
      },
      showType: {
        /**
         * 1: 学院(到班级)
         * 2: 教学楼(到楼层)
         * 3: 宿舍楼(到楼层)
         */
        default: '',
        validate: function (val) {
          return oneOf(val, ['1', '2', '3']);
        }
      },
      showChildType: {
        /**
         * 1: 学院/教学楼/宿舍楼
         * 2: 学院/教学楼/宿舍楼(到专业/楼)
         * 3: 学院/教学楼/宿舍楼(到年级/教学楼房间/到宿舍房间)
         * 4: 教学楼/宿舍楼(到教学楼房间/到宿舍房间)
         */
        default: '',
        validate: function (val) {
          return oneOf(val, ['1','2','3','4']);
        }
      },
      fliterSize: {
        default: 'small',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      }
    },
    computed: {
      selectModel(){
        this.data = this.selValue;
        let dataArr = [];
        this.data = this.setChildData(this.data, dataArr);
      }
    },
    data() {
      return {
        value: [],
        data: [],
        filterText: '',
        dataDorm: [],
        dataCollege: [],
        dataClassBuild: []
      }
    },
    created() {
      /*if (this.showType == '1'){
        this.getCollegeData();
      }else if (this.showType == '2'){
        this.getClassBuildData();
      }else if (this.showType == '3'){
        this.getDormBuildData();
      }*/
      //this.getCollegeData();
    },
    methods: {
      getCollegeData(){

      }/*,
      getClassBuildData(){
        let dataArr = [];
        this.data = this.setChildData(this.data, dataArr);
      },
      getDormBuildData(){
        let dataArr = [];
        this.data = this.setChildData(this.data, dataArr);
      }*/,
      setChildData(data, dataArr){
        data.map((item, index) => {
          if (this.showChildType == "1"){
            dataArr.push({
              label: item.label,
              id: item.id
            });
          }else if (this.showChildType == "2"){
            if (!item.unit || item.unit == 1){
              dataArr.push({
                label: item.label,
                id: item.id
              });
              if (item.children && item.children.length > 0){
                dataArr[index]['children'] = [];
                this.setChildData(item.children, dataArr[index].children);
              }
            }
          }else if (this.showChildType == "3"){
            if (!item.unit || item.unit == 1 || item.unit == 2){
              dataArr.push({
                label: item.label,
                id: item.id
              });
              if (item.children && item.children.length > 0){
                dataArr[index]['children'] = [];
                this.setChildData(item.children, dataArr[index].children);
              }
            }
          }else if (this.showChildType == "4"){
            if (!item.unit || item.unit == 1 || item.unit == 2 || item.unit == 3){
              dataArr.push({
                label: item.label,
                id: item.id
              });
              if (item.children && item.children.length > 0){
                dataArr[index]['children'] = [];
                this.setChildData(item.children, dataArr[index].children);
              }
            }
          }else {
            dataArr.push(item);
          }
        });
        return dataArr;
      },
      handleNodeClick(data) {
        this.$emit('node-click', data);
      },
      handleCheckChange(data, checked, indeterminate){
        this.$emit('check-change', data, checked, indeterminate);
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    }
  }
</script>
