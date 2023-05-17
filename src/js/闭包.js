function createCheckTemp(num) {
    function checkTemp(n) {
        if (n >= num) {
            console.log('成绩合格');
        } else {
            console.log('成绩不合格');
        }
    }

    return checkTemp;
}

let createCheckTempA = createCheckTemp(60);
let createCheckTempB = createCheckTemp(70);

createCheckTempA(65);
createCheckTempB(65);

function addCount() {
    let count = 0;
    return function () {
        count = count + 1;
        console.log(count);
    };
}

const fun1 = addCount();
const fun2 = addCount();
fun1();
fun2();
//（1）fun1 和 fun2 这两个闭包函数是互不影响的，因此第一次调用时，count变量都是0，最终各自都输出1。
fun1();
fun2();
// （2）第二次调用时，由于闭包有记忆性，所以各自会在上一次的结果上再加1，因此输出2。

