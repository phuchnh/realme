export default class Home {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.$buynowModal = $('.buynow-modal');

        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.headerProductFunction();
        this.footerFunction();

        this.Realme5HeaderSetup();
        this.Realme5BuynowSetup();

        this.slickFunction();

        if(window.innerWidth <= 768){
            this.SetupMobileMenu();
        }
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


    // Realme 5 Vietnamese Specific Rule
    Realme5HeaderSetup(){
        $(window).scroll(function() {
            if($(window).scrollTop() > 100) {
                $('.realme-5-header').addClass('menu-scroll');
            } else {
                $('.realme-5-header').removeClass('menu-scroll');
            }
        });
    }

    Realme5BuynowSetup(){
        this.ShowRealme5SeriesLink('realme-5');
        $('.buynow-btn').on('click', (e) => {
            if(!this.$buynowModal.hasClass('active')){
                this.$buynowModal.addClass('active')
            }
        });

        $('.close-buynow-modal').on('click', (e) => {
            if(this.$buynowModal.hasClass('active')){
                this.$buynowModal.removeClass('active')
            }
        });

        $('.choose-buying').on('click', (e) => {
            if($(e.target).parents('.choose-buying').hasClass('realme-5')){
                this.ShowRealme5SeriesLink('realme-5');
            } else {
                if($(e.target).parents('.choose-buying').hasClass('realme-5-pro')){
                    this.ShowRealme5SeriesLink('realme-5-pro');
                }
            }
        });
    }

    ShowRealme5SeriesLink(phoneType = ''){
        $('.partner-group-list .partner-item').hide();
        $('.buynow-modal-content .phone-selection .phone-select-item').removeClass('active');

        if(phoneType !== ''){
            $('.partner-group-list .partner-item.' + phoneType).fadeIn();
            $('.buynow-modal-content .phone-selection .phone-select-item.' + phoneType).addClass('active');
        }
    }

    SetupMobileMenu(){
        this.$mobileSubMenu = $('.realme-5-header .mb-menu');
        this.allowInteraction = true;

        // Toggle Menu
        $('.show-sub-menu').on('click', () => {
            if(this.allowInteraction){

                // Block interaction in 300 milisecond
                this.allowInteraction = false;
                setTimeout(() => { this.allowInteraction = true;}, 300);

                // Control Showing Menu
                if(this.$mobileSubMenu.hasClass('is-showing')){
                    this.$mobileSubMenu.slideUp();
                    this.$mobileSubMenu.removeClass('is-showing');
                } else {
                    this.$mobileSubMenu.slideDown();
                    this.$mobileSubMenu.addClass('is-showing');
                }
            }
        });

        $('.close-mb-menu').on('click', () => {
            // If Allow interaction and menu is now showing
            if(this.allowInteraction && this.$mobileSubMenu.hasClass('is-showing')){

                // Block interaction in 300 milisecond
                this.allowInteraction = false;
                setTimeout(() => { this.allowInteraction = true;}, 300);

                this.$mobileSubMenu.slideUp();
                this.$mobileSubMenu.removeClass('is-showing');
            }
        })
    }
}