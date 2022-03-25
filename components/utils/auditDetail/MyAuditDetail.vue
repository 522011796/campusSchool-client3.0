<template>
  <div class="detail-card" :selectModel="selectModel">
    <el-timeline>
      <el-timeline-item color="#0bbd87" placement="top">
        <div slot="dot" class="text-center" style="position: relative; left: -5px;font-size: 12px;height: 18px;width: 18px;border-radius: 18px;background: #67C23A;vertical-align: center">
          <i class="el-icon-s-promotion color-white" style="position: relative; top: 2px"></i>
        </div>

        <credit-detail v-if="type == 'ScoreApply'" :sel-value="value"></credit-detail>
        <repu-detail v-if="type == 'PunishmentApply'" :sel-value="value"></repu-detail>
        <stuleave-detail v-if="type == 'LeaveApply'" :sel-value="value"></stuleave-detail>
        <terleave-detail v-if="type == 'TeacherLeaveApply'" :sel-value="value"></terleave-detail>
        <terdoor-detail v-if="type == 'TeacherDoorOpenApply'" :sel-value="value"></terdoor-detail>
        <studoor-detail v-if="type == 'DoorOpenApply'" :sel-value="value"></studoor-detail>
        <face-detail v-if="type == 'FacePhotoApply'" :sel-value="value"></face-detail>
      </el-timeline-item>

      <div class="detail-group-card">
        <el-timeline-item v-for="(item, index) in value.handleList" :key="item.id" placement="top">
          <span slot="dot" style="position: relative; left: -5px;font-size: 12px">
            <el-badge :value="item.orderIndex" class="item" type="success"></el-badge>
          </span>
          <div class="text-center" style="position: absolute; left: 8px; top: 25px;">
            <div class="tag-min-div color-muted" v-if="item.andor == 'or'">{{$t("或签")}}</div>
            <div class="tag-min-div color-muted" size="mini" v-if="item.andor == 'and'">{{$t("会签")}}</div>
            <i class="el-icon-bottom color-disabeld"></i>
          </div>
          <el-card :body-style="{'padding': '12px'}" v-for="(itemChild, index) in item.handleUsers" :key="itemChild.id">
            <div :class="auditColor(itemChild.status)">
              <span>{{item.handleTypeName}}</span>
              <el-divider direction="vertical"></el-divider>
              <span>{{itemChild.handleName}}</span>
              <el-divider direction="vertical" v-if="itemChild.status != 5"></el-divider>
              <span v-if="itemChild.status != 5">{{auditStatus(itemChild.status)}}</span>
              <el-divider direction="vertical" v-if="itemChild.status != 5"></el-divider>
              <span v-if="itemChild.time && itemChild.status != 5">{{$moment(itemChild.time).format("YYYY-MM-DD HH:mm:ss")}}</span>
              <span v-else></span>
            </div>
            <div v-if="itemChild.des3 && itemChild.des3 != ''" class="color-warning margin-top-10">
              <el-row class="margin-top-10">
                <el-col :span="4">
                  <span>{{$t("审批意见")}}:</span>
                </el-col>
                <el-col :span="20">
                  <el-tooltip class="item" effect="dark" :content="itemChild.des3" placement="top-start" :tabindex="9999">
                    <span>{{itemChild.des3}}</span>
                  </el-tooltip>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-timeline-item>
      </div>
    </el-timeline>
  </div>
</template>

<script>
  import CreditDetail from "./CreditDetail";
  import RepuDetail from "./RepuDetail";
  import StuleaveDetail from "./StuleaveDetail";
  import TerleaveDetail from "./TerleaveDetail";
  import FaceDetail from "./FaceDetail";
  import TerdoorDetail from "./TerdoorDetail";
  import StudoorDetail from "./StudoorDetail";
  import {oneOf, auditStatusText, auditStatusColor} from '../../../utils/utils';
  export default {
    name: 'MyAuditDetail',
    components: {CreditDetail, RepuDetail, StuleaveDetail, TerleaveDetail,FaceDetail,TerdoorDetail,StudoorDetail},
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
      },
      type: {
        default: '',
        type: String,
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
        detailTitle: {},
        //widthStyle: null
      }
    },
    methods: {
      auditStatus(val){
        return auditStatusText(val);
      },
      auditColor(val){
        return auditStatusColor(val);
      }
    }
  }
</script>

<style scoped>

</style>
