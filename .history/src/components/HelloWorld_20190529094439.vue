<template>
	<div id="map"></div>
</template>
<script>
import esriloader from 'esri-loader'
export default {
	mounted(){
        const options = {
            //arcgis js地址，需要自定义
            url: 'http://localhost:12301/arcgis_js_api/library/3.28/3.28/init.js'
        }
        esriloader.loadModules(["esri/map"],options)
        .then(([Map]) => {
           var map = new Map("map", {
          basemap: "dark-gray", 
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
</style>
