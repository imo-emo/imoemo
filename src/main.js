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
router.beforeEach((to,from,next)=>{
    console.log(to);
    console.log(from);
    next();    //跳转路由  如果不加next();则不跳转，如果跳转到固定路径,使用location.hash= 'hash名称'
})