// 创建自定义对象
// 方法一：
const obj1 = {
    name: '千古壹号',
    age: 28
};

const obj2 = {
    name: "千古壹号",
    age: 26,
    isBoy: true,
    // 还可以存放一个嵌套的对象
    test: {
        id: 123,
        tel: 180
    },
    //我们还可以在对象中增加一个方法。以后可以通过obj2.sayName()的方式调用这个方法
    sayName: function() {
        console.log(this.name);
        console.log(this.age);
    }
};

console.log(obj2);
obj2.sayName();
// 方法二：
