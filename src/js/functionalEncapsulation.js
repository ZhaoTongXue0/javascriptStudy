//  将 scrollTop 和 scrollLeft 封装为一个方法，名叫scroll()
//  返回值为 一个对象。以后就直接调用scroll().top 和 scroll().left就好。
function scroll() {
    return { //此函数的返回值是对象
        left: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
        right: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
    }
}

//获取屏幕可视区域的宽高
function client() {
    if (window.innerHeight !== undefined) {
        //ie9及其以上的版本的写法
        return {
            "width": window.innerWidth,
            "height": window.innerHeight
        }
    } else if (document.compatMode === "CSS1Compat") {
        //标准模式的写法（有DTD时）
        return {
            "width": document.documentElement.clientWidth,
            "height": document.documentElement.clientHeight
        }
    } else {
        //没有DTD时的写法
        return {
            "width": document.body.clientWidth,
            "height": document.body.clientHeight
        }
    }
}

// 事件绑定DOM2写法，兼容IE 和 高版本浏览器
function myBind(element, eventStr, callback) {
    if (element.addEventListener) {
        //大部分浏览器兼容的方式
        element.addEventListener(eventStr, callback, false);
    } else {
        /*
         * this是谁，由调用方式决定
         * callback.call(element)
         */
        //IE8及以下
        element.attachEvent("on" + eventStr, function () {
            //在匿名函数 function 中调用回调函数callback
            callback.call(element);
        });
    }
}

function show(ele) {
    ele.style.display = "block";
}

function hide(ele) {
    ele.style.display = "none";
}
