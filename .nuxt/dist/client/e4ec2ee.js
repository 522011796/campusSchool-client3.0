(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1262:function(t,e,n){"use strict";var r=n(52),l=n(36),o=n(264),c=n(78),d=n(56),_=n(99),v=n(719),f=n(208),h=n(37),m=n(265),w=n(209).f,y=n(98).f,x=n(63).f,S=n(720).trim,C=l.Number,$=C.prototype,k="Number"==_(m($)),I=function(t){var e,n,r,l,o,c,d,code,_=f(t,!1);if("string"==typeof _&&_.length>2)if(43===(e=(_=S(_)).charCodeAt(0))||45===e){if(88===(n=_.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(_.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+_}for(c=(o=_.slice(2)).length,d=0;d<c;d++)if((code=o.charCodeAt(d))<48||code>l)return NaN;return parseInt(o,r)}return+_};if(o("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var A,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(k?h((function(){$.valueOf.call(n)})):"Number"!=_(n))?v(new C(I(e)),n,N):I(e)},D=r?w(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;D.length>T;T++)d(C,A=D[T])&&!d(N,A)&&x(N,A,y(C,A));N.prototype=$,$.constructor=N,c(l,"Number",N)}},1263:function(t,e,n){"use strict";n(161),n(7),n(22),n(47);e.a={data:function(){return{testLogin:"",value:"",testDefault:"",navHeight:0,globalAppShow:"",isAndroid:!1,isIos:!1}},mounted:function(){this.getUrl(),this.initBridage()},created:function(){},methods:{getUrl:function(){this.loginUserAppType=this.$route.query.userType,this.navHeight=this.$route.query.navH?this.$route.query.navH:0,this.globalAppShow=this.$route.query.appType},returnGlobalMain:function(t){"android"==this.globalAppShow&&this.setupWebViewJavascriptBridge((function(e){e.callHandler("returnGlobalMain",{key:t},(function(t){}))})),"ios"==this.globalAppShow&&this.setupWebViewJavascriptBridge((function(e){e.callHandler("returnGlobalMain",{key:t},(function(t){}))}))},setupWebViewJavascriptBridge:function(t){if("android"==this.globalAppShow)window.WebViewJavascriptBridge?t(window.WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",(function(){t(window.WebViewJavascriptBridge)}),!1);else if("ios"==this.globalAppShow){if(window.WebViewJavascriptBridge)return t(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var e=document.createElement("iframe");e.style.display="none",e.src="https://__bridge_loaded__",document.documentElement.appendChild(e),setTimeout((function(){document.documentElement.removeChild(e)}),0)}},initBridage:function(){var t=this;try{this.setupWebViewJavascriptBridge((function(e){"android"==t.globalAppShow&&e.init((function(t,e){e({"Javascript Responds":"Wee!"})}))}))}catch(t){}}}}},1264:function(t,e,n){"use strict";n.r(e);n(1262);var r,l=n(130),o=n(47),c={name:"mySex",props:(r={sex:{default:0,type:[String,Number]},tag:{default:"tag",validate:function(t){return Object(o.f)(t,["tag","text"])}},size:{defalult:"medium",validate:function(t){return Object(o.f)(t,["large","medium","small","mini"])}}},Object(l.a)(r,"size",{defalult:"medium",validate:function(t){return Object(o.f)(t,["large","medium","small","mini"])}}),Object(l.a)(r,"type",{defalult:"",validate:function(t){return Object(o.f)(t,["success","info","warning","danger"])}}),Object(l.a)(r,"effect",{defalult:"light",validate:function(t){return Object(o.f)(t,["dark","light","plain"])}}),r),computed:{selectModel:function(){this.value=this.selValue}},data:function(){return{value:""}},methods:{}},d=n(45),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",t._b({},"span",t.selectModel,!1),["text"==t.tag?[1==t.sex?n("label",[t._v(t._s(t.$t("男")))]):t._e(),t._v(" "),2==t.sex?n("label",[t._v(t._s(t.$t("女")))]):t._e(),t._v(" "),3==t.sex?n("label",[t._v(t._s(t.$t("未知")))]):t._e()]:t._e(),t._v(" "),"tag"==t.tag?[1==t.sex?n("el-tag",{attrs:{size:t.size,type:t.type,effect:t.effect}},[t._v(t._s(t.$t("男")))]):t._e(),t._v(" "),2==t.sex?n("el-tag",{attrs:{size:t.size,type:t.type,effect:t.effect}},[t._v(t._s(t.$t("女")))]):t._e(),t._v(" "),3==t.sex?n("el-tag",{attrs:{size:t.size,type:t.type,effect:t.effect}},[t._v(t._s(t.$t("未知")))]):t._e()]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports},1306:function(t,e,n){var content=n(1371);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("60f974cc",content,!0,{sourceMap:!1})},1370:function(t,e,n){"use strict";var r=n(1306);n.n(r).a},1371:function(t,e,n){(e=n(61)(!1)).push([t.i,".header-title-block[data-v-799cfcef]{height:60px;line-height:60px;width:100%}.content-block[data-v-799cfcef]{border-top-left-radius:15px;border-top-right-radius:15px;background:#fff;width:100%}.app-title-border-tag[data-v-799cfcef]{width:5px;height:25px;background:#1ea084;display:inline-block}.notice-list-item[data-v-799cfcef]{height:45px;line-height:45px}.bg-student-info-block[data-v-799cfcef]{background:url(/img/bg-student-info.png) no-repeat;height:180px;width:100%;border:1px dashed #ddd}.text-display-line[data-v-799cfcef]{width:80px;top:4px}.name-display-line[data-v-799cfcef],.text-display-line[data-v-799cfcef]{display:inline-block;position:relative}.name-display-line[data-v-799cfcef]{max-width:200px;top:6px}.item-block[data-v-799cfcef]{border-radius:5px;background:#ebeef5;padding:10px}",""]),t.exports=e},1406:function(t,e,n){"use strict";n.r(e);n(77);var r=n(15),l=n(22),o=n(129),c=n(1263),d=n(1264),_=n(47),v={name:"studentInfo",components:{MySex:d.default},layout:"defaultAppScreen",mixins:[o.a,c.a],data:function(){return{sex:"",active:6,serverAppList:[],noticeAppList:[],askAppList:[],currentEnrollYear:"",currentEnrollTime:"",collegeName:"",majorName:"",className:"",stuNo:"",headLogo:"",uploadFile:l.a.upload_file,uploadResult:{},uploadProcess:"",detailData:"",tablePayData:[],form:{id:"",phone:"",qq:"",email:"",wechat:"",fatherName:"",fatherPhone:"",matherName:"",matherPhone:"",address:"",headImg:""}}},mounted:function(){},created:function(){this.initAppServer()},methods:{layoutInit:function(){},initAppServer:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getSessionInfo();case 2:t.initPay(),t.initInfo(),t.getUserQrcode(t.loginUserId),t.getUserBarcode(t.loginUserId);case 6:case"end":return e.stop()}}),e)})))()},initInfo:function(){var t=this,e={userId:this.loginUserId};this.$axios.get(l.a.enroll_checkin_student_detail2,{params:e}).then((function(e){e.data.data&&(t.detailData=e.data.data)}))},initPay:function(t){var e=this,n={userId:this.loginUserId};this.$axios.get(l.a.enroll_checkin_pay_list_by_user,{params:n}).then((function(t){if(t.data.data){console.log(t.data.data);for(var i=0;i<t.data.data.length;i++)t.data.data[i].wait_amount=t.data.data[i].should_amount-t.data.data[i].paid_amount;e.tablePayData=t.data.data}}))},returnIndex:function(){var t=this.$route.query.subPage?this.$route.query.subPage:"/newStudent/studentIndex";this.$router.push({path:t,query:{activeType:this.$route.query.activeType,userType:this.loginUserAppType,navH:this.navHeight,appType:this.globalAppShow,sessionId:this.$route.query.sessionId}})},okOrder:function(){var t=this,e={userId:this.loginUserId};e=this.$qs.stringify(e),this.$axios.post(l.a.enroll_checkin_student_print,e).then((function(e){if(200==e.data.code){var n=t.$route.query.subPage?t.$route.query.subPage:"/newStudent/studentIndex";t.returnGIndex(n),Object(_.b)(e.data.desc)}else Object(_.a)(e.data.desc)}))}}},f=(n(1370),n(45)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{class:4==t.loginUserAppType?"bg-app-success_teacher":"bg-app-success",style:{height:t.navHeight+"px"}}),t._v(" "),n("div",{staticClass:"header-title-block",class:4==t.loginUserAppType?"bg-app-success_teacher":"bg-app-success"},[n("van-col",{attrs:{span:"3"}},[n("div",{staticClass:"text-left padding-lr-10 color-white"},[n("span",{staticClass:"font-bold font-size-14",on:{click:t.returnIndex}},[n("i",{staticClass:"fa fa-chevron-left"}),t._v("\n            "+t._s(t.$t("返回"))+"\n          ")])])]),t._v(" "),n("van-col",{attrs:{span:"18"}},[n("div",{staticClass:"text-center color-white font-size-16 font-bold"},[t.$route.query.title&&""!=t.$route.query.title?n("span",[t._v(t._s(t.$route.query.title))]):n("span",[t._v(t._s(t.$t("报到单")))])])]),t._v(" "),n("van-col",{attrs:{span:"3"}},[t._v("\n       \n    ")])],1),t._v(" "),n("div",{staticClass:"content-block",style:t.divHeight10},[n("div",{staticClass:"margin-top-20 padding-lr-10"},[n("div",[n("van-row",[n("van-col",{attrs:{span:"12"}},[n("div",{staticClass:"text-left"},[n("span",{staticClass:"app-title-border-tag"}),t._v(" "),n("span",{staticClass:"font-bold",staticStyle:{position:"relative",top:"-8px"}},[t._v(t._s(t.$t("基本信息")))])])]),t._v(" "),n("van-col",{attrs:{span:"12"}},[n("div",{staticClass:"pull-right"},[n("el-image",{staticStyle:{width:"120px",height:"30px"},attrs:{src:t.g_BarCode}})],1)])],1)],1),t._v(" "),n("div",{staticClass:"margin-top-5"},[n("table",{staticClass:"custom-table"},[n("tbody",[n("tr",[n("td",{staticStyle:{width:"15%"}},[t._v(t._s(t.$t("姓名")))]),t._v(" "),n("td",{staticStyle:{width:"35%"}},[t._v(t._s(t.detailData.real_name))]),t._v(" "),n("td",{staticStyle:{width:"15%"}},[t._v(t._s(t.$t("性别")))]),t._v(" "),n("td",{staticStyle:{width:"35%"}},[n("my-sex",{attrs:{sex:t.detailData.sex,tag:"text"}})],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{width:"15%"}},[t._v(t._s(t.$t("录取号")))]),t._v(" "),n("td",{staticStyle:{width:"35%"}},[t._v(t._s(t.detailData.student_id))]),t._v(" "),n("td",{staticStyle:{width:"15%"}},[t._v(t._s(t.$t("班级")))]),t._v(" "),n("td",{staticStyle:{width:"35%"}},[t._v(t._s(t.detailData.class_name))])]),t._v(" "),n("tr",[n("td",{staticStyle:{width:"15%"}},[t._v(t._s(t.$t("学院")))]),t._v(" "),n("td",{staticStyle:{width:"35%"}},[t._v(t._s(t.detailData.college_name))]),t._v(" "),n("td",{staticStyle:{width:"15%"}},[t._v(t._s(t.$t("专业")))]),t._v(" "),n("td",{staticStyle:{width:"35%"}},[t._v(t._s(t.detailData.major_name))])]),t._v(" "),n("tr",[n("td",{staticStyle:{width:"15%"}},[t._v(t._s(t.$t("宿舍")))]),t._v(" "),n("td",{staticClass:"text-left",staticStyle:{width:"65%"},attrs:{colspan:"3"}},[t.detailData.build_name?n("span",[t._v("\n                  "+t._s(t.detailData.build_name)+t._s(t.detailData.floor_num)+t._s(t.$t("层"))+t._s(t.detailData.dormitory_no)+"\n                ")]):t._e(),t._v(" "),t.detailData.pac_name&&!t.detailData.build_name?n("span",[t._v("\n                  "+t._s(t.detailData.pac_name)+"\n                  "),n("label",{staticClass:"font-size-12 color-muted"},[t._v("\n                    (¥"+t._s(t.detailData.pac_price)+" -- "+t._s(t.detailData.pac_region)+")\n                  ")])]):t._e()])])])])])]),t._v(" "),n("div",{staticClass:"margin-top-20 padding-lr-10"},[n("div",[n("van-row",[n("van-col",{attrs:{span:"24"}},[n("div",{staticClass:"text-left"},[n("span",{staticClass:"app-title-border-tag"}),t._v(" "),n("span",{staticClass:"font-bold",staticStyle:{position:"relative",top:"-8px"}},[t._v(t._s(t.$t("缴费信息")))])])])],1)],1),t._v(" "),n("div",[n("el-table",{ref:"refTable",staticStyle:{width:"100%"},attrs:{border:"",data:t.tablePayData,"header-cell-class-name":"custom-table-cell-bg",size:"medium"}},[n("el-table-column",{attrs:{align:"center",label:t.$t("费用名称")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.item_name))]),t._v(" "),n("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                      "+t._s(e.row.item_name)+"\n                    ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("缓缴")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.delay_amount))]),t._v(" "),n("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                      "+t._s(e.row.delay_amount)+"\n                    ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("贷款")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.loan_amount))]),t._v(" "),n("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                  "+t._s(e.row.loan_amount)+"\n                ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("减免")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.deduction_amount))]),t._v(" "),n("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                  "+t._s(e.row.deduction_amount)+"\n                ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("实缴")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.should_amount))]),t._v(" "),n("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                  "+t._s(e.row.should_amount)+"\n                ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("已缴")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{staticStyle:{width:"70px"},attrs:{size:"mini"},on:{input:function(n){return t.changeInputValue(e.row.paid_amount,e.$index)}},model:{value:e.row.paid_amount,callback:function(n){t.$set(e.row,"paid_amount",n)},expression:"scope.row.paid_amount"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:t.$t("待缴金额")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top","popper-class":"custom-table-popover"}},[n("div",{staticClass:"text-center"},[t._v(t._s(e.row.wait_amount))]),t._v(" "),n("span",{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                      "+t._s(e.row.wait_amount)+"\n                    ")])])]}}])})],1)],1)]),t._v(" "),t.detailData[5]&&null!=t.detailData[5].checkinSheetTips&&""!=t.detailData[5].checkinSheetTips?n("div",{staticClass:"margin-top-20 padding-lr-10"},[n("div",[n("van-row",[n("van-col",{attrs:{span:"24"}},[n("div",{staticClass:"text-left"},[n("span",{staticClass:"app-title-border-tag"}),t._v(" "),n("span",{staticClass:"font-bold",staticStyle:{position:"relative",top:"-8px"}},[t._v(t._s(t.$t("报到须知")))])])])],1)],1),t._v(" "),n("div",{staticClass:"padding-tb-10 padding-lr-10",staticStyle:{border:"1px solid #dddddd","min-height":"45px"}},[t.detailData[5]?n("span",[n("pre",{staticStyle:{"white-space":"pre-wrap","word-wrap":"break-word"}},[t._v(t._s(t.detailData[5].checkinSheetTips))])]):t._e()])]):t._e(),t._v(" "),n("div",{staticClass:"margin-top-10 padding-lr-10"},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-image",{staticStyle:{width:"80px",height:"80px"},attrs:{src:t.g_QrCode}})],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("div",{staticClass:"text-right"},[n("el-button",{staticClass:"margin-top-30",attrs:{type:"default",size:"small"},on:{click:t.okOrder}},[t._v("\n              "+t._s(t.$t("已完成打印"))+"\n            ")])],1)])],1)],1)])])}),[],!1,null,"799cfcef",null);e.default=component.exports;installComponents(component,{MySex:n(1264).default})}}]);