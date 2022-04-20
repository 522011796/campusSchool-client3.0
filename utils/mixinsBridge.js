import global from "~/utils/global";
import {common} from "~/utils/api/url";
import {
  setChildren,
  setCollegeChildren,
  setSchoolBuildChildren,
  setDormBuildChildren,
  setDeptChildren,
  MessageSuccess, MessageError
} from "~/utils/utils";

export default {
  data (){
    return {
      testLogin: '',
      value: '',
      testDefault: '',
      navHeight: 0,
      globalAppShow: '',
      isAndroid: false,
      isIos: false,
    }
  },
  mounted(){
    this.getUrl();
    this.initBridage();
  },
  created() {

  },
  methods: {
    getUrl(){
      this.loginUserAppType = this.$route.query.userType;
      this.navHeight = this.$route.query.navH;
      this.globalAppShow = this.$route.query.appType;
    },
    returnGlobalMain(value){
      let _self = this;
      if (this.globalAppShow == 'android') {
        this.setupWebViewJavascriptBridge(function(bridge) {
          //JS 调用 OC 的方法，方法名就是 OC 中提前注册的方法
          bridge.callHandler('returnGlobalMain', {'key': value}, function responseCallback(responseData) {

          });
        });
      }
      if (this.globalAppShow == 'ios') {
        this.setupWebViewJavascriptBridge(function(bridge) {
          //JS 调用 OC 的方法，方法名就是 OC 中提前注册的方法
          bridge.callHandler('returnGlobalMain', {'key': value}, function responseCallback(responseData) {

          });
        });
      }
    },
    setupWebViewJavascriptBridge(callback) {
      let _self = this;
      //Android使用
      if (this.globalAppShow == 'android') {
        if (window.WebViewJavascriptBridge) {
          callback(window.WebViewJavascriptBridge)
        } else {
          document.addEventListener(
            'WebViewJavascriptBridgeReady',
            () => {
              callback(window.WebViewJavascriptBridge)
            },
            false
          )
        }
      }else if(this.globalAppShow == 'ios'){
        if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        //WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
      }
    },
    initBridage(){
      let _self = this;
      try {
        this.setupWebViewJavascriptBridge(function(bridge) {
          if (_self.globalAppShow == 'android') {
            //初始化
            bridge.init((message, responseCallback) => {
              var data = {
                'Javascript Responds': 'Wee!'
              }
              responseCallback(data)
            })
          }
        })
      }catch (e){

      }
    }
  }
}
