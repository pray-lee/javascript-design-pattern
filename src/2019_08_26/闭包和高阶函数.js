// closure

// 变量的生存周期
// 全局变量的生存周期是永久的，除非主动销毁全局变量
// 当函数执行完毕之后，局部变量便会自动销毁

// 闭包在数据上报的应用，函数执行完成之后，img不会被销毁，而是存在imgs数组中，确保数据能够上报全部完成
var report = (function () {
  var imgs = []
  return function (src) {
    var img = new Image()
    imgs.push(img)
    img.src = src
  }
})()

// 用闭包实现命令模式
// 面向对象的方式
var Tv = {
  open: function () {
    console.log('打开电视机')
  },
  close: function () {
    console.log('关闭电视机')
  },
}

var OpenTvCommand = function (receiver) {
  this.receiver = receiver // tv
}
OpenTvCommand.prototype.execute = function () {
  this.receiver.open() // 执行命令
}
OpenTvCommand.prototype.undo = function () {
  this.receiver.close() // 撤销命令
}

var setCommand = function (command) {
  command.execute()
  command.undo()
}

setCommand(new OpenTvCommand(Tv))

// 闭包的方式
var Tv1 = {
  open: function () {
    console.log('open tv')
  },
  close: function () {
    console.log('close tv')
  }
}

var createCommand = function (receiver) {
  var execute = function () {
    return receiver.open()
  }
  var undo = function () {
    return receiver.close()
  }
  return {
    execute,
    undo
  }
}

var setCommand1 = function (command) {
  command.execute()
  command.undo()
}

setCommand1(createCommand(Tv))


// 高阶函数 (函数可以作为参数被传递，函数可以作为返回值输出)
// 把函数当作参数传递, 这代表我们可以抽离出一部分容易变化的业务逻辑, 把这部分业务逻辑放在函数参数中, 这样一来可以分离业务代码中变化与不变的部分

// bad
var appendDiv = function () {
  for (var i = 0; i < 100; i++) {
    var div = document.createElement('div')
    div.innerHTML = i
    document.body.appendChild(div)
    div.style.display = 'none' // 这个可以抽出来，因为这个逻辑可能发生变化,可能是修改其他css样式
  }
}

// good
var appendDiv1 = function (callback) {
  for (var i = 0; i < 100; i++) {
    var div = document.createElement('div')
    div.innerHTML = i
    document.body.appendChild(div)
    if (typeof callback === 'function') {
      callback(div) // 这样就把这块的逻辑抽离出来了，以后直接修改回调函数就可以了
    }
  }
}
// appendDiv1(function (node) {
//   node.style.display = 'none'
// })


// 高阶函数AOP demo (面向切面编程)
Function.prototype.before = function (beforeFn) {
  var _this = this // 保存原函数的引用 
  return function () { // 返回包含了原函数和新函数的'代理函数'
    beforeFn.apply(this, arguments) // 执行新函数, 修正this
    console.log(5)
    return _this.apply(this, arguments) // 执行原函数
  }
}
Function.prototype.after = function (afterFn) {
  var _this = this
  return function () {
    // 这里才开始执行beforeFn返回的函数
    var ret = _this.apply(this, arguments)
    afterFn.apply(this, arguments)
    console.log(ret)
    return ret
  }
}

var func = function () {
  console.log(2)
}
func = func.before(function() {
  console.log(1)
}).after(function() {
  console.log(3)
})
func()