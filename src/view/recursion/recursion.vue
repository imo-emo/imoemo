<template>
    <div id="recursion">
        <item :item="item" v-for="item in ListData" :class="'li'+item.index" :key="item.name"></item>
    </div>
</template>
<script>
    import item from './recursionComponent.vue'
    export default{
        data(){
            return {
                ListData:[  //数据模拟(可加children层级进行渲染)  实现目标：使用不可控无限嵌套数据分层渲染列表
                    {
                        name:'A',
                        index:1,
                        children:[
                            {
                                name:'A-a',
                                index:2,
                                children:[
                                    {
                                        name:'A-a-1',
                                        index:3,
                                    },{
                                        name:'A-a-2',
                                        index:3,
                                    }
                                ]
                            },{
                                name:'A-b',
                                index:2,
                                children:[
                                    {
                                        name:'A-b-1',
                                        index:3,
                                    },{
                                        name:'A-b-2',
                                        index:3,
                                    }
                                ]
                            }
                        ]
                    },{
                        name:'B',
                        index:1,
                        children:[
                            {
                                name:'B-a',
                                index:2,
                                children:[
                                    {
                                        name:'B-a-1',
                                        index:3,
                                    },{
                                        name:'B-a-2',
                                        index:3,
                                    }
                                ]
                            },{
                                name:'B-b',
                                index:2,
                                children:[
                                    {
                                        name:'B-b-1',
                                        index:3,
                                    },{
                                        name:'B-b-2',
                                        index:3,
                                    }
                                ]
                            }
                        ]
                    },{
                        name:'C',
                        index:1,
                        children:[
                            {
                                name:'C-a',
                                index:2,
                                children:[
                                    {
                                        name:'C-a-1',
                                        index:3,
                                    },{
                                        name:'C-a-2',
                                        index:3,
                                    }
                                ]
                            },{
                                name:'C-b',
                                index:2,
                                children:[
                                    {
                                        name:'C-b-1',
                                        index:3,
                                    },{
                                        name:'C-b-2',
                                        index:3,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        components:{
            item
        },
        methods:{

        },
        mounted(){
            //console.log(typeof(this.ListData));
        }
    }
</script>
<style lang="sass">
    @import './recursion.scss'
</style>