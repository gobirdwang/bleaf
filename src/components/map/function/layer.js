/**
 * 添加图层，根据类别进行了区分
 * @param {地址} url 
 * @param {类型} type 
 * @param {地图} mapControl 
 */
export function addServiceLayer (url, type, mapControl, options) {
  url = 'http://10.10.50.67:6080/arcgis/rest/services/GDJTGHT/MapServer'
  type = 'Dynamic'
  if (type === 'Dynamic') {
    let dynamicLayer = new esri.layers.ArcGISDynamicMapServiceLayer(url, options)
    mapControl.addLayer(dynamicLayer)
    return dynamicLayer
  } else {
    let tiledLayer = new esri.layers.ArcGISTiledMapServiceLayer(url, options)
    mapControl.addLayer(tiledLayer)
    return tiledLayer
  }
}

export function addGraphicLayer() {

}

export function addFeatureLayer() {

}
