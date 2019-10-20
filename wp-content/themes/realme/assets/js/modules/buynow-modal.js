export default class BuynowModal {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.$closeModalBtn = $('.custom-modal.modal-preorder .close-buynow-modal');
        this.$openModalBtn = $('.open-buynow-modal');
        this.$body = $('body');
        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        // Close Modal Feature
        this.SetupModalToggle();
    }

    /* ===================================
     *  METHODS
     * =================================== */
    SetupModalToggle(){
        this.$closeModalBtn.on('click', () => {
            let $activeModal = $('.custom-modal.modal-preorder.active');
            if($activeModal.length > 0){
                $activeModal.removeClass('active');
                this.$body.removeClass('show-modal');
            }
        });

        this.$openModalBtn.on('click', (e) => {
            let dataTarget = $(e.target).data('modal-target');
            let $modalTarget = $('#' + dataTarget);
            $modalTarget.addClass('active');
            this.$body.addClass('show-modal');
        });
    }
}

