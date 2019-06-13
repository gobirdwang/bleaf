 [TOC] 
# bleaf 一个Vue地图可视化工程
## 需要具备的知识：
Vue、Vuex、Arcgis for Javascript、ES6+
## 构建Vue项目
首先用 vue-cli 生成项目结构并安装项目依赖,当然,这不是唯一方式,同样也可以使用 iview-cli 来生成,在次不在赘述
## 安装esri-loader
 esri-loader是用来加载Esri官方开源，arcgisAPI的小工具。原本的引入方式（引入标签+require）是不太适合当前的主流前端开发模式的，又特别是在以某一框架为主如vue.js进行组件式开发的情况下，不论是相应代码和其他页面代码的结合性还是复用都比较麻烦。好在esri-loader的出现很好的解决了这一问题。  
 **使用命令`npm i esri-loader --save-dev`来安装**.  
 ### esri-loader有以下几个方法：
 1.getScript()从库里面获取js文件；  
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
 ```
 ## 基于例子的思考
 通过例子我们知道，使用esri-loader，大体需要下面三个步骤：
 1、获取CSS文件；
 2、获取Js文件；
 3、加载arcgis_api中的对应模块；
 带来的问题
 为此，我们通过vuex的特性，来简化这一过程，实现初始化后，随意使用的目的
 ## 使用Vuex改进
 为了方便api的调用，
 * 为防止esri功能的重复定义，在页面初始化时，将用到的esri地图文件加载进来，以后调用时不用反复的通过esri进行调用，可以直接调用；
 * 将esri的API进行定义，并放入state中，后续用到的地方引用一下getters即可；

 ## 参考文档
[Vue.js介绍](https://cn.vuejs.org/v2/guide/index.html)  
[Vuex官方介绍](https://vuex.vuejs.org/zh/)  
[Vuex学习总结](https://www.cnblogs.com/libin-1/p/6518902.html)  
[ES2015简介和基本语法](https://www.jianshu.com/p/220a54f7adce)