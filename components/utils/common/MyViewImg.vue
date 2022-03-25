<template>
  <div>
    <!--大图-->
    <el-dialog
      custom-class="custom-head-black-class"
      :visible.sync="openCardDialog"
      width="1000px"
      top="10vh"
      :modal="false"
      :show-close="false">
      <div class="head-img-block head-img-block-tag">
        <img :src="headImg" class="head-img-class">
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'myViewImg',
    props: {
      visible: {
        type: Boolean,
        default: true
      },
      headImg: {
        default: '',
        type: String,
      }
    },
    computed: {
      openCardDialog: {
        get() {
          return this.visible;
        },
        set(val) {
          this.$emit('update:visible', val) // openCardDialog改变的时候通知父组件
        }
      }
    },
    data() {
      return {
        value: '',
        degNum: 0,
        headImgCenterDialogVisible: false,
        headImgCenterDialogContent: '',
        headImgStatus: {
          transform: 'rotate(0deg)'
        }
      }
    },
    methods: {
      handleShowHeadImg(data){
        this.degNum = 0;
        this.headImgStatus.transform = "rotate(0deg)";
        this.headImgCenterDialogContent = data;
        this.headImgCenterDialogVisible = true
      },
      handleLoop(){
        if (this.degNum > 4){
          this.degNum = 0;
        }else {
          this.degNum++;
        }
        let deg = 90 * this.degNum;
        this.headImgStatus.transform = "rotate("+deg+"deg)";
      }
    }
  }
</script>

<style scoped>
  .head-img-block{
    height: 600px;
    width: 1000px;
  }
  .head-img-class{
    height: 100%;
    width: 100%;
  }
</style>
