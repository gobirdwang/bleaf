<template>
	<div id="map"></div>
</template>
<script>
import esriloader from 'esri-loader'
import {mapGetters} from 'vuex'
export default {
	mounted:function(){
    let map = new this.map("map",{
      basemap: "topo",
      center: [-116.093, 34.218],
      zoom: 7
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
</style>
