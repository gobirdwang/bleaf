<template>
	<div id="map"></div>
</template>
<script>
import esriloader from 'esri-loader'
export default {
	mounted(){
        const options = {
            //arcgis js地址，需要自定义
            version:3.28
        }
        esriloader.loadModules(["esri/map"],options)
        .then(([Map]) => {
           let map = new Map("map", {
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
#map{
    height: 100%;
    width: 100%;
}
</style>
