<template>
    <div id="draggable">
        <draggable element="ul" v-model="list">
            <li v-for="item in list" :key="item.id">{{item.name}}</li>
        </draggable>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    name:"demo",
    data(){
        return{
            list:[
                {
                    id:1,
                    name:'a'
                },
                {
                    id:2,
                    name:'b'
                },
                {
                    id:3,
                    name:'c'
                },
                {
                    id:4,
                    name:'d'
                },
                {
                    id:5,
                    name:'e'
                },
                {
                    id:6,
                    name:'f'
                }
            ]
        }
    },
    methods:{

    },
    components:{
        draggable
    },
    mounted(){
        console.log(1)
    }
}
</script>
<style lang="sass">
    @import './draggable.scss'
</style>


