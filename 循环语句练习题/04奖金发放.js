/* 
4、企业发放的奖金根据利润提成。
利润低于或等于10万元时，奖金可提10%；
利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可可提成7.5%；
20万到40万之间时，高于20万元的部分，可提成5%；
40万到60万之间时高于40万元的部分，可提成3%；
60万到100万之间时，高于60万元的部分，可提成1.5%，高于100万元时，超过100万元的部分按1%提成，
从键盘输入当月利润I，求应发放奖金总数。
*/
var input = require("prompt-sync")()
var p = parseInt(input("请输入当月利润"))
var pw = p / 10000
var money = 0
if (pw <= 10) {
    money = pw * 0.1
} else if (pw > 10 && pw <= 20) {
    money = 1 + (pw - 10) * 0.075
} else if (pw > 20 && pw <= 40) {
    money = 1.75 + (pw - 20) * 0.05
} else if (pw > 40 && pw <= 60) {
    money = 2.75 + (pw - 40) * 0.03
} else if (pw > 60 && pw <= 100) {
    money = 3.35 + (pw - 60) * 0.015
} else {
    money = 3.95 + (pw - 100) * 0.01
}

console.info("应发奖金：" + money + "万元")