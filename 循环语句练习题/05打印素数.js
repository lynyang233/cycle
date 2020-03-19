// 5、 用户输入任意数字， 打印所有该数字内的素数。（ 只能整除1和自己的数）

var input = require("prompt-sync")()
var num = input("请输入一个正整数");
for (var i = 1; i <= num; i++) {
    for (var j = 2; j <= i; j++) {
        if (i % j === 0) {
            if (i == j) {
                console.log(i);
            }
            break;
        }

    }
}