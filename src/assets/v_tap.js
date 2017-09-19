export default{
    install:function(Vue,options){
            Vue.prototype.tool={
                timechange(){
                    console.log(1);
                }
            }
    }
}