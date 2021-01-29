// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper from 'swiper/swiper-bundle.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import VueObserveVisibility from 'vue-observe-visibility'
import 'swiper/swiper-bundle.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueObserveVisibility)
// Vue.use(VueAwesomeSwiper)
Vue.use(getAwesomeSwiper(Swiper))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
