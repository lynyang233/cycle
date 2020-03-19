// 2、有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？

for (var i = 1; i < 5; i++) {
    for (var j = 1; j < 5; j++) {
        for (var k = 1; k < 5; k++) {
            if (i != j && j != k && k != i) {
                console.info("" + i + j + k);
            }
        }
    }
}