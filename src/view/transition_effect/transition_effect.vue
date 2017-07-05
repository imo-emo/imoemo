<template>
	<div class="transition_effect">
		<header>
			过渡状态<span @click="back()">back</span>
		</header>
		<main>
			<div class="container">
				
			</div>
		</main>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		},
		mounted(){

		}
	}
</script>
<style lang="sass">
	@import "./transition_effect.scss"
</style>