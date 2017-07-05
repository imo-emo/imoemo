<template>
	<div v-on:click="giveparent">A customer component! by {{myName}}</div>
</template>
<script>
	export default{
		props:['myName'],
		data(){
			return{
				
			}
		},
		methods:{
			giveparent(){
				alert('To parent')
				this.$emit('increment',this.myName)
			}
		}
	}
</script>
<style lang="sass">
	@import "./my_component.scss"
</style>