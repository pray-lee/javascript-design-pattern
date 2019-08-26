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
  this.receiver = receiver
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