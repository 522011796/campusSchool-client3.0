<template>
  <div>
    <el-card :body-style="{'padding': '10px'}" :selectModel="selectModel">
      <div slot="header" style="padding: 5px !important;">
        <div class="color-success">
          <el-row>
            <el-col :span="24">
              <span>{{$t("申请人")}}:</span>
              <span>{{value.apply_user_name}}</span>
              <span class="font-size-12 color-muted">({{$moment(value.apply_time).format("YYYY-MM-DD HH:mm:ss")}})</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="color-muted">
        <el-row>
          <el-col :span="8" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("班级")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-70+'px'}" :title="value.class_name">{{value.class_name}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("专业")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-70+'px'}" :title="value.major_name">{{value.major_name}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("院系")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-70+'px'}" :title="value.college_name">{{value.college_name}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="line-height"></div>
      <div class="color-muted">
        <el-row>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("类型")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-40+'px'}" :title="value.str3">{{value.str3}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld" style="position: relative; top: 0px">{{$t("时长")}}:</span>
                <span class="moon-content-text-ellipsis-class">{{value.double1}}{{$t("小时")}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="margin-top-10">
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("开始时间")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px','position': 'relative','top': '-2px'}" :title='$moment(value.date1).format("YYYY-MM-DD HH:mm:ss")'>{{$moment(value.date1).format("YYYY-MM-DD HH:mm:ss")}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("结束时间")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px','position': 'relative','top': '-2px'}" :title='$moment(value.date2).format("YYYY-MM-DD HH:mm:ss")'>{{$moment(value.date2).format("YYYY-MM-DD HH:mm:ss")}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="margin-top-10">
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("申请时间")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px','position': 'relative','top': '-2px'}" :title='$moment(value.apply_time).format("YYYY-MM-DD HH:mm:ss")'>{{$moment(value.apply_time).format("YYYY-MM-DD HH:mm:ss")}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="color-muted margin-top-5">
        <el-row>
          <el-col :span="12" class="ellipsis-tag" v-if="value.apply_file && value.apply_file != ''">
            <div>
              <div>
                <span class="title-class color-disabeld" style="position: relative; top: -15px;">{{$t("附件")}}:</span>
                <span>
                  <!--<el-image style="width: 20px; height: 20px" :src="value.apply_file"></el-image>-->
                  <my-head-img :head-img="value.apply_file" style="display: inline-block"></my-head-img>
                </span>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="line-height"></div>
        <el-row class="margin-top-10" v-if="value.des && value.des != ''">
          <el-col :span="24" class="ellipsis-long-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("说明")}}:</span>
                <el-tooltip class="item" effect="dark" :content="value.des" placement="top">
                  <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','max-width': widthDesStyle - 60 +'px'}">
                    {{value.des}}
                  </span>
                </el-tooltip>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  import {oneOf} from '../../../utils/utils';
  export default {
    name: 'StudoorDetail',
    props: {
      selValue: {
        default: function () {
          return {};
        },
        type: Object
      },
      options: {
        default: function () {
          return [];
        },
        type: Array
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
        widthStyle: null,
        widthDesStyle: null
      }
    },
    mounted() {
      this.setWidth();
    },
    created() {

    },
    methods: {
      setWidth(){
        this.$nextTick(function () {
          if (process.client){
            this.widthStyle = document.querySelector(".ellipsis-tag") ? document.querySelector(".ellipsis-tag").clientWidth : 0;
            this.widthDesStyle = document.querySelector(".ellipsis-long-tag") ? document.querySelector(".ellipsis-long-tag").clientWidth : 0;
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
