(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1262:function(t,e,l){"use strict";var o=l(52),n=l(36),r=l(264),c=l(78),d=l(56),f=l(99),h=l(719),v=l(208),m=l(37),x=l(265),C=l(209).f,_=l(98).f,k=l(63).f,y=l(720).trim,w=n.Number,S=w.prototype,D="Number"==f(x(S)),$=function(t){var e,l,o,n,r,c,d,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=y(f)).charCodeAt(0))||45===e){if(88===(l=f.charCodeAt(2))||120===l)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(c=(r=f.slice(2)).length,d=0;d<c;d++)if((code=r.charCodeAt(d))<48||code>n)return NaN;return parseInt(r,o)}return+f};if(r("Number",!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var I,T=function(t){var e=arguments.length<1?0:t,l=this;return l instanceof T&&(D?m((function(){S.valueOf.call(l)})):"Number"!=f(l))?h(new w($(e)),l,T):$(e)},N=o?C(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;N.length>O;O++)d(w,I=N[O])&&!d(T,I)&&k(T,I,_(w,I));T.prototype=S,S.constructor=T,c(n,"Number",T)}},1265:function(t,e,l){var content=l(1273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(62).default)("c787ca36",content,!0,{sourceMap:!1})},1266:function(t,e,l){var content=l(1276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(62).default)("0f28b138",content,!0,{sourceMap:!1})},1267:function(t,e,l){"use strict";l.r(e);var o=l(129),n=(l(47),l(22),{mixins:[o.a],props:{title:{default:"信息",type:String},visible:{default:!1,type:Boolean},direction:{default:"rtl",type:String},hideFooter:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},size:{defalult:"30%",type:String}},computed:{drawer_:{get:function(){return this.visible},set:function(t){this.$emit("changeDrawer",t)}}},data:function(){return{drawer:!1,dialogNormalVisible:!1,footer:!1,header:!1,drawerLoading:!1}},mounted:function(){this.dialogNormalVisible=this.visible,this.footer=void 0!==this.$slots.footer,this.header=void 0!==this.$slots.title},created:function(){},methods:{handleClose:function(data){this.$emit("right-close",data)},handleOk:function(data){this.$emit("ok",data)},handleCancel:function(data){this.$emit("cancel",data)},handleColse:function(data){this.$emit("close")}}}),r=(l(1272),l(45)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("el-drawer",{attrs:{tabindex:"0","custom-class":"drawer-normal-drawer",visible:t.drawer_,direction:t.direction,wrapperClosable:!0,"show-close":!1,"modal-append-to-body":!1,size:t.size},on:{"update:visible":function(e){t.drawer_=e},close:t.handleColse}},[l("div",{staticClass:"drawer-normal-title",attrs:{slot:"title"},slot:"title"},[l("span",{attrs:{tabindex:"1"}}),t._v(" "),t.header?l("div",[t._t("title")],2):l("el-row",[l("el-col",{attrs:{span:12}},[l("div",{staticClass:"drawer-normal-header"},[l("span",{staticClass:"title"},[t._v(t._s(t.title))])])]),t._v(" "),l("el-col",{attrs:{span:12}},[l("div",{staticClass:"drawer-normal-close text-right color-disabeld font-size-14"},[l("i",{staticClass:"fa fa-close",on:{click:t.handleClose}})])])],1)],1),t._v(" "),l("div",{staticClass:"drawer-normal-body",style:0==t.hideFooter?t.drawHeight:t.drawHeight2},[t._t("content")],2),t._v(" "),0==t.hideFooter?l("div",{staticClass:"drawer-normal-full-footer",attrs:{"hide-footer":t.hideFooter}},[t._t("footer")],2):t._e()])],1)}),[],!1,null,"372bfed0",null);e.default=component.exports},1269:function(t,e,l){"use strict";l.r(e);var o={name:"myServerDialog",components:{DialogNormal:l(721).default},props:{top:{default:"10vh",type:String},widthStyle:{default:"550px",type:String},title:{default:"信息",type:String},subTitle:{default:"",type:String},visible:{default:!1,type:Boolean},data:{type:Object}},computed:{selectModel:function(){this.value=this.selValue}},data:function(){return{value:""}},methods:{closeDialog:function(data){this.$emit("close",data)},handleBeforeClose:function(data){this.$emit("before-close",data)},handleClose:function(data){this.footer||0==this.showFooter?this.$emit("right-close",data):this.handleCancel()},handleOk:function(data){this.$emit("ok",data)},handleCancel:function(data){this.$emit("cancel",data)},detailClick:function(){this.$emit("detailClick",this.data)}}},n=l(45),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("dialog-normal",{attrs:{top:t.top,"width-style":t.widthStyle,visible:t.visible,"show-close":!1,"modal-append-to-body":!1,"show-footer":!1,"before-close":t.handleBeforeClose},on:{"update:visible":function(e){t.visible=e},close:t.closeDialog}},[l("div",{attrs:{slot:"title"},slot:"title"},[l("div",{staticClass:"dialog-header-block padding-lr-10"},[l("el-row",[l("el-col",{attrs:{span:18}},[l("div",{staticStyle:{height:"30px","line-height":"30px"}},[l("i",{staticClass:"fa fa-file-text color-warning"}),t._v(" "),l("span",[t._v(t._s(t.data.form_name))]),t._v(" "),l("span",{staticClass:"color-muted font-size-12 margin-left-10"},[l("label",{staticClass:"color-sub-title"},[t._v(t._s(t.$t("部门"))+":")]),t._v(" "),l("label",{staticClass:"moon-content-text-ellipsis-class",staticStyle:{width:"200px",display:"inline-block",position:"relative",top:"10px"}},[t._v(t._s(t.data.department_names))])]),t._v(" "),l("span",{staticClass:"color-muted font-size-12 margin-left-10"},[l("label",{staticClass:"color-sub-title"},[t._v(t._s(t.$t("类别"))+":")]),t._v(" "),l("label",[t._v(t._s(t.data.category_name))])])])]),t._v(" "),l("el-col",{attrs:{span:6}},[l("div",{staticClass:"text-right layout-inline font-size-12"},[l("span",{staticClass:"margin-left-10"},[l("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.closeDialog}},[t._v(t._s(t.$t("关闭")))]),t._v(" "),l("el-button",{attrs:{size:"mini",type:"success"},on:{click:t.detailClick}},[t._v(t._s(t.$t("业务办理")))])],1)])])],1)],1)]),t._v(" "),l("div",{staticClass:"custon-dialog-max-height"},[l("div",{staticClass:"margin-top-10 font-size-14"},[l("div",[l("span",{staticClass:"color-sub-title font-bold"},[t._v(t._s(t.$t("服务说明")))])]),t._v(" "),l("div",{staticClass:"line-height"})]),t._v(" "),l("div",{staticClass:"margin-top-10 color-sub-title font-size-14"},[l("div",{staticStyle:{"line-height":"30px","white-space":"pre-line"}},[l("pre",{staticStyle:{"white-space":"pre-wrap","word-wrap":"break-word"}},[t._v(t._s(t.data.des))])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogNormal:l(721).default})},1272:function(t,e,l){"use strict";var o=l(1265);l.n(o).a},1273:function(t,e,l){(e=l(61)(!1)).push([t.i,"",""]),t.exports=e},1275:function(t,e,l){"use strict";var o=l(1266);l.n(o).a},1276:function(t,e,l){(e=l(61)(!1)).push([t.i,".tree-el-tree-all[data-v-08190856]{background:rgba(242,246,252,.3);color:#606266}.tree-el-tree-all[data-v-08190856],.tree-el-tree-all-no[data-v-08190856]{height:25px;line-height:25px;padding:3px 10px;text-align:center;font-size:14px}.tree-el-tree-all-no[data-v-08190856]{color:#ddd}",""]),t.exports=e},1278:function(t,e,l){"use strict";l(163),l(162),l(1262),l(77);var o=l(15),n=l(47),r={name:"myElTree",mixins:[l(129).a],components:{},props:{selValue:{default:!1,type:[Boolean,Array,Number,String]},size:{defalult:"small",validate:function(t){return Object(n.f)(t,["large","medium","small","mini"])}},defaultCheckedKeys:{default:function(){return[]},type:Array},width:{default:"",type:[String,Number]},iconExtra:{default:"",type:String},iconPrefix:{default:"",type:String},showCheckbox:{default:!1,type:Boolean},opr:{default:!1,type:Boolean},type:{default:"",type:String},subType:{default:"1",type:String},extraType:{default:"",type:String},showCampus:{default:!0,type:Boolean}},computed:{selectModel:function(){this.dataCollege=this.setData(this.data)},setClass:function(){return[]}},data:function(){return{data:[],filterText:"",slotDefault:!1,slotTop:!1,nodeTreeCurrentId:"7",selectCampusAll:!0}},mounted:function(){this.slotDefault=void 0!==this.$slots.middle,this.slotTop=void 0!==this.$slots.top},created:function(){this.initInfo()},methods:{initInfo:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=t.type){e.next=6;break}return e.next=3,t.getCollegeInfo(t.subType);case 3:t.data=t.dataCollege,e.next=31;break;case 6:if(2!=t.type){e.next=12;break}return e.next=9,t.getDormBuildInfo(t.subType);case 9:t.data=t.dataDormBuild,e.next=31;break;case 12:if(3!=t.type){e.next=18;break}return e.next=15,t.getSchoolBuildInfo(t.subType);case 15:t.data=t.dataSchoolBuild,e.next=31;break;case 18:if(4!=t.type){e.next=24;break}return e.next=21,t.getDeptInfo(t.subType);case 21:t.data=t.dataDept,e.next=31;break;case 24:if(100!=t.type){e.next=27;break}e.next=31;break;case 27:if(110!=t.type){e.next=31;break}return e.next=30,t.getCategoryInfo();case 30:t.data=t.categorys;case 31:case"end":return e.stop()}}),e)})))()},filterNode:function(t,data){return!t||-1!==data.label.indexOf(t)},handleNodeClick:function(data){this.selectCampusAll=!1,this.$emit("node-click",data)},handleCheckChange:function(data,t,e){this.$emit("check-change",data,t,e)},nodeClickCampusAll:function(data){this.selectCampusAll=!0,this.$emit("all-click",data)}},watch:{filterText:function(t){this.$refs.tree.filter(t)},type:function(t){this.initInfo()},subType:function(t){this.initInfo()}}},c=(l(1275),l(45)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t.slotTop?l("div",{staticClass:"padding-tb-5 padding-lr-10"},[t._t("top")],2):t._e(),t._v(" "),t.slotDefault?l("div",{staticClass:"padding-tb-5 padding-lr-10"},[t._t("middle")],2):t._e(),t._v(" "),l("div",{staticClass:"tree-container custom-el-tree margin-top-5"},[t.showCampus?l("div",{staticClass:"text-center",class:1==t.selectCampusAll?"tree-el-tree-all":"tree-el-tree-all-no",on:{click:t.nodeClickCampusAll}},[t._v("\n      "+t._s(t.$t("全部"))+"\n    ")]):t._e(),t._v(" "),l("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:t.data,"show-checkbox":t.showCheckbox,"filter-node-method":t.filterNode,"default-checked-keys":t.defaultCheckedKeys,"node-key":"id","highlight-current":1!=t.selectCampusAll},on:{"node-click":t.handleNodeClick,"check-change":t.handleCheckChange}})],1)])}),[],!1,null,"08190856",null);e.a=component.exports},1280:function(t,e,l){var content=l(1316);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(62).default)("369dfe9a",content,!0,{sourceMap:!1})},1315:function(t,e,l){"use strict";var o=l(1280);l.n(o).a},1316:function(t,e,l){(e=l(61)(!1)).push([t.i,".block-left-item[data-v-d903337c],.block-right-item[data-v-d903337c]{margin:0 auto;height:100%;width:100%}.block-left-top-item[data-v-d903337c]{width:90%;margin:40px auto 0}.block-left-bottom-item[data-v-d903337c]{width:90%;margin:30px auto 0}.block-left-bottom-item[data-v-d903337c],.block-right-top-item[data-v-d903337c]{background:hsla(0,0%,100%,.4);box-shadow:0 0 10px #909399}.block-right-top-item[data-v-d903337c]{width:95%;margin:40px auto 0}.block-right-bottom-item[data-v-d903337c]{background:hsla(0,0%,100%,.4);width:95%;margin:30px auto 0;box-shadow:0 0 10px #909399}.block-logo-class[data-v-d903337c]{position:relative;top:40px}.block-logotext-class[data-v-d903337c]{position:relative;top:50px;font-size:16px}.block-item-title[data-v-d903337c]{height:40px;line-height:40px}.block-item-item[data-v-d903337c]{height:25px;line-height:25px}.block-icon-class[data-v-d903337c]{height:15px;width:15px;position:relative;top:3px}.block-item-left-tag-menu[data-v-d903337c]{width:140px;height:100%;background:rgba(96,98,102,.7)}.block-item-left-header[data-v-d903337c]{border-bottom:1px solid #c0c4cc}.block-item-left-header[data-v-d903337c],.block-item-left-header-item[data-v-d903337c]{height:40px;line-height:40px;font-size:12px;color:#fff}.block-item-left-header-item[data-v-d903337c]{text-align:center}.block-item-right-tag-content[data-v-d903337c]{margin-left:140px;height:100%}.block-item-header-tab[data-v-d903337c]{display:inline-block;padding:0 10px;cursor:default}.left-menu-active[data-v-d903337c]{background:rgba(242,246,252,.3);color:#606266}.tab-type-item[data-v-d903337c]{height:100%;width:100%;display:inline-block;color:#606266}.tab-type-item-active-left[data-v-d903337c]{background:#0cb5af;color:#fff}.tab-type-item-active-right[data-v-d903337c]{color:#fff}",""]),t.exports=e},1385:function(t,e,l){"use strict";l.r(e);l(77);var o=l(15),n=l(129),r=l(22),c=l(721),d=l(1278),f=l(1269),h=l(1267),v=l(47),m={name:"index",mixins:[n.a],components:{DrawerLayoutRight:h.default,MyServerDialog:f.default,MyElTree:d.a,DialogNormal:c.default},data:function(){return{activeTypeVal:"110",activeType:"110",activeTab:0,formCreateData:"",formCreateRuleData:[],formCreateOptionData:{},fApi:{},formCreateTitleData:"",formCreateIdData:"",fromCreateOptions:"",fromCreateBtnText:"",fromCreateBtnShow:!0,dialogServer:!1,dialogServerDetail:!1,btnLoading:!1,customUserStatus:!1,testArea:"",activeMenu:"",treeId:"",serverDetailData:{},auditUsers:[],auditSelUser:[]}},mounted:function(){},created:function(){this.appletType=this.activeTab,this.initCategoryList(),this.initDeptList(),this.initServer(),this.initApplet(),this.initRecommend(),this.$parent.$parent.searchServerBlock=!0},methods:{layoutInit:function(){},initAuditUser:function(t){var e=this,l={id:t};this.$axios.get(r.a.server_form_allInfo,{params:l}).then((function(t){if(200==t.data.code){var l=[];console.log(t.data.data);var o=t.data.data.processList;e.customUserStatus=!1;for(var i=0;i<o.length;i++)if("CustomUser"==o[i].htype){for(var n=o[i].hid,r=o[i].hname,c=0;c<n.length;c++)l.push({label:r[c],value:n[c],text:r[c]});e.customUserStatus=!0}e.auditUsers=l}}))},tabClick:function(data){this.activeTab=data,this.appletType=data,this.initServer()},menuClick:function(t,e){e.active=!0},serverClick:function(t,e){this.serverDetailData=e,this.dialogServer=!0},closeDialog:function(t){this.dialogServer=!1},closeDetailDialog:function(){this.formCreateRuleData=[],this.formCreateOptionData={},this.auditSelUser=[],this.auditUsers=[],this.customUserStatus=!1,this.btnLoading=!1,this.dialogServerDetail=!1},cancelDialog:function(){this.dialogServer=!1},cancelDrawDialog:function(){this.dialogServerDetail=!1},detailClick:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",e.next=3,t.getSessionInfo();case 3:t.formCreateTitleData=data.form_name,t.formCreateIdData=data.id,t.fromCreateBtnShow=data.submit_button,t.fromCreateBtnText=""!=data.button_name?data.button_name:t.$t("提交"),null!=data.form_content&&""!=data.form_content&&(t.formCreateRuleData=JSON.parse(data.form_content).rule,t.formCreateOptionData=JSON.parse(data.form_content).option),t.initAuditUser(data.id),t.dialogServerDetail=!0;case 10:case"end":return e.stop()}}),e)})))()},selMenu:function(t,e){this.activeMenu="",e&&(this.activeMenu=e.id),this.appletId=e.id,this.initServer()},selType:function(t){this.activeType=t+"",this.activeTypeVal=t+"",this.appletId="",this.departmentPath="",this.appletType=this.activeTab},nodeClick:function(data){110==this.activeType?this.appletId=data.id:this.departmentPath=data.department_path,this.appletType=this.activeTab,this.initServer()},dropdownItem:function(t,e,l){this.categoryId=e.id,this.initServer()},handleFormCancel:function(){this.dialogServerDetail=!1},handleFormOk:function(){var t=this;this.fApi.submit((function(e,l){var o;if(0!=t.auditSelUser.length||1!=t.customUserStatus){var n={appletFormId:t.formCreateIdData,userId:t.loginUserId,customHandleUserIds:JSON.stringify(t.auditSelUser)},c=l.rule,d=t.setRuleChild(c,[]);n.applyContent=JSON.stringify(d),o=r.a.server_form_add,n=t.$qs.stringify(n),t.btnLoading=!0,t.$axios.post(o,n,{loading:!1}).then((function(e){200==e.data.code?(t.dialogServerDetail=!1,Object(v.b)(e.data.desc)):Object(v.a)(e.data.desc),t.btnLoading=!1}))}else Object(v.c)(t.$t("请选择审批人！"))}))},setRuleChild:function(t,e){for(var l={},i=0;i<t.length;i++)t[i].children&&t[i].children.length>0?this.setRuleChild(t[i].children,e):t[i].field&&(l={field:t[i].field,title:t[i].title,type:t[i].type,value:t[i].value},e.push(l));return e}}},x=(l(1315),l(45)),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{ref:"indexRef",staticClass:"container"},[l("div",{staticClass:"pull-left block-left",style:t.divHeight},[l("div",{staticClass:"block-left-top-item",style:{height:.43*t.divHeight.height1+"px"}},[l("div",[l("div",{staticClass:"text-center block-logo-class",style:{top:.43*t.divHeight.height1*.27+"px"}},[l("el-avatar",{attrs:{size:100,src:t.campusLogo}})],1),t._v(" "),l("div",{staticClass:"text-center color-muted font-bold block-logotext-class",style:{top:.43*t.divHeight.height1*.27+"px"}},[t._v("\n            "+t._s(t.$t("网上办事大厅"))+"\n          ")])])]),t._v(" "),l("div",{staticClass:"block-left-bottom-item",style:{height:.4*t.divHeight.height1+"px"}},[l("div",{staticClass:"block-item-title padding-lr-10"},[l("el-row",[l("el-col",{attrs:{span:12}},[l("div",{staticClass:"color-muted font-bold font-size-12"},[l("span",[l("i",{staticClass:"fa fa-volume-up"}),t._v(" "),l("label",[t._v(t._s(t.$t("通知公告")))])])])]),t._v(" "),l("el-col",{attrs:{span:12}},[l("div",{staticClass:"color-grand font-bold font-size-12 text-right"},[l("span",[l("label",[t._v(t._s(t.$t("更多")))]),t._v(" "),l("i",{staticClass:"fa fa-list"})])])])],1)],1),t._v(" "),l("div",{staticClass:"margin-top-10 padding-lr-10 font-size-12 color-white"},[l("div",{staticClass:"block-item-item"},t._l(t.noticeDataList,(function(e,o){return l("el-row",{key:o},[l("el-col",{attrs:{span:16}},[l("div",{staticClass:"moon-content-text-ellipsis-class"},[l("span",[l("i",{staticClass:"fa fa-volume-up"}),t._v(" "),l("label",[t._v("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")])])])]),t._v(" "),l("el-col",{staticClass:"text-right",attrs:{span:8}},[l("span",[t._v("2022-11-11")])])],1)})),1)])])]),t._v(" "),l("div",{staticClass:"block-right",style:t.divHeight},[l("div",{staticClass:"block-right-top-item",style:{height:.43*t.divHeight.height1+"px"}},[l("div",[l("div",{staticClass:"pull-left block-item-left-tag-menu"},[l("div",{staticClass:"block-item-left-header text-center"},[l("label",{staticClass:"font-size-12"},[t._v("\n                "+t._s(t.$t("部门筛选"))+"\n              ")])]),t._v(" "),l("div",{style:{height:.43*t.divHeight.height1-40+"px",overflowY:"auto"}},[l("div",{staticClass:"block-item-left-header-item",class:""===t.activeMenu?"left-menu-active":"",on:{click:function(e){return t.selMenu(e,"")}}},[l("span",[t._v(t._s(t.$t("全部")))])]),t._v(" "),t._l(t.deptMixinsList,(function(e,o){return l("div",{key:o,staticClass:"block-item-left-header-item moon-content-text-ellipsis-class",class:t.activeMenu===e.id?"left-menu-active":"",on:{click:function(l){return t.selMenu(l,e)}}},[l("span",[t._v(t._s(e.departmentName))])])}))],2)]),t._v(" "),l("div",{staticClass:"block-item-right-tag-content",style:{height:.43*t.divHeight.height1+"px"}},[l("div",{staticClass:"block-item-left-header"},[l("el-row",[l("el-col",{attrs:{span:20}},[l("span",{staticClass:"font-bold block-item-header-tab",class:0===t.activeTab?"color-grand":"color-muted",on:{click:function(e){return t.tabClick(0)}}},[l("i",{staticClass:"fa fa-user"}),t._v("\n                    "+t._s(t.$t("学生办事"))+"\n                  ")]),t._v(" "),l("span",{staticClass:"font-bold block-item-header-tab",class:1===t.activeTab?"color-grand":"color-muted",on:{click:function(e){return t.tabClick(1)}}},[l("i",{staticClass:"fa fa-users"}),t._v("\n                    "+t._s(t.$t("老师办事"))+"\n                  ")]),t._v(" "),l("span",{staticClass:"font-bold block-item-header-tab",class:2===t.activeTab?"color-grand":"color-muted",on:{click:function(e){return t.tabClick(2)}}},[l("i",{staticClass:"fa fa-flag"}),t._v("\n                    "+t._s(t.$t("单位办事"))+"\n                  ")])]),t._v(" "),l("el-col",{staticClass:"text-right",staticStyle:{position:"relative"},attrs:{span:4}},[l("span",{staticClass:"margin-right-20"},[l("el-dropdown",{staticClass:"custon-el-dropdown-block",attrs:{trigger:"click",type:"default",size:"mini",placement:"bottom","split-button":""}},[l("label",{staticClass:"font-size-12 color-muted"},[t._v("\n                        "+t._s(t.$t("类别"))+"\n                      ")]),t._v(" "),l("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[l("div",{staticStyle:{height:"200px","overflow-y":"auto"}},[l("el-dropdown-item",{nativeOn:{click:function(e){return t.dropdownItem(e,"all",1)}}},[t._v(t._s(t.$t("全部")))]),t._v(" "),t._l(t.categoryMixinsList,(function(e,o){return l("el-dropdown-item",{key:o,nativeOn:{click:function(l){return t.dropdownItem(l,e,1)}}},[t._v(t._s(e.categoryName))])}))],2)])],1)],1)])],1)],1),t._v(" "),l("div",{staticClass:"padding-lr-10 padding-tb-10",style:{height:.43*t.divHeight.height1-62+"px","overflow-y":"auto"}},[l("el-row",{attrs:{gutter:16}},t._l(t.serverDataList,(function(e,o){return l("el-col",{key:o,staticClass:"margin-bottom-20",attrs:{span:6},nativeOn:{click:function(l){return t.serverClick(l,e)}}},[l("el-card",{attrs:{shadow:"always","body-style":{padding:"12px",background:"#EBEEF5"}}},[l("div",{staticClass:"moon-content-text-ellipsis-class"},[l("el-image",{staticClass:"block-icon-class",attrs:{src:e.form_logo}},[l("div",{staticClass:"block-icon-class",attrs:{slot:"error"},slot:"error"},[l("i",{staticClass:"el-icon-picture-outline font-size-15"})])]),t._v(" "),l("span",[t._v("\n                        "+t._s(e.form_name)+"\n                      ")])],1)])],1)})),1)],1)])]),t._v(" "),l("div",{staticClass:"moon-clearfix"})]),t._v(" "),l("div",{staticClass:"block-right-bottom-item",style:{height:.4*t.divHeight.height1+"px"}},[l("div",{staticClass:"block-item-title padding-lr-10"},[l("el-row",[l("el-col",{attrs:{span:24}},[l("div",{staticClass:"color-muted font-bold font-size-12"},[l("span",[l("i",{staticClass:"fa fa-map"}),t._v(" "),l("label",[t._v(t._s(t.$t("推荐服务")))])])])])],1)],1),t._v(" "),l("div",{staticClass:"padding-lr-10 padding-tb-10 font-size-12 color-white",style:{height:.4*t.divHeight.height1-60+"px",overflowY:"auto"}},[l("el-row",{attrs:{gutter:16}},t._l(t.recommends,(function(e,o){return l("el-col",{key:o,staticClass:"margin-bottom-20",attrs:{span:4},nativeOn:{click:function(l){return t.serverClick(l,e)}}},[l("el-card",{attrs:{shadow:"always","body-style":{padding:"12px",background:"#EBEEF5"}}},[l("div",{staticClass:"moon-content-text-ellipsis-class"},[l("el-image",{staticClass:"block-icon-class",attrs:{src:e.form_logo}},[l("div",{staticClass:"block-icon-class",attrs:{slot:"error"},slot:"error"},[l("i",{staticClass:"el-icon-picture-outline font-size-15"})])]),t._v(" "),l("span",[t._v("\n                    "+t._s(e.form_name)+"\n                  ")])],1)])],1)})),1)],1)])]),t._v(" "),l("div",{staticClass:"moon-clearfix"}),t._v(" "),l("my-server-dialog",{attrs:{visible:t.dialogServer,"width-style":"850px",data:t.serverDetailData},on:{close:t.closeDialog,detailClick:t.detailClick}}),t._v(" "),l("drawer-layout-right",{attrs:{tabindex:"0",visible:t.dialogServerDetail,size:"700px",title:t.formCreateTitleData},on:{changeDrawer:t.closeDetailDialog,"right-close":t.cancelDrawDialog}},[l("div",{staticClass:"color-muted",attrs:{slot:"content"},slot:"content"},[""!=t.formCreateRuleData?l("form-create",{attrs:{rule:t.formCreateRuleData,option:t.formCreateOptionData},model:{value:t.fApi,callback:function(e){t.fApi=e},expression:"fApi"}}):t._e()],1),t._v(" "),l("div",{attrs:{slot:"footer"},slot:"footer"},[l("div",{staticClass:"text-right padding-lr-10"},[1==t.customUserStatus?[l("span",[t._v(t._s(t.$t("审批人")))]),t._v(":\n            "),l("el-select",{attrs:{size:"mini",multiple:"","collapse-tags":"",placeholder:"请选择审批人"},model:{value:t.auditSelUser,callback:function(e){t.auditSelUser=e},expression:"auditSelUser"}},t._l(t.auditUsers,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)]:t._e(),t._v(" "),l("el-button",{attrs:{size:"small"},on:{click:t.handleFormCancel}},[t._v("取 消")]),t._v(" "),1==t.fromCreateBtnShow?l("el-button",{attrs:{size:"small",type:"primary",loading:t.btnLoading},on:{click:t.handleFormOk}},[t._v("\n            "+t._s(t.fromCreateBtnText)+"\n          ")]):t._e()],2)])])],1)}),[],!1,null,"d903337c",null);e.default=component.exports;installComponents(component,{MyServerDialog:l(1269).default,DrawerLayoutRight:l(1267).default})}}]);