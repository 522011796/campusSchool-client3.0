import Vue from 'vue'
import formCreate from '@form-create/element-ui'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import FcEditor from "@form-create/component-wangeditor";

Vue.use(ELEMENT)
Vue.component('fcEditor', FcEditor);
Vue.use(formCreate)
