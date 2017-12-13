<template>
    <div>{{a.count}}</div>
</template>
<script>
    import {mapState,mapMutations,mapGetters} from 'vuex';
    export default {
        computed:{
            ...mapState(['a']),
            ...mapGetters(['counts'])
        },
        methods:{
            ...mapMutations(['add'])
        },
        mounted(){
            /* setInterval(()=>{
                this.add();
            },1000) */
            console.log(this.counts)
        }
    }
</script>
<style>

</style>