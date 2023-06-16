<template>
  <div class="container">
    <div :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' " :style="{height: navHeight+'px'}"></div>
    <div class="header-title-block" :class="loginUserAppType == 4 ? 'bg-app-success_teacher' : 'bg-app-success' ">
      <van-row>
        <van-col span="5">
          <div class="text-left padding-lr-10">
            <span class="font-bold font-size-14" @click="returnIndex">
              <i class="fa fa-chevron-left"></i>
              {{$t("返回")}}
            </span>
          </div>
        </van-col>
        <van-col span="14" class="text-center">
          <div>
            <span class="color-white font-size-14 font-bold">{{$t('借款单')}}</span>
          </div>
        </van-col>
        <van-col span="5">
          &nbsp;
        </van-col>
      </van-row>
    </div>
    <div class="content-block" :style="{height: divHeight20.height}" style="overflow-y: auto">
      <div class="content-main-block">
        <van-form label-width="70" label-align="right" input-align="right" error-message-align="right">
          <van-field
            required
            v-model="form.title"
            :name="$t('标题')"
            :label="$t('标题')"
            :placeholder="$t('请填写信息')"
            :rules="[{ required: true, message: $t('请填写信息') }]"
          />
          <van-field required v-model="form.userId" :name="$t('申请人')" :label="$t('申请人')" :rules="[{ required: true, message: $t('请设置信息') }]" @click="selBlockFun($t('申请人'),'user')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.user}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('申请人'),'user')"/>
            </template>
          </van-field>
          <van-field required v-model="form.dept" :name="$t('申请部门')" :label="$t('申请部门')" :rules="[{ required: true, message: $t('请设置信息') }]" @click="selBlockFun($t('申请部门'),'dept')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.dept}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('申请部门'),'dept')"/>
            </template>
          </van-field>
          <van-field required v-model="form.time" :name="$t('借款日期')" :label="$t('借款日期')" :rules="[{ required: true, message: $t('请设置信息') }]">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.jkTime}}</div>
              <van-icon name="plus" size="20" class="color-muted"/>
            </template>
          </van-field>
          <van-field
            v-model="form.des"
            :name="$t('借款说明')"
            :label="$t('借款说明')"
            :placeholder="$t('请填写信息')"
          />
          <van-field required v-model="form.userId" :name="$t('单据明细')" :label="$t('单据明细')" :rules="[{ required: true, message: $t('请设置信息') }]">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.orderInfo}}</div>
              <van-icon name="plus" size="20" class="color-muted"/>
            </template>
          </van-field>
          <van-field :name="$t('还款日期')" :label="$t('还款日期')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.hkTime}}</div>
              <van-icon name="plus" size="20" class="color-muted"/>
            </template>
          </van-field>
          <van-field :name="$t('收款账户')" :label="$t('收款账户')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.skAccount}}</div>
              <van-icon name="plus" size="20" class="color-muted"/>
            </template>
          </van-field>
          <van-field :name="$t('上传附件')" :label="$t('上传附件')">
            <template #input>
              <div class="margin-right-5 color-muted">

              </div>
              <van-icon name="plus" size="20" class="color-muted"/>
            </template>
          </van-field>
          <van-field :name="$t('关联项目')" :label="$t('关联项目')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.object}}</div>
              <van-icon name="plus" size="20" class="color-muted"/>
            </template>
          </van-field>
          <van-field :name="$t('关联合同')" :label="$t('关联合同')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.order}}</div>
              <van-icon name="plus" size="20" class="color-muted"/>
            </template>
          </van-field>
          <van-field :name="$t('标签')" :label="$t('标签')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.tag}}</div>
              <van-icon name="plus" size="20" class="color-muted"/>
            </template>
          </van-field>
        </van-form>
      </div>

      <div class="content-main-block" style="margin-top: 20px">
        <div class="padding-lr-10">
          <span class="font-bold color-muted">{{$t("金额合计")}}</span>
        </div>
        <div class="text-center">
          <div class="margin-top-5">
            <span class="color-success font-bold">¥0.00</span>
          </div>
          <div class="margin-top-5">
            <span class="font-bold color-muted">{{$t("总金额")}}</span>
          </div>
        </div>
      </div>

      <div class="content-botton-block text-center">
        <el-row style="margin-top: 8px" :gutter="16">
          <el-col :span="12">
            <div class="text-center padding-lr-10">
              <van-button round size="small" block>{{$t("暂存")}}</van-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text-center padding-lr-10">
              <van-button round size="small" type="info" block>{{$t("提交")}}</van-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <van-popup round v-model="showBottomPicker" position="bottom" :style="{ height: '400px' }" @close="closePop">
      <div style="height: 40px;line-height: 40px;background: #f5f5f5">
        <el-row>
          <el-col :span="6">
            <div class="text-center" @click="cancelPop">
              <a href="javascript:;" class="color-muted">{{$t("取消")}}</a>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text-center">
              <span>{{pageTypeStr}}</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="text-center" @click="okPop">
              <a href="javascript:;" class="color-success">{{$t("确认")}}</a>
            </div>
          </el-col>
        </el-row>
      </div>
      <div :style="divHeight18">
        <template v-if="pageType == 'dept'">
          <template v-if="dataTreeList.length == 0">
            <div class="text-center color-muted margin-top-60">{{$t("暂无数据")}}</div>
          </template>
          <el-cascader-panel ref="SelectorDept" :style="{ height: '350px' }" :props="{multiple: false,checkStrictly:true}" v-model="dataModalList" :options="dataTreeList" @change="searchPop"></el-cascader-panel>
        </template>

        <template v-if="pageType == 'user'">
          <div class="">
            <div>
              <van-search
                v-model="searchTeacherValue"
                show-action
                :placeholder="$t('请输入老师姓名')">
                <template #action>
                  <div @click="onSearchTeacher">搜索</div>
                </template>
              </van-search>
            </div>
            <div class="margin-top-5 padding-lr-10">
              <el-table
                border
                size="small"
                ref="commTableRef"
                :data="tableTeacherData">
                  <el-table-column align="center" :label="$t('姓名')">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.real_name}}</div>
                        <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.real_name}}
                    </span>
                      </el-popover>
                    </template>
                  </el-table-column>
                <el-table-column align="center" :label="$t('部门')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.real_name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.real_name}}
                    </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column align="center" :label="$t('性别')">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.real_name}}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      {{scope.row.real_name}}
                    </span>
                    </el-popover>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </template>
      </div>
    </van-popup>

  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  import HBarChart from "~/components/charts/HBarChart";
  import {datalist} from "caniuse-lite/data/features";
  export default {
    name: 'appIndex',
    computed: {
      datalist() {
        return datalist
      }
    },
    components: {HBarChart},
    layout: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        active: 6,
        serverAppList: [],
        noticeAppList: [],
        tableTeacherData: [],
        searchTreeData: '',
        dataTreeList: [],
        defaultMenuActive: '',
        isCollapse: false,
        showBottom: false,
        showBottomPicker: false,
        departmentPath: '',
        pageType: '',
        pageTypeStr: '',
        searchTeacherValue: '',
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
        searchTreeTempIdData: [],
        searchTreeTempValueData: [],
        dataModalList: [],
        dataModalBakList: [],
        form: {
          title: '',
          user: '',
          userId: '',
          dept: '',
          deptId: '',
          des: '',
          jkTime: '',
          orderInfo: '',
          hkTime: '',
          skAccount: '',
          files: '',
          object: '',
          objectId: '',
          order: '',
          orderId: '',
          tag: '',
          tagId: ''
        }
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;

    },
    methods: {
      layoutInit(){

      },
      returnIndex(){
        let page = this.$route.query.page ? this.$route.query.page : '/app/appIndex';
        this.$router.push({
          path: page,
          query: {
            id: this.$route.query.id,
            activeType: this.$route.query.activeType,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            sessionId: this.$route.query.sessionId
          }
        });
      },
      async selBlockFun(data, type){
        this.pageType = type;
        this.pageTypeStr = data;
        if (type == 'user'){

        }else if (type == 'dept'){
          await this.getDeptInfo(0);
          this.dataTreeList = this.dataDept;
          this.dataModalList = this.dataModalBakList;
        }
        this.showBottomPicker = true;
      },
      resetProcessPop(){
        if (this.$refs['SelectorDept']){
          this.dataModalList = this.dataModalBakList;
          this.$refs['SelectorDept'].clearCheckedNodes();
          this.$refs['SelectorDept'].activePath = [];
        }
      },
      searchPop(event){
        if (this.pageType == 'dept'){
          this.searchTreeTempIdData = event;
        }
      },
      onSearchTeacher(event){
        console.log(this.searchTeacherValue);
      },
      closePop(){
        this.searchTreeTempIdData = [];
        this.searchTreeTempValueData = [];
        this.searchTeacherValue = '';
        this.resetProcessPop();
      },
      cancelPop(){
        this.showBottomPicker = false;
      },
      okPop(){
        if (this.pageType == 'dept'){
          let deptPath = this.$refs.SelectorDept.getCheckedNodes().length > 0 ? this.$refs.SelectorDept.getCheckedNodes()[0].path : [];
          let deptPathLabel = this.$refs.SelectorDept.getCheckedNodes().length > 0 ? this.$refs.SelectorDept.getCheckedNodes()[0].pathLabels : [];
          let deptPathStr = "";

          for (let i =0; i < deptPathLabel.length; i++){
            deptPathStr += deptPathLabel[i];
            if (deptPath.length-1 != i){
              deptPathStr += "/";
            }
          }

          this.form.dept = deptPathStr;
          this.form.deptId = deptPath.length > 0 ? JSON.parse(JSON.stringify(deptPath)).join() : '';
          this.dataModalList = deptPath.length > 0 ? JSON.parse(JSON.stringify(deptPath)) : [];
          this.dataModalBakList = JSON.parse(JSON.stringify(this.dataModalList));
        }
        this.showBottomPicker = false;
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
  color: #FFFFFF;
}
.content-block{
  width: 100%;
  background: #EBEBEB;
  padding: 10px 0px;
}
.content-main-block{
  background: #FFFFFF;
  border-radius: 10px;
  padding: 10px 0px;
  margin: 0px 10px;
}
.input-width{
  max-width: 200px;
}
.content-botton-block{
  height: 45px;
  line-height: 45px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #f5f5f5;
}
</style>
