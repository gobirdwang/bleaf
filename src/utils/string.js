/**
 * 判断对象1和对象2是否相等，及对应的字段相等
 * @param {对象1} object1
 * @param {对象2} object2
 */
const isDiffer = (object1, object2) => {
  let instance1 = object1 instanceof Object
  let instance2 = object2 instanceof Object
  if (!instance1 || !instance2) {
    return object1 === object2
  }

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }

  for (let i in object1) {
    let t1 = object1[i] instanceof Object
    let t2 = object2[i] instanceof Object
    if (t1 && t2) {
      return isDiffer(object1[i], object2[i])
    } else if (object1[i] !== object2[i]) {
      return false
    }
  }
  return true
}
export default {isDiffer}
