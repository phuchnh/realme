export default class GamePage {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        if($('#gamepage').length > 0){
            this.AnswerList = [3, 2, 3];
            this.FinishedQuestion = 0;
            this.currentToken = localStorage.getItem('realme-token');
            this.RemainingLive = 3;
            this.IsUserLogin = false;
            this.TodayShared = false;

            // HTML effect element
            this.$Playground = $('#section-playground-1');
            this.$liveRecord = $('.live-record');
            this.$SharingMessageScreen = $('.finish-message.sharing-message');
            this.$SuccessMessageScreen = $('.finish-message.success-message');
            this.$GameOverScreen = $('.finish-message.game-over-message');
            this.$Game1Playground = $('#section-playground-1 .main-playground');
            this.$Game1Container = $('#section-playground-1');
            this.$BeforeShareMessage = $('#before-share-msg');
            this.$AfterShareMessage = $('#after-share-msg');

            // Element Need To Be Update through API
            // Live left
            this.$liveHolder = $('#live-number');
            this.$liveHolder.html(this.RemainingLive);

            // List Of CTAs
            this.$ShareForLiveBtn = $('#share-for-lives');
            this.$ShareForIdentify = $('#share-for-identify');
            this.$SubmitResultStop1Btn = $('#submit-result-stop-1');
            this.bindEvents();
        }
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.AutoLoggin();
        this.RegisterSetup();
        this.SetupGame1();
    }



    /* ===================================
     *  METHODS
     * =================================== */
    SetupGame1(){
        // Question & Answer Checking
        //<editor-fold desc="Question and Answer checking">
        this.$Question1Answer = $('#question-1-1 .answer');
        this.$Question2Answer = $('#question-1-2 .answer');
        this.$Question3Answer = $('#question-1-3 .answer');

        this.AnswerPending = false
        this.$Question1Answer.on('click', (e) => {
            if( !this.AnswerPending ){
                this.AnswerPending = true;
                let answer = $(e.target).parents('.answer').data('answer');
                this.CheckAnswer(1, answer);
            }
        });

        this.$Question2Answer.on('click', (e) => {
            if( !this.AnswerPending ){
                this.AnswerPending = true;
                let answer = $(e.target).parents('.answer').data('answer');
                this.CheckAnswer(2, answer);
            }
        });

        this.$Question3Answer.on('click', (e) => {
            if( !this.AnswerPending ){
                this.AnswerPending = true;
                let answer = $(e.target).parents('.answer').data('answer');
                this.CheckAnswer(3, answer);
            }
        });
        //</editor-fold>

        // Submit Answer
        this.$SubmitResultStop1Btn.on('click', () => {
            let header = new Headers({
                "Authorization" : this.currentToken,
                "Content-Type" : "application/json"
            })
            if(!this.$SubmitResultStop1Btn.hasClass('deactive')){
                fetch('https://nihato.com/update_game_score',{
                        method:'PUT',
                        headers: header,
                        body: JSON.stringify({
                            game_1: true
                        })
                    }).then(res => {
                        if(res.status == 200){ 
                            this.HidePlayGround();
                            this.ShowSuccessMessage();
                        }
                    });
            }
        });

        // Share For Live
        this.$ShareForLiveBtn.on('click', () => {
            // TODO: Hide the screen after successfully sharing
            let that = this;
            FB.ui( {
                method: 'share',
                hashtag: '#TíchĐạnSănRealme',
                href: 'https://realmemobile.vn/flash-sale/?utm_source=Facebook&utm_medium=MinigameWeb&utm_content=Share4Life',
            }, function(response) {
                console.log(response);
                if(response != undefined) {
                    let header = new Headers({
                        "Authorization" : that.currentToken,
                        "Content-Type" : "application/json"
                    })
                    fetch('https://nihato.com/sharing',{
                        method:'PUT',
                        headers: header
                    }).then(res => {
                        if(res.status == 200){ 
                            res.json().then(data => {
                                that.RemainingLive = data.lives;
                                if (that.RemainingLive > 0) {
                                    that.TodayShared = true;
                                    that.HideShareRequestMessage();
                                    // TODO: Return to the playground with the live
                                    that.$liveHolder.html(that.RemainingLive);
                                    that.ShowPlayGround();
                                }
                            });
                        }
                    });
                }
            }); 
            
        })


        //Share For Identify
        this.$ShareForIdentify.on('click', () => {
            let that = this;
            FB.ui( {
                method: 'share',
                hashtag: '#TíchĐạnSănRealme',
                href: 'https://realmemobile.vn/flash-sale/?utm_source=Facebook&utm_medium=MinigameWeb&utm_content=ShareToRegister',
            }, function(response) {
                console.log(response);
                if(response != undefined) {
                    let header = new Headers({
                        "Authorization" : that.currentToken,
                        "Content-Type" : "application/json"
                    });
                    // TODO: After Finish Sharing For Identify
                    fetch('https://nihato.com/identify',{
                        method:'PUT',
                        headers: header
                    }).then(res => {
                        if(res.status == 200){
                            that.$BeforeShareMessage.addClass('hide');
                            that.$ShareForIdentify.addClass('hide');
                            that.$AfterShareMessage.removeClass('hide');
                            
                        } else {
                            console.log('Identity failed');
                        }
                    });
                }
            });
        })


        // HTML Effect
        this.LiveRecordSticky();
    }

    CheckAnswer(questionNo, answerToTest){
        // Answer is correct
        if(this.AnswerList[questionNo-1] == answerToTest) {
            console.log('Correct Answer');

            // Correct, dont need to answer again
            $('#question-1-' + questionNo + ' .answer').addClass('wrong');
            $('#question-1-' + questionNo + ' .answer[data-answer="'+ answerToTest +'"]').removeClass('wrong').addClass('correct');
            $('#question-1-' + questionNo + ' .answer').off('click');

            this.FinishedQuestion += 1;
            if(this.FinishedQuestion == 3){
                this.$SubmitResultStop1Btn.removeClass('deactive');
            }

            // Allow User To Tick Other Answer
            this.AnswerPending = false;
        } else {
            // Incorrect
            console.log('Nope');
            this.UpdateLive();
            $('#question-1-' + questionNo + ' .answer[data-answer="'+ answerToTest +'"]').addClass('wrong');
            $('#question-1-' + questionNo + ' .answer[data-answer="'+ answerToTest +'"]').off('click')

            // Allow User To Tick Other Answer
            this.AnswerPending = false;
        }
    }

    UpdateLive(){
        let header = new Headers({
            "Authorization" : this.currentToken,
            "Content-Type" : "application/json"
        });
        
        fetch('https://nihato.com/update_live',{
            method:'PUT',
            headers: header
        }).then(res => {
            if(res.status == 200){ 
                res.json().then(data => {
                    this.RemainingLive = data.lives
                    if(this.RemainingLive > 0){
                        this.$liveHolder.html(this.RemainingLive);
                    } else {
                        // Already Shared For More Live But Still Lost
                        if(this.TodayShared){
                            this.HidePlayGround();
                            this.ShowGameOverMessage();
                        } else {
                            // Allow User To Share For More Live
                            this.HidePlayGround();
                            this.ShowShareRequestMessage();
                        }
                    }
                });
            }
        });
    }

    LiveRecordSticky(){
        // Bind Effect
        $(window).off('scroll');
        setTimeout(() => {
            this.PlaygroundAnchor = $('#section-playground-1').offset().top;

            if(window.pageYOffset > this.PlaygroundAnchor){
                this.$liveRecord.addClass('sticky');
            }

            $(window).on('scroll', (e) => {
                if(window.pageYOffset > this.PlaygroundAnchor){
                    this.$liveRecord.addClass('sticky');
                } else {
                    this.$liveRecord.removeClass('sticky');
                }
            });
        }, 200);
    }

    SubmitResult(){
        for(let i = 1; i <= this.AnswerList.length; i++){

        }
    }

    // Toggle Screen Based On Condition
    ShowShareRequestMessage(){
        this.$SharingMessageScreen.removeClass('hide');
        this.ScrollBack();
    }

    HideShareRequestMessage(){
        this.$SharingMessageScreen.addClass('hide');
        this.ScrollBack();
    }

    ShowSuccessMessage(){
        this.$SuccessMessageScreen.removeClass('hide');
        this.ScrollBack();
    }

    ShowGameOverMessage(){
        this.$GameOverScreen.removeClass('hide');
        this.ScrollBack();
    }

    HidePlayGround(){
        this.$Game1Playground.addClass('hide');
        this.ScrollBack();
    }

    ShowPlayGround(){
        this.$Game1Playground.removeClass('hide');
        this.ScrollBack();
    }

    ScrollBack(){
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: this.$Game1Container.offset().top
            }, 700);
        }, 100)
    }

    /* Register Feature */
    RegisterSetup(){
        //this.AutoLoggin();
        this.$loginBtn = $('#login-btn');
        this.$loginInput = $('#log_user_id');
        this.$loginBtn.on('click', () => {
            let submitData = this.$loginInput.val();
            console.log(submitData);
            this.Login(submitData);
        });

        this.$loginInput.on('keyup', (e) => {
            if(e.keyCode === 13){
                let submitData = this.$loginInput.val();
                this.Login(submitData);
            }
        })

        this.$registerBtn = $('#register-btn');
        this.$regName = $('#reg_user_id');
        this.$regPhone = $('#reg_user_phone');
        this.$regEmail = $('#reg_user_email');

        this.$registerBtn.on('click', () => {
            let name = this.$regName.val();
            let phone_number = this.$regPhone.val();
            let email = this.$regEmail.val();

            this.Register({
                name: name,
                phone_number: phone_number,
                email: email
            });
        });

        this.$logoutBtn = $('#logout-btn');
        this.$logoutBtn.on('click', () => {
            this.Logout();
        });
    }

    Login(submitData){
        let demo = JSON.stringify({
            "login": String(submitData)
        });

        var myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        });

        // Login Function
        fetch('https://nihato.com/sign_in',{
            method: 'POST',
            headers: myHeaders,
            body: demo
        }).then(res => {
            if(res.status == 200){
                res.json().then(data => {
                    this.HideMessage();
                    this.LoginSuccess(data.data);
                });
            } else {
                let message = "Email hoặc số điện thoại không hợp lệ. Vui lòng điền lại thông tin đã đăng ký của bạn!"
                this.UpdateMessage(message);
            }
        }).catch( err => {
            let message = "Email hoặc số điện thoại không hợp lệ. Vui lòng điền lại thông tin đã đăng ký của bạn!"
            this.UpdateMessage(message);
        });
    }

    Register({name, phone_number, email}){
        console.log(name, phone_number, email)
        let demo = JSON.stringify({
            "name": String(name),
            "email": String(email),
            "phone_number":  String(phone_number)
        });

        let myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        });

        // Login Function
        fetch('https://nihato.com/register',{
            method: 'POST',
            headers: myHeaders,
            body: demo
        }).then(res => {
            if(res.status == 200){
                res.json().then(data => {
                    this.LoginSuccess(data.data);
                    this.HideMessage();
                });
            } else {
                let message = "Thông tin đăng ký không hợp lệ"
                this.UpdateMessage(message);
            }
        }).catch( err => {
            let message = "Lỗi đăng nhập, vui lòng thử lại"
            this.UpdateMessage(message);
        });
    }

    LoginSuccess(data){
        console.log(data);
        let hideElements = $('.hide-on-logged-in');
        let showElements = $('.show-on-logged-in');
        let showInlineBlock = $('a.show-on-logged-in');
        let displayName = $('#username-display');
        this.HideLoginModal();
        let user = data.user;
        let token = 'Bearer ' + data.token;
        let today = new Date()
        this.TodayShared = user.sharing_day !== today.toLocaleDateString() ? false : true;
        this.RemainingLive = user.lives;
        this.$liveHolder.html(this.RemainingLive);
        localStorage.removeItem('realme-phone');
        localStorage.removeItem('realme-token');
        localStorage.setItem('realme-phone', user.phone_number);
        localStorage.setItem('realme-token', token);
        this.currentToken = token;
        // Show & Hide Element When Logged In
        hideElements.hide();
        showElements.show();
        showInlineBlock.css('display', 'inline-block')
        // Display User Name
        displayName.html(user.email);
        if (this.RemainingLive === 0) {
            if(this.TodayShared){
                this.HidePlayGround();
                this.ShowGameOverMessage();
            } else {
                // Allow User To Share For More Live
                this.HidePlayGround();
                this.ShowShareRequestMessage();
            }
        }
        if (user.game_1) {
            this.HidePlayGround();
            this.ShowSuccessMessage();
            if (user.identify) {
                this.$BeforeShareMessage.addClass('hide');
                this.$ShareForIdentify.addClass('hide');
                this.$AfterShareMessage.removeClass('hide');
            }
        }
        // If logged in, show playground
        this.IsUserLogin = true;
        this.CheckPlayground();
    }

    HideLoginModal(){
        this.$ModalElement = $('#modal-signup');
        this.$body = $('body');

        this.$ModalElement.removeClass('show-modal');
        this.$body.removeClass('show-modal');
    }

    AutoLoggin(){
        let tokenNumber = localStorage.getItem('realme-token');
        if(tokenNumber){
            let headers = new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'Authorization': tokenNumber,
            });
            if(tokenNumber){
                fetch('https://nihato.com/me', {
                    method: 'GET',
                    headers: headers
                }).then(res => {
                    if (res.status == 200) {
                        res.json().then(data => {
                            this.LoginSuccess(data.data);
                        });
                    }
                }).catch(() => {})
            }
        }
    }

    Logout(){
        let showElements = $('.hide-on-logged-in');
        let hideElements = $('.show-on-logged-in');
        let displayName = $('#username-display');

        localStorage.removeItem('realme-phone');
        localStorage.removeItem('realme-token');

        this.IsUserLogin = false;
        this.CheckPlayground();

        hideElements.hide();
        showElements.show();
        location.reload();
    }

    UpdateMessage(msg){
        this.$RegisterMessage = $('.register-msg');
        this.$RegisterMessage.html(msg)
        this.$RegisterMessage.removeClass('hide');
    }

    HideMessage(){
        this.$RegisterMessage = $('.register-msg');
        this.$RegisterMessage.addClass('hide');
    }

    CheckPlayground(){
        if(this.IsUserLogin){
            this.$Playground.removeClass('hide');
            this.LiveRecordSticky()
        } else {
            this.$Playground.addClass('hide');
        }
    }
}