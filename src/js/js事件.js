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
    div1.style.height = "100px";
    div1.style.backgroundColor = "blue";
    div1.style.transition = "0.3s";
}
div1.onmouseout = function () {
    div1.style.width = "100px";
    div1.style.height = "100px";
    div1.style.backgroundColor = "red";
    div1.style.transition = "0.3s";
}

let hideButton = document.getElementById("displayButton");
let hiddenContent = document.getElementById("hiddenContent");
hideButton.onclick = function () {
    if (hiddenContent.style.display === "inline-block") {
        hiddenContent.style.display = "none";
    } else {
        hiddenContent.style.display = "inline-block";
    }
}

