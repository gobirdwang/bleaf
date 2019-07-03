<template>
  <div id="test">
    <mapComponent class="com-map"></mapComponent>
  </div>
</template>
<script>
import mapComponent from '@/components/map'
export default {
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
</style>

