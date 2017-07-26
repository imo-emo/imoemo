import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state:{  //定义了应用状态的数据结构，同样可以在这里设置默认的初始状态
		projects:[],
		userProfile:{}
	},
	actions:{  //Actions 是定义提交触发更新信息的描述，常见的例子有从服务端获取数据，在数据完成之完成后会调用store.commit()来调用更改Store中的状态。可以在组件中使用dispatch来触发Actions
		
	},
	mutations:{  //调用mutations是唯一允许更新应用状态的地方

	},
	getters:{	//getter 允许组件从store中获取数据，譬如我们可以从store中的projectList 中筛选出已完成的项目列表

	},
	modules:{   //modules允许将单一的store拆分为多个store的同时保存在单一的状态数中。随着应用复杂度的增加，这种拆分能够更好的组织代码

	}
})