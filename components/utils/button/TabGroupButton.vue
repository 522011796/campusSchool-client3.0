<template>
  <div class="btn-group-block select-none" :class="setClass" :style="setBgColor">
    <div class="btn-group-item-active" :style="[transformBtnGroup,setActiveColor]"></div>
    <div class="btn-group-item">
      <div class="btn-group-item-default pull-left" v-for="(item, index) in options" :class="isActive == index ? 'is-active' : ''" :key="index" @click="handelChange($event , item, index)">
        {{item.label}}<template v-if="item.extra || item.extra == 0"> | {{item.extra}}</template>
      </div>
      <div class="moon-clearfix"></div>
    </div>
  </div>
</template>

<script>
  import {oneOf} from '../../../utils/utils';
  export default {
    name: 'auditStatusButton',
    props: {
      options: {
        default: function(){
          return []
        },
        type : Array
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      bgColor: {
        default: '#409EFF',
        type: String
      },
      activeColor: {
        default: '#FFFFFF',
        type: String
      }
    },
    computed: {
      setClass(){
        return [
          {
            ['tab-group-button-medium']: !this.size,
            [`tab-group-button-${this.size}`]: !!this.size,
          }
        ]
      },
      setBgColor(){
        this.bgGroupColor.background = this.bgColor;
        return this.bgGroupColor;
      },
      setActiveColor(){
        this.activeGroupColor.background = this.activeColor;
        return this.activeGroupColor;
      }
    },
    data() {
      return {
        selVal: 1,
        selIndex: 0,
        widthAll: 0,
        isActive: '',
        selStatus: -1,
        transformBtnGroup: {
          transform: 'translateX(0px)',
          transition: '0.5s',
          width: '',
        },
        activeGroupColor:{
          background: "#FFFFFF"
        },
        bgGroupColor:{
          background: "#409EFF"
        }
      }
    },
    mounted() {
      this.initTabGroupDefaultSel();
    },
    created() {
      //this.initConfig();
    },
    methods: {
      initTabGroupDefaultSel(){
        let widthAll = 0;
        let translateX = widthAll + 8 + "px";
        /*this.transformBtnGroup.width = groupItem[0].clientWidth + "px";
        this.transformBtnGroup.transform = 'translateX(' + translateX + ')';*/
        setTimeout(() => {
          let groupItem = document.querySelectorAll(".btn-group-item-default");
          this.transformBtnGroup.width = (groupItem && groupItem.length > 0) ? groupItem[0].clientWidth + "px" : '0px';
          this.transformBtnGroup.transform = 'translateX(' + translateX + ')';
        },800);
      },
      handelChange(data, item, index) {
        let padding = 10;
        let widthAll = 0;
        this.selVal = item;
        this.selIndex = index;
        let groupItem = document.querySelectorAll(".btn-group-item-default");
        for (let i = 0; i < groupItem.length; i++) {
          if (i < index) {
            widthAll += groupItem[i].clientWidth;
          }
          if (index == i) {
            this.transformBtnGroup.width = groupItem[i].clientWidth + "px";
            break;
          }
        }
        let translateX = widthAll + 8 + "px";
        this.transformBtnGroup.transform = 'translateX(' + translateX + ')';
        this.isActive = index;

        this.$emit('click', item);
      }
    },
    watch: {
      options: function (newQuestion, oldQuestion) {
        setTimeout(() => {
          let widthAll = 0;
          let groupItem = document.querySelectorAll(".btn-group-item-default");
          for (let i = 0; i < groupItem.length; i++) {
            if (i < this.selIndex) {
              widthAll += groupItem[i].clientWidth;
            }
            if (this.selIndex == i) {
              this.transformBtnGroup.width = groupItem[i].clientWidth + "px";
              break;
            }
          }
          let translateX = widthAll + 8 + "px";
          this.transformBtnGroup.transform = 'translateX(' + translateX + ')';
          this.isActive = this.selIndex;
        },800);
      }
    }
  }
</script>

<style scoped>
  .btn-group-block{
    padding: 10px 8px;
    position:relative;
    border-radius: 5px;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    transition: transform .3s;
    z-index: 2;
    line-height: 15px;
  }
  .btn-group-item{
    position: relative;
  }
  .btn-group-item-default{
    padding: 0px 8px;
    border-radius: 5px;
    display: inline-block;
    cursor: default;
    color: #FFFFFF;
  }
  /*.btn-group-item-active{
    position: absolute;
    top: 5px;
    left: 0px;
    height: 30px;
    transform: translateX(0px);
    border-radius: 5px;
  }*/
  .is-active{
    color: #595959;
  }
  .tab-group-button-medium{
    padding: 12px 8px;
    font-size: 12px;
  }
  .tab-group-button-small{
    padding: 9px 8px;
    font-size: 12px;
  }
  .tab-group-button-mini{
    padding: 7px 8px;
    font-size: 12px;
  }
  .tab-group-button-large{
    padding: 14px 8px;
  }
  .tab-group-button-medium .btn-group-item-active{
    position: absolute;
    top: 5px;
    left: 0px;
    height: 24px;
    transform: translateX(0px);
    border-radius: 5px;
  }
  .tab-group-button-small .btn-group-item-active{
    position: absolute;
    top: 5px;
    left: 0px;
    height: 22px;
    transform: translateX(0px);
    border-radius: 5px;
  }
  .tab-group-button-mini .btn-group-item-active{
    position: absolute;
    top: 5px;
    left: 0px;
    height: 18px;
    transform: translateX(0px);
    border-radius: 5px;
  }
  .tab-group-button-large .btn-group-item-active{
    position: absolute;
    top: 8px;
    left: 0px;
    height: 28px;
    transform: translateX(0px);
    border-radius: 5px;
  }
</style>
