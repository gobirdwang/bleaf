<template>
	<div id="map"></div>
</template>
<script>
import esriloader from 'esri-loader'
export default {
	mounted(){
    let map = new this.map("map",{
      basemap: "topo"
    });
    // esriloader.loadCss(x+'esri/css/esri.css');
    // const options = {
    //     //arcgis js地址，需要自定义
    //     url: x+'init.js'
    // }
    // esriloader.loadModules(["esri/map"],options)
    // .then(([Map]) => {
    //     let map = new Map("map", {
    //   basemap: "topo", 
    //   center: [-116.093, 34.218],
    //   zoom: 7
    // });
    // })
    // .catch(err => {
    //     console.error(err);
    // });
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
