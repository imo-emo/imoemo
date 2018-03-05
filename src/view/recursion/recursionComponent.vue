<template>
    <div>
        <p>{{item.name}}</p>
        <ul v-if="isHave">
            <item v-for="ite in item.children" :item="ite" :class="'li'+ite.index" :key="ite.name"></item>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'item',
        props:{
            item:Object
        },
        data(){
            return {
                 
            }
        },
        methods:{

        },
        computed:{
            isHave(){  //用于截流，避免内存泄漏
                return this.item.children && this.item.children.length;
            }
        },
        mounted(){
            //console.log(this.item)
        }
    }
</script>