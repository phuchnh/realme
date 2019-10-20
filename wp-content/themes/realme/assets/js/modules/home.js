export default class Home {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.slickFunction();
        this.headerProductFunction();
        this.footerFunction();
    }


    /* ===================================
     *  EVENTS
     * =================================== */

    slickFunction() {
        $('.top-slider .top-slider__wrap, .product-slide .product-slide__wrap').slick({
            dots: true,
        });

        $('.nav-product__list').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: "unslick"
                }
            ]
        });
    }

    headerProductFunction() {
        if($(window).width() > 767) {
            $('.header__list__product').hover(function () {
                $('#page-header').toggleClass('product-active');
            })
        } else {
            $('.header__list__product').click(function () {
                $(".nav-product").stop().slideToggle(300);
            })
        }
        $('#nav-icon4').click(function () {
            $(this).toggleClass('open');
            $('#page-header').toggleClass('menu-active');
            $(".header__list").stop().slideToggle(300);
            $('body').toggleClass('stop-scroll');
        })
        $(window).scroll(function() {
            if($(window).scrollTop() > 100) {
                $('#page-header').addClass('menu-scroll');
            } else {
                $('#page-header').removeClass('menu-scroll');
            }
        });
    }

    footerFunction() {
        $('#page-footer .footer__col').each(function () {
            var $thisCol = $(this);
            if($(window).width() < 768) {
                $(this).find('h3').click(function () {
                    $thisCol.find('ul').slideToggle(300);
                    $(this).toggleClass('footer__col__ul--active');
                })
            }
        })
    }


    /* ===================================
     *  METHODS
     * =================================== */
    
}