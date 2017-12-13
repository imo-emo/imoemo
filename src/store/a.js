//定义state
const state = {
    count: 1
}
//定义mutations  //简单的修改状态的操作
const mutations = {
    add(state) {
        state.count += 1;
        console.log(state.count)
    }
}
//定义getter
const getters = {
    counts(state,getter,rootState) {
        return state.count += 100;
    }
}
//定义actions  //可以调用Mutations里的方法   //异步修改状态
const actions = {
    addActions({ commit }) {
        commit('add');
    }
}

const ModuleA = {
    state, mutations, getters, actions
}
export default ModuleA;