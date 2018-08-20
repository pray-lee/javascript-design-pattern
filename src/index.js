class SingleObject{
	constructor(name) {
		this.name = name
	}
	init() {
		console.log('init finished')
	}
}

SingleObject.getInstance = (function(){
	let instance = null
	return function(){
		if(!instance){
			instance = new SingleObject('pray-lee')
		}
		return instance
	}
})()

let obj1 = SingleObject.getInstance()

let obj2 = SingleObject.getInstance()

console.log(obj1 === obj2) //=>true

let obj3 = new SingleObject('pray-lee')

console.log(obj1 === obj3) //=>false
