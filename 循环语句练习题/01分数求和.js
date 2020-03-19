// 1、有一分数序列：2/1，3/2，5/3，8/5，13/8，21/13...求出这个数列的前20项之和
var sum = 0
var a = 2
var b = 1
for (var i = 1; i <= 20; i++) {
    sum += a / b
    var temp = b
    b = a
    a = temp + a

    console.info(sum)
}