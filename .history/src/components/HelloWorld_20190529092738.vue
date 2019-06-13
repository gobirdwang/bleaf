<template>
	<div id="map-div"></div>
</template>

<script>
import esriloader from 'esri-loader'
export default {
    name: 'HelloWorld',
    data(){
        return {
            
        }
    },
	mounted(){
        const options = {
            // 可以使用自定义资源加载,arcgis 官网加载太慢了,经常加载失败.后面会讲到自己本地如何配置资源
            url: 'http://localhost:12301/arcgis_js_api/library/3.28/3.28/init.js'
        }
        esriloader.loadModules(["esri/map"],options)
        .then(([Map]) => {
           var map = new Map("map-div", {
          basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
          center: [-122.45, 37.75], // longitude, latitude
          zoom: 13
        });
        })
        .catch(err => {
            console.error(err);
        });
	},
	methods:{

	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
