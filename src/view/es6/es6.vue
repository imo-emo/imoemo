<template>
	<div id="es6">
		
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		methods:{

		},
		mounted(){
				/*1.let or const*/
			// let or const  相同点都在块级作用域里面生效，无变量提升，都不可在块级作作用域里面进行重复定义,区别let 可赋值,而const赋值之后不可改变
			/*let a= {
				a:'1',
				b:'2'
			}
			console.log(a);
			const Pi=3.1415;*/
				/*2.解构赋值*/
			//解构赋值  允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构 只要等号两边的模式相同，左边的变量就会被赋予对应的值
			//1.数组的解构赋值
			/*let [b,c,d]=[1,2,3]
			console.log(b)
			console.log(c);
			console.log(d);
			let [e, ...f] = [3,4,5,6]
			console.log(e);
			console.log(f);*/
			//解构赋值设定默认值
			/*let [foo=true]=[];
			console.log(foo);
			let [x,y=2]=[3];
			console.log(x);
			console.log(y);
			let [z=1,q=z]=[];
			console.log(z);
			console.log(q);*/
			//对象解构赋值
			/*let {barz,bars}={barz:{name:'123'},bars:[1,2,4,3,2]};
			console.log(bars);
			console.log(barz);*/
			//对象里面能包括数组进行赋值
			/*let obj={
				p:[
					'hello',
					{y:'world'}
				]
			}
			let {p,p:[x,{y}]}=obj;
			console.log(x)
			console.log(y);
			console.log(p)*/
			//在解构赋值之后可以对之前赋值的值进行解构赋值
			/*let node={
				loc:{
					start:{
						line:1,
						column:5
					}
				}
			}
			let {loc,loc:{start},loc:{start:{line}}}=node
			console.log(loc);
			console.log(start);
			console.log(line)*/
			//解构赋值用于赋一个新的值，不可以赋一个已经定义的值
			//数组用对象解构  -- 数组的特殊解构可以这样写
			/*let arr=[1,2,3];
			let {0:first,[arr.length-1]:last}=arr;
			console.log(first);
			console.log(last);*/
			//字符串赋值
			/*const [a,b,c,d,e,f]='hellos';
			console.log(a,b,c,d,e,f)
			let {length:len}='hellos';
			console.log(len);*/
			//函数赋值
			/*function abc([x,y]){
				console.log(x);
				console.log(y);
			}
			abc([1,2])*/
			//函数解构
			/*import {tab} from 'element-ui'*/
		}
	}
</script>
<style>
	@import "./es6.scss"
</style>