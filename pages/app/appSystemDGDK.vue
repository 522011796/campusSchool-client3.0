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
            <span class="color-white font-size-14 font-bold">{{$t('对公打款单')}}</span>
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
          <van-field required v-model="form.dept" :name="$t('申请部门')" :label="$t('申请部门')" :rules="[{ required: true, message: $t('请设置信息') }]" @click="selBlockFun($t('申请部门'),'dept')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.dept}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('申请部门'),'dept')"/>
            </template>
          </van-field>
          <van-field required v-model="form.fkTime" :name="$t('付款日期')" :label="$t('付款日期')" :rules="[{ required: true, message: $t('请设置信息') }]" @click="selBlockFun($t('付款日期'),'fkTime')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.fkTime}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('付款日期'),'fkTime')"/>
            </template>
          </van-field>
          <van-field
            v-model="form.des"
            :name="$t('打款事由')"
            :label="$t('打款事由')"
            :placeholder="$t('请填写信息')"
          />
          <van-field required v-model="form.orderInfo" :name="$t('单据明细')" :label="$t('单据明细')" :rules="[{ required: true,type: 'array', min: 1, message: $t('请设置信息') }]" @click="selBlockFun($t('单据明细'),'orderInfo')">
            <template #input>
              <div>
                <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.orderInfo == 'null' ? '' : ''}}</div>
                <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('单据明细'),'orderInfo')"/>
              </div>
            </template>
          </van-field>
          <template v-if="form.orderInfoList.length > 0">
            <div class="system-order-main-block">
              <div v-for="(item, index) in form.orderInfoList" :key="index" class="system-order-item-block">
                <i class="fa fa-times-circle" style="font-size: 20px;position: absolute;right: 5px;top: 3px" @click="removeOrderItem(index)"></i>
                <div>
                  <span class="color-muted">{{ item.time }}</span>
                </div>
                <div class="margin-top-5 font-size-14">
                  <div class="system-order-info-item-block">
                    <span class="color-muted" style="position: relative;top: -10px">{{$t('费用')}}:</span>
                    <div class="color-muted font-bold moon-content-text-ellipsis-class" style="max-width: 180px;position: relative;top:2px; display: inline-block">{{ item.typeStr }}</div>
                    <span class="color-success font-bold" style="position: relative;top: -10px">¥{{ item.amount }}</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <van-field :name="$t('供应商')" :label="$t('供应商')" @click="selBlockFun($t('供应商'),'gys')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.gys}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('供应商'),'gys')"/>
            </template>
          </van-field>
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
          <van-field :name="$t('关联单据')" :label="$t('关联单据')" @click="selBlockFun($t('关联单据'),'dj')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.dj}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('关联单据'),'dj')"/>
            </template>
          </van-field>
          <van-field :name="$t('关联项目')" :label="$t('关联项目')" @click="selBlockFun($t('关联项目'),'object')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.object}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('关联项目'),'object')"/>
            </template>
          </van-field>
          <van-field :name="$t('关联合同')" :label="$t('关联合同')" @click="selBlockFun($t('关联合同'),'ht')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.order}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('关联合同'),'ht')"/>
            </template>
          </van-field>
          <van-field :name="$t('关联款项')" :label="$t('关联款项')" @click="selBlockFun($t('关联款项'),'kx')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.kx}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('关联款项'),'kx')"/>
            </template>
          </van-field>
          <van-field :name="$t('标签')" :label="$t('标签')" @click="selBlockFun($t('标签'),'tag')">
            <template #input>
              <div class="margin-right-5 color-muted moon-content-text-ellipsis-class input-width">{{form.tag}}</div>
              <van-icon name="plus" size="20" class="color-muted" @click="selBlockFun($t('标签'),'tag')"/>
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
            <span class="color-success font-bold">¥{{moneyTotal}}</span>
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
              <van-button :loading="btnLoading" round size="small" block @click="saveForm(1)">{{$t("暂存")}}</van-button>
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

        <template v-if="pageType == 'ht'">
          <van-picker
            ref="htRef"
            :columns="tableHtData"
          />
        </template>

        <template v-if="pageType == 'dj'">
          <van-picker
            ref="djRef"
            :columns="tableDjData"
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

        <template v-if="pageType == 'kx'">
          <van-picker
            ref="kxRef"
            :columns="form.kxList"
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
    name: 'appSystemJKGL',
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
        tableDjData: [],
        tableTagData: [],
        tableGysData: [],
        tableKxData: [],
        searchTreeData: '',
        dataTreeList: [],
        defaultMenuActive: '',
        isCollapse: false,
        showBottom: false,
        showBottomPicker: false,
        showTimePicker: false,
        btnLoading: false,
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
        form: {
          title: '',
          user: '',
          userId: '',
          dept: '',
          deptId: '',
          des: '',
          fkTime: '',
          orderInfo: '',
          orderInfoList: [],
          hkTime: '',
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
          dj: '',
          djId: '',
          gys: '',
          gysId: '',
          kx: '',
          kxId: '',
          kxList: []
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
        this.init();
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
      async init(){
        await this.getSessionInfo();
        this.form.user = this.realName;
        this.form.userId = this.loginUserId;
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
      initHt(){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.ht_list, {params: params, loading:false}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              let payableDataList = [];
              if (res.data.data[i].payableDataList && res.data.data[i].payableDataList.length > 0){
                for (let j = 0; j < res.data.data[i].payableDataList.length; j++){
                  payableDataList.push({
                    label: "第"+res.data.data[i].payableDataList[j].stage+"期" + "("+"¥"+res.data.data[i].payableDataList[j].shouldAmount+")",
                    text: "第"+res.data.data[i].payableDataList[j].stage+"期" + "("+"¥"+res.data.data[i].payableDataList[j].shouldAmount+")",
                    value: res.data.data[i].payableDataList[j]._id,
                  });
                }
              }
              array.push({
                label: res.data.data[i]['applyData'] ? res.data.data[i]['applyData'].ht_name20230501.value : '',
                text: res.data.data[i]['applyData'] ? res.data.data[i]['applyData'].ht_name20230501.value : '',
                value: res.data.data[i]._id,
                kxList: payableDataList
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
                value: res.data.data[i].label_id
              });
            }
            this.tableTagData = array;
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
      async selBlockFun(data, type){
        this.pageType = type;
        this.pageTypeStr = data;
        if (type == 'user'){
          this.showBottomPicker = true;
        }else if (type == 'dept'){
          await this.getDeptInfo(0);
          this.dataTreeList = this.dataDept;
          this.dataModalList = this.dataModalBakList;
          this.showBottomPicker = true;
        }else if (type == 'fkTime' || type == 'hkTime'){
          this.showTimePicker = true;
        }else if (type == 'account'){
          this.initTeacherAccount();
          this.showBottomPicker = true;
        }else if (type == 'object'){
          this.initObject();
          this.showBottomPicker = true;
        }else if (type == 'ht'){
          this.initHt();
          this.showBottomPicker = true;
        }else if (type == 'dj'){
          this.tableDjData = this.filterBillTypes;
          this.showBottomPicker = true;
        }else if (type == 'gys'){
          this.initGys();
          this.showBottomPicker = true;
        }else if (type == 'kx'){

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
        }
      },
      jumpPage(id){
        let page = this.$route.query.pageParent ? this.$route.query.pageParent : '/app/appSystemMoneyForm';
        this.$router.push({
          name: 'app-appSystemOrderInfo',
          query: {
            id: id ? id : '',
            process: '',
            activeType: this.active,
            userType: this.loginUserAppType,
            navH: this.navHeight,
            appType: this.globalAppShow,
            page: '/app/appSystemDGDK',
            pageParent: page,
            name: 'app-appSystemDGDK'
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
        this.form.fileNames.splice(index, 1);
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
        if (this.pageType == 'fkTime'){
          this.form.fkTime = this.$moment(time).format("YYYY-MM-DD");
        }else if (this.pageType == 'hkTime'){
          this.form.hkTime = this.$moment(time).format("YYYY-MM-DD");
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

          this.form.dept = deptPathStr;
          this.form.deptId = deptPath.length > 0 ? JSON.parse(JSON.stringify(deptPath)).join() : '';
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
        }else if (this.pageType == 'ht'){
          if (this.$refs.htRef.getValues().length == 0 || (this.$refs.htRef.getValues().length > 0 && !this.$refs.htRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.orderId = this.$refs.htRef.getValues().length > 0 ? this.$refs.htRef.getValues()[0].value : '';
          this.form.order = this.$refs.htRef.getValues().length > 0 ? this.$refs.htRef.getValues()[0].label : '';
          this.form.kxList = this.$refs.htRef.getValues().length > 0 ? this.$refs.htRef.getValues()[0].kxList : [];

          this.form.kx = '';
          this.form.kxId = '';
        }else if (this.pageType == 'kx'){
          if (this.$refs.kxRef.getValues().length == 0 || (this.$refs.kxRef.getValues().length > 0 && !this.$refs.kxRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.kxId = this.$refs.kxRef.getValues().length > 0 ? this.$refs.kxRef.getValues()[0].value : '';
          this.form.kx = this.$refs.kxRef.getValues().length > 0 ? this.$refs.kxRef.getValues()[0].label : '';
        }else if (this.pageType == 'dj'){
          if (this.$refs.djRef.getValues().length == 0 || (this.$refs.djRef.getValues().length > 0 && !this.$refs.djRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.djId = this.$refs.djRef.getValues().length > 0 ? this.$refs.djRef.getValues()[0].value : '';
          this.form.dj = this.$refs.djRef.getValues().length > 0 ? this.$refs.djRef.getValues()[0].label : '';
        }else if (this.pageType == 'tag'){
          if (this.$refs.tagRef.getValues().length == 0 || (this.$refs.tagRef.getValues().length > 0 && !this.$refs.tagRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.tagId = this.$refs.tagRef.getValues().length > 0 ? this.$refs.tagRef.getValues()[0].value : '';
          this.form.tag = this.$refs.tagRef.getValues().length > 0 ? this.$refs.tagRef.getValues()[0].label : '';
        }else if (this.pageType == 'gys'){
          if (this.$refs.gysRef.getValues().length == 0 || (this.$refs.gysRef.getValues().length > 0 && !this.$refs.gysRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.gysId = this.$refs.gysRef.getValues().length > 0 ? this.$refs.gysRef.getValues()[0].value : '';
          this.form.gys = this.$refs.gysRef.getValues().length > 0 ? this.$refs.gysRef.getValues()[0].label : '';
        }else if (this.pageType == 'user'){
          if (this.$refs.teacherRef.getValues().length == 0 || (this.$refs.teacherRef.getValues().length > 0 && !this.$refs.teacherRef.getValues()[0])){
            Toast(this.$t("请选择信息!"));
            return;
          }
          this.form.userId = this.$refs.teacherRef.getValues().length > 0 ? this.$refs.teacherRef.getValues()[0].value : '';
          this.form.user = this.$refs.teacherRef.getValues().length > 0 ? this.$refs.teacherRef.getValues()[0].label : '';
        }
        this.showBottomPicker = false;
      },
      saveForm(type){
        this.$refs.form.validate().then(() => {
          if (this.form.orderInfoList.length == 0){
            Toast(this.$t("请设置单据明细"));
            return;
          }
          if (this.form.orderId != '' && this.form.kxId == ''){
            Toast(this.$t("请设置款项"));
            return;
          }
          let contentJson = [
            {
              field: 'fk_name20230501',
              value: this.form.title,
            },
            {
              field: 'fk_des20230501',
              value: this.form.des,
            },
            {
              field: 'fk_date20230501',
              value: this.form.fkTime,
            },
            {
              field: 'fk_files20230501',
              value: this.form.files,
              name: this.form.files
            },
            {
              field: 'apply_dept20230501',
              value: this.form.deptId,
              deptName: this.form.dept,
            },
            {
              field: 'apply_user20230501',
              value: this.form.userId,
              name: this.form.user,
            },
            {
              field: 'fk_date20230501',
              value: this.form.fkTime,
            },
            {
              field: 'tag_id20230501',
              value: this.form.tagId,
              name: this.form.tag
            },
            {
              field: 'xm_id20230501',
              value: this.form.objectId,
              name: this.form.object
            },
            {
              field: 'ht_id20230501',
              value: this.form.orderId,
              name: this.form.order
            },
            {
              field: 'ht_pay20230501',
              value: this.form.kxId,
              name: this.form.kx
            },
            {
              field: 'supplierId20230501',
              value: this.form.gysId,
              name: this.form.gys,
            },
            {
              field: 'rela_apply20230501',
              value: this.form.djId,
              name: this.form.dj,
            },
            {
              field: 'cost_info20230501',
              value: this.form.orderInfoList,
            }
          ];

          console.log(contentJson);
          let params = {
            formCode: 'DGDK',
            userId: this.form.userId,
          }

          let url = common.server_form_add;
          if (type == 1){
            params['submit'] = false;
          }else if (type == 2){
            params['submit'] = true;
          }
          params['applyContent'] = JSON.stringify(contentJson);
          if (this.form.id != ''){
            params['id'] = this.form.id;
          }
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
  border-radius: 5px;
  background: #f5f5f5;
  padding: 5px 10px;
  margin-bottom: 8px;
  position: relative;
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
</style>
