<template>
  <div class="moon-container">
    <div class="moon-top-menu">
      <div class="pull-left moon-top-logo">

      </div>
      <div class="pull-right moon-top-right">

      </div>
      <div class="moon-top-middle-menu">
        <el-menu class="el-menu-demo" mode="horizontal" :default-active="activeIndex" @select="handleTopSelect">
          <el-menu-item v-for="(item, index) in topMenuList" :key="index" :index="item.key">{{item.name}}</el-menu-item>
        </el-menu>
      </div>
      <div class="moon-clearfix"></div>
    </div>
    <div class="moon-left-menu" :style="leftHeight">
      <div class="moon-left-collapse">
        <i class="fa fa-navicon color-muted" @click="toggleCollapse"></i>
      </div>
      <el-menu class="el-menu-vertical-demo" :collapse-transition="false" :collapse="isCollapse" :default-active="activeSliderIndex" router @select="handleSelect">
        <template v-if="sliderMenuList.type == 'list'">
          <el-submenu v-for="(item, index) in sliderMenuList.list" :key="index" :index="item.key">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-if="item.list && item.list.length > 0">
              <el-menu-item v-for="(itemClild, indexChild) in item.list" :key="indexChild" :index="itemClild.path" :route="{path: itemClild.path, query: {top: itemClild.top}}">{{itemClild.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>

        <template v-if="sliderMenuList.type == 'only'">
          <el-menu-item v-for="(itemOnly, indexOnly) in sliderMenuList.list" :key="indexOnly" :index="itemOnly.path" :route="{path: itemOnly.path, query: {top: itemOnly.top}}">
            <i class="el-icon-menu"></i>
            <span slot="title">{{itemOnly.name}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="moon-right-menu" :style="rightWidth">
      <div class="moon-right-item-menu">
        <el-tag closable size="medium" color="#ffffff" v-for="n in 6" :key="n" class="margin-right-5">{{n}}</el-tag>
      </div>
      <div class="moon-right-content" :style="rightHeight">
        <Nuxt />
      </div>
    </div>
    <div class="moon-clearfix"></div>
  </div>
</template>

<script>
  import mixins from '../utils/mixins';
  export default {
    name: 'default',
    mixins: [mixins],
    data(){
      return {
        isCollapse: false,
        screenWidth: 0,
        activeIndex: '1',
        activeSliderIndex: '',
        topMenuList: [],
        sliderMenuList: [],
        clickType: '',
        leftHeight: {
          'height': '',
          'width': '200px'
        },
        rightHeight: {
          'height': ''
        },
        rightWidth: {
          'marginLeft': '200px'
        }
      }
    },
    mounted () {
      this.screenWidth = document.body.clientWidth;
      // 监听窗口大小
      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
        })()
      }
    },
    created() {
      this.hh();
      this.init();
      this.toggleCollapse();
      this.activeIndex = this.$route.query.top;
      this.activeSliderIndex = this.$route.path;
      this.getTopMenu();
      this.getSliderMenu(this.$route.query.top);
    },
    methods: {
      hh(){
        if (process.browser) {
          this.leftHeight.height = window.innerHeight - 60 + 'px';
          this.rightHeight.height = window.innerHeight - 60 - 40 + 'px';
        }
      },
      toggleCollapse(){
        this.isCollapse = !this.isCollapse;
        if (!this.isCollapse){
          this.rightWidth.marginLeft = "200px";
          this.leftHeight.width = "200px";
        }else {
          this.rightWidth.marginLeft = "65px";
          this.leftHeight.width = "65px";
        }
      },
      handleTopSelect(key, keyPath) {
        this.clickType = "click";
        this.getSliderMenu(key);
      },
      handleSelect(key, keyPath) {
        this.activeSliderIndex = key;
      },
      getTopMenu(){
        this.$axios.get('/json/topMenu.json').then(res => {
          this.topMenuList = res.data;
        })
      },
      getSliderMenu(key){
        this.$axios.get('/json/sliderMenu.json',{dataType: 'stringfy'}).then(res => {
          for (let i = 0; i < res.data.length; i++){
            if (res.data[i].key == key){
              for (let j = 0; j < res.data[i].list.length; j++){
                if (res.data[i].list[j].list){
                  this.sliderMenuList = {
                    type: 'list',
                    list: res.data[i].list
                  };

                  if (this.clickType == "click"){
                    this.activeSliderIndex = res.data[i].list[j].list[0].path;
                    this.$router.push({
                      path: res.data[i].list[j].list[0].path,
                      query: {
                        top: res.data[i].list[j].list[0].top
                      }
                    });
                  }
                }else{
                  this.sliderMenuList = {
                    type: 'only',
                    list: res.data[i].list
                  };

                  if (this.clickType == "click"){
                    this.activeSliderIndex = res.data[i].list[0].path;
                    this.$router.push({
                      path: res.data[i].list[0].path,
                      query: {
                        top: res.data[i].list[0].top
                      }
                    });
                  }
                }
              }
              break;
            }
          }
        })
      },
      async init() {
        await this.getSessionInfo();
        this.test1();
      },
      test1() {
        console.log(2);
        console.log(this.value, this.testDefault);
      }
    },
    watch: {
      '$route': function (to, from) {//监听路由变化,为了浏览器点击后退和前进也能切换菜单选中
        this.$nextTick(() => {
          this.clickType = "";
          this.activeSliderIndex = this.$route.path;
          this.activeIndex = this.$route.query.top;
          this.getSliderMenu(this.$route.query.top);
        });
      },
      screenWidth(val) {
        this.screenWidth = val;
        if (this.screenWidth-200 < 768){
          this.isCollapse = false;
          this.toggleCollapse();
        }else {
          this.isCollapse = true;
          this.toggleCollapse();
        }
      }
    }
  }
</script>

<style scoped>

</style>
