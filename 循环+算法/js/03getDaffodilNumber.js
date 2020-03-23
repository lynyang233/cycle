// 3、 寻找1000以内的水仙花数（ 三位数各位数字的立方和恰巧是该数本身）
// 水仙花数是指一个 3 位数， 它的每个位上的数字的 3 次幂之和等于它本身

for (var i = 100; i < 1000; i++) {
    if (Math.pow(i % 10, 3) + Math.pow(parseInt(i / 10) % 10, 3) + Math.pow(parseInt(i / 100), 3) == i) {
        console.info(i)
    }
}