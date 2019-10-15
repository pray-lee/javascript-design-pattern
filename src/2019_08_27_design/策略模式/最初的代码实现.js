// 计算每个人的奖金数额

var calculateBonus = function (performanceLevel, salary) {
  if (performanceLevel === 'S') {
    return salary * 4
  }
  if (performanceLevel === 'A') {
    return salary * 3
  }
  if (performanceLevel === 'B') {
    return salary * 2
  }
}

calculateBonus('B', 2000) // 4000
calculateBonus('A', 6000) // 24000



// 使用策略模式改进上面的代码, 使用类的方式

// 定义策略类
var performanceS = function () {

}
performanceS.prototype.calculate = function(salary){
  return salary * 4
}
var performanceA = function () {

}
performanceA.prototype.calculate = function(salary){
  return salary * 3
}
var performanceB = function () {

}
performanceB.prototype.calculate = function(salary){
  return salary * 2
}

// 定义奖金类

var Bonus = function () {
  this.salary = null;
  this.strategy = null;
}
Bonus.prototype.setSalary = function (salary) {
  this.salary = salary
}
Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy
}
Bonus.prototype.getBonus = function () {
  return this.strategy.calculate(this.salary)
}

var bonus = new Bonus()
bonus.setSalary(10000)
bonus.setStrategy(new performanceA())
bonus.getBonus() // 30000


// 使用javascript的策略模式
var strategies = {
  'S': function (salary) {
    return salary * 4
  },
  'A': function (salary) {
    return salary * 3
  },
  'B': function (salary) {
    return salary * 2
  }
}
var calculateBonus = function (level, salary) {
  return strategies[level](salary)
}