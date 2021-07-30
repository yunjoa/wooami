$(function(){

    $(".main_slider").slick({
        arrows:false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        speed:1000
    });


    $(".sub_slider").slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        speed:1000
    });

    $('.review_box').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1000

    });


    function isElementUnderBottom(elem, triggerDiff) {
        const { top } = elem.getBoundingClientRect();
        const { innerHeight } = window;
        return top > innerHeight + (triggerDiff || 0);
    }

    function isElementRightToLeft(elem, triggerDiff) {
        const { left } = elem.getBoundingClientRect();
        const { innerWidth } = window;
        return left > innerWidth + (triggerDiff || 0);
    }
    
    function handleScroll() {
        const elems = document.querySelectorAll('.up-on-scroll');
        elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
        }
        })
    }

    function handleScroll2() {
        const elems2 = document.querySelectorAll('.right-left-scroll');
        elems2.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
        }
        })
    }


    
    window.addEventListener('scroll', handleScroll);
    

})
