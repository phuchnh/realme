export default class Home {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.$searchFrom = $('#search-product-form input');
        this.$searchResultDialog = $('.search-result');
        this.BindEvent();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    BindEvent(){
        this.$searchFrom.on('focus', () => {
            console.log('focus');
            this.$searchResultDialog.slideDown();
        });

        this.$searchFrom.on('blur', () => {
            console.log('blur');
            this.$searchResultDialog.slideUp();
        })
    }


    /* ===================================
     *  METHODS
     * =================================== */

}