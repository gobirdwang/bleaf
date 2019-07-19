/**
 * 添加图层，根据类别进行了区分
 * @param {地址} url 
 * @param {类型} type 
 * @param {地图} mapControl 
 */
export function addServiceLayer (url, type, mapControl, options) {
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
/**
 * 添加要素图层，并绑定点击事件
 * @param {地图} mapControl 
 * @param {图层url} url 
 * @param {选项} options 
 * @param {单击操作，如绑定点击事件等} operation 
 */
export function addFeatureLayer (mapControl, url, options, operation) {
  let featureLayer = new esri.layers.FeatureLayer(url, options)
  featureLayer.on('click', operation)
  mapControl.addLayer(featureLayer)
  return featureLayer
}

export function addGraphicLayer() {

}
