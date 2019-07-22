<template>
  <div id="test">
    <mapComponent ref = 'imgWrapper' class="com-map" id="com-map" :zoom='getZoom' :center='getCenter' :mapId='"com-map"'></mapComponent>
    <mapComponent ref = 'imgWrapper1' class="com-map1" id="com-map1" :zoom='getZoom' :center='getCenter'  :mapId='"com-map1"'></mapComponent>
    <button ref = 'imgWrapper2' class='m-buttom' @click='screenShot' >anniu</button>  
  </div>
</template>
<script>
import mapComponent from '@/components/map'
export default {
  data(){
    return{
    }
  },
  methods:{
    screenShot(){
      this.$utils.tools.exportImg(document.getElementById('com-map'))
    }
  },
  computed:{
    getCenter(){
      return this.$store.state.mapState.center
    },
    getZoom(){
      return this.$store.state.mapState.zoom
    },
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
.m-buttom{
  float: left;
    z-index: 9999999;
    position: absolute;
}
</style>

