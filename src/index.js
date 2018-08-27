//状态管理模式
class State {
	constructor (color) {
		this.color = color
	}
	handleState (context) {
		context.setState(this)
	}
}

class Context {
	constructor () {
		this.state = null
	}
	getState () {
		return this.state
	}
	setState (state) {
		this.state = state
	}
}
// test code...
let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')

let context = new Context()
green.handleState(context)
console.log(context.getState())

yellow.handleState(context)
console.log(context.getState())

red.handleState(context)
console.log(context.getState())