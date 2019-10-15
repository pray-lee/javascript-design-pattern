// demo
// 普通写法
if (registerForm.userName === '') {
    alert('用户名不能为空')
    return false
}
if (registerForm.password.value.length < 6) {
    alert('密码过长')
    return false
}
if (registerForm.phoneNumber === '') {
    alert('请输入手机号码')
    return false
}
return true



// 策略模式重构上面的代码
var strategies = {
    isNonEmpty: function (value, errorMsg) {
        if (value === '') {
            return errorMsg
        }
    },
    minLength: function (value, length, errorMsg) {
        if(value.length < length) {
            return errorMsg
        }
    },
    isMobile: function (value, errorMsg) {
        if(!reg.test(value)) {
            return errorMsg
        }
    }
}

// Validator 类
var Validator = function () {
    this.cache = [] // 保存校验规则
}
Validator.prototype.add = function (dom, rule, errorMsg) {
   var ary = rule.split(':')  // 把strategy和参数分开
   this.cache.push(function () {
       var strategy = ary.shift();
       ary.unshift(dom.value)
       ary.push(errorMsg)
       return strategies[strategy].apply(dom, ary)
   })
}

Validator.prototype.start = function () {
    for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        var msg = validatorFunc() // 开始校验
        if (msg) {
            return msg
        }

    }
}

// 接收用户的请求并委托给strategy对象
var validataFunc = function () {
    var validator = new Validator() // 创建一个validator对象

    // 添加一些校验规则
    validator.add(registerForm.userName, 'isNotEmpty', '用户名不能为空')
    validator.add(registerForm.phoneNumber, 'isMobile', '请填写正确的手机号')
    validator.add(registerForm.password, 'minLenth:6', '密码过长')

    var errorMsg = validator.start() // 获取校验结果
    return errorMsg
}

button.onsubmit = function () {
    var errorMsg = validataFunc();
    if(errorMsg) {
        alert(errorMsg)
        return false
    }
}
 