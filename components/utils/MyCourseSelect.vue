<template>
  <span>
    <el-select :filterable="filterable" v-model="value" v-bind="selectModel" :size="size" :placeholder="$t('请选择')" :clearable="clearable" @change="handleChange">
      <el-option v-for="(item, index) in courseList" :key="index" :value="item.id" :label="item.courseName"></el-option>
    </el-select>
  </span>
</template>

<script>
  import {oneOf} from "../../utils/utils";
  import {common} from "../../utils/api/url";
  export default {
    name: 'myCourseSelect',
    props: {
      selValue: {
        default: '',
        type: [String, Number]
      },
      clearable: {
        default: false,
        type: Boolean
      },
      filterable: {
        default: false,
        type: Boolean
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      }
    },
    computed: {
      selectModel(){
        this.value = this.selValue;
      }
    },
    data() {
      return {
        value: '',
        courseList: []
      }
    },
    created() {
      this.initSelect();
    },
    methods: {
      initSelect(){
        this.$axios.get(common.course_list).then(res => {
          if (res.data.data){
            this.courseList = res.data.data;
          }
        });
      },
      handleChange(data) {
        this.$emit('change', data);
      }
    }
  }
</script>
