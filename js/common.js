$(function(){
    $('header').load('inc.html header > div',navFun);
    $('footer').load('inc.html footer > div');

    function navFun(){
        $('.gnb li').on({
            mouseenter:function(){
                $('.dep1').stop().slideDown(200);
                $('header').addClass('active');
            },
            mouseleave:function(){
                $('.dep1').stop().slideUp(200);
                $('header').removeClass('active');
            }
        });
        $('.search_icon').on({
            click:function(e){
            e.preventDefault();
            $('.search').show();
            $('.search_cancle_icon').show();
            }
        });
        $('.search_cancle_icon').on({
            click:function(){
            $('.search').hide();
            $('.search_cancle_icon').hide();
            }
        });

    }


});
