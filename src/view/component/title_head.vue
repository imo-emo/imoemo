<template>
	<div class="component">
		<header>
			组件模块Er
			<span @click="back()">back</span>
		</header>
	</div>
</template>
<script>
	import myComponent from  "./my_component.vue";
	import myComponente from "./my_component2.vue";
	export default{
		data(){
			return{
				name:'smallblack'
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			backfromchild(val){
				alert(val);
			}
		},
		mounted(){

		},
		components:{
			myComponent,
			myComponente
		}
	}
</script>
<style lang="sass">
	@import "./component.scss"
</style>