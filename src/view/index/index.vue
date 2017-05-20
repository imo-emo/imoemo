<template>
	<div id="index">
		<h2>vue</h2>
		<h1>imoemo</h1>
		<button @click="func()">Go</button>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			func(){
				this.$router.push({name:'doit',params:{name:'smallblack'}})
			}
		},
		mounted(){

		}
	}
</script>
<style type="text/css" lang="sass">
	@import "./index.scss"
</style>