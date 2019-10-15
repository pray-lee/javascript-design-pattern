//装饰者用于通过重载方法的形式添加新功能，该模式可以在被装饰者前面或者后面加上自己的行为以达到特定的目的
class Circle {
	draw() {
		console.log('draw a circle')
	}
}

class Decorator {
	constructor(circle) {
		this.circle = circle
	}
	draw() {
		this.circle.draw()
		this.setAnotherCircle(circle)
	}
	setAnotherCircle() {
		console.log('setAnotherCircle...')
	}
}

let circle = new Circle()

circle.draw()

console.log('-----------')

let dec = new Decorator(circle)

dec.draw()
