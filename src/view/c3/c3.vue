<template>
	<div id="c3">
		<div class="container">
			<p :class="obje" @click="todo"></p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				obje:''
			}
		},
		methods:{
			todo(){
				this.obje='pdo'
			}
		}
	}
</script>
<style type="text/css" lang="scss">
	@import "./c3.scss"
</style>