// import {getPoint} from '@/utils/WktToJson'
/**
 * 加载点
 * @param {地图} mapControl 
 * @param {坐标，数组形式} cord 
 * @param {点样式} style 
 * @param {空间参考} spatialReference 
 */
export function wktPointToGraphic (mapControl, cord, style, spatialReference) {
  debugger
  let point = new esri.geometry.Point(cord, spatialReference)
  let pointLyr = new esri.Graphic(point, style)
  mapControl.graphics.add(pointLyr)
}
