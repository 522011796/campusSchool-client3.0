<template>
  <div>
    <li :selModel="selModel" :iconPrefix="iconPrefix" :iconExtra="iconExtra" :width="width" :opr="opr">
      <div class="tree-title-main" :style="{ 'padding-left': value.level * 10 + 10 + 'px', 'background': value.level == 1 ? '#67C23A' : '', 'color': value.level == 1 ? '#ffffff' : ''}" @click="changeToggle($event, value)">
        <span>
          <i :class="[iconPrefix, !value.show || !value.children ? 'icon-class-down' : 'icon-class-up']"></i>
        </span>
        <span>
          <i :class="iconExtra"></i>
        </span>
        <span>
          <label class="inline-block-class ellipsis-text-class" :style="{'width': this.width - 70 - (value.level * 10) + 'px'}">{{value.label}}</label>
        </span>
        <span class="right-main-opr-class" v-if="oprShow">
          <el-popover
            popper-class="custom-popper"
            placement="bottom"
            width="20"
            trigger="hover"
            :tabindex="9999">
            <div class="text-center">
              <el-button type="success" icon="el-icon-edit" size="small" plain circle @click="handleEdit($event, value)"></el-button>
              <el-button type="danger" icon="el-icon-delete" size="small" plain circle @click="handleDelete($event, value)"></el-button>
            </div>
            <i class="el-icon-more" slot="reference"></i>
          </el-popover>
        </span>
      </div>

      <div class="lineHeight" v-if="value.level == 1"></div>

      <el-collapse-transition>
        <ul style="background: #f5f5f5" v-if="value.show">
          <my-block-list-child-tree v-for="itemChild in value.children" :key="itemChild.id" :opr="opr" :sel-value="itemChild" :iconPrefix="iconPrefix" :iconExtra="iconExtra" :width="width" @click="handleChange"></my-block-list-child-tree>
        </ul>
      </el-collapse-transition>
    </li>
    <!--<div class="tree-title-main">
      <span>
        <i :class="iconPrefix"></i>
      </span>
      <span>
        <i :class="iconExtra"></i>
      </span>
      <span>
        <label class="inline-block-class ellipsis-text-class">{{value.label}}</label>
      </span>
      &lt;!&ndash;<span class="right-main-opr-class">
        <i class="el-icon-more"></i>
      </span>&ndash;&gt;
    </div>

    <my-block-list-child-tree v-for="itemChild in value.children" :key="itemChild.id" :sel-value="itemChild" :iconPrefix="iconPrefix" :iconExtra="iconExtra"></my-block-list-child-tree>
-->
  </div>
</template>

<script>
  import {oneOf} from "../../utils/utils";
  export default {
    name: 'myBlockListChildTree',
    props: {
      selValue: {
        default: function () {
          return {};
        },
        type: Object
      },
      size: {
        defalult: 'small',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      width: {
        default: '',
        type: [String, Number]
      },
      className: {
        defalult: '',
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
      opr: {
        default: false,
        type: Boolean
      }
    },
    computed: {
      selModel(){
        this.value = this.selValue;
      },
      setClass(){
        return [
          {
            ['tree-small']: !this.size,
            [`tree-${this.size}`]: !!this.size,
          }
        ]
      },
      setWidth() {
        if (this.width && this.width != ""){
          //this.widthStyle['width'] = this.width - 80 + "px";
        }
      }
    },
    data() {
      return {
        value: '',
        valueGroup: [],
        widthStyle: {},
        widthItemStyle: {},
        widthItemChildStyle: {},
        iconExtraShow: false,
        oprShow: false,
        dataCollege: []
      }
    },
    mounted() {
      this.oprShow = this.opr;
    },
    methods: {
      handleChange(data) {
        this.$emit('click', data);
      },
      handleEdit(event, data) {
        this.$emit('click', data);
      },
      handleDelete(event, data) {
        this.$emit('click', data);
      },
      changeToggle(event, data) {
        data.show = !data.show;
        this.$emit('click', data);
      },
      setPLeft(){
        console.log(this.$el);
      }
    }
  }
</script>

<style scoped>
  .tree-main{
    color: #909399;
    padding: 0px 0px 0px 0px;
  }
  .tree-main-item{
    padding: 0px 20px
  }
  .tree-small{
    padding: 0px 0px
  }
  .tree-medium{
    padding: 0px 0px
  }
  .tree-mini{
    padding: 0px 0px
  }
  .tree-item{
    padding: 0px 20px
  }
  .tree-item-child{
    padding: 0px 30px
  }
  .tree-title-main{
    position: relative;
    padding: 8px 0px;
  }
  .tree-item-main{
    position: relative;
  }
  .tree-item-child{
    position: relative;
  }
  .inline-block-class{
    display: inline-block;
    vertical-align:middle;
    position: relative;
    top: -1px;
  }
  .ellipsis-text-class{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }
  .right-opr-class{
    position: absolute;
    top: 5px;
    right: 10px;
  }
  .right-main-opr-class{
    position: absolute;
    top: 10px;
    right: 10px;
  }
  ul{
    list-style: none;
    margin:0;
    padding:0;
    border:0;
    outline:0;
    box-sizing: border-box;
  }
  ul li {
    margin: 0 0;
    padding: 0;
    white-space: nowrap;
    outline: none;
  }
  .tree-title-main:hover{
    background: rgb(233, 233, 235);
  }
  .icon-class-down{
    transform: rotate(0deg);
    transition: all .2s ease-in-out;
  }
  .icon-class-up{
    transform: rotate(180deg);
    transition: all .2s ease-in-out;
  }
  .lineHeight{
    height: 1px;
    background: #F2F6FC
  }
</style>
