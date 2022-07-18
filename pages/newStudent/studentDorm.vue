<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-col span="4">
        <div class="text-left padding-lr-10 color-white">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
            </span>
        </div>
      </van-col>
      <van-col span="16">
        <div class="text-center color-white font-size-16 font-bold">
          <span>{{$t('线上选寝')}}</span>
        </div>
      </van-col>
      <van-col span="4">
        <van-button size="small" type="warning" plain native-type="button" @click="billManage($event)">{{$t("订单")}}</van-button>
      </van-col>
    </div>
    <div class="">
      <div v-if="dormSelType == 0">
        <van-dropdown-menu>
          <van-dropdown-item :title="searchRoomTypeLabel" v-model="searchRoomType" :options="filterRoomType" @change="handleChangeSearchType"/>
          <van-dropdown-item :title="searchRoomArrowLabel" v-model="searchRoomArrow" :options="filterRoomArrow" @change="handleChangeSearchArrow"/>
          <van-dropdown-item :title="searchRoomPriceLabel" v-model="searchRoomPrice" :options="filterRoomPrice" @change="handleChangeSearchPrice"/>
          <van-dropdown-item :title="searchRoomStatusLabel" v-model="searchRoomStatus" :options="filterRoomStatus" @change="handleChangeSearchStatus"/>
        </van-dropdown-menu>
      </div>

      <div class="pull-left info-block-left">
        <template v-if="dormSelType == 0">
          <div class="info-block-header text-center" @click="selMenuAll">
            <span>{{$t("全部宿舍")}}</span>
          </div>
          <div :style="{height: divHeight10.height1-90 +'px', overflowY: 'auto'}">
            <el-menu
              :default-active="defaultMenuActive"
              background-color="#fefefe"
              text-color="#909399"
              active-text-color="#ffd04b"
              class="el-menu-vertical-demo custon-nav-menu">
              <template v-for="(item, index) in dormTreeList">
                <el-submenu v-if="item.floorList.length > 0" :index="index+''">
                  <div style="width: 100%" slot="title" @click="selMenu($event, item, index)">
                    <span>{{ item.building_name }}</span>
                  </div>
                  <el-menu-item-group v-if="item.floorList.length > 0">
                    <el-menu-item v-for="(itemChild, indexChild) in item.floorList" :key="indexChild" :index="index+'-'+indexChild" @click="selMenu($event, itemChild, index+'-'+indexChild)">{{ itemChild.name }}</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item v-else :index="index+''" @click="selMenu($event, item, index)">{{ item.building_name }}</el-menu-item>
              </template>
            </el-menu>
          </div>
        </template>
        <template v-if="dormSelType == 1">
          <div class="info-block-header text-center" @click="selMenuAll">
            <span>{{$t("全部套餐")}}</span>
          </div>
          <div :style="{height: divHeight10.height1-50 +'px', overflowY: 'auto'}">
            <el-menu
              :default-active="defaultMenuActive"
              background-color="#fefefe"
              text-color="#909399"
              active-text-color="#ffd04b"
              class="el-menu-vertical-demo custon-nav-menu">
              <template v-for="(item, index) in dormPackageTreeList">
                <el-menu-item :index="index+''" @click="selMenu($event, item, index)" style="text-align: center">{{ item.label }}</el-menu-item>
              </template>
            </el-menu>
          </div>
        </template>
      </div>
      <div class="info-block-right">
        <div :style="{height: divHeight10.height1-90+'px', overflowY: 'auto'}" class="padding-lr-10 padding-tb-10">
          <div>
            <el-row>
              <el-col :span="8" v-for="(item, index) in dormList" :key="index" class="text-center margin-bottom-20 room-item-block" @click.native="selRoomItem($event, item)">
                <div>
                  <img src="~static/img/dorm_icon.png" style="height: 40px;width: 40px">
                </div>
                <div v-if="dormSelType == 0" class="margin-top-5 font-size-12 moon-content-text-ellipsis-class">
                  <el-tooltip class="item" effect="dark" :content="item.dormitory_no" placement="bottom">
                    <span>{{ item.dormitory_no }}</span>
                  </el-tooltip>
                </div>
                <div v-if="dormSelType == 1" class="margin-top-5 font-size-12 moon-content-text-ellipsis-class">
                  <el-tooltip class="item" effect="dark" :content="item.pacName" placement="bottom">
                    <div class="text-center">
                      <div>
                        <span>{{ item.pacName }}</span>
                      </div>
                      <div class="color-success">
                        (<span class="font-size-12 color-danger">{{ item.pacNum-item.pacNumChose }}</span>/<span class="font-size-12 color-success">{{ item.pacNum }}</span>)
                      </div>
                    </div>
                  </el-tooltip>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <van-popup round ref="dormContainer" v-model="showDorm" @opened="openedDormDialog" @close="closeDialog" position="bottom":style="{ height: '70%' }">
      <div>
        <div class="dialog-header-title-block text-center border-bottom-1">
          <van-row>
            <van-col :span="4">
              <van-button plain type="default" size="small" @click="cancelDormDialog" style="position: relative; top:-5px;">{{$t("取消")}}</van-button>
            </van-col>
            <van-col :span="16">
              <span class="font-size-14 font-bold">{{dormSelTitle}}</span>
            </van-col>
            <van-col :span="4">
              <van-button plain type="primary" size="small" @click="okDormDialog" style="position: relative; top:-5px;">{{$t("确认")}}</van-button>
            </van-col>
          </van-row>
        </div>
        <div :style="dormHeight">
          <div>
<!--            <el-carousel height="200px">-->
<!--              <el-carousel-item v-for="(item, index) in formDorm.imgs" :key="index">-->
<!--                <img :src="item" style="height: 100%;width: 100%">-->
<!--              </el-carousel-item>-->
<!--            </el-carousel>-->
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" style="height: 200px">
              <van-swipe-item v-for="(item, index) in formDorm.imgs" :key="index">
                <img :src="item" style="height: 100%;width: 100%">
              </van-swipe-item>
            </van-swipe>
          </div>
          <template v-if="dormSelType == 0">
            <div class="padding-lr-10 padding-tb-10">
              <div class="">
                <el-row>
                  <el-col :span="12">
                    <span class="tag-class"></span>
                    <span class="tag-text-class font-bold">{{roomTypeText}}</span>
                  </el-col>
                  <el-col :span="12" class="text-right">
                    <span class="tag-class"></span>
                    <span class="tag-text-class font-size-12">{{$t("已选")}}</span>

                    <span class="tag-danger-class margin-left-10"></span>
                    <span class="tag-text-class font-size-12">{{$t("未选")}}</span>
                  </el-col>
                </el-row>
              </div>
              <div class="padding-lr-10 padding-tb-10">
                <el-row :gutter="8">
                  <el-col :span="6" v-for="(item, index) in formDorm.beds" :key="index" class="margin-bottom-10" @click.native="!item.studentId ? selBedNo($event, item, index) : ''">
                    <div class="bed-item-block" :class="[activeBedNo === index ? 'bed-item-block-active' : '',item.studentId ? 'bed-item-block-selected' : '']">
                      {{item.bedNo}}{{$t("号床")}}
                    </div>
                  </el-col>
                </el-row>
              </div>

              <div class="padding-lr-10 padding-tb-10">
                <div>
                  <span class="tag-class"></span>
                  <span class="tag-text-class font-bold">{{$t("简介")}}</span>
                </div>
                <div class="margin-top-10 font-size-12">
                  <el-row>
                    <el-col :span="12">
                      <span>{{$t("容纳人数")}}:</span>
                      <span>{{formDorm.peopleNum}}</span>
                    </el-col>
                    <el-col :span="12">
                      <span>{{$t("价格")}}:</span>
                      <span>{{formDorm.roomPrice}}/{{$t("年")}}</span>
                    </el-col>
                  </el-row>
                  <el-row class="margin-top-5">
                    <el-col :span="12">
                      <span>{{$t("面积")}}:</span>
                      <span>{{formDorm.roomArea}}</span>
                    </el-col>
                    <el-col :span="12">
                      <span>{{$t("朝向")}}:</span>
                      <span>{{formDorm.roomArrow}}</span>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </template>
          <template v-if="dormSelType == 1">
            <div class="padding-lr-10 padding-tb-10">
              <div>
                <el-row>
                  <el-col :span="12">
                    <span class="tag-class"></span>
                    <span class="tag-text-class font-bold">{{$t("价格")}}</span>
                  </el-col>
                  <el-col :span="12" class="text-right">
                    <span class="color-success font-bold">{{formDorm.roomPrice}}元/年</span>
                  </el-col>
                </el-row>
              </div>
            </div>
          </template>
        </div>
      </div>
    </van-popup>

    <van-popup round ref="dormContainer" v-model="showBill" @opened="openedDormDialog" @close="closeDialog" position="bottom" :style="{ height: '70%' }">
      <div class="dialog-header-title-block text-center border-bottom-1">
        <van-row>
          <van-col :span="24">
            <span class="font-size-14 font-bold">{{$t("我的订单")}}</span>
          </van-col>
        </van-row>
      </div>
      <div class="padding-lr-10 padding-tb-10" :style="billHeight">
        <el-card :body-style="{padding: '10px',background: '#EBEEF5'}" class="margin-bottom-20" v-for="(item, index) in billList" :key="index">
          <div class="font-size-12">
            <el-row class="font-size-14">
              <el-col :span="12">
                <span class="fa fa-history"></span>
                <span>{{ $moment(item.add_time).format("YYYY-MM-DD HH:mm:ss") }}</span>
              </el-col>
              <el-col v-if="dormSelType == 0" :span="12" class="text-right">
                <label class="color-warning" v-if="item.status == 1">{{$t("未支付")}}</label>
                <label class="color-warning" v-if="item.status == 2">{{$t("已支付")}}</label>
                <label class="color-warning" v-if="item.status == 3">{{$t("支付失败")}}</label>
                <label class="color-warning" v-if="item.status == 4">{{$t("支付中")}}</label>
                <label class="color-warning" v-if="item.status == 7">{{$t("订单关闭")}}</label>
              </el-col>

              <el-col v-if="dormSelType == 1" :span="12" class="text-right">
                <label class="color-warning" v-if="item.order_status == true">{{$t("成功")}}</label>
                <label class="color-warning" v-if="item.order_status == false">{{$t("撤销")}}</label>
              </el-col>
            </el-row>
            <el-row class="margin-top-5">
              <el-col :span="12">
                <span>{{$t("姓名")}}</span>
                <span>{{ item.real_name }}</span>
              </el-col>
              <el-col v-if="dormSelType == 0" :span="12" class="text-right">
                <label class="color-warning font-size-16">¥{{item.room_price}}</label>
              </el-col>
              <el-col v-if="dormSelType == 1" :span="12" class="text-right">
                <label class="color-warning font-size-16">¥{{item.pac_price}}</label>
              </el-col>
            </el-row>
            <el-row class="margin-top-5">
              <el-col :span="24">
                <template v-if="dormSelType == 0">
                  <span>{{$t("学号/录取号")}}</span>
                  <span class="color-success">{{ item.student_id }} / {{ item.enroll_no }}</span>
                </template>
                <template v-if="dormSelType == 1">
                  <span>{{$t("学号")}}</span>
                  <span class="color-success">{{ item.student_id }}</span>
                </template>
              </el-col>
            </el-row>
            <el-row class="margin-top-5">
              <el-col v-if="dormSelType == 0" :span="24">
                <span>{{$t("已选寝室")}}</span>
                <span class="color-success">{{ item.build_name }}-{{ item.dormitory_no }}-{{item.bed_no}}{{$t("号床")}}</span>
              </el-col>
              <el-col v-if="dormSelType == 1" :span="24">
                <span>{{$t("已选套餐")}}</span>
                <span class="color-success">{{ item.pac_name }}</span>
              </el-col>
            </el-row>
            <el-row class="margin-top-5">
              <el-col :span="24" class="text-right">
                <el-button size="mini" type="success"  v-if="dormSelType == 0 && (!detailData.status || detailData.check_cancel == true) && item.status == 1" @click="setBillStatus($event, item)">{{$t("立即撤销")}}</el-button>
                <el-button size="mini" type="success"  v-if="dormSelType == 1 && (!detailData.status || detailData.check_cancel == true) && item.order_status == 1" @click="setBillStatus($event, item)">{{$t("立即撤销")}}</el-button>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  import mixinsBridge from "~/utils/mixinsBridge";
  import MySex from "~/components/MySex";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import {Toast} from "vant";
  export default {
    name: 'studentInfo',
    components: {MySex},
    layout: 'defaultAppScreen',
    mixins: [mixins,mixinsBridge],
    data(){
      return {
        dormSelType: '',
        ruleId: '',
        roomDetailData: {},
        activeBedNo: '',
        defaultMenuActive: '',
        dormList: [],
        dormTreeList: [],
        filterRoomType: [],
        filterRoomArrow: [],
        filterRoomPrice: [],
        dormPackageTreeList: [],
        filterRoomStatus: [{text: this.$t("全部"),label: this.$t("全部"),value: ''},{text: this.$t("已满"),label: this.$t("已满"),value: 1},{text: this.$t("未满"),label: this.$t("未满"),value: 0}],
        searchRoomType: '',
        searchRoomTypeLabel: this.$t("房型"),
        searchRoomArrow: '',
        searchRoomArrowLabel: this.$t("朝向"),
        searchRoomPrice: '',
        searchRoomPriceLabel: this.$t("价格"),
        searchRoomStatus: '',
        searchRoomStatusLabel: this.$t("状态"),
        roomTypeText: 'xxxxxx',
        commSearchBuild: '',
        commSearchFloor: '',
        commSearchRoom: '',
        commSearchPackage: '',
        showDorm: false,
        showBill: false,
        billList: [],
        detailData: {},
        dormSelTitle: this.$t("床位选择"),
        dormHeight: {
          height: '0px',
          overflowY: 'auto'
        },
        billHeight: {
          height: '0px',
          overflowY: 'auto'
        },
        formDorm: {
          id: '',
          beds: [],
          imgs: [],
          roomArrow: '',
          roomPrice: 0,
          roomArea: 0,
          peopleNum: 0,
          bedId: ''
        }
      }
    },
    mounted() {

    },
    created() {
      this.initAppServer();

    },
    methods: {
      layoutInit(){

      },
      async initAppServer(){
        await this.getSessionInfo();

        this.dormSelType = this.$route.query.dormSelType;
        this.ruleId = this.$route.query.ruleId;
        this.initDormTree();
        this.initDormInfo();

        if (this.dormSelType == 1){
          this.initPackageTree();
        }
      },
      initDormTree(){
        let params = {

        };
        this.$axios.get(common.server_enroll_app_dorm_list, {params: params}).then(res => {
          if (res.data.data){
            console.log(res.data.data);
            let arrow = [{text: this.$t("全部"),label: this.$t("全部"),value: ''},];
            let price = [{text: this.$t("全部"),label: this.$t("全部"),value: ''},];
            let num = [{text: this.$t("全部"),label: this.$t("全部"),value: ''},];
            this.dormTreeList = res.data.data.buildingTree;
            for (let i = 0;i < res.data.data.roomOrientList.length; i++){
              if (res.data.data.roomOrientList[i] != ''){
                arrow.push({
                  label: res.data.data.roomOrientList[i],
                  text: res.data.data.roomOrientList[i],
                  value: res.data.data.roomOrientList[i]
                });
              }
            }

            for (let i = 0;i < res.data.data.peopleNumList.length; i++){
              num.push({
                label: res.data.data.peopleNumList[i] + this.$t("人间"),
                text: res.data.data.peopleNumList[i] + this.$t("人间"),
                value: res.data.data.peopleNumList[i]
              });
            }

            for (let i = 0;i < res.data.data.roomPriceList.length; i++){
              price.push({
                label: res.data.data.roomPriceList[i],
                text: res.data.data.roomPriceList[i],
                value: res.data.data.roomPriceList[i]
              });
            }
            this.filterRoomArrow = arrow;
            this.filterRoomPrice = price;
            this.filterRoomType = num;
          }
        });
      },
      initDormInfo(){
        let params = {};
        let url = '';
        if (this.dormSelType == 0){
          params = {
            page: 1,
            num: 9999,
            userId: this.loginUserId,
            buildId: this.commSearchBuild,
            floorNum: this.commSearchFloor,
            peopleNum: this.searchRoomType,
            roomOrient: this.searchRoomArrow,
            roomPrice: this.searchRoomPrice,
            choseStatus: this.searchRoomStatus
          };
        }else if (this.dormSelType == 1){
          params = {
            page: 1,
            num: 9999,
            ruleId: this.$route.query.ruleId,
            pacRegion: this.commSearchPackage
          };
        }
        if (this.dormSelType == 0){
          url = common.server_enroll_app_dorm_room;
          this.$axios.get(url, {params: params}).then(res => {
            if (res.data.data){
              this.dormList = res.data.data.list;
            }
          });
        }else if (this.dormSelType == 1){
          url = common.enroll_rule_package_list;
          this.$axios.get(url, {params: params}).then(res => {
            if (res.data.data){
              this.dormList = res.data.data;
            }
          });
        }
      },
      initBill(){
        let params = {
          userId: this.loginUserId,
          page: 1,
          num: 9999,
        };
        let url = '';
        if (this.dormSelType == 0){
          url = common.server_enroll_app_dorm_bill_page;
        }else if (this.dormSelType == 1){
          url = common.enroll_rule_package_order_list;
        }
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            this.billList = res.data.data.list;
          }
        });
      },
      initPackageTree(){
        let dormPackageTreeList = [];
        let pacRegions = JSON.parse(this.$route.query.pacRegions);
        for (let i = 0; i < pacRegions.length; i++){
          dormPackageTreeList.push({
            label: pacRegions[i].pac_region,
            value: pacRegions[i].pac_region,
            text: pacRegions[i].pac_region
          });
        }
        this.dormPackageTreeList = dormPackageTreeList;
      },
      selMenuAll(){
        //this.defaultMenuActive = index + '';
        this.commSearchBuild = "";
        this.commSearchFloor = "";
        this.commSearchRoom = "";
        this.commSearchBuild = "";
        this.commSearchFloor = "";
        this.commSearchPackage = "";
        this.initDormInfo();
      },
      selMenu(event, item, index){
        //this.defaultMenuActive = index + '';;

        if(this.dormSelType == 0){
          this.commSearchBuild = "";
          this.commSearchFloor = "";
          this.commSearchRoom = "";
          if (item.storey){
            this.commSearchBuild = item.id;
          }else {
            this.commSearchBuild = item.buildingId;
          }
          this.commSearchFloor = item.floor;
          this.initDormInfo();
        }else if(this.dormSelType == 1){
          this.commSearchPackage = item.value;
          this.initDormInfo();
        }
      },
      handleChangeSearchType(item){
        this.searchRoomType = item;
        this.initDormInfo();
      },
      handleChangeSearchArrow(item){
        this.searchRoomArrow = item;
        this.initDormInfo();
      },
      handleChangeSearchPrice(item){
        this.searchRoomPrice = item;
        this.initDormInfo();
      },
      handleChangeSearchStatus(item){
        this.searchRoomStatus = item;
        this.initDormInfo();
      },
      selBedNo(event, item, index){
        this.formDorm.bedId = item.id;
        this.activeBedNo = index;
      },
      openedDormDialog(){
        this.dormHeight.height = window.innerHeight * 0.7 - 40 + 'px';
        this.billHeight.height = window.innerHeight * 0.7 - 60 + 'px';
      },
      setBillStatus(event, item){
        let url = "";
        let params = {}
        if (this.dormSelType == 0){
          url = common.server_enroll_app_dorm_bill_revoke;
          params = {
            id: item.id,
            userId: this.loginUserId
          }
        }else if (this.dormSelType == 1){
          url = common.enroll_rule_package_order_revoke;
          params = {
            id: item.id
          }
        }
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.initBill();
            Toast(res.data.desc);
          }else {
            Toast(res.data.desc);
          }
        });
      },
      selRoomItem(event, item){
        this.formDorm.id = item.id;

        if (this.dormSelType == 0){
          let params = {
            id: item.id
          };
          this.dormSelTitle = this.$t("床位选择");
          this.$axios.get(common.server_enroll_app_dorm_info, {params: params, loading: false}).then((res) => {
            if (res.data.data){
              let photos = res.data.data.room_photos ? res.data.data.room_photos.split("|") : [];
              this.formDorm.imgs = photos
              this.formDorm.beds = res.data.data.beds;
              this.formDorm.roomPrice = res.data.data.room_price;
              this.formDorm.roomArrow = res.data.data.room_orient;
              this.formDorm.peopleNum = res.data.data.people_num;
              this.formDorm.roomArea = res.data.data.area;
            }
          });
        }else if (this.dormSelType == 1){
          this.dormSelTitle = this.$t("套餐选择");
          let photos = item.pacLogo ? item.pacLogo.split(",") : [];
          this.formDorm.imgs = photos
          this.formDorm.roomPrice = item.pacPrice;
        }

        this.showDorm = true;
      },
      billManage(){
        this.initBill();
        this.showBill = true;
      },
      cancelDormDialog(){
        this.showDorm = false;
      },
      okDormDialog(){
        this.btnLoading = true;
        let url = common.server_enroll_app_dorm_chose;
        let params = {};
        if (this.dormSelType == 0){
          url = common.server_enroll_app_dorm_chose;
          params = {
            userId: this.loginUserId,
            roomId: this.formDorm.id,
            bedId: this.formDorm.bedId
          }
        }else if (this.dormSelType == 1){
          url = common.enroll_rule_package_order_chose;
          params = {
            linkId: this.detailData.id,
            packageId: this.formDorm.id
          }
        }
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.showDorm = false;
            let url = this.$route.query.subPage ? this.$route.query.subPage : '/newStudent/studentIndex'
            this.returnGIndex(url);
            Toast(res.data.desc);
          }else {
            Toast(res.data.desc);
          }
          this.btnLoading = false;
        });
      },
      closeDialog(){
        this.activeBedNo = '';
        this.billList = [];
        this.formDorm = {
          id: '',
          beds: [],
          imgs: [],
          roomArrow: '',
          roomPrice: 0,
          roomArea: 0,
          peopleNum: 0,
          bedId: ''
        };
      },
      returnIndex(){
        let url = this.$route.query.subPage ? this.$route.query.subPage : '/newStudent/studentIndex'
        this.$router.push({
          path: url,
          query: {
            activeType: this.$route.query.activeType,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow
          }
        });
      }
    }
  }
</script>

<style scoped>
.container {

}
.header-title-block{
  height: 60px;
  line-height: 60px;
  width: 100%;
}
.content-block{
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: #FFFFFF;
  width: 100%;
}
.app-title-border-tag{
  width: 5px;
  height: 25px;
  background: #1EA084;
  display: inline-block;
}
.notice-list-item{
  height: 45px;
  line-height: 45px;
}
.bg-student-info-block{
  background: url(/img/bg-student-info.png) no-repeat;
  height: 180px;
  width: 100%;
  border: 1px dashed #dddddd;
}
.text-display-line{
  width: 80px;
  display: inline-block;
  position: relative;
  top: 4px;
}
.name-display-line{
  max-width: 200px;
  display: inline-block;
  position: relative;
  top: 6px;
}
.item-block{
  border-radius: 5px;
  background: #EBEEF5;
  padding: 10px;
}
.info-block-header{
  height: 45px;
  line-height: 45px;
  font-size: 12px;
  color: #FFFFFF;
  background: #909399;
}
.info-block-left{
  width: 100px;
  border-right: 1px solid #F2F6FC;
}
.info-block-right{
  margin-left: 100px;
  height: 100%;
}
.bed-item-block{
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #DCDFE6;
}
.room-item-block{
  padding: 10px;
  border-radius: 5px;
  cursor: default;
}
.room-item-block:hover{
  background: #f5f5f5;
}
.bed-item-block{
  cursor: default;
}
.bed-item-block:hover{
  background: #F2F6FC;
}
.bed-item-block-active,.bed-item-block-active:hover{
  background: #E6A23C;
  color: #FFFFFF;
}
.bed-item-block-selected,.bed-item-block-selected:hover{
  background: #F56C6C;
  color: #FFFFFF;
}
.block-icon-class{
  height: 15px;
  width: 15px;
  position: relative;
  top: 3px
}
.tag-class{
  width: 10px;
  height: 13px;
  background: #67C23A;
  display: inline-block;
}
.tag-danger-class{
  width: 10px;
  height: 13px;
  background: #F56C6C;
  display: inline-block;
}
.dialog-header-title-block{
  height: 40px;
  line-height: 40px;
}
</style>
