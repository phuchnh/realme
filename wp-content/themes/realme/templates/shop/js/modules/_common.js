import HomePage from './_home';
import GamePage3 from './_game-3';
import ShopPage from './_shop';
import YouTubePlayer from "youtube-player";

export default class Common {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.SCREEN_HEIGHT = window.innerHeight;

        this.HomePage = new HomePage();
        this.GamePage2 = new GamePage3();
        this.ShopPage = new ShopPage();

        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.SetupModal();
        this.PreOrderModalSetup();
        this.SetUpRegister();
        this.SetupSlider2();
        this.SetupMobileMenu();
        this.SmoothScrollingSetup();
        this.SetupCountDownClock();
        this.SetupVideo1();
        this.SetupVideo2();
        this.SetupVideo3();

        this.UpdatePlayerCount();
    }



    /* ===================================
     *  METHODS
     * =================================== */
    SetupModal(){
        this.$body = $('body');
        this.allowInteractive = true;

        // Sign up Modal
        //<editor-fold desc="Register Modal">
        this.$OpenModal = $('.open-modal');
        this.$CloseModal = $('.close-modal');
        this.$ModalElement = $('#modal-signup');

        this.$OpenModal.on('click', (e) => {
            if(this.allowInteractive){
                this.allowInteractive = false;
                this.$ModalElement.addClass('show-modal');
                this.$body.addClass('show-modal');
                setTimeout(() => {this.allowInteractive = true}, 300);
            }
        })

        this.$CloseModal.on('click', (e) => {
            if(this.allowInteractive) {
                this.$ModalElement.removeClass('show-modal');
                this.allowInteractive = false;
                this.$body.removeClass('show-modal');
                setTimeout(() => {this.allowInteractive = true}, 300)
            }
        })
        //</editor-fold>

        // Game Rule Modal
        //<editor-fold desc="Game Rule Modal">
        this.$openRuleBtn = $('.open-rule');
        this.$closeRuleBtn = $('.close-rule');
        this.$ruleModal = $('#modal_how-to-play');

        this.$openRuleBtn.on('click', (e) => {
            if(this.allowInteractive){
                this.allowInteractive = false;
                this.$ruleModal.addClass('show-modal');
                this.$body.addClass('show-modal');
                setTimeout(() => {this.allowInteractive = true}, 300);
            }
        });

        this.$closeRuleBtn.on('click', (e) => {
            if(this.allowInteractive) {
                this.$ruleModal.removeClass('show-modal');
                this.allowInteractive = false;
                this.$body.removeClass('show-modal');
                setTimeout(() => {this.allowInteractive = true}, 300)
            }
        });
        //</editor-fold>

    }

    PreOrderModalSetup(){
        // Main Modal
        this.preOrderModal = $('#modal-preorder');
        this.allTrackingLinks = $('.modal-content .track-this-button:not(.look-for-shop)');

        // Realme 2 Popup Btn
        this.$preOrderRealme2Btn = $('.pre-order-modal.realme-2-popup');
        this.$realme2Link = $('.track-this-button.realme-2');
        this.$realme2ContextTitle = $('#modal-preorder .main-content .title.realme-2');

        // Realme 2 16gb Popup Btn
        this.$preOrderRealme216GbBtn = $('.pre-order-modal.realme-2-16gb-popup');
        this.$realme216GbLink = $('.track-this-button.realme-2-16gb');

        // Realme 3 Pro Popup Btn
        this.$preOrderRealme3ProBtn = $('.pre-order-modal.realme-3-pro-popup');
        this.$realme3ProContextTitle = $('#modal-preorder .main-content .title.realme-3-pro');
        this.$realme3ProLink = $('.track-this-button.realme-3-pro');

        // Realme 3 Popup Btn
        this.$preOrderRealme3Btn = $('.pre-order-modal.realme-3-popup');
        this.$realme3Link = $('.track-this-button.realme-3');
        this.$realme3ContextTitle = $('#modal-preorder .main-content .title.realme-3');

        // Casual Popup Btn
        this.$preOrderRealmeBtn = $('.pre-order-modal.normal');
        this.$realmeLink = $('.track-this-button.normal');
        this.$realmeContextTitle = $('#modal-preorder .main-content .title.normal');


        // Close Modal
        this.$closePreOrderBtn = $('.close-preorder-modal');

        this.$preOrderRealme2Btn.on('click', (e)=>{
            // Toggle Link
            this.allTrackingLinks.addClass('hide');
            this.$realme2Link.removeClass('hide');

            // Toggle Context
            this.$realme2ContextTitle.removeClass('hide');
            this.$realme3ContextTitle.addClass('hide');
            this.$realme3ProContextTitle.addClass('hide');
            this.$realmeContextTitle.addClass('hide');

            // Open Modal
            this.OpenModal();
        });

        this.$preOrderRealme216GbBtn.on('click', (e)=>{
            // Toggle Link
            this.allTrackingLinks.addClass('hide');
            this.$realme216GbLink.removeClass('hide');

            // Toggle Context
            this.$realme2ContextTitle.removeClass('hide');
            this.$realme3ContextTitle.addClass('hide');
            this.$realme3ProContextTitle.addClass('hide');
            this.$realmeContextTitle.addClass('hide');

            // Open Modal
            this.OpenModal();
        });

        this.$preOrderRealme3ProBtn.on('click', (e) => {
            // Toggle Link
            this.allTrackingLinks.addClass('hide');
            this.$realme3ProLink.removeClass('hide');

            // Toggle Context
            this.$realme2ContextTitle.addClass('hide');
            this.$realme3ContextTitle.addClass('hide');
            this.$realme3ProContextTitle.removeClass('hide');
            this.$realmeContextTitle.addClass('hide');

            // Open Modal
            this.OpenModal();
        });

        this.$preOrderRealme3Btn.on('click', (e) => {
            // Toggle Link
            this.allTrackingLinks.addClass('hide');
            this.$realme3Link.removeClass('hide');

            // Toggle Context
            this.$realme2ContextTitle.addClass('hide');
            this.$realme3ProContextTitle.addClass('hide');
            this.$realmeContextTitle.addClass('hide');
            this.$realme3ContextTitle.removeClass('hide');

            // Open Modal
            this.OpenModal();
        });

        this.$preOrderRealmeBtn.on('click', (e) => {
            // Toggle Link
            this.allTrackingLinks.addClass('hide');
            this.$realmeLink.removeClass('hide');

            // Toggle Content
            this.$realme2ContextTitle.addClass('hide');
            this.$realme3ContextTitle.addClass('hide');
            this.$realme3ProContextTitle.addClass('hide');
            this.$realmeContextTitle.removeClass('hide');

            // Open Modal
            this.OpenModal();
        });


        this.$closePreOrderBtn.on('click', (e)=>{
            $('body').removeClass('show-modal');
            this.preOrderModal.removeClass('active');
        });
    }

    OpenModal(){
        this.preOrderModal.addClass('active');
        $('body').addClass('show-modal');
    }

    SetUpRegister(){
        this.$LoginForm = $('#login-form');
        this.$RegisterForm = $('#register-form');
        this.$OpenLogin = $('.open-login');
        this.$OpenRegister = $('.open-register');
        this.RegMessage = $('.register-msg');

        this.$OpenLogin.on('click', () => {
            this.$LoginForm.removeClass('hide');
            this.$RegisterForm.addClass('hide');
            this.RegMessage.addClass('hide');
        })

        this.$OpenRegister.on('click', () => {
            this.$RegisterForm.removeClass('hide');
            this.$LoginForm.addClass('hide');
            this.RegMessage.addClass('hide');
        })
    }

    SetupSlider2(){
        if(window.innerWidth <= 480){
            this.$sliderObject = $('.timeline-wrapper__mb');
            this.$sliderObject.slick({
                nextArrow: '<button type="button" class="slick-next"></button>',
                prevArrow: '<button type="button" class="slick-prev"></button>',
                initialSlide: 1,
                dots: false,
            })
        }
    }

    SetupMobileMenu(){
        this.$OpenMenuBtn = $('.open-menu');
        this.$CloseMenuBtn = $('.close-menu');
        this.$ToggleMenuHolder = $('.menu-toggle');
        this.$MainMenu = $('.main-menu');
        this.$Header = $('.header');
        this.MenuStatus = 'closed';

        this.$ToggleMenuHolder.on('click', () => {
            if( this.MenuStatus === 'closed' ){
                this.$Header.addClass('show-menu');
                this.$MainMenu.slideDown('fast', () => {
                    this.MenuStatus  = 'open';
                });
            } else {
                this.$Header.removeClass('show-menu');
                this.$MainMenu.slideUp('fast', () => {
                    this.MenuStatus = 'closed';
                });
            }
        });

        this.$CloseMenuBtn.on('click', () => {
            this.$Header.removeClass('show-menu');
            this.$MainMenu.slideUp('fast', () => {
                this.MenuStatus = 'closed';
            });
        })
    }

    SmoothScrollingSetup(){
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 700, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
    }

    SetupCountDownClock(){
        this.targetDate = new Date("July 1, 2019 00:00:00").getTime();
        this.countInterval = null;
        this.now = null;
        this.distance = null;
        this.days = null;
        this.hours = null;
        this.minutes = null;

        this.$daysElement = $('#days-left');
        this.$hoursElement = $('#hours-left');
        this.$minsElement = $('#mins-left');

        this.CountDownCalculation();
        this.FillHTML();

        if(this.countInterval == null){
            this.countInterval = setInterval(() => {
                // Time calculations for days, hours, minutes and seconds

                this.CountDownCalculation();
                this.FillHTML();
                // Display the result in the element with id="demo"

                // If the count down is finished, write some text
                if (this.distance < 0) {
                    clearInterval( this.countInterval );
                    this.countInterval = null;
                }
            }, 10000);
        }
    }

    CountDownCalculation(){
        this.now = new Date().getTime();
        this.distance = this.targetDate - this.now;
        this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if(this.hours < 10){
            this.hours = '0' + this.hours;
        }
        this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
        if(this.minutes < 10){
            this.minutes = '0' + this.minutes;
        }
    }

    FillHTML(){
        this.$daysElement.html(this.days);
        this.$hoursElement.html(this.hours);
        this.$minsElement.html(this.minutes);
    }

    UpdatePlayerCount(){
        this.$PlayersCounter = $('#players-count');
        this.$PlayersCounter.html(10020);
    }

    // Video From Home Page Publication
    SetupVideo1(){
        this.$VideoContainer = $('#video-container');
        this.$VideoWrapper = $('.product-info__video.video-1');
        this.$PauseVideo1Btn = $('.pause-btn.video-1');
        this.$PlayVideo1Btn = $('.play-btn.video-1');
        this.$MuteVideo1Btn = $('.mute-btn.video-1');
        this.forcePause = false;

        this.$VideoWrapper.css('height', this.$VideoWrapper.width() * 9/16 + 'px');

        if(this.$VideoContainer.length > 0 ){
            this.playerYT = YouTubePlayer('video-container', {
                videoId: 'SXlpW2_WdZU', // Default Clip
                playerVars: {
                    disablekb: 1,
                    fs: 0,
                    modestbranding: 1,
                    rel: 0,
                    controls: 0,
                    playlist: 'SXlpW2_WdZU',
                    loop: 1,
                },
            });
            this.playerYT.mute();
            this.playerYT.stopVideo();

            setTimeout(() => {
                this.VideoAnchor = $('#video-container').offset().top;

                if(window.innerWidth < 480){
                    $(window).on('scroll', (e) => {
                        if(window.pageYOffset > this.VideoAnchor - this.SCREEN_HEIGHT && !this.forcePause){
                            this.playerYT2.pauseVideo();
                            this.$VideoWrapper.removeClass('is-playing');
                            this.playerYT3.pauseVideo();
                            this.$VideoWrapper3.removeClass('is-playing');

                            this.playerYT.playVideo();
                            this.$VideoWrapper.addClass('is-playing');
                        }
                    });
                }

                this.$PauseVideo1Btn.on('click', () => {
                    this.playerYT.pauseVideo();
                    this.$VideoWrapper.removeClass('is-playing');
                    this.forcePause = true;
                });

                this.$PlayVideo1Btn.on('click', () => {
                    this.playerYT.playVideo();
                    this.$VideoWrapper.addClass('is-playing');
                });

                this.$MuteVideo1Btn.on('click', () => {
                    if(this.$MuteVideo1Btn.hasClass('muted')){
                        this.playerYT.unMute();
                        this.$MuteVideo1Btn.removeClass('muted');
                    } else {
                        this.playerYT.mute();
                        this.$MuteVideo1Btn.addClass('muted');
                    }
                });
            }, 400);
        }
    }

    SetupVideo2(){
        this.$VideoContainer2 = $('#video-container-realme-3-pro');
        this.$VideoWrapper2 = $('.product-info__video.video-2');

        this.$PauseVideo2Btn = $('.pause-btn.video-2');
        this.$PlayVideo2Btn = $('.play-btn.video-2');
        this.$MuteVideo2Btn = $('.mute-btn.video-2');
        this.forcePause2 = false;

        this.$VideoWrapper2.css('height', this.$VideoWrapper2.width() * 9/16 + 'px');

        if(this.$VideoContainer2.length > 0 ){
            this.playerYT2 = YouTubePlayer('video-container-realme-3-pro', {
                videoId: '9astXT08uDI', // Default Clip
                playerVars: {
                    disablekb: 1,
                    fs: 0,
                    modestbranding: 1,
                    rel: 0,
                    controls: 0,
                    playlist: '9astXT08uDI',
                    loop: 1,
                },
            });
            this.playerYT2.mute();
            this.$MuteVideo2Btn.addClass('muted');
            this.playerYT2.stopVideo();

            this.$PauseVideo2Btn.on('click', () => {
                this.playerYT2.pauseVideo();
                this.$VideoWrapper2.removeClass('is-playing');
                this.forcePause2 = true;
            });

            this.$PlayVideo2Btn.on('click', () => {
                this.playerYT2.playVideo();
                this.$VideoWrapper2.addClass('is-playing');
            });

            this.$MuteVideo2Btn.on('click', () => {
                if(this.$MuteVideo2Btn.hasClass('muted')){
                    this.playerYT2.unMute();
                    this.$MuteVideo2Btn.removeClass('muted');
                } else {
                    this.playerYT2.mute();
                    this.$MuteVideo2Btn.addClass('muted');
                }
            });

            setTimeout(() => {
                this.VideoAnchor2 =  $('#video-container-realme-3-pro').offset().top;
            $(window).on('scroll', (e) => {
                if(window.pageYOffset > this.VideoAnchor2 - this.SCREEN_HEIGHT && !this.forcePause2){
                    this.playerYT2.playVideo();
                    this.$VideoWrapper2.addClass('is-playing');

                    if(window.innerWidth < 480){
                        this.playerYT.pauseVideo();
                        this.$VideoWrapper.removeClass('is-playing');
                        this.playerYT3.pauseVideo();
                        this.$VideoWrapper3.removeClass('is-playing');
                    }
                }
            });}, 400);
        }
    }

    SetupVideo3(){
        this.$VideoContainer3 = $('#video-container-realme-3');
        this.$VideoWrapper3 = $('.product-info__video.video-3');

        this.$PauseVideo3Btn = $('.pause-btn.video-3');
        this.$PlayVideo3Btn = $('.play-btn.video-3');
        this.$MuteVideo3Btn = $('.mute-btn.video-3');
        this.forcePause3 = false;

        this.$VideoWrapper3.css('height', this.$VideoWrapper2.width() * 9/16 + 'px');

        if(this.$VideoContainer3.length > 0 ){
            this.playerYT3 = YouTubePlayer('video-container-realme-3', {
                videoId: 'bgbKq8JziYM', // Default Clip
                playerVars: {
                    disablekb: 1,
                    fs: 0,
                    modestbranding: 1,
                    rel: 0,
                    controls: 0,
                    playlist: 'bgbKq8JziYM',
                    loop: 1,
                },
            });
            this.playerYT3.stopVideo();

            this.$PauseVideo3Btn.on('click', () => {
                this.playerYT3.pauseVideo();
                this.$VideoWrapper3.removeClass('is-playing');
                this.forcePause3 = true;
            });

            this.$PlayVideo3Btn.on('click', () => {
                this.playerYT3.playVideo();
                this.$VideoWrapper3.addClass('is-playing');
            });

            this.$MuteVideo3Btn.on('click', () => {
                if(this.$MuteVideo3Btn.hasClass('muted')){
                    this.playerYT3.unMute();
                    this.$MuteVideo3Btn.removeClass('muted');
                } else {
                    this.playerYT3.mute();
                    this.$MuteVideo3Btn.addClass('muted');
                }
            });

            if(window.innerWidth <480){
                this.playerYT3.mute();
                this.$MuteVideo3Btn.addClass('muted');
                setTimeout(() => {
                    this.VideoAnchor3 =  $('#video-container-realme-3').offset().top;
                    $(window).on('scroll', (e) => {
                        if(window.pageYOffset > this.VideoAnchor3 - this.SCREEN_HEIGHT && !this.forcePause2){
                            this.playerYT.pauseVideo();
                            this.$VideoWrapper.removeClass('is-playing');
                            this.playerYT2.pauseVideo();
                            this.$VideoWrapper2.removeClass('is-playing');

                            this.playerYT3.playVideo();
                            this.$VideoWrapper3.addClass('is-playing');
                        }
                    });
                }, 400);
            }
        }
    }
} 