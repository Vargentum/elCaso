$(function(){
    $('.slider').mobilyslider({
        content: '.slider__viewport',
        children: 'div',
        transition: 'horizontal',
        animationSpeed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        bullets: true,
        arrows: false,
        arrowsHide: true,
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

});


$(function(){
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


//            $(thumbs).removeClass('m-active');
//            $(detailed).removeClass('m-active');
//            for(var i=1;i<=thumbs.length;i++){
//                var t = 'item-' +[i];
//                var d = '.product__detailImage__item-' +[i];
//                if($(this).hasClass(t)){
//                    $(this).addClass('m-active');
//                    $(d).addClass('m-active');
//                }
//                else{return false;}
//            }
//            if($(this).hasClass('item-1')){
//                $(this).addClass('m-active');
//                $('.product__detailImage__item-1').addClass('m-active');
//            }
//            else if($(this).hasClass('item-2')){
//                $(this).addClass('m-active');
//                $('.product__detailImage__item-2').addClass('m-active');
//            }
//            else if($(this).hasClass('item-3')){
//                $(this).addClass('m-active');
//                $('.product__detailImage__item-3').addClass('m-active');
//            }
//            else if($(this).hasClass('item-4')){
//                $(this).addClass('m-active');
//                $('.product__detailImage__item-4').addClass('m-active');
//            }
//            else if($(this).hasClass('item-5')){
//                $(this).addClass('m-active');
//                $('.product__detailImage__item-5').addClass('m-active');
//            }
//            else{return false}
