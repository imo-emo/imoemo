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
			//函数的拓展
			//1.函数参数的默认值
			/*function abc(x,y = 'world'){
				console.log(x,y)
			}
			abc('hello');
			abc('hello','boy');
			abc('hello','')*/
			//2.与解构赋值结合使用
			/*function foo({x,y = 5}){
				console.log(x,y)
			}
			foo({});
			foo({x:1});
			foo({x:1,y:2})*/
			/*this.ajax({
				url:'http://10.70.13.91:8080/mamago/saveMemberType',
				data:{
					name:'123',
					memo:'456'
				},
				method:'post'
			}).then(function(res){
				console.log(res);
			})*/
			/*console.log(this.ajax)
			this.ajax.post('http://10.70.13.91:8080/mamago/saveMemberType',{
				name:'123',
				memo:'456'
			})*/
			//函数的扩展
			//1、函数参数的默认值
			/*function log(x,y = 'world'){
				console.log(x,y);
			}
			log('hello')
			log('Hello','china')
			log('Hello','')
			//参数变量不能重复声明一个变量使用let 、const 在同一个作用域中
			let x=99;
			function foo(p = x + 1){
				console.log(p)
			}
			foo();
			x=100;
			foo();*/
			//2、与结构赋值的结合使用
			/*function foo({x,y = 5}){
				console.log(x,y)
			}
			foo({})
			foo({x:1})
			foo({x:1,y:2})*/
			/*function foo({x,y = 5}={}){
				console.log(x,y)
			}
			foo()*/
			/*function fetch(url,{body='',method='get',headers={}}){
				console.log(method)
			}
			fetch('123',{})*/
			/*function m1({x=0,y=0}={}){
				return [x,y]
			}
			function m2({x,y} = {x:0,y:0}){
				return [x,y]
			}
			// m1 定义时给x,y了初始值默认值     m2给x,y设置了初始值
			console.log(m1());
			console.log(m2());
			console.log(m1({x:3,y:8}));
			console.log(m2({x:3,y:8}));
			console.log(m1({}))
			console.log(m2({}))*/
			//参数默认值的位置    通常情况下，定义了默认值的参数，应该是函数的尾参数，因为这样比较容易看出
			//来，到底省略了哪些参数，设置非尾部的参数默认值是没有办法省略的
			/*function f(x=1,y){
				console.log([x,y])
			}
			f();
			f(2);
			f(undefined,1)*/
			/*function foo(x=5,y=6){
				console.log(x,y)
			}
			foo(undefined,null)*/
			//x 为undefined时出发了默认值，而为null时将值设置为了空
			//函数的length属性
			//函数的length属性会返回没有指定默认值的参数的个数,指定默认值后，length属性将失真
			/*console.log((function (a){}).length)
			console.log((function (a=5){}).length)*/
			/*console.log((function (a,b,c){}).length)*/
			//函数length  =   第一个默认值参数前面的无参数值个数
			//函数的作用域
			//一旦设置了参数的默认值，初始化时就会形成一个单独的作用域
			/*let x=1;
			function f(x,y = x){
				console.log(y);
			}
			f(2);*/
			/*function f(y = x){
				let x = 2;
				console.log(y);
			}*/
			//在这样调用时未定义任何参数，所以不会产生作用域
			//如果参数的默认值是一个函数，该函数的作用域也遵循这个规则。
			/*let foo = 'outer';
			function bar(func = () =>foo){
				let foo = 'inner';
				console.log(func())
			}
			bar();*/
			//上面的函数中并在参数中定义foo 所以func的取值为全局foo return outer
			/*var x=1;
			function foo(x,y = ()=>{x=2}){
				var x=3;
				y();
				console.log(x);
			}
			foo();
			console.log(x);*/
			//在y()里面定义的作用域覆盖了前面定义的x，构成了局部作用域
			/*function throwError(){
				throw new Error('Tang bei bei don/t tall more KISS HAHA')
			}
			function foo(name = throwError()){
				return name
			}
			foo();*/
			//rest参数‘
			//es6引入reset参数 形式为...变量名，用于获取函数的多余参数，这样就不需要使用arguments对象了，该变量为一个数组，
			//将多余的变量放入数组中
			/*function add(...values){
				let sum=0;
				for(let val of values){
					sum+=val;
				}
				console.log(sum);
			}
			add(2,3,5)*/
			//两种写法
			/*function sort (a=[1,3,2]){
				a.sort();
				return a;
			}*/
			/*const sort = (...arr)=> arr.sort();
			console.log(sort(3,4,2,1,6))*/
			//reset　写法改写ｐｕｓｈ方法
			/*let arr=[];
			function pusha(array,...items){
				items.forEach((item)=>{
					array.push(item);
					console.log(item)
				})
			}
			pusha(arr,3,4,5,6,11)*/
			//注意，reset后面不能有任何参数，不然会报错
			//函数的length属性。不包括reset参数
			/*console.log(((a)=>{}).length)
			console.log(((a,b,...c)=>{}).length)*/
			//name属性
			/*const foo = (a,b,c) =>{};
			console.log(foo.length);
			console.log(foo.name)*/
			//箭头函数   
			/*const f = v => v;
			//同等于
			const b = function(v){
				console.log(v);
			}*/
			//单个参数可以直接展示
			//如果箭头函数不需要参数或者多个参数，就是用一个圆括号代表参数部分
			/*const f = () => 5 ;
			//等同于
			const f = function () {return 5};*/
			/*const f = (num1,num2) => sum1+sum2;
			const sum = function(num1,num2){
				return num1+num2;
			}*/
			//如果箭头函数返回的代码块多于一条语句，就是用大括号将他们括起来，
			//并且使用return 语句返回
			/*const sum = (num1,num2) => { return num1+num2 };
			console.log(sum(5,6))*/
			/*const Tb = (...value) =>{
				let all=''
				for(let val of value){
					all+= val;
				}
				return all+= "It's lucky to meet you"
			}
			console.log(Tb('a'+'b'))*/
			/*const Tb = (...value) =>{
				return value[0]+' smallblack will stay always with you ,to your right!'
			}
			console.log(Tb('smallbalck'))*/
			//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须加上括号，
			//否则会报错
			/*let getTemp = id =>({id:id, name:'temp'});
			console.log(getTemp(12))*/
			//箭头函数可以与变量结构结合使用
			/*const full = ({ first, last}) => first+' '+last;
			console.log(full({first:'a',last:'b'}))*/
			//箭头函数的一个用法就是简化回调函数
			/*let arr=[1,2,3]
			let arr1= arr.map(x => x * x);
			console.log(arr1);*/
			/*let values=[1,2,34,5,3]
			const result = values.sort((a,b)=>a-b);
			console.log(result)*/
			/*const headAndTail = (head,...tail) => [head,tail];
			console.log(headAndTail(1,2,3,4,5,6))*/
			//使用箭头函数注意事项
			//1.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
			//2.不可用当做构造函数，也就是说，不可以使用new命令，否则会报错
			//3.不可以使用arguments对象，该函数在函数体内不存在。如果要用，可以使用rest参数替代
			//4.不可以使用yield命令，因此箭头函数不能用作Generator函数
			/*const Rou = (...values) =>{
				let sum='';
				values.forEach((item)=>{
					sum+=item;
				})
				return sum
			}
			let Result=Rou('name ','pasagement ','business')
			console.log(Result);
			this.axios({
				url:'路径',
				method:'post/get',
				data/params:{
					//参数
				}
			}).then((res)=>{
				console.log(res)
			})*/
			//数组的拓展
			//1.拓展运算符   是...  好比rest参数的逆运算一样，将一个数组转为用逗号分隔的参数序列
			/*console.log(...[1,2,3])*/
			//console.log(1,...[2,3,4],5)
			//该运算符主要用于函数调用
			/*const add = (x,y) => x+y;
			let numbers=[4,38];
			console.log(add(...numbers))
			let arr=[];
			const push = (array,...items)=>{
				array.push(...items);
				return array;
			}
			console.log(push(arr,1,2,3,4,5));*/
			//拓展运算符与正常的函数参数可以结合使用，非常灵活
			/*const f = (v,w,x,y,z) => {console.log(v,w,x,y,z)}
			var args=[0,1];
			f(-1,...args,2,...[3])*/
			//拓展运算符后面还可以放置表达式
			/*let x=1;
			const arr=[
				...(x>0?['a','c']:[]),
				'b'
			]
			console.log(arr);*/
			//如果拓展运算符后面是一个空数组，则不产生任何效果
			//console.log([...[],1])
			//替代数组的apply方法
			//由于扩展运算符可以展开数组，所以不在需要apply方法，将数组转为函数的参数了
			/*const f = (x,y,z) => {
				console.log(x)
				console.log(y)
				console.log(z)
			}
			let args = [0,1,2];
			f(...args);*/
			//下面是扩展运算符取代apply方法的一个实际的例子，应用Math.max方法，简化求出一个数组最大元素的写法
			/*Math.max(...[14,3,7])*/
			//以上代码中由于js不提供求数组的最大元素的函数，所以只能套用Math.max函数，将数组转为一个参数序列，
			//然后求最大值。有了扩展运算符以后，就可以直接用Math.max了
			//另一个例子是通过push函数，将一个数组添加到另一个数组的尾部。
			/*let arr1=[0,1,2];
			let arr2=[3,4,5];
			arr1.push(...arr2);
			console.log(arr1);*/
			//console.log(new Date(...[2017,1,1]));
			//拓展运算符的应用
			//1）合并数组
			//扩展运算符提供了数组合并的新写法。
			/*let more=[0,1,2,3,4,5];
			console.log([1,2].concat(more));
			console.log([1,2,...more])*/
			//2)与结构赋值结合
			//扩展运算符可以与结构赋值结合起来，用于生成数组
			/*let list=[0,1,2,3,4,5,6];
			let [a,...rest] = list;
			console.log(a)
			console.log(rest);*/
			//下面是另外一些例子
			//扩展运算符只能放在数组的最后面
			//3）函数的返回值
			//js的函数只能返回一个值，如果需要返回多个值，只能返回数组或对象，扩展运算提供了解决
			//这个问题的一种变通办法
			/*let date = (a,b) => [a,b];
			console.log(date(1,2))*/
			//4)字符串
			//扩展运算符还可以将字符串转为真正的数组
			//console.log([...'Hello']);
			//5)Map和set结构，Generator函数
			//扩展运算符内部调用的是数据结构的Iterator接口，因此只要具有Iterator接口的对象，都可以
			//使用拓展运算符，比如Map结构
			/*let map = new Map([
				[1,'one'],
				[2,'two'],
				[3,'three']
			])
			let arr=[...map.keys()];
			console.log(arr);*/
			//如果没有Interator接口，扩展运算符会报错
			//2.Array.from()
			//Array.from 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历
			//的对象（包括es6新增的数据结构Set 和 Map）
			//下面是一个类似数组的对象，Array.from 将它转为真正的数组：类似数组的对象（array-like-object）和可遍历
			//(iterable)的对象（包括es6新增的数据结构Set和Map）。
			//下面是一个类似数组的对象，array.from能将它转为真正的数组
			/*let arrayLike = {
				'0':'a',
				'1':'b',
				'2':'c',
				length:3
			}
			let arr = Array.from(arrayLike);
			console.log(arr)*/
			//实际应用中，常见的类似数组的对象是Dom操作返回的Nodelist集合，以及函数内部的arguments对象。Array.from都可以
			//将他们转为真正的数组
			//3.Array.of() 用于将一组值，转换为数组
			//console.log(Array.of(3,11,8));
			//这个方法的主要目的，是弥补数组构造函数Array()	的不足，因为参数个数的不同,会导致Array()的行为有差异.
			//array.of基本上可以用来代替Array()或者new Array(),并且不存在由于参数不同而导致的重载，它的行为非常统一。
			//Array.of();   Array.of(undefined)  
			//console.log(Array.of(1));
			//console.log(Array.of(1,2));
			//Array.of总是返回参数值组成的数组，如果没有参数，就返回一个空数组。
			//4.数组实例的copyWithin()
		}
	}
</script>
<style>
	@import "./es6.scss"
</style>