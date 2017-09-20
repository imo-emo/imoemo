<template>
	<div id="touch">
		<button @click="btnClick">c-tap</button>
		<button v-tap="{methods:btnClick}">c-tap</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			btnClick(){
				alert(1);
			}
		},
		mounted(){
			
		}
	}
</script>
<style lang="sass">
	@import './touch.scss'
</style>