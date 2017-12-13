import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import ModuleA from './a.js'
export default new Vuex.Store({
	modules:{
		a:ModuleA
	}
})