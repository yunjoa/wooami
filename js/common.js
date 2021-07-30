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


    (function(){

        var doc = document.documentElement;
        var w = window;
        var prevScroll = w.scrollY || doc.scrollTop;
        var curScroll;
        var direction = 0;
        var prevDirection = 0;
        var header = document.querySelector('header');
        var checkScroll = function() {
        
                /*
            ** Find the direction of scroll
            ** 0 - initial, 1 - up, 2 - down
            */
            curScroll = w.scrollY || doc.scrollTop;
            if (curScroll > prevScroll) { 
                //scrolled up
                direction = 2;
            } else if (curScroll < prevScroll) { 
                //scrolled down
                direction = 1;
            }

            if (direction !== prevDirection) {
                toggleHeader(direction, curScroll);
            }
            prevScroll = curScroll;
        };


        var toggleHeader = function(direction, curScroll) {
            if (direction === 2 && curScroll > 75) { 
                header.classList.add('hide');
                prevDirection = direction;

            } else if (direction === 1) {
                header.classList.remove('hide');
                prevDirection = direction;

            }
        };
        
        window.addEventListener('scroll', checkScroll);
    })();


});
