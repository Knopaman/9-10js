//$(function(){
//
//    var $links = $('.menu li');
//
//    $links.hover( function(){
//            var $submenu1 = $(this).find('.submenu1').stop().slideToggle(300);});
//
//});


$(function() {

    var $links = $('.menu li');

    $links.hover((function(){
        var $submenu = $(this).find('.submenu1');
        $submenu.stop().animate({
            height: "toggle",
            backgroundColor:"#E14B4B"
        }, 500)
    }),
        (function(){
            var $submenu = $(this).find('.submenu1');
            $submenu.stop().animate({
                height: "toggle",
                backgroundColor:"#FF6464"
            }, 500)})

    );
});