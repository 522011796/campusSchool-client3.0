<template>
  <div class="container">
    <el-drawer
      tabindex="0"
      custom-class="drawer-normal-drawer"
      :visible.sync="drawer_"
      :direction="direction"
      :wrapperClosable="true"
      :show-close="false"
      :modal-append-to-body="false"
      :size="size"
      @close="handleColse">

      <div slot="title" class="drawer-normal-title">
        <span tabindex="1"></span>
        <el-row v-if="!header">
          <el-col :span="12">
            <div class="drawer-normal-header">
              <span class="title">{{title}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="drawer-normal-close text-right color-disabeld font-size-14">
              <i class="fa fa-close" @click="handleClose"></i>
            </div>
          </el-col>
        </el-row>
        <div v-else>
          <slot name="title"></slot>
        </div>
      </div>

      <div class="drawer-normal-body" :style="hideFooter == false ? drawHeight : drawHeight2">
        <slot name="content"></slot>
      </div>

      <div class="drawer-normal-full-footer" v-if="hideFooter == false" :hide-footer="hideFooter">
        <slot name="footer"></slot>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import mixins from "../../../utils/mixins";
import {oneOf} from "../../../utils/utils";
import {common} from "../../../utils/api/url";
export default {
  mixins: [mixins],
  props: {
    title: {
      default: '信息',
      type: String
    },
    visible: {
      default: false,
      type: Boolean
    },
    direction: {
      default: 'rtl',
      type: String
    },
    hideFooter: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    },
    size: {
      defalult: '30%',
      type: String
    }
  },
  computed: {
    drawer_:{
      get(){
        return this.visible
      },
      set(v){
        this.$emit("changeDrawer",v)
      }
    }
  },
  data(){
    return {
      drawer: false,
      dialogNormalVisible: false,
      footer: false,
      header: false,
      drawerLoading: false
    }
  },
  mounted() {
    this.dialogNormalVisible = this.visible;
    this.footer = this.$slots.footer !== undefined;
    this.header = this.$slots.title !== undefined;
  },
  created() {

  },
  methods: {
    handleClose(data){
      this.$emit("right-close", data);
    },
    handleOk(data){
      this.$emit("ok", data);
    },
    handleCancel(data){
      this.$emit("cancel", data);
    },
    handleColse(data){
      this.$emit("close");
    }
  }
}
</script>

<style scoped>
.container {

}
</style>
