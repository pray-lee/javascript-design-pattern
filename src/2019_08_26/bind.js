// 实现bind函数

// function () {}.bind(obj)
Function.prototype.bind1 = function (context) {
  let _this = this
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