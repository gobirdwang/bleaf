<template>
	<div id="map"></div>
</template>
<script>
import esriloader from 'esri-loader'
export default {
	mounted(){
        esriloader.loadCss('http://localhost:12301/arcgis_js_api/library/3.28/3.28/esri/css/esri.css');
        const options = {
            //arcgis js地址，需要自定义
            url: 'http://localhost:12301/arcgis_js_api/library/3.28/3.28/init.js'
        }
        esriloader.loadModules(["esri/map"],options)
        .then(([Map]) => {
           let map = new Map("map", {
          basemap: "topo", 
        });
        })
        .catch(err => {
            console.error(err);
        });
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map{
    height: 100%;
    width: 100%;
    }
</style>
