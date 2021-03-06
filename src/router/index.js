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
const better_scroll= r =>require.ensure([],()=>r(require("../view/better-scroll/better_scroll.vue")),'better_scroll')
const touch = r =>require.ensure([],()=>r(require("../view/touch/touch.vue")),'touch')
const demo = r =>require.ensure([],()=>r(require("../view/demo/demo.vue")),'demo')
const recursion = r =>require.ensure([],()=>r(require("../view/recursion/recursion.vue")),'recursion')  //多层级渲染
const echarts = r =>require.ensure([],()=>r(require("../view/echarts/echarts.vue")));
const draggable = r =>require.ensure([],()=>r(require("../view/draggable/draggable.vue")));  //vue拖拽模版

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
      path:'/better_scroll',
      name:'better_scroll',
      component:better_scroll
    },{
      path:'/touch',
      name:'touch',
      component:touch
    },{
      path:'/demo',
      name:'demo',
      component: demo
    },{
      path:'/recursion',
      name:'recursion',
      component: recursion
    },{
      path:'/echarts',
      name:'echarts',
      component:echarts
    },{
      path:'/draggable',
      name:'draggable',
      component:draggable
    },{
	  path: '*',
	  redirect: '/'
	}
  ]
})