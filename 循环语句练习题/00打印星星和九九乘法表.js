// var str = '';
// for (var i = 1; i <= 5; i++) {
//     for (j = 1; j <= i; j++) {
//         str += '⭐';
//     }
//     str += '\n';
// }
// console.log(str);

var str = ""
for (var i = 1; i < 10; i++) {
    for (var j = 1; j <= i; j++) {
        str += j + "x" + i + "=" + i * j + "\t"
    }
    str += "\n"
}
console.log(str);