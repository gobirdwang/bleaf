<template>
	<div id="map-div"></div>
</template>

<script>
import esriloader from 'esri-loader'
export default {
	name: 'HelloWorld',
	mounted(){
		 esriLoader.loadModules ([
            "esri/Map",
        ], options)
        .then (([
                    Map,
                ]) => {
            const map = new Map ({
                basemap: "streets"
            })
        }, reason => {
            console.log (reason);
        })
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
