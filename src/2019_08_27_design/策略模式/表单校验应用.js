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
Validator.prototype.add = function (dom, rules) {
    var self = this
    for (var i = 0, rule; rule = rules[i++];) {
        (function (rule) {
            var strategyAry = rule.strategy.split(':')
            var errorMsg = rule.errorMsg
            self.cache.push(function () {
                var strategy = strategyAry.shift()
                strategy.unshift(dom.value)
                strategy.push(errorMsg)
                return strategies[strategy].apply(dom, strategyAry)
            })
        })(rule)
    }
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
    validator.add(registerFomr.userName, [{
        strategy: 'isNonEmpty',
        errorMsg: '用户名不能为空'
    }, {
        strategy: 'minLength:6',
        errorMsg: '用户名过长'
    }])
    validator.add(registerFomr.password, [{
        strategy: 'isNonEmpty',
        errorMsg: '密码不能为空'
    }, {
        strategy: 'minLength:6',
        errorMsg: '密码过长'
    }])

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
 