<template>
        <div id="map"></div>
    </template>
    <script>
        import esriloader from 'esri-loader'
        export default {
            mounted(){
                esriloader.loadCss('http://localhost:12301/arcgis_js_api/library/3.28/3.28/esri/css/esri.css');
                const options = {
                    url: 'http://localhost:12301/arcgis_js_api/library/3.28/3.28/init.js'
                }
                esriloader.loadModules(["esri/map"],options)
                .then(([Map]) => {
                    let map = new Map("map", {
                    basemap: "topo", 
                    center: [-116.093, 34.218],
                    zoom: 7
                });
                })
                .catch(err => {
                    console.error(err);
                });
            },
        }
    </script>
    <style scoped>
    #map{
        height: 100%;
        width: 100%;
        }
    </style>