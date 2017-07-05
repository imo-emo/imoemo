<template>
	<div class="component2">
		{{reverse_name}}
	</div>
</template>
<script>
	export default{
		props:[
			'myName'
		],
		data(){
			return{

			}
		},
		methods:{

		},
		mounted(){

		},
		computed:{
			reverse_name(){
				return this.myName.split('').reverse().join('');
			}
		}
	}
</script>