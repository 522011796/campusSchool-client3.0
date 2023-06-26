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
            <span class="color-white font-size-14 font-bold">{{$t('采购合同单')}}</span>
          </div>
        </van-col>
        <van-col span="5">
          &nbsp;
        </van-col>
      </van-row>
    </div>
    <div class="content-block" :style="{height: divHeight20.height}" style="overflow-y: auto">
      <div class="content-main-block">
        <van-form ref="form" label-width="70" label-align="right" input-align="right" error-message-align="right">
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
          <van-field required v-model="form.deptName" :name="$t('申请部门')" :label="$t('申请部门')" :rules="[{ required: true, message: $t('请设置信息') }]" @click="selBlockFun($t('申请部门'),'dept')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.deptName}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('申请部门'),'dept')"/>
            </template>
          </van-field>
          <van-field required v-model="form.sqTime" :name="$t('申请日期')" :label="$t('申请日期')" :rules="[{ required: true, message: $t('请设置信息') }]" @click="selBlockFun($t('申请日期'),'sqTime')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.sqTime}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('申请日期'),'sqTime')"/>
            </template>
          </van-field>
          <van-field :name="$t('供应商')" :label="$t('供应商')" @click="selBlockFun($t('供应商'),'gys')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.gys}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('供应商'),'gys')"/>
            </template>
          </van-field>
          <van-field
            v-model="form.amount"
            :name="$t('合同总金额')"
            :label="$t('合同总金额')"
            :placeholder="$t('请填写信息')"
            :rules="[{ pattern: moneyReg, message: '请设置整数或者2位小数' }]">
          </van-field>
          <van-field
            v-model="form.des"
            :name="$t('申请说明')"
            :label="$t('申请说明')"
            :placeholder="$t('请填写信息')"
          />
          <van-field :name="$t('上传附件')" :label="$t('上传附件')">
            <template #input>
              <div class="margin-right-10 color-muted">
                <div>
                  <div v-if="form.files.length > 0" v-for="(item, index) in form.files" :key="index" class="pull-left" style="position: relative;top: 0px;margin-right: 10px;height: 25px">
                    <i class="fa fa-close" style="position: absolute; right: -8px; top: -8px;font-size: 15px" @click="deleteRemoveImg(index)"></i>
                    <i v-if="item.indexOf('.pdf') > -1" class="fa fa-file-pdf-o" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: 0px;"></i>
                    <i v-else-if="item.indexOf('.doc') > -1 || item.indexOf('.docx') > -1" class="fa fa-wordpress" style="height: 25px;width: 25px;font-size: 25px;position: relative;top: 0px;"></i>
                    <img v-else :src="item" class="rp-img"/>
                  </div>
                </div>
              </div>
              <el-upload
                class="avatar-uploader-quill"
                :action="uploadAction"
                multiple
                :data="{path: 'appFormFile'}"
                :auto-upload="true"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :on-error="handleAvatarError"
                >
                <van-icon name="plus" size="20" class="color-muted"/>
              </el-upload>
            </template>
          </van-field>
          <van-field :name="$t('关联项目')" :label="$t('关联项目')" @click="selBlockFun($t('关联项目'),'object')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.object}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('关联项目'),'object')"/>
            </template>
          </van-field>
          <van-field :name="$t('合同标签')" :label="$t('合同标签')" @click="selBlockFun($t('合同标签'),'tag')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.tag}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('合同标签'),'tag')"/>
            </template>
          </van-field>
          <van-field :name="$t('支付计划')" :label="$t('支付计划')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width"></div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('支付计划'),'rules')"/>
            </template>
          </van-field>
          <template v-if="form.backMoney.length > 0">
            <div class="system-order-main-block">
              <div v-for="(item, index) in form.backMoney" :key="index" class="system-order-item-block">
                <div class="border-bottom-1">
                  <el-row>
                    <el-col :span="8">
                      <div class="system-order-item-left-block">
                        <span>{{$t("期数")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-right font-bold" style="padding: 10px 16px;line-height: 24px;position: relative">
                        <label class="color-muted">{{index+1}}{{$t("期")}}</label>
                        <label v-if="index != 0" class="fa fa-times-circle color-danger" style="font-size: 20px;position: absolute; right: -10px; top: -10px" @click="minTableItem(index)"></label>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="border-bottom-1">
                  <el-row>
                    <el-col :span="8">
                      <div class="system-order-item-left-block">
                        <span>{{$t("支付比例")}}%</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <van-field v-model="item.rate" :placeholder="$t('请填写信息')">
                        <span slot="right-icon">
                          <i class="fa fa-edit color-success"></i>
                        </span>
                      </van-field>
                    </el-col>
                  </el-row>
                </div>
                <div class="border-bottom-1">
                  <el-row>
                    <el-col :span="8">
                      <div class="system-order-item-left-block">
                        <span>{{$t("支付金额")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-right" style="padding: 10px 16px;line-height: 24px;position: relative">
                        <label class="color-muted">{{isNaN((item.rate * form.amount / 100)) ? '合同金额有误' : (item.rate * form.amount / 100).toFixed(2)}}</label>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="border-bottom-1">
                  <el-row>
                    <el-col :span="8">
                      <div class="system-order-item-left-block">
                        <span>{{$t("支付日期")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-right" style="position: relative">
                        <van-field readonly v-model="item.time" :placeholder="$t('请设置信息')" @click="selBlockFun($t('支付日期'),'zfTime', index)">
                          <span slot="right-icon">
                            <i class="fa fa-edit color-success"></i>
                          </span>
                        </van-field>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div>
                  <el-row>
                    <el-col :span="8">
                      <div class="system-order-item-left-block">
                        <span>{{$t("备注")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <van-field v-model="item.des" :placeholder="$t('请填写信息')">
                        <span slot="right-icon">
                          <i class="fa fa-edit color-success"></i>
                        </span>
                      </van-field>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </template>
        </van-form>
      </div>

      <div class="content-botton-block text-center">
        <el-row style="margin-top: 8px" :gutter="16">
          <el-col :span="12">
            <div class="text-center padding-lr-10">
              <van-button round size="small" block @click="saveForm(1)">{{$t("暂存")}}</van-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text-center padding-lr-10">
              <van-button :loading="btnLoading" round size="small" type="info" block @click="saveForm(2)">{{$t("提交")}}</van-button>
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
              <van-picker
                ref="teacherRef"
                :columns="tableTeacherData"
              />
<!--              <el-table-->
<!--                border-->
<!--                size="small"-->
<!--                ref="commTableRef"-->
<!--                :data="tableTeacherData">-->
<!--                  <el-table-column align="center" :label="$t('姓名')">-->
<!--                    <template slot-scope="scope">-->
<!--                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--                        <div class="text-center">{{scope.row.real_name}}</div>-->
<!--                        <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">-->
<!--                      {{scope.row.real_name}}-->
<!--                    </span>-->
<!--                      </el-popover>-->
<!--                    </template>-->
<!--                  </el-table-column>-->
<!--                <el-table-column align="center" :label="$t('部门')">-->
<!--                  <template slot-scope="scope">-->
<!--                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--                      <div class="text-center">{{scope.row.department_name}}</div>-->
<!--                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">-->
<!--                      {{scope.row.department_name}}-->
<!--                    </span>-->
<!--                    </el-popover>-->
<!--                  </template>-->
<!--                </el-table-column>-->
<!--                <el-table-column align="center" :label="$t('性别')">-->
<!--                  <template slot-scope="scope">-->
<!--                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">-->
<!--                      <div class="text-center"><my-sex :sex="scope.row.sex" tag="text"></my-sex></div>-->
<!--                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">-->
<!--                        <my-sex :sex="scope.row.sex" tag="text"></my-sex>-->
<!--                      </span>-->
<!--                    </el-popover>-->
<!--                  </template>-->
<!--                </el-table-column>-->
<!--                <el-table-column width="80" align="center" :label="$t('操作')">-->
<!--                  <template slot-scope="scope">-->
<!--                    <a href="javascript:;" class="color-success" @click="selTeacherInfo(scope.row)">{{$t('选择')}}</a>-->
<!--                  </template>-->
<!--                </el-table-column>-->
<!--              </el-table>-->
            </div>
          </div>
        </template>

        <template v-if="pageType == 'account'">
          <van-picker
            ref="accountRef"
            :columns="tableTeacherAccountData"
          />
        </template>


        <template v-if="pageType == 'object'">
          <van-picker
            ref="objectRef"
            :columns="tableObjectData"
          />
        </template>

        <template v-if="pageType == 'jk'">
          <van-picker
            ref="jkRef"
            :columns="tableJKData"
          />
        </template>

        <template v-if="pageType == 'tag'">
          <van-picker
            ref="tagRef"
            :columns="tableTagData"
          />
        </template>

        <template v-if="pageType == 'gys'">
          <van-picker
            ref="gysRef"
            :columns="tableGysData"
          />
        </template>
      </div>
    </van-popup>

    <van-popup v-model="showTimePicker" position="bottom">
      <van-datetime-picker
        type="date"
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onTimeConfirm"
        @cancel="showTimePicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
  import {common} from "../../utils/api/url";

  import mixins from "~/utils/mixins";
  import HBarChart from "~/components/charts/HBarChart";
  import {datalist} from "caniuse-lite/data/features";
  import MySex from "~/components/MySex.vue";
  import {Toast} from "vant";
  import {MessageWarning} from "~/utils/utils";
  export default {
    name: 'appSystemCGHT',
    computed: {
      datalist() {
        return datalist
      }
    },
    components: {MySex, HBarChart},
    layout: 'defaultAppScreen',
    mixins: [mixins],
    data(){
      return {
        uploadAction: common.upload_file,
        active: 6,
        serverAppList: [],
        noticeAppList: [],
        tableTeacherData: [],
        tableTeacherAccountData: [],
        tableObjectData: [],
        tableHtData: [],
        tableGysData: [],
        tableTagData: [],
        tableJKData: [],
        searchTreeData: '',
        dataTreeList: [],
        defaultMenuActive: '',
        btnLoading: false,
        isCollapse: false,
        showBottom: false,
        showBottomPicker: false,
        showTimePicker: false,
        departmentPath: '',
        pageType: '',
        pageTypeStr: '',
        searchTeacherValue: '',
        moneyTotal: 0.00,
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
        currentDate: new Date(),
        minDate: new Date(2022, 0, 1),
        maxDate: new Date(new Date().getFullYear(), 11, 31),
        searchTreeTempIdData: [],
        searchTreeTempValueData: [],
        dataModalList: [],
        dataModalBakList: [],
        orderType: '',
        formObj: {},
        moneyReg: /^([0-9]+[0-9]*(\.[0-9]{1,2})?|0\.[1-9][0-9]?|0\.0[1-9])$/,
        form: {
          title: '',
          user: '',
          userId: '',
          dept: '',
          deptName: '',
          deptId: '',
          des: '',
          orderInfo: '',
          orderInfoList: [],
          sqTime: '',
          skAccount: '',
          skAccountName: '',
          files: [],
          fileNames: [],
          object: '',
          objectId: '',
          order: '',
          orderId: '',
          tag: '',
          tagId: '',
          gys: '',
          gysId: '',
          amount: 0,
          backMoneyIndex: '',
          backMoney: [
            {
              stage: 1,
              rate: 1,
              amount: 0,
              time: '',
              des: ''
            }
          ]
        }
      }
    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    created() {
      this.active = this.$route.query.activeType ? this.$route.query.activeType : 6;
      this.orderType = this.$route.query.type;
      this.formObj = this.$route.params.formObj && this.$route.params.formObj != '' ? this.$route.params.formObj : {};
      if (JSON.stringify(this.formObj) == "{}"){
        this.form = this.form;
      }else {
        this.form = this.formObj;
      }
      console.log(this.form);
      this.form.orderInfoList = this.$route.params.orderInfoList && this.$route.params.orderInfoList.length > 0 ? this.$route.params.orderInfoList : [];
      this.form.orderInfo = this.form.orderInfoList.length > 0 ? '&nbsp;' : '';

      this.initMoneyCount();
    },
    methods: {
      layoutInit(){

      },
      initTeacher(){
        let params = {
          page: 1,
          num: 9999,
          deleted: 0
        };
        params['realName'] = this.searchTeacherValue;
        this.$axios.get(common.teacher_list, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.page.list.length; i++){
              array.push({
                label: res.data.data.page.list[i].real_name + "("+ res.data.data.page.list[i].department_name +")",
                text: res.data.data.page.list[i].real_name + "("+ res.data.data.page.list[i].department_name +")",
                value: res.data.data.page.list[i].user_id
              });
            }
            this.tableTeacherData = array;
          }
        });
      },
      initTeacherAccount(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.teacher_account_list, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].account_num + "("+ res.data.data[i].account_name +")",
                text: res.data.data[i].account_num + "("+ res.data.data[i].account_name +")",
                value: res.data.data[i].account_num
              });
            }
            this.tableTeacherAccountData = array;
          }
        });
      },
      initObject(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.object_order_used_list, {params: params, loading:false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i]['applyData'] ? res.data.data[i]['applyData'].xm_name20230501.value : '',
                text: res.data.data[i]['applyData'] ? res.data.data[i]['applyData'].xm_name20230501.value : '',
                value: res.data.data[i]._id
              });
            }
            this.tableObjectData = array;
          }
        });
      },
      initGys(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.supplier_account_list, {params: params, loading:false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].company,
                text: res.data.data[i].company,
                value: res.data.data[i].id
              });
            }
            this.tableGysData = array;
          }
        });
      },
      initHt(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.ht_list, {params: params, loading:false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i]['applyData'] ? res.data.data[i]['applyData'].ht_name20230501.value : '',
                text: res.data.data[i]['applyData'] ? res.data.data[i]['applyData'].ht_name20230501.value : '',
                value: res.data.data[i]._id
              });
            }
            this.tableHtData = array;
          }
        });
      },
      initTag(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.tag_list, {params: params, loading:false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].label_name,
                text: res.data.data[i].label_name,
                value: res.data.data[i].id
              });
            }
            this.tableTagData = array;
          }
        });
      },
      initJK(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.jk_list, {params: params, loading:false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                label: res.data.data[i].noticeName,
                text: res.data.data[i].noticeName,
                value: res.data.data[i]._id
              });
            }
            this.tableJKData = array;
          }
        });
      },
      initMoneyCount(){
        let count = 0;
        for (let i = 0; i < this.form.orderInfoList.length; i++){
          let total = parseFloat(this.form.orderInfoList[i].amount);
          count += total;
        }
        this.moneyTotal = count.toFixed(2);
      },
      returnIndex(){
        let page = this.$route.query.page ? this.$route.query.page : '/app/appIndex';
        console.log(page);
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
      selTeacherInfo(data){
        this.form.user = data.real_name;
        this.form.userId = data.user_id;
        this.showBottomPicker = false;
      },
      selTeacherAccountInfo(data){
        this.form.skAccount = data.account_num;
        this.form.skAccountName = data.account_name + "("+data.account_num+")";
        this.showBottomPicker = false;
      },
      async selBlockFun(data, type, index){
        this.pageType = type;
        this.pageTypeStr = data;
        this.backMoneyIndex= index;
        if (type == 'user'){
          this.showBottomPicker = true;
        }else if (type == 'dept'){
          await this.getDeptInfo('id');
          this.dataTreeList = this.dataDept;
          this.dataModalList = this.dataModalBakList;
          this.showBottomPicker = true;
        }else if (type == 'sqTime' || type == 'zfTime'){
          this.showTimePicker = true;
        }else if (type == 'gys'){
          this.initGys();
          this.showBottomPicker = true;
        }else if (type == 'account'){
          this.initTeacherAccount();
          this.showBottomPicker = true;
        }else if (type == 'object'){
          this.initObject();
          this.showBottomPicker = true;
        }else if (type == 'jk'){
          this.initJK();
          this.showBottomPicker = true;
        }else if (type == 'tag'){
          this.initTag();
          this.showBottomPicker = true;
        }else if (type == 'upload'){
          document.querySelector('.avatar-uploader-quill input').click()
        }else if (type == 'orderInfo'){
          if (this.form.orderInfoList.length == 0){
            this.jumpPage();
          }else {
            this.jumpPage(this.form.orderInfoList[0].processId);
          }
        }else if (type == 'rules'){
          let obj = {
            stage: 1,
            rate: 1,
            amount: 0,
            time: '',
            des: ''
          };
          this.form.backMoney.splice((this.form.backMoney.length-1)+1, 0, obj);
        }
      },
      minTableItem(index){
        this.form.backMoney.splice(index, 1);
      },
      jumpPage(id){
        this.$router.push({
          name: 'app-appSystemOrderInfo',
          query: {
            id: id ? id : '',
            process: '',
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            page: '/app/appSystemCGHT',
            pageParent: '/app/appSystemMoneyForm',
            name: 'app-appSystemCGHT'
          },
          params: {
            formObj: this.form,
            orderInfoList: this.form.orderInfoList
          }
        });
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
        if (this.searchTeacherValue == ''){
          return;
        }
        this.initTeacher();
      },
      handleAvatarSuccess(res, file){
        // 如果上传成功
        if (res.code == '200') {
          console.log(res.data);
          this.form.files.push(res.data.url);
          this.form.fileNames.push(file.name);
        } else {
          Toast(res.desc);
        }
      },
      handleAvatarError(res, file){

      },
      deleteRemoveImg(index){
        this.form.files.splice(index, 1);
      },
      removeOrderItem(index){
        this.form.orderInfoList.splice(index, 1);
        this.form.orderInfo = this.form.orderInfoList.length > 0 ? 'null' : '';
        this.initMoneyCount();
      },
      closePop(){
        this.searchTreeTempIdData = [];
        this.searchTreeTempValueData = [];
        this.searchTeacherValue = '';
        this.tableTeacherData = [];
        this.tableTeacherAccountData = [];
        this.resetProcessPop();
      },
      cancelPop(){
        this.showBottomPicker = false;
      },
      onTimeConfirm(time) {
        if (this.pageType == 'sqTime'){
          this.form.sqTime = this.$moment(time).format("YYYY-MM-DD");
        }else if (this.pageType == 'zfTime'){
          this.$set(this.form.backMoney[this.backMoneyIndex], 'time', this.$moment(time).format("YYYY-MM-DD"));
        }
        this.showTimePicker = false;
      },
      okPop(value, index){
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

          this.form.dept = deptPathLabel.length > 0 ? deptPathLabel : [];
          this.form.deptName = deptPathStr;
          this.form.deptId = deptPath.length > 0 ? deptPath : [];
          this.dataModalList = deptPath.length > 0 ? JSON.parse(JSON.stringify(deptPath)) : [];
          this.dataModalBakList = JSON.parse(JSON.stringify(this.dataModalList));
        }else if (this.pageType == 'account'){
          if (this.$refs.accountRef.getValues().length == 0 || (this.$refs.accountRef.getValues().length > 0 && !this.$refs.accountRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.skAccount = this.$refs.accountRef.getValues().length > 0 ? this.$refs.accountRef.getValues()[0].value : '';
          this.form.skAccountName = this.$refs.accountRef.getValues().length > 0 ? this.$refs.accountRef.getValues()[0].label : '';
        }else if (this.pageType == 'object'){
          if (this.$refs.objectRef.getValues().length == 0 || (this.$refs.objectRef.getValues().length > 0 && !this.$refs.objectRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.objectId = this.$refs.objectRef.getValues().length > 0 ? this.$refs.objectRef.getValues()[0].value : '';
          this.form.object = this.$refs.objectRef.getValues().length > 0 ? this.$refs.objectRef.getValues()[0].label : '';
        }else if (this.pageType == 'jk'){
          if (this.$refs.jkRef.getValues().length == 0 || (this.$refs.jkRef.getValues().length > 0 && !this.$refs.jkRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.orderId = this.$refs.jkRef.getValues().length > 0 ? this.$refs.jkRef.getValues()[0].value : '';
          this.form.order = this.$refs.jkRef.getValues().length > 0 ? this.$refs.jkRef.getValues()[0].label : '';
        }else if (this.pageType == 'tag'){
          if (this.$refs.tagRef.getValues().length == 0 || (this.$refs.tagRef.getValues().length > 0 && !this.$refs.tagRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.tagId = this.$refs.tagRef.getValues().length > 0 ? this.$refs.tagRef.getValues()[0].value : '';
          this.form.tag = this.$refs.tagRef.getValues().length > 0 ? this.$refs.tagRef.getValues()[0].label : '';
        }else if (this.pageType == 'user'){
          if (this.$refs.teacherRef.getValues().length == 0 || (this.$refs.teacherRef.getValues().length > 0 && !this.$refs.teacherRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.userId = this.$refs.teacherRef.getValues().length > 0 ? this.$refs.teacherRef.getValues()[0].value : '';
          this.form.user = this.$refs.teacherRef.getValues().length > 0 ? this.$refs.teacherRef.getValues()[0].label : '';
        }else if (this.pageType == 'gys'){
          if (this.$refs.gysRef.getValues().length == 0 || (this.$refs.gysRef.getValues().length > 0 && !this.$refs.gysRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.gysId = this.$refs.gysRef.getValues().length > 0 ? this.$refs.gysRef.getValues()[0].value : '';
          this.form.gys = this.$refs.gysRef.getValues().length > 0 ? this.$refs.gysRef.getValues()[0].label : '';
        }
        this.showBottomPicker = false;
      },
      saveForm(type){
        let error = 0;
        let req = /^([1-9][0-9]{0,1}|100)$/;
        this.$refs.form.validate().then(() => {
          let contentJson = [
            {
              field: 'ht_name20230501',
              value: this.form.title,
            },
            {
              field: 'apply_user20230501',
              value: this.form.userId,
            },
            {
              field: 'apply_dept20230501',
              value: this.form.deptId,
              deptName: this.form.dept,
            },
            {
              field: 'ht_time20230501',
              value: this.form.sqTime,
            },
            {
              field: 'ht_supplierId20230501',
              value: this.form.gysId,
              name: this.form.gys
            },
            {
              field: 'ht_amount20230501',
              value: this.form.amount,
            },
            {
              field: 'ht_des20230501',
              value: this.form.des,
            },
            {
              field: 'ht_files20230501',
              value: this.form.files,
              name: this.form.files
            },
            {
              field: 'xm_id20230501',
              value: this.form.objectId,
              name: this.form.object
            },
            {
              field: 'tag_id20230501',
              value: this.form.tagId,
              name: this.form.tag
            }
          ];

          let error = 0;
          for (let i = 0; i < this.form.backMoney.length; i++){
            if (this.form.backMoney[i].rate == ''){
              error++;
              break;
            }
            if (this.form.backMoney[i].rate != '' && !req.test(this.form.backMoney[i].rate)){
              error++;
              break;
            }
            if (this.form.backMoney[i].time == ''){
              error++;
              break;
            }

            contentJson.push({
              field: 'ht_payStage20230501_' + (i+1),
              value: this.form.backMoney[i].stage
            },{
              field: 'ht_payRate20230501_' + (i+1),
              value: this.form.backMoney[i].rate
            },{
              field: 'ht_payAmount20230501_' + (i+1),
              value: this.form.backMoney[i].amount
            },{
              field: 'ht_payTime20230501_' + (i+1),
              value: this.form.backMoney[i].time
            },{
              field: 'ht_payDes20230501_' + (i+1),
              value: this.form.backMoney[i].des
            });
          }

          if (error > 0){
            this.dialogLoading = false;
            MessageWarning(this.$t("支付计划未设置有误(比例:1-100),请检查!"));
            return;
          }

          console.log(contentJson);
          let params = {
            formCode: 'CGHT',
            userId: this.form.userId,
          }

          let url = common.server_form_add;
          if (type == 1){
            params['submit'] = false;
          }else if (type == 2){
            params['submit'] = true;
          }
          params['applyContent'] = JSON.stringify(contentJson);
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              this.returnIndex();
              Toast(res.data.desc);
            }else {
              Toast(res.data.desc);
            }
            this.btnLoading = false;
          });
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
.rp-img{
  height: 25px;
  width: 25px;
  border: 0px solid #dddddd;
}
.system-order-main-block{
  padding: 10px 16px;
  position: relative;
}
.system-order-item-block{
  border-radius: 0px;
  padding: 0px 0px;
  position: relative;
  margin-bottom: 10px;
  border: 1px solid #ebebeb;
}
.system-order-main-block::after {
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  right: 16px;
  bottom: 0;
  left: 16px;
  border-bottom: 1px solid #ebedf0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.system-order-info-item-block{
  height: 35px;
  line-height: 35px;
}
.system-order-item-left-block{
  background: #EBEBEB;
  text-align: center;
  padding: 10px 16px;
  line-height: 24px;
}
</style>
