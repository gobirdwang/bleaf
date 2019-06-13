<template>
	<div id="map-div">{{msg}}</div>
</template>

<script>
import esriloader from 'esri-loader'
export default {
    name: 'HelloWorld',
    data(){
        return {
            msg:process.env.ARCGIS_API,
        }
    },
	mounted(){
		const options = {
            // 可以使用自定义资源加载,arcgis 官网加载太慢了,经常加载失败.后面会讲到自己本地如何配置资源
            url: process.env.ARCGIS_API;
        }
		 esriloader.loadModules ([
            "esri/Map",
        ], options)
        .then (([
                    Map,
                ]) => {
            const map = new Map ({
                basemap: "streets"
            })
        }, reason => {
            console.log (reason);
        })
	},
	methods:{

	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map-div{
	height: 100%;
	width: 100%;
}
</style>
