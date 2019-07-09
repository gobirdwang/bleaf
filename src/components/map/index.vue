<template>
	<div id="map"></div>
</template>
<script>
import {mapGetters} from 'vuex'
// 定位功能
import {location} from './function/location'
export default {
  data(){
    return {
      mapControl:null,
      watchId:null,
      graphicLayer:null
    }
  },
	mounted(){
    // 初始化api，成功后进行地图操作
    this.mapControl = new this.map("map",{ 
      basemap: "topo",
      logo:false,
      center: [-116.093, 34.218],
      zoom: 7
    });
    //定位功能的使用
    this.mapControl.on("load",location(this.mapControl));
  },
  methods:{
  },
  computed: {
    ...mapGetters([
				'Color','Point','graphic','map','SimpleLineSymbol','SimpleMarkerSymbol'
			])
  }
}
</script>

<style scoped>
</style>
