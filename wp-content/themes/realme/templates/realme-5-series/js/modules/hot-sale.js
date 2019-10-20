export default class HotSale {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.sliderOptions = {
            nextArrow: '<button class="slick-control slick-next"></button>',
            prevArrow: '<button class="slick-control slick-prev"></button>',
            slidesToShow: 4,
            slidesToScroll: 1,

            responsive: [
                {
                    breakpoint: 1680,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }

        // Sliders HTML Obj

        this.$newsSlider = $('.section-img-news #realme-5-news-slider');
        this.$realme5ImgSlider = $('.section-img-news #realme-5-img-slider');
        this.$cameraTakenImgSlider = $('.section-img-news #realme-camera-img-slider');

        this.$realme5VariationControl = $('.variation-realme-5-control');
        this.$realme5ImageControl = $('.variation-realme-5');

        this.$realme5ProVariationControl = $('.variation-realme-5-pro-control');
        this.$realme5ProImageControl = $('.variation-realme-5-pro');

        // Buynow Modal Element
        this.$buynowModal = $('.buynow-modal');

        // Price By Version Holder
        this.$r5MainPrice = $('#r5-main-price');
        this.$r5Line1 = $('.for-realme-5 .line-2.version-1');
        this.$r5Line2 = $('.for-realme-5 .line-2.version-2');
        this.$r5pMainPrice = $('#r5p-main-price');
        this.$r5pSalePrice = $('#r5p-sale-price');

        // Comparision Variables
        this.$allItemsForCompare = $('.product-spec-list .product-spec-item');
        this.$compareCamera = $('.product-spec-list .product-spec-item.camera');
        this.$compareFeatured = $('.product-spec-list .product-spec-item.featured');
        this.$comparePerformance = $('.product-spec-list .product-spec-item.performance');
        this.$compareDesign = $('.product-spec-list .product-spec-item.design');
        this.$compareInbox = $('.product-spec-list .product-spec-item.in-box');
        this.currentFilter = 'featured';

        this.$filterSpecCTA = $('.filter-spec');

        this.bindEvents();

    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.SetupSlide(this.$newsSlider);
        this.SetupSlide(this.$realme5ImgSlider);
        this.SetupSlide(this.$cameraTakenImgSlider);

        this.SetupVariationSwitcher(this.$realme5VariationControl, this.$realme5ImageControl);
        this.SetupVariationSwitcher(this.$realme5ProVariationControl, this.$realme5ProImageControl);

        this.Realme5HeaderSetup();
        this.Realme5BuynowSetup();

        if(window.innerWidth <= 768){
            this.SetupMobileMenu();
        }

        // Variation Select Box Setup
        this.SelectBoxVariationSetup();

        // Comparision Setup
        this.ComparisionSetup();

        // Setup Compare Box Toggle
        this.CompareBoxToggle();

        $('.venobox').venobox();
    }


    /* ===================================
     *  METHODS
     * =================================== */
    SetupSlide($target){
        $target.slick(this.sliderOptions);
    }

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
        this.ShowRealme5SeriesLink();
        $('.buynow-btn').on('click', (e) => {
            if(!this.$buynowModal.hasClass('active')){
                this.$buynowModal.addClass('active')
            }
        })

        $('.close-buynow-modal').on('click', (e) => {
            if(this.$buynowModal.hasClass('active')){
                this.$buynowModal.removeClass('active')
            }
        });

        $('.choose-buying').on('click', (e) => {
            if($(e.target).parents('.choose-buying').hasClass('realme-5') || $(e.target).hasClass('realme-5')){
                this.ShowRealme5SeriesLink('realme-5');
            } else {
                if($(e.target).parents('.choose-buying').hasClass('realme-5-pro') || $(e.target).hasClass('realme-5-pro')){
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

    SetupVariationSwitcher($target, $imageReflection){

        $target.on('click', (e) =>  {
            if(!$(e.target).parent('.variation-item').hasClass('active')){
                $target.find('.variation-item.active').removeClass('active');
                $(e.target).parent('.variation-item').addClass('active');

                if($target.find('.variation-item.active').hasClass('item-1')){
                    $imageReflection.removeClass('item-2-active').addClass('item-1-active');
                } else {
                    $imageReflection.removeClass('item-1-active').addClass('item-2-active');
                }
            }
        })
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

    SelectBoxVariationSetup() {
        this.UpdateVersionPrice();
        this.$selectArrowRealme5 = $('.select-box.select-box-5 .arrow-btn');
        this.$selectArrowRealme5Pro = $('.select-box.select-box-5-pro .arrow-btn');
        this.allowSelect = false;
        this.allowOpenSelect = true;

        // Select For Box Realme 5
        this.$selectArrowRealme5.on('click', (e) => {
            if(this.allowOpenSelect){
                this.allowOpenSelect = false;
                $('.select-box.select-box-5 .select-item:nth-child(2)').slideDown('fast');

                // Allow Select
                this.allowSelect = true;
            } else {
                $('.select-box.select-box-5 .select-item:nth-child(2)').slideUp('fast', () => {
                    this.allowOpenSelect = true;
                });
            }
        });

        $('.select-box.select-box-5 .select-item').on('click', (e) => {
            if(this.allowSelect) {
                let $target = $(e.target).parents('.select-item');
                let $sibling = $target.siblings('.select-item');
                $target.after($sibling);
                $('.select-box.select-box-5 .select-item:nth-child(2)').slideUp('fast', () => {
                    this.allowOpenSelect = true;
                });

                // Finish Select
                this.allowSelect = false;

                let newData = $target.data('r5');
                console.log(newData)
                $('.select-box.select-box-5').data('current-r5', newData);

                this.UpdateVersionPrice();
            }
        });

        // Select For Box Realme 5 Pro
        this.$selectArrowRealme5Pro.on('click', (e) => {
            if(this.allowOpenSelect){
                this.allowOpenSelect = false;
                setTimeout(() => (this.allowOpenSelect = true), 200);
                $('.select-box.select-box-5-pro .select-item:nth-child(2)').slideDown('fast');

                // Allow Select
                this.allowSelect = true;
            }
        });

        $('.select-box.select-box-5-pro .select-item').on('click', (e) => {
            if(this.allowSelect){
                let $target = $(e.target).parents('.select-item');
                let $sibling = $target.siblings('.select-item');
                $target.after($sibling);
                $('.select-box.select-box-5-pro .select-item:nth-child(2)').slideUp('fast', () => {
                    this.allowOpenSelect = true;
                });

                // Finish Select
                this.allowSelect = false;

                let newData = $target.data('r5p');
                console.log(newData)
                $('.select-box.select-box-5-pro').data('current-r5p', newData);

                this.UpdateVersionPrice();
            }
        });
    }

    UpdateVersionPrice(){
        let r5Version = $('.select-box.select-box-5').data('current-r5');
        let r5pVersion = $('.select-box.select-box-5-pro').data('current-r5p');

        switch(r5Version){
            case '3gb':
                this.$r5MainPrice.html('3.990.000');
                this.$r5Line2.hide();
                this.$r5Line1.show();
                break;
            case '4gb':
                this.$r5MainPrice.html('4.990.000');
                this.$r5Line1.hide();
                this.$r5Line2.show();
                break;
            default:
                this.$r5MainPrice.html('3.990.000');
                this.$r5Line2.hide();
                this.$r5Line1.show();
                break;
        }

        switch(r5pVersion){
            case '4gb':
                this.$r5pMainPrice.html('5.990.000');
                this.$r5pSalePrice.html('5.690.000');
                break;
            case '8gb':
                this.$r5pMainPrice.html('6.990.000');
                this.$r5pSalePrice.html('6.690.000');
                break;
            default:
                this.$r5pMainPrice.html('5.990.000');
                this.$r5pSalePrice.html('5.690.000');
                break;
        }
    }

    ComparisionSetup(){
        this.RunCompareFilter();

        this.$filterSpecCTA.on('click', (e) => {
            this.currentFilter = $(e.target).data('filter');
            this.RunCompareFilter();
        })
    }

    RunCompareFilter(){
        switch(this.currentFilter){
            case 'featured':
                this.$allItemsForCompare.hide();
                this.$compareFeatured.show();
                break;
            case 'camera':
                this.$allItemsForCompare.hide();
                this.$compareCamera.show();
                break;
            case 'performance':
                this.$allItemsForCompare.hide();
                this.$comparePerformance.show();
                break;
            case 'design':
                this.$allItemsForCompare.hide();
                this.$compareDesign.show();
                break;
            case 'in-box':
                this.$allItemsForCompare.hide();
                this.$compareInbox.show();
                break;
            default:
                this.$allItemsForCompare.hide();
                this.$compareFeatured.show();
                break;
        }
    }

    CompareBoxToggle(){
        this.isMobile = window.innerWidth <= 768
        $('.open-spec-compare-menu').on('click', (e) => {

            if($(e.target).hasClass('closed')) {
                $(e.target).removeClass('closed').addClass('fading-up');

                if (!this.isMobile){
                    $(e.target).siblings('.spec-list-item').slideDown('fast', () => {
                        $(e.target).removeClass('fading-up').addClass('opened');
                    });
                } else {
                    $(e.target).siblings('.feature-list').slideDown({
                        start: () => {
                            $(e.target).siblings('.feature-list').css({
                                display: "flex"
                            })
                        },
                        complete: () => {
                            $(e.target).removeClass('fading-up').addClass('opened');
                        },
                        speed: 'fast'
                    });
                }
            } else {
                if($(e.target).hasClass('opened')) {
                    $(e.target).removeClass('opened').addClass('fading-down');

                    if (!this.isMobile) {
                        $(e.target).siblings('.spec-list-item').slideUp('fast', () => {
                            $(e.target).removeClass('fading-down').addClass('closed');
                        });
                    } else {
                        $(e.target).siblings('.feature-list').slideUp('fast', () => {
                            $(e.target).removeClass('fading-down').addClass('closed');
                        });
                    }
                }
            }
        })
    }
}
