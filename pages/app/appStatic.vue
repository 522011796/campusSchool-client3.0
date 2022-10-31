<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-row>
        <van-col span="4">
          <div class="text-left padding-lr-10 color-white">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
            </span>
          </div>
        </van-col>
        <van-col span="16" class="text-center">
          <span class="color-white font-size-14 font-bold">{{$t('我的统计')}}</span>
        </van-col>
        <van-col span="4">
          &nbsp;
        </van-col>
      </van-row>
    </div>
    <div class="content-block">
      <form action="/">
        <div style="background: #f5f5f5;height: 40px">
          <van-row>
            <van-col :span="8">
              <el-select class="margin-left-10" style="margin-top: 5px" v-model="formValue" size="small" placeholder="请选择表单" @change="dropdownItem">
                <el-option v-for="(item, index) in formList" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </van-col>
            <van-col :span="16" class="text-right padding-lr-10">
              <van-button v-if="fliterType == 1" class="layout-item" style="margin-top: 5px" size="small" type="warning" plain native-type="button" @click="selSearch">{{$t('选择部门')}}</van-button>
              <van-button v-if="fliterType == 2" class="layout-item" style="margin-top: 5px" size="small" type="warning" plain native-type="button" @click="selSearch">{{$t('选择院系')}}</van-button>
              <van-button class="layout-item" style="margin-top: 5px" size="small" type="default" plain native-type="button" @click="selTime">{{dateTime == "" ? $t('选择时间') : dateTime}}</van-button>
            </van-col>
          </van-row>
        </div>
      </form>

      <div :style="divHeight9" class="detail-card padding-lr-10 margin-top-10" style="position: relative">
        <el-card :body-style="{padding: '10px'}" style="height: 150px">
          <div style="height: 75px;width: 100%">
            <el-row>
              <el-col :span="12">
                <div class="text-left padding-lr-5">
                  <div>
                    <span class="font-size-14 font-bold">{{cardLabel1 != '' ? cardLabel1 : '--'}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="font-size-12 color-muted">{{cardValue1 !== '' ? cardValue1 : '--'}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="text-right padding-lr-5">
                  <div>
                    <span class="font-size-14 font-bold">{{cardLabel2 != '' ? cardLabel2 : '--'}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="font-size-12 color-muted">{{cardValue2 !== '' ? cardValue2 : '--'}}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div style="height: 75px;width: 100%">
            <el-row>
              <el-col :span="12">
                <div class="text-left padding-lr-5">
                  <div>
                    <span class="font-size-14 font-bold">{{cardLabel3 != '' ? cardLabel3 : '--'}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="font-size-12 color-muted">{{cardValue3 !== '' ? cardValue3 : '--'}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="text-right padding-lr-5">
                  <div>
                    <span class="font-size-14 font-bold">{{cardLabel4 != '' ? cardLabel4 : '--'}}</span>
                  </div>
                  <div class="margin-top-5">
                    <span class="font-size-12 color-muted">{{cardValue4 !== '' ? cardValue4 : '--'}}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <el-card :body-style="{padding: '10px'}" style="height: 200px;margin-top: 20px">
          <div style="height: 200px;width: 100%" class="text-center;">
            <div class="text-center">
              <el-progress type="dashboard" :width="160" :show-text="false" :percentage="circleValue"></el-progress>
            </div>
            <div class="text-center font-size-12 font-bold" style="position: relative; top: -90px">
              <span>{{circleValueText != "" ? circleValueText : '--'}}</span>
            </div>
            <div class="text-center color-muted" style="position: relative; top: -10px;">
              <div>
                <span>{{circleLabel != "" ? circleLabel : '--'}}</span>
              </div>
            </div>
          </div>
        </el-card>

        <el-card :body-style="{padding: '10px'}" style="height: 350px;margin-top: 20px">
          <div style="height: 350px;width: 100%" class="text-center;">
            <h-bar-chart chart-id="barId" :data-legned="barDataLegned" :data-key="barDataKey" :data="barData"></h-bar-chart>
          </div>
        </el-card>
      </div>
    </div>

    <van-calendar v-model="showCalendar" type="range" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" />

    <van-popup v-model="showBottom" round position="bottom" class="custom-cascader" :style="{ height: '350px' }">
      <el-cascader-panel v-if="fliterType == 1" :style="{ height: '350px' }" :props="{multiple: true}" v-model="searchDept" :options="dataDept" @change="searchTop"></el-cascader-panel>
      <el-cascader-panel v-if="fliterType == 2" :style="{ height: '350px' }" :props="{multiple: true}" v-model="searchCollege" :options="dataCollege" @change="searchTop"></el-cascader-panel>
    </van-popup>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  import HBarChart from "~/components/charts/HBarChart";
  export default {
    name: 'appIndex',
    components: {HBarChart},
    layout: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        active: 6,
        serverAppList: [],
        noticeAppList: [],
        defaultMenuActive: '',
        isCollapse: false,
        showBottom: false,
        departmentPath: '',
        leftHeight: {
          'height': '100%',
          'width': '0%'
        },
        toggleTag: {
          'left': '0'
        },
        formList: [],
        formValue: '',
        serchName: '',
        showCalendar: false,
        dateTime: '',
        searchDept: [],
        searchCollege: [],
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2030, 12, 1),
        timeData: [],
        searchData: [],
        startTime: '',
        endTime: '',
        collegeId: '',
        majorId: '',
        grandId: '',
        classId: '',
        fliterType: '',
        cardLabel1: '',
        cardValue1: '',
        cardLabel2: '',
        cardValue2: '',
        cardLabel3: '',
        cardValue3: '',
        cardLabel4: '',
        cardValue4: '',
        circleLabel: '',
        circleValue: 0,
        circleValueText: '',
        barLabel: '',
        barValue: '',
        barDataLegned: [],
        barDataKey: [],
        barData: [

        ]
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
      this.getDeptInfo(2);
      this.getCollegeInfo(4);
      this.initForm();
    },
    methods: {
      layoutInit(){

      },
      initForm(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.static_appinfo_form_page, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for(let i = 0; i < res.data.data.list.length; i++){
              array.push({
                label: res.data.data.list[i].stat_name,
                value: res.data.data.list[i].id+""
              });
            }
            if (array.length > 0){
              this.formValue = res.data.data.list[0].id+"";

              this.initFormDetail(res.data.data.list[0].id)
            }
            this.formList = array;
          }
        });
      },
      initFormDetail(id){
        let params = {
          id: id
        };

        this.$axios.get(common.static_appinfo_form_detail, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.unitList.length; i++){
              array.push({
                id: res.data.data.unitList[i].id,
                relaFromField1: res.data.data.unitList[i].relaFromField1,
                relaFromField2: res.data.data.unitList[i].relaFromField2,
                filterType: res.data.data.unitList[i].filterType,
                filterRules: res.data.data.unitList[i].filterRules,
              });
            }

            this.fliterType = res.data.data.unitList[0].filterType;
            this.initData(array[1].id, 1, array);
            this.initData(array[2].id, 2, array);
            this.initData(array[3].id, 3, array);
            this.initData(array[4].id, 4, array);
            this.initData(array[6].id, 5, array);
            this.initData(array[5].id, 6, array);
          }
        });
      },
      initData(id, type, array){
        let params = {
          unitId: id
        };
        if (this.startTime != "" && this.endTime != ""){
          params['date1'] = this.startTime;
          params['date2'] = this.endTime;
        }
        if (this.fliterType == 1){
          params['deptId'] = this.searchData;
        }else if (this.fliterType == 2){
          params['collegeId'] = this.searchData;;
        }
        this.$axios.get(common.static_appinfo_form_info, {params: params}).then(res => {
            if (res.data.data){
              switch (type){
                case 1:
                  {
                    let obj = JSON.parse(array[1].relaFromField1);
                    let filed = obj[0].n;
                    this.cardLabel1 = filed.length > 15 ? filed.substr(0,14)+"..." : filed;
                    this.cardValue1 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                    break;
                  }
                case 2:
                  {
                    let obj = JSON.parse(array[2].relaFromField1);
                    let filed = obj[0].n;
                    this.cardLabel2 = filed.length > 15 ? filed.substr(0,14)+"..." : filed;
                    this.cardValue2 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                    break;
                  }
                case 3:
                  {
                    let obj = JSON.parse(array[3].relaFromField1);
                    let filed = obj[0].n;
                    this.cardLabel3 = filed.length > 15 ? filed.substr(0,14)+"..." : filed;
                    this.cardValue3 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                    break;
                  }
                case 4:
                  {
                    let obj = JSON.parse(array[4].relaFromField1);
                    let filed = obj[0].n;
                    this.cardLabel4 = filed.length > 15 ? filed.substr(0,14)+"..." : filed;
                    this.cardValue4 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                    break;
                  }
                case 5:
                  {
                    let obj = JSON.parse(array[6].relaFromField1);
                    let filed = obj[0].n;
                    let rate = res.data.data.rate != null ? parseInt(res.data.data.rate) : 0;
                    this.circleLabel = filed.length > 6 ? filed.substr(0,5)+"..." : filed;
                    this.circleValue = rate;
                    this.circleValueText = res.data.data.rate != null ? res.data.data.rate+"%" : "--";
                    break;
                  }
                case 6:
                  {
                    let data = res.data.data;
                    let legned = array[5].relaFromField2 ? JSON.parse(array[5].relaFromField2) : [];
                    let filterType = array[5].filterType;
                    let legnedArray = [];
                    let key = [];
                    let dataF = [];
                    let dataValue = [];
                    for (let i = 0; i < legned.length; i++){
                      legnedArray.push(legned[i].n);
                      dataF.push({
                        n: legned[i].n,
                        f:legned[i].f
                      });
                    }

                    for (let i = 0; i < data.length; i++){
                      key.push(data[i]._name);
                      let yData = [];
                      let yDataObj = [];
                      let dataObj = {};
                      for (let item in data[i]){
                        for (let z = 0; z < dataF.length; z++){
                          if (dataF[z].f+"DateResult" == item){
                            let value = data[i][item];
                            let name = dataF[z].n;
                            yData.push(value);
                            dataObj = {
                              name: name,
                              type: 'bar',
                              barWidth:15,
                              data: []
                            };
                            yDataObj.push(dataObj);
                          }
                        }
                      }
                      dataObj['data'] = yData;

                      for (let k = 0; k < yDataObj.length; k++){
                        yDataObj[k]['data'] = yData;
                      }
                      dataValue = yDataObj;
                    }

                    this.barData = dataValue;
                    this.barDataKey = key;
                    this.barDataLegned = legnedArray;
                    break;
                  }
                default:
                  break;
              }
            }
        });
      },
      formatDate(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      },
      formatDate2(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      selTime(){
        this.showCalendar = true;
      },
      activeTabMenu(name){
        this.noticeAppList = [];
        this.serverAppList = [];
        this.serchName = '';
        if (name == 5){
          this.$router.push({
            path: '/app/appMyNotice',
            query: {
              id: parseInt(name),
              userType: this.loginUserAppType,
              navH: this.navHeight,
              appType: this.globalAppShow
            }
          });
        }else if (name == 6){
          this.active = name;
          this.initAppRecommend();
        }else {
          this.active = name;
          this.initAppServer();
        }
      },
      returnIndex(){
        this.$router.push({
          path: this.$route.query.page ? this.$route.query.page : '/app/appIndex',
          query: {
            activeType: 6,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      },
      dropdownItem(event){
        this.formValue = event;
        this.initData(event);
      },
      onConfirm(date){
        const [start, end] = date;
        this.dateTime = `${this.formatDate2(start)} - ${this.formatDate2(end)}`;
        this.startTime = `${this.formatDate(start)}`;
        this.endTime = `${this.formatDate(end)}`;

        this.initFormDetail(this.formValue);
        this.showCalendar = false;
      },
      selSearch(){
        this.showBottom = true;
      },
      searchTop(event){
        this.searchDept = [];
        this.searchCollege = [];
        this.searchData = event.length > 0 ? JSON.stringify(event) : "";
        if(this.fliterType == 1){
          this.searchDept = event;
        }else if(this.fliterType == 2){
          this.searchCollege = event;
        }
        this.initFormDetail(this.formValue);
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
  height: 30px;
  background: #1EA084;
  display: inline-block;
}
.notice-list-item{
  height: 45px;
  line-height: 45px;
}
.info-block-left{
  width: 50%;
  border-right: 1px solid #F2F6FC;
}
.info-block-right{
  margin-left: 0px;
  height: 100%;
}
.info-block-header{
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  color: #909399;
  background: #e9e9e9;
}
.moon-left-menu-tag{
  position: absolute;
  top: 0;
  bottom: 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  left: 50%;
  transition: all .2s ease-in-out;
  z-index: 99;
}
.moon-left-menu-tag .moon-left-menu-tag-container {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}
.moon-left-menu-tag .moon-left-menu-tag_indicator {
  margin-top: -44.5px;
  width: 15px;
  height: 40px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #EBEEF5;
  border-radius: 0 4px 4px 0;
  border: 1px solid #e5e5e5;
  border-left-color: transparent;
  opacity: 1;
  /*transition-property: background-color,opacity;*/
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  color: #dddddd;
  padding-right: 2px;
}
.moon-left-menu-tag_indicator:hover{
  background: rgb(160, 207, 255);
  color: #FFFFFF;
}
.moon-left-toogle-menu{
  border-right: 0px solid #dcdee2;
  /*overflow-y: auto;*/
  float: left;
  box-shadow: 2px 0px 4px #bbbbbb;
  position: relative;
  background: #f2f2f2;
  background-image: linear-gradient(to bottom, #f2f2f2 , #f2f2f2);
  padding: 0px 0px;
  position: fixed;
  transition: all .2s ease-in-out;
  user-select: none;
  z-index: 99;
}
.icon-class-left{
  color: #dddddd;
  transform: rotate(0deg);
}
.icon-class-right{
  transform: rotate(180deg);
}
</style>
