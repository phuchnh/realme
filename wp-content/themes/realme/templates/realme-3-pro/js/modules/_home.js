export default class HomePage {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.SCREEN_HEIGHT = window.innerHeight;
        if($('#flashsale-homepage').length > 0){
            this.bindEvents();
        }
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.SetupSlider();
    }



    /* ===================================
     *  METHODS
     * =================================== */
    SetupSlider(){
        if(window.innerWidth <= 480){
            this.$sliderObject = $('.timeline-slider');
            this.$sliderObject.slick({
                nextArrow: '<button type="button" class="slick-next"></button>',
                prevArrow: '<button type="button" class="slick-prev"></button>',
                initialSlide: 2,
                dots: true,
            })
        } else {
            this.$sliderObject = $('.timeline-phase-3 .timeline-slider-wrapper');
            this.$sliderNextBtn = $('.timeline-slider-wrapper .nav-button.next');
            this.$sliderPrevBtn = $('.timeline-slider-wrapper .nav-button.prev');
            this.$sliderObject.slick({
                initialSlide: 1,
                infinite: false,
                arrows: false,
            });

            this.$sliderObject.on('beforeChange', () => {
                this.$sliderNextBtn.removeClass('active');
                this.$sliderPrevBtn.removeClass('active');
            });

            this.$sliderObject.on('afterChange', (slick, nextSlide, currentSlide) => {
                switch(currentSlide){
                    case 0:
                        this.$sliderNextBtn.addClass('active');
                        break;
                    default:
                        this.$sliderPrevBtn.addClass('active');
                        break;
                }
            });

            this.$sliderNextBtn.on('click', () => {
                this.$sliderObject.slick('slickNext');
            });

            this.$sliderPrevBtn.on('click', () => {
                this.$sliderObject.slick('slickPrev');
            })
        }
    }
}