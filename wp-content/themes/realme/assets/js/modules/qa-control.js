export default class QAControl {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.$CategoryOptions = $('#qa-document .category-block .category-item');
        this.$QuestionTogglers = $('.question-item .question-toggler,.question-item .context');

        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        console.log('question layout detected');
        this.SetupCategorySelect();
        this.SetupQuestionToggler();
    }

    /* ===================================
     *  METHODS
     * =================================== */
    SetupCategorySelect(){
        this.$CategoryOptions.on('click', (e) => {
            if(!$(e.target).hasClass('active')){
                console.log($(e.target).data('target'));
                // Select Category
                $('#qa-document .category-block .category-item.active').removeClass('active');
                $(e.target).addClass('active');

                // Show Question Block
                $('.question-answer-list.active').removeClass('active')
                let TargetQuestionGroup = $('.question-answer-list#' + $(e.target).data('target'));
                TargetQuestionGroup.addClass('active');
            }
        })
    }

    SetupQuestionToggler(){
        this.$QuestionTogglers.on('click', (e) => {
            let $targetQuestion = $(e.target).parents('.question-item');
            let $activeQuestion = $('.question-item.active');
            if( $targetQuestion.hasClass('active') ){
                // Selected Question Slideup Itself
                $targetQuestion.removeClass('active');
                $targetQuestion.find('.answer').slideUp('fast');
            } else {
                // Slide Up Old Active Question
                $activeQuestion.removeClass('active');
                $activeQuestion.find('.answer').slideUp('fast');

                // Show Selected Question
                $targetQuestion.addClass('active');
                $targetQuestion.find('.answer').slideDown('fast');
            }
        })
    }
}

