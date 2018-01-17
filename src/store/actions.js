import * as types from './types';

export default{
	increment:({commit}) =>{
		commit(types.INCREMENT);
	},
	decrement:({commit,state}) =>{
		commit(types.DECREMENT);
		console.log(state.mutations.count)
	}
}