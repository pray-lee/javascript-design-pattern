//单例就是保证一个类只有一个实例，实现的方法一般是先判断实例存在与否，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。在JavaScript里，单例作为一个命名空间提供者，从全局命名空间里提供一个唯一的访问点来访问该对象。
//基础单例模式
var mySingleton = function () {
	//定义私有变量和方法
	var privateVariable = 'some thing private'
	function privateFn () {
		console.log(privateVariable)
	}
	return {
		publicMethod: function () {
			return privateFn() //把私有方法返回，用户只能查看，不能修改
		}
	}
}
var myInstance =mySingleton()
console.log(myInstance.publicMethod()) //some thing private


//进阶
var mySingleton1 = (function () {
	var instantiated = null;//先定义一个空对象，用来判断当前作用域内是否有该实例
	//只在初始化时使用的时候这么写,先定义一个init函数包装起来
	function init () {
		var private = 'private stuff'
		function privateFn () {
			console.log(private)
		}
		return {
			publicMethod: function() {
				privateFn()
			},
			publicData: 'public stuff'
		}
	}
	return {
		getInstance: function () {
			if (!instantiated) {
				instantiated = init()
			}
			return instantiated
		}
	}
})()
mySingleton1.getInstance().publicMethod()
var s1 = mySingleton1.getInstance()
var s2 = mySingleton1.getInstance()
console.log(s1 === s2)