<template>
	<div id="map"></div>
</template>
<script>
import esriloader from 'esri-loader'
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      mapControl:null,
      watchId:null,
      graphicLayer:null
    }
  },
	mounted(){
    this.mapControl = new this.map("map",{ 
      basemap: "topo",
      center: [-116.093, 34.218],
      zoom: 7
    });
    this.mapControl.on("load",this.initFunc);
  },
  methods:{
    orientationChanged() {
      if(map){
        map.reposition();
        map.resize();
      }
    },
    initFunc(mapControl) {
      if( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition(this.zoomToLocation, this.locationError);
        this.watchId = navigator.geolocation.watchPosition(this.showLocation, this.locationError);
      } else {
        alert('浏览器不支持定位操作！');
      }
    },
    /**
     * 处理定位的错误
     */
    locationError(error){
      debugger
      if( navigator.geolocation ) {
        navigator.geolocation.clearWatch(this.watchId);
      }
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("无位置访问权限！");
          break;

        case error.POSITION_UNAVAILABLE:
          alert("无法获取当前位置！");
          break;

        case error.TIMEOUT:
          alert("定位超时！");
          break;

        default:
          alert("未知错误！");
          break;
      }
    },
    /**
     * 缩放到定位点
     */
    zoomToLocation(location) {
      debugger
      var pt = new this.Point(location.coords.longitude, location.coords.latitude);
      this.addGraphic(pt);
      this.mapControl.centerAndZoom(pt, 15);
    },
    /**
     * 展示点
     */
    showLocation(location) {
      var pt = new this.Point(location.coords.longitude, location.coords.latitude);
      if ( !this.graphicLayer ) {
        this.addGraphic(pt);
      } else { // move the graphic if it already exists
        this.graphicLayer.setGeometry(pt);
      }
      this.mapControl.centerAt(pt);
    },
    /**
     * 添加定位点
     */  
    addGraphic(pt) {
      var symbol = new this.SimpleMarkerSymbol(
        this.SimpleMarkerSymbol.STYLE_CIRCLE, 
        12, 
        new this.SimpleLineSymbol(
          this.SimpleLineSymbol.STYLE_SOLID,
          new this.Color([210, 105, 30, 0.5]), 
          8
        ), 
        new this.Color([210, 105, 30, 0.9])
      );
      this.graphicLayer = new this.graphic(pt, symbol);
      this.mapControl.graphics.add(this.graphicLayer);
    }
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
