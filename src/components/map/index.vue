<template>
	<div id="map"></div>
</template>
<script>
import {mapGetters} from 'vuex'
// 定位功能
import {location} from './function/location'
// 加载地图服务
import {addServiceLayer} from './function/layer'
// 地图相关的st
export default {
  data(){
    return {
      mapC:null,
      watchId:null,
      graphicLayer:null
    }
  },
	mounted(){
    // 初始化api，成功后进行地图操作
    this.mapC = new this.map("map",{ 
      basemap: "topo",
      logo:false,
      center: [108.4, 22.79],
      zoom: 12
    });
    this.$store.dispatch('set_map', this.mapC);
    //定位功能的使用
    //this.mapC.on("load",location(this.mapC));
    //添加动态图层或者贴片图层
    //addServiceLayer('http://10.10.50.67:6080/arcgis/rest/services/GDJTGHT/MapServer','Dynamic',this.mapC,{})
    //添加要素图层
    
  },
  methods:{
  },
  computed: {
    ...mapGetters([
				'Color','Point','graphic','ArcGISDynamicMapServiceLayer','map','SimpleLineSymbol','SimpleMarkerSymbol','mapControl'
			])
  }
}
</script>

<style scoped>
</style>
