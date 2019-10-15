var Singleton = function (name) {
  this.name = name
  this.instance = null
}

Singleton.prototype.getName = function () {
  console.log(this.name)
}
Singleton.getInstance = function (name) {
  console.log(this.instance)
  if (!this.instance) {
    this.instance = new Singleton(name)
  }
  return this.instance
}
var a = Singleton.getInstance('sven1')
var b = Singleton.getInstance('sven2')
console.log(a === b) // true

Singleton.getInstance1 = (function () {
  var instance = null
  return function (name) {
    if(!instance) {
      instance = new Singleton(name)
    }
    return instance
  }
})()
var c = Singleton.getInstance1('sven1')
var d = Singleton.getInstance1('sven2')
console.log(c === d) // true