import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
const Index = r => require.ensure([],()=>r(require('../view/index/index.vue')),'Index')
const Doit = r => require.ensure([], () => r(require('../view/doit/doit.vue')), 'doit')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path:'/doit/:name',
      name:'doit',
      component:Doit
    },{
	  path: '*',
	  redirect: '/'
	}
  ]
})
