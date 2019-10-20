export default class HotSale {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        // Buynow Modal Element
        this.$buynowModal = $('.buynow-modal');

        this.bindEvents();

    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.Realme5HeaderSetup();
        this.Realme5BuynowSetup();

        if(window.innerWidth <= 768){
            this.SetupMobileMenu();
        }
    }


    /* ===================================
     *  METHODS
     * =================================== */
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
        $('.buynow-btn').on('click', (e) => {
            if(!this.$buynowModal.hasClass('active')){
                this.$buynowModal.addClass('active')
            }
        })

        $('.close-buynow-modal').on('click', (e) => {
            if(this.$buynowModal.hasClass('active')){
                this.$buynowModal.removeClass('active')
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
}
