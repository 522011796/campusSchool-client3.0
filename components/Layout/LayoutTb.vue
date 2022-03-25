<template>
  <div>
    <div class="color-muted font-size-12 padding-top-5 animated fadeInUp">
      <span class="layout-menu-title" v-if="showTag">
        <slot name="tag"></slot>
      </span>
    </div>

    <div class="layout-top-tab margin-top-5" v-if="showTab">
      <slot name="tab"></slot>
    </div>

    <div class="layout-bottom-tab margin-top-10">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutTb',
  data(){
    return {
      showTab: true,
      showTag: false
    }
  },
  mounted() {
    this.showTab = this.$slots.tab !== undefined;
  },
  created() {

  },
  methods: {

  }
}
</script>

<style>

</style>
