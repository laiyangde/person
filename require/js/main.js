require.config({
//所有模块的查找根路径。未设置默认值是加载require.js的HTML所处的位置。
//如果用了data-main属性，则该路径就变成baseUrl。
//除(依赖字串以/开头，或者以.js结尾，或者含有协议)
    baseUrl: 'js',
// path映射那些不直接放置于baseUrl下的模块名。
// 设置path时起始位置是相对于baseUrl的,除(依赖字串以/开头，或者以.js结尾，或者含有协议)
    paths:'',

    // 为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置。
    shim: {
        'event': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['cache'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'event'
        },
        'underscore': {
            exports: '_'
        },
        'foo': {
            deps: ['bar'],
            exports: 'Foo',
            init: function (bar) {
                //Using a function allows you to call noConflict for
                //libraries that support it, and do other cleanup.
                //However, plugins for those libraries may still want
                //a global. "this" for the function will be the global
                //object. The dependencies will be passed in as
                //function arguments. If this function returns a value,
                //then that value is used as the module export value
                //instead of the object found via the 'exports' string.
                //Note: jQuery registers as an AMD module via define(),
                //so this will not work for jQuery. See notes section
                //below for an approach for jQuery.
                return this.Foo.noConflict();
            }
        },
        // 那些仅作为jQuery或Backbone的插件存在而不导出任何模块变量的"模块"们，shim配置可简单设置为依赖数组
        'jquery.scroll': ['jquery'],
    }

});
 
require(['event'], function(event) {
	console.log(event)
});