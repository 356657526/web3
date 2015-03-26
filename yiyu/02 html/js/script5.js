! function(e) {
    e.fn.fullpage = function(n) {
        function o() {
            e(".fp-section").each(function() {
                var n = e(this).find(".fp-slide");
                n.length ? n.each(function() {
                    m(e(this))
                }) : m(e(this))
            }), e.isFunction(n.afterRender) && n.afterRender.call(this)
        }

        function i() {
            if (!n.autoScrolling) {
                var o = e(window).scrollTop(),
                    i = e(".fp-section").map(function() {
                        return e(this).offset().top < o + 100 ? e(this) : void 0
                    }),
                    i = i[i.length - 1];
                if (!i.hasClass("active")) {
                    var t = e(".fp-section.active").index(".fp-section") + 1;
                    Y = !0;
                    var l = g(i);
                    i.addClass("active").siblings().removeClass("active");
                    var s = i.data("anchor");
                    e.isFunction(n.onLeave) && n.onLeave.call(this, t, i.index(".fp-section") + 1, l), e.isFunction(n.afterLoad) && n.afterLoad.call(this, s, i.index(".fp-section") + 1), h(s), u(s, 0), n.anchors.length && !q && (F = s, location.hash = s), clearTimeout(U), U = setTimeout(function() {
                        Y = !1
                    }, 100)
                }
            }
        }

        function t(o) {
            var i = o.originalEvent;
            if (n.autoScrolling && o.preventDefault(), !l(o.target) && (o = e(".fp-section.active"), !q && !R))
                if (i = k(i), Q = i.y, X = i.x, o.find(".fp-slides").length && Math.abs(K - X) > Math.abs(j - Q)) Math.abs(K - X) > e(window).width() / 100 * n.touchSensitivity && (K > X ? e.fn.fullpage.moveSlideRight() : e.fn.fullpage.moveSlideLeft());
                else if (n.autoScrolling && (i = o.find(".fp-slides").length ? o.find(".fp-slide.active").find(".fp-scrollable") : o.find(".fp-scrollable"), Math.abs(j - Q) > e(window).height() / 100 * n.touchSensitivity))
                if (j > Q)
                    if (0 < i.length) {
                        if (!v("bottom", i)) return !0;
                        e.fn.fullpage.moveSectionDown()
                    } else e.fn.fullpage.moveSectionDown();
            else if (Q > j)
                if (0 < i.length) {
                    if (!v("top", i)) return !0;
                    e.fn.fullpage.moveSectionUp()
                } else e.fn.fullpage.moveSectionUp()
        }

        function l(o, i) {
            i = i || 0;
            var t = e(o).parent();
            return i < n.normalScrollElementTouchThreshold && t.is(n.normalScrollElements) ? !0 : i == n.normalScrollElementTouchThreshold ? !1 : l(t, ++i)
        }

        function s(e) {
            e = k(e.originalEvent), j = e.y, K = e.x
        }

        function a(o) {
            if (n.autoScrolling) {
                o = window.event || o, o = Math.max(-1, Math.min(1, o.wheelDelta || -o.deltaY || -o.detail));
                var i;
                if (i = e(".fp-section.active"), !q)
                    if (i = i.find(".fp-slides").length ? i.find(".fp-slide.active").find(".fp-scrollable") : i.find(".fp-scrollable"), 0 > o)
                        if (0 < i.length) {
                            if (!v("bottom", i)) return !0;
                            e.fn.fullpage.moveSectionDown()
                        } else e.fn.fullpage.moveSectionDown();
                else if (0 < i.length) {
                    if (!v("top", i)) return !0;
                    e.fn.fullpage.moveSectionUp()
                } else e.fn.fullpage.moveSectionUp();
                return !1
            }
        }

        function f(o) {
            var i = e(".fp-section.active").find(".fp-slides");
            if (i.length && !R) {
                var t = i.find(".fp-slide.active"),
                    l = null,
                    l = "prev" === o ? t.prev(".fp-slide") : t.next(".fp-slide");
                if (!l.length) {
                    if (!n.loopHorizontal) return;
                    l = t.siblings("prev" === o ? ":last" : ":first")
                }
                R = !0, d(i, l)
            }
        }

        function c(o, i, t) {
            var l = {},
                s = o.position();
            if ("undefined" != typeof s) {
                var s = s.top,
                    a = g(o),
                    f = o.data("anchor"),
                    c = o.index(".fp-section"),
                    r = o.find(".fp-slide.active"),
                    d = e(".fp-section.active"),
                    p = d.index(".fp-section") + 1,
                    v = H;
                if (r.length) var m = r.data("anchor"),
                    w = r.index();
                if (n.autoScrolling && n.continuousVertical && "undefined" != typeof t && (!t && "up" == a || t && "down" == a)) {
                    t ? e(".fp-section.active").before(d.nextAll(".fp-section")) : e(".fp-section.active").after(d.prevAll(".fp-section").get().reverse()), M(e(".fp-section.active").position().top);
                    var S = d,
                        s = o.position(),
                        s = s.top,
                        a = g(o)
                }
                o.addClass("active").siblings().removeClass("active"), q = !0, "undefined" != typeof f && L(w, m, f), n.autoScrolling ? (l.top = -s, o = "." + W) : (l.scrollTop = s, o = "html, body");
                var b = function() {
                    S && S.length && (t ? e(".fp-section:first").before(S) : e(".fp-section:last").after(S), M(e(".fp-section.active").position().top))
                };
                n.css3 && n.autoScrolling ? (e.isFunction(n.onLeave) && !v && n.onLeave.call(this, p, c + 1, a), C("translate3d(0px, -" + s + "px, 0px)", !0), setTimeout(function() {
                    b(), e.isFunction(n.afterLoad) && !v && n.afterLoad.call(this, f, c + 1), setTimeout(function() {
                        q = !1, e.isFunction(i) && i.call(this)
                    }, z)
                }, n.scrollingSpeed)) : (e.isFunction(n.onLeave) && !v && n.onLeave.call(this, p, c + 1, a), e(o).animate(l, n.scrollingSpeed, n.easing, function() {
                    b(), e.isFunction(n.afterLoad) && !v && n.afterLoad.call(this, f, c + 1), setTimeout(function() {
                        q = !1, e.isFunction(i) && i.call(this)
                    }, z)
                })), F = f, n.autoScrolling && (h(f), u(f, c))
            }
        }

        function r() {
            if (!Y) {
                var e = window.location.hash.replace("#", "").split("/"),
                    n = e[0],
                    e = e[1];
                if (n.length) {
                    var o = "undefined" == typeof F,
                        i = "undefined" == typeof F && "undefined" == typeof e && !R;
                    (n && n !== F && !o || i || !R && N != e) && x(n, e)
                }
            }
        }

        function d(o, i) {
            var t = i.position(),
                l = o.find(".fp-slidesContainer").parent(),
                s = i.index(),
                a = o.closest(".fp-section"),
                f = a.index(".fp-section"),
                c = a.data("anchor"),
                r = a.find(".fp-slidesNav"),
                d = i.data("anchor"),
                p = H;
            if (n.onSlideLeave) {
                var u, h = a.find(".fp-slide.active").index();
                u = h == s ? "none" : h > s ? "left" : "right", p || e.isFunction(n.onSlideLeave) && n.onSlideLeave.call(this, c, f + 1, h, u)
            }
            i.addClass("active").siblings().removeClass("active"), "undefined" == typeof d && (d = s), a.hasClass("active") && (n.loopHorizontal || (a.find(".fp-controlArrow.fp-prev").toggle(0 != s), a.find(".fp-controlArrow.fp-next").toggle(!i.is(":last-child"))), L(s, d, c)), n.css3 ? (t = "translate3d(-" + t.left + "px, 0px, 0px)", o.find(".fp-slidesContainer").toggleClass("fp-easing", 0 < n.scrollingSpeed).css(P(t)), setTimeout(function() {
                p || e.isFunction(n.afterSlideLoad) && n.afterSlideLoad.call(this, c, f + 1, d, s), R = !1
            }, n.scrollingSpeed, n.easing)) : l.animate({
                scrollLeft: t.left
            }, n.scrollingSpeed, n.easing, function() {
                p || e.isFunction(n.afterSlideLoad) && n.afterSlideLoad.call(this, c, f + 1, d, s), R = !1
            }), r.find(".active").removeClass("active"), r.find("li").eq(s).find("a").addClass("active")
        }

        function p(n, o) {
            var i = 825,
                t = n;
            825 > n || 900 > o ? (900 > o && (t = o, i = 900), i = (100 * t / i).toFixed(2), e("body").css("font-size", i + "%")) : e("body").css("font-size", "100%")
        }

        function u(o, i) {
            n.navigation && (e("#fp-nav").find(".active").removeClass("active"), o ? e("#fp-nav").find('a[href="#' + o + '"]').addClass("active") : e("#fp-nav").find("li").eq(i).find("a").addClass("active"))
        }

        function h(o) {
            n.menu && (e(n.menu).find(".active").removeClass("active"), e(n.menu).find('[data-menuanchor="' + o + '"]').addClass("active"))
        }

        function v(e, n) {
            return "top" === e ? !n.scrollTop() : "bottom" === e ? n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0
        }

        function g(n) {
            var o = e(".fp-section.active").index(".fp-section");
            return n = n.index(".fp-section"), o > n ? "up" : "down"
        }

        function m(e) {
            e.css("overflow", "hidden");
            var o = e.closest(".fp-section"),
                i = e.find(".fp-scrollable");
            if (i.length) var t = i.get(0).scrollHeight;
            else t = e.get(0).scrollHeight, n.verticalCentered && (t = e.find(".fp-tableCell").get(0).scrollHeight);
            o = V - parseInt(o.css("padding-bottom")) - parseInt(o.css("padding-top")), t > o ? i.length ? i.css("height", o + "px").parent().css("height", o + "px") : (n.verticalCentered ? e.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />') : e.wrapInner('<div class="fp-scrollable" />'), e.find(".fp-scrollable").slimScroll({
                allowPageScroll: !0,
                height: o + "px",
                size: "10px",
                alwaysVisible: !0
            })) : w(e), e.css("overflow", "")
        }

        function w(e) {
            e.find(".fp-scrollable").children().first().unwrap().unwrap(), e.find(".slimScrollBar").remove(), e.find(".slimScrollRail").remove()
        }

        function S(e) {
            e.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + b(e) + 'px;" />')
        }

        function b(e) {
            var o = V;
            return (n.paddingTop || n.paddingBottom) && (o = e, o.hasClass("fp-section") || (o = e.closest(".fp-section")), e = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom")), o = V - e), o
        }

        function C(e, n) {
            I.toggleClass("fp-easing", n), I.css(P(e))
        }

        function x(n, o) {
            "undefined" == typeof o && (o = 0);
            var i = isNaN(n) ? e('[data-anchor="' + n + '"]') : e(".fp-section").eq(n - 1);
            n === F || i.hasClass("active") ? y(i, o) : c(i, function() {
                y(i, o)
            })
        }

        function y(e, n) {
            if ("undefined" != typeof n) {
                var o = e.find(".fp-slides"),
                    i = o.find('[data-anchor="' + n + '"]');
                i.length || (i = o.find(".fp-slide").eq(n)), i.length && d(o, i)
            }
        }

        function T(e, o) {
            e.append('<div class="fp-slidesNav"><ul></ul></div>');
            var i = e.find(".fp-slidesNav");
            i.addClass(n.slidesNavPosition);
            for (var t = 0; o > t; t++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
            i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass("active")
        }

        function L(e, o, i) {
            var t = "";
            n.anchors.length && (e ? ("undefined" != typeof i && (t = i), "undefined" == typeof o && (o = e), N = o, location.hash = t + "/" + o) : ("undefined" != typeof e && (N = o), location.hash = i))
        }

        function A() {
            var e, n = document.createElement("p"),
                o = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            document.body.insertBefore(n, null);
            for (var i in o) void 0 !== n.style[i] && (n.style[i] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(n).getPropertyValue(o[i]));
            return document.body.removeChild(n), void 0 !== e && 0 < e.length && "none" !== e
        }

        function E() {
            return window.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function k(e) {
            var n = [];
            return window.navigator.msPointerEnabled ? (n.y = e.pageY, n.x = e.pageX) : (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n
        }

        function M(e) {
            n.css3 ? C("translate3d(0px, -" + e + "px, 0px)", !1) : I.css("top", -e)
        }

        function P(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function B() {
            M(0), e("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(), e(".fp-section").css({
                height: "",
                "background-color": "",
                padding: ""
            }), e(".fp-slide").css({
                width: ""
            }), I.css({
                height: "",
                position: "",
                "-ms-touch-action": ""
            }), e(".fp-section, .fp-slide").each(function() {
                w(e(this)), e(this).removeClass("fp-table active")
            }), I.find(".fp-easing").removeClass("fp-easing"), I.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function() {
                e(this).replaceWith(this.childNodes)
            }), e("html, body").scrollTop(0), I.addClass("fullpage-used")
        }
        n = e.extend({
            verticalCentered: !0,
            resize: !0,
            sectionsColor: [],
            anchors: [],
            scrollingSpeed: 700,
            easing: "easeInQuart",
            menu: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationColor: "#000",
            navigationTooltips: [],
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            controlArrowColor: "#fff",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            autoScrolling: !0,
            scrollOverflow: !1,
            css3: !1,
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            normalScrollElements: null,
            keyboardScrolling: !0,
            touchSensitivity: 5,
            continuousVertical: !1,
            animateAnchor: !0,
            normalScrollElementTouchThreshold: 5,
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterSlideLoad: null,
            onSlideLeave: null
        }, n), n.continuousVertical && (n.loopTop || n.loopBottom) && (n.continuousVertical = !1, console && console.log && console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled"));
        var z = 600;
        e.fn.fullpage.setAutoScrolling = function(o) {
            n.autoScrolling = o, o = e(".fp-section.active"), n.autoScrolling ? (e("html, body").css({
                overflow: "hidden",
                height: "100%"
            }), o.length && M(o.position().top)) : (e("html, body").css({
                overflow: "auto",
                height: "auto"
            }), M(0), e("html, body").scrollTop(o.position().top))
        }, e.fn.fullpage.setScrollingSpeed = function(e) {
            n.scrollingSpeed = e
        }, e.fn.fullpage.setMouseWheelScrolling = function(e) {
            e ? document.addEventListener ? (document.addEventListener("mousewheel", a, !1), document.addEventListener("wheel", a, !1)) : document.attachEvent("onmousewheel", a) : document.addEventListener ? (document.removeEventListener("mousewheel", a, !1), document.removeEventListener("wheel", a, !1)) : document.detachEvent("onmousewheel", a)
        }, e.fn.fullpage.setAllowScrolling = function(n) {
            n ? (e.fn.fullpage.setMouseWheelScrolling(!0), D && (MSPointer = E(), e(document).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, s), e(document).off("touchmove " + MSPointer.move).on("touchmove " + MSPointer.move, t))) : (e.fn.fullpage.setMouseWheelScrolling(!1), D && (MSPointer = E(), e(document).off("touchstart " + MSPointer.down), e(document).off("touchmove " + MSPointer.move)))
        }, e.fn.fullpage.setKeyboardScrolling = function(e) {
            n.keyboardScrolling = e
        };
        var F, N, R = !1,
            D = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),
            I = e(this),
            V = e(window).height(),
            q = !1,
            H = !1,
            W = "fullpage-wrapper";
        if (e.fn.fullpage.setAllowScrolling(!0), n.css3 && (n.css3 = A()), e(this).length ? (I.css({
                height: "100%",
                position: "relative",
                "-ms-touch-action": "none"
            }), I.addClass(W)) : console.error("Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();"), e(n.sectionSelector).each(function() {
                e(this).addClass("fp-section")
            }), e(n.slideSelector).each(function() {
                e(this).addClass("fp-slide")
            }), n.navigation) {
            e("body").append('<div id="fp-nav"><ul></ul></div>');
            var O = e("#fp-nav");
            O.css("color", n.navigationColor), O.addClass(n.navigationPosition)
        }
        e(".fp-section").each(function(o) {
            var i = e(this),
                t = e(this).find(".fp-slide"),
                l = t.length;
            if (o || 0 !== e(".fp-section.active").length || e(this).addClass("active"), e(this).css("height", V + "px"), (n.paddingTop || n.paddingBottom) && e(this).css("padding", n.paddingTop + " 0 " + n.paddingBottom + " 0"), "undefined" != typeof n.sectionsColor[o] && e(this).css("background-color", n.sectionsColor[o]), "undefined" != typeof n.anchors[o] && e(this).attr("data-anchor", n.anchors[o]), n.navigation) {
                var s = "";
                n.anchors.length && (s = n.anchors[o]), o = n.navigationTooltips[o], "undefined" == typeof o && (o = ""), O.find("ul").append('<li data-tooltip="' + o + '"><a href="#' + s + '"><span></span></a></li>')
            }
            if (l > 1) {
                var s = 100 * l,
                    a = 100 / l;
                t.wrapAll('<div class="fp-slidesContainer" />'), t.parent().wrap('<div class="fp-slides" />'), e(this).find(".fp-slidesContainer").css("width", s + "%"), e(this).find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'), "#fff" != n.controlArrowColor && (e(this).find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " + n.controlArrowColor), e(this).find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + n.controlArrowColor + " transparent transparent")), n.loopHorizontal || e(this).find(".fp-controlArrow.fp-prev").hide(), n.slidesNavigation && T(e(this), l), t.each(function(o) {
                    o || 0 != i.find(".fp-slide.active").length || e(this).addClass("active"), e(this).css("width", a + "%"), n.verticalCentered && S(e(this))
                })
            } else n.verticalCentered && S(e(this))
        }).promise().done(function() {
            e.fn.fullpage.setAutoScrolling(n.autoScrolling);
            var i = e(".fp-section.active").find(".fp-slide.active");
            if (i.length && (0 != e(".fp-section.active").index(".fp-section") || 0 == e(".fp-section.active").index(".fp-section") && 0 != i.index())) {
                var t = n.scrollingSpeed;
                e.fn.fullpage.setScrollingSpeed(0), d(e(".fp-section.active").find(".fp-slides"), i), e.fn.fullpage.setScrollingSpeed(t)
            }
            n.fixedElements && n.css3 && e(n.fixedElements).appendTo("body"), n.navigation && (O.css("margin-top", "-" + O.height() / 2 + "px"), O.find("li").eq(e(".fp-section.active").index(".fp-section")).find("a").addClass("active")), n.menu && n.css3 && e(n.menu).closest(".fullpage-wrapper").length && e(n.menu).appendTo("body"), n.scrollOverflow ? (I.hasClass("fullpage-used") && o(), e(window).on("load", o)) : e.isFunction(n.afterRender) && n.afterRender.call(this), i = window.location.hash.replace("#", "").split("/")[0], i.length && (t = e('[data-anchor="' + i + '"]'), !n.animateAnchor && t.length && (n.autoScrolling ? M(t.position().top) : (M(0), e("html, body").scrollTop(t.position().top)), h(i), u(i, null), e.isFunction(n.afterLoad) && n.afterLoad.call(this, i, t.index(".fp-section") + 1), t.addClass("active").siblings().removeClass("active"))), e(window).on("load", function() {
                var e = window.location.hash.replace("#", "").split("/"),
                    n = e[0],
                    e = e[1];
                n && x(n, e)
            })
        });
        var U, Y = !1;
        e(window).on("scroll", i);
        var j = 0,
            K = 0,
            Q = 0,
            X = 0;
        e.fn.fullpage.moveSectionUp = function() {
            var o = e(".fp-section.active").prev(".fp-section");
            o.length || !n.loopTop && !n.continuousVertical || (o = e(".fp-section").last()), o.length && c(o, null, !0)
        }, e.fn.fullpage.moveSectionDown = function() {
            var o = e(".fp-section.active").next(".fp-section");
            o.length || !n.loopBottom && !n.continuousVertical || (o = e(".fp-section").first()), (0 < o.length || !o.length && (n.loopBottom || n.continuousVertical)) && c(o, null, !1)
        }, e.fn.fullpage.moveTo = function(n, o) {
            var i = "",
                i = isNaN(n) ? e('[data-anchor="' + n + '"]') : e(".fp-section").eq(n - 1);
            "undefined" != typeof o ? x(n, o) : 0 < i.length && c(i)
        }, e.fn.fullpage.moveSlideRight = function() {
            f("next")
        }, e.fn.fullpage.moveSlideLeft = function() {
            f("prev")
        }, e(window).on("hashchange", r), e(document).keydown(function(o) {
            if (n.keyboardScrolling && !q) switch (o.which) {
                case 38:
                case 33:
                    e.fn.fullpage.moveSectionUp();
                    break;
                case 40:
                case 34:
                    e.fn.fullpage.moveSectionDown();
                    break;
                case 36:
                    e.fn.fullpage.moveTo(1);
                    break;
                case 35:
                    e.fn.fullpage.moveTo(e(".fp-section").length);
                    break;
                case 37:
                    e.fn.fullpage.moveSlideLeft();
                    break;
                case 39:
                    e.fn.fullpage.moveSlideRight()
            }
        }), e(document).on("click", "#fp-nav a", function(n) {
            n.preventDefault(), n = e(this).parent().index(), c(e(".fp-section").eq(n))
        }), e(document).on({
            mouseenter: function() {
                var o = e(this).data("tooltip");
                e('<div class="fp-tooltip ' + n.navigationPosition + '">' + o + "</div>").hide().appendTo(e(this)).fadeIn(200)
            },
            mouseleave: function() {
                e(this).find(".fp-tooltip").fadeOut().remove()
            }
        }, "#fp-nav li"), n.normalScrollElements && (e(document).on("mouseover", n.normalScrollElements, function() {
            e.fn.fullpage.setMouseWheelScrolling(!1)
        }), e(document).on("mouseout", n.normalScrollElements, function() {
            e.fn.fullpage.setMouseWheelScrolling(!0)
        })), e(".fp-section").on("click", ".fp-controlArrow", function() {
            e(this).hasClass("fp-prev") ? e.fn.fullpage.moveSlideLeft() : e.fn.fullpage.moveSlideRight()
        }), e(".fp-section").on("click", ".toSlide", function(n) {
            n.preventDefault(), n = e(this).closest(".fp-section").find(".fp-slides"), n.find(".fp-slide.active");
            var o = null,
                o = n.find(".fp-slide").eq(e(this).data("index") - 1);
            0 < o.length && d(n, o)
        });
        var $;
        e(window).resize(function() {
            D ? e.fn.fullpage.reBuild() : (clearTimeout($), $ = setTimeout(e.fn.fullpage.reBuild, 500))
        }), e.fn.fullpage.reBuild = function() {
            H = !0;
            var o = e(window).width();
            V = e(window).height(), n.resize && p(V, o), e(".fp-section").each(function() {
                if (parseInt(e(this).css("padding-bottom")), parseInt(e(this).css("padding-top")), n.verticalCentered && e(this).find(".fp-tableCell").css("height", b(e(this)) + "px"), e(this).css("height", V + "px"), n.scrollOverflow) {
                    var o = e(this).find(".fp-slide");
                    o.length ? o.each(function() {
                        m(e(this))
                    }) : m(e(this))
                }
                o = e(this).find(".fp-slides"), o.length && d(o, o.find(".fp-slide.active"))
            }), e(".fp-section.active").position(), o = e(".fp-section.active"), o.index(".fp-section") && c(o), H = !1, e.isFunction(n.afterResize) && n.afterResize.call(this)
        }, e(document).on("click", ".fp-slidesNav a", function(n) {
            n.preventDefault(), n = e(this).closest(".fp-section").find(".fp-slides");
            var o = n.find(".fp-slide").eq(e(this).closest("li").index());
            d(n, o)
        }), e.fn.fullpage.destroy = function(o) {
            e.fn.fullpage.setAutoScrolling(!1), e.fn.fullpage.setAllowScrolling(!1), e.fn.fullpage.setKeyboardScrolling(!1), e(window).off("scroll", i).off("hashchange", r), e(document).off("click", "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", n.normalScrollElements).off("mouseout", n.normalScrollElements), e(".fp-section").off("click", ".fp-controlArrow").off("click", ".toSlide"), o && B()
        }
    }
}(jQuery);