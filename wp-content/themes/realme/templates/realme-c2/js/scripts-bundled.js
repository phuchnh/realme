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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _sister = __webpack_require__(6);

var _sister2 = _interopRequireDefault(_sister);

var _loadYouTubeIframeApi = __webpack_require__(7);

var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);

var _YouTubePlayer = __webpack_require__(9);

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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _core = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  var demo = new _core.default();
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = _interopRequireDefault(__webpack_require__(5));

var _preorder = _interopRequireDefault(__webpack_require__(17));

var _battery = _interopRequireDefault(__webpack_require__(18));

var _coloros = _interopRequireDefault(__webpack_require__(20));

var _highlight = _interopRequireDefault(__webpack_require__(21));

var _camera = _interopRequireDefault(__webpack_require__(22));

var _specs = _interopRequireDefault(__webpack_require__(34));

var _prPosts = _interopRequireDefault(__webpack_require__(35));

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
    this.preorder = new _preorder.default();
    this.battery = new _battery.default();
    this.colorOS = new _coloros.default();
    this.highlight = new _highlight.default();
    this.camera = new _camera.default();
    this.specs = new _specs.default();
    this.prPosts = new _prPosts.default();
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _youtubePlayer = _interopRequireDefault(__webpack_require__(1));

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

    // This File Contain The Behavior Of All The Pages
    this.menuState = {
      mainMenu: false,
      productMenu: false,
      allowToggle: true
    };
    this.isHavingVideoModal = false;

    if ($('#video-modal').length > 0) {
      this.isHavingVideoModal = true;
    }

    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Common, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.MainMenuSetup();
      this.BottomMenuSetup();
      this.SmoothScrollingSetup();
      this.PreOrderModalSetup();
      this.MenuScrolling();

      if (this.isHavingVideoModal) {
        this.SetupVideoPlayer();
      }
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "MainMenuSetup",
    value: function MainMenuSetup() {
      var _this = this;

      $('.main-menu-toggle').on('click', function () {
        if (_this.menuState.allowToggle) {
          if ($('.main-menu-toggle').hasClass('show-menu')) {
            $('.main-menu-toggle').removeClass('show-menu');
            _this.menuState.allowToggle = false;
            $('.main-menu').slideUp(300, function () {
              _this.menuState.allowToggle = true;
            });
          } else {
            $('.main-menu-toggle').addClass('show-menu');
            _this.menuState.allowToggle = false;
            $('.main-menu').slideDown(300, function () {
              _this.menuState.allowToggle = true;
            });
          }
        }
      });
      $('.close-main-menu').on('click', function () {
        $('.main-menu-toggle').removeClass('show-menu');
        $('.main-menu').slideUp(300);
      });
    }
  }, {
    key: "BottomMenuSetup",
    value: function BottomMenuSetup() {
      var _this2 = this;

      $('.sub-menu-trigger').on('click', function () {
        if (_this2.menuState.allowToggle) {
          if ($('.sub-menu-trigger').hasClass('show-menu')) {
            $('.sub-menu-trigger').removeClass('show-menu');
            _this2.menuState.allowToggle = false;
            $('.product-menu').slideUp(300, function () {
              _this2.menuState.allowToggle = true;
            });
          } else {
            $('.sub-menu-trigger').addClass('show-menu');
            _this2.menuState.allowToggle = false;
            $('.product-menu').slideDown(300, function () {
              _this2.menuState.allowToggle = true;
            });
          }
        }
      });
      $('.close-bottom-menu').on('click', function () {
        $('.sub-menu-trigger').removeClass('show-menu');
        $('.product-menu').slideUp(300);
      });
    }
  }, {
    key: "SetupVideoPlayer",
    value: function SetupVideoPlayer() {
      var _this3 = this;

      this.playerYT = (0, _youtubePlayer.default)('video-modal-video', {
        videoId: 'pKGxsAte4Ao',
        // Default Clip
        playerVars: {
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          controls: 0,
          playlist: 'pKGxsAte4Ao',
          loop: 1
        }
      });
      $('.play-modal-video').on('click', function (e) {
        _this3.videoCode = 'pKGxsAte4Ao'; // Default Youtube Video ID

        if ($(e.target).parent('.play-modal-video').length > 0) {
          _this3.videoCode = $(e.target).parent('.play-modal-video').data('video-id');
        } else {
          _this3.videoCode = $(e.target).data('video-id');
        }

        _this3.PlayModalClip(_this3.videoCode);
      });
      $('.close-video-modal').on('click', function (e) {
        _this3.CloseModalClip();
      });
    }
  }, {
    key: "PlayModalClip",
    value: function PlayModalClip() {
      var _this4 = this;

      var clipID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pKGxsAte4Ao';
      $('body').addClass('show-modal');
      $('.video-modal').addClass('active');
      this.playerYT.cueVideoById(clipID);
      this.playerYT.unMute();
      this.playerYT.playVideo();
      this.playerYT.addEventListener('onStateChange', function (e) {
        if (e.data == 0) {
          _this4.CloseModalClip();
        }
      });
      console.log(clipID);
    }
  }, {
    key: "CloseModalClip",
    value: function CloseModalClip() {
      var _this5 = this;

      this.playerYT.mute();
      $('body').removeClass('show-modal');
      $('.video-modal').removeClass('active');
      setTimeout(function () {
        _this5.playerYT.stopVideo();
      }, 200);
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
    key: "PreOrderModalSetup",
    value: function PreOrderModalSetup() {
      var _this6 = this;

      this.preOrderModal = $('#modal-preorder');
      $('.pre-order-modal').on('click', function (e) {
        $('body').addClass('show-modal');

        _this6.preOrderModal.addClass('active');
      });
      $('.close-preorder-modal').on('click', function (e) {
        $('body').removeClass('show-modal');

        _this6.preOrderModal.removeClass('active');
      });
    }
  }, {
    key: "MenuScrolling",
    value: function MenuScrolling() {
      var _this7 = this;

      this.fixedHeader = $('#page-header .header__body');
      this.fixedAnchor = this.fixedHeader.offset().top;
      $(window).on('scroll', function (e) {
        if (window.pageYOffset > _this7.fixedAnchor) {
          _this7.fixedHeader.addClass('fixed-head');
        } else {
          _this7.fixedHeader.removeClass('fixed-head');
        }
      });
      console.log(this.fixedAnchor);
    }
  }]);

  return Common;
}();

exports.default = Common;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadScript = __webpack_require__(8);

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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = __webpack_require__(10);

var _debug2 = _interopRequireDefault(_debug);

var _functionNames = __webpack_require__(13);

var _functionNames2 = _interopRequireDefault(_functionNames);

var _eventNames = __webpack_require__(14);

var _eventNames2 = _interopRequireDefault(_eventNames);

var _FunctionStateMap = __webpack_require__(15);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(11);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 11 */
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
exports.humanize = __webpack_require__(12);

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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlayerStates = __webpack_require__(16);

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
/* 16 */
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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _youtubePlayer = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Preorder =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Preorder() {
    _classCallCheck(this, Preorder);

    // This File Contain The Behavior Of Pre Order Page
    this.isPreOrderPage = false;

    if ($('#pre-order-page').length > 0) {
      this.isPreOrderPage = true;
    }

    if (this.isPreOrderPage) {
      this.PARALLAX_DISTANCE = 12 * window.innerWidth / 1920;
      this.$designSection = $('#section-design');
      this.$batterySection = $('#section-battery');
      this.anchors = {
        prize: $('#section-prize').offset().top,
        design: this.$designSection.offset().top,
        camera: $('#section-camera').offset().top,
        battery: this.$batterySection.offset().top,
        gallery: $('#section-gallery').offset().top,
        videoClip: $('#video-player').offset().top
      };
      this.kvSection = $('#section-kv');
      this.kvElements = {
        issac: this.kvSection.find('.section-kv__issac'),
        title: this.kvSection.find('.section-kv__main-content .realme-img'),
        subTitle: this.kvSection.find('.section-kv__main-content .slogan'),
        features: this.kvSection.find('.section-kv__main-content .features'),
        cta: this.kvSection.find('.section-kv__main-content .price, .section-kv__main-content .cta')
      };
      this.prizeElements = {
        topTitle: $('.section-prize__top .section__title'),
        topImage: $('.section-prize__top .prize-image'),
        video: $('.section-prize__body')
      };
      this.designElements = {
        title: $('#section-design .section__title'),
        contentTitle: $('.section-design__main-content .title'),
        contentSubTitle: $('.section-design__main-content .sub-title'),
        cta: $('.section-design__main-content .cta'),
        phone: $('.section-design__image .phone-image'),
        effect: $('.section-design__image .effect-image')
      };
      this.cameraElements = {
        title: $('.section-camera__top .section__title'),
        subTitle: $('.section-camera__top .section__sub-title'),
        cta: $('.section-camera__cta'),
        image: $('.section-camera__image')
      };
      this.batteryElements = {
        subTitle: $('.section-battery__main-content .sub-title'),
        title: $('.section-battery__main-content .title'),
        cta: $('.section-battery__cta'),
        image: $('.section-battery__image')
      };
      this.galleryElements = {
        title: $('.section-gallery .section__title'),
        gallery: $('.section-gallery__slider')
      };
      this.SCREEN_HEIGHT = window.innerHeight;
      this.DISTANCE_RATIO = window.innerWidth / 1920; // Video Variable

      this.playerYT = (0, _youtubePlayer.default)('video-player', {
        videoId: 'Y0Yt-GVhw0o',
        playerVars: {
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          controls: 0,
          playlist: 'Y0Yt-GVhw0o',
          loop: 1
        }
      });
      this.videoState = {
        playing: false,
        mute: true,
        forceStop: false
      };
      this.videoElements = {
        overlay: $('.video-holder__bg'),
        controller: $('.video-holder__controller'),
        playBtn: $('#play-promotion-clip'),
        stopBtn: $('#stop-promotion-clip'),
        subController: $('#sub-controller'),
        muteBtn: $('#mute-promotion-clip')
      };
      this.bindEvents();
    }
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Preorder, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      console.log(this.anchors); // Only check scroll event on PreOrderPage

      this.InitState();
      this.InitVideo();
      this.DoKVAnimation();
      setTimeout(function () {
        _this.anchors = {
          prize: $('#section-prize').offset().top,
          design: _this.$designSection.offset().top,
          camera: $('#section-camera').offset().top,
          battery: _this.$batterySection.offset().top,
          gallery: $('#section-gallery').offset().top,
          videoClip: $('#video-player').offset().top
        };
        $(window).on('scroll', function (e) {
          if (window.pageYOffset > _this.anchors.prize - _this.SCREEN_HEIGHT / 1.65) {
            _this.DoPrizeAnimation();
          }

          if (window.pageYOffset > _this.anchors.videoClip - _this.SCREEN_HEIGHT / 1.65) {
            if (!_this.videoState.play && !_this.videoState.forceStop) {
              _this.PlayClip();
            }
          }

          if (window.pageYOffset > _this.anchors.design - _this.SCREEN_HEIGHT / 1.65) {
            _this.DoDesignAnimation();
          }

          if (window.pageYOffset > _this.anchors.design) {
            if (_this.videoState.play) {
              _this.StopClip();
            }
          }

          if (window.pageYOffset > _this.anchors.camera - _this.SCREEN_HEIGHT / 1.65) {
            _this.DoCameraAnimation();
          }

          if (window.pageYOffset > _this.anchors.battery - _this.SCREEN_HEIGHT / 1.65) {
            _this.DoBatteryAnimation();
          }

          if (window.pageYOffset > _this.anchors.gallery - _this.SCREEN_HEIGHT / 1.65) {
            _this.DoGalleryAnimation();
          }
        });
      }, 200);
      /* Section Gallery Slider */

      $('#preorder-gallery').slick({
        infinite: true,
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-control slick-next"></button>',
        prevArrow: '<button type="button" class="slick-control slick-prev"></button>'
      });
      /* Video Controller */

      this.videoElements.playBtn.on('click', function (e) {
        _this.videoState.forceStop = false;

        _this.PlayClip();
      });
      this.videoElements.stopBtn.on('click', function (e) {
        _this.videoState.forceStop = true;

        _this.StopClip();
      });
      this.videoElements.muteBtn.on('click', function (e) {
        _this.MuteClip();
      });
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "InitState",
    value: function InitState() {
      // Hero Area
      TweenLite.set(this.kvElements.issac, {
        x: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.kvElements.title, {
        x: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.kvElements.subTitle, {
        x: -40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.kvElements.features, {
        y: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.kvElements.cta, {
        y: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // Prize Area Preset

      TweenLite.set(this.prizeElements.topTitle, {
        y: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.prizeElements.topImage, {
        y: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.prizeElements.video, {
        y: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // Design Area Preset

      TweenLite.set(this.designElements.title, {
        y: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.designElements.contentTitle, {
        x: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.designElements.contentSubTitle, {
        x: -40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.designElements.phone, {
        y: -40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.designElements.effect, {
        x: 150,
        scale: 0.1,
        autoAlpha: 0
      });
      TweenLite.set(this.designElements.cta, {
        y: 20 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // Camera Area Preset

      TweenLite.set(this.cameraElements.title, {
        x: -40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.cameraElements.subTitle, {
        x: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.cameraElements.cta, {
        y: 20 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.cameraElements.image, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // Battery Area Preset

      TweenLite.set(this.batteryElements.title, {
        x: -40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.batteryElements.subTitle, {
        x: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.batteryElements.cta, {
        y: 20 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.batteryElements.image, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // Gallery Area Preset

      TweenLite.set(this.galleryElements.title, {
        y: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.galleryElements.gallery, {
        y: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
    } // Do KV Animation

  }, {
    key: "DoKVAnimation",
    value: function DoKVAnimation() {
      var _this2 = this;

      if (window.innerWidth > 767) {
        TweenLite.to(this.kvElements.issac, 0.5, {
          x: 0,
          autoAlpha: 1,
          ease: Power1.easeOut,
          delay: 0.3,
          onComplete: function onComplete() {
            _this2.DoParallax(_this2.kvSection);
          }
        });
        TweenLite.to(this.kvElements.title, 0.5, {
          x: 0,
          autoAlpha: 1,
          ease: Power1.easeOut,
          delay: 0.8
        });
        TweenLite.to(this.kvElements.subTitle, 0.5, {
          x: 0,
          autoAlpha: 1,
          ease: Power1.easeOut,
          delay: 0.8
        });
        TweenLite.to(this.kvElements.features, 0.5, {
          y: 0,
          autoAlpha: 1,
          ease: Power1.easeOut,
          delay: 1.2
        });
        TweenLite.to(this.kvElements.cta, 0.5, {
          y: 0,
          autoAlpha: 1,
          ease: Power1.easeOut,
          delay: 1.7
        });
      } else {
        TweenLite.to(this.kvElements.issac, 0.5, {
          x: 0,
          autoAlpha: 1,
          ease: Power1.easeOut,
          delay: 1.7
        });
        TweenLite.to(this.kvElements.title, 0.5, {
          x: 0,
          autoAlpha: 1,
          ease: Power1.easeOut,
          delay: 0.3
        });
        TweenLite.to(this.kvElements.subTitle, 0.5, {
          x: 0,
          autoAlpha: 1,
          ease: Power1.easeOut,
          delay: 0.3
        });
        TweenLite.to(this.kvElements.features, 0.5, {
          y: 0,
          autoAlpha: 1,
          ease: Power1.easeOut,
          delay: 0.8
        });
        TweenLite.to(this.kvElements.cta, 0.5, {
          y: 0,
          autoAlpha: 1,
          ease: Power1.easeOut,
          delay: 1.2
        });
      }
    } // Prize Animation

  }, {
    key: "DoPrizeAnimation",
    value: function DoPrizeAnimation() {
      TweenLite.to(this.prizeElements.topTitle, 0.5, {
        y: 0,
        autoAlpha: 1,
        delay: 0.2,
        ease: Power1.easeOut
      });
      TweenLite.to(this.prizeElements.topImage, 0.5, {
        y: 0,
        autoAlpha: 1,
        delay: 0.5,
        ease: Power1.easeOut
      });
      TweenLite.to(this.prizeElements.video, 0.5, {
        y: 0,
        autoAlpha: 1,
        delay: 0.8,
        ease: Power1.easeOut
      });
    } // Design Animation

  }, {
    key: "DoDesignAnimation",
    value: function DoDesignAnimation() {
      var _this3 = this;

      TweenLite.to(this.designElements.title, 0.5, {
        y: 0,
        autoAlpha: 1
      });
      TweenLite.to(this.designElements.contentTitle, 0.5, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 1.4
      });
      TweenLite.to(this.designElements.contentSubTitle, 0.5, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 1.4
      });
      TweenLite.to(this.designElements.phone, 1, _defineProperty({
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 0.6
      }, "ease", Power1.easeOut));
      TweenLite.to(this.designElements.effect, 1, {
        x: 0,
        scale: 1,
        autoAlpha: 1,
        delay: 0.3,
        ease: Power1.easeOut
      });
      TweenLite.to(this.designElements.cta, 0.5, {
        y: 0,
        autoAlpha: 1,
        delay: 2,
        onComplete: function onComplete() {
          _this3.DoParallax(_this3.$designSection);
        }
      });
    } // Camera Animation

  }, {
    key: "DoCameraAnimation",
    value: function DoCameraAnimation() {
      TweenLite.to(this.cameraElements.title, 0.5, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 0.2
      });
      TweenLite.to(this.cameraElements.subTitle, 0.5, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 0.2
      });
      TweenLite.to(this.cameraElements.cta, 0.4, {
        y: 0,
        autoAlpha: 1,
        delay: 1.2
      });
      TweenLite.to(this.cameraElements.image, 1, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 0.4
      });
    } // Battery Animation

  }, {
    key: "DoBatteryAnimation",
    value: function DoBatteryAnimation() {
      var _this4 = this;

      TweenLite.to(this.batteryElements.title, 0.5, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 0.2
      });
      TweenLite.to(this.batteryElements.subTitle, 0.5, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 0.2
      });
      TweenLite.to(this.batteryElements.image, 1, {
        y: 0,
        ease: Power1.easeOut,
        autoAlpha: 1,
        delay: 0.6
      });
      TweenLite.to(this.batteryElements.cta, 0.4, {
        y: 0,
        autoAlpha: 1,
        delay: 1.7,
        onComplete: function onComplete() {
          _this4.DoParallax(_this4.$batterySection);
        }
      });
    } // Gallery Animation

  }, {
    key: "DoGalleryAnimation",
    value: function DoGalleryAnimation() {
      TweenLite.to(this.galleryElements.title, 0.5, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 0.2
      });
      TweenLite.to(this.galleryElements.gallery, 0.5, {
        y: 0,
        ease: Power1.easeOut,
        autoAlpha: 1,
        delay: 0.6
      });
    } // Play Video

  }, {
    key: "InitVideo",
    value: function InitVideo() {
      TweenLite.set(this.videoElements.subController, {
        y: 40,
        autoAlpha: 0
      });
    }
  }, {
    key: "PlayClip",
    value: function PlayClip() {
      this.videoElements.overlay.addClass('deactive');
      this.videoElements.controller.removeClass('is-stopped').addClass('is-playing');
      TweenLite.to(this.videoElements.subController, 0.5, {
        y: 0,
        autoAlpha: 1
      });
      TweenLite.to(this.videoElements.playBtn, 0.5, {
        scale: 0.5,
        autoAlpha: 0
      });

      if (this.videoState.mute) {
        this.videoElements.muteBtn.removeClass('sound-on').addClass('sound-off');
        this.playerYT.mute();
      }

      this.playerYT.playVideo();
      this.videoState.play = true;
    }
  }, {
    key: "StopClip",
    value: function StopClip() {
      this.videoElements.overlay.removeClass('deactive');
      this.videoElements.controller.addClass('is-stopped').removeClass('is-playing');
      TweenLite.to(this.videoElements.subController, 0.5, {
        y: 40,
        autoAlpha: 0
      });
      TweenLite.to(this.videoElements.playBtn, 0.5, {
        scale: 1,
        autoAlpha: 1
      });
      this.playerYT.stopVideo();
      this.videoState.play = false;
    }
  }, {
    key: "MuteClip",
    value: function MuteClip() {
      if (!this.videoState.mute) {
        this.videoElements.muteBtn.removeClass('sound-on').addClass('sound-off');
        this.playerYT.mute();
        this.videoState.mute = true;
      } else {
        this.videoElements.muteBtn.addClass('sound-on').removeClass('sound-off');
        this.playerYT.unMute();
        this.videoState.mute = false;
      }
    } // Mouse parallax Effect

  }, {
    key: "DoParallax",
    value: function DoParallax() {
      var _this5 = this;

      var targetElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (window.innerWidth > 767 && targetElement.hasClass('parallax-effect')) {
        var $parallaxBg = targetElement.find('.parallax-bg');
        var $parallaxMain = targetElement.find('.parallax-element');
        targetElement.on('mousemove', function (e) {
          var coreData = {
            offsetX: e.clientX,
            offsetY: e.clientY,
            core: {
              x: targetElement.width() / 2,
              y: targetElement.height() / 2
            }
          };
          var calculatedData = {
            xMove: _this5.PARALLAX_DISTANCE * (coreData.offsetX - coreData.core.x) / coreData.core.x,
            yMove: _this5.PARALLAX_DISTANCE * (coreData.offsetY - coreData.core.y) / coreData.core.y
          };
          TweenMax.to($parallaxMain, 0.5, {
            x: -calculatedData.xMove,
            y: -calculatedData.yMove
          });
          TweenMax.to($parallaxBg, 0.5, {
            x: calculatedData.xMove,
            y: calculatedData.yMove
          });
        });
      }
    }
  }, {
    key: "RemoveParallax",
    value: function RemoveParallax() {
      this.$parallaxContainer.off('mousemove');
    }
  }]);

  return Preorder;
}();

exports.default = Preorder;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _countup = __webpack_require__(19);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Battery =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Battery() {
    _classCallCheck(this, Battery);

    // This File Contain The Behavior Of All The Pages
    this.isBatteryPage = false;

    if ($('#page-battery').length > 0) {
      this.isBatteryPage = true;
    }

    if (this.isBatteryPage) {
      this.anchors = {
        antutu: $('#battery-antutu-chart').offset().top
      };
      this.antutuLine = {
        realme3: $('#realme3-visual-line'),
        realme2: $('#realme2-visual-line'),
        distance: $('#realme3-visual').width(),
        realme3Road: 0.8,
        realme2Road: 0.44
      };
      this.pageState = {
        antutuAlreadyRun: false
      };
      this.batterySpecsElements = {
        title: $('.section-battery-spec__top .section__title'),
        subTitle: $('.section-battery-spec__top .section__sub-title'),
        context: $('.section-battery-spec__bottom')
      };
      this.chart1Element = $('#chip-compare-chart');
      this.batteryChipElements = {
        chip: $('#battery-chip-introduction .chip-image'),
        context: $('#battery-chip-introduction .context')
      };
      this.batteryBottomImageElement = $('.section-battery-chip__image');
      this.DISTANCE_RATIO = window.innerWidth / 1920;
      this.SCREEN_HEIGHT = window.innerHeight;
      this.bindEvents();
    }
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Battery, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.PageBatteryInit();
      this.DoBatterySpecSectionAnimation();
      setTimeout(function () {
        _this.anchors = {
          chart1: $('#chip-compare-chart').offset().top,
          chip: $('#battery-chip-introduction').offset().top,
          antutu: $('#battery-antutu-chart').offset().top,
          batteryImage: $('#battery-bottom-image').offset().top
        };
        $(window).on('scroll', function () {
          // Do The Chart1 Animation
          if (window.pageYOffset > _this.anchors.chart1 - _this.SCREEN_HEIGHT / 1.65) {
            _this.DoBatteryChart1Animation();
          } // Do The Chip Animation


          if (window.pageYOffset > _this.anchors.chip - _this.SCREEN_HEIGHT / 1.65) {
            _this.DoBatteryChipAnimation();

            if (window.innerWidth < 480) {
              console.log('run antutu on mobile');

              if (!_this.pageState.antutuAlreadyRun) {
                _this.RunAntutuNumber();

                _this.RunChartLine();

                _this.pageState.antutuAlreadyRun = true;
              }
            }
          } // Running The Chart


          if (window.innerWidth > 480) {
            if (window.pageYOffset > _this.anchors.antutu - _this.SCREEN_HEIGHT / 1.1) {
              if (!_this.pageState.antutuAlreadyRun) {
                _this.RunAntutuNumber();

                _this.RunChartLine();

                _this.pageState.antutuAlreadyRun = true;
              }
            }
          } //Do The Bottom Image Animation


          if (window.pageYOffset > _this.anchors.batteryImage - _this.SCREEN_HEIGHT / 1.65) {
            _this.DoBatteryImageAnimation();
          }
        });
      }, 300);
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "DoBatterySpecSectionAnimation",
    value: function DoBatterySpecSectionAnimation() {
      TweenLite.to(this.batterySpecsElements.title, 0.7, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      });
      TweenLite.to(this.batterySpecsElements.subTitle, 0.7, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      });
      TweenLite.to(this.batterySpecsElements.context, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 0.5
      });
    }
  }, {
    key: "DoBatteryChart1Animation",
    value: function DoBatteryChart1Animation() {
      TweenLite.to(this.chart1Element, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      });
    }
  }, {
    key: "DoBatteryChipAnimation",
    value: function DoBatteryChipAnimation() {
      TweenLite.to(this.batteryChipElements.chip, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      });
      TweenLite.to(this.batteryChipElements.context, 0.7, {
        x: 0,
        autoAlpha: 1,
        delay: 0.4,
        ease: Power1.easeOut
      });
    }
  }, {
    key: "DoBatteryImageAnimation",
    value: function DoBatteryImageAnimation() {
      TweenLite.to(this.batteryBottomImageElement, 1, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      });
    }
  }, {
    key: "PageBatteryInit",
    value: function PageBatteryInit() {
      // Battery Specs Section Init
      TweenLite.set(this.batterySpecsElements.title, {
        x: -60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.batterySpecsElements.subTitle, {
        x: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.batterySpecsElements.context, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // Chart 1 Section Init

      TweenLite.set(this.chart1Element, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // CBattery Chip Introduction Section Init

      TweenLite.set(this.batteryChipElements.context, {
        x: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.batteryChipElements.chip, {
        y: -40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // Battery Bottom Image Section Init

      TweenLite.set(this.batteryBottomImageElement, {
        y: 120 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
    }
  }, {
    key: "RunAntutuNumber",
    value: function RunAntutuNumber() {
      var options = {
        duration: 1.5,
        useGrouping: false
      };
      var demo = new _countup.CountUp('realme-3-countup', 133066, {
        duration: 1.5,
        useGrouping: false
      });

      if (!demo.error) {
        demo.start();
      } else {
        console.error(demo.error);
      }
    }
  }, {
    key: "RunChartLine",
    value: function RunChartLine() {
      TweenLite.to(this.antutuLine.realme3, 1.5, {
        css: {
          width: this.antutuLine.distance * this.antutuLine.realme3Road + 'px'
        },
        ease: Power1.easeOut
      });
      TweenLite.to(this.antutuLine.realme2, 1.5, {
        css: {
          width: this.antutuLine.distance * this.antutuLine.realme2Road + 'px'
        },
        ease: Power1.easeOut
      });
    }
  }]);

  return Battery;
}();

exports.default = Battery;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountUp", function() { return CountUp; });
var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var n in i=arguments[a])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t}).apply(this,arguments)},CountUp=function(){function t(t,i,a){var s=this;this.target=t,this.endVal=i,this.options=a,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(i/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.decimalMult)/s.decimalMult,s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var i,a,n,e,r,o=t<0?"-":"";if(i=Math.abs(t).toFixed(s.options.decimalPlaces),n=(a=(i+="").split("."))[0],e=a.length>1?s.options.decimal+a[1]:"",s.options.useGrouping){r="";for(var l=0,h=n.length;l<h;++l)0!==l&&l%3==0&&(r=s.options.separator+r),r=n[h-l-1]+r;n=r}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),e=e.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),o+s.options.prefix+n+e+s.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=__assign({},this.defaults,a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ColorOS =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function ColorOS() {
    _classCallCheck(this, ColorOS);

    // This File Contain The Behavior Of All The Pages
    this.isColorOSPage = false;

    if ($('#page-coloros').length > 0) {
      this.isColorOSPage = true;
    }

    if (this.isColorOSPage) {
      this.colorOSVideo1 = $('#color-os-video-1').get(0);
      this.colorOSVideo1.loop = true;
      this.colorOSVideo1.play();
      this.colorOSVideo2 = $('#color-os-video-2').get(0);
      this.colorOSVideo2.loop = true;
      this.colorOSVideo2.play();
      this.anchors = {
        intro: 0,
        demo: 0,
        analysis: 0
      };
      this.introElements = {
        title: $('.section-coloros-intro__top'),
        logo: $('.coloros-icon'),
        image: $('.coloros-img-text'),
        slogan: $('.coloros-slogan'),
        context: $('.section-coloros-intro__bottom')
      };
      this.demoSliderElement = $('#coloros-demo-slider');
      this.analysisElements = {
        title: $('.section-coloros-analysis__top .section__title'),
        subTitle: $('.section-coloros-analysis__top .section__sub-title'),
        body: $('.section-coloros-analysis__body'),
        footer: $('.section-coloros-analysis__bottom')
      };
      this.DISTANCE_RATIO = window.innerWidth / 1920;
      this.SCREEN_HEIGHT = window.innerHeight;
      this.bindEvents();
    }
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(ColorOS, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      $('#coloros-demo-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        arrows: false
      });
      this.ColorOSPageInit();
      this.DoColorOSIntroSectionAnimation();
      setTimeout(function () {
        _this.anchors = {
          demo: $('#section-coloros-demo').offset().top,
          analysis: $('#section-coloros-analysis').offset().top
        };
        $(window).on('scroll', function (e) {
          if (window.pageYOffset > _this.anchors.demo - _this.SCREEN_HEIGHT / 1.65) {
            _this.DoColorOSDemoSectionAnimation();
          }

          if (window.pageYOffset > _this.anchors.analysis - _this.SCREEN_HEIGHT / 1.65) {
            _this.DoColorOSAnalysisSectionAnimation();
          }
        });
      }, 300);
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "DoColorOSDemoSectionAnimation",
    value: function DoColorOSDemoSectionAnimation() {
      TweenLite.to(this.demoSliderElement, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      });
    }
  }, {
    key: "DoColorOSAnalysisSectionAnimation",
    value: function DoColorOSAnalysisSectionAnimation() {
      TweenLite.to(this.analysisElements.title, 0.7, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      });
      TweenLite.to(this.analysisElements.subTitle, 0.7, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      });
      TweenLite.to(this.analysisElements.body, 0.7, {
        y: 0,
        autoAlpha: 1,
        delay: 0.6,
        ease: Power1.easeOut
      });
      TweenLite.to(this.analysisElements.footer, 0.7, {
        y: 0,
        autoAlpha: 1,
        delay: 1.2,
        ease: Power1.easeOut
      });
    }
  }, {
    key: "DoColorOSIntroSectionAnimation",
    value: function DoColorOSIntroSectionAnimation() {
      TweenLite.to(this.introElements.title, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      });
      TweenLite.to(this.introElements.logo, 0.7, {
        y: 0,
        autoAlpha: 1,
        delay: 0.6,
        ease: Power1.easeOut
      });
      TweenLite.to(this.introElements.image, 0.7, {
        x: 0,
        autoAlpha: 1,
        delay: 0.9,
        ease: Power1.easeOut
      });
      TweenLite.to(this.introElements.slogan, 0.7, {
        x: 0,
        autoAlpha: 1,
        delay: 0.9,
        ease: Power1.easeOut
      });
      TweenLite.to(this.introElements.context, 0.7, {
        y: 0,
        autoAlpha: 1,
        delay: 1.5,
        ease: Power1.easeOut
      });
    }
  }, {
    key: "ColorOSPageInit",
    value: function ColorOSPageInit() {
      TweenLite.set(this.introElements.title, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.introElements.logo, {
        y: -60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.introElements.image, {
        x: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.introElements.slogan, {
        x: -40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.introElements.context, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // Semo Section Init

      TweenLite.set(this.demoSliderElement, {
        y: 80 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // Nalysis Section Init

      TweenLite.set(this.analysisElements.title, {
        x: 40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.analysisElements.subTitle, {
        x: -40 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.analysisElements.body, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.analysisElements.footer, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
    }
  }]);

  return ColorOS;
}();

exports.default = ColorOS;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Highlight =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Highlight() {
    _classCallCheck(this, Highlight);

    // This File Contain The Behavior Of Highlight Page
    this.isHighlightPage = false;

    if ($('#page-highlight').length > 0) {
      this.isHighlightPage = true;
    }

    if (this.isHighlightPage) {
      this.PARALLAX_DISTANCE = 12 * window.innerWidth / 1920;
      this.$blackSection = $('#section-highlight-black');
      this.$blueSection = $('#section-highlight-blue'); // Anchor Offset To Check Scrolling

      this.anchors = {
        black: 0,
        blue: 0,
        design: 0
      };
      this.designElements = {
        title: $('.section-highlight-design__top .section__title'),
        subTitle: $('.section-highlight-design__top .section__sub-title'),
        image: $('.section-highlight-design__images'),
        feature: $('.section-highlight-design__bottom .features-list'),
        context: $('.section-highlight-design__bottom__context')
      };
      this.blackElements = {
        title: $('.section-highlight-black__main-content .title'),
        desc: $('.section-highlight-black__main-content .desc'),
        image: $('.section-highlight-black__images__phone'),
        effect: $('.section-highlight-black__images__effect1')
      };
      this.blueElements = {
        title: $('.section-highlight-blue__main-content .title'),
        desc: $('.section-highlight-blue__main-content .desc'),
        image: $('.section-highlight-blue__images__phone')
      };
      this.DISTANCE_RATIO = window.innerWidth / 1920;
      this.SCREEN_HEIGHT = window.innerHeight;
      this.bindEvents();
    }
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Highlight, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.HighlightPageInit();
      this.DoBlackSectionAnimation();
      setTimeout(function () {
        _this.anchors = {
          blue: $('#section-highlight-blue').offset().top,
          design: $('#section-highlight-design').offset().top
        };
        $(window).on('scroll', function () {
          if (window.pageYOffset > _this.anchors.blue - _this.SCREEN_HEIGHT / 1.65) {
            _this.DoBlueSectionAnimation();
          }

          if (window.pageYOffset > _this.anchors.design - _this.SCREEN_HEIGHT / 1.65) {
            _this.DoDesignSectionAnimation();
          }
        });
      }, 300);
    }
    /* ===================================
     *  METHODS
     * =================================== */
    // Design Section Animation

  }, {
    key: "DoDesignSectionAnimation",
    value: function DoDesignSectionAnimation() {
      TweenLite.to(this.designElements.title, 0.7, {
        x: 0,
        autoAlpha: 1,
        delay: 0.5,
        ease: Power1.EaseOut
      });
      TweenLite.to(this.designElements.subTitle, 0.7, {
        x: 0,
        autoAlpha: 1,
        delay: 0.5,
        ease: Power1.EaseOut
      });
      TweenLite.to(this.designElements.image, 0.7, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.EaseOut
      });
      TweenLite.to(this.designElements.feature, 0.7, {
        y: 0,
        autoAlpha: 1,
        delay: 1,
        ease: Power1.EaseOut
      });
      TweenLite.to(this.designElements.context, 0.7, {
        y: 0,
        autoAlpha: 1,
        delay: 1.4,
        ease: Power1.EaseOut
      });
    } // Blue Phone Section Animation

  }, {
    key: "DoBlueSectionAnimation",
    value: function DoBlueSectionAnimation() {
      var _this2 = this;

      TweenLite.to(this.blueElements.title, 0.7, {
        x: 0,
        autoAlpha: 1,
        delay: 0.5,
        ease: Power1.EaseOut
      });
      TweenLite.to(this.blueElements.desc, 0.7, {
        x: 0,
        autoAlpha: 1,
        delay: 0.5,
        ease: Power1.EaseOut
      });
      TweenLite.to(this.blueElements.image, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.EaseOut,
        onComplete: function onComplete() {
          _this2.DoParallax(_this2.$blueSection);
        }
      });
    } // Black Phone Section Animation

  }, {
    key: "DoBlackSectionAnimation",
    value: function DoBlackSectionAnimation() {
      var _this3 = this;

      TweenLite.to(this.blackElements.title, 0.7, {
        x: 0,
        autoAlpha: 1,
        delay: 0.5,
        ease: Power1.EaseOut,
        onComplete: function onComplete() {
          _this3.DoParallax(_this3.$blackSection);
        }
      });
      TweenLite.to(this.blackElements.desc, 0.7, {
        x: 0,
        autoAlpha: 1,
        delay: 0.5,
        ease: Power1.EaseOut
      });
      TweenLite.to(this.blackElements.image, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.EaseOut
      });
      TweenLite.to(this.blackElements.effect, 0.7, {
        x: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Power1.EaseOut
      });
    }
  }, {
    key: "HighlightPageInit",
    value: function HighlightPageInit() {
      // Black Phone Section Init
      TweenLite.set(this.blackElements.title, {
        x: -60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.blackElements.desc, {
        x: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.blackElements.image, {
        y: -80 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.blackElements.effect, {
        x: 170,
        scale: 0.1,
        autoAlpha: 0
      }); // Blue Phone Section Init

      TweenLite.set(this.blueElements.title, {
        x: -60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.blueElements.desc, {
        x: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.blueElements.image, {
        y: -80 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // Design Section Init

      TweenLite.set(this.designElements.title, {
        x: -60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.designElements.subTitle, {
        x: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.designElements.image, {
        x: 140 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.designElements.feature, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.designElements.context, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
    } // Mouse parallax Effect

  }, {
    key: "DoParallax",
    value: function DoParallax() {
      var _this4 = this;

      var targetElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (window.innerWidth > 767 && targetElement.hasClass('parallax-effect')) {
        var $parallaxBg = targetElement.find('.parallax-bg');
        var $parallaxMain = targetElement.find('.parallax-element');
        targetElement.on('mousemove', function (e) {
          var coreData = {
            offsetX: e.clientX,
            offsetY: e.clientY,
            core: {
              x: targetElement.width() / 2,
              y: targetElement.height() / 2
            }
          };
          var calculatedData = {
            xMove: _this4.PARALLAX_DISTANCE * (coreData.offsetX - coreData.core.x) / coreData.core.x,
            yMove: _this4.PARALLAX_DISTANCE * (coreData.offsetY - coreData.core.y) / coreData.core.y
          };
          TweenMax.to($parallaxMain, 0.5, {
            x: -calculatedData.xMove,
            y: -calculatedData.yMove
          });
          TweenMax.to($parallaxBg, 0.5, {
            x: calculatedData.xMove,
            y: calculatedData.yMove
          });
        });
      }
    }
  }, {
    key: "RemoveParallax",
    value: function RemoveParallax() {
      this.$parallaxContainer.off('mousemove');
    }
  }]);

  return Highlight;
}();

exports.default = Highlight;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _smartphoto = _interopRequireDefault(__webpack_require__(23));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Camera =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Camera() {
    _classCallCheck(this, Camera);

    // This File Contain The Behavior Of Camera Page
    this.isCameraPage = false;

    if ($('#page-camera').length > 0) {
      this.isCameraPage = true;
    }

    if (this.isCameraPage) {
      this.PARALLAX_DISTANCE = 12 * window.innerWidth / 1920;
      this.anchors = {
        gallery: 0,
        selfie: 0
      };
      this.$specSection = $('#section-camera-specs');
      this.specsElements = {
        title: $('.section-camera-specs__top .section__title'),
        image: $('.section-camera-specs__image'),
        content: $('.section-camera-specs__main-content')
      };
      this.galleryElements = {
        title: $('.section-camera-gallery__top'),
        gallery: $('.section-camera-gallery__gallery'),
        feature: $('.section-camera-gallery__feature')
      };
      this.selfieElements = {
        title: $('.section-camera-selfie__main-content .section__title'),
        subTitle: $('.section-camera-selfie__main-content .section__sub-title'),
        image: $('.section-camera-selfie__main-content .content-body'),
        feature: $('.section-camera-selfie__main-content .content-bottom')
      };
      this.DISTANCE_RATIO = window.innerWidth / 1920;
      this.SCREEN_HEIGHT = window.innerHeight;
      this.bindEvents();
    }
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Camera, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.InitCameraPage();
      this.DoCameraSpecSectionAnimation();
      this.photo = new _smartphoto.default(".image-item", {
        resizeStyle: 'fit'
      });
      $('#selfie-slider').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-control gray slick-next"></button>',
        prevArrow: '<button type="button" class="slick-control gray slick-prev"></button>'
      });
      this.BindSwitchGallery();
      setTimeout(function () {
        _this.anchors = {
          gallery: $('#section-camera-gallery').offset().top,
          selfie: $('#section-camera-selfie').offset().top
        };
        $(window).on('scroll', function (e) {
          if (window.pageYOffset > _this.anchors.gallery - _this.SCREEN_HEIGHT * 1.65) {
            _this.DoCameraGallerySectionAnimation();
          }

          if (window.pageYOffset > _this.anchors.selfie - _this.SCREEN_HEIGHT * 1.65) {
            _this.DoCameraSelfieSectionAnimation();
          }
        });
      }, 300);
    }
    /* ===================================
     *  METHODS
     * =================================== */
    // Camera Spec Animation

  }, {
    key: "DoCameraSpecSectionAnimation",
    value: function DoCameraSpecSectionAnimation() {
      var _this2 = this;

      TweenLite.to(this.specsElements.title, 0.7, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 0.5
      });
      TweenLite.to(this.specsElements.image, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        onComplete: function onComplete() {
          _this2.DoParallax(_this2.$specSection);
        }
      });
      TweenLite.to(this.specsElements.content, 0.7, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 1.1
      });
    } // Camera Gallery Animation

  }, {
    key: "DoCameraGallerySectionAnimation",
    value: function DoCameraGallerySectionAnimation() {
      TweenLite.to(this.galleryElements.title, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      });
      TweenLite.to(this.galleryElements.gallery, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 0.5
      });
      TweenLite.to(this.galleryElements.feature, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 1.1
      });
    } // Camera Selfie Animation

  }, {
    key: "DoCameraSelfieSectionAnimation",
    value: function DoCameraSelfieSectionAnimation() {
      TweenLite.to(this.selfieElements.title, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      });
      TweenLite.to(this.selfieElements.subTitle, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 0.3
      });
      TweenLite.to(this.selfieElements.image, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 0.7
      });
      TweenLite.to(this.selfieElements.feature, 0.7, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: 1
      });
    }
  }, {
    key: "InitCameraPage",
    value: function InitCameraPage() {
      // Camera Spec Section Init
      TweenLite.set(this.specsElements.title, {
        x: -60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.specsElements.image, {
        y: 80 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.specsElements.content, {
        x: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // Camera Gallery Section Init

      TweenLite.set(this.galleryElements.title, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.galleryElements.gallery, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.galleryElements.feature, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      }); // Selfie Section Init

      TweenLite.set(this.selfieElements.title, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.selfieElements.subTitle, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.selfieElements.image, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
      TweenLite.set(this.selfieElements.feature, {
        y: 60 * this.DISTANCE_RATIO,
        autoAlpha: 0
      });
    }
  }, {
    key: "BindSwitchGallery",
    value: function BindSwitchGallery() {
      var _this3 = this;

      this.mode1Btn = $('#camera-mode-1');
      this.mode2Btn = $('#camera-mode-2');
      this.mode1Btn.click(function () {
        if (!_this3.mode1Btn.hasClass('active')) {
          _this3.mode2Btn.removeClass('active');

          _this3.mode1Btn.addClass('active');

          $('#camera-gallery-2').fadeOut('fast', function () {
            $('#camera-gallery-1').fadeIn('fast');
          });
        }
      });
      this.mode2Btn.click(function () {
        if (!_this3.mode2Btn.hasClass('active')) {
          _this3.mode2Btn.addClass('active');

          _this3.mode1Btn.removeClass('active');

          $('#camera-gallery-1').fadeOut('fast', function () {
            $('#camera-gallery-2').fadeIn('fast');
          });
        }
      });
    } // Mouse parallax Effect

  }, {
    key: "DoParallax",
    value: function DoParallax() {
      var _this4 = this;

      var targetElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (window.innerWidth > 767 && targetElement.hasClass('parallax-effect')) {
        var $parallaxBg = targetElement.find('.parallax-bg');
        var $parallaxMain = targetElement.find('.parallax-element');
        targetElement.on('mousemove', function (e) {
          var coreData = {
            offsetX: e.clientX,
            offsetY: e.clientY,
            core: {
              x: targetElement.width() / 2,
              y: targetElement.height() / 2
            }
          };
          var calculatedData = {
            xMove: _this4.PARALLAX_DISTANCE * (coreData.offsetX - coreData.core.x) / coreData.core.x,
            yMove: _this4.PARALLAX_DISTANCE * (coreData.offsetY - coreData.core.y) / coreData.core.y
          };
          TweenMax.to($parallaxMain, 0.5, {
            x: -calculatedData.xMove,
            y: -calculatedData.yMove
          });
          TweenMax.to($parallaxBg, 0.5, {
            x: calculatedData.xMove,
            y: calculatedData.yMove
          });
        });
      }
    }
  }, {
    key: "RemoveParallax",
    value: function RemoveParallax() {
      this.$parallaxContainer.off('mousemove');
    }
  }]);

  return Camera;
}();

exports.default = Camera;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(24);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aTemplate = __webpack_require__(25);

var _aTemplate2 = _interopRequireDefault(_aTemplate);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var template = '<div class="\\{classNames.smartPhoto\\}"<!-- BEGIN hide:exist --> aria-hidden="true"<!-- END hide:exist --><!-- BEGIN hide:empty --> aria-hidden="false"<!-- END hide:empty --> role="dialog">\n\t<div class="\\{classNames.smartPhotoBody\\}">\n\t\t<div class="\\{classNames.smartPhotoInner\\}">\n\t\t\t   <div class="\\{classNames.smartPhotoHeader\\}">\n\t\t\t\t\t<span class="\\{classNames.smartPhotoCount\\}">{currentIndex}[increment]/{total}</span>\n\t\t\t\t\t<span class="\\{classNames.smartPhotoCaption\\}" aria-live="polite" tabindex="-1"><!-- BEGIN groupItems:loop --><!-- \\BEGIN currentIndex:touch#{index} -->{caption}<!-- \\END currentIndex:touch#{index} --><!-- END groupItems:loop --></span>\n\t\t\t\t\t<button class="\\{classNames.smartPhotoDismiss\\}" data-action-click="hidePhoto()"><span class="smartphoto-sr-only">\\{message.closeDialog\\}</span></button>\n\t\t\t\t</div>\n\t\t\t\t<div class="\\{classNames.smartPhotoContent\\}"<!-- BEGIN isSmartPhone:exist --> data-action-touchstart="beforeDrag" data-action-touchmove="onDrag" data-action-touchend="afterDrag(false)"<!-- END isSmartPhone:exist --><!-- BEGIN isSmartPhone:empty --> data-action-click="hidePhoto()"<!-- END isSmartPhone:empty -->>\n\t\t\t\t</div>\n\t\t\t\t<ul style="transform:translate({translateX}[round]px,{translateY}[round]px);" class="\\{classNames.smartPhotoList\\}<!-- BEGIN onMoveClass:exist --> \\{classNames.smartPhotoListOnMove\\}<!-- END onMoveClass:exist -->">\n\t\t\t\t\t<!-- BEGIN groupItems:loop -->\n\t\t\t\t\t<li style="transform:translate({translateX}[round]px,{translateY}[round]px);" class="<!-- \\BEGIN currentIndex:touch#{index} -->current<!-- \\END currentIndex:touch#{index} -->">\n\t\t\t\t\t\t<!-- BEGIN processed:exist -->\n\t\t\t\t\t\t<div style="transform:translate({x}[round]px,{y}[round]px) scale({scale});" class="\\\\{classNames.smartPhotoImgWrap\\\\}"<!-- \\BEGIN isSmartPhone:empty --> data-action-mousemove="onDrag" data-action-mousedown="beforeDrag" data-action-mouseup="afterDrag"<!-- \\END isSmartPhone:empty --><!-- \\BEGIN isSmartPhone:exist --> data-action-touchstart="beforeDrag" data-action-touchmove="onDrag" data-action-touchend="afterDrag"<!-- \\END isSmartPhone:exist -->>\n\t\t\t\t\t\t\t<img style="<!-- \\BEGIN currentIndex:touch#{index} -->transform:translate(\\{photoPosX\\}[virtualPos]px,\\{photoPosY\\}[virtualPos]px) scale(\\{scaleSize\\});<!-- \\END currentIndex:touch#{index} -->width:{width}px;" src="{src}" class="\\\\{classNames.smartPhotoImg\\\\}<!-- \\BEGIN scale:exist -->  \\\\{classNames.smartPhotoImgOnMove\\\\}<!-- \\END scale:exist --><!-- \\BEGIN elastic:exist --> \\\\{classNames.smartPhotoImgElasticMove\\\\}<!-- \\END elastic:exist --><!-- \\BEGIN appear:exist --> active<!-- \\END appear:exist -->" ondragstart="return false;">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- END processed:exist -->\n\t\t\t\t\t\t<!-- BEGIN processed:empty -->\n\t\t\t\t\t\t<div class="\\\\{classNames.smartPhotoLoaderWrap\\\\}">\n\t\t\t\t\t\t\t<span class="\\\\{classNames.smartPhotoLoader\\\\}"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- END processed:empty -->\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- END groupItems:loop -->\n\t\t\t\t</ul>\n\t\t\t\t<!-- BEGIN arrows:exist -->\n\t\t\t\t<ul class="\\{classNames.smartPhotoArrows\\}"<!-- BEGIN hideUi:exist --> aria-hidden="true"<!-- END hideUi:exist --><!-- BEGIN hideUi:exist --> aria-hidden="false"<!-- END hideUi:exist -->>\n\t\t\t\t\t<li class="\\{classNames.smartPhotoArrowLeft\\}<!-- BEGIN isSmartPhone:exist --> \\{classNames.smartPhotoArrowHideIcon\\}<!-- END isSmartPhone:exist -->"<!-- BEGIN showPrevArrow:empty --> aria-hidden="true"<!-- END showPrevArrow:empty -->><a href="#" data-action-click="gotoSlide({prev})" role="button"><span class="smartphoto-sr-only">\\{message.gotoPrevImage\\}</span></a></li>\n\t\t\t\t\t<li class="\\{classNames.smartPhotoArrowRight\\}<!-- BEGIN isSmartPhone:exist --> \\{classNames.smartPhotoArrowHideIcon\\}<!-- END isSmartPhone:exist -->"<!-- BEGIN showNextArrow:empty --> aria-hidden="true"<!-- END showNextArrow:empty -->><a href="#" data-action-click="gotoSlide({next})" role="button"><span class="smartphoto-sr-only">\\{message.gotoNextImage\\}</span></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<!-- END arrows:exist -->\n\t\t\t\t<!-- BEGIN nav:exist -->\n\t\t\t\t<nav class="\\{classNames.smartPhotoNav\\}"<!-- BEGIN hideUi:exist --> aria-hidden="true"<!-- END hideUi:exist --><!-- BEGIN hideUi:exist --> aria-hidden="false"<!-- END hideUi:exist -->>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<!-- BEGIN groupItems:loop -->\n\t\t\t\t\t\t<li><a href="#" data-action-click="gotoSlide({index})" class="<!-- \\BEGIN currentIndex:touch#{index} -->current<!-- \\END currentIndex:touch#{index} -->" style="background-image:url({thumb});" role="button"><span class="smartphoto-sr-only">go to {caption}</span></a></li>\n\t\t\t\t\t\t<!-- END groupItems:loop -->\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t\t<!-- END nav:exist -->\n\t\t</div>\n\t\t<!-- BEGIN appearEffect:exist -->\n\t\t<img src=\\{appearEffect.img\\}\n\t\tclass="\\{classNames.smartPhotoImgClone\\}"\n\t\tstyle="width:\\{appearEffect.width\\}px;height:\\{appearEffect.height\\}px;transform:translate(\\{appearEffect.left\\}px,\\{appearEffect.top\\}px) scale(1)" />\n\t\t<!-- END appearEffect:exist -->\n\t</div>\n</div>\n';


var util = __webpack_require__(30);
var Promise = __webpack_require__(31).Promise;

var defaults = {
  classNames: {
    smartPhoto: 'smartphoto',
    smartPhotoClose: 'smartphoto-close',
    smartPhotoBody: 'smartphoto-body',
    smartPhotoInner: 'smartphoto-inner',
    smartPhotoContent: 'smartphoto-content',
    smartPhotoImg: 'smartphoto-img',
    smartPhotoImgOnMove: 'smartphoto-img-onmove',
    smartPhotoImgElasticMove: 'smartphoto-img-elasticmove',
    smartPhotoImgWrap: 'smartphoto-img-wrap',
    smartPhotoArrows: 'smartphoto-arrows',
    smartPhotoNav: 'smartphoto-nav',
    smartPhotoArrowRight: 'smartphoto-arrow-right',
    smartPhotoArrowLeft: 'smartphoto-arrow-left',
    smartPhotoArrowHideIcon: 'smartphoto-arrow-hide',
    smartPhotoImgLeft: 'smartphoto-img-left',
    smartPhotoImgRight: 'smartphoto-img-right',
    smartPhotoList: 'smartphoto-list',
    smartPhotoListOnMove: 'smartphoto-list-onmove',
    smartPhotoHeader: 'smartphoto-header',
    smartPhotoCount: 'smartphoto-count',
    smartPhotoCaption: 'smartphoto-caption',
    smartPhotoDismiss: 'smartphoto-dismiss',
    smartPhotoLoader: 'smartphoto-loader',
    smartPhotoLoaderWrap: 'smartphoto-loader-wrap',
    smartPhotoImgClone: 'smartphoto-img-clone'
  },
  message: {
    gotoNextImage: 'go to the next image',
    gotoPrevImage: 'go to the previous image',
    closeDialog: 'close the image dialog'
  },
  arrows: true,
  nav: true,
  showAnimation: true,
  verticalGravity: false,
  useOrientationApi: false,
  useHistoryApi: true,
  swipeTopToClose: false,
  swipeBottomToClose: true,
  swipeOffset: 100,
  headerHeight: 60,
  footerHeight: 60,
  forceInterval: 10,
  registance: 0.5,
  loadOffset: 2,
  resizeStyle: 'fit'
};

var SmartPhoto = function (_ATemplate) {
  _inherits(SmartPhoto, _ATemplate);

  function SmartPhoto(selector, settings) {
    _classCallCheck(this, SmartPhoto);

    var _this = _possibleConstructorReturn(this, (SmartPhoto.__proto__ || Object.getPrototypeOf(SmartPhoto)).call(this));

    _this.data = util.extend({}, defaults, settings);
    _this.data.currentIndex = 0;
    _this.data.oldIndex = 0;
    _this.data.hide = true;
    _this.data.group = {};
    _this.data.scaleSize = 1;
    _this.data.scale = false;
    _this.pos = { x: 0, y: 0 };
    _this.data.photoPosX = 0;
    _this.data.photoPosY = 0;
    _this.convert = {
      increment: _this.increment,
      virtualPos: _this.virtualPos,
      round: _this.round
    };
    _this.data.groupItems = _this.groupItems;
    _this.elements = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
    var date = new Date();
    _this.tapSecond = date.getTime();
    _this.onListMove = false;
    _this.clicked = false;
    _this.id = _this._getUniqId();
    _this.vx = 0;
    _this.vy = 0;
    _this.data.appearEffect = null;
    _this.addTemplate(_this.id, template);
    _this.data.isSmartPhone = _this._isSmartPhone();
    var body = document.querySelector('body');
    util.append(body, '<div data-id=\'' + _this.id + '\'></div>');
    [].forEach.call(_this.elements, function (element) {
      _this.addNewItem(element);
    });

    _this.update();
    var currentItem = _this._getCurrentItemByHash();
    if (currentItem) {
      util.triggerEvent(currentItem.element, 'click');
    }

    setInterval(function () {
      _this._doAnim();
    }, _this.data.forceInterval);

    if (!_this.data.isSmartPhone) {
      window.addEventListener('resize', function () {
        if (!_this.groupItems()) {
          return;
        }
        _this._resetTranslate();
        _this._setPosByCurrentIndex();
        _this._setSizeByScreen();
        _this.update();
      });

      window.addEventListener('keydown', function (e) {
        var code = e.keyCode || e.which;
        if (_this.data.hide === true) {
          return;
        }
        if (code === 37) {
          _this.gotoSlide(_this.data.prev);
        } else if (code === 39) {
          _this.gotoSlide(_this.data.next);
        } else if (code === 27) {
          _this.hidePhoto();
        }
      });
      return _possibleConstructorReturn(_this);
    }

    window.addEventListener('orientationchange', function () {
      if (!_this.groupItems()) {
        return;
      }
      _this._resetTranslate();
      _this._setPosByCurrentIndex();
      _this._setHashByCurrentIndex();
      _this._setSizeByScreen();
      _this.update();
    });

    if (!_this.data.useOrientationApi) {
      return _possibleConstructorReturn(_this);
    }

    window.addEventListener('deviceorientation', function (e) {
      var _window = window,
          orientation = _window.orientation;

      if (!e || !e.gamma || _this.data.appearEffect) {
        return;
      }
      if (!_this.isBeingZoomed && !_this.photoSwipable && !_this.data.elastic && _this.data.scale) {
        if (orientation === 0) {
          _this._calcGravity(e.gamma, e.beta);
        } else if (orientation === 90) {
          _this._calcGravity(e.beta, e.gamma);
        } else if (orientation === -90) {
          _this._calcGravity(-e.beta, -e.gamma);
        } else if (orientation === 180) {
          _this._calcGravity(-e.gamma, -e.beta);
        }
      }
    });
    return _this;
  }

  _createClass(SmartPhoto, [{
    key: 'on',
    value: function on(event, fn) {
      var _this2 = this;

      var photo = this._getElementByClass(this.data.classNames.smartPhoto);
      photo.addEventListener(event, function (e) {
        fn.call(_this2, e);
      });
    }
  }, {
    key: 'increment',
    value: function increment(item) {
      return item + 1;
    }
  }, {
    key: 'round',
    value: function round(number) {
      return Math.round(number);
    }
  }, {
    key: 'virtualPos',
    value: function virtualPos(pos) {
      pos = parseInt(pos, 10);
      var item = this._getSelectedItem();
      return pos / item.scale / this.data.scaleSize;
    }
  }, {
    key: 'groupItems',
    value: function groupItems() {
      return this.data.group[this.data.currentGroup];
    }
  }, {
    key: '_resetTranslate',
    value: function _resetTranslate() {
      var _this3 = this;

      var items = this.groupItems();
      items.forEach(function (item, index) {
        item.translateX = _this3._getWindowWidth() * index;
      });
    }
  }, {
    key: 'addNewItem',
    value: function addNewItem(element) {
      var _this4 = this;

      var groupId = element.getAttribute('data-group') || 'nogroup';
      var group = this.data.group;

      if (groupId === 'nogroup') {
        element.setAttribute('data-group', 'nogroup');
      }
      if (!group[groupId]) {
        group[groupId] = [];
      }
      var index = group[groupId].length;
      var body = document.querySelector('body');
      var src = element.getAttribute('href');
      var img = element.querySelector('img');
      var thumb = src;
      if (img) {
        if (img.currentSrc) {
          thumb = img.currentSrc;
        } else {
          thumb = img.src;
        }
      }
      var item = {
        src: src,
        thumb: thumb,
        caption: element.getAttribute('data-caption'),
        groupId: groupId,
        translateX: this._getWindowWidth() * index,
        index: index,
        translateY: 0,
        width: 50,
        height: 50,
        id: element.getAttribute('data-id') || index,
        loaded: false,
        processed: false,
        element: element
      };
      group[groupId].push(item);
      this.data.currentGroup = groupId;
      var id = element.getAttribute('data-id');
      if (!id) {
        element.setAttribute('data-id', index);
      }
      element.setAttribute('data-index', index);
      element.addEventListener('click', function (event) {
        event.preventDefault();
        _this4.data.currentGroup = element.getAttribute('data-group');
        _this4.data.currentIndex = parseInt(element.getAttribute('data-index'), 10);
        _this4._setHashByCurrentIndex();
        var currentItem = _this4._getSelectedItem();
        if (currentItem.loaded) {
          _this4._initPhoto();
          _this4.addAppearEffect(element, currentItem);
          _this4.clicked = true;
          _this4.update();
          body.style.overflow = 'hidden';
          _this4._fireEvent('open');
        } else {
          _this4._loadItem(currentItem).then(function () {
            _this4._initPhoto();
            _this4.addAppearEffect(element, currentItem);
            _this4.clicked = true;
            _this4.update();
            body.style.overflow = 'hidden';
            _this4._fireEvent('open');
          });
        }
      });
    }
  }, {
    key: '_initPhoto',
    value: function _initPhoto() {
      this.data.total = this.groupItems().length;
      this.data.hide = false;
      this.data.photoPosX = 0;
      this.data.photoPosY = 0;
      this._setPosByCurrentIndex();
      this._setSizeByScreen();
      this.setArrow();
      if (this.data.resizeStyle === 'fill' && this.data.isSmartPhone) {
        this.data.scale = true;
        this.data.hideUi = true;
        this.data.scaleSize = this._getScaleBoarder();
      }
    }
  }, {
    key: 'onUpdated',
    value: function onUpdated() {
      var _this5 = this;

      if (this.data.appearEffect && this.data.appearEffect.once) {
        this.data.appearEffect.once = false;
        this.execEffect().then(function () {
          _this5.data.appearEffect = null;
          _this5.data.appear = true;
          _this5.update();
        });
      }
      if (this.clicked) {
        this.clicked = false;
        var classNames = this.data.classNames;

        var caption = this._getElementByClass(classNames.smartPhotoCaption);
        caption.focus();
      }
    }
  }, {
    key: 'execEffect',
    value: function execEffect() {
      var _this6 = this;

      return new Promise(function (resolve) {
        if (util.isOldIE()) {
          resolve();
        }
        var _data = _this6.data,
            appearEffect = _data.appearEffect,
            classNames = _data.classNames;

        var effect = _this6._getElementByClass(classNames.smartPhotoImgClone);
        var handler = function handler() {
          effect.removeEventListener('transitionend', handler, true);
          resolve();
        };
        effect.addEventListener('transitionend', handler, true);
        setTimeout(function () {
          effect.style.transform = 'translate(' + appearEffect.afterX + 'px, ' + appearEffect.afterY + 'px) scale(' + appearEffect.scale + ')';
        }, 10);
      });
    }
  }, {
    key: 'addAppearEffect',
    value: function addAppearEffect(element, item) {
      if (this.data.showAnimation === false) {
        this.data.appear = true;
        return;
      }
      var img = element.querySelector('img');
      var pos = util.getViewPos(img);
      var appear = {};
      var scale = 1;
      appear.width = img.offsetWidth;
      appear.height = img.offsetHeight;
      appear.top = pos.top;
      appear.left = pos.left;
      appear.once = true;
      appear.img = item.src;
      var toX = this._getWindowWidth();
      var toY = this._getWindowHeight();
      var screenY = toY - this.data.headerHeight - this.data.footerHeight;

      if (this.data.resizeStyle === 'fill' && this.data.isSmartPhone) {
        if (img.offsetWidth > img.offsetHeight) {
          scale = toY / img.offsetHeight;
        } else {
          scale = toX / img.offsetWidth;
        }
      } else {
        if (appear.width >= appear.height) {
          if (item.height < screenY) {
            scale = item.width / appear.width;
          } else {
            scale = screenY / appear.height;
          }
        } else if (appear.height > appear.width) {
          if (item.height < screenY) {
            scale = item.height / appear.height;
          } else {
            scale = screenY / appear.height;
          }
        }
        if (appear.width * scale > toX) {
          scale = toX / appear.width;
        }
      }

      var x = (scale - 1) / 2 * img.offsetWidth + (toX - img.offsetWidth * scale) / 2;
      var y = (scale - 1) / 2 * img.offsetHeight + (toY - img.offsetHeight * scale) / 2;
      appear.afterX = x;
      appear.afterY = y;
      appear.scale = scale;
      this.data.appearEffect = appear;
    }
  }, {
    key: 'hidePhoto',
    value: function hidePhoto() {
      var _this7 = this;

      var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bottom';

      this.data.hide = true;
      this.data.appear = false;
      this.data.appearEffect = null;
      this.data.hideUi = false;
      this.data.scale = false;
      this.data.scaleSize = 1;
      var scrollX = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
      var scrollY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      var body = document.querySelector('body');
      if (window.location.hash) {
        this._setHash('');
      }
      window.scroll(scrollX, scrollY);
      this._doHideEffect(dir).then(function () {
        _this7.update();
        body.style.overflow = '';
        _this7._fireEvent('close');
      });
    }
  }, {
    key: '_doHideEffect',
    value: function _doHideEffect(dir) {
      var _this8 = this;

      return new Promise(function (resolve) {
        if (util.isOldIE()) {
          resolve();
        }
        var classNames = _this8.data.classNames;

        var photo = _this8._getElementByClass(classNames.smartPhoto);
        var img = _this8._getElementByQuery('.current .' + classNames.smartPhotoImg);
        var height = _this8._getWindowHeight();
        var handler = function handler() {
          photo.removeEventListener('transitionend', handler, true);
          resolve();
        };
        photo.style.opacity = 0;
        if (dir === 'bottom') {
          img.style.transform = 'translateY(' + height + 'px)';
        } else if (dir === 'top') {
          img.style.transform = 'translateY(-' + height + 'px)';
        }
        photo.addEventListener('transitionend', handler, true);
      });
    }
  }, {
    key: '_getElementByClass',
    value: function _getElementByClass(className) {
      return document.querySelector('[data-id="' + this.id + '"] .' + className);
    }
  }, {
    key: '_getElementByQuery',
    value: function _getElementByQuery(query) {
      return document.querySelector('[data-id="' + this.id + '"] ' + query);
    }
  }, {
    key: '_getTouchPos',
    value: function _getTouchPos() {
      var x = 0;
      var y = 0;
      var e = typeof event === 'undefined' ? this.e : event;
      if (this._isTouched(e)) {
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
      } else if (e.pageX) {
        x = e.pageX;
        y = e.pageY;
      }
      return { x: x, y: y };
    }
  }, {
    key: '_getGesturePos',
    value: function _getGesturePos(e) {
      var touches = e.touches;
      return [{ x: touches[0].pageX, y: touches[0].pageY }, { x: touches[1].pageX, y: touches[1].pageY }];
    }
  }, {
    key: '_setPosByCurrentIndex',
    value: function _setPosByCurrentIndex() {
      var _this9 = this;

      var items = this.groupItems();
      var moveX = -1 * items[this.data.currentIndex].translateX;
      this.pos.x = moveX;
      setTimeout(function () {
        _this9.data.translateX = moveX;
        _this9.data.translateY = 0;
        _this9._listUpdate();
      }, 1);
    }
  }, {
    key: '_setHashByCurrentIndex',
    value: function _setHashByCurrentIndex() {
      var scrollX = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
      var scrollY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      var items = this.groupItems();
      var id = items[this.data.currentIndex].id;
      var group = this.data.currentGroup;
      var hash = 'group=' + group + '&photo=' + id;
      this._setHash(hash);
      window.scroll(scrollX, scrollY);
    }
  }, {
    key: '_setHash',
    value: function _setHash(hash) {
      if (!(window.history && window.history.pushState) || !this.data.useHistoryApi) {
        return;
      }
      if (hash) {
        window.history.replaceState(null, null, '' + location.pathname + location.search + '#' + hash);
      } else {
        window.history.replaceState(null, null, '' + location.pathname + location.search);
      }
    }
  }, {
    key: '_getCurrentItemByHash',
    value: function _getCurrentItemByHash() {
      var group = this.data.group;
      var hash = location.hash.substr(1);
      var hashObj = util.parseQuery(hash);
      var currentItem = null;
      var getCurrentItem = function getCurrentItem(item) {
        if (hashObj.group === item.groupId && hashObj.photo === item.id) {
          currentItem = item;
        }
      };
      Object.keys(group).forEach(function (key) {
        group[key].forEach(getCurrentItem);
      });
      return currentItem;
    }
  }, {
    key: '_loadItem',
    value: function _loadItem(item) {
      return new Promise(function (resolve) {
        var img = new Image();
        img.onload = function () {
          item.width = img.width;
          item.height = img.height;
          item.loaded = true;
          resolve();
        };
        img.onerror = function () {
          resolve();
        };
        img.src = item.src;
      });
    }
  }, {
    key: '_getItemByIndex',
    value: function _getItemByIndex(index) {
      var data = this.data;

      if (data.group[data.currentGroup][index]) {
        return data.group[data.currentGroup][index];
      } else {
        return null;
      }
    }
  }, {
    key: '_loadNeighborItems',
    value: function _loadNeighborItems() {
      var _this10 = this;

      var index = this.data.currentIndex;
      var loadOffset = this.data.loadOffset;

      var from = index - loadOffset;
      var to = index + loadOffset;
      var promises = [];
      for (var i = from; i < to; i++) {
        var item = this._getItemByIndex(i);
        if (item && !item.loaded) {
          promises.push(this._loadItem(item));
        }
      }
      if (promises.length) {
        Promise.all(promises).then(function () {
          _this10._initPhoto();
          _this10.update();
        });
      }
    }
  }, {
    key: '_setSizeByScreen',
    value: function _setSizeByScreen() {
      var windowX = this._getWindowWidth();
      var windowY = this._getWindowHeight();
      var headerHeight = this.data.headerHeight;
      var footerHeight = this.data.footerHeight;
      var screenY = windowY - (headerHeight + footerHeight);
      var items = this.groupItems();
      items.forEach(function (item) {
        if (!item.loaded) {
          return;
        }
        item.processed = true;
        item.scale = screenY / item.height;
        if (item.height < screenY) {
          item.scale = 1;
        }
        item.x = (item.scale - 1) / 2 * item.width + (windowX - item.width * item.scale) / 2;
        item.y = (item.scale - 1) / 2 * item.height + (windowY - item.height * item.scale) / 2;
        if (item.width * item.scale > windowX) {
          item.scale = windowX / item.width;
          item.x = (item.scale - 1) / 2 * item.width;
        }
      });
    }
  }, {
    key: '_slideList',
    value: function _slideList() {
      var _this11 = this;

      this.data.scaleSize = 1;
      this.isBeingZoomed = false;
      this.data.hideUi = false;
      this.data.scale = false;
      this.data.photoPosX = 0;
      this.data.photoPosY = 0;
      this.data.onMoveClass = true;
      this._setPosByCurrentIndex();
      this._setHashByCurrentIndex();
      this._setSizeByScreen();
      setTimeout(function () {
        var item = _this11._getSelectedItem();
        _this11.data.onMoveClass = false;
        _this11.setArrow();
        _this11.update();
        if (_this11.data.oldIndex !== _this11.data.currentIndex) {
          _this11._fireEvent('change');
        }
        _this11.data.oldIndex = _this11.data.currentIndex;
        _this11._loadNeighborItems();
        if (!item.loaded) {
          _this11._loadItem(item).then(function () {
            _this11._initPhoto();
            _this11.update();
          });
        }
      }, 200);
    }
  }, {
    key: 'gotoSlide',
    value: function gotoSlide(index) {
      if (this.e && this.e.preventDefault) {
        this.e.preventDefault();
      }
      this.data.currentIndex = parseInt(index, 10);
      if (!this.data.currentIndex) {
        this.data.currentIndex = 0;
      }
      this._slideList();
    }
  }, {
    key: 'setArrow',
    value: function setArrow() {
      var items = this.groupItems();
      var length = items.length;
      var next = this.data.currentIndex + 1;
      var prev = this.data.currentIndex - 1;
      this.data.showNextArrow = false;
      this.data.showPrevArrow = false;
      if (next !== length) {
        this.data.next = next;
        this.data.showNextArrow = true;
      }
      if (prev !== -1) {
        this.data.prev = prev;
        this.data.showPrevArrow = true;
      }
    }
  }, {
    key: 'beforeDrag',
    value: function beforeDrag() {
      if (this._isGestured(this.e)) {
        this.beforeGesture();
        return;
      }
      this.isBeingZoomed = false;
      if (this.data.scale) {
        this.beforePhotoDrag();
        return;
      }
      var pos = this._getTouchPos();
      this.isSwipable = true;
      this.dragStart = true;
      this.firstPos = pos;
      this.oldPos = pos;
    }
  }, {
    key: 'afterDrag',
    value: function afterDrag() {
      var items = this.groupItems();
      var date = new Date();
      var tapSecond = date.getTime();
      var offset = this.tapSecond - tapSecond;
      var swipeWidth = 0;
      var swipeHeight = 0;
      this.isSwipable = false;
      this.onListMove = false;

      if (this.oldPos) {
        swipeWidth = this.oldPos.x - this.firstPos.x;
        swipeHeight = this.oldPos.y - this.firstPos.y;
      }
      if (this.isBeingZoomed) {
        this.afterGesture();
        return;
      }
      if (this.data.scale) {
        this.afterPhotoDrag();
        return;
      } else if (!util.isSmartPhone() && swipeWidth === 0 && swipeHeight === 0) {
        this.zoomPhoto();
        return;
      }
      if (Math.abs(offset) <= 500 && swipeWidth === 0 && swipeHeight === 0) {
        this.e.preventDefault();
        this.zoomPhoto();
        return;
      }
      this.tapSecond = tapSecond;
      this._fireEvent('swipeend');
      if (this.moveDir === 'horizontal') {
        if (swipeWidth >= this.data.swipeOffset && this.data.currentIndex !== 0) {
          this.data.currentIndex -= 1;
        } else if (swipeWidth <= -this.data.swipeOffset && this.data.currentIndex !== items.length - 1) {
          this.data.currentIndex += 1;
        }
        this._slideList();
      }
      if (this.moveDir === 'vertical') {
        if (this.data.swipeBottomToClose && swipeHeight >= this.data.swipeOffset) {
          this.hidePhoto('bottom');
        } else if (this.data.swipeTopToClose && swipeHeight <= -this.data.swipeOffset) {
          this.hidePhoto('top');
        } else {
          this.data.translateY = 0;
          this._slideList();
        }
      }
    }
  }, {
    key: 'onDrag',
    value: function onDrag() {
      this.e.preventDefault();
      if (this._isGestured(this.e) && this.onListMove === false) {
        this.onGesture();
        return;
      }
      if (this.isBeingZoomed) {
        return;
      }
      if (this.data.scale) {
        this.onPhotoDrag();
        return;
      }
      if (!this.isSwipable) {
        return;
      }

      var pos = this._getTouchPos();
      var x = pos.x - this.oldPos.x;
      var y = pos.y - this.firstPos.y;

      if (this.dragStart) {
        this._fireEvent('swipestart');
        this.dragStart = false;
        if (Math.abs(x) > Math.abs(y)) {
          this.moveDir = 'horizontal';
        } else {
          this.moveDir = 'vertical';
        }
      }

      if (this.moveDir === 'horizontal') {
        this.pos.x += x;
        this.data.translateX = this.pos.x;
      } else {
        this.data.translateY = y;
      }
      this.onListMove = true;
      this.oldPos = pos;
      this._listUpdate();
    }
  }, {
    key: 'zoomPhoto',
    value: function zoomPhoto() {
      var _this12 = this;

      this.data.hideUi = true;
      this.data.scaleSize = this._getScaleBoarder();
      if (this.data.scaleSize <= 1) {
        return;
      }
      this.data.photoPosX = 0;
      this.data.photoPosY = 0;
      this._photoUpdate();
      setTimeout(function () {
        _this12.data.scale = true;
        _this12._photoUpdate();
        _this12._fireEvent('zoomin');
      }, 300);
    }
  }, {
    key: 'zoomOutPhoto',
    value: function zoomOutPhoto() {
      this.data.scaleSize = 1;
      this.isBeingZoomed = false;
      this.data.hideUi = false;
      this.data.scale = false;
      this.data.photoPosX = 0;
      this.data.photoPosY = 0;
      this._photoUpdate();
      this._fireEvent('zoomout');
    }
  }, {
    key: 'beforePhotoDrag',
    value: function beforePhotoDrag() {
      var pos = this._getTouchPos();
      this.photoSwipable = true;
      if (!this.data.photoPosX) {
        this.data.photoPosX = 0;
      }
      if (!this.data.photoPosY) {
        this.data.photoPosY = 0;
      }
      this.oldPhotoPos = pos;
      this.firstPhotoPos = pos;
    }
  }, {
    key: 'onPhotoDrag',
    value: function onPhotoDrag() {
      if (!this.photoSwipable) {
        return;
      }
      this.e.preventDefault();
      var pos = this._getTouchPos();
      var x = pos.x - this.oldPhotoPos.x;
      var y = pos.y - this.oldPhotoPos.y;
      var moveX = this._round(this.data.scaleSize * x, 6);
      var moveY = this._round(this.data.scaleSize * y, 6);
      if (typeof moveX === 'number') {
        this.data.photoPosX += moveX;
        this.photoVX = moveX;
      }
      if (typeof moveY === 'number') {
        this.data.photoPosY += moveY;
        this.photoVY = moveY;
      }
      this.oldPhotoPos = pos;
      this._photoUpdate();
    }
  }, {
    key: 'afterPhotoDrag',
    value: function afterPhotoDrag() {
      if (this.oldPhotoPos.x === this.firstPhotoPos.x && this.photoSwipable) {
        this.photoSwipable = false;
        this.zoomOutPhoto();
      } else {
        this.photoSwipable = false;
        var item = this._getSelectedItem();
        var bound = this._makeBound(item);
        var offset = this.data.swipeOffset * this.data.scaleSize;
        var flagX = 0;
        var flagY = 0;
        if (this.data.photoPosX > bound.maxX) {
          flagX = -1;
        } else if (this.data.photoPosX < bound.minX) {
          flagX = 1;
        }
        if (this.data.photoPosY > bound.maxY) {
          flagY = -1;
        } else if (this.data.photoPosY < bound.minY) {
          flagY = 1;
        }

        if (this.data.photoPosX - bound.maxX > offset && this.data.currentIndex !== 0) {
          this.gotoSlide(this.data.prev);
          return;
        }

        if (bound.minX - this.data.photoPosX > offset && this.data.currentIndex + 1 !== this.data.total) {
          this.gotoSlide(this.data.next);
          return;
        }

        // todo
        // if(this.data.photoPosY - bound.maxY > offset) {
        //   this.hidePhoto();
        //   return;
        // }

        if (flagX === 0 && flagY === 0) {
          this.vx = this.photoVX / 5;
          this.vy = this.photoVY / 5;
        } else {
          this._registerElasticForce(flagX, flagY);
        }
      }
    }
  }, {
    key: 'beforeGesture',
    value: function beforeGesture() {
      this._fireEvent('gesturestart');
      var pos = this._getGesturePos(this.e);
      var distance = this._getDistance(pos[0], pos[1]);
      this.isBeingZoomed = true;
      this.oldDistance = distance;
      this.data.scale = true;
      this.e.preventDefault();
    }
  }, {
    key: 'onGesture',
    value: function onGesture() {
      var pos = this._getGesturePos(this.e);
      var distance = this._getDistance(pos[0], pos[1]);
      var size = (distance - this.oldDistance) / 100;
      var oldScaleSize = this.data.scaleSize;
      var posX = this.data.photoPosX;
      var posY = this.data.photoPosY;
      this.isBeingZoomed = true;
      this.data.scaleSize += this._round(size, 6);
      if (this.data.scaleSize < 0.2) {
        this.data.scaleSize = 0.2;
      }
      // todo
      if (this.data.scaleSize < oldScaleSize) {
        this.data.photoPosX = (1 + this.data.scaleSize - oldScaleSize) * posX;
        this.data.photoPosY = (1 + this.data.scaleSize - oldScaleSize) * posY;
      }

      if (this.data.scaleSize < 1 || this.data.scaleSize > this._getScaleBoarder()) {
        this.data.hideUi = true;
      } else {
        this.data.hideUi = false;
      }
      this.oldDistance = distance;
      this.e.preventDefault();
      this._photoUpdate();
    }
  }, {
    key: 'afterGesture',
    value: function afterGesture() {
      if (this.data.scaleSize > this._getScaleBoarder()) {
        return;
      }
      this.data.photoPosX = 0;
      this.data.photoPosY = 0;
      this.data.scale = false;
      this.data.scaleSize = 1;
      this.data.hideUi = false;
      this._fireEvent('gestureend');
      this._photoUpdate();
    }
  }, {
    key: '_getForceAndTheta',
    value: function _getForceAndTheta(vx, vy) {
      return {
        force: Math.sqrt(vx * vx + vy * vy),
        theta: Math.atan2(vy, vx)
      };
    }
  }, {
    key: '_getScaleBoarder',
    value: function _getScaleBoarder() {
      var item = this._getSelectedItem();
      var windowWidth = this._getWindowWidth();
      var windowHeight = this._getWindowHeight();
      if (!util.isSmartPhone()) {
        return 1 / item.scale;
      }
      if (item.width > item.height) {
        return windowHeight / (item.height * item.scale);
      }
      return windowWidth / (item.width * item.scale);
    }
  }, {
    key: '_makeBound',
    value: function _makeBound(item) {
      var width = item.width * item.scale * this.data.scaleSize;
      var height = item.height * item.scale * this.data.scaleSize;
      var minX = void 0;
      var minY = void 0;
      var maxX = void 0;
      var maxY = void 0;
      var windowWidth = this._getWindowWidth();
      var windowHeight = this._getWindowHeight();
      if (windowWidth > width) {
        maxX = (windowWidth - width) / 2;
        minX = -1 * maxX;
      } else {
        maxX = (width - windowWidth) / 2;
        minX = -1 * maxX;
      }
      if (windowHeight > height) {
        maxY = (windowHeight - height) / 2;
        minY = -1 * maxY;
      } else {
        maxY = (height - windowHeight) / 2;
        minY = -1 * maxY;
      }
      return {
        minX: this._round(minX, 6) * this.data.scaleSize,
        minY: this._round(minY, 6) * this.data.scaleSize,
        maxX: this._round(maxX, 6) * this.data.scaleSize,
        maxY: this._round(maxY, 6) * this.data.scaleSize
      };
    }
  }, {
    key: '_registerElasticForce',
    value: function _registerElasticForce(x, y) {
      var _this13 = this;

      var item = this._getSelectedItem();
      var bound = this._makeBound(item);
      this.data.elastic = true;
      if (x === 1) {
        this.data.photoPosX = bound.minX;
      } else if (x === -1) {
        this.data.photoPosX = bound.maxX;
      }
      if (y === 1) {
        this.data.photoPosY = bound.minY;
      } else if (y === -1) {
        this.data.photoPosY = bound.maxY;
      }
      this._photoUpdate();
      setTimeout(function () {
        _this13.data.elastic = false;
        _this13._photoUpdate();
      }, 300);
    }
  }, {
    key: '_getSelectedItem',
    value: function _getSelectedItem() {
      var data = this.data;
      var index = data.currentIndex;
      return data.group[data.currentGroup][index];
    }
  }, {
    key: '_getUniqId',
    value: function _getUniqId() {
      return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    }
  }, {
    key: '_getDistance',
    value: function _getDistance(point1, point2) {
      var x = point1.x - point2.x;
      var y = point1.y - point2.y;
      return Math.sqrt(x * x + y * y);
    }
  }, {
    key: '_round',
    value: function _round(val, precision) {
      var digit = Math.pow(10, precision);
      val *= digit;
      val = Math.round(val);
      val /= digit;
      return val;
    }
  }, {
    key: '_isTouched',
    value: function _isTouched(e) {
      if (e && e.touches) {
        return true;
      }
      return false;
    }
  }, {
    key: '_isGestured',
    value: function _isGestured(e) {
      if (e && e.touches && e.touches.length > 1) {
        return true;
      }
      return false;
    }
  }, {
    key: '_isSmartPhone',
    value: function _isSmartPhone() {
      var agent = navigator.userAgent;
      if (agent.indexOf('iPhone') > 0 || agent.indexOf('iPad') > 0 || agent.indexOf('ipod') > 0 || agent.indexOf('Android') > 0) {
        return true;
      }
      return false;
    }
  }, {
    key: '_calcGravity',
    value: function _calcGravity(gamma, beta) {
      if (gamma > 5 || gamma < -5) {
        this.vx += gamma * 0.05;
      }
      if (this.data.verticalGravity === false) {
        return;
      }
      if (beta > 5 || beta < -5) {
        this.vy += beta * 0.05;
      }
    }
  }, {
    key: '_photoUpdate',
    value: function _photoUpdate() {
      var classNames = this.data.classNames;
      var current = this._getElementByQuery('.current');
      var img = current.querySelector('.' + classNames.smartPhotoImg);
      var nav = this._getElementByQuery('.' + classNames.smartPhotoNav);
      var arrows = this._getElementByQuery('.' + classNames.smartPhotoArrows);
      var photoPosX = this.virtualPos(this.data.photoPosX);
      var photoPosY = this.virtualPos(this.data.photoPosY);
      var scaleSize = this.data.scaleSize;
      var transform = 'translate(' + photoPosX + 'px,' + photoPosY + 'px) scale(' + scaleSize + ')';

      img.style.transform = transform;
      if (this.data.scale) {
        util.addClass(img, classNames.smartPhotoImgOnMove);
      } else {
        util.removeClass(img, classNames.smartPhotoImgOnMove);
      }
      if (this.data.elastic) {
        util.addClass(img, classNames.smartPhotoImgElasticMove);
      } else {
        util.removeClass(img, classNames.smartPhotoImgElasticMove);
      }
      if (this.data.hideUi) {
        if (nav) {
          nav.setAttribute('aria-hidden', 'true');
        }
        if (arrows) {
          arrows.setAttribute('aria-hidden', 'true');
        }
      } else {
        if (nav) {
          nav.setAttribute('aria-hidden', 'false');
        }
        if (arrows) {
          arrows.setAttribute('aria-hidden', 'false');
        }
      }
    }
  }, {
    key: '_getWindowWidth',
    value: function _getWindowWidth() {
      if (document && document.documentElement) {
        return document.documentElement.clientWidth;
      } else if (window && window.innerWidth) {
        return window.innerWidth;
      }
      return 0;
    }
  }, {
    key: '_getWindowHeight',
    value: function _getWindowHeight() {
      if (document && document.documentElement) {
        return document.documentElement.clientHeight;
      } else if (window && window.innerHeight) {
        return window.innerHeight;
      }
      return 0;
    }
  }, {
    key: '_listUpdate',
    value: function _listUpdate() {
      var classNames = this.data.classNames;
      var list = this._getElementByQuery('.' + classNames.smartPhotoList);
      var transform = 'translate(' + this.data.translateX + 'px,' + this.data.translateY + 'px)';
      list.style.transform = transform;
      // $list
      if (this.data.onMoveClass) {
        util.addClass(list, classNames.smartPhotoListOnMove);
      } else {
        util.removeClass(list, classNames.smartPhotoListOnMove);
      }
    }
  }, {
    key: '_fireEvent',
    value: function _fireEvent(eventName) {
      var photo = this._getElementByClass(this.data.classNames.smartPhoto);
      util.triggerEvent(photo, eventName);
    }
  }, {
    key: '_doAnim',
    value: function _doAnim() {
      if (this.isBeingZoomed || this.isSwipable || this.photoSwipable || this.data.elastic || !this.data.scale) {
        return;
      }
      this.data.photoPosX += this.vx;
      this.data.photoPosY += this.vy;
      var item = this._getSelectedItem();
      var bound = this._makeBound(item);
      if (this.data.photoPosX < bound.minX) {
        this.data.photoPosX = bound.minX;
        this.vx *= -0.2;
      } else if (this.data.photoPosX > bound.maxX) {
        this.data.photoPosX = bound.maxX;
        this.vx *= -0.2;
      }
      if (this.data.photoPosY < bound.minY) {
        this.data.photoPosY = bound.minY;
        this.vy *= -0.2;
      } else if (this.data.photoPosY > bound.maxY) {
        this.data.photoPosY = bound.maxY;
        this.vy *= -0.2;
      }
      var power = this._getForceAndTheta(this.vx, this.vy);
      var force = power.force;
      var theta = power.theta;
      force -= this.data.registance;
      if (Math.abs(force) < 0.5) {
        return;
      }
      this.vx = Math.cos(theta) * force;
      this.vy = Math.sin(theta) * force;
      this._photoUpdate();
    }
  }]);

  return SmartPhoto;
}(_aTemplate2.default);

exports.default = SmartPhoto;
module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(26);

var _morphdom = __webpack_require__(27);

var _morphdom2 = _interopRequireDefault(_morphdom);

var _util = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventType = 'input paste copy click change keydown keyup keypress contextmenu mouseup mousedown mousemove touchstart touchend touchmove compositionstart compositionend focus';
var bindType = 'input change click';
var dataAction = eventType.replace(/([a-z]+)/g, '[data-action-$1],') + '[data-action]';

var aTemplate = function () {
  function aTemplate(opt) {
    var _this = this;

    _classCallCheck(this, aTemplate);

    this.atemplate = [];
    if (opt) {
      Object.keys(opt).forEach(function (key) {
        _this[key] = opt[key];
      });
    }
    if (!this.data) {
      this.data = {};
    }
    if (!this.templates) {
      this.templates = [];
    }
    var templates = this.templates;
    var length = templates.length;
    for (var i = 0, n = length; i < n; i += 1) {
      var template = this.templates[i];
      var html = (0, _util.selector)('#' + template).innerHTML;
      this.atemplate.push({ id: template, html: html, binded: false });
    }
  }

  _createClass(aTemplate, [{
    key: 'addDataBind',
    value: function addDataBind(ele) {
      var _this2 = this;

      (0, _util.on)(ele, '[data-bind]', bindType, function (e) {
        var target = e.delegateTarget;
        var data = target.getAttribute('data-bind');
        var attr = target.getAttribute('href');
        var value = target.value;
        if (attr) {
          value = value.replace('#', '');
        }
        if (target.getAttribute('type') === 'checkbox') {
          (function () {
            var arr = [];
            var items = document.querySelectorAll('[data-bind="' + data + '"]');
            [].forEach.call(items, function (item) {
              if (item.checked) {
                arr.push(item.value);
              }
            });
          })();
        } else if (target.getAttribute('type') !== 'radio') {
          _this2.updateDataByString(data, value);
        }
      });
    }
  }, {
    key: 'addActionBind',
    value: function addActionBind(ele) {
      var _this3 = this;

      (0, _util.on)(ele, dataAction, eventType, function (e) {
        var target = e.delegateTarget;
        var events = eventType.split(' ');
        var action = 'action';
        events.forEach(function (event) {
          if (target.getAttribute('data-action-' + event)) {
            if (e.type === event) {
              action += '-' + event;
            }
          }
        });
        var string = target.getAttribute('data-' + action);
        if (!string) {
          return;
        }
        var method = string.replace(/\(.*?\);?/, '');
        var parameter = string.replace(/(.*?)\((.*?)\);?/, '$2');
        var pts = parameter.split(','); // 引き数
        _this3.e = e;
        if (_this3.method && _this3.method[method]) {
          var _method;

          (_method = _this3.method)[method].apply(_method, _toConsumableArray(pts));
        } else if (_this3[method]) {
          _this3[method].apply(_this3, _toConsumableArray(pts));
        }
      });
    }
  }, {
    key: 'addTemplate',
    value: function addTemplate(id, html) {
      this.atemplate.push({ id: id, html: html, binded: false });
      this.templates.push(id);
    }

    // loadHtml() {
    //   const templates = this.templates;
    //   const promises = [];
    //   templates.forEach((template) => {
    //     const d = new $.Deferred();
    //     promises.push(d);
    //     const src = selector(`#${template}`).getAttribute('src');
    //     $.ajax({
    //       url: src,
    //       type: 'GET',
    //       dataType: 'text'
    //     }).success((data) => {
    //       selector(`#${template}`).innerHTML = data;
    //       d.resolve();
    //     });
    //   });
    //   return $.when(...promises);
    // }

  }, {
    key: 'getData',
    value: function getData() {
      return JSON.parse(JSON.stringify(this.data));
    }
  }, {
    key: 'saveData',
    value: function saveData(key) {
      var data = JSON.stringify(this.data);
      localStorage.setItem(key, data);
    }
  }, {
    key: 'setData',
    value: function setData(opt) {
      var _this4 = this;

      Object.keys(opt).forEach(function (key) {
        if (typeof opt[key] !== 'function') {
          _this4.data[key] = opt[key];
        }
      });
    }
  }, {
    key: 'loadData',
    value: function loadData(key) {
      var data = JSON.parse(localStorage.getItem(key));
      if (data) {
        this.setData(data);
      }
    }
  }, {
    key: 'getRand',
    value: function getRand(a, b) {
      return ~~(Math.random() * (b - a + 1)) + a;
    }
  }, {
    key: 'getRandText',
    value: function getRandText(limit) {
      var ret = '';
      var strings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var length = strings.length;
      for (var i = 0; i < limit; i += 1) {
        ret += strings.charAt(Math.floor(this.getRand(0, length)));
      }
      return ret;
    }
  }, {
    key: 'getDataFromObj',
    value: function getDataFromObj(s, o) {
      s = s.replace(/\[([\w\-\.ぁ-んァ-ヶ亜-熙]+)\]/g, '.$1'); // convert indexes to properties
      s = s.replace(/^\./, ''); // strip leading dot
      var a = s.split('.');
      while (a.length) {
        var n = a.shift();
        if (n in o) {
          o = o[n];
        } else {
          return null;
        }
      }
      return o;
    }
  }, {
    key: 'getDataByString',
    value: function getDataByString(s) {
      var o = this.data;
      return this.getDataFromObj(s, o);
    }
  }, {
    key: 'updateDataByString',
    value: function updateDataByString(path, newValue) {
      var object = this.data;
      var stack = path.split('.');
      while (stack.length > 1) {
        object = object[stack.shift()];
      }
      object[stack.shift()] = newValue;
    }
  }, {
    key: 'removeDataByString',
    value: function removeDataByString(path) {
      var object = this.data;
      var stack = path.split('.');
      while (stack.length > 1) {
        object = object[stack.shift()];
      }
      var shift = stack.shift();
      if (shift.match(/^\d+$/)) {
        object.splice(Number(shift), 1);
      } else {
        delete object[shift];
      }
    }
  }, {
    key: 'resolveBlock',
    value: function resolveBlock(html, item, i) {
      var that = this;
      var touchs = html.match(/<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+):touch#([\w\-\.ぁ-んァ-ヶ亜-熙]+) -->/g);
      var touchnots = html.match(/<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+):touchnot#([\w\-\.ぁ-んァ-ヶ亜-熙]+) -->/g);
      var exists = html.match(/<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+):exist -->/g);
      var empties = html.match(/<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+):empty -->/g);
      /* タッチブロック解決*/
      if (touchs) {
        for (var k = 0, n = touchs.length; k < n; k += 1) {
          var start = touchs[k];
          start = start.replace(/([\w\-\.ぁ-んァ-ヶ亜-熙]+):touch#([\w\-\.ぁ-んァ-ヶ亜-熙]+)/, '($1):touch#($2)');
          var end = start.replace(/BEGIN/, 'END');
          var reg = new RegExp(start + '(([\\n\\r\\t]|.)*?)' + end, 'g');
          html = html.replace(reg, function (m, key2, val, next) {
            var itemkey = typeof item[key2] === 'function' ? item[key2].apply(that) : that.getDataFromObj(key2, item);
            if ('' + itemkey === val) {
              return next;
            }
            return '';
          });
        }
      }
      /* タッチノットブロック解決*/
      if (touchnots) {
        for (var _k = 0, _n = touchnots.length; _k < _n; _k += 1) {
          var _start = touchnots[_k];
          _start = _start.replace(/([\w\-\.ぁ-んァ-ヶ亜-熙]+):touchnot#([\w\-\.ぁ-んァ-ヶ亜-熙]+)/, '($1):touchnot#($2)');
          var _end = _start.replace(/BEGIN/, 'END');
          var _reg = new RegExp(_start + '(([\\n\\r\\t]|.)*?)' + _end, 'g');
          html = html.replace(_reg, function (m, key2, val, next) {
            var itemkey = typeof item[key2] === 'function' ? item[key2].apply(that) : that.getDataFromObj(key2, item);
            if ('' + itemkey !== val) {
              return next;
            }
            return '';
          });
        }
      }
      /* existブロックを解決*/
      if (exists) {
        for (var _k2 = 0, _n2 = exists.length; _k2 < _n2; _k2 += 1) {
          var _start2 = exists[_k2];
          _start2 = _start2.replace(/([\w\-\.ぁ-んァ-ヶ亜-熙]+):exist/, '($1):exist');
          var _end2 = _start2.replace(/BEGIN/, 'END');
          var _reg2 = new RegExp(_start2 + '(([\\n\\r\\t]|.)*?)' + _end2, 'g');
          html = html.replace(_reg2, function (m, key2, next) {
            var itemkey = typeof item[key2] === 'function' ? item[key2].apply(that) : that.getDataFromObj(key2, item);
            if (itemkey || itemkey === 0) {
              return next;
            }
            return '';
          });
        }
      }
      /* emptyブロックを解決*/
      if (empties) {
        for (var _k3 = 0, _n3 = empties.length; _k3 < _n3; _k3 += 1) {
          var _start3 = empties[_k3];
          _start3 = _start3.replace(/([\w\-\.ぁ-んァ-ヶ亜-熙]+):empty/, '($1):empty');
          var _end3 = _start3.replace(/BEGIN/, 'END');
          var empty = new RegExp(_start3 + '(([\\n\\r\\t]|.)*?)' + _end3, 'g');
          html = html.replace(empty, function (m, key2, next) {
            var itemkey = typeof item[key2] === 'function' ? item[key2].apply(that) : that.getDataFromObj(key2, item);
            if (!itemkey && itemkey !== 0) {
              return next;
            }
            return '';
          });
        }
      }
      /* 変数解決*/
      html = html.replace(/{([\w\-\.ぁ-んァ-ヶ亜-熙]+)}(\[([\w\-\.ぁ-んァ-ヶ亜-熙]+)\])*/g, function (n, key3, key4, converter) {
        var data = void 0;
        if ('' + key3 === 'i') {
          data = i;
        } else if (item[key3] || item[key3] === 0) {
          if (typeof item[key3] === 'function') {
            data = item[key3].apply(that);
          } else {
            data = item[key3];
          }
        } else {
          if (converter && that.convert && that.convert[converter]) {
            return that.convert[converter].call(that, '');
          }
          return '';
        }
        if (converter && that.convert && that.convert[converter]) {
          return that.convert[converter].call(that, data);
        }
        return data;
      });
      return html;
    }
    /* 絶対パス形式の変数を解決*/

  }, {
    key: 'resolveAbsBlock',
    value: function resolveAbsBlock(html) {
      var that = this;
      html = html.replace(/{(.*?)}/g, function (n, key3) {
        var data = that.getDataByString(key3);
        if (typeof data !== 'undefined') {
          if (typeof data === 'function') {
            return data.apply(that);
          }
          return data;
        }
        return n;
      });
      return html;
    }
  }, {
    key: 'resolveInclude',
    value: function resolveInclude(html) {
      var include = /<!-- #include id="(.*?)" -->/g;
      html = html.replace(include, function (m, key) {
        return (0, _util.selector)('#' + key).innerHTML;
      });
      return html;
    }
  }, {
    key: 'resolveWith',
    value: function resolveWith(html) {
      var width = /<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+):with -->(([\n\r\t]|.)*?)<!-- END ([\w\-\.ぁ-んァ-ヶ亜-熙]+):with -->/g;
      html = html.replace(width, function (m, key) {
        m = m.replace(/data\-bind=['"](.*?)['"]/g, 'data-bind=\'' + key + '.$1\'');
        return m;
      });
      return html;
    }
  }, {
    key: 'resolveLoop',
    value: function resolveLoop(html) {
      var loop = /<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+?):loop -->(([\n\r\t]|.)*?)<!-- END ([\w\-\.ぁ-んァ-ヶ亜-熙]+?):loop -->/g;
      var that = this;
      /* ループ文解決*/
      html = html.replace(loop, function (m, key, val) {
        var keyItem = that.getDataByString(key);
        var keys = [];
        if (typeof keyItem === 'function') {
          keys = keyItem.apply(that);
        } else {
          keys = keyItem;
        }
        var ret = '';
        if (keys instanceof Array) {
          for (var i = 0, n = keys.length; i < n; i += 1) {
            ret += that.resolveBlock(val, keys[i], i);
          }
        }
        /* エスケープ削除*/
        ret = ret.replace(/\\([^\\])/g, '$1');
        return ret;
      });
      return html;
    }
  }, {
    key: 'removeData',
    value: function removeData(arr) {
      var data = this.data;
      Object.keys(data).forEach(function (i) {
        for (var t = 0, n = arr.length; t < n; t += 1) {
          if (i === arr[t]) {
            delete data[i];
          }
        }
      });
      return this;
    }
  }, {
    key: 'hasLoop',
    value: function hasLoop(txt) {
      var loop = /<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+?):loop -->(([\n\r\t]|.)*?)<!-- END ([\w\-\.ぁ-んァ-ヶ亜-熙]+?):loop -->/g;
      if (txt.match(loop)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'getHtml',
    value: function getHtml(query, row) {
      var template = this.atemplate.find(function (item) {
        return item.id === query;
      });
      var html = '';
      if (template && template.html) {
        html = template.html;
      }
      if (row) {
        html = query;
      }
      if (!html) {
        return '';
      }
      var data = this.data;
      /* インクルード解決*/
      html = this.resolveInclude(html);
      /* with解決*/
      html = this.resolveWith(html);
      /* ループ解決*/
      while (this.hasLoop(html)) {
        html = this.resolveLoop(html);
      }
      /* 変数解決*/
      html = this.resolveBlock(html, data);
      /* エスケープ削除*/
      html = html.replace(/\\([^\\])/g, '$1');
      /* 絶対パスで指定された変数を解決*/
      html = this.resolveAbsBlock(html);
      /* 空行削除*/
      return html.replace(/^([\t ])*\n/gm, '');
    }
  }, {
    key: 'update',
    value: function update() {
      var _this5 = this;

      var renderWay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'html';
      var part = arguments[1];

      var templates = this.templates;
      if (this.beforeUpdated) {
        this.beforeUpdated();
      }

      var _loop = function _loop(i, n) {
        var tem = templates[i];
        var query = '#' + tem;
        var html = _this5.getHtml(tem);
        var target = (0, _util.selector)('[data-id=\'' + tem + '\']');
        if (!target) {
          (0, _util.selector)(query).insertAdjacentHTML('afterend', '<div data-id="' + tem + '"></div>');
          if (renderWay === 'text') {
            (0, _util.selector)('[data-id=\'' + tem + '\']').innerText = html;
          } else {
            (0, _util.selector)('[data-id=\'' + tem + '\']').innerHTML = html;
          }
        } else if (renderWay === 'text') {
          target.innerText = html;
        } else if (part) {
          var doc = document.createElement('div');
          doc.innerHTML = html;
          var partHtml = doc.querySelector(part).outerHTML;
          (0, _morphdom2.default)(target.querySelector(part), partHtml);
        } else {
          (0, _morphdom2.default)(target, '<div data-id=\'' + tem + '\'>' + html + '</div>');
        }
        var template = _this5.atemplate.find(function (item) {
          return item.id === tem;
        });
        if (!template.binded) {
          template.binded = true;
          _this5.addDataBind((0, _util.selector)('[data-id=\'' + tem + '\']'));
          _this5.addActionBind((0, _util.selector)('[data-id=\'' + tem + '\']'));
        }
      };

      for (var i = 0, n = templates.length; i < n; i += 1) {
        _loop(i, n);
      }
      this.updateBindingData(part);
      if (this.onUpdated) {
        this.onUpdated(part);
      }
      return this;
    }
  }, {
    key: 'updateBindingData',
    value: function updateBindingData(part) {
      var _this6 = this;

      var templates = this.templates;
      for (var i = 0, n = templates.length; i < n; i += 1) {
        var temp = templates[i];
        var _template = (0, _util.selector)('[data-id=\'' + temp + '\']');
        if (part) {
          _template = _template.querySelector(part);
        }
        var binds = _template.querySelectorAll('[data-bind]');
        [].forEach.call(binds, function (item) {
          var data = _this6.getDataByString(item.getAttribute('data-bind'));
          if (item.getAttribute('type') === 'checkbox' || item.getAttribute('type') === 'radio') {
            if (data === item.value) {
              item.checked = true;
            }
          } else {
            // if(item !== document.activeElement) {
            item.value = data;
            // }
          }
        });
        var onewaybinds = _template.querySelectorAll('[data-bind-oneway]');
        [].forEach.call(onewaybinds, function (item) {
          var data = _this6.getDataByString(item.getAttribute('data-bind-oneway'));
          if (item.getAttribute('type') === 'checkbox' || item.getAttribute('type') === 'radio') {
            if (data === item.value) {
              item.checked = true;
            }
          } else {
            // if(item !== document.activeElement) {
            item.value = data;
            // }
          }
        });
      }
      return this;
    }
  }, {
    key: 'applyMethod',
    value: function applyMethod(method) {
      var _method2;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_method2 = this.method)[method].apply(_method2, args);
    }
  }, {
    key: 'getComputedProp',
    value: function getComputedProp(prop) {
      return this.data[prop].apply(this);
    }
  }, {
    key: 'remove',
    value: function remove(path) {
      var object = this.data;
      var stack = path.split('.');
      while (stack.length > 1) {
        object = object[stack.shift()];
      }
      var shift = stack.shift();
      if (shift.match(/^\d+$/)) {
        object.splice(Number(shift), 1);
      } else {
        delete object[shift];
      }
      return this;
    }
  }]);

  return aTemplate;
}();

exports.default = aTemplate;
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {

            if (this == null) {
                throw new TypeError('this is null or not defined');
            }

            var obj = Object(this);
            var len = obj.length >>> 0;

            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            var thisArg = arguments[1];

            var index = 0;

            while (index < len) {
                var iValue = obj[index];
                if (predicate.call(thisArg, iValue, index, obj)) {
                    return iValue;
                }
                index++;
            }

            return undefined;
        }
    });
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function morphAttrs(fromNode, toNode) {
    var attrs = toNode.attributes;
    var i;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;

    // update attributes on original DOM element
    for (i = attrs.length - 1; i >= 0; --i) {
        attr = attrs[i];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;
        attrValue = attr.value;

        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

            if (fromValue !== attrValue) {
                fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            }
        } else {
            fromValue = fromNode.getAttribute(attrName);

            if (fromValue !== attrValue) {
                fromNode.setAttribute(attrName, attrValue);
            }
        }
    }

    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    attrs = fromNode.attributes;

    for (i = attrs.length - 1; i >= 0; --i) {
        attr = attrs[i];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;

            if (attrNamespaceURI) {
                attrName = attr.localName || attrName;

                if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
                    fromNode.removeAttributeNS(attrNamespaceURI, attrName);
                }
            } else {
                if (!toNode.hasAttribute(attrName)) {
                    fromNode.removeAttribute(attrName);
                }
            }
        }
    }
}

var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';

var doc = typeof document === 'undefined' ? undefined : document;

/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */
function toElement(str) {
    if (!range && doc.createRange) {
        range = doc.createRange();
    }

    var fragment;
    if (range && range.createContextualFragment) {
        fragment = range.createContextualFragment(str);
    } else {
        fragment = doc.createElement('body');
        fragment.innerHTML = str;
    }
    return fragment.childNodes[0];
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;

    if (fromNodeName === toNodeName) {
        return true;
    }

    if (toEl.actualize &&
        fromNodeName.charCodeAt(0) < 91 && /* from tag name is upper case */
        toNodeName.charCodeAt(0) > 90 /* target tag name is lower case */) {
        // If the target element is a virtual DOM node then we may need to normalize the tag name
        // before comparing. Normal HTML elements that are in the "http://www.w3.org/1999/xhtml"
        // are converted to upper case
        return fromNodeName === toNodeName.toUpperCase();
    } else {
        return false;
    }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ?
        doc.createElement(name) :
        doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
        fromEl[name] = toEl[name];
        if (fromEl[name]) {
            fromEl.setAttribute(name, '');
        } else {
            fromEl.removeAttribute(name);
        }
    }
}

var specialElHandlers = {
    OPTION: function(fromEl, toEl) {
        var parentNode = fromEl.parentNode;
        if (parentNode) {
            var parentName = parentNode.nodeName.toUpperCase();
            if (parentName === 'OPTGROUP') {
                parentNode = parentNode.parentNode;
                parentName = parentNode && parentNode.nodeName.toUpperCase();
            }
            if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
                if (fromEl.hasAttribute('selected') && !toEl.selected) {
                    // Workaround for MS Edge bug where the 'selected' attribute can only be
                    // removed if set to a non-empty value:
                    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
                    fromEl.setAttribute('selected', 'selected');
                    fromEl.removeAttribute('selected');
                }
                // We have to reset select element's selectedIndex to -1, otherwise setting
                // fromEl.selected using the syncBooleanAttrProp below has no effect.
                // The correct selectedIndex will be set in the SELECT special handler below.
                parentNode.selectedIndex = -1;
            }
        }
        syncBooleanAttrProp(fromEl, toEl, 'selected');
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */
    INPUT: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'checked');
        syncBooleanAttrProp(fromEl, toEl, 'disabled');

        if (fromEl.value !== toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!toEl.hasAttribute('value')) {
            fromEl.removeAttribute('value');
        }
    },

    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value !== newValue) {
            fromEl.value = newValue;
        }

        var firstChild = fromEl.firstChild;
        if (firstChild) {
            // Needed for IE. Apparently IE sets the placeholder as the
            // node value and vise versa. This ignores an empty update.
            var oldValue = firstChild.nodeValue;

            if (oldValue == newValue || (!newValue && oldValue == fromEl.placeholder)) {
                return;
            }

            firstChild.nodeValue = newValue;
        }
    },
    SELECT: function(fromEl, toEl) {
        if (!toEl.hasAttribute('multiple')) {
            var selectedIndex = -1;
            var i = 0;
            // We have to loop through children of fromEl, not toEl since nodes can be moved
            // from toEl to fromEl directly when morphing.
            // At the time this special handler is invoked, all children have already been morphed
            // and appended to / removed from fromEl, so using fromEl here is safe and correct.
            var curChild = fromEl.firstChild;
            var optgroup;
            var nodeName;
            while(curChild) {
                nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
                if (nodeName === 'OPTGROUP') {
                    optgroup = curChild;
                    curChild = optgroup.firstChild;
                } else {
                    if (nodeName === 'OPTION') {
                        if (curChild.hasAttribute('selected')) {
                            selectedIndex = i;
                            break;
                        }
                        i++;
                    }
                    curChild = curChild.nextSibling;
                    if (!curChild && optgroup) {
                        curChild = optgroup.nextSibling;
                        optgroup = null;
                    }
                }
            }

            fromEl.selectedIndex = selectedIndex;
        }
    }
};

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

function noop() {}

function defaultGetNodeKey(node) {
    return node.id;
}

function morphdomFactory(morphAttrs) {

    return function morphdom(fromNode, toNode, options) {
        if (!options) {
            options = {};
        }

        if (typeof toNode === 'string') {
            if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
                var toNodeHtml = toNode;
                toNode = doc.createElement('html');
                toNode.innerHTML = toNodeHtml;
            } else {
                toNode = toElement(toNode);
            }
        }

        var getNodeKey = options.getNodeKey || defaultGetNodeKey;
        var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
        var onNodeAdded = options.onNodeAdded || noop;
        var onBeforeElUpdated = options.onBeforeElUpdated || noop;
        var onElUpdated = options.onElUpdated || noop;
        var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
        var onNodeDiscarded = options.onNodeDiscarded || noop;
        var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
        var childrenOnly = options.childrenOnly === true;

        // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
        var fromNodesLookup = {};
        var keyedRemovalList;

        function addKeyedRemoval(key) {
            if (keyedRemovalList) {
                keyedRemovalList.push(key);
            } else {
                keyedRemovalList = [key];
            }
        }

        function walkDiscardedChildNodes(node, skipKeyedNodes) {
            if (node.nodeType === ELEMENT_NODE) {
                var curChild = node.firstChild;
                while (curChild) {

                    var key = undefined;

                    if (skipKeyedNodes && (key = getNodeKey(curChild))) {
                        // If we are skipping keyed nodes then we add the key
                        // to a list so that it can be handled at the very end.
                        addKeyedRemoval(key);
                    } else {
                        // Only report the node as discarded if it is not keyed. We do this because
                        // at the end we loop through all keyed elements that were unmatched
                        // and then discard them in one final pass.
                        onNodeDiscarded(curChild);
                        if (curChild.firstChild) {
                            walkDiscardedChildNodes(curChild, skipKeyedNodes);
                        }
                    }

                    curChild = curChild.nextSibling;
                }
            }
        }

        /**
         * Removes a DOM node out of the original DOM
         *
         * @param  {Node} node The node to remove
         * @param  {Node} parentNode The nodes parent
         * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
         * @return {undefined}
         */
        function removeNode(node, parentNode, skipKeyedNodes) {
            if (onBeforeNodeDiscarded(node) === false) {
                return;
            }

            if (parentNode) {
                parentNode.removeChild(node);
            }

            onNodeDiscarded(node);
            walkDiscardedChildNodes(node, skipKeyedNodes);
        }

        // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
        // function indexTree(root) {
        //     var treeWalker = document.createTreeWalker(
        //         root,
        //         NodeFilter.SHOW_ELEMENT);
        //
        //     var el;
        //     while((el = treeWalker.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
        //
        // function indexTree(node) {
        //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
        //     var el;
        //     while((el = nodeIterator.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        function indexTree(node) {
            if (node.nodeType === ELEMENT_NODE) {
                var curChild = node.firstChild;
                while (curChild) {
                    var key = getNodeKey(curChild);
                    if (key) {
                        fromNodesLookup[key] = curChild;
                    }

                    // Walk recursively
                    indexTree(curChild);

                    curChild = curChild.nextSibling;
                }
            }
        }

        indexTree(fromNode);

        function handleNodeAdded(el) {
            onNodeAdded(el);

            var curChild = el.firstChild;
            while (curChild) {
                var nextSibling = curChild.nextSibling;

                var key = getNodeKey(curChild);
                if (key) {
                    var unmatchedFromEl = fromNodesLookup[key];
                    if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
                        curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
                        morphChildren(unmatchedFromEl, curChild);
                    }
                }

                handleNodeAdded(curChild);
                curChild = nextSibling;
            }
        }

        function morphChildren(fromEl, toEl, childrenOnly) {
            var toElKey = getNodeKey(toEl);
            var curFromNodeKey;

            if (toElKey) {
                // If an element with an ID is being morphed then it will be in the final
                // DOM so clear it out of the saved elements collection
                delete fromNodesLookup[toElKey];
            }

            if (toNode.isSameNode && toNode.isSameNode(fromNode)) {
                return;
            }

            if (!childrenOnly) {
                // optional
                if (onBeforeElUpdated(fromEl, toEl) === false) {
                    return;
                }

                // update attributes on original DOM element first
                morphAttrs(fromEl, toEl);
                // optional
                onElUpdated(fromEl);

                if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
                    return;
                }
            }

            if (fromEl.nodeName !== 'TEXTAREA') {
                var curToNodeChild = toEl.firstChild;
                var curFromNodeChild = fromEl.firstChild;
                var curToNodeKey;

                var fromNextSibling;
                var toNextSibling;
                var matchingFromEl;

                // walk the children
                outer: while (curToNodeChild) {
                    toNextSibling = curToNodeChild.nextSibling;
                    curToNodeKey = getNodeKey(curToNodeChild);

                    // walk the fromNode children all the way through
                    while (curFromNodeChild) {
                        fromNextSibling = curFromNodeChild.nextSibling;

                        if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }

                        curFromNodeKey = getNodeKey(curFromNodeChild);

                        var curFromNodeType = curFromNodeChild.nodeType;

                        var isCompatible = undefined;

                        if (curFromNodeType === curToNodeChild.nodeType) {
                            if (curFromNodeType === ELEMENT_NODE) {
                                // Both nodes being compared are Element nodes

                                if (curToNodeKey) {
                                    // The target node has a key so we want to match it up with the correct element
                                    // in the original DOM tree
                                    if (curToNodeKey !== curFromNodeKey) {
                                        // The current element in the original DOM tree does not have a matching key so
                                        // let's check our lookup to see if there is a matching element in the original
                                        // DOM tree
                                        if ((matchingFromEl = fromNodesLookup[curToNodeKey])) {
                                            if (fromNextSibling === matchingFromEl) {
                                                // Special case for single element removals. To avoid removing the original
                                                // DOM node out of the tree (since that can break CSS transitions, etc.),
                                                // we will instead discard the current node and wait until the next
                                                // iteration to properly match up the keyed target element with its matching
                                                // element in the original tree
                                                isCompatible = false;
                                            } else {
                                                // We found a matching keyed element somewhere in the original DOM tree.
                                                // Let's move the original DOM node into the current position and morph
                                                // it.

                                                // NOTE: We use insertBefore instead of replaceChild because we want to go through
                                                // the `removeNode()` function for the node that is being discarded so that
                                                // all lifecycle hooks are correctly invoked
                                                fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                                                // fromNextSibling = curFromNodeChild.nextSibling;

                                                if (curFromNodeKey) {
                                                    // Since the node is keyed it might be matched up later so we defer
                                                    // the actual removal to later
                                                    addKeyedRemoval(curFromNodeKey);
                                                } else {
                                                    // NOTE: we skip nested keyed nodes from being removed since there is
                                                    //       still a chance they will be matched up later
                                                    removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                                                }

                                                curFromNodeChild = matchingFromEl;
                                            }
                                        } else {
                                            // The nodes are not compatible since the "to" node has a key and there
                                            // is no matching keyed node in the source tree
                                            isCompatible = false;
                                        }
                                    }
                                } else if (curFromNodeKey) {
                                    // The original has a key
                                    isCompatible = false;
                                }

                                isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                                if (isCompatible) {
                                    // We found compatible DOM elements so transform
                                    // the current "from" node to match the current
                                    // target DOM node.
                                    // MORPH
                                    morphChildren(curFromNodeChild, curToNodeChild);
                                }

                            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                                // Both nodes being compared are Text or Comment nodes
                                isCompatible = true;
                                // Simply update nodeValue on the original node to
                                // change the text value
                                if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                                    curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                                }

                            }
                        }

                        if (isCompatible) {
                            // Advance both the "to" child and the "from" child since we found a match
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }

                        // No compatible match so remove the old node from the DOM and continue trying to find a
                        // match in the original DOM. However, we only do this if the from node is not keyed
                        // since it is possible that a keyed node might match up with a node somewhere else in the
                        // target tree and we don't want to discard it just yet since it still might find a
                        // home in the final DOM tree. After everything is done we will remove any keyed nodes
                        // that didn't find a home
                        if (curFromNodeKey) {
                            // Since the node is keyed it might be matched up later so we defer
                            // the actual removal to later
                            addKeyedRemoval(curFromNodeKey);
                        } else {
                            // NOTE: we skip nested keyed nodes from being removed since there is
                            //       still a chance they will be matched up later
                            removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                        }

                        curFromNodeChild = fromNextSibling;
                    } // END: while(curFromNodeChild) {}

                    // If we got this far then we did not find a candidate match for
                    // our "to node" and we exhausted all of the children "from"
                    // nodes. Therefore, we will just append the current "to" node
                    // to the end
                    if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
                        fromEl.appendChild(matchingFromEl);
                        // MORPH
                        morphChildren(matchingFromEl, curToNodeChild);
                    } else {
                        var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
                        if (onBeforeNodeAddedResult !== false) {
                            if (onBeforeNodeAddedResult) {
                                curToNodeChild = onBeforeNodeAddedResult;
                            }

                            if (curToNodeChild.actualize) {
                                curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                            }
                            fromEl.appendChild(curToNodeChild);
                            handleNodeAdded(curToNodeChild);
                        }
                    }

                    curToNodeChild = toNextSibling;
                    curFromNodeChild = fromNextSibling;
                }

                // We have processed all of the "to nodes". If curFromNodeChild is
                // non-null then we still have some from nodes left over that need
                // to be removed
                while (curFromNodeChild) {
                    fromNextSibling = curFromNodeChild.nextSibling;
                    if ((curFromNodeKey = getNodeKey(curFromNodeChild))) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                    } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                    }
                    curFromNodeChild = fromNextSibling;
                }
            }

            var specialElHandler = specialElHandlers[fromEl.nodeName];
            if (specialElHandler) {
                specialElHandler(fromEl, toEl);
            }
        } // END: morphChildren(...)

        var morphedNode = fromNode;
        var morphedNodeType = morphedNode.nodeType;
        var toNodeType = toNode.nodeType;

        if (!childrenOnly) {
            // Handle the case where we are given two DOM nodes that are not
            // compatible (e.g. <div> --> <span> or <div> --> TEXT)
            if (morphedNodeType === ELEMENT_NODE) {
                if (toNodeType === ELEMENT_NODE) {
                    if (!compareNodeNames(fromNode, toNode)) {
                        onNodeDiscarded(fromNode);
                        morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                    }
                } else {
                    // Going from an element node to a text node
                    morphedNode = toNode;
                }
            } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) { // Text or comment node
                if (toNodeType === morphedNodeType) {
                    if (morphedNode.nodeValue !== toNode.nodeValue) {
                        morphedNode.nodeValue = toNode.nodeValue;
                    }

                    return morphedNode;
                } else {
                    // Text node to something else
                    morphedNode = toNode;
                }
            }
        }

        if (morphedNode === toNode) {
            // The "to node" was not compatible with the "from node" so we had to
            // toss out the "from node" and use the "to node"
            onNodeDiscarded(fromNode);
        } else {
            morphChildren(morphedNode, toNode, childrenOnly);

            // We now need to loop over any keyed nodes that might need to be
            // removed. We only do the removal if we know that the keyed node
            // never found a match. When a keyed node is matched up we remove
            // it out of fromNodesLookup and we use fromNodesLookup to determine
            // if a keyed node has been matched up or not
            if (keyedRemovalList) {
                for (var i=0, len=keyedRemovalList.length; i<len; i++) {
                    var elToRemove = fromNodesLookup[keyedRemovalList[i]];
                    if (elToRemove) {
                        removeNode(elToRemove, elToRemove.parentNode, false);
                    }
                }
            }
        }

        if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
            if (morphedNode.actualize) {
                morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
            }
            // If we had to swap out the from node with a new node because the old
            // node was not compatible with the target node then we need to
            // replace the old DOM node in the original DOM tree. This is only
            // possible if the original DOM node was part of a DOM tree which
            // we know is the case if it has a parent node.
            fromNode.parentNode.replaceChild(morphedNode, fromNode);
        }

        return morphedNode;
    };
}

var morphdom = morphdomFactory(morphAttrs);

/* harmony default export */ __webpack_exports__["default"] = (morphdom);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var matches = exports.matches = function matches(element, query) {
  var matches = (element.document || element.ownerDocument).querySelectorAll(query);
  var i = matches.length;
  while (--i >= 0 && matches.item(i) !== element) {}
  return i > -1;
};

var selector = exports.selector = function selector(_selector) {
  return document.querySelector(_selector);
};

var findAncestor = exports.findAncestor = function findAncestor(element, selector) {
  if (typeof element.closest === 'function') {
    return element.closest(selector) || null;
  }
  while (element && element !== document) {
    if (matches(element, selector)) {
      return element;
    }
    element = element.parentElement;
  }
  return null;
};

var on = exports.on = function on(element, query, eventNames, fn) {
  var events = eventNames.split(' ');
  events.forEach(function (event) {
    element.addEventListener(event, function (e) {
      var target = e.target;
      var delegateTarget = findAncestor(e.target, query);
      if (delegateTarget) {
        e.delegateTarget = delegateTarget;
        fn(e);
      }
    });
  });
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

try {
    var ce = new window.CustomEvent('test');
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
        // IE has problems with .preventDefault() on custom events
        // http://stackoverflow.com/questions/23349191
        throw new Error('Could not prevent default');
    }
} catch(e) {
  var CustomEvent = function(event, params) {
    var evt, origPrevent;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };

    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    origPrevent = evt.preventDefault;
    evt.preventDefault = function () {
      origPrevent.call(this);
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () {
            return true;
          }
        });
      } catch(e) {
        this.defaultPrevented = true;
      }
    };
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent; // expose definition to window
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isSmartPhone = exports.isSmartPhone = function isSmartPhone() {
  var agent = navigator.userAgent;
  if (agent.indexOf('iPhone') > 0 || agent.indexOf('iPad') > 0 || agent.indexOf('ipod') > 0 || agent.indexOf('Android') > 0) {
    return true;
  } else {
    return false;
  }
};

function deepExtend(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];
    if (!obj) {
      continue;
    }

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (_typeof(obj[key]) === 'object') out[key] = deepExtend(out[key], obj[key]);else out[key] = obj[key];
      }
    }
  }

  return out;
};

var extend = exports.extend = deepExtend;

var triggerEvent = exports.triggerEvent = function triggerEvent(el, eventName, options) {
  var event = void 0;
  if (window.CustomEvent) {
    event = new CustomEvent(eventName, { cancelable: true });
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, false, false, options);
  }
  el.dispatchEvent(event);
};

var parseQuery = exports.parseQuery = function parseQuery(query) {
  var s = query.split('&'),
      data = {},
      i = 0,
      iz = s.length,
      param,
      key,
      value;
  for (; i < iz; i++) {
    param = s[i].split('=');
    if (param[0] !== void 0) {
      key = param[0];
      value = param[1] !== void 0 ? param.slice(1).join('=') : key;
      data[key] = decodeURIComponent(value);
    }
  }
  return data;
};

var getViewPos = exports.getViewPos = function getViewPos(element) {
  return {
    left: element.getBoundingClientRect().left,
    top: element.getBoundingClientRect().top
  };
};

var removeElement = exports.removeElement = function removeElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};

var append = exports.append = function append(element, string) {
  var div = document.createElement('div');
  div.innerHTML = string;
  while (div.children.length > 0) {
    element.appendChild(div.children[0]);
  }
};

var addClass = exports.addClass = function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ' ' + className;
  }
};

var removeClass = exports.removeClass = function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

var getBrowser = exports.getBrowser = function getBrowser() {
  var ua = window.navigator.userAgent.toLowerCase();
  var ver = window.navigator.appVersion.toLowerCase();
  var name = 'unknown';

  if (ua.indexOf('msie') != -1) {
    if (ver.indexOf('msie 6.') != -1) {
      name = 'ie6';
    } else if (ver.indexOf('msie 7.') != -1) {
      name = 'ie7';
    } else if (ver.indexOf('msie 8.') != -1) {
      name = 'ie8';
    } else if (ver.indexOf('msie 9.') != -1) {
      name = 'ie9';
    } else if (ver.indexOf('msie 10.') != -1) {
      name = 'ie10';
    } else {
      name = 'ie';
    }
  } else if (ua.indexOf('trident/7') != -1) {
    name = 'ie11';
  } else if (ua.indexOf('chrome') != -1) {
    name = 'chrome';
  } else if (ua.indexOf('safari') != -1) {
    name = 'safari';
  } else if (ua.indexOf('opera') != -1) {
    name = 'opera';
  } else if (ua.indexOf('firefox') != -1) {
    name = 'firefox';
  }
  return name;
};

var isOldIE = exports.isOldIE = function isOldIE() {
  var browser = getBrowser();
  if (browser.indexOf('ie') !== -1) {
    if (parseInt(browser.replace(/[^0-9]/g, '')) <= 10) {
      return true;
    }
  }
  return false;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_RESULT__;(function(global){

//
// Check for native Promise and it has correct interface
//

var NativePromise = global['Promise'];
var nativePromiseSupported =
  NativePromise &&
  // Some of these methods are missing from
  // Firefox/Chrome experimental implementations
  'resolve' in NativePromise &&
  'reject' in NativePromise &&
  'all' in NativePromise &&
  'race' in NativePromise &&
  // Older version of the spec had a resolver object
  // as the arg rather than a function
  (function(){
    var resolve;
    new NativePromise(function(r){ resolve = r; });
    return typeof resolve === 'function';
  })();


//
// export if necessary
//

if (typeof exports !== 'undefined' && exports)
{
  // node.js
  exports.Promise = nativePromiseSupported ? NativePromise : Promise;
  exports.Polyfill = Promise;
}
else
{
  // AMD
  if (true)
  {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){
      return nativePromiseSupported ? NativePromise : Promise;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  else
  {
    // in browser add to global
    if (!nativePromiseSupported)
      global['Promise'] = Promise;
  }
}


//
// Polyfill
//

var PENDING = 'pending';
var SEALED = 'sealed';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';
var NOOP = function(){};

function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

// async calls
var asyncSetTimer = typeof setImmediate !== 'undefined' ? setImmediate : setTimeout;
var asyncQueue = [];
var asyncTimer;

function asyncFlush(){
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++)
    asyncQueue[i][0](asyncQueue[i][1]);

  // reset async asyncQueue
  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg){
  asyncQueue.push([callback, arg]);

  if (!asyncTimer)
  {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}


function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch(e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber){
  var owner = subscriber.owner;
  var settled = owner.state_;
  var value = owner.data_;  
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function')
  {
    settled = FULFILLED;
    try {
      value = callback(value);
    } catch(e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value))
  {
    if (settled === FULFILLED)
      resolve(promise, value);

    if (settled === REJECTED)
      reject(promise, value);
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value)
      throw new TypeError('A promises callback cannot return that same promise.');

    if (value && (typeof value === 'function' || typeof value === 'object'))
    {
      var then = value.then;  // then should be retrived only once

      if (typeof then === 'function')
      {
        then.call(value, function(val){
          if (!resolved)
          {
            resolved = true;

            if (value !== val)
              resolve(promise, val);
            else
              fulfill(promise, val);
          }
        }, function(reason){
          if (!resolved)
          {
            resolved = true;

            reject(promise, reason);
          }
        });

        return true;
      }
    }
  } catch (e) {
    if (!resolved)
      reject(promise, e);

    return true;
  }

  return false;
}

function resolve(promise, value){
  if (promise === value || !handleThenable(promise, value))
    fulfill(promise, value);
}

function fulfill(promise, value){
  if (promise.state_ === PENDING)
  {
    promise.state_ = SEALED;
    promise.data_ = value;

    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason){
  if (promise.state_ === PENDING)
  {
    promise.state_ = SEALED;
    promise.data_ = reason;

    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  var callbacks = promise.then_;
  promise.then_ = undefined;

  for (var i = 0; i < callbacks.length; i++) {
    invokeCallback(callbacks[i]);
  }
}

function publishFulfillment(promise){
  promise.state_ = FULFILLED;
  publish(promise);
}

function publishRejection(promise){
  promise.state_ = REJECTED;
  publish(promise);
}

/**
* @class
*/
function Promise(resolver){
  if (typeof resolver !== 'function')
    throw new TypeError('Promise constructor takes a function argument');

  if (this instanceof Promise === false)
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');

  this.then_ = [];

  invokeResolver(resolver, this);
}

Promise.prototype = {
  constructor: Promise,

  state_: PENDING,
  then_: null,
  data_: undefined,

  then: function(onFulfillment, onRejection){
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if (this.state_ === FULFILLED || this.state_ === REJECTED)
    {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    }
    else
    {
      // subscribe
      this.then_.push(subscriber);
    }

    return subscriber.then;
  },

  'catch': function(onRejection) {
    return this.then(null, onRejection);
  }
};

Promise.all = function(promises){
  var Class = this;

  if (!isArray(promises))
    throw new TypeError('You must pass an array to Promise.all().');

  return new Class(function(resolve, reject){
    var results = [];
    var remaining = 0;

    function resolver(index){
      remaining++;
      return function(value){
        results[index] = value;
        if (!--remaining)
          resolve(results);
      };
    }

    for (var i = 0, promise; i < promises.length; i++)
    {
      promise = promises[i];

      if (promise && typeof promise.then === 'function')
        promise.then(resolver(i), reject);
      else
        results[i] = promise;
    }

    if (!remaining)
      resolve(results);
  });
};

Promise.race = function(promises){
  var Class = this;

  if (!isArray(promises))
    throw new TypeError('You must pass an array to Promise.race().');

  return new Class(function(resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++)
    {
      promise = promises[i];

      if (promise && typeof promise.then === 'function')
        promise.then(resolve, reject);
      else
        resolve(promise);
    }
  });
};

Promise.resolve = function(value){
  var Class = this;

  if (value && typeof value === 'object' && value.constructor === Class)
    return value;

  return new Class(function(resolve){
    resolve(value);
  });
};

Promise.reject = function(reason){
  var Class = this;

  return new Class(function(resolve, reject){
    reject(reason);
  });
};

})(typeof window != 'undefined' ? window : typeof global != 'undefined' ? global : typeof self != 'undefined' ? self : this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(32).setImmediate))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(33);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(2)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Specs =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Specs() {
    _classCallCheck(this, Specs);

    // This File Contain The Behavior Specs Pages
    this.isSpecsPage = false;

    if ($('#page-specs').length > 0) {
      this.isSpecsPage = true;
    }

    if (this.isSpecsPage) {
      this.currentColor = 1;
      this.colorBtns = {
        blue: $('#trigger-color-no-1'),
        black1: $('#trigger-color-no-2'),
        black2: $('#trigger-color-no-3')
      };
      this.phoneElements = {
        blue: $('#phone-color-no-1'),
        black1: $('#phone-color-no-2'),
        black2: $('#phone-color-no-3')
      };
      this.bindEvents();
    }
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Specs, [{
    key: "bindEvents",
    value: function bindEvents() {
      console.log('Specs Page Detected');
      this.ColorSelectionInit();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "ColorSelectionInit",
    value: function ColorSelectionInit() {
      var _this = this;

      this.colorBtns.blue.on('click', function () {
        if (_this.currentColor != 1) {
          _this.currentColor = 1;
          $('.image-item.active').removeClass('active');
          $('.colors-selector .selector-item.active').removeClass('active');

          _this.colorBtns.blue.addClass('active');

          _this.phoneElements.blue.addClass('active');
        }
      });
      this.colorBtns.black1.on('click', function () {
        if (_this.currentColor != 2) {
          _this.currentColor = 2;
          $('.image-item.active').removeClass('active');
          $('.colors-selector .selector-item.active').removeClass('active');

          _this.colorBtns.black1.addClass('active');

          _this.phoneElements.black1.addClass('active');
        }
      });
      this.colorBtns.black2.on('click', function () {
        if (_this.currentColor != 3) {
          _this.currentColor = 3;
          $('.image-item.active').removeClass('active');
          $('.colors-selector .selector-item.active').removeClass('active');

          _this.colorBtns.black2.addClass('active');

          _this.phoneElements.black2.addClass('active');
        }
      });
    }
  }]);

  return Specs;
}();

exports.default = Specs;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PromotionPosts =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function PromotionPosts() {
    _classCallCheck(this, PromotionPosts);

    // This File Contain The Behavior Of All The Pages
    this.isPromotionPostsPage = false;

    if ($('#page-pr-posts').length > 0) {
      this.marketSectionSlider = $('#market-slider');
      this.reviewsSectionSlider = $('#reviews-slider');
      this.videosSectionSlider = $('#videos-slider');
      this.isMobile = false;

      if (window.innerWidth < 480) {
        this.isMobile = true;
      }

      this.columnPerSlides = 2;

      if (this.isMobile) {
        this.columnPerSlides = 1;
      }

      this.bindEvents();
    }
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(PromotionPosts, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.SetupSliders();
      console.log('pr posts page detected');
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "SetupSliders",
    value: function SetupSliders() {
      var slideOptions = {
        infinite: true,
        slidesToShow: this.columnPerSlides,
        slidesToScroll: this.columnPerSlides,
        nextArrow: '<button type="button" class="slick-control slick-next"></button>',
        prevArrow: '<button type="button" class="slick-control slick-prev"></button>'
      };
      this.marketSectionSlider.slick(slideOptions);
      this.reviewsSectionSlider.slick(slideOptions);
      this.videosSectionSlider.slick(slideOptions);
    }
  }]);

  return PromotionPosts;
}();

exports.default = PromotionPosts;

/***/ })
/******/ ]);