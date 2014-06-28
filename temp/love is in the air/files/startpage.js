/*
	Dual licensed under MIT license and GPL.
 @author		Jan Paepke - e-mail@janpaepke.de

 @todo: bug: when cascading pins (pinning one element multiple times) and later removing them without reset, positioning errors occur.
 @todo: bug: having multiple scroll directions with cascaded pins doesn't work (one scroll vertical, one horizontal)
 @todo: bug: pin positioning problems with centered pins in IE9 (i.e. in examples)
 @toto: improvement: check if its possible to take the recalculation of the start point out of the scene update, while still making sure it is always up to date (performance)
 @todo: feature: consider public method to trigger pinspacerresize (in case size changes during pin)
 @todo: feature: have different tweens, when scrolling up, than when scrolling down
 @todo: feature: make pins work with -webkit-transform of parent for mobile applications. Might be possible by temporarily removing the pin element from its container and attaching it to the body during pin. Reverting might be difficult though (cascaded pins).
*/


var debug = "#debug" == location.hash ? !0 : !1,
    moving = !0,
    slide_width = 1440,
    controller, offset = 0,
    resize_scenes = [],
    t = (new Date).getTime();
window.onload = function () {
    var d = function () {
        $("#loading .error").hide();
        setup();
        TweenMax.to("#background, #loading", 0.4, {
            opacity: 0,
            ease: Linear.easeOut,
            onComplete: function () {
                $("#background, #loading").hide();
                TweenMax.to(".text-1", 2, {
                    opacity: 1,
                    ease: Power1.easeOut
                })
            }
        })
    };
    if (60 < $(".plane-3").height()) {
        setTimeout(function () {
            $("#loading .error").text("Dein Browser unterst\u00fctzt diese Seite leider nicht. Bitte verwende einen aktuellen Browser! (no font)")
        }, 1E3);
        var n = window.setInterval(function () {
            400 > $(".text-9-2").width() &&
                (window.clearInterval(n), d())
        }, 500)
    } else 750 > $(window).innerHeight() || 1380 > $(window).innerWidth() ? ($("#loading .error").text("Dein Bildschirm ist zu klein, es kann daher zu Darstellungsfehlern kommen!"), $('<a href="#">Ok</a>').click(function (m) {
        m.preventDefault();
        m.stopPropagation();
        d()
    }).appendTo("#loading .error")) : debug ? window.setTimeout(d, 5E3) : d()
};

function setup() {
    controller = new ScrollMagic({
        vertical: !1
    });
    var d = $(window).height(),
        n = $(".slide .inner-slide").height() + $("footer > ul").height() + 10;
    d < n && (d = n);
    $(".container, .slide").height(d);
    offset = ($(window).innerWidth() - slide_width) / 2;
    if (debug) {
        $("body").addClass("debug");
        $("<div />").attr("id", "percentages").insertAfter("body > .container:last");
        for (var d = $(".container").width() / $(".slide").length / 10, n = 0, m = $(".slide").length; n < m; n++)
            for (var q = 0; 10 > q; q++) $("<div />").text(10 * (q + 1) + "%").css("width",
                d + "px").appendTo("#percentages")
    }
    $(".sign .hover, .last-slide .hover").hover(function () {
        var d = $(this);
        d.data("original") || d.data("original", d.text());
        d.text(d.data("soon"))
    }, function () {
        var d = $(this);
        d.text(d.data("original"))
    }).click(function (d) {
        d.preventDefault()
    });
    setup_nav(controller);
    setup_lang(controller);
    setup_buildings(controller);
    setup_sound(controller);
    setup_slide_start(controller);
    setup_vienna(controller);
    setup_newyork(controller);
    setup_paris(controller);
    setup_china(controller);
    setup_slide_rain(controller);
    setup_india(controller);
    setup_slide_end(controller);
    jQuery(window).keydown(function (d) {
        9 == d.which && (d.preventDefault(), d.stopPropagation())
    });
    $(window).on("resize", function () {
        for (var d = ($(window).width() - slide_width) / 2, m = $(window).innerWidth() / slide_width, n = 0, q = resize_scenes.length; n < q; n++) resize_scenes[n].scene.duration(resize_scenes[n].duration * m), resize_scenes[n].with_offset && resize_scenes[n].scene.offset(resize_scenes[n].offset - offset + d);
        m = $(window).innerWidth();
        m > slide_width && (d = $(".slide").length *
            slide_width, m -= slide_width, $(".container, #line").width(d + m))
    }).trigger("resize")
}

function register_resize_update(d, n) {
    resize_scenes.push({
        duration: d.duration(),
        offset: d.offset(),
        with_offset: !n,
        scene: d
    })
}

function setup_clouds(d, n, m) {
    if ("#slide-start" == n) n = (new TimelineMax).add([TweenMax.to("#slide-start .cloud", 1, {
        left: "-=" + slide_width + "px",
        ease: Linear.easeNone
    })]), d = (new ScrollScene({
        triggerElement: "#slide-start",
        duration: slide_width,
        offset: 0.5 * slide_width
    })).setTween(n).addTo(d);
    else var q = (new TimelineMax).add([TweenMax.to(n + " .cloud-slow", 1, {
            left: "-=" + slide_width / 2 + "px",
            ease: Linear.easeNone
        }), TweenMax.to(n + " .cloud-fast", 1, {
            left: "-=" + slide_width + "px",
            ease: Linear.easeNone
        })]),
        d = (new ScrollScene({
            triggerElement: n,
            duration: 1.3 * slide_width,
            offset: 0.3 * -slide_width
        })).setTween(q).addTo(d);
    m && d.addIndicators()
}

function setup_buildings(d) {
    $(".building").each(function (n, m) {
        var q = $(m),
            l = q.parents(".slide"),
            z = q.offset().left - l.offset().left,
            q = (new TimelineMax).add([TweenMax.to(q, 1, {
                left: "-=" + slide_width / 4 + "px",
                ease: Linear.easeNone
            })]);
        (new ScrollScene({
            triggerElement: l,
            duration: slide_width,
            offset: -slide_width / 2 + z
        })).setTween(q).addTo(d)
    })
}

function setup_nav(d) {
    $("<div></div>").attr("id", "footer-title").hide().appendTo("footer");
    var n = $("#footernav");
    $(".slide").each(function (m, l) {
        var z = $('<li><a href="" class="heart-nav"></a></li>').appendTo(n),
            u = $("a", z);
        u.click(function (d) {
            d.preventDefault();
            TweenLite.to(window, 1.5, {
                scrollTo: {
                    x: $(l).offset().left
                },
                ease: Power1.easeInOut
            })
        });
        (new ScrollScene({
            triggerElement: l,
            duration: slide_width,
            offset: 0
        })).on("enter leave", function (d) {
            "enter" == d.type && ($("footer a.heart-nav").removeClass("active"),
                u.addClass("active"))
        }).addTo(d)
    });
    jQuery(window).keydown(function (d) {
        var l = d.which;
        if (!(37 > l || 40 < l)) {
            d.preventDefault();
            d.stopPropagation();
            var d = $(".heart-nav"),
                m = 0;
            d.each(function (d, l) {
                jQuery(l).hasClass("active") && (m = d)
            });
            37 == l || 38 == l ? 0 < m && m-- : (39 == l || 40 == l) && m < d.length - 1 && m++;
            jQuery(d[m]).click()
        }
    });
    var m = $("#info-content");
    $("#info a").click(function (d) {
        d.preventDefault();
        d.stopPropagation();
        m.is(":visible") ? m.hide() : (m.css("left", $("#info").offset().left - $(document).scrollLeft() + $("#info").width() /
            2 - m.width() / 2), m.show(), $(document).one("click", function () {
            d.preventDefault();
            d.stopPropagation();
            m.is(":visible") && m.hide()
        }))
    });
    jQuery(".mailto, .tel").wrap('<a href="#"></a>').each(function () {
        for (var d = jQuery(this), l = d.text(), m = "", n = l.length - 1; 0 <= n; n--) " " != l[n] && (m += l[n]);
        l = this.className + ":" + m;
        d.parent().attr("href", l)
    })
}

function setup_lang() {
    var d = "de",
        n = function (d) {
            location.hash = d;
            $("body").removeClass("en").removeClass("de").addClass(d);
            $(window).trigger("languagechange", [d])
        };
    $("#language a").click(function (m) {
        m.preventDefault();
        d = "de" == d ? "en" : "de";
        n(d)
    });
    "#en" == location.hash && (d = "en", n(d))
}

function setup_sound() {
    var d = !1,
        n = !1,
        m = null,
        q = function (d) {
            $("#music a").each(function (m, n) {
                $(n).text($(n).data(d))
            })
        };
    q("on");
    $("#music a").click(function (l) {
        l.preventDefault();
        d ? m.pauseVideo() : n ? m.playVideo() : (n = !0, q("loading"), $.getScript("https://www.youtube.com/iframe_api"), window.onYouTubeIframeAPIReady = function () {
                m = new YT.Player("player", {
                    height: "0",
                    width: "0",
                    videoId: "NNC0kIzM1Fo",
                    events: {
                        onReady: onPlayerReady,
                        onStateChange: onPlayerStateChange
                    }
                })
            }, window.onPlayerReady = function (d) {
                d.target.playVideo()
            },
            window.onPlayerStateChange = function (l) {
                l.data == YT.PlayerState.ENDED && (d = !1, q("on"));
                l.data == YT.PlayerState.PAUSED && (d = !1, q("on"));
                l.data == YT.PlayerState.PLAYING && (d = !0, q("off"))
            });
        d = !d
    })
}

function setup_slide_start(d) {
    setup_clouds(d, "#slide-start");
    moving && (TweenMax.to("#auspuff", 1, {
        left: "-=30px",
        opacity: 0,
        repeat: -1,
        ease: Power1.easeOut
    }), TweenMax.to("#scroll ", 0.8, {
        right: "+=10px",
        yoyo: !0,
        repeat: -1
    }), TweenMax.to("#hearts .inner", 0.7, {
        rotation: 3,
        repeat: -1,
        yoyo: !0
    }), TweenMax.to("#hearts .inner", 1, {
        top: "+=5px",
        repeat: -1,
        yoyo: !0
    }), TweenMax.to("#hearts .inner", 1.3, {
        left: "+=5px",
        repeat: -1,
        yoyo: !0
    }), function () {
        var d = $(".cloud-small-dark, .cloud-medium-dark"),
            n = 0;
        window.setInterval(function () {
            d.removeClass("alt1").removeClass("alt2");
            1 == n ? d.addClass("alt1") : 2 == n && d.addClass("alt2");
            n++;
            2 < n && (n = 0)
        }, 200)
    }());
    var n = (new TimelineMax).add([TweenMax.to("#scroll", 1, {
            opacity: 0
        })]),
        n = (new ScrollScene({
            triggerElement: "#slide-start",
            duration: slide_width / 7,
            offset: 0.5 * slide_width + offset
        })).setTween(n).addTo(d);
    register_resize_update(n);
    n = (new TimelineMax).add([TweenMax.to("#vespa", 1, {
        left: "400px",
        opacity: 1,
        ease: Linear.easeNone
    })]);
    n = (new ScrollScene({
        triggerElement: "#slide-start",
        duration: slide_width / 7,
        offset: 0.5 * slide_width + offset
    })).setTween(n).addTo(d);
    register_resize_update(n);
    n = (new ScrollScene({
        triggerElement: "#slide-start",
        offset: 1273 + offset
    })).setPin("#hearts").on("start end", function (d) {
        "end" == d.type && 0 == d.progress && ($("#lines").hide(), $("#vespa").removeClass("with-arm"));
        "end" == d.type && 1 == d.progress && ($("#lines").show(), $("#vespa").addClass("with-arm"))
    }).addTo(d);
    register_resize_update(n);
    d = (new ScrollScene({
        triggerElement: "#slide-start",
        duration: 450,
        offset: 1273 + offset
    })).setPin("#text-love").addTo(d);
    register_resize_update(d)
}

function setup_vienna(d) {
    setup_clouds(d, "#slide-vienna");
    var n = (new TimelineMax).add([TweenMax.from("#slide-vienna .text-3-1, #slide-vienna .text-3-5, #slide-vienna .text-3-6, #slide-vienna .text-3-7, #slide-vienna .text-3-8", 1, {
            opacity: 0,
            ease: Linear.easeNone
        })]),
        d = (new ScrollScene({
            triggerElement: "#slide-vienna",
            duration: slide_width / 9,
            offset: 500 + offset
        })).setTween(n).addTo(d);
    register_resize_update(d)
}

function setup_newyork(d) {
    setup_clouds(d, "#slide-newyork");
    var n = (new TimelineMax).add([TweenMax.to(".plane", 1, {
            left: "-=" + slide_width / 1.8 + "px",
            ease: Linear.easeNone
        })]),
        d = (new ScrollScene({
            triggerElement: ".plane",
            duration: 1.5 * slide_width,
            offset: 0
        })).setTween(n).triggerHook("onEnter").addTo(d);
    register_resize_update(d, !0)
}

function setup_paris(d) {
    setup_clouds(d, "#slide-paris");
    var n = [],
        m = function (d, l, m) {
            var n = $(d).width() / 2,
                w = $(d).height() / 2;
            return TweenMax.from(d, l, {
                width: 0,
                backgroundPositionX: "-=" + n + "px",
                left: "+=" + n + "px",
                height: 0,
                backgroundPositionY: "-=" + w + "px",
                top: "+=" + w + "px",
                ease: Power3.easeOut,
                delay: m
            })
        };
    n.push(m("#eiffelturm .firework-1", 0.5, 0.4));
    n.push(m("#eiffelturm .firework-2", 0.4, 0));
    n.push(m("#eiffelturm .firework-3", 0.6, 0.2));
    n.push(m("#eiffelturm .firework-4", 0.3, 0.3));
    n.push(m(".text-5 .firework-1",
        0.2, 0));
    n.push(m(".text-5 .firework-2", 0.3, 0.5));
    n = (new TimelineMax).add(n);
    d = (new ScrollScene({
        triggerElement: "#eiffelturm",
        duration: 0,
        offset: 500
    })).setTween(n).triggerHook("onEnter").addTo(d);
    register_resize_update(d, !1)
}

function setup_china(d) {
    setup_clouds(d, "#slide-china");
    var n = (new TimelineMax).add([TweenMax.to("#yinyang", 1, {
            left: "-=" + slide_width + "px",
            rotation: "-610deg",
            ease: Linear.easeNone
        })]),
        n = (new ScrollScene({
            triggerElement: "#slide-china",
            duration: slide_width,
            offset: -150 + offset
        })).setTween(n).addTo(d);
    register_resize_update(n);
    n = function (m) {
        $(m).wrapEach(/(.)/g, "<span>$1</span>");
        var n = [];
        $(m + " > span").each(function (d, m) {
            n.push(TweenMax.to(m, 0.2, {
                color: "#b40000",
                yoyo: !0,
                repeat: 1,
                delay: 0.1 * d,
                ease: Linear.easeNone
            }))
        });
        m = (new TimelineMax).add(n);
        m = (new ScrollScene({
            triggerElement: "#slide-china",
            offset: 0.5 * slide_width + offset
        })).setTween(m).addTo(d);
        register_resize_update(m)
    };
    n('.text-6[lang="de"] .text-6-2');
    n('.text-6[lang="en"] .text-6-2')
}

function setup_slide_rain(d) {
    setup_clouds(d, "#slide-rain");
    var n = (new TimelineMax).add([TweenMax.from("#bunch-of-clouds", 1, {
            top: "-200px",
            ease: Linear.easeNone
        })]),
        n = (new ScrollScene({
            triggerElement: "#slide-rain",
            duration: 200,
            offset: 200 + offset
        })).setTween(n).addTo(d);
    register_resize_update(n);
    n = (new TimelineMax).add([TweenMax.to("#bunch-of-clouds", 1, {
        top: "-200px",
        ease: Linear.easeNone
    })]);
    d = (new ScrollScene({
        triggerElement: "#slide-rain",
        duration: 200,
        offset: slide_width + offset
    })).setTween(n).addTo(d);
    register_resize_update(d)
}

function setup_india(d) {
    setup_clouds(d, "#slide-india");
    var n = {},
        m = function (m, l) {
            if (!n[l]) {
                n[l] = !0;
                var z = $(m).width();
                (new ScrollScene({
                    triggerElement: m,
                    duration: z
                })).on("progress", function (d) {
                    $(m).sparkle({
                        x: z * d.progress,
                        y: $(m).position().top + 20,
                        amount: 5,
                        duration: 0.1
                    })
                }).addTo(d);
                $(m).mousemove(function (d) {
                    $(m).sparkle({
                        x: d.offsetX,
                        y: d.offsetY,
                        amount: 5,
                        duration: 0.1
                    })
                })
            }
        };
    $("body").hasClass("en") ? m('.text-8[lang="en"] .text-8-2', "en") : m('.text-8[lang="de"] .text-8-2', "de");
    $(window).on("languagechange",
        function (d, l) {
            m('.text-8[lang="' + l + '"]', l)
        })
}

function setup_slide_end(d) {
    setup_clouds(d, "#slide-end");
    var n = (new TimelineMax).add([TweenMax.from("#bunch-of-hearts", 1, {
            top: "-500px",
            ease: Linear.easeNone
        })]),
        n = (new ScrollScene({
            triggerElement: "#slide-end",
            duration: 200,
            offset: slide_width / 2 + offset - 400 - 20
        })).setTween(n).addTo(d);
    register_resize_update(n);
    n = (new TimelineMax).add([TweenMax.from($(".text-9 > span").not(".heart"), 1, {
        top: "-500px",
        ease: Linear.easeNone
    })]);
    n = (new ScrollScene({
        triggerElement: "#slide-end",
        duration: 200,
        offset: slide_width / 2 +
            offset - 200 - 20
    })).setTween(n).addTo(d);
    register_resize_update(n);
    n = function (m) {
        m = TweenMax.to(m, 7, {
            bezier: {
                type: "soft",
                values: [{
                    x: -100,
                    y: 75
                }, {
                    x: 100,
                    y: 150
                }, {
                    x: -100,
                    y: 225
                }, {
                    x: 100,
                    y: 300
                }, {
                    x: 0,
                    y: 375
                }],
                autoRotate: !1
            },
            ease: Power1.easeOut
        });
        m = (new ScrollScene({
            triggerElement: "#slide-end",
            offset: slide_width / 2 + offset - 20
        })).setTween(m).addTo(d);
        register_resize_update(m)
    };
    n('.text-9[lang="de"] .heart');
    n('.text-9[lang="en"] .heart')
};