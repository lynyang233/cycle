// 4、求450到550之间所有奇数的和。
var sum = 0
for (var i = 450; i <= 550; i++) {
    if (i % 2 != 0) {
        sum += i
    }
}
console.info(sum)