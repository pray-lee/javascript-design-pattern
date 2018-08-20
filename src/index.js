//主题
class Subject {
	constructor() {
		this.state = 0
		this.observers = []
	}
	getState() {
		return this.state
	}
	setState(state) {
		this.state = state
		this.notifyAllObservers()
	}
	notifyAllObservers() {
		this.observers.forEach(item => {
			item.update()
		})
	}
	attach(observer) {
		this.observers.push(observer)
	}

} 

//观察者
class Observer{
	constructor(name, subject) {
		this.name = name
		this.subject = subject
		this.subject.attach(this)
	}
	update() {
		console.log(`${this.subject.getState()}`)
	}
}
//test code...
let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('o2', s)
let o3 = new Observer('o3', s)
s.setState(1)
s.setState(2)
s.setState(3)
