import HotSale from './hot-sale';
export default class Home {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.bindEvents();

        if($('#realme-5-hot-sale-page').length > 0){
            let hotSale = new HotSale();
        }
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.slickFunction();
        this.headerProductFunction();
        this.footerFunction();
        this.SmoothScrollSetup()
    }

    /* ===================================
     *  METHODS
     * =================================== */
    slickFunction() {
        $('.top-slider .top-slider__wrap, .product-slide .product-slide__wrap').slick({
            dots: true,
        });

        $('.nav-product__list').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
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

    SmoothScrollSetup() {
        // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();

                        // get height menu for scroll exactly position of div
                        var getHeightMenu = 52;
                        if ($(window).width() < 767) {
                            getHeightMenu = 62;
                        }

                        $('html, body').animate({
                            scrollTop: target.offset().top - getHeightMenu
                        }, 1000);
                    }
                }
            });
    }

}