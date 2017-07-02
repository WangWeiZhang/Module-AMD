
/*
****config.js文件是配置文件
*   在这个文件中我们需要做的就是：1、配置好当前路径 2、引入路径下的类库文件或者使我们自定义的模块
*   config对象进行配置
*   paths属性：引入模块的路径 将模块引入进来
*   注意在这里配置path的路径要相对于当前文件去找 也就是config.js文件
 */
require.config({
    //baseUrl:'lib/',                 //注意这样写是加载不到的 因为baseUrl的基准是以 引入config的html文件为基准的
    baseUrl:'../response/lib',        //这样写则 能够加载成功以index.html为基准  注意和 paths的区别
    paths:{
        'jquery':'jquery-1.11.3.min',     //定义一个模块
        'angular':'../js/angular1-4-6',
        'bootstrap':'bootstrap.min'//定义一个模块 如果有多个模块需要使用 我们可以继续往下定义 使用json的格式就好

    }
});

/* 解决不使用函数 加载模块的问题   */
/*
*   原因是 异步加载的config文件 和 html文件中 的script一起同时加载 导致配置项没加载完 就加载script标签 所有引入失败
*   那么找到原因 我们让script中的 引入文件 在配置项之后加载  就可以加载到了 岂不是？？？
*   所以我们将 代码 拷贝到 config配置项文件中 放在 配置路径的下面 来执行
* */
require(['jquery','bootstrap','angular'],function($,bootstrap,angular) {
    $("body").css({"backgroundColor":"#f00"});
})
