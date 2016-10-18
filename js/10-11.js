(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);

$(function() {
    $("#primerone").selectBoxIt({
        theme:"jqueryui",
    showEffect: "drop",
    showEffectSpeed: 500,
    hideEffect:"explode",
    hideEffectSpeed: 500
});
    $("#primertwo").selectBoxIt();
});


    jQuery(document).ready(function(){

        jQuery(".niceCheck").mousedown(
            /* при клике на чекбоксе меняем его вид и значение */
            function() {

                changeCheck(jQuery(this));

            });


        jQuery(".niceCheck").each(
            /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
            function() {

                changeCheckStart(jQuery(this));

            });

    });

function changeCheck(el)
/*
 функция смены вида и значения чекбокса
 el - span контейнер дял обычного чекбокса
 input - чекбокс
 */
{
    var el = el,
        input = el.find("input").eq(0);
    if(!input.attr("checked")) {
        el.css("background-position","0 -17px");
        input.attr("checked", true)
    } else {
        el.css("background-position","0 0");
        input.attr("checked", false)
    }
    return true;
}

function changeCheckStart(el)
/*
 если установлен атрибут checked, меняем вид чекбокса
 */
{
    var el = el,
        input = el.find("input").eq(0);
    if(input.attr("checked")) {
        el.css("background-position","0 -17px");
    }
    return true;
}
