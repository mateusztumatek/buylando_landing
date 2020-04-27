$(document).ready(() => {
    $('.nav-item:not(.nav-button)').hover(function () {
        var width = $(this).width() / 2;
        $('.underline').removeClass('underline-hidden');

        $('.underline').css('width',width+'px');
        $('.underline').css('left', ($(this).offset().left + $(this).width() / 4)+'px');
    }, function () {
        $('.underline').addClass('underline-hidden');
    })
    $(window).on('scroll', function () {
        var sTop = $(this).scrollTop();
        var h = $('.navbar').height();
        if(sTop > 120){
            $('.navbar').addClass('scrolled');
            $('body').css('padding-top', h+'px');
        }else{
            $('.navbar').removeClass('scrolled');
            $('body').css('padding-top', 0+'px');
        }
    })
})