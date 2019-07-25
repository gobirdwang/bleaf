import tileInfo from './tileInfo/tianditu'
/**
 * 由于esri的限制，用切片地图作为底图的方式不可用，应该是考虑版权等问题
 */
export function initBaseMap () {
  // debugger
  // let info = new esri.layers.TileInfo(TDTInfo)
  // let bm1 = new esri.dijit.BasemapLayer({type: 'WebTiledLayer', url: 'http://tiles.maaamet.ee/tm/s/1.0.0/kaart/${level}/${col}/${row}.png'})
  // let bm2 = new esri.dijit.BasemapLayer({type: 'WebTiledLayer', url: 'http://tiles.maaamet.ee/tm/s/1.0.0/hybriid/${level}/${col}/${row}.png'})
  // // var waterBasemap = new Basemap({
  // //   layers: [waterTemplateLayer],
  // //   title: 'Water Template',
  // //   thumbnailUrl:'images/waterThumb.png'
  // // })
  // // return waterBasemap
  // return new esri.dijit.Basemap({
  //   layers: [
  //     // new esri.layers.WebTiledLayer({
  //     //   urlTemplate: 'http://{subDomain}.tianditu.com/DataServer?T=img_c&X={col}&Y={row}&L={level}&tk=b5ca85bce62f83611e5b4135f4fe1bc5',
  //     //   ubDomains: ['t1', 't2', 't3', 't4', 't5']
  //     // }),
  //     // new esri.layers.WebTiledLayer({
  //     //   urlTemplate: 'http://{subDomain}.tianditu.com/DataServer?T=img_c&X={col}&Y={row}&L={level}&tk=b5ca85bce62f83611e5b4135f4fe1bc5',
  //     //   ubDomains: ['t1', 't2', 't3', 't4', 't5']
  //     // })
  //     new esri.dijit.BasemapLayer({
  //       // type: 'WebTiledLayer',
  //       // url: 'http://{subDomain}.tianditu.com/DataServer?T=img_c&X={col}&Y={row}&L={level}&tk=b5ca85bce62f83611e5b4135f4fe1bc5',
  //       // tileInfo: info,
  //       // subDomains: ['t1', 't2', 't3', 't4', 't5']
  //       type: 'WebTiledLayer',
  //       url:'http://tiles.maaamet.ee/tm/s/1.0.0/hybriid/${level}/${col}/${row}.png'
  //     })
  //   ]
  // })
  // debugger
  // let basemapLayer = new  esri.dijit.BasemapLayer({
  //   url: "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/PublicSafety/PublicSafetyBasemap/MapServer"
  // })
  // let basemap = new esri.dijit.Basemap({
  //   layers: [basemapLayer],
  //   title: '中国'
  // })
  // let basemap = new esri.dijit.Basemap({
  //   id: 'world_topo',
  //   layers: [new esri.dijit.BasemapLayer({
  //     type: 'WebTiledLayer',
  //     url: 'https://${subDomain}.tile.thunderforest.com/cycle/${level}/${col}/${row}.png',
  //     'subDomains': ['a', 'b', 'c']
  //   })]
  // })
  let basemapLayer = new esri.dijit.BasemapLayer({
    type: 'WebTiledLayer',
    url: 'https://${subDomain}.tile.thunderforest.com/cycle/${level}/${col}/${row}.png',
    subDomains: ['a', 'b', 'c']
  })
  debugger
  let basemap = new esri.dijit.Basemap({
    title: '中国',
    layers: [basemapLayer]
  })
  return basemap
}

export function basemap(type) {
  let info =  new esri.layers.TileInfo(tileInfo.TDTInfo)
  let layer = new esri.layers.WebTiledLayer('http://{subDomain}.tianditu.com/DataServer?T=vec_c&X={col}&Y={row}&L={level}&tk=b5ca85bce62f83611e5b4135f4fe1bc5', {
    'subDomains': ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    'tileInfo': info,
    'spatialReference': new esri.SpatialReference({wkid: 4326})
  })
  return layer
  // return new esri.layers.WebTiledLayer(
  //   'http://{subDomain}.tianditu.com/DataServer?T=vec_c&X={col}&Y={row}&L={level}&tk=b5ca85bce62f83611e5b4135f4fe1bc5',
  //   {subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'], tileInfo: new esri.layers.TileInfo(info)})
}
