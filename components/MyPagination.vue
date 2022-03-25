<template>
  <div>
    <el-pagination
      ref="paginationRef"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :layout="layout"
      :total="total"
      :background="background"
      :small="small">

      <label v-if="showJump == true" class="pagination-jump" @click="handleJumpSizeChange">{{$t("跳转")}}</label>
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'myPagination',
    props: {
      pageSizes: {
        default: function () {
          return [10, 20, 30, 50, 100];
        },
        type: Array
      },
      pageSize: {
        default: 20,
        type: Number
      },
      total: {
        default: 0,
        type: Number
      },
      currentPage: {
        default: 1,
        type: Number
      },
      background: {
        default: true,
        type: Boolean
      },
      small: {
        default: false,
        type: Boolean
      },
      showJump: {
        default: true,
        type: Boolean
      },
      layout: {
        default: 'total, sizes, prev, pager, next, jumper, slot',
        type: String
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handleSizeChange(data) {
        this.$emit('sizeChange', data);
      },
      handleCurrentChange(data) {
        this.$emit('currentPage', data);
      },
      handleJumpSizeChange(data){
        this.$emit('jumpChange', this.currentPage);
      }
    }
  }
</script>

<style scoped>
  .pagination-jump{
    display: inline-block;
    font-size: 13px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    box-sizing: border-box;
    font-weight: normal;
    position: relative;
    top: 1px;
    padding: 0px 0px 0px 8px;
    user-select: none;
    color: #606266;
  }
</style>
