export default class GamePage2 {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        if($('#gamepage_2').length > 0){
            // Game Stage
            this.currentStep = 0;
            this.pendingPair = -1;
            this.finishedPair = 0;
            this.timeLeft = 10;
            this.counterInterval = null;
            this.allowSelect = true;
            this.IsUserLogin = false;
            this.IsPlaying = false;

            // Game Element
            this.$gameBlock = $('.game-block');
            this.$mainPlayground = $('#section-playground-2 .main-playground');
            this.$winScreen = $('#section-playground-2 .success-message');
            this.$lostScreen = $('#section-playground-2 .game-over-message');
            this.$timeleftValue = $('#game-2-time-left');
            this.$beforeShareMessage = $('#before-share-msg');
            this.$afterShareMessage = $('#after-share-msg');
            this.$ruleModal = $('#modal_how-to-play-game-2');

            // Game CTAs
            this.$targetObject = $('#game-targets .target-item');
            this.$startGameBtn = $('.start-game-2');
            this.$timeHolderBtn = $('.game-2-counter-clock');
            this.$replayGameBtn = $('.replay-game-2');
            this.$shareForIdentityBtn = $('#share-for-identify');
            this.$showGame2Instruction = $('.open-game-instruction');
            this.$openRuleGame2Btn = $('.open-game-instruction');
            this.$closeRuleGame2Btn = $('.close-rule-game-2');


            // First Function To Run
            this.bindEvents();
        }
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.AutoLoggin();
        this.RegisterSetup();
        this.SetupGame2();
    }



    /* ===================================
     *  METHODS
     * =================================== */
    SetupGame2(){
        this.$gameBlock.addClass('hide');

        // Init timer
        this.$timeleftValue.html(this.timeLeft);

        // Click On Traget Item
        this.$targetObject.on('click', (e) => {
            if(this.allowSelect && this.IsPlaying && !$(e.target).parents('.target-item').hasClass('open')){
                // Temporary Lock Interaction
                this.allowSelect = false;

                let targetItem = $(e.target).parents('.target-item');

                if( !targetItem.hasClass('open') ){
                    let targetItemValue = targetItem.data('match');

                    switch (this.currentStep){
                        case 0:
                            this.AddPair(targetItemValue, targetItem);
                            break;
                        case 1:
                            this.CheckPair(targetItemValue, targetItem);
                            break;
                    }
                }
            }
        });

        // Start Game Button
        this.$startGameBtn.on('click', (e) => {
            this.StartGame();
        });

        // Start Game Button
        this.$replayGameBtn.on('click', (e) => {
            this.ResetGame();
        });

        // Share For Identity Button
        //Share For Identify
        this.$shareForIdentityBtn.on('click', (e) => {
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
                            that.$beforeShareMessage.addClass('hide');
                            that.$shareForIdentityBtn.addClass('hide');
                            that.$afterShareMessage.removeClass('hide');

                        } else {
                            console.log('Identity failed');
                        }
                    });
                }
            });
        })

        // Show Game 2 Instruction
        this.SetupGame2RulePopup();
    }

    AddPair(num, targetDOM){
        console.log('add was called')
        targetDOM.addClass('open');
        this.pendingPair = num;
        this.currentStep = 1;

        // Unlock Interaction
        setTimeout(() => {
            this.allowSelect = true;
        }, 170);
    }

    CheckPair(num, targetDOM){
        // Show clicked Object
        targetDOM.addClass('open');
        if(this.pendingPair === num){
            this.finishedPair += 1;
            this.currentStep = 0;

            $('.target-item[data-match=' + this.pendingPair + '], .target-item[data-match=' + num + ']').off('click')
            setTimeout(() => {
                $('.target-item[data-match=' + this.pendingPair + '], .target-item[data-match=' + num + ']').addClass('finished');
                if(this.finishedPair == 8){
                    clearInterval(this.counterInterval);
                    this.WinGame();
                }
                this.allowSelect = true;
            }, 500);
        } else {
            // 2 item is not equal, close 2 item
            setTimeout(() => {
                targetDOM.removeClass('open');
                $('.target-item[data-match=' + this.pendingPair + ']').removeClass('open');
                this.currentStep = 0;
                this.allowSelect = true;
            }, 500)
        }
    }

    WinGame(){
        let header = new Headers({
            "Authorization" : this.currentToken,
            "Content-Type" : "application/json"
        });

        fetch('https://nihato.com/update_game_score',{
            method:'PUT',
            headers: header,
            body: JSON.stringify({
                game_2: true
            })
        }).then(res => {
            if(res.status == 200){
                this.ShowWinScreen();
            }
        });
    }

    StartGame(){
        // TODO: Set back to 60 seconds when finish
        this.timeLeft = 60;
        this.$timeleftValue.html(this.timeLeft);

        this.$timeHolderBtn.removeClass('hide');
        this.$startGameBtn.addClass('hide');

        // Show Finished Screen First
        this.$targetObject.removeClass('finished');

        setTimeout(() => {
            this.IsPlaying = true;
            this.counterInterval = setInterval( ()=>{
                if(this.timeLeft > 0){
                    this.timeLeft -= 1;
                    this.$timeleftValue.html(this.timeLeft);
                } else {
                    clearInterval(this.counterInterval);
                    this.LostGame();
                }
            }, 1000 );
        }, 820)
    }

    ResetGame(){
        this.ShowPlayground();
        this.$timeHolderBtn.addClass('hide');
        this.$startGameBtn.removeClass('hide');
    }

    LostGame(){
        this.ShowLostScreen();
    }

    /* Support Functions */
    ShowPlayground(){
        // Show Finished Screen First
        this.$targetObject.addClass('finished');
        this.$gameBlock.addClass('hide');
        this.$mainPlayground.removeClass('hide');
    }

    ShowLostScreen(){
        this.$gameBlock.addClass('hide');
        this.$lostScreen.removeClass('hide');
    }

    ShowWinScreen(){
        this.$gameBlock.addClass('hide');
        this.$winScreen.removeClass('hide');
    }

    SetupGame2RulePopup(){
        // Game Rule Modal
        //<editor-fold desc="Open Game Rule Modal">
        this.allowInteractive = true;

        this.$openRuleGame2Btn.on('click', (e) => {
            if(this.allowInteractive){
                this.allowInteractive = false;
                this.$ruleModal.addClass('show-modal');
                this.$body.addClass('show-modal');
                setTimeout(() => {this.allowInteractive = true}, 300);
            }
        });

        this.$closeRuleGame2Btn.on('click', (e) => {
            if(this.allowInteractive) {
                this.$ruleModal.removeClass('show-modal');
                this.allowInteractive = false;
                this.$body.removeClass('show-modal');
                setTimeout(() => {this.allowInteractive = true}, 300)
            }
        });
        //</editor-fold>
    }

    /* Page Effect */
    //<editor-fold desc="Page Effect">
    ScrollBack(){
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: this.$Game1Container.offset().top
            }, 700);
        }, 100)
    }
    //</editor-fold>

    /* Register Feature */
    //<editor-fold desc="Register Feature">
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
                    this.LoginSuccess(data.data, this.ScrollBack());
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

    LoginSuccess(data, callback){
        console.log(data);
        let hideElements = $('.hide-on-logged-in');
        let showElements = $('.show-on-logged-in');
        let showInlineBlock = $('a.show-on-logged-in');
        let displayName = $('#username-display');
        this.HideLoginModal();
        if(callback){
            callback();
        }
        let user = data.user;
        let token = 'Bearer ' + data.token;
        let today = new Date()
        this.TodayShared = user.sharing_day !== today.toLocaleDateString() ? false : true;
        this.RemainingLive = user.lives;

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

        if (user.game_2) {
            this.ShowWinScreen();
        }

        // If already Identify, hide related elements
        if (user.identify) {
            this.$afterShareMessage.removeClass('hide');
            this.$beforeShareMessage.addClass('hide');
            this.$shareForIdentityBtn.addClass('hide');
        } else {
            this.$afterShareMessage.addClass('hide');
            this.$beforeShareMessage.removeClass('hide');
            this.$shareForIdentityBtn.removeClass('hide');
        }

        // If logged in, show playground
        this.IsUserLogin = true;
        this.CheckPlayground(user.game_2);
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
                }).catch(() => {
                    console.log('sai sai')
                })
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

    CheckPlayground(isWon = false){
        let timelineWrapper = $('.timeline-wrapper__mb');
        if(this.IsUserLogin && isWon){
            this.ShowWinScreen();
            timelineWrapper.removeClass('logged-out');
        } else {
            if(this.IsUserLogin && !isWon){
                this.ShowPlayground();
                timelineWrapper.removeClass('logged-out');
            } else {
                this.$gameBlock.addClass('hide');
                timelineWrapper.addClass('logged-out');
            }
        }
    }

    ScrollBack(){
        let offset = 0;
        if(window.innerWidth < 480){
            offset = 68;
        }
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: $('#section-playground-2').offset().top - offset
            }, 700);
        }, 400)
    }
    //</editor-fold>
}