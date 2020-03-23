/**
 * 设计一个学生管理系统，学生有id、姓名、性别、成绩。在页面上实现一下功能。
 * 单独设计一个 管理员账号：可以登陆到系统。登陆成功进入主菜单。
 * 主菜单为:
 *      欢迎访问学生系统，1、查询学生 2、删除学生 3、新增学生。4、修改学生 5、平均成绩
 * 
 *  输入1 查询所有学生的信息。
	输入2 删除某个学生，删除的时候要求输入学生的ID
	输入3 新增一个学生，学生ID不能重复
	输入4 根据id修改一个学生，只能修改成绩
	输入5 求全班学生平均成绩
 */

//=============为了便于观看，每一个任务后都会打印一下数组，比如删除了学生后显示剩下的信息===========
//====================================================================================
var prompt = require("prompt-sync")()
var stu = [
    ["01", "Alex", "male", 95],
    ["02", "James", "male", 87],
    ["03", "Kelly", "female", 90]
]


do {
    var username = prompt("请输入您的用户名：") //lyn
    var password = prompt("请输入您的密码：") //123456

} while (!(username == "lyn" && password == "123456"))


if (username == "lyn" && password == "123456") {

    do {
        console.info("欢迎访问学生系统，1、查询学生 2、删除学生 3、新增学生。4、修改学生 5、平均成绩 6、退出程序")

        do {
            choose = prompt("请输入您的选项：")
        }
        while ((choose != "1") && (choose != "2") && (choose != "3") && (choose != "4") && (choose != "5") && (choose != "6"))

        switch (choose) {
            case "1":
                console.info(stu)
                break
            case "2":
                var del
                var boo = false
                do {
                    del = parseInt(prompt("请输入需要删除的学生ID："))
                    if (del > 0 && del <= parseInt(stu[stu.length - 1][0])) {
                        boo = true
                    }
                } while (boo == false)

                for (var i = del - 1; i < stu.length - 1; i++) {
                    stu[i] = stu[i + 1]
                }
                stu.length = stu.length - 1
                console.info(stu)

                break
            case "3":
                var arr = []
                arr[0] = prompt("请输入新增学生ID：")
                while (parseInt(arr[0]) <= parseInt(stu[stu.length - 1][0])) {
                    arr[0] = prompt("请输入新增学生ID：")
                }
                arr[1] = prompt("请输入新增学生姓名：")
                arr[2] = prompt("请输入新增学生性别：")
                arr[3] = parseInt(prompt("请输入新增学生成绩："))
                stu.push(arr)
                console.info(stu)
                break
            case "4":

                var boo = false
                while (boo == false) {
                    var stuID = parseInt(prompt("请输入需修改学生的ID："))
                    for (var i = 0; i < stu.length; i++) {
                        if (parseInt(stu[i][0]) == stuID) {
                            boo = true
                            stu[i][3] = parseInt(prompt("请输入修改后学生的成绩："))
                            break

                        }
                    }

                }
                console.info(stu)
                break
            case "5":
                var sum = 0
                for (var i = 0; i < stu.length; i++) {
                    sum += stu[i][3]
                }
                console.info("平均成绩为：" + sum / stu.length)



        }

    } while (choose == '1' || choose == '2' || choose == '3' || choose == '4' || choose == '5')

}