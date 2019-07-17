/**
 * location定位
 * 1、在vue中引入文件中的location函数import {location} from './function/location'；
 * 2、调用定位：this.mapControl.on("load",location(this.mapControl))其中this.mapControl是地图
 */
import conf from '../conf'
import {wktPointToGraphic} from './graphic'

let watchId = null
let graphicLayer = null
let mapControl = null
/**
 * 方向变化
 * @param {地图} map
 */
export function orientationChanged (map) {
  if (map) {
    map.reposition()
    map.resize()
  }
}
/**
 * 定位功能初始化
 * @param {地图} map 
 */
export function location (map) {
  mapControl = map
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(zoomToLocation, locationError)
    watchId = navigator.geolocation.watchPosition(showLocation, locationError)
  } else {
    alert('浏览器不支持定位操作！')
  }
}
/**
 * 错误信息处理
 * @param {错误信息} error
 */
export function locationError (error) {
  if (navigator.geolocation) {
    navigator.geolocation.clearWatch(watchId)
  }
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert('无位置访问权限！')
      break

    case error.POSITION_UNAVAILABLE:
      alert('无法获取当前位置！')
      break

    case error.TIMEOUT:
      alert('定位超时！')
      break

    default:
      alert('未知错误！')
      break
  }
}
/**
 * 缩放到定位点
 * @param {定位点的位置} location
 */
export function zoomToLocation (location) {
  // let pt = new esri.geometry.Point(108.4, 22.5)
  let pt = new esri.geometry.Point(location.coords.longitude, location.coords.latitude)
  // addGraphic(pt)
  wktPointToGraphic(mapControl, [location.coords.longitude, location.coords.latitude], conf.pointStyle.location(), '')
  mapControl.centerAndZoom(pt, 15)
}
/**
 * 定位到目标点
 * @param {位置} location
 */
export function showLocation (location) {
  let pt = new esri.geometry.Point(108.4, 22.5)
  // let pt = new esri.geometry.Point(location.coords.longitude, location.coords.latitude)
  if (!graphicLayer) {
    // addGraphic(pt)
    wktPointToGraphic(mapControl, [location.coords.longitude, location.coords.latitude], conf.pointStyle.location(), '')
  } else { // move the graphic if it already exists
    graphicLayer.setGeometry(pt)
  }
  mapControl.centerAt(pt)
}

