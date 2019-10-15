// 惰性单例是指在需要的时候才创建对象实例
// 通用的惰性单例
var getSingle = function (fn) {
  var result
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}

var createLoginLayer = function () {
  // logic
  return 'createLoginLayer'
}

var createSingleLoginLayer = getSingle(createLoginLayer)
var createSingleLoginLayer1 = getSingle(createLoginLayer)
var a = createSingleLoginLayer()
var b = createSingleLoginLayer1()
console.log(a === b)
