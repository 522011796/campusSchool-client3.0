(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1262:function(t,e,l){"use strict";var n=l(52),o=l(36),r=l(264),c=l(78),d=l(56),v=l(99),_=l(719),m=l(208),h=l(37),f=l(265),x=l(209).f,C=l(98).f,w=l(63).f,y=l(720).trim,k=o.Number,$=k.prototype,S="Number"==v(f($)),D=function(t){var e,l,n,o,r,c,d,code,v=m(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=y(v)).charCodeAt(0))||45===e){if(88===(l=v.charCodeAt(2))||120===l)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+v}for(c=(r=v.slice(2)).length,d=0;d<c;d++)if((code=r.charCodeAt(d))<48||code>o)return NaN;return parseInt(r,n)}return+v};if(r("Number",!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var z,N=function(t){var e=arguments.length<1?0:t,l=this;return l instanceof N&&(S?h((function(){$.valueOf.call(l)})):"Number"!=v(l))?_(new k(D(e)),l,N):D(e)},A=n?x(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;A.length>M;M++)d(k,z=A[M])&&!d(N,z)&&w(N,z,C(k,z));N.prototype=$,$.constructor=N,c(o,"Number",N)}},1265:function(t,e,l){var content=l(1273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(62).default)("c787ca36",content,!0,{sourceMap:!1})},1267:function(t,e,l){"use strict";l.r(e);var n=l(129),o=(l(47),l(22),{mixins:[n.a],props:{title:{default:"信息",type:String},visible:{default:!1,type:Boolean},direction:{default:"rtl",type:String},hideFooter:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},size:{defalult:"30%",type:String}},computed:{drawer_:{get:function(){return this.visible},set:function(t){this.$emit("changeDrawer",t)}}},data:function(){return{drawer:!1,dialogNormalVisible:!1,footer:!1,header:!1,drawerLoading:!1}},mounted:function(){this.dialogNormalVisible=this.visible,this.footer=void 0!==this.$slots.footer,this.header=void 0!==this.$slots.title},created:function(){},methods:{handleClose:function(data){this.$emit("right-close",data)},handleOk:function(data){this.$emit("ok",data)},handleCancel:function(data){this.$emit("cancel",data)},handleColse:function(data){this.$emit("close")}}}),r=(l(1272),l(45)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("el-drawer",{attrs:{tabindex:"0","custom-class":"drawer-normal-drawer",visible:t.drawer_,direction:t.direction,wrapperClosable:!0,"show-close":!1,"modal-append-to-body":!1,size:t.size},on:{"update:visible":function(e){t.drawer_=e},close:t.handleColse}},[l("div",{staticClass:"drawer-normal-title",attrs:{slot:"title"},slot:"title"},[l("span",{attrs:{tabindex:"1"}}),t._v(" "),t.header?l("div",[t._t("title")],2):l("el-row",[l("el-col",{attrs:{span:12}},[l("div",{staticClass:"drawer-normal-header"},[l("span",{staticClass:"title"},[t._v(t._s(t.title))])])]),t._v(" "),l("el-col",{attrs:{span:12}},[l("div",{staticClass:"drawer-normal-close text-right color-disabeld font-size-14"},[l("i",{staticClass:"fa fa-close",on:{click:t.handleClose}})])])],1)],1),t._v(" "),l("div",{staticClass:"drawer-normal-body",style:0==t.hideFooter?t.drawHeight:t.drawHeight2},[t._t("content")],2),t._v(" "),0==t.hideFooter?l("div",{staticClass:"drawer-normal-full-footer",attrs:{"hide-footer":t.hideFooter}},[t._t("footer")],2):t._e()])],1)}),[],!1,null,"372bfed0",null);e.default=component.exports},1268:function(t,e,l){t.exports=l.p+"img/empty.6563e4b.png"},1269:function(t,e,l){"use strict";l.r(e);var n={name:"myServerDialog",components:{DialogNormal:l(721).default},props:{top:{default:"10vh",type:String},widthStyle:{default:"550px",type:String},title:{default:"信息",type:String},subTitle:{default:"",type:String},visible:{default:!1,type:Boolean},data:{type:Object}},computed:{selectModel:function(){this.value=this.selValue}},data:function(){return{value:""}},methods:{closeDialog:function(data){this.$emit("close",data)},handleBeforeClose:function(data){this.$emit("before-close",data)},handleClose:function(data){this.footer||0==this.showFooter?this.$emit("right-close",data):this.handleCancel()},handleOk:function(data){this.$emit("ok",data)},handleCancel:function(data){this.$emit("cancel",data)},detailClick:function(){this.$emit("detailClick",this.data)}}},o=l(45),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("dialog-normal",{attrs:{top:t.top,"width-style":t.widthStyle,visible:t.visible,"show-close":!1,"modal-append-to-body":!1,"show-footer":!1,"before-close":t.handleBeforeClose},on:{"update:visible":function(e){t.visible=e},close:t.closeDialog}},[l("div",{attrs:{slot:"title"},slot:"title"},[l("div",{staticClass:"dialog-header-block padding-lr-10"},[l("el-row",[l("el-col",{attrs:{span:18}},[l("div",{staticStyle:{height:"30px","line-height":"30px"}},[l("i",{staticClass:"fa fa-file-text color-warning"}),t._v(" "),l("span",[t._v(t._s(t.data.form_name))]),t._v(" "),l("span",{staticClass:"color-muted font-size-12 margin-left-10"},[l("label",{staticClass:"color-sub-title"},[t._v(t._s(t.$t("部门"))+":")]),t._v(" "),l("label",{staticClass:"moon-content-text-ellipsis-class",staticStyle:{width:"200px",display:"inline-block",position:"relative",top:"10px"}},[t._v(t._s(t.data.department_names))])]),t._v(" "),l("span",{staticClass:"color-muted font-size-12 margin-left-10"},[l("label",{staticClass:"color-sub-title"},[t._v(t._s(t.$t("类别"))+":")]),t._v(" "),l("label",[t._v(t._s(t.data.category_name))])])])]),t._v(" "),l("el-col",{attrs:{span:6}},[l("div",{staticClass:"text-right layout-inline font-size-12"},[l("span",{staticClass:"margin-left-10"},[l("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.closeDialog}},[t._v(t._s(t.$t("关闭")))]),t._v(" "),l("el-button",{attrs:{size:"mini",type:"success"},on:{click:t.detailClick}},[t._v(t._s(t.$t("业务办理")))])],1)])])],1)],1)]),t._v(" "),l("div",{staticClass:"custon-dialog-max-height"},[l("div",{staticClass:"margin-top-10 font-size-14"},[l("div",[l("span",{staticClass:"color-sub-title font-bold"},[t._v(t._s(t.$t("服务说明")))])]),t._v(" "),l("div",{staticClass:"line-height"})]),t._v(" "),l("div",{staticClass:"margin-top-10 color-sub-title font-size-14"},[l("div",{staticStyle:{"line-height":"30px","white-space":"pre-line"}},[l("pre",{staticStyle:{"white-space":"pre-wrap","word-wrap":"break-word"}},[t._v(t._s(t.data.des))])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogNormal:l(721).default})},1272:function(t,e,l){"use strict";var n=l(1265);l.n(n).a},1273:function(t,e,l){(e=l(61)(!1)).push([t.i,"",""]),t.exports=e},1284:function(t,e,l){var content=l(1329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(62).default)("2fef2fcc",content,!0,{sourceMap:!1})},1285:function(t,e,l){var content=l(1331);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(62).default)("26b67d13",content,!0,{sourceMap:!1})},1328:function(t,e,l){"use strict";var n=l(1284);l.n(n).a},1329:function(t,e,l){(e=l(61)(!1)).push([t.i,".block-left-item[data-v-218583d8],.block-right-item[data-v-218583d8]{margin:0 auto;height:100%;width:100%}.block-left-top-item[data-v-218583d8]{background:hsla(0,0%,100%,.9);width:90%;margin:40px auto 0}.block-left-bottom-item[data-v-218583d8]{background:hsla(0,0%,100%,.9);width:90%;margin:30px auto 0;box-shadow:0 0 10px #909399}.block-right-top-item[data-v-218583d8]{margin:40px auto 0}.block-right-bottom-item[data-v-218583d8],.block-right-top-item[data-v-218583d8]{background:hsla(0,0%,100%,.9);width:95%;box-shadow:0 0 10px #909399}.block-right-bottom-item[data-v-218583d8]{margin:30px auto 0}.block-logo-class[data-v-218583d8]{position:relative;top:40px}.block-logotext-class[data-v-218583d8]{position:relative;top:50px;font-size:16px}.block-item-title[data-v-218583d8]{height:40px;line-height:40px;border-bottom:1px solid #c0c4cc}.block-item-item[data-v-218583d8]{height:35px;line-height:35px}.block-icon1-class[data-v-218583d8],.block-icon-class[data-v-218583d8]{height:15px;width:15px;position:relative;top:3px}.block-item-left-tag-menu[data-v-218583d8]{width:140px;height:100%;background:hsla(0,0%,96.5%,.9)}.block-item-left-header[data-v-218583d8]{height:44px;line-height:44px;font-size:12px;border-bottom:1px solid #ebeef5}.block-item-left-header-item[data-v-218583d8]{height:40px;line-height:40px;font-size:12px;text-align:center;font-weight:700}.block-item-right-tag-content[data-v-218583d8]{margin-left:140px;height:100%}.block-item-header-tab[data-v-218583d8]{display:inline-block;padding:0 10px;cursor:default}.left-menu-active[data-v-218583d8]{background:rgba(0,160,233,.8);color:#fff}.detail-block-title[data-v-218583d8]{border-radius:5px;background:#f6f6f6}.title-block-tag[data-v-218583d8]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-218583d8]{font-weight:700;position:relative;top:-5px}.block-item-row[data-v-218583d8]{height:35px;line-height:35px}",""]),t.exports=e},1330:function(t,e,l){"use strict";var n=l(1285);l.n(n).a},1331:function(t,e,l){(e=l(61)(!1)).push([t.i,".pagination-jump[data-v-161395fe]{display:inline-block;font-size:13px;height:28px;line-height:28px;vertical-align:top;box-sizing:border-box;font-weight:400;position:relative;top:1px;padding:0 0 0 8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#606266}",""]),t.exports=e},1380:function(t,e,l){"use strict";l.r(e);l(1262);var n={name:"myPagination",props:{pageSizes:{default:function(){return[10,20,30,50,100]},type:Array},pageSize:{default:20,type:Number},total:{default:0,type:Number},currentPage:{default:1,type:Number},background:{default:!0,type:Boolean},small:{default:!1,type:Boolean},showJump:{default:!0,type:Boolean},layout:{default:"total, sizes, prev, pager, next, jumper, slot",type:String}},data:function(){return{}},methods:{handleSizeChange:function(data){this.$emit("sizeChange",data)},handleCurrentChange:function(data){this.$emit("currentPage",data)},handleJumpSizeChange:function(data){this.$emit("jumpChange",this.currentPage)}}},o=(l(1330),l(45)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-pagination",{ref:"paginationRef",attrs:{"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,layout:t.layout,total:t.total,background:t.background,small:t.small},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},[1==t.showJump?l("label",{staticClass:"pagination-jump",on:{click:t.handleJumpSizeChange}},[t._v(t._s(t.$t("跳转")))]):t._e()])],1)}),[],!1,null,"161395fe",null);e.default=component.exports},1389:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"margin-top-30"},[e("img",{staticStyle:{width:"100px",height:"60px"},attrs:{src:l(1268)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"margin-top-30"},[e("img",{staticStyle:{width:"100px",height:"60px"},attrs:{src:l(1268)}})])}],o=(l(77),l(15)),r=l(129),c=l(22),d=l(721),v=l(47),_=l(127),m={name:"index",mixins:[r.a],components:{DialogNormal:d.default},data:function(){return{activeTab:1,activeMenu:1,auditStatus:1,dialogServer:!1,dialogServerDetail:!1,drawerPayVisible:!1,testArea:"",collectionList:[],noticeList:[],auditList:[],tableData:[],tableSignData:[],detailData:"",detailApplyContentData:[],detailApplyAuditList:[],textarea:"",visibleOk:!1,visibleNo:!1,serverDetailData:{},show:!1,index:0,detailApplyAuditUserData:{}}},mounted:function(){this.$nextTick((function(){}))},created:function(){this.initAuditList(),this.init(),this.$parent.$parent.searchServerBlock=!1},methods:{layoutInit:function(){},init:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getSessionInfo();case 2:case"end":return e.stop()}}),e)})))()},initAuditList:function(){var t=this,e={page:this.page,num:this.num,queryApplyListType:this.activeMenu};this.$axios.get(c.a.server_form_audit_page,{params:e}).then((function(e){200==e.data.code&&e.data.data&&(t.tableData=e.data.data.list,t.total=e.data.data.total,t.num=e.data.data.num,t.page=e.data.data.page)}))},initAuditDetailList:function(t){var e=this,l={id:t};this.$axios.get(c.a.server_form_audit_query,{params:l}).then((function(t){if(200==t.data.code&&t.data.data){e.detailApplyAuditList=t.data.data.handleList;for(var l=t.data.data.orderIndex,i=0;i<t.data.data.handleList.length;i++)t.data.data.handleList[i].orderIndex==l&&(e.detailApplyAuditUserData={agreen1:t.data.data.handleList[i].agreed1,notagreed1:t.data.data.handleList[i].notagreed1});console.log(e.detailApplyAuditUserData)}}))},tabClick:function(data){this.activeTab=data},menuClick:function(t,e){e.active=!0},serverClick:function(t,e){this.serverDetailData=e,this.dialogServer=!0},closeDialog:function(t){this.detailData="",this.detailApplyContentData=[],this.detailApplyAuditList=[],this.dialogServer=!1,this.dialogServerDetail=!1,this.drawerPayVisible=!1},cancelDialog:function(){this.dialogServer=!1},cancelDrawDialog:function(){this.dialogServerDetail=!1},sizeChange:function(t){this.page=1,this.num=t,this.initAuditList()},currentPage:function(t){this.page=t,this.initAuditList()},jumpPage:function(data){this.page=data,this.initAuditList()},detailClick:function(t,e){this.detailData=e,e.applyContent&&"[]"!=e.applyContent&&(this.detailApplyContentData=JSON.parse(e.applyContent)),this.initAuditDetailList(e._id),this.dialogServerDetail=!0},activeMenuClick:function(t,e){this.activeMenu=e,this.page=1,this.initAuditList()},printManage:function(t,e){window.open("/formPrint?serverId="+e._id+"&title="+e.formName+"&time="+this.$moment().format("YYYY-MM-DD HH:mm:ss"),"_blank")},readFile:function(t){Object(_.a)({images:[t],closeable:!1})},cancelPop:function(){this.textarea="",this.visibleOk=!1,this.visibleNo=!1},handleCancel:function(){this.dialogServerDetail=!1},handleOk:function(t,data,e){var l=this,n={id:data._id,status:e,des:this.textarea};n=this.$qs.stringify(n),this.$axios.post(c.a.server_form_audit_handle,n).then((function(t){200==t.data.code?(l.initAuditList(),l.dialogServerDetail=!1,Object(v.b)(t.data.desc)):Object(v.a)(t.data.desc)}))}}},h=(l(1328),l(45)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{ref:"myInfoRef",staticClass:"container"},[l("div",{staticClass:"pull-left block-left",style:t.divHeight},[l("div",{staticClass:"block-left-top-item",style:{height:.43*t.divHeight.height1+"px"}},[l("div",{staticClass:"block-item-title padding-lr-10"},[l("el-row",[l("el-col",{attrs:{span:24}},[l("div",{staticClass:"color-muted font-bold font-size-12"},[l("span",[l("i",{staticClass:"fa fa-volume-up"}),t._v(" "),l("label",[t._v(t._s(t.$t("我的收藏")))])])])])],1)],1),t._v(" "),l("div",{staticClass:"margin-top-10 padding-lr-10 font-size-12 color-white",style:{height:.43*t.divHeight.height1-60+"px","overflow-y":"auto"}},[0==t.collectionList.length?l("div",{staticClass:"text-center"},[t._m(0),t._v(" "),l("div",{staticClass:"margin-top-10"},[l("span",{staticClass:"color-muted"},[t._v(t._s(t.$t("暂无数据")))])])]):t._e(),t._v(" "),t._l(t.collectionList,(function(e,n){return t.collectionList.length>0?l("div",{key:n,staticClass:"block-item-item color-sub-title border-bottom-1"},[l("el-row",[l("el-col",{attrs:{span:16}},[l("div",{staticClass:"moon-content-text-ellipsis-class"},[l("img",{staticClass:"block-icon1-class",attrs:{src:""}}),t._v(" "),l("label",[t._v("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")])])]),t._v(" "),l("el-col",{staticClass:"text-right",attrs:{span:8}},[l("span",{staticClass:"color-grand font-bold"},[t._v(t._s(t.$t("进入")))])])],1)],1):t._e()}))],2)]),t._v(" "),l("div",{staticClass:"block-left-bottom-item",style:{height:.4*t.divHeight.height1+"px"}},[l("div",{staticClass:"block-item-title padding-lr-10"},[l("el-row",[l("el-col",{attrs:{span:12}},[l("div",{staticClass:"color-muted font-bold font-size-12"},[l("span",[l("i",{staticClass:"fa fa-volume-up"}),t._v(" "),l("label",[t._v(t._s(t.$t("通知公告")))])])])]),t._v(" "),l("el-col",{attrs:{span:12}},[l("div",{staticClass:"color-grand font-bold font-size-12 text-right"},[l("span",[l("label",[t._v(t._s(t.$t("更多")))]),t._v(" "),l("i",{staticClass:"fa fa-list"})])])])],1)],1),t._v(" "),l("div",{staticClass:"margin-top-10 padding-lr-10 font-size-12 color-white",style:{height:.43*t.divHeight.height1-70+"px","overflow-y":"auto"}},[0==t.noticeList.length?l("div",{staticClass:"text-center"},[t._m(1),t._v(" "),l("div",{staticClass:"margin-top-10"},[l("span",{staticClass:"color-muted"},[t._v(t._s(t.$t("暂无数据")))])])]):t._e(),t._v(" "),t._l(t.noticeList,(function(e,n){return t.noticeList.length>0?l("div",{key:n,staticClass:"block-item-item color-sub-title"},[l("el-row",[l("el-col",{attrs:{span:16}},[l("div",{staticClass:"moon-content-text-ellipsis-class"},[l("span",[l("i",{staticClass:"fa fa-volume-up"}),t._v(" "),l("label",[t._v("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")])])])]),t._v(" "),l("el-col",{staticClass:"text-right",attrs:{span:8}},[l("span",[t._v("2022-11-11")])])],1)],1):t._e()}))],2)])]),t._v(" "),l("div",{staticClass:"block-right",style:t.divHeight},[l("div",{staticClass:"block-right-top-item",style:{height:.86*t.divHeight.height1+10+"px"}},[l("div",[l("div",{staticClass:"pull-left block-item-left-tag-menu"},[l("div",{staticClass:"block-item-left-header text-center color-sub-title"},[l("i",{staticClass:"fa fa-user"}),t._v(" "),l("span",[t._v(t._s(t.$t("个人中心")))])]),t._v(" "),l("div",{style:{height:.86*t.divHeight.height1-35+"px",overflowY:"auto"}},[l("div",{staticClass:"block-item-left-header-item",class:1==t.activeMenu?"left-menu-active":"",on:{click:function(e){return t.activeMenuClick(e,1)}}},[l("span",[t._v(t._s(t.$t("我待办的")))])]),t._v(" "),l("div",{staticClass:"block-item-left-header-item",class:2==t.activeMenu?"left-menu-active":"",on:{click:function(e){return t.activeMenuClick(e,2)}}},[l("span",[t._v(t._s(t.$t("我发起的")))])]),t._v(" "),l("div",{staticClass:"block-item-left-header-item",class:4==t.activeMenu?"left-menu-active":"",on:{click:function(e){return t.activeMenuClick(e,4)}}},[l("span",[t._v(t._s(t.$t("我已办的")))])]),t._v(" "),l("div",{staticClass:"block-item-left-header-item",class:3==t.activeMenu?"left-menu-active":"",on:{click:function(e){return t.activeMenuClick(e,3)}}},[l("span",[t._v(t._s(t.$t("抄送我的")))])])])]),t._v(" "),l("div",{staticClass:"block-item-right-tag-content",style:{height:t.divHeight.height1+"px"}},[l("el-table",{ref:"refTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-class-name":"custom-table-cell-bg",size:"medium","max-height":t.tableHeight.height}},[l("el-table-column",{attrs:{align:"center",label:t.$t("申请日期")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(t.$moment(e.row.applyTime).format("YYYY-MM-DD HH:mm")))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                        "+t._s(t.$moment(e.row.applyTime).format("YYYY-MM-DD HH:mm"))+"\n                    ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("名称")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.formName))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                      "+t._s(e.row.formName)+"\n                    ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("部门/班级")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[e.row.departmentName?l("label",[t._v(t._s(e.row.departmentName))]):t._e(),t._v(" "),e.row.className?l("label",[t._v(t._s(e.row.className))]):t._e()]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[e.row.departmentName?l("label",[t._v(t._s(e.row.departmentName))]):t._e(),t._v(" "),e.row.className?l("label",[t._v(t._s(e.row.className))]):t._e()])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("状态")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[-1===e.row.status?l("label",{staticClass:"color-warning"},[t._v(t._s(t.$t("撤销")))]):t._e(),t._v(" "),0===e.row.status?l("label",{staticClass:"color-warning"},[t._v(t._s(t.$t("待审核")))]):t._e(),t._v(" "),3===e.row.status?l("label",{staticClass:"color-success"},[t._v(t._s(t.$t("通过")))]):t._e(),t._v(" "),4===e.row.status?l("label",{staticClass:"color-danger"},[t._v(t._s(t.$t("未通过")))]):t._e()]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[-1===e.row.status?l("label",{staticClass:"color-warning"},[t._v(t._s(t.$t("撤销")))]):t._e(),t._v(" "),0===e.row.status?l("label",{staticClass:"color-warning"},[t._v(t._s(t.$t("待审核")))]):t._e(),t._v(" "),3===e.row.status?l("label",{staticClass:"color-success"},[t._v(t._s(t.$t("通过")))]):t._e(),t._v(" "),4===e.row.status?l("label",{staticClass:"color-danger"},[t._v(t._s(t.$t("未通过")))]):t._e()])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("更新时间")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[e.row.handleTime?l("label",[t._v(t._s(t.$moment(e.row.handleTime).format("YYYY-MM-DD HH:mm")))]):l("label",[t._v("--")])]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[e.row.handleTime?l("label",[t._v(t._s(t.$moment(e.row.handleTime).format("YYYY-MM-DD HH:mm")))]):l("label",[t._v("--")])])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",width:"100",label:t.$t("操作")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("a",{staticClass:"color-success",attrs:{href:"javascript:;"},on:{click:function(l){return t.detailClick(l,e.row)}}},[t._v(t._s(t.$t("详情")))]),t._v(" "),l("a",{staticClass:"color-grand margin-left-5",attrs:{href:"javascript:;"},on:{click:function(l){return t.printManage(l,e.row)}}},[t._v(t._s(t.$t("打印")))])]}}])})],1),t._v(" "),l("div",{staticClass:"layout-right-footer text-right"},[l("my-pagination",{staticClass:"layout-pagination",attrs:{total:t.total,"current-page":t.page,"page-size":t.num},on:{currentPage:t.currentPage,sizeChange:t.sizeChange,jumpChange:t.jumpPage}})],1)],1)]),t._v(" "),l("div",{staticClass:"moon-clearfix"})])]),t._v(" "),l("div",{staticClass:"moon-clearfix"}),t._v(" "),l("drawer-layout-right",{attrs:{tabindex:"0",visible:t.dialogServerDetail,size:"600px",title:t.$t("详情")},on:{changeDrawer:t.closeDialog,"right-close":t.cancelDrawDialog}},[l("div",{staticClass:"color-muted",attrs:{slot:"content"},slot:"content"},[l("div",{staticClass:"detail-block-title padding-lr-10 padding-tb-10 font-size-12"},[l("el-row",[l("el-col",{attrs:{span:12}},[l("span",[t._v(t._s(t.$t("申请人"))+":")]),t._v(" "),l("span",[t._v(t._s(t.detailData.applyUserName))])]),t._v(" "),l("el-col",{attrs:{span:12}},[l("span",[t._v(t._s(t.$t("学号/工号"))+":")]),t._v(" "),l("span",[t._v(t._s(t.detailData.userNo))])])],1),t._v(" "),l("el-row",{staticClass:"margin-top-5"},[l("el-col",{attrs:{span:12}},[l("span",[t._v(t._s(t.$t("服务名称"))+":")]),t._v(" "),l("span",[t._v(t._s(t.detailData.formName))])]),t._v(" "),l("el-col",{attrs:{span:12}},[l("span",[t._v(t._s(t.$t("班级/部门"))+":")]),t._v(" "),l("span",[5==t.detailData.userType?l("label",[t._v(t._s(t.detailData.className))]):t._e(),t._v(" "),4==t.detailData.userType?l("label",[t._v(t._s(t.detailData.departmentName))]):t._e()])])],1),t._v(" "),l("el-row",{staticClass:"margin-top-5"},[l("el-col",{attrs:{span:12}},[l("span",[t._v(t._s(t.$t("申请日期"))+":")]),t._v(" "),l("span",[t._v(t._s(t.$moment(t.detailData.applyTime).format("YYYY-MM-DD HH:mm")))])])],1)],1),t._v(" "),l("div",{staticClass:"margin-top-10"},[l("div",{staticClass:"color-muted margin-top-5 font-size-12 border-bottom-1"},[l("span",[l("label",{staticClass:"title-block-tag"}),t._v(" "),l("label",{staticClass:"title-block-text color-warning"},[t._v(t._s(t.$t("申请内容")))])])]),t._v(" "),l("div",{staticClass:"block-item-bg font-size-12 margin-top-10 color-sub-title"},[l("table",{staticClass:"custom-table"},t._l(t.detailApplyContentData,(function(e,n){return l("tr",{key:n},["fc-editor"!=e.type&&"upload"!=e.type?[l("td",{staticStyle:{width:"20%","text-align":"right","padding-right":"15px"}},[l("span",{staticClass:"color-muted moon-content-text-ellipsis-class"},[l("label",{staticClass:"font-size-12"},[t._v(t._s(e.title))])])]),t._v(" "),l("td",{staticStyle:{"text-align":"left","padding-left":"15px"}},[l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.value,placement:"top"}},[l("span",{staticClass:"moon-content-text-ellipsis-class"},[l("label",{staticClass:"font-size-12"},[t._v(t._s(e.value))])])])],1)]:"fc-editor"!=e.type&&"upload"==e.type?[l("td",{staticStyle:{width:"20%","text-align":"right","padding-right":"15px"}},[!e.value||e.value.length<=0?l("span",{staticClass:"color-muted moon-content-text-ellipsis-class"},[t._v("\n                      "+t._s(e.title)+"\n                    ")]):l("span",{staticClass:"color-muted",staticStyle:{position:"relative"}},[t._v(t._s(e.title)+": ")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left","padding-left":"15px"}},[!e.value||e.value.length<=0?l("span",[l("div",{staticStyle:{height:"20px","line-height":"20px"}})]):t._l(e.value,(function(t,n){return l("span",{key:n,staticClass:"custom-avatar",staticStyle:{display:"inline-block","margin-right":"5px",position:"relative",top:"5px"}},[l("el-image",{staticStyle:{width:"30px",height:"30px"},attrs:{src:t,"preview-src-list":e.value}})],1)}))],2)]:[l("td",{staticStyle:{width:"20%","text-align":"right","padding-right":"15px"}},[l("span",{staticClass:"color-muted font-bold moon-content-text-ellipsis-class",staticStyle:{position:"relative",top:"-50px"}},[t._v(t._s(e.title)+": ")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left","padding-left":"15px"}},["fc-editor"==e.type?l("div",{staticStyle:{width:"90%",height:"150px","overflow-y":"auto",display:"inline-block",border:"1px solid #dddddd","border-radius":"5px",padding:"0px 10px"},domProps:{innerHTML:t._s(e.value)}}):t._e()])]],2)})),0)])]),t._v(" "),l("div",{staticClass:"margin-top-10"},[l("div",{staticClass:"color-muted margin-top-5 font-size-12 border-bottom-1"},[l("span",[l("label",{staticClass:"title-block-tag"}),t._v(" "),l("label",{staticClass:"title-block-text color-warning"},[t._v(t._s(t.$t("审批进度")))])])]),t._v(" "),l("div",{staticClass:"block-item-bg font-size-12 margin-top-10 color-sub-title"},[l("el-steps",{attrs:{direction:"vertical",space:"60px"}},t._l(t.detailApplyAuditList,(function(e,n){return l("el-step",{key:n},[l("div",{attrs:{slot:"icon"},slot:"icon"},[l("i",{staticClass:"fa fa-flag",staticStyle:{"font-size":"12px"}})]),t._v(" "),l("div",{staticClass:"font-size-12",attrs:{slot:"title"},slot:"title"},["handle"==e.nodeType?l("span",{staticClass:"color-success"},[t._v("\n                    "+t._s(t.$t("审批"))+"\n                    "),"and"==e.andor?l("label",[t._v(" ("+t._s(t.$t("与签"))+") ")]):t._e(),t._v(" "),"or"==e.andor?l("label",[t._v(" ("+t._s(t.$t("或签"))+") ")]):t._e()]):t._e(),t._v(" "),"cc"==e.nodeType?l("span",{staticClass:"color-warning"},[t._v(t._s(t.$t("抄送")))]):t._e()]),t._v(" "),l("div",{staticClass:"font-size-12 color-sub-title",attrs:{slot:"description"},slot:"description"},[l("div",["handle"==e.nodeType?t._l(e.handleUserList,(function(e,n){return l("div",{key:n},[l("span",{staticClass:"color-grand"},[l("i",{staticClass:"fa fa-user"}),t._v(" "+t._s(e.userName)+" ")]),t._v(" "),l("span",{staticClass:"margin-left-10"},[-1===e.status?l("label",{staticClass:"color-warning"},[t._v(t._s(t.$t("撤销")))]):t._e(),t._v(" "),0===e.status?l("label",{staticClass:"color-warning"},[t._v(t._s(t.$t("待审核")))]):t._e(),t._v(" "),3===e.status?l("label",{staticClass:"color-success"},[t._v(t._s(t.$t("通过")))]):t._e(),t._v(" "),4===e.status?l("label",{staticClass:"color-danger"},[t._v(t._s(t.$t("未通过")))]):t._e(),t._v(" "),1===e.status?l("label",{staticClass:"color-warning"},[t._v(t._s(t.$t("已通过")))]):t._e(),t._v(" "),2===e.status?l("label",{staticClass:"color-warning"},[t._v("\n                            "+t._s(t.$t("已驳回"))+"\n                            "),e.des?l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.des,placement:"top"}},[l("i",{staticClass:"fa fa-warning color-warning"})]):t._e()],1):t._e(),t._v(" "),5===e.status?l("label",{staticClass:"color-warning"},[t._v(t._s(t.$t("无需审批")))]):t._e(),t._v(" "),8===e.status?l("label",{staticClass:"color-warning"},[t._v(t._s(t.$t("审批中")))]):t._e()]),t._v(" "),e.handleTime?l("span",{staticClass:"margin-left-10"},[l("label",{staticClass:"color-muted"},[t._v(t._s(t.$moment(e.handleTime).format("YYYY-MM-DD HH:mm:ss")))])]):t._e()])})):t._e(),t._v(" "),"cc"==e.nodeType?[t._l(e.handleUserNameList,(function(e,n){return n<=5?l("el-tag",{key:n,attrs:{size:"mini"}},[l("div",{staticClass:"moon-content-text-ellipsis-class",staticStyle:{width:"50px"}},[l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e,placement:"top-start"}},[l("span",[t._v(t._s(e))])])],1)]):t._e()})),t._v(" "),e.handleUserNameList.length>5?l("el-popover",{attrs:{placement:"left",width:"200",trigger:"hover"}},[l("div",{staticStyle:{height:"100px","overflow-y":"auto"}},t._l(e.handleUserNameList,(function(e,n){return l("div",{key:n},[l("div",{staticClass:"font-size-12 padding-tb-5"},[l("span",[t._v(t._s(e))])])])})),0),t._v(" "),l("el-tag",{attrs:{slot:"reference",size:"mini",type:"success"},slot:"reference"},[l("div",{staticClass:"moon-content-text-ellipsis-class padding-lr-5"},[l("i",{staticClass:"fa fa-user"}),t._v(" "),l("label",{staticClass:"margin-left-5"},[t._v(t._s(e.handleUserNameList.length))])])])],1):t._e()]:t._e()],2)])])})),1)],1)])]),t._v(" "),l("div",{attrs:{slot:"footer"},slot:"footer"},[1==t.activeMenu?[l("div",{staticClass:"text-right padding-lr-10"},[l("el-button",{attrs:{size:"small"},on:{click:t.handleCancel}},[t._v("取 消")]),t._v(" "),1==t.detailApplyAuditUserData.agreen1?l("el-button",{attrs:{size:"small",type:"success"},on:{click:function(e){return t.handleOk(e,t.detailData,1)}}},[t._v("同 意")]):t._e(),t._v(" "),1==t.detailApplyAuditUserData.notagreed1?l("el-popover",{attrs:{placement:"top",width:"200"},on:{hide:t.cancelPop},model:{value:t.visibleNo,callback:function(e){t.visibleNo=e},expression:"visibleNo"}},[l("div",{staticClass:"margin-bottom-10"},[l("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1),t._v(" "),l("div",{staticStyle:{"text-align":"right",margin:"0"}},[l("el-button",{attrs:{size:"mini",type:"text"},on:{click:t.cancelPop}},[t._v("取消")]),t._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleOk(e,t.detailData,2)}}},[t._v("确定")])],1),t._v(" "),l("el-button",{attrs:{slot:"reference",type:"warning",size:"small"},slot:"reference"},[t._v(t._s(t.$t("驳回")))])],1):t._e()],1)]:t._e(),t._v(" "),2==t.activeMenu?[l("div",{staticClass:"text-right padding-lr-10"},[l("el-button",{attrs:{size:"small"},on:{click:t.handleCancel}},[t._v("取 消")]),t._v(" "),1==t.detailData.allowRevoke?l("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleOk(e,t.detailData,-1)}}},[t._v("撤 销")]):t._e()],1)]:t._e(),t._v(" "),4==t.activeMenu?[5==t.detailData.status?l("div",{staticClass:"text-center bg-warning color-white",on:{click:t.handleCancel}},[t._v("无需审批")]):t._e(),t._v(" "),8==t.detailData.status?l("div",{staticClass:"text-center bg-warning color-white",on:{click:t.handleCancel}},[t._v("审批中")]):t._e(),t._v(" "),-1==t.detailData.status?l("div",{staticClass:"text-center bg-warning color-white",on:{click:t.handleCancel}},[t._v("已撤销")]):t._e(),t._v(" "),3==t.detailData.status?l("div",{staticClass:"text-center bg-success color-white",on:{click:t.handleCancel}},[t._v("通过")]):t._e(),t._v(" "),4==t.detailData.status?l("div",{staticClass:"text-center bg-danger color-white",on:{click:t.handleCancel}},[t._v("未通过")]):t._e()]:t._e()],2)]),t._v(" "),l("drawer-layout-right",{attrs:{tabindex:"0","show-close":!0,visible:t.drawerPayVisible,size:"680px"},on:{changeDrawer:t.closeDialog}},[l("div",{attrs:{slot:"title"},slot:"title"},[l("div",{staticClass:"header-block padding-lr-10"},[l("span",{staticClass:"tab-class font-bold"},[l("i",{staticClass:"fa fa-file"}),t._v("\n            "+t._s(t.$t("报到单"))+"\n          ")])])]),t._v(" "),l("div",{staticClass:"color-muted",attrs:{slot:"content"},slot:"content"},[l("div",[l("div",{staticClass:"padding-tb-10 padding-lr-10"},[l("span",{staticClass:"title-block-tag"}),t._v(" "),l("span",{staticClass:"title-block-text"},[t._v(t._s(t.$t("基本信息")))])]),t._v(" "),l("table",{staticClass:"custom-table"},[l("tr",[l("td",{staticStyle:{width:"20%"},attrs:{rowspan:"2"}},[l("el-image",{staticStyle:{width:"80px",height:"80px","margin-top":"5px"},attrs:{src:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}})],1),t._v(" "),l("td",{staticStyle:{width:"20%"}},[t._v(t._s(t.$t("姓名")))]),t._v(" "),l("td",{staticStyle:{width:"10%"}},[t._v("1")]),t._v(" "),l("td",{staticStyle:{width:"10%"}},[t._v(t._s(t.$t("性别")))]),t._v(" "),l("td",{staticStyle:{width:"10%"}},[t._v("1")]),t._v(" "),l("td",{staticStyle:{width:"20%"}},[t._v(t._s(t.$t("录取号")))]),t._v(" "),l("td",{staticStyle:{width:"10%"}},[t._v("1")])]),t._v(" "),l("tr",[l("td",[t._v(t._s(t.$t("学院")))]),t._v(" "),l("td",[t._v("1")]),t._v(" "),l("td",[t._v(t._s(t.$t("专业")))]),t._v(" "),l("td",[t._v("1")]),t._v(" "),l("td",[t._v("1")]),t._v(" "),l("td",[t._v(t._s(t.$t("班级")))])]),t._v(" "),l("tr",[l("td",[t._v(t._s(t.$t("宿舍信息")))]),t._v(" "),l("td",{attrs:{colspan:"6"}},[t._v("1")])])])]),t._v(" "),l("div",{staticClass:"margin-top-20"},[l("div",{staticClass:"padding-tb-10 padding-lr-10"},[l("span",{staticClass:"title-block-tag"}),t._v(" "),l("span",{staticClass:"title-block-text"},[t._v(t._s(t.$t("缴费信息")))])]),t._v(" "),l("el-table",{ref:"refTable",staticStyle:{width:"100%"},attrs:{border:"",data:t.tableSignData,"header-cell-class-name":"custom-table-cell-bg",size:"medium"}},[l("el-table-column",{attrs:{align:"center",label:t.$t("费用名称")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                    "+t._s(e.row.name)+"\n                  ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("缓缴")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                    "+t._s(e.row.name)+"\n                  ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("贷缴")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                    "+t._s(e.row.name)+"\n                  ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("减免")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                    "+t._s(e.row.name)+"\n                  ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("实缴")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                    "+t._s(e.row.name)+"\n                  ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("已缴")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                    "+t._s(e.row.name)+"\n                  ")])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"center",label:t.$t("未缴金额")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[l("div",{staticClass:"text-center"},[t._v(t._s(e.row.name))]),t._v(" "),l("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                    "+t._s(e.row.name)+"\n                  ")])])]}}])})],1)],1)])]),t._v(" "),l("my-server-dialog",{attrs:{visible:t.dialogServer,"width-style":"850px",data:t.serverDetailData},on:{close:t.closeDialog,detailClick:t.detailClick}})],1)}),n,!1,null,"218583d8",null);e.default=component.exports;installComponents(component,{MyPagination:l(1380).default,DrawerLayoutRight:l(1267).default,MyServerDialog:l(1269).default})}}]);