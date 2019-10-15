//主题 是被观察的主体
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
		this.notifyAllObservers() //当主题发生变化，则反馈到所有的观察者。
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

//观察者 主体发生改变，则观察者会做出相应的反应。
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
