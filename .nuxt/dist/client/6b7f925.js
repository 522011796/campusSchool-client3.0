(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1262:function(e,t,n){"use strict";var r=n(52),o=n(36),l=n(264),d=n(78),c=n(56),h=n(99),v=n(719),f=n(208),_=n(37),y=n(265),m=n(209).f,w=n(98).f,S=n(63).f,T=n(720).trim,k=o.Number,A=k.prototype,x="Number"==h(y(A)),I=function(e){var t,n,r,o,l,d,c,code,h=f(e,!1);if("string"==typeof h&&h.length>2)if(43===(t=(h=T(h)).charCodeAt(0))||45===t){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(h.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+h}for(d=(l=h.slice(2)).length,c=0;c<d;c++)if((code=l.charCodeAt(c))<48||code>o)return NaN;return parseInt(l,r)}return+h};if(l("Number",!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var $,H=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof H&&(x?_((function(){A.valueOf.call(n)})):"Number"!=h(n))?v(new k(I(t)),n,H):I(t)},N=r?m(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),U=0;N.length>U;U++)c(k,$=N[U])&&!c(H,$)&&S(H,$,w(k,$));H.prototype=A,A.constructor=H,d(o,"Number",H)}},1263:function(e,t,n){"use strict";n(161),n(7),n(22),n(47);t.a={data:function(){return{testLogin:"",value:"",testDefault:"",navHeight:0,globalAppShow:"",isAndroid:!1,isIos:!1}},mounted:function(){this.getUrl(),this.initBridage()},created:function(){},methods:{getUrl:function(){this.loginUserAppType=this.$route.query.userType,this.navHeight=this.$route.query.navH?this.$route.query.navH:0,this.globalAppShow=this.$route.query.appType},returnGlobalMain:function(e){"android"==this.globalAppShow&&this.setupWebViewJavascriptBridge((function(t){t.callHandler("returnGlobalMain",{key:e},(function(e){}))})),"ios"==this.globalAppShow&&this.setupWebViewJavascriptBridge((function(t){t.callHandler("returnGlobalMain",{key:e},(function(e){}))}))},setupWebViewJavascriptBridge:function(e){if("android"==this.globalAppShow)window.WebViewJavascriptBridge?e(window.WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",(function(){e(window.WebViewJavascriptBridge)}),!1);else if("ios"==this.globalAppShow){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout((function(){document.documentElement.removeChild(t)}),0)}},initBridage:function(){var e=this;try{this.setupWebViewJavascriptBridge((function(t){"android"==e.globalAppShow&&t.init((function(e,t){t({"Javascript Responds":"Wee!"})}))}))}catch(e){}}}}},1264:function(e,t,n){"use strict";n.r(t);n(1262);var r,o=n(130),l=n(47),d={name:"mySex",props:(r={sex:{default:0,type:[String,Number]},tag:{default:"tag",validate:function(e){return Object(l.f)(e,["tag","text"])}},size:{defalult:"medium",validate:function(e){return Object(l.f)(e,["large","medium","small","mini"])}}},Object(o.a)(r,"size",{defalult:"medium",validate:function(e){return Object(l.f)(e,["large","medium","small","mini"])}}),Object(o.a)(r,"type",{defalult:"",validate:function(e){return Object(l.f)(e,["success","info","warning","danger"])}}),Object(o.a)(r,"effect",{defalult:"light",validate:function(e){return Object(l.f)(e,["dark","light","plain"])}}),r),computed:{selectModel:function(){this.value=this.selValue}},data:function(){return{value:""}},methods:{}},c=n(45),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",e._b({},"span",e.selectModel,!1),["text"==e.tag?[1==e.sex?n("label",[e._v(e._s(e.$t("男")))]):e._e(),e._v(" "),2==e.sex?n("label",[e._v(e._s(e.$t("女")))]):e._e(),e._v(" "),3==e.sex?n("label",[e._v(e._s(e.$t("未知")))]):e._e()]:e._e(),e._v(" "),"tag"==e.tag?[1==e.sex?n("el-tag",{attrs:{size:e.size,type:e.type,effect:e.effect}},[e._v(e._s(e.$t("男")))]):e._e(),e._v(" "),2==e.sex?n("el-tag",{attrs:{size:e.size,type:e.type,effect:e.effect}},[e._v(e._s(e.$t("女")))]):e._e(),e._v(" "),3==e.sex?n("el-tag",{attrs:{size:e.size,type:e.type,effect:e.effect}},[e._v(e._s(e.$t("未知")))]):e._e()]:e._e()],2)}),[],!1,null,null,null);t.default=component.exports},1299:function(e,t,n){var content=n(1356);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("45294d10",content,!0,{sourceMap:!1})},1355:function(e,t,n){"use strict";var r=n(1299);n.n(r).a},1356:function(e,t,n){(t=n(61)(!1)).push([e.i,".header-title-block[data-v-683d3745]{height:60px;line-height:60px;width:100%}.content-block[data-v-683d3745]{border-top-left-radius:15px;border-top-right-radius:15px;background:#fff;width:100%}.app-title-border-tag[data-v-683d3745]{width:5px;height:25px;background:#1ea084;display:inline-block}.notice-list-item[data-v-683d3745]{height:45px;line-height:45px}.bg-student-info-block[data-v-683d3745]{background:url(/img/bg-student-info.png) no-repeat;height:180px;width:100%;border:1px dashed #ddd}.text-display-line[data-v-683d3745]{width:80px;top:4px}.name-display-line[data-v-683d3745],.text-display-line[data-v-683d3745]{display:inline-block;position:relative}.name-display-line[data-v-683d3745]{max-width:200px;top:6px}.item-block[data-v-683d3745]{border-radius:5px;background:#ebeef5;padding:10px}",""]),e.exports=t},1399:function(e,t,n){"use strict";n.r(t);n(77);var r=n(15),o=n(22),l=n(129),d=n(1263),c=n(1264),h=(n(47),{name:"studentInfo",components:{MySex:c.default},layout:"defaultAppScreen",mixins:[l.a,d.a],data:function(){return{serverAppList:[],showSign:!1,detailData:"",formSign:{id:"",onTime:"",checkTime:"",checkType:"",checkUserName:""}}},mounted:function(){},created:function(){this.initAppServer()},methods:{layoutInit:function(){},initAppServer:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getSessionInfo();case 2:e.initStudentEnroll();case 3:case"end":return t.stop()}}),t)})))()},initStudentEnroll:function(){var e=this,t={userId:this.loginUserId};this.$axios.get(o.a.server_enroll_app_process_current,{params:t}).then((function(t){t.data.data&&(e.serverAppList=t.data.data.linkList)}))},initSign:function(){var e=this,t={userId:this.loginUserId};this.$axios.get(o.a.server_enroll_app_student_checkin_get,{params:t}).then((function(t){t.data.data&&(e.formSign={id:"",onTime:t.data.data.on_time,checkTime:t.data.data.check_time,checkType:t.data.data.check_type,checkUserName:t.data.data.check_user_name})}))},serverBlock:function(e,t){"all"==t?this.$router.push({path:"/newStudent/studentAllSever",query:{id:t.id,activeType:this.active,userType:this.loginUserAppType,navH:this.navHeight,appType:this.globalAppShow,subPage:"/newStudent/studentAllSever"}}):"order"==t?this.$router.push({path:"/newStudent/studentOrder",query:{id:t.id,activeType:this.active,userType:this.loginUserAppType,navH:this.navHeight,appType:this.globalAppShow,subPage:"/newStudent/studentAllSever"}}):0==t.link_sub_type?this.$router.push({path:"/newStudent/studentStation",query:{id:t.id,activeType:this.active,userType:this.loginUserAppType,navH:this.navHeight,appType:this.globalAppShow,subPage:"/newStudent/studentAllSever"}}):4==t.link_sub_type?this.$router.push({path:"/newStudent/studentInfo",query:{id:t.id,activeType:this.active,userType:this.loginUserAppType,navH:this.navHeight,appType:this.globalAppShow,subPage:"/newStudent/studentAllSever"}}):3==t.link_sub_type?this.$router.push({path:"/newStudent/studentBill",query:{id:t.id,activeType:this.active,userType:this.loginUserAppType,navH:this.navHeight,appType:this.globalAppShow,subPage:"/newStudent/studentAllSever"}}):2==t.link_sub_type?this.$router.push({path:"/newStudent/studentDorm",query:{id:t.id,activeType:this.active,userType:this.loginUserAppType,navH:this.navHeight,appType:this.globalAppShow,dormSelType:t.ruleTypeInfo.rule_type,ruleId:t.ruleTypeInfo.rule_id,pacRegions:JSON.stringify(t.ruleTypeInfo.pacRegions),subPage:"/newStudent/studentAllSever"}}):5==t.link_sub_type?this.$router.push({path:"/newStudent/studentOrder",query:{id:t.id,activeType:this.active,userType:this.loginUserAppType,navH:this.navHeight,appType:this.globalAppShow,subPage:"/newStudent/studentAllSever"}}):9==t.link_sub_type?this.$router.push({path:"/newStudent/studentForm",query:{id:t.id,activeType:this.active,userType:this.loginUserAppType,navH:this.navHeight,appType:this.globalAppShow,linkId:t.id,subPage:"/newStudent/studentAllSever"}}):1==t.link_sub_type&&(this.initSign(),this.showSign=!0)},returnIndex:function(){this.$router.push({path:"/newStudent/studentIndex",query:{activeType:this.$route.query.activeType,userType:this.loginUserAppType,navH:this.navHeight,appType:this.globalAppShow,sessionId:this.$route.query.sessionId}})}}}),v=(n(1355),n(45)),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{class:4==e.loginUserAppType?"bg-app-success_teacher":"bg-app-success",style:{height:e.navHeight+"px"}}),e._v(" "),n("div",{staticClass:"header-title-block",class:4==e.loginUserAppType?"bg-app-success_teacher":"bg-app-success"},[n("van-col",{attrs:{span:"4"}},[n("div",{staticClass:"text-left padding-lr-10 color-white"},[n("span",{staticClass:"font-bold font-size-14",on:{click:e.returnIndex}},[n("i",{staticClass:"fa fa-chevron-left"}),e._v("\n              "+e._s(e.$t("返回"))+"\n            ")])])]),e._v(" "),n("van-col",{attrs:{span:"16"}},[n("div",{staticClass:"text-center color-white font-size-16 font-bold"},[n("span",[e._v(e._s(e.$t("全部环节")))])])]),e._v(" "),n("van-col",{attrs:{span:"4"}},[e._v("\n         \n      ")])],1),e._v(" "),n("div",{style:e.divHeight10},[n("div",[n("van-grid",{attrs:{gutter:10}},e._l(e.serverAppList,(function(t,r){return n("van-grid-item",{key:r,attrs:{icon:"photo-o"},on:{click:function(n){return e.serverBlock(n,t)}}},[n("div",{staticClass:"text-center",attrs:{slot:"icon"},slot:"icon"},[n("van-image",{attrs:{width:"30",height:"30",src:t.link_logo}})],1),e._v(" "),n("div",{staticClass:"moon-content-text-ellipsis-class margin-top-10 text-center font-size-12",staticStyle:{width:"60px"},attrs:{slot:"text"},slot:"text"},[e._v(e._s(t.link_name))])])})),1)],1)]),e._v(" "),n("van-dialog",{attrs:{showConfirmButton:!1,"close-on-click-overlay":!0},model:{value:e.showSign,callback:function(t){e.showSign=t},expression:"showSign"}},[n("div",{staticClass:"padding-lr-10 padding-tb-10"},[n("div",[n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{label:e.$t("核验人员"),prop:"phone"}},[n("label",[e._v(e._s(e.formSign.checkUserName))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("报到类型"),prop:"phone"}},[0==e.formSign.checkType?n("label",[e._v(e._s(e.$t("人工")))]):e._e(),e._v(" "),1==e.formSign.checkType?n("label",[e._v(e._s(e.$t("扫码")))]):e._e(),e._v(" "),2==e.formSign.checkType?n("label",[e._v(e._s(e.$t("人脸")))]):e._e(),e._v(" "),3==e.formSign.checkType?n("label",[e._v(e._s(e.$t("自动")))]):e._e()]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("是否准时"),prop:"phone"}},[e.formSign.onTime?n("label",[e._v(e._s(e.$t("是")))]):e._e(),e._v(" "),e.formSign.onTime?e._e():n("label",[e._v(e._s(e.$t("否")))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("报到时间"),prop:"phone"}},[n("label",[e._v(e._s(e.$moment(e.formSign.checkTime).format("YYYY-MM-DD HH:mm")))])])],1)],1)])])],1)}),[],!1,null,"683d3745",null);t.default=component.exports}}]);