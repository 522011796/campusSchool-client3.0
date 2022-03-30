<template>
  <div class="tree-container">
    <ul :selectModel="selectModel">
      <my-block-list-child-tree v-for="itemChild in dataCollege" :key="itemChild.id" :opr="opr" :sel-value="itemChild" :width="width" :icon-extra="iconExtra" :icon-prefix="iconPrefix" @click="handleChange"  @edit-click="handleEdit"  @delete-click="handleDelete"></my-block-list-child-tree>
    </ul>
  </div>
</template>

<script>
  import MyBlockListChildTree from "./MyBlockListChildTree";
  import {oneOf} from "../../utils/utils";
  import Node from "./treeNode";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  export default {
    name: 'myBlockListTree',
    components: {MyBlockListChildTree},
    props: {
      selValue: {
        default: false,
        type: [Boolean, Array, Number, String]
      },
      data: {
        default: false,
        type: [Boolean, Array, Number, String]
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
      selectModel(){
        this.dataCollege = this.setData(this.data);
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
          this.widthStyle['width'] = this.width - 80 + "px";
          this.widthItemStyle['width'] = this.width - 90 + "px";
          this.widthItemChildStyle['width'] = this.width - 100 + "px";
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
        root: null,
        dataCollege: []
      }
    },
    created() {
      //this.setData();
    },
    methods: {
      handleChange(data) {
        this.$emit('click', data);
      },
      handleEdit(event, data) {
        this.$emit('edit-click', data);
      },
      handleDelete(event, data) {
        this.$emit('delete-click', data);
      },
      setData(data){
        let num = 0;
        return this.setLoopData(data, num);
      },
      setLoopData(data, num){
        for (let i = 0; i < data.length; i++){
          data[i]['parent'] = true;
          data[i]['level'] = num + 1;
          if (data[i].children && data[i].children.length > 0){
            this.setLoopData(data[i].children, num+1);
          }
        }
        return data;
      }
    }
  }
</script>

<style scoped>
  ul{
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
</style>
