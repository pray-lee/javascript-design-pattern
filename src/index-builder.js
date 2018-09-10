//在软件系统中，有时候面临着“一个复杂对象”的创建工作，其通常由各个部分的子对象用一定的算法构成；由于需求的变化，这个复杂对象的各个部分经常面临着剧烈的变化，但是将它们组合在一起的算法确相对稳定。如何应对这种变化？如何提供一种“封装机制”来隔离出“复杂对象的各个部分”的变化，从而保持系统中的“稳定构建算法”不随着需求改变而改变？这就是要说的建造者模式。建造者模式可以将一个复杂对象的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。也就是说如果我们用了建造者模式，那么用户就需要指定需要建造的类型就可以得到它们，而具体建造的过程和细节就不需要知道了。

//code
function getSomeData (id, callback) {
  //创建一个异步请求
  var url = 'http://lbs-api.bd-cloud.com.cn/api/lbs/alarmInfos/getOnlineAlarmInfosNumber.go?token=amlmZWk6MTUzNjIwNDc1Mzg2Mw==&_=1536550146189&id=' + id
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.addEventListener('readystatechange', function () {
    if (xmlHttp.readyState === 4) {
      if (xmlHttp.status === 200){
        var data = JSON.parse(xmlHttp.responseText)
        callback(data) //这里把请求拿到的数据放在另外一个callback里面去处理
      }
    }
  }, false)
  xmlHttp.open('get', url)
  xmlHttp.send()
}

var el = document.getElementById('#body')
el.addEventListener('click', getSomeBigData, false)

function getSomeBigData () {
  getSomeData('1', function () {
    //这里的函数就是callback要处理的逻辑
  })
}