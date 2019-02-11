<template>
	<div class="list">
		<p>目录</p>
		<ul>
			<li @click="router_push('component')">component</li>
			<li @click="router_push('reactive')">深入响应式原理</li>
			<li @click="router_push('transition_effect')">过渡效果</li>
			<li @click="router_push('standard')">前端结构规范</li>
			<li @click="router_push('es6')">es6</li>
			<li @click="router_push('better_scroll')">better-scroll</li>
			<li @click="router_push('recursion')">多层级递归渲染</li>
			<li @click="router_push('echarts')">map echarts</li>
			<li @click="router_push('draggable')">拖拽控件</li>
			<!-- <li @click="router_push('touch')">v-touch</li> -->
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			router_push(link){
				this.$router.push({name:link})
			}
		},
		mounted(){
			//console.log(this.$store.state.abc)
		}
	}
</script>
<style lang="sass">
	@import "./list.scss"
</style>