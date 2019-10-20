! function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var r = n(1),
        a = i(r),
        s = n(54),
        o = i(s),
        l = n(55),
        d = i(l),
        u = n(56),
        c = i(u);
    (0, o.default)(function () {
        function e(e) {
            e.el.onmouseover = function () {
                e.navigation.$nextEl.removeClass("hide"), e.navigation.$prevEl.removeClass("hide")
            }, e.el.onmouseout = function () {
                e.navigation.$nextEl.addClass("hide"), e.navigation.$prevEl.addClass("hide")
            }
        }
        var t = (0, o.default)(window).width(),
            n = !(0, o.default)(".sec").hasClass("sec-specs-banner"),
            i = function () {
                var e = window.innerWidth,
                    t = 1920;
                e <= 768 && (t = 360);
                var n = 100 * e / t,
                    i = n / parseFloat(defaultSize) * 100 + "%";
                document.documentElement.style.fontSize = i
            },
            r = new d.default("#speedwayDesign", {
                speed: 800,
                simulateTouch: !1,
                effect: "fade",
                noSwiping: !0
            });
        (0, o.default)(".speedway-design-menus a").click(function () {
            var e = (0, o.default)(this).data("index");
            r.slideTo(e), 0 == e ? (0, o.default)(".sec-speedway-design").attr("id", "gold-active") : 1 == e ? (0, o.default)(".sec-speedway-design").attr("id", "purple-active") : (0, o.default)(".sec-speedway-design").attr("id", "blue-active")
        });
        var s = new d.default("#frontCamera", {
                centeredSlides: !0,
                slidesPerView: "auto",
                spaceBetween: 59,
                simulateTouch: !0,
                loop: !0
            }),
            l = (new d.default("#rearCamera", {
                centeredSlides: !0,
                slidesPerView: "auto",
                spaceBetween: 59,
                simulateTouch: !0,
                loop: !0,
                autoplay: {
                    disableOnInteraction: !1
                },
                controller: {
                    control: s,
                    inverse: !0
                }
            }), new d.default("#flagshipCamera", {
                autoplay: !0,
                loop: !0,
                speed: 800,
                spaceBetween: 59,
                pagination: {
                    el: "#flagshipCamera .swiper-pagination",
                    clickable: !0
                }
            }), new d.default("#recordingVideo", {
                centeredSlides: !0,
                slidesPerView: "auto",
                simulateTouch: !1,
                spaceBetween: 59,
                loop: !0,
                pagination: {
                    el: "#recordingVideo .swiper-pagination",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            })),
            u = (0, a.default)(document.getElementsByClassName("realme3pro-video-play"));
        if (Array.isArray(u)) {
            u.forEach(function (e) {
                e.addEventListener("click", function () {
                    var e = (0, o.default)(this).data("video"),
                        t = (0, o.default)(this).data("mobile"),
                        n = (0, o.default)(window).width(),
                        i = n <= 768 ? t : e;
                    (0, o.default)(".video-dialog").fadeIn(), (0, o.default)(".video-player").append('<video src="' + i + '" autoplay loop></video>'), (0, o.default)(".video-player").find("video")[0].play()
                })
            });
            var p = new d.default("#remarks", {
                centeredSlides: !0,
                slidesPerView: "auto",
                simulateTouch: !1,
                spaceBetween: 59,
                loop: !0,
                pagination: {
                    el: "#remarks .swiper-pagination",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            });
            t > 768 && n && (e(l), e(p));
            var f = new d.default("#cameraScenes", {
                speed: 800,
                direction: "vertical",
                effect: "fade",
                noSwiping: !0
            });
            (0, o.default)(".rear-camera-aside li").click(function () {
                if ((0, o.default)(this).hasClass("active")) return !1;
                var e = (0, o.default)(this).data("index");
                f.slideTo(e);
                var t = (0, o.default)(this).find(".rear-camera-description").html();
                (0, o.default)(".rear-camera-description-m").html(t), (0, o.default)(".rear-camera-aside li").removeClass("active"), (0, o.default)(this).addClass("active")
            });
            var h = new d.default("#secSpecsSwiper", {
                speed: 300,
                simulateTouch: !1,
                effect: "fade",
                fadeEffect: {
                    crossFade: !0
                },
                on: {
                    slideChange: function () {
                        t < 769 && ((0, o.default)(".sec-spec-color-select").removeClass("sec-spec-color-select"), (0, o.default)(".sec-specs-color-select").eq(this.activeIndex).find("a").addClass("sec-spec-color-select"))
                    }
                }
            });
            (0, o.default)(".sec-specs-color-select a").click(function () {
                var e = (0, o.default)(this),
                    t = e.data("index");
                return h.slideTo(t), (0, o.default)(".sec-spec-color-select").removeClass("sec-spec-color-select"), e.addClass("sec-spec-color-select"), !1
            });
            var v = function () {
                    var e = (0, o.default)(window).height();
                    o.default.each((0, o.default)("span.pic-lazyload"), function (t, n) {
                        var i = (0, o.default)(n)[0].getBoundingClientRect().top;
                        i < 1.1 * e && i > 1.1 * -e && (0, o.default)(n).replaceWith('<picture class="pic-lazyloaded">' + (0, o.default)(n).html() + "</picture>")
                    }), o.default.each((0, o.default)(".sec").not(".bg-lazyload"), function (t, n) {
                        var i = (0, o.default)(n)[0].getBoundingClientRect().top;
                        i < 1.1 * e && i > 1.1 * -e && (0, o.default)(n).addClass("bg-lazyload")
                    }), o.default.each((0, o.default)(".sec-module").not(".bg-module-lazyload"), function (t, n) {
                        var i = (0, o.default)(n)[0].getBoundingClientRect().top;
                        i < 1.5 * e && i > 1.5 * -e && (0, o.default)(n).addClass("bg-module-lazyload")
                    }), (0, c.default)()
                },
                m = function () {
                    var e = (0, o.default)(window).height();
                    if (o.default.each((0, o.default)(".sec").not(".sec-visible"), function (t, n) {
                        var i = (0, o.default)(n).data("ratio") ? (0, o.default)(n).data("ratio") : .8;
                        i = (0, o.default)(n).data("ratiom") ? (0, o.default)(n).data("ratiom") : i;
                        var r = (0, o.default)(n)[0].getBoundingClientRect().top;
                        r < e * i && r > -e * i && (0, o.default)(n).addClass("sec-visible")
                    }), o.default.each((0, o.default)(".sec-module").not(".sec-module-visible"), function (t, n) {
                        var i = (0, o.default)(n).data("ratio") ? (0, o.default)(n).data("ratio") : .7,
                            r = (0, o.default)(n)[0].getBoundingClientRect().top;
                        r < e * i && r > -e * i && (0, o.default)(n).addClass("sec-module-visible")
                    }), n) {
                        if (!(0, o.default)(".sec-snapdragon-box").hasClass("sec-progress-active")) {
                            var t = (0, o.default)(".sec-snapdragon-box").data("ratio") ? (0, o.default)(".sec-snapdragon-box").data("ratio") : .9,
                                i = (0, o.default)(".sec-snapdragon-box")[0].getBoundingClientRect().top;
                            i < e * t && i > -e * t && ((0, o.default)(".sec-snapdragon-box").addClass("sec-progress-active"), g((0, o.default)(".schedule-20"), "%"), g((0, o.default)(".schedule-25"), "%"), g((0, o.default)(".schedule-22"), "%"), g((0, o.default)(".schedule-200"), "%"))
                        }
                        if (!(0, o.default)(".capacity-num").hasClass("capacity-num-animate")) {
                            var r = (0, o.default)(".capacity-num").data("ratio") ? (0, o.default)(".capacity-num").data("ratio") : .7,
                                a = (0, o.default)(".capacity-num")[0].getBoundingClientRect().top;
                            a < e * r && a > -e * r && ((0, o.default)(".capacity-num").addClass("capacity-num-animate"), g((0, o.default)(".capacity-num"), ""))
                        }
                        if (!(0, o.default)(".camera-above-box").hasClass("camera-above-animate")) {
                            var s = (0, o.default)(".camera-above-box").data("ratio") ? (0, o.default)(".camera-above-box").data("ratio") : .3,
                                l = (0, o.default)(".camera-above-box")[0].getBoundingClientRect().top;
                            l < e * s && l > -e * s && (0, o.default)(".camera-above-box").addClass("camera-above-animate")
                        }
                    }
                },
                g = function (e, t) {
                    var n = 0,
                        i = e.data("num");
                    if (i > 1e3) var r = setInterval(function () {
                        n += 100, e.html(n + t), n >= i && (e.html(i + t), window.clearInterval(r))
                    }, 25);
                    else var a = setInterval(function () {
                        n++, e.html(n + t), n == i && window.clearInterval(a)
                    }, 1500 / i)
                },
                y = !!(window.ActiveXObject || "ActiveXObject" in window);
            n && function () {
                if ((0, o.default)(window).width() <= 768)(0, o.default)("#kv_video").html("");
                else {
                    var e = (0, o.default)("#kv_video").data("video");
                    (0, o.default)("#kv_video").html('<video src="' + e + '" autoplay="true" muted="muted" id="video-one-itself"></video>'), document.getElementById("video-one-itself").addEventListener("ended", function () {
                        (0, o.default)(".banner-video").css({
                            "z-index": "0"
                        })
                    }), y && (0, o.default)("#kv_video").html("")
                }
            }(), (0, o.default)(window).resize(function () {
                i(), m(), v()
            }), (0, o.default)(window).scroll(function () {
                m(), v()
            }), m(), v()
        }
    })
}, function (e, t, n) {
    e.exports = {
        default: n(2),
        __esModule: !0
    }
}, function (e, t, n) {
    n(3), n(47), e.exports = n(11).Array.from
}, function (e, t, n) {
    "use strict";
    var i = n(4)(!0);
    n(7)(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = i(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function (e, t, n) {
    var i = n(5),
        r = n(6);
    e.exports = function (e) {
        return function (t, n) {
            var a, s, o = String(r(t)),
                l = i(n),
                d = o.length;
            return l < 0 || l >= d ? e ? "" : void 0 : (a = o.charCodeAt(l), a < 55296 || a > 56319 || l + 1 === d || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? o.charAt(l) : a : e ? o.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536)
        }
    }
}, function (e, t) {
    var n = Math.ceil,
        i = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(8),
        r = n(9),
        a = n(25),
        s = n(14),
        o = n(26),
        l = n(27),
        d = n(43),
        u = n(45),
        c = n(44)("iterator"),
        p = !([].keys && "next" in [].keys()),
        f = function () {
            return this
        };
    e.exports = function (e, t, n, h, v, m, g) {
        l(n, t, h);
        var y, b, x, w = function (e) {
                if (!p && e in S) return S[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this, e)
                }
            },
            T = t + " Iterator",
            E = "values" == v,
            C = !1,
            S = e.prototype,
            k = S[c] || S["@@iterator"] || v && S[v],
            M = k || w(v),
            A = v ? E ? w("entries") : M : void 0,
            P = "Array" == t ? S.entries || k : k;
        if (P && (x = u(P.call(new e))) !== Object.prototype && x.next && (d(x, T, !0), i || "function" == typeof x[c] || s(x, c, f)), E && k && "values" !== k.name && (C = !0, M = function () {
            return k.call(this)
        }), i && !g || !p && !C && S[c] || s(S, c, M), o[t] = M, o[T] = f, v)
            if (y = {
                values: E ? M : w("values"),
                keys: m ? M : w("keys"),
                entries: A
            }, g)
                for (b in y) b in S || a(S, b, y[b]);
            else r(r.P + r.F * (p || C), t, y);
        return y
    }
}, function (e, t) {
    e.exports = !0
}, function (e, t, n) {
    var i = n(10),
        r = n(11),
        a = n(12),
        s = n(14),
        o = n(24),
        l = function (e, t, n) {
            var d, u, c, p = e & l.F,
                f = e & l.G,
                h = e & l.S,
                v = e & l.P,
                m = e & l.B,
                g = e & l.W,
                y = f ? r : r[t] || (r[t] = {}),
                b = y.prototype,
                x = f ? i : h ? i[t] : (i[t] || {}).prototype;
            f && (n = t);
            for (d in n)(u = !p && x && void 0 !== x[d]) && o(y, d) || (c = u ? x[d] : n[d], y[d] = f && "function" != typeof x[d] ? n[d] : m && u ? a(c, i) : g && x[d] == c ? function (e) {
                var t = function (t, n, i) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, i)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(c) : v && "function" == typeof c ? a(Function.call, c) : c, v && ((y.virtual || (y.virtual = {}))[d] = c, e & l.R && b && !b[d] && s(b, d, c)))
        };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t) {
    var n = e.exports = {
        version: "2.6.5"
    };
    "number" == typeof __e && (__e = n)
}, function (e, t, n) {
    var i = n(13);
    e.exports = function (e, t, n) {
        if (i(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, i) {
                    return e.call(t, n, i)
                };
            case 3:
                return function (n, i, r) {
                    return e.call(t, n, i, r)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, n) {
    var i = n(15),
        r = n(23);
    e.exports = n(19) ? function (e, t, n) {
        return i.f(e, t, r(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var i = n(16),
        r = n(18),
        a = n(22),
        s = Object.defineProperty;
    t.f = n(19) ? Object.defineProperty : function (e, t, n) {
        if (i(e), t = a(t, !0), i(n), r) try {
            return s(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var i = n(17);
    e.exports = function (e) {
        if (!i(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    e.exports = !n(19) && !n(20)(function () {
        return 7 != Object.defineProperty(n(21)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    e.exports = !n(20)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    var i = n(17),
        r = n(10).document,
        a = i(r) && i(r.createElement);
    e.exports = function (e) {
        return a ? r.createElement(e) : {}
    }
}, function (e, t, n) {
    var i = n(17);
    e.exports = function (e, t) {
        if (!i(e)) return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
        if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
        if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    e.exports = n(14)
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    "use strict";
    var i = n(28),
        r = n(23),
        a = n(43),
        s = {};
    n(14)(s, n(44)("iterator"), function () {
        return this
    }), e.exports = function (e, t, n) {
        e.prototype = i(s, {
            next: r(1, n)
        }), a(e, t + " Iterator")
    }
}, function (e, t, n) {
    var i = n(16),
        r = n(29),
        a = n(41),
        s = n(38)("IE_PROTO"),
        o = function () {},
        l = function () {
            var e, t = n(21)("iframe"),
                i = a.length;
            for (t.style.display = "none", n(42).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; i--;) delete l.prototype[a[i]];
            return l()
        };
    e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (o.prototype = i(e), n = new o, o.prototype = null, n[s] = e) : n = l(), void 0 === t ? n : r(n, t)
    }
}, function (e, t, n) {
    var i = n(15),
        r = n(16),
        a = n(30);
    e.exports = n(19) ? Object.defineProperties : function (e, t) {
        r(e);
        for (var n, s = a(t), o = s.length, l = 0; o > l;) i.f(e, n = s[l++], t[n]);
        return e
    }
}, function (e, t, n) {
    var i = n(31),
        r = n(41);
    e.exports = Object.keys || function (e) {
        return i(e, r)
    }
}, function (e, t, n) {
    var i = n(24),
        r = n(32),
        a = n(35)(!1),
        s = n(38)("IE_PROTO");
    e.exports = function (e, t) {
        var n, o = r(e),
            l = 0,
            d = [];
        for (n in o) n != s && i(o, n) && d.push(n);
        for (; t.length > l;) i(o, n = t[l++]) && (~a(d, n) || d.push(n));
        return d
    }
}, function (e, t, n) {
    var i = n(33),
        r = n(6);
    e.exports = function (e) {
        return i(r(e))
    }
}, function (e, t, n) {
    var i = n(34);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == i(e) ? e.split("") : Object(e)
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    var i = n(32),
        r = n(36),
        a = n(37);
    e.exports = function (e) {
        return function (t, n, s) {
            var o, l = i(t),
                d = r(l.length),
                u = a(s, d);
            if (e && n != n) {
                for (; d > u;)
                    if ((o = l[u++]) != o) return !0
            } else
                for (; d > u; u++)
                    if ((e || u in l) && l[u] === n) return e || u || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var i = n(5),
        r = Math.min;
    e.exports = function (e) {
        return e > 0 ? r(i(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    var i = n(5),
        r = Math.max,
        a = Math.min;
    e.exports = function (e, t) {
        return e = i(e), e < 0 ? r(e + t, 0) : a(e, t)
    }
}, function (e, t, n) {
    var i = n(39)("keys"),
        r = n(40);
    e.exports = function (e) {
        return i[e] || (i[e] = r(e))
    }
}, function (e, t, n) {
    var i = n(11),
        r = n(10),
        a = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: i.version,
        mode: n(8) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t) {
    var n = 0,
        i = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
    }
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t, n) {
    var i = n(10).document;
    e.exports = i && i.documentElement
}, function (e, t, n) {
    var i = n(15).f,
        r = n(24),
        a = n(44)("toStringTag");
    e.exports = function (e, t, n) {
        e && !r(e = n ? e : e.prototype, a) && i(e, a, {
            configurable: !0,
            value: t
        })
    }
}, function (e, t, n) {
    var i = n(39)("wks"),
        r = n(40),
        a = n(10).Symbol,
        s = "function" == typeof a;
    (e.exports = function (e) {
        return i[e] || (i[e] = s && a[e] || (s ? a : r)("Symbol." + e))
    }).store = i
}, function (e, t, n) {
    var i = n(24),
        r = n(46),
        a = n(38)("IE_PROTO"),
        s = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
        return e = r(e), i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
    }
}, function (e, t, n) {
    var i = n(6);
    e.exports = function (e) {
        return Object(i(e))
    }
}, function (e, t, n) {
    "use strict";
    var i = n(12),
        r = n(9),
        a = n(46),
        s = n(48),
        o = n(49),
        l = n(36),
        d = n(50),
        u = n(51);
    r(r.S + r.F * !n(53)(function (e) {
        Array.from(e)
    }), "Array", {
        from: function (e) {
            var t, n, r, c, p = a(e),
                f = "function" == typeof this ? this : Array,
                h = arguments.length,
                v = h > 1 ? arguments[1] : void 0,
                m = void 0 !== v,
                g = 0,
                y = u(p);
            if (m && (v = i(v, h > 2 ? arguments[2] : void 0, 2)), void 0 == y || f == Array && o(y))
                for (t = l(p.length), n = new f(t); t > g; g++) d(n, g, m ? v(p[g], g) : p[g]);
            else
                for (c = y.call(p), n = new f; !(r = c.next()).done; g++) d(n, g, m ? s(c, v, [r.value, g], !0) : r.value);
            return n.length = g, n
        }
    })
}, function (e, t, n) {
    var i = n(16);
    e.exports = function (e, t, n, r) {
        try {
            return r ? t(i(n)[0], n[1]) : t(n)
        } catch (t) {
            var a = e.return;
            throw void 0 !== a && i(a.call(e)), t
        }
    }
}, function (e, t, n) {
    var i = n(26),
        r = n(44)("iterator"),
        a = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (i.Array === e || a[r] === e)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(15),
        r = n(23);
    e.exports = function (e, t, n) {
        t in e ? i.f(e, t, r(0, n)) : e[t] = n
    }
}, function (e, t, n) {
    var i = n(52),
        r = n(44)("iterator"),
        a = n(26);
    e.exports = n(11).getIteratorMethod = function (e) {
        if (void 0 != e) return e[r] || e["@@iterator"] || a[i(e)]
    }
}, function (e, t, n) {
    var i = n(34),
        r = n(44)("toStringTag"),
        a = "Arguments" == i(function () {
            return arguments
        }()),
        s = function (e, t) {
            try {
                return e[t]
            } catch (e) {}
        };
    e.exports = function (e) {
        var t, n, o;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = s(t = Object(e), r)) ? n : a ? i(t) : "Object" == (o = i(t)) && "function" == typeof t.callee ? "Arguments" : o
    }
}, function (e, t, n) {
    var i = n(44)("iterator"),
        r = !1;
    try {
        var a = [7][i]();
        a.return = function () {
            r = !0
        }, Array.from(a, function () {
            throw 2
        })
    } catch (e) {}
    e.exports = function (e, t) {
        if (!t && !r) return !1;
        var n = !1;
        try {
            var a = [7],
                s = a[i]();
            s.next = function () {
                return {
                    done: n = !0
                }
            }, a[i] = function () {
                return s
            }, e(a)
        } catch (e) {}
        return n
    }
}, function (e, t, n) {
    var i, r;
    ! function (t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, a) {
        "use strict";

        function s(e, t, n) {
            t = t || ue;
            var i, r = t.createElement("script");
            if (r.text = e, n)
                for (i in Ce) n[i] && (r[i] = n[i]);
            t.head.appendChild(r).parentNode.removeChild(r)
        }

        function o(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? me[ge.call(e)] || "object" : typeof e
        }

        function l(e) {
            var t = !!e && "length" in e && e.length,
                n = o(e);
            return !Te(e) && !Ee(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function d(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function u(e, t, n) {
            return Te(t) ? Se.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? Se.grep(e, function (e) {
                return e === t !== n
            }) : "string" != typeof t ? Se.grep(e, function (e) {
                return ve.call(t, e) > -1 !== n
            }) : Se.filter(t, e, n)
        }

        function c(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function p(e) {
            var t = {};
            return Se.each(e.match(Ne) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function f(e) {
            return e
        }

        function h(e) {
            throw e
        }

        function v(e, t, n, i) {
            var r;
            try {
                e && Te(r = e.promise) ? r.call(e).done(t).fail(n) : e && Te(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        function m() {
            ue.removeEventListener("DOMContentLoaded", m), n.removeEventListener("load", m), Se.ready()
        }

        function g(e, t) {
            return t.toUpperCase()
        }

        function y(e) {
            return e.replace(qe, "ms-").replace(Re, g)
        }

        function b() {
            this.expando = Se.expando + b.uid++
        }

        function x(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Xe.test(e) ? JSON.parse(e) : e)
        }

        function w(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Ve, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = x(n)
                    } catch (e) {}
                    We.set(e, t, n)
                } else n = void 0;
            return n
        }

        function T(e, t, n, i) {
            var r, a, s = 20,
                o = i ? function () {
                    return i.cur()
                } : function () {
                    return Se.css(e, t, "")
                },
                l = o(),
                d = n && n[3] || (Se.cssNumber[t] ? "" : "px"),
                u = (Se.cssNumber[t] || "px" !== d && +l) && _e.exec(Se.css(e, t));
            if (u && u[3] !== d) {
                for (l /= 2, d = d || u[3], u = +l || 1; s--;) Se.style(e, t, u + d), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (s = 0), u /= a;
                u *= 2, Se.style(e, t, u + d), n = n || []
            }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = u, i.end = r)), r
        }

        function E(e) {
            var t, n = e.ownerDocument,
                i = e.nodeName,
                r = Je[i];
            return r || (t = n.body.appendChild(n.createElement(i)), r = Se.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Je[i] = r, r)
        }

        function C(e, t) {
            for (var n, i, r = [], a = 0, s = e.length; a < s; a++) i = e[a], i.style && (n = i.style.display, t ? ("none" === n && (r[a] = Ge.get(i, "display") || null, r[a] || (i.style.display = "")), "" === i.style.display && Ke(i) && (r[a] = E(i))) : "none" !== n && (r[a] = "none", Ge.set(i, "display", n)));
            for (a = 0; a < s; a++) null != r[a] && (e[a].style.display = r[a]);
            return e
        }

        function S(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && d(e, t) ? Se.merge([e], n) : n
        }

        function k(e, t) {
            for (var n = 0, i = e.length; n < i; n++) Ge.set(e[n], "globalEval", !t || Ge.get(t[n], "globalEval"))
        }

        function M(e, t, n, i, r) {
            for (var a, s, l, d, u, c, p = t.createDocumentFragment(), f = [], h = 0, v = e.length; h < v; h++)
                if ((a = e[h]) || 0 === a)
                    if ("object" === o(a)) Se.merge(f, a.nodeType ? [a] : a);
                    else if (it.test(a)) {
                        for (s = s || p.appendChild(t.createElement("div")), l = (et.exec(a) || ["", ""])[1].toLowerCase(), d = nt[l] || nt._default, s.innerHTML = d[1] + Se.htmlPrefilter(a) + d[2], c = d[0]; c--;) s = s.lastChild;
                        Se.merge(f, s.childNodes), s = p.firstChild, s.textContent = ""
                    } else f.push(t.createTextNode(a));
            for (p.textContent = "", h = 0; a = f[h++];)
                if (i && Se.inArray(a, i) > -1) r && r.push(a);
                else if (u = Se.contains(a.ownerDocument, a), s = S(p.appendChild(a), "script"), u && k(s), n)
                    for (c = 0; a = s[c++];) tt.test(a.type || "") && n.push(a);
            return p
        }

        function A() {
            return !0
        }

        function P() {
            return !1
        }

        function L() {
            try {
                return ue.activeElement
            } catch (e) {}
        }

        function z(e, t, n, i, r, a) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (o in t) z(e, o, n, i, t[o], a);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = P;
            else if (!r) return e;
            return 1 === a && (s = r, r = function (e) {
                return Se().off(e), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = Se.guid++)), e.each(function () {
                Se.event.add(this, t, r, i, n)
            })
        }

        function D(e, t) {
            return d(e, "table") && d(11 !== t.nodeType ? t : t.firstChild, "tr") ? Se(e).children("tbody")[0] || e : e
        }

        function $(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function I(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function O(e, t) {
            var n, i, r, a, s, o, l, d;
            if (1 === t.nodeType) {
                if (Ge.hasData(e) && (a = Ge.access(e), s = Ge.set(t, a), d = a.events)) {
                    delete s.handle, s.events = {};
                    for (r in d)
                        for (n = 0, i = d[r].length; n < i; n++) Se.event.add(t, r, d[r][n])
                }
                We.hasData(e) && (o = We.access(e), l = Se.extend({}, o), We.set(t, l))
            }
        }

        function N(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function j(e, t, n, i) {
            t = fe.apply([], t);
            var r, a, o, l, d, u, c = 0,
                p = e.length,
                f = p - 1,
                h = t[0],
                v = Te(h);
            if (v || p > 1 && "string" == typeof h && !we.checkClone && ut.test(h)) return e.each(function (r) {
                var a = e.eq(r);
                v && (t[0] = h.call(this, r, a.html())), j(a, t, n, i)
            });
            if (p && (r = M(t, e[0].ownerDocument, !1, e, i), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
                for (o = Se.map(S(r, "script"), $), l = o.length; c < p; c++) d = r, c !== f && (d = Se.clone(d, !0, !0), l && Se.merge(o, S(d, "script"))), n.call(e[c], d, c);
                if (l)
                    for (u = o[o.length - 1].ownerDocument, Se.map(o, I), c = 0; c < l; c++) d = o[c], tt.test(d.type || "") && !Ge.access(d, "globalEval") && Se.contains(u, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? Se._evalUrl && Se._evalUrl(d.src) : s(d.textContent.replace(ct, ""), u, d))
            }
            return e
        }

        function H(e, t, n) {
            for (var i, r = t ? Se.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || Se.cleanData(S(i)), i.parentNode && (n && Se.contains(i.ownerDocument, i) && k(S(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function B(e, t, n) {
            var i, r, a, s, o = e.style;
            return n = n || ft(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || Se.contains(e.ownerDocument, e) || (s = Se.style(e, t)), !we.pixelBoxStyles() && pt.test(s) && ht.test(t) && (i = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = r, o.maxWidth = a)), void 0 !== s ? s + "" : s
        }

        function q(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function R(e) {
            if (e in xt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = bt.length; n--;)
                if ((e = bt[n] + t) in xt) return e
        }

        function F(e) {
            var t = Se.cssProps[e];
            return t || (t = Se.cssProps[e] = R(e) || e), t
        }

        function G(e, t, n) {
            var i = _e.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function W(e, t, n, i, r, a) {
            var s = "width" === t ? 1 : 0,
                o = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += Se.css(e, n + Ue[s], !0, r)), i ? ("content" === n && (l -= Se.css(e, "padding" + Ue[s], !0, r)), "margin" !== n && (l -= Se.css(e, "border" + Ue[s] + "Width", !0, r))) : (l += Se.css(e, "padding" + Ue[s], !0, r), "padding" !== n ? l += Se.css(e, "border" + Ue[s] + "Width", !0, r) : o += Se.css(e, "border" + Ue[s] + "Width", !0, r));
            return !i && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5))), l
        }

        function X(e, t, n) {
            var i = ft(e),
                r = B(e, t, i),
                a = "border-box" === Se.css(e, "boxSizing", !1, i),
                s = a;
            if (pt.test(r)) {
                if (!n) return r;
                r = "auto"
            }
            return s = s && (we.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === Se.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + W(e, t, n || (a ? "border" : "content"), s, i, r) + "px"
        }

        function V(e, t, n, i, r) {
            return new V.prototype.init(e, t, n, i, r)
        }

        function Y() {
            Tt && (!1 === ue.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(Y) : n.setTimeout(Y, Se.fx.interval), Se.fx.tick())
        }

        function _() {
            return n.setTimeout(function () {
                wt = void 0
            }), wt = Date.now()
        }

        function U(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Ue[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function K(e, t, n) {
            for (var i, r = (Z.tweeners[t] || []).concat(Z.tweeners["*"]), a = 0, s = r.length; a < s; a++)
                if (i = r[a].call(n, t, e)) return i
        }

        function Q(e, t, n) {
            var i, r, a, s, o, l, d, u, c = "width" in t || "height" in t,
                p = this,
                f = {},
                h = e.style,
                v = e.nodeType && Ke(e),
                m = Ge.get(e, "fxshow");
            n.queue || (s = Se._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function () {
                s.unqueued || o()
            }), s.unqueued++, p.always(function () {
                p.always(function () {
                    s.unqueued--, Se.queue(e, "fx").length || s.empty.fire()
                })
            }));
            for (i in t)
                if (r = t[i], Et.test(r)) {
                    if (delete t[i], a = a || "toggle" === r, r === (v ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        v = !0
                    }
                    f[i] = m && m[i] || Se.style(e, i)
                }
            if ((l = !Se.isEmptyObject(t)) || !Se.isEmptyObject(f)) {
                c && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], d = m && m.display, null == d && (d = Ge.get(e, "display")), u = Se.css(e, "display"), "none" === u && (d ? u = d : (C([e], !0), d = e.style.display || d, u = Se.css(e, "display"), C([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === Se.css(e, "float") && (l || (p.done(function () {
                    h.display = d
                }), null == d && (u = h.display, d = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1;
                for (i in f) l || (m ? "hidden" in m && (v = m.hidden) : m = Ge.access(e, "fxshow", {
                    display: d
                }), a && (m.hidden = !v), v && C([e], !0), p.done(function () {
                    v || C([e]), Ge.remove(e, "fxshow");
                    for (i in f) Se.style(e, i, f[i])
                })), l = K(v ? m[i] : 0, i, p), i in m || (m[i] = l.start, v && (l.end = l.start, l.start = 0))
            }
        }

        function J(e, t) {
            var n, i, r, a, s;
            for (n in e)
                if (i = y(n), r = t[i], a = e[n], Array.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (s = Se.cssHooks[i]) && "expand" in s) {
                    a = s.expand(a), delete e[i];
                    for (n in a) n in e || (e[n] = a[n], t[n] = r)
                } else t[i] = r
        }

        function Z(e, t, n) {
            var i, r, a = 0,
                s = Z.prefilters.length,
                o = Se.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (r) return !1;
                    for (var t = wt || _(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, a = 1 - i, s = 0, l = d.tweens.length; s < l; s++) d.tweens[s].run(a);
                    return o.notifyWith(e, [d, a, n]), a < 1 && l ? n : (l || o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d]), !1)
                },
                d = o.promise({
                    elem: e,
                    props: Se.extend({}, t),
                    opts: Se.extend(!0, {
                        specialEasing: {},
                        easing: Se.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: wt || _(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var i = Se.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                        return d.tweens.push(i), i
                    },
                    stop: function (t) {
                        var n = 0,
                            i = t ? d.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) d.tweens[n].run(1);
                        return t ? (o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d, t])) : o.rejectWith(e, [d, t]), this
                    }
                }),
                u = d.props;
            for (J(u, d.opts.specialEasing); a < s; a++)
                if (i = Z.prefilters[a].call(d, e, u, d.opts)) return Te(i.stop) && (Se._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)), i;
            return Se.map(u, K, d), Te(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), Se.fx.timer(Se.extend(l, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })), d
        }

        function ee(e) {
            return (e.match(Ne) || []).join(" ")
        }

        function te(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function ne(e) {
            return Array.isArray(e) ? e : "string" == typeof e ? e.match(Ne) || [] : []
        }

        function ie(e, t, n, i) {
            var r;
            if (Array.isArray(t)) Se.each(t, function (t, r) {
                n || Ot.test(e) ? i(e, r) : ie(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== o(t)) i(e, t);
            else
                for (r in t) ie(e + "[" + r + "]", t[r], n, i)
        }

        function re(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    a = t.toLowerCase().match(Ne) || [];
                if (Te(n))
                    for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function ae(e, t, n, i) {
            function r(o) {
                var l;
                return a[o] = !0, Se.each(e[o] || [], function (e, o) {
                    var d = o(t, n, i);
                    return "string" != typeof d || s || a[d] ? s ? !(l = d) : void 0 : (t.dataTypes.unshift(d), r(d), !1)
                }), l
            }
            var a = {},
                s = e === Yt;
            return r(t.dataTypes[0]) || !a["*"] && r("*")
        }

        function se(e, t) {
            var n, i, r = Se.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && Se.extend(!0, e, i), e
        }

        function oe(e, t, n) {
            for (var i, r, a, s, o = e.contents, l = e.dataTypes;
                 "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (r in o)
                    if (o[r] && o[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) a = l[0];
            else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        a = r;
                        break
                    }
                    s || (s = r)
                }
                a = a || s
            }
            if (a) return a !== l[0] && l.unshift(a), n[a]
        }

        function le(e, t, n, i) {
            var r, a, s, o, l, d = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
            for (a = u.shift(); a;)
                if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                    if ("*" === a) a = l;
                    else if ("*" !== l && l !== a) {
                        if (!(s = d[l + " " + a] || d["* " + a]))
                            for (r in d)
                                if (o = r.split(" "), o[1] === a && (s = d[l + " " + o[0]] || d["* " + o[0]])) {
                                    !0 === s ? s = d[r] : !0 !== d[r] && (a = o[0], u.unshift(o[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + a
                                }
                            }
                    }
            return {
                state: "success",
                data: t
            }
        }
        var de = [],
            ue = n.document,
            ce = Object.getPrototypeOf,
            pe = de.slice,
            fe = de.concat,
            he = de.push,
            ve = de.indexOf,
            me = {},
            ge = me.toString,
            ye = me.hasOwnProperty,
            be = ye.toString,
            xe = be.call(Object),
            we = {},
            Te = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            Ee = function (e) {
                return null != e && e === e.window
            },
            Ce = {
                type: !0,
                src: !0,
                noModule: !0
            },
            Se = function (e, t) {
                return new Se.fn.init(e, t)
            },
            ke = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        Se.fn = Se.prototype = {
            jquery: "3.3.1",
            constructor: Se,
            length: 0,
            toArray: function () {
                return pe.call(this)
            },
            get: function (e) {
                return null == e ? pe.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function (e) {
                var t = Se.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function (e) {
                return Se.each(this, e)
            },
            map: function (e) {
                return this.pushStack(Se.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return this.pushStack(pe.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: he,
            sort: de.sort,
            splice: de.splice
        }, Se.extend = Se.fn.extend = function () {
            var e, t, n, i, r, a, s = arguments[0] || {},
                o = 1,
                l = arguments.length,
                d = !1;
            for ("boolean" == typeof s && (d = s, s = arguments[o] || {}, o++), "object" == typeof s || Te(s) || (s = {}), o === l && (s = this, o--); o < l; o++)
                if (null != (e = arguments[o]))
                    for (t in e) n = s[t], i = e[t], s !== i && (d && i && (Se.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, a = n && Array.isArray(n) ? n : []) : a = n && Se.isPlainObject(n) ? n : {}, s[t] = Se.extend(d, a, i)) : void 0 !== i && (s[t] = i));
            return s
        }, Se.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== ge.call(e)) && (!(t = ce(e)) || "function" == typeof (n = ye.call(t, "constructor") && t.constructor) && be.call(n) === xe)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function (e) {
                s(e)
            },
            each: function (e, t) {
                var n, i = 0;
                if (l(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(ke, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (l(Object(e)) ? Se.merge(n, "string" == typeof e ? [e] : e) : he.call(n, e)), n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : ve.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, a = e.length, s = !n; r < a; r++) !t(e[r], r) !== s && i.push(e[r]);
                return i
            },
            map: function (e, t, n) {
                var i, r, a = 0,
                    s = [];
                if (l(e))
                    for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && s.push(r);
                else
                    for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
                return fe.apply([], s)
            },
            guid: 1,
            support: we
        }), "function" == typeof Symbol && (Se.fn[Symbol.iterator] = de[Symbol.iterator]), Se.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            me["[object " + t + "]"] = t.toLowerCase()
        });
        var Me = function (e) {
            function t(e, t, n, i) {
                var r, a, s, o, l, u, p, f = t && t.ownerDocument,
                    h = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!i && ((t ? t.ownerDocument || t : B) !== z && L(t), t = t || z, $)) {
                    if (11 !== h && (l = ve.exec(e)))
                        if (r = l[1]) {
                            if (9 === h) {
                                if (!(s = t.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (f && (s = f.getElementById(r)) && j(t, s) && s.id === r) return n.push(s), n
                        } else {
                            if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (x.qsa && !W[e + " "] && (!I || !I.test(e))) {
                        if (1 !== h) f = t, p = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((o = t.getAttribute("id")) ? o = o.replace(be, xe) : t.setAttribute("id", o = H), u = C(e), a = u.length; a--;) u[a] = "#" + o + " " + c(u[a]);
                            p = u.join(","), f = me.test(e) && d(t.parentNode) || t
                        }
                        if (p) try {
                            return K.apply(n, f.querySelectorAll(p)), n
                        } catch (e) {} finally {
                            o === H && t.removeAttribute("id")
                        }
                    }
                }
                return k(e.replace(ae, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[H] = !0, e
            }

            function r(e) {
                var t = z.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function a(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function o(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function l(e) {
                return i(function (t) {
                    return t = +t, i(function (n, i) {
                        for (var r, a = e([], n.length, t), s = a.length; s--;) n[r = a[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function d(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            function u() {}

            function c(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function p(e, t, n) {
                var i = t.dir,
                    r = t.next,
                    a = r || i,
                    s = n && "parentNode" === a,
                    o = R++;
                return t.first ? function (t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || s) return e(t, n, r);
                    return !1
                } : function (t, n, l) {
                    var d, u, c, p = [q, o];
                    if (l) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || s)
                                if (c = t[H] || (t[H] = {}), u = c[t.uniqueID] || (c[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                else {
                                    if ((d = u[a]) && d[0] === q && d[1] === o) return p[2] = d[2];
                                    if (u[a] = p, p[2] = e(t, n, l)) return !0
                                } return !1
                }
            }

            function f(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function h(e, n, i) {
                for (var r = 0, a = n.length; r < a; r++) t(e, n[r], i);
                return i
            }

            function v(e, t, n, i, r) {
                for (var a, s = [], o = 0, l = e.length, d = null != t; o < l; o++)(a = e[o]) && (n && !n(a, i, r) || (s.push(a), d && t.push(o)));
                return s
            }

            function m(e, t, n, r, a, s) {
                return r && !r[H] && (r = m(r)), a && !a[H] && (a = m(a, s)), i(function (i, s, o, l) {
                    var d, u, c, p = [],
                        f = [],
                        m = s.length,
                        g = i || h(t || "*", o.nodeType ? [o] : o, []),
                        y = !e || !i && t ? g : v(g, p, e, o, l),
                        b = n ? a || (i ? e : m || r) ? [] : s : y;
                    if (n && n(y, b, o, l), r)
                        for (d = v(b, f), r(d, [], o, l), u = d.length; u--;)(c = d[u]) && (b[f[u]] = !(y[f[u]] = c));
                    if (i) {
                        if (a || e) {
                            if (a) {
                                for (d = [], u = b.length; u--;)(c = b[u]) && d.push(y[u] = c);
                                a(null, b = [], d, l)
                            }
                            for (u = b.length; u--;)(c = b[u]) && (d = a ? J(i, c) : p[u]) > -1 && (i[d] = !(s[d] = c))
                        }
                    } else b = v(b === s ? b.splice(m, b.length) : b), a ? a(null, s, b, l) : K.apply(s, b)
                })
            }

            function g(e) {
                for (var t, n, i, r = e.length, a = w.relative[e[0].type], s = a || w.relative[" "], o = a ? 1 : 0, l = p(function (e) {
                    return e === t
                }, s, !0), d = p(function (e) {
                    return J(t, e) > -1
                }, s, !0), u = [function (e, n, i) {
                    var r = !a && (i || n !== M) || ((t = n).nodeType ? l(e, n, i) : d(e, n, i));
                    return t = null, r
                }]; o < r; o++)
                    if (n = w.relative[e[o].type]) u = [p(f(u), n)];
                    else {
                        if (n = w.filter[e[o].type].apply(null, e[o].matches), n[H]) {
                            for (i = ++o; i < r && !w.relative[e[i].type]; i++);
                            return m(o > 1 && f(u), o > 1 && c(e.slice(0, o - 1).concat({
                                value: " " === e[o - 2].type ? "*" : ""
                            })).replace(ae, "$1"), n, o < i && g(e.slice(o, i)), i < r && g(e = e.slice(i)), i < r && c(e))
                        }
                        u.push(n)
                    }
                return f(u)
            }

            function y(e, n) {
                var r = n.length > 0,
                    a = e.length > 0,
                    s = function (i, s, o, l, d) {
                        var u, c, p, f = 0,
                            h = "0",
                            m = i && [],
                            g = [],
                            y = M,
                            b = i || a && w.find.TAG("*", d),
                            x = q += null == y ? 1 : Math.random() || .1,
                            T = b.length;
                        for (d && (M = s === z || s || d); h !== T && null != (u = b[h]); h++) {
                            if (a && u) {
                                for (c = 0, s || u.ownerDocument === z || (L(u), o = !$); p = e[c++];)
                                    if (p(u, s || z, o)) {
                                        l.push(u);
                                        break
                                    }
                                d && (q = x)
                            }
                            r && ((u = !p && u) && f--, i && m.push(u))
                        }
                        if (f += h, r && h !== f) {
                            for (c = 0; p = n[c++];) p(m, g, s, o);
                            if (i) {
                                if (f > 0)
                                    for (; h--;) m[h] || g[h] || (g[h] = _.call(l));
                                g = v(g)
                            }
                            K.apply(l, g), d && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return d && (q = x, M = y), m
                    };
                return r ? i(s) : s
            }
            var b, x, w, T, E, C, S, k, M, A, P, L, z, D, $, I, O, N, j, H = "sizzle" + 1 * new Date,
                B = e.document,
                q = 0,
                R = 0,
                F = n(),
                G = n(),
                W = n(),
                X = function (e, t) {
                    return e === t && (P = !0), 0
                },
                V = {}.hasOwnProperty,
                Y = [],
                _ = Y.pop,
                U = Y.push,
                K = Y.push,
                Q = Y.slice,
                J = function (e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ee = "[\\x20\\t\\r\\n\\f]",
                te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                re = new RegExp(ee + "+", "g"),
                ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                se = new RegExp("^" + ee + "*," + ee + "*"),
                oe = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                de = new RegExp(ie),
                ue = new RegExp("^" + te + "$"),
                ce = {
                    ID: new RegExp("^#(" + te + ")"),
                    CLASS: new RegExp("^\\.(" + te + ")"),
                    TAG: new RegExp("^(" + te + "|[*])"),
                    ATTR: new RegExp("^" + ne),
                    PSEUDO: new RegExp("^" + ie),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                },
                pe = /^(?:input|select|textarea|button)$/i,
                fe = /^h\d$/i,
                he = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                me = /[+~]/,
                ge = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                ye = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                xe = function (e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                we = function () {
                    L()
                },
                Te = p(function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                K.apply(Y = Q.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType
            } catch (e) {
                K = {
                    apply: Y.length ? function (e, t) {
                        U.apply(e, Q.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            x = t.support = {}, E = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, L = t.setDocument = function (e) {
                var t, n, i = e ? e.ownerDocument || e : B;
                return i !== z && 9 === i.nodeType && i.documentElement ? (z = i, D = z.documentElement, $ = !E(z), B !== z && (n = z.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = r(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = r(function (e) {
                    return e.appendChild(z.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = he.test(z.getElementsByClassName), x.getById = r(function (e) {
                    return D.appendChild(e).id = H, !z.getElementsByName || !z.getElementsByName(H).length
                }), x.getById ? (w.filter.ID = function (e) {
                    var t = e.replace(ge, ye);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, w.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && $) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (w.filter.ID = function (e) {
                    var t = e.replace(ge, ye);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, w.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && $) {
                        var n, i, r, a = t.getElementById(e);
                        if (a) {
                            if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                            for (r = t.getElementsByName(e), i = 0; a = r[i++];)
                                if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                        }
                        return []
                    }
                }), w.find.TAG = x.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [],
                        r = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return a
                }, w.find.CLASS = x.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && $) return t.getElementsByClassName(e)
                }, O = [], I = [], (x.qsa = he.test(z.querySelectorAll)) && (r(function (e) {
                    D.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + H + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || I.push(".#.+[+~]")
                }), r(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = z.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                })), (x.matchesSelector = he.test(N = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function (e) {
                    x.disconnectedMatch = N.call(e, "*"), N.call(e, "[s!='']:x"), O.push("!=", ie)
                }), I = I.length && new RegExp(I.join("|")), O = O.length && new RegExp(O.join("|")), t = he.test(D.compareDocumentPosition), j = t || he.test(D.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, X = t ? function (e, t) {
                    if (e === t) return P = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === z || e.ownerDocument === B && j(B, e) ? -1 : t === z || t.ownerDocument === B && j(B, t) ? 1 : A ? J(A, e) - J(A, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return P = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        a = t.parentNode,
                        o = [e],
                        l = [t];
                    if (!r || !a) return e === z ? -1 : t === z ? 1 : r ? -1 : a ? 1 : A ? J(A, e) - J(A, t) : 0;
                    if (r === a) return s(e, t);
                    for (n = e; n = n.parentNode;) o.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; o[i] === l[i];) i++;
                    return i ? s(o[i], l[i]) : o[i] === B ? -1 : l[i] === B ? 1 : 0
                }, z) : z
            }, t.matches = function (e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== z && L(e), n = n.replace(le, "='$1']"), x.matchesSelector && $ && !W[n + " "] && (!O || !O.test(n)) && (!I || !I.test(n))) try {
                    var i = N.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, z, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== z && L(e), j(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== z && L(e);
                var n = w.attrHandle[t.toLowerCase()],
                    i = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
                return void 0 !== i ? i : x.attributes || !$ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.escape = function (e) {
                return (e + "").replace(be, xe)
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (P = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort(X), P) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return A = null, e
            }, T = t.getText = function (e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += T(t);
                return n
            }, w = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ce,
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
                    ATTR: function (e) {
                        return e[1] = e[1].replace(ge, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return ce.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ge, ye).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = F[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, n, i) {
                        return function (r) {
                            var a = t.attr(r, e);
                            return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (e, t, n, i, r) {
                        var a = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === i && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var d, u, c, p, f, h, v = a !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                g = o && t.nodeName.toLowerCase(),
                                y = !l && !o,
                                b = !1;
                            if (m) {
                                if (a) {
                                    for (; v;) {
                                        for (p = t; p = p[v];)
                                            if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                        h = v = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (p = m, c = p[H] || (p[H] = {}), u = c[p.uniqueID] || (c[p.uniqueID] = {}), d = u[e] || [], f = d[0] === q && d[1], b = f && d[2], p = f && m.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            u[e] = [q, f, b];
                                            break
                                        }
                                } else if (y && (p = t, c = p[H] || (p[H] = {}), u = c[p.uniqueID] || (c[p.uniqueID] = {}), d = u[e] || [], f = d[0] === q && d[1], b = f), !1 === b)
                                    for (;
                                        (p = ++f && p && p[v] || (b = f = 0) || h.pop()) && ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && (c = p[H] || (p[H] = {}), u = c[p.uniqueID] || (c[p.uniqueID] = {}), u[e] = [q, b]), p !== t)););
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, n) {
                        var r, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return a[H] ? a(n) : a.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                            for (var i, r = a(e, n), s = r.length; s--;) i = J(e, r[s]), e[i] = !(t[i] = r[s])
                        }) : function (e) {
                            return a(e, 0, r)
                        }) : a
                    }
                },
                pseudos: {
                    not: i(function (e) {
                        var t = [],
                            n = [],
                            r = S(e.replace(ae, "$1"));
                        return r[H] ? i(function (e, t, n, i) {
                            for (var a, s = r(e, null, i, []), o = e.length; o--;)(a = s[o]) && (e[o] = !(t[o] = a))
                        }) : function (e, i, a) {
                            return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function (e) {
                        return e = e.replace(ge, ye),
                            function (t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function (e) {
                        return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ge, ye).toLowerCase(),
                            function (t) {
                                var n;
                                do {
                                    if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === D
                    },
                    focus: function (e) {
                        return e === z.activeElement && (!z.hasFocus || z.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: o(!1),
                    disabled: o(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function (e) {
                        return fe.test(e.nodeName)
                    },
                    input: function (e) {
                        return pe.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function () {
                        return [0]
                    }),
                    last: l(function (e, t) {
                        return [t - 1]
                    }),
                    eq: l(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: l(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: l(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[b] = function (e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(b);
            for (b in {
                submit: !0,
                reset: !0
            }) w.pseudos[b] = function (e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(b);
            return u.prototype = w.filters = w.pseudos, w.setFilters = new u, C = t.tokenize = function (e, n) {
                var i, r, a, s, o, l, d, u = G[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (o = e, l = [], d = w.preFilter; o;) {
                    i && !(r = se.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(a = [])), i = !1, (r = oe.exec(o)) && (i = r.shift(), a.push({
                        value: i,
                        type: r[0].replace(ae, " ")
                    }), o = o.slice(i.length));
                    for (s in w.filter) !(r = ce[s].exec(o)) || d[s] && !(r = d[s](r)) || (i = r.shift(), a.push({
                        value: i,
                        type: s,
                        matches: r
                    }), o = o.slice(i.length));
                    if (!i) break
                }
                return n ? o.length : o ? t.error(e) : G(e, l).slice(0)
            }, S = t.compile = function (e, t) {
                var n, i = [],
                    r = [],
                    a = W[e + " "];
                if (!a) {
                    for (t || (t = C(e)), n = t.length; n--;) a = g(t[n]), a[H] ? i.push(a) : r.push(a);
                    a = W(e, y(r, i)), a.selector = e
                }
                return a
            }, k = t.select = function (e, t, n, i) {
                var r, a, s, o, l, u = "function" == typeof e && e,
                    p = !i && C(e = u.selector || e);
                if (n = n || [], 1 === p.length) {
                    if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (s = a[0]).type && 9 === t.nodeType && $ && w.relative[a[1].type]) {
                        if (!(t = (w.find.ID(s.matches[0].replace(ge, ye), t) || [])[0])) return n;
                        u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                    }
                    for (r = ce.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r], !w.relative[o = s.type]);)
                        if ((l = w.find[o]) && (i = l(s.matches[0].replace(ge, ye), me.test(a[0].type) && d(t.parentNode) || t))) {
                            if (a.splice(r, 1), !(e = i.length && c(a))) return K.apply(n, i), n;
                            break
                        }
                }
                return (u || S(e, p))(i, t, !$, n, !t || me.test(e) && d(t.parentNode) || t), n
            }, x.sortStable = H.split("").sort(X).join("") === H, x.detectDuplicates = !!P, L(), x.sortDetached = r(function (e) {
                return 1 & e.compareDocumentPosition(z.createElement("fieldset"))
            }), r(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || a("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), r(function (e) {
                return null == e.getAttribute("disabled")
            }) || a(Z, function (e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(n);
        Se.find = Me, Se.expr = Me.selectors, Se.expr[":"] = Se.expr.pseudos, Se.uniqueSort = Se.unique = Me.uniqueSort, Se.text = Me.getText, Se.isXMLDoc = Me.isXML, Se.contains = Me.contains, Se.escapeSelector = Me.escape;
        var Ae = function (e, t, n) {
                for (var i = [], r = void 0 !== n;
                     (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && Se(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            Pe = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Le = Se.expr.match.needsContext,
            ze = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        Se.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Se.find.matchesSelector(i, e) ? [i] : [] : Se.find.matches(e, Se.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, Se.fn.extend({
            find: function (e) {
                var t, n, i = this.length,
                    r = this;
                if ("string" != typeof e) return this.pushStack(Se(e).filter(function () {
                    for (t = 0; t < i; t++)
                        if (Se.contains(r[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) Se.find(e, r[t], n);
                return i > 1 ? Se.uniqueSort(n) : n
            },
            filter: function (e) {
                return this.pushStack(u(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(u(this, e || [], !0))
            },
            is: function (e) {
                return !!u(this, "string" == typeof e && Le.test(e) ? Se(e) : e || [], !1).length
            }
        });
        var De, $e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (Se.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || De, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : $e.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof Se ? t[0] : t, Se.merge(this, Se.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ue, !0)), ze.test(i[1]) && Se.isPlainObject(t))
                        for (i in t) Te(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return r = ue.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : Te(e) ? void 0 !== n.ready ? n.ready(e) : e(Se) : Se.makeArray(e, this)
        }).prototype = Se.fn, De = Se(ue);
        var Ie = /^(?:parents|prev(?:Until|All))/,
            Oe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        Se.fn.extend({
            has: function (e) {
                var t = Se(e, this),
                    n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++)
                        if (Se.contains(this, t[e])) return !0
                })
            },
            closest: function (e, t) {
                var n, i = 0,
                    r = this.length,
                    a = [],
                    s = "string" != typeof e && Se(e);
                if (!Le.test(e))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Se.find.matchesSelector(n, e))) {
                                a.push(n);
                                break
                            }
                return this.pushStack(a.length > 1 ? Se.uniqueSort(a) : a)
            },
            index: function (e) {
                return e ? "string" == typeof e ? ve.call(Se(e), this[0]) : ve.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(Se.uniqueSort(Se.merge(this.get(), Se(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), Se.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return Ae(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return Ae(e, "parentNode", n)
            },
            next: function (e) {
                return c(e, "nextSibling")
            },
            prev: function (e) {
                return c(e, "previousSibling")
            },
            nextAll: function (e) {
                return Ae(e, "nextSibling")
            },
            prevAll: function (e) {
                return Ae(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return Ae(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return Ae(e, "previousSibling", n)
            },
            siblings: function (e) {
                return Pe((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return Pe(e.firstChild)
            },
            contents: function (e) {
                return d(e, "iframe") ? e.contentDocument : (d(e, "template") && (e = e.content || e), Se.merge([], e.childNodes))
            }
        }, function (e, t) {
            Se.fn[e] = function (n, i) {
                var r = Se.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Se.filter(i, r)), this.length > 1 && (Oe[e] || Se.uniqueSort(r), Ie.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var Ne = /[^\x20\t\r\n\f]+/g;
        Se.Callbacks = function (e) {
            e = "string" == typeof e ? p(e) : Se.extend({}, e);
            var t, n, i, r, a = [],
                s = [],
                l = -1,
                d = function () {
                    for (r = r || e.once, i = t = !0; s.length; l = -1)
                        for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
                },
                u = {
                    add: function () {
                        return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
                            Se.each(n, function (n, i) {
                                Te(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== o(i) && t(i)
                            })
                        }(arguments), n && !t && d()), this
                    },
                    remove: function () {
                        return Se.each(arguments, function (e, t) {
                            for (var n;
                                 (n = Se.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function (e) {
                        return e ? Se.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function () {
                        return a && (a = []), this
                    },
                    disable: function () {
                        return r = s = [], a = n = "", this
                    },
                    disabled: function () {
                        return !a
                    },
                    lock: function () {
                        return r = s = [], n || t || (a = n = ""), this
                    },
                    locked: function () {
                        return !!r
                    },
                    fireWith: function (e, n) {
                        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || d()), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return u
        }, Se.extend({
            Deferred: function (e) {
                var t = [
                        ["notify", "progress", Se.Callbacks("memory"), Se.Callbacks("memory"), 2],
                        ["resolve", "done", Se.Callbacks("once memory"), Se.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", Se.Callbacks("once memory"), Se.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return a.done(arguments).fail(arguments), this
                        },
                        catch: function (e) {
                            return r.then(null, e)
                        },
                        pipe: function () {
                            var e = arguments;
                            return Se.Deferred(function (n) {
                                Se.each(t, function (t, i) {
                                    var r = Te(e[i[4]]) && e[i[4]];
                                    a[i[1]](function () {
                                        var e = r && r.apply(this, arguments);
                                        e && Te(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function (e, i, r) {
                            function a(e, t, i, r) {
                                return function () {
                                    var o = this,
                                        l = arguments,
                                        d = function () {
                                            var n, d;
                                            if (!(e < s)) {
                                                if ((n = i.apply(o, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                d = n && ("object" == typeof n || "function" == typeof n) && n.then, Te(d) ? r ? d.call(n, a(s, t, f, r), a(s, t, h, r)) : (s++, d.call(n, a(s, t, f, r), a(s, t, h, r), a(s, t, f, t.notifyWith))) : (i !== f && (o = void 0, l = [n]), (r || t.resolveWith)(o, l))
                                            }
                                        },
                                        u = r ? d : function () {
                                            try {
                                                d()
                                            } catch (n) {
                                                Se.Deferred.exceptionHook && Se.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= s && (i !== h && (o = void 0, l = [n]), t.rejectWith(o, l))
                                            }
                                        };
                                    e ? u() : (Se.Deferred.getStackHook && (u.stackTrace = Se.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }
                            var s = 0;
                            return Se.Deferred(function (n) {
                                t[0][3].add(a(0, n, Te(r) ? r : f, n.notifyWith)), t[1][3].add(a(0, n, Te(e) ? e : f)), t[2][3].add(a(0, n, Te(i) ? i : h))
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? Se.extend(e, r) : r
                        }
                    },
                    a = {};
                return Se.each(t, function (e, n) {
                    var s = n[2],
                        o = n[5];
                    r[n[1]] = s.add, o && s.add(function () {
                        i = o
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), a[n[0]] = function () {
                        return a[n[0] + "With"](this === a ? void 0 : this, arguments), this
                    }, a[n[0] + "With"] = s.fireWith
                }), r.promise(a), e && e.call(a, a), a
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    r = pe.call(arguments),
                    a = Se.Deferred(),
                    s = function (e) {
                        return function (n) {
                            i[e] = this, r[e] = arguments.length > 1 ? pe.call(arguments) : n, --t || a.resolveWith(i, r)
                        }
                    };
                if (t <= 1 && (v(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || Te(r[n] && r[n].then))) return a.then();
                for (; n--;) v(r[n], s(n), a.reject);
                return a.promise()
            }
        });
        var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        Se.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && je.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, Se.readyException = function (e) {
            n.setTimeout(function () {
                throw e
            })
        };
        var He = Se.Deferred();
        Se.fn.ready = function (e) {
            return He.then(e).catch(function (e) {
                Se.readyException(e)
            }), this
        }, Se.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --Se.readyWait : Se.isReady) || (Se.isReady = !0, !0 !== e && --Se.readyWait > 0 || He.resolveWith(ue, [Se]))
            }
        }), Se.ready.then = He.then, "complete" === ue.readyState || "loading" !== ue.readyState && !ue.documentElement.doScroll ? n.setTimeout(Se.ready) : (ue.addEventListener("DOMContentLoaded", m), n.addEventListener("load", m));
        var Be = function (e, t, n, i, r, a, s) {
                var l = 0,
                    d = e.length,
                    u = null == n;
                if ("object" === o(n)) {
                    r = !0;
                    for (l in n) Be(e, t, l, n[l], !0, a, s)
                } else if (void 0 !== i && (r = !0, Te(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(Se(e), n)
                })), t))
                    for (; l < d; l++) t(e[l], n, s ? i : i.call(e[l], l, t(e[l], n)));
                return r ? e : u ? t.call(e) : d ? t(e[0], n) : a
            },
            qe = /^-ms-/,
            Re = /-([a-z])/g,
            Fe = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        b.uid = 1, b.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function (e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t) r[y(t)] = n;
                else
                    for (i in t) r[y(i)] = t[i];
                return r
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][y(t)]
            },
            access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        Array.isArray(t) ? t = t.map(y) : (t = y(t), t = t in i ? [t] : t.match(Ne) || []), n = t.length;
                        for (; n--;) delete i[t[n]]
                    }(void 0 === t || Se.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !Se.isEmptyObject(t)
            }
        };
        var Ge = new b,
            We = new b,
            Xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ve = /[A-Z]/g;
        Se.extend({
            hasData: function (e) {
                return We.hasData(e) || Ge.hasData(e)
            },
            data: function (e, t, n) {
                return We.access(e, t, n)
            },
            removeData: function (e, t) {
                We.remove(e, t)
            },
            _data: function (e, t, n) {
                return Ge.access(e, t, n)
            },
            _removeData: function (e, t) {
                Ge.remove(e, t)
            }
        }), Se.fn.extend({
            data: function (e, t) {
                var n, i, r, a = this[0],
                    s = a && a.attributes;
                if (void 0 === e) {
                    if (this.length && (r = We.get(a), 1 === a.nodeType && !Ge.get(a, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = y(i.slice(5)), w(a, i, r[i])));
                        Ge.set(a, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function () {
                    We.set(this, e)
                }) : Be(this, function (t) {
                    var n;
                    if (a && void 0 === t) {
                        if (void 0 !== (n = We.get(a, e))) return n;
                        if (void 0 !== (n = w(a, e))) return n
                    } else this.each(function () {
                        We.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    We.remove(this, e)
                })
            }
        }), Se.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = Ge.get(e, t), n && (!i || Array.isArray(n) ? i = Ge.access(e, t, Se.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = Se.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    a = Se._queueHooks(e, t),
                    s = function () {
                        Se.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, s, a)), !i && a && a.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return Ge.get(e, n) || Ge.access(e, n, {
                    empty: Se.Callbacks("once memory").add(function () {
                        Ge.remove(e, [t + "queue", n])
                    })
                })
            }
        }), Se.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Se.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = Se.queue(this, e, t);
                    Se._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Se.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    Se.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, i = 1,
                    r = Se.Deferred(),
                    a = this,
                    s = this.length,
                    o = function () {
                        --i || r.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Ge.get(a[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
                return o(), r.promise(t)
            }
        });
        var Ye = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            _e = new RegExp("^(?:([+-])=|)(" + Ye + ")([a-z%]*)$", "i"),
            Ue = ["Top", "Right", "Bottom", "Left"],
            Ke = function (e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && Se.contains(e.ownerDocument, e) && "none" === Se.css(e, "display")
            },
            Qe = function (e, t, n, i) {
                var r, a, s = {};
                for (a in t) s[a] = e.style[a], e.style[a] = t[a];
                r = n.apply(e, i || []);
                for (a in t) e.style[a] = s[a];
                return r
            },
            Je = {};
        Se.fn.extend({
            show: function () {
                return C(this, !0)
            },
            hide: function () {
                return C(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Ke(this) ? Se(this).show() : Se(this).hide()
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
        var it = /<|&#?\w+;/;
        ! function () {
            var e = ue.createDocumentFragment(),
                t = e.appendChild(ue.createElement("div")),
                n = ue.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), we.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", we.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var rt = ue.documentElement,
            at = /^key/,
            st = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ot = /^([^.]*)(?:\.(.+)|)/;
        Se.event = {
            global: {},
            add: function (e, t, n, i, r) {
                var a, s, o, l, d, u, c, p, f, h, v, m = Ge.get(e);
                if (m)
                    for (n.handler && (a = n, n = a.handler, r = a.selector), r && Se.find.matchesSelector(rt, r), n.guid || (n.guid = Se.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                        return void 0 !== Se && Se.event.triggered !== t.type ? Se.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Ne) || [""], d = t.length; d--;) o = ot.exec(t[d]) || [], f = v = o[1], h = (o[2] || "").split(".").sort(), f && (c = Se.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, c = Se.event.special[f] || {}, u = Se.extend({
                        type: f,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && Se.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, a), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), Se.event.global[f] = !0)
            },
            remove: function (e, t, n, i, r) {
                var a, s, o, l, d, u, c, p, f, h, v, m = Ge.hasData(e) && Ge.get(e);
                if (m && (l = m.events)) {
                    for (t = (t || "").match(Ne) || [""], d = t.length; d--;)
                        if (o = ot.exec(t[d]) || [], f = v = o[1], h = (o[2] || "").split(".").sort(), f) {
                            for (c = Se.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, p = l[f] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = p.length; a--;) u = p[a], !r && v !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, c.remove && c.remove.call(e, u));
                            s && !p.length && (c.teardown && !1 !== c.teardown.call(e, h, m.handle) || Se.removeEvent(e, f, m.handle), delete l[f])
                        } else
                            for (f in l) Se.event.remove(e, f + t[d], n, i, !0);
                    Se.isEmptyObject(l) && Ge.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                var t, n, i, r, a, s, o = Se.event.fix(e),
                    l = new Array(arguments.length),
                    d = (Ge.get(this, "events") || {})[o.type] || [],
                    u = Se.event.special[o.type] || {};
                for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (o.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                    for (s = Se.event.handlers.call(this, o, d), t = 0;
                         (r = s[t++]) && !o.isPropagationStopped();)
                        for (o.currentTarget = r.elem, n = 0;
                             (a = r.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (i = ((Se.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (o.result = i) && (o.preventDefault(), o.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, o), o.result
                }
            },
            handlers: function (e, t) {
                var n, i, r, a, s, o = [],
                    l = t.delegateCount,
                    d = e.target;
                if (l && d.nodeType && !("click" === e.type && e.button >= 1))
                    for (; d !== this; d = d.parentNode || this)
                        if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                            for (a = [], s = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? Se(r, this).index(d) > -1 : Se.find(r, this, null, [d]).length), s[r] && a.push(i);
                            a.length && o.push({
                                elem: d,
                                handlers: a
                            })
                        }
                return d = this, l < t.length && o.push({
                    elem: d,
                    handlers: t.slice(l)
                }), o
            },
            addProp: function (e, t) {
                Object.defineProperty(Se.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: Te(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function (e) {
                return e[Se.expando] ? e : new Se.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== L() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === L() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && d(this, "input")) return this.click(), !1
                    },
                    _default: function (e) {
                        return d(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, Se.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, Se.Event = function (e, t) {
            if (!(this instanceof Se.Event)) return new Se.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? A : P, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Se.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Se.expando] = !0
        }, Se.Event.prototype = {
            constructor: Se.Event,
            isDefaultPrevented: P,
            isPropagationStopped: P,
            isImmediatePropagationStopped: P,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = A, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = A, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = A, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
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
            which: function (e) {
                var t = e.button;
                return null == e.which && at.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && st.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, Se.event.addProp), Se.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            Se.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        a = e.handleObj;
                    return r && (r === i || Se.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), Se.fn.extend({
            on: function (e, t, n, i) {
                return z(this, e, t, n, i)
            },
            one: function (e, t, n, i) {
                return z(this, e, t, n, i, 1)
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Se(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = P), this.each(function () {
                    Se.event.remove(this, e, n, t)
                })
            }
        });
        var lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            dt = /<script|<style|<link/i,
            ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ct = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        Se.extend({
            htmlPrefilter: function (e) {
                return e.replace(lt, "<$1></$2>")
            },
            clone: function (e, t, n) {
                var i, r, a, s, o = e.cloneNode(!0),
                    l = Se.contains(e.ownerDocument, e);
                if (!(we.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Se.isXMLDoc(e)))
                    for (s = S(o), a = S(e), i = 0, r = a.length; i < r; i++) N(a[i], s[i]);
                if (t)
                    if (n)
                        for (a = a || S(e), s = s || S(o), i = 0, r = a.length; i < r; i++) O(a[i], s[i]);
                    else O(e, o);
                return s = S(o, "script"), s.length > 0 && k(s, !l && S(e, "script")), o
            },
            cleanData: function (e) {
                for (var t, n, i, r = Se.event.special, a = 0; void 0 !== (n = e[a]); a++)
                    if (Fe(n)) {
                        if (t = n[Ge.expando]) {
                            if (t.events)
                                for (i in t.events) r[i] ? Se.event.remove(n, i) : Se.removeEvent(n, i, t.handle);
                            n[Ge.expando] = void 0
                        }
                        n[We.expando] && (n[We.expando] = void 0)
                    }
            }
        }), Se.fn.extend({
            detach: function (e) {
                return H(this, e, !0)
            },
            remove: function (e) {
                return H(this, e)
            },
            text: function (e) {
                return Be(this, function (e) {
                    return void 0 === e ? Se.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return j(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        D(this, e).appendChild(e)
                    }
                })
            },
            prepend: function () {
                return j(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = D(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return j(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return j(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Se.cleanData(S(e, !1)), e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return Se.clone(this, e, t)
                })
            },
            html: function (e) {
                return Be(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !dt.test(e) && !nt[(et.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = Se.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (Se.cleanData(S(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = [];
                return j(this, arguments, function (t) {
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
        }, function (e, t) {
            Se.fn[e] = function (e) {
                for (var n, i = [], r = Se(e), a = r.length - 1, s = 0; s <= a; s++) n = s === a ? this : this.clone(!0), Se(r[s])[t](n), he.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var pt = new RegExp("^(" + Ye + ")(?!px)[a-z%]+$", "i"),
            ft = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            ht = new RegExp(Ue.join("|"), "i");
        ! function () {
            function e() {
                if (d) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", rt.appendChild(l).appendChild(d);
                    var e = n.getComputedStyle(d);
                    i = "1%" !== e.top, o = 12 === t(e.marginLeft), d.style.right = "60%", s = 36 === t(e.right), r = 36 === t(e.width), d.style.position = "absolute", a = 36 === d.offsetWidth || "absolute", rt.removeChild(l), d = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var i, r, a, s, o, l = ue.createElement("div"),
                d = ue.createElement("div");
            d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", we.clearCloneStyle = "content-box" === d.style.backgroundClip, Se.extend(we, {
                boxSizingReliable: function () {
                    return e(), r
                },
                pixelBoxStyles: function () {
                    return e(), s
                },
                pixelPosition: function () {
                    return e(), i
                },
                reliableMarginLeft: function () {
                    return e(), o
                },
                scrollboxSize: function () {
                    return e(), a
                }
            }))
        }();
        var vt = /^(none|table(?!-c[ea]).+)/,
            mt = /^--/,
            gt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            yt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            bt = ["Webkit", "Moz", "ms"],
            xt = ue.createElement("div").style;
        Se.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = B(e, "opacity");
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
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, a, s, o = y(t),
                        l = mt.test(t),
                        d = e.style;
                    if (l || (t = F(o)), s = Se.cssHooks[t] || Se.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : d[t];
                    a = typeof n, "string" === a && (r = _e.exec(n)) && r[1] && (n = T(e, t, r), a = "number"), null != n && n === n && ("number" === a && (n += r && r[3] || (Se.cssNumber[o] ? "" : "px")), we.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? d.setProperty(t, n) : d[t] = n))
                }
            },
            css: function (e, t, n, i) {
                var r, a, s, o = y(t);
                return mt.test(t) || (t = F(o)), s = Se.cssHooks[t] || Se.cssHooks[o], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = B(e, t, i)), "normal" === r && t in yt && (r = yt[t]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
            }
        }), Se.each(["height", "width"], function (e, t) {
            Se.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n) return !vt.test(Se.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? X(e, t, i) : Qe(e, gt, function () {
                        return X(e, t, i)
                    })
                },
                set: function (e, n, i) {
                    var r, a = ft(e),
                        s = "border-box" === Se.css(e, "boxSizing", !1, a),
                        o = i && W(e, t, i, s, a);
                    return s && we.scrollboxSize() === a.position && (o -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - W(e, t, "border", !1, a) - .5)), o && (r = _e.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = Se.css(e, t)), G(e, n, o)
                }
            }
        }), Se.cssHooks.marginLeft = q(we.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(B(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            })) + "px"
        }), Se.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            Se.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ue[i] + t] = a[i] || a[i - 2] || a[0];
                    return r
                }
            }, "margin" !== e && (Se.cssHooks[e + t].set = G)
        }), Se.fn.extend({
            css: function (e, t) {
                return Be(this, function (e, t, n) {
                    var i, r, a = {},
                        s = 0;
                    if (Array.isArray(t)) {
                        for (i = ft(e), r = t.length; s < r; s++) a[t[s]] = Se.css(e, t[s], !1, i);
                        return a
                    }
                    return void 0 !== n ? Se.style(e, t, n) : Se.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), Se.Tween = V, V.prototype = {
            constructor: V,
            init: function (e, t, n, i, r, a) {
                this.elem = e, this.prop = n, this.easing = r || Se.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (Se.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = V.propHooks[this.prop];
                return e && e.get ? e.get(this) : V.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = V.propHooks[this.prop];
                return this.options.duration ? this.pos = t = Se.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : V.propHooks._default.set(this), this
            }
        }, V.prototype.init.prototype = V.prototype, V.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Se.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function (e) {
                    Se.fx.step[e.prop] ? Se.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Se.cssProps[e.prop]] && !Se.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Se.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, V.propHooks.scrollTop = V.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, Se.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, Se.fx = V.prototype.init, Se.fx.step = {};
        var wt, Tt, Et = /^(?:toggle|show|hide)$/,
            Ct = /queueHooks$/;
        Se.Animation = Se.extend(Z, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return T(n.elem, e, _e.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                Te(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], Z.tweeners[n] = Z.tweeners[n] || [], Z.tweeners[n].unshift(t)
            },
            prefilters: [Q],
            prefilter: function (e, t) {
                t ? Z.prefilters.unshift(e) : Z.prefilters.push(e)
            }
        }), Se.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? Se.extend({}, e) : {
                complete: n || !n && t || Te(e) && e,
                duration: e,
                easing: n && t || t && !Te(t) && t
            };
            return Se.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in Se.fx.speeds ? i.duration = Se.fx.speeds[i.duration] : i.duration = Se.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                Te(i.old) && i.old.call(this), i.queue && Se.dequeue(this, i.queue)
            }, i
        }, Se.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Ke).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = Se.isEmptyObject(e),
                    a = Se.speed(t, n, i),
                    s = function () {
                        var t = Z(this, Se.extend({}, e), a);
                        (r || Ge.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        a = Se.timers,
                        s = Ge.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && Ct.test(r) && i(s[r]);
                    for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                    !t && n || Se.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = Ge.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        a = Se.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, Se.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Se.each(["toggle", "show", "hide"], function (e, t) {
            var n = Se.fn[t];
            Se.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, i, r)
            }
        }), Se.each({
            slideDown: U("show"),
            slideUp: U("hide"),
            slideToggle: U("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            Se.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), Se.timers = [], Se.fx.tick = function () {
            var e, t = 0,
                n = Se.timers;
            for (wt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || Se.fx.stop(), wt = void 0
        }, Se.fx.timer = function (e) {
            Se.timers.push(e), Se.fx.start()
        }, Se.fx.interval = 13, Se.fx.start = function () {
            Tt || (Tt = !0, Y())
        }, Se.fx.stop = function () {
            Tt = null
        }, Se.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Se.fn.delay = function (e, t) {
            return e = Se.fx ? Se.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                var r = n.setTimeout(t, e);
                i.stop = function () {
                    n.clearTimeout(r)
                }
            })
        },
            function () {
                var e = ue.createElement("input"),
                    t = ue.createElement("select"),
                    n = t.appendChild(ue.createElement("option"));
                e.type = "checkbox", we.checkOn = "" !== e.value, we.optSelected = n.selected, e = ue.createElement("input"), e.value = "t", e.type = "radio", we.radioValue = "t" === e.value
            }();
        var St, kt = Se.expr.attrHandle;
        Se.fn.extend({
            attr: function (e, t) {
                return Be(this, Se.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    Se.removeAttr(this, e)
                })
            }
        }), Se.extend({
            attr: function (e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? Se.prop(e, t, n) : (1 === a && Se.isXMLDoc(e) || (r = Se.attrHooks[t.toLowerCase()] || (Se.expr.match.bool.test(t) ? St : void 0)), void 0 !== n ? null === n ? void Se.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Se.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!we.radioValue && "radio" === t && d(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, i = 0,
                    r = t && t.match(Ne);
                if (r && 1 === e.nodeType)
                    for (; n = r[i++];) e.removeAttribute(n)
            }
        }), St = {
            set: function (e, t, n) {
                return !1 === t ? Se.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, Se.each(Se.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = kt[t] || Se.find.attr;
            kt[t] = function (e, t, i) {
                var r, a, s = t.toLowerCase();
                return i || (a = kt[s], kt[s] = r, r = null != n(e, t, i) ? s : null, kt[s] = a), r
            }
        });
        var Mt = /^(?:input|select|textarea|button)$/i,
            At = /^(?:a|area)$/i;
        Se.fn.extend({
            prop: function (e, t) {
                return Be(this, Se.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[Se.propFix[e] || e]
                })
            }
        }), Se.extend({
            prop: function (e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return 1 === a && Se.isXMLDoc(e) || (t = Se.propFix[t] || t, r = Se.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = Se.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Mt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), we.optSelected || (Se.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), Se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            Se.propFix[this.toLowerCase()] = this
        }), Se.fn.extend({
            addClass: function (e) {
                var t, n, i, r, a, s, o, l = 0;
                if (Te(e)) return this.each(function (t) {
                    Se(this).addClass(e.call(this, t, te(this)))
                });
                if (t = ne(e), t.length)
                    for (; n = this[l++];)
                        if (r = te(n), i = 1 === n.nodeType && " " + ee(r) + " ") {
                            for (s = 0; a = t[s++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            o = ee(i), r !== o && n.setAttribute("class", o)
                        }
                return this
            },
            removeClass: function (e) {
                var t, n, i, r, a, s, o, l = 0;
                if (Te(e)) return this.each(function (t) {
                    Se(this).removeClass(e.call(this, t, te(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (t = ne(e), t.length)
                    for (; n = this[l++];)
                        if (r = te(n), i = 1 === n.nodeType && " " + ee(r) + " ") {
                            for (s = 0; a = t[s++];)
                                for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                            o = ee(i), r !== o && n.setAttribute("class", o)
                        }
                return this
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : Te(e) ? this.each(function (n) {
                    Se(this).toggleClass(e.call(this, n, te(this), t), t)
                }) : this.each(function () {
                    var t, r, a, s;
                    if (i)
                        for (r = 0, a = Se(this), s = ne(e); t = s[r++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = te(this), t && Ge.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ge.get(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + ee(te(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Pt = /\r/g;
        Se.fn.extend({
            val: function (e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = Te(e), this.each(function (n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, Se(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = Se.map(r, function (e) {
                            return null == e ? "" : e + ""
                        })), (t = Se.valHooks[this.type] || Se.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return (t = Se.valHooks[r.type] || Se.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Pt, "") : null == n ? "" : n)
                }
            }
        }), Se.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = Se.find.attr(e, "value");
                        return null != t ? t : ee(Se.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        var t, n, i, r = e.options,
                            a = e.selectedIndex,
                            s = "select-one" === e.type,
                            o = s ? null : [],
                            l = s ? a + 1 : r.length;
                        for (i = a < 0 ? l : s ? a : 0; i < l; i++)
                            if (n = r[i], (n.selected || i === a) && !n.disabled && (!n.parentNode.disabled || !d(n.parentNode, "optgroup"))) {
                                if (t = Se(n).val(), s) return t;
                                o.push(t)
                            }
                        return o
                    },
                    set: function (e, t) {
                        for (var n, i, r = e.options, a = Se.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = Se.inArray(Se.valHooks.option.get(i), a) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), a
                    }
                }
            }
        }), Se.each(["radio", "checkbox"], function () {
            Se.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = Se.inArray(Se(e).val(), t) > -1
                }
            }, we.checkOn || (Se.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), we.focusin = "onfocusin" in n;
        var Lt = /^(?:focusinfocus|focusoutblur)$/,
            zt = function (e) {
                e.stopPropagation()
            };
        Se.extend(Se.event, {
            trigger: function (e, t, i, r) {
                var a, s, o, l, d, u, c, p, f = [i || ue],
                    h = ye.call(e, "type") ? e.type : e,
                    v = ye.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = p = o = i = i || ue, 3 !== i.nodeType && 8 !== i.nodeType && !Lt.test(h + Se.event.triggered) && (h.indexOf(".") > -1 && (v = h.split("."), h = v.shift(), v.sort()), d = h.indexOf(":") < 0 && "on" + h, e = e[Se.expando] ? e : new Se.Event(h, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : Se.makeArray(t, [e]), c = Se.event.special[h] || {}, r || !c.trigger || !1 !== c.trigger.apply(i, t))) {
                    if (!r && !c.noBubble && !Ee(i)) {
                        for (l = c.delegateType || h, Lt.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), o = s;
                        o === (i.ownerDocument || ue) && f.push(o.defaultView || o.parentWindow || n)
                    }
                    for (a = 0;
                         (s = f[a++]) && !e.isPropagationStopped();) p = s, e.type = a > 1 ? l : c.bindType || h, u = (Ge.get(s, "events") || {})[e.type] && Ge.get(s, "handle"), u && u.apply(s, t), (u = d && s[d]) && u.apply && Fe(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = h, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !Fe(i) || d && Te(i[h]) && !Ee(i) && (o = i[d], o && (i[d] = null), Se.event.triggered = h, e.isPropagationStopped() && p.addEventListener(h, zt), i[h](), e.isPropagationStopped() && p.removeEventListener(h, zt), Se.event.triggered = void 0, o && (i[d] = o)), e.result
                }
            },
            simulate: function (e, t, n) {
                var i = Se.extend(new Se.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                Se.event.trigger(i, null, t)
            }
        }), Se.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    Se.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return Se.event.trigger(e, t, n, !0)
            }
        }), we.focusin || Se.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                Se.event.simulate(t, e.target, Se.event.fix(e))
            };
            Se.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this,
                        r = Ge.access(i, t);
                    r || i.addEventListener(e, n, !0), Ge.access(i, t, (r || 0) + 1)
                },
                teardown: function () {
                    var i = this.ownerDocument || this,
                        r = Ge.access(i, t) - 1;
                    r ? Ge.access(i, t, r) : (i.removeEventListener(e, n, !0), Ge.remove(i, t))
                }
            }
        });
        var Dt = n.location,
            $t = Date.now(),
            It = /\?/;
        Se.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || Se.error("Invalid XML: " + e), t
        };
        var Ot = /\[\]$/,
            Nt = /\r?\n/g,
            jt = /^(?:submit|button|image|reset|file)$/i,
            Ht = /^(?:input|select|textarea|keygen)/i;
        Se.param = function (e, t) {
            var n, i = [],
                r = function (e, t) {
                    var n = Te(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !Se.isPlainObject(e)) Se.each(e, function () {
                r(this.name, this.value)
            });
            else
                for (n in e) ie(n, e[n], t, r);
            return i.join("&")
        }, Se.fn.extend({
            serialize: function () {
                return Se.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = Se.prop(this, "elements");
                    return e ? Se.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !Se(this).is(":disabled") && Ht.test(this.nodeName) && !jt.test(e) && (this.checked || !Ze.test(e))
                }).map(function (e, t) {
                    var n = Se(this).val();
                    return null == n ? null : Array.isArray(n) ? Se.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(Nt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Nt, "\r\n")
                    }
                }).get()
            }
        });
        var Bt = /%20/g,
            qt = /#.*$/,
            Rt = /([?&])_=[^&]*/,
            Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Wt = /^(?:GET|HEAD)$/,
            Xt = /^\/\//,
            Vt = {},
            Yt = {},
            _t = "*/".concat("*"),
            Ut = ue.createElement("a");
        Ut.href = Dt.href, Se.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Dt.href,
                type: "GET",
                isLocal: Gt.test(Dt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": _t,
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
            ajaxSetup: function (e, t) {
                return t ? se(se(e, Se.ajaxSettings), t) : se(Se.ajaxSettings, e)
            },
            ajaxPrefilter: re(Vt),
            ajaxTransport: re(Yt),
            ajax: function (e, t) {
                function i(e, t, i, o) {
                    var d, p, f, x, w, T = t;
                    u || (u = !0, l && n.clearTimeout(l), r = void 0, s = o || "", E.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, i && (x = oe(h, E, i)), x = le(h, x, E, d), d ? (h.ifModified && (w = E.getResponseHeader("Last-Modified"), w && (Se.lastModified[a] = w), (w = E.getResponseHeader("etag")) && (Se.etag[a] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, p = x.data, f = x.error, d = !f)) : (f = T, !e && T || (T = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || T) + "", d ? g.resolveWith(v, [p, T, E]) : g.rejectWith(v, [E, T, f]), E.statusCode(b), b = void 0, c && m.trigger(d ? "ajaxSuccess" : "ajaxError", [E, h, d ? p : f]), y.fireWith(v, [E, T]), c && (m.trigger("ajaxComplete", [E, h]), --Se.active || Se.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, a, s, o, l, d, u, c, p, f, h = Se.ajaxSetup({}, t),
                    v = h.context || h,
                    m = h.context && (v.nodeType || v.jquery) ? Se(v) : Se.event,
                    g = Se.Deferred(),
                    y = Se.Callbacks("once memory"),
                    b = h.statusCode || {},
                    x = {},
                    w = {},
                    T = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!o)
                                    for (o = {}; t = Ft.exec(s);) o[t[1].toLowerCase()] = t[2];
                                t = o[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return u ? s : null
                        },
                        setRequestHeader: function (e, t) {
                            return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return null == u && (h.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (u) E.always(e[E.status]);
                                else
                                    for (t in e) b[t] = [b[t], e[t]];
                            return this
                        },
                        abort: function (e) {
                            var t = e || T;
                            return r && r.abort(t), i(0, t), this
                        }
                    };
                if (g.promise(E), h.url = ((e || h.url || Dt.href) + "").replace(Xt, Dt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""], null == h.crossDomain) {
                    d = ue.createElement("a");
                    try {
                        d.href = h.url, d.href = d.href, h.crossDomain = Ut.protocol + "//" + Ut.host != d.protocol + "//" + d.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = Se.param(h.data, h.traditional)), ae(Vt, h, t, E), u) return E;
                c = Se.event && h.global, c && 0 == Se.active++ && Se.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Wt.test(h.type), a = h.url.replace(qt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Bt, "+")) : (f = h.url.slice(a.length), h.data && (h.processData || "string" == typeof h.data) && (a += (It.test(a) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (a = a.replace(Rt, "$1"), f = (It.test(a) ? "&" : "?") + "_=" + $t++ + f), h.url = a + f), h.ifModified && (Se.lastModified[a] && E.setRequestHeader("If-Modified-Since", Se.lastModified[a]), Se.etag[a] && E.setRequestHeader("If-None-Match", Se.etag[a])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : h.accepts["*"]);
                for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(v, E, h) || u)) return E.abort();
                if (T = "abort", y.add(h.complete), E.done(h.success), E.fail(h.error), r = ae(Yt, h, t, E)) {
                    if (E.readyState = 1, c && m.trigger("ajaxSend", [E, h]), u) return E;
                    h.async && h.timeout > 0 && (l = n.setTimeout(function () {
                        E.abort("timeout")
                    }, h.timeout));
                    try {
                        u = !1, r.send(x, i)
                    } catch (e) {
                        if (u) throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return E
            },
            getJSON: function (e, t, n) {
                return Se.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return Se.get(e, void 0, t, "script")
            }
        }), Se.each(["get", "post"], function (e, t) {
            Se[t] = function (e, n, i, r) {
                return Te(n) && (r = r || i, i = n, n = void 0), Se.ajax(Se.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, Se.isPlainObject(e) && e))
            }
        }), Se._evalUrl = function (e) {
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
            wrapAll: function (e) {
                var t;
                return this[0] && (Te(e) && (e = e.call(this[0])), t = Se(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function (e) {
                return Te(e) ? this.each(function (t) {
                    Se(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = Se(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = Te(e);
                return this.each(function (n) {
                    Se(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    Se(this).replaceWith(this.childNodes)
                }), this
            }
        }), Se.expr.pseudos.hidden = function (e) {
            return !Se.expr.pseudos.visible(e)
        }, Se.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, Se.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Kt = {
                0: 200,
                1223: 204
            },
            Qt = Se.ajaxSettings.xhr();
        we.cors = !!Qt && "withCredentials" in Qt, we.ajax = Qt = !!Qt, Se.ajaxTransport(function (e) {
            var t, i;
            if (we.cors || Qt && !e.crossDomain) return {
                send: function (r, a) {
                    var s, o = e.xhr();
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) o[s] = e.xhrFields[s];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) o.setRequestHeader(s, r[s]);
                    t = function (e) {
                        return function () {
                            t && (t = i = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(Kt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                                binary: o.response
                            } : {
                                text: o.responseText
                            }, o.getAllResponseHeaders()))
                        }
                    }, o.onload = t(), i = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function () {
                        4 === o.readyState && n.setTimeout(function () {
                            t && i()
                        })
                    }, t = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function () {
                    t && t()
                }
            }
        }), Se.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), Se.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return Se.globalEval(e), e
                }
            }
        }), Se.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), Se.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, r) {
                        t = Se("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), ue.head.appendChild(t[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Jt = [],
            Zt = /(=)\?(?=&|$)|\?\?/;
        Se.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Jt.pop() || Se.expando + "_" + $t++;
                return this[e] = !0, e
            }
        }), Se.ajaxPrefilter("json jsonp", function (e, t, i) {
            var r, a, s, o = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
            if (o || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = Te(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (It.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                return s || Se.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", a = n[r], n[r] = function () {
                s = arguments
            }, i.always(function () {
                void 0 === a ? Se(n).removeProp(r) : n[r] = a, e[r] && (e.jsonpCallback = t.jsonpCallback, Jt.push(r)), s && Te(a) && a(s[0]), s = a = void 0
            }), "script"
        }), we.createHTMLDocument = function () {
            var e = ue.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), Se.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var i, r, a;
            return t || (we.createHTMLDocument ? (t = ue.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ue.location.href, t.head.appendChild(i)) : t = ue), r = ze.exec(e), a = !n && [], r ? [t.createElement(r[1])] : (r = M([e], t, a), a && a.length && Se(a).remove(), Se.merge([], r.childNodes))
        }, Se.fn.load = function (e, t, n) {
            var i, r, a, s = this,
                o = e.indexOf(" ");
            return o > -1 && (i = ee(e.slice(o)), e = e.slice(0, o)), Te(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && Se.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                a = arguments, s.html(i ? Se("<div>").append(Se.parseHTML(e)).find(i) : e)
            }).always(n && function (e, t) {
                s.each(function () {
                    n.apply(this, a || [e.responseText, t, e])
                })
            }), this
        }, Se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            Se.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), Se.expr.pseudos.animated = function (e) {
            return Se.grep(Se.timers, function (t) {
                return e === t.elem
            }).length
        }, Se.offset = {
            setOffset: function (e, t, n) {
                var i, r, a, s, o, l, d, u = Se.css(e, "position"),
                    c = Se(e),
                    p = {};
                "static" === u && (e.style.position = "relative"), o = c.offset(), a = Se.css(e, "top"), l = Se.css(e, "left"), d = ("absolute" === u || "fixed" === u) && (a + l).indexOf("auto") > -1, d ? (i = c.position(), s = i.top, r = i.left) : (s = parseFloat(a) || 0, r = parseFloat(l) || 0), Te(t) && (t = t.call(e, n, Se.extend({}, o))), null != t.top && (p.top = t.top - o.top + s), null != t.left && (p.left = t.left - o.left + r), "using" in t ? t.using.call(e, p) : c.css(p)
            }
        }, Se.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    Se.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0];
                if (i) return i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function () {
                if (this[0]) {
                    var e, t, n, i = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === Se.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Se.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && (r = Se(e).offset(), r.top += Se.css(e, "borderTopWidth", !0), r.left += Se.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - r.top - Se.css(i, "marginTop", !0),
                        left: t.left - r.left - Se.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === Se.css(e, "position");) e = e.offsetParent;
                    return e || rt
                })
            }
        }), Se.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = "pageYOffset" === t;
            Se.fn[e] = function (i) {
                return Be(this, function (e, i, r) {
                    var a;
                    if (Ee(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === r) return a ? a[t] : e[i];
                    a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r
                }, e, i, arguments.length)
            }
        }), Se.each(["top", "left"], function (e, t) {
            Se.cssHooks[t] = q(we.pixelPosition, function (e, n) {
                if (n) return n = B(e, t), pt.test(n) ? Se(e).position()[t] + "px" : n
            })
        }), Se.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            Se.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, i) {
                Se.fn[i] = function (r, a) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                        o = n || (!0 === r || !0 === a ? "margin" : "border");
                    return Be(this, function (t, n, r) {
                        var a;
                        return Ee(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? Se.css(t, n, o) : Se.style(t, n, r, o)
                    }, t, s ? r : void 0, s)
                }
            })
        }), Se.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            Se.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), Se.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), Se.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), Se.proxy = function (e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), Te(e)) return i = pe.call(arguments, 2), r = function () {
                return e.apply(t || this, i.concat(pe.call(arguments)))
            }, r.guid = e.guid = e.guid || Se.guid++, r
        }, Se.holdReady = function (e) {
            e ? Se.readyWait++ : Se.ready(!0)
        }, Se.isArray = Array.isArray, Se.parseJSON = JSON.parse, Se.nodeName = d, Se.isFunction = Te, Se.isWindow = Ee, Se.camelCase = y, Se.type = o, Se.now = Date.now, Se.isNumeric = function (e) {
            var t = Se.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, i = [], void 0 !== (r = function () {
            return Se
        }.apply(t, i)) && (e.exports = r);
        var en = n.jQuery,
            tn = n.$;
        return Se.noConflict = function (e) {
            return n.$ === Se && (n.$ = tn), e && n.jQuery === Se && (n.jQuery = en), Se
        }, a || (n.jQuery = n.$ = Se), Se
    })
}, function (e, t, n) {
    ! function (t, n) {
        e.exports = n()
    }(0, function () {
        "use strict";

        function e(e, t) {
            var n = [],
                i = 0;
            if (e && !t && e instanceof Oe) return e;
            if (e)
                if ("string" == typeof e) {
                    var r, a, s = e.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        var o = "div";
                        for (0 === s.indexOf("<li") && (o = "ul"), 0 === s.indexOf("<tr") && (o = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (o = "tr"), 0 === s.indexOf("<tbody") && (o = "table"), 0 === s.indexOf("<option") && (o = "select"), a = $e.createElement(o), a.innerHTML = s, i = 0; i < a.childNodes.length; i += 1) n.push(a.childNodes[i])
                    } else
                        for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || $e).querySelectorAll(e.trim()) : [$e.getElementById(e.trim().split("#")[1])], i = 0; i < r.length; i += 1) r[i] && n.push(r[i])
                } else if (e.nodeType || e === Ie || e === $e) n.push(e);
                else if (e.length > 0 && e[0].nodeType)
                    for (i = 0; i < e.length; i += 1) n.push(e[i]);
            return new Oe(n)
        }

        function t(e) {
            for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }

        function n(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[n]);
            return this
        }

        function i(e) {
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[n]);
            return this
        }

        function r(e) {
            return !!this[0] && this[0].classList.contains(e)
        }

        function a(e) {
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[n]);
            return this
        }

        function s(e, t) {
            var n = arguments; {
                if (1 !== arguments.length || "string" != typeof e) {
                    for (var i = 0; i < this.length; i += 1)
                        if (2 === n.length) this[i].setAttribute(e, t);
                        else
                            for (var r in e) this[i][r] = e[r], this[i].setAttribute(r, e[r]);
                    return this
                }
                if (this[0]) return this[0].getAttribute(e)
            }
        }

        function o(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }

        function l(e, t) {
            var n; {
                if (void 0 !== t) {
                    for (var i = 0; i < this.length; i += 1) n = this[i], n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
                    return this
                }
                if (n = this[0]) {
                    if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
                    var r = n.getAttribute("data-" + e);
                    if (r) return r;
                    return
                }
            }
        }

        function d(e) {
            for (var t = 0; t < this.length; t += 1) {
                var n = this[t].style;
                n.webkitTransform = e, n.transform = e
            }
            return this
        }

        function u(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var n = this[t].style;
                n.webkitTransitionDuration = e, n.transitionDuration = e
            }
            return this
        }

        function c() {
            function t(t) {
                var n = t.target;
                if (n) {
                    var i = t.target.dom7EventData || [];
                    if (i.indexOf(t) < 0 && i.unshift(t), e(n).is(o)) l.apply(n, i);
                    else
                        for (var r = e(n).parents(), a = 0; a < r.length; a += 1) e(r[a]).is(o) && l.apply(r[a], i)
                }
            }

            function n(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.indexOf(e) < 0 && t.unshift(e), l.apply(this, t)
            }
            for (var i, r = [], a = arguments.length; a--;) r[a] = arguments[a];
            var s = r[0],
                o = r[1],
                l = r[2],
                d = r[3];
            "function" == typeof r[1] && (i = r, s = i[0], l = i[1], d = i[2], o = void 0), d || (d = !1);
            for (var u, c = s.split(" "), p = 0; p < this.length; p += 1) {
                var f = this[p];
                if (o)
                    for (u = 0; u < c.length; u += 1) {
                        var h = c[u];
                        f.dom7LiveListeners || (f.dom7LiveListeners = {}), f.dom7LiveListeners[h] || (f.dom7LiveListeners[h] = []), f.dom7LiveListeners[h].push({
                            listener: l,
                            proxyListener: t
                        }), f.addEventListener(h, t, d)
                    } else
                    for (u = 0; u < c.length; u += 1) {
                        var v = c[u];
                        f.dom7Listeners || (f.dom7Listeners = {}), f.dom7Listeners[v] || (f.dom7Listeners[v] = []), f.dom7Listeners[v].push({
                            listener: l,
                            proxyListener: n
                        }), f.addEventListener(v, n, d)
                    }
            }
            return this
        }

        function p() {
            for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            var i = t[0],
                r = t[1],
                a = t[2],
                s = t[3];
            "function" == typeof t[1] && (e = t, i = e[0], a = e[1], s = e[2], r = void 0), s || (s = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], u = 0; u < this.length; u += 1) {
                    var c = this[u],
                        p = void 0;
                    if (!r && c.dom7Listeners ? p = c.dom7Listeners[d] : r && c.dom7LiveListeners && (p = c.dom7LiveListeners[d]), p && p.length)
                        for (var f = p.length - 1; f >= 0; f -= 1) {
                            var h = p[f];
                            a && h.listener === a ? (c.removeEventListener(d, h.proxyListener, s), p.splice(f, 1)) : a || (c.removeEventListener(d, h.proxyListener, s), p.splice(f, 1))
                        }
                }
            return this
        }

        function f() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var n = e[0].split(" "), i = e[1], r = 0; r < n.length; r += 1)
                for (var a = n[r], s = 0; s < this.length; s += 1) {
                    var o = this[s],
                        l = void 0;
                    try {
                        l = new Ie.CustomEvent(a, {
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        l = $e.createEvent("Event"), l.initEvent(a, !0, !0), l.detail = i
                    }
                    o.dom7EventData = e.filter(function (e, t) {
                        return t > 0
                    }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
                }
            return this
        }

        function h(e) {
            function t(a) {
                if (a.target === this)
                    for (e.call(this, a), n = 0; n < i.length; n += 1) r.off(i[n], t)
            }
            var n, i = ["webkitTransitionEnd", "transitionend"],
                r = this;
            if (e)
                for (n = 0; n < i.length; n += 1) r.on(i[n], t);
            return this
        }

        function v(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }

        function m(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }

        function g() {
            if (this.length > 0) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    n = $e.body,
                    i = e.clientTop || n.clientTop || 0,
                    r = e.clientLeft || n.clientLeft || 0,
                    a = e === Ie ? Ie.scrollY : e.scrollTop,
                    s = e === Ie ? Ie.scrollX : e.scrollLeft;
                return {
                    top: t.top + a - i,
                    left: t.left + s - r
                }
            }
            return null
        }

        function y() {
            return this[0] ? Ie.getComputedStyle(this[0], null) : {}
        }

        function b(e, t) {
            var n;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1)
                        for (var i in e) this[n].style[i] = e[i];
                    return this
                }
                if (this[0]) return Ie.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                return this
            }
            return this
        }

        function x(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }

        function w(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }

        function T(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }

        function E(t) {
            var n, i, r = this[0];
            if (!r || void 0 === t) return !1;
            if ("string" == typeof t) {
                if (r.matches) return r.matches(t);
                if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
                if (r.msMatchesSelector) return r.msMatchesSelector(t);
                for (n = e(t), i = 0; i < n.length; i += 1)
                    if (n[i] === r) return !0;
                return !1
            }
            if (t === $e) return r === $e;
            if (t === Ie) return r === Ie;
            if (t.nodeType || t instanceof Oe) {
                for (n = t.nodeType ? [t] : t, i = 0; i < n.length; i += 1)
                    if (n[i] === r) return !0;
                return !1
            }
            return !1
        }

        function C() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }

        function S(e) {
            if (void 0 === e) return this;
            var t, n = this.length;
            return e > n - 1 ? new Oe([]) : e < 0 ? (t = n + e, new Oe(t < 0 ? [] : [this[t]])) : new Oe([this[e]])
        }

        function k() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var n, i = 0; i < e.length; i += 1) {
                n = e[i];
                for (var r = 0; r < this.length; r += 1)
                    if ("string" == typeof n) {
                        var a = $e.createElement("div");
                        for (a.innerHTML = n; a.firstChild;) this[r].appendChild(a.firstChild)
                    } else if (n instanceof Oe)
                        for (var s = 0; s < n.length; s += 1) this[r].appendChild(n[s]);
                    else this[r].appendChild(n)
            }
            return this
        }

        function M(e) {
            var t, n;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var i = $e.createElement("div");
                    for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(i.childNodes[n], this[t].childNodes[0])
                } else if (e instanceof Oe)
                    for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        }

        function A(t) {
            return new Oe(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
        }

        function P(t) {
            var n = [],
                i = this[0];
            if (!i) return new Oe([]);
            for (; i.nextElementSibling;) {
                var r = i.nextElementSibling;
                t ? e(r).is(t) && n.push(r) : n.push(r), i = r
            }
            return new Oe(n)
        }

        function L(t) {
            if (this.length > 0) {
                var n = this[0];
                return new Oe(t ? n.previousElementSibling && e(n.previousElementSibling).is(t) ? [n.previousElementSibling] : [] : n.previousElementSibling ? [n.previousElementSibling] : [])
            }
            return new Oe([])
        }

        function z(t) {
            var n = [],
                i = this[0];
            if (!i) return new Oe([]);
            for (; i.previousElementSibling;) {
                var r = i.previousElementSibling;
                t ? e(r).is(t) && n.push(r) : n.push(r), i = r
            }
            return new Oe(n)
        }

        function D(n) {
            for (var i = [], r = 0; r < this.length; r += 1) null !== this[r].parentNode && (n ? e(this[r].parentNode).is(n) && i.push(this[r].parentNode) : i.push(this[r].parentNode));
            return e(t(i))
        }

        function $(n) {
            for (var i = [], r = 0; r < this.length; r += 1)
                for (var a = this[r].parentNode; a;) n ? e(a).is(n) && i.push(a) : i.push(a), a = a.parentNode;
            return e(t(i))
        }

        function I(e) {
            var t = this;
            return void 0 === e ? new Oe([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }

        function O(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1) t.push(i[r]);
            return new Oe(t)
        }

        function N(n) {
            for (var i = [], r = 0; r < this.length; r += 1)
                for (var a = this[r].childNodes, s = 0; s < a.length; s += 1) n ? 1 === a[s].nodeType && e(a[s]).is(n) && i.push(a[s]) : 1 === a[s].nodeType && i.push(a[s]);
            return new Oe(t(i))
        }

        function j() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }

        function H() {
            for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
            var i, r, a = this;
            for (i = 0; i < t.length; i += 1) {
                var s = e(t[i]);
                for (r = 0; r < s.length; r += 1) a[a.length] = s[r], a.length += 1
            }
            return a
        }

        function B() {
            var e, t, n = this,
                i = n.$el;
            e = void 0 !== n.params.width ? n.params.width : i[0].clientWidth, t = void 0 !== n.params.height ? n.params.height : i[0].clientHeight, 0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), je.extend(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t
            }))
        }

        function q() {
            var e = this,
                t = e.params,
                n = e.$wrapperEl,
                i = e.size,
                r = e.rtlTranslate,
                a = e.wrongRTL,
                s = e.virtual && t.virtual.enabled,
                o = s ? e.virtual.slides.length : e.slides.length,
                l = n.children("." + e.params.slideClass),
                d = s ? e.virtual.slides.length : l.length,
                u = [],
                c = [],
                p = [],
                f = t.slidesOffsetBefore;
            "function" == typeof f && (f = t.slidesOffsetBefore.call(e));
            var h = t.slidesOffsetAfter;
            "function" == typeof h && (h = t.slidesOffsetAfter.call(e));
            var v = e.snapGrid.length,
                m = e.snapGrid.length,
                g = t.spaceBetween,
                y = -f,
                b = 0,
                x = 0;
            if (void 0 !== i) {
                "string" == typeof g && g.indexOf("%") >= 0 && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, r ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                });
                var w;
                t.slidesPerColumn > 1 && (w = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
                for (var T, E = t.slidesPerColumn, C = w / E, S = Math.floor(d / t.slidesPerColumn), k = 0; k < d; k += 1) {
                    T = 0;
                    var M = l.eq(k);
                    if (t.slidesPerColumn > 1) {
                        var A = void 0,
                            P = void 0,
                            L = void 0;
                        "column" === t.slidesPerColumnFill ? (P = Math.floor(k / E), L = k - P * E, (P > S || P === S && L === E - 1) && (L += 1) >= E && (L = 0, P += 1), A = P + L * w / E, M.css({
                            "-webkit-box-ordinal-group": A,
                            "-moz-box-ordinal-group": A,
                            "-ms-flex-order": A,
                            "-webkit-order": A,
                            order: A
                        })) : (L = Math.floor(k / C), P = k - L * C), M.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", P).attr("data-swiper-row", L)
                    }
                    if ("none" !== M.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var z = Ie.getComputedStyle(M[0], null),
                                D = M[0].style.transform,
                                $ = M[0].style.webkitTransform;
                            if (D && (M[0].style.transform = "none"), $ && (M[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? M.outerWidth(!0) : M.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                var I = parseFloat(z.getPropertyValue("width")),
                                    O = parseFloat(z.getPropertyValue("padding-left")),
                                    N = parseFloat(z.getPropertyValue("padding-right")),
                                    j = parseFloat(z.getPropertyValue("margin-left")),
                                    H = parseFloat(z.getPropertyValue("margin-right")),
                                    B = z.getPropertyValue("box-sizing");
                                T = B && "border-box" === B ? I + j + H : I + O + N + j + H
                            } else {
                                var q = parseFloat(z.getPropertyValue("height")),
                                    R = parseFloat(z.getPropertyValue("padding-top")),
                                    F = parseFloat(z.getPropertyValue("padding-bottom")),
                                    G = parseFloat(z.getPropertyValue("margin-top")),
                                    W = parseFloat(z.getPropertyValue("margin-bottom")),
                                    X = z.getPropertyValue("box-sizing");
                                T = X && "border-box" === X ? q + G + W : q + R + F + G + W
                            }
                            D && (M[0].style.transform = D), $ && (M[0].style.webkitTransform = $), t.roundLengths && (T = Math.floor(T))
                        } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? l[k].style.width = T + "px" : l[k].style.height = T + "px");
                        l[k] && (l[k].swiperSlideSize = T), p.push(T), t.centeredSlides ? (y = y + T / 2 + b / 2 + g, 0 === b && 0 !== k && (y = y - i / 2 - g), 0 === k && (y = y - i / 2 - g), Math.abs(y) < .001 && (y = 0), t.roundLengths && (y = Math.floor(y)), x % t.slidesPerGroup == 0 && u.push(y), c.push(y)) : (t.roundLengths && (y = Math.floor(y)), x % t.slidesPerGroup == 0 && u.push(y), c.push(y), y = y + T + g), e.virtualSize += T + g, b = T, x += 1
                    }
                }
                e.virtualSize = Math.max(e.virtualSize, i) + h;
                var V;
                if (r && a && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }), He.flexbox && !t.setWrapperSize || (e.isHorizontal() ? n.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : n.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                })), t.slidesPerColumn > 1 && (e.virtualSize = (T + t.spaceBetween) * w, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? n.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : n.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                }), t.centeredSlides)) {
                    V = [];
                    for (var Y = 0; Y < u.length; Y += 1) {
                        var _ = u[Y];
                        t.roundLengths && (_ = Math.floor(_)), u[Y] < e.virtualSize + u[0] && V.push(_)
                    }
                    u = V
                }
                if (!t.centeredSlides) {
                    V = [];
                    for (var U = 0; U < u.length; U += 1) {
                        var K = u[U];
                        t.roundLengths && (K = Math.floor(K)), u[U] <= e.virtualSize - i && V.push(K)
                    }
                    u = V, Math.floor(e.virtualSize - i) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - i)
                }
                if (0 === u.length && (u = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? l.css({
                    marginLeft: g + "px"
                }) : l.css({
                    marginRight: g + "px"
                }) : l.css({
                    marginBottom: g + "px"
                })), t.centerInsufficientSlides) {
                    var Q = 0;
                    if (p.forEach(function (e) {
                        Q += e + (t.spaceBetween ? t.spaceBetween : 0)
                    }), (Q -= t.spaceBetween) < i) {
                        var J = (i - Q) / 2;
                        u.forEach(function (e, t) {
                            u[t] = e - J
                        }), c.forEach(function (e, t) {
                            c[t] = e + J
                        })
                    }
                }
                je.extend(e, {
                    slides: l,
                    snapGrid: u,
                    slidesGrid: c,
                    slidesSizesGrid: p
                }), d !== o && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        }

        function R(e) {
            var t, n = this,
                i = [],
                r = 0;
            if ("number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed), "auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
                for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                    var a = n.activeIndex + t;
                    if (a > n.slides.length) break;
                    i.push(n.slides.eq(a)[0])
                } else i.push(n.slides.eq(n.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var s = i[t].offsetHeight;
                    r = s > r ? s : r
                }
            r && n.$wrapperEl.css("height", r + "px")
        }

        function F() {
            for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
        }

        function G(t) {
            void 0 === t && (t = this && this.translate || 0);
            var n = this,
                i = n.params,
                r = n.slides,
                a = n.rtlTranslate;
            if (0 !== r.length) {
                void 0 === r[0].swiperSlideOffset && n.updateSlidesOffset();
                var s = -t;
                a && (s = t), r.removeClass(i.slideVisibleClass), n.visibleSlidesIndexes = [], n.visibleSlides = [];
                for (var o = 0; o < r.length; o += 1) {
                    var l = r[o],
                        d = (s + (i.centeredSlides ? n.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + i.spaceBetween);
                    if (i.watchSlidesVisibility) {
                        var u = -(s - l.swiperSlideOffset),
                            c = u + n.slidesSizesGrid[o];
                        (u >= 0 && u < n.size || c > 0 && c <= n.size || u <= 0 && c >= n.size) && (n.visibleSlides.push(l), n.visibleSlidesIndexes.push(o), r.eq(o).addClass(i.slideVisibleClass))
                    }
                    l.progress = a ? -d : d
                }
                n.visibleSlides = e(n.visibleSlides)
            }
        }

        function W(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this,
                n = t.params,
                i = t.maxTranslate() - t.minTranslate(),
                r = t.progress,
                a = t.isBeginning,
                s = t.isEnd,
                o = a,
                l = s;
            0 === i ? (r = 0, a = !0, s = !0) : (r = (e - t.minTranslate()) / i, a = r <= 0, s = r >= 1), je.extend(t, {
                progress: r,
                isBeginning: a,
                isEnd: s
            }), (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), s && !l && t.emit("reachEnd toEdge"), (o && !a || l && !s) && t.emit("fromEdge"), t.emit("progress", r)
        }

        function X() {
            var e = this,
                t = e.slides,
                n = e.params,
                i = e.$wrapperEl,
                r = e.activeIndex,
                a = e.realIndex,
                s = e.virtual && n.virtual.enabled;
            t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass);
            var o;
            o = s ? e.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r), o.addClass(n.slideActiveClass), n.loop && (o.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass));
            var l = o.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
            n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
            var d = o.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
            n.loop && 0 === d.length && (d = t.eq(-1), d.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), d.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
        }

        function V(e) {
            var t, n = this,
                i = n.rtlTranslate ? n.translate : -n.translate,
                r = n.slidesGrid,
                a = n.snapGrid,
                s = n.params,
                o = n.activeIndex,
                l = n.realIndex,
                d = n.snapIndex,
                u = e;
            if (void 0 === u) {
                for (var c = 0; c < r.length; c += 1) void 0 !== r[c + 1] ? i >= r[c] && i < r[c + 1] - (r[c + 1] - r[c]) / 2 ? u = c : i >= r[c] && i < r[c + 1] && (u = c + 1) : i >= r[c] && (u = c);
                s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
            }
            if (t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(u / s.slidesPerGroup), t >= a.length && (t = a.length - 1), u === o) return void(t !== d && (n.snapIndex = t, n.emit("snapIndexChange")));
            var p = parseInt(n.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
            je.extend(n, {
                snapIndex: t,
                realIndex: p,
                previousIndex: o,
                activeIndex: u
            }), n.emit("activeIndexChange"), n.emit("snapIndexChange"), l !== p && n.emit("realIndexChange"), n.emit("slideChange")
        }

        function Y(t) {
            var n = this,
                i = n.params,
                r = e(t.target).closest("." + i.slideClass)[0],
                a = !1;
            if (r)
                for (var s = 0; s < n.slides.length; s += 1) n.slides[s] === r && (a = !0);
            if (!r || !a) return n.clickedSlide = void 0, void(n.clickedIndex = void 0);
            n.clickedSlide = r, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(e(r).attr("data-swiper-slide-index"), 10) : n.clickedIndex = e(r).index(), i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
        }

        function _(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this,
                n = t.params,
                i = t.rtlTranslate,
                r = t.translate,
                a = t.$wrapperEl;
            if (n.virtualTranslate) return i ? -r : r;
            var s = je.getTranslate(a[0], e);
            return i && (s = -s), s || 0
        }

        function U(e, t) {
            var n = this,
                i = n.rtlTranslate,
                r = n.params,
                a = n.$wrapperEl,
                s = n.progress,
                o = 0,
                l = 0;
            n.isHorizontal() ? o = i ? -e : e : l = e, r.roundLengths && (o = Math.floor(o), l = Math.floor(l)), r.virtualTranslate || (He.transforms3d ? a.transform("translate3d(" + o + "px, " + l + "px, 0px)") : a.transform("translate(" + o + "px, " + l + "px)")), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? o : l;
            var d, u = n.maxTranslate() - n.minTranslate();
            d = 0 === u ? 0 : (e - n.minTranslate()) / u, d !== s && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
        }

        function K() {
            return -this.snapGrid[0]
        }

        function Q() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }

        function J(e, t) {
            var n = this;
            n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
        }

        function Z(e, t) {
            void 0 === e && (e = !0);
            var n = this,
                i = n.activeIndex,
                r = n.params,
                a = n.previousIndex;
            r.autoHeight && n.updateAutoHeight();
            var s = t;
            if (s || (s = i > a ? "next" : i < a ? "prev" : "reset"), n.emit("transitionStart"), e && i !== a) {
                if ("reset" === s) return void n.emit("slideResetTransitionStart");
                n.emit("slideChangeTransitionStart"), "next" === s ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart")
            }
        }

        function ee(e, t) {
            void 0 === e && (e = !0);
            var n = this,
                i = n.activeIndex,
                r = n.previousIndex;
            n.animating = !1, n.setTransition(0);
            var a = t;
            if (a || (a = i > r ? "next" : i < r ? "prev" : "reset"), n.emit("transitionEnd"), e && i !== r) {
                if ("reset" === a) return void n.emit("slideResetTransitionEnd");
                n.emit("slideChangeTransitionEnd"), "next" === a ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")
            }
        }

        function te(e, t, n, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
            var r = this,
                a = e;
            a < 0 && (a = 0);
            var s = r.params,
                o = r.snapGrid,
                l = r.slidesGrid,
                d = r.previousIndex,
                u = r.activeIndex,
                c = r.rtlTranslate;
            if (r.animating && s.preventInteractionOnTransition) return !1;
            var p = Math.floor(a / s.slidesPerGroup);
            p >= o.length && (p = o.length - 1), (u || s.initialSlide || 0) === (d || 0) && n && r.emit("beforeSlideChangeStart");
            var f = -o[p];
            if (r.updateProgress(f), s.normalizeSlideIndex)
                for (var h = 0; h < l.length; h += 1) - Math.floor(100 * f) >= Math.floor(100 * l[h]) && (a = h);
            if (r.initialized && a !== u) {
                if (!r.allowSlideNext && f < r.translate && f < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && f > r.translate && f > r.maxTranslate() && (u || 0) !== a) return !1
            }
            var v;
            return v = a > u ? "next" : a < u ? "prev" : "reset", c && -f === r.translate || !c && f === r.translate ? (r.updateActiveIndex(a), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(f), "reset" !== v && (r.transitionStart(n, v), r.transitionEnd(n, v)), !1) : (0 !== t && He.transition ? (r.setTransition(t), r.setTranslate(f), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, v), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, v))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))) : (r.setTransition(0), r.setTranslate(f), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, v), r.transitionEnd(n, v)), !0)
        }

        function ne(e, t, n, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
            var r = this,
                a = e;
            return r.params.loop && (a += r.loopedSlides), r.slideTo(a, t, n, i)
        }

        function ie(e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                r = i.params,
                a = i.animating;
            return r.loop ? !a && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)) : i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)
        }

        function re(e, t, n) {
            function i(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var r = this,
                a = r.params,
                s = r.animating,
                o = r.snapGrid,
                l = r.slidesGrid,
                d = r.rtlTranslate;
            if (a.loop) {
                if (s) return !1;
                r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
            }
            var u, c = d ? r.translate : -r.translate,
                p = i(c),
                f = o.map(function (e) {
                    return i(e)
                }),
                h = (l.map(function (e) {
                    return i(e)
                }), o[f.indexOf(p)], o[f.indexOf(p) - 1]);
            return void 0 !== h && (u = l.indexOf(h)) < 0 && (u = r.activeIndex - 1), r.slideTo(u, e, t, n)
        }

        function ae(e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this;
            return i.slideTo(i.activeIndex, e, t, n)
        }

        function se(e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                r = i.activeIndex,
                a = Math.floor(r / i.params.slidesPerGroup);
            if (a < i.snapGrid.length - 1) {
                var s = i.rtlTranslate ? i.translate : -i.translate,
                    o = i.snapGrid[a];
                s - o > (i.snapGrid[a + 1] - o) / 2 && (r = i.params.slidesPerGroup)
            }
            return i.slideTo(r, e, t, n)
        }

        function oe() {
            var t, n = this,
                i = n.params,
                r = n.$wrapperEl,
                a = "auto" === i.slidesPerView ? n.slidesPerViewDynamic() : i.slidesPerView,
                s = n.clickedIndex;
            if (i.loop) {
                if (n.animating) return;
                t = parseInt(e(n.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? s < n.loopedSlides - a / 2 || s > n.slides.length - n.loopedSlides + a / 2 ? (n.loopFix(), s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), je.nextTick(function () {
                    n.slideTo(s)
                })) : n.slideTo(s) : s > n.slides.length - a ? (n.loopFix(), s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), je.nextTick(function () {
                    n.slideTo(s)
                })) : n.slideTo(s)
            } else n.slideTo(s)
        }

        function le() {
            var t = this,
                n = t.params,
                i = t.$wrapperEl;
            i.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
            var r = i.children("." + n.slideClass);
            if (n.loopFillGroupWithBlank) {
                var a = n.slidesPerGroup - r.length % n.slidesPerGroup;
                if (a !== n.slidesPerGroup) {
                    for (var s = 0; s < a; s += 1) {
                        var o = e($e.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                        i.append(o)
                    }
                    r = i.children("." + n.slideClass)
                }
            }
            "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length), t.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10), t.loopedSlides += n.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var l = [],
                d = [];
            r.each(function (n, i) {
                var a = e(i);
                n < t.loopedSlides && d.push(i), n < r.length && n >= r.length - t.loopedSlides && l.push(i), a.attr("data-swiper-slide-index", n)
            });
            for (var u = 0; u < d.length; u += 1) i.append(e(d[u].cloneNode(!0)).addClass(n.slideDuplicateClass));
            for (var c = l.length - 1; c >= 0; c -= 1) i.prepend(e(l[c].cloneNode(!0)).addClass(n.slideDuplicateClass))
        }

        function de() {
            var e, t = this,
                n = t.params,
                i = t.activeIndex,
                r = t.slides,
                a = t.loopedSlides,
                s = t.allowSlidePrev,
                o = t.allowSlideNext,
                l = t.snapGrid,
                d = t.rtlTranslate;
            t.allowSlidePrev = !0, t.allowSlideNext = !0;
            var u = -l[i],
                c = u - t.getTranslate();
            if (i < a) {
                e = r.length - 3 * a + i, e += a;
                t.slideTo(e, 0, !1, !0) && 0 !== c && t.setTranslate((d ? -t.translate : t.translate) - c)
            } else if ("auto" === n.slidesPerView && i >= 2 * a || i >= r.length - a) {
                e = -r.length + i + a, e += a;
                var p = t.slideTo(e, 0, !1, !0);
                p && 0 !== c && t.setTranslate((d ? -t.translate : t.translate) - c)
            }
            t.allowSlidePrev = s, t.allowSlideNext = o
        }

        function ue() {
            var e = this,
                t = e.$wrapperEl,
                n = e.params,
                i = e.slides;
            t.children("." + n.slideClass + "." + n.slideDuplicateClass + ",." + n.slideClass + "." + n.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
        }

        function ce(e) {
            var t = this;
            if (!(He.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked)) {
                var n = t.el;
                n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
            }
        }

        function pe() {
            var e = this;
            He.touch || e.params.watchOverflow && e.isLocked || (e.el.style.cursor = "")
        }

        function fe(e) {
            var t = this,
                n = t.$wrapperEl,
                i = t.params;
            if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
            else n.append(e);
            i.loop && t.loopCreate(), i.observer && He.observer || t.update()
        }

        function he(e) {
            var t = this,
                n = t.params,
                i = t.$wrapperEl,
                r = t.activeIndex;
            n.loop && t.loopDestroy();
            var a = r + 1;
            if ("object" == typeof e && "length" in e) {
                for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
                a = r + e.length
            } else i.prepend(e);
            n.loop && t.loopCreate(), n.observer && He.observer || t.update(), t.slideTo(a, 0, !1)
        }

        function ve(e, t) {
            var n = this,
                i = n.$wrapperEl,
                r = n.params,
                a = n.activeIndex,
                s = a;
            r.loop && (s -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + r.slideClass));
            var o = n.slides.length;
            if (e <= 0) return void n.prependSlide(t);
            if (e >= o) return void n.appendSlide(t);
            for (var l = s > e ? s + 1 : s, d = [], u = o - 1; u >= e; u -= 1) {
                var c = n.slides.eq(u);
                c.remove(), d.unshift(c)
            }
            if ("object" == typeof t && "length" in t) {
                for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                l = s > e ? s + t.length : s
            } else i.append(t);
            for (var f = 0; f < d.length; f += 1) i.append(d[f]);
            r.loop && n.loopCreate(), r.observer && He.observer || n.update(), r.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1)
        }

        function me(e) {
            var t = this,
                n = t.params,
                i = t.$wrapperEl,
                r = t.activeIndex,
                a = r;
            n.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + n.slideClass));
            var s, o = a;
            if ("object" == typeof e && "length" in e) {
                for (var l = 0; l < e.length; l += 1) s = e[l], t.slides[s] && t.slides.eq(s).remove(), s < o && (o -= 1);
                o = Math.max(o, 0)
            } else s = e, t.slides[s] && t.slides.eq(s).remove(), s < o && (o -= 1), o = Math.max(o, 0);
            n.loop && t.loopCreate(), n.observer && He.observer || t.update(), n.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
        }

        function ge() {
            for (var e = this, t = [], n = 0; n < e.slides.length; n += 1) t.push(n);
            e.removeSlide(t)
        }

        function ye(t) {
            var n = this,
                i = n.touchEventsData,
                r = n.params,
                a = n.touches;
            if (!n.animating || !r.preventInteractionOnTransition) {
                var s = t;
                if (s.originalEvent && (s = s.originalEvent), i.isTouchEvent = "touchstart" === s.type, (i.isTouchEvent || !("which" in s) || 3 !== s.which) && !(!i.isTouchEvent && "button" in s && s.button > 0 || i.isTouched && i.isMoved)) {
                    if (r.noSwiping && e(s.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) return void(n.allowClick = !0);
                    if (!r.swipeHandler || e(s).closest(r.swipeHandler)[0]) {
                        a.currentX = "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX, a.currentY = "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY;
                        var o = a.currentX,
                            l = a.currentY,
                            d = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                            u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                        if (!d || !(o <= u || o >= Ie.screen.width - u)) {
                            if (je.extend(i, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0
                            }), a.startX = o, a.startY = l, i.touchStartTime = je.now(), n.allowClick = !0, n.updateSize(), n.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== s.type) {
                                var c = !0;
                                e(s.target).is(i.formElements) && (c = !1), $e.activeElement && e($e.activeElement).is(i.formElements) && $e.activeElement !== s.target && $e.activeElement.blur();
                                var p = c && n.allowTouchMove && r.touchStartPreventDefault;
                                (r.touchStartForcePreventDefault || p) && s.preventDefault()
                            }
                            n.emit("touchStart", s)
                        }
                    }
                }
            }
        }

        function be(t) {
            var n = this,
                i = n.touchEventsData,
                r = n.params,
                a = n.touches,
                s = n.rtlTranslate,
                o = t;
            if (o.originalEvent && (o = o.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", o));
            if (!i.isTouchEvent || "mousemove" !== o.type) {
                var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                    d = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                if (o.preventedByNestedSwiper) return a.startX = l, void(a.startY = d);
                if (!n.allowTouchMove) return n.allowClick = !1, void(i.isTouched && (je.extend(a, {
                    startX: l,
                    startY: d,
                    currentX: l,
                    currentY: d
                }), i.touchStartTime = je.now()));
                if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                    if (n.isVertical()) {
                        if (d < a.startY && n.translate <= n.maxTranslate() || d > a.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (l < a.startX && n.translate <= n.maxTranslate() || l > a.startX && n.translate >= n.minTranslate()) return;
                if (i.isTouchEvent && $e.activeElement && o.target === $e.activeElement && e(o.target).is(i.formElements)) return i.isMoved = !0, void(n.allowClick = !1);
                if (i.allowTouchCallbacks && n.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                    a.currentX = l, a.currentY = d;
                    var u = a.currentX - a.startX,
                        c = a.currentY - a.startY;
                    if (!(n.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(c, 2)) < n.params.threshold)) {
                        if (void 0 === i.isScrolling) {
                            var p;
                            n.isHorizontal() && a.currentY === a.startY || n.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : u * u + c * c >= 25 && (p = 180 * Math.atan2(Math.abs(c), Math.abs(u)) / Math.PI, i.isScrolling = n.isHorizontal() ? p > r.touchAngle : 90 - p > r.touchAngle)
                        }
                        if (i.isScrolling && n.emit("touchMoveOpposite", o), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
                        if (i.startMoving) {
                            n.allowClick = !1, o.preventDefault(), r.touchMoveStopPropagation && !r.nested && o.stopPropagation(), i.isMoved || (r.loop && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", o)), n.emit("sliderMove", o), i.isMoved = !0;
                            var f = n.isHorizontal() ? u : c;
                            a.diff = f, f *= r.touchRatio, s && (f = -f), n.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                            var h = !0,
                                v = r.resistanceRatio;
                            if (r.touchReleaseOnEdges && (v = 0), f > 0 && i.currentTranslate > n.minTranslate() ? (h = !1, r.resistance && (i.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + i.startTranslate + f, v))) : f < 0 && i.currentTranslate < n.maxTranslate() && (h = !1, r.resistance && (i.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - i.startTranslate - f, v))), h && (o.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), r.threshold > 0) {
                                if (!(Math.abs(f) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void(a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                            }
                            r.followFinger && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()), r.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: a[n.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }), i.velocities.push({
                                position: a[n.isHorizontal() ? "currentX" : "currentY"],
                                time: je.now()
                            })), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
                        }
                    }
                }
            }
        }

        function xe(e) {
            var t = this,
                n = t.touchEventsData,
                i = t.params,
                r = t.touches,
                a = t.rtlTranslate,
                s = t.$wrapperEl,
                o = t.slidesGrid,
                l = t.snapGrid,
                d = e;
            if (d.originalEvent && (d = d.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", d), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
            i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var u = je.now(),
                c = u - n.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), c < 300 && u - n.lastClickTime > 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), n.clickTimeout = je.nextTick(function () {
                t && !t.destroyed && t.emit("click", d)
            }, 300)), c < 300 && u - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit("doubleTap", d))), n.lastClickTime = je.now(), je.nextTick(function () {
                t.destroyed || (t.allowClick = !0)
            }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
            n.isTouched = !1, n.isMoved = !1, n.startMoving = !1;
            var p;
            if (p = i.followFinger ? a ? t.translate : -t.translate : -n.currentTranslate, i.freeMode) {
                if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                if (i.freeModeMomentum) {
                    if (n.velocities.length > 1) {
                        var f = n.velocities.pop(),
                            h = n.velocities.pop(),
                            v = f.position - h.position,
                            m = f.time - h.time;
                        t.velocity = v / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || je.now() - f.time > 300) && (t.velocity = 0)
                    } else t.velocity = 0;
                    t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
                    var g = 1e3 * i.freeModeMomentumRatio,
                        y = t.velocity * g,
                        b = t.translate + y;
                    a && (b = -b);
                    var x, w, T = !1,
                        E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                    if (b < t.maxTranslate()) i.freeModeMomentumBounce ? (b + t.maxTranslate() < -E && (b = t.maxTranslate() - E), x = t.maxTranslate(), T = !0, n.allowMomentumBounce = !0) : b = t.maxTranslate(), i.loop && i.centeredSlides && (w = !0);
                    else if (b > t.minTranslate()) i.freeModeMomentumBounce ? (b - t.minTranslate() > E && (b = t.minTranslate() + E), x = t.minTranslate(), T = !0, n.allowMomentumBounce = !0) : b = t.minTranslate(), i.loop && i.centeredSlides && (w = !0);
                    else if (i.freeModeSticky) {
                        for (var C, S = 0; S < l.length; S += 1)
                            if (l[S] > -b) {
                                C = S;
                                break
                            }
                        b = Math.abs(l[C] - b) < Math.abs(l[C - 1] - b) || "next" === t.swipeDirection ? l[C] : l[C - 1], b = -b
                    }
                    if (w && t.once("transitionEnd", function () {
                        t.loopFix()
                    }), 0 !== t.velocity) g = a ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
                    else if (i.freeModeSticky) return void t.slideToClosest();
                    i.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd(function () {
                        t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(x), s.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd()
                        }))
                    })) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd()
                    }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
                } else if (i.freeModeSticky) return void t.slideToClosest();
                return void((!i.freeModeMomentum || c >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()))
            }
            for (var k = 0, M = t.slidesSizesGrid[0], A = 0; A < o.length; A += i.slidesPerGroup) void 0 !== o[A + i.slidesPerGroup] ? p >= o[A] && p < o[A + i.slidesPerGroup] && (k = A, M = o[A + i.slidesPerGroup] - o[A]) : p >= o[A] && (k = A, M = o[o.length - 1] - o[o.length - 2]);
            var P = (p - o[k]) / M;
            if (c > i.longSwipesMs) {
                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(k + i.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(k + i.slidesPerGroup) : t.slideTo(k))
            } else {
                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && t.slideTo(k + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k)
            }
        }

        function we() {
            var e = this,
                t = e.params,
                n = e.el;
            if (!n || 0 !== n.offsetWidth) {
                t.breakpoints && e.setBreakpoint();
                var i = e.allowSlideNext,
                    r = e.allowSlidePrev,
                    a = e.snapGrid;
                if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                    var s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
                } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }
        }

        function Te(e) {
            var t = this;
            t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        }

        function Ee() {
            var e = this,
                t = e.params,
                n = e.touchEvents,
                i = e.el,
                r = e.wrapperEl;
            e.onTouchStart = ye.bind(e), e.onTouchMove = be.bind(e), e.onTouchEnd = xe.bind(e), e.onClick = Te.bind(e);
            var a = "container" === t.touchEventsTarget ? i : r,
                s = !!t.nested;
            if (He.touch || !He.pointerEvents && !He.prefixedPointerEvents) {
                if (He.touch) {
                    var o = !("touchstart" !== n.start || !He.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    a.addEventListener(n.start, e.onTouchStart, o), a.addEventListener(n.move, e.onTouchMove, He.passiveListener ? {
                        passive: !1,
                        capture: s
                    } : s), a.addEventListener(n.end, e.onTouchEnd, o)
                }(t.simulateTouch && !_e.ios && !_e.android || t.simulateTouch && !He.touch && _e.ios) && (a.addEventListener("mousedown", e.onTouchStart, !1), $e.addEventListener("mousemove", e.onTouchMove, s), $e.addEventListener("mouseup", e.onTouchEnd, !1))
            } else a.addEventListener(n.start, e.onTouchStart, !1), $e.addEventListener(n.move, e.onTouchMove, s), $e.addEventListener(n.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0), e.on(_e.ios || _e.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", we, !0)
        }

        function Ce() {
            var e = this,
                t = e.params,
                n = e.touchEvents,
                i = e.el,
                r = e.wrapperEl,
                a = "container" === t.touchEventsTarget ? i : r,
                s = !!t.nested;
            if (He.touch || !He.pointerEvents && !He.prefixedPointerEvents) {
                if (He.touch) {
                    var o = !("onTouchStart" !== n.start || !He.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    a.removeEventListener(n.start, e.onTouchStart, o), a.removeEventListener(n.move, e.onTouchMove, s), a.removeEventListener(n.end, e.onTouchEnd, o)
                }(t.simulateTouch && !_e.ios && !_e.android || t.simulateTouch && !He.touch && _e.ios) && (a.removeEventListener("mousedown", e.onTouchStart, !1), $e.removeEventListener("mousemove", e.onTouchMove, s), $e.removeEventListener("mouseup", e.onTouchEnd, !1))
            } else a.removeEventListener(n.start, e.onTouchStart, !1), $e.removeEventListener(n.move, e.onTouchMove, s), $e.removeEventListener(n.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && a.removeEventListener("click", e.onClick, !0), e.off(_e.ios || _e.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", we)
        }

        function Se() {
            var e = this,
                t = e.activeIndex,
                n = e.initialized,
                i = e.loopedSlides;
            void 0 === i && (i = 0);
            var r = e.params,
                a = r.breakpoints;
            if (a && (!a || 0 !== Object.keys(a).length)) {
                var s = e.getBreakpoint(a);
                if (s && e.currentBreakpoint !== s) {
                    var o = s in a ? a[s] : void 0;
                    o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
                        var t = o[e];
                        void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                    });
                    var l = o || e.originalParams,
                        d = r.loop && l.slidesPerView !== r.slidesPerView;
                    je.extend(e.params, l), je.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), e.currentBreakpoint = s, d && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                }
            }
        }

        function ke(e) {
            var t = this;
            if (e) {
                var n = !1,
                    i = [];
                Object.keys(e).forEach(function (e) {
                    i.push(e)
                }), i.sort(function (e, t) {
                    return parseInt(e, 10) - parseInt(t, 10)
                });
                for (var r = 0; r < i.length; r += 1) {
                    var a = i[r];
                    t.params.breakpointsInverse ? a <= Ie.innerWidth && (n = a) : a >= Ie.innerWidth && !n && (n = a)
                }
                return n || "max"
            }
        }

        function Me() {
            var e = this,
                t = e.classNames,
                n = e.params,
                i = e.rtl,
                r = e.$el,
                a = [];
            a.push(n.direction), n.freeMode && a.push("free-mode"), He.flexbox || a.push("no-flexbox"), n.autoHeight && a.push("autoheight"), i && a.push("rtl"), n.slidesPerColumn > 1 && a.push("multirow"), _e.android && a.push("android"), _e.ios && a.push("ios"), (Qe.isIE || Qe.isEdge) && (He.pointerEvents || He.prefixedPointerEvents) && a.push("wp8-" + n.direction), a.forEach(function (e) {
                t.push(n.containerModifierClass + e)
            }), r.addClass(t.join(" "))
        }

        function Ae() {
            var e = this,
                t = e.$el,
                n = e.classNames;
            t.removeClass(n.join(" "))
        }

        function Pe(e, t, n, i, r, a) {
            function s() {
                a && a()
            }
            var o;
            e.complete && r ? s() : t ? (o = new Ie.Image, o.onload = s, o.onerror = s, i && (o.sizes = i), n && (o.srcset = n), t && (o.src = t)) : s()
        }

        function Le() {
            function e() {
                void 0 !== t && null !== t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
            }
            var t = this;
            t.imagesToLoad = t.$el.find("img");
            for (var n = 0; n < t.imagesToLoad.length; n += 1) {
                var i = t.imagesToLoad[n];
                t.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, e)
            }
        }

        function ze() {
            var e = this,
                t = e.isLocked;
            e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
        }

        function De() {
            var e = "onwheel" in $e;
            if (!e) {
                var t = $e.createElement("div");
                t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
            }
            return !e && $e.implementation && $e.implementation.hasFeature && !0 !== $e.implementation.hasFeature("", "") && (e = $e.implementation.hasFeature("Events.wheel", "3.0")), e
        }
        var $e = "undefined" == typeof document ? {
                body: {},
                addEventListener: function () {},
                removeEventListener: function () {},
                activeElement: {
                    blur: function () {},
                    nodeName: ""
                },
                querySelector: function () {
                    return null
                },
                querySelectorAll: function () {
                    return []
                },
                getElementById: function () {
                    return null
                },
                createEvent: function () {
                    return {
                        initEvent: function () {}
                    }
                },
                createElement: function () {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function () {},
                        getElementsByTagName: function () {
                            return []
                        }
                    }
                },
                location: {
                    hash: ""
                }
            } : document,
            Ie = "undefined" == typeof window ? {
                document: $e,
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                CustomEvent: function () {
                    return this
                },
                addEventListener: function () {},
                removeEventListener: function () {},
                getComputedStyle: function () {
                    return {
                        getPropertyValue: function () {
                            return ""
                        }
                    }
                },
                Image: function () {},
                Date: function () {},
                screen: {},
                setTimeout: function () {},
                clearTimeout: function () {}
            } : window,
            Oe = function (e) {
                for (var t = this, n = 0; n < e.length; n += 1) t[n] = e[n];
                return t.length = e.length, this
            };
        e.fn = Oe.prototype, e.Class = Oe, e.Dom7 = Oe;
        var Ne = {
            addClass: n,
            removeClass: i,
            hasClass: r,
            toggleClass: a,
            attr: s,
            removeAttr: o,
            data: l,
            transform: d,
            transition: u,
            on: c,
            off: p,
            trigger: f,
            transitionEnd: h,
            outerWidth: v,
            outerHeight: m,
            offset: g,
            css: b,
            each: x,
            html: w,
            text: T,
            is: E,
            index: C,
            eq: S,
            append: k,
            prepend: M,
            next: A,
            nextAll: P,
            prev: L,
            prevAll: z,
            parent: D,
            parents: $,
            closest: I,
            find: O,
            children: N,
            remove: j,
            add: H,
            styles: y
        };
        Object.keys(Ne).forEach(function (t) {
            e.fn[t] = Ne[t]
        });
        var je = {
                deleteProps: function (e) {
                    var t = e;
                    Object.keys(t).forEach(function (e) {
                        try {
                            t[e] = null
                        } catch (e) {}
                        try {
                            delete t[e]
                        } catch (e) {}
                    })
                },
                nextTick: function (e, t) {
                    return void 0 === t && (t = 0), setTimeout(e, t)
                },
                now: function () {
                    return Date.now()
                },
                getTranslate: function (e, t) {
                    void 0 === t && (t = "x");
                    var n, i, r, a = Ie.getComputedStyle(e, null);
                    return Ie.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
                        return e.replace(",", ".")
                    }).join(", ")), r = new Ie.WebKitCSSMatrix("none" === i ? "" : i)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = r.toString().split(",")), "x" === t && (i = Ie.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = Ie.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
                },
                parseUrlQuery: function (e) {
                    var t, n, i, r, a = {},
                        s = e || Ie.location.href;
                    if ("string" == typeof s && s.length)
                        for (s = s.indexOf("?") > -1 ? s.replace(/\S*\?/, "") : "", n = s.split("&").filter(function (e) {
                            return "" !== e
                        }), r = n.length, t = 0; t < r; t += 1) i = n[t].replace(/#\S+/g, "").split("="), a[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                    return a
                },
                isObject: function (e) {
                    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
                },
                extend: function () {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                        var r = e[i];
                        if (void 0 !== r && null !== r)
                            for (var a = Object.keys(Object(r)), s = 0, o = a.length; s < o; s += 1) {
                                var l = a[s],
                                    d = Object.getOwnPropertyDescriptor(r, l);
                                void 0 !== d && d.enumerable && (je.isObject(n[l]) && je.isObject(r[l]) ? je.extend(n[l], r[l]) : !je.isObject(n[l]) && je.isObject(r[l]) ? (n[l] = {}, je.extend(n[l], r[l])) : n[l] = r[l])
                            }
                    }
                    return n
                }
            },
            He = function () {
                var e = $e.createElement("div");
                return {
                    touch: Ie.Modernizr && !0 === Ie.Modernizr.touch || function () {
                        return !!(Ie.navigator.maxTouchPoints > 0 || "ontouchstart" in Ie || Ie.DocumentTouch && $e instanceof Ie.DocumentTouch)
                    }(),
                    pointerEvents: !!(Ie.navigator.pointerEnabled || Ie.PointerEvent || "maxTouchPoints" in Ie.navigator),
                    prefixedPointerEvents: !!Ie.navigator.msPointerEnabled,
                    transition: function () {
                        var t = e.style;
                        return "transition" in t || "webkitTransition" in t || "MozTransition" in t
                    }(),
                    transforms3d: Ie.Modernizr && !0 === Ie.Modernizr.csstransforms3d || function () {
                        var t = e.style;
                        return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
                    }(),
                    flexbox: function () {
                        for (var t = e.style, n = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < n.length; i += 1)
                            if (n[i] in t) return !0;
                        return !1
                    }(),
                    observer: function () {
                        return "MutationObserver" in Ie || "WebkitMutationObserver" in Ie
                    }(),
                    passiveListener: function () {
                        var e = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function () {
                                    e = !0
                                }
                            });
                            Ie.addEventListener("testPassiveListener", null, t)
                        } catch (e) {}
                        return e
                    }(),
                    gestures: function () {
                        return "ongesturestart" in Ie
                    }()
                }
            }(),
            Be = function (e) {
                void 0 === e && (e = {});
                var t = this;
                t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
                    t.on(e, t.params.on[e])
                })
            },
            qe = {
                components: {
                    configurable: !0
                }
            };
        Be.prototype.on = function (e, t, n) {
            var i = this;
            if ("function" != typeof t) return i;
            var r = n ? "unshift" : "push";
            return e.split(" ").forEach(function (e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
            }), i
        }, Be.prototype.once = function (e, t, n) {
            function i() {
                for (var n = [], a = arguments.length; a--;) n[a] = arguments[a];
                t.apply(r, n), r.off(e, i)
            }
            var r = this;
            return "function" != typeof t ? r : r.on(e, i, n)
        }, Be.prototype.off = function (e, t) {
            var n = this;
            return n.eventsListeners ? (e.split(" ").forEach(function (e) {
                void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].length && n.eventsListeners[e].forEach(function (i, r) {
                    i === t && n.eventsListeners[e].splice(r, 1)
                })
            }), n) : n
        }, Be.prototype.emit = function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = this;
            if (!n.eventsListeners) return n;
            var i, r, a;
            return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], r = e.slice(1, e.length), a = n) : (i = e[0].events, r = e[0].data, a = e[0].context || n), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
                if (n.eventsListeners && n.eventsListeners[e]) {
                    var t = [];
                    n.eventsListeners[e].forEach(function (e) {
                        t.push(e)
                    }), t.forEach(function (e) {
                        e.apply(a, r)
                    })
                }
            }), n
        }, Be.prototype.useModulesParams = function (e) {
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function (n) {
                var i = t.modules[n];
                i.params && je.extend(e, i.params)
            })
        }, Be.prototype.useModules = function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function (n) {
                var i = t.modules[n],
                    r = e[n] || {};
                i.instance && Object.keys(i.instance).forEach(function (e) {
                    var n = i.instance[e];
                    t[e] = "function" == typeof n ? n.bind(t) : n
                }), i.on && t.on && Object.keys(i.on).forEach(function (e) {
                    t.on(e, i.on[e])
                }), i.create && i.create.bind(t)(r)
            })
        }, qe.components.set = function (e) {
            var t = this;
            t.use && t.use(e)
        }, Be.installModule = function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var r = e.name || Object.keys(i.prototype.modules).length + "_" + je.now();
            return i.prototype.modules[r] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
                i.prototype[t] = e.proto[t]
            }), e.static && Object.keys(e.static).forEach(function (t) {
                i[t] = e.static[t]
            }), e.install && e.install.apply(i, t), i
        }, Be.use = function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
            var i = this;
            return Array.isArray(e) ? (e.forEach(function (e) {
                return i.installModule(e)
            }), i) : i.installModule.apply(i, [e].concat(t))
        }, Object.defineProperties(Be, qe);
        var Re = {
                updateSize: B,
                updateSlides: q,
                updateAutoHeight: R,
                updateSlidesOffset: F,
                updateSlidesProgress: G,
                updateProgress: W,
                updateSlidesClasses: X,
                updateActiveIndex: V,
                updateClickedSlide: Y
            },
            Fe = {
                getTranslate: _,
                setTranslate: U,
                minTranslate: K,
                maxTranslate: Q
            },
            Ge = {
                setTransition: J,
                transitionStart: Z,
                transitionEnd: ee
            },
            We = {
                slideTo: te,
                slideToLoop: ne,
                slideNext: ie,
                slidePrev: re,
                slideReset: ae,
                slideToClosest: se,
                slideToClickedSlide: oe
            },
            Xe = {
                loopCreate: le,
                loopFix: de,
                loopDestroy: ue
            },
            Ve = {
                setGrabCursor: ce,
                unsetGrabCursor: pe
            },
            Ye = {
                appendSlide: fe,
                prependSlide: he,
                addSlide: ve,
                removeSlide: me,
                removeAllSlides: ge
            },
            _e = function () {
                var e = Ie.navigator.userAgent,
                    t = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        windows: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        cordova: Ie.cordova || Ie.phonegap,
                        phonegap: Ie.cordova || Ie.phonegap
                    },
                    n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    r = e.match(/(iPad).*OS\s([\d_]+)/),
                    a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    s = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (n && (t.os = "windows", t.osVersion = n[2], t.windows = !0), i && !n && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || s || a) && (t.os = "ios", t.ios = !0), s && !a && (t.osVersion = s[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), a && (t.osVersion = a[3] ? a[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (s || r || a) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                    var o = t.osVersion.split("."),
                        l = $e.querySelector('meta[name="viewport"]');
                    t.minimalUi = !t.webView && (a || s) && (1 * o[0] == 7 ? 1 * o[1] >= 1 : 1 * o[0] > 7) && l && l.getAttribute("content").indexOf("minimal-ui") >= 0
                }
                return t.pixelRatio = Ie.devicePixelRatio || 1, t
            }(),
            Ue = {
                attachEvents: Ee,
                detachEvents: Ce
            },
            Ke = {
                setBreakpoint: Se,
                getBreakpoint: ke
            },
            Qe = function () {
                return {
                    isIE: !!Ie.navigator.userAgent.match(/Trident/g) || !!Ie.navigator.userAgent.match(/MSIE/g),
                    isEdge: !!Ie.navigator.userAgent.match(/Edge/g),
                    isSafari: function () {
                        var e = Ie.navigator.userAgent.toLowerCase();
                        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                    }(),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Ie.navigator.userAgent)
                }
            }(),
            Je = {
                addClasses: Me,
                removeClasses: Ae
            },
            Ze = {
                loadImage: Pe,
                preloadImages: Le
            },
            et = {
                checkOverflow: ze
            },
            tt = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsInverse: !1,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            },
            nt = {
                update: Re,
                translate: Fe,
                transition: Ge,
                slide: We,
                loop: Xe,
                grabCursor: Ve,
                manipulation: Ye,
                events: Ue,
                breakpoints: Ke,
                checkOverflow: et,
                classes: Je,
                images: Ze
            },
            it = {},
            rt = function (t) {
                function n() {
                    for (var i, r = [], a = arguments.length; a--;) r[a] = arguments[a];
                    var s, o;
                    1 === r.length && r[0].constructor && r[0].constructor === Object ? o = r[0] : (i = r, s = i[0], o = i[1]), o || (o = {}), o = je.extend({}, o), s && !o.el && (o.el = s), t.call(this, o), Object.keys(nt).forEach(function (e) {
                        Object.keys(nt[e]).forEach(function (t) {
                            n.prototype[t] || (n.prototype[t] = nt[e][t])
                        })
                    });
                    var l = this;
                    void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
                        var t = l.modules[e];
                        if (t.params) {
                            var n = Object.keys(t.params)[0],
                                i = t.params[n];
                            if ("object" != typeof i || null === i) return;
                            if (!(n in o && "enabled" in i)) return;
                            !0 === o[n] && (o[n] = {
                                enabled: !0
                            }), "object" != typeof o[n] || "enabled" in o[n] || (o[n].enabled = !0), o[n] || (o[n] = {
                                enabled: !1
                            })
                        }
                    });
                    var d = je.extend({}, tt);
                    l.useModulesParams(d), l.params = je.extend({}, d, it, o), l.originalParams = je.extend({}, l.params), l.passedParams = je.extend({}, o), l.$ = e;
                    var u = e(l.params.el);
                    if (s = u[0]) {
                        if (u.length > 1) {
                            var c = [];
                            return u.each(function (e, t) {
                                var i = je.extend({}, o, {
                                    el: t
                                });
                                c.push(new n(i))
                            }), c
                        }
                        s.swiper = l, u.data("swiper", l);
                        var p = u.children("." + l.params.wrapperClass);
                        return je.extend(l, {
                            $el: u,
                            el: s,
                            $wrapperEl: p,
                            wrapperEl: p[0],
                            classNames: [],
                            slides: e(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === l.params.direction
                            },
                            isVertical: function () {
                                return "vertical" === l.params.direction
                            },
                            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === u.css("direction"),
                            rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === u.css("direction")),
                            wrongRTL: "-webkit-box" === p.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: l.params.allowSlideNext,
                            allowSlidePrev: l.params.allowSlidePrev,
                            touchEvents: function () {
                                var e = ["touchstart", "touchmove", "touchend"],
                                    t = ["mousedown", "mousemove", "mouseup"];
                                return He.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : He.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                                    start: e[0],
                                    move: e[1],
                                    end: e[2]
                                }, l.touchEventsDesktop = {
                                    start: t[0],
                                    move: t[1],
                                    end: t[2]
                                }, He.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop
                            }(),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: je.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: l.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), l.useModules(), l.params.init && l.init(), l
                    }
                }
                t && (n.__proto__ = t), n.prototype = Object.create(t && t.prototype), n.prototype.constructor = n;
                var i = {
                    extendedDefaults: {
                        configurable: !0
                    },
                    defaults: {
                        configurable: !0
                    },
                    Class: {
                        configurable: !0
                    },
                    $: {
                        configurable: !0
                    }
                };
                return n.prototype.slidesPerViewDynamic = function () {
                    var e = this,
                        t = e.params,
                        n = e.slides,
                        i = e.slidesGrid,
                        r = e.size,
                        a = e.activeIndex,
                        s = 1;
                    if (t.centeredSlides) {
                        for (var o, l = n[a].swiperSlideSize, d = a + 1; d < n.length; d += 1) n[d] && !o && (l += n[d].swiperSlideSize, s += 1, l > r && (o = !0));
                        for (var u = a - 1; u >= 0; u -= 1) n[u] && !o && (l += n[u].swiperSlideSize, s += 1, l > r && (o = !0))
                    } else
                        for (var c = a + 1; c < n.length; c += 1) i[c] - i[a] < r && (s += 1);
                    return s
                }, n.prototype.update = function () {
                    function e() {
                        var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            n = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    var t = this;
                    if (t && !t.destroyed) {
                        var n = t.snapGrid,
                            i = t.params;
                        i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
                        t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), i.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update")
                    }
                }, n.prototype.init = function () {
                    var e = this;
                    e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
                }, n.prototype.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = this,
                        i = n.params,
                        r = n.$el,
                        a = n.$wrapperEl,
                        s = n.slides;
                    return void 0 === n.params || n.destroyed ? null : (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), s && s.length && s.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function (e) {
                        n.off(e)
                    }), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), je.deleteProps(n)), n.destroyed = !0, null)
                }, n.extendDefaults = function (e) {
                    je.extend(it, e)
                }, i.extendedDefaults.get = function () {
                    return it
                }, i.defaults.get = function () {
                    return tt
                }, i.Class.get = function () {
                    return t
                }, i.$.get = function () {
                    return e
                }, Object.defineProperties(n, i), n
            }(Be),
            at = {
                name: "device",
                proto: {
                    device: _e
                },
                static: {
                    device: _e
                }
            },
            st = {
                name: "support",
                proto: {
                    support: He
                },
                static: {
                    support: He
                }
            },
            ot = {
                name: "browser",
                proto: {
                    browser: Qe
                },
                static: {
                    browser: Qe
                }
            },
            lt = {
                name: "resize",
                create: function () {
                    var e = this;
                    je.extend(e, {
                        resize: {
                            resizeHandler: function () {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                            },
                            orientationChangeHandler: function () {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function () {
                        var e = this;
                        Ie.addEventListener("resize", e.resize.resizeHandler), Ie.addEventListener("orientationchange", e.resize.orientationChangeHandler)
                    },
                    destroy: function () {
                        var e = this;
                        Ie.removeEventListener("resize", e.resize.resizeHandler), Ie.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                    }
                }
            },
            dt = {
                func: Ie.MutationObserver || Ie.WebkitMutationObserver,
                attach: function (e, t) {
                    void 0 === t && (t = {});
                    var n = this,
                        i = dt.func,
                        r = new i(function (e) {
                            if (1 === e.length) return void n.emit("observerUpdate", e[0]);
                            var t = function () {
                                n.emit("observerUpdate", e[0])
                            };
                            Ie.requestAnimationFrame ? Ie.requestAnimationFrame(t) : Ie.setTimeout(t, 0)
                        });
                    r.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), n.observer.observers.push(r)
                },
                init: function () {
                    var e = this;
                    if (He.observer && e.params.observer) {
                        if (e.params.observeParents)
                            for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
                        e.observer.attach(e.$el[0], {
                            childList: e.params.observeSlideChildren
                        }), e.observer.attach(e.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function () {
                    var e = this;
                    e.observer.observers.forEach(function (e) {
                        e.disconnect()
                    }), e.observer.observers = []
                }
            },
            ut = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        observer: {
                            init: dt.init.bind(e),
                            attach: dt.attach.bind(e),
                            destroy: dt.destroy.bind(e),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function () {
                        this.observer.init()
                    },
                    destroy: function () {
                        this.observer.destroy()
                    }
                }
            },
            ct = {
                update: function (e) {
                    function t() {
                        n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.lazy && n.params.lazy.enabled && n.lazy.load()
                    }
                    var n = this,
                        i = n.params,
                        r = i.slidesPerView,
                        a = i.slidesPerGroup,
                        s = i.centeredSlides,
                        o = n.params.virtual,
                        l = o.addSlidesBefore,
                        d = o.addSlidesAfter,
                        u = n.virtual,
                        c = u.from,
                        p = u.to,
                        f = u.slides,
                        h = u.slidesGrid,
                        v = u.renderSlide,
                        m = u.offset;
                    n.updateActiveIndex();
                    var g, y = n.activeIndex || 0;
                    g = n.rtlTranslate ? "right" : n.isHorizontal() ? "left" : "top";
                    var b, x;
                    s ? (b = Math.floor(r / 2) + a + l, x = Math.floor(r / 2) + a + d) : (b = r + (a - 1) + l, x = a + d);
                    var w = Math.max((y || 0) - x, 0),
                        T = Math.min((y || 0) + b, f.length - 1),
                        E = (n.slidesGrid[w] || 0) - (n.slidesGrid[0] || 0);
                    if (je.extend(n.virtual, {
                        from: w,
                        to: T,
                        offset: E,
                        slidesGrid: n.slidesGrid
                    }), c === w && p === T && !e) return n.slidesGrid !== h && E !== m && n.slides.css(g, E + "px"), void n.updateProgress();
                    if (n.params.virtual.renderExternal) return n.params.virtual.renderExternal.call(n, {
                        offset: E,
                        from: w,
                        to: T,
                        slides: function () {
                            for (var e = [], t = w; t <= T; t += 1) e.push(f[t]);
                            return e
                        }()
                    }), void t();
                    var C = [],
                        S = [];
                    if (e) n.$wrapperEl.find("." + n.params.slideClass).remove();
                    else
                        for (var k = c; k <= p; k += 1)(k < w || k > T) && n.$wrapperEl.find("." + n.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
                    for (var M = 0; M < f.length; M += 1) M >= w && M <= T && (void 0 === p || e ? S.push(M) : (M > p && S.push(M), M < c && C.push(M)));
                    S.forEach(function (e) {
                        n.$wrapperEl.append(v(f[e], e))
                    }), C.sort(function (e, t) {
                        return t - e
                    }).forEach(function (e) {
                        n.$wrapperEl.prepend(v(f[e], e))
                    }), n.$wrapperEl.children(".swiper-slide").css(g, E + "px"), t()
                },
                renderSlide: function (t, n) {
                    var i = this,
                        r = i.params.virtual;
                    if (r.cache && i.virtual.cache[n]) return i.virtual.cache[n];
                    var a = e(r.renderSlide ? r.renderSlide.call(i, t, n) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + n + '">' + t + "</div>");
                    return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", n), r.cache && (i.virtual.cache[n] = a), a
                },
                appendSlide: function (e) {
                    var t = this;
                    t.virtual.slides.push(e), t.virtual.update(!0)
                },
                prependSlide: function (e) {
                    var t = this;
                    if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                        var n = t.virtual.cache,
                            i = {};
                        Object.keys(n).forEach(function (e) {
                            i[e + 1] = n[e]
                        }), t.virtual.cache = i
                    }
                    t.virtual.update(!0), t.slideNext(0)
                }
            },
            pt = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        virtual: {
                            update: ct.update.bind(e),
                            appendSlide: ct.appendSlide.bind(e),
                            prependSlide: ct.prependSlide.bind(e),
                            renderSlide: ct.renderSlide.bind(e),
                            slides: e.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        if (e.params.virtual.enabled) {
                            e.classNames.push(e.params.containerModifierClass + "virtual");
                            var t = {
                                watchSlidesProgress: !0
                            };
                            je.extend(e.params, t), je.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                        }
                    },
                    setTranslate: function () {
                        var e = this;
                        e.params.virtual.enabled && e.virtual.update()
                    }
                }
            },
            ft = {
                handle: function (e) {
                    var t = this,
                        n = t.rtlTranslate,
                        i = e;
                    i.originalEvent && (i = i.originalEvent);
                    var r = i.keyCode || i.charCode;
                    if (!t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r)) return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r)) return !1;
                    if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || $e.activeElement && $e.activeElement.nodeName && ("input" === $e.activeElement.nodeName.toLowerCase() || "textarea" === $e.activeElement.nodeName.toLowerCase()))) {
                        if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                            var a = !1;
                            if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                            var s = Ie.innerWidth,
                                o = Ie.innerHeight,
                                l = t.$el.offset();
                            n && (l.left -= t.$el[0].scrollLeft);
                            for (var d = [
                                [l.left, l.top],
                                [l.left + t.width, l.top],
                                [l.left, l.top + t.height],
                                [l.left + t.width, l.top + t.height]
                            ], u = 0; u < d.length; u += 1) {
                                var c = d[u];
                                c[0] >= 0 && c[0] <= s && c[1] >= 0 && c[1] <= o && (a = !0)
                            }
                            if (!a) return
                        }
                        t.isHorizontal() ? (37 !== r && 39 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === r && !n || 37 === r && n) && t.slideNext(), (37 === r && !n || 39 === r && n) && t.slidePrev()) : (38 !== r && 40 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === r && t.slideNext(), 38 === r && t.slidePrev()), t.emit("keyPress", r)
                    }
                },
                enable: function () {
                    var t = this;
                    t.keyboard.enabled || (e($e).on("keydown", t.keyboard.handle), t.keyboard.enabled = !0)
                },
                disable: function () {
                    var t = this;
                    t.keyboard.enabled && (e($e).off("keydown", t.keyboard.handle), t.keyboard.enabled = !1)
                }
            },
            ht = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        keyboard: {
                            enabled: !1,
                            enable: ft.enable.bind(e),
                            disable: ft.disable.bind(e),
                            handle: ft.handle.bind(e)
                        }
                    })
                },
                on: {
                    init: function () {
                        var e = this;
                        e.params.keyboard.enabled && e.keyboard.enable()
                    },
                    destroy: function () {
                        var e = this;
                        e.keyboard.enabled && e.keyboard.disable()
                    }
                }
            },
            vt = {
                lastScrollTime: je.now(),
                event: function () {
                    return Ie.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : De() ? "wheel" : "mousewheel"
                }(),
                normalize: function (e) {
                    var t = 0,
                        n = 0,
                        i = 0,
                        r = 0;
                    return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, r = 10 * n, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: n,
                        pixelX: i,
                        pixelY: r
                    }
                },
                handleMouseEnter: function () {
                    this.mouseEntered = !0
                },
                handleMouseLeave: function () {
                    this.mouseEntered = !1
                },
                handle: function (e) {
                    var t = e,
                        n = this,
                        i = n.params.mousewheel;
                    if (!n.mouseEntered && !i.releaseOnEdges) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    var r = 0,
                        a = n.rtlTranslate ? -1 : 1,
                        s = vt.normalize(t);
                    if (i.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
                            r = s.pixelX * a
                        } else {
                            if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
                            r = s.pixelY
                        }
                    else r = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * a : -s.pixelY;
                    if (0 === r) return !0;
                    if (i.invert && (r = -r), n.params.freeMode) {
                        n.params.loop && n.loopFix();
                        var o = n.getTranslate() + r * i.sensitivity,
                            l = n.isBeginning,
                            d = n.isEnd;
                        if (o >= n.minTranslate() && (o = n.minTranslate()), o <= n.maxTranslate() && (o = n.maxTranslate()), n.setTransition(0), n.setTranslate(o), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!l && n.isBeginning || !d && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = je.nextTick(function () {
                            n.slideToClosest()
                        }, 300)), n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), o === n.minTranslate() || o === n.maxTranslate()) return !0
                    } else {
                        if (je.now() - n.mousewheel.lastScrollTime > 60)
                            if (r < 0)
                                if (n.isEnd && !n.params.loop || n.animating) {
                                    if (i.releaseOnEdges) return !0
                                } else n.slideNext(), n.emit("scroll", t);
                            else if (n.isBeginning && !n.params.loop || n.animating) {
                                if (i.releaseOnEdges) return !0
                            } else n.slidePrev(), n.emit("scroll", t);
                        n.mousewheel.lastScrollTime = (new Ie.Date).getTime()
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                },
                enable: function () {
                    var t = this;
                    if (!vt.event) return !1;
                    if (t.mousewheel.enabled) return !1;
                    var n = t.$el;
                    return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)), n.on("mouseenter", t.mousewheel.handleMouseEnter), n.on("mouseleave", t.mousewheel.handleMouseLeave), n.on(vt.event, t.mousewheel.handle), t.mousewheel.enabled = !0, !0
                },
                disable: function () {
                    var t = this;
                    if (!vt.event) return !1;
                    if (!t.mousewheel.enabled) return !1;
                    var n = t.$el;
                    return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)), n.off(vt.event, t.mousewheel.handle), t.mousewheel.enabled = !1, !0
                }
            },
            mt = {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        mousewheel: {
                            enabled: !1,
                            enable: vt.enable.bind(e),
                            disable: vt.disable.bind(e),
                            handle: vt.handle.bind(e),
                            handleMouseEnter: vt.handleMouseEnter.bind(e),
                            handleMouseLeave: vt.handleMouseLeave.bind(e),
                            lastScrollTime: je.now()
                        }
                    })
                },
                on: {
                    init: function () {
                        var e = this;
                        e.params.mousewheel.enabled && e.mousewheel.enable()
                    },
                    destroy: function () {
                        var e = this;
                        e.mousewheel.enabled && e.mousewheel.disable()
                    }
                }
            },
            gt = {
                update: function () {
                    var e = this,
                        t = e.params.navigation;
                    if (!e.params.loop) {
                        var n = e.navigation,
                            i = n.$nextEl,
                            r = n.$prevEl;
                        r && r.length > 0 && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                    }
                },
                onPrevClick: function (e) {
                    var t = this;
                    e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
                },
                onNextClick: function (e) {
                    var t = this;
                    e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
                },
                init: function () {
                    var t = this,
                        n = t.params.navigation;
                    if (n.nextEl || n.prevEl) {
                        var i, r;
                        n.nextEl && (i = e(n.nextEl), t.params.uniqueNavElements && "string" == typeof n.nextEl && i.length > 1 && 1 === t.$el.find(n.nextEl).length && (i = t.$el.find(n.nextEl))), n.prevEl && (r = e(n.prevEl), t.params.uniqueNavElements && "string" == typeof n.prevEl && r.length > 1 && 1 === t.$el.find(n.prevEl).length && (r = t.$el.find(n.prevEl))), i && i.length > 0 && i.on("click", t.navigation.onNextClick), r && r.length > 0 && r.on("click", t.navigation.onPrevClick), je.extend(t.navigation, {
                            $nextEl: i,
                            nextEl: i && i[0],
                            $prevEl: r,
                            prevEl: r && r[0]
                        })
                    }
                },
                destroy: function () {
                    var e = this,
                        t = e.navigation,
                        n = t.$nextEl,
                        i = t.$prevEl;
                    n && n.length && (n.off("click", e.navigation.onNextClick), n.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
                }
            },
            yt = {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        navigation: {
                            init: gt.init.bind(e),
                            update: gt.update.bind(e),
                            destroy: gt.destroy.bind(e),
                            onNextClick: gt.onNextClick.bind(e),
                            onPrevClick: gt.onPrevClick.bind(e)
                        }
                    })
                },
                on: {
                    init: function () {
                        var e = this;
                        e.navigation.init(), e.navigation.update()
                    },
                    toEdge: function () {
                        this.navigation.update()
                    },
                    fromEdge: function () {
                        this.navigation.update()
                    },
                    destroy: function () {
                        this.navigation.destroy()
                    },
                    click: function (t) {
                        var n = this,
                            i = n.navigation,
                            r = i.$nextEl,
                            a = i.$prevEl;
                        !n.params.navigation.hideOnClick || e(t.target).is(a) || e(t.target).is(r) || (r && r.toggleClass(n.params.navigation.hiddenClass), a && a.toggleClass(n.params.navigation.hiddenClass))
                    }
                }
            },
            bt = {
                update: function () {
                    var t = this,
                        n = t.rtl,
                        i = t.params.pagination;
                    if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                        var r, a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                            s = t.pagination.$el,
                            o = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        if (t.params.loop ? (r = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), r > a - 1 - 2 * t.loopedSlides && (r -= a - 2 * t.loopedSlides), r > o - 1 && (r -= o), r < 0 && "bullets" !== t.params.paginationType && (r = o + r)) : r = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                            var l, d, u, c = t.pagination.bullets;
                            if (i.dynamicBullets && (t.pagination.bulletSize = c.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(t.isHorizontal() ? "width" : "height", t.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (t.pagination.dynamicBulletIndex += r - t.previousIndex, t.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? t.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)), l = r - t.pagination.dynamicBulletIndex, d = l + (Math.min(c.length, i.dynamicMainBullets) - 1), u = (d + l) / 2), c.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), s.length > 1) c.each(function (t, n) {
                                var a = e(n),
                                    s = a.index();
                                s === r && a.addClass(i.bulletActiveClass), i.dynamicBullets && (s >= l && s <= d && a.addClass(i.bulletActiveClass + "-main"), s === l && a.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), s === d && a.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                            });
                            else {
                                if (c.eq(r).addClass(i.bulletActiveClass), i.dynamicBullets) {
                                    for (var p = c.eq(l), f = c.eq(d), h = l; h <= d; h += 1) c.eq(h).addClass(i.bulletActiveClass + "-main");
                                    p.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), f.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                                }
                            }
                            if (i.dynamicBullets) {
                                var v = Math.min(c.length, i.dynamicMainBullets + 4),
                                    m = (t.pagination.bulletSize * v - t.pagination.bulletSize) / 2 - u * t.pagination.bulletSize,
                                    g = n ? "right" : "left";
                                c.css(t.isHorizontal() ? g : "top", m + "px")
                            }
                        }
                        if ("fraction" === i.type && (s.find("." + i.currentClass).text(i.formatFractionCurrent(r + 1)), s.find("." + i.totalClass).text(i.formatFractionTotal(o))), "progressbar" === i.type) {
                            var y;
                            y = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                            var b = (r + 1) / o,
                                x = 1,
                                w = 1;
                            "horizontal" === y ? x = b : w = b, s.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + w + ")").transition(t.params.speed)
                        }
                        "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(t, r + 1, o)), t.emit("paginationRender", t, s[0])) : t.emit("paginationUpdate", t, s[0]), s[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](i.lockClass)
                    }
                },
                render: function () {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                            i = e.pagination.$el,
                            r = "";
                        if ("bullets" === t.type) {
                            for (var a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < a; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                            i.html(r), e.pagination.bullets = i.find("." + t.bulletClass)
                        }
                        "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                    }
                },
                init: function () {
                    var t = this,
                        n = t.params.pagination;
                    if (n.el) {
                        var i = e(n.el);
                        0 !== i.length && (t.params.uniqueNavElements && "string" == typeof n.el && i.length > 1 && 1 === t.$el.find(n.el).length && (i = t.$el.find(n.el)), "bullets" === n.type && n.clickable && i.addClass(n.clickableClass), i.addClass(n.modifierClass + n.type), "bullets" === n.type && n.dynamicBullets && (i.addClass("" + n.modifierClass + n.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)), "progressbar" === n.type && n.progressbarOpposite && i.addClass(n.progressbarOppositeClass), n.clickable && i.on("click", "." + n.bulletClass, function (n) {
                            n.preventDefault();
                            var i = e(this).index() * t.params.slidesPerGroup;
                            t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                        }), je.extend(t.pagination, {
                            $el: i,
                            el: i[0]
                        }))
                    }
                },
                destroy: function () {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var n = e.pagination.$el;
                        n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", "." + t.bulletClass)
                    }
                }
            },
            xt = {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function (e) {
                            return e
                        },
                        formatFractionTotal: function (e) {
                            return e
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        pagination: {
                            init: bt.init.bind(e),
                            render: bt.render.bind(e),
                            update: bt.update.bind(e),
                            destroy: bt.destroy.bind(e),
                            dynamicBulletIndex: 0
                        }
                    })
                },
                on: {
                    init: function () {
                        var e = this;
                        e.pagination.init(), e.pagination.render(), e.pagination.update()
                    },
                    activeIndexChange: function () {
                        var e = this;
                        e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
                    },
                    snapIndexChange: function () {
                        var e = this;
                        e.params.loop || e.pagination.update()
                    },
                    slidesLengthChange: function () {
                        var e = this;
                        e.params.loop && (e.pagination.render(), e.pagination.update())
                    },
                    snapGridLengthChange: function () {
                        var e = this;
                        e.params.loop || (e.pagination.render(), e.pagination.update())
                    },
                    destroy: function () {
                        this.pagination.destroy()
                    },
                    click: function (t) {
                        var n = this;
                        n.params.pagination.el && n.params.pagination.hideOnClick && n.pagination.$el.length > 0 && !e(t.target).hasClass(n.params.pagination.bulletClass) && n.pagination.$el.toggleClass(n.params.pagination.hiddenClass)
                    }
                }
            },
            wt = {
                setTranslate: function () {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar,
                            n = e.rtlTranslate,
                            i = e.progress,
                            r = t.dragSize,
                            a = t.trackSize,
                            s = t.$dragEl,
                            o = t.$el,
                            l = e.params.scrollbar,
                            d = r,
                            u = (a - r) * i;
                        n ? (u = -u, u > 0 ? (d = r - u, u = 0) : -u + r > a && (d = a + u)) : u < 0 ? (d = r + u, u = 0) : u + r > a && (d = a - u), e.isHorizontal() ? (He.transforms3d ? s.transform("translate3d(" + u + "px, 0, 0)") : s.transform("translateX(" + u + "px)"), s[0].style.width = d + "px") : (He.transforms3d ? s.transform("translate3d(0px, " + u + "px, 0)") : s.transform("translateY(" + u + "px)"), s[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
                            o[0].style.opacity = 0, o.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function (e) {
                    var t = this;
                    t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                },
                updateSize: function () {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar,
                            n = t.$dragEl,
                            i = t.$el;
                        n[0].style.width = "", n[0].style.height = "";
                        var r, a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                            s = e.size / e.virtualSize,
                            o = s * (a / e.size);
                        r = "auto" === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = r + "px" : n[0].style.height = r + "px", i[0].style.display = s >= 1 ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), je.extend(t, {
                            trackSize: a,
                            divider: s,
                            moveDivider: o,
                            dragSize: r
                        }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                    }
                },
                setDragPosition: function (e) {
                    var t, n = this,
                        i = n.scrollbar,
                        r = n.rtlTranslate,
                        a = i.$el,
                        s = i.dragSize,
                        o = i.trackSize;
                    t = n.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                    var l;
                    l = (t - a.offset()[n.isHorizontal() ? "left" : "top"] - s / 2) / (o - s), l = Math.max(Math.min(l, 1), 0), r && (l = 1 - l);
                    var d = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * l;
                    n.updateProgress(d), n.setTranslate(d), n.updateActiveIndex(), n.updateSlidesClasses()
                },
                onDragStart: function (e) {
                    var t = this,
                        n = t.params.scrollbar,
                        i = t.scrollbar,
                        r = t.$wrapperEl,
                        a = i.$el,
                        s = i.$dragEl;
                    t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), r.transition(100), s.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), a.transition(0), n.hide && a.css("opacity", 1), t.emit("scrollbarDragStart", e)
                },
                onDragMove: function (e) {
                    var t = this,
                        n = t.scrollbar,
                        i = t.$wrapperEl,
                        r = n.$el,
                        a = n.$dragEl;
                    t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, n.setDragPosition(e), i.transition(0), r.transition(0), a.transition(0), t.emit("scrollbarDragMove", e))
                },
                onDragEnd: function (e) {
                    var t = this,
                        n = t.params.scrollbar,
                        i = t.scrollbar,
                        r = i.$el;
                    t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = je.nextTick(function () {
                        r.css("opacity", 0), r.transition(400)
                    }, 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
                },
                enableDraggable: function () {
                    var e = this;
                    if (e.params.scrollbar.el) {
                        var t = e.scrollbar,
                            n = e.touchEventsTouch,
                            i = e.touchEventsDesktop,
                            r = e.params,
                            a = t.$el,
                            s = a[0],
                            o = !(!He.passiveListener || !r.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            },
                            l = !(!He.passiveListener || !r.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        He.touch ? (s.addEventListener(n.start, e.scrollbar.onDragStart, o), s.addEventListener(n.move, e.scrollbar.onDragMove, o), s.addEventListener(n.end, e.scrollbar.onDragEnd, l)) : (s.addEventListener(i.start, e.scrollbar.onDragStart, o), $e.addEventListener(i.move, e.scrollbar.onDragMove, o), $e.addEventListener(i.end, e.scrollbar.onDragEnd, l))
                    }
                },
                disableDraggable: function () {
                    var e = this;
                    if (e.params.scrollbar.el) {
                        var t = e.scrollbar,
                            n = e.touchEventsTouch,
                            i = e.touchEventsDesktop,
                            r = e.params,
                            a = t.$el,
                            s = a[0],
                            o = !(!He.passiveListener || !r.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            },
                            l = !(!He.passiveListener || !r.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        He.touch ? (s.removeEventListener(n.start, e.scrollbar.onDragStart, o), s.removeEventListener(n.move, e.scrollbar.onDragMove, o), s.removeEventListener(n.end, e.scrollbar.onDragEnd, l)) : (s.removeEventListener(i.start, e.scrollbar.onDragStart, o), $e.removeEventListener(i.move, e.scrollbar.onDragMove, o), $e.removeEventListener(i.end, e.scrollbar.onDragEnd, l))
                    }
                },
                init: function () {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var n = t.scrollbar,
                            i = t.$el,
                            r = t.params.scrollbar,
                            a = e(r.el);
                        t.params.uniqueNavElements && "string" == typeof r.el && a.length > 1 && 1 === i.find(r.el).length && (a = i.find(r.el));
                        var s = a.find("." + t.params.scrollbar.dragClass);
                        0 === s.length && (s = e('<div class="' + t.params.scrollbar.dragClass + '"></div>'), a.append(s)), je.extend(n, {
                            $el: a,
                            el: a[0],
                            $dragEl: s,
                            dragEl: s[0]
                        }), r.draggable && n.enableDraggable()
                    }
                },
                destroy: function () {
                    this.scrollbar.disableDraggable()
                }
            },
            Tt = {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        scrollbar: {
                            init: wt.init.bind(e),
                            destroy: wt.destroy.bind(e),
                            updateSize: wt.updateSize.bind(e),
                            setTranslate: wt.setTranslate.bind(e),
                            setTransition: wt.setTransition.bind(e),
                            enableDraggable: wt.enableDraggable.bind(e),
                            disableDraggable: wt.disableDraggable.bind(e),
                            setDragPosition: wt.setDragPosition.bind(e),
                            onDragStart: wt.onDragStart.bind(e),
                            onDragMove: wt.onDragMove.bind(e),
                            onDragEnd: wt.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init: function () {
                        var e = this;
                        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                    },
                    update: function () {
                        this.scrollbar.updateSize()
                    },
                    resize: function () {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate: function () {
                        this.scrollbar.updateSize()
                    },
                    setTranslate: function () {
                        this.scrollbar.setTranslate()
                    },
                    setTransition: function (e) {
                        this.scrollbar.setTransition(e)
                    },
                    destroy: function () {
                        this.scrollbar.destroy()
                    }
                }
            },
            Et = {
                setTransform: function (t, n) {
                    var i = this,
                        r = i.rtl,
                        a = e(t),
                        s = r ? -1 : 1,
                        o = a.attr("data-swiper-parallax") || "0",
                        l = a.attr("data-swiper-parallax-x"),
                        d = a.attr("data-swiper-parallax-y"),
                        u = a.attr("data-swiper-parallax-scale"),
                        c = a.attr("data-swiper-parallax-opacity");
                    if (l || d ? (l = l || "0", d = d || "0") : i.isHorizontal() ? (l = o, d = "0") : (d = o, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n * s + "%" : l * n * s + "px", d = d.indexOf("%") >= 0 ? parseInt(d, 10) * n + "%" : d * n + "px", void 0 !== c && null !== c) {
                        var p = c - (c - 1) * (1 - Math.abs(n));
                        a[0].style.opacity = p
                    }
                    if (void 0 === u || null === u) a.transform("translate3d(" + l + ", " + d + ", 0px)");
                    else {
                        var f = u - (u - 1) * (1 - Math.abs(n));
                        a.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + f + ")")
                    }
                },
                setTranslate: function () {
                    var t = this,
                        n = t.$el,
                        i = t.slides,
                        r = t.progress,
                        a = t.snapGrid;
                    n.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, n) {
                        t.parallax.setTransform(n, r)
                    }), i.each(function (n, i) {
                        var s = i.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (s += Math.ceil(n / 2) - r * (a.length - 1)), s = Math.min(Math.max(s, -1), 1), e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, n) {
                            t.parallax.setTransform(n, s)
                        })
                    })
                },
                setTransition: function (t) {
                    void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (n, i) {
                        var r = e(i),
                            a = parseInt(r.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (a = 0), r.transition(a)
                    })
                }
            },
            Ct = {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        parallax: {
                            setTransform: Et.setTransform.bind(e),
                            setTranslate: Et.setTranslate.bind(e),
                            setTransition: Et.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                    },
                    init: function () {
                        var e = this;
                        e.params.parallax && e.parallax.setTranslate()
                    },
                    setTranslate: function () {
                        var e = this;
                        e.params.parallax && e.parallax.setTranslate()
                    },
                    setTransition: function (e) {
                        var t = this;
                        t.params.parallax && t.parallax.setTransition(e)
                    }
                }
            },
            St = {
                getDistanceBetweenTouches: function (e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        n = e.targetTouches[0].pageY,
                        i = e.targetTouches[1].pageX,
                        r = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2))
                },
                onGestureStart: function (t) {
                    var n = this,
                        i = n.params.zoom,
                        r = n.zoom,
                        a = r.gesture;
                    if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !He.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                        r.fakeGestureTouched = !0, a.scaleStart = St.getDistanceBetweenTouches(t)
                    }
                    if (!(a.$slideEl && a.$slideEl.length || (a.$slideEl = e(t.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = n.slides.eq(n.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length))) return void(a.$imageEl = void 0);
                    a.$imageEl.transition(0), n.zoom.isScaling = !0
                },
                onGestureChange: function (e) {
                    var t = this,
                        n = t.params.zoom,
                        i = t.zoom,
                        r = i.gesture;
                    if (!He.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        i.fakeGestureMoved = !0, r.scaleMove = St.getDistanceBetweenTouches(e)
                    }
                    r.$imageEl && 0 !== r.$imageEl.length && (He.gestures ? i.scale = e.scale * i.currentScale : i.scale = r.scaleMove / r.scaleStart * i.currentScale, i.scale > r.maxRatio && (i.scale = r.maxRatio - 1 + Math.pow(i.scale - r.maxRatio + 1, .5)), i.scale < n.minRatio && (i.scale = n.minRatio + 1 - Math.pow(n.minRatio - i.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function (e) {
                    var t = this,
                        n = t.params.zoom,
                        i = t.zoom,
                        r = i.gesture;
                    if (!He.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !_e.android) return;
                        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                    }
                    r.$imageEl && 0 !== r.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, r.maxRatio), n.minRatio), r.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (r.$slideEl = void 0))
                },
                onTouchStart: function (e) {
                    var t = this,
                        n = t.zoom,
                        i = n.gesture,
                        r = n.image;
                    i.$imageEl && 0 !== i.$imageEl.length && (r.isTouched || (_e.android && e.preventDefault(), r.isTouched = !0, r.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove: function (e) {
                    var t = this,
                        n = t.zoom,
                        i = n.gesture,
                        r = n.image,
                        a = n.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, r.isTouched && i.$slideEl)) {
                        r.isMoved || (r.width = i.$imageEl[0].offsetWidth, r.height = i.$imageEl[0].offsetHeight, r.startX = je.getTranslate(i.$imageWrapEl[0], "x") || 0, r.startY = je.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (r.startX = -r.startX, r.startY = -r.startY));
                        var s = r.width * n.scale,
                            o = r.height * n.scale;
                        if (!(s < i.slideWidth && o < i.slideHeight)) {
                            if (r.minX = Math.min(i.slideWidth / 2 - s / 2, 0), r.maxX = -r.minX, r.minY = Math.min(i.slideHeight / 2 - o / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !r.isMoved && !n.isScaling) {
                                if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void(r.isTouched = !1);
                                if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void(r.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), r.isMoved = !0, r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX, r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY, r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, .8)), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, .8)), r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, .8)), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = r.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = r.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (r.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (r.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(r.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(r.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = r.touchesCurrent.x, a.prevPositionY = r.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function () {
                    var e = this,
                        t = e.zoom,
                        n = t.gesture,
                        i = t.image,
                        r = t.velocity;
                    if (n.$imageEl && 0 !== n.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                        i.isTouched = !1, i.isMoved = !1;
                        var a = 300,
                            s = 300,
                            o = r.x * a,
                            l = i.currentX + o,
                            d = r.y * s,
                            u = i.currentY + d;
                        0 !== r.x && (a = Math.abs((l - i.currentX) / r.x)), 0 !== r.y && (s = Math.abs((u - i.currentY) / r.y));
                        var c = Math.max(a, s);
                        i.currentX = l, i.currentY = u;
                        var p = i.width * t.scale,
                            f = i.height * t.scale;
                        i.minX = Math.min(n.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(n.slideHeight / 2 - f / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), n.$imageWrapEl.transition(c).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function () {
                    var e = this,
                        t = e.zoom,
                        n = t.gesture;
                    n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0)
                },
                toggle: function (e) {
                    var t = this,
                        n = t.zoom;
                    n.scale && 1 !== n.scale ? n.out() : n.in(e)
                },
                in: function (t) {
                    var n = this,
                        i = n.zoom,
                        r = n.params.zoom,
                        a = i.gesture,
                        s = i.image;
                    if (a.$slideEl || (a.$slideEl = n.clickedSlide ? e(n.clickedSlide) : n.slides.eq(n.activeIndex), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + r.containerClass)), a.$imageEl && 0 !== a.$imageEl.length) {
                        a.$slideEl.addClass("" + r.zoomedSlideClass);
                        var o, l, d, u, c, p, f, h, v, m, g, y, b, x, w, T, E, C;
                        void 0 === s.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = s.touchesStart.x, l = s.touchesStart.y), i.scale = a.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, i.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, t ? (E = a.$slideEl[0].offsetWidth, C = a.$slideEl[0].offsetHeight, d = a.$slideEl.offset().left, u = a.$slideEl.offset().top, c = d + E / 2 - o, p = u + C / 2 - l, v = a.$imageEl[0].offsetWidth, m = a.$imageEl[0].offsetHeight, g = v * i.scale, y = m * i.scale, b = Math.min(E / 2 - g / 2, 0), x = Math.min(C / 2 - y / 2, 0), w = -b, T = -x, f = c * i.scale, h = p * i.scale, f < b && (f = b), f > w && (f = w), h < x && (h = x), h > T && (h = T)) : (f = 0, h = 0), a.$imageWrapEl.transition(300).transform("translate3d(" + f + "px, " + h + "px,0)"), a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")")
                    }
                },
                out: function () {
                    var t = this,
                        n = t.zoom,
                        i = t.params.zoom,
                        r = n.gesture;
                    r.$slideEl || (r.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)), r.$imageEl && 0 !== r.$imageEl.length && (n.scale = 1, n.currentScale = 1, r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), r.$slideEl.removeClass("" + i.zoomedSlideClass), r.$slideEl = void 0)
                },
                enable: function () {
                    var e = this,
                        t = e.zoom;
                    if (!t.enabled) {
                        t.enabled = !0;
                        var n = !("touchstart" !== e.touchEvents.start || !He.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        He.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                    }
                },
                disable: function () {
                    var e = this,
                        t = e.zoom;
                    if (t.enabled) {
                        e.zoom.enabled = !1;
                        var n = !("touchstart" !== e.touchEvents.start || !He.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        He.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                    }
                }
            },
            kt = {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function () {
                    var e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (n) {
                        t[n] = St[n].bind(e)
                    }), je.extend(e, {
                        zoom: t
                    });
                    var n = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get: function () {
                            return n
                        },
                        set: function (t) {
                            if (n !== t) {
                                var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                    r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                e.emit("zoomChange", t, i, r)
                            }
                            n = t
                        }
                    })
                },
                on: {
                    init: function () {
                        var e = this;
                        e.params.zoom.enabled && e.zoom.enable()
                    },
                    destroy: function () {
                        this.zoom.disable()
                    },
                    touchStart: function (e) {
                        var t = this;
                        t.zoom.enabled && t.zoom.onTouchStart(e)
                    },
                    touchEnd: function (e) {
                        var t = this;
                        t.zoom.enabled && t.zoom.onTouchEnd(e)
                    },
                    doubleTap: function (e) {
                        var t = this;
                        t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                    },
                    transitionEnd: function () {
                        var e = this;
                        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                    }
                }
            },
            Mt = {
                loadInSlide: function (t, n) {
                    void 0 === n && (n = !0);
                    var i = this,
                        r = i.params.lazy;
                    if (void 0 !== t && 0 !== i.slides.length) {
                        var a = i.virtual && i.params.virtual.enabled,
                            s = a ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                            o = s.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
                        !s.hasClass(r.elementClass) || s.hasClass(r.loadedClass) || s.hasClass(r.loadingClass) || (o = o.add(s[0])), 0 !== o.length && o.each(function (t, a) {
                            var o = e(a);
                            o.addClass(r.loadingClass);
                            var l = o.attr("data-background"),
                                d = o.attr("data-src"),
                                u = o.attr("data-srcset"),
                                c = o.attr("data-sizes");
                            i.loadImage(o[0], d || l, u, c, !1, function () {
                                if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                    if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (u && (o.attr("srcset", u), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(r.loadedClass).removeClass(r.loadingClass), s.find("." + r.preloaderClass).remove(), i.params.loop && n) {
                                        var e = s.attr("data-swiper-slide-index");
                                        if (s.hasClass(i.params.slideDuplicateClass)) {
                                            var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                            i.lazy.loadInSlide(t.index(), !1)
                                        } else {
                                            var a = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            i.lazy.loadInSlide(a.index(), !1)
                                        }
                                    }
                                    i.emit("lazyImageReady", s[0], o[0])
                                }
                            }), i.emit("lazyImageLoad", s[0], o[0])
                        })
                    }
                },
                load: function () {
                    function t(e) {
                        if (l) {
                            if (r.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                        } else if (s[e]) return !0;
                        return !1
                    }

                    function n(t) {
                        return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
                    }
                    var i = this,
                        r = i.$wrapperEl,
                        a = i.params,
                        s = i.slides,
                        o = i.activeIndex,
                        l = i.virtual && a.virtual.enabled,
                        d = a.lazy,
                        u = a.slidesPerView;
                    if ("auto" === u && (u = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) r.children("." + a.slideVisibleClass).each(function (t, n) {
                        var r = l ? e(n).attr("data-swiper-slide-index") : e(n).index();
                        i.lazy.loadInSlide(r)
                    });
                    else if (u > 1)
                        for (var c = o; c < o + u; c += 1) t(c) && i.lazy.loadInSlide(c);
                    else i.lazy.loadInSlide(o);
                    if (d.loadPrevNext)
                        if (u > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
                            for (var p = d.loadPrevNextAmount, f = u, h = Math.min(o + f + Math.max(p, f), s.length), v = Math.max(o - Math.max(f, p), 0), m = o + u; m < h; m += 1) t(m) && i.lazy.loadInSlide(m);
                            for (var g = v; g < o; g += 1) t(g) && i.lazy.loadInSlide(g)
                        } else {
                            var y = r.children("." + a.slideNextClass);
                            y.length > 0 && i.lazy.loadInSlide(n(y));
                            var b = r.children("." + a.slidePrevClass);
                            b.length > 0 && i.lazy.loadInSlide(n(b))
                        }
                }
            },
            At = {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: Mt.load.bind(e),
                            loadInSlide: Mt.loadInSlide.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                    },
                    init: function () {
                        var e = this;
                        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                    },
                    scroll: function () {
                        var e = this;
                        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                    },
                    resize: function () {
                        var e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    scrollbarDragMove: function () {
                        var e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    transitionStart: function () {
                        var e = this;
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                    },
                    transitionEnd: function () {
                        var e = this;
                        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                    }
                }
            },
            Pt = {
                LinearSpline: function (e, t) {
                    var n = function () {
                        var e, t, n;
                        return function (i, r) {
                            for (t = -1, e = i.length; e - t > 1;) n = e + t >> 1, i[n] <= r ? t = n : e = n;
                            return e
                        }
                    }();
                    this.x = e, this.y = t, this.lastIndex = e.length - 1;
                    var i, r;
                    return this.interpolate = function (e) {
                        return e ? (r = n(this.x, e), i = r - 1, (e - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
                    }, this
                },
                getInterpolateFunction: function (e) {
                    var t = this;
                    t.controller.spline || (t.controller.spline = t.params.loop ? new Pt.LinearSpline(t.slidesGrid, e.slidesGrid) : new Pt.LinearSpline(t.snapGrid, e.snapGrid))
                },
                setTranslate: function (e, t) {
                    function n(e) {
                        var t = a.rtlTranslate ? -a.translate : a.translate;
                        "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), r = -a.controller.spline.interpolate(-t)), r && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), r = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, a), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    var i, r, a = this,
                        s = a.controller.control;
                    if (Array.isArray(s))
                        for (var o = 0; o < s.length; o += 1) s[o] !== t && s[o] instanceof rt && n(s[o]);
                    else s instanceof rt && t !== s && n(s)
                },
                setTransition: function (e, t) {
                    function n(t) {
                        t.setTransition(e, r), 0 !== e && (t.transitionStart(), t.params.autoHeight && je.nextTick(function () {
                            t.updateAutoHeight()
                        }), t.$wrapperEl.transitionEnd(function () {
                            a && (t.params.loop && "slide" === r.params.controller.by && t.loopFix(), t.transitionEnd())
                        }))
                    }
                    var i, r = this,
                        a = r.controller.control;
                    if (Array.isArray(a))
                        for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof rt && n(a[i]);
                    else a instanceof rt && t !== a && n(a)
                }
            },
            Lt = {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        controller: {
                            control: e.params.controller.control,
                            getInterpolateFunction: Pt.getInterpolateFunction.bind(e),
                            setTranslate: Pt.setTranslate.bind(e),
                            setTransition: Pt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    update: function () {
                        var e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    resize: function () {
                        var e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    observerUpdate: function () {
                        var e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    setTranslate: function (e, t) {
                        var n = this;
                        n.controller.control && n.controller.setTranslate(e, t)
                    },
                    setTransition: function (e, t) {
                        var n = this;
                        n.controller.control && n.controller.setTransition(e, t)
                    }
                }
            },
            zt = {
                makeElFocusable: function (e) {
                    return e.attr("tabIndex", "0"), e
                },
                addElRole: function (e, t) {
                    return e.attr("role", t), e
                },
                addElLabel: function (e, t) {
                    return e.attr("aria-label", t), e
                },
                disableEl: function (e) {
                    return e.attr("aria-disabled", !0), e
                },
                enableEl: function (e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function (t) {
                    var n = this,
                        i = n.params.a11y;
                    if (13 === t.keyCode) {
                        var r = e(t.target);
                        n.navigation && n.navigation.$nextEl && r.is(n.navigation.$nextEl) && (n.isEnd && !n.params.loop || n.slideNext(), n.isEnd ? n.a11y.notify(i.lastSlideMessage) : n.a11y.notify(i.nextSlideMessage)), n.navigation && n.navigation.$prevEl && r.is(n.navigation.$prevEl) && (n.isBeginning && !n.params.loop || n.slidePrev(), n.isBeginning ? n.a11y.notify(i.firstSlideMessage) : n.a11y.notify(i.prevSlideMessage)), n.pagination && r.is("." + n.params.pagination.bulletClass) && r[0].click()
                    }
                },
                notify: function (e) {
                    var t = this,
                        n = t.a11y.liveRegion;
                    0 !== n.length && (n.html(""), n.html(e))
                },
                updateNavigation: function () {
                    var e = this;
                    if (!e.params.loop) {
                        var t = e.navigation,
                            n = t.$nextEl,
                            i = t.$prevEl;
                        i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), n && n.length > 0 && (e.isEnd ? e.a11y.disableEl(n) : e.a11y.enableEl(n))
                    }
                },
                updatePagination: function () {
                    var t = this,
                        n = t.params.a11y;
                    t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function (i, r) {
                        var a = e(r);
                        t.a11y.makeElFocusable(a), t.a11y.addElRole(a, "button"), t.a11y.addElLabel(a, n.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                    })
                },
                init: function () {
                    var e = this;
                    e.$el.append(e.a11y.liveRegion);
                    var t, n, i = e.params.a11y;
                    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, i.prevSlideMessage), n.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
                },
                destroy: function () {
                    var e = this;
                    e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
                    var t, n;
                    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), n && n.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
                }
            },
            Dt = {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create: function () {
                    var t = this;
                    je.extend(t, {
                        a11y: {
                            liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        }
                    }), Object.keys(zt).forEach(function (e) {
                        t.a11y[e] = zt[e].bind(t)
                    })
                },
                on: {
                    init: function () {
                        var e = this;
                        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                    },
                    toEdge: function () {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.updateNavigation()
                    },
                    fromEdge: function () {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.updateNavigation()
                    },
                    paginationUpdate: function () {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.updatePagination()
                    },
                    destroy: function () {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.destroy()
                    }
                }
            },
            $t = {
                init: function () {
                    var e = this;
                    if (e.params.history) {
                        if (!Ie.history || !Ie.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                        var t = e.history;
                        t.initialized = !0, t.paths = $t.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || Ie.addEventListener("popstate", e.history.setHistoryPopState))
                    }
                },
                destroy: function () {
                    var e = this;
                    e.params.history.replaceState || Ie.removeEventListener("popstate", e.history.setHistoryPopState)
                },
                setHistoryPopState: function () {
                    var e = this;
                    e.history.paths = $t.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
                },
                getPathValues: function () {
                    var e = Ie.location.pathname.slice(1).split("/").filter(function (e) {
                            return "" !== e
                        }),
                        t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    }
                },
                setHistory: function (e, t) {
                    var n = this;
                    if (n.history.initialized && n.params.history.enabled) {
                        var i = n.slides.eq(t),
                            r = $t.slugify(i.attr("data-history"));
                        Ie.location.pathname.includes(e) || (r = e + "/" + r);
                        var a = Ie.history.state;
                        a && a.value === r || (n.params.history.replaceState ? Ie.history.replaceState({
                            value: r
                        }, null, r) : Ie.history.pushState({
                            value: r
                        }, null, r))
                    }
                },
                slugify: function (e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function (e, t, n) {
                    var i = this;
                    if (t)
                        for (var r = 0, a = i.slides.length; r < a; r += 1) {
                            var s = i.slides.eq(r),
                                o = $t.slugify(s.attr("data-history"));
                            if (o === t && !s.hasClass(i.params.slideDuplicateClass)) {
                                var l = s.index();
                                i.slideTo(l, e, n)
                            }
                        } else i.slideTo(0, e, n)
                }
            },
            It = {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        history: {
                            init: $t.init.bind(e),
                            setHistory: $t.setHistory.bind(e),
                            setHistoryPopState: $t.setHistoryPopState.bind(e),
                            scrollToSlide: $t.scrollToSlide.bind(e),
                            destroy: $t.destroy.bind(e)
                        }
                    })
                },
                on: {
                    init: function () {
                        var e = this;
                        e.params.history.enabled && e.history.init()
                    },
                    destroy: function () {
                        var e = this;
                        e.params.history.enabled && e.history.destroy()
                    },
                    transitionEnd: function () {
                        var e = this;
                        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                    }
                }
            },
            Ot = {
                onHashCange: function () {
                    var e = this,
                        t = $e.location.hash.replace("#", "");
                    if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                        var n = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                        if (void 0 === n) return;
                        e.slideTo(n)
                    }
                },
                setHash: function () {
                    var e = this;
                    if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                        if (e.params.hashNavigation.replaceState && Ie.history && Ie.history.replaceState) Ie.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                        else {
                            var t = e.slides.eq(e.activeIndex),
                                n = t.attr("data-hash") || t.attr("data-history");
                            $e.location.hash = n || ""
                        }
                },
                init: function () {
                    var t = this;
                    if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
                        t.hashNavigation.initialized = !0;
                        var n = $e.location.hash.replace("#", "");
                        if (n)
                            for (var i = 0, r = t.slides.length; i < r; i += 1) {
                                var a = t.slides.eq(i),
                                    s = a.attr("data-hash") || a.attr("data-history");
                                if (s === n && !a.hasClass(t.params.slideDuplicateClass)) {
                                    var o = a.index();
                                    t.slideTo(o, 0, t.params.runCallbacksOnInit, !0)
                                }
                            }
                        t.params.hashNavigation.watchState && e(Ie).on("hashchange", t.hashNavigation.onHashCange)
                    }
                },
                destroy: function () {
                    var t = this;
                    t.params.hashNavigation.watchState && e(Ie).off("hashchange", t.hashNavigation.onHashCange)
                }
            },
            Nt = {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        hashNavigation: {
                            initialized: !1,
                            init: Ot.init.bind(e),
                            destroy: Ot.destroy.bind(e),
                            setHash: Ot.setHash.bind(e),
                            onHashCange: Ot.onHashCange.bind(e)
                        }
                    })
                },
                on: {
                    init: function () {
                        var e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.init()
                    },
                    destroy: function () {
                        var e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                    },
                    transitionEnd: function () {
                        var e = this;
                        e.hashNavigation.initialized && e.hashNavigation.setHash()
                    }
                }
            },
            jt = {
                run: function () {
                    var e = this,
                        t = e.slides.eq(e.activeIndex),
                        n = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = je.nextTick(function () {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                    }, n)
                },
                start: function () {
                    var e = this;
                    return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
                },
                stop: function () {
                    var e = this;
                    return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
                },
                pause: function (e) {
                    var t = this;
                    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
                }
            },
            Ht = {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: jt.run.bind(e),
                            start: jt.start.bind(e),
                            stop: jt.stop.bind(e),
                            pause: jt.pause.bind(e),
                            onTransitionEnd: function (t) {
                                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                            }
                        }
                    })
                },
                on: {
                    init: function () {
                        var e = this;
                        e.params.autoplay.enabled && e.autoplay.start()
                    },
                    beforeTransitionStart: function (e, t) {
                        var n = this;
                        n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(e) : n.autoplay.stop())
                    },
                    sliderFirstMove: function () {
                        var e = this;
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                    },
                    destroy: function () {
                        var e = this;
                        e.autoplay.running && e.autoplay.stop()
                    }
                }
            },
            Bt = {
                setTranslate: function () {
                    for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
                        var i = e.slides.eq(n),
                            r = i[0].swiperSlideOffset,
                            a = -r;
                        e.params.virtualTranslate || (a -= e.translate);
                        var s = 0;
                        e.isHorizontal() || (s = a, a = 0);
                        var o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({
                            opacity: o
                        }).transform("translate3d(" + a + "px, " + s + "px, 0px)")
                    }
                },
                setTransition: function (e) {
                    var t = this,
                        n = t.slides,
                        i = t.$wrapperEl;
                    if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
                        var r = !1;
                        n.transitionEnd(function () {
                            if (!r && t && !t.destroyed) {
                                r = !0, t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) i.trigger(e[n])
                            }
                        })
                    }
                }
            },
            qt = {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        fadeEffect: {
                            setTranslate: Bt.setTranslate.bind(e),
                            setTransition: Bt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        if ("fade" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "fade");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            je.extend(e.params, t), je.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function () {
                        var e = this;
                        "fade" === e.params.effect && e.fadeEffect.setTranslate()
                    },
                    setTransition: function (e) {
                        var t = this;
                        "fade" === t.params.effect && t.fadeEffect.setTransition(e)
                    }
                }
            },
            Rt = {
                setTranslate: function () {
                    var t, n = this,
                        i = n.$el,
                        r = n.$wrapperEl,
                        a = n.slides,
                        s = n.width,
                        o = n.height,
                        l = n.rtlTranslate,
                        d = n.size,
                        u = n.params.cubeEffect,
                        c = n.isHorizontal(),
                        p = n.virtual && n.params.virtual.enabled,
                        f = 0;
                    u.shadow && (c ? (t = r.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), r.append(t)), t.css({
                        height: s + "px"
                    })) : (t = i.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t))));
                    for (var h = 0; h < a.length; h += 1) {
                        var v = a.eq(h),
                            m = h;
                        p && (m = parseInt(v.attr("data-swiper-slide-index"), 10));
                        var g = 90 * m,
                            y = Math.floor(g / 360);
                        l && (g = -g, y = Math.floor(-g / 360));
                        var b = Math.max(Math.min(v[0].progress, 1), -1),
                            x = 0,
                            w = 0,
                            T = 0;
                        m % 4 == 0 ? (x = 4 * -y * d, T = 0) : (m - 1) % 4 == 0 ? (x = 0, T = 4 * -y * d) : (m - 2) % 4 == 0 ? (x = d + 4 * y * d, T = d) : (m - 3) % 4 == 0 && (x = -d, T = 3 * d + 4 * d * y), l && (x = -x), c || (w = x, x = 0);
                        var E = "rotateX(" + (c ? 0 : -g) + "deg) rotateY(" + (c ? g : 0) + "deg) translate3d(" + x + "px, " + w + "px, " + T + "px)";
                        if (b <= 1 && b > -1 && (f = 90 * m + 90 * b, l && (f = 90 * -m - 90 * b)), v.transform(E), u.slideShadows) {
                            var C = c ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                                S = c ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                            0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), v.append(C)), 0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), v.append(S)), C.length && (C[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                        }
                    }
                    if (r.css({
                        "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                        "transform-origin": "50% 50% -" + d / 2 + "px"
                    }), u.shadow)
                        if (c) t.transform("translate3d(0px, " + (s / 2 + u.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
                        else {
                            var k = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                                M = 1.5 - (Math.sin(2 * k * Math.PI / 360) / 2 + Math.cos(2 * k * Math.PI / 360) / 2),
                                A = u.shadowScale,
                                P = u.shadowScale / M,
                                L = u.shadowOffset;
                            t.transform("scale3d(" + A + ", 1, " + P + ") translate3d(0px, " + (o / 2 + L) + "px, " + -o / 2 / P + "px) rotateX(-90deg)")
                        }
                    var z = Qe.isSafari || Qe.isUiWebView ? -d / 2 : 0;
                    r.transform("translate3d(0px,0," + z + "px) rotateX(" + (n.isHorizontal() ? 0 : f) + "deg) rotateY(" + (n.isHorizontal() ? -f : 0) + "deg)")
                },
                setTransition: function (e) {
                    var t = this,
                        n = t.$el;
                    t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
                }
            },
            Ft = {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        cubeEffect: {
                            setTranslate: Rt.setTranslate.bind(e),
                            setTransition: Rt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        if ("cube" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0
                            };
                            je.extend(e.params, t), je.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function () {
                        var e = this;
                        "cube" === e.params.effect && e.cubeEffect.setTranslate()
                    },
                    setTransition: function (e) {
                        var t = this;
                        "cube" === t.params.effect && t.cubeEffect.setTransition(e)
                    }
                }
            },
            Gt = {
                setTranslate: function () {
                    for (var t = this, n = t.slides, i = t.rtlTranslate, r = 0; r < n.length; r += 1) {
                        var a = n.eq(r),
                            s = a[0].progress;
                        t.params.flipEffect.limitRotation && (s = Math.max(Math.min(a[0].progress, 1), -1));
                        var o = a[0].swiperSlideOffset,
                            l = -180 * s,
                            d = l,
                            u = 0,
                            c = -o,
                            p = 0;
                        if (t.isHorizontal() ? i && (d = -d) : (p = c, c = 0, u = -d, d = 0), a[0].style.zIndex = -Math.abs(Math.round(s)) + n.length, t.params.flipEffect.slideShadows) {
                            var f = t.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                h = t.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                            0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), a.append(f)), 0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(h)), f.length && (f[0].style.opacity = Math.max(-s, 0)), h.length && (h[0].style.opacity = Math.max(s, 0))
                        }
                        a.transform("translate3d(" + c + "px, " + p + "px, 0px) rotateX(" + u + "deg) rotateY(" + d + "deg)")
                    }
                },
                setTransition: function (e) {
                    var t = this,
                        n = t.slides,
                        i = t.activeIndex,
                        r = t.$wrapperEl;
                    if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                        var a = !1;
                        n.eq(i).transitionEnd(function () {
                            if (!a && t && !t.destroyed) {
                                a = !0, t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) r.trigger(e[n])
                            }
                        })
                    }
                }
            },
            Wt = {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        flipEffect: {
                            setTranslate: Gt.setTranslate.bind(e),
                            setTransition: Gt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        if ("flip" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            je.extend(e.params, t), je.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function () {
                        var e = this;
                        "flip" === e.params.effect && e.flipEffect.setTranslate()
                    },
                    setTransition: function (e) {
                        var t = this;
                        "flip" === t.params.effect && t.flipEffect.setTransition(e)
                    }
                }
            },
            Xt = {
                setTranslate: function () {
                    for (var t = this, n = t.width, i = t.height, r = t.slides, a = t.$wrapperEl, s = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), d = t.translate, u = l ? n / 2 - d : i / 2 - d, c = l ? o.rotate : -o.rotate, p = o.depth, f = 0, h = r.length; f < h; f += 1) {
                        var v = r.eq(f),
                            m = s[f],
                            g = v[0].swiperSlideOffset,
                            y = (u - g - m / 2) / m * o.modifier,
                            b = l ? c * y : 0,
                            x = l ? 0 : c * y,
                            w = -p * Math.abs(y),
                            T = l ? 0 : o.stretch * y,
                            E = l ? o.stretch * y : 0;
                        Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(x) < .001 && (x = 0);
                        var C = "translate3d(" + E + "px," + T + "px," + w + "px)  rotateX(" + x + "deg) rotateY(" + b + "deg)";
                        if (v.transform(C), v[0].style.zIndex = 1 - Math.abs(Math.round(y)), o.slideShadows) {
                            var S = l ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                                k = l ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                            0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), v.append(S)), 0 === k.length && (k = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), v.append(k)), S.length && (S[0].style.opacity = y > 0 ? y : 0), k.length && (k[0].style.opacity = -y > 0 ? -y : 0)
                        }
                    }
                    if (He.pointerEvents || He.prefixedPointerEvents) {
                        a[0].style.perspectiveOrigin = u + "px 50%"
                    }
                },
                setTransition: function (e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            },
            Vt = {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        coverflowEffect: {
                            setTranslate: Xt.setTranslate.bind(e),
                            setTransition: Xt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate: function () {
                        var e = this;
                        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                    },
                    setTransition: function (e) {
                        var t = this;
                        "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
                    }
                }
            },
            Yt = {
                init: function () {
                    var e = this,
                        t = e.params,
                        n = t.thumbs,
                        i = e.constructor;
                    n.swiper instanceof i ? (e.thumbs.swiper = n.swiper, je.extend(e.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), je.extend(e.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })) : je.isObject(n.swiper) && (e.thumbs.swiper = new i(je.extend({}, n.swiper, {
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
                },
                onThumbClick: function () {
                    var t = this,
                        n = t.thumbs.swiper;
                    if (n) {
                        var i = n.clickedIndex,
                            r = n.clickedSlide;
                        if (!(r && e(r).hasClass(t.params.thumbs.slideThumbActiveClass) || void 0 === i || null === i)) {
                            var a;
                            if (a = n.params.loop ? parseInt(e(n.clickedSlide).attr("data-swiper-slide-index"), 10) : i, t.params.loop) {
                                var s = t.activeIndex;
                                t.slides.eq(s).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, s = t.activeIndex);
                                var o = t.slides.eq(s).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                                    l = t.slides.eq(s).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                                a = void 0 === o ? l : void 0 === l ? o : l - s < s - o ? l : o
                            }
                            t.slideTo(a)
                        }
                    }
                },
                update: function (e) {
                    var t = this,
                        n = t.thumbs.swiper;
                    if (n) {
                        var i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView;
                        if (t.realIndex !== n.realIndex) {
                            var r, a = n.activeIndex;
                            if (n.params.loop) {
                                n.slides.eq(a).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, a = n.activeIndex);
                                var s = n.slides.eq(a).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                    o = n.slides.eq(a).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                                r = void 0 === s ? o : void 0 === o ? s : o - a == a - s ? a : o - a < a - s ? o : s
                            } else r = t.realIndex;
                            n.visibleSlidesIndexes.indexOf(r) < 0 && (n.params.centeredSlides ? r = r > a ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > a && (r = r - i + 1), n.slideTo(r, e ? 0 : void 0))
                        }
                        var l = 1,
                            d = t.params.thumbs.slideThumbActiveClass;
                        if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (l = t.params.slidesPerView), n.slides.removeClass(d), n.params.loop)
                            for (var u = 0; u < l; u += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + u) + '"]').addClass(d);
                        else
                            for (var c = 0; c < l; c += 1) n.slides.eq(t.realIndex + c).addClass(d)
                    }
                }
            },
            _t = {
                name: "thumbs",
                params: {
                    thumbs: {
                        swiper: null,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs"
                    }
                },
                create: function () {
                    var e = this;
                    je.extend(e, {
                        thumbs: {
                            swiper: null,
                            init: Yt.init.bind(e),
                            update: Yt.update.bind(e),
                            onThumbClick: Yt.onThumbClick.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var e = this,
                            t = e.params,
                            n = t.thumbs;
                        n && n.swiper && (e.thumbs.init(), e.thumbs.update(!0))
                    },
                    slideChange: function () {
                        var e = this;
                        e.thumbs.swiper && e.thumbs.update()
                    },
                    update: function () {
                        var e = this;
                        e.thumbs.swiper && e.thumbs.update()
                    },
                    resize: function () {
                        var e = this;
                        e.thumbs.swiper && e.thumbs.update()
                    },
                    observerUpdate: function () {
                        var e = this;
                        e.thumbs.swiper && e.thumbs.update()
                    },
                    setTransition: function (e) {
                        var t = this,
                            n = t.thumbs.swiper;
                        n && n.setTransition(e)
                    },
                    beforeDestroy: function () {
                        var e = this,
                            t = e.thumbs.swiper;
                        t && e.thumbs.swiperCreated && t && t.destroy()
                    }
                }
            },
            Ut = [at, st, ot, lt, ut, pt, ht, mt, yt, xt, Tt, Ct, kt, At, Lt, Dt, It, Nt, Ht, qt, Ft, Wt, Vt, _t];
        return void 0 === rt.use && (rt.use = rt.Class.use, rt.installModule = rt.Class.installModule), rt.use(Ut), rt
    })
}, function (e, t, n) {
    var i;
    ! function (e) {
        var t = navigator.userAgent;
        e.HTMLPictureElement && /ecko/.test(t) && t.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function () {
            var t, n = document.createElement("source"),
                i = function (e) {
                    var t, i, r = e.parentNode;
                    "PICTURE" === r.nodeName.toUpperCase() ? (t = n.cloneNode(), r.insertBefore(t, r.firstElementChild), setTimeout(function () {
                        r.removeChild(t)
                    })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, i = e.sizes, e.sizes += ",100vw", setTimeout(function () {
                        e.sizes = i
                    }))
                },
                r = function () {
                    var e, t = document.querySelectorAll("picture > img, img[srcset][sizes]");
                    for (e = 0; e < t.length; e++) i(t[e])
                },
                a = function () {
                    clearTimeout(t), t = setTimeout(r, 99)
                },
                s = e.matchMedia && matchMedia("(orientation: landscape)"),
                o = function () {
                    a(), s && s.addListener && s.addListener(a)
                };
            return n.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? o() : document.addEventListener("DOMContentLoaded", o), a
        }())
    }(window),
        function (r, a, s) {
            "use strict";

            function o(e) {
                return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
            }

            function l() {
                j = !1, q = r.devicePixelRatio, H = {}, B = {}, x.DPR = q || 1, R.width = Math.max(r.innerWidth || 0, M.clientWidth), R.height = Math.max(r.innerHeight || 0, M.clientHeight), R.vw = R.width / 100, R.vh = R.height / 100, b = [R.height, R.width, q].join("-"), R.em = x.getEmValue(), R.rem = R.em
            }

            function d(e, t, n, i) {
                var r, a, s, o;
                return "saveData" === P.algorithm ? e > 2.7 ? o = n + 1 : (a = t - n, r = Math.pow(e - .6, 1.5), s = a * r, i && (s += .1 * r), o = e + s) : o = n > 1 ? Math.sqrt(e * t) : e, o > n
            }

            function u(e) {
                var t, n = x.getSet(e),
                    i = !1;
                "pending" !== n && (i = b, n && (t = x.setRes(n), x.applySetCandidate(t, e))), e[x.ns].evaled = i
            }

            function c(e, t) {
                return e.res - t.res
            }

            function p(e, t, n) {
                var i;
                return !n && t && (n = e[x.ns].sets, n = n && n[n.length - 1]), i = f(t, n), i && (t = x.makeUrl(t), e[x.ns].curSrc = t, e[x.ns].curCan = i, i.res || Z(i, i.set.sizes)), i
            }

            function f(e, t) {
                var n, i, r;
                if (e && t)
                    for (r = x.parseSet(t), e = x.makeUrl(e), n = 0; n < r.length; n++)
                        if (e === x.makeUrl(r[n].url)) {
                            i = r[n];
                            break
                        }
                return i
            }

            function h(e, t) {
                var n, i, r, a, s = e.getElementsByTagName("source");
                for (n = 0, i = s.length; n < i; n++) r = s[n], r[x.ns] = !0, (a = r.getAttribute("srcset")) && t.push({
                    srcset: a,
                    media: r.getAttribute("media"),
                    type: r.getAttribute("type"),
                    sizes: r.getAttribute("sizes")
                })
            }

            function v(e, t) {
                function n(t) {
                    var n, i = t.exec(e.substring(c));
                    if (i) return n = i[0], c += n.length, n
                }

                function i() {
                    var e, n, i, s, o, l, d, u, c, f = !1,
                        h = {};
                    for (s = 0; s < a.length; s++) o = a[s], l = o[o.length - 1], d = o.substring(0, o.length - 1), u = parseInt(d, 10), c = parseFloat(d), _.test(d) && "w" === l ? ((e || n) && (f = !0), 0 === u ? f = !0 : e = u) : U.test(d) && "x" === l ? ((e || n || i) && (f = !0), c < 0 ? f = !0 : n = c) : _.test(d) && "h" === l ? ((i || n) && (f = !0), 0 === u ? f = !0 : i = u) : f = !0;
                    f || (h.url = r, e && (h.w = e), n && (h.d = n), i && (h.h = i), i || n || e || (h.d = 1), 1 === h.d && (t.has1x = !0), h.set = t, p.push(h))
                }
                for (var r, a, s, l, d, u = e.length, c = 0, p = [];;) {
                    if (n(X), c >= u) return p;
                    r = n(V), a = [], "," === r.slice(-1) ? (r = r.replace(Y, ""), i()) : function () {
                        for (n(W), s = "", l = "in descriptor";;) {
                            if (d = e.charAt(c), "in descriptor" === l)
                                if (o(d)) s && (a.push(s), s = "", l = "after descriptor");
                                else {
                                    if ("," === d) return c += 1, s && a.push(s), void i();
                                    if ("(" === d) s += d, l = "in parens";
                                    else {
                                        if ("" === d) return s && a.push(s), void i();
                                        s += d
                                    }
                                }
                            else if ("in parens" === l)
                                if (")" === d) s += d, l = "in descriptor";
                                else {
                                    if ("" === d) return a.push(s), void i();
                                    s += d
                                }
                            else if ("after descriptor" === l)
                                if (o(d));
                                else {
                                    if ("" === d) return void i();
                                    l = "in descriptor", c -= 1
                                }
                            c += 1
                        }
                    }()
                }
            }

            function m(e) {
                var t, n, i, r, a, s, l = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                    d = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
                for (n = function (e) {
                    function t() {
                        r && (a.push(r), r = "")
                    }

                    function n() {
                        a[0] && (s.push(a), a = [])
                    }
                    for (var i, r = "", a = [], s = [], l = 0, d = 0, u = !1;;) {
                        if ("" === (i = e.charAt(d))) return t(), n(), s;
                        if (u) {
                            if ("*" === i && "/" === e[d + 1]) {
                                u = !1, d += 2, t();
                                continue
                            }
                            d += 1
                        } else {
                            if (o(i)) {
                                if (e.charAt(d - 1) && o(e.charAt(d - 1)) || !r) {
                                    d += 1;
                                    continue
                                }
                                if (0 === l) {
                                    t(), d += 1;
                                    continue
                                }
                                i = " "
                            } else if ("(" === i) l += 1;
                            else if (")" === i) l -= 1;
                            else {
                                if ("," === i) {
                                    t(), n(), d += 1;
                                    continue
                                }
                                if ("/" === i && "*" === e.charAt(d + 1)) {
                                    u = !0, d += 2;
                                    continue
                                }
                            }
                            r += i, d += 1
                        }
                    }
                }(e), i = n.length, t = 0; t < i; t++)
                    if (r = n[t], a = r[r.length - 1], function (e) {
                        return !!(l.test(e) && parseFloat(e) >= 0) || (!!d.test(e) || ("0" === e || "-0" === e || "+0" === e))
                    }(a)) {
                        if (s = a, r.pop(), 0 === r.length) return s;
                        if (r = r.join(" "), x.matchesMedia(r)) return s
                    }
                return "100vw"
            }
            a.createElement("picture");
            var g, y, b, x = {},
                w = !1,
                T = function () {},
                E = a.createElement("img"),
                C = E.getAttribute,
                S = E.setAttribute,
                k = E.removeAttribute,
                M = a.documentElement,
                A = {},
                P = {
                    algorithm: ""
                },
                L = navigator.userAgent,
                z = /rident/.test(L) || /ecko/.test(L) && L.match(/rv\:(\d+)/) && RegExp.$1 > 35,
                D = "currentSrc",
                $ = /\s+\+?\d+(e\d+)?w/,
                I = /(\([^)]+\))?\s*(.+)/,
                O = r.picturefillCFG,
                N = "font-size:100%!important;",
                j = !0,
                H = {},
                B = {},
                q = r.devicePixelRatio,
                R = {
                    px: 1,
                    in: 96
                },
                F = a.createElement("a"),
                G = !1,
                W = /^[ \t\n\r\u000c]+/,
                X = /^[, \t\n\r\u000c]+/,
                V = /^[^ \t\n\r\u000c]+/,
                Y = /[,]+$/,
                _ = /^\d+$/,
                U = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
                K = function (e, t, n, i) {
                    e.addEventListener ? e.addEventListener(t, n, i || !1) : e.attachEvent && e.attachEvent("on" + t, n)
                },
                Q = function (e) {
                    var t = {};
                    return function (n) {
                        return n in t || (t[n] = e(n)), t[n]
                    }
                },
                J = function () {
                    var e = /^([\d\.]+)(em|vw|px)$/,
                        t = function () {
                            for (var e = arguments, t = 0, n = e[0]; ++t in e;) n = n.replace(e[t], e[++t]);
                            return n
                        },
                        n = Q(function (e) {
                            return "return " + t((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                        });
                    return function (t, i) {
                        var r;
                        if (!(t in H))
                            if (H[t] = !1, i && (r = t.match(e))) H[t] = r[1] * R[r[2]];
                            else try {
                                H[t] = new Function("e", n(t))(R)
                            } catch (e) {}
                        return H[t]
                    }
                }(),
                Z = function (e, t) {
                    return e.w ? (e.cWidth = x.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e
                },
                ee = function (e) {
                    if (w) {
                        var t, n, i, r = e || {};
                        if (r.elements && 1 === r.elements.nodeType && ("IMG" === r.elements.nodeName.toUpperCase() ? r.elements = [r.elements] : (r.context = r.elements, r.elements = null)), t = r.elements || x.qsa(r.context || a, r.reevaluate || r.reselect ? x.sel : x.selShort), i = t.length) {
                            for (x.setupRun(r), G = !0, n = 0; n < i; n++) x.fillImg(t[n], r);
                            x.teardownRun(r)
                        }
                    }
                };
            r.console && console.warn, D in E || (D = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), x.ns = ("pf" + (new Date).getTime()).substr(0, 9), x.supSrcset = "srcset" in E, x.supSizes = "sizes" in E, x.supPicture = !!r.HTMLPictureElement, x.supSrcset && x.supPicture && !x.supSizes && function (e) {
                E.srcset = "data:,a", e.src = "data:,a", x.supSrcset = E.complete === e.complete, x.supPicture = x.supSrcset && x.supPicture
            }(a.createElement("img")), x.supSrcset && !x.supSizes ? function () {
                var e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    t = a.createElement("img"),
                    n = function () {
                        2 === t.width && (x.supSizes = !0), y = x.supSrcset && !x.supSizes, w = !0, setTimeout(ee)
                    };
                t.onload = n, t.onerror = n, t.setAttribute("sizes", "9px"), t.srcset = e + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", t.src = e
            }() : w = !0, x.selShort = "picture>img,img[srcset]", x.sel = x.selShort, x.cfg = P, x.DPR = q || 1, x.u = R, x.types = A, x.setSize = T, x.makeUrl = Q(function (e) {
                return F.href = e, F.href
            }), x.qsa = function (e, t) {
                return "querySelector" in e ? e.querySelectorAll(t) : []
            }, x.matchesMedia = function () {
                return r.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? x.matchesMedia = function (e) {
                    return !e || matchMedia(e).matches
                } : x.matchesMedia = x.mMQ, x.matchesMedia.apply(this, arguments)
            }, x.mMQ = function (e) {
                return !e || J(e)
            }, x.calcLength = function (e) {
                var t = J(e, !0) || !1;
                return t < 0 && (t = !1), t
            }, x.supportsType = function (e) {
                return !e || A[e]
            }, x.parseSize = Q(function (e) {
                var t = (e || "").match(I);
                return {
                    media: t && t[1],
                    length: t && t[2]
                }
            }), x.parseSet = function (e) {
                return e.cands || (e.cands = v(e.srcset, e)), e.cands
            }, x.getEmValue = function () {
                var e;
                if (!g && (e = a.body)) {
                    var t = a.createElement("div"),
                        n = M.style.cssText,
                        i = e.style.cssText;
                    t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", M.style.cssText = N, e.style.cssText = N, e.appendChild(t), g = t.offsetWidth, e.removeChild(t), g = parseFloat(g, 10), M.style.cssText = n, e.style.cssText = i
                }
                return g || 16
            }, x.calcListLength = function (e) {
                if (!(e in B) || P.uT) {
                    var t = x.calcLength(m(e));
                    B[e] = t || R.width
                }
                return B[e]
            }, x.setRes = function (e) {
                var t;
                if (e) {
                    t = x.parseSet(e);
                    for (var n = 0, i = t.length; n < i; n++) Z(t[n], e.sizes)
                }
                return t
            }, x.setRes.res = Z, x.applySetCandidate = function (e, t) {
                if (e.length) {
                    var n, i, r, a, s, o, l, u, f, h = t[x.ns],
                        v = x.DPR;
                    if (o = h.curSrc || t[D], l = h.curCan || p(t, o, e[0].set), l && l.set === e[0].set && ((f = z && !t.complete && l.res - .1 > v) || (l.cached = !0, l.res >= v && (s = l))), !s)
                        for (e.sort(c), a = e.length, s = e[a - 1], i = 0; i < a; i++)
                            if (n = e[i], n.res >= v) {
                                r = i - 1, s = e[r] && (f || o !== x.makeUrl(n.url)) && d(e[r].res, n.res, v, e[r].cached) ? e[r] : n;
                                break
                            }
                    s && (u = x.makeUrl(s.url), h.curSrc = u, h.curCan = s, u !== o && x.setSrc(t, s), x.setSize(t))
                }
            }, x.setSrc = function (e, t) {
                var n;
                e.src = t.url, "image/svg+xml" === t.set.type && (n = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = n))
            }, x.getSet = function (e) {
                var t, n, i, r = !1,
                    a = e[x.ns].sets;
                for (t = 0; t < a.length && !r; t++)
                    if (n = a[t], n.srcset && x.matchesMedia(n.media) && (i = x.supportsType(n.type))) {
                        "pending" === i && (n = i), r = n;
                        break
                    }
                return r
            }, x.parseSets = function (e, t, n) {
                var i, r, a, s, o = t && "PICTURE" === t.nodeName.toUpperCase(),
                    l = e[x.ns];
                (void 0 === l.src || n.src) && (l.src = C.call(e, "src"), l.src ? S.call(e, "data-pfsrc", l.src) : k.call(e, "data-pfsrc")), (void 0 === l.srcset || n.srcset || !x.supSrcset || e.srcset) && (i = C.call(e, "srcset"), l.srcset = i, s = !0), l.sets = [], o && (l.pic = !0, h(t, l.sets)), l.srcset ? (r = {
                    srcset: l.srcset,
                    sizes: C.call(e, "sizes")
                }, l.sets.push(r), (a = (y || l.src) && $.test(l.srcset || "")) || !l.src || f(l.src, r) || r.has1x || (r.srcset += ", " + l.src, r.cands.push({
                    url: l.src,
                    d: 1,
                    set: r
                }))) : l.src && l.sets.push({
                    srcset: l.src,
                    sizes: null
                }), l.curCan = null, l.curSrc = void 0, l.supported = !(o || r && !x.supSrcset || a && !x.supSizes), s && x.supSrcset && !l.supported && (i ? (S.call(e, "data-pfsrcset", i), e.srcset = "") : k.call(e, "data-pfsrcset")), l.supported && !l.srcset && (!l.src && e.src || e.src !== x.makeUrl(l.src)) && (null === l.src ? e.removeAttribute("src") : e.src = l.src), l.parsed = !0
            }, x.fillImg = function (e, t) {
                var n, i = t.reselect || t.reevaluate;
                e[x.ns] || (e[x.ns] = {}), n = e[x.ns], (i || n.evaled !== b) && (n.parsed && !t.reevaluate || x.parseSets(e, e.parentNode, t), n.supported ? n.evaled = b : u(e))
            }, x.setupRun = function () {
                G && !j && q === r.devicePixelRatio || l()
            }, x.supPicture ? (ee = T, x.fillImg = T) : function () {
                var e, t = r.attachEvent ? /d$|^c/ : /d$|^c|^i/,
                    n = function () {
                        var r = a.readyState || "";
                        i = setTimeout(n, "loading" === r ? 200 : 999), a.body && (x.fillImgs(), (e = e || t.test(r)) && clearTimeout(i))
                    },
                    i = setTimeout(n, a.body ? 9 : 99),
                    s = M.clientHeight,
                    o = function () {
                        j = Math.max(r.innerWidth || 0, M.clientWidth) !== R.width || M.clientHeight !== s, s = M.clientHeight, j && x.fillImgs()
                    };
                K(r, "resize", function (e, t) {
                    var n, i, r = function () {
                        var a = new Date - i;
                        a < t ? n = setTimeout(r, t - a) : (n = null, e())
                    };
                    return function () {
                        i = new Date, n || (n = setTimeout(r, t))
                    }
                }(o, 99)), K(a, "readystatechange", n)
            }(), x.picturefill = ee, x.fillImgs = ee, x.teardownRun = T, ee._ = x, r.picturefillCFG = {
                pf: x,
                push: function (e) {
                    var t = e.shift();
                    "function" == typeof x[t] ? x[t].apply(x, e) : (P[t] = e[0], G && x.fillImgs({
                        reselect: !0
                    }))
                }
            };
            for (; O && O.length;) r.picturefillCFG.push(O.shift());
            r.picturefill = ee, "object" == typeof e && "object" == typeof e.exports ? e.exports = ee : void 0 !== (i = function () {
                return ee
            }.call(t, n, t, e)) && (e.exports = i), x.supPicture || (A["image/webp"] = function (e, t) {
                var n = new r.Image;
                return n.onerror = function () {
                    A[e] = !1, ee()
                }, n.onload = function () {
                    A[e] = 1 === n.width, ee()
                }, n.src = t, "pending"
            }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
        }(window, document)
}]);