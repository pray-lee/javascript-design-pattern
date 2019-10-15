// 用代理实现单例模式

// 基础构造类
var CreateDiv = function (html) {
  this.html = html
  this.init()
}

CreateDiv.prototype.init = function () {
  // var div = document.createElement('div')
  // div.innerHTML = this.html
  // document.body.appendChild(div)
}

// 加入代理类 , 把负责管理单例的逻辑移到代理类中
var ProxySingletonCreateDiv = (function () {
  var instance
  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html)
    }
    return instance
  }
})()


var a = new ProxySingletonCreateDiv('sven1')
var b = new ProxySingletonCreateDiv('sven2')

console.log(a === b)
