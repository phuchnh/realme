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


var _home = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  var home = new _home.default();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Home =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Home() {
    _classCallCheck(this, Home);

    this.$buynowModal = $('.buynow-modal');
    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Home, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.headerProductFunction();
      this.footerFunction();
      this.Realme5HeaderSetup();
      this.Realme5BuynowSetup();
      this.slickFunction();

      if (window.innerWidth <= 768) {
        this.SetupMobileMenu();
      }
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "slickFunction",
    value: function slickFunction() {
      $('.top-slider .top-slider__wrap, .product-slide .product-slide__wrap').slick({
        dots: true
      });
      $('.nav-product__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 767,
          settings: "unslick"
        }]
      });
    }
  }, {
    key: "headerProductFunction",
    value: function headerProductFunction() {
      if ($(window).width() > 767) {
        $('.header__list__product').hover(function () {
          $('#page-header').toggleClass('product-active');
        });
      } else {
        $('.header__list__product').click(function () {
          $(".nav-product").stop().slideToggle(300);
        });
      }

      $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $('#page-header').toggleClass('menu-active');
        $(".header__list").stop().slideToggle(300);
        $('body').toggleClass('stop-scroll');
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $('#page-header').addClass('menu-scroll');
        } else {
          $('#page-header').removeClass('menu-scroll');
        }
      });
    }
  }, {
    key: "footerFunction",
    value: function footerFunction() {
      $('#page-footer .footer__col').each(function () {
        var $thisCol = $(this);

        if ($(window).width() < 768) {
          $(this).find('h3').click(function () {
            $thisCol.find('ul').slideToggle(300);
            $(this).toggleClass('footer__col__ul--active');
          });
        }
      });
    } // Realme 5 Vietnamese Specific Rule

  }, {
    key: "Realme5HeaderSetup",
    value: function Realme5HeaderSetup() {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $('.realme-5-header').addClass('menu-scroll');
        } else {
          $('.realme-5-header').removeClass('menu-scroll');
        }
      });
    }
  }, {
    key: "Realme5BuynowSetup",
    value: function Realme5BuynowSetup() {
      var _this = this;

      this.ShowRealme5SeriesLink('realme-5');
      $('.buynow-btn').on('click', function (e) {
        if (!_this.$buynowModal.hasClass('active')) {
          _this.$buynowModal.addClass('active');
        }
      });
      $('.close-buynow-modal').on('click', function (e) {
        if (_this.$buynowModal.hasClass('active')) {
          _this.$buynowModal.removeClass('active');
        }
      });
      $('.choose-buying').on('click', function (e) {
        if ($(e.target).parents('.choose-buying').hasClass('realme-5') || $(e.target).hasClass('realme-5')) {
          _this.ShowRealme5SeriesLink('realme-5');
        } else {
          if ($(e.target).parents('.choose-buying').hasClass('realme-5-pro') || $(e.target).hasClass('realme-5-pro')) {
            _this.ShowRealme5SeriesLink('realme-5-pro');
          }
        }
      });
    }
  }, {
    key: "ShowRealme5SeriesLink",
    value: function ShowRealme5SeriesLink() {
      var phoneType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      $('.partner-group-list .partner-item').hide();
      $('.buynow-modal-content .phone-selection .phone-select-item').removeClass('active');

      if (phoneType !== '') {
        $('.partner-group-list .partner-item.' + phoneType).fadeIn();
        $('.buynow-modal-content .phone-selection .phone-select-item.' + phoneType).addClass('active');
      }
    }
  }, {
    key: "SetupMobileMenu",
    value: function SetupMobileMenu() {
      var _this2 = this;

      this.$mobileSubMenu = $('.realme-5-header .mb-menu');
      this.allowInteraction = true; // Toggle Menu

      $('.show-sub-menu').on('click', function () {
        if (_this2.allowInteraction) {
          // Block interaction in 300 milisecond
          _this2.allowInteraction = false;
          setTimeout(function () {
            _this2.allowInteraction = true;
          }, 300); // Control Showing Menu

          if (_this2.$mobileSubMenu.hasClass('is-showing')) {
            _this2.$mobileSubMenu.slideUp();

            _this2.$mobileSubMenu.removeClass('is-showing');
          } else {
            _this2.$mobileSubMenu.slideDown();

            _this2.$mobileSubMenu.addClass('is-showing');
          }
        }
      });
      $('.close-mb-menu').on('click', function () {
        // If Allow interaction and menu is now showing
        if (_this2.allowInteraction && _this2.$mobileSubMenu.hasClass('is-showing')) {
          // Block interaction in 300 milisecond
          _this2.allowInteraction = false;
          setTimeout(function () {
            _this2.allowInteraction = true;
          }, 300);

          _this2.$mobileSubMenu.slideUp();

          _this2.$mobileSubMenu.removeClass('is-showing');
        }
      });
    }
  }]);

  return Home;
}();

exports.default = Home;

/***/ })
/******/ ]);