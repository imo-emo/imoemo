<template>
	<div class="transition_effect">
		<header>
			过渡状态<span @click="back()">back</span>
		</header>
		<main>
			<div class="container">
				<input type="text" v-model="data">
				{{data1}}
				<button @click="show=!show">点击</button>
				<transition name="fade">
					<p v-if="show">hello</p>
				</transition>
			</div>
		</main>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				data:'',
				show:true
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		},
		computed:{
			data1(){
				let reg=/^((\d)*|(\d)*\.(\d|\d\d))$/;
				if(reg.test(this.data)){
					return this.data
				}else{
					return ''
				}
			}
		},
		mounted(){

		}
	}
</script>
<style lang="sass">
	@import "./transition_effect.scss"
</style>