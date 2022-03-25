<template>
  <div>
    <el-cascader
      ref="cascaderSelector"
      v-model="value"
      v-bind="selectModel"
      :options="data"
      :setWidth="setWidth"
      :style="width"
      :disabled="disabled"
      :clearable="clearable"
      :size="size"
      :props="props"
      :placeholder="placeholder"
      @change="handleChange"></el-cascader>
  </div>
</template>

<script>
  import {oneOf} from './../../../utils/utils';
  import mixins from "../../../utils/mixins";
  export default {
    name: 'myCascader',
    mixins: [mixins],
    props: {
      selValue: {
        default: function () {
          return [];
        },
        type: Array
      },
      props: {
        default: function () {
          return {};
        },
        type: Object
      },
      placeholder: {
        default: '请选择',
        type: String
      },
      label: {
        default: '',
        type: String
      },
      disabled: {
        default: false,
        type: Boolean
      },
      clearable: {
        default: false,
        type: Boolean
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      type: {
        default: '',
        type: String
      },
      subType: {
        default: 1,
        type: String
      },
      widthStyle: {
        default: '',
        type: [String, Number]
      }
    },
    computed: {
      selectModel(){
        this.value = this.selValue;
      },
      setWidth(){
        if (!!this.widthStyle){
          this.width = {
            'width': this.widthStyle + "px"
          };
        }
      }
    },
    data() {
      return {
        value: '',
        options: [],
        width: '',
        data : [],
      }
    },
    created() {
      this.initInfo();
    },
    methods: {
      async initInfo(){
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
        }
      },
      handleChange(data) {
        this.$emit('change', data);
      }
    },
    watch: {
      type(val){
        this.initInfo();
      },
      subType(val){
        this.initInfo();
      }
    }
  }
</script>
