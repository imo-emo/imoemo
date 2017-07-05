<template>
	<div id="reactive">
		<p>深入响应式原理 <span @click="back()">back</span></p>
		<ul>
			<li>{{data1}}</li>
			<li>{{JSON.stringify(data2)}}</li>
			<button @click="data2_change">对象转换   使用this.$set</button>
			<li>对象2 {{JSON.stringify(data3)}}</li>
			<li><button @click="data2_add_data3">对象合并</button></li>
			<li>{{JSON.stringify(data4)}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				data1:'初始化数据只有在data中定义才会是响应式的',    //初始化数据只有在data中定义才会是响应式的
				data2:{      //使用this.$set设置对象
					name:'abc'
				},
				data3:{
					call:'cba'
				},
				data4:{},
				arr:[1,2,3,4,5,6,7],
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			data2_change(){
				this.$set(this.data2,'b',2)
			},
			data2_add_data3(){
				this.data4=Object.assign({},this.data2,this.data3);
				console.log(this.data4)
				let that=this;
				this.$nextTick(()=>{
					console.log(this.data4)
				})
			},
			arr_change(){
				console.log(this.arr)
				for(let i=0;i<this.arr.length;i++){
					for(let e=0;e<this.arr.length;e++){
						if(this.arr[i]<this.arr[e]){
							let val=this.arr[i];
							this.arr[i]=this.arr[e];
							this.arr[e]=val;
						}
					}
				}
				for(let i=0;i<3;i++){
					this.arr.push(this.arr[0]);
					this.arr.splice(0,1);
				}
				console.log(this.arr);
			}
		},
		mounted(){
			this.arr_change();
		}
	}
</script>
<style type="text/css" lang="scss">
 	@import "./reactive.scss"
</style>