import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Index from '../view/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
	  path: '*',
	  redirect: '/'
	}
  ]
})
