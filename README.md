[TOC] 
# bleaf 一个Vue地图可视化工程
## 需要具备的知识：
Vue、Vuex、Arcgis API for Javascript、ES6+
## esri-loader
esri-loader是用来加载Esri官方开源，arcgisAPI的小工具。原本的引入方式（引入标签+require）是不太适合当前的主流前端开发模式的，又特别是在以某一框架为主如vue.js进行组件式开发的情况下，不论是相应代码和其他页面代码的结合性还是复用都比较麻烦。好在esri-loader的出现很好的解决了这一问题。  

使用命令`npm i esri-loader --save-dev`来安装。  

**esri-loader有以下几个方法：**
1.getScript()从库里面获取js文件;  
2.isLoaded()检验模块是否加载完成;  
3.loadModules([],options)用于加载arcgis模块;  
4.loadCss(url)用于加载css文件; 
5.loadScript({url:**})将js加载到页面上；
## 一个最简单的例子
``` html
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
                  basemap: "topo"
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
```
## 分析
以上是一个简单的单页面应用。但我们能看到，使用esri-loader加载Arcgis API，使用其中的功能，大体需要下面几个步骤：  
1、通过loadCss加载样式文件,相当于：  
```js
<link rel="stylesheet" href="../esri.css">
```
2、通过loadScript加载JS文件，相当于：  
```js
<script src="../init.js"></script>
```
3、通过loadModules加载Arcgis模块对应的Js文件，对应着原来开发中的：
```js
require(['esri/map'],function(Map){do somthing...})
```    
## 使用Vuex改进
上一节我们分析了esri-loader的使用方法，单页面应用这种写法是没有问题的，但在复杂的项目中使用的话，会面临几个问题：

* 使用不便，代码量大，阅读也不方便；
* 功能重复定义，同一个模块可能被load多次。  

为解决这些个问题，我们使用esri-loader结合Vuex来简化API的使用，实现初始化后，随时随地随意使用的目的。
**代码目录**
  src
  ┣ store
  ┃ ┣ modules
  ┃ ┃ ┗ arcgisAPI.js 写arcgis api的module
  ┗ ┗ index.js 集成所有store模块，完成arcgis api的初始化
  ┣ App.vue
  ┗ main.js 引入store
其中：
modules为store的模块，防止store变的臃肿，store可能包含多个模块，通过index.js做整合。
store中的代码如下所示：
```js
import esriloader from 'esri-loader'

const arcgisAPI = {
  state: {
    esri: {
      map: null
    }
  },
  mutations: {
    setMap: (state, map) => {
      state.esri.map = map
    }
  },
  actions: {
    initAPI ({commit}) {
      return new Promise((resolve) => {
        esriloader.loadScript({url: process.env.ARCGIS_API + 'init.js'})
        esriloader.loadCss(process.env.ARCGIS_API + 'esri/css/esri.css')
        esriloader.loadModules(['esri/map']).then(([Map]) => {
          commit('setMap', Map)
          resolve()
        })
      })
    }
  },
  getters: {
    map: state => state.esri.map
  }
}
export default arcgisAPI
```
在`index.js`中，调用了initAPI完成esri-loader的初始化，最终，我们实现了：
* 更方便的API调；  
* 防止esri功能的重复定义。在页面初始化时，将用到的module加载进来，以后调用时不用反复的通过esri进行调用，可以直接在Vuex中拿出；  
* 使用getters，简化了代码（原：this.$store.arcgisAI.state.esri.map，现：this.map）；  

在项目中引入arcgis api就是这样，是不是很简单？接下来，在Vue.js中享受你的地图之旅吧！  
## 参考文档
**基础知识：**  
[Vue.js介绍](https://cn.vuejs.org/v2/guide/index.html)  
[Vuex官方介绍](https://vuex.vuejs.org/zh/)  
[ES2015简介和基本语法](https://www.jianshu.com/p/220a54f7adce)
**进阶：**  
[使用脚手架创建项目](https://blog.csdn.net/inthuixiang/article/details/82225407)  
[Vuex项目目录](https://vuex.vuejs.org/zh/guide/structure.html)  
[Vuex学习总结](https://www.cnblogs.com/libin-1/p/6518902.html)    
