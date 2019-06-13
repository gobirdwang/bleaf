<template>
	<div id="map"></div>
</template>
<script>
import esriloader from 'esri-loader'
import {mapGetters} from 'vuex'
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
  computed: {
    ...mapGetters([
				'map'
			])
  }
}
</script>

<style scoped>
#map{
    height: 100%;
    width: 100%;
    }
</style>
