// 通过new关键字创建单例
// 在页面上创建唯一的div节点

var CreateDiv = (function () {

  var instance

  // 构造器
  var CreateDiv = function (html) {
    if (instance) {
      return instance
    }
    this.html = html
    this.init()
    return instance = this // 第一次初始化完成之后，把实例化之后的对象赋值给instance
  }

  CreateDiv.prototype.init = function () {
    // var div = document.createElement('div')
    // div.innerHTML = this.html
    // document.body.append(div)
  }

  // 返回构造函数
  return CreateDiv

})()

var a = new CreateDiv('sven1')
console.log(a)
var b = new CreateDiv('sven2')
console.log(b)
console.log(a === b)
