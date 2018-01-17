import * as types from './types';  //mutation方法定义 方便actions调用
import getters from './getters';  //getters 类似computed

const state = { //state
	count:10
}

const mutations = {  //mutations
	[types.INCREMENT] (state){
		state.count++;
	},
	[types.DECREMENT] (state){
		state.count--;
	}
}

export default{  //抛出
	mutations,
	getters,
	state
}