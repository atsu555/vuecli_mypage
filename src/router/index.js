import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/profile',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/skills',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/service',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/works',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
