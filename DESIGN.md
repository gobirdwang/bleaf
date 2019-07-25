[TOC]
# 地图思考
结合之前的项目,以及前端框架中地图的应用,在使用arcgis js api做开发时候,往往存在以下问题:
* **地图开发需要相关的知识,其他人难上手**
  地图开发虽然有一定的套路,但没接触过Arcgis Js API的人,上手还是有一定的难度.之前的项目分工,前端一般只关注样式,地图由专人负责,这种模式不适合以后的工作。
* **代码冗杂,但基本都是CV,没有提取公共代码**
  地图开发存在着大量重复性的工作,A项目加载底图的代码,换一下底图就能用在B项目中;A项目加载点,换一下参数就能B项目中起一样的作用;甚至在同一项目中,不同页面下的同一功能,也存在代码的拷贝现象.
* **地图相关业务简单**
  项目中地图效果被局限在实现展示效果上,如有必要,可以考虑扩展应用.
## 目的
* 快速开发,低成本交付
* 让所有人都能享受地图开发的乐趣
* 良好的扩展性，方便进行迭代
## 地图详解
如果把地图作为一个类来处理，属性和方法包括什么？

## 参考
[arcgis api与echarts3结合](https://github.com/wandergis/arcgis-echarts3)
[canvas数据可视化](https://github.com/chengquan223/map-canvas)
[arcgis api自带的定位效果](https://developers.arcgis.com/javascript/3/sandbox/sandbox.html?sample=exp_geolocate)