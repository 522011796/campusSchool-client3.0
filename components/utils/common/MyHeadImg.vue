<template>
  <div>
    <div v-if="headImg.photo_status">
      <div v-if="headImg.photo_status == 0">
        <i class="fa fa-refresh color-grand" style="font-size: 15px"></i>
      </div>
      <div v-if="headImg.photo_status != 0">
        <el-image
          :z-index="9999999"
          class="custom-el-image-pop head-img-radius-class"
          :src="headImg.photourl"
          :preview-src-list="[headImg.photourl]">
        </el-image>
      </div>
    </div>

    <div v-else>
      <el-image
        v-if="headImg.path"
        :z-index="9999999"
        class="custom-el-image-pop head-img-radius-class"
        :src="headImg.path"
        :preview-src-list="[headImg.path]">
      </el-image>
      <el-image
        v-else
        :z-index="9999999"
        class="custom-el-image-pop head-img-radius-class"
        :src="headImg"
        :preview-src-list="[headImg]">
      </el-image>
    </div>



    <!--<div v-if="headImg.photo_status">
      <div v-if="headImg.photo_status == 0">
        <i class="fa fa-refresh color-grand" style="font-size: 15px"></i>
      </div>
      <div v-if="headImg.photo_status != 0">
        <img :src="headImg.photourl" style="width: 30px; height: 30px; border-radius: 30px" @click="handleShowHeadImg(headImg.photourl)"/>
      </div>
    </div>

    <div v-else>
      <img v-if="headImg.path" :src="headImg.path" style="width: 30px; height: 30px; border-radius: 30px" @click="handleShowHeadImg(headImg.path)"/>
      <img v-else :src="headImg" style="width: 30px; height: 30px; border-radius: 30px" @click="handleShowHeadImg(headImg)"/>
    </div>

    &lt;!&ndash;大图&ndash;&gt;
    <el-dialog
      custom-class="custom-head-black-class"
      :visible.sync="headImgCenterDialogVisible"
      width="460px"
      top="10vh"
      :modal="false"
      :show-close="false">
      <div slot="title">
        <div class="text-right">
          <label class="font-size-12 color-grand select-none" @click="handleLoop">{{$t("旋转")}}</label>
        </div>
      </div>
      <div class="head-img-block head-img-block-tag">
        &lt;!&ndash;<img :src="headImgCenterDialogContent" class="head-img-class" :style="headImgStatus">&ndash;&gt;
        <el-image
          style="width: 100px; height: 100px"
          :src="headImgCenterDialogContent"
          :preview-src-list="[headImgCenterDialogContent]">
        </el-image>
      </div>
    </el-dialog>-->
  </div>
</template>

<script>
  export default {
    name: 'myHeadImg',
    props: {
      headImg: {
        default:function () {
          return {};
        },
        type: [Object, String],
      }
    },
    computed: {

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
    height: 460px;
    width: 460px;
  }
  .head-img-class{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .head-img-radius-class{
    width: 30px;
    height: 30px;
    border-radius: 30px
  }
</style>
