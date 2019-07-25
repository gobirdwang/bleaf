import html2Canvas from 'html2canvas'
import fileSaver from 'file-saver'
/**
 * 根据元素的dom进行截图
 * @param {dom} dom
 */
const exportImg = (dom) => {
  html2Canvas(dom, {
    // 处理地图上跨域的图片
    useCORS: true
  }).then((canvas) => {
    canvas.toDataURL('image/png')
    // 转换后，用saver插件进行导出
    canvas.toBlob((blob) => {
      fileSaver(blob, '图片导出.png')
    })
  })
}
export default {exportImg}
