$(function(){
    var $li = $(".box li");
    var len = $li.length;
    for(var i = 0; i < len; i ++){
        $li.eq(i).css("backgroundImage", "url(image/"+(i+1)+".jpg)");
    }
    $li.mouseenter(function(){
        $(this).stop().animate({width:"800px"}, 300, "linear").siblings("li").stop().animate({width:"100px"}, 300, "linear");
    })
    $(".box").mouseleave(function(){
        $li.stop().animate({width:"240px"}, 300, "linear");
    })
});