<template>
	<div id="standard">
		<p>姓：<!-- {{family_name}} <--><input type="text" v-model='family_name'></p>
		<p>名：<!-- {{given_name}} <--><input type="text" v-model='given_name'></p>
		<p v-if="full_name">全名：<span>{{full_name}}</span></p>
		<button @click="getFullName">获取全名</button>
		<p>{{acquire_fullName}}</p>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				family_name:'李',
				given_name:'明',
				acquire_fullName:'',
			}
		},
		methods:{
			getFullName(){
				this.acquire_fullName=this.family_name+this.given_name;
			}
		},
		computed:{
			full_name(){
				return this.family_name+this.given_name
			}
		},
		mounted(){
			this.getFullName();
		}
	}
</script>
<style lang="sass">
	@import './standard.scss'
</style>