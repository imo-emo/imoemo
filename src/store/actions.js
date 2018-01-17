import * as types from './module/types';  //定义的mutation

export default{
	increment:({commit}) =>{
		commit(types.INCREMENT);
	},
	decrement:({commit,state}) =>{
		commit(types.DECREMENT);
		console.log(state.mutations.count)
	}
}