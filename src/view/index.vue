<template>
  <div id="test">
    <mapComponent baseMap= 'gray' ref = 'imgWrapper' class="com-map" id="com-map" :zoom='getZoom' :center='getCenter' :mapId='"com-map"'></mapComponent>
    <!-- <mapComponent ref = 'imgWrapper1' class="com-map1" id="com-map1" :zoom='getZoom' :center='getCenter'  :mapId='"com-map1"'></mapComponent> -->
    <!-- <button ref = 'imgWrapper2' class='m-buttom' @click='screenShot' >导出地图</button>   -->
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
    // 截图功能的实现
    // screenShot(){
    //   this.$utils.tools.exportImg(document.getElementById('com-map'))
    // }
  },
  computed:{
    // 对于需要设定中心点的情况，进行父子传值
    getCenter(){
      return this.$store.state.mapState.center
    },
    // 父子传值zoom
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
  width: 100%;
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

