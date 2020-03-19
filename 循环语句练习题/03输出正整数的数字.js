// 3、给一个不多于5位的正整数，要求：一、求它是几位数，二、逆序打印出各位数字。

var input = require("prompt-sync")()
var num = input("请输入5位数以内的正整数")

var len = num.length
var arr = ""

for (var i = 1; i <= len; i++) {
    arr += num[len - i]
}
console.info(len)
console.info(arr)