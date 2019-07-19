<template>
  <div id="test">
    <mapComponent class="com-map" id="com-map" :zoom='getZoom' :center='getCenter' :mapId='"com-map"'></mapComponent>
    <mapComponent class="com-map1" id="com-map1" :zoom='getZoom' :center='getCenter'  :mapId='"com-map1"'></mapComponent>
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
</style>

