<template>
    <div id="echarts">
        <div id="myecharts">

        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    data(){
        return{
            MapEcharts:{},
            Options:{
                bmap: {
                    center: [116.46, 39.92],
                    zoom: 10,
                    roam: true,
                    mapStyle: {
                    styleJson: [{
                            'featureType': 'water',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                        }, {
                            'featureType': 'land',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#f3f3f3'
                            }
                        }, {
                            'featureType': 'railway',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'highway',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#fdfdfd'
                            }
                        }, {
                            'featureType': 'highway',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#fefefe'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'geometry.fill',
                            'stylers': {
                                'color': '#fefefe'
                            }
                        }, {
                            'featureType': 'poi',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'green',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'subway',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'manmade',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                        }, {
                            'featureType': 'local',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'boundary',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#fefefe'
                            }
                        }, {
                            'featureType': 'building',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                        }, {
                            'featureType': 'label',
                            'elementType': 'labels.text.fill',
                            'stylers': {
                                'color': '#999999'
                            }
                        }]
                    }
                },
                series: [{
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [],
                    silent: true,
                    lineStyle: {
                        normal: {
                            color: '#c23531',
                            color: 'rgb(200, 35, 45)',
                            opacity: 0.2,
                            width: 1
                        }
                    },
                    progressiveThreshold: 500,
                    progressive: 200
                }]
            }
        }
    },
    methods:{
        setEcharts(){
            this.MapEcharts = echarts.init(document.getElementById("myecharts"));
            this.MapEcharts.setOption(this.Options)
        },
        resetEcharts(){
            this.MapEcharts = echarts.init(document.getElementById("myecharts"));
            this.MapEcharts.setOption(this.Options)
            this.$nextTick(()=>{  //异步请求时使用
                this.MapEcharts.reset();
            })
        }
    },
    mounted(){
        this.setEcharts();
    }
}
</script>
<style lang="sass">
    @import './echarts.scss';
</style>

