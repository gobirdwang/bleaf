<template>
	<div id="map">213213</div>
</template>
<script>
import esriloader from 'esri-loader'
import {mapGetters} from 'vuex'
export default {
	mounted:function(){
    debugger
    let map = new this.map("map",{
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
