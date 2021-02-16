import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
// import SkillsPage from '@/components/SkillsPage'
// import WorksPage from '@/components/WorksPage'
// import ProfilePage from '@/components/ProfilePage'
// import ContactPage from '@/components/ContactPage'




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
    // {
    //   path: '/skills',
    //   name: 'SkillsPage',
    //   component: SkillsPage
    // },
    // {
    //   path: '/works',
    //   name: 'WorksPage',
    //   component: WorksPage
    // },
    // {
    //   path: '/profile',
    //   name: 'ProfilePage',
    //   component: ProfilePage
    // },
    // {
    //   path: '/contact',
    //   name: 'ContactPage',
    //   component: ContactPage
    // }
  ]
})
