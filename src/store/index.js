import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import actions from './actions';  // actions
import mutations from './module/mutations';  //模块state/mutation/getter
export default new Vuex.Store({
	actions,
	modules:{
		mutations,  //模块
	}
})