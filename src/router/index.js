import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
const Index = r => require.ensure([],()=>r(require('../view/index/index.vue')),'Index')
const Doit = r => require.ensure([], () => r(require('../view/doit/doit.vue')), 'doit')
const Reactive = r => require.ensure([],()=>r(require("../view/reactive/reactive.vue")),'reactive')
const c3 = r =>require.ensure([],()=>r(require("../view/c3/c3.vue")),'c3')
const list= r =>require.ensure([],()=>r(require("../view/list/list.vue")),'list');  //目录列表  
const component= r =>require.ensure([],()=>r(require("../view/component/component.vue")),'component');  //组件模块
const transitionEffect= r =>require.ensure([],()=>r(require('../view/transition_effect/transition_effect.vue')),'transition_effect')  //过渡效果
const standard= r =>require.ensure([],()=>r(require('../view/standard/standard.vue')),'standard')
const es6 = r =>require.ensure([],()=>r(require("../view/es6/es6.vue")),'es6');

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
      path:'/reactive',
      name:'reactive',
      component:Reactive
    },{
      path:'/c3',
      name:'c3',
      component:c3
    },{
      path:'/list',  //目录列表
      name:'list',
      component:list
    },{
      path:'/component',  ////组件模块
      name:'component',
      component:component
    },{
      path:'/transition_effect',
      name:'transition_effect',
      component:transitionEffect
    },{
      path:'/standard',
      name:'standard',
      component:standard
    },{
      path:'/es6',
      name:'es6',
      component:es6
    },{
	  path: '*',
	  redirect: '/'
	}
  ]
})
