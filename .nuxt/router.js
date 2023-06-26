import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a6f63c8 = () => interopDefault(import('../pages/formPrint.vue' /* webpackChunkName: "pages/formPrint" */))
const _3251d12b = () => interopDefault(import('../pages/indexBak.vue' /* webpackChunkName: "pages/indexBak" */))
const _54a90330 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3b32a36e = () => interopDefault(import('../pages/loginApp.vue' /* webpackChunkName: "pages/loginApp" */))
const _ab1f1306 = () => interopDefault(import('../pages/loginBakApp.vue' /* webpackChunkName: "pages/loginBakApp" */))
const _70a27a0b = () => interopDefault(import('../pages/myInfo.vue' /* webpackChunkName: "pages/myInfo" */))
const _29b191e0 = () => interopDefault(import('../pages/signOrder.vue' /* webpackChunkName: "pages/signOrder" */))
const _d4a08b0c = () => interopDefault(import('../pages/student.vue' /* webpackChunkName: "pages/student" */))
const _d409a9bc = () => interopDefault(import('../pages/app/appAllServer.vue' /* webpackChunkName: "pages/app/appAllServer" */))
const _754323ba = () => interopDefault(import('../pages/app/appAllServerBak.vue' /* webpackChunkName: "pages/app/appAllServerBak" */))
const _2edb50a0 = () => interopDefault(import('../pages/app/appIndex.vue' /* webpackChunkName: "pages/app/appIndex" */))
const _40943310 = () => interopDefault(import('../pages/app/appMsgDetail.vue' /* webpackChunkName: "pages/app/appMsgDetail" */))
const _5f275d36 = () => interopDefault(import('../pages/app/appMyNotice.vue' /* webpackChunkName: "pages/app/appMyNotice" */))
const _66f3f851 = () => interopDefault(import('../pages/app/appOtherServer.vue' /* webpackChunkName: "pages/app/appOtherServer" */))
const _da0a0856 = () => interopDefault(import('../pages/app/appServer.vue' /* webpackChunkName: "pages/app/appServer" */))
const _ae0ef78e = () => interopDefault(import('../pages/app/appServerForm.vue' /* webpackChunkName: "pages/app/appServerForm" */))
const _0d85e500 = () => interopDefault(import('../pages/app/appStatic.vue' /* webpackChunkName: "pages/app/appStatic" */))
const _0b620022 = () => interopDefault(import('../pages/app/appSystemBZBX.vue' /* webpackChunkName: "pages/app/appSystemBZBX" */))
const _7f1e7cb1 = () => interopDefault(import('../pages/app/appSystemCGHT.vue' /* webpackChunkName: "pages/app/appSystemCGHT" */))
const _40a518ea = () => interopDefault(import('../pages/app/appSystemDGDK.vue' /* webpackChunkName: "pages/app/appSystemDGDK" */))
const _ffe4b828 = () => interopDefault(import('../pages/app/appSystemGRXX.vue' /* webpackChunkName: "pages/app/appSystemGRXX" */))
const _57f7b569 = () => interopDefault(import('../pages/app/appSystemHKGL.vue' /* webpackChunkName: "pages/app/appSystemHKGL" */))
const _27ba0f27 = () => interopDefault(import('../pages/app/appSystemJKGL.vue' /* webpackChunkName: "pages/app/appSystemJKGL" */))
const _91ff4bda = () => interopDefault(import('../pages/app/appSystemMoneyForm.vue' /* webpackChunkName: "pages/app/appSystemMoneyForm" */))
const _8aa6b4ea = () => interopDefault(import('../pages/app/appSystemOrderInfo.vue' /* webpackChunkName: "pages/app/appSystemOrderInfo" */))
const _731931aa = () => interopDefault(import('../pages/app/appSystemPTGL.vue' /* webpackChunkName: "pages/app/appSystemPTGL" */))
const _45ad6a8a = () => interopDefault(import('../pages/app/appSystemSKD.vue' /* webpackChunkName: "pages/app/appSystemSKD" */))
const _1d42a212 = () => interopDefault(import('../pages/app/appSystemTYHT.vue' /* webpackChunkName: "pages/app/appSystemTYHT" */))
const _7f61f208 = () => interopDefault(import('../pages/app/appSystemXSHT.vue' /* webpackChunkName: "pages/app/appSystemXSHT" */))
const _3aa41d48 = () => interopDefault(import('../pages/newStudent/studentAllSever.vue' /* webpackChunkName: "pages/newStudent/studentAllSever" */))
const _1f77ea42 = () => interopDefault(import('../pages/newStudent/studentBill.vue' /* webpackChunkName: "pages/newStudent/studentBill" */))
const _07b6f35e = () => interopDefault(import('../pages/newStudent/studentDorm.vue' /* webpackChunkName: "pages/newStudent/studentDorm" */))
const _510d65c8 = () => interopDefault(import('../pages/newStudent/studentForm.vue' /* webpackChunkName: "pages/newStudent/studentForm" */))
const _32ae77d4 = () => interopDefault(import('../pages/newStudent/studentGuide.vue' /* webpackChunkName: "pages/newStudent/studentGuide" */))
const _7e508aaa = () => interopDefault(import('../pages/newStudent/studentIndex.vue' /* webpackChunkName: "pages/newStudent/studentIndex" */))
const _744ebff4 = () => interopDefault(import('../pages/newStudent/studentInfo.vue' /* webpackChunkName: "pages/newStudent/studentInfo" */))
const _d1c969b4 = () => interopDefault(import('../pages/newStudent/studentOrder.vue' /* webpackChunkName: "pages/newStudent/studentOrder" */))
const _6541520c = () => interopDefault(import('../pages/newStudent/studentStation.vue' /* webpackChunkName: "pages/newStudent/studentStation" */))
const _3e6646dd = () => interopDefault(import('../pages/studentDetail/detailIndex.vue' /* webpackChunkName: "pages/studentDetail/detailIndex" */))
const _df700f54 = () => interopDefault(import('../pages/studentDetail/detailRecord.vue' /* webpackChunkName: "pages/studentDetail/detailRecord" */))
const _0c03db51 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/formPrint",
    component: _1a6f63c8,
    name: "formPrint"
  }, {
    path: "/indexBak",
    component: _3251d12b,
    name: "indexBak"
  }, {
    path: "/login",
    component: _54a90330,
    name: "login"
  }, {
    path: "/loginApp",
    component: _3b32a36e,
    name: "loginApp"
  }, {
    path: "/loginBakApp",
    component: _ab1f1306,
    name: "loginBakApp"
  }, {
    path: "/myInfo",
    component: _70a27a0b,
    name: "myInfo"
  }, {
    path: "/signOrder",
    component: _29b191e0,
    name: "signOrder"
  }, {
    path: "/student",
    component: _d4a08b0c,
    name: "student"
  }, {
    path: "/app/appAllServer",
    component: _d409a9bc,
    name: "app-appAllServer"
  }, {
    path: "/app/appAllServerBak",
    component: _754323ba,
    name: "app-appAllServerBak"
  }, {
    path: "/app/appIndex",
    component: _2edb50a0,
    name: "app-appIndex"
  }, {
    path: "/app/appMsgDetail",
    component: _40943310,
    name: "app-appMsgDetail"
  }, {
    path: "/app/appMyNotice",
    component: _5f275d36,
    name: "app-appMyNotice"
  }, {
    path: "/app/appOtherServer",
    component: _66f3f851,
    name: "app-appOtherServer"
  }, {
    path: "/app/appServer",
    component: _da0a0856,
    name: "app-appServer"
  }, {
    path: "/app/appServerForm",
    component: _ae0ef78e,
    name: "app-appServerForm"
  }, {
    path: "/app/appStatic",
    component: _0d85e500,
    name: "app-appStatic"
  }, {
    path: "/app/appSystemBZBX",
    component: _0b620022,
    name: "app-appSystemBZBX"
  }, {
    path: "/app/appSystemCGHT",
    component: _7f1e7cb1,
    name: "app-appSystemCGHT"
  }, {
    path: "/app/appSystemDGDK",
    component: _40a518ea,
    name: "app-appSystemDGDK"
  }, {
    path: "/app/appSystemGRXX",
    component: _ffe4b828,
    name: "app-appSystemGRXX"
  }, {
    path: "/app/appSystemHKGL",
    component: _57f7b569,
    name: "app-appSystemHKGL"
  }, {
    path: "/app/appSystemJKGL",
    component: _27ba0f27,
    name: "app-appSystemJKGL"
  }, {
    path: "/app/appSystemMoneyForm",
    component: _91ff4bda,
    name: "app-appSystemMoneyForm"
  }, {
    path: "/app/appSystemOrderInfo",
    component: _8aa6b4ea,
    name: "app-appSystemOrderInfo"
  }, {
    path: "/app/appSystemPTGL",
    component: _731931aa,
    name: "app-appSystemPTGL"
  }, {
    path: "/app/appSystemSKD",
    component: _45ad6a8a,
    name: "app-appSystemSKD"
  }, {
    path: "/app/appSystemTYHT",
    component: _1d42a212,
    name: "app-appSystemTYHT"
  }, {
    path: "/app/appSystemXSHT",
    component: _7f61f208,
    name: "app-appSystemXSHT"
  }, {
    path: "/newStudent/studentAllSever",
    component: _3aa41d48,
    name: "newStudent-studentAllSever"
  }, {
    path: "/newStudent/studentBill",
    component: _1f77ea42,
    name: "newStudent-studentBill"
  }, {
    path: "/newStudent/studentDorm",
    component: _07b6f35e,
    name: "newStudent-studentDorm"
  }, {
    path: "/newStudent/studentForm",
    component: _510d65c8,
    name: "newStudent-studentForm"
  }, {
    path: "/newStudent/studentGuide",
    component: _32ae77d4,
    name: "newStudent-studentGuide"
  }, {
    path: "/newStudent/studentIndex",
    component: _7e508aaa,
    name: "newStudent-studentIndex"
  }, {
    path: "/newStudent/studentInfo",
    component: _744ebff4,
    name: "newStudent-studentInfo"
  }, {
    path: "/newStudent/studentOrder",
    component: _d1c969b4,
    name: "newStudent-studentOrder"
  }, {
    path: "/newStudent/studentStation",
    component: _6541520c,
    name: "newStudent-studentStation"
  }, {
    path: "/studentDetail/detailIndex",
    component: _3e6646dd,
    name: "studentDetail-detailIndex"
  }, {
    path: "/studentDetail/detailRecord",
    component: _df700f54,
    name: "studentDetail-detailRecord"
  }, {
    path: "/",
    component: _0c03db51,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
