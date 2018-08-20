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
