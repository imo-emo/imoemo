<template>
	<div class="todobox">
		<button @click="btnclick">点我啊</button>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				name:'peizixin',
				obj:{
					c:'c',
					b:'b',
					d:'d',
					g:'g',
					a:'a'
				}
			}
		},
		methods:{
			btnclick(){
				console.log(this.obj);
			},
			dataChange(obj){
			    var newkey = Object.keys(obj).sort();
			    var newObj = {};
			    for (var i = 0; i < newkey.length; i++){
			        newObj[newkey[i]] = obj[newkey[i]];
			    }
			    return newObj;//返回对象
			},
		},
		mounted(){
			/*this.name=this.$route.params.name;*/
		},
		computed:{
			/*pei:function(){
				return this.name.split('').reverse().join("");
			}*/
		}
	}
</script>
<style type="text/css">

</style>