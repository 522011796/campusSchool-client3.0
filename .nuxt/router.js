import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e4b9f14 = () => interopDefault(import('..\\pages\\formPrint.vue' /* webpackChunkName: "pages/formPrint" */))
const _6d281a47 = () => interopDefault(import('..\\pages\\formSystemPrint.vue' /* webpackChunkName: "pages/formSystemPrint" */))
const _53b89286 = () => interopDefault(import('..\\pages\\indexBak.vue' /* webpackChunkName: "pages/indexBak" */))
const _6ce3d216 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _f38ed84a = () => interopDefault(import('..\\pages\\loginApp.vue' /* webpackChunkName: "pages/loginApp" */))
const _dd4a60aa = () => interopDefault(import('..\\pages\\loginBakApp.vue' /* webpackChunkName: "pages/loginBakApp" */))
const _7f16c7c6 = () => interopDefault(import('..\\pages\\myInfo.vue' /* webpackChunkName: "pages/myInfo" */))
const _7cdbf884 = () => interopDefault(import('..\\pages\\signOrder.vue' /* webpackChunkName: "pages/signOrder" */))
const _4021daa8 = () => interopDefault(import('..\\pages\\student.vue' /* webpackChunkName: "pages/student" */))
const _162f70b1 = () => interopDefault(import('..\\pages\\app\\appAllServer.vue' /* webpackChunkName: "pages/app/appAllServer" */))
const _8fa4806a = () => interopDefault(import('..\\pages\\app\\appAllServerBak.vue' /* webpackChunkName: "pages/app/appAllServerBak" */))
const _1e2dbcbf = () => interopDefault(import('..\\pages\\app\\appIndex.vue' /* webpackChunkName: "pages/app/appIndex" */))
const _7e6f0ec2 = () => interopDefault(import('..\\pages\\app\\appMsgDetail.vue' /* webpackChunkName: "pages/app/appMsgDetail" */))
const _a4c6ac72 = () => interopDefault(import('..\\pages\\app\\appMyNotice.vue' /* webpackChunkName: "pages/app/appMyNotice" */))
const _a9a5d3c0 = () => interopDefault(import('..\\pages\\app\\appOtherServer.vue' /* webpackChunkName: "pages/app/appOtherServer" */))
const _10cc38a6 = () => interopDefault(import('..\\pages\\app\\appServer.vue' /* webpackChunkName: "pages/app/appServer" */))
const _2f4cf08a = () => interopDefault(import('..\\pages\\app\\appServerForm.vue' /* webpackChunkName: "pages/app/appServerForm" */))
const _770e4a51 = () => interopDefault(import('..\\pages\\app\\appStatic.vue' /* webpackChunkName: "pages/app/appStatic" */))
const _feb92780 = () => interopDefault(import('..\\pages\\app\\appSystemBZBX.vue' /* webpackChunkName: "pages/app/appSystemBZBX" */))
const _0572e902 = () => interopDefault(import('..\\pages\\app\\appSystemCGHT.vue' /* webpackChunkName: "pages/app/appSystemCGHT" */))
const _6601dfdc = () => interopDefault(import('..\\pages\\app\\appSystemDGDK.vue' /* webpackChunkName: "pages/app/appSystemDGDK" */))
const _92ed53c4 = () => interopDefault(import('..\\pages\\app\\appSystemFPJ.vue' /* webpackChunkName: "pages/app/appSystemFPJ" */))
const _0662103d = () => interopDefault(import('..\\pages\\app\\appSystemGRXX.vue' /* webpackChunkName: "pages/app/appSystemGRXX" */))
const _4367bc8c = () => interopDefault(import('..\\pages\\app\\appSystemHKGL.vue' /* webpackChunkName: "pages/app/appSystemHKGL" */))
const _a3e30910 = () => interopDefault(import('..\\pages\\app\\appSystemJKGL.vue' /* webpackChunkName: "pages/app/appSystemJKGL" */))
const _4a700f3c = () => interopDefault(import('..\\pages\\app\\appSystemMoneyForm.vue' /* webpackChunkName: "pages/app/appSystemMoneyForm" */))
const _4317784c = () => interopDefault(import('..\\pages\\app\\appSystemOrderInfo.vue' /* webpackChunkName: "pages/app/appSystemOrderInfo" */))
const _0d24c40a = () => interopDefault(import('..\\pages\\app\\appSystemPTGL.vue' /* webpackChunkName: "pages/app/appSystemPTGL" */))
const _5d5d904a = () => interopDefault(import('..\\pages\\app\\appSystemSKD.vue' /* webpackChunkName: "pages/app/appSystemSKD" */))
const _b8d1e33a = () => interopDefault(import('..\\pages\\app\\appSystemTYHT.vue' /* webpackChunkName: "pages/app/appSystemTYHT" */))
const _05b65e59 = () => interopDefault(import('..\\pages\\app\\appSystemXSHT.vue' /* webpackChunkName: "pages/app/appSystemXSHT" */))
const _f269d5c6 = () => interopDefault(import('..\\pages\\newStudent\\studentAllSever.vue' /* webpackChunkName: "pages/newStudent/studentAllSever" */))
const _66e23534 = () => interopDefault(import('..\\pages\\newStudent\\studentBill.vue' /* webpackChunkName: "pages/newStudent/studentBill" */))
const _7e551db3 = () => interopDefault(import('..\\pages\\newStudent\\studentDorm.vue' /* webpackChunkName: "pages/newStudent/studentDorm" */))
const _4e177771 = () => interopDefault(import('..\\pages\\newStudent\\studentForm.vue' /* webpackChunkName: "pages/newStudent/studentForm" */))
const _e054cfc2 = () => interopDefault(import('..\\pages\\newStudent\\studentGuide.vue' /* webpackChunkName: "pages/newStudent/studentGuide" */))
const _4910aa16 = () => interopDefault(import('..\\pages\\newStudent\\studentIndex.vue' /* webpackChunkName: "pages/newStudent/studentIndex" */))
const _3c76ca5b = () => interopDefault(import('..\\pages\\newStudent\\studentInfo.vue' /* webpackChunkName: "pages/newStudent/studentInfo" */))
const _177b291e = () => interopDefault(import('..\\pages\\newStudent\\studentOrder.vue' /* webpackChunkName: "pages/newStudent/studentOrder" */))
const _15218b97 = () => interopDefault(import('..\\pages\\newStudent\\studentStation.vue' /* webpackChunkName: "pages/newStudent/studentStation" */))
const _25d7f990 = () => interopDefault(import('..\\pages\\studentDetail\\detailIndex.vue' /* webpackChunkName: "pages/studentDetail/detailIndex" */))
const _915c714a = () => interopDefault(import('..\\pages\\studentDetail\\detailRecord.vue' /* webpackChunkName: "pages/studentDetail/detailRecord" */))
const _b987a202 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1e4b9f14,
    name: "formPrint"
  }, {
    path: "/formSystemPrint",
    component: _6d281a47,
    name: "formSystemPrint"
  }, {
    path: "/indexBak",
    component: _53b89286,
    name: "indexBak"
  }, {
    path: "/login",
    component: _6ce3d216,
    name: "login"
  }, {
    path: "/loginApp",
    component: _f38ed84a,
    name: "loginApp"
  }, {
    path: "/loginBakApp",
    component: _dd4a60aa,
    name: "loginBakApp"
  }, {
    path: "/myInfo",
    component: _7f16c7c6,
    name: "myInfo"
  }, {
    path: "/signOrder",
    component: _7cdbf884,
    name: "signOrder"
  }, {
    path: "/student",
    component: _4021daa8,
    name: "student"
  }, {
    path: "/app/appAllServer",
    component: _162f70b1,
    name: "app-appAllServer"
  }, {
    path: "/app/appAllServerBak",
    component: _8fa4806a,
    name: "app-appAllServerBak"
  }, {
    path: "/app/appIndex",
    component: _1e2dbcbf,
    name: "app-appIndex"
  }, {
    path: "/app/appMsgDetail",
    component: _7e6f0ec2,
    name: "app-appMsgDetail"
  }, {
    path: "/app/appMyNotice",
    component: _a4c6ac72,
    name: "app-appMyNotice"
  }, {
    path: "/app/appOtherServer",
    component: _a9a5d3c0,
    name: "app-appOtherServer"
  }, {
    path: "/app/appServer",
    component: _10cc38a6,
    name: "app-appServer"
  }, {
    path: "/app/appServerForm",
    component: _2f4cf08a,
    name: "app-appServerForm"
  }, {
    path: "/app/appStatic",
    component: _770e4a51,
    name: "app-appStatic"
  }, {
    path: "/app/appSystemBZBX",
    component: _feb92780,
    name: "app-appSystemBZBX"
  }, {
    path: "/app/appSystemCGHT",
    component: _0572e902,
    name: "app-appSystemCGHT"
  }, {
    path: "/app/appSystemDGDK",
    component: _6601dfdc,
    name: "app-appSystemDGDK"
  }, {
    path: "/app/appSystemFPJ",
    component: _92ed53c4,
    name: "app-appSystemFPJ"
  }, {
    path: "/app/appSystemGRXX",
    component: _0662103d,
    name: "app-appSystemGRXX"
  }, {
    path: "/app/appSystemHKGL",
    component: _4367bc8c,
    name: "app-appSystemHKGL"
  }, {
    path: "/app/appSystemJKGL",
    component: _a3e30910,
    name: "app-appSystemJKGL"
  }, {
    path: "/app/appSystemMoneyForm",
    component: _4a700f3c,
    name: "app-appSystemMoneyForm"
  }, {
    path: "/app/appSystemOrderInfo",
    component: _4317784c,
    name: "app-appSystemOrderInfo"
  }, {
    path: "/app/appSystemPTGL",
    component: _0d24c40a,
    name: "app-appSystemPTGL"
  }, {
    path: "/app/appSystemSKD",
    component: _5d5d904a,
    name: "app-appSystemSKD"
  }, {
    path: "/app/appSystemTYHT",
    component: _b8d1e33a,
    name: "app-appSystemTYHT"
  }, {
    path: "/app/appSystemXSHT",
    component: _05b65e59,
    name: "app-appSystemXSHT"
  }, {
    path: "/newStudent/studentAllSever",
    component: _f269d5c6,
    name: "newStudent-studentAllSever"
  }, {
    path: "/newStudent/studentBill",
    component: _66e23534,
    name: "newStudent-studentBill"
  }, {
    path: "/newStudent/studentDorm",
    component: _7e551db3,
    name: "newStudent-studentDorm"
  }, {
    path: "/newStudent/studentForm",
    component: _4e177771,
    name: "newStudent-studentForm"
  }, {
    path: "/newStudent/studentGuide",
    component: _e054cfc2,
    name: "newStudent-studentGuide"
  }, {
    path: "/newStudent/studentIndex",
    component: _4910aa16,
    name: "newStudent-studentIndex"
  }, {
    path: "/newStudent/studentInfo",
    component: _3c76ca5b,
    name: "newStudent-studentInfo"
  }, {
    path: "/newStudent/studentOrder",
    component: _177b291e,
    name: "newStudent-studentOrder"
  }, {
    path: "/newStudent/studentStation",
    component: _15218b97,
    name: "newStudent-studentStation"
  }, {
    path: "/studentDetail/detailIndex",
    component: _25d7f990,
    name: "studentDetail-detailIndex"
  }, {
    path: "/studentDetail/detailRecord",
    component: _915c714a,
    name: "studentDetail-detailRecord"
  }, {
    path: "/",
    component: _b987a202,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
