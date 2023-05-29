//实例
let box = document.getElementById("box");
box.onclick = function () {
    console.log("点击按钮");
}
// DOM获取事件源的方式
// 通过id：document.getElementById
// 通过标签名：document.getElementsByTagName
// 通过类：document.getElementsByClassName

// 帮定事件的方法
// 1. 直接绑定匿名函数
let box1 = document.getElementById("box1");
box1.onclick = function () {
}

// 2. 先单独定义函数，再绑定
let box2 = document.getElementById("box2");
box2.onclick = fn;

function fn() {
}

let div1 = document.getElementById("div1");
div1.onmouseover = function () {
    div1.style.width = "200px";
    div1.style["height"] = "200px";
    div1.style.backgroundColor = "blue";
    div1.style.transition = "0.3s";
}
div1.onmouseout = function () {
    // div1.style.width = "100px";
    // div1.style.height = "100px";
    // div1.style.backgroundColor = "red";
    // div1.style.transition = "0.3s";
    div1.style.cssText = "width:150px; height:150px; background-color:red; transition:0.3s;";
}

let hideButton = document.getElementById("displayButton");
let hiddenContent = document.getElementById("hiddenContent");
hideButton.onclick = function () {
    event = event || window.event;
    console.log(event);
    console.log(event.timeStamp);
    console.log(event.bubbles);
    console.log(event.button);
    console.log(event.pageX);
    console.log(event.pageY);
    console.log(event.screenX);
    console.log(event.screenY);
    console.log(event.target);
    console.log(event.type);
    console.log(event.clientX);
    console.log(event.clientY);
    if (hiddenContent.style.display === "inline-block") {
        hiddenContent.style.display = "none";
    } else {
        hiddenContent.style.display = "inline-block";
    }
}

//创建节点
let a1 = document.createElement("div");
let b1 = document.createElement("li");
console.log(a1);

//插入节点
//方式一：
//父节点.appendChild(新的子节点);
//父节点的最后插入一个新的子节点。
let box3 = document.getElementById("box");
box3.appendChild(a1);
a1.id = "box3";

//方式二：
//父节点.insertBefore(新的子节点,作为参考的子节点)
//在参考节点前插入一个新的节点。
box3.insertBefore(b1, a1); //将b1标签放到a1标签前面

//删除节点
//父节点.removeChild(子节点)
let box21 = document.getElementById("box2");
box3.removeChild(box21);

//复制节点
//要复制的节点.cloneNode();
//括号里可以写参数：true ; 写了true表示即复制节点本身，也复制节点子内容
//参数false，写与不写效果一样。只复制本节点
let box30 = document.getElementById("box3");
let theInsertedNode = box30.cloneNode(false);
box3.appendChild(theInsertedNode);

//删除节点的属性 delete the properties of the node
//元素节点.removeAttribute(属性名);

//事件绑定
let btn = document.getElementsByTagName("button")[0];
// addEventListener: 事件监听器。 原事件被执行的时候，后面绑定的事件照样被执行
// 这种写法不存在响应函数被覆盖的情况。（更适合团队开发）
btn.addEventListener("click", fn1);
btn.addEventListener("click", function () {
    console.log("事件2");
}, false);

function fn1() {
    console.log("事件1");
}

let btn2 = document.getElementById("btn2");
myBind(btn2, "click", function () {
    console.log("哈哈哈");
});

// div跟随移动
window.onload = function () {
    let divMove = document.getElementById("eventMovement");
    document.onmouseover = function (event) {
        //兼容的方式获取event对象
        event = event || window.event;
        // 鼠标在页面的位置 = 滚动条滚动的距离 + 可视区域的坐标。
        let pageX = event.pageX || scroll().left + event.clientX;
        let pageY = event.pageY || scroll().right + event.clientY;

        //   设置div的偏移量（相对于整个页面）
        // 注意，如果想通过 style.left 来设置属性，一定要给 box1开启绝对定位。
        divMove.style.top = pageX + "px";
        divMove.style.left = pageY + "px";
    }
}

