// 多态的含义
// 同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。

// eg: 
var makeSound = function (animal) {
  if (animal instanceof Duck) {
    console.log('gagaga')
  } else if (animal instanceof Chicken) {
    console.log('gegege')
  }
}

var Duck = function () {}
var Chicken = function () {}

makeSound(new Duck()) // gagaga
makeSound(new Chicken()) // gegege

// 缺点： 这么写的话，如果新增一个动物，那就得改写makeSound函数，如果动物种类越来越多的时候，makeSound有可能变成一个巨大的函数

// 改进： 动物都会发出叫声，这个可以抽出来, 然后把可变的部分各自封装起来。
var oMakeSound = function (animal) {
  animal.sound()
}

var oDuck = function () {}
oDuck.prototype.sound = function () {
  console.log('gagaga')
}

var oChicken = function () {}
oChicken.prototype.sound = function () {
  console.log('gegege')
}

var oDog = function () {}
oDog.prototype.sound = function () {
  console.log('wangwangwang')
}
oMakeSound(new oDuck())
oMakeSound(new oChicken())
oMakeSound(new oDog())

// 多态的实际思想是把'做什么'和'谁去做'分离开来  做什么: 发出叫声， 谁去做：鸭子和鸡和狗
// 多态最根本的作用就是通过把过程化的条件分支语句转化为对象的多态性，从而消除这些条件分支语句
// 将行为分布在各个对象中，并让这些对象各自负责各自的行为，那么这些对象就可以根据同一个消息，有条不紊的分别进行各自的工作

// eg2: 
var renderMap = function (map) {
  if (map.show instanceof Function) {
    map.show()
  }
}

var googleMap = {
  show () {
    console.log('render googleMap')
  }
}

var baiduMap = {
  show () {
    console.log('render baiduMap')
  }
}

renderMap(googleMap)
renderMap(baiduMap)