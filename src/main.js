// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import {
  CommonModel
} from './http/model/common.js'
// 解决300ms点击延迟问题
import fastClick from 'fastclick'
// 样式初始化
import './assets/reset.css'
// 解决一像素边框问题
import './assets/border.css'
import {
  Toast,
  Swipe,
  SwipeItem
} from 'vant'

Vue.use(Toast).use(Swipe).use(SwipeItem)
Vue.config.productionTip = false
fastClick.attach(document.body)

// 在vue原型上添加封装好的请求方法
let commonModel = new CommonModel()
Vue.prototype.getData = commonModel.getData
Vue.prototype.getConfig = commonModel.getConfig

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
