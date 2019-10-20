export default class GamePage {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        if($('#gamepage-3').length > 0){
            this.AnswerList = [1, 1, 1];
            this.currentToken = localStorage.getItem('realme-token');
            this.IsUserLogin = false;
            this.TodayShared = false;
            this.TimeLeft = 60;
            this.CounterInterval = null;
            this.IsIdentify = false;

            // HTML effect element
            this.$Playground = $('#section-playground-3');
            this.$liveRecord = $('.live-record');
            this.$gameBlock = $('#section-playground-3 .game-block');
            this.$SharingMessageScreen = $('.finish-message.sharing-message');
            this.$SuccessMessageScreen = $('.finish-message.success-message');
            this.$GameOverScreen = $('.finish-message.game-over-message');
            this.$TimeoutMessage = $('.finish-message.timeout-message');
            this.$Game3Playground = $('#section-playground-3 .main-playground');
            this.$Game3Container = $('#section-playground-3');
            this.$BeforeShareMessage = $('#before-share-msg');
            this.$AfterShareMessage = $('#after-share-msg');
            this.$TimeHolder = $('#game3-time-left');
            this.$Game3Timer = $('#game-3-timer');
            this.$ruleModal = $('#modal_how-to-play-game-3');

            // Element Need To Be Update through API
            // Live left
            this.$liveHolder = $('.live-number');
            this.$liveHolder.html(this.RemainingLive);

            // List Of CTAs
            this.$ShareForLiveBtn = $('#share-for-lives');
            this.$ShareForIdentify = $('#share-for-identify');
            this.$SubmitResultStop3Btn = $('#submit-result-stop-3');
            this.$ToQuestion1 = $('#to-question-1');
            this.$ToQuestion2 = $('#to-question-2');
            this.$ToQuestion3 = $('#to-question-3');
            this.$ReplayGame3 = $('#replay-game-3');
            this.$openRuleGame3Btn = $('.open-game-instruction');
            this.$closeRuleGame3Btn = $('.close-rule-game-3');

            // Question Item
            this.$Question1 = $('#question-3-1');
            this.$Question2 = $('#question-3-2');
            this.$Question3 = $('#question-3-3');

            this.bindEvents();
        }
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){}



    /* ===================================
     *  METHODS
     * =================================== */
}