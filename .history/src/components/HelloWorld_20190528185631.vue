<template>
	<div id="map-div">{{msg}}</div>
</template>

<script>
import esriloader from 'esri-loader'
export default {
    name: 'HelloWorld',
    data(){
        return {
            msg:process.env.ARCGIS_API,
            msg1:"hello methor fucker"
        }
    },
	mounted(){
	},
	methods:{

	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map-div{
	height: 100%;
	width: 100%;
}
</style>
