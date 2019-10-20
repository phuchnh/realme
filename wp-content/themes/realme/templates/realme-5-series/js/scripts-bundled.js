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

var _hotSale = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    this.bindEvents();

    if ($('#realme-5-hot-sale-page').length > 0) {
      var hotSale = new _hotSale.default();
    }
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Home, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.slickFunction();
      this.headerProductFunction();
      this.footerFunction();
      this.SmoothScrollSetup();
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
    }
  }, {
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

var HotSale =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function HotSale() {
    _classCallCheck(this, HotSale);

    this.sliderOptions = {
      nextArrow: '<button class="slick-control slick-next"></button>',
      prevArrow: '<button class="slick-control slick-prev"></button>',
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }] // Sliders HTML Obj

    };
    this.$newsSlider = $('.section-img-news #realme-5-news-slider');
    this.$realme5ImgSlider = $('.section-img-news #realme-5-img-slider');
    this.$cameraTakenImgSlider = $('.section-img-news #realme-camera-img-slider');
    this.$realme5VariationControl = $('.variation-realme-5-control');
    this.$realme5ImageControl = $('.variation-realme-5');
    this.$realme5ProVariationControl = $('.variation-realme-5-pro-control');
    this.$realme5ProImageControl = $('.variation-realme-5-pro'); // Buynow Modal Element

    this.$buynowModal = $('.buynow-modal'); // Price By Version Holder

    this.$r5MainPrice = $('#r5-main-price');
    this.$r5Line1 = $('.for-realme-5 .line-2.version-1');
    this.$r5Line2 = $('.for-realme-5 .line-2.version-2');
    this.$r5pMainPrice = $('#r5p-main-price');
    this.$r5pSalePrice = $('#r5p-sale-price'); // Comparision Variables

    this.$allItemsForCompare = $('.product-spec-list .product-spec-item');
    this.$compareCamera = $('.product-spec-list .product-spec-item.camera');
    this.$compareFeatured = $('.product-spec-list .product-spec-item.featured');
    this.$comparePerformance = $('.product-spec-list .product-spec-item.performance');
    this.$compareDesign = $('.product-spec-list .product-spec-item.design');
    this.$compareInbox = $('.product-spec-list .product-spec-item.in-box');
    this.currentFilter = 'featured';
    this.$filterSpecCTA = $('.filter-spec');
    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(HotSale, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.SetupSlide(this.$newsSlider);
      this.SetupSlide(this.$realme5ImgSlider);
      this.SetupSlide(this.$cameraTakenImgSlider);
      this.SetupVariationSwitcher(this.$realme5VariationControl, this.$realme5ImageControl);
      this.SetupVariationSwitcher(this.$realme5ProVariationControl, this.$realme5ProImageControl);
      this.Realme5HeaderSetup();
      this.Realme5BuynowSetup();

      if (window.innerWidth <= 768) {
        this.SetupMobileMenu();
      } // Variation Select Box Setup


      this.SelectBoxVariationSetup(); // Comparision Setup

      this.ComparisionSetup(); // Setup Compare Box Toggle

      this.CompareBoxToggle();
      $('.venobox').venobox();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "SetupSlide",
    value: function SetupSlide($target) {
      $target.slick(this.sliderOptions);
    }
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

      this.ShowRealme5SeriesLink();
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
    key: "SetupVariationSwitcher",
    value: function SetupVariationSwitcher($target, $imageReflection) {
      $target.on('click', function (e) {
        if (!$(e.target).parent('.variation-item').hasClass('active')) {
          $target.find('.variation-item.active').removeClass('active');
          $(e.target).parent('.variation-item').addClass('active');

          if ($target.find('.variation-item.active').hasClass('item-1')) {
            $imageReflection.removeClass('item-2-active').addClass('item-1-active');
          } else {
            $imageReflection.removeClass('item-1-active').addClass('item-2-active');
          }
        }
      });
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
  }, {
    key: "SelectBoxVariationSetup",
    value: function SelectBoxVariationSetup() {
      var _this3 = this;

      this.UpdateVersionPrice();
      this.$selectArrowRealme5 = $('.select-box.select-box-5 .arrow-btn');
      this.$selectArrowRealme5Pro = $('.select-box.select-box-5-pro .arrow-btn');
      this.allowSelect = false;
      this.allowOpenSelect = true; // Select For Box Realme 5

      this.$selectArrowRealme5.on('click', function (e) {
        if (_this3.allowOpenSelect) {
          _this3.allowOpenSelect = false;
          $('.select-box.select-box-5 .select-item:nth-child(2)').slideDown('fast'); // Allow Select

          _this3.allowSelect = true;
        } else {
          $('.select-box.select-box-5 .select-item:nth-child(2)').slideUp('fast', function () {
            _this3.allowOpenSelect = true;
          });
        }
      });
      $('.select-box.select-box-5 .select-item').on('click', function (e) {
        if (_this3.allowSelect) {
          var $target = $(e.target).parents('.select-item');
          var $sibling = $target.siblings('.select-item');
          $target.after($sibling);
          $('.select-box.select-box-5 .select-item:nth-child(2)').slideUp('fast', function () {
            _this3.allowOpenSelect = true;
          }); // Finish Select

          _this3.allowSelect = false;
          var newData = $target.data('r5');
          console.log(newData);
          $('.select-box.select-box-5').data('current-r5', newData);

          _this3.UpdateVersionPrice();
        }
      }); // Select For Box Realme 5 Pro

      this.$selectArrowRealme5Pro.on('click', function (e) {
        if (_this3.allowOpenSelect) {
          _this3.allowOpenSelect = false;
          setTimeout(function () {
            return _this3.allowOpenSelect = true;
          }, 200);
          $('.select-box.select-box-5-pro .select-item:nth-child(2)').slideDown('fast'); // Allow Select

          _this3.allowSelect = true;
        }
      });
      $('.select-box.select-box-5-pro .select-item').on('click', function (e) {
        if (_this3.allowSelect) {
          var $target = $(e.target).parents('.select-item');
          var $sibling = $target.siblings('.select-item');
          $target.after($sibling);
          $('.select-box.select-box-5-pro .select-item:nth-child(2)').slideUp('fast', function () {
            _this3.allowOpenSelect = true;
          }); // Finish Select

          _this3.allowSelect = false;
          var newData = $target.data('r5p');
          console.log(newData);
          $('.select-box.select-box-5-pro').data('current-r5p', newData);

          _this3.UpdateVersionPrice();
        }
      });
    }
  }, {
    key: "UpdateVersionPrice",
    value: function UpdateVersionPrice() {
      var r5Version = $('.select-box.select-box-5').data('current-r5');
      var r5pVersion = $('.select-box.select-box-5-pro').data('current-r5p');

      switch (r5Version) {
        case '3gb':
          this.$r5MainPrice.html('3.990.000');
          this.$r5Line2.hide();
          this.$r5Line1.show();
          break;

        case '4gb':
          this.$r5MainPrice.html('4.990.000');
          this.$r5Line1.hide();
          this.$r5Line2.show();
          break;

        default:
          this.$r5MainPrice.html('3.990.000');
          this.$r5Line2.hide();
          this.$r5Line1.show();
          break;
      }

      switch (r5pVersion) {
        case '4gb':
          this.$r5pMainPrice.html('5.990.000');
          this.$r5pSalePrice.html('5.690.000');
          break;

        case '8gb':
          this.$r5pMainPrice.html('6.990.000');
          this.$r5pSalePrice.html('6.690.000');
          break;

        default:
          this.$r5pMainPrice.html('5.990.000');
          this.$r5pSalePrice.html('5.690.000');
          break;
      }
    }
  }, {
    key: "ComparisionSetup",
    value: function ComparisionSetup() {
      var _this4 = this;

      this.RunCompareFilter();
      this.$filterSpecCTA.on('click', function (e) {
        _this4.currentFilter = $(e.target).data('filter');

        _this4.RunCompareFilter();
      });
    }
  }, {
    key: "RunCompareFilter",
    value: function RunCompareFilter() {
      switch (this.currentFilter) {
        case 'featured':
          this.$allItemsForCompare.hide();
          this.$compareFeatured.show();
          break;

        case 'camera':
          this.$allItemsForCompare.hide();
          this.$compareCamera.show();
          break;

        case 'performance':
          this.$allItemsForCompare.hide();
          this.$comparePerformance.show();
          break;

        case 'design':
          this.$allItemsForCompare.hide();
          this.$compareDesign.show();
          break;

        case 'in-box':
          this.$allItemsForCompare.hide();
          this.$compareInbox.show();
          break;

        default:
          this.$allItemsForCompare.hide();
          this.$compareFeatured.show();
          break;
      }
    }
  }, {
    key: "CompareBoxToggle",
    value: function CompareBoxToggle() {
      var _this5 = this;

      this.isMobile = window.innerWidth <= 768;
      $('.open-spec-compare-menu').on('click', function (e) {
        if ($(e.target).hasClass('closed')) {
          $(e.target).removeClass('closed').addClass('fading-up');

          if (!_this5.isMobile) {
            $(e.target).siblings('.spec-list-item').slideDown('fast', function () {
              $(e.target).removeClass('fading-up').addClass('opened');
            });
          } else {
            $(e.target).siblings('.feature-list').slideDown({
              start: function start() {
                $(e.target).siblings('.feature-list').css({
                  display: "flex"
                });
              },
              complete: function complete() {
                $(e.target).removeClass('fading-up').addClass('opened');
              },
              speed: 'fast'
            });
          }
        } else {
          if ($(e.target).hasClass('opened')) {
            $(e.target).removeClass('opened').addClass('fading-down');

            if (!_this5.isMobile) {
              $(e.target).siblings('.spec-list-item').slideUp('fast', function () {
                $(e.target).removeClass('fading-down').addClass('closed');
              });
            } else {
              $(e.target).siblings('.feature-list').slideUp('fast', function () {
                $(e.target).removeClass('fading-down').addClass('closed');
              });
            }
          }
        }
      });
    }
  }]);

  return HotSale;
}();

exports.default = HotSale;

/***/ })
/******/ ]);