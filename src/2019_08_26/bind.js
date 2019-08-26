// 实现bind函数

// function () {}.bind(obj)
// 简化版
Function.prototype.bind1 = function (context) {
  const _this = this
  return function (args) { // 返回一个新函数
    return _this.apply(context, args) // 执行新函数的时候，会把之前传入的context当做新函数体内的this
  }
}

const obj = {
  name: 'sven'
}
const func = function () {
  console.log(this.name)
}.bind1(obj)
func()

// 复杂版
Function.prototype.bind2 = function () {
  const self = this
  context = [].shift.call(arguments) // 需要绑定的this上下文
  args = [].slice.call(arguments) //剩余的参数转成数组
  return function () {// 返回一个新的函数
    return self.apply(context, [].concat.call(args, [].slice.call( arguments )))
  }
}

const obj1 = {
  name: 'lee'
}
const func1 = function (a, b, c, d) {
  console.log(this.name)
  console.log(a, b, c, d)
}.bind2(obj1, 1, 2)
func1 (3, 4)