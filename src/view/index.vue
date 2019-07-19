<template>
  <div id="test">
    <mapComponent class="com-map" id="com-map" @updataZoom='pupdataZoom' @updateCenter='pupdateC' zoom='zoom' center='center' mapId='com-map'></mapComponent>
    <mapComponent class="com-map1" id="com-map1d" @updataZoom='pupdataZoom' @updateCenter='pupdateC' zoom='zoom' center='center'  mapId='com-map1'></mapComponent>
  </div>
</template>
<script>
import mapComponent from '@/components/map'
export default {
  data(){
    return{
      center:null,
      zoom:null
    }
  },
  methods:{
    pupdataZoom(data){
      debugger
      this.zoom = data
    },
    pupdateC(data){
      debugger
      this.center = data
    }
  },
  components:{
    mapComponent
  }
}
</script>
<style>
#test{
  height: 100%;
  width: 100%;
}
.com-map{
  /* height: calc(100% - 50px);
  width: calc(100% - 100px); */
  height: 100%;
  width: 50%;
  position: absolute;
  right: 0px;
  bottom: 0px;
  border: 1px solid;
}
.com-map1{
  /* height: calc(100% - 50px);
  width: calc(100% - 100px); */
  height: 100%;
  width: 50%;
  position: absolute;
  left: 0px;
  bottom: 0px;
  border: 1px solid;
}
</style>

