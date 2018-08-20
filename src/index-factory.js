class Product {
	constructor(name){
		this.name = name
	}
	init() {
		console.log('init finished')
	}
} 

class Creator {
	create(name) {
		return new Product(name)
	}
}

let product1 = new Creator()

let p1 = product1.create()

let product2 = new Creator()

let p2 = product2.create()