import html2Canvas from 'html2canvas'
import fileSaver from 'file-saver'
/**
 * 根据元素的dom进行截图
 * @param {dom} dom
 */
const exportImg = (dom) => {
  html2Canvas(dom, {
    useCORS: true
  }).then((canvas) => {
    canvas.toDataURL('image/png')
    canvas.toBlob((blob) => {
      fileSaver(blob, 'saveImage.png')
    })
  })
}
export default {exportImg}
