/**
 * Created by xuyf on 2017/7/3.
 */
define(["jquery"] , function(){
    return {
        change:function(){
            $(function(){
                $("#main").css({"color":"#fff"})
            })
        },
        show:function(){
            alert("王维璋");
        },
        mychart:function(a){
            console.log(a);
        }
    }
})