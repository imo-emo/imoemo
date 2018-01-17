import * as types from './types';
import getters from './getters';

const state = {
	count:10
}

const mutations = {
	[types.INCREMENT] (state){
		state.count++;
	},
	[types.DECREMENT] (state){
		state.count--;
	}
}

export default{
	mutations,
	getters,
	state
}