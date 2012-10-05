$(function(){
    $('.slider').mobilyslider({
        content: '.slider__viewport',
        children: 'div',
        transition: 'horizontal',
        animationSpeed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        bullets: true,
        arrows: false,
        arrowsHide: false,
        prev: 'prev',
        next: 'next',
        animationStart: function(){},
        animationComplete: function(){}
    });

    if(Modernizr.csscolumns){
        return false;
    }
    else{
        $('.sub__brands__list').columnize({
            width: 150,
            columns:3
        })
    }

    var thumbs = $('.product__thumbImage__item');
    var detailed = $('.product__detailImage .item');
    $(thumbs).each(function(){
        $(this).click(function(){
            var index = $(this).index();
            $('.product__detailImage').children('div').removeClass('m-active');
            $('.product__thumbImage').children('div').removeClass('m-active');

            $('.product__detailImage').children('div').eq(index).addClass('m-active');
            $('.product__thumbImage').children('div').eq(index).addClass('m-active');
        });
    });
});
