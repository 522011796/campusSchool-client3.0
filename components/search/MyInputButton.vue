<template>
  <span>
    <el-input v-model="inputValue" :size="size" :style="widthClass" :placeholder="placeholder" :clearable="clearable">
      <el-select v-if="showSelect" v-model="selectValue" :style="selectWidthClass" :clearable="clearable" slot="prepend" :placeholder="$t('请选择')" @change="selectChange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
    </el-input>
    <el-button class="el-button--0CB5AF" :size="size" :type="type" :plain="plain" @click="handleClick">
      <i v-if="showIcon" :class="iconStyle"></i>
      {{$t("搜索")}}
    </el-button>
  </span>
</template>

<script>
  import {oneOf} from "../../utils/utils";

  export default {
    name: 'myInputButton',
    props: {
      placeholder: {
        default: '请输入内容',
        type: String
      },
      widthClass: {
        default: 'width: 150px',
        type: String
      },
      selectWidthClass: {
        default: 'width: 100px',
        type: String
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      type: {
        defalult: '',
        validate: function (val) {
          return oneOf(val, ['success', 'info', 'warning', 'danger', 'primary']);
        }
      },
      plain: {
        default: false,
        type: Boolean
      },
      iconStyle: {
        default: '',
        type: String
      },
      showSelect: {
        default: false,
        type: Boolean
      },
      clearable: {
        default: false,
        type: Boolean
      },
      options: {
        default: function () {
          return [];
        },
        type: Array
      }
    },
    computed: {

    },
    mounted() {
      this.showIcon = this.iconStyle !== '';
    },
    data() {
      return {
        inputValue: '',
        selectValue: '',
        showIcon: false
      }
    },
    methods: {
      handleClick(data) {
        let obj = {};
        if (!!this.selectValue){
          obj = {
            select: this.selectValue,
            input: this.inputValue
          }
        }else if(!this.selectValue){
          obj = {
            input: this.inputValue
          }
        }
        this.$emit('click', obj);
      },
      selectChange(data) {
        this.selectValue = data;
      }
    }
  }
</script>
