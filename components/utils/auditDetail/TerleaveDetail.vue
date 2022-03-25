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
          <el-row class="margin-top-5">
            <el-col :span="24">
              <span class="color-muted font-size-12">{{$t("部门")}}:</span>
              <span class="color-muted font-size-12">{{value.depart_name}}</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="color-muted">
        <el-row>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("类型")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-40+'px'}">{{value.str1}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div v-if="value.apply_type_sub_code == 'TeacherLeaveApplyClass'">
                <span class="title-class color-disabeld" style="position: relative; top: 0px">{{$t("时长")}}:</span>
                <span class="moon-content-text-ellipsis-class">{{value.num1}}{{$t("节课")}}</span>
                <el-tooltip class="item" effect="dark" placement="top-start">
                  <div slot="content">
                    <div v-if="value.str3" v-for="(item, index) in JSON.parse(value.str3)">
                      <span>{{$t("第")}}{{item.section}}{{$t("节课")}}</span>
                      :
                      <span>{{item.courseName}}</span>
                    </div>
                  </div>
                  <i class="el-icon-info"></i>
                </el-tooltip>
              </div>
              <div v-if="value.apply_type_sub_code == 'TeacherLeaveApplyTime'">
                <span class="title-class color-disabeld" style="position: relative; top: 0px">{{$t("时长")}}:</span>
                <span class="moon-content-text-ellipsis-class">{{value.double1}}天</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row v-if="value.apply_type_code == 'TeacherBusiTripApply' || value.apply_type_sub_code == 'TeacherLeaveApplyTime'" class="margin-top-10">
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("开始时间")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px','position': 'relative','top': '-2px'}">{{$moment(value.date1).format("YYYY-MM-DD HH:mm:ss")}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("结束时间")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px','position': 'relative','top': '-2px'}">{{$moment(value.date2).format("YYYY-MM-DD HH:mm:ss")}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row v-if="value.apply_type_code == 'TeacherAmendSignApply'" class="margin-top-10">
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("上班时间")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px','position': 'relative','top': '-2px'}">{{$moment(value.date1).format("YYYY-MM-DD HH:mm:ss")}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("补卡时间")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px','position': 'relative','top': '-2px'}">{{$moment(value.date2).format("YYYY-MM-DD HH:mm:ss")}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row v-if="value.apply_type_code == 'TeacherLeaveApply'" class="margin-top-10">
          <el-col :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("申请时间")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px','position': 'relative','top': '-2px'}">{{$moment(value.apply_time).format("YYYY-MM-DD HH:mm:ss")}}</span>
              </div>
            </div>
          </el-col>
          <el-col v-if="value.apply_type_sub_code == 'TeacherLeaveApplyClass'" :span="12" class="ellipsis-tag">
            <div>
              <div>
                <span class="title-class color-disabeld">{{$t("请假时间")}}:</span>
                <span class="moon-content-text-ellipsis-class" :style="{'display': 'inline-block','width': widthStyle-90+'px','position': 'relative','top': '-2px'}">{{$moment(value.date2).format("YYYY-MM-DD HH:mm:ss")}}</span>
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
    name: 'TerleaveDetail',
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
