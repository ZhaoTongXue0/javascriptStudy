//对象的基本操作内容
function basicContentOperationsOnObjects() {
    // # 对象的基本操作
    // 创建对象
    let object = {};
    console.log(typeof object);
    // 向对象中添加内容
    object.name = "赵";
    object.age = 18;
    object.gender = "男";

    console.log(JSON.stringify(object)); // 将 obj 以字符串的形式打印出来
    //获取对象中的属性
    console.log(object.name);
    console.log(object.color);//没有这个属性，返回undefined

    //特殊的属性名
    //重要：使用[]这种形式去操作属性，更加的灵活，因为，我们可以在[]中直接传递一个变量。
    object["123"] = 789;
    console.log(object["123"]);

    //修改对象的属性值
    //直接给新值
    object.name = "竹马";
    console.log(object.name);

    //删除对象的属性
    delete object.name;
    console.log(object.name); //删除之后值消失，返回undefined
    console.log(JSON.stringify(object)); // 将 obj 以字符串的形式打印出来
    console.log("------------------------------------");
}

//对象的运算符
function theOperatorOfTheObject() {
    let objOperation = {
        name: "赵乾雨",
        age: 18,
        gender: "男",
        hobby: "唱、跳、rap、篮球",
        other: "无"
    }
    //in 运算符
    console.log("name" in objOperation);
    console.log("color" in objOperation);

    /*for ... of 运算符
    * for ... of 的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用 for…of 遍历数组。
    * 注意，上面的数组中，for ... of获取的是数组里的值；如果采用for ... in遍历数组，则获取的是 index 索引值。
    * for ... of 既可以便利数组，也可以遍历Map对象
    */
    let arr1 = [2, 6, 8, 5];
    for (let value of arr1) {
        console.log(value);
    }

    //for ... in 运算符
    //for ... in主要用于遍历对象，不建议用来遍历数组.
    for (let objOperationKey in objOperation) {
        console.log("属性名：" + objOperationKey);
        console.log("属性值" + objOperation[objOperationKey]);
    }
    console.log("------------------------------------");
}

// 创建自定义对象内容
function createCustomObjectContent() {
    // # 创建自定义对象
    // ### 方法一：
    const obj1 = {
        name: '千古壹号', age: 28
    };

    const obj2 = {
        name: "千古壹号", age: 26, isBoy: true, // 还可以存放一个嵌套的对象
        test: {
            id: 123, tel: 180
        }, //我们还可以在对象中增加一个方法。以后可以通过obj2.sayName()的方式调用这个方法
        sayName: function () {
            console.log(this.name);
            console.log(this.age);
        }
    };

    console.log(obj2);
    obj2.sayName();

    // ### 方法二： 工厂模式 new object();
    //使用工厂方法创建的对象，使用的构造函数都是 Object。所以创建的对象都是 Object 这个类型，就导致我们无法区分出多种不同类型的对象.
    function objectFactory(name, age, gender) {
        //创建一个新对象
        let obj = {};
        //向对象中添加属性
        obj.name = name;
        obj.age = age;
        obj.gender = gender;
        obj.sayName = function () {
            alert(this.name);
        };
        //将新的对象返回
        console.log(obj);
        return obj;
    }

    let obj3 = objectFactory('猪八戒', 28, '男');
    let obj4 = objectFactory('白骨精', 16, '女');
    let obj5 = objectFactory('蜘蛛精', 18, '女');

    //### 方法三：使用构造函数
    // 创建一个构造函数
    function Student(name) {
        this.name = name;
        this.remark = function () {
            console.log(this.name + "创建的构造函数");
        }
    }

    //利用构造函数自定义对象
    let stu1 = new Student("张三");
    console.log(stu1);
    stu1.remark();
    let stu2 = new Student("李四");
    console.log(stu2);
    stu2.remark();

    /*
    * 构造函数简写
    * function Dog() {}
    * let dog = new Dog();
    */
    console.log(stu1 instanceof Student);
    console.log(stu2 instanceof Student);
    console.log("------------------------------------");
}

//浅拷贝
function shallowCopyOne() {
    //使用for ... in 实现浅拷贝
    const obj1 = {
        name: 'qianguyihao',
        age: 28,
        info: {
            desc: '很厉害',
        },
    };
    const obj2 = {};
    //  用 for in 将 obj1 的值拷贝给 obj2
    for (let obj1key in obj1) {
        obj2[obj1key] = obj1[obj1key];
    }
    console.log('obj2:' + JSON.stringify(obj2));
    obj1.info.desc = '永不止步'; // 当修改 obj1 的第二层数据时，obj2的值也会被改变。所以  for in 是浅拷贝
    console.log('obj2:' + JSON.stringify(obj2));
}

function shallowCopyTwo() {
    const obj1 = {
        name: 'qianguyihao',
        age: 28,
        info: {
            desc: 'hello',
        },
    };
    // 浅拷贝：把 obj1 拷贝给 obj2。如果 obj1 只有一层数据，那么，obj1 和 obj2 则互不影响
    const obj2 = Object.assign({}, obj1);
    console.log('obj2:' + JSON.stringify(obj2));

    obj1.info.desc = '永不止步'; // 由于 Object.assign() 只是浅拷贝，所以当修改 obj1 的第二层数据时，obj2 对应的值也会被改变。
    console.log('obj2:' + JSON.stringify(obj2));
}

// basicContentOperationsOnObjects();
// theOperatorOfTheObject();
// createCustomObjectContent();
shallowCopyOne();
shallowCopyTwo();
