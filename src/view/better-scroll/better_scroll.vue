<template>
	<div id="better_scroll" ref="menu">
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>0</li>
		</ul>
	</div>
</template>
<script>
	import Bscroll from 'better-scroll'
	export default{
		data(){
			return{
				scroll:''
			}
		},
		methods:{

		},
		mounted(){
			this.$nextTick(()=>{
				this.scroll=new Bscroll(this.$refs.menu,{})
			})
		},
		watch:{
			scroll(){
				console.log(this.scroll)
			}
		}
	}
</script>
<style lang="sass">
	@import "./better_scroll.scss"
</style>