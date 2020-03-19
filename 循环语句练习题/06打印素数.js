var input = require("prompt-sync")()
var num = input("请输入一个正整数");
var count
for (var i = 2; i <= num; i++) {
    count = 0
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            count += 1
        }

    }
    if (count == 0) {
        console.info(i)
    }
}