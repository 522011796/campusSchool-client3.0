<template>
  <div>
    <el-select
      v-model="value"
      v-bind="selectModel"
      :setPlaceholder="setPlaceholder"
      :placeholder="selectPlaceholder"
      :size="size"
      :clearable="clearable"
      :disabled="disabled"
      :filterable="filterable"
      :loading="loading"
      :remote="remote"
      :remote-method="remoteMethod"
      @change="handleChange"
      :setWidth="setWidth"
      :style="width">

      <template v-if="group == false">
        <el-option
          v-for="(item, index) in options"
          :key="index"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </template>

      <template v-if="group == true">
        <el-option-group
          v-for="itemGroup in options"
          :key="itemGroup.label"
          :label="itemGroup.label">
          <el-option
            v-for="itemChild in itemGroup.options"
            :key="itemChild.value"
            :label="itemChild.label"
            :value="itemChild.value">
          </el-option>
        </el-option-group>
      </template>
    </el-select>
  </div>
</template>

<script>
  import {oneOf} from "../utils/utils";
  export default {
    name: 'mySelect',
    props: {
      placeholder: {
        default: '',
        type: String
      },
      selValue: {
        default: '',
        type: [String, Number,Boolean]
      },
      options: {
        default: function () {
          return [];
        },
        type: Array
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      clearable: {
        default: false,
        type: Boolean
      },
      disabled: {
        default: false,
        type: Boolean
      },
      filterable: {
        default: false,
        type: Boolean
      },
      remote: {
        default: false,
        type: Boolean
      },
      loading: {
        default: false,
        type: Boolean
      },
      group: {
        default: false,
        type: Boolean
      },
      remoteMethod: {
        default: function (data) {
          return data;
        },
        type: Function
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
      setPlaceholder(){
        this.selectPlaceholder = this.placeholder ? this.placeholder : this.$t("请选择")
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
        selectPlaceholder: '',
        value: '',
        width: ''
      }
    },
    methods: {
      handleChange(data) {
        this.$emit('change', data);
      }
    }
  }
</script>
