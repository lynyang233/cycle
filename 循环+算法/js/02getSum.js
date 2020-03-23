// 2、计算从1*1+2*1+2*2+3*1+…+3*3+…+9*1+9*2+…+9*9的值
var sum = 0
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        sum += i * j
    }
}
console.info(sum)