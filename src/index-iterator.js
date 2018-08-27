// let a = [1, 2, 3]
// let b = document.getElementsByTagName('div')
// let c = $('div')

//上面这三个数组通过一个方法进行遍历

// function commonEach (data) {
// 	var $data = $(data)   //把data转换成jquery对象，就可以生成一个jquery迭代器
// 	$data.each( function (index, val) {
// 		console.log(index, val)
// 	})
// }

//顺序遍历有序集合
//使用者不必知道内部结构，直接使用即可

class Container {
	constructor (list) {
		this.list = list
	}
	getIterator () {
		return new Iterator(this)
	}
}

class Iterator {
	constructor (container) {
		this.data = container.list
		this.index = 0
	}
	hasNext() {
		if(this.index >= this.data.length){
			return false
		}
		return true
	}
	next() {
		if(this.hasNext()){
			console.log(this.index, 'index...')
			return this.data[this.index++]
		}
	}
} 

//test code
let arr = [1, 2, 3, 4, 5]
let container = new Container(arr)
let iterator = container.getIterator()
while(iterator.hasNext()){
	console.log(iterator.next())
}