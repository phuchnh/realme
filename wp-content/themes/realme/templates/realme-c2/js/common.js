! function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var i = n[r] = {
      exports: {},
      id: r,
      loaded: !1
    };
    return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
  }
  var n = {};
  t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var i = n(1),
    o = r(i),
    a = n(4),
    s = r(a),
    u = n(5),
    l = n(6),
    c = n(7),
    f = r(c),
    d = n(8),
    p = n(9);
  (0, s.default)(function() {
    function e(e) {
      var t = e.parents(".footer-menu").siblings(),
        n = t.find("ul"),
        r = t.find(".footer-menu-opened");
      (0, s.default)(r).removeClass("footer-menu-opened"), (0, s.default)(n).slideUp()
    }

    function t() {
      var e = (0, s.default)(".navproduct-price").find(".navpro-price"),
        t = [];
      e.length > 0 && s.default.each(e, function(e, n) {
        var r = (0, s.default)(n).data("spuid");
        r && r > 0 && (t.push(r), (0, s.default)(n).addClass("navpro-price-" + r).html("&nbsp;"))
      });
      var n = sessionStorage.getItem("spuPriceCatch");
      if (n)
        for (var r = JSON.parse(n), i = 0; i < r.length; i++) {
          var a = r[i];
          (0, s.default)(".navpro-price-" + a.productId).html("₹" + String(a.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")).show()
        } else t.length > 0 && !L && s.default.ajax({
        type: "get",
        url: V + "in/product/navigation",
        xhrFields: {
          withCredentials: !0
        },
        crossDomain: !0,
        timeout: 8e3,
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      }).done(function(e) {
        if (200 === e.code && e.data && e.data.length > 0) {
          for (var t = 0; t < e.data.length; t++) {
            var n = e.data[t];
            (0, s.default)(".navpro-price-" + n.productId).html("₹" + String(n.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")).show()
          }
          sessionStorage.setItem("spuPriceCatch", (0, o.default)(e.data))
        }
        L = !0
      })
    }

    function n(e) {
      var t = 0;
      return (0, s.default)(e).map(function(e) {
        t += 1.1
      }), t
    }

    function r() {
      var e = window.innerWidth,
        n = 0;
      e <= 768 ? ((0, s.default)(".product-show").unbind("mouseenter"), (0, s.default)(".product-show").unbind("mouseleave")) : ((0, s.default)(".nav-arrow-h").unbind("click"), (0, s.default)(".product-show").mouseenter(function() {
        D || (0, s.default)(".navproduct img").each(function() {
          var e = (0, s.default)(this).attr("data-src");
          (0, s.default)(this).attr("src", e)
        }), D = !0, (0, s.default)("html").hasClass("header-theme-white") && (n = 1, (0, s.default)("html").removeClass("header-theme-white")), (0, s.default)(this).find(".navproduct").addClass("navproduct-hover"), (0, s.default)(this).parents(".header").addClass("header-product-hover"), (0, s.default)(".mask-layer").addClass("mask-layer-active"), O(), t()
      }), (0, s.default)(".product-show").mouseleave(function() {
        b = 0, (0, s.default)(".more-arrow-right").show(), (0, s.default)(".more-arrow-left").hide(), (0, s.default)(".navpro-ul-list").css("left", "0"), 1 === n && ((0, s.default)("html").addClass("header-theme-white"), n = 0), (0, s.default)(".mask-layer").removeClass("mask-layer-active"), (0, s.default)(this).find(".navproduct").removeClass("navproduct-hover"), (0, s.default)(this).parents(".header").removeClass("header-product-hover")
      }))
    }

    function i() {
      var e = f.default.getJSON("realme_cart");
      if (!Y.login && e) {
        var t = e,
          n = (0, u.renderCartListFragment)(t);
        (0, s.default)(".header-cart-list-detail").html(n), (0, l.isShowCartCount)(t, s.default)
      }
      Y.login && (0, l.getMyCartDetails)(s.default, u.renderCartListFragment)
    }

    function a() {
      if (N) N = !1, (0, s.default)(".active-bar").hide(), (0, s.default)(".realme_header_cart-list").hide(), (0, s.default)(".product-masks").removeClass("product-masks-active"), document.body.style.overflow = "", g();
      else {
        k && (0, s.default)(".product-more").click(), E && (0, s.default)(".nav-fold").click(), S && (0, s.default)(".header-account-list").hide(), document.body.style.overflow = "hidden", S = !1, N = !0;
        var e = (0, s.default)(this).attr("data-index");
        x && v(Number(e)), (0, s.default)(".realme_header_cart-list").show(), (0, s.default)(".product-masks").addClass("product-masks-active"), g(), i()
      }
    }

    function c() {
      N || (k && (0, s.default)(".product-more").click(), E && (0, s.default)(".nav-fold").click(), S = !1, N = !0, (0, s.default)(".realme_header_cart-list").show(), (0, s.default)(".product-masks").addClass("product-masks-active"), i())
    }

    function h() {
      N && (N = !1, (0, s.default)(".realme_header_cart-list").hide(), (0, s.default)(".product-masks").removeClass("product-masks-active"))
    }

    function v(e) {
      var t = .12 + .54 * Number(e) + "rem";
      (0, s.default)(".active-bar").css({
        display: "block",
        right: t
      })
    }

    function g() {
      ww <= 768 && T > 0 && (S || E || N || k ? (0, s.default)("html").hasClass("header-icon-theme-switch") || (0, s.default)("html").addClass("header-icon-theme-switch") : (0, s.default)("html").removeClass("header-icon-theme-switch"))
    }
    var m = (0, s.default)(".nav-notify").length > 0,
      y = sessionStorage.getItem("notifySessionCache");
    ! function() {
      var e = (0, s.default)(window).scrollTop();
      m && !y && e <= 0 && (0, s.default)("html").addClass("header-notify")
    }(), (0, s.default)(".nav-notify-close").click(function() {
      (0, s.default)("html").removeClass("header-notify"), sessionStorage.setItem("notifySessionCache", "notifySessionCache"), y = sessionStorage.getItem("notifySessionCache")
    });
    var w = navigator.userAgent.toLowerCase(); - 1 == w.indexOf("realmeStore") && -1 == w.indexOf("realmestore") || ((0, s.default)("body").addClass("app-support"), (0, s.default)(".header-notify body").css({
      "padding-top": "0"
    }), (0, s.default)(".service-help-email a").attr("href", "javascript:;"), (0, s.default)(".service-software-upgrade-icon").length >= 1 && ((0, s.default)(".service-software-upgrade-icon").css({
      "background-image": "url(https://image01.realme.net/general/20190404/1554373454604.png)"
    }), (0, s.default)(".chat-support-href").attr("href", "https://realme-en.custhelp.com/app/chat/chat_launch"), (0, s.default)(".chat-support-href p").html("Chat Support")));
    var x = (0, s.default)(window).width() < 769,
      b = 0,
      C = function() {
        var e = window.innerWidth,
          t = 1920;
        e <= 768 && (t = 360);
        var n = 100 * e / t,
          r = n / parseFloat(defaultSize) * 100 + "%";
        document.documentElement.style.fontSize = r
      };
    (0, s.default)(".footer-menu-open").click(function() {
      var t = (0, s.default)(this),
        n = t.parents(".footer-menu").find("ul");
      return t.hasClass("footer-menu-opened") ? (t.removeClass("footer-menu-opened"), (0, s.default)(n).slideUp()) : (t.addClass("footer-menu-opened"), (0, s.default)(n).slideDown(), e(t)), !1
    }), (0, s.default)(".footer-menu-title").click(function() {
      if ((0, s.default)(window).width() > 768) return !1;
      var t = (0, s.default)(this),
        n = t.parent(".footer-menu").find("ul"),
        r = t.find("a");
      return (0, s.default)(r).hasClass("footer-menu-opened") ? ((0, s.default)(r).removeClass("footer-menu-opened"), (0, s.default)(n).slideUp()) : ((0, s.default)(r).addClass("footer-menu-opened"), (0, s.default)(n).slideDown(), e(t)), !1
    }), (0, s.default)(".footer-country").click(function() {
      (0, s.default)(".country-switch").css("display", "flex").html(d.countryHtml), (0, s.default)("body").css("overflow", "hidden");
      var e = (0, s.default)(".country-switch span.pic-lazyload");
      e.length > 0 && s.default.each((0, s.default)(e), function(e, t) {
        (0, s.default)(t).replaceWith('<picture class="pic-lazyloaded">' + (0, s.default)(t).html() + "</picture>")
      })
    }), (0, s.default)("body").on("click", ".close-Icon", function() {
      (0, s.default)(".country-switch").hide(), (0, s.default)("body").css("overflow", "initial")
    }), (0, s.default)(".dialog-video-play").click(function() {
      var e = (0, s.default)(this).data("video"),
        t = (0, s.default)(this).data("mobile"),
        n = (0, s.default)(window).width(),
        r = n <= 768 ? t : e;
      (0, s.default)(".video-dialog").fadeIn(), (0, s.default)(".video-player").append('<video src="' + r + '" autoplay loop></video>'), (0, s.default)(".video-player").find("video")[0].play()
    }), (0, s.default)(".video-dialog-close").click(function() {
      return (0, s.default)(".video-dialog").fadeOut(), (0, s.default)(".video-player").html(""), !1
    });
    var T = (0, s.default)(".header-bg-transparent").length,
      k = !1,
      S = !1,
      E = !1,
      N = !1,
      j = (0, s.default)(".nav-arrow");
    (0, s.default)(".product-more").click(function() {
      return k ? ((0, s.default)(".product-nav").removeClass("product-nav-white"), (0, s.default)(".product-menu").removeClass("product-menu-active"), (0, s.default)(".product-mask").removeClass("product-mask-active"), (0, s.default)(".product-more").removeClass("product-more-arrow"), k = !1) : ((0, s.default)(".product-more").addClass("product-more-arrow"), (0, s.default)(".product-menu").addClass("product-menu-active"), (0, s.default)(".product-mask").addClass("product-mask-active"), (0, s.default)(".product-nav").addClass("product-nav-white"), k = !0), !1
    });
    var D = !1;
    (0, s.default)(".nav-fold").click(function() {
      if (D || (0, s.default)(".navproduct img").each(function() {
        var e = (0, s.default)(this).attr("data-src");
        (0, s.default)(this).attr("src", e)
      }), E)(0, s.default)(this).removeClass("switch-nav-state"), (0, s.default)(".nav").removeClass("nav-open"), j.hasClass("nav-more-arrow") && (0, s.default)(".nav-arrow").click(), E = !1, (0, s.default)("html,body").css({
        height: "auto",
        overflowY: "auto"
      }), g();
      else {
        (0, s.default)("html,body").css({
          height: "0",
          overflowY: "hidden"
        }), k && (0, s.default)(".product-more").click(), (0, s.default)(".nav-fold").addClass("switch-nav-state"), (0, s.default)(".nav").addClass("nav-open"), E = !0;
        var e = (0, s.default)(this).attr("data-index");
        v(Number(e)), g()
      }
      return N && h(), S = !1, D = !0, (0, s.default)(".header-account-list").hide(), (0, s.default)(".active-bar").hide(), !1
    });
    var A = !1,
      O = function() {
        var e = (0, s.default)(".navpro-list .pic-lazyload");
        e.length > 0 && !A && s.default.each((0, s.default)(e), function(e, t) {
          (0, s.default)(t).replaceWith('<picture class="pic-lazyloaded">' + (0, s.default)(t).html() + "</picture>")
        }), A = !0
      },
      L = !1;
    (0, s.default)(".nav-arrow, .nav-arrow-h").click(function() {
      var e = (0, s.default)(this),
        r = e.hasClass("nav-more-arrow");
      if ((0, s.default)(".nav-arrow").removeClass("nav-more-arrow").next(".navproduct").removeClass("navproduct-active-click").css({
        height: 0
      }), (0, s.default)(".nav-arrow").prev("a").removeClass("nav-line"), (0, s.default)(this).hasClass("nav-arrow") || (e = (0, s.default)(this).next(".nav-arrow")), r) e.removeClass("nav-more-arrow"), e.next(".navproduct").removeClass("navproduct-active-click").css({
        height: 0
      }), e.prev("a").removeClass("nav-line");
      else {
        var i = n(e.next(".navproduct").find(".navpro-list li"));
        e.addClass("nav-more-arrow"), e.next(".navproduct").addClass("navproduct-active-click"), e.prev("a").addClass("nav-line"), e.next(".navproduct").css({
          height: i + "rem"
        }), O(), t()
      }
    });
    var I = !1,
      q = function() {
        var e = (0, s.default)(".account-icon img");
        e.length > 0 && !I && s.default.each((0, s.default)(e), function(e, t) {
          (0, s.default)(t).attr("src", (0, s.default)(t).data("src"))
        }), I = !0
      };
    x ? (0, s.default)(".header-account").click(function() {
      var e = (0, s.default)(this).attr("data-index");
      S ? (S = !1, g(), (0, s.default)(".header-account-list").hide(), (0, s.default)(".active-bar").hide()) : (k && (0, s.default)(".product-more").click(), E && (0, s.default)(".nav-fold").click(), N && h(), S = !0, (0, s.default)(".header-account-list").show(), x && v(Number(e)), g(), q())
    }) : ((0, s.default)(".header-account").mouseover(function() {
      N && h(), S || (k && (0, s.default)(".product-more").click(), E && (0, s.default)(".nav-fold").click(), S = !0, (0, s.default)(".header-account-list").show(), q())
    }), (0, s.default)(".header-account").mouseout(function() {
      S = !1, (0, s.default)(".header-account-list").hide()
    })), (0, s.default)(window).scroll(function() {
      k && (0, s.default)(".product-more").click(), S && (S = !1, (0, s.default)(".header-account-list").hide()), N && h();
      var e = (0, s.default)(window).scrollTop();
      (0, s.default)(window).width() <= 768 && T > 0 && (e > 0 ? (0, s.default)("html").addClass("header-icon-theme-switch") : E || (0, s.default)("html").removeClass("header-icon-theme-switch")), e > 76 && !E ? ((0, s.default)("html").removeClass("header-notify"), (0, s.default)(".product-nav").addClass("product-nav-fixed")) : (!m || y || (0, s.default)("html").hasClass("header-notify") || (0, s.default)("html").addClass("header-notify"), (0, s.default)(".product-nav").removeClass("product-nav-fixed"))
    }), (0, s.default)(window).scroll(), r(), (0, s.default)(window).resize(function() {
      C(), r()
    }), (0, s.default)(document).on("click", ".gtag", function() {
      var e = (0, s.default)(this).data("gtag");
      if (e && e.split("|").length > 1 && gtag) {
        var t = e.split("|");
        gtag("event", t[0] + "_" + t[1], {
          event_category: t[0]
        })
      }
    }), (0, s.default)(".ui-input-select").click(function() {
      (0, s.default)(this).siblings("ul").hasClass("ui-input-active") ? ((0, s.default)(this).siblings("ul").removeClass("ui-input-active"), (0, s.default)(this).siblings(".icon-arrow").removeClass("icon-arrow-active")) : ((0, s.default)(this).siblings("ul").addClass("ui-input-active"), (0, s.default)(this).siblings(".icon-arrow").addClass("icon-arrow-active"), (0, s.default)(this).siblings("ul").hasClass("service-province") && ((0, s.default)(".service-city").removeClass("ui-input-active"), (0, s.default)(".service-city").siblings(".icon-arrow").removeClass("icon-arrow-active")))
    }), (0, s.default)(".ui-box-select .icon-arrow").click(function() {
      (0, s.default)(this).hasClass("icon-arrow-active") ? ((0, s.default)(this).siblings("ul").removeClass("ui-input-active"), (0, s.default)(this).removeClass("icon-arrow-active")) : ((0, s.default)(this).siblings("ul").addClass("ui-input-active"), (0, s.default)(this).addClass("icon-arrow-active"), (0, s.default)(this).siblings("ul").hasClass("service-province") && ((0, s.default)(".service-city").removeClass("ui-input-active"), (0, s.default)(".service-city").siblings(".icon-arrow").removeClass("icon-arrow-active")))
    }), (0, s.default)(".ui-Primary-loading").click(function() {
      var e = (0, s.default)(this).find(".ui-Primary"),
        t = (0, s.default)(this).find("i");
      e.addClass("btn_loading"), t.addClass("btn_loading-icon")
    });
    var P = window.location.hostname.indexOf("myoas.net") > 0 ? "https://account.myoas.net/" : "https://id.realme.com/",
      M = window.location.href,
      H = P + "?callback=" + encodeURIComponent(M) + "&region=IN&language=en-IN",
      _ = P + "logout.html?callback=" + encodeURIComponent(M) + "&region=IN&language=en-IN",
      R = P + "profile.html?callback=" + encodeURIComponent(M) + "&region=IN&language=en-IN",
      F = window.location.hostname.indexOf("myoas.net") > 0 ? "https://test1-buy.myoas.net/" : window.location.hostname.indexOf("pre-buy") >= 0 || window.location.hostname.indexOf("pre-www") >= 0 ? "https://pre-buy.realme.com/" : "https://buy.realme.com/",
      W = F + "in/user/orders",
      B = F + "in/user/r-pass",
      U = P + "?callback=" + encodeURIComponent(W) + "&region=IN&language=en-IN",
      $ = B + "?callback=" + encodeURIComponent(B) + "&region=IN&language=en-IN",
      z = F + "in/user/addresses",
      X = P + "?callback=" + encodeURIComponent(z) + "&region=IN&language=en-IN",
      V = window.location.hostname.indexOf("myoas.net") > 0 ? "https://test1-api.myoas.net/" : window.location.hostname.indexOf("pre-") >= 0 ? "https://pre-api.realme.com/" : "https://api.realme.com/",
      Y = {
        login: !1
      },
      G = function(e) {
        (0, s.default)(".header-account-icon").addClass("header-account-online"), (0, s.default)(".account-logout").show().parent().show(), (0, s.default)(".account-login").hide().parent().hide(), (0, l.syncLocalCartOnline)(s.default), i()
      },
      J = window.location.pathname,
      Q = J && J.split("/")[1];
    (window.location.hostname.indexOf("myoas.net") > 0 || "in" === Q) && function() {
      var e = sessionStorage.getItem("RMUNICK");
      if (e) G(), Y.login = !0;
      else {
        var t = V + "login";
        (0, p._Http)({
          url: t,
          type: "post"
        }).then(function(e) {
          if (200 == e.code) {
            Y.login = !0;
            var t = e.data.username;
            G(), sessionStorage.setItem("RMUNICK", t)
          }
        })
      }
    }(), (0, s.default)(".account-userinfo").click(function() {
      window.location.href = R
    }), (0, s.default)(".account-logout").click(function() {
      sessionStorage.removeItem("RMUNICK"), s.default.ajax({
        url: V + "logout",
        type: "get",
        timeout: 8e3,
        xhrFields: {
          withCredentials: !0
        },
        crossDomain: !0,
        dataType: "json",
        success: function(e) {
          window.location.href = _
        },
        error: function() {
          window.location.href = _
        }
      })
    }), (0, s.default)(".account-login, .product-mobile-login").click(function() {
      window.location.href = H
    }), (0, s.default)(".account-user-order").click(function() {
      var e = Y.login ? W : U;
      window.location.href = e
    }), (0, s.default)(".account-rPass").click(function() {
      var e = Y.login ? B : $;
      window.location.href = e
    }), (0, s.default)(".account-user-address").click(function() {
      var e = Y.login ? z : X;
      window.location.href = e
    });
    var K = !1;
    (0, s.default)(".product-btn").click(function() {
      K ? (K = !1, (0, s.default)(".purchase-site-overlay").hide()) : ((0, s.default)("span.pop-ups-lazyload").length >= 1 && s.default.each((0, s.default)("span.pop-ups-lazyload"), function(e, t) {
        (0, s.default)(t).replaceWith('<picture class="pop-ups-lazyloaded">' + (0, s.default)(t).html() + "</picture>")
      }), K = !0, (0, s.default)(".purchase-site-overlay").css("display", "flex"))
    }), (0, s.default)(".purchase-site-close-icon").click(function() {
      K = !1, (0, s.default)(".purchase-site-overlay").hide()
    }), i(), (0, s.default)("body").on("click", ".check-out-cart-btn", function() {
      Y.login || (window.location.href = H);
      var e = JSON.parse((0, s.default)(this).attr("data-cart"));
      if (e && e.length) {
        var t = 0;
        if (e.map(function(e) {
          t += e.count
        }), t > 4) {
          return void(0, s.default)(".header-cart-footer .warning").text("Checkout quantity should be less than or equal to 4.")
        }
        var n = {
          purchaseWay: "cart",
          skuList: e
        };
        (0, l.checkoutMyCart)(s.default, n, F)
      }
    }), x ? (0, s.default)(".realme_header_cart-icon").click(a) : ((0, s.default)(".realme_header_cart").mouseover(c), (0, s.default)(".realme_header_cart").mouseleave(h), (0, s.default)(".realme_header_cart-icon").click(function() {
      window.open(F + "in/user/cart", "_self")
    })), (0, s.default)(".more-arrow-right").click(function() {
      (0, s.default)(".more-arrow-left").show();
      var e = (0, s.default)(this).siblings("ul").find("li").length,
        t = 180 * -(e - 5);
      (0, s.default)(this).hide(), (0, s.default)(".more-arrow-left").show(), (0, s.default)(".navpro-ul-list").css("left", t + "px")
    }), (0, s.default)(".more-arrow-left").click(function() {
      (0, s.default)(".more-arrow-right").show(), (0, s.default)(this).hide(), (0, s.default)(".navpro-ul-list").css("left", 0)
    })
  })
}, function(e, t, n) {
  e.exports = {
    default: n(2),
    __esModule: !0
  }
}, function(e, t, n) {
  var r = n(3),
    i = r.JSON || (r.JSON = {
      stringify: JSON.stringify
    });
  e.exports = function(e) {
    return i.stringify.apply(i, arguments)
  }
}, function(e, t) {
  var n = e.exports = {
    version: "2.5.7"
  };
  "number" == typeof __e && (__e = n)
}, function(e, t, n) {
  var r, i;
  ! function(t, n) {
    "use strict";
    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e)
    } : n(t)
  }("undefined" != typeof window ? window : this, function(n, o) {
    "use strict";

    function a(e, t, n) {
      t = t || ce;
      var r, i = t.createElement("script");
      if (i.text = e, n)
        for (r in ke) n[r] && (i[r] = n[r]);
      t.head.appendChild(i).parentNode.removeChild(i)
    }

    function s(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ge[me.call(e)] || "object" : typeof e
    }

    function u(e) {
      var t = !!e && "length" in e && e.length,
        n = s(e);
      return !Ce(e) && !Te(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function l(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function c(e, t, n) {
      return Ce(t) ? Se.grep(e, function(e, r) {
        return !!t.call(e, r, e) !== n
      }) : t.nodeType ? Se.grep(e, function(e) {
        return e === t !== n
      }) : "string" != typeof t ? Se.grep(e, function(e) {
        return ve.call(t, e) > -1 !== n
      }) : Se.filter(t, e, n)
    }

    function f(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }

    function d(e) {
      var t = {};
      return Se.each(e.match(Me) || [], function(e, n) {
        t[n] = !0
      }), t
    }

    function p(e) {
      return e
    }

    function h(e) {
      throw e
    }

    function v(e, t, n, r) {
      var i;
      try {
        e && Ce(i = e.promise) ? i.call(e).done(t).fail(n) : e && Ce(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
      } catch (e) {
        n.apply(void 0, [e])
      }
    }

    function g() {
      ce.removeEventListener("DOMContentLoaded", g), n.removeEventListener("load", g), Se.ready()
    }

    function m(e, t) {
      return t.toUpperCase()
    }

    function y(e) {
      return e.replace(Fe, "ms-").replace(We, m)
    }

    function w() {
      this.expando = Se.expando + w.uid++
    }

    function x(e) {
      return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ze.test(e) ? JSON.parse(e) : e)
    }

    function b(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
        if (r = "data-" + t.replace(Xe, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
          try {
            n = x(n)
          } catch (e) {}
          $e.set(e, t, n)
        } else n = void 0;
      return n
    }

    function C(e, t, n, r) {
      var i, o, a = 20,
        s = r ? function() {
          return r.cur()
        } : function() {
          return Se.css(e, t, "")
        },
        u = s(),
        l = n && n[3] || (Se.cssNumber[t] ? "" : "px"),
        c = (Se.cssNumber[t] || "px" !== l && +u) && Ye.exec(Se.css(e, t));
      if (c && c[3] !== l) {
        for (u /= 2, l = l || c[3], c = +u || 1; a--;) Se.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
        c *= 2, Se.style(e, t, c + l), n = n || []
      }
      return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function T(e) {
      var t, n = e.ownerDocument,
        r = e.nodeName,
        i = Ke[r];
      return i || (t = n.body.appendChild(n.createElement(r)), i = Se.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ke[r] = i, i)
    }

    function k(e, t) {
      for (var n, r, i = [], o = 0, a = e.length; o < a; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Ue.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Je(r) && (i[o] = T(r))) : "none" !== n && (i[o] = "none", Ue.set(r, "display", n)));
      for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
      return e
    }

    function S(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && l(e, t) ? Se.merge([e], n) : n
    }

    function E(e, t) {
      for (var n = 0, r = e.length; n < r; n++) Ue.set(e[n], "globalEval", !t || Ue.get(t[n], "globalEval"))
    }

    function N(e, t, n, r, i) {
      for (var o, a, u, l, c, f, d = t.createDocumentFragment(), p = [], h = 0, v = e.length; h < v; h++)
        if ((o = e[h]) || 0 === o)
          if ("object" === s(o)) Se.merge(p, o.nodeType ? [o] : o);
          else if (rt.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), u = (et.exec(o) || ["", ""])[1].toLowerCase(), l = nt[u] || nt._default, a.innerHTML = l[1] + Se.htmlPrefilter(o) + l[2], f = l[0]; f--;) a = a.lastChild;
            Se.merge(p, a.childNodes), a = d.firstChild, a.textContent = ""
          } else p.push(t.createTextNode(o));
      for (d.textContent = "", h = 0; o = p[h++];)
        if (r && Se.inArray(o, r) > -1) i && i.push(o);
        else if (c = Se.contains(o.ownerDocument, o), a = S(d.appendChild(o), "script"), c && E(a), n)
          for (f = 0; o = a[f++];) tt.test(o.type || "") && n.push(o);
      return d
    }

    function j() {
      return !0
    }

    function D() {
      return !1
    }

    function A() {
      try {
        return ce.activeElement
      } catch (e) {}
    }

    function O(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
        "string" != typeof n && (r = r || n, n = void 0);
        for (s in t) O(e, s, n, r, t[s], o);
        return e
      }
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = D;
      else if (!i) return e;
      return 1 === o && (a = i, i = function(e) {
        return Se().off(e), a.apply(this, arguments)
      }, i.guid = a.guid || (a.guid = Se.guid++)), e.each(function() {
        Se.event.add(this, t, i, r, n)
      })
    }

    function L(e, t) {
      return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") ? Se(e).children("tbody")[0] || e : e
    }

    function I(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function q(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function P(e, t) {
      var n, r, i, o, a, s, u, l;
      if (1 === t.nodeType) {
        if (Ue.hasData(e) && (o = Ue.access(e), a = Ue.set(t, o), l = o.events)) {
          delete a.handle, a.events = {};
          for (i in l)
            for (n = 0, r = l[i].length; n < r; n++) Se.event.add(t, i, l[i][n])
        }
        $e.hasData(e) && (s = $e.access(e), u = Se.extend({}, s), $e.set(t, u))
      }
    }

    function M(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function H(e, t, n, r) {
      t = pe.apply([], t);
      var i, o, s, u, l, c, f = 0,
        d = e.length,
        p = d - 1,
        h = t[0],
        v = Ce(h);
      if (v || d > 1 && "string" == typeof h && !be.checkClone && ct.test(h)) return e.each(function(i) {
        var o = e.eq(i);
        v && (t[0] = h.call(this, i, o.html())), H(o, t, n, r)
      });
      if (d && (i = N(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
        for (s = Se.map(S(i, "script"), I), u = s.length; f < d; f++) l = i, f !== p && (l = Se.clone(l, !0, !0), u && Se.merge(s, S(l, "script"))), n.call(e[f], l, f);
        if (u)
          for (c = s[s.length - 1].ownerDocument, Se.map(s, q), f = 0; f < u; f++) l = s[f], tt.test(l.type || "") && !Ue.access(l, "globalEval") && Se.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? Se._evalUrl && Se._evalUrl(l.src) : a(l.textContent.replace(ft, ""), c, l))
      }
      return e
    }

    function _(e, t, n) {
      for (var r, i = t ? Se.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || Se.cleanData(S(r)), r.parentNode && (n && Se.contains(r.ownerDocument, r) && E(S(r, "script")), r.parentNode.removeChild(r));
      return e
    }

    function R(e, t, n) {
      var r, i, o, a, s = e.style;
      return n = n || pt(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || Se.contains(e.ownerDocument, e) || (a = Se.style(e, t)), !be.pixelBoxStyles() && dt.test(a) && ht.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function F(e, t) {
      return {
        get: function() {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }

    function W(e) {
      if (e in xt) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = wt.length; n--;)
        if ((e = wt[n] + t) in xt) return e
    }

    function B(e) {
      var t = Se.cssProps[e];
      return t || (t = Se.cssProps[e] = W(e) || e), t
    }

    function U(e, t, n) {
      var r = Ye.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function $(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2) "margin" === n && (u += Se.css(e, n + Ge[a], !0, i)), r ? ("content" === n && (u -= Se.css(e, "padding" + Ge[a], !0, i)), "margin" !== n && (u -= Se.css(e, "border" + Ge[a] + "Width", !0, i))) : (u += Se.css(e, "padding" + Ge[a], !0, i), "padding" !== n ? u += Se.css(e, "border" + Ge[a] + "Width", !0, i) : s += Se.css(e, "border" + Ge[a] + "Width", !0, i));
      return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function z(e, t, n) {
      var r = pt(e),
        i = R(e, t, r),
        o = "border-box" === Se.css(e, "boxSizing", !1, r),
        a = o;
      if (dt.test(i)) {
        if (!n) return i;
        i = "auto"
      }
      return a = a && (be.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === Se.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + $(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }

    function X(e, t, n, r, i) {
      return new X.prototype.init(e, t, n, r, i)
    }

    function V() {
      Ct && (!1 === ce.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(V) : n.setTimeout(V, Se.fx.interval), Se.fx.tick())
    }

    function Y() {
      return n.setTimeout(function() {
        bt = void 0
      }), bt = Date.now()
    }

    function G(e, t) {
      var n, r = 0,
        i = {
          height: e
        };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Ge[r], i["margin" + n] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
    }

    function J(e, t, n) {
      for (var r, i = (Z.tweeners[t] || []).concat(Z.tweeners["*"]), o = 0, a = i.length; o < a; o++)
        if (r = i[o].call(n, t, e)) return r
    }

    function Q(e, t, n) {
      var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
        d = this,
        p = {},
        h = e.style,
        v = e.nodeType && Je(e),
        g = Ue.get(e, "fxshow");
      n.queue || (a = Se._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
        a.unqueued || s()
      }), a.unqueued++, d.always(function() {
        d.always(function() {
          a.unqueued--, Se.queue(e, "fx").length || a.empty.fire()
        })
      }));
      for (r in t)
        if (i = t[r], Tt.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (v ? "hide" : "show")) {
            if ("show" !== i || !g || void 0 === g[r]) continue;
            v = !0
          }
          p[r] = g && g[r] || Se.style(e, r)
        } if ((u = !Se.isEmptyObject(t)) || !Se.isEmptyObject(p)) {
        f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = g && g.display, null == l && (l = Ue.get(e, "display")), c = Se.css(e, "display"), "none" === c && (l ? c = l : (k([e], !0), l = e.style.display || l, c = Se.css(e, "display"), k([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === Se.css(e, "float") && (u || (d.done(function() {
          h.display = l
        }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        })), u = !1;
        for (r in p) u || (g ? "hidden" in g && (v = g.hidden) : g = Ue.access(e, "fxshow", {
          display: l
        }), o && (g.hidden = !v), v && k([e], !0), d.done(function() {
          v || k([e]), Ue.remove(e, "fxshow");
          for (r in p) Se.style(e, r, p[r])
        })), u = J(v ? g[r] : 0, r, d), r in g || (g[r] = u.start, v && (u.end = u.start, u.start = 0))
      }
    }

    function K(e, t) {
      var n, r, i, o, a;
      for (n in e)
        if (r = y(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = Se.cssHooks[r]) && "expand" in a) {
          o = a.expand(o), delete e[r];
          for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function Z(e, t, n) {
      var r, i, o = 0,
        a = Z.prefilters.length,
        s = Se.Deferred().always(function() {
          delete u.elem
        }),
        u = function() {
          if (i) return !1;
          for (var t = bt || Y(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
          return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (u || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        },
        l = s.promise({
          elem: e,
          props: Se.extend({}, t),
          opts: Se.extend(!0, {
            specialEasing: {},
            easing: Se.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: bt || Y(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
            var r = Se.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
            return l.tweens.push(r), r
          },
          stop: function(t) {
            var n = 0,
              r = t ? l.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) l.tweens[n].run(1);
            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
          }
        }),
        c = l.props;
      for (K(c, l.opts.specialEasing); o < a; o++)
        if (r = Z.prefilters[o].call(l, e, c, l.opts)) return Ce(r.stop) && (Se._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
      return Se.map(c, J, l), Ce(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Se.fx.timer(Se.extend(u, {
        elem: e,
        anim: l,
        queue: l.opts.queue
      })), l
    }

    function ee(e) {
      return (e.match(Me) || []).join(" ")
    }

    function te(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function ne(e) {
      return Array.isArray(e) ? e : "string" == typeof e ? e.match(Me) || [] : []
    }

    function re(e, t, n, r) {
      var i;
      if (Array.isArray(t)) Se.each(t, function(t, i) {
        n || Pt.test(e) ? r(e, i) : re(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
      });
      else if (n || "object" !== s(t)) r(e, t);
      else
        for (i in t) re(e + "[" + i + "]", t[i], n, r)
    }

    function ie(e) {
      return function(t, n) {
        "string" != typeof t && (n = t, t = "*");
        var r, i = 0,
          o = t.toLowerCase().match(Me) || [];
        if (Ce(n))
          for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
    }

    function oe(e, t, n, r) {
      function i(s) {
        var u;
        return o[s] = !0, Se.each(e[s] || [], function(e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
        }), u
      }
      var o = {},
        a = e === Vt;
      return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function ae(e, t) {
      var n, r, i = Se.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && Se.extend(!0, e, r), e
    }

    function se(e, t, n) {
      for (var r, i, o, a, s = e.contents, u = e.dataTypes;
           "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
        for (i in s)
          if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
          } if (u[0] in n) o = u[0];
      else {
        for (i in n) {
          if (!u[0] || e.converters[i + " " + u[0]]) {
            o = i;
            break
          }
          a || (a = i)
        }
        o = o || a
      }
      if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function ue(e, t, n, r) {
      var i, o, a, s, u, l = {},
        c = e.dataTypes.slice();
      if (c[1])
        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
      for (o = c.shift(); o;)
        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
          if ("*" === o) o = u;
          else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
              for (i in l)
                if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break
                } if (!0 !== a)
              if (a && e.throws) t = a(t);
              else try {
                t = a(t)
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                }
              }
          }
      return {
        state: "success",
        data: t
      }
    }
    var le = [],
      ce = n.document,
      fe = Object.getPrototypeOf,
      de = le.slice,
      pe = le.concat,
      he = le.push,
      ve = le.indexOf,
      ge = {},
      me = ge.toString,
      ye = ge.hasOwnProperty,
      we = ye.toString,
      xe = we.call(Object),
      be = {},
      Ce = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
      },
      Te = function(e) {
        return null != e && e === e.window
      },
      ke = {
        type: !0,
        src: !0,
        noModule: !0
      },
      Se = function(e, t) {
        return new Se.fn.init(e, t)
      },
      Ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    Se.fn = Se.prototype = {
      jquery: "3.3.1",
      constructor: Se,
      length: 0,
      toArray: function() {
        return de.call(this)
      },
      get: function(e) {
        return null == e ? de.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
        var t = Se.merge(this.constructor(), e);
        return t.prevObject = this, t
      },
      each: function(e) {
        return Se.each(this, e)
      },
      map: function(e) {
        return this.pushStack(Se.map(this, function(t, n) {
          return e.call(t, n, t)
        }))
      },
      slice: function() {
        return this.pushStack(de.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: he,
      sort: le.sort,
      splice: le.splice
    }, Se.extend = Se.fn.extend = function() {
      var e, t, n, r, i, o, a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;
      for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || Ce(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
        if (null != (e = arguments[s]))
          for (t in e) n = a[t], r = e[t], a !== r && (l && r && (Se.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && Se.isPlainObject(n) ? n : {}, a[t] = Se.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      return a
    }, Se.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t, n;
        return !(!e || "[object Object]" !== me.call(e)) && (!(t = fe(e)) || "function" == typeof(n = ye.call(t, "constructor") && t.constructor) && we.call(n) === xe)
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      globalEval: function(e) {
        a(e)
      },
      each: function(e, t) {
        var n, r = 0;
        if (u(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else
          for (r in e)
            if (!1 === t.call(e[r], r, e[r])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(Ee, "")
      },
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (u(Object(e)) ? Se.merge(n, "string" == typeof e ? [e] : e) : he.call(n, e)), n
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : ve.call(t, e, n)
      },
      merge: function(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return e.length = i, e
      },
      grep: function(e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
        return r
      },
      map: function(e, t, n) {
        var r, i, o = 0,
          a = [];
        if (u(e))
          for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
        else
          for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return pe.apply([], a)
      },
      guid: 1,
      support: be
    }), "function" == typeof Symbol && (Se.fn[Symbol.iterator] = le[Symbol.iterator]), Se.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      ge["[object " + t + "]"] = t.toLowerCase()
    });
    var Ne = function(e) {
      function t(e, t, n, r) {
        var i, o, a, s, u, c, d, p = t && t.ownerDocument,
          h = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
        if (!r && ((t ? t.ownerDocument || t : R) !== O && A(t), t = t || O, I)) {
          if (11 !== h && (u = ve.exec(e)))
            if (i = u[1]) {
              if (9 === h) {
                if (!(a = t.getElementById(i))) return n;
                if (a.id === i) return n.push(a), n
              } else if (p && (a = p.getElementById(i)) && H(t, a) && a.id === i) return n.push(a), n
            } else {
              if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
              if ((i = u[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(i)), n
            } if (x.qsa && !$[e + " "] && (!q || !q.test(e))) {
            if (1 !== h) p = t, d = e;
            else if ("object" !== t.nodeName.toLowerCase()) {
              for ((s = t.getAttribute("id")) ? s = s.replace(we, xe) : t.setAttribute("id", s = _), c = k(e), o = c.length; o--;) c[o] = "#" + s + " " + f(c[o]);
              d = c.join(","), p = ge.test(e) && l(t.parentNode) || t
            }
            if (d) try {
              return J.apply(n, p.querySelectorAll(d)), n
            } catch (e) {} finally {
              s === _ && t.removeAttribute("id")
            }
          }
        }
        return E(e.replace(oe, "$1"), t, n, r)
      }

      function n() {
        function e(n, r) {
          return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = r
        }
        var t = [];
        return e
      }

      function r(e) {
        return e[_] = !0, e
      }

      function i(e) {
        var t = O.createElement("fieldset");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function o(e, t) {
        for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
      }

      function a(e, t) {
        var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function s(e) {
        return function(t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e
        }
      }

      function u(e) {
        return r(function(t) {
          return t = +t, r(function(n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
          })
        })
      }

      function l(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }

      function c() {}

      function f(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
      }

      function d(e, t, n) {
        var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = W++;
        return t.first ? function(t, n, i) {
          for (; t = t[r];)
            if (1 === t.nodeType || a) return e(t, n, i);
          return !1
        } : function(t, n, u) {
          var l, c, f, d = [F, s];
          if (u) {
            for (; t = t[r];)
              if ((1 === t.nodeType || a) && e(t, n, u)) return !0
          } else
            for (; t = t[r];)
              if (1 === t.nodeType || a)
                if (f = t[_] || (t[_] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                else {
                  if ((l = c[o]) && l[0] === F && l[1] === s) return d[2] = l[2];
                  if (c[o] = d, d[2] = e(t, n, u)) return !0
                } return !1
        }
      }

      function p(e) {
        return e.length > 1 ? function(t, n, r) {
          for (var i = e.length; i--;)
            if (!e[i](t, n, r)) return !1;
          return !0
        } : e[0]
      }

      function h(e, n, r) {
        for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
        return r
      }

      function v(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
        return a
      }

      function g(e, t, n, i, o, a) {
        return i && !i[_] && (i = g(i)), o && !o[_] && (o = g(o, a)), r(function(r, a, s, u) {
          var l, c, f, d = [],
            p = [],
            g = a.length,
            m = r || h(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !r && t ? m : v(m, d, e, s, u),
            w = n ? o || (r ? e : g || i) ? [] : a : y;
          if (n && n(y, w, s, u), i)
            for (l = v(w, p), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (w[p[c]] = !(y[p[c]] = f));
          if (r) {
            if (o || e) {
              if (o) {
                for (l = [], c = w.length; c--;)(f = w[c]) && l.push(y[c] = f);
                o(null, w = [], l, u)
              }
              for (c = w.length; c--;)(f = w[c]) && (l = o ? K(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
            }
          } else w = v(w === a ? w.splice(g, w.length) : w), o ? o(null, a, w, u) : J.apply(a, w)
        })
      }

      function m(e) {
        for (var t, n, r, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = d(function(e) {
          return e === t
        }, a, !0), l = d(function(e) {
          return K(t, e) > -1
        }, a, !0), c = [function(e, n, r) {
          var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
          return t = null, i
        }]; s < i; s++)
          if (n = b.relative[e[s].type]) c = [d(p(c), n)];
          else {
            if (n = b.filter[e[s].type].apply(null, e[s].matches), n[_]) {
              for (r = ++s; r < i && !b.relative[e[r].type]; r++);
              return g(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({
                value: " " === e[s - 2].type ? "*" : ""
              })).replace(oe, "$1"), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && f(e))
            }
            c.push(n)
          } return p(c)
      }

      function y(e, n) {
        var i = n.length > 0,
          o = e.length > 0,
          a = function(r, a, s, u, l) {
            var c, f, d, p = 0,
              h = "0",
              g = r && [],
              m = [],
              y = N,
              w = r || o && b.find.TAG("*", l),
              x = F += null == y ? 1 : Math.random() || .1,
              C = w.length;
            for (l && (N = a === O || a || l); h !== C && null != (c = w[h]); h++) {
              if (o && c) {
                for (f = 0, a || c.ownerDocument === O || (A(c), s = !I); d = e[f++];)
                  if (d(c, a || O, s)) {
                    u.push(c);
                    break
                  } l && (F = x)
              }
              i && ((c = !d && c) && p--, r && g.push(c))
            }
            if (p += h, i && h !== p) {
              for (f = 0; d = n[f++];) d(g, m, a, s);
              if (r) {
                if (p > 0)
                  for (; h--;) g[h] || m[h] || (m[h] = Y.call(u));
                m = v(m)
              }
              J.apply(u, m), l && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(u)
            }
            return l && (F = x, N = y), g
          };
        return i ? r(a) : a
      }
      var w, x, b, C, T, k, S, E, N, j, D, A, O, L, I, q, P, M, H, _ = "sizzle" + 1 * new Date,
        R = e.document,
        F = 0,
        W = 0,
        B = n(),
        U = n(),
        $ = n(),
        z = function(e, t) {
          return e === t && (D = !0), 0
        },
        X = {}.hasOwnProperty,
        V = [],
        Y = V.pop,
        G = V.push,
        J = V.push,
        Q = V.slice,
        K = function(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
          return -1
        },
        Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
        re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
        ie = new RegExp(ee + "+", "g"),
        oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
        ae = new RegExp("^" + ee + "*," + ee + "*"),
        se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
        ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
        le = new RegExp(re),
        ce = new RegExp("^" + te + "$"),
        fe = {
          ID: new RegExp("^#(" + te + ")"),
          CLASS: new RegExp("^\\.(" + te + ")"),
          TAG: new RegExp("^(" + te + "|[*])"),
          ATTR: new RegExp("^" + ne),
          PSEUDO: new RegExp("^" + re),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + Z + ")$", "i"),
          needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        },
        de = /^(?:input|select|textarea|button)$/i,
        pe = /^h\d$/i,
        he = /^[^{]+\{\s*\[native \w/,
        ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ge = /[+~]/,
        me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
        ye = function(e, t, n) {
          var r = "0x" + t - 65536;
          return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        xe = function(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        },
        be = function() {
          A()
        },
        Ce = d(function(e) {
          return !0 === e.disabled && ("form" in e || "label" in e)
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        J.apply(V = Q.call(R.childNodes), R.childNodes), V[R.childNodes.length].nodeType
      } catch (e) {
        J = {
          apply: V.length ? function(e, t) {
            G.apply(e, Q.call(t))
          } : function(e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];);
            e.length = n - 1
          }
        }
      }
      x = t.support = {}, T = t.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, A = t.setDocument = function(e) {
        var t, n, r = e ? e.ownerDocument || e : R;
        return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, L = O.documentElement, I = !T(O), R !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), x.attributes = i(function(e) {
          return e.className = "i", !e.getAttribute("className")
        }), x.getElementsByTagName = i(function(e) {
          return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
        }), x.getElementsByClassName = he.test(O.getElementsByClassName), x.getById = i(function(e) {
          return L.appendChild(e).id = _, !O.getElementsByName || !O.getElementsByName(_).length
        }), x.getById ? (b.filter.ID = function(e) {
          var t = e.replace(me, ye);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }, b.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && I) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }) : (b.filter.ID = function(e) {
          var t = e.replace(me, ye);
          return function(e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t
          }
        }, b.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && I) {
            var n, r, i, o = t.getElementById(e);
            if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
            }
            return []
          }
        }), b.find.TAG = x.getElementsByTagName ? function(e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
        } : function(e, t) {
          var n, r = [],
            i = 0,
            o = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
            return r
          }
          return o
        }, b.find.CLASS = x.getElementsByClassName && function(e, t) {
          if (void 0 !== t.getElementsByClassName && I) return t.getElementsByClassName(e)
        }, P = [], q = [], (x.qsa = he.test(O.querySelectorAll)) && (i(function(e) {
          L.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || q.push(".#.+[+~]")
        }), i(function(e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = O.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
        })), (x.matchesSelector = he.test(M = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
          x.disconnectedMatch = M.call(e, "*"), M.call(e, "[s!='']:x"), P.push("!=", re)
        }), q = q.length && new RegExp(q.join("|")), P = P.length && new RegExp(P.join("|")), t = he.test(L.compareDocumentPosition), H = t || he.test(L.contains) ? function(e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
        } : function(e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        }, z = t ? function(e, t) {
          if (e === t) return D = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === R && H(R, e) ? -1 : t === O || t.ownerDocument === R && H(R, t) ? 1 : j ? K(j, e) - K(j, t) : 0 : 4 & n ? -1 : 1)
        } : function(e, t) {
          if (e === t) return D = !0, 0;
          var n, r = 0,
            i = e.parentNode,
            o = t.parentNode,
            s = [e],
            u = [t];
          if (!i || !o) return e === O ? -1 : t === O ? 1 : i ? -1 : o ? 1 : j ? K(j, e) - K(j, t) : 0;
          if (i === o) return a(e, t);
          for (n = e; n = n.parentNode;) s.unshift(n);
          for (n = t; n = n.parentNode;) u.unshift(n);
          for (; s[r] === u[r];) r++;
          return r ? a(s[r], u[r]) : s[r] === R ? -1 : u[r] === R ? 1 : 0
        }, O) : O
      }, t.matches = function(e, n) {
        return t(e, null, null, n)
      }, t.matchesSelector = function(e, n) {
        if ((e.ownerDocument || e) !== O && A(e), n = n.replace(ue, "='$1']"), x.matchesSelector && I && !$[n + " "] && (!P || !P.test(n)) && (!q || !q.test(n))) try {
          var r = M.call(e, n);
          if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
        } catch (e) {}
        return t(n, O, null, [e]).length > 0
      }, t.contains = function(e, t) {
        return (e.ownerDocument || e) !== O && A(e), H(e, t)
      }, t.attr = function(e, t) {
        (e.ownerDocument || e) !== O && A(e);
        var n = b.attrHandle[t.toLowerCase()],
          r = n && X.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
        return void 0 !== r ? r : x.attributes || !I ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }, t.escape = function(e) {
        return (e + "").replace(we, xe)
      }, t.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, t.uniqueSort = function(e) {
        var t, n = [],
          r = 0,
          i = 0;
        if (D = !x.detectDuplicates, j = !x.sortStable && e.slice(0), e.sort(z), D) {
          for (; t = e[i++];) t === e[i] && (r = n.push(i));
          for (; r--;) e.splice(n[r], 1)
        }
        return j = null, e
      }, C = t.getText = function(e) {
        var t, n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
          } else if (3 === i || 4 === i) return e.nodeValue
        } else
          for (; t = e[r++];) n += C(t);
        return n
      }, b = t.selectors = {
        cacheLength: 50,
        createPseudo: r,
        match: fe,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(me, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, n = !e[6] && e[2];
            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(me, ye).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(e) {
            var t = B[e + " "];
            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function(e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, n, r) {
            return function(i) {
              var o = t.attr(i, e);
              return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
            }
          },
          CHILD: function(e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === r && 0 === i ? function(e) {
              return !!e.parentNode
            } : function(t, n, u) {
              var l, c, f, d, p, h, v = o !== a ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                m = s && t.nodeName.toLowerCase(),
                y = !u && !s,
                w = !1;
              if (g) {
                if (o) {
                  for (; v;) {
                    for (d = t; d = d[v];)
                      if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                    h = v = "only" === e && !h && "nextSibling"
                  }
                  return !0
                }
                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                  for (d = g, f = d[_] || (d[_] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === F && l[1], w = p && l[2], d = p && g.childNodes[p]; d = ++p && d && d[v] || (w = p = 0) || h.pop();)
                    if (1 === d.nodeType && ++w && d === t) {
                      c[e] = [F, p, w];
                      break
                    }
                } else if (y && (d = t, f = d[_] || (d[_] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === F && l[1], w = p), !1 === w)
                  for (;
                    (d = ++p && d && d[v] || (w = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++w || (y && (f = d[_] || (d[_] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [F, w]), d !== t)););
                return (w -= i) === r || w % r == 0 && w / r >= 0
              }
            }
          },
          PSEUDO: function(e, n) {
            var i, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
            return o[_] ? o(n) : o.length > 1 ? (i = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
              for (var r, i = o(e, n), a = i.length; a--;) r = K(e, i[a]), e[r] = !(t[r] = i[a])
            }) : function(e) {
              return o(e, 0, i)
            }) : o
          }
        },
        pseudos: {
          not: r(function(e) {
            var t = [],
              n = [],
              i = S(e.replace(oe, "$1"));
            return i[_] ? r(function(e, t, n, r) {
              for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
            }) : function(e, r, o) {
              return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
            }
          }),
          has: r(function(e) {
            return function(n) {
              return t(e, n).length > 0
            }
          }),
          contains: r(function(e) {
            return e = e.replace(me, ye),
              function(t) {
                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
              }
          }),
          lang: r(function(e) {
            return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(me, ye).toLowerCase(),
              function(t) {
                var n;
                do {
                  if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
          }),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          },
          root: function(e) {
            return e === L
          },
          focus: function(e) {
            return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: s(!1),
          disabled: s(!0),
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function(e) {
            return !b.pseudos.empty(e)
          },
          header: function(e) {
            return pe.test(e.nodeName)
          },
          input: function(e) {
            return de.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: u(function() {
            return [0]
          }),
          last: u(function(e, t) {
            return [t - 1]
          }),
          eq: u(function(e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: u(function(e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }),
          odd: u(function(e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }),
          lt: u(function(e, t, n) {
            for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
            return e
          }),
          gt: u(function(e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
            return e
          })
        }
      }, b.pseudos.nth = b.pseudos.eq;
      for (w in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) b.pseudos[w] = function(e) {
        return function(t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }(w);
      for (w in {
        submit: !0,
        reset: !0
      }) b.pseudos[w] = function(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }(w);
      return c.prototype = b.filters = b.pseudos, b.setFilters = new c, k = t.tokenize = function(e, n) {
        var r, i, o, a, s, u, l, c = U[e + " "];
        if (c) return n ? 0 : c.slice(0);
        for (s = e, u = [], l = b.preFilter; s;) {
          r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
            value: r,
            type: i[0].replace(oe, " ")
          }), s = s.slice(r.length));
          for (a in b.filter) !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
            value: r,
            type: a,
            matches: i
          }), s = s.slice(r.length));
          if (!r) break
        }
        return n ? s.length : s ? t.error(e) : U(e, u).slice(0)
      }, S = t.compile = function(e, t) {
        var n, r = [],
          i = [],
          o = $[e + " "];
        if (!o) {
          for (t || (t = k(e)), n = t.length; n--;) o = m(t[n]), o[_] ? r.push(o) : i.push(o);
          o = $(e, y(i, r)), o.selector = e
        }
        return o
      }, E = t.select = function(e, t, n, r) {
        var i, o, a, s, u, c = "function" == typeof e && e,
          d = !r && k(e = c.selector || e);
        if (n = n || [], 1 === d.length) {
          if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && I && b.relative[o[1].type]) {
            if (!(t = (b.find.ID(a.matches[0].replace(me, ye), t) || [])[0])) return n;
            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
          }
          for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
            if ((u = b.find[s]) && (r = u(a.matches[0].replace(me, ye), ge.test(o[0].type) && l(t.parentNode) || t))) {
              if (o.splice(i, 1), !(e = r.length && f(o))) return J.apply(n, r), n;
              break
            }
        }
        return (c || S(e, d))(r, t, !I, n, !t || ge.test(e) && l(t.parentNode) || t), n
      }, x.sortStable = _.split("").sort(z).join("") === _, x.detectDuplicates = !!D, A(), x.sortDetached = i(function(e) {
        return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
      }), i(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || o("type|href|height|width", function(e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), x.attributes && i(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || o("value", function(e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), i(function(e) {
        return null == e.getAttribute("disabled")
      }) || o(Z, function(e, t, n) {
        var r;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }), t
    }(n);
    Se.find = Ne, Se.expr = Ne.selectors, Se.expr[":"] = Se.expr.pseudos, Se.uniqueSort = Se.unique = Ne.uniqueSort, Se.text = Ne.getText, Se.isXMLDoc = Ne.isXML, Se.contains = Ne.contains, Se.escapeSelector = Ne.escape;
    var je = function(e, t, n) {
        for (var r = [], i = void 0 !== n;
             (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (i && Se(e).is(n)) break;
            r.push(e)
          } return r
      },
      De = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      },
      Ae = Se.expr.match.needsContext,
      Oe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    Se.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Se.find.matchesSelector(r, e) ? [r] : [] : Se.find.matches(e, Se.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, Se.fn.extend({
      find: function(e) {
        var t, n, r = this.length,
          i = this;
        if ("string" != typeof e) return this.pushStack(Se(e).filter(function() {
          for (t = 0; t < r; t++)
            if (Se.contains(i[t], this)) return !0
        }));
        for (n = this.pushStack([]), t = 0; t < r; t++) Se.find(e, i[t], n);
        return r > 1 ? Se.uniqueSort(n) : n
      },
      filter: function(e) {
        return this.pushStack(c(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(c(this, e || [], !0))
      },
      is: function(e) {
        return !!c(this, "string" == typeof e && Ae.test(e) ? Se(e) : e || [], !1).length
      }
    });
    var Le, Ie = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (Se.fn.init = function(e, t, n) {
      var r, i;
      if (!e) return this;
      if (n = n || Le, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ie.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof Se ? t[0] : t, Se.merge(this, Se.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ce, !0)), Oe.test(r[1]) && Se.isPlainObject(t))
            for (r in t) Ce(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this
        }
        return i = ce.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : Ce(e) ? void 0 !== n.ready ? n.ready(e) : e(Se) : Se.makeArray(e, this)
    }).prototype = Se.fn, Le = Se(ce);
    var qe = /^(?:parents|prev(?:Until|All))/,
      Pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    Se.fn.extend({
      has: function(e) {
        var t = Se(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; e < n; e++)
            if (Se.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        var n, r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && Se(e);
        if (!Ae.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Se.find.matchesSelector(n, e))) {
                o.push(n);
                break
              } return this.pushStack(o.length > 1 ? Se.uniqueSort(o) : o)
      },
      index: function(e) {
        return e ? "string" == typeof e ? ve.call(Se(e), this[0]) : ve.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(Se.uniqueSort(Se.merge(this.get(), Se(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), Se.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return je(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return je(e, "parentNode", n)
      },
      next: function(e) {
        return f(e, "nextSibling")
      },
      prev: function(e) {
        return f(e, "previousSibling")
      },
      nextAll: function(e) {
        return je(e, "nextSibling")
      },
      prevAll: function(e) {
        return je(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return je(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return je(e, "previousSibling", n)
      },
      siblings: function(e) {
        return De((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return De(e.firstChild)
      },
      contents: function(e) {
        return l(e, "iframe") ? e.contentDocument : (l(e, "template") && (e = e.content || e), Se.merge([], e.childNodes))
      }
    }, function(e, t) {
      Se.fn[e] = function(n, r) {
        var i = Se.map(this, t, n);
        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Se.filter(r, i)), this.length > 1 && (Pe[e] || Se.uniqueSort(i), qe.test(e) && i.reverse()), this.pushStack(i)
      }
    });
    var Me = /[^\x20\t\r\n\f]+/g;
    Se.Callbacks = function(e) {
      e = "string" == typeof e ? d(e) : Se.extend({}, e);
      var t, n, r, i, o = [],
        a = [],
        u = -1,
        l = function() {
          for (i = i || e.once, r = t = !0; a.length; u = -1)
            for (n = a.shift(); ++u < o.length;) !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1);
          e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        },
        c = {
          add: function() {
            return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) {
              Se.each(n, function(n, r) {
                Ce(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== s(r) && t(r)
              })
            }(arguments), n && !t && l()), this
          },
          remove: function() {
            return Se.each(arguments, function(e, t) {
              for (var n;
                   (n = Se.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u--
            }), this
          },
          has: function(e) {
            return e ? Se.inArray(e, o) > -1 : o.length > 0
          },
          empty: function() {
            return o && (o = []), this
          },
          disable: function() {
            return i = a = [], o = n = "", this
          },
          disabled: function() {
            return !o
          },
          lock: function() {
            return i = a = [], n || t || (o = n = ""), this
          },
          locked: function() {
            return !!i
          },
          fireWith: function(e, n) {
            return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
          },
          fire: function() {
            return c.fireWith(this, arguments), this
          },
          fired: function() {
            return !!r
          }
        };
      return c
    }, Se.extend({
      Deferred: function(e) {
        var t = [
            ["notify", "progress", Se.Callbacks("memory"), Se.Callbacks("memory"), 2],
            ["resolve", "done", Se.Callbacks("once memory"), Se.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", Se.Callbacks("once memory"), Se.Callbacks("once memory"), 1, "rejected"]
          ],
          r = "pending",
          i = {
            state: function() {
              return r
            },
            always: function() {
              return o.done(arguments).fail(arguments), this
            },
            catch: function(e) {
              return i.then(null, e)
            },
            pipe: function() {
              var e = arguments;
              return Se.Deferred(function(n) {
                Se.each(t, function(t, r) {
                  var i = Ce(e[r[4]]) && e[r[4]];
                  o[r[1]](function() {
                    var e = i && i.apply(this, arguments);
                    e && Ce(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            then: function(e, r, i) {
              function o(e, t, r, i) {
                return function() {
                  var s = this,
                    u = arguments,
                    l = function() {
                      var n, l;
                      if (!(e < a)) {
                        if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                        l = n && ("object" == typeof n || "function" == typeof n) && n.then, Ce(l) ? i ? l.call(n, o(a, t, p, i), o(a, t, h, i)) : (a++, l.call(n, o(a, t, p, i), o(a, t, h, i), o(a, t, p, t.notifyWith))) : (r !== p && (s = void 0, u = [n]), (i || t.resolveWith)(s, u))
                      }
                    },
                    c = i ? l : function() {
                      try {
                        l()
                      } catch (n) {
                        Se.Deferred.exceptionHook && Se.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= a && (r !== h && (s = void 0, u = [n]), t.rejectWith(s, u))
                      }
                    };
                  e ? c() : (Se.Deferred.getStackHook && (c.stackTrace = Se.Deferred.getStackHook()), n.setTimeout(c))
                }
              }
              var a = 0;
              return Se.Deferred(function(n) {
                t[0][3].add(o(0, n, Ce(i) ? i : p, n.notifyWith)), t[1][3].add(o(0, n, Ce(e) ? e : p)), t[2][3].add(o(0, n, Ce(r) ? r : h))
              }).promise()
            },
            promise: function(e) {
              return null != e ? Se.extend(e, i) : i
            }
          },
          o = {};
        return Se.each(t, function(e, n) {
          var a = n[2],
            s = n[5];
          i[n[1]] = a.add, s && a.add(function() {
            r = s
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function() {
            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
          }, o[n[0] + "With"] = a.fireWith
        }), i.promise(o), e && e.call(o, o), o
      },
      when: function(e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          i = de.call(arguments),
          o = Se.Deferred(),
          a = function(e) {
            return function(n) {
              r[e] = this, i[e] = arguments.length > 1 ? de.call(arguments) : n, --t || o.resolveWith(r, i)
            }
          };
        if (t <= 1 && (v(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || Ce(i[n] && i[n].then))) return o.then();
        for (; n--;) v(i[n], a(n), o.reject);
        return o.promise()
      }
    });
    var He = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    Se.Deferred.exceptionHook = function(e, t) {
      n.console && n.console.warn && e && He.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, Se.readyException = function(e) {
      n.setTimeout(function() {
        throw e
      })
    };
    var _e = Se.Deferred();
    Se.fn.ready = function(e) {
      return _e.then(e).catch(function(e) {
        Se.readyException(e)
      }), this
    }, Se.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --Se.readyWait : Se.isReady) || (Se.isReady = !0, !0 !== e && --Se.readyWait > 0 || _e.resolveWith(ce, [Se]))
      }
    }), Se.ready.then = _e.then, "complete" === ce.readyState || "loading" !== ce.readyState && !ce.documentElement.doScroll ? n.setTimeout(Se.ready) : (ce.addEventListener("DOMContentLoaded", g), n.addEventListener("load", g));
    var Re = function(e, t, n, r, i, o, a) {
        var u = 0,
          l = e.length,
          c = null == n;
        if ("object" === s(n)) {
          i = !0;
          for (u in n) Re(e, t, u, n[u], !0, o, a)
        } else if (void 0 !== r && (i = !0, Ce(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
          return c.call(Se(e), n)
        })), t))
          for (; u < l; u++) t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : o
      },
      Fe = /^-ms-/,
      We = /-([a-z])/g,
      Be = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };
    w.uid = 1, w.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, Be(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, n) {
        var r, i = this.cache(e);
        if ("string" == typeof t) i[y(t)] = n;
        else
          for (r in t) i[y(r)] = t[r];
        return i
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][y(t)]
      },
      access: function(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
        var n, r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            Array.isArray(t) ? t = t.map(y) : (t = y(t), t = t in r ? [t] : t.match(Me) || []), n = t.length;
            for (; n--;) delete r[t[n]]
          }(void 0 === t || Se.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !Se.isEmptyObject(t)
      }
    };
    var Ue = new w,
      $e = new w,
      ze = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Xe = /[A-Z]/g;
    Se.extend({
      hasData: function(e) {
        return $e.hasData(e) || Ue.hasData(e)
      },
      data: function(e, t, n) {
        return $e.access(e, t, n)
      },
      removeData: function(e, t) {
        $e.remove(e, t)
      },
      _data: function(e, t, n) {
        return Ue.access(e, t, n)
      },
      _removeData: function(e, t) {
        Ue.remove(e, t)
      }
    }), Se.fn.extend({
      data: function(e, t) {
        var n, r, i, o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (this.length && (i = $e.get(o), 1 === o.nodeType && !Ue.get(o, "hasDataAttrs"))) {
            for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = y(r.slice(5)), b(o, r, i[r])));
            Ue.set(o, "hasDataAttrs", !0)
          }
          return i
        }
        return "object" == typeof e ? this.each(function() {
          $e.set(this, e)
        }) : Re(this, function(t) {
          var n;
          if (o && void 0 === t) {
            if (void 0 !== (n = $e.get(o, e))) return n;
            if (void 0 !== (n = b(o, e))) return n
          } else this.each(function() {
            $e.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
        return this.each(function() {
          $e.remove(this, e)
        })
      }
    }), Se.extend({
      queue: function(e, t, n) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = Ue.get(e, t), n && (!r || Array.isArray(n) ? r = Ue.access(e, t, Se.makeArray(n)) : r.push(n)), r || []
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = Se.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = Se._queueHooks(e, t),
          a = function() {
            Se.dequeue(e, t)
          };
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return Ue.get(e, n) || Ue.access(e, n, {
          empty: Se.Callbacks("once memory").add(function() {
            Ue.remove(e, [t + "queue", n])
          })
        })
      }
    }), Se.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Se.queue(this[0], e) : void 0 === t ? this : this.each(function() {
          var n = Se.queue(this, e, t);
          Se._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Se.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          Se.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var n, r = 1,
          i = Se.Deferred(),
          o = this,
          a = this.length,
          s = function() {
            --r || i.resolveWith(o, [o])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Ue.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t)
      }
    });
    var Ve = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ye = new RegExp("^(?:([+-])=|)(" + Ve + ")([a-z%]*)$", "i"),
      Ge = ["Top", "Right", "Bottom", "Left"],
      Je = function(e, t) {
        return e = t || e, "none" === e.style.display || "" === e.style.display && Se.contains(e.ownerDocument, e) && "none" === Se.css(e, "display")
      },
      Qe = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
      },
      Ke = {};
    Se.fn.extend({
      show: function() {
        return k(this, !0)
      },
      hide: function() {
        return k(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          Je(this) ? Se(this).show() : Se(this).hide()
        })
      }
    });
    var Ze = /^(?:checkbox|radio)$/i,
      et = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      tt = /^$|^module$|\/(?:java|ecma)script/i,
      nt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    nt.optgroup = nt.option, nt.tbody = nt.tfoot = nt.colgroup = nt.caption = nt.thead, nt.th = nt.td;
    var rt = /<|&#?\w+;/;
    ! function() {
      var e = ce.createDocumentFragment(),
        t = e.appendChild(ce.createElement("div")),
        n = ce.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), be.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", be.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var it = ce.documentElement,
      ot = /^key/,
      at = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      st = /^([^.]*)(?:\.(.+)|)/;
    Se.event = {
      global: {},
      add: function(e, t, n, r, i) {
        var o, a, s, u, l, c, f, d, p, h, v, g = Ue.get(e);
        if (g)
          for (n.handler && (o = n, n = o.handler, i = o.selector), i && Se.find.matchesSelector(it, i), n.guid || (n.guid = Se.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
            return void 0 !== Se && Se.event.triggered !== t.type ? Se.event.dispatch.apply(e, arguments) : void 0
          }), t = (t || "").match(Me) || [""], l = t.length; l--;) s = st.exec(t[l]) || [], p = v = s[1], h = (s[2] || "").split(".").sort(), p && (f = Se.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = Se.event.special[p] || {}, c = Se.extend({
            type: p,
            origType: v,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && Se.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), Se.event.global[p] = !0)
      },
      remove: function(e, t, n, r, i) {
        var o, a, s, u, l, c, f, d, p, h, v, g = Ue.hasData(e) && Ue.get(e);
        if (g && (u = g.events)) {
          for (t = (t || "").match(Me) || [""], l = t.length; l--;)
            if (s = st.exec(t[l]) || [], p = v = s[1], h = (s[2] || "").split(".").sort(), p) {
              for (f = Se.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && v !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
              a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || Se.removeEvent(e, p, g.handle), delete u[p])
            } else
              for (p in u) Se.event.remove(e, p + t[l], n, r, !0);
          Se.isEmptyObject(u) && Ue.remove(e, "handle events")
        }
      },
      dispatch: function(e) {
        var t, n, r, i, o, a, s = Se.event.fix(e),
          u = new Array(arguments.length),
          l = (Ue.get(this, "events") || {})[s.type] || [],
          c = Se.event.special[s.type] || {};
        for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
        if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
          for (a = Se.event.handlers.call(this, s, l), t = 0;
               (i = a[t++]) && !s.isPropagationStopped();)
            for (s.currentTarget = i.elem, n = 0;
                 (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((Se.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, s), s.result
        }
      },
      handlers: function(e, t) {
        var n, r, i, o, a, s = [],
          u = t.delegateCount,
          l = e.target;
        if (u && l.nodeType && !("click" === e.type && e.button >= 1))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], a = {}, n = 0; n < u; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? Se(i, this).index(l) > -1 : Se.find(i, this, null, [l]).length), a[i] && o.push(r);
              o.length && s.push({
                elem: l,
                handlers: o
              })
            } return l = this, u < t.length && s.push({
          elem: l,
          handlers: t.slice(u)
        }), s
      },
      addProp: function(e, t) {
        Object.defineProperty(Se.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: Ce(t) ? function() {
            if (this.originalEvent) return t(this.originalEvent)
          } : function() {
            if (this.originalEvent) return this.originalEvent[e]
          },
          set: function(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            })
          }
        })
      },
      fix: function(e) {
        return e[Se.expando] ? e : new Se.Event(e)
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== A() && this.focus) return this.focus(), !1
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === A() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            if ("checkbox" === this.type && this.click && l(this, "input")) return this.click(), !1
          },
          _default: function(e) {
            return l(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, Se.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, Se.Event = function(e, t) {
      if (!(this instanceof Se.Event)) return new Se.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? j : D, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Se.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Se.expando] = !0
    }, Se.Event.prototype = {
      constructor: Se.Event,
      isDefaultPrevented: D,
      isPropagationStopped: D,
      isImmediatePropagationStopped: D,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = j, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = j, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = j, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, Se.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
        var t = e.button;
        return null == e.which && ot.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && at.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
    }, Se.event.addProp), Se.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      Se.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n, r = this,
            i = e.relatedTarget,
            o = e.handleObj;
          return i && (i === r || Se.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), Se.fn.extend({
      on: function(e, t, n, r) {
        return O(this, e, t, n, r)
      },
      one: function(e, t, n, r) {
        return O(this, e, t, n, r, 1)
      },
      off: function(e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Se(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = D), this.each(function() {
          Se.event.remove(this, e, n, t)
        })
      }
    });
    var ut = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      lt = /<script|<style|<link/i,
      ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Se.extend({
      htmlPrefilter: function(e) {
        return e.replace(ut, "<$1></$2>")
      },
      clone: function(e, t, n) {
        var r, i, o, a, s = e.cloneNode(!0),
          u = Se.contains(e.ownerDocument, e);
        if (!(be.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Se.isXMLDoc(e)))
          for (a = S(s), o = S(e), r = 0, i = o.length; r < i; r++) M(o[r], a[r]);
        if (t)
          if (n)
            for (o = o || S(e), a = a || S(s), r = 0, i = o.length; r < i; r++) P(o[r], a[r]);
          else P(e, s);
        return a = S(s, "script"), a.length > 0 && E(a, !u && S(e, "script")), s
      },
      cleanData: function(e) {
        for (var t, n, r, i = Se.event.special, o = 0; void 0 !== (n = e[o]); o++)
          if (Be(n)) {
            if (t = n[Ue.expando]) {
              if (t.events)
                for (r in t.events) i[r] ? Se.event.remove(n, r) : Se.removeEvent(n, r, t.handle);
              n[Ue.expando] = void 0
            }
            n[$e.expando] && (n[$e.expando] = void 0)
          }
      }
    }), Se.fn.extend({
      detach: function(e) {
        return _(this, e, !0)
      },
      remove: function(e) {
        return _(this, e)
      },
      text: function(e) {
        return Re(this, function(e) {
          return void 0 === e ? Se.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return H(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            L(this, e).appendChild(e)
          }
        })
      },
      prepend: function() {
        return H(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = L(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return H(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return H(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Se.cleanData(S(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return Se.clone(this, e, t)
        })
      },
      html: function(e) {
        return Re(this, function(e) {
          var t = this[0] || {},
            n = 0,
            r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !lt.test(e) && !nt[(et.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = Se.htmlPrefilter(e);
            try {
              for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (Se.cleanData(S(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = [];
        return H(this, arguments, function(t) {
          var n = this.parentNode;
          Se.inArray(this, e) < 0 && (Se.cleanData(S(this)), n && n.replaceChild(t, this))
        }, e)
      }
    }), Se.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      Se.fn[e] = function(e) {
        for (var n, r = [], i = Se(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), Se(i[a])[t](n), he.apply(r, n.get());
        return this.pushStack(r)
      }
    });
    var dt = new RegExp("^(" + Ve + ")(?!px)[a-z%]+$", "i"),
      pt = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e)
      },
      ht = new RegExp(Ge.join("|"), "i");
    ! function() {
      function e() {
        if (l) {
          u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", it.appendChild(u).appendChild(l);
          var e = n.getComputedStyle(l);
          r = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", o = 36 === l.offsetWidth || "absolute", it.removeChild(u), l = null
        }
      }

      function t(e) {
        return Math.round(parseFloat(e))
      }
      var r, i, o, a, s, u = ce.createElement("div"),
        l = ce.createElement("div");
      l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", be.clearCloneStyle = "content-box" === l.style.backgroundClip, Se.extend(be, {
        boxSizingReliable: function() {
          return e(), i
        },
        pixelBoxStyles: function() {
          return e(), a
        },
        pixelPosition: function() {
          return e(), r
        },
        reliableMarginLeft: function() {
          return e(), s
        },
        scrollboxSize: function() {
          return e(), o
        }
      }))
    }();
    var vt = /^(none|table(?!-c[ea]).+)/,
      gt = /^--/,
      mt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      yt = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      wt = ["Webkit", "Moz", "ms"],
      xt = ce.createElement("div").style;
    Se.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = R(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i, o, a, s = y(t),
            u = gt.test(t),
            l = e.style;
          if (u || (t = B(s)), a = Se.cssHooks[t] || Se.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
          o = typeof n, "string" === o && (i = Ye.exec(n)) && i[1] && (n = C(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (Se.cssNumber[s] ? "" : "px")), be.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
        }
      },
      css: function(e, t, n, r) {
        var i, o, a, s = y(t);
        return gt.test(t) || (t = B(s)), a = Se.cssHooks[t] || Se.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = R(e, t, r)), "normal" === i && t in yt && (i = yt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
      }
    }), Se.each(["height", "width"], function(e, t) {
      Se.cssHooks[t] = {
        get: function(e, n, r) {
          if (n) return !vt.test(Se.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? z(e, t, r) : Qe(e, mt, function() {
            return z(e, t, r)
          })
        },
        set: function(e, n, r) {
          var i, o = pt(e),
            a = "border-box" === Se.css(e, "boxSizing", !1, o),
            s = r && $(e, t, r, a, o);
          return a && be.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - $(e, t, "border", !1, o) - .5)), s && (i = Ye.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = Se.css(e, t)), U(e, n, s)
        }
      }
    }), Se.cssHooks.marginLeft = F(be.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat(R(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left
      })) + "px"
    }), Se.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      Se.cssHooks[e + t] = {
        expand: function(n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Ge[r] + t] = o[r] || o[r - 2] || o[0];
          return i
        }
      }, "margin" !== e && (Se.cssHooks[e + t].set = U)
    }), Se.fn.extend({
      css: function(e, t) {
        return Re(this, function(e, t, n) {
          var r, i, o = {},
            a = 0;
          if (Array.isArray(t)) {
            for (r = pt(e), i = t.length; a < i; a++) o[t[a]] = Se.css(e, t[a], !1, r);
            return o
          }
          return void 0 !== n ? Se.style(e, t, n) : Se.css(e, t)
        }, e, t, arguments.length > 1)
      }
    }), Se.Tween = X, X.prototype = {
      constructor: X,
      init: function(e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || Se.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Se.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = X.propHooks[this.prop];
        return e && e.get ? e.get(this) : X.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = X.propHooks[this.prop];
        return this.options.duration ? this.pos = t = Se.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : X.propHooks._default.set(this), this
      }
    }, X.prototype.init.prototype = X.prototype, X.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Se.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
        },
        set: function(e) {
          Se.fx.step[e.prop] ? Se.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Se.cssProps[e.prop]] && !Se.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Se.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, X.propHooks.scrollTop = X.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, Se.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, Se.fx = X.prototype.init, Se.fx.step = {};
    var bt, Ct, Tt = /^(?:toggle|show|hide)$/,
      kt = /queueHooks$/;
    Se.Animation = Se.extend(Z, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return C(n.elem, e, Ye.exec(t), n), n
        }]
      },
      tweener: function(e, t) {
        Ce(e) ? (t = e, e = ["*"]) : e = e.match(Me);
        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Z.tweeners[n] = Z.tweeners[n] || [], Z.tweeners[n].unshift(t)
      },
      prefilters: [Q],
      prefilter: function(e, t) {
        t ? Z.prefilters.unshift(e) : Z.prefilters.push(e)
      }
    }), Se.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? Se.extend({}, e) : {
        complete: n || !n && t || Ce(e) && e,
        duration: e,
        easing: n && t || t && !Ce(t) && t
      };
      return Se.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Se.fx.speeds ? r.duration = Se.fx.speeds[r.duration] : r.duration = Se.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        Ce(r.old) && r.old.call(this), r.queue && Se.dequeue(this, r.queue)
      }, r
    }, Se.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(Je).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r)
      },
      animate: function(e, t, n, r) {
        var i = Se.isEmptyObject(e),
          o = Se.speed(t, n, r),
          a = function() {
            var t = Z(this, Se.extend({}, e), o);
            (i || Ue.get(this, "finish")) && t.stop(!0)
          };
        return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
      },
      stop: function(e, t, n) {
        var r = function(e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            i = null != e && e + "queueHooks",
            o = Se.timers,
            a = Ue.get(this);
          if (i) a[i] && a[i].stop && r(a[i]);
          else
            for (i in a) a[i] && a[i].stop && kt.test(i) && r(a[i]);
          for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
          !t && n || Se.dequeue(this, e)
        })
      },
      finish: function(e) {
        return !1 !== e && (e = e || "fx"), this.each(function() {
          var t, n = Ue.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = Se.timers,
            a = r ? r.length : 0;
          for (n.finish = !0, Se.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
          delete n.finish
        })
      }
    }), Se.each(["toggle", "show", "hide"], function(e, t) {
      var n = Se.fn[t];
      Se.fn[t] = function(e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(G(t, !0), e, r, i)
      }
    }), Se.each({
      slideDown: G("show"),
      slideUp: G("hide"),
      slideToggle: G("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      Se.fn[e] = function(e, n, r) {
        return this.animate(t, e, n, r)
      }
    }), Se.timers = [], Se.fx.tick = function() {
      var e, t = 0,
        n = Se.timers;
      for (bt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || Se.fx.stop(), bt = void 0
    }, Se.fx.timer = function(e) {
      Se.timers.push(e), Se.fx.start()
    }, Se.fx.interval = 13, Se.fx.start = function() {
      Ct || (Ct = !0, V())
    }, Se.fx.stop = function() {
      Ct = null
    }, Se.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, Se.fn.delay = function(e, t) {
      return e = Se.fx ? Se.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, r) {
        var i = n.setTimeout(t, e);
        r.stop = function() {
          n.clearTimeout(i)
        }
      })
    },
      function() {
        var e = ce.createElement("input"),
          t = ce.createElement("select"),
          n = t.appendChild(ce.createElement("option"));
        e.type = "checkbox", be.checkOn = "" !== e.value, be.optSelected = n.selected, e = ce.createElement("input"), e.value = "t", e.type = "radio", be.radioValue = "t" === e.value
      }();
    var St, Et = Se.expr.attrHandle;
    Se.fn.extend({
      attr: function(e, t) {
        return Re(this, Se.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
        return this.each(function() {
          Se.removeAttr(this, e)
        })
      }
    }), Se.extend({
      attr: function(e, t, n) {
        var r, i, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? Se.prop(e, t, n) : (1 === o && Se.isXMLDoc(e) || (i = Se.attrHooks[t.toLowerCase()] || (Se.expr.match.bool.test(t) ? St : void 0)), void 0 !== n ? null === n ? void Se.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = Se.find.attr(e, t), null == r ? void 0 : r))
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!be.radioValue && "radio" === t && l(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, r = 0,
          i = t && t.match(Me);
        if (i && 1 === e.nodeType)
          for (; n = i[r++];) e.removeAttribute(n)
      }
    }), St = {
      set: function(e, t, n) {
        return !1 === t ? Se.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, Se.each(Se.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = Et[t] || Se.find.attr;
      Et[t] = function(e, t, r) {
        var i, o, a = t.toLowerCase();
        return r || (o = Et[a], Et[a] = i, i = null != n(e, t, r) ? a : null, Et[a] = o), i
      }
    });
    var Nt = /^(?:input|select|textarea|button)$/i,
      jt = /^(?:a|area)$/i;
    Se.fn.extend({
      prop: function(e, t) {
        return Re(this, Se.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[Se.propFix[e] || e]
        })
      }
    }), Se.extend({
      prop: function(e, t, n) {
        var r, i, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Se.isXMLDoc(e) || (t = Se.propFix[t] || t, i = Se.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = Se.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : Nt.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), be.optSelected || (Se.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), Se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      Se.propFix[this.toLowerCase()] = this
    }), Se.fn.extend({
      addClass: function(e) {
        var t, n, r, i, o, a, s, u = 0;
        if (Ce(e)) return this.each(function(t) {
          Se(this).addClass(e.call(this, t, te(this)))
        });
        if (t = ne(e), t.length)
          for (; n = this[u++];)
            if (i = te(n), r = 1 === n.nodeType && " " + ee(i) + " ") {
              for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              s = ee(r), i !== s && n.setAttribute("class", s)
            } return this
      },
      removeClass: function(e) {
        var t, n, r, i, o, a, s, u = 0;
        if (Ce(e)) return this.each(function(t) {
          Se(this).removeClass(e.call(this, t, te(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if (t = ne(e), t.length)
          for (; n = this[u++];)
            if (i = te(n), r = 1 === n.nodeType && " " + ee(i) + " ") {
              for (a = 0; o = t[a++];)
                for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
              s = ee(r), i !== s && n.setAttribute("class", s)
            } return this
      },
      toggleClass: function(e, t) {
        var n = typeof e,
          r = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : Ce(e) ? this.each(function(n) {
          Se(this).toggleClass(e.call(this, n, te(this), t), t)
        }) : this.each(function() {
          var t, i, o, a;
          if (r)
            for (i = 0, o = Se(this), a = ne(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          else void 0 !== e && "boolean" !== n || (t = te(this), t && Ue.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ue.get(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t, n, r = 0;
        for (t = " " + e + " "; n = this[r++];)
          if (1 === n.nodeType && (" " + ee(te(n)) + " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var Dt = /\r/g;
    Se.fn.extend({
      val: function(e) {
        var t, n, r, i = this[0]; {
          if (arguments.length) return r = Ce(e), this.each(function(n) {
            var i;
            1 === this.nodeType && (i = r ? e.call(this, n, Se(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = Se.map(i, function(e) {
              return null == e ? "" : e + ""
            })), (t = Se.valHooks[this.type] || Se.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
          });
          if (i) return (t = Se.valHooks[i.type] || Se.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)
        }
      }
    }), Se.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = Se.find.attr(e, "value");
            return null != t ? t : ee(Se.text(e))
          }
        },
        select: {
          get: function(e) {
            var t, n, r, i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup"))) {
                if (t = Se(n).val(), a) return t;
                s.push(t)
              } return s
          },
          set: function(e, t) {
            for (var n, r, i = e.options, o = Se.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = Se.inArray(Se.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o
          }
        }
      }
    }), Se.each(["radio", "checkbox"], function() {
      Se.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t)) return e.checked = Se.inArray(Se(e).val(), t) > -1
        }
      }, be.checkOn || (Se.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    }), be.focusin = "onfocusin" in n;
    var At = /^(?:focusinfocus|focusoutblur)$/,
      Ot = function(e) {
        e.stopPropagation()
      };
    Se.extend(Se.event, {
      trigger: function(e, t, r, i) {
        var o, a, s, u, l, c, f, d, p = [r || ce],
          h = ye.call(e, "type") ? e.type : e,
          v = ye.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = d = s = r = r || ce, 3 !== r.nodeType && 8 !== r.nodeType && !At.test(h + Se.event.triggered) && (h.indexOf(".") > -1 && (v = h.split("."), h = v.shift(), v.sort()), l = h.indexOf(":") < 0 && "on" + h, e = e[Se.expando] ? e : new Se.Event(h, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : Se.makeArray(t, [e]), f = Se.event.special[h] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, t))) {
          if (!i && !f.noBubble && !Te(r)) {
            for (u = f.delegateType || h, At.test(u + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
            s === (r.ownerDocument || ce) && p.push(s.defaultView || s.parentWindow || n)
          }
          for (o = 0;
               (a = p[o++]) && !e.isPropagationStopped();) d = a, e.type = o > 1 ? u : f.bindType || h, c = (Ue.get(a, "events") || {})[e.type] && Ue.get(a, "handle"), c && c.apply(a, t), (c = l && a[l]) && c.apply && Be(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
          return e.type = h, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), t) || !Be(r) || l && Ce(r[h]) && !Te(r) && (s = r[l], s && (r[l] = null), Se.event.triggered = h, e.isPropagationStopped() && d.addEventListener(h, Ot), r[h](), e.isPropagationStopped() && d.removeEventListener(h, Ot), Se.event.triggered = void 0, s && (r[l] = s)), e.result
        }
      },
      simulate: function(e, t, n) {
        var r = Se.extend(new Se.Event, n, {
          type: e,
          isSimulated: !0
        });
        Se.event.trigger(r, null, t)
      }
    }), Se.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          Se.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return Se.event.trigger(e, t, n, !0)
      }
    }), be.focusin || Se.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var n = function(e) {
        Se.event.simulate(t, e.target, Se.event.fix(e))
      };
      Se.event.special[t] = {
        setup: function() {
          var r = this.ownerDocument || this,
            i = Ue.access(r, t);
          i || r.addEventListener(e, n, !0), Ue.access(r, t, (i || 0) + 1)
        },
        teardown: function() {
          var r = this.ownerDocument || this,
            i = Ue.access(r, t) - 1;
          i ? Ue.access(r, t, i) : (r.removeEventListener(e, n, !0), Ue.remove(r, t))
        }
      }
    });
    var Lt = n.location,
      It = Date.now(),
      qt = /\?/;
    Se.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new n.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || Se.error("Invalid XML: " + e), t
    };
    var Pt = /\[\]$/,
      Mt = /\r?\n/g,
      Ht = /^(?:submit|button|image|reset|file)$/i,
      _t = /^(?:input|select|textarea|keygen)/i;
    Se.param = function(e, t) {
      var n, r = [],
        i = function(e, t) {
          var n = Ce(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
      if (Array.isArray(e) || e.jquery && !Se.isPlainObject(e)) Se.each(e, function() {
        i(this.name, this.value)
      });
      else
        for (n in e) re(n, e[n], t, i);
      return r.join("&")
    }, Se.fn.extend({
      serialize: function() {
        return Se.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = Se.prop(this, "elements");
          return e ? Se.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !Se(this).is(":disabled") && _t.test(this.nodeName) && !Ht.test(e) && (this.checked || !Ze.test(e))
        }).map(function(e, t) {
          var n = Se(this).val();
          return null == n ? null : Array.isArray(n) ? Se.map(n, function(e) {
            return {
              name: t.name,
              value: e.replace(Mt, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(Mt, "\r\n")
          }
        }).get()
      }
    });
    var Rt = /%20/g,
      Ft = /#.*$/,
      Wt = /([?&])_=[^&]*/,
      Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      $t = /^(?:GET|HEAD)$/,
      zt = /^\/\//,
      Xt = {},
      Vt = {},
      Yt = "*/".concat("*"),
      Gt = ce.createElement("a");
    Gt.href = Lt.href, Se.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Lt.href,
        type: "GET",
        isLocal: Ut.test(Lt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Yt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": Se.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? ae(ae(e, Se.ajaxSettings), t) : ae(Se.ajaxSettings, e)
      },
      ajaxPrefilter: ie(Xt),
      ajaxTransport: ie(Vt),
      ajax: function(e, t) {
        function r(e, t, r, s) {
          var l, d, p, x, b, C = t;
          c || (c = !0, u && n.clearTimeout(u), i = void 0, a = s || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, r && (x = se(h, T, r)), x = ue(h, x, T, l), l ? (h.ifModified && (b = T.getResponseHeader("Last-Modified"), b && (Se.lastModified[o] = b), (b = T.getResponseHeader("etag")) && (Se.etag[o] = b)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, d = x.data, p = x.error, l = !p)) : (p = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || C) + "", l ? m.resolveWith(v, [d, C, T]) : m.rejectWith(v, [T, C, p]), T.statusCode(w), w = void 0, f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [T, h, l ? d : p]), y.fireWith(v, [T, C]), f && (g.trigger("ajaxComplete", [T, h]), --Se.active || Se.event.trigger("ajaxStop")))
        }
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var i, o, a, s, u, l, c, f, d, p, h = Se.ajaxSetup({}, t),
          v = h.context || h,
          g = h.context && (v.nodeType || v.jquery) ? Se(v) : Se.event,
          m = Se.Deferred(),
          y = Se.Callbacks("once memory"),
          w = h.statusCode || {},
          x = {},
          b = {},
          C = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; t = Bt.exec(a);) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return c ? a : null
            },
            setRequestHeader: function(e, t) {
              return null == c && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, x[e] = t), this
            },
            overrideMimeType: function(e) {
              return null == c && (h.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (c) T.always(e[T.status]);
                else
                  for (t in e) w[t] = [w[t], e[t]];
              return this
            },
            abort: function(e) {
              var t = e || C;
              return i && i.abort(t), r(0, t), this
            }
          };
        if (m.promise(T), h.url = ((e || h.url || Lt.href) + "").replace(zt, Lt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Me) || [""], null == h.crossDomain) {
          l = ce.createElement("a");
          try {
            l.href = h.url, l.href = l.href, h.crossDomain = Gt.protocol + "//" + Gt.host != l.protocol + "//" + l.host
          } catch (e) {
            h.crossDomain = !0
          }
        }
        if (h.data && h.processData && "string" != typeof h.data && (h.data = Se.param(h.data, h.traditional)), oe(Xt, h, t, T), c) return T;
        f = Se.event && h.global, f && 0 == Se.active++ && Se.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !$t.test(h.type), o = h.url.replace(Ft, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Rt, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (qt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Wt, "$1"), p = (qt.test(o) ? "&" : "?") + "_=" + It++ + p), h.url = o + p), h.ifModified && (Se.lastModified[o] && T.setRequestHeader("If-Modified-Since", Se.lastModified[o]), Se.etag[o] && T.setRequestHeader("If-None-Match", Se.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : h.accepts["*"]);
        for (d in h.headers) T.setRequestHeader(d, h.headers[d]);
        if (h.beforeSend && (!1 === h.beforeSend.call(v, T, h) || c)) return T.abort();
        if (C = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), i = oe(Vt, h, t, T)) {
          if (T.readyState = 1, f && g.trigger("ajaxSend", [T, h]), c) return T;
          h.async && h.timeout > 0 && (u = n.setTimeout(function() {
            T.abort("timeout")
          }, h.timeout));
          try {
            c = !1, i.send(x, r)
          } catch (e) {
            if (c) throw e;
            r(-1, e)
          }
        } else r(-1, "No Transport");
        return T
      },
      getJSON: function(e, t, n) {
        return Se.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return Se.get(e, void 0, t, "script")
      }
    }), Se.each(["get", "post"], function(e, t) {
      Se[t] = function(e, n, r, i) {
        return Ce(n) && (i = i || r, r = n, n = void 0), Se.ajax(Se.extend({
          url: e,
          type: t,
          dataType: i,
          data: n,
          success: r
        }, Se.isPlainObject(e) && e))
      }
    }), Se._evalUrl = function(e) {
      return Se.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      })
    }, Se.fn.extend({
      wrapAll: function(e) {
        var t;
        return this[0] && (Ce(e) && (e = e.call(this[0])), t = Se(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this
      },
      wrapInner: function(e) {
        return Ce(e) ? this.each(function(t) {
          Se(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
          var t = Se(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = Ce(e);
        return this.each(function(n) {
          Se(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function(e) {
        return this.parent(e).not("body").each(function() {
          Se(this).replaceWith(this.childNodes)
        }), this
      }
    }), Se.expr.pseudos.hidden = function(e) {
      return !Se.expr.pseudos.visible(e)
    }, Se.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, Se.ajaxSettings.xhr = function() {
      try {
        return new n.XMLHttpRequest
      } catch (e) {}
    };
    var Jt = {
        0: 200,
        1223: 204
      },
      Qt = Se.ajaxSettings.xhr();
    be.cors = !!Qt && "withCredentials" in Qt, be.ajax = Qt = !!Qt, Se.ajaxTransport(function(e) {
      var t, r;
      if (be.cors || Qt && !e.crossDomain) return {
        send: function(i, o) {
          var a, s = e.xhr();
          if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (a in e.xhrFields) s[a] = e.xhrFields[a];
          e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
          for (a in i) s.setRequestHeader(a, i[a]);
          t = function(e) {
            return function() {
              t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Jt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                binary: s.response
              } : {
                text: s.responseText
              }, s.getAllResponseHeaders()))
            }
          }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
            4 === s.readyState && n.setTimeout(function() {
              t && r()
            })
          }, t = t("abort");
          try {
            s.send(e.hasContent && e.data || null)
          } catch (e) {
            if (t) throw e
          }
        },
        abort: function() {
          t && t()
        }
      }
    }), Se.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
    }), Se.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return Se.globalEval(e), e
        }
      }
    }), Se.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Se.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function(r, i) {
            t = Se("<script>").prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function(e) {
              t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
            }), ce.head.appendChild(t[0])
          },
          abort: function() {
            n && n()
          }
        }
      }
    });
    var Kt = [],
      Zt = /(=)\?(?=&|$)|\?\?/;
    Se.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Kt.pop() || Se.expando + "_" + It++;
        return this[e] = !0, e
      }
    }), Se.ajaxPrefilter("json jsonp", function(e, t, r) {
      var i, o, a, s = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
      if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = Ce(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Zt, "$1" + i) : !1 !== e.jsonp && (e.url += (qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
        return a || Se.error(i + " was not called"), a[0]
      }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
        a = arguments
      }, r.always(function() {
        void 0 === o ? Se(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Kt.push(i)), a && Ce(o) && o(a[0]), a = o = void 0
      }), "script"
    }), be.createHTMLDocument = function() {
      var e = ce.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), Se.parseHTML = function(e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && (n = t, t = !1);
      var r, i, o;
      return t || (be.createHTMLDocument ? (t = ce.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = ce.location.href, t.head.appendChild(r)) : t = ce), i = Oe.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = N([e], t, o), o && o.length && Se(o).remove(), Se.merge([], i.childNodes))
    }, Se.fn.load = function(e, t, n) {
      var r, i, o, a = this,
        s = e.indexOf(" ");
      return s > -1 && (r = ee(e.slice(s)), e = e.slice(0, s)), Ce(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Se.ajax({
        url: e,
        type: i || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        o = arguments, a.html(r ? Se("<div>").append(Se.parseHTML(e)).find(r) : e)
      }).always(n && function(e, t) {
        a.each(function() {
          n.apply(this, o || [e.responseText, t, e])
        })
      }), this
    }, Se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      Se.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), Se.expr.pseudos.animated = function(e) {
      return Se.grep(Se.timers, function(t) {
        return e === t.elem
      }).length
    }, Se.offset = {
      setOffset: function(e, t, n) {
        var r, i, o, a, s, u, l, c = Se.css(e, "position"),
          f = Se(e),
          d = {};
        "static" === c && (e.style.position = "relative"), s = f.offset(), o = Se.css(e, "top"), u = Se.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), Ce(t) && (t = t.call(e, n, Se.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
      }
    }, Se.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
          Se.offset.setOffset(this, e, t)
        });
        var t, n, r = this[0];
        if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        }
      },
      position: function() {
        if (this[0]) {
          var e, t, n, r = this[0],
            i = {
              top: 0,
              left: 0
            };
          if ("fixed" === Se.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Se.css(e, "position");) e = e.parentNode;
            e && e !== r && 1 === e.nodeType && (i = Se(e).offset(), i.top += Se.css(e, "borderTopWidth", !0), i.left += Se.css(e, "borderLeftWidth", !0))
          }
          return {
            top: t.top - i.top - Se.css(r, "marginTop", !0),
            left: t.left - i.left - Se.css(r, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && "static" === Se.css(e, "position");) e = e.offsetParent;
          return e || it
        })
      }
    }), Se.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var n = "pageYOffset" === t;
      Se.fn[e] = function(r) {
        return Re(this, function(e, r, i) {
          var o;
          if (Te(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
          o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
        }, e, r, arguments.length)
      }
    }), Se.each(["top", "left"], function(e, t) {
      Se.cssHooks[t] = F(be.pixelPosition, function(e, n) {
        if (n) return n = R(e, t), dt.test(n) ? Se(e).position()[t] + "px" : n
      })
    }), Se.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      Se.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, r) {
        Se.fn[r] = function(i, o) {
          var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
          return Re(this, function(t, n, i) {
            var o;
            return Te(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? Se.css(t, n, s) : Se.style(t, n, i, s)
          }, t, a ? i : void 0, a)
        }
      })
    }), Se.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
      Se.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), Se.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), Se.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
    }), Se.proxy = function(e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), Ce(e)) return r = de.call(arguments, 2), i = function() {
        return e.apply(t || this, r.concat(de.call(arguments)))
      }, i.guid = e.guid = e.guid || Se.guid++, i
    }, Se.holdReady = function(e) {
      e ? Se.readyWait++ : Se.ready(!0)
    }, Se.isArray = Array.isArray, Se.parseJSON = JSON.parse, Se.nodeName = l, Se.isFunction = Ce, Se.isWindow = Te, Se.camelCase = y, Se.type = s, Se.now = Date.now, Se.isNumeric = function(e) {
      var t = Se.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, r = [], void 0 !== (i = function() {
      return Se
    }.apply(t, r)) && (e.exports = i);
    var en = n.jQuery,
      tn = n.$;
    return Se.noConflict = function(e) {
      return n.$ === Se && (n.$ = tn), e && n.jQuery === Se && (n.jQuery = en), Se
    }, o || (n.jQuery = n.$ = Se), Se
  })
}, function(e, t, n) {
  "use strict";

  function r() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = (arguments[1], {
        priceSymbol: "",
        checkoutItems: []
      }),
      n = "";
    if (e.cartItems && e.cartItems.length > 0) {
      e.cartItems.map(function(e) {
        1 != e.displayType && e.displayType || t.checkoutItems.push({
          skuId: e.skuId,
          price: e.price,
          count: e.count
        }), t.priceSymbol = e.priceSymbol;
        var r = e.overviewUri && e.overviewUri.split(";")[0];
        n += '<li>\n                <div class="header-cart-container ' + (2 == e.displayType && "disabled") + '">\n                    <a href="' + e.detailUrl + '"><img src="' + r + '"></a>\n                    <div class="header-cart-goods-details">\n                        <p>' + s(e.skuName, 0) + "</p>\n                        <span>" + s(e.skuName, 1) + '</span>\n                        <div class="header-cart-price-count">\n                            <span class="header-cart-price-detail">' + e.priceSymbol + u(e.price) + "</span> <span>x " + e.count + '</span>\n                        </div>\n                    </div>\n                </div>\n                <p class="header-cart-priceChange">' + l(e) + "</p>\n            </li>"
      });
      var r = '<div class="header-cart-header">\n                            Your Cart <span>(' + (void 0 != e.realTotalCount ? e.realTotalCount : e.totalCount) + " items)</span>\n                        </div>\n                        <ul>\n                            " + n + '\n                        </ul>\n                        <div class="header-cart-footer">\n                            <p class="warning"><p>\n                            <p class=\'header-cart-total\'>\n                                Total: ' + (void 0 != e.realTotalCount ? e.realTotalCount : e.totalCount) + "\n                                <span>" + t.priceSymbol + " " + u(void 0 != e.realTotalCount ? e.realTotalPrice : e.totalPrice) + '</span></p>\n                            <div class="header-cart-footer-btns">\n                                <a class="header-cart-footer-btn check-cart-btn" href="' + a + 'in/user/cart">Check my cart</a>\n                                <a class="header-cart-footer-btn check-out-cart-btn" data-cart=\'' + (0, o.default)(t.checkoutItems) + "'>Checkout</a>\n                            </div>\n                        </div>";
      return n = null, r
    }
    return '<div class="header-cart-header">\n                Your Cart <span>(0 items)</span>\n            </div>\n        <div class="header-empty-cart">Your Shopping cart is empty</div>'
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.warningPrice = t.formatMoneyMethod = t.filterSkuName = void 0;
  var i = n(1),
    o = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i);
  t.renderCartListFragment = r;
  var a = window.location.hostname.indexOf("myoas.net") > 0 ? "https://test1-buy.myoas.net/" : window.location.hostname.indexOf("pre-buy") >= 0 ? "https://pre-buy.realme.com/" : "https://buy.realme.com/",
    s = t.filterSkuName = function(e, t) {
      return e.replace(/[(]/g, ";").replace(")", "").split(";")[t] || ""
    },
    u = t.formatMoneyMethod = function(e) {
      if (!e) return 0;
      var t = String(e).split("."),
        n = 0;
      if (1 == t.length) return n = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      if (2 == t.length) {
        var r = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return n = "00" == t[1] ? r : r + "." + t[1]
      }
      return n
    },
    l = t.warningPrice = function(e) {
      if (2 == e.displayType) return "Invalid order";
      var t = Number(e.price) - Number(e.originalPrice);
      return t > 0 ? "Price increased " + e.priceSymbol + t : t < 0 ? "Price decreased " + e.priceSymbol + Math.abs(t) : ""
    }
}, function(e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function i(e) {
    var t = p.default.getJSON("realme_cart");
    if (t && t.cartItems.length) {
      var n = t && t.cartItems,
        r = [];
      n.map(function(e) {
        r.push({
          skuId: e.skuId,
          count: e.count
        })
      });
      var i = {
        cartItems: r,
        addType: 1
      };
      e.ajax({
        type: "post",
        url: h + "in/cart/add",
        data: (0, f.default)(i),
        timeout: 8e3,
        contentType: "application/json",
        xhrFields: {
          withCredentials: !0
        },
        crossDomain: !0,
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      }).done(function(e) {
        if (200 == e.code) {
          var t = window.location.host.split(".");
          t.shift();
          var n = t.join(".");
          return void p.default.remove("realme_cart", {
            domain: n
          })
        }
      })
    }
  }

  function o(e, t) {
    if (!e || !e.totalCount) return void t("#header-cart-total-count").hide();
    var n = e.cartItems.filter(function(e) {
      return 1 == e.displayType || !e.displayType
    });
    if (!n.length) return void t("#header-cart-total-count").hide();
    var r = 0;
    return n.map(function(e) {
      r += e.count
    }), t("#header-cart-total-count").show().text(r), n
  }

  function a(e, t) {
    e.ajax({
      type: "get",
      url: h + "in/cart/info",
      timeout: 8e3,
      xhrFields: {
        withCredentials: !0
      },
      crossDomain: !0,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }).done(function(n) {
      if (200 == n.code) {
        var r = n.data,
          i = t(r);
        return e(".header-cart-list-detail").html(i), o(r, e), r
      }
    })
  }

  function s(e, t, n) {
    v || (v = !0, e.ajax({
      type: "post",
      url: h + "in/order/checkout",
      timeout: 8e3,
      contentType: "application/json",
      data: (0, f.default)(t),
      xhrFields: {
        withCredentials: !0
      },
      crossDomain: !0,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }).done(function(t) {
      if (v = !1, 20002 === t.code) {
        var r = t.data,
          i = l(r);
        e(".header-cart-footer .warning").text(i)
      }
      if (20128 === t.code) {
        var o = t.data,
          a = u(o);
        e(".header-cart-footer .warning").text(a)
      }
      200 == t.code && (window.location.href = n.slice(0, -1) + t.data)
    }))
  }

  function u(e) {
    if (!e || !e.length) return "";
    var t = [];
    if (e.map(function(e) {
      t.push(e.skuName)
    }), t.length > 1) {
      return t.slice(0, 2).join(", ") + "and others have exceeded the purchase limit"
    }
    return t.join(", ") + " have exceeded the purchase limit"
  }

  function l(e) {
    if (!e || !e.length) return "";
    var t = [];
    if (e.map(function(e) {
      t.push(e.skuName)
    }), e.length > 1) {
      return e.slice(0, 2).join(", ") + " and others  are out of stock"
    }
    return t.join(", ") + "  is out of stock"
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var c = n(1),
    f = r(c);
  t.syncLocalCartOnline = i, t.isShowCartCount = o, t.getMyCartDetails = a, t.checkoutMyCart = s;
  var d = n(7),
    p = r(d),
    h = window.location.hostname.indexOf("myoas.net") > 0 ? "https://test1-api.myoas.net/" : window.location.hostname.indexOf("pre-buy") >= 0 ? "https://pre-api.realme.com/" : "https://api.realme.com/",
    v = !1
}, function(e, t, n) {
  var r, i;
  ! function(o) {
    var a = !1;
    if (r = o, void 0 !== (i = "function" == typeof r ? r.call(t, n, t, e) : r) && (e.exports = i), a = !0, e.exports = o(), a = !0, !a) {
      var s = window.Cookies,
        u = window.Cookies = o();
      u.noConflict = function() {
        return window.Cookies = s, u
      }
    }
  }(function() {
    function e() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) t[r] = n[r]
      }
      return t
    }

    function t(n) {
      function r(t, i, o) {
        var a;
        if ("undefined" != typeof document) {
          if (arguments.length > 1) {
            if (o = e({
              path: "/"
            }, r.defaults, o), "number" == typeof o.expires) {
              var s = new Date;
              s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires), o.expires = s
            }
            o.expires = o.expires ? o.expires.toUTCString() : "";
            try {
              a = JSON.stringify(i), /^[\{\[]/.test(a) && (i = a)
            } catch (e) {}
            i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
            var u = "";
            for (var l in o) o[l] && (u += "; " + l, !0 !== o[l] && (u += "=" + o[l]));
            return document.cookie = t + "=" + i + u
          }
          t || (a = {});
          for (var c = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, d = 0; d < c.length; d++) {
            var p = c[d].split("="),
              h = p.slice(1).join("=");
            this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
            try {
              var v = p[0].replace(f, decodeURIComponent);
              if (h = n.read ? n.read(h, v) : n(h, v) || h.replace(f, decodeURIComponent), this.json) try {
                h = JSON.parse(h)
              } catch (e) {}
              if (t === v) {
                a = h;
                break
              }
              t || (a[v] = h)
            } catch (e) {}
          }
          return a
        }
      }
      return r.set = r, r.get = function(e) {
        return r.call(r, e)
      }, r.getJSON = function() {
        return r.apply({
          json: !0
        }, [].slice.call(arguments))
      }, r.defaults = {}, r.remove = function(t, n) {
        r(t, "", e(n, {
          expires: -1
        }))
      }, r.withConverter = t, r
    }
    return t(function() {})
  })
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.countryHtml = '\n<div class="country-switch-list">\n        <div class="country-switch-header">\n            <h3>Choose your country or region</h3>\n            <p>Products may have different prices and availability based on country/region</p>\n            <i class="close-Icon"></i>\n        </div>\n        <div class="regions-list">\n            <div class="regions"><span>Asia-Pacific</span></div>\n            <ul>\n                <li>\n                    <div class="site-item">\n                        <div class="region">\n                            <figure>\n                                <a href="https://www.realme.com/in/" class="gtag" data-gtag="footer|site-in" title="realme India">India</a>\n                            </figure>\n                        </div>\n                        <div class="region-language">\n                            <span>English</span>\n                            <span>INR</span>\n                        </div>\n                    </div>\n                    <div class="site-item">\n                        <div class="region">\n                            <figure>\n                                <a href="https://www.realme.com/id/" class="gtag" data-gtag="footer|site-id" title="realme Indonesia">Indonesia</a>\n                            </figure>\n                        </div>\n                        <div class="region-language">\n                            <span>Bahasa</span>\n                            <span>IDR</span>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="site-item">\n                        <div class="region">\n                            <figure>\n                                <a href="https://www.realme.com/vn/" class="gtag" data-gtag="footer|site-vn" title="realme Vietnam">Vietnam</a>\n                            </figure>\n                        </div>\n                        <div class="region-language">\n                            <span>Việt Nam</span>\n                            <span>VND</span>\n                        </div>\n                    </div>\n                    <div class="site-item">\n                        <div class="region">\n                            <figure>\n                                <a href="https://www.realme.com/th/" class="gtag" data-gtag="footer|site-th" title="realme Thailand">Thailand</a>\n                            </figure>\n                        </div>\n                        <div class="region-language">\n                            <span>ภาษาไทย</span>\n                            <span>THB</span>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="site-item">\n                        <div class="region">\n                            <figure>\n                                <a href="https://www.realme.com/my/" class="gtag" data-gtag="footer|site-my" title="realme Malaysia">Malaysia</a>\n                            </figure>\n                        </div>\n                        <div class="region-language">\n                            <span>English</span>\n                            <span>MYR</span>\n                        </div>\n                    </div>\n                    <div class="site-item">\n                        <div class="region">\n                            <figure>\n                                <a href="https://www.realme.com/ph/" class="gtag" data-gtag="footer|site-ph" title="realme Philippines">Philippines</a>\n                            </figure>\n                        </div>\n                        <div class="region-language">\n                            <span>English</span>\n                            <span>PHP</span>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="site-item">\n                        <div class="region">\n                            <figure>\n                                <a href="https://www.realme.com/cn/" class="gtag" data-gtag="footer|site-cn" title="realme Mainland China">Mainland China </a>\n                            </figure>\n                        </div>\n                        <div class="region-language">\n                            <span>简体中文</span>\n                            <span>CNY</span>\n                        </div>\n                    </div>\n                    <div class="site-item">\n                        <div class="region">\n                            <figure>\n                                <a href="https://www.realme.com/tw/" class="gtag" data-gtag="footer|site-tw" title="realme Taiwan">Taiwan</a>\n                            </figure>\n                        </div>\n                        <div class="region-language">\n                            <span>繁体中文</span>\n                            <span>TWD</span>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class="site-item">\n                        <div class="region">\n                            <figure>\n                                <a href="https://www.realme.com/sg/" class="gtag" data-gtag="footer|site-sg" title="realme Singapore">Singapore</a>\n                            </figure>\n                        </div>\n                        <div class="region-language">\n                            <span>English</span>\n                            <span>SGD</span>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <div class="regions"><span>Europe</span></div>\n            <ul>\n                <li>\n                    <div class="site-item">\n                        <div class="region">\n                            <figure>\n                                <a href="https://www.realme.com/eu/" class="gtag" data-gtag="footer|site-eu" title="realme  Europe">Europe</a>\n                            </figure>\n                        </div>\n                        <div class="region-language">\n                            <span>English</span>\n                            <span>EUR</span>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <div class="regions"><span>Other Regions</span></div>\n            <ul>\n                <li>\n                    <div class="site-item">\n                        <div class="region">\n                            <figure>\n                                <a href="https://www.realme.com/global/" class="gtag" data-gtag="footer|site-global"\n                                    title="realme Global">Global</a>\n                            </figure>\n                        </div>\n                        <div class="region-language">\n                            <span>English</span>\n                            <span>USD</span>\n                        </div>\n                    </div>\n                    <div class="site-item">\n                        <div class="region">\n                            <figure>\n                                <a href="https://www.realme.com/eg/" class="gtag" data-gtag="footer|site-eg" title="realme  لغة عربية ">Egypt</a>\n                            </figure>\n                        </div>\n                        <div class="region-language">\n                            <span> لغة عربية </span>\n                            <span>EGP</span>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n'
}, function(e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function i(e) {
    return a(e, m().apiBaseUrl)
  }

  function o(e) {
    return a(e, y().apiBaseUrl)
  }

  function a(e, t) {
    e.type = e.type || "get", "POST" !== e.type.toUpperCase() || e.json || (e.contentType = "application/json", e.data = (0, h.default)(e.data)), -1 == e.url.indexOf("http") && (e.url = "" + t + e.url);
    var n = {
        timeout: 8e3,
        xhrFields: {
          withCredentials: !0
        },
        crossDomain: !0,
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      },
      r = (0, d.default)({}, n, e);
    return g.default.ajax(r)
  }

  function s(e) {
    var t = m(),
      n = t.siteCode,
      r = window.location.hostname.indexOf("myoas.net") > 0 ? "https://test1-api.myoas.net/" : window.location.hostname.indexOf("pre-") >= 0 ? "https://pre-api.realme.com/" : "https://api.realme.com/",
      o = window.location.hostname.indexOf("myoas.net") > 0 ? "https://account.myoas.net/" : "https://id.realme.com/",
      a = e ? window.location.origin + "/" + n + e : window.location.href,
      s = o + "?callback=" + encodeURIComponent(a) + "&region=IN&language=en-IN";
    i({
      type: "post",
      url: r + "login"
    }).then(function(t) {
      401 == t.code && (window.location.href = s), 200 == t.code && e && (window.location.href = window.location.origin + "/" + n + e)
    })
  }

  function u(e) {
    return new Date(e).toLocaleDateString().replace(/\//g, ".").replace(/(\b\d\b)/, "0$1")
  }

  function l(e) {
    (0, g.default)(e).on("touchmove", function(e) {
      e.preventDefault()
    }, !1)
  }

  function c(e) {
    (0, g.default)(e).off("touchmove", function(e) {
      e.preventDefault()
    }, !1)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getEnvApiActvitiy = t.getEnvConst = t.gtagLandmine = void 0;
  var f = n(10),
    d = r(f),
    p = n(1),
    h = r(p);
  t._Http = i, t._HttpForActivity = o, t.getLoginStatus = s, t.timeFormat = u, t.preventTouchScroll = l, t.dropTouchScroll = c;
  var v = n(4),
    g = r(v),
    m = (t.gtagLandmine = function(e) {
      "undefined" != typeof gtag && gtag("event", e.event, e.params)
    }, t.getEnvConst = function() {
      var e = window.location.hostname.indexOf("myoas.net") > 0 ? "https://test1-api.myoas.net/" : window.location.hostname.indexOf("pre-") >= 0 ? "https://pre-api.realme.com/" : "https://api.realme.com/",
        t = window.location.pathname.split("/")[1] || "in";
      return e += t, {
        apiBaseUrl: e,
        siteCode: t
      }
    }),
    y = t.getEnvApiActvitiy = function() {
      var e = window.location.hostname.indexOf("myoas.net") > 0 ? "https://test1-event-api.myoas.net/" : window.location.hostname.indexOf("pre-") >= 0 ? "https://pre-event-api.realme.com/" : "https://event-api.realme.com/",
        t = window.location.pathname.split("/")[1] || "in";
      return e += t, {
        apiBaseUrl: e,
        siteCode: t
      }
    }
}, function(e, t, n) {
  e.exports = {
    default: n(11),
    __esModule: !0
  }
}, function(e, t, n) {
  n(12), e.exports = n(3).Object.assign
}, function(e, t, n) {
  var r = n(13);
  r(r.S + r.F, "Object", {
    assign: n(28)
  })
}, function(e, t, n) {
  var r = n(14),
    i = n(3),
    o = n(15),
    a = n(17),
    s = n(27),
    u = function(e, t, n) {
      var l, c, f, d = e & u.F,
        p = e & u.G,
        h = e & u.S,
        v = e & u.P,
        g = e & u.B,
        m = e & u.W,
        y = p ? i : i[t] || (i[t] = {}),
        w = y.prototype,
        x = p ? r : h ? r[t] : (r[t] || {}).prototype;
      p && (n = t);
      for (l in n)(c = !d && x && void 0 !== x[l]) && s(y, l) || (f = c ? x[l] : n[l], y[l] = p && "function" != typeof x[l] ? n[l] : g && c ? o(f, r) : m && x[l] == f ? function(e) {
        var t = function(t, n, r) {
          if (this instanceof e) {
            switch (arguments.length) {
              case 0:
                return new e;
              case 1:
                return new e(t);
              case 2:
                return new e(t, n)
            }
            return new e(t, n, r)
          }
          return e.apply(this, arguments)
        };
        return t.prototype = e.prototype, t
      }(f) : v && "function" == typeof f ? o(Function.call, f) : f, v && ((y.virtual || (y.virtual = {}))[l] = f, e & u.R && w && !w[l] && a(w, l, f)))
    };
  u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
}, function(e, t) {
  var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}, function(e, t, n) {
  var r = n(16);
  e.exports = function(e, t, n) {
    if (r(e), void 0 === t) return e;
    switch (n) {
      case 1:
        return function(n) {
          return e.call(t, n)
        };
      case 2:
        return function(n, r) {
          return e.call(t, n, r)
        };
      case 3:
        return function(n, r, i) {
          return e.call(t, n, r, i)
        }
    }
    return function() {
      return e.apply(t, arguments)
    }
  }
}, function(e, t) {
  e.exports = function(e) {
    if ("function" != typeof e) throw TypeError(e + " is not a function!");
    return e
  }
}, function(e, t, n) {
  var r = n(18),
    i = n(26);
  e.exports = n(22) ? function(e, t, n) {
    return r.f(e, t, i(1, n))
  } : function(e, t, n) {
    return e[t] = n, e
  }
}, function(e, t, n) {
  var r = n(19),
    i = n(21),
    o = n(25),
    a = Object.defineProperty;
  t.f = n(22) ? Object.defineProperty : function(e, t, n) {
    if (r(e), t = o(t, !0), r(n), i) try {
      return a(e, t, n)
    } catch (e) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
    return "value" in n && (e[t] = n.value), e
  }
}, function(e, t, n) {
  var r = n(20);
  e.exports = function(e) {
    if (!r(e)) throw TypeError(e + " is not an object!");
    return e
  }
}, function(e, t) {
  e.exports = function(e) {
    return "object" == typeof e ? null !== e : "function" == typeof e
  }
}, function(e, t, n) {
  e.exports = !n(22) && !n(23)(function() {
    return 7 != Object.defineProperty(n(24)("div"), "a", {
      get: function() {
        return 7
      }
    }).a
  })
}, function(e, t, n) {
  e.exports = !n(23)(function() {
    return 7 != Object.defineProperty({}, "a", {
      get: function() {
        return 7
      }
    }).a
  })
}, function(e, t) {
  e.exports = function(e) {
    try {
      return !!e()
    } catch (e) {
      return !0
    }
  }
}, function(e, t, n) {
  var r = n(20),
    i = n(14).document,
    o = r(i) && r(i.createElement);
  e.exports = function(e) {
    return o ? i.createElement(e) : {}
  }
}, function(e, t, n) {
  var r = n(20);
  e.exports = function(e, t) {
    if (!r(e)) return e;
    var n, i;
    if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
    if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
    if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
    throw TypeError("Can't convert object to primitive value")
  }
}, function(e, t) {
  e.exports = function(e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    }
  }
}, function(e, t) {
  var n = {}.hasOwnProperty;
  e.exports = function(e, t) {
    return n.call(e, t)
  }
}, function(e, t, n) {
  "use strict";
  var r = n(29),
    i = n(44),
    o = n(45),
    a = n(46),
    s = n(32),
    u = Object.assign;
  e.exports = !u || n(23)(function() {
    var e = {},
      t = {},
      n = Symbol(),
      r = "abcdefghijklmnopqrst";
    return e[n] = 7, r.split("").forEach(function(e) {
      t[e] = e
    }), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
  }) ? function(e, t) {
    for (var n = a(e), u = arguments.length, l = 1, c = i.f, f = o.f; u > l;)
      for (var d, p = s(arguments[l++]), h = c ? r(p).concat(c(p)) : r(p), v = h.length, g = 0; v > g;) f.call(p, d = h[g++]) && (n[d] = p[d]);
    return n
  } : u
}, function(e, t, n) {
  var r = n(30),
    i = n(43);
  e.exports = Object.keys || function(e) {
    return r(e, i)
  }
}, function(e, t, n) {
  var r = n(27),
    i = n(31),
    o = n(35)(!1),
    a = n(39)("IE_PROTO");
  e.exports = function(e, t) {
    var n, s = i(e),
      u = 0,
      l = [];
    for (n in s) n != a && r(s, n) && l.push(n);
    for (; t.length > u;) r(s, n = t[u++]) && (~o(l, n) || l.push(n));
    return l
  }
}, function(e, t, n) {
  var r = n(32),
    i = n(34);
  e.exports = function(e) {
    return r(i(e))
  }
}, function(e, t, n) {
  var r = n(33);
  e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
    return "String" == r(e) ? e.split("") : Object(e)
  }
}, function(e, t) {
  var n = {}.toString;
  e.exports = function(e) {
    return n.call(e).slice(8, -1)
  }
}, function(e, t) {
  e.exports = function(e) {
    if (void 0 == e) throw TypeError("Can't call method on  " + e);
    return e
  }
}, function(e, t, n) {
  var r = n(31),
    i = n(36),
    o = n(38);
  e.exports = function(e) {
    return function(t, n, a) {
      var s, u = r(t),
        l = i(u.length),
        c = o(a, l);
      if (e && n != n) {
        for (; l > c;)
          if ((s = u[c++]) != s) return !0
      } else
        for (; l > c; c++)
          if ((e || c in u) && u[c] === n) return e || c || 0;
      return !e && -1
    }
  }
}, function(e, t, n) {
  var r = n(37),
    i = Math.min;
  e.exports = function(e) {
    return e > 0 ? i(r(e), 9007199254740991) : 0
  }
}, function(e, t) {
  var n = Math.ceil,
    r = Math.floor;
  e.exports = function(e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
  }
}, function(e, t, n) {
  var r = n(37),
    i = Math.max,
    o = Math.min;
  e.exports = function(e, t) {
    return e = r(e), e < 0 ? i(e + t, 0) : o(e, t)
  }
}, function(e, t, n) {
  var r = n(40)("keys"),
    i = n(42);
  e.exports = function(e) {
    return r[e] || (r[e] = i(e))
  }
}, function(e, t, n) {
  var r = n(3),
    i = n(14),
    o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
  (e.exports = function(e, t) {
    return o[e] || (o[e] = void 0 !== t ? t : {})
  })("versions", []).push({
    version: r.version,
    mode: n(41) ? "pure" : "global",
    copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
  })
}, function(e, t) {
  e.exports = !0
}, function(e, t) {
  var n = 0,
    r = Math.random();
  e.exports = function(e) {
    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
  }
}, function(e, t) {
  e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t) {
  t.f = Object.getOwnPropertySymbols
}, function(e, t) {
  t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
  var r = n(34);
  e.exports = function(e) {
    return Object(r(e))
  }
}]);
