<template>
	<div class="list">
		<p>目录</p>
		<ul>
			<li @click="router_push('component')">component</li>
			<li @click="router_push('reactive')">深入响应式原理</li>
			<li @click="router_push('transition_effect')">过渡效果</li>
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

		}
	}
</script>
<style lang="sass">
	@import "./list.scss"
</style>