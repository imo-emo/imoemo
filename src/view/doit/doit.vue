<template>
	<div class="todobox">
		{{name}}
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				name:''
			}
		},
		methods:{

		},
		mounted(){
			this.name=this.$route.params.name
		}
	}
</script>
<style type="text/css">

</style>