// var Jq = function(selector) {
//     return new $$.prototype.init(selector);
// };
// Jq.prototype = {
//     init: function(selector) {
//         if (!selector) {
//             return this;
//         }
//     },
//     name: function() {
//         return this.age;
//     },
//     age: 20,
//     constructor: $$,
//     length: 0,
// };

// Jq.prototype.init.prototype = Jq.prototype;



// (function(global, factory) {
//     factory(global);
// }(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
//     var useFul = function(selector, context) {
//         return new useFul.fn.init(selector, context);
//     };
//     useFul.fn = useFul.prototype = {};
//     // 核心方法
//     // 回调系统
//     // 异步队列
//     // 数据缓存
//     // 队列操作
//     // 选择器引
//     // 属性操作
//     // 节点遍历
//     // 文档处理
//     // 样式操作
//     // 属性操作
//     // 事件体系
//     // AJAX交互
//     // 动画引擎
//     return useFul;
// }));
var a;
$(function() {
    a = $('.ddd');
    console.log(a);
});

;
(function(global, factory) {
    factory(global);
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    var empty_Array = [];
    var document = window.document;
    var slice = empty_Array.slice;
    var concat = empty_Array.concat;
    var push = empty_Array.push;
    var indexOf = empty_Array.indexOf;

    // var empty_Object = {};
    // var toString = empty_Object.toString;
    // var hasOwn = empty_Object.hasOwnProperty;
    // var support = {};


    var
        version = "1.0",
        useFul = function(selector, context) {
            return new useFul.fn.init(selector, context);
        };

    useFul.fn = useFul.prototype = {
        useFul: version,
        constructor: useFul,
        selector: "",
        length: 0,
        name: function() {
            return this.age;
        },
        push: push,
        sort: empty_Array.sort,
        splice: empty_Array.splice
    };

    var init = useFul.fn.init = function(selector, context, root) {
        console.log(this);
        if (!selector) {
            return this;
        }
    };
    init.prototype = useFul.fn;

    if (!noGlobal) {
        window.useFul = window._ = useFul;
    }
    return useFul;
}));



(function(window, factory) {
    factory(window);
}(this, function() {
    return function() {
        //jQuery的调用
    };
}));




/**
 * 事件
 * 观察者模式
 */
var Observer = (function(slice) {

    function bind(event, fn) {
        var events = this.events = this.events || {},
            parts = event.split(/\s+/),
            i = 0,
            num = parts.length,
            part;

        if (events[event] && events[event].length) return this;

        for (; i < num; i++) {
            events[(part = parts[i])] = events[part] || [];
            events[part].push(fn);
        }
        return this;
    }

    function one(event, fn) {
        this.bind(event, function fnc() {
            fn.apply(this, slice.call(arguments));
            this.unbind(event, fnc);
        });
        return this;
    }

    function unbind(event, fn) {
        var events = this.events,
            eventName, i, parts, num;

        if (!events) return;

        parts = event.split(/\s+/);
        for (i = 0, num = parts.length; i < num; i++) {
            if ((eventName = parts[i]) in events !== false) {
                events[eventName].splice(events[eventName].indexOf(fn), 1);
                if (!events[eventName].length) { //修正没有事件直接删除空数组
                    delete events[eventName];
                }
            }
        }
        return this;
    }

    function trigger(event) {
        var events = this.events,
            i, args, falg;

        if (!events || event in events === false) return;

        args = slice.call(arguments, 1);
        for (i = events[event].length - 1; i >= 0; i--) {
            falg = events[event][i].apply(this, args);
        }
        return falg; //修正带返回
    }

    return function() {
        this.on =
            this.subscribe = bind;
        this.off =
            this.unsubscribe = unbind;
        this.trigger =
            this.publish = trigger;
        this.one = one;
        return this;
    };

})([].slice);




var fnCacheArr=[];
var fn;
function pushArrFn(parFn){
    /*
     处理其他逻辑，假设这段代码很长很复杂
    */
    fnCacheArr.push(parFn);
    fn=fn || parFn;
    fn();
    /*
     处理其他逻辑，假设这段代码很长很复杂
     */
}