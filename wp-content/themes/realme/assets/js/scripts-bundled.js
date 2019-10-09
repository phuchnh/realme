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

var _about = _interopRequireDefault(__webpack_require__(2));

var _search = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  var home = new _home.default();
  var about = new _about.default();
  var search = new _search.default();
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

    this.slickFunction();
    this.headerProductFunction();
    this.footerFunction();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Home, [{
    key: "slickFunction",
    value: function slickFunction() {
      $('.top-slider .top-slider__wrap, .product-slide .product-slide__wrap').slick({
        dots: true
      });
      $('.nav-product__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
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
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }]);

  return Home;
}();

exports.default = Home;

/***/ }),
/* 2 */
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

    this.SmoothScrollSetup();
    this.BannerVideo();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Home, [{
    key: "SmoothScrollSetup",
    value: function SmoothScrollSetup() {
      // Select all links with hashes
      $('a[href*="#"]') // Remove links that don't actually link to anything
      .not('[href="#"]').not('[href="#0"]').click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault(); // get height menu for scroll exactly position of div

            var getHeightMenu = 52;

            if ($(window).width() < 767) {
              getHeightMenu = 62;
            }

            $('html, body').animate({
              scrollTop: target.offset().top - getHeightMenu
            }, 1000);
          }
        }
      });
    }
  }, {
    key: "BannerVideo",
    value: function BannerVideo() {
      var $getVideo = $('#banner__video');
      $('.about__banner h1 i').click(function () {
        $('.about__banner').toggleClass('play-video');
        $getVideo.get(0).paused ? $getVideo.get(0).play() : $getVideo.get(0).pause();
      });
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }]);

  return Home;
}();

exports.default = Home;

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

var Home =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Home() {
    _classCallCheck(this, Home);

    this.$searchFrom = $('#search-product-form input');
    this.$searchResultDialog = $('.search-result');
    this.$searchResultLayout = $('.search-result-list');
    this.$resultListHolder = $('.search-result-holder');
    this.isSearching = false;
    this.debounceHolder = null;
    this.BindEvent();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Home, [{
    key: "BindEvent",
    value: function BindEvent() {
      var _this = this;

      this.$searchFrom.on('focus', function () {
        _this.$searchResultDialog.slideDown();
      });
      this.$searchFrom.on('blur', function () {
        _this.$searchResultDialog.slideUp();
      });
      this.SetupSearchBox();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "SetupSearchBox",
    value: function SetupSearchBox() {
      var _this2 = this;

      // Prevent User Submit By Pressing Enter Key
      $('#search-product-form').on('submit', function (e) {
        e.preventDefault();
      });
      this.$searchFrom.on('keyup', function (e) {
        console.log(e); // Search Term is not empty

        if (e.target.value !== "") {
          var searchTerm = e.target.value;

          _this2.$searchResultLayout.addClass('is-searching');

          switch (e.keyCode) {
            // User Press Enter, Search Immediately
            case 13:
              console.log('enter key was pressed, do the search');

              _this2.DoSearching(searchTerm);

              break;
            // User Press Normally, Debounce 500ms before search

            default:
              clearTimeout(_this2.debounceHolder);
              _this2.debounceHolder = setTimeout(function () {
                _this2.DoSearching(searchTerm);
              }, 700);
          }
        } else {
          // Empty Searching Field
          _this2.$resultListHolder.find('.result-item').slideUp('fast', function () {
            _this2.$resultListHolder.find('.result-item').remove();
          });

          _this2.$searchResultLayout.removeClass('is-searching');
        }
      });
    }
  }, {
    key: "DoSearching",
    value: function DoSearching() {
      var _this3 = this;

      var searchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (searchTerm) {
        console.log("".concat(realmeVietnamVariables.products_api, "?search=").concat(searchTerm));
        fetch("".concat(realmeVietnamVariables.products_api, "?search=").concat(searchTerm)).then(function (response) {
          return response.json();
        }).then(function (data) {
          console.log(data);

          if (data.length > 1) {
            _this3.$searchResultLayout.find('.no-result').hide();

            _this3.$resultListHolder.find('.result-item').remove();

            var resultArrayHTML = data.map(function (value, index) {
              return "<li class=\"result-item\">\n                                <a class=\"link-wrapper\" href=\"".concat(value.link, "\">\n                                    <div class=\"phone-img\">\n                                        <img src=\"").concat(realmeVietnamVariables.root_url, "/assets/img/current/header-products/c2.png\">\n                                    </div>\n                                    <p class=\"phone-name\">\n                                        ").concat(value.title.rendered, "\n                                    </p>\n                                </a>\n                            </li>");
            }); // After Append HTML into the result holder, slide Down

            _this3.$resultListHolder.append(resultArrayHTML);

            _this3.$searchResultLayout.removeClass('is-searching');
          } else {
            _this3.$resultListHolder.find('.result-item').remove();

            _this3.$searchResultLayout.removeClass('is-searching');

            _this3.$searchResultLayout.find('.no-result').show();
          }
        });
      }
    }
  }]);

  return Home;
}();

exports.default = Home;

/***/ })
/******/ ]);