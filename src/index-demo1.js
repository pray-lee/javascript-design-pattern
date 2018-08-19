function loadImg(src){
	return new Promise((resolve, reject)=>{
		let img = document.createElement('img')
		img.onload = ()=>{
			resolve(img)
		}
		img.onerror = (err)=>{
			reject('图片加载失败')
		}
		img.src = src
	})
}

let src = `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534689222997&di=3960cb83dd11b3710487dd8b01e57e81&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-3230f546a975e6bedc35ac26aa8c30c6_b.jpg`

let result = loadImg(src)

result.then(function(img) {
	alert(img.width)
	return img
}).then(function(img) {
	alert(img.height)
	return img
}).catch(function(ex){
	console.log(ex)
}) 

