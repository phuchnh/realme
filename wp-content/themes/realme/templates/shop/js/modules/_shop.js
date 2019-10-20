export default class ShopPage {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        if($('#flashsale-ka-page').length > 0){
            this.$BuyOnlineButton = $('.open-online-store');
            this.$OnlineStoreList = $('.online-listing');
            this.$CloseStoreList = $('.close-online-store');
            this.$BottomContent = $('#section-ka-hero .bottom-content');
            this.$LaptopContainer = $('.right-content .main-img');
            this.bindEvents();
        }
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.DoLaptopAnimation();
    }



    /* ===================================
     *  METHODS
     * =================================== */
    DoLaptopAnimation(){
        this.$LaptopContainer.removeClass('ready');

        setTimeout(() => {
            this.$LaptopContainer.addClass('animating');
        }, 520)
    }
}