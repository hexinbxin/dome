$(function(){
    $li = $(".nav ul li");
    $li.mouseenter(function(){
        var i = $(this).index();
        $(this).children("span").stop().animate({top: "-50px"}, 300, "linear");
        $("audio").get(i).load();
        $("audio").get(i).play();//现在浏览器禁用了自动播放 
    })
    $li.mouseleave(function(){
        $(this).children("span").stop().animate({top: "0px"}, 300, "linear");
    })
});