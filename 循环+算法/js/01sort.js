// 1、给这个数组按从小到大顺序排列[3,57,879,345,45,3415,66,890,415,62,25,68,9]。



var arr = [3, 57, 879, 345, 45, 3415, 66, 890, 415, 62, 25, 68, 9]
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}
console.info(arr)