// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ajax from 'ajax';
import tool from './assets/v_tap.js'
import VueTap from 'v-tap';
Vue.config.productionTip = false
Vue.prototype.ajax = ajax;
Vue.use(tool)
Vue.use(VueTap)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
console.log(Vue);