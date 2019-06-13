<template>
	<div id="map"></div>
</template>
<script>
import esriloader from 'esri-loader'
import {mapGetters} from 'vuex'
export default {
	mounted:function(){
    let map = new this.$store.state.arcgisAPI.esri.map("map",{
      basemap: "topo"
    });
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
