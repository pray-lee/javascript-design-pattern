class Adaptee{
	specificRequest() {
		return 'the old one'
	}
}

class Target{
	constructor() {
		this.adaptee = new Adaptee()
	}
	request() {
		let info = this.adaptee.specificRequest()
		return `${info}->the new one`
	}
}

let target = new Target()

let info = target.request()

console.log(info)