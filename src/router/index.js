import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Swipe from '@/pages/Swipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/swipe',
      name: 'Swipe',
      component: Swipe
    }
  ]
})
