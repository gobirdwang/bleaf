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
        loadModules(['esri/views/MapView', 'esri/WebMap'])
        .then(([MapView, WebMap]) => {
            // then we load a web map from an id
            var webmap = new WebMap({
            portalItem: { // autocasts as new PortalItem()
                id: 'f2e9b762544945f390ca4ac3671cfa72'
            }
            });
            // and we show that map in a container w/ id #viewDiv
            var view = new MapView({
            map: webmap,
            container: 'viewDiv'
            });
        })
        .catch(err => {
            // handle any errors
            console.error(err);
        });
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
