<template>
	<div :id='mapId'></div>
</template>
<script>
import {mapGetters} from 'vuex'
// 定位功能
import {location} from './function/location'
// 加载地图服务
import {addServiceLayer,addFeatureLayer} from './function/layer'
// 地图相关的st
export default {
  props:{
    mapId: String
  },
  data(){
    return {
      mapC:null,
      watchId:null,
      graphicLayer:null,
      center:null,
      zoom:null
    }
  },
	mounted(){
    // 初始化api，成功后进行地图操作
    this.mapC = new this.map(this.mapId,{ 
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
    addFeatureLayer(this.mapC, 'http://10.10.50.67:6080/arcgis/rest/services/GJJNYLTSFQGH/MapServer/0' , {}, /*(event) => {alert(event)}*/this.testClick);
    //暴漏出接口，显示extent和center
    //接收extent和center，并缩放至
  },
  methods:{
    //示例，featurelayer点击事件e
		testClick(e){
			e.stopPropagation()
      this.mapC.infoWindow.clearFeatures()
			this.mapC.infoWindow.setTitle('老子是弹窗')
      this.mapC.infoWindow.show(e.graphic.geometry)
		},
  },
  watch:{
    //监听map的四至范围和缩放，当发生改变时候，将自动传导相关的值到父组件，用于各个子组件之间共享
    'mapC.extent': {
     // this.center = this.mapC.extent,
      handler(newVal, oldVal) {
        // this.center = newVal.getCenter()
        // this.zoom = this.mapC.getLevel()
        // console.log(this.center)
        // console.log(this.zoom)
        //传值到父组件
        this.$emit('updateCenter',newVal.getCenter())
        this.$emit('updataZoom',this.mapC.getLevel)
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    ...mapGetters([
				'Color','Point','graphic','ArcGISDynamicMapServiceLayer','map','SimpleLineSymbol','SimpleMarkerSymbol','mapControl','FeatureLayer'
      ])
  }
}
</script>

<style scoped>
</style>
