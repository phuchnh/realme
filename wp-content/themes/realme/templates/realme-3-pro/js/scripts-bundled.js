/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _core = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  var demo = new _core.default();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Core =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Core() {
    _classCallCheck(this, Core);

    this.common = new _common.default();
    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Core, [{
    key: "bindEvents",
    value: function bindEvents() {}
    /* ===================================
     *  METHODS
     * =================================== */

  }]);

  return Core;
}();

exports.default = Core;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _home = _interopRequireDefault(__webpack_require__(3));

var _game = _interopRequireDefault(__webpack_require__(4));

var _shop = _interopRequireDefault(__webpack_require__(5));

var _youtubePlayer = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Common =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Common() {
    _classCallCheck(this, Common);

    this.SCREEN_HEIGHT = window.innerHeight;
    this.HomePage = new _home.default();
    this.GamePage2 = new _game.default();
    this.ShopPage = new _shop.default();
    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Common, [{
    key: "bindEvents",
    value: function bindEvents() {
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

  }, {
    key: "SetupModal",
    value: function SetupModal() {
      var _this = this;

      this.$body = $('body');
      this.allowInteractive = true; // Sign up Modal
      //<editor-fold desc="Register Modal">

      this.$OpenModal = $('.open-modal');
      this.$CloseModal = $('.close-modal');
      this.$ModalElement = $('#modal-signup');
      this.$OpenModal.on('click', function (e) {
        if (_this.allowInteractive) {
          _this.allowInteractive = false;

          _this.$ModalElement.addClass('show-modal');

          _this.$body.addClass('show-modal');

          setTimeout(function () {
            _this.allowInteractive = true;
          }, 300);
        }
      });
      this.$CloseModal.on('click', function (e) {
        if (_this.allowInteractive) {
          _this.$ModalElement.removeClass('show-modal');

          _this.allowInteractive = false;

          _this.$body.removeClass('show-modal');

          setTimeout(function () {
            _this.allowInteractive = true;
          }, 300);
        }
      }); //</editor-fold>
      // Game Rule Modal
      //<editor-fold desc="Game Rule Modal">

      this.$openRuleBtn = $('.open-rule');
      this.$closeRuleBtn = $('.close-rule');
      this.$ruleModal = $('#modal_how-to-play');
      this.$openRuleBtn.on('click', function (e) {
        if (_this.allowInteractive) {
          _this.allowInteractive = false;

          _this.$ruleModal.addClass('show-modal');

          _this.$body.addClass('show-modal');

          setTimeout(function () {
            _this.allowInteractive = true;
          }, 300);
        }
      });
      this.$closeRuleBtn.on('click', function (e) {
        if (_this.allowInteractive) {
          _this.$ruleModal.removeClass('show-modal');

          _this.allowInteractive = false;

          _this.$body.removeClass('show-modal');

          setTimeout(function () {
            _this.allowInteractive = true;
          }, 300);
        }
      }); //</editor-fold>
    }
  }, {
    key: "PreOrderModalSetup",
    value: function PreOrderModalSetup() {
      var _this2 = this;

      // Main Modal
      this.preOrderModal = $('#modal-preorder');
      this.allTrackingLinks = $('.modal-content .track-this-button:not(.look-for-shop)'); // Realme 2 Popup Btn

      this.$preOrderRealme2Btn = $('.pre-order-modal.realme-2-popup');
      this.$realme2Link = $('.track-this-button.realme-2');
      this.$realme2ContextTitle = $('#modal-preorder .main-content .title.realme-2'); // Realme 2 16gb Popup Btn

      this.$preOrderRealme216GbBtn = $('.pre-order-modal.realme-2-16gb-popup');
      this.$realme216GbLink = $('.track-this-button.realme-2-16gb'); // Realme 3 Pro Popup Btn

      this.$preOrderRealme3ProBtn = $('.pre-order-modal.realme-3-pro-popup');
      this.$realme3ProContextTitle = $('#modal-preorder .main-content .title.realme-3-pro');
      this.$realme3ProLink = $('.track-this-button.realme-3-pro'); // Realme 3 Popup Btn

      this.$preOrderRealme3Btn = $('.pre-order-modal.realme-3-popup');
      this.$realme3Link = $('.track-this-button.realme-3');
      this.$realme3ContextTitle = $('#modal-preorder .main-content .title.realme-3'); // Casual Popup Btn

      this.$preOrderRealmeBtn = $('.pre-order-modal.normal');
      this.$realmeLink = $('.track-this-button.normal');
      this.$realmeContextTitle = $('#modal-preorder .main-content .title.normal'); // Close Modal

      this.$closePreOrderBtn = $('.close-preorder-modal');
      this.$preOrderRealme2Btn.on('click', function (e) {
        // Toggle Link
        _this2.allTrackingLinks.addClass('hide');

        _this2.$realme2Link.removeClass('hide'); // Toggle Context


        _this2.$realme2ContextTitle.removeClass('hide');

        _this2.$realme3ContextTitle.addClass('hide');

        _this2.$realme3ProContextTitle.addClass('hide');

        _this2.$realmeContextTitle.addClass('hide'); // Open Modal


        _this2.OpenModal();
      });
      this.$preOrderRealme216GbBtn.on('click', function (e) {
        // Toggle Link
        _this2.allTrackingLinks.addClass('hide');

        _this2.$realme216GbLink.removeClass('hide'); // Toggle Context


        _this2.$realme2ContextTitle.removeClass('hide');

        _this2.$realme3ContextTitle.addClass('hide');

        _this2.$realme3ProContextTitle.addClass('hide');

        _this2.$realmeContextTitle.addClass('hide'); // Open Modal


        _this2.OpenModal();
      });
      this.$preOrderRealme3ProBtn.on('click', function (e) {
        // Toggle Link
        _this2.allTrackingLinks.addClass('hide');

        _this2.$realme3ProLink.removeClass('hide'); // Toggle Context


        _this2.$realme2ContextTitle.addClass('hide');

        _this2.$realme3ContextTitle.addClass('hide');

        _this2.$realme3ProContextTitle.removeClass('hide');

        _this2.$realmeContextTitle.addClass('hide'); // Open Modal


        _this2.OpenModal();
      });
      this.$preOrderRealme3Btn.on('click', function (e) {
        // Toggle Link
        _this2.allTrackingLinks.addClass('hide');

        _this2.$realme3Link.removeClass('hide'); // Toggle Context


        _this2.$realme2ContextTitle.addClass('hide');

        _this2.$realme3ProContextTitle.addClass('hide');

        _this2.$realmeContextTitle.addClass('hide');

        _this2.$realme3ContextTitle.removeClass('hide'); // Open Modal


        _this2.OpenModal();
      });
      this.$preOrderRealmeBtn.on('click', function (e) {
        // Toggle Link
        _this2.allTrackingLinks.addClass('hide');

        _this2.$realmeLink.removeClass('hide'); // Toggle Content


        _this2.$realme2ContextTitle.addClass('hide');

        _this2.$realme3ContextTitle.addClass('hide');

        _this2.$realme3ProContextTitle.addClass('hide');

        _this2.$realmeContextTitle.removeClass('hide'); // Open Modal


        _this2.OpenModal();
      });
      this.$closePreOrderBtn.on('click', function (e) {
        $('body').removeClass('show-modal');

        _this2.preOrderModal.removeClass('active');
      });
    }
  }, {
    key: "OpenModal",
    value: function OpenModal() {
      this.preOrderModal.addClass('active');
      $('body').addClass('show-modal');
    }
  }, {
    key: "SetUpRegister",
    value: function SetUpRegister() {
      var _this3 = this;

      this.$LoginForm = $('#login-form');
      this.$RegisterForm = $('#register-form');
      this.$OpenLogin = $('.open-login');
      this.$OpenRegister = $('.open-register');
      this.RegMessage = $('.register-msg');
      this.$OpenLogin.on('click', function () {
        _this3.$LoginForm.removeClass('hide');

        _this3.$RegisterForm.addClass('hide');

        _this3.RegMessage.addClass('hide');
      });
      this.$OpenRegister.on('click', function () {
        _this3.$RegisterForm.removeClass('hide');

        _this3.$LoginForm.addClass('hide');

        _this3.RegMessage.addClass('hide');
      });
    }
  }, {
    key: "SetupSlider2",
    value: function SetupSlider2() {
      if (window.innerWidth <= 480) {
        this.$sliderObject = $('.timeline-wrapper__mb');
        this.$sliderObject.slick({
          nextArrow: '<button type="button" class="slick-next"></button>',
          prevArrow: '<button type="button" class="slick-prev"></button>',
          initialSlide: 1,
          dots: false
        });
      }
    }
  }, {
    key: "SetupMobileMenu",
    value: function SetupMobileMenu() {
      var _this4 = this;

      this.$OpenMenuBtn = $('.open-menu');
      this.$CloseMenuBtn = $('.close-menu');
      this.$ToggleMenuHolder = $('.menu-toggle');
      this.$MainMenu = $('.main-menu');
      this.$Header = $('.header');
      this.MenuStatus = 'closed';
      this.$ToggleMenuHolder.on('click', function () {
        if (_this4.MenuStatus === 'closed') {
          _this4.$Header.addClass('show-menu');

          _this4.$MainMenu.slideDown('fast', function () {
            _this4.MenuStatus = 'open';
          });
        } else {
          _this4.$Header.removeClass('show-menu');

          _this4.$MainMenu.slideUp('fast', function () {
            _this4.MenuStatus = 'closed';
          });
        }
      });
      this.$CloseMenuBtn.on('click', function () {
        _this4.$Header.removeClass('show-menu');

        _this4.$MainMenu.slideUp('fast', function () {
          _this4.MenuStatus = 'closed';
        });
      });
    }
  }, {
    key: "SmoothScrollingSetup",
    value: function SmoothScrollingSetup() {
      $('a[href*="#"]') // Remove links that don't actually link to anything
      .not('[href="#"]').not('[href="#0"]').click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 700, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();

              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable

                $target.focus(); // Set focus again
              }

              ;
            });
          }
        }
      });
    }
  }, {
    key: "SetupCountDownClock",
    value: function SetupCountDownClock() {
      var _this5 = this;

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

      if (this.countInterval == null) {
        this.countInterval = setInterval(function () {
          // Time calculations for days, hours, minutes and seconds
          _this5.CountDownCalculation();

          _this5.FillHTML(); // Display the result in the element with id="demo"
          // If the count down is finished, write some text


          if (_this5.distance < 0) {
            clearInterval(_this5.countInterval);
            _this5.countInterval = null;
          }
        }, 10000);
      }
    }
  }, {
    key: "CountDownCalculation",
    value: function CountDownCalculation() {
      this.now = new Date().getTime();
      this.distance = this.targetDate - this.now;
      this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(this.distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

      if (this.hours < 10) {
        this.hours = '0' + this.hours;
      }

      this.minutes = Math.floor(this.distance % (1000 * 60 * 60) / (1000 * 60));

      if (this.minutes < 10) {
        this.minutes = '0' + this.minutes;
      }
    }
  }, {
    key: "FillHTML",
    value: function FillHTML() {
      this.$daysElement.html(this.days);
      this.$hoursElement.html(this.hours);
      this.$minsElement.html(this.minutes);
    }
  }, {
    key: "UpdatePlayerCount",
    value: function UpdatePlayerCount() {
      this.$PlayersCounter = $('#players-count');
      this.$PlayersCounter.html(10020);
    } // Video From Home Page Publication

  }, {
    key: "SetupVideo1",
    value: function SetupVideo1() {
      var _this6 = this;

      this.$VideoContainer = $('#video-container');
      this.$VideoWrapper = $('.product-info__video.video-1');
      this.$PauseVideo1Btn = $('.pause-btn.video-1');
      this.$PlayVideo1Btn = $('.play-btn.video-1');
      this.$MuteVideo1Btn = $('.mute-btn.video-1');
      this.forcePause = false;
      this.$VideoWrapper.css('height', this.$VideoWrapper.width() * 9 / 16 + 'px');

      if (this.$VideoContainer.length > 0) {
        this.playerYT = (0, _youtubePlayer.default)('video-container', {
          videoId: 'SXlpW2_WdZU',
          // Default Clip
          playerVars: {
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            rel: 0,
            controls: 0,
            playlist: 'SXlpW2_WdZU',
            loop: 1
          }
        });
        this.playerYT.mute();
        this.playerYT.stopVideo();
        setTimeout(function () {
          _this6.VideoAnchor = $('#video-container').offset().top;

          if (window.innerWidth < 480) {
            $(window).on('scroll', function (e) {
              if (window.pageYOffset > _this6.VideoAnchor - _this6.SCREEN_HEIGHT && !_this6.forcePause) {
                _this6.playerYT2.pauseVideo();

                _this6.$VideoWrapper.removeClass('is-playing');

                _this6.playerYT3.pauseVideo();

                _this6.$VideoWrapper3.removeClass('is-playing');

                _this6.playerYT.playVideo();

                _this6.$VideoWrapper.addClass('is-playing');
              }
            });
          }

          _this6.$PauseVideo1Btn.on('click', function () {
            _this6.playerYT.pauseVideo();

            _this6.$VideoWrapper.removeClass('is-playing');

            _this6.forcePause = true;
          });

          _this6.$PlayVideo1Btn.on('click', function () {
            _this6.playerYT.playVideo();

            _this6.$VideoWrapper.addClass('is-playing');
          });

          _this6.$MuteVideo1Btn.on('click', function () {
            if (_this6.$MuteVideo1Btn.hasClass('muted')) {
              _this6.playerYT.unMute();

              _this6.$MuteVideo1Btn.removeClass('muted');
            } else {
              _this6.playerYT.mute();

              _this6.$MuteVideo1Btn.addClass('muted');
            }
          });
        }, 400);
      }
    }
  }, {
    key: "SetupVideo2",
    value: function SetupVideo2() {
      var _this7 = this;

      this.$VideoContainer2 = $('#video-container-realme-3-pro');
      this.$VideoWrapper2 = $('.product-info__video.video-2');
      this.$PauseVideo2Btn = $('.pause-btn.video-2');
      this.$PlayVideo2Btn = $('.play-btn.video-2');
      this.$MuteVideo2Btn = $('.mute-btn.video-2');
      this.forcePause2 = false;
      this.$VideoWrapper2.css('height', this.$VideoWrapper2.width() * 9 / 16 + 'px');

      if (this.$VideoContainer2.length > 0) {
        this.playerYT2 = (0, _youtubePlayer.default)('video-container-realme-3-pro', {
          videoId: '9astXT08uDI',
          // Default Clip
          playerVars: {
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            rel: 0,
            controls: 0,
            playlist: '9astXT08uDI',
            loop: 1
          }
        });
        this.playerYT2.mute();
        this.$MuteVideo2Btn.addClass('muted');
        this.playerYT2.stopVideo();
        this.$PauseVideo2Btn.on('click', function () {
          _this7.playerYT2.pauseVideo();

          _this7.$VideoWrapper2.removeClass('is-playing');

          _this7.forcePause2 = true;
        });
        this.$PlayVideo2Btn.on('click', function () {
          _this7.playerYT2.playVideo();

          _this7.$VideoWrapper2.addClass('is-playing');
        });
        this.$MuteVideo2Btn.on('click', function () {
          if (_this7.$MuteVideo2Btn.hasClass('muted')) {
            _this7.playerYT2.unMute();

            _this7.$MuteVideo2Btn.removeClass('muted');
          } else {
            _this7.playerYT2.mute();

            _this7.$MuteVideo2Btn.addClass('muted');
          }
        });
        setTimeout(function () {
          _this7.VideoAnchor2 = $('#video-container-realme-3-pro').offset().top;
          $(window).on('scroll', function (e) {
            if (window.pageYOffset > _this7.VideoAnchor2 - _this7.SCREEN_HEIGHT && !_this7.forcePause2) {
              _this7.playerYT2.playVideo();

              _this7.$VideoWrapper2.addClass('is-playing');

              if (window.innerWidth < 480) {
                _this7.playerYT.pauseVideo();

                _this7.$VideoWrapper.removeClass('is-playing');

                _this7.playerYT3.pauseVideo();

                _this7.$VideoWrapper3.removeClass('is-playing');
              }
            }
          });
        }, 400);
      }
    }
  }, {
    key: "SetupVideo3",
    value: function SetupVideo3() {
      var _this8 = this;

      this.$VideoContainer3 = $('#video-container-realme-3');
      this.$VideoWrapper3 = $('.product-info__video.video-3');
      this.$PauseVideo3Btn = $('.pause-btn.video-3');
      this.$PlayVideo3Btn = $('.play-btn.video-3');
      this.$MuteVideo3Btn = $('.mute-btn.video-3');
      this.forcePause3 = false;
      this.$VideoWrapper3.css('height', this.$VideoWrapper2.width() * 9 / 16 + 'px');

      if (this.$VideoContainer3.length > 0) {
        this.playerYT3 = (0, _youtubePlayer.default)('video-container-realme-3', {
          videoId: 'bgbKq8JziYM',
          // Default Clip
          playerVars: {
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            rel: 0,
            controls: 0,
            playlist: 'bgbKq8JziYM',
            loop: 1
          }
        });
        this.playerYT3.stopVideo();
        this.$PauseVideo3Btn.on('click', function () {
          _this8.playerYT3.pauseVideo();

          _this8.$VideoWrapper3.removeClass('is-playing');

          _this8.forcePause3 = true;
        });
        this.$PlayVideo3Btn.on('click', function () {
          _this8.playerYT3.playVideo();

          _this8.$VideoWrapper3.addClass('is-playing');
        });
        this.$MuteVideo3Btn.on('click', function () {
          if (_this8.$MuteVideo3Btn.hasClass('muted')) {
            _this8.playerYT3.unMute();

            _this8.$MuteVideo3Btn.removeClass('muted');
          } else {
            _this8.playerYT3.mute();

            _this8.$MuteVideo3Btn.addClass('muted');
          }
        });

        if (window.innerWidth < 480) {
          this.playerYT3.mute();
          this.$MuteVideo3Btn.addClass('muted');
          setTimeout(function () {
            _this8.VideoAnchor3 = $('#video-container-realme-3').offset().top;
            $(window).on('scroll', function (e) {
              if (window.pageYOffset > _this8.VideoAnchor3 - _this8.SCREEN_HEIGHT && !_this8.forcePause2) {
                _this8.playerYT.pauseVideo();

                _this8.$VideoWrapper.removeClass('is-playing');

                _this8.playerYT2.pauseVideo();

                _this8.$VideoWrapper2.removeClass('is-playing');

                _this8.playerYT3.playVideo();

                _this8.$VideoWrapper3.addClass('is-playing');
              }
            });
          }, 400);
        }
      }
    }
  }]);

  return Common;
}();

exports.default = Common;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HomePage =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function HomePage() {
    _classCallCheck(this, HomePage);

    this.SCREEN_HEIGHT = window.innerHeight;

    if ($('#flashsale-homepage').length > 0) {
      this.bindEvents();
    }
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(HomePage, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.SetupSlider();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "SetupSlider",
    value: function SetupSlider() {
      var _this = this;

      if (window.innerWidth <= 480) {
        this.$sliderObject = $('.timeline-slider');
        this.$sliderObject.slick({
          nextArrow: '<button type="button" class="slick-next"></button>',
          prevArrow: '<button type="button" class="slick-prev"></button>',
          initialSlide: 2,
          dots: true
        });
      } else {
        this.$sliderObject = $('.timeline-phase-3 .timeline-slider-wrapper');
        this.$sliderNextBtn = $('.timeline-slider-wrapper .nav-button.next');
        this.$sliderPrevBtn = $('.timeline-slider-wrapper .nav-button.prev');
        this.$sliderObject.slick({
          initialSlide: 1,
          infinite: false,
          arrows: false
        });
        this.$sliderObject.on('beforeChange', function () {
          _this.$sliderNextBtn.removeClass('active');

          _this.$sliderPrevBtn.removeClass('active');
        });
        this.$sliderObject.on('afterChange', function (slick, nextSlide, currentSlide) {
          switch (currentSlide) {
            case 0:
              _this.$sliderNextBtn.addClass('active');

              break;

            default:
              _this.$sliderPrevBtn.addClass('active');

              break;
          }
        });
        this.$sliderNextBtn.on('click', function () {
          _this.$sliderObject.slick('slickNext');
        });
        this.$sliderPrevBtn.on('click', function () {
          _this.$sliderObject.slick('slickPrev');
        });
      }
    }
  }]);

  return HomePage;
}();

exports.default = HomePage;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GamePage =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function GamePage() {
    _classCallCheck(this, GamePage);

    if ($('#gamepage-3').length > 0) {
      this.AnswerList = [1, 1, 1];
      this.currentToken = localStorage.getItem('realme-token');
      this.IsUserLogin = false;
      this.TodayShared = false;
      this.TimeLeft = 60;
      this.CounterInterval = null;
      this.IsIdentify = false; // HTML effect element

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
      this.$ruleModal = $('#modal_how-to-play-game-3'); // Element Need To Be Update through API
      // Live left

      this.$liveHolder = $('.live-number');
      this.$liveHolder.html(this.RemainingLive); // List Of CTAs

      this.$ShareForLiveBtn = $('#share-for-lives');
      this.$ShareForIdentify = $('#share-for-identify');
      this.$SubmitResultStop3Btn = $('#submit-result-stop-3');
      this.$ToQuestion1 = $('#to-question-1');
      this.$ToQuestion2 = $('#to-question-2');
      this.$ToQuestion3 = $('#to-question-3');
      this.$ReplayGame3 = $('#replay-game-3');
      this.$openRuleGame3Btn = $('.open-game-instruction');
      this.$closeRuleGame3Btn = $('.close-rule-game-3'); // Question Item

      this.$Question1 = $('#question-3-1');
      this.$Question2 = $('#question-3-2');
      this.$Question3 = $('#question-3-3');
      this.bindEvents();
    }
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(GamePage, [{
    key: "bindEvents",
    value: function bindEvents() {}
    /* ===================================
     *  METHODS
     * =================================== */

  }]);

  return GamePage;
}();

exports.default = GamePage;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShopPage =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function ShopPage() {
    _classCallCheck(this, ShopPage);

    if ($('#flashsale-ka-page').length > 0) {
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


  _createClass(ShopPage, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.DoLaptopAnimation();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "DoLaptopAnimation",
    value: function DoLaptopAnimation() {
      var _this = this;

      this.$LaptopContainer.removeClass('ready');
      setTimeout(function () {
        _this.$LaptopContainer.addClass('animating');
      }, 520);
    }
  }]);

  return ShopPage;
}();

exports.default = ShopPage;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _sister = __webpack_require__(7);

var _sister2 = _interopRequireDefault(_sister);

var _loadYouTubeIframeApi = __webpack_require__(8);

var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);

var _YouTubePlayer = __webpack_require__(10);

var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef YT.Player
 * @see https://developers.google.com/youtube/iframe_api_reference
 * */

/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
 */
var youtubeIframeAPI = void 0;

/**
 * A factory function used to produce an instance of YT.Player and queue function calls and proxy events of the resulting object.
 *
 * @param maybeElementId Either An existing YT.Player instance,
 * the DOM element or the id of the HTML element where the API will insert an <iframe>.
 * @param options See `options` (Ignored when using an existing YT.Player instance).
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions. Default: `false`.
 * See `FunctionStateMap.js` for supported functions and acceptable states.
 */

exports.default = function (maybeElementId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var strictState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var emitter = (0, _sister2.default)();

  if (!youtubeIframeAPI) {
    youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
  }

  if (options.events) {
    throw new Error('Event handlers cannot be overwritten.');
  }

  if (typeof maybeElementId === 'string' && !document.getElementById(maybeElementId)) {
    throw new Error('Element "' + maybeElementId + '" does not exist.');
  }

  options.events = _YouTubePlayer2.default.proxyEvents(emitter);

  var playerAPIReady = new Promise(function (resolve) {
    if ((typeof maybeElementId === 'undefined' ? 'undefined' : _typeof(maybeElementId)) === 'object' && maybeElementId.playVideo instanceof Function) {
      var player = maybeElementId;

      resolve(player);
    } else {
      // asume maybeElementId can be rendered inside
      // eslint-disable-next-line promise/catch-or-return
      youtubeIframeAPI.then(function (YT) {
        // eslint-disable-line promise/prefer-await-to-then
        var player = new YT.Player(maybeElementId, options);

        emitter.on('ready', function () {
          resolve(player);
        });

        return null;
      });
    }
  });

  var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);

  playerApi.on = emitter.on;
  playerApi.off = emitter.off;

  return playerApi;
};

module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Sister;

/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
Sister = function () {
    var sister = {},
        events = {};

    /**
     * @name handler
     * @function
     * @param {Object} data Event data.
     */

    /**
     * @param {String} name Event name.
     * @param {handler} handler
     * @return {listener}
     */
    sister.on = function (name, handler) {
        var listener = {name: name, handler: handler};
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
    };

    /**
     * @param {listener}
     */
    sister.off = function (listener) {
        var index = events[listener.name].indexOf(listener);

        if (index !== -1) {
            events[listener.name].splice(index, 1);
        }
    };

    /**
     * @param {String} name Event name.
     * @param {Object} data Event data.
     */
    sister.trigger = function (name, data) {
        var listeners = events[name],
            i;

        if (listeners) {
            i = listeners.length;
            while (i--) {
                listeners[i].handler(data);
            }
        }
    };

    return sister;
};

module.exports = Sister;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadScript = __webpack_require__(9);

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (emitter) {
  /**
   * A promise that is resolved when window.onYouTubeIframeAPIReady is called.
   * The promise is resolved with a reference to window.YT object.
   */
  var iframeAPIReady = new Promise(function (resolve) {
    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
      resolve(window.YT);

      return;
    } else {
      var protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';

      (0, _loadScript2.default)(protocol + '//www.youtube.com/iframe_api', function (error) {
        if (error) {
          emitter.trigger('error', error);
        }
      });
    }

    var previous = window.onYouTubeIframeAPIReady;

    // The API will call this function when page has finished downloading
    // the JavaScript for the player API.
    window.onYouTubeIframeAPIReady = function () {
      if (previous) {
        previous();
      }

      resolve(window.YT);
    };
  });

  return iframeAPIReady;
};

module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports) {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = __webpack_require__(11);

var _debug2 = _interopRequireDefault(_debug);

var _functionNames = __webpack_require__(15);

var _functionNames2 = _interopRequireDefault(_functionNames);

var _eventNames = __webpack_require__(16);

var _eventNames2 = _interopRequireDefault(_eventNames);

var _FunctionStateMap = __webpack_require__(17);

var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable promise/prefer-await-to-then */

var debug = (0, _debug2.default)('youtube-player');

var YouTubePlayer = {};

/**
 * Construct an object that defines an event handler for all of the YouTube
 * player events. Proxy captured events through an event emitter.
 *
 * @todo Capture event parameters.
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 */
YouTubePlayer.proxyEvents = function (emitter) {
  var events = {};

  var _loop = function _loop(eventName) {
    var onEventName = 'on' + eventName.slice(0, 1).toUpperCase() + eventName.slice(1);

    events[onEventName] = function (event) {
      debug('event "%s"', onEventName, event);

      emitter.trigger(eventName, event);
    };
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      _loop(eventName);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return events;
};

/**
 * Delays player API method execution until player state is ready.
 *
 * @todo Proxy all of the methods using Object.keys.
 * @todo See TRICKY below.
 * @param playerAPIReady Promise that resolves when player is ready.
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions.
 * @returns {Object}
 */
YouTubePlayer.promisifyPlayer = function (playerAPIReady) {
  var strictState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var functions = {};

  var _loop2 = function _loop2(functionName) {
    if (strictState && _FunctionStateMap2.default[functionName]) {
      functions[functionName] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return playerAPIReady.then(function (player) {
          var stateInfo = _FunctionStateMap2.default[functionName];
          var playerState = player.getPlayerState();

          // eslint-disable-next-line no-warning-comments
          // TODO: Just spread the args into the function once Babel is fixed:
          // https://github.com/babel/babel/issues/4270
          //
          // eslint-disable-next-line prefer-spread
          var value = player[functionName].apply(player, args);

          // TRICKY: For functions like `seekTo`, a change in state must be
          // triggered given that the resulting state could match the initial
          // state.
          if (stateInfo.stateChangeRequired ||

          // eslint-disable-next-line no-extra-parens
          Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
            return new Promise(function (resolve) {
              var onPlayerStateChange = function onPlayerStateChange() {
                var playerStateAfterChange = player.getPlayerState();

                var timeout = void 0;

                if (typeof stateInfo.timeout === 'number') {
                  timeout = setTimeout(function () {
                    player.removeEventListener('onStateChange', onPlayerStateChange);

                    resolve();
                  }, stateInfo.timeout);
                }

                if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
                  player.removeEventListener('onStateChange', onPlayerStateChange);

                  clearTimeout(timeout);

                  resolve();
                }
              };

              player.addEventListener('onStateChange', onPlayerStateChange);
            }).then(function () {
              return value;
            });
          }

          return value;
        });
      };
    } else {
      functions[functionName] = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return playerAPIReady.then(function (player) {
          // eslint-disable-next-line no-warning-comments
          // TODO: Just spread the args into the function once Babel is fixed:
          // https://github.com/babel/babel/issues/4270
          //
          // eslint-disable-next-line prefer-spread
          return player[functionName].apply(player, args);
        });
      };
    }
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var functionName = _step2.value;

      _loop2(functionName);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return functions;
};

exports.default = YouTubePlayer;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(13);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(14);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Functions
 */
exports.default = ['cueVideoById', 'loadVideoById', 'cueVideoByUrl', 'loadVideoByUrl', 'playVideo', 'pauseVideo', 'stopVideo', 'getVideoLoadedFraction', 'cuePlaylist', 'loadPlaylist', 'nextVideo', 'previousVideo', 'playVideoAt', 'setShuffle', 'setLoop', 'getPlaylist', 'getPlaylistIndex', 'setOption', 'mute', 'unMute', 'isMuted', 'setVolume', 'getVolume', 'seekTo', 'getPlayerState', 'getPlaybackRate', 'setPlaybackRate', 'getAvailablePlaybackRates', 'getPlaybackQuality', 'setPlaybackQuality', 'getAvailableQualityLevels', 'getCurrentTime', 'getDuration', 'removeEventListener', 'getVideoUrl', 'getVideoEmbedCode', 'getOptions', 'getOption', 'addEventListener', 'destroy', 'setSize', 'getIframe'];
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 * `volumeChange` is not officially supported but seems to work
 * it emits an object: `{volume: 82.6923076923077, muted: false}`
 */
exports.default = ['ready', 'stateChange', 'playbackQualityChange', 'playbackRateChange', 'error', 'apiChange', 'volumeChange'];
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlayerStates = __webpack_require__(18);

var _PlayerStates2 = _interopRequireDefault(_PlayerStates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  pauseVideo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
    stateChangeRequired: false
  },
  playVideo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
    stateChangeRequired: false
  },
  seekTo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
    stateChangeRequired: true,

    // TRICKY: `seekTo` may not cause a state change if no buffering is
    // required.
    timeout: 3000
  }
};
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  BUFFERING: 3,
  ENDED: 0,
  PAUSED: 2,
  PLAYING: 1,
  UNSTARTED: -1,
  VIDEO_CUED: 5
};
module.exports = exports["default"];

/***/ })
/******/ ]);