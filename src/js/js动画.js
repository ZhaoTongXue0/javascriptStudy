// js动画主要由 ： 三大家族和一个事件对象组成；
// 三大家族：offset/scroll/client。也叫三大系列。
// 事件对象/event（事件被触动时，鼠标和键盘的状态）（通过属性控制）。
// 动画(闪现/匀速/缓动)
// 冒泡/兼容/封装

//offset系列
let offsetSeries = function () {
    // offset系列 ： 主要功能：偏移，补偿，位移
    // 获取元素尺寸
    // offsetWidth or offsetHeight function 获取元素的宽高 不包含margin. output format : 122 ： 总宽高(内容宽高 + padding + border)
    let div1 = document.getElementsByTagName("div")[0];
    console.log(div1.offsetWidth);
    console.log(div1.offsetHeight);
    console.log(typeof div1.offsetHeight);

    // offsetParent
    // 获取当前元素的定位父元素
    // 如果当前元素的父元素，有CSS定位。那么offsetParent获取的是最近的那个元素
    // 如果当前元素的父元素，没有CSS定位。那么offsetParent获取的是body
    let box3 = document.getElementsByClassName("box3")[0];
    console.log(box3.offsetParent);

    // offsetLeft or offsetTop 从父级的padding开始算起，父级的border不算在内
    // offsetLeft：当前元素相对于其定位父元素的水平偏移量。
    // offsetTop：当前元素相对于其定位父元素的垂直偏移量。
    let box2 = document.getElementsByClassName("box5")[0];
    console.log(box2.offsetLeft);
    console.log(box2.style.left);
}

//scroll系列
// window.onscroll方法 做滚动监听，可以使用
window.onscroll = function (){
    console.log(1);
}
