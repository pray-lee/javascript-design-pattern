// 封装的目的是将信息隐藏

// 通过函数来创建作用于实现封装数据
const myObject = (function () {
  var __name = 'sven' // private
  return {
    getName: function () { //public
      return __name
    }
  }
})()

console.log(myObject.getName()) // sven
console.log(myObject.__name) // undefined
