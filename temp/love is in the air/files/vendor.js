(function (d, n) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? n(d, !0) : function (d) {
        if (!d.document) throw Error("jQuery requires a window with a document");
        return n(d)
    } : n(d)
})("undefined" != typeof window ? window : this, function (d, n) {
    function m(b) {
        var f = b.length,
            p = c.type(b);
        return "function" === p || c.isWindow(b) ? !1 : 1 === b.nodeType && f ? !0 : "array" === p || 0 === f || "number" == typeof f && 0 < f && f - 1 in b
    }

    function q(b, f, p) {
        if (c.isFunction(f)) return c.grep(b, function (b, c) {
            return !!f.call(b,
                c, b) !== p
        });
        if (f.nodeType) return c.grep(b, function (b) {
            return b === f !== p
        });
        if ("string" == typeof f) {
            if (Ca.test(f)) return c.filter(f, b, p);
            f = c.filter(f, b)
        }
        return c.grep(b, function (b) {
            return 0 <= h.call(f, b) !== p
        })
    }

    function l(b, f) {
        for (;
            (b = b[f]) && 1 !== b.nodeType;);
        return b
    }

    function z(b) {
        var f = Qa[b] = {};
        return c.each(b.match(pa) || [], function (b, c) {
            f[c] = !0
        }), f
    }

    function u() {
        L.removeEventListener("DOMContentLoaded", u, !1);
        d.removeEventListener("load", u, !1);
        c.ready()
    }

    function w() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        });
        this.expando = c.expando + Math.random()
    }

    function s(b, f, p) {
        var B;
        if (void 0 === p && 1 === b.nodeType)
            if (B = "data-" + f.replace($a, "-$1").toLowerCase(), p = b.getAttribute(B), "string" == typeof p) {
                try {
                    p = "true" === p ? !0 : "false" === p ? !1 : "null" === p ? null : +p + "" === p ? +p : ra.test(p) ? c.parseJSON(p) : p
                } catch (a) {}
                la.set(b, f, p)
            } else p = void 0;
        return p
    }

    function A() {
        return !0
    }

    function v() {
        return !1
    }

    function j() {
        try {
            return L.activeElement
        } catch (b) {}
    }

    function g(b, f) {
        return c.nodeName(b, "table") && c.nodeName(11 !==
            f.nodeType ? f : f.firstChild, "tr") ? b.getElementsByTagName("tbody")[0] || b.appendChild(b.ownerDocument.createElement("tbody")) : b
    }

    function i(b) {
        return b.type = (null !== b.getAttribute("type")) + "/" + b.type, b
    }

    function e(b) {
        var f = La.exec(b.type);
        return f ? b.type = f[1] : b.removeAttribute("type"), b
    }

    function a(b, f) {
        for (var c = 0, B = b.length; B > c; c++) P.set(b[c], "globalEval", !f || P.get(f[c], "globalEval"))
    }

    function O(b, f) {
        var p, B, a, o, h, r;
        if (1 === f.nodeType) {
            if (P.hasData(b) && (p = P.access(b), B = P.set(f, p), r = p.events))
                for (a in delete B.handle,
                    B.events = {}, r)
                    for (p = 0, B = r[a].length; B > p; p++) c.event.add(f, a, r[a][p]);
            la.hasData(b) && (o = la.access(b), h = c.extend({}, o), la.set(f, h))
        }
    }

    function D(b, f) {
        var p = b.getElementsByTagName ? b.getElementsByTagName(f || "*") : b.querySelectorAll ? b.querySelectorAll(f || "*") : [];
        return void 0 === f || f && c.nodeName(b, f) ? c.merge([b], p) : p
    }

    function E(b, f) {
        var p = c(f.createElement(b)).appendTo(f.body),
            B = d.getDefaultComputedStyle ? d.getDefaultComputedStyle(p[0]).display : c.css(p[0], "display");
        return p.detach(), B
    }

    function ia(b) {
        var f =
            L,
            p = X[b];
        return p || (p = E(b, f), "none" !== p && p || (J = (J || c("<iframe frameborder='0' width='0' height='0'/>")).appendTo(f.documentElement), f = J[0].contentDocument, f.write(), f.close(), p = E(b, f), J.detach()), X[b] = p), p
    }

    function G(b, f, p) {
        var B, a, o, h, r = b.style;
        return p = p || y(b), p && (h = p.getPropertyValue(f) || p[f]), p && ("" !== h || c.contains(b.ownerDocument, b) || (h = c.style(b, f)), oa.test(h) && k.test(f) && (B = r.width, a = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = h, h = p.width, r.width = B, r.minWidth = a, r.maxWidth = o)), void 0 !==
            h ? h + "" : h
    }

    function Q(b, f) {
        return {
            get: function () {
                return b() ? void delete this.get : (this.get = f).apply(this, arguments)
            }
        }
    }

    function M(b, f) {
        if (f in b) return f;
        for (var c = f[0].toUpperCase() + f.slice(1), B = f, a = Ra.length; a--;)
            if (f = Ra[a] + c, f in b) return f;
        return B
    }

    function V(b, f, c) {
        return (b = Ma.exec(f)) ? Math.max(0, b[1] - (c || 0)) + (b[2] || "px") : f
    }

    function ea(b, f, p, B, a) {
        for (var f = p === (B ? "border" : "content") ? 4 : "width" === f ? 1 : 0, h = 0; 4 > f; f += 2) "margin" === p && (h += c.css(b, p + ya[f], !0, a)), B ? ("content" === p && (h -= c.css(b, "padding" + ya[f], !0, a)), "margin" !== p && (h -= c.css(b, "border" + ya[f] + "Width", !0, a))) : (h += c.css(b, "padding" + ya[f], !0, a), "padding" !== p && (h += c.css(b, "border" + ya[f] + "Width", !0, a)));
        return h
    }

    function S(b, f, p) {
        var B = !0,
            a = "width" === f ? b.offsetWidth : b.offsetHeight,
            h = y(b),
            o = "border-box" === c.css(b, "boxSizing", !1, h);
        if (0 >= a || null == a) {
            if (a = G(b, f, h), (0 > a || null == a) && (a = b.style[f]), oa.test(a)) return a;
            B = o && (H.boxSizingReliable() || a === b.style[f]);
            a = parseFloat(a) || 0
        }
        return a + ea(b, f, p || (o ? "border" : "content"), B, h) + "px"
    }

    function N(b, f) {
        for (var p,
            B, a, h = [], o = 0, r = b.length; r > o; o++) B = b[o], B.style && (h[o] = P.get(B, "olddisplay"), p = B.style.display, f ? (h[o] || "none" !== p || (B.style.display = ""), "" === B.style.display && qa(B) && (h[o] = P.access(B, "olddisplay", ia(B.nodeName)))) : h[o] || (a = qa(B), (p && "none" !== p || !a) && P.set(B, "olddisplay", a ? p : c.css(B, "display"))));
        for (o = 0; r > o; o++) B = b[o], B.style && (f && "none" !== B.style.display && "" !== B.style.display || (B.style.display = f ? h[o] || "" : "none"));
        return b
    }

    function T(b, f, c, B, a) {
        return new T.prototype.init(b, f, c, B, a)
    }

    function F() {
        return setTimeout(function () {
            sa =
                void 0
        }), sa = c.now()
    }

    function W(b, f) {
        for (var c, B = 0, a = {
            height: b
        }, f = f ? 1 : 0; 4 > B; B += 2 - f) c = ya[B], a["margin" + c] = a["padding" + c] = b;
        return f && (a.opacity = a.width = b), a
    }

    function U(b, f, c) {
        for (var B, a = (Na[f] || []).concat(Na["*"]), h = 0, o = a.length; o > h; h++)
            if (B = a[h].call(c, f, b)) return B
    }

    function R(b, f) {
        var ba;
        var p, B, a, h, o;
        for (p in b)
            if (B = c.camelCase(p), a = f[B], h = b[p], c.isArray(h) && (a = h[1], ba = b[p] = h[0], h = ba), p !== B && (b[B] = h, delete b[p]), o = c.cssHooks[B], o && "expand" in o)
                for (p in h = o.expand(h), delete b[B], h) p in b || (b[p] =
                    h[p], f[p] = a);
            else f[B] = a
    }

    function Y(b, f, p) {
        var B, a = 0,
            h = ab.length,
            o = c.Deferred().always(function () {
                delete r.elem
            }),
            r = function () {
                if (B) return !1;
                for (var f = sa || F(), f = Math.max(0, k.startTime + k.duration - f), c = 1 - (f / k.duration || 0), p = 0, a = k.tweens.length; a > p; p++) k.tweens[p].run(c);
                return o.notifyWith(b, [k, c, f]), 1 > c && a ? f : (o.resolveWith(b, [k]), !1)
            },
            k = o.promise({
                elem: b,
                props: c.extend({}, f),
                opts: c.extend(!0, {
                    specialEasing: {}
                }, p),
                originalProperties: f,
                originalOptions: p,
                startTime: sa || F(),
                duration: p.duration,
                tweens: [],
                createTween: function (f, p) {
                    var a = c.Tween(b, k.opts, f, p, k.opts.specialEasing[f] || k.opts.easing);
                    return k.tweens.push(a), a
                },
                stop: function (f) {
                    var c = 0,
                        p = f ? k.tweens.length : 0;
                    if (B) return this;
                    for (B = !0; p > c; c++) k.tweens[c].run(1);
                    return f ? o.resolveWith(b, [k, f]) : o.rejectWith(b, [k, f]), this
                }
            }),
            p = k.props;
        for (R(p, k.opts.specialEasing); h > a; a++)
            if (f = ab[a].call(k, b, p, k.opts)) return f;
        return c.map(p, U, k), c.isFunction(k.opts.start) && k.opts.start.call(b, k), c.fx.timer(c.extend(r, {
            elem: b,
            anim: k,
            queue: k.opts.queue
        })), k.progress(k.opts.progress).done(k.opts.done,
            k.opts.complete).fail(k.opts.fail).always(k.opts.always)
    }

    function da(b) {
        return function (f, p) {
            "string" != typeof f && (p = f, f = "*");
            var a, h = 0,
                o = f.toLowerCase().match(pa) || [];
            if (c.isFunction(p))
                for (; a = o[h++];) "+" === a[0] ? (a = a.slice(1) || "*", (b[a] = b[a] || []).unshift(p)) : (b[a] = b[a] || []).push(p)
        }
    }

    function aa(b, f, p, a) {
        function h(r) {
            var e;
            return o[r] = !0, c.each(b[r] || [], function (b, c) {
                var r = c(f, p, a);
                return "string" != typeof r || k || o[r] ? k ? !(e = r) : void 0 : (f.dataTypes.unshift(r), h(r), !1)
            }), e
        }
        var o = {},
            k = b === hb;
        return h(f.dataTypes[0]) ||
            !o["*"] && h("*")
    }

    function Z(b, f) {
        var p, a, h = c.ajaxSettings.flatOptions || {};
        for (p in f) void 0 !== f[p] && ((h[p] ? b : a || (a = {}))[p] = f[p]);
        return a && c.extend(!0, b, a), b
    }

    function fa(b, f, p, a) {
        var h;
        if (c.isArray(f)) c.each(f, function (f, c) {
            p || Ab.test(b) ? a(b, c) : fa(b + "[" + ("object" == typeof c ? f : "") + "]", c, p, a)
        });
        else if (p || "object" !== c.type(f)) a(b, f);
        else
            for (h in f) fa(b + "[" + h + "]", f[h], p, a)
    }
    var ma = [],
        ha = ma.slice,
        ka = ma.concat,
        ca = ma.push,
        h = ma.indexOf,
        x = {},
        K = x.toString,
        I = x.hasOwnProperty,
        C = "".trim,
        H = {},
        L = d.document,
        c = function (b,
            f) {
            return new c.fn.init(b, f)
        },
        Da = /^-ms-/,
        wa = /-([\da-z])/gi,
        ib = function (b, f) {
            return f.toUpperCase()
        };
    c.fn = c.prototype = {
        jquery: "2.1.0",
        constructor: c,
        selector: "",
        length: 0,
        toArray: function () {
            return ha.call(this)
        },
        get: function (b) {
            return null != b ? 0 > b ? this[b + this.length] : this[b] : ha.call(this)
        },
        pushStack: function (b) {
            b = c.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (b, f) {
            return c.each(this, b, f)
        },
        map: function (b) {
            return this.pushStack(c.map(this, function (f, c) {
                return b.call(f,
                    c, f)
            }))
        },
        slice: function () {
            return this.pushStack(ha.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (b) {
            var f = this.length,
                b = +b + (0 > b ? f : 0);
            return this.pushStack(0 <= b && f > b ? [this[b]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: ca,
        sort: ma.sort,
        splice: ma.splice
    };
    c.extend = c.fn.extend = function () {
        var b, f, p, a, h, o, k = arguments[0] || {},
            r = 1,
            e = arguments.length,
            i = !1;
        for ("boolean" == typeof k && (i = k, k = arguments[r] || {}, r++), "object" ==
            typeof k || c.isFunction(k) || (k = {}), r === e && (k = this, r--); e > r; r++)
            if (null != (b = arguments[r]))
                for (f in b) p = k[f], a = b[f], k !== a && (i && a && (c.isPlainObject(a) || (h = c.isArray(a))) ? (h ? (h = !1, o = p && c.isArray(p) ? p : []) : o = p && c.isPlainObject(p) ? p : {}, k[f] = c.extend(i, o, a)) : void 0 !== a && (k[f] = a));
        return k
    };
    c.extend({
        expando: "jQuery" + ("2.1.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (b) {
            throw Error(b);
        },
        noop: function () {},
        isFunction: function (b) {
            return "function" === c.type(b)
        },
        isArray: Array.isArray,
        isWindow: function (b) {
            return null !=
                b && b === b.window
        },
        isNumeric: function (b) {
            return 0 <= b - parseFloat(b)
        },
        isPlainObject: function (b) {
            if ("object" !== c.type(b) || b.nodeType || c.isWindow(b)) return !1;
            try {
                if (b.constructor && !I.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (f) {
                return !1
            }
            return !0
        },
        isEmptyObject: function (b) {
            for (var f in b) return !1;
            return !0
        },
        type: function (b) {
            return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? x[K.call(b)] || "object" : typeof b
        },
        globalEval: function (b) {
            var f, p = eval;
            b = c.trim(b);
            b && (1 === b.indexOf("use strict") ?
                (f = L.createElement("script"), f.text = b, L.head.appendChild(f).parentNode.removeChild(f)) : p(b))
        },
        camelCase: function (b) {
            return b.replace(Da, "ms-").replace(wa, ib)
        },
        nodeName: function (b, f) {
            return b.nodeName && b.nodeName.toLowerCase() === f.toLowerCase()
        },
        each: function (b, f, c) {
            var a, h = 0,
                o = b.length,
                k = m(b);
            if (c)
                if (k)
                    for (; o > h && !(a = f.apply(b[h], c), !1 === a); h++);
                else
                    for (h in b) {
                        if (a = f.apply(b[h], c), !1 === a) break
                    } else if (k)
                        for (; o > h && !(a = f.call(b[h], h, b[h]), !1 === a); h++);
                    else
                        for (h in b)
                            if (a = f.call(b[h], h, b[h]), !1 ===
                                a) break;
            return b
        },
        trim: function (b) {
            return null == b ? "" : C.call(b)
        },
        makeArray: function (b, f) {
            var p = f || [];
            return null != b && (m(Object(b)) ? c.merge(p, "string" == typeof b ? [b] : b) : ca.call(p, b)), p
        },
        inArray: function (b, f, c) {
            return null == f ? -1 : h.call(f, b, c)
        },
        merge: function (b, f) {
            for (var c = +f.length, a = 0, h = b.length; c > a; a++) b[h++] = f[a];
            return b.length = h, b
        },
        grep: function (b, f, c) {
            for (var a, h = [], o = 0, k = b.length, c = !c; k > o; o++) a = !f(b[o], o), a !== c && h.push(b[o]);
            return h
        },
        map: function (b, f, c) {
            var a, h = 0,
                o = b.length,
                k = [];
            if (m(b))
                for (; o >
                    h; h++) a = f(b[h], h, c), null != a && k.push(a);
            else
                for (h in b) a = f(b[h], h, c), null != a && k.push(a);
            return ka.apply([], k)
        },
        guid: 1,
        proxy: function (b, f) {
            var p, a, h;
            return "string" == typeof f && (p = b[f], f = b, b = p), c.isFunction(b) ? (a = ha.call(arguments, 2), h = function () {
                return b.apply(f || this, a.concat(ha.call(arguments)))
            }, h.guid = b.guid = b.guid || c.guid++, h) : void 0
        },
        now: Date.now,
        support: H
    });
    c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (b, f) {
        x["[object " + f + "]"] = f.toLowerCase()
    });
    var Fa =
        function (b) {
            function f(b, f, c, p) {
                var a, h, B, o, k, r;
                if ((f ? f.ownerDocument || f : ua) !== ja && w(f), f = f || ja, c = c || [], !b || "string" != typeof b) return c;
                if (1 !== (o = f.nodeType) && 9 !== o) return [];
                if (E && !p) {
                    if (a = ha.exec(b))
                        if (B = a[1])
                            if (9 === o) {
                                if (h = f.getElementById(B), !h || !h.parentNode) return c;
                                if (h.id === B) return c.push(h), c
                            } else {
                                if (f.ownerDocument && (h = f.ownerDocument.getElementById(B)) && z(f, h) && h.id === B) return c.push(h), c
                            } else {
                        if (a[2]) return N.apply(c, f.getElementsByTagName(b)), c;
                        if ((B = a[3]) && x.getElementsByClassName &&
                            f.getElementsByClassName) return N.apply(c, f.getElementsByClassName(B)), c
                    } if (x.qsa && (!C || !C.test(b))) {
                        if (h = a = Q, B = f, r = 9 === o && b, 1 === o && "object" !== f.nodeName.toLowerCase()) {
                            for (k = j(b), (a = f.getAttribute("id")) ? h = a.replace(Ba, "\\$&") : f.setAttribute("id", h), h = "[id='" + h + "'] ", o = k.length; o--;) k[o] = h + y(k[o]);
                            B = Ya.test(b) && g(f.parentNode) || f;
                            r = k.join(",")
                        }
                        if (r) try {
                            return N.apply(c, B.querySelectorAll(r)), c
                        } catch (ba) {} finally {
                            a || f.removeAttribute("id")
                        }
                    }
                }
                var e;
                a: {
                    var b = b.replace(aa, "$1"),
                        i, na;
                    a = j(b);
                    if (!p && 1 ===
                        a.length) {
                        if (e = a[0] = a[0].slice(0), 2 < e.length && "ID" === (i = e[0]).type && x.getById && 9 === f.nodeType && E && m.relative[e[1].type]) {
                            if (f = (m.find.ID(i.matches[0].replace(Aa, va), f) || [])[0], !f) {
                                e = c;
                                break a
                            }
                            b = b.slice(e.shift().value.length)
                        }
                        for (k = U.needsContext.test(b) ? 0 : e.length; k-- && !(i = e[k], m.relative[o = i.type]);)
                            if ((na = m.find[o]) && (p = na(i.matches[0].replace(Aa, va), Ya.test(e[0].type) && g(f.parentNode) || f))) {
                                if (e.splice(k, 1), b = p.length && y(e), !b) {
                                    e = (N.apply(c, p), c);
                                    break a
                                }
                                break
                            }
                    }
                    e = (v(b, a)(p, f, !E, c, Ya.test(b) &&
                        g(f.parentNode) || f), c)
                }
                return e
            }

            function c() {
                function b(c, p) {
                    return f.push(c + " ") > m.cacheLength && delete b[f.shift()], b[c + " "] = p
                }
                var f = [];
                return b
            }

            function a(b) {
                return b[Q] = !0, b
            }

            function h(b) {
                var f = ja.createElement("div");
                try {
                    return !!b(f)
                } catch (c) {
                    return !1
                } finally {
                    f.parentNode && f.parentNode.removeChild(f)
                }
            }

            function o(b, f) {
                for (var c = b.split("|"), p = b.length; p--;) m.attrHandle[c[p]] = f
            }

            function k(b, f) {
                var c = f && b,
                    p = c && 1 === b.nodeType && 1 === f.nodeType && (~f.sourceIndex || Ra) - (~b.sourceIndex || Ra);
                if (p) return p;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === f) return -1;
                return b ? 1 : -1
            }

            function r(b) {
                return function (f) {
                    return "input" === f.nodeName.toLowerCase() && f.type === b
                }
            }

            function e(b) {
                return function (f) {
                    var c = f.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && f.type === b
                }
            }

            function i(b) {
                return a(function (f) {
                    return f = +f, a(function (c, p) {
                        for (var a, h = b([], c.length, f), B = h.length; B--;) c[a = h[B]] && (c[a] = !(p[a] = c[a]))
                    })
                })
            }

            function g(b) {
                return b && typeof b.getElementsByTagName !== Ea && b
            }

            function J() {}

            function j(b, c) {
                var p, a, h,
                    B, o, k, r;
                if (o = L[b + " "]) return c ? 0 : o.slice(0);
                for (o = b, k = [], r = m.preFilter; o;) {
                    (!p || (a = ea.exec(o))) && (a && (o = o.slice(a[0].length) || o), k.push(h = []));
                    p = !1;
                    (a = mb.exec(o)) && (p = a.shift(), h.push({
                        value: p,
                        type: a[0].replace(aa, " ")
                    }), o = o.slice(p.length));
                    for (B in m.filter)!(a = U[B].exec(o)) || r[B] && !(a = r[B](a)) || (p = a.shift(), h.push({
                        value: p,
                        type: B,
                        matches: a
                    }), o = o.slice(p.length));
                    if (!p) break
                }
                return c ? o.length : o ? f.error(b) : L(b, k).slice(0)
            }

            function y(b) {
                for (var f = 0, c = b.length, p = ""; c > f; f++) p += b[f].value;
                return p
            }

            function d(b,
                f, c) {
                var p = f.dir,
                    a = c && "parentNode" === p,
                    h = lb++;
                return f.first ? function (f, c, h) {
                    for (; f = f[p];)
                        if (1 === f.nodeType || a) return b(f, c, h)
                } : function (f, c, B) {
                    var o, k, r = [G, h];
                    if (B)
                        for (; f = f[p];) {
                            if ((1 === f.nodeType || a) && b(f, c, B)) return !0
                        } else
                            for (; f = f[p];)
                                if (1 === f.nodeType || a) {
                                    if (k = f[Q] || (f[Q] = {}), (o = k[p]) && o[0] === G && o[1] === h) return r[2] = o[2];
                                    if (k[p] = r, r[2] = b(f, c, B)) return !0
                                }
                }
            }

            function X(b) {
                return 1 < b.length ? function (f, c, p) {
                    for (var a = b.length; a--;)
                        if (!b[a](f, c, p)) return !1;
                    return !0
                } : b[0]
            }

            function O(b, f, c, p, a) {
                for (var h,
                    B = [], o = 0, k = b.length, r = null != f; k > o; o++)(h = b[o]) && (!c || c(h, p, a)) && (B.push(h), r && f.push(o));
                return B
            }

            function l(b, c, p, h, o, k) {
                return h && !h[Q] && (h = l(h)), o && !o[Q] && (o = l(o, k)), a(function (a, B, k, r) {
                    var e, ba, i = [],
                        g = [],
                        na = B.length,
                        J;
                    if (!(J = a)) {
                        J = c || "*";
                        for (var j = k.nodeType ? [k] : k, y = [], d = 0, X = j.length; X > d; d++) f(J, j[d], y);
                        J = y
                    }
                    J = !b || !a && c ? J : O(J, i, b, k, r);
                    j = p ? o || (a ? b : na || h) ? [] : B : J;
                    if (p && p(J, j, k, r), h)
                        for (e = O(j, g), h(e, [], k, r), k = e.length; k--;)(ba = e[k]) && (j[g[k]] = !(J[g[k]] = ba));
                    if (a) {
                        if (o || b) {
                            if (o) {
                                for (e = [], k = j.length; k--;)(ba =
                                    j[k]) && e.push(J[k] = ba);
                                o(null, j = [], e, r)
                            }
                            for (k = j.length; k--;)(ba = j[k]) && -1 < (e = o ? sa.call(a, ba) : i[k]) && (a[e] = !(B[e] = ba))
                        }
                    } else j = O(j === B ? j.splice(na, j.length) : j), o ? o(null, B, j, r) : N.apply(B, j)
                })
            }

            function u(b) {
                var f, c, p, a = b.length,
                    h = m.relative[b[0].type];
                c = h || m.relative[" "];
                for (var B = h ? 1 : 0, o = d(function (b) {
                    return b === f
                }, c, !0), k = d(function (b) {
                    return -1 < sa.call(f, b)
                }, c, !0), r = [
                    function (b, c, p) {
                        return !h && (p || c !== s) || ((f = c).nodeType ? o(b, c, p) : k(b, c, p))
                    }
                ]; a > B; B++)
                    if (c = m.relative[b[B].type]) r = [d(X(r), c)];
                    else {
                        if (c =
                            m.filter[b[B].type].apply(null, b[B].matches), c[Q]) {
                            for (p = ++B; a > p && !m.relative[b[p].type]; p++);
                            return l(1 < B && X(r), 1 < B && y(b.slice(0, B - 1).concat({
                                value: " " === b[B - 2].type ? "*" : ""
                            })).replace(aa, "$1"), c, p > B && u(b.slice(B, p)), a > p && u(b = b.slice(p)), a > p && y(b))
                        }
                        r.push(c)
                    }
                return X(r)
            }

            function oa(b, c) {
                var p = 0 < c.length,
                    h = 0 < b.length,
                    o = function (a, B, o, k, r) {
                        var e, ba, i, g = 0,
                            na = "0",
                            j = a && [],
                            J = [],
                            y = s,
                            d = a || h && m.find.TAG("*", r),
                            X = G += null == y ? 1 : Math.random() || 0.1,
                            x = d.length;
                        for (r && (s = B !== ja && B); na !== x && null != (e = d[na]); na++) {
                            if (h &&
                                e) {
                                for (ba = 0; i = b[ba++];)
                                    if (i(e, B, o)) {
                                        k.push(e);
                                        break
                                    }
                                r && (G = X)
                            }
                            p && ((e = !i && e) && g--, a && j.push(e))
                        }
                        if (g += na, p && na !== g) {
                            for (ba = 0; i = c[ba++];) i(j, J, B, o);
                            if (a) {
                                if (0 < g)
                                    for (; na--;) j[na] || J[na] || (J[na] = V.call(k));
                                J = O(J)
                            }
                            N.apply(k, J);
                            r && !a && 0 < J.length && 1 < g + c.length && f.uniqueSort(k)
                        }
                        return r && (G = X, s = y), j
                    };
                return p ? a(o) : o
            }
            var K, x, m, I, D, v, s, H, n, w, ja, R, E, C, q, Ma, z, Q = "sizzle" + -new Date,
                ua = b.document,
                G = 0,
                lb = 0,
                ia = c(),
                L = c(),
                M = c(),
                A = function (b, f) {
                    return b === f && (n = !0), 0
                },
                Ea = "undefined",
                Ra = -2147483648,
                nb = {}.hasOwnProperty,
                Y = [],
                V = Y.pop,
                S = Y.push,
                N = Y.push,
                Ja = Y.slice,
                sa = Y.indexOf || function (b) {
                    for (var f = 0, c = this.length; c > f; f++)
                        if (this[f] === b) return f;
                    return -1
                },
                F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
                da = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
                P = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + da.replace(3, 8) + ")*)|.*)\\)|)",
                aa = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                ea = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
                mb = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                fb = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
                T = RegExp(P),
                W = RegExp("^" + F + "$"),
                U = {
                    ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                    CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                    TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + da),
                    PSEUDO: RegExp("^" + P),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                        "i"),
                    bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
                    needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                },
                Z = /^(?:input|select|textarea|button)$/i,
                Da = /^h\d$/i,
                wa = /^[^{]+\{\s*\[native \w/,
                ha = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Ya = /[+~]/,
                Ba = /'|\\/g,
                Aa = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)",
                    "ig"),
                va = function (b, f, c) {
                    b = "0x" + f - 65536;
                    return b !== b || c ? f : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320)
                };
            try {
                N.apply(Y = Ja.call(ua.childNodes), ua.childNodes)
            } catch (Na) {
                N = {
                    apply: Y.length ? function (b, f) {
                        S.apply(b, Ja.call(f))
                    } : function (b, f) {
                        for (var c = b.length, p = 0; b[c++] = f[p++];);
                        b.length = c - 1
                    }
                }
            }
            x = f.support = {};
            D = f.isXML = function (b) {
                return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
            };
            w = f.setDocument = function (b) {
                var f, c = b ? b.ownerDocument || b : ua,
                    b = c.defaultView;
                return c !== ja && 9 === c.nodeType && c.documentElement ? (ja = c, R = c.documentElement, E = !D(c), b && b !== b.top && (b.addEventListener ? b.addEventListener("unload", function () {
                        w()
                    }, !1) : b.attachEvent && b.attachEvent("onunload", function () {
                        w()
                    })), x.attributes = h(function (b) {
                        return b.className = "i", !b.getAttribute("className")
                    }), x.getElementsByTagName = h(function (b) {
                        return b.appendChild(c.createComment("")), !b.getElementsByTagName("*").length
                    }), x.getElementsByClassName = wa.test(c.getElementsByClassName) && h(function (b) {
                        return b.innerHTML =
                            "<div class='a'></div><div class='a i'></div>", b.firstChild.className = "i", 2 === b.getElementsByClassName("i").length
                    }), x.getById = h(function (b) {
                        return R.appendChild(b).id = Q, !c.getElementsByName || !c.getElementsByName(Q).length
                    }), x.getById ? (m.find.ID = function (b, f) {
                        if (typeof f.getElementById !== Ea && E) {
                            var c = f.getElementById(b);
                            return c && c.parentNode ? [c] : []
                        }
                    }, m.filter.ID = function (b) {
                        var f = b.replace(Aa, va);
                        return function (b) {
                            return b.getAttribute("id") === f
                        }
                    }) : (delete m.find.ID, m.filter.ID = function (b) {
                        var f =
                            b.replace(Aa, va);
                        return function (b) {
                            return (b = typeof b.getAttributeNode !== Ea && b.getAttributeNode("id")) && b.value === f
                        }
                    }), m.find.TAG = x.getElementsByTagName ? function (b, f) {
                        return typeof f.getElementsByTagName !== Ea ? f.getElementsByTagName(b) : void 0
                    } : function (b, f) {
                        var c, p = [],
                            a = 0,
                            B = f.getElementsByTagName(b);
                        if ("*" === b) {
                            for (; c = B[a++];) 1 === c.nodeType && p.push(c);
                            return p
                        }
                        return B
                    }, m.find.CLASS = x.getElementsByClassName && function (b, f) {
                        return typeof f.getElementsByClassName !== Ea && E ? f.getElementsByClassName(b) : void 0
                    },
                    q = [], C = [], (x.qsa = wa.test(c.querySelectorAll)) && (h(function (b) {
                        b.innerHTML = "<select t=''><option selected=''></option></select>";
                        b.querySelectorAll("[t^='']").length && C.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                        b.querySelectorAll("[selected]").length || C.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                        b.querySelectorAll(":checked").length || C.push(":checked")
                    }), h(function (b) {
                        var f =
                            c.createElement("input");
                        f.setAttribute("type", "hidden");
                        b.appendChild(f).setAttribute("name", "D");
                        b.querySelectorAll("[name=d]").length && C.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                        b.querySelectorAll(":enabled").length || C.push(":enabled", ":disabled");
                        b.querySelectorAll("*,:x");
                        C.push(",.*:")
                    })), (x.matchesSelector = wa.test(Ma = R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && h(function (b) {
                        x.disconnectedMatch = Ma.call(b, "div");
                        Ma.call(b, "[s!='']:x");
                        q.push("!=",
                            P)
                    }), C = C.length && RegExp(C.join("|")), q = q.length && RegExp(q.join("|")), f = wa.test(R.compareDocumentPosition), z = f || wa.test(R.contains) ? function (b, f) {
                        var c = 9 === b.nodeType ? b.documentElement : b,
                            p = f && f.parentNode;
                        return b === p || !(!p || 1 !== p.nodeType || !(c.contains ? c.contains(p) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(p)))
                    } : function (b, f) {
                        if (f)
                            for (; f = f.parentNode;)
                                if (f === b) return !0;
                        return !1
                    }, A = f ? function (b, f) {
                        if (b === f) return n = !0, 0;
                        var p = !b.compareDocumentPosition - !f.compareDocumentPosition;
                        return p ?
                            p : (p = (b.ownerDocument || b) === (f.ownerDocument || f) ? b.compareDocumentPosition(f) : 1, 1 & p || !x.sortDetached && f.compareDocumentPosition(b) === p ? b === c || b.ownerDocument === ua && z(ua, b) ? -1 : f === c || f.ownerDocument === ua && z(ua, f) ? 1 : H ? sa.call(H, b) - sa.call(H, f) : 0 : 4 & p ? -1 : 1)
                    } : function (b, f) {
                        if (b === f) return n = !0, 0;
                        var p, a = 0;
                        p = b.parentNode;
                        var B = f.parentNode,
                            h = [b],
                            o = [f];
                        if (!p || !B) return b === c ? -1 : f === c ? 1 : p ? -1 : B ? 1 : H ? sa.call(H, b) - sa.call(H, f) : 0;
                        if (p === B) return k(b, f);
                        for (p = b; p = p.parentNode;) h.unshift(p);
                        for (p = f; p = p.parentNode;) o.unshift(p);
                        for (; h[a] === o[a];) a++;
                        return a ? k(h[a], o[a]) : h[a] === ua ? -1 : o[a] === ua ? 1 : 0
                    }, c) : ja
            };
            f.matches = function (b, c) {
                return f(b, null, null, c)
            };
            f.matchesSelector = function (b, c) {
                if ((b.ownerDocument || b) !== ja && w(b), c = c.replace(fb, "='$1']"), !(!x.matchesSelector || !E || q && q.test(c) || C && C.test(c))) try {
                    var p = Ma.call(b, c);
                    if (p || x.disconnectedMatch || b.document && 11 !== b.document.nodeType) return p
                } catch (a) {}
                return 0 < f(c, ja, null, [b]).length
            };
            f.contains = function (b, f) {
                return (b.ownerDocument || b) !== ja && w(b), z(b, f)
            };
            f.attr = function (b,
                f) {
                (b.ownerDocument || b) !== ja && w(b);
                var c = m.attrHandle[f.toLowerCase()],
                    c = c && nb.call(m.attrHandle, f.toLowerCase()) ? c(b, f, !E) : void 0;
                return void 0 !== c ? c : x.attributes || !E ? b.getAttribute(f) : (c = b.getAttributeNode(f)) && c.specified ? c.value : null
            };
            f.error = function (b) {
                throw Error("Syntax error, unrecognized expression: " + b);
            };
            f.uniqueSort = function (b) {
                var f, c = [],
                    p = 0,
                    a = 0;
                if (n = !x.detectDuplicates, H = !x.sortStable && b.slice(0), b.sort(A), n) {
                    for (; f = b[a++];) f === b[a] && (p = c.push(a));
                    for (; p--;) b.splice(c[p], 1)
                }
                return H =
                    null, b
            };
            I = f.getText = function (b) {
                var f, c = "",
                    p = 0;
                if (f = b.nodeType)
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof b.textContent) return b.textContent;
                        for (b = b.firstChild; b; b = b.nextSibling) c += I(b)
                    } else {
                        if (3 === f || 4 === f) return b.nodeValue
                    } else
                    for (; f = b[p++];) c += I(f);
                return c
            };
            m = f.selectors = {
                cacheLength: 50,
                createPseudo: a,
                match: U,
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
                    ATTR: function (b) {
                        return b[1] =
                            b[1].replace(Aa, va), b[3] = (b[4] || b[5] || "").replace(Aa, va), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
                    },
                    CHILD: function (b) {
                        return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || f.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && f.error(b[0]), b
                    },
                    PSEUDO: function (b) {
                        var f, c = !b[5] && b[2];
                        return U.CHILD.test(b[0]) ? null : (b[3] && void 0 !== b[4] ? b[2] = b[4] : c && T.test(c) && (f = j(c, !0)) && (f = c.indexOf(")", c.length - f) - c.length) && (b[0] = b[0].slice(0,
                            f), b[2] = c.slice(0, f)), b.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (b) {
                        var f = b.replace(Aa, va).toLowerCase();
                        return "*" === b ? function () {
                            return !0
                        } : function (b) {
                            return b.nodeName && b.nodeName.toLowerCase() === f
                        }
                    },
                    CLASS: function (b) {
                        var f = ia[b + " "];
                        return f || (f = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && ia(b, function (b) {
                            return f.test("string" == typeof b.className && b.className || typeof b.getAttribute !== Ea && b.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (b, c, p) {
                        return function (a) {
                            a = f.attr(a, b);
                            return null ==
                                a ? "!=" === c : c ? (a += "", "=" === c ? a === p : "!=" === c ? a !== p : "^=" === c ? p && 0 === a.indexOf(p) : "*=" === c ? p && -1 < a.indexOf(p) : "$=" === c ? p && a.slice(-p.length) === p : "~=" === c ? -1 < (" " + a + " ").indexOf(p) : "|=" === c ? a === p || a.slice(0, p.length + 1) === p + "-" : !1) : !0
                        }
                    },
                    CHILD: function (b, f, c, p, a) {
                        var B = "nth" !== b.slice(0, 3),
                            h = "last" !== b.slice(-4),
                            o = "of-type" === f;
                        return 1 === p && 0 === a ? function (b) {
                            return !!b.parentNode
                        } : function (f, c, k) {
                            var r, e, ba, i, g, na, c = B !== h ? "nextSibling" : "previousSibling",
                                J = f.parentNode,
                                j = o && f.nodeName.toLowerCase(),
                                k = !k &&
                                !o;
                            if (J) {
                                if (B) {
                                    for (; c;) {
                                        for (ba = f; ba = ba[c];)
                                            if (o ? ba.nodeName.toLowerCase() === j : 1 === ba.nodeType) return !1;
                                        na = c = "only" === b && !na && "nextSibling"
                                    }
                                    return !0
                                }
                                if (na = [h ? J.firstChild : J.lastChild], h && k)
                                    for (e = J[Q] || (J[Q] = {}), r = e[b] || [], g = r[0] === G && r[1], i = r[0] === G && r[2], ba = g && J.childNodes[g]; ba = ++g && ba && ba[c] || (i = g = 0) || na.pop();) {
                                        if (1 === ba.nodeType && ++i && ba === f) {
                                            e[b] = [G, g, i];
                                            break
                                        }
                                    } else if (k && (r = (f[Q] || (f[Q] = {}))[b]) && r[0] === G) i = r[1];
                                    else
                                        for (;
                                            (ba = ++g && ba && ba[c] || (i = g = 0) || na.pop()) && (!(o ? ba.nodeName.toLowerCase() ===
                                                j : 1 === ba.nodeType) || !(++i && (k && ((ba[Q] || (ba[Q] = {}))[b] = [G, i]), ba === f))););
                                return i -= a, i === p || 0 === i % p && 0 <= i / p
                            }
                        }
                    },
                    PSEUDO: function (b, c) {
                        var p, h = m.pseudos[b] || m.setFilters[b.toLowerCase()] || f.error("unsupported pseudo: " + b);
                        return h[Q] ? h(c) : 1 < h.length ? (p = [b, b, "", c], m.setFilters.hasOwnProperty(b.toLowerCase()) ? a(function (b, f) {
                            for (var p, a = h(b, c), B = a.length; B--;) p = sa.call(b, a[B]), b[p] = !(f[p] = a[B])
                        }) : function (b) {
                            return h(b, 0, p)
                        }) : h
                    }
                },
                pseudos: {
                    not: a(function (b) {
                        var f = [],
                            c = [],
                            p = v(b.replace(aa, "$1"));
                        return p[Q] ?
                            a(function (b, f, c, a) {
                                for (var h, c = p(b, null, a, []), a = b.length; a--;)(h = c[a]) && (b[a] = !(f[a] = h))
                            }) : function (b, a, h) {
                                return f[0] = b, p(f, null, h, c), !c.pop()
                            }
                    }),
                    has: a(function (b) {
                        return function (c) {
                            return 0 < f(b, c).length
                        }
                    }),
                    contains: a(function (b) {
                        return function (f) {
                            return -1 < (f.textContent || f.innerText || I(f)).indexOf(b)
                        }
                    }),
                    lang: a(function (b) {
                        return W.test(b || "") || f.error("unsupported lang: " + b), b = b.replace(Aa, va).toLowerCase(),
                            function (f) {
                                var c;
                                do
                                    if (c = E ? f.lang : f.getAttribute("xml:lang") || f.getAttribute("lang")) return c =
                                        c.toLowerCase(), c === b || 0 === c.indexOf(b + "-");
                                while ((f = f.parentNode) && 1 === f.nodeType);
                                return !1
                            }
                    }),
                    target: function (f) {
                        var c = b.location && b.location.hash;
                        return c && c.slice(1) === f.id
                    },
                    root: function (b) {
                        return b === R
                    },
                    focus: function (b) {
                        return b === ja.activeElement && (!ja.hasFocus || ja.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex)
                    },
                    enabled: function (b) {
                        return !1 === b.disabled
                    },
                    disabled: function (b) {
                        return !0 === b.disabled
                    },
                    checked: function (b) {
                        var f = b.nodeName.toLowerCase();
                        return "input" === f && !!b.checked || "option" ===
                            f && !!b.selected
                    },
                    selected: function (b) {
                        return !0 === b.selected
                    },
                    empty: function (b) {
                        for (b = b.firstChild; b; b = b.nextSibling)
                            if (6 > b.nodeType) return !1;
                        return !0
                    },
                    parent: function (b) {
                        return !m.pseudos.empty(b)
                    },
                    header: function (b) {
                        return Da.test(b.nodeName)
                    },
                    input: function (b) {
                        return Z.test(b.nodeName)
                    },
                    button: function (b) {
                        var f = b.nodeName.toLowerCase();
                        return "input" === f && "button" === b.type || "button" === f
                    },
                    text: function (b) {
                        var f;
                        return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (f = b.getAttribute("type")) ||
                            "text" === f.toLowerCase())
                    },
                    first: i(function () {
                        return [0]
                    }),
                    last: i(function (b, f) {
                        return [f - 1]
                    }),
                    eq: i(function (b, f, c) {
                        return [0 > c ? c + f : c]
                    }),
                    even: i(function (b, f) {
                        for (var c = 0; f > c; c += 2) b.push(c);
                        return b
                    }),
                    odd: i(function (b, f) {
                        for (var c = 1; f > c; c += 2) b.push(c);
                        return b
                    }),
                    lt: i(function (b, f, c) {
                        for (f = 0 > c ? c + f : c; 0 <= --f;) b.push(f);
                        return b
                    }),
                    gt: i(function (b, f, c) {
                        for (c = 0 > c ? c + f : c; ++c < f;) b.push(c);
                        return b
                    })
                }
            };
            m.pseudos.nth = m.pseudos.eq;
            for (K in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) m.pseudos[K] = r(K);
            for (K in {
                submit: !0,
                reset: !0
            }) m.pseudos[K] = e(K);
            J.prototype = m.filters = m.pseudos;
            m.setFilters = new J;
            v = f.compile = function (b, f) {
                var c, p = [],
                    a = [],
                    h = M[b + " "];
                if (!h) {
                    for (f || (f = j(b)), c = f.length; c--;) h = u(f[c]), h[Q] ? p.push(h) : a.push(h);
                    h = M(b, oa(a, p))
                }
                return h
            };
            return x.sortStable = Q.split("").sort(A).join("") === Q, x.detectDuplicates = !!n, w(), x.sortDetached = h(function (b) {
                return 1 & b.compareDocumentPosition(ja.createElement("div"))
            }), h(function (b) {
                return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href")
            }) || o("type|href|height|width",
                function (b, f, c) {
                    return c ? void 0 : b.getAttribute(f, "type" === f.toLowerCase() ? 1 : 2)
                }), x.attributes && h(function (b) {
                return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value")
            }) || o("value", function (b, f, c) {
                return c || "input" !== b.nodeName.toLowerCase() ? void 0 : b.defaultValue
            }), h(function (b) {
                return null == b.getAttribute("disabled")
            }) || o("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (b,
                f, c) {
                var p;
                return c ? void 0 : !0 === b[f] ? f.toLowerCase() : (p = b.getAttributeNode(f)) && p.specified ? p.value : null
            }), f
        }(d);
    c.find = Fa;
    c.expr = Fa.selectors;
    c.expr[":"] = c.expr.pseudos;
    c.unique = Fa.uniqueSort;
    c.text = Fa.getText;
    c.isXMLDoc = Fa.isXML;
    c.contains = Fa.contains;
    var Oa = c.expr.match.needsContext,
        Sa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Ca = /^.[^:#\[\.,]*$/;
    c.filter = function (b, f, p) {
        var a = f[0];
        return p && (b = ":not(" + b + ")"), 1 === f.length && 1 === a.nodeType ? c.find.matchesSelector(a, b) ? [a] : [] : c.find.matches(b, c.grep(f, function (b) {
            return 1 ===
                b.nodeType
        }))
    };
    c.fn.extend({
        find: function (b) {
            var f, p = this.length,
                a = [],
                h = this;
            if ("string" != typeof b) return this.pushStack(c(b).filter(function () {
                for (f = 0; p > f; f++)
                    if (c.contains(h[f], this)) return !0
            }));
            for (f = 0; p > f; f++) c.find(b, h[f], a);
            return a = this.pushStack(1 < p ? c.unique(a) : a), a.selector = this.selector ? this.selector + " " + b : b, a
        },
        filter: function (b) {
            return this.pushStack(q(this, b || [], !1))
        },
        not: function (b) {
            return this.pushStack(q(this, b || [], !0))
        },
        is: function (b) {
            return !!q(this, "string" == typeof b && Oa.test(b) ?
                c(b) : b || [], !1).length
        }
    });
    var za, Ga = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (c.fn.init = function (b, f) {
        var p, a;
        if (!b) return this;
        if ("string" == typeof b) {
            if (p = "<" === b[0] && ">" === b[b.length - 1] && 3 <= b.length ? [null, b, null] : Ga.exec(b), !p || !p[1] && f) return !f || f.jquery ? (f || za).find(b) : this.constructor(f).find(b);
            if (p[1]) {
                if (f = f instanceof c ? f[0] : f, c.merge(this, c.parseHTML(p[1], f && f.nodeType ? f.ownerDocument || f : L, !0)), Sa.test(p[1]) && c.isPlainObject(f))
                    for (p in f) c.isFunction(this[p]) ? this[p](f[p]) : this.attr(p, f[p]);
                return this
            }
            return a = L.getElementById(p[2]), a && a.parentNode && (this.length = 1, this[0] = a), this.context = L, this.selector = b, this
        }
        return b.nodeType ? (this.context = this[0] = b, this.length = 1, this) : c.isFunction(b) ? "undefined" != typeof za.ready ? za.ready(b) : b(c) : (void 0 !== b.selector && (this.selector = b.selector, this.context = b.context), c.makeArray(b, this))
    }).prototype = c.fn;
    za = c(L);
    var Ta = /^(?:parents|prev(?:Until|All))/,
        Ua = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    c.extend({
        dir: function (b, f, p) {
            for (var a = [], h = void 0 !==
                    p;
                (b = b[f]) && 9 !== b.nodeType;)
                if (1 === b.nodeType) {
                    if (h && c(b).is(p)) break;
                    a.push(b)
                }
            return a
        },
        sibling: function (b, f) {
            for (var c = []; b; b = b.nextSibling) 1 === b.nodeType && b !== f && c.push(b);
            return c
        }
    });
    c.fn.extend({
        has: function (b) {
            var f = c(b, this),
                p = f.length;
            return this.filter(function () {
                for (var b = 0; p > b; b++)
                    if (c.contains(this, f[b])) return !0
            })
        },
        closest: function (b, f) {
            for (var p, a = 0, h = this.length, o = [], k = Oa.test(b) || "string" != typeof b ? c(b, f || this.context) : 0; h > a; a++)
                for (p = this[a]; p && p !== f; p = p.parentNode)
                    if (11 > p.nodeType &&
                        (k ? -1 < k.index(p) : 1 === p.nodeType && c.find.matchesSelector(p, b))) {
                        o.push(p);
                        break
                    }
            return this.pushStack(1 < o.length ? c.unique(o) : o)
        },
        index: function (b) {
            return b ? "string" == typeof b ? h.call(c(b), this[0]) : h.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (b, f) {
            return this.pushStack(c.unique(c.merge(this.get(), c(b, f))))
        },
        addBack: function (b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    c.each({
        parent: function (b) {
            return (b = b.parentNode) &&
                11 !== b.nodeType ? b : null
        },
        parents: function (b) {
            return c.dir(b, "parentNode")
        },
        parentsUntil: function (b, f, p) {
            return c.dir(b, "parentNode", p)
        },
        next: function (b) {
            return l(b, "nextSibling")
        },
        prev: function (b) {
            return l(b, "previousSibling")
        },
        nextAll: function (b) {
            return c.dir(b, "nextSibling")
        },
        prevAll: function (b) {
            return c.dir(b, "previousSibling")
        },
        nextUntil: function (b, f, p) {
            return c.dir(b, "nextSibling", p)
        },
        prevUntil: function (b, f, p) {
            return c.dir(b, "previousSibling", p)
        },
        siblings: function (b) {
            return c.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function (b) {
            return c.sibling(b.firstChild)
        },
        contents: function (b) {
            return b.contentDocument || c.merge([], b.childNodes)
        }
    }, function (b, f) {
        c.fn[b] = function (p, a) {
            var h = c.map(this, f, p);
            return "Until" !== b.slice(-5) && (a = p), a && "string" == typeof a && (h = c.filter(a, h)), 1 < this.length && (Ua[b] || c.unique(h), Ta.test(b) && h.reverse()), this.pushStack(h)
        }
    });
    var pa = /\S+/g,
        Qa = {};
    c.Callbacks = function (b) {
        var b = "string" == typeof b ? Qa[b] || z(b) : c.extend({}, b),
            f, p, a, h, o, k, r = [],
            e = !b.once && [],
            i = function (c) {
                for (f =
                    b.memory && c, p = !0, k = h || 0, h = 0, o = r.length, a = !0; r && o > k; k++)
                    if (!1 === r[k].apply(c[0], c[1]) && b.stopOnFalse) {
                        f = !1;
                        break
                    }
                a = !1;
                r && (e ? e.length && i(e.shift()) : f ? r = [] : g.disable())
            },
            g = {
                add: function () {
                    if (r) {
                        var p = r.length;
                        (function Bb(f) {
                            c.each(f, function (f, p) {
                                var a = c.type(p);
                                "function" === a ? b.unique && g.has(p) || r.push(p) : p && p.length && "string" !== a && Bb(p)
                            })
                        })(arguments);
                        a ? o = r.length : f && (h = p, i(f))
                    }
                    return this
                },
                remove: function () {
                    return r && c.each(arguments, function (b, f) {
                        for (var p; - 1 < (p = c.inArray(f, r, p));) r.splice(p, 1),
                            a && (o >= p && o--, k >= p && k--)
                    }), this
                },
                has: function (b) {
                    return b ? -1 < c.inArray(b, r) : !(!r || !r.length)
                },
                empty: function () {
                    return r = [], o = 0, this
                },
                disable: function () {
                    return r = e = f = void 0, this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return e = void 0, f || g.disable(), this
                },
                locked: function () {
                    return !e
                },
                fireWith: function (b, f) {
                    return !r || p && !e || (f = f || [], f = [b, f.slice ? f.slice() : f], a ? e.push(f) : i(f)), this
                },
                fire: function () {
                    return g.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!p
                }
            };
        return g
    };
    c.extend({
        Deferred: function (b) {
            var f = [
                    ["resolve", "done", c.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", c.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", c.Callbacks("memory")]
                ],
                p = "pending",
                a = {
                    state: function () {
                        return p
                    },
                    always: function () {
                        return h.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var b = arguments;
                        return c.Deferred(function (p) {
                            c.each(f, function (f, o) {
                                var k = c.isFunction(b[f]) && b[f];
                                h[o[1]](function () {
                                    var b = k && k.apply(this, arguments);
                                    b && c.isFunction(b.promise) ? b.promise().done(p.resolve).fail(p.reject).progress(p.notify) :
                                        p[o[0] + "With"](this === a ? p.promise() : this, k ? [b] : arguments)
                                })
                            });
                            b = null
                        }).promise()
                    },
                    promise: function (b) {
                        return null != b ? c.extend(b, a) : a
                    }
                },
                h = {};
            return a.pipe = a.then, c.each(f, function (b, c) {
                var o = c[2],
                    k = c[3];
                a[c[1]] = o.add;
                k && o.add(function () {
                    p = k
                }, f[1 ^ b][2].disable, f[2][2].lock);
                h[c[0]] = function () {
                    return h[c[0] + "With"](this === h ? a : this, arguments), this
                };
                h[c[0] + "With"] = o.fireWith
            }), a.promise(h), b && b.call(h, h), h
        },
        when: function (b) {
            var f = 0,
                p = ha.call(arguments),
                a = p.length,
                h = 1 !== a || b && c.isFunction(b.promise) ? a :
                0,
                o = 1 === h ? b : c.Deferred(),
                k = function (b, f, c) {
                    return function (p) {
                        f[b] = this;
                        c[b] = 1 < arguments.length ? ha.call(arguments) : p;
                        c === r ? o.notifyWith(f, c) : --h || o.resolveWith(f, c)
                    }
                },
                r, e, i;
            if (1 < a)
                for (r = Array(a), e = Array(a), i = Array(a); a > f; f++) p[f] && c.isFunction(p[f].promise) ? p[f].promise().done(k(f, i, p)).fail(o.reject).progress(k(f, e, r)) : --h;
            return h || o.resolveWith(i, p), o.promise()
        }
    });
    var Ha;
    c.fn.ready = function (b) {
        return c.ready.promise().done(b), this
    };
    c.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (b) {
            b ? c.readyWait++ :
                c.ready(!0)
        },
        ready: function (b) {
            (!0 === b ? --c.readyWait : c.isReady) || (c.isReady = !0, !0 !== b && 0 < --c.readyWait || (Ha.resolveWith(L, [c]), c.fn.trigger && c(L).trigger("ready").off("ready")))
        }
    });
    c.ready.promise = function (b) {
        return Ha || (Ha = c.Deferred(), "complete" === L.readyState ? setTimeout(c.ready) : (L.addEventListener("DOMContentLoaded", u, !1), d.addEventListener("load", u, !1))), Ha.promise(b)
    };
    c.ready.promise();
    var ta = c.access = function (b, f, p, a, h, o, k) {
        var r = 0,
            e = b.length,
            i = null == p;
        if ("object" === c.type(p))
            for (r in h = !0,
                p) c.access(b, f, r, p[r], !0, o, k);
        else if (void 0 !== a && (h = !0, c.isFunction(a) || (k = !0), i && (k ? (f.call(b, a), f = null) : (i = f, f = function (b, f, p) {
            return i.call(c(b), p)
        })), f))
            for (; e > r; r++) f(b[r], p, k ? a : a.call(b[r], r, f(b[r], p)));
        return h ? b : i ? f.call(b) : e ? f(b[0], p) : o
    };
    c.acceptData = function (b) {
        return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
    };
    w.uid = 1;
    w.accepts = c.acceptData;
    w.prototype = {
        key: function (b) {
            if (!w.accepts(b)) return 0;
            var f = {},
                p = b[this.expando];
            if (!p) {
                p = w.uid++;
                try {
                    f[this.expando] = {
                        value: p
                    }, Object.defineProperties(b,
                        f)
                } catch (a) {
                    f[this.expando] = p, c.extend(b, f)
                }
            }
            return this.cache[p] || (this.cache[p] = {}), p
        },
        set: function (b, f, p) {
            var a, b = this.key(b),
                h = this.cache[b];
            if ("string" == typeof f) h[f] = p;
            else if (c.isEmptyObject(h)) c.extend(this.cache[b], f);
            else
                for (a in f) h[a] = f[a];
            return h
        },
        get: function (b, f) {
            var c = this.cache[this.key(b)];
            return void 0 === f ? c : c[f]
        },
        access: function (b, f, a) {
            var h;
            return void 0 === f || f && "string" == typeof f && void 0 === a ? (h = this.get(b, f), void 0 !== h ? h : this.get(b, c.camelCase(f))) : (this.set(b, f, a), void 0 !==
                a ? a : f)
        },
        remove: function (b, f) {
            var a, h, o;
            a = this.key(b);
            var k = this.cache[a];
            if (void 0 === f) this.cache[a] = {};
            else {
                c.isArray(f) ? h = f.concat(f.map(c.camelCase)) : (o = c.camelCase(f), f in k ? h = [f, o] : (h = o, h = h in k ? [h] : h.match(pa) || []));
                a = h.length;
                for (; a--;) delete k[h[a]]
            }
        },
        hasData: function (b) {
            return !c.isEmptyObject(this.cache[b[this.expando]] || {})
        },
        discard: function (b) {
            b[this.expando] && delete this.cache[b[this.expando]]
        }
    };
    var P = new w,
        la = new w,
        ra = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        $a = /([A-Z])/g;
    c.extend({
        hasData: function (b) {
            return la.hasData(b) ||
                P.hasData(b)
        },
        data: function (b, f, c) {
            return la.access(b, f, c)
        },
        removeData: function (b, f) {
            la.remove(b, f)
        },
        _data: function (b, f, c) {
            return P.access(b, f, c)
        },
        _removeData: function (b, f) {
            P.remove(b, f)
        }
    });
    c.fn.extend({
        data: function (b, f) {
            var a, h, o, k = this[0],
                r = k && k.attributes;
            if (void 0 === b) {
                if (this.length && (o = la.get(k), 1 === k.nodeType && !P.get(k, "hasDataAttrs"))) {
                    for (a = r.length; a--;) h = r[a].name, 0 === h.indexOf("data-") && (h = c.camelCase(h.slice(5)), s(k, h, o[h]));
                    P.set(k, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof b ?
                this.each(function () {
                    la.set(this, b)
                }) : ta(this, function (f) {
                    var a, p = c.camelCase(b);
                    if (k && void 0 === f) {
                        if ((a = la.get(k, b), void 0 !== a) || (a = la.get(k, p), void 0 !== a) || (a = s(k, p, void 0), void 0 !== a)) return a
                    } else this.each(function () {
                        var c = la.get(this, p);
                        la.set(this, p, f); - 1 !== b.indexOf("-") && void 0 !== c && la.set(this, b, f)
                    })
                }, null, f, 1 < arguments.length, null, !0)
        },
        removeData: function (b) {
            return this.each(function () {
                la.remove(this, b)
            })
        }
    });
    c.extend({
        queue: function (b, f, a) {
            var h;
            return b ? (f = (f || "fx") + "queue", h = P.get(b,
                f), a && (!h || c.isArray(a) ? h = P.access(b, f, c.makeArray(a)) : h.push(a)), h || []) : void 0
        },
        dequeue: function (b, f) {
            var f = f || "fx",
                a = c.queue(b, f),
                h = a.length,
                o = a.shift(),
                k = c._queueHooks(b, f),
                r = function () {
                    c.dequeue(b, f)
                };
            "inprogress" === o && (o = a.shift(), h--);
            o && ("fx" === f && a.unshift("inprogress"), delete k.stop, o.call(b, r, k));
            !h && k && k.empty.fire()
        },
        _queueHooks: function (b, f) {
            var a = f + "queueHooks";
            return P.get(b, a) || P.access(b, a, {
                empty: c.Callbacks("once memory").add(function () {
                    P.remove(b, [f + "queue", a])
                })
            })
        }
    });
    c.fn.extend({
        queue: function (b,
            f) {
            var a = 2;
            return "string" != typeof b && (f = b, b = "fx", a--), arguments.length < a ? c.queue(this[0], b) : void 0 === f ? this : this.each(function () {
                var a = c.queue(this, b, f);
                c._queueHooks(this, b);
                "fx" === b && "inprogress" !== a[0] && c.dequeue(this, b)
            })
        },
        dequeue: function (b) {
            return this.each(function () {
                c.dequeue(this, b)
            })
        },
        clearQueue: function (b) {
            return this.queue(b || "fx", [])
        },
        promise: function (b, f) {
            var a, h = 1,
                o = c.Deferred(),
                k = this,
                r = this.length,
                e = function () {
                    --h || o.resolveWith(k, [k])
                };
            for ("string" != typeof b && (f = b, b = void 0), b = b ||
                "fx"; r--;) a = P.get(k[r], b + "queueHooks"), a && a.empty && (h++, a.empty.add(e));
            return e(), o.promise(f)
        }
    });
    var ga = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ya = ["Top", "Right", "Bottom", "Left"],
        qa = function (b, f) {
            return b = f || b, "none" === c.css(b, "display") || !c.contains(b.ownerDocument, b)
        },
        bb = /^(?:checkbox|radio)$/i;
    (function () {
        var b = L.createDocumentFragment().appendChild(L.createElement("div"));
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        H.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked;
        b.innerHTML = "<textarea>x</textarea>";
        H.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    })();
    H.focusinBubbles = "onfocusin" in d;
    var Va = /^key/,
        xa = /^(?:mouse|contextmenu)|click/,
        Ia = /^(?:focusinfocus|focusoutblur)$/,
        cb = /^([^.]*)(?:\.(.+)|)$/;
    c.event = {
        global: {},
        add: function (b, f, a, h, o) {
            var k, r, e, i, g, J, j, y, d, X, x;
            if (g = P.get(b))
                for (a.handler && (k = a, a = k.handler, o = k.selector), a.guid || (a.guid = c.guid++), (i = g.events) || (i = g.events = {}), (r = g.handle) || (r = g.handle = function (f) {
                    return "undefined" !== typeof c && c.event.triggered !==
                        f.type ? c.event.dispatch.apply(b, arguments) : void 0
                }), f = (f || "").match(pa) || [""], g = f.length; g--;) e = cb.exec(f[g]) || [], d = x = e[1], X = (e[2] || "").split(".").sort(), d && (j = c.event.special[d] || {}, d = (o ? j.delegateType : j.bindType) || d, j = c.event.special[d] || {}, J = c.extend({
                    type: d,
                    origType: x,
                    data: h,
                    handler: a,
                    guid: a.guid,
                    selector: o,
                    needsContext: o && c.expr.match.needsContext.test(o),
                    namespace: X.join(".")
                }, k), (y = i[d]) || (y = i[d] = [], y.delegateCount = 0, j.setup && !1 !== j.setup.call(b, h, X, r) || b.addEventListener && b.addEventListener(d,
                    r, !1)), j.add && (j.add.call(b, J), J.handler.guid || (J.handler.guid = a.guid)), o ? y.splice(y.delegateCount++, 0, J) : y.push(J), c.event.global[d] = !0)
        },
        remove: function (b, f, a, h, o) {
            var k, r, e, i, g, J, j, d, y, X, x, O = P.hasData(b) && P.get(b);
            if (O && (i = O.events)) {
                for (f = (f || "").match(pa) || [""], g = f.length; g--;)
                    if (e = cb.exec(f[g]) || [], y = x = e[1], X = (e[2] || "").split(".").sort(), y) {
                        for (j = c.event.special[y] || {}, y = (h ? j.delegateType : j.bindType) || y, d = i[y] || [], e = e[2] && RegExp("(^|\\.)" + X.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = k = d.length; k--;) J =
                            d[k], !o && x !== J.origType || a && a.guid !== J.guid || e && !e.test(J.namespace) || h && h !== J.selector && ("**" !== h || !J.selector) || (d.splice(k, 1), J.selector && d.delegateCount--, j.remove && j.remove.call(b, J));
                        r && !d.length && (j.teardown && !1 !== j.teardown.call(b, X, O.handle) || c.removeEvent(b, y, O.handle), delete i[y])
                    } else
                        for (y in i) c.event.remove(b, y + f[g], a, h, !0);
                c.isEmptyObject(i) && (delete O.handle, P.remove(b, "events"))
            }
        },
        trigger: function (b, f, a, h) {
            var o, k, r, e, i, g, J, j = [a || L],
                y = I.call(b, "type") ? b.type : b;
            o = I.call(b, "namespace") ?
                b.namespace.split(".") : [];
            if (k = r = a = a || L, 3 !== a.nodeType && 8 !== a.nodeType && !Ia.test(y + c.event.triggered) && (0 <= y.indexOf(".") && (o = y.split("."), y = o.shift(), o.sort()), i = 0 > y.indexOf(":") && "on" + y, b = b[c.expando] ? b : new c.Event(y, "object" == typeof b && b), b.isTrigger = h ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = a), f = null == f ? [b] : c.makeArray(f, [b]), J = c.event.special[y] || {}, h || !J.trigger || !1 !== J.trigger.apply(a,
                f))) {
                if (!h && !J.noBubble && !c.isWindow(a)) {
                    for (e = J.delegateType || y, Ia.test(e + y) || (k = k.parentNode); k; k = k.parentNode) j.push(k), r = k;
                    r === (a.ownerDocument || L) && j.push(r.defaultView || r.parentWindow || d)
                }
                for (o = 0;
                    (k = j[o++]) && !b.isPropagationStopped();) b.type = 1 < o ? e : J.bindType || y, g = (P.get(k, "events") || {})[b.type] && P.get(k, "handle"), g && g.apply(k, f), g = i && k[i], g && g.apply && c.acceptData(k) && (b.result = g.apply(k, f), !1 === b.result && b.preventDefault());
                return b.type = y, h || b.isDefaultPrevented() || J._default && !1 !== J._default.apply(j.pop(),
                    f) || !c.acceptData(a) || i && c.isFunction(a[y]) && !c.isWindow(a) && (r = a[i], r && (a[i] = null), c.event.triggered = y, a[y](), c.event.triggered = void 0, r && (a[i] = r)), b.result
            }
        },
        dispatch: function (b) {
            var b = c.event.fix(b),
                f, a, h, o, k, r = [],
                e = ha.call(arguments);
            f = (P.get(this, "events") || {})[b.type] || [];
            var i = c.event.special[b.type] || {};
            if (e[0] = b, b.delegateTarget = this, !i.preDispatch || !1 !== i.preDispatch.call(this, b)) {
                for (r = c.event.handlers.call(this, b, f), f = 0;
                    (o = r[f++]) && !b.isPropagationStopped();)
                    for (b.currentTarget = o.elem,
                        a = 0;
                        (k = o.handlers[a++]) && !b.isImmediatePropagationStopped();)(!b.namespace_re || b.namespace_re.test(k.namespace)) && (b.handleObj = k, b.data = k.data, h = ((c.event.special[k.origType] || {}).handle || k.handler).apply(o.elem, e), void 0 !== h && !1 === (b.result = h) && (b.preventDefault(), b.stopPropagation()));
                return i.postDispatch && i.postDispatch.call(this, b), b.result
            }
        },
        handlers: function (b, f) {
            var a, h, o, k, r = [],
                e = f.delegateCount,
                i = b.target;
            if (e && i.nodeType && (!b.button || "click" !== b.type))
                for (; i !== this; i = i.parentNode || this)
                    if (!0 !==
                        i.disabled || "click" !== b.type) {
                        for (h = [], a = 0; e > a; a++) k = f[a], o = k.selector + " ", void 0 === h[o] && (h[o] = k.needsContext ? 0 <= c(o, this).index(i) : c.find(o, this, null, [i]).length), h[o] && h.push(k);
                        h.length && r.push({
                            elem: i,
                            handlers: h
                        })
                    }
            return e < f.length && r.push({
                elem: this,
                handlers: f.slice(e)
            }), r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (b,
                f) {
                return null == b.which && (b.which = null != f.charCode ? f.charCode : f.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (b, f) {
                var c, a, h, o = f.button;
                return null == b.pageX && null != f.clientX && (c = b.target.ownerDocument || L, a = c.documentElement, h = c.body, b.pageX = f.clientX + (a && a.scrollLeft || h && h.scrollLeft || 0) - (a && a.clientLeft || h && h.clientLeft || 0), b.pageY = f.clientY + (a && a.scrollTop || h && h.scrollTop || 0) - (a && a.clientTop || h && h.clientTop ||
                    0)), b.which || void 0 === o || (b.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), b
            }
        },
        fix: function (b) {
            if (b[c.expando]) return b;
            var f, a, h;
            f = b.type;
            var o = b,
                k = this.fixHooks[f];
            for (k || (this.fixHooks[f] = k = xa.test(f) ? this.mouseHooks : Va.test(f) ? this.keyHooks : {}), h = k.props ? this.props.concat(k.props) : this.props, b = new c.Event(o), f = h.length; f--;) a = h[f], b[a] = o[a];
            return b.target || (b.target = L), 3 === b.target.nodeType && (b.target = b.target.parentNode), k.filter ? k.filter(b, o) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !==
                        j() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === j() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && c.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (b) {
                    return c.nodeName(b.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (b) {
                    void 0 !== b.result && (b.originalEvent.returnValue = b.result)
                }
            }
        },
        simulate: function (b, f, a, h) {
            b = c.extend(new c.Event, a, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            h ? c.event.trigger(b, null, f) : c.event.dispatch.call(f, b);
            b.isDefaultPrevented() && a.preventDefault()
        }
    };
    c.removeEvent = function (b, f, c) {
        b.removeEventListener && b.removeEventListener(f, c, !1)
    };
    c.Event = function (b, f) {
        return this instanceof c.Event ? (b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && b.getPreventDefault && b.getPreventDefault() ? A : v) : this.type = b, f && c.extend(this, f), this.timeStamp = b && b.timeStamp ||
            c.now(), void(this[c.expando] = !0)) : new c.Event(b, f)
    };
    c.Event.prototype = {
        isDefaultPrevented: v,
        isPropagationStopped: v,
        isImmediatePropagationStopped: v,
        preventDefault: function () {
            var b = this.originalEvent;
            this.isDefaultPrevented = A;
            b && b.preventDefault && b.preventDefault()
        },
        stopPropagation: function () {
            var b = this.originalEvent;
            this.isPropagationStopped = A;
            b && b.stopPropagation && b.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = A;
            this.stopPropagation()
        }
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (b, f) {
        c.event.special[b] = {
            delegateType: f,
            bindType: f,
            handle: function (b) {
                var a, h = b.relatedTarget,
                    o = b.handleObj;
                return (!h || h !== this && !c.contains(this, h)) && (b.type = o.origType, a = o.handler.apply(this, arguments), b.type = f), a
            }
        }
    });
    H.focusinBubbles || c.each({
        focus: "focusin",
        blur: "focusout"
    }, function (b, f) {
        var a = function (b) {
            c.event.simulate(f, b.target, c.event.fix(b), !0)
        };
        c.event.special[f] = {
            setup: function () {
                var c = this.ownerDocument || this,
                    h = P.access(c, f);
                h || c.addEventListener(b, a, !0);
                P.access(c, f, (h || 0) + 1)
            },
            teardown: function () {
                var c = this.ownerDocument || this,
                    h = P.access(c, f) - 1;
                h ? P.access(c, f, h) : (c.removeEventListener(b, a, !0), P.remove(c, f))
            }
        }
    });
    c.fn.extend({
        on: function (b, f, a, h, o) {
            var k, r;
            if ("object" == typeof b) {
                "string" != typeof f && (a = a || f, f = void 0);
                for (r in b) this.on(r, f, a, b[r], o);
                return this
            }
            if (null == a && null == h ? (h = f, a = f = void 0) : null == h && ("string" == typeof f ? (h = a, a = void 0) : (h = a, a = f, f = void 0)), !1 === h) h = v;
            else if (!h) return this;
            return 1 === o && (k = h, h = function (b) {
                return c().off(b),
                    k.apply(this, arguments)
            }, h.guid = k.guid || (k.guid = c.guid++)), this.each(function () {
                c.event.add(this, b, h, a, f)
            })
        },
        one: function (b, f, c, a) {
            return this.on(b, f, c, a, 1)
        },
        off: function (b, f, a) {
            var h, o;
            if (b && b.preventDefault && b.handleObj) return h = b.handleObj, c(b.delegateTarget).off(h.namespace ? h.origType + "." + h.namespace : h.origType, h.selector, h.handler), this;
            if ("object" == typeof b) {
                for (o in b) this.off(o, f, b[o]);
                return this
            }
            return (!1 === f || "function" == typeof f) && (a = f, f = void 0), !1 === a && (a = v), this.each(function () {
                c.event.remove(this,
                    b, a, f)
            })
        },
        trigger: function (b, f) {
            return this.each(function () {
                c.event.trigger(b, f, this)
            })
        },
        triggerHandler: function (b, f) {
            var a = this[0];
            return a ? c.event.trigger(b, f, a, !0) : void 0
        }
    });
    var Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        db = /<([\w:]+)/,
        jb = /<|&#?\w+;/,
        Wa = /<(?:script|style|link)/i,
        kb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        eb = /^$|\/(?:java|ecma)script/i,
        La = /^true\/(.*)/,
        o = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        r = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    r.optgroup = r.option;
    r.tbody = r.tfoot = r.colgroup = r.caption = r.thead;
    r.th = r.td;
    c.extend({
        clone: function (b, f, h) {
            var o, k, r, e, i = b.cloneNode(!0),
                g = c.contains(b.ownerDocument, b);
            if (!H.noCloneChecked && !(1 !== b.nodeType && 11 !== b.nodeType || c.isXMLDoc(b)))
                for (e = D(i), r = D(b), o = 0, k = r.length; k > o; o++) {
                    var J = r[o],
                        j = e[o],
                        y = j.nodeName.toLowerCase();
                    "input" === y && bb.test(J.type) ? j.checked = J.checked : ("input" === y || "textarea" === y) && (j.defaultValue = J.defaultValue)
                }
            if (f)
                if (h)
                    for (r = r || D(b), e = e || D(i), o = 0, k = r.length; k > o; o++) O(r[o], e[o]);
                else O(b, i);
            return e = D(i, "script"), 0 < e.length && a(e, !g && D(b, "script")), i
        },
        buildFragment: function (b, f, h, o) {
            for (var k, e, i, g, J, j, y = f.createDocumentFragment(), d = [], X = 0, x = b.length; x > X; X++)
                if (k = b[X], k || 0 === k)
                    if ("object" === c.type(k)) c.merge(d, k.nodeType ? [k] : k);
                    else if (jb.test(k)) {
                for (e = e || y.appendChild(f.createElement("div")),
                    i = (db.exec(k) || ["", ""])[1].toLowerCase(), g = r[i] || r._default, e.innerHTML = g[1] + k.replace(Pa, "<$1></$2>") + g[2], j = g[0]; j--;) e = e.lastChild;
                c.merge(d, e.childNodes);
                e = y.firstChild;
                e.textContent = ""
            } else d.push(f.createTextNode(k));
            for (y.textContent = "", X = 0; k = d[X++];)
                if ((!o || -1 === c.inArray(k, o)) && (J = c.contains(k.ownerDocument, k), e = D(y.appendChild(k), "script"), J && a(e), h))
                    for (j = 0; k = e[j++];) eb.test(k.type || "") && h.push(k);
            return y
        },
        cleanData: function (b) {
            for (var f, a, h, o, k, r, e = c.event.special, i = 0; void 0 !== (a = b[i]); i++) {
                if (c.acceptData(a) &&
                    (k = a[P.expando], k && (f = P.cache[k]))) {
                    if (h = Object.keys(f.events || {}), h.length)
                        for (r = 0; void 0 !== (o = h[r]); r++) e[o] ? c.event.remove(a, o) : c.removeEvent(a, o, f.handle);
                    P.cache[k] && delete P.cache[k]
                }
                delete la.cache[a[la.expando]]
            }
        }
    });
    c.fn.extend({
        text: function (b) {
            return ta(this, function (b) {
                return void 0 === b ? c.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = b)
                })
            }, null, b, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (b) {
                (1 ===
                    this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && g(this, b).appendChild(b)
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (b) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var f = g(this, b);
                    f.insertBefore(b, f.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (b) {
                this.parentNode && this.parentNode.insertBefore(b, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        },
        remove: function (b, f) {
            for (var h, o = b ? c.filter(b, this) : this, k = 0; null != (h = o[k]); k++) f || 1 !== h.nodeType || c.cleanData(D(h)), h.parentNode && (f && c.contains(h.ownerDocument, h) && a(D(h, "script")), h.parentNode.removeChild(h));
            return this
        },
        empty: function () {
            for (var b, f = 0; null != (b = this[f]); f++) 1 === b.nodeType && (c.cleanData(D(b, !1)), b.textContent = "");
            return this
        },
        clone: function (b, f) {
            return b = null == b ? !1 : b, f = null == f ? b : f, this.map(function () {
                return c.clone(this, b, f)
            })
        },
        html: function (b) {
            return ta(this, function (b) {
                var a =
                    this[0] || {},
                    h = 0,
                    o = this.length;
                if (void 0 === b && 1 === a.nodeType) return a.innerHTML;
                if ("string" == typeof b && !Wa.test(b) && !r[(db.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(Pa, "<$1></$2>");
                    try {
                        for (; o > h; h++) a = this[h] || {}, 1 === a.nodeType && (c.cleanData(D(a, !1)), a.innerHTML = b);
                        a = 0
                    } catch (k) {}
                }
                a && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function () {
            var b = arguments[0];
            return this.domManip(arguments, function (f) {
                b = this.parentNode;
                c.cleanData(D(this));
                b && b.replaceChild(f, this)
            }), b && (b.length ||
                b.nodeType) ? this : this.remove()
        },
        detach: function (b) {
            return this.remove(b, !0)
        },
        domManip: function (b, f) {
            var b = ka.apply([], b),
                a, h, k, r, g = 0,
                J = this.length,
                j = this,
                y = J - 1,
                d = b[0],
                X = c.isFunction(d);
            if (X || 1 < J && "string" == typeof d && !H.checkClone && kb.test(d)) return this.each(function (c) {
                var a = j.eq(c);
                X && (b[0] = d.call(this, c, a.html()));
                a.domManip(b, f)
            });
            if (J && (a = c.buildFragment(b, this[0].ownerDocument, !1, this), h = a.firstChild, 1 === a.childNodes.length && (a = h), h)) {
                for (k = c.map(D(a, "script"), i), h = k.length; J > g; g++) r = a, g !==
                    y && (r = c.clone(r, !0, !0), h && c.merge(k, D(r, "script"))), f.call(this[g], r, g);
                if (h)
                    for (a = k[k.length - 1].ownerDocument, c.map(k, e), g = 0; h > g; g++) r = k[g], eb.test(r.type || "") && !P.access(r, "globalEval") && c.contains(a, r) && (r.src ? c._evalUrl && c._evalUrl(r.src) : c.globalEval(r.textContent.replace(o, "")))
            }
            return this
        }
    });
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (b, f) {
        c.fn[b] = function (b) {
            for (var a, h = [], b = c(b), o = b.length - 1, k = 0; o >= k; k++) a = k ===
                o ? this : this.clone(!0), c(b[k])[f](a), ca.apply(h, a.get());
            return this.pushStack(h)
        }
    });
    var J, X = {},
        k = /^margin/,
        oa = RegExp("^(" + ga + ")(?!px)[a-z%]+$", "i"),
        y = function (b) {
            return b.ownerDocument.defaultView.getComputedStyle(b, null)
        };
    (function () {
        function b() {
            k.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";
            h.appendChild(o);
            var b = d.getComputedStyle(k, null);
            f = "1%" !== b.top;
            a = "4px" ===
                b.width;
            h.removeChild(o)
        }
        var f, a, h = L.documentElement,
            o = L.createElement("div"),
            k = L.createElement("div");
        k.style.backgroundClip = "content-box";
        k.cloneNode(!0).style.backgroundClip = "";
        H.clearCloneStyle = "content-box" === k.style.backgroundClip;
        o.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
        o.appendChild(k);
        d.getComputedStyle && c.extend(H, {
            pixelPosition: function () {
                return b(), f
            },
            boxSizingReliable: function () {
                return null == a && b(), a
            },
            reliableMarginRight: function () {
                var b,
                    f = k.appendChild(L.createElement("div"));
                return f.style.cssText = k.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", f.style.marginRight = f.style.width = "0", k.style.width = "1px", h.appendChild(o), b = !parseFloat(d.getComputedStyle(f, null).marginRight), h.removeChild(o), k.innerHTML = "", b
            }
        })
    })();
    c.swap = function (b, f, c, a) {
        var h, o = {};
        for (h in f) o[h] = b.style[h], b.style[h] = f[h];
        c = c.apply(b, a || []);
        for (h in f) b.style[h] = o[h];
        return c
    };
    var ja = /^(none|table(?!-c[ea]).+)/,
        Ma = RegExp("^(" + ga + ")(.*)$", "i"),
        lb = RegExp("^([+-])=(" + ga + ")", "i"),
        ua = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ea = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ra = ["Webkit", "O", "Moz", "ms"];
    c.extend({
        cssHooks: {
            opacity: {
                get: function (b, f) {
                    if (f) {
                        var c = G(b, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (b, f,
            a, h) {
            if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
                var o, k, r, e = c.camelCase(f),
                    i = b.style;
                return f = c.cssProps[e] || (c.cssProps[e] = M(i, e)), r = c.cssHooks[f] || c.cssHooks[e], void 0 === a ? r && "get" in r && void 0 !== (o = r.get(b, !1, h)) ? o : i[f] : (k = typeof a, "string" === k && (o = lb.exec(a)) && (a = (o[1] + 1) * o[2] + parseFloat(c.css(b, f)), k = "number"), null != a && a === a && ("number" !== k || c.cssNumber[e] || (a += "px"), H.clearCloneStyle || "" !== a || 0 !== f.indexOf("background") || (i[f] = "inherit"), r && "set" in r && void 0 === (a = r.set(b, a, h)) || (i[f] = "", i[f] =
                    a)), void 0)
            }
        },
        css: function (b, f, a, h) {
            var o, k, r, e = c.camelCase(f);
            return f = c.cssProps[e] || (c.cssProps[e] = M(b.style, e)), r = c.cssHooks[f] || c.cssHooks[e], r && "get" in r && (o = r.get(b, !0, a)), void 0 === o && (o = G(b, f, h)), "normal" === o && f in Ea && (o = Ea[f]), "" === a || a ? (k = parseFloat(o), !0 === a || c.isNumeric(k) ? k || 0 : o) : o
        }
    });
    c.each(["height", "width"], function (b, f) {
        c.cssHooks[f] = {
            get: function (b, a, h) {
                return a ? 0 === b.offsetWidth && ja.test(c.css(b, "display")) ? c.swap(b, ua, function () {
                    return S(b, f, h)
                }) : S(b, f, h) : void 0
            },
            set: function (b,
                a, h) {
                var o = h && y(b);
                return V(b, a, h ? ea(b, f, h, "border-box" === c.css(b, "boxSizing", !1, o), o) : 0)
            }
        }
    });
    c.cssHooks.marginRight = Q(H.reliableMarginRight, function (b, f) {
        return f ? c.swap(b, {
            display: "inline-block"
        }, G, [b, "marginRight"]) : void 0
    });
    c.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (b, f) {
        c.cssHooks[b + f] = {
            expand: function (c) {
                for (var a = 0, h = {}, c = "string" == typeof c ? c.split(" ") : [c]; 4 > a; a++) h[b + ya[a] + f] = c[a] || c[a - 2] || c[0];
                return h
            }
        };
        k.test(b) || (c.cssHooks[b + f].set = V)
    });
    c.fn.extend({
        css: function (b, f) {
            return ta(this,
                function (b, f, a) {
                    var h, o = {},
                        k = 0;
                    if (c.isArray(f)) {
                        for (a = y(b), h = f.length; h > k; k++) o[f[k]] = c.css(b, f[k], !1, a);
                        return o
                    }
                    return void 0 !== a ? c.style(b, f, a) : c.css(b, f)
                }, b, f, 1 < arguments.length)
        },
        show: function () {
            return N(this, !0)
        },
        hide: function () {
            return N(this)
        },
        toggle: function (b) {
            return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function () {
                qa(this) ? c(this).show() : c(this).hide()
            })
        }
    });
    c.Tween = T;
    T.prototype = {
        constructor: T,
        init: function (b, f, a, h, o, k) {
            this.elem = b;
            this.prop = a;
            this.easing = o || "swing";
            this.options =
                f;
            this.start = this.now = this.cur();
            this.end = h;
            this.unit = k || (c.cssNumber[a] ? "" : "px")
        },
        cur: function () {
            var b = T.propHooks[this.prop];
            return b && b.get ? b.get(this) : T.propHooks._default.get(this)
        },
        run: function (b) {
            var f, a = T.propHooks[this.prop];
            return this.pos = f = this.options.duration ? c.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : b, this.now = (this.end - this.start) * f + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), a && a.set ? a.set(this) : T.propHooks._default.set(this),
                this
        }
    };
    T.prototype.init.prototype = T.prototype;
    T.propHooks = {
        _default: {
            get: function (b) {
                var f;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (f = c.css(b.elem, b.prop, ""), f && "auto" !== f ? f : 0) : b.elem[b.prop]
            },
            set: function (b) {
                c.fx.step[b.prop] ? c.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[c.cssProps[b.prop]] || c.cssHooks[b.prop]) ? c.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    T.propHooks.scrollTop = T.propHooks.scrollLeft = {
        set: function (b) {
            b.elem.nodeType && b.elem.parentNode &&
                (b.elem[b.prop] = b.now)
        }
    };
    c.easing = {
        linear: function (b) {
            return b
        },
        swing: function (b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    c.fx = T.prototype.init;
    c.fx.step = {};
    var sa, Ja, mb = /^(?:toggle|show|hide)$/,
        fb = RegExp("^(?:([+-])=|)(" + ga + ")([a-z%]*)$", "i"),
        nb = /queueHooks$/,
        ab = [
            function (b, f, a) {
                var h, o, k, r, e, i, g, J = this,
                    j = {},
                    y = b.style,
                    d = b.nodeType && qa(b),
                    X = P.get(b, "fxshow");
                a.queue || (e = c._queueHooks(b, "fx"), null == e.unqueued && (e.unqueued = 0, i = e.empty.fire, e.empty.fire = function () {
                    e.unqueued || i()
                }), e.unqueued++, J.always(function () {
                    J.always(function () {
                        e.unqueued--;
                        c.queue(b, "fx").length || e.empty.fire()
                    })
                }));
                1 === b.nodeType && ("height" in f || "width" in f) && (a.overflow = [y.overflow, y.overflowX, y.overflowY], g = c.css(b, "display"), "none" === g && (g = ia(b.nodeName)), "inline" === g && "none" === c.css(b, "float") && (y.display = "inline-block"));
                a.overflow && (y.overflow = "hidden", J.always(function () {
                    y.overflow = a.overflow[0];
                    y.overflowX = a.overflow[1];
                    y.overflowY = a.overflow[2]
                }));
                for (h in f)
                    if (o = f[h], mb.exec(o)) {
                        if (delete f[h], k = k || "toggle" === o, o === (d ? "hide" : "show")) {
                            if ("show" !== o || !X || void 0 ===
                                X[h]) continue;
                            d = !0
                        }
                        j[h] = X && X[h] || c.style(b, h)
                    }
                if (!c.isEmptyObject(j))
                    for (h in X ? "hidden" in X && (d = X.hidden) : X = P.access(b, "fxshow", {}), k && (X.hidden = !d), d ? c(b).show() : J.done(function () {
                        c(b).hide()
                    }), J.done(function () {
                        var f;
                        P.remove(b, "fxshow");
                        for (f in j) c.style(b, f, j[f])
                    }), j) r = U(d ? X[h] : 0, h, J), h in X || (X[h] = r.start, d && (r.end = r.start, r.start = "width" === h || "height" === h ? 1 : 0))
            }
        ],
        Na = {
            "*": [
                function (b, f) {
                    var a = this.createTween(b, f),
                        h = a.cur(),
                        o = fb.exec(f),
                        k = o && o[3] || (c.cssNumber[b] ? "" : "px"),
                        r = (c.cssNumber[b] ||
                            "px" !== k && +h) && fb.exec(c.css(a.elem, b)),
                        e = 1,
                        i = 20;
                    if (r && r[3] !== k) {
                        k = k || r[3];
                        o = o || [];
                        r = +h || 1;
                        do e = e || ".5", r /= e, c.style(a.elem, b, r + k); while (e !== (e = a.cur() / h) && 1 !== e && --i)
                    }
                    return o && (r = a.start = +r || +h || 0, a.unit = k, a.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), a
                }
            ]
        };
    c.Animation = c.extend(Y, {
        tweener: function (b, f) {
            c.isFunction(b) ? (f = b, b = ["*"]) : b = b.split(" ");
            for (var a, h = 0, o = b.length; o > h; h++) a = b[h], Na[a] = Na[a] || [], Na[a].unshift(f)
        },
        prefilter: function (b, f) {
            f ? ab.unshift(b) : ab.push(b)
        }
    });
    c.speed = function (b, f, a) {
        var h = b && "object" ==
            typeof b ? c.extend({}, b) : {
                complete: a || !a && f || c.isFunction(b) && b,
                duration: b,
                easing: a && f || f && !c.isFunction(f) && f
            };
        return h.duration = c.fx.off ? 0 : "number" == typeof h.duration ? h.duration : h.duration in c.fx.speeds ? c.fx.speeds[h.duration] : c.fx.speeds._default, (null == h.queue || !0 === h.queue) && (h.queue = "fx"), h.old = h.complete, h.complete = function () {
            c.isFunction(h.old) && h.old.call(this);
            h.queue && c.dequeue(this, h.queue)
        }, h
    };
    c.fn.extend({
        fadeTo: function (b, f, c, a) {
            return this.filter(qa).css("opacity", 0).show().end().animate({
                    opacity: f
                },
                b, c, a)
        },
        animate: function (b, f, a, h) {
            var o = c.isEmptyObject(b),
                k = c.speed(f, a, h),
                f = function () {
                    var f = Y(this, c.extend({}, b), k);
                    (o || P.get(this, "finish")) && f.stop(!0)
                };
            return f.finish = f, o || !1 === k.queue ? this.each(f) : this.queue(k.queue, f)
        },
        stop: function (b, f, a) {
            var h = function (b) {
                var f = b.stop;
                delete b.stop;
                f(a)
            };
            return "string" != typeof b && (a = f, f = b, b = void 0), f && !1 !== b && this.queue(b || "fx", []), this.each(function () {
                var f = !0,
                    o = null != b && b + "queueHooks",
                    k = c.timers,
                    r = P.get(this);
                if (o) r[o] && r[o].stop && h(r[o]);
                else
                    for (o in r) r[o] &&
                        r[o].stop && nb.test(o) && h(r[o]);
                for (o = k.length; o--;) k[o].elem !== this || null != b && k[o].queue !== b || (k[o].anim.stop(a), f = !1, k.splice(o, 1));
                (f || !a) && c.dequeue(this, b)
            })
        },
        finish: function (b) {
            return !1 !== b && (b = b || "fx"), this.each(function () {
                var f, a = P.get(this),
                    h = a[b + "queue"];
                f = a[b + "queueHooks"];
                var o = c.timers,
                    k = h ? h.length : 0;
                for (a.finish = !0, c.queue(this, b, []), f && f.stop && f.stop.call(this, !0), f = o.length; f--;) o[f].elem === this && o[f].queue === b && (o[f].anim.stop(!0), o.splice(f, 1));
                for (f = 0; k > f; f++) h[f] && h[f].finish &&
                    h[f].finish.call(this);
                delete a.finish
            })
        }
    });
    c.each(["toggle", "show", "hide"], function (b, f) {
        var a = c.fn[f];
        c.fn[f] = function (b, c, h) {
            return null == b || "boolean" == typeof b ? a.apply(this, arguments) : this.animate(W(f, !0), b, c, h)
        }
    });
    c.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (b, f) {
        c.fn[b] = function (b, a, c) {
            return this.animate(f, b, a, c)
        }
    });
    c.timers = [];
    c.fx.tick = function () {
        var b, f = 0,
            a = c.timers;
        for (sa = c.now(); f <
            a.length; f++) b = a[f], b() || a[f] !== b || a.splice(f--, 1);
        a.length || c.fx.stop();
        sa = void 0
    };
    c.fx.timer = function (b) {
        c.timers.push(b);
        b() ? c.fx.start() : c.timers.pop()
    };
    c.fx.interval = 13;
    c.fx.start = function () {
        Ja || (Ja = setInterval(c.fx.tick, c.fx.interval))
    };
    c.fx.stop = function () {
        clearInterval(Ja);
        Ja = null
    };
    c.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    c.fn.delay = function (b, f) {
        return b = c.fx ? c.fx.speeds[b] || b : b, f = f || "fx", this.queue(f, function (f, a) {
            var c = setTimeout(f, b);
            a.stop = function () {
                clearTimeout(c)
            }
        })
    };
    (function () {
        var b =
            L.createElement("input"),
            f = L.createElement("select"),
            a = f.appendChild(L.createElement("option"));
        b.type = "checkbox";
        H.checkOn = "" !== b.value;
        H.optSelected = a.selected;
        f.disabled = !0;
        H.optDisabled = !a.disabled;
        b = L.createElement("input");
        b.value = "t";
        b.type = "radio";
        H.radioValue = "t" === b.value
    })();
    var rb, Xa = c.expr.attrHandle;
    c.fn.extend({
        attr: function (b, f) {
            return ta(this, c.attr, b, f, 1 < arguments.length)
        },
        removeAttr: function (b) {
            return this.each(function () {
                c.removeAttr(this, b)
            })
        }
    });
    c.extend({
        attr: function (b, f, a) {
            var h,
                o, k = b.nodeType;
            if (b && 3 !== k && 8 !== k && 2 !== k) return "undefined" === typeof b.getAttribute ? c.prop(b, f, a) : (1 === k && c.isXMLDoc(b) || (f = f.toLowerCase(), h = c.attrHooks[f] || (c.expr.match.bool.test(f) ? rb : void 0)), void 0 === a ? h && "get" in h && null !== (o = h.get(b, f)) ? o : (o = c.find.attr(b, f), null == o ? void 0 : o) : null !== a ? h && "set" in h && void 0 !== (o = h.set(b, a, f)) ? o : (b.setAttribute(f, a + ""), a) : void c.removeAttr(b, f))
        },
        removeAttr: function (b, f) {
            var a, h, o = 0,
                k = f && f.match(pa);
            if (k && 1 === b.nodeType)
                for (; a = k[o++];) h = c.propFix[a] || a, c.expr.match.bool.test(a) &&
                    (b[h] = !1), b.removeAttribute(a)
        },
        attrHooks: {
            type: {
                set: function (b, f) {
                    if (!H.radioValue && "radio" === f && c.nodeName(b, "input")) {
                        var a = b.value;
                        return b.setAttribute("type", f), a && (b.value = a), f
                    }
                }
            }
        }
    });
    rb = {
        set: function (b, f, a) {
            return !1 === f ? c.removeAttr(b, a) : b.setAttribute(a, a), a
        }
    };
    c.each(c.expr.match.bool.source.match(/\w+/g), function (b, f) {
        var a = Xa[f] || c.find.attr;
        Xa[f] = function (b, f, c) {
            var h, o;
            return c || (o = Xa[f], Xa[f] = h, h = null != a(b, f, c) ? f.toLowerCase() : null, Xa[f] = o), h
        }
    });
    var Aa = /^(?:input|select|textarea|button)$/i;
    c.fn.extend({
        prop: function (b, f) {
            return ta(this, c.prop, b, f, 1 < arguments.length)
        },
        removeProp: function (b) {
            return this.each(function () {
                delete this[c.propFix[b] || b]
            })
        }
    });
    c.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (b, f, a) {
            var h, o, k, r = b.nodeType;
            if (b && 3 !== r && 8 !== r && 2 !== r) return k = 1 !== r || !c.isXMLDoc(b), k && (f = c.propFix[f] || f, o = c.propHooks[f]), void 0 !== a ? o && "set" in o && void 0 !== (h = o.set(b, a, f)) ? h : b[f] = a : o && "get" in o && null !== (h = o.get(b, f)) ? h : b[f]
        },
        propHooks: {
            tabIndex: {
                get: function (b) {
                    return b.hasAttribute("tabindex") ||
                        Aa.test(b.nodeName) || b.href ? b.tabIndex : -1
                }
            }
        }
    });
    H.optSelected || (c.propHooks.selected = {
        get: function () {
            return null
        }
    });
    c.each("tabIndex,readOnly,maxLength,cellSpacing,cellPadding,rowSpan,colSpan,useMap,frameBorder,contentEditable".split(","), function () {
        c.propFix[this.toLowerCase()] = this
    });
    var ob = /[\t\r\n\f]/g;
    c.fn.extend({
        addClass: function (b) {
            var f, a, h, o, k, r;
            f = "string" == typeof b && b;
            var e = 0,
                i = this.length;
            if (c.isFunction(b)) return this.each(function (f) {
                c(this).addClass(b.call(this, f, this.className))
            });
            if (f)
                for (f = (b || "").match(pa) || []; i > e; e++)
                    if (a = this[e], h = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(ob, " ") : " ")) {
                        for (k = 0; o = f[k++];) 0 > h.indexOf(" " + o + " ") && (h += o + " ");
                        r = c.trim(h);
                        a.className !== r && (a.className = r)
                    }
            return this
        },
        removeClass: function (b) {
            var f, a, h, o, k, r;
            f = 0 === arguments.length || "string" == typeof b && b;
            var e = 0,
                i = this.length;
            if (c.isFunction(b)) return this.each(function (f) {
                c(this).removeClass(b.call(this, f, this.className))
            });
            if (f)
                for (f = (b || "").match(pa) || []; i > e; e++)
                    if (a = this[e],
                        h = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(ob, " ") : "")) {
                        for (k = 0; o = f[k++];)
                            for (; 0 <= h.indexOf(" " + o + " ");) h = h.replace(" " + o + " ", " ");
                        r = b ? c.trim(h) : "";
                        a.className !== r && (a.className = r)
                    }
            return this
        },
        toggleClass: function (b, f) {
            var a = typeof b;
            return "boolean" == typeof f && "string" === a ? f ? this.addClass(b) : this.removeClass(b) : this.each(c.isFunction(b) ? function (a) {
                c(this).toggleClass(b.call(this, a, this.className, f), f)
            } : function () {
                if ("string" === a)
                    for (var f, h = 0, o = c(this), k = b.match(pa) || []; f = k[h++];) o.hasClass(f) ?
                        o.removeClass(f) : o.addClass(f);
                else("undefined" === a || "boolean" === a) && (this.className && P.set(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : P.get(this, "__className__") || "")
            })
        },
        hasClass: function (b) {
            for (var b = " " + b + " ", f = 0, a = this.length; a > f; f++)
                if (1 === this[f].nodeType && 0 <= (" " + this[f].className + " ").replace(ob, " ").indexOf(b)) return !0;
            return !1
        }
    });
    var Ya = /\r/g;
    c.fn.extend({
        val: function (b) {
            var f, a, h, o = this[0];
            if (arguments.length) return h = c.isFunction(b), this.each(function (a) {
                var o;
                1 === this.nodeType && (o = h ? b.call(this, a, c(this).val()) : b, null == o ? o = "" : "number" == typeof o ? o += "" : c.isArray(o) && (o = c.map(o, function (b) {
                    return null == b ? "" : b + ""
                })), f = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], f && "set" in f && void 0 !== f.set(this, o, "value") || (this.value = o))
            });
            if (o) return f = c.valHooks[o.type] || c.valHooks[o.nodeName.toLowerCase()], f && "get" in f && void 0 !== (a = f.get(o, "value")) ? a : (a = o.value, "string" == typeof a ? a.replace(Ya, "") : null == a ? "" : a)
        }
    });
    c.extend({
        valHooks: {
            select: {
                get: function (b) {
                    for (var f,
                        a = b.options, h = b.selectedIndex, o = "select-one" === b.type || 0 > h, k = o ? null : [], r = o ? h + 1 : a.length, e = 0 > h ? r : o ? h : 0; r > e; e++)
                        if (f = a[e], !(!f.selected && e !== h || (H.optDisabled ? f.disabled : null !== f.getAttribute("disabled")) || f.parentNode.disabled && c.nodeName(f.parentNode, "optgroup"))) {
                            if (b = c(f).val(), o) return b;
                            k.push(b)
                        }
                    return k
                },
                set: function (b, a) {
                    for (var h, o, k = b.options, r = c.makeArray(a), e = k.length; e--;) o = k[e], (o.selected = 0 <= c.inArray(c(o).val(), r)) && (h = !0);
                    return h || (b.selectedIndex = -1), r
                }
            }
        }
    });
    c.each(["radio", "checkbox"],
        function () {
            c.valHooks[this] = {
                set: function (b, a) {
                    return c.isArray(a) ? b.checked = 0 <= c.inArray(c(b).val(), a) : void 0
                }
            };
            H.checkOn || (c.valHooks[this].get = function (b) {
                return null === b.getAttribute("value") ? "on" : b.value
            })
        });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (b, a) {
        c.fn[a] = function (b, c) {
            return 0 < arguments.length ? this.on(a,
                null, b, c) : this.trigger(a)
        }
    });
    c.fn.extend({
        hover: function (b, a) {
            return this.mouseenter(b).mouseleave(a || b)
        },
        bind: function (b, a, c) {
            return this.on(b, null, a, c)
        },
        unbind: function (b, a) {
            return this.off(b, null, a)
        },
        delegate: function (b, a, c, h) {
            return this.on(a, b, c, h)
        },
        undelegate: function (b, a, c) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(a, b || "**", c)
        }
    });
    var va = c.now(),
        pb = /\?/;
    c.parseJSON = function (b) {
        return JSON.parse(b + "")
    };
    c.parseXML = function (b) {
        var a, h;
        if (!b || "string" != typeof b) return null;
        try {
            h = new DOMParser,
                a = h.parseFromString(b, "text/xml")
        } catch (o) {
            a = void 0
        }
        return (!a || a.getElementsByTagName("parsererror").length) && c.error("Invalid XML: " + b), a
    };
    var Ka, Ba, Cb = /#.*$/,
        sb = /([?&])_=[^&]*/,
        Db = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Eb = /^(?:GET|HEAD)$/,
        Fb = /^\/\//,
        tb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ub = {},
        hb = {},
        vb = "*/".concat("*");
    try {
        Ba = location.href
    } catch (Nb) {
        Ba = L.createElement("a"), Ba.href = "", Ba = Ba.href
    }
    Ka = tb.exec(Ba.toLowerCase()) || [];
    c.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ba,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ka[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": vb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": c.parseJSON,
                "text xml": c.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (b, a) {
            return a ? Z(Z(b, c.ajaxSettings), a) : Z(c.ajaxSettings, b)
        },
        ajaxPrefilter: da(ub),
        ajaxTransport: da(hb),
        ajax: function (b, a) {
            function h(b, a, f, e) {
                var p, g, j, m, u = a;
                if (2 !== K) {
                    K = 2;
                    i && clearTimeout(i);
                    o = void 0;
                    r = e || "";
                    I.readyState = 0 < b ? 4 : 0;
                    e = 200 <= b && 300 > b || 304 === b;
                    if (f) {
                        j = y;
                        for (var oa = I, D, v, s, H, n = j.contents, w = j.dataTypes;
                            "*" === w[0];) w.shift(), void 0 === D && (D = j.mimeType || oa.getResponseHeader("Content-Type"));
                        if (D)
                            for (v in n)
                                if (n[v] && n[v].test(D)) {
                                    w.unshift(v);
                                    break
                                }
                        if (w[0] in f) s = w[0];
                        else {
                            for (v in f) {
                                if (!w[0] || j.converters[v + " " + w[0]]) {
                                    s = v;
                                    break
                                }
                                H || (H = v)
                            }
                            s = s || H
                        }
                        j = s ? (s !== w[0] && w.unshift(s), f[s]) : void 0
                    }
                    var ja;
                    a: {
                        f = y;
                        D = j;
                        v = I;
                        s = e;
                        var R, E, C, oa = {},
                            n = f.dataTypes.slice();
                        if (n[1])
                            for (R in f.converters) oa[R.toLowerCase()] = f.converters[R];
                        for (H = n.shift(); H;)
                            if (f.responseFields[H] && (v[f.responseFields[H]] = D), !C && s && f.dataFilter && (D = f.dataFilter(D, f.dataType)), C = H, H = n.shift())
                                if ("*" === H) H = C;
                                else if ("*" !== C && C !== H) {
                            if (R = oa[C + " " + H] || oa["* " + H], !R)
                                for (ja in oa)
                                    if (E =
                                        ja.split(" "), E[1] === H && (R = oa[C + " " + E[0]] || oa["* " + E[0]])) {
                                        !0 === R ? R = oa[ja] : !0 !== oa[ja] && (H = E[0], n.unshift(E[1]));
                                        break
                                    }
                            if (!0 !== R)
                                if (R && f["throws"]) D = R(D);
                                else try {
                                    D = R(D)
                                } catch (Q) {
                                    ja = {
                                        state: "parsererror",
                                        error: R ? Q : "No conversion from " + C + " to " + H
                                    };
                                    break a
                                }
                        }
                        ja = {
                            state: "success",
                            data: D
                        }
                    }
                    j = ja;
                    e ? (y.ifModified && (m = I.getResponseHeader("Last-Modified"), m && (c.lastModified[k] = m), m = I.getResponseHeader("etag"), m && (c.etag[k] = m)), 204 === b || "HEAD" === y.type ? u = "nocontent" : 304 === b ? u = "notmodified" : (u = j.state, p = j.data,
                        g = j.error, e = !g)) : (g = u, (b || !u) && (u = "error", 0 > b && (b = 0)));
                    I.status = b;
                    I.statusText = (a || u) + "";
                    e ? x.resolveWith(d, [p, u, I]) : x.rejectWith(d, [I, u, g]);
                    I.statusCode(l);
                    l = void 0;
                    J && X.trigger(e ? "ajaxSuccess" : "ajaxError", [I, y, e ? p : g]);
                    O.fireWith(d, [I, u]);
                    J && (X.trigger("ajaxComplete", [I, y]), --c.active || c.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (a = b, b = void 0);
            a = a || {};
            var o, k, r, e, i, g, J, j, y = c.ajaxSetup({}, a),
                d = y.context || y,
                X = y.context && (d.nodeType || d.jquery) ? c(d) : c.event,
                x = c.Deferred(),
                O = c.Callbacks("once memory"),
                l = y.statusCode || {},
                m = {},
                u = {},
                K = 0,
                oa = "canceled",
                I = {
                    readyState: 0,
                    getResponseHeader: function (b) {
                        var a;
                        if (2 === K) {
                            if (!e)
                                for (e = {}; a = Db.exec(r);) e[a[1].toLowerCase()] = a[2];
                            a = e[b.toLowerCase()]
                        }
                        return null == a ? null : a
                    },
                    getAllResponseHeaders: function () {
                        return 2 === K ? r : null
                    },
                    setRequestHeader: function (b, a) {
                        var f = b.toLowerCase();
                        return K || (b = u[f] = u[f] || b, m[b] = a), this
                    },
                    overrideMimeType: function (b) {
                        return K || (y.mimeType = b), this
                    },
                    statusCode: function (b) {
                        var a;
                        if (b)
                            if (2 > K)
                                for (a in b) l[a] = [l[a], b[a]];
                            else I.always(b[I.status]);
                        return this
                    },
                    abort: function (b) {
                        b = b || oa;
                        return o && o.abort(b), h(0, b), this
                    }
                };
            if (x.promise(I).complete = O.add, I.success = I.done, I.error = I.fail, y.url = ((b || y.url || Ba) + "").replace(Cb, "").replace(Fb, Ka[1] + "//"), y.type = a.method || a.type || y.method || y.type, y.dataTypes = c.trim(y.dataType || "*").toLowerCase().match(pa) || [""], null == y.crossDomain && (g = tb.exec(y.url.toLowerCase()), y.crossDomain = !(!g || g[1] === Ka[1] && g[2] === Ka[2] && (g[3] || ("http:" === g[1] ? "80" : "443")) === (Ka[3] || ("http:" === Ka[1] ? "80" : "443")))), y.data && y.processData &&
                "string" != typeof y.data && (y.data = c.param(y.data, y.traditional)), aa(ub, y, a, I), 2 === K) return I;
            J = y.global;
            J && 0 === c.active++ && c.event.trigger("ajaxStart");
            y.type = y.type.toUpperCase();
            y.hasContent = !Eb.test(y.type);
            k = y.url;
            y.hasContent || (y.data && (k = y.url += (pb.test(k) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (y.url = sb.test(k) ? k.replace(sb, "$1_=" + va++) : k + (pb.test(k) ? "&" : "?") + "_=" + va++));
            y.ifModified && (c.lastModified[k] && I.setRequestHeader("If-Modified-Since", c.lastModified[k]), c.etag[k] && I.setRequestHeader("If-None-Match",
                c.etag[k]));
            (y.data && y.hasContent && !1 !== y.contentType || a.contentType) && I.setRequestHeader("Content-Type", y.contentType);
            I.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + vb + "; q=0.01" : "") : y.accepts["*"]);
            for (j in y.headers) I.setRequestHeader(j, y.headers[j]);
            if (y.beforeSend && (!1 === y.beforeSend.call(d, I, y) || 2 === K)) return I.abort();
            oa = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) I[j](y[j]);
            if (o = aa(hb, y, a, I)) {
                I.readyState = 1;
                J &&
                    X.trigger("ajaxSend", [I, y]);
                y.async && 0 < y.timeout && (i = setTimeout(function () {
                    I.abort("timeout")
                }, y.timeout));
                try {
                    K = 1, o.send(m, h)
                } catch (D) {
                    if (!(2 > K)) throw D;
                    h(-1, D)
                }
            } else h(-1, "No Transport");
            return I
        },
        getJSON: function (b, a, h) {
            return c.get(b, a, h, "json")
        },
        getScript: function (b, a) {
            return c.get(b, void 0, a, "script")
        }
    });
    c.each(["get", "post"], function (b, a) {
        c[a] = function (b, h, o, k) {
            return c.isFunction(h) && (k = k || o, o = h, h = void 0), c.ajax({
                url: b,
                type: a,
                dataType: k,
                data: h,
                success: o
            })
        }
    });
    c.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),
        function (b, a) {
            c.fn[a] = function (b) {
                return this.on(a, b)
            }
        });
    c._evalUrl = function (b) {
        return c.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    c.fn.extend({
        wrapAll: function (b) {
            var a;
            return c.isFunction(b) ? this.each(function (a) {
                c(this).wrapAll(b.call(this, a))
            }) : (this[0] && (a = c(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && a.insertBefore(this[0]), a.map(function () {
                for (var b = this; b.firstElementChild;) b = b.firstElementChild;
                return b
            }).append(this)), this)
        },
        wrapInner: function (b) {
            return this.each(c.isFunction(b) ?
                function (a) {
                    c(this).wrapInner(b.call(this, a))
                } : function () {
                    var a = c(this),
                        h = a.contents();
                    h.length ? h.wrapAll(b) : a.append(b)
                })
        },
        wrap: function (b) {
            var a = c.isFunction(b);
            return this.each(function (h) {
                c(this).wrapAll(a ? b.call(this, h) : b)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    c.expr.filters.hidden = function (b) {
        return 0 >= b.offsetWidth && 0 >= b.offsetHeight
    };
    c.expr.filters.visible = function (b) {
        return !c.expr.filters.hidden(b)
    };
    var Gb = /%20/g,
        Ab = /\[\]$/,
        wb = /\r?\n/g,
        Hb = /^(?:submit|button|image|reset|file)$/i,
        Ib = /^(?:input|select|textarea|keygen)/i;
    c.param = function (b, a) {
        var h, o = [],
            k = function (b, a) {
                a = c.isFunction(a) ? a() : null == a ? "" : a;
                o[o.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a)
            };
        if (void 0 === a && (a = c.ajaxSettings && c.ajaxSettings.traditional), c.isArray(b) || b.jquery && !c.isPlainObject(b)) c.each(b, function () {
            k(this.name, this.value)
        });
        else
            for (h in b) fa(h, b[h], a, k);
        return o.join("&").replace(Gb, "+")
    };
    c.fn.extend({
        serialize: function () {
            return c.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var b = c.prop(this, "elements");
                return b ? c.makeArray(b) : this
            }).filter(function () {
                var b = this.type;
                return this.name && !c(this).is(":disabled") && Ib.test(this.nodeName) && !Hb.test(b) && (this.checked || !bb.test(b))
            }).map(function (b, a) {
                var h = c(this).val();
                return null == h ? null : c.isArray(h) ? c.map(h, function (b) {
                    return {
                        name: a.name,
                        value: b.replace(wb, "\r\n")
                    }
                }) : {
                    name: a.name,
                    value: h.replace(wb, "\r\n")
                }
            }).get()
        }
    });
    c.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (b) {}
    };
    var Jb = 0,
        gb = {},
        Kb = {
            "0": 200,
            1223: 204
        },
        Za = c.ajaxSettings.xhr();
    d.ActiveXObject && c(d).on("unload", function () {
        for (var b in gb) gb[b]()
    });
    H.cors = !!Za && "withCredentials" in Za;
    H.ajax = Za = !!Za;
    c.ajaxTransport(function (b) {
        var a;
        return H.cors || Za && !b.crossDomain ? {
            send: function (c, h) {
                var o, k = b.xhr(),
                    r = ++Jb;
                if (k.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (o in b.xhrFields) k[o] = b.xhrFields[o];
                b.mimeType && k.overrideMimeType && k.overrideMimeType(b.mimeType);
                b.crossDomain || c["X-Requested-With"] ||
                    (c["X-Requested-With"] = "XMLHttpRequest");
                for (o in c) k.setRequestHeader(o, c[o]);
                a = function (b) {
                    return function () {
                        a && (delete gb[r], a = k.onload = k.onerror = null, "abort" === b ? k.abort() : "error" === b ? h(k.status, k.statusText) : h(Kb[k.status] || k.status, k.statusText, "string" == typeof k.responseText ? {
                            text: k.responseText
                        } : void 0, k.getAllResponseHeaders()))
                    }
                };
                k.onload = a();
                k.onerror = a("error");
                a = gb[r] = a("abort");
                k.send(b.hasContent && b.data || null)
            },
            abort: function () {
                a && a()
            }
        } : void 0
    });
    c.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (b) {
                return c.globalEval(b), b
            }
        }
    });
    c.ajaxPrefilter("script", function (b) {
        void 0 === b.cache && (b.cache = !1);
        b.crossDomain && (b.type = "GET")
    });
    c.ajaxTransport("script", function (b) {
        if (b.crossDomain) {
            var a, h;
            return {
                send: function (o, k) {
                    a = c("<script>").prop({
                        async: !0,
                        charset: b.scriptCharset,
                        src: b.url
                    }).on("load error", h = function (b) {
                        a.remove();
                        h = null;
                        b && k("error" === b.type ? 404 : 200, b.type)
                    });
                    L.head.appendChild(a[0])
                },
                abort: function () {
                    h && h()
                }
            }
        }
    });
    var xb = [],
        qb = /(=)\?(?=&|$)|\?\?/;
    c.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var b = xb.pop() || c.expando + "_" + va++;
            return this[b] = !0, b
        }
    });
    c.ajaxPrefilter("json jsonp", function (b, a, h) {
        var o, k, r, e = !1 !== b.jsonp && (qb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && qb.test(b.data) && "data");
        return e || "jsonp" === b.dataTypes[0] ? (o = b.jsonpCallback = c.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, e ? b[e] = b[e].replace(qb, "$1" +
            o) : !1 !== b.jsonp && (b.url += (pb.test(b.url) ? "&" : "?") + b.jsonp + "=" + o), b.converters["script json"] = function () {
            return r || c.error(o + " was not called"), r[0]
        }, b.dataTypes[0] = "json", k = d[o], d[o] = function () {
            r = arguments
        }, h.always(function () {
            d[o] = k;
            b[o] && (b.jsonpCallback = a.jsonpCallback, xb.push(o));
            r && c.isFunction(k) && k(r[0]);
            r = k = void 0
        }), "script") : void 0
    });
    c.parseHTML = function (b, a, h) {
        if (!b || "string" != typeof b) return null;
        "boolean" == typeof a && (h = a, a = !1);
        a = a || L;
        var o = Sa.exec(b),
            h = !h && [];
        return o ? [a.createElement(o[1])] :
            (o = c.buildFragment([b], a, h), h && h.length && c(h).remove(), c.merge([], o.childNodes))
    };
    var yb = c.fn.load;
    c.fn.load = function (b, a, h) {
        if ("string" != typeof b && yb) return yb.apply(this, arguments);
        var o, k, r, e = this,
            i = b.indexOf(" ");
        return 0 <= i && (o = b.slice(i), b = b.slice(0, i)), c.isFunction(a) ? (h = a, a = void 0) : a && "object" == typeof a && (k = "POST"), 0 < e.length && c.ajax({
            url: b,
            type: k,
            dataType: "html",
            data: a
        }).done(function (b) {
            r = arguments;
            e.html(o ? c("<div>").append(c.parseHTML(b)).find(o) : b)
        }).complete(h && function (b, a) {
            e.each(h,
                r || [b.responseText, a, b])
        }), this
    };
    c.expr.filters.animated = function (b) {
        return c.grep(c.timers, function (a) {
            return b === a.elem
        }).length
    };
    var zb = d.document.documentElement;
    c.offset = {
        setOffset: function (b, a, h) {
            var o, k, r, e, i, g, y, j = c.css(b, "position"),
                J = c(b),
                d = {};
            "static" === j && (b.style.position = "relative");
            i = J.offset();
            r = c.css(b, "top");
            g = c.css(b, "left");
            y = ("absolute" === j || "fixed" === j) && -1 < (r + g).indexOf("auto");
            y ? (o = J.position(), e = o.top, k = o.left) : (e = parseFloat(r) || 0, k = parseFloat(g) || 0);
            c.isFunction(a) && (a = a.call(b,
                h, i));
            null != a.top && (d.top = a.top - i.top + e);
            null != a.left && (d.left = a.left - i.left + k);
            "using" in a ? a.using.call(b, d) : J.css(d)
        }
    };
    c.fn.extend({
        offset: function (b) {
            if (arguments.length) return void 0 === b ? this : this.each(function (a) {
                c.offset.setOffset(this, b, a)
            });
            var a, h, o = this[0],
                k = {
                    top: 0,
                    left: 0
                },
                r = o && o.ownerDocument;
            if (r) return a = r.documentElement, c.contains(a, o) ? ("undefined" !== typeof o.getBoundingClientRect && (k = o.getBoundingClientRect()), h = c.isWindow(r) ? r : 9 === r.nodeType && r.defaultView, {
                top: k.top + h.pageYOffset -
                    a.clientTop,
                left: k.left + h.pageXOffset - a.clientLeft
            }) : k
        },
        position: function () {
            if (this[0]) {
                var b, a, h = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === c.css(h, "position") ? a = h.getBoundingClientRect() : (b = this.offsetParent(), a = this.offset(), c.nodeName(b[0], "html") || (o = b.offset()), o.top += c.css(b[0], "borderTopWidth", !0), o.left += c.css(b[0], "borderLeftWidth", !0)), {
                    top: a.top - o.top - c.css(h, "marginTop", !0),
                    left: a.left - o.left - c.css(h, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var b = this.offsetParent ||
                    zb; b && !c.nodeName(b, "html") && "static" === c.css(b, "position");) b = b.offsetParent;
                return b || zb
            })
        }
    });
    c.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (b, a) {
        var h = "pageYOffset" === a;
        c.fn[b] = function (o) {
            return ta(this, function (b, o, k) {
                var r = c.isWindow(b) ? b : 9 === b.nodeType && b.defaultView;
                return void 0 === k ? r ? r[a] : b[o] : void(r ? r.scrollTo(h ? d.pageXOffset : k, h ? k : d.pageYOffset) : b[o] = k)
            }, b, o, arguments.length, null)
        }
    });
    c.each(["top", "left"], function (b, a) {
        c.cssHooks[a] = Q(H.pixelPosition, function (b, h) {
            return h ?
                (h = G(b, a), oa.test(h) ? c(b).position()[a] + "px" : h) : void 0
        })
    });
    c.each({
        Height: "height",
        Width: "width"
    }, function (b, a) {
        c.each({
            padding: "inner" + b,
            content: a,
            "": "outer" + b
        }, function (h, o) {
            c.fn[o] = function (o, k) {
                var r = arguments.length && (h || "boolean" != typeof o),
                    e = h || (!0 === o || !0 === k ? "margin" : "border");
                return ta(this, function (a, f, h) {
                    var o;
                    return c.isWindow(a) ? a.document.documentElement["client" + b] : 9 === a.nodeType ? (o = a.documentElement, Math.max(a.body["scroll" + b], o["scroll" + b], a.body["offset" + b], o["offset" + b], o["client" +
                        b])) : void 0 === h ? c.css(a, f, e) : c.style(a, f, h, e)
                }, a, r ? o : void 0, r, null)
            }
        })
    });
    c.fn.size = function () {
        return this.length
    };
    c.fn.andSelf = c.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function () {
        return c
    });
    var Lb = d.jQuery,
        Mb = d.$;
    return c.noConflict = function (b) {
        return d.$ === c && (d.$ = Mb), b && d.jQuery === c && (d.jQuery = Lb), c
    }, "undefined" === typeof n && (d.jQuery = d.$ = c), c
});
(function (d) {
    ScrollMagic = function (m) {
        var u = {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2
            },
            l = this,
            s = d.extend({}, u, m),
            n = [],
            v = !1,
            j = 0,
            g = "PAUSED",
            i = !0,
            e = 0,
            a = !1,
            O = !0,
            D = function () {
                return s.vertical ? s.container.scrollTop() : s.container.scrollLeft()
            },
            E = function () {
                if (v && O) {
                    var a = d.isArray(v) ? v : n,
                        e = j;
                    j = l.scrollPos();
                    e = j - e;
                    g = 0 == e ? "PAUSED" : 0 < e ? "FORWARD" : "REVERSE";
                    l.updateScene(a, !0);
                    0 == a.length && 3 <= s.loglevel && G(3, "updating 0 Scenes (nothing added to controller)");
                    v = !1
                }
            },
            ia = function (a) {
                "resize" ==
                a.type && (e = s.vertical ? s.container.height() : s.container.width());
                v = !0
            },
            G = function (a, e) {
                if (s.loglevel >= a) {
                    var i = Array.prototype.splice.call(arguments, 1),
                        g = Function.prototype.bind.call(q, window);
                    i.unshift(a, "(ScrollMagic) ->");
                    g.apply(window, i)
                }
            };
        this.addScene = function (a) {
            d.isArray(a) ? d.each(a, function (a, e) {
                l.addScene(e)
            }) : a.parent() != l ? a.addTo(l) : -1 == d.inArray(n, a) && (n.push(a), d.each(s.globalSceneOptions, function (e, i) {
                a[e] && a[e].call(a, i)
            }), G(3, "added Scene (" + n.length + " total)"));
            return l
        };
        this.removeScene =
            function (a) {
                if (d.isArray(a)) d.each(a, function (a, e) {
                    l.removeScene(e)
                });
                else {
                    var e = d.inArray(a, n); - 1 < e && (n.splice(e, 1), a.remove(), G(3, "removed Scene (" + n.length + " total)"))
                }
                return l
            };
        this.updateScene = function (a, e) {
            d.isArray(a) ? d.each(a, function (i, g) {
                G(3, "updating Scene " + (i + 1) + "/" + a.length + " (" + n.length + " total)");
                l.updateScene(g, e)
            }) : e ? a.update(!0) : (d.isArray(v) || (v = []), -1 == d.inArray(a, v) && v.push(a));
            return l
        };
        this.update = function (a) {
            ia({
                type: "resize"
            });
            a && E();
            return l
        };
        this.scrollPos = function (a) {
            if (arguments.length) d.isFunction(a) ||
                (a = function () {
                    return a
                }), D = a;
            else return D.call(l);
            return l
        };
        this.info = function (a) {
            var d = {
                size: e,
                vertical: s.vertical,
                scrollPos: j,
                scrollDirection: g,
                container: s.container,
                isDocument: i
            };
            if (arguments.length) {
                if (void 0 !== d[a]) return d[a];
                G(1, 'ERROR: option "' + a + '" is not available')
            } else return d
        };
        this.loglevel = function (a) {
            if (arguments.length) {
                if (s.loglevel != a) s.loglevel = a
            } else return s.loglevel;
            return l
        };
        this.enabled = function (a) {
            if (arguments.length) O != a && (O = !!a, l.updateScene(n, !0));
            else return O;
            return l
        };
        this.destroy = function (e) {
            for (; 0 < n.length;) n[n.length - 1].destroy(e);
            s.container.off("scroll resize", ia);
            a ? TweenLite.ticker.removeEventListener("tick", E) : s.container.off("scroll resize", E);
            G(3, "destroyed ScrollMagic (reset: " + (e ? "true" : "false") + ")");
            return null
        };
        (function () {
            d.each(s, function (a) {
                u.hasOwnProperty(a) || (G(2, 'WARNING: Unknown option "' + a + '"'), delete s[a])
            });
            s.container = d(s.container).first();
            if (0 == s.container.length) G(1, "ERROR creating object ScrollMagic: No valid scroll container supplied");
            else {
                i = !d.contains(document, s.container.get(0));
                e = s.vertical ? s.container.height() : s.container.width();
                s.container.on("scroll resize", ia);
                try {
                    TweenLite.ticker.addEventListener("tick", E), a = !0
                } catch (g) {
                    s.container.on("scroll resize", E), a = !1
                }
                G(3, "added new ScrollMagic controller")
            }
        })();
        return l
    };
    ScrollScene = function (m) {
        var u, n, s, A, v, j = ["onCenter", "onEnter", "onLeave"],
            g = {
                duration: 0,
                offset: 0,
                triggerElement: null,
                triggerHook: j[0],
                reverse: !0,
                tweenChanges: !1,
                loglevel: 2
            },
            i = this,
            e = d.extend({}, g, m),
            a = "BEFORE",
            O = 0,
            D = 0,
            E = 0,
            ia = !0,
            G, Q, M, V = function (a, i) {
                if (e.loglevel >= a) {
                    var g = Array.prototype.splice.call(arguments, 1),
                        j = Function.prototype.bind.call(q, window);
                    g.unshift(a, "(ScrollScene) ->");
                    j.apply(window, g)
                }
            },
            ea = function () {
                d.each(e, function (a) {
                    g.hasOwnProperty(a) || (V(2, 'WARNING: Unknown option "' + a + '"'), delete e[a])
                });
                e.duration = parseFloat(e.duration);
                if (!d.isNumeric(e.duration) || 0 > e.duration) V(1, 'ERROR: Invalid value for option "duration":', e.duration), e.duration = g.duration;
                e.offset = parseFloat(e.offset);
                if (!d.isNumeric(e.offset)) V(1,
                    'ERROR: Invalid value for option "offset":', e.offset), e.offset = g.offset;
                if (null != e.triggerElement && 0 == d(e.triggerElement).length) V(1, 'ERROR: Element defined in option "triggerElement" was not found:', e.triggerElement), e.triggerElement = g.triggerElement;
                if (!d.isNumeric(e.triggerHook) && -1 == d.inArray(e.triggerHook, j)) V(1, 'ERROR: Invalid value for option "triggerHook": ', e.triggerHook), e.triggerHook = g.triggerHook;
                if (!d.isNumeric(e.loglevel) || 0 > e.loglevel || 3 < e.loglevel) {
                    var a = e.loglevel;
                    e.loglevel = g.loglevel;
                    V(1, 'ERROR: Invalid value for option "loglevel":', a)
                }
                if (Q && G && e.triggerElement && 2 <= e.loglevel) {
                    var a = Q.getTweensOf(d(e.triggerElement)),
                        i = G.info("vertical");
                    d.each(a, function (a, e) {
                        var g = e.vars.css || e.vars;
                        if (i ? void 0 !== g.top || void 0 !== g.bottom : void 0 !== g.left || void 0 !== g.right) return V(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1
                    })
                }
            },
            S = function () {
                D = i.triggerOffset();
                E = void 0;
                G && (D -= G.info("size") * i.triggerHook());
                E = D + e.duration
            },
            N = function (i) {
                i =
                    0 <= i && 1 >= i ? i : O;
                if (Q) {
                    if (-1 === Q.repeat())
                        if (("DURING" === a || "AFTER" === a && 0 == e.duration) && Q.paused()) Q.play();
                        else if ("DURING" !== a && !Q.paused()) Q.pause();
                    else return !1;
                    else if (i != Q.progress()) 0 == e.duration ? "AFTER" == a ? Q.play() : Q.reverse() : e.tweenChanges ? Q.tweenTo(i * Q.duration()) : Q.progress(i).pause();
                    else return !1;
                    return !0
                }
                return !1
            },
            T = function (i) {
                if (M && G) {
                    var g = G.info();
                    if (!i && ("DURING" === a || "AFTER" === a && 0 == e.duration)) {
                        "fixed" != M.css("position") && (M.css("position", "fixed"), F());
                        var i = l(u, !0),
                            j = e.reverse ||
                            0 == e.duration ? g.scrollPos - D : Math.round(10 * O * e.duration) / 10;
                        i.top -= parseFloat(u.css("margin-top"));
                        i[g.vertical ? "top" : "left"] += j;
                        M.css({
                            top: i.top,
                            left: i.left
                        })
                    } else i = {
                        position: n ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }, j = M.css("position") != i.position, s ? "AFTER" === a && 0 == parseFloat(u.css("padding-top")) ? j = !0 : "BEFORE" === a && 0 == parseFloat(u.css("padding-bottom")) && (j = !0) : i[g.vertical ? "top" : "left"] = e.duration * O, M.css(i), j && F()
                }
            },
            F = function () {
                if (M && G && n) {
                    var i = "AFTER" === a,
                        g = "BEFORE" === a,
                        j = "DURING" === a,
                        l = "fixed" ==
                        M.css("position"),
                        m = G.info("vertical"),
                        D = u.children().first(),
                        v = -1 < d.inArray(u.css("display"), ["block", "flex", "list-item", "table", "-webkit-box"]),
                        E = {};
                    v ? (E["margin-top"] = g || j && l ? M.css("margin-top") : "auto", E["margin-bottom"] = i || j && l ? M.css("margin-bottom") : "auto") : E["margin-top"] = E["margin-bottom"] = "auto";
                    A.width ? l ? d(window).width() == u.parent().width() ? M.css("width", "inherit") : M.css("width", u.width()) : M.css("width", "100%") : (E["min-width"] = D.outerWidth(!0), E.width = l ? E["min-width"] : "auto");
                    A.height ? l ?
                        d(window).height() == u.parent().height() ? M.css("height", "inherit") : M.css("height", u.height()) : M.css("height", "100%") : (E["min-height"] = D.outerHeight(!v), E.height = l ? E["min-height"] : "auto");
                    s && (E["padding" + (m ? "Top" : "Left")] = e.duration * O, E["padding" + (m ? "Bottom" : "Right")] = e.duration * (1 - O));
                    u.css(E)
                }
            },
            W = function () {
                G && M && "DURING" === a && (G.info("isDocument") || T())
            },
            U = function () {
                G && M && ("DURING" === a || "AFTER" === a && 0 == e.duration) && (A.width && d(window).width() != u.parent().width() || A.height && d(window).height() != u.parent().height()) &&
                    F()
            };
        this.parent = function () {
            return G
        };
        this.duration = function (a) {
            if (arguments.length) {
                if (e.duration != a) e.duration = a, i.trigger("change", {
                    what: "duration",
                    newval: a
                })
            } else return e.duration;
            return i
        };
        this.offset = function (a) {
            if (arguments.length) {
                if (e.offset != a) e.offset = a, i.trigger("change", {
                    what: "offset",
                    newval: a
                })
            } else return e.offset;
            return i
        };
        this.triggerElement = function (a) {
            if (arguments.length) {
                if (e.triggerElement != a) e.triggerElement = a, i.trigger("change", {
                    what: "triggerElement",
                    newval: a
                })
            } else return e.triggerElement;
            return i
        };
        this.triggerHook = function (a) {
            if (arguments.length) {
                if (e.triggerHook != a) e.triggerHook = a, i.trigger("change", {
                    what: "triggerHook",
                    newval: a
                })
            } else {
                var g;
                if (d.isNumeric(e.triggerHook)) g = e.triggerHook;
                else switch (e.triggerHook) {
                case "onCenter":
                    g = 0.5;
                    break;
                case "onLeave":
                    g = 0;
                    break;
                default:
                    g = 1
                }
                return g
            }
            return i
        };
        this.reverse = function (a) {
            if (arguments.length) {
                if (e.reverse != a) e.reverse = a, i.trigger("change", {
                    what: "reverse",
                    newval: a
                })
            } else return e.reverse;
            return i
        };
        this.tweenChanges = function (a) {
            if (arguments.length) {
                if (e.tweenChanges !=
                    a) e.tweenChanges = a, i.trigger("change", {
                    what: "tweenChanges",
                    newval: a
                })
            } else return e.tweenChanges;
            return i
        };
        this.loglevel = function (a) {
            if (arguments.length) {
                if (e.loglevel != a) e.loglevel = a, i.trigger("change", {
                    what: "loglevel",
                    newval: a
                })
            } else return e.loglevel;
            return i
        };
        this.state = function () {
            return a
        };
        this.startPosition = function () {
            return this.triggerOffset()
        };
        this.triggerOffset = function () {
            var a = e.offset;
            if (G) {
                var g = G.info();
                if (null === e.triggerElement) a += g.size * i.triggerHook();
                else {
                    for (var j = d(e.triggerElement).first(),
                        m = l(G.info("container")); j.parent().data("ScrollMagicPinSpacer");) j = j.parent();
                    j = l(j);
                    g.isDocument || (m.top -= g.scrollPos, m.left -= g.scrollPos);
                    a += g.vertical ? j.top - m.top : j.left - m.left
                }
            }
            return a
        };
        this.scrollOffset = function () {
            return D
        };
        this.update = function (a) {
            if (G)
                if (a)
                    if (G.enabled() && ia) {
                        var a = G.info("scrollPos"),
                            g;
                        null !== e.triggerElement && S();
                        g = 0 < e.duration ? (a - D) / (E - D) : a >= D ? 1 : 0;
                        i.trigger("update", {
                            startPos: D,
                            endPos: E,
                            scrollPos: a
                        });
                        i.progress(g)
                    } else M && "fixed" == M.css("position") && T(!0);
            else G.updateScene(i, !1);
            return i
        };
        this.progress = function (g) {
            if (arguments.length) {
                var j = !1,
                    d = a,
                    l = G ? G.info("scrollDirection") : "PAUSED";
                0 >= g && "BEFORE" !== a && (g >= O || e.reverse) ? (O = 0, a = "BEFORE", j = !0) : 0 < g && 1 > g && (g >= O || e.reverse) ? (O = g, a = "DURING", j = !0) : 1 <= g && "AFTER" !== a ? (O = 1, a = "AFTER", j = !0) : "DURING" === a && !e.reverse && T();
                if (j) {
                    var j = {
                            progress: O,
                            state: a,
                            scrollDirection: l
                        },
                        l = a != d,
                        m = "BEFORE" === a && 0 == e.duration;
                    if (l && (("DURING" === a || 0 == e.duration) && i.trigger("enter", j), "BEFORE" === a || "BEFORE" === d)) i.trigger(m ? "end" : "start", j);
                    i.trigger("progress",
                        j);
                    if (l) {
                        if ("AFTER" === a || "AFTER" === d) i.trigger(m ? "start" : "end", j);
                        ("DURING" !== a || 0 == e.duration) && i.trigger("leave", j)
                    }
                }
                return i
            }
            return O
        };
        this.setTween = function (a) {
            Q && i.removeTween();
            try {
                Q = (new TimelineMax({
                    smoothChildTiming: !0
                })).add(a).pause()
            } catch (e) {
                V(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenMaxObject")
            } finally {
                return a.repeat && -1 === a.repeat() && (Q.repeat(-1), Q.yoyo(a.yoyo())), ea(), V(3, "added tween"), N(), i
            }
        };
        this.removeTween = function (a) {
            Q && (a && N(0), Q.kill(),
                Q = void 0, V(3, "removed tween (reset: " + (a ? "true" : "false") + ")"));
            return i
        };
        this.setPin = function (a, e) {
            e = d.extend({}, {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            }, e);
            a = d(a).first();
            if (0 == a.length) return V(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), i;
            if ("fixed" == a.css("position")) return V(1, "ERROR: Pin does not work with elements that are positioned 'fixed'."), i;
            if (M) {
                if (M === a) return i;
                i.removePin()
            }
            M = a;
            M.parent().hide();
            var g = "absolute" != M.css("position"),
                j = M.css(["display",
                    "top", "left", "bottom", "right"
                ]),
                l = M.css(["width", "height"]);
            M.parent().show();
            j = d("<div></div>").addClass(e.spacerClass).css(j).data("ScrollMagicPinSpacer", !0).css({
                position: g ? "relative" : "absolute",
                "margin-left": "auto",
                "margin-right": "auto",
                "box-sizing": "content-box",
                "-moz-box-sizing": "content-box",
                "-webkit-box-sizing": "content-box"
            });
            if (!g && e.pushFollowers) V(2, "WARNING: If the pinned element is positioned absolutely pushFollowers is disabled."), e.pushFollowers = !1;
            u = j;
            A = {
                width: "%" === l.width.slice(-1),
                height: "%" === l.height.slice(-1)
            };
            s = e.pushFollowers;
            n = g;
            v = M.attr("style");
            A.width && j.css("width", l.width);
            A.height && j.css("height", l.height);
            M.before(j).appendTo(j).css({
                position: g ? "relative" : "absolute",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            });
            d(window).on("scroll resize", W);
            V(3, "added pin");
            T();
            return i
        };
        this.removePin = function (e) {
            M && (e || !G ? (M.insertBefore(u).attr("style", v), u.remove()) : "DURING" === a && T(!0), d(window).off("scroll resize", W), M = void 0, V(3, "removed pin (reset: " + (e ? "true" : "false") +
                ")"));
            return i
        };
        this.addTo = function (a) {
            if (G != a) return G && G.removeScene(i), G = a, ea(), S(), F(), G.info("container").on("resize", U), V(3, "added ScrollScene to controller"), a.addScene(i), i.update(), i
        };
        this.enabled = function (a) {
            if (arguments.length) ia != a && (ia = !!a, i.update(!0));
            else return ia;
            return i
        };
        this.remove = function () {
            if (G) {
                G.info("container").off("resize", U);
                var a = G;
                G = void 0;
                V(3, "removed ScrollScene from controller");
                a.removeScene(i)
            }
            return i
        };
        this.destroy = function (a) {
            this.removeTween(a);
            this.removePin(a);
            this.remove();
            this.off("start end enter leave progress change update change.internal progress.internal");
            V(3, "destroyed ScrollScene (reset: " + (a ? "true" : "false") + ")");
            return null
        };
        this.on = function (a, e) {
            if (d.isFunction(e)) {
                var g = d.trim(a).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1.ScrollScene_$2").replace(/( |^)(\w+)( |$)/g, "$1$2.ScrollScene$3");
                d(i).on(g, e)
            } else V(1, "ERROR calling method 'on()': Supplied argument is not a valid callback!");
            return i
        };
        this.off = function (a, e) {
            var g = d.trim(a).toLowerCase().replace(/(\w+)\.(\w+)/g,
                "$1.ScrollScene_$2").replace(/( |^)(\w+)( |$)/g, "$1$2.ScrollScene$3");
            d(i).off(g, e);
            return i
        };
        this.trigger = function (a, e) {
            V(3, "event fired:", a, "->", e);
            var g = {
                type: d.trim(a).toLowerCase(),
                target: i
            };
            d.isPlainObject(e) && (g = d.extend({}, e, g));
            d(i).trigger(g);
            return i
        };
        (function () {
            ea();
            i.on("change.internal", function (g) {
                ea();
                "loglevel" != g.what && "tweenChanges" != g.what && ("reverse" != g.what && null === e.triggerElement && S(), i.update(), ("DURING" !== a && "duration" == g.what || "AFTER" === a && 0 == e.duration) && T())
            });
            i.on("progress.internal",
                function () {
                    N();
                    T()
                })
        })();
        return i
    };
    var n = window.console = window.console || {},
        m = ["error", "warn", "log"];
    if (!n.log) n.log = d.noop;
    d.each(m, function (d, l) {
        if (!n[l]) n[l] = n.log
    });
    var q = function (d) {
            if (d > m.length || 0 >= d) d = m.length;
            var l = new Date,
                l = ("0" + l.getHours()).slice(-2) + ":" + ("0" + l.getMinutes()).slice(-2) + ":" + ("0" + l.getSeconds()).slice(-2) + ":" + ("00" + l.getMilliseconds()).slice(-3),
                w = m[d - 1],
                s = Array.prototype.splice.call(arguments, 1),
                w = Function.prototype.bind.call(n[w], n);
            s.unshift(l);
            w.apply(n, s)
        },
        l = function (l,
            m) {
            var n = {
                    top: 0,
                    left: 0
                },
                s = l[0];
            if (s) s.getBoundingClientRect ? (s = s.getBoundingClientRect(), n.top = s.top, n.left = s.left, m || (n.top += d(document).scrollTop(), n.left += d(document).scrollLeft())) : (n = l.offset() || n, m && (n.top -= d(document).scrollTop(), n.left -= d(document).scrollLeft()));
            return n
        }
})(jQuery);
(window._gsQueue || (window._gsQueue = [])).push(function () {
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (d, n, m) {
        var q = [].slice,
            l = function (g, i, e) {
                m.call(this, g, i, e);
                this._cycle = 0;
                this._yoyo = !0 === this.vars.yoyo;
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._dirty = !0;
                this.render = l.prototype.render
            },
            z = m._internals.isSelector,
            u = m._internals.isArray,
            w = l.prototype = m.to({}, 0.1, {}),
            s = [];
        l.version = "1.11.5";
        w.constructor = l;
        w.kill()._gc = !1;
        l.killTweensOf = l.killDelayedCallsTo = m.killTweensOf;
        l.getTweensOf = m.getTweensOf;
        l.ticker = m.ticker;
        w.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), m.prototype.invalidate.call(this)
        };
        w.updateTo = function (g, i) {
            var e, a = this.ratio;
            i && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime -
                this._delay));
            for (e in g) this.vars[e] = g[e];
            if (this._initted)
                if (i) this._initted = !1;
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && m._onPluginEvent("_onDisable", this), 0.998 < this._time / this._duration) {
                var j = this._time;
                this.render(0, !0, !1);
                this._initted = !1;
                this.render(j, !0, !1)
            } else if (0 < this._time) {
                this._initted = !1;
                this._init();
                e = 1 / (1 - a);
                for (a = this._firstPT; a;) j = a.s + a.c, a.c *= e, a.s = j - a.c, a = a._next
            }
            return this
        };
        w.render = function (g, i, e) {
            this._initted || 0 === this._duration &&
                this.vars.repeat && this.invalidate();
            var a, j, d, l, m, u, n, v = this._dirty ? this.totalDuration() : this._totalDuration,
                w = this._time,
                q = this._totalTime,
                z = this._cycle,
                A = this._duration;
            if (g >= v ? (this._totalTime = v, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = A, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (a = !0, j = "onComplete"), 0 === A && (n = this._rawPrevTime, (0 === g || 0 > n || 1.0E-10 === n) && n !== g && (e = !0,
                    1.0E-10 < n && (j = "onReverseComplete")), this._rawPrevTime = n = !i || g || 0 === n ? g : 1.0E-10)) : 1.0E-7 > g ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== q || 0 === A && 1.0E-10 < this._rawPrevTime) && (j = "onReverseComplete", a = this._reversed), 0 > g ? (this._active = !1, 0 === A && (0 <= this._rawPrevTime && (e = !0), this._rawPrevTime = n = !i || g || 0 === this._rawPrevTime ? g : 1.0E-10)) : this._initted || (e = !0)) : (this._totalTime = this._time = g, 0 !== this._repeat && (d = A + this._repeatDelay, this._cycle = this._totalTime /
                    d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 !== (1 & this._cycle) && (this._time = A - this._time), this._time > A ? this._time = A : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / A, m = this._easeType, u = this._easePower, (1 === m || 3 === m && 0.5 <= l) && (l = 1 - l), 3 === m && (l *= 2), 1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l), this.ratio = 1 === m ? 1 - l : 2 === m ? l : 0.5 > this._time / A ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / A)), w ===
                this._time && !e && z === this._cycle) return q !== this._totalTime && this._onUpdate && (i || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), void 0;
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                this._time && !a ? this.ratio = this._ease.getRatio(this._time / A) : a && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || !this._paused && this._time !== w && 0 <= g && (this._active = !0), 0 === q && (this._startAt && (0 <= g ? this._startAt.render(g, i, e) :
                j || (j = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === A) && (i || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s))), d = this._firstPT; d;) d.f ? d.t[d.p](d.c * this.ratio + d.s) : d.t[d.p] = d.c * this.ratio + d.s, d = d._next;
            this._onUpdate && (0 > g && this._startAt && this._startTime && this._startAt.render(g, i, e), i || (this._totalTime !== q || a) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s));
            this._cycle !== z && (i || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope ||
                this, this.vars.onRepeatParams || s));
            j && (this._gc || (0 > g && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(g, i, e), a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !i && this.vars[j] && this.vars[j].apply(this.vars[j + "Scope"] || this, this.vars[j + "Params"] || s), 0 === A && 1.0E-10 === this._rawPrevTime && 1.0E-10 !== n && (this._rawPrevTime = 0)))
        };
        l.to = function (g, i, e) {
            return new l(g, i, e)
        };
        l.from = function (g, i, e) {
            return e.runBackwards = !0, e.immediateRender = 0 != e.immediateRender,
                new l(g, i, e)
        };
        l.fromTo = function (g, i, e, a) {
            return a.startAt = e, a.immediateRender = 0 != a.immediateRender && 0 != e.immediateRender, new l(g, i, a)
        };
        l.staggerTo = l.allTo = function (g, i, e, a, j, d, n) {
            var a = a || 0,
                v, w, A, M, V = e.delay || 0,
                ea = [],
                S = function () {
                    e.onComplete && e.onComplete.apply(e.onCompleteScope || this, arguments);
                    j.apply(n || this, d || s)
                };
            for (u(g) || ("string" == typeof g && (g = m.selector(g) || g), z(g) && (g = q.call(g, 0))), v = g.length, A = 0; v > A; A++) {
                w = {};
                for (M in e) w[M] = e[M];
                w.delay = V;
                A === v - 1 && j && (w.onComplete = S);
                ea[A] = new l(g[A],
                    i, w);
                V += a
            }
            return ea
        };
        l.staggerFrom = l.allFrom = function (g, i, e, a, j, d, m) {
            return e.runBackwards = !0, e.immediateRender = 0 != e.immediateRender, l.staggerTo(g, i, e, a, j, d, m)
        };
        l.staggerFromTo = l.allFromTo = function (g, i, e, a, j, d, m, u) {
            return a.startAt = e, a.immediateRender = 0 != a.immediateRender && 0 != e.immediateRender, l.staggerTo(g, i, a, j, d, m, u)
        };
        l.delayedCall = function (g, i, e, a, j) {
            return new l(i, 0, {
                delay: g,
                onComplete: i,
                onCompleteParams: e,
                onCompleteScope: a,
                onReverseComplete: i,
                onReverseCompleteParams: e,
                onReverseCompleteScope: a,
                immediateRender: !1,
                useFrames: j,
                overwrite: 0
            })
        };
        l.set = function (g, i) {
            return new l(g, 0, i)
        };
        l.isTweening = function (g) {
            return 0 < m.getTweensOf(g, !0).length
        };
        var A = function (g, i) {
                for (var e = [], a = 0, j = g._first; j;) j instanceof m ? e[a++] = j : (i && (e[a++] = j), e = e.concat(A(j, i)), a = e.length), j = j._next;
                return e
            },
            v = l.getAllTweens = function (g) {
                return A(d._rootTimeline, g).concat(A(d._rootFramesTimeline, g))
            };
        l.killAll = function (g, i, e, a) {
            null == i && (i = !0);
            null == e && (e = !0);
            for (var j, d, l = v(0 != a), m = l.length, u = i && e && a, a = 0; m > a; a++) d = l[a], (u || d instanceof n || (j = d.target === d.vars.onComplete) && e || i && !j) && (g ? d.totalTime(d.totalDuration()) : d._enabled(!1, !1))
        };
        l.killChildTweensOf = function (g, i) {
            if (null != g) {
                var e, a, j, d = m._tweenLookup;
                if ("string" == typeof g && (g = m.selector(g) || g), z(g) && (g = q.call(g, 0)), u(g))
                    for (a = g.length; - 1 < --a;) l.killChildTweensOf(g[a], i);
                else {
                    e = [];
                    for (j in d)
                        for (a = d[j].target.parentNode; a;) a === g && (e = e.concat(d[j].tweens)), a = a.parentNode;
                    for (j = e.length, a = 0; j > a; a++) i && e[a].totalTime(e[a].totalDuration()), e[a]._enabled(!1, !1)
                }
            }
        };
        var j = function (g, i, e, a) {
            i = !1 !== i;
            e = !1 !== e;
            a = !1 !== a;
            for (var j, d, l = v(a), a = i && e && a, m = l.length; - 1 < --m;) d = l[m], (a || d instanceof n || (j = d.target === d.vars.onComplete) && e || i && !j) && d.paused(g)
        };
        return l.pauseAll = function (g, i, e) {
            j(!0, g, i, e)
        }, l.resumeAll = function (g, i, e) {
            j(!1, g, i, e)
        }, l.globalTimeScale = function (g) {
            var i = d._rootTimeline,
                e = m.ticker.time;
            return arguments.length ? (g = g || 1.0E-10, i._startTime = e - (e - i._startTime) * i._timeScale / g, i = d._rootFramesTimeline, e = m.ticker.frame, i._startTime = e - (e - i._startTime) * i._timeScale /
                g, i._timeScale = d._rootTimeline._timeScale = g, g) : i._timeScale
        }, w.progress = function (g) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - g : g) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, w.totalProgress = function (g) {
            return arguments.length ? this.totalTime(this.totalDuration() * g, !1) : this._totalTime / this.totalDuration()
        }, w.time = function (g, i) {
            return arguments.length ? (this._dirty && this.totalDuration(), g > this._duration && (g = this._duration),
                this._yoyo && 0 !== (1 & this._cycle) ? g = this._duration - g + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (g += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(g, i)) : this._time
        }, w.duration = function (g) {
            return arguments.length ? d.prototype.duration.call(this, g) : this._duration
        }, w.totalDuration = function (g) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((g - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 :
                this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, w.repeat = function (g) {
            return arguments.length ? (this._repeat = g, this._uncache(!0)) : this._repeat
        }, w.repeatDelay = function (g) {
            return arguments.length ? (this._repeatDelay = g, this._uncache(!0)) : this._repeatDelay
        }, w.yoyo = function (g) {
            return arguments.length ? (this._yoyo = g, this) : this._yoyo
        }, l
    }, !0);
    window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (d, n, m) {
        var q = function (j) {
                n.call(this,
                    j);
                this._labels = {};
                this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren;
                this.smoothChildTiming = !0 === this.vars.smoothChildTiming;
                this._sortChildren = !0;
                this._onUpdate = this.vars.onUpdate;
                var g, i, j = this.vars;
                for (i in j) g = j[i], z(g) && -1 !== g.join("").indexOf("{self}") && (j[i] = this._swapSelfInParams(g));
                z(j.tweens) && this.add(j.tweens, 0, j.align, j.stagger)
            },
            l = m._internals.isSelector,
            z = m._internals.isArray,
            u = [],
            w = function (j) {
                var g, i = {};
                for (g in j) i[g] = j[g];
                return i
            },
            s = function (j, g, i, e) {
                j._timeline.pause(j._startTime);
                g && g.apply(e || j._timeline, i || u)
            },
            A = u.slice,
            v = q.prototype = new n;
        return q.version = "1.11.5", v.constructor = q, v.kill()._gc = !1, v.to = function (j, g, i, e) {
            return g ? this.add(new m(j, g, i), e) : this.set(j, i, e)
        }, v.from = function (j, g, i, e) {
            return this.add(m.from(j, g, i), e)
        }, v.fromTo = function (j, g, i, e, a) {
            return g ? this.add(m.fromTo(j, g, i, e), a) : this.set(j, e, a)
        }, v.staggerTo = function (j, g, i, e, a, d, u, n) {
            u = new q({
                onComplete: d,
                onCompleteParams: u,
                onCompleteScope: n,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof j &&
                (j = m.selector(j) || j), l(j) && (j = A.call(j, 0)), e = e || 0, d = 0; j.length > d; d++) i.startAt && (i.startAt = w(i.startAt)), u.to(j[d], g, w(i), d * e);
            return this.add(u, a)
        }, v.staggerFrom = function (j, g, i, e, a, d, l, m) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(j, g, i, e, a, d, l, m)
        }, v.staggerFromTo = function (j, g, i, e, a, d, l, m, u) {
            return e.startAt = i, e.immediateRender = 0 != e.immediateRender && 0 != i.immediateRender, this.staggerTo(j, g, e, a, d, l, m, u)
        }, v.call = function (j, g, i, e) {
            return this.add(m.delayedCall(0, j,
                g, i), e)
        }, v.set = function (j, g, i) {
            return i = this._parseTimeOrLabel(i, 0, !0), null == g.immediateRender && (g.immediateRender = i === this._time && !this._paused), this.add(new m(j, 0, g), i)
        }, q.exportRoot = function (j, g) {
            j = j || {};
            null == j.smoothChildTiming && (j.smoothChildTiming = !0);
            var i, e, a = new q(j),
                d = a._timeline;
            for (null == g && (g = !0), d._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = d._time, i = d._first; i;) e = i._next, g && i instanceof m && i.target === i.vars.onComplete || a.add(i, i._startTime - i._delay), i = e;
            return d.add(a,
                0), a
        }, v.add = function (j, g, i, e) {
            var a, l, u;
            if ("number" != typeof g && (g = this._parseTimeOrLabel(g, 0, !0, j)), !(j instanceof d)) {
                if (j instanceof Array || j && j.push && z(j)) {
                    for (i = i || "normal", e = e || 0, a = g, g = j.length, l = 0; g > l; l++) z(u = j[l]) && (u = new q({
                        tweens: u
                    })), this.add(u, a), "string" != typeof u && "function" != typeof u && ("sequence" === i ? a = u._startTime + u.totalDuration() / u._timeScale : "start" === i && (u._startTime -= u.delay())), a += e;
                    return this._uncache(!0)
                }
                if ("string" == typeof j) return this.addLabel(j, g);
                if ("function" != typeof j) throw "Cannot add " +
                    j + " into the timeline; it is not a tween, timeline, function, or string.";
                j = m.delayedCall(0, j)
            }
            if (n.prototype.add.call(this, j, g), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (a = this, j = a.rawTime() > j._startTime; a._timeline;) j && a._timeline.smoothChildTiming ? a.totalTime(a._totalTime, !0) : a._gc && a._enabled(!0, !1), a = a._timeline;
            return this
        }, v.remove = function (j) {
            if (j instanceof d) return this._remove(j, !1);
            if (j instanceof Array || j && j.push && z(j)) {
                for (var g = j.length; - 1 <
                    --g;) this.remove(j[g]);
                return this
            }
            return "string" == typeof j ? this.removeLabel(j) : this.kill(null, j)
        }, v._remove = function (j, g) {
            n.prototype._remove.call(this, j, g);
            var i = this._last;
            return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, v.append = function (j, g) {
            return this.add(j, this._parseTimeOrLabel(null, g, !0, j))
        }, v.insert = v.insertMultiple = function (j, g, i, e) {
            return this.add(j,
                g || 0, i, e)
        }, v.appendMultiple = function (j, g, i, e) {
            return this.add(j, this._parseTimeOrLabel(null, g, !0, j), i, e)
        }, v.addLabel = function (j, g) {
            return this._labels[j] = this._parseTimeOrLabel(g), this
        }, v.addPause = function (j, g, i, e) {
            return this.call(s, ["{self}", g, i, e], this, j)
        }, v.removeLabel = function (j) {
            return delete this._labels[j], this
        }, v.getLabelTime = function (j) {
            return null != this._labels[j] ? this._labels[j] : -1
        }, v._parseTimeOrLabel = function (j, g, i, e) {
            var a;
            if (e instanceof d && e.timeline === this) this.remove(e);
            else if (e &&
                (e instanceof Array || e.push && z(e)))
                for (a = e.length; - 1 < --a;) e[a] instanceof d && e[a].timeline === this && this.remove(e[a]);
            if ("string" == typeof g) return this._parseTimeOrLabel(g, i && "number" == typeof j && null == this._labels[g] ? j - this.duration() : 0, i);
            if (g = g || 0, "string" != typeof j || !isNaN(j) && null == this._labels[j]) null == j && (j = this.duration());
            else {
                if (a = j.indexOf("="), -1 === a) return null == this._labels[j] ? i ? this._labels[j] = this.duration() + g : g : this._labels[j] + g;
                g = parseInt(j.charAt(a - 1) + "1", 10) * Number(j.substr(a + 1));
                j = 1 < a ? this._parseTimeOrLabel(j.substr(0, a - 1), 0, i) : this.duration()
            }
            return Number(j) + g
        }, v.seek = function (j, g) {
            return this.totalTime("number" == typeof j ? j : this._parseTimeOrLabel(j), !1 !== g)
        }, v.stop = function () {
            return this.paused(!0)
        }, v.gotoAndPlay = function (j, g) {
            return this.play(j, g)
        }, v.gotoAndStop = function (j, g) {
            return this.pause(j, g)
        }, v.render = function (j, g, i) {
            this._gc && this._enabled(!0, !1);
            var e, a, d, l, m = this._dirty ? this.totalDuration() : this._totalDuration,
                n = this._time,
                v = this._startTime,
                s = this._timeScale,
                w = this._paused;
            if (j >= m ? (this._totalTime = this._time = m, this._reversed || this._hasPausedChild() || (a = !0, l = "onComplete", 0 === this._duration && (0 === j || 0 > this._rawPrevTime || 1.0E-10 === this._rawPrevTime) && this._rawPrevTime !== j && this._first && (e = !0, 1.0E-10 < this._rawPrevTime && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !g || j || 0 === this._rawPrevTime ? j : 1.0E-10, j = m + 1.0E-4) : 1.0E-7 > j ? (this._totalTime = this._time = 0, (0 !== n || 0 === this._duration && (1.0E-10 < this._rawPrevTime || 0 > j && 0 <= this._rawPrevTime)) && (l = "onReverseComplete",
                a = this._reversed), 0 > j ? (this._active = !1, 0 === this._duration && 0 <= this._rawPrevTime && this._first && (e = !0), this._rawPrevTime = j) : (this._rawPrevTime = this._duration || !g || j || 0 === this._rawPrevTime ? j : 1.0E-10, j = 0, this._initted || (e = !0))) : this._totalTime = this._time = this._rawPrevTime = j, this._time !== n && this._first || i || e) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== n && 0 < j && (this._active = !0), 0 === n && this.vars.onStart && 0 !== this._time && (g || this.vars.onStart.apply(this.vars.onStartScope ||
                    this, this.vars.onStartParams || u)), this._time >= n)
                    for (e = this._first; e && (d = e._next, !this._paused || w);)(e._active || e._startTime <= this._time && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (j - e._startTime) * e._timeScale, g, i) : e.render((j - e._startTime) * e._timeScale, g, i)), e = d;
                else
                    for (e = this._last; e && (d = e._prev, !this._paused || w);)(e._active || n >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (j - e._startTime) * e._timeScale,
                        g, i) : e.render((j - e._startTime) * e._timeScale, g, i)), e = d;
                this._onUpdate && (g || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u));
                l && (this._gc || (v === this._startTime || s !== this._timeScale) && (0 === this._time || m >= this.totalDuration()) && (a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !g && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || u)))
            }
        }, v._hasPausedChild = function () {
            for (var j = this._first; j;) {
                if (j._paused || j instanceof q && j._hasPausedChild()) return !0;
                j = j._next
            }
            return !1
        }, v.getChildren = function (j, g, i, e) {
            for (var e = e || -9999999999, a = [], d = this._first, l = 0; d;) e > d._startTime || (d instanceof m ? !1 !== g && (a[l++] = d) : (!1 !== i && (a[l++] = d), !1 !== j && (a = a.concat(d.getChildren(!0, g, i)), l = a.length))), d = d._next;
            return a
        }, v.getTweensOf = function (j, g) {
            for (var i = m.getTweensOf(j), e = i.length, a = [], d = 0; - 1 < --e;)(i[e].timeline === this || g && this._contains(i[e])) && (a[d++] = i[e]);
            return a
        }, v._contains = function (j) {
            for (j = j.timeline; j;) {
                if (j === this) return !0;
                j = j.timeline
            }
            return !1
        }, v.shiftChildren = function (j, g, i) {
            for (var i = i || 0, e, a = this._first, d = this._labels; a;) a._startTime >= i && (a._startTime += j), a = a._next;
            if (g)
                for (e in d) d[e] >= i && (d[e] += j);
            return this._uncache(!0)
        }, v._kill = function (j, g) {
            if (!j && !g) return this._enabled(!1, !1);
            for (var i = g ? this.getTweensOf(g) : this.getChildren(!0, !0, !1), e = i.length, a = !1; - 1 < --e;) i[e]._kill(j, g) && (a = !0);
            return a
        }, v.clear = function (j) {
            var g = this.getChildren(!1, !0, !0),
                i = g.length;
            for (this._time = this._totalTime = 0; - 1 < --i;) g[i]._enabled(!1, !1);
            return !1 !== j && (this._labels = {}), this._uncache(!0)
        }, v.invalidate = function () {
            for (var j = this._first; j;) j.invalidate(), j = j._next;
            return this
        }, v._enabled = function (j, g) {
            if (j === this._gc)
                for (var i = this._first; i;) i._enabled(j, !0), i = i._next;
            return n.prototype._enabled.call(this, j, g)
        }, v.duration = function (j) {
            return arguments.length ? (0 !== this.duration() && 0 !== j && this.timeScale(this._duration / j), this) : (this._dirty && this.totalDuration(), this._duration)
        }, v.totalDuration = function (j) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var g,
                        i, e = 0, a = this._last, d = 999999999999; a;) g = a._prev, a._dirty && a.totalDuration(), a._startTime > d && this._sortChildren && !a._paused ? this.add(a, a._startTime - a._delay) : d = a._startTime, 0 > a._startTime && !a._paused && (e -= a._startTime, this._timeline.smoothChildTiming && (this._startTime += a._startTime / this._timeScale), this.shiftChildren(-a._startTime, !1, -9999999999), d = 0), i = a._startTime + a._totalDuration / a._timeScale, i > e && (e = i), a = g;
                    this._duration = this._totalDuration = e;
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !==
                this.totalDuration() && 0 !== j && this.timeScale(this._totalDuration / j), this
        }, v.usesFrames = function () {
            for (var j = this._timeline; j._timeline;) j = j._timeline;
            return j === d._rootFramesTimeline
        }, v.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, q
    }, !0);
    window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (d, n, m) {
        var q = function (l) {
                d.call(this, l);
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay ||
                    0;
                this._cycle = 0;
                this._yoyo = !0 === this.vars.yoyo;
                this._dirty = !0
            },
            l = [],
            z = new m(null, null, 1, 0),
            m = q.prototype = new d;
        return m.constructor = q, m.kill()._gc = !1, q.version = "1.11.5", m.invalidate = function () {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), d.prototype.invalidate.call(this)
            }, m.addCallback = function (d, l, m, q) {
                return this.add(n.delayedCall(0, d, m, q), l)
            }, m.removeCallback = function (d, l) {
                if (d)
                    if (null == l) this._kill(null, d);
                    else
                        for (var m = this.getTweensOf(d, !1), n = m.length, v = this._parseTimeOrLabel(l); - 1 < --n;) m[n]._startTime === v && m[n]._enabled(!1, !1);
                return this
            }, m.tweenTo = function (d, m) {
                var m = m || {},
                    s, q, v, j = {
                        ease: z,
                        overwrite: 2,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                for (q in m) j[q] = m[q];
                return j.time = this._parseTimeOrLabel(d), s = Math.abs(Number(j.time) - this._time) / this._timeScale || 0.001, v = new n(this, s, j), j.onStart = function () {
                    v.target.paused(!0);
                    v.vars.time !== v.target.time() && s === v.duration() && v.duration(Math.abs(v.vars.time -
                        v.target.time()) / v.target._timeScale);
                    m.onStart && m.onStart.apply(m.onStartScope || v, m.onStartParams || l)
                }, v
            }, m.tweenFromTo = function (d, l, m) {
                m = m || {};
                d = this._parseTimeOrLabel(d);
                m.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [d],
                    onCompleteScope: this
                };
                m.immediateRender = !1 !== m.immediateRender;
                l = this.tweenTo(l, m);
                return l.duration(Math.abs(l.vars.time - d) / this._timeScale || 0.001)
            }, m.render = function (d, m, n) {
                this._gc && this._enabled(!0, !1);
                var q, v, j, g, i, e = this._dirty ? this.totalDuration() : this._totalDuration,
                    a = this._duration,
                    O = this._time,
                    D = this._totalTime,
                    z = this._startTime,
                    ia = this._timeScale,
                    G = this._rawPrevTime,
                    Q = this._paused,
                    M = this._cycle;
                if (d >= e ? (this._locked || (this._totalTime = e, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (v = !0, g = "onComplete", 0 === this._duration && (0 === d || 0 > G || 1.0E-10 === G) && G !== d && this._first && (q = !0, 1.0E-10 < G && (g = "onReverseComplete"))), this._rawPrevTime = this._duration || !m || d || 0 === this._rawPrevTime ? d : 1.0E-10, this._yoyo && 0 !== (1 & this._cycle) ? this._time = d = 0 : (this._time =
                    a, d = a + 1.0E-4)) : 1.0E-7 > d ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== O || 0 === a && (1.0E-10 < G || 0 > d && 0 <= G) && !this._locked) && (g = "onReverseComplete", v = this._reversed), 0 > d ? (this._active = !1, 0 === a && 0 <= G && this._first && (q = !0), this._rawPrevTime = d) : (this._rawPrevTime = a || !m || d || 0 === this._rawPrevTime ? d : 1.0E-10, d = 0, this._initted || (q = !0))) : (0 === a && 0 > G && (q = !0), this._time = this._rawPrevTime = d, this._locked || (this._totalTime = d, 0 !== this._repeat && (i = a + this._repeatDelay, this._cycle = this._totalTime / i >> 0,
                    0 !== this._cycle && this._cycle === this._totalTime / i && this._cycle--, this._time = this._totalTime - this._cycle * i, this._yoyo && 0 !== (1 & this._cycle) && (this._time = a - this._time), this._time > a ? (this._time = a, d = a + 1.0E-4) : 0 > this._time ? this._time = d = 0 : d = this._time))), this._cycle !== M && !this._locked) {
                    i = this._yoyo && 0 !== (1 & M);
                    var V = i === (this._yoyo && 0 !== (1 & this._cycle)),
                        ea = this._totalTime,
                        S = this._cycle,
                        N = this._rawPrevTime,
                        T = this._time;
                    if (this._totalTime = M * a, M > this._cycle ? i = !i : this._totalTime += a, this._time = O, this._rawPrevTime =
                        0 === a ? G - 1.0E-4 : G, this._cycle = M, this._locked = !0, O = i ? 0 : a, this.render(O, m, 0 === a), m || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || l), V && (O = i ? a + 1.0E-4 : -1.0E-4, this.render(O, !0, !1)), this._locked = !1, this._paused && !Q) return;
                    this._time = T;
                    this._totalTime = ea;
                    this._cycle = S;
                    this._rawPrevTime = N
                }
                if (!(this._time !== O && this._first || n || q)) return D !== this._totalTime && this._onUpdate && (m || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams ||
                    l)), void 0;
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== D && 0 < d && (this._active = !0), 0 === D && this.vars.onStart && 0 !== this._totalTime && (m || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || l)), this._time >= O)
                    for (q = this._first; q && (j = q._next, !this._paused || Q);)(q._active || q._startTime <= this._time && !q._paused && !q._gc) && (q._reversed ? q.render((q._dirty ? q.totalDuration() : q._totalDuration) - (d - q._startTime) * q._timeScale, m, n) : q.render((d - q._startTime) *
                        q._timeScale, m, n)), q = j;
                else
                    for (q = this._last; q && (j = q._prev, !this._paused || Q);)(q._active || O >= q._startTime && !q._paused && !q._gc) && (q._reversed ? q.render((q._dirty ? q.totalDuration() : q._totalDuration) - (d - q._startTime) * q._timeScale, m, n) : q.render((d - q._startTime) * q._timeScale, m, n)), q = j;
                this._onUpdate && (m || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || l));
                g && (this._locked || this._gc || (z === this._startTime || ia !== this._timeScale) && (0 === this._time || e >= this.totalDuration()) && (v &&
                    (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !m && this.vars[g] && this.vars[g].apply(this.vars[g + "Scope"] || this, this.vars[g + "Params"] || l)))
            }, m.getActive = function (d, l, m) {
                null == d && (d = !0);
                null == l && (l = !0);
                null == m && (m = !1);
                for (var n, v = [], l = this.getChildren(d, l, m), m = 0, j = l.length, d = 0; j > d; d++) n = l[d], n.isActive() && (v[m++] = n);
                return v
            }, m.getLabelAfter = function (d) {
                d || 0 !== d && (d = this._time);
                var l, m = this.getLabelsArray(),
                    n = m.length;
                for (l = 0; n > l; l++)
                    if (m[l].time > d) return m[l].name;
                return null
            },
            m.getLabelBefore = function (d) {
                null == d && (d = this._time);
                for (var l = this.getLabelsArray(), m = l.length; - 1 < --m;)
                    if (d > l[m].time) return l[m].name;
                return null
            }, m.getLabelsArray = function () {
                var d, l = [],
                    m = 0;
                for (d in this._labels) l[m++] = {
                    time: this._labels[d],
                    name: d
                };
                return l.sort(function (d, l) {
                    return d.time - l.time
                }), l
            }, m.progress = function (d) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - d : d) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
            },
            m.totalProgress = function (d) {
                return arguments.length ? this.totalTime(this.totalDuration() * d, !1) : this._totalTime / this.totalDuration()
            }, m.totalDuration = function (l) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((l - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (d.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, m.time = function (d, l) {
                return arguments.length ?
                    (this._dirty && this.totalDuration(), d > this._duration && (d = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? d = this._duration - d + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (d += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(d, l)) : this._time
            }, m.repeat = function (d) {
                return arguments.length ? (this._repeat = d, this._uncache(!0)) : this._repeat
            }, m.repeatDelay = function (d) {
                return arguments.length ? (this._repeatDelay = d, this._uncache(!0)) : this._repeatDelay
            }, m.yoyo = function (d) {
                return arguments.length ?
                    (this._yoyo = d, this) : this._yoyo
            }, m.currentLabel = function (d) {
                return arguments.length ? this.seek(d, !0) : this.getLabelBefore(this._time + 1.0E-8)
            }, q
    }, !0);
    (function () {
        var d = 180 / Math.PI,
            n = [],
            m = [],
            q = [],
            l = {},
            z = function (d, j, g, i) {
                this.a = d;
                this.b = j;
                this.c = g;
                this.d = i;
                this.da = i - d;
                this.ca = g - d;
                this.ba = j - d
            },
            u = function (d, j, g, i) {
                var e = {
                        a: d
                    },
                    a = {},
                    l = {},
                    m = {
                        c: i
                    },
                    n = (d + j) / 2,
                    q = (j + g) / 2,
                    g = (g + i) / 2,
                    j = (n + q) / 2,
                    q = (q + g) / 2,
                    u = (q - j) / 8;
                return e.b = n + (d - n) / 4, a.b = j + u, e.c = a.a = (e.b + a.b) / 2, a.c = l.a = (j + q) / 2, l.b = q - u, m.b = g + (i - g) / 4, l.c = m.a = (l.b + m.b) /
                    2, [e, a, l, m]
            },
            w = function (d, j, g, i, e, a) {
                var c;
                var b;
                var s, D, E, w, G, Q, M = {},
                    V = [],
                    A = a || d[0];
                e = "string" == typeof e ? "," + e + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
                null == j && (j = 1);
                for (D in d[0]) V.push(D);
                if (1 < d.length) {
                    for (Q = d[d.length - 1], G = !0, s = V.length; - 1 < --s;)
                        if (D = V[s], 0.05 < Math.abs(A[D] - Q[D])) {
                            G = !1;
                            break
                        }
                    G && (d = d.concat(), a && d.unshift(a), d.push(d[1]), a = d[d.length - 3])
                }
                for (n.length =
                    m.length = q.length = 0, s = V.length; - 1 < --s;) {
                    D = V[s];
                    l[D] = -1 !== e.indexOf("," + D + ",");
                    Q = M;
                    var A = D,
                        S;
                    S = d;
                    var N = D,
                        T = l[D],
                        F = a,
                        W = void 0,
                        U = void 0,
                        R = void 0,
                        Y = void 0,
                        da = void 0,
                        aa = void 0,
                        Z = [];
                    if (F)
                        for (S = [F].concat(S), U = S.length; - 1 < --U;) "string" == typeof (aa = S[U][N]) && "=" === aa.charAt(1) && (S[U][N] = F[N] + Number(aa.charAt(0) + aa.substr(2)));
                    if (W = S.length - 2, 0 > W) b = (Z[0] = new z(S[0][N], 0, 0, S[-1 > W ? 0 : 1][N]), Z), S = b;
                    else {
                        for (U = 0; W > U; U++) R = S[U][N], Y = S[U + 1][N], Z[U] = new z(R, 0, 0, Y), T && (da = S[U + 2][N], n[U] = (n[U] || 0) + (Y - R) * (Y - R), m[U] = (m[U] ||
                            0) + (da - Y) * (da - Y));
                        c = (Z[U] = new z(S[U][N], 0, 0, S[U + 1][N]), Z), S = c
                    }
                    Q[A] = S
                }
                for (s = n.length; - 1 < --s;) n[s] = Math.sqrt(n[s]), m[s] = Math.sqrt(m[s]);
                if (!i) {
                    for (s = V.length; - 1 < --s;)
                        if (l[D])
                            for (E = M[V[s]], e = E.length - 1, d = 0; e > d; d++) w = E[d + 1].da / m[d] + E[d].da / n[d], q[d] = (q[d] || 0) + w * w;
                    for (s = q.length; - 1 < --s;) q[s] = Math.sqrt(q[s])
                }
                for (s = V.length, d = g ? 4 : 1; - 1 < --s;) {
                    D = V[s];
                    E = M[D];
                    w = E;
                    e = j;
                    a = g;
                    Q = i;
                    var A = l[D],
                        fa = Z = aa = da = Y = R = U = W = F = T = N = S = void 0,
                        ma = void 0,
                        ha = w.length - 1,
                        ka = 0,
                        ca = w[0].a;
                    for (S = 0; ha > S; S++) W = w[ka], N = W.a, T = W.d, F = w[ka + 1].d, A ?
                        (Z = n[S], fa = m[S], ma = 0.25 * (fa + Z) * e / (Q ? 0.5 : q[S] || 0.5), U = T - (T - N) * (Q ? 0.5 * e : 0 !== Z ? ma / Z : 0), R = T + (F - T) * (Q ? 0.5 * e : 0 !== fa ? ma / fa : 0), Y = T - (U + ((R - U) * (3 * Z / (Z + fa) + 0.5) / 4 || 0))) : (U = T - 0.5 * (T - N) * e, R = T + 0.5 * (F - T) * e, Y = T - (U + R) / 2), U += Y, R += Y, W.c = da = U, W.b = 0 !== S ? ca : ca = W.a + 0.6 * (W.c - W.a), W.da = T - N, W.ca = da - N, W.ba = ca - N, a ? (aa = u(N, ca, da, T), w.splice(ka, 1, aa[0], aa[1], aa[2], aa[3]), ka += 4) : ka++, ca = R;
                    W = w[ka];
                    W.b = ca;
                    W.c = ca + 0.4 * (W.d - ca);
                    W.da = W.d - W.a;
                    W.ca = W.c - W.a;
                    W.ba = ca - W.a;
                    a && (aa = u(W.a, ca, W.c, W.d), w.splice(ka, 1, aa[0], aa[1], aa[2], aa[3]));
                    G &&
                        (E.splice(0, d), E.splice(E.length - d, d))
                }
                return M
            },
            s = window._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                API: 2,
                global: !0,
                init: function (d, j, g) {
                    this._target = d;
                    j instanceof Array && (j = {
                        values: j
                    });
                    this._func = {};
                    this._round = {};
                    this._props = [];
                    this._timeRes = null == j.timeResolution ? 6 : parseInt(j.timeResolution, 10);
                    var i, e, a, l, m, n = j.values || [],
                        q = {};
                    a = n[0];
                    this._autoRotate = (g = j.autoRotate || g.vars.orientToBezier) ? g instanceof Array ? g : [
                        ["x", "y", "rotation", !0 === g ? 0 : Number(g) || 0]
                    ] : null;
                    for (i in a) this._props.push(i);
                    for (a = this._props.length; - 1 < --a;) i = this._props[a], this._overwriteProps.push(i), e = this._func[i] = "function" == typeof d[i], q[i] = e ? d[i.indexOf("set") || "function" != typeof d["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(d[i]), m || q[i] !== n[0][i] && (m = q);
                    if ("cubic" !== j.type && "quadratic" !== j.type && "soft" !== j.type) q = w(n, isNaN(j.curviness) ? 1 : j.curviness, !1, "thruBasic" === j.type, j.correlate, m);
                    else {
                        e = n;
                        var n = (n = j.type) || "soft",
                            u, s, M, V, A, S, N, T, j = {};
                        m = "cubic" === n ? 3 : 2;
                        var F = "soft" === n,
                            W = [];
                        if (F && q && (e = [q].concat(e)),
                            null == e || m + 1 > e.length) throw "invalid Bezier data";
                        for (S in e[0]) W.push(S);
                        for (g = W.length; - 1 < --g;) {
                            for (S = W[g], j[S] = n = [], N = 0, A = e.length, a = 0; A > a; a++) u = null == q ? e[a][S] : "string" == typeof (T = e[a][S]) && "=" === T.charAt(1) ? q[S] + Number(T.charAt(0) + T.substr(2)) : Number(T), F && 1 < a && A - 1 > a && (n[N++] = (u + n[N - 2]) / 2), n[N++] = u;
                            for (A = N - m + 1, N = 0, a = 0; A > a; a += m) u = n[a], s = n[a + 1], M = n[a + 2], V = 2 === m ? 0 : n[a + 3], n[N++] = T = 3 === m ? new z(u, s, M, V) : new z(u, (2 * s + u) / 3, (2 * s + M) / 3, M);
                            n.length = N
                        }
                        q = j
                    } if (this._beziers = q, this._segCount = this._beziers[i].length,
                        this._timeRes) {
                        var j = this._beziers,
                            q = this._timeRes,
                            q = q >> 0 || 6,
                            U;
                        u = [];
                        s = [];
                        V = M = 0;
                        S = q - 1;
                        T = [];
                        e = [];
                        for (U in j) {
                            m = j[U];
                            for (var n = u, g = q, R = W = F = N = A = a = void 0, Y = void 0, da = void 0, aa = void 0, Z = void 0, fa = void 0, ma = 1 / g, ha = m.length; - 1 < --ha;)
                                for (Z = m[ha], N = Z.a, F = Z.d - N, W = Z.c - N, R = Z.b - N, a = A = 0, da = 1; g >= da; da++) Y = ma * da, aa = 1 - Y, a = A - (A = (Y * Y * F + 3 * aa * (Y * W + aa * R)) * Y), fa = ha * g + da - 1, n[fa] = (n[fa] || 0) + a * a
                        }
                        for (j = u.length, U = 0; j > U; U++) M += Math.sqrt(u[U]), l = U % q, e[l] = M, l === S && (V += M, l = U / q >> 0, T[l] = e, s[l] = V, M = 0, e = []);
                        this._length = V;
                        this._lengths =
                            s;
                        this._segments = T;
                        this._l1 = this._li = this._s1 = this._si = 0;
                        this._l2 = this._lengths[0];
                        this._curSeg = this._segments[0];
                        this._s2 = this._curSeg[0];
                        this._prec = 1 / this._curSeg.length
                    }
                    if (g = this._autoRotate)
                        for (g[0] instanceof Array || (this._autoRotate = g = [g]), a = g.length; - 1 < --a;)
                            for (l = 0; 3 > l; l++) i = g[a][l], this._func[i] = "function" == typeof d[i] ? d[i.indexOf("set") || "function" != typeof d["get" + i.substr(3)] ? i : "get" + i.substr(3)] : !1;
                    return !0
                },
                set: function (l) {
                    var j, g, i, e, a, m, n;
                    n = this._segCount;
                    var q = this._func,
                        u = this._target;
                    if (this._timeRes) {
                        if (j = this._lengths, g = this._curSeg, l *= this._length, i = this._li, l > this._l2 && n - 1 > i) {
                            for (n -= 1; n > i && l >= (this._l2 = j[++i]););
                            this._l1 = j[i - 1];
                            this._li = i;
                            this._curSeg = g = this._segments[i];
                            this._s2 = g[this._s1 = this._si = 0]
                        } else if (this._l1 > l && 0 < i) {
                            for (; 0 < i && (this._l1 = j[--i]) >= l;);
                            0 === i && this._l1 > l ? this._l1 = 0 : i++;
                            this._l2 = j[i];
                            this._li = i;
                            this._curSeg = g = this._segments[i];
                            this._s1 = g[(this._si = g.length - 1) - 1] || 0;
                            this._s2 = g[this._si]
                        }
                        if (j = i, l -= this._l1, i = this._si, l > this._s2 && g.length - 1 > i) {
                            for (n = g.length -
                                1; n > i && l >= (this._s2 = g[++i]););
                            this._s1 = g[i - 1];
                            this._si = i
                        } else if (this._s1 > l && 0 < i) {
                            for (; 0 < i && (this._s1 = g[--i]) >= l;);
                            0 === i && this._s1 > l ? this._s1 = 0 : i++;
                            this._s2 = g[i];
                            this._si = i
                        }
                        l = (i + (l - this._s1) / (this._s2 - this._s1)) * this._prec
                    } else j = 0 > l ? 0 : 1 <= l ? n - 1 : n * l >> 0, l = (l - j * (1 / n)) * n;
                    for (g = 1 - l, i = this._props.length; - 1 < --i;) e = this._props[i], a = this._beziers[e][j], m = (l * l * a.da + 3 * g * (l * a.ca + g * a.ba)) * l + a.a, this._round[e] && (m = m + (0 < m ? 0.5 : -0.5) >> 0), q[e] ? u[e](m) : u[e] = m;
                    if (this._autoRotate) {
                        var s, z, w, A, ea, S, N;
                        g = this._autoRotate;
                        for (i = g.length; - 1 < --i;) e = g[i][2], S = g[i][3] || 0, N = !0 === g[i][4] ? 1 : d, a = this._beziers[g[i][0]], s = this._beziers[g[i][1]], a && s && (a = a[j], s = s[j], z = a.a + (a.b - a.a) * l, A = a.b + (a.c - a.b) * l, z += (A - z) * l, A += (a.c + (a.d - a.c) * l - A) * l, w = s.a + (s.b - s.a) * l, ea = s.b + (s.c - s.b) * l, w += (ea - w) * l, ea += (s.c + (s.d - s.c) * l - ea) * l, m = Math.atan2(ea - w, A - z) * N + S, q[e] ? u[e](m) : u[e] = m)
                    }
                }
            }),
            A = s.prototype;
        s.bezierThrough = w;
        s.cubicToQuadratic = u;
        s._autoCSS = !0;
        s.quadraticToCubic = function (d, j, g) {
            return new z(d, (2 * j + d) / 3, (2 * j + g) / 3, g)
        };
        s._cssRegister = function () {
            var d =
                window._gsDefine.globals.CSSPlugin;
            if (d) {
                var d = d._internals,
                    j = d._parseToProxy,
                    g = d._setPluginRatio,
                    i = d.CSSPropTween;
                d._registerComplexSpecialProp("bezier", {
                    parser: function (e, a, d, l, m, n) {
                        a instanceof Array && (a = {
                            values: a
                        });
                        n = new s;
                        var q, u, z = a.values,
                            w = z.length - 1,
                            v = [],
                            A = {};
                        if (0 > w) return m;
                        for (d = 0; w >= d; d++) u = j(e, z[d], l, m, n, w !== d), v[d] = u.end;
                        for (q in a) A[q] = a[q];
                        return A.values = v, m = new i(e, "bezier", 0, 0, u.pt, 2), m.data = u, m.plugin = n, m.setRatio = g, 0 === A.autoRotate && (A.autoRotate = !0), !A.autoRotate || A.autoRotate instanceof
                        Array || (d = !0 === A.autoRotate ? 0 : Number(A.autoRotate), A.autoRotate = null != u.end.left ? [
                            ["left", "top", "rotation", d, !1]
                        ] : null != u.end.x ? [
                            ["x", "y", "rotation", d, !1]
                        ] : !1), A.autoRotate && (l._transform || l._enableTransforms(!1), u.autoRotate = l._target._gsTransform), n._onInitTween(u.proxy, A, l._tween), m
                    }
                })
            }
        };
        A._roundProps = function (d, j) {
            for (var g = this._overwriteProps, i = g.length; - 1 < --i;)(d[g[i]] || d.bezier || d.bezierThrough) && (this._round[g[i]] = j)
        };
        A._kill = function (d) {
            var j, g, i = this._props;
            for (j in this._beziers)
                if (j in
                    d)
                    for (delete this._beziers[j], delete this._func[j], g = i.length; - 1 < --g;) i[g] === j && i.splice(g, 1);
            return this._super._kill.call(this, d)
        }
    })();
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (d, n) {
        var m, q, l, z, u = function () {
                d.call(this, "css");
                this._overwriteProps.length = 0;
                this.setRatio = u.prototype.setRatio
            },
            w = {},
            s = u.prototype = new d("css");
        s.constructor = u;
        u.version = "1.11.5";
        u.API = 2;
        u.defaultTransformPerspective = 0;
        s = "px";
        u.suffixMap = {
            top: s,
            right: s,
            bottom: s,
            left: s,
            width: s,
            height: s,
            fontSize: s,
            padding: s,
            margin: s,
            perspective: s,
            lineHeight: ""
        };
        var A, v, j, g, i, e, a = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            O = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            D = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            E = /[^\d\-\.]/g,
            ia = /(?:\d|\-|\+|=|#|\.)*/g,
            G = /opacity *= *([^)]*)/,
            Q = /opacity:([^;]*)/,
            M = /alpha\(opacity *=.+?\)/i,
            V = /^(rgb|hsl)/,
            ea = /([A-Z])/g,
            S = /-([a-z])/gi,
            N = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            T = function (a, c) {
                return c.toUpperCase()
            },
            F = /(?:Left|Right|Width)/i,
            W = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            U = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            R = /,(?=[^\)]*(?:\(|$))/gi,
            Y = Math.PI / 180,
            da = 180 / Math.PI,
            aa = {},
            Z = document,
            fa = Z.createElement("div"),
            ma = Z.createElement("img"),
            ha = u._internals = {
                _specialProps: w
            },
            ka = navigator.userAgent,
            ca = function () {
                var a, c = ka.indexOf("Android"),
                    h = Z.createElement("div");
                return j = -1 !== ka.indexOf("Safari") && -1 === ka.indexOf("Chrome") && (-1 === c || 3 < Number(ka.substr(c + 8, 1))), i = j && 6 > Number(ka.substr(ka.indexOf("Version/") + 8, 1)), g = -1 !== ka.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(ka) &&
                    (e = parseFloat(RegExp.$1)), h.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", a = h.getElementsByTagName("a")[0], a ? /^0.55/.test(a.style.opacity) : !1
            }(),
            h = function (a) {
                return G.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            x = "",
            K = "",
            I = function (a, c) {
                var c = c || fa,
                    h, d, k = c.style;
                if (void 0 !== k[a]) return a;
                for (a = a.charAt(0).toUpperCase() + a.substr(1), h = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; - 1 < --d && void 0 === k[h[d] + a];);
                return 0 <= d ? (K = 3 === d ? "ms" : h[d],
                    x = "-" + K.toLowerCase() + "-", K + a) : null
            },
            C = Z.defaultView ? Z.defaultView.getComputedStyle : function () {},
            H = u.getStyle = function (a, c, d, e, k) {
                var i;
                return ca || "opacity" !== c ? (!e && a.style[c] ? i = a.style[c] : (d = d || C(a, null)) ? (a = d.getPropertyValue(c.replace(ea, "-$1").toLowerCase()), i = a || d.length ? a : d[c]) : a.currentStyle && (i = a.currentStyle[c]), null == k || i && "none" !== i && "auto" !== i && "auto auto" !== i ? i : k) : h(a)
            },
            L = function (a, c, h, d, k) {
                if ("px" === d || !d) return h;
                if ("auto" === d || !h) return 0;
                var e, i = F.test(c),
                    g = a,
                    j = fa.style,
                    l = 0 > h;
                return l &&
                    (h = -h), "%" === d && -1 !== c.indexOf("border") ? e = h / 100 * (i ? a.clientWidth : a.clientHeight) : (j.cssText = "border:0 solid red;position:" + H(a, "position") + ";line-height:0;", "%" !== d && g.appendChild ? j[i ? "borderLeftWidth" : "borderTopWidth"] = h + d : (g = a.parentNode || Z.body, j[i ? "width" : "height"] = h + d), g.appendChild(fa), e = parseFloat(fa[i ? "offsetWidth" : "offsetHeight"]), g.removeChild(fa), 0 !== e || k || (e = L(a, c, h, d, !0))), l ? -e : e
            },
            c = function (a, c, h) {
                if ("absolute" !== H(a, "position", h)) return 0;
                var d = "left" === c ? "Left" : "Top",
                    h = H(a, "margin" +
                        d, h);
                return a["offset" + d] - (L(a, c, parseFloat(h), h.replace(ia, "")) || 0)
            },
            Da = function (a, c) {
                var d, e, k = {};
                if (c = c || C(a, null))
                    if (d = c.length)
                        for (; - 1 < --d;) k[c[d].replace(S, T)] = c.getPropertyValue(c[d]);
                    else
                        for (d in c) k[d] = c[d];
                else if (c = a.currentStyle || a.style)
                    for (d in c) "string" == typeof d && void 0 === k[d] && (k[d.replace(S, T)] = c[d]);
                return ca || (k.opacity = h(a)), e = Ia(a, c, !1), k.rotation = e.rotation, k.skewX = e.skewX, k.scaleX = e.scaleX, k.scaleY = e.scaleY, k.x = e.x, k.y = e.y, xa && (k.z = e.z, k.rotationX = e.rotationX, k.rotationY =
                    e.rotationY, k.scaleZ = e.scaleZ), k.filters && delete k.filters, k
            },
            wa = function (a, h, d, e, k) {
                var i, g, j, l = {},
                    m = a.style;
                for (g in d) "cssText" !== g && "length" !== g && isNaN(g) && (h[g] !== (i = d[g]) || k && k[g]) && -1 === g.indexOf("Origin") && ("number" == typeof i || "string" == typeof i) && (l[g] = "auto" !== i || "left" !== g && "top" !== g ? "" !== i && "auto" !== i && "none" !== i || "string" != typeof h[g] || "" === h[g].replace(E, "") ? i : 0 : c(a, g), void 0 !== m[g] && (j = new ta(m, g, m[g], j)));
                if (e)
                    for (g in e) "className" !== g && (l[g] = e[g]);
                return {
                    difs: l,
                    firstMPT: j
                }
            },
            ib = {
                width: ["Left",
                    "Right"
                ],
                height: ["Top", "Bottom"]
            },
            Fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            Oa = function (a, c) {
                (null == a || "" === a || "auto" === a || "auto auto" === a) && (a = "0 0");
                var h = a.split(" "),
                    d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : h[0],
                    k = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : h[1];
                return null == k ? k = "0" : "center" === k && (k = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), c && (c.oxp = -1 !== d.indexOf("%"), c.oyp = -1 !== k.indexOf("%"), c.oxr = "=" ===
                    d.charAt(1), c.oyr = "=" === k.charAt(1), c.ox = parseFloat(d.replace(E, "")), c.oy = parseFloat(k.replace(E, ""))), d + " " + k + (2 < h.length ? " " + h[2] : "")
            },
            Sa = function (a, c) {
                return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(c)
            },
            Ca = function (a, c) {
                return null == a ? c : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + c : parseFloat(a)
            },
            za = function (a, c, h, d) {
                var k, e, i;
                return null == a ? i = c : "number" == typeof a ? i = a : (k = a.split("_"),
                    e = Number(k[0].replace(E, "")) * (-1 === a.indexOf("rad") ? 1 : da) - ("=" === a.charAt(1) ? 0 : c), k.length && (d && (d[h] = c + e), -1 !== a.indexOf("short") && (e %= 360, e !== e % 180 && (e = 0 > e ? e + 360 : e - 360)), -1 !== a.indexOf("_cw") && 0 > e ? e = (e + 3599999999640) % 360 - 360 * (0 | e / 360) : -1 !== a.indexOf("ccw") && 0 < e && (e = (e - 3599999999640) % 360 - 360 * (0 | e / 360))), i = c + e), 1.0E-6 > i && -1.0E-6 < i && (i = 0), i
            },
            Ga = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255,
                    0, 255
                ],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            Ta = function (a, c, h) {
                return a = 0 > a ? a + 1 : 1 < a ? a - 1 : a, 0 | 255 * (1 > 6 * a ? c + 6 * (h - c) * a : 0.5 > a ? h : 2 > 3 * a ? c + 6 * (h - c) * (2 / 3 - a) : c) + 0.5
            },
            Ua = function (c) {
                var h, d, e, k, i, g;
                return c && "" !== c ? "number" == typeof c ? [c >> 16, 255 & c >> 8, 255 & c] : ("," === c.charAt(c.length - 1) && (c = c.substr(0, c.length - 1)), Ga[c] ? Ga[c] : "#" === c.charAt(0) ? (4 === c.length && (h =
                    c.charAt(1), d = c.charAt(2), e = c.charAt(3), c = "#" + h + h + d + d + e + e), c = parseInt(c.substr(1), 16), [c >> 16, 255 & c >> 8, 255 & c]) : "hsl" === c.substr(0, 3) ? (c = c.match(a), k = Number(c[0]) % 360 / 360, i = Number(c[1]) / 100, g = Number(c[2]) / 100, d = 0.5 >= g ? g * (i + 1) : g + i - g * i, h = 2 * g - d, 3 < c.length && (c[3] = Number(c[3])), c[0] = Ta(k + 1 / 3, h, d), c[1] = Ta(k, h, d), c[2] = Ta(k - 1 / 3, h, d), c) : (c = c.match(a) || Ga.transparent, c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), 3 < c.length && (c[3] = Number(c[3])), c)) : Ga.black
            },
            pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (s in Ga) pa += "|" + s + "\\b";
        var pa = RegExp(pa + ")", "gi"),
            Qa = function (c, h, d, e) {
                if (null == c) return function (a) {
                    return a
                };
                var k, i = h ? (c.match(pa) || [""])[0] : "",
                    g = c.split(i).join("").match(D) || [],
                    j = c.substr(0, c.indexOf(g[0])),
                    l = ")" === c.charAt(c.length - 1) ? ")" : "",
                    m = -1 !== c.indexOf(" ") ? " " : ",",
                    n = g.length,
                    x = 0 < n ? g[0].replace(a, "") : "";
                return n ? k = h ? function (a) {
                    var c, h, o;
                    if ("number" == typeof a) a += x;
                    else if (e && R.test(a)) {
                        for (a = a.replace(R, "|").split("|"), o = 0; a.length > o; o++) a[o] = k(a[o]);
                        return a.join(",")
                    }
                    if (c = (a.match(pa) || [i])[0], h = a.split(c).join("").match(D) || [], o = h.length, n > o--)
                        for (; n > ++o;) h[o] = d ? h[0 | (o - 1) / 2] : g[o];
                    return j + h.join(m) + m + c + l + (-1 !== a.indexOf("inset") ? " inset" : "")
                } : function (a) {
                    var c, h;
                    if ("number" == typeof a) a += x;
                    else if (e && R.test(a)) {
                        for (a = a.replace(R, "|").split("|"), h = 0; a.length > h; h++) a[h] = k(a[h]);
                        return a.join(",")
                    }
                    if (c = a.match(D) || [], h = c.length, n > h--)
                        for (; n > ++h;) c[h] = d ? c[0 | (h - 1) / 2] : g[h];
                    return j + c.join(m) + l
                } : function (a) {
                    return a
                }
            },
            Ha = function (a) {
                return a = a.split(","),
                    function (c, h, d, k, e, i, g) {
                        d = (h + "").split(" ");
                        for (g = {}, h = 0; 4 > h; h++) g[a[h]] = d[h] = d[h] || d[(h - 1) / 2 >> 0];
                        return k.parse(c, g, e, i)
                    }
            },
            ta = (ha._setPluginRatio = function (a) {
                this.plugin.setRatio(a);
                for (var c, h, d = this.data, k = d.proxy, e = d.firstMPT; e;) c = k[e.v], e.r ? c = 0 < c ? 0 | c + 0.5 : 0 | c - 0.5 : 1.0E-6 > c && -1.0E-6 < c && (c = 0), e.t[e.p] = c, e = e._next;
                if (d.autoRotate && (d.autoRotate.rotation = k.rotation), 1 === a)
                    for (e = d.firstMPT; e;) {
                        if (h = e.t, h.type) {
                            if (1 === h.type) {
                                for (c = h.xs0 + h.s + h.xs1, a = 1; h.l > a; a++) c += h["xn" + a] + h["xs" + (a + 1)];
                                h.e = c
                            }
                        } else h.e = h.s + h.xs0;
                        e = e._next
                    }
            }, function (a, c, h, d,
                k) {
                this.t = a;
                this.p = c;
                this.v = h;
                this.r = k;
                d && (d._prev = this, this._next = d)
            }),
            P = (ha._parseToProxy = function (a, c, h, d, k, e) {
                var i, g, j, l = d,
                    m = {},
                    n = {},
                    x = h._transform,
                    K = aa;
                for (h._transform = null, aa = c, d = a = h.parse(a, c, d, k), aa = K, e && (h._transform = x, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                    if (1 >= d.type && (i = d.p, n[i] = d.s + d.c, m[i] = d.s, e || (j = new ta(d, "s", i, j, d.r), d.c = 0), 1 === d.type))
                        for (h = d.l; 0 < --h;) g = "xn" + h, i = d.p + "_" + g, n[i] = d.data[g], m[i] = d[g], e || (j = new ta(d, g, i, j, d.rxp[g]));
                    d = d._next
                }
                return {
                    proxy: m,
                    end: n,
                    firstMPT: j,
                    pt: a
                }
            }, ha.CSSPropTween = function (a, c, h, d, k, e, i, g, j, l, n) {
                this.t = a;
                this.p = c;
                this.s = h;
                this.c = d;
                this.n = i || c;
                a instanceof P || z.push(this.n);
                this.r = g;
                this.type = e || 0;
                j && (this.pr = j, m = !0);
                this.b = void 0 === l ? h : l;
                this.e = void 0 === n ? h + d : n;
                k && (this._next = k, k._prev = this)
            }),
            la = u.parseComplex = function (c, h, d, e, k, i, g, j, l, m) {
                d = d || i || "";
                g = new P(c, h, 0, 0, g, m ? 2 : 1, null, !1, j, d, e);
                e += "";
                var n, x, K, I, q, u, s, c = d.split(", ").join(",").split(" "),
                    h = e.split(", ").join(",").split(" "),
                    j = c.length,
                    H = !1 !== A;
                for ((-1 !== e.indexOf(",") ||
                    -1 !== d.indexOf(",")) && (c = c.join(" ").replace(R, ", ").split(" "), h = h.join(" ").replace(R, ", ").split(" "), j = c.length), j !== h.length && (c = (i || "").split(" "), j = c.length), g.plugin = l, g.setRatio = m, d = 0; j > d; d++)
                    if (n = c[d], l = h[d], K = parseFloat(n), K || 0 === K) g.appendXtra("", K, Sa(l, K), l.replace(O, ""), H && -1 !== l.indexOf("px"), !0);
                    else if (k && ("#" === n.charAt(0) || Ga[n] || V.test(n))) s = "," === l.charAt(l.length - 1) ? ")," : ")", n = Ua(n), l = Ua(l), I = 6 < n.length + l.length, I && !ca && 0 === l[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent",
                    g.e = g.e.split(h[d]).join("transparent")) : (ca || (I = !1), g.appendXtra(I ? "rgba(" : "rgb(", n[0], l[0] - n[0], ",", !0, !0).appendXtra("", n[1], l[1] - n[1], ",", !0).appendXtra("", n[2], l[2] - n[2], I ? "," : s, !0), I && (n = 4 > n.length ? 1 : n[3], g.appendXtra("", n, (4 > l.length ? 1 : l[3]) - n, s, !1)));
                else if (i = n.match(a)) {
                    if (x = l.match(O), !x || x.length !== i.length) return g;
                    for (m = 0, l = 0; i.length > l; l++) u = i[l], q = n.indexOf(u, m), g.appendXtra(n.substr(m, q - m), Number(u), Sa(x[l], u), "", H && "px" === n.substr(q + u.length, 2), 0 === l), m = q + u.length;
                    g["xs" + g.l] += n.substr(m)
                } else g["xs" +
                    g.l] += g.l ? " " + n : n; if (-1 !== e.indexOf("=") && g.data) {
                    for (s = g.xs0 + g.data.s, d = 1; g.l > d; d++) s += g["xs" + d] + g.data["xn" + d];
                    g.e = s + g["xs" + d]
                }
                return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
            },
            ra = 9;
        for (s = P.prototype, s.l = s.pr = 0; 0 < --ra;) s["xn" + ra] = 0, s["xs" + ra] = "";
        s.xs0 = "";
        s._next = s._prev = s.xfirst = s.data = s.plugin = s.setRatio = s.rxp = null;
        s.appendXtra = function (a, c, h, d, k, e) {
            var g = this.l;
            return this["xs" + g] += e && g ? " " + a : a || "", h || 0 === g || this.plugin ? (this.l++, this.type = this.setRatio ? 2 : 1, this["xs" + this.l] = d || "", 0 < g ? (this.data["xn" +
                g] = c + h, this.rxp["xn" + g] = k, this["xn" + g] = c, this.plugin || (this.xfirst = new P(this, "xn" + g, c, h, this.xfirst || this, 0, this.n, k, this.pr), this.xfirst.xs0 = 0), this) : (this.data = {
                s: c + h
            }, this.rxp = {}, this.s = c, this.c = h, this.r = k, this)) : (this["xs" + g] += c + (d || ""), this)
        };
        var $a = function (a, c) {
                c = c || {};
                this.p = c.prefix ? I(a) || a : a;
                w[a] = w[this.p] = this;
                this.format = c.formatter || Qa(c.defaultValue, c.color, c.collapsible, c.multi);
                c.parser && (this.parse = c.parser);
                this.clrs = c.color;
                this.multi = c.multi;
                this.keyword = c.keyword;
                this.dflt = c.defaultValue;
                this.pr = c.priority || 0
            },
            ga = ha._registerComplexSpecialProp = function (a, c, h) {
                "object" != typeof c && (c = {
                    parser: h
                });
                var d = a.split(","),
                    k = c.defaultValue;
                for (h = h || [k], a = 0; d.length > a; a++) c.prefix = 0 === a && c.prefix, c.defaultValue = h[a] || k, new $a(d[a], c)
            },
            ha = function (a) {
                if (!w[a]) {
                    var c = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                    ga(a, {
                        parser: function (a, h, k, d, e, o, g) {
                            var i = (window.GreenSockGlobals || window).com.greensock.plugins[c];
                            i ? a = (i._cssRegister(), w[k].parse(a, h, k, d, e, o, g)) : (window.console && console.log("Error: " +
                                c + " js file not loaded."), a = e);
                            return a
                        }
                    })
                }
            };
        s = $a.prototype;
        s.parseComplex = function (a, c, h, d, k, e) {
            var g, i, l, j, m, n, x = this.keyword;
            if (this.multi && (R.test(h) || R.test(c) ? (i = c.replace(R, "|").split("|"), l = h.replace(R, "|").split("|")) : x && (i = [c], l = [h])), l) {
                for (j = l.length > i.length ? l.length : i.length, g = 0; j > g; g++) c = i[g] = i[g] || this.dflt, h = l[g] = l[g] || this.dflt, x && (m = c.indexOf(x), n = h.indexOf(x), m !== n && (h = -1 === n ? l : i, h[g] += " " + x));
                c = i.join(", ");
                h = l.join(", ")
            }
            return la(a, this.p, c, h, this.clrs, this.dflt, d, this.pr, k,
                e)
        };
        s.parse = function (a, c, h, d, k, e) {
            return this.parseComplex(a.style, this.format(H(a, this.p, l, !1, this.dflt)), this.format(c), k, e)
        };
        u.registerSpecialProp = function (a, c, h) {
            ga(a, {
                parser: function (a, k, d, e, o, g) {
                    o = new P(a, d, 0, 0, o, 2, d, !1, h);
                    return o.plugin = g, o.setRatio = c(a, k, e._tween, d), o
                },
                priority: h
            })
        };
        var ya = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
            qa = I("transform"),
            bb = x + "transform",
            Va = I("transformOrigin"),
            xa = null !== I("perspective"),
            Ia = function (a, c, h, d) {
                if (a._gsTransform &&
                    h && !d) return a._gsTransform;
                var k, e, g, i, l, j, m, n, x, K, I, q, s, C = h ? a._gsTransform || {
                        skewY: 0
                    } : {
                        skewY: 0
                    },
                    z = 0 > C.scaleX,
                    w = 179.99 * Y,
                    v = xa ? parseFloat(H(a, Va, c, !1, "0 0 0").split(" ")[2]) || C.zOrigin || 0 : 0;
                for (qa ? k = H(a, bb, c, !0) : a.currentStyle && (k = a.currentStyle.filter.match(W), k = k && 4 === k.length ? [k[0].substr(4), Number(k[2].substr(4)), Number(k[1].substr(4)), k[3].substr(4), C.x || 0, C.y || 0].join() : ""), e = (k || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], g = e.length; - 1 < --g;) i = Number(e[g]), e[g] = (l = i - (i |= 0)) ? (0 | 1E5 * l + (0 > l ? -0.5 :
                    0.5)) / 1E5 + i : i;
                if (16 === e.length) {
                    if (j = e[8], m = e[9], n = e[10], x = e[12], K = e[13], I = e[14], C.zOrigin && (I = -C.zOrigin, x = j * I - e[12], K = m * I - e[13], I = n * I + C.zOrigin - e[14]), !h || d || null == C.rotationX) {
                        var L, O, D, A, E, G, M, d = e[0];
                        q = e[1];
                        s = e[2];
                        z = e[3];
                        c = e[4];
                        k = e[5];
                        i = e[6];
                        l = e[7];
                        e = e[11];
                        var F = Math.atan2(i, n),
                            N = -w > F || F > w;
                        C.rotationX = F * da;
                        F && (A = Math.cos(-F), E = Math.sin(-F), L = c * A + j * E, O = k * A + m * E, D = i * A + n * E, j = c * -E + j * A, m = k * -E + m * A, n = i * -E + n * A, e = l * -E + e * A, c = L, k = O, i = D);
                        F = Math.atan2(j, d);
                        C.rotationY = F * da;
                        F && (G = -w > F || F > w, A = Math.cos(-F), E =
                            Math.sin(-F), L = d * A - j * E, O = q * A - m * E, D = s * A - n * E, m = q * E + m * A, n = s * E + n * A, e = z * E + e * A, d = L, q = O, s = D);
                        F = Math.atan2(q, k);
                        C.rotation = F * da;
                        F && (M = -w > F || F > w, A = Math.cos(-F), E = Math.sin(-F), d = d * A + c * E, O = q * A + k * E, k = q * -E + k * A, i = s * -E + i * A, q = O);
                        M && N ? C.rotation = C.rotationX = 0 : M && G ? C.rotation = C.rotationY = 0 : G && N && (C.rotationY = C.rotationX = 0);
                        C.scaleX = (0 | 1E5 * Math.sqrt(d * d + q * q) + 0.5) / 1E5;
                        C.scaleY = (0 | 1E5 * Math.sqrt(k * k + m * m) + 0.5) / 1E5;
                        C.scaleZ = (0 | 1E5 * Math.sqrt(i * i + n * n) + 0.5) / 1E5;
                        C.skewX = 0;
                        C.perspective = e ? 1 / (0 > e ? -e : e) : 0;
                        C.x = x;
                        C.y = K;
                        C.z = I
                    }
                } else if (!(xa &&
                    !d && e.length && C.x === e[4] && C.y === e[5] && (C.rotationX || C.rotationY) || void 0 !== C.x && "none" === H(a, "display", c))) w = (D = 6 <= e.length) ? e[0] : 1, L = e[1] || 0, O = e[2] || 0, D = D ? e[3] : 1, C.x = e[4] || 0, C.y = e[5] || 0, j = Math.sqrt(w * w + L * L), m = Math.sqrt(D * D + O * O), n = w || L ? Math.atan2(L, w) * da : C.rotation || 0, x = O || D ? Math.atan2(O, D) * da + n : C.skewX || 0, K = j - Math.abs(C.scaleX || 0), I = m - Math.abs(C.scaleY || 0), 90 < Math.abs(x) && 270 > Math.abs(x) && (z ? (j *= -1, x += 0 >= n ? 180 : -180, n += 0 >= n ? 180 : -180) : (m *= -1, x += 0 >= x ? 180 : -180)), q = (n - C.rotation) % 180, s = (x - C.skewX) % 180, (void 0 === C.skewX || 2.0E-5 < K || -2.0E-5 > K || 2.0E-5 < I || -2.0E-5 > I || -179.99 < q && 179.99 > q && 0 | 1E5 * q || -179.99 < s && 179.99 > s && 0 | 1E5 * s) && (C.scaleX = j, C.scaleY = m, C.rotation = n, C.skewX = x), xa && (C.rotationX = C.rotationY = C.z = 0, C.perspective = parseFloat(u.defaultTransformPerspective) || 0, C.scaleZ = 1);
                C.zOrigin = v;
                for (g in C) 2.0E-5 > C[g] && -2.0E-5 < C[g] && (C[g] = 0);
                return h && (a._gsTransform = C), C
            },
            cb = function (a) {
                var c, h, d = this.data,
                    k = -d.rotation * Y,
                    g = k + d.skewX * Y,
                    i = (0 | 1E5 * Math.cos(k) * d.scaleX) / 1E5,
                    k = (0 | 1E5 * Math.sin(k) * d.scaleX) / 1E5,
                    l = (0 | 1E5 * Math.sin(g) * -d.scaleY) / 1E5,
                    g = (0 | 1E5 * Math.cos(g) * d.scaleY) / 1E5,
                    j = this.t.style,
                    m = this.t.currentStyle;
                if (m) {
                    h = k;
                    k = -l;
                    l = -h;
                    c = m.filter;
                    j.filter = "";
                    var n, x, K = this.t.offsetWidth,
                        I = this.t.offsetHeight,
                        q = "absolute" !== m.position,
                        s = "progid:DXImageTransform.Microsoft.Matrix(M11=" + i + ", M12=" + k + ", M21=" + l + ", M22=" + g,
                        u = d.x,
                        C = d.y;
                    if (null != d.ox && (n = (d.oxp ? 0.01 * K * d.ox : d.ox) - K / 2, x = (d.oyp ? 0.01 * I * d.oy : d.oy) - I / 2, u += n - (n * i + x * k), C += x - (n * l + x * g)), q ? (n = K / 2, x = I / 2, s += ", Dx=" + (n - (n * i + x * k) + u) + ", Dy=" + (x - (n * l + x * g) + C) + ")") :
                        s += ", sizingMethod='auto expand')", j.filter = -1 !== c.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.replace(U, s) : s + " " + c, (0 === a || 1 === a) && 1 === i && 0 === k && 0 === l && 1 === g && (q && -1 === s.indexOf("Dx=0, Dy=0") || G.test(c) && 100 !== parseFloat(RegExp.$1) || -1 === c.indexOf(c.indexOf("Alpha")) && j.removeAttribute("filter")), !q) {
                        var H, z, w, a = 8 > e ? 1 : -1;
                        for (n = d.ieOffsetX || 0, x = d.ieOffsetY || 0, d.ieOffsetX = Math.round((K - ((0 > i ? -i : i) * K + (0 > k ? -k : k) * I)) / 2 + u), d.ieOffsetY = Math.round((I - ((0 > g ? -g : g) * I + (0 > l ? -l : l) * K)) / 2 + C), ra = 0; 4 > ra; ra++) z =
                            Fa[ra], H = m[z], h = -1 !== H.indexOf("px") ? parseFloat(H) : L(this.t, z, parseFloat(H), H.replace(ia, "")) || 0, w = h !== d[z] ? 2 > ra ? -d.ieOffsetX : -d.ieOffsetY : 2 > ra ? n - d.ieOffsetX : x - d.ieOffsetY, j[z] = (d[z] = Math.round(h - w * (0 === ra || 2 === ra ? 1 : a))) + "px"
                    }
                }
            },
            Pa = function () {
                var a, c, h, d, k, e, i, l, j, m, n, x, K, I, q, s, u, C, H, z, w, v, L = this.data,
                    O = this.t.style,
                    D = L.rotation * Y,
                    A = L.scaleX,
                    E = L.scaleY,
                    G = L.scaleZ,
                    F = L.perspective;
                g && (1.0E-4 > A && -1.0E-4 < A && (A = G = 2.0E-5), 1.0E-4 > E && -1.0E-4 < E && (E = G = 2.0E-5), !F || L.z || L.rotationX || L.rotationY || (F = 0));
                if (D ||
                    L.skewX) u = Math.cos(D), C = Math.sin(D), a = u, k = C, L.skewX && (D -= L.skewX * Y, u = Math.cos(D), C = Math.sin(D)), c = -C, e = u;
                else {
                    if (!L.rotationY && !L.rotationX && !(1 !== G || F)) return O[qa] = "translate3d(" + L.x + "px," + L.y + "px," + L.z + "px)" + (1 !== A || 1 !== E ? " scale(" + A + "," + E + ")" : ""), void 0;
                    a = e = 1;
                    c = k = 0
                }
                n = 1;
                h = d = i = l = j = m = x = K = I = 0;
                q = F ? -1 / F : 0;
                s = L.zOrigin;
                D = L.rotationY * Y;
                D && (u = Math.cos(D), C = Math.sin(D), j = n * -C, K = q * -C, h = a * C, i = k * C, n *= u, q *= u, a *= u, k *= u);
                D = L.rotationX * Y;
                D && (u = Math.cos(D), C = Math.sin(D), H = c * u + h * C, z = e * u + i * C, w = m * u + n * C, v = I * u + q * C, h =
                    c * -C + h * u, i = e * -C + i * u, n = m * -C + n * u, q = I * -C + q * u, c = H, e = z, m = w, I = v);
                1 !== G && (h *= G, i *= G, n *= G, q *= G);
                1 !== E && (c *= E, e *= E, m *= E, I *= E);
                1 !== A && (a *= A, k *= A, j *= A, K *= A);
                s && (x -= s, d = h * x, l = i * x, x = n * x + s);
                d = (H = (d += L.x) - (d |= 0)) ? (0 | 1E5 * H + (0 > H ? -0.5 : 0.5)) / 1E5 + d : d;
                l = (H = (l += L.y) - (l |= 0)) ? (0 | 1E5 * H + (0 > H ? -0.5 : 0.5)) / 1E5 + l : l;
                x = (H = (x += L.z) - (x |= 0)) ? (0 | 1E5 * H + (0 > H ? -0.5 : 0.5)) / 1E5 + x : x;
                O[qa] = "matrix3d(" + [(0 | 1E5 * a) / 1E5, (0 | 1E5 * k) / 1E5, (0 | 1E5 * j) / 1E5, (0 | 1E5 * K) / 1E5, (0 | 1E5 * c) / 1E5, (0 | 1E5 * e) / 1E5, (0 | 1E5 * m) / 1E5, (0 | 1E5 * I) / 1E5, (0 | 1E5 * h) / 1E5, (0 | 1E5 * i) / 1E5, (0 |
                    1E5 * n) / 1E5, (0 | 1E5 * q) / 1E5, d, l, x, F ? 1 + -x / F : 1].join() + ")"
            },
            db = function (a) {
                var c, h, d, k, e = this.data,
                    g = this.t.style;
                return e.rotationX || e.rotationY || e.z || e.force3D ? (this.setRatio = Pa, Pa.call(this, a), void 0) : (e.rotation || e.skewX ? (c = e.rotation * Y, h = c - e.skewX * Y, d = 1E5 * e.scaleX, k = 1E5 * e.scaleY, g[qa] = "matrix(" + (0 | Math.cos(c) * d) / 1E5 + "," + (0 | Math.sin(c) * d) / 1E5 + "," + (0 | Math.sin(h) * -k) / 1E5 + "," + (0 | Math.cos(h) * k) / 1E5 + "," + e.x + "," + e.y + ")") : g[qa] = "matrix(" + e.scaleX + ",0,0," + e.scaleY + "," + e.x + "," + e.y + ")", void 0)
            };
        ga("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function (a, c, h, d, k, e, g) {
                if (d._transform) return k;
                var i, j, m, n, x, I, K, c = d._transform = Ia(a, l, !0, g.parseTransform),
                    q = a.style,
                    u = ya.length,
                    C = {};
                if ("string" == typeof g.transform && qa) m = q.cssText, q[qa] = g.transform, q.display = "block", i = Ia(a, null, !1), q.cssText = m;
                else if ("object" == typeof g) {
                    if (i = {
                        scaleX: Ca(null != g.scaleX ? g.scaleX : g.scale, c.scaleX),
                        scaleY: Ca(null != g.scaleY ? g.scaleY : g.scale, c.scaleY),
                        scaleZ: Ca(g.scaleZ, c.scaleZ),
                        x: Ca(g.x, c.x),
                        y: Ca(g.y, c.y),
                        z: Ca(g.z, c.z),
                        perspective: Ca(g.transformPerspective,
                            c.perspective)
                    }, K = g.directionalRotation, null != K)
                        if ("object" == typeof K)
                            for (m in K) g[m] = K[m];
                        else g.rotation = K;
                    i.rotation = za("rotation" in g ? g.rotation : "shortRotation" in g ? g.shortRotation + "_short" : "rotationZ" in g ? g.rotationZ : c.rotation, c.rotation, "rotation", C);
                    xa && (i.rotationX = za("rotationX" in g ? g.rotationX : "shortRotationX" in g ? g.shortRotationX + "_short" : c.rotationX || 0, c.rotationX, "rotationX", C), i.rotationY = za("rotationY" in g ? g.rotationY : "shortRotationY" in g ? g.shortRotationY + "_short" : c.rotationY || 0, c.rotationY,
                        "rotationY", C));
                    i.skewX = null == g.skewX ? c.skewX : za(g.skewX, c.skewX);
                    i.skewY = null == g.skewY ? c.skewY : za(g.skewY, c.skewY);
                    (j = i.skewY - c.skewY) && (i.skewX += j, i.rotation += j)
                }
                for (xa && null != g.force3D && (c.force3D = g.force3D, I = !0), x = c.force3D || c.z || c.rotationX || c.rotationY || i.z || i.rotationX || i.rotationY || i.perspective, x || null == g.scale || (i.scaleZ = 1); - 1 < --u;) h = ya[u], n = i[h] - c[h], (1.0E-6 < n || -1.0E-6 > n || null != aa[h]) && (I = !0, k = new P(c, h, c[h], n, k), h in C && (k.e = C[h]), k.xs0 = 0, k.plugin = e, d._overwriteProps.push(k.n));
                return n =
                    g.transformOrigin, (n || xa && x && c.zOrigin) && (qa ? (I = !0, h = Va, n = (n || H(a, h, l, !1, "50% 50%")) + "", k = new P(q, h, 0, 0, k, -1, "transformOrigin"), k.b = q[h], k.plugin = e, xa ? (m = c.zOrigin, n = n.split(" "), c.zOrigin = (2 < n.length && (0 === m || "0px" !== n[2]) ? parseFloat(n[2]) : m) || 0, k.xs0 = k.e = q[h] = n[0] + " " + (n[1] || "50%") + " 0px", k = new P(c, "zOrigin", 0, 0, k, -1, k.n), k.b = m, k.xs0 = k.e = c.zOrigin) : k.xs0 = k.e = q[h] = n) : Oa(n + "", c)), I && (d._transformType = x || 3 === this._transformType ? 3 : 2), k
            },
            prefix: !0
        });
        ga("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        });
        ga("borderRadius", {
            defaultValue: "0px",
            parser: function (a, c, h, d, k) {
                var c = this.format(c),
                    e, g, i, j, m, n, x, K, C, u, s, z, w, D, v = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    O = a.style;
                for (d = parseFloat(a.offsetWidth), K = parseFloat(a.offsetHeight), c = c.split(" "), e = 0; v.length > e; e++) this.p.indexOf("border") && (v[e] = I(v[e])), j = i = H(a, v[e], l, !1, "0px"), -1 !== j.indexOf(" ") && (i = j.split(" "), j = i[0], i = i[1]), m = g = c[e], n = parseFloat(j),
                    u = j.substr((n + "").length), s = "=" === m.charAt(1), s ? (x = parseInt(m.charAt(0) + "1", 10), m = m.substr(2), x *= parseFloat(m), C = m.substr((x + "").length - (0 > x ? 1 : 0)) || "") : (x = parseFloat(m), C = m.substr((x + "").length)), "" === C && (C = q[h] || u), C !== u && (z = L(a, "borderLeft", n, u), w = L(a, "borderTop", n, u), "%" === C ? (j = 100 * (z / d) + "%", i = 100 * (w / K) + "%") : "em" === C ? (D = L(a, "borderLeft", 1, "em"), j = z / D + "em", i = w / D + "em") : (j = z + "px", i = w + "px"), s && (m = parseFloat(j) + x + C, g = parseFloat(i) + x + C)), k = la(O, v[e], j + " " + i, m + " " + g, !1, "0px", k);
                return k
            },
            prefix: !0,
            formatter: Qa("0px 0px 0px 0px", !1, !0)
        });
        ga("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (a, c, h, d, k, g) {
                var i, j, m, h = l || C(a, null),
                    h = this.format((h ? e ? h.getPropertyValue("background-position-x") + " " + h.getPropertyValue("background-position-y") : h.getPropertyValue("background-position") : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                    n = this.format(c);
                if (-1 !== h.indexOf("%") != (-1 !== n.indexOf("%")) && (i = H(a, "backgroundImage").replace(N, ""), i && "none" !== i)) {
                    for (c = h.split(" "), d = n.split(" "), ma.setAttribute("src",
                        i), i = 2; - 1 < --i;) h = c[i], j = -1 !== h.indexOf("%"), j !== (-1 !== d[i].indexOf("%")) && (m = 0 === i ? a.offsetWidth - ma.width : a.offsetHeight - ma.height, c[i] = j ? parseFloat(h) / 100 * m + "px" : 100 * (parseFloat(h) / m) + "%");
                    h = c.join(" ")
                }
                return this.parseComplex(a.style, h, n, k, g)
            },
            formatter: Oa
        });
        ga("backgroundSize", {
            defaultValue: "0 0",
            formatter: Oa
        });
        ga("perspective", {
            defaultValue: "0px",
            prefix: !0
        });
        ga("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        });
        ga("transformStyle", {
            prefix: !0
        });
        ga("backfaceVisibility", {
            prefix: !0
        });
        ga("userSelect", {
            prefix: !0
        });
        ga("margin", {
            parser: Ha("marginTop,marginRight,marginBottom,marginLeft")
        });
        ga("padding", {
            parser: Ha("paddingTop,paddingRight,paddingBottom,paddingLeft")
        });
        ga("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (a, c, h, d, k, g) {
                var i, j, m;
                return 9 > e ? (j = a.currentStyle, m = 8 > e ? " " : ",", i = "rect(" + j.clipTop + m + j.clipRight + m + j.clipBottom + m + j.clipLeft + ")", c = this.format(c).split(",").join(m)) : (i = this.format(H(a, this.p, l, !1, this.dflt)), c = this.format(c)), this.parseComplex(a.style, i, c, k, g)
            }
        });
        ga("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        });
        ga("autoRound,strictUnits", {
            parser: function (a, c, h, d, k) {
                return k
            }
        });
        ga("border", {
            defaultValue: "0px solid #000",
            parser: function (a, c, h, d, k, e) {
                return this.parseComplex(a.style, this.format(H(a, "borderTopWidth", l, !1, "0px") + " " + H(a, "borderTopStyle", l, !1, "solid") + " " + H(a, "borderTopColor", l, !1, "#000")), this.format(c), k, e)
            },
            color: !0,
            formatter: function (a) {
                var c = a.split(" ");
                return c[0] + " " + (c[1] || "solid") + " " + (a.match(pa) || ["#000"])[0]
            }
        });
        ga("borderWidth", {
            parser: Ha("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        });
        ga("float,cssFloat,styleFloat", {
            parser: function (a, c, h, d, k) {
                a = a.style;
                d = "cssFloat" in a ? "cssFloat" : "styleFloat";
                return new P(a, d, 0, 0, k, -1, h, !1, 0, a[d], c)
            }
        });
        var jb = function (a) {
            var c, h = this.t,
                d = h.filter || H(this.data, "filter"),
                a = 0 | this.s + this.c * a;
            100 === a && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (h.removeAttribute("filter"), c = !H(this.data, "filter")) : (h.filter = d.replace(M, ""), c = !0));
            c || (this.xn1 && (h.filter = d = d || "alpha(opacity=" + a + ")"), -1 === d.indexOf("opacity") ? 0 === a && this.xn1 || (h.filter = d + " alpha(opacity=" + a + ")") : h.filter = d.replace(G, "opacity=" + a))
        };
        ga("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function (a, c, h, d, k, e) {
                var g = parseFloat(H(a, "opacity", l, !1, "1")),
                    i = a.style,
                    j = "autoAlpha" === h;
                return "string" == typeof c && "=" === c.charAt(1) && (c = ("-" === c.charAt(0) ? -1 : 1) * parseFloat(c.substr(2)) + g), j && 1 === g && "hidden" === H(a, "visibility", l) && 0 !== c && (g = 0), ca ? k = new P(i, "opacity", g, c - g, k) :
                    (k = new P(i, "opacity", 100 * g, 100 * (c - g), k), k.xn1 = j ? 1 : 0, i.zoom = 1, k.type = 2, k.b = "alpha(opacity=" + k.s + ")", k.e = "alpha(opacity=" + (k.s + k.c) + ")", k.data = a, k.plugin = e, k.setRatio = jb), j && (k = new P(i, "visibility", 0, 0, k, -1, null, !1, 0, 0 !== g ? "inherit" : "hidden", 0 === c ? "hidden" : "inherit"), k.xs0 = "inherit", d._overwriteProps.push(k.n), d._overwriteProps.push(h)), k
            }
        });
        var Wa = function (a, c) {
                c && (a.removeProperty ? a.removeProperty(c.replace(ea, "-$1").toLowerCase()) : a.removeAttribute(c))
            },
            kb = function (a) {
                if (this.t._gsClassPT = this, 1 ===
                    a || 0 === a) {
                    this.t.className = 0 === a ? this.b : this.e;
                    for (var c = this.data, h = this.t.style; c;) c.v ? h[c.p] = c.v : Wa(h, c.p), c = c._next;
                    1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.className !== this.e && (this.t.className = this.e)
            };
        ga("className", {
            parser: function (a, c, h, d, k, e, g) {
                var i, j, n, x, K = a.className,
                    q = a.style.cssText;
                if (k = d._classNamePT = new P(a, h, 0, 0, k, 2), k.setRatio = kb, k.pr = -11, m = !0, k.b = K, h = Da(a, l), j = a._gsClassPT) {
                    for (n = {}, x = j.data; x;) n[x.p] = 1, x = x._next;
                    j.setRatio(1)
                }
                return a._gsClassPT =
                    k, k.e = "=" !== c.charAt(1) ? c : K.replace(RegExp("\\s*\\b" + c.substr(2) + "\\b"), "") + ("+" === c.charAt(0) ? " " + c.substr(2) : ""), d._tween._duration && (a.className = k.e, i = wa(a, h, Da(a), g, n), a.className = K, k.data = i.firstMPT, a.style.cssText = q, k = k.xfirst = d.parse(a, i.difs, k, e)), k
            }
        });
        var eb = function (a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var c, h, d, k = this.t.style,
                    e = w.transform.parse;
                if ("all" === this.e) k.cssText = "", d = !0;
                else
                    for (c = this.e.split(","), a = c.length; - 1 <
                        --a;) h = c[a], w[h] && (w[h].parse === e ? d = !0 : h = "transformOrigin" === h ? Va : w[h].p), Wa(k, h);
                d && (Wa(k, qa), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (ga("clearProps", {
            parser: function (a, c, h, d, k) {
                return k = new P(a, h, 0, 0, k, 2), k.setRatio = eb, k.e = c, k.pr = -10, k.data = d._tween, m = !0, k
            }
        }), s = "bezier,throwProps,physicsProps,physics2D".split(","), ra = s.length; ra--;) ha(s[ra]);
        s = u.prototype;
        s._firstPT = null;
        s._onInitTween = function (a, c, h) {
            if (!a.nodeType) return !1;
            this._target = a;
            this._tween = h;
            this._vars = c;
            A = c.autoRound;
            m = !1;
            q = c.suffixMap || u.suffixMap;
            l = C(a, "");
            z = this._overwriteProps;
            var d, k, e, g, n, x, K = a.style;
            if (v && "" === K.zIndex && (d = H(a, "zIndex", l), ("auto" === d || "" === d) && (K.zIndex = 0)), "string" == typeof c && (k = K.cssText, d = Da(a, l), K.cssText = k + ";" + c, d = wa(a, d, Da(a)).difs, !ca && Q.test(c) && (d.opacity = parseFloat(RegExp.$1)), c = d, K.cssText = k), this._firstPT = h = this.parse(a, c, null), this._transformType) {
                for (x = 3 === this._transformType, qa ? j && (v = !0, "" === K.zIndex && (g = H(a, "zIndex", l), ("auto" === g || "" === g) && (K.zIndex = 0)), i && (K.WebkitBackfaceVisibility =
                    this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : K.zoom = 1, c = h; c && c._next;) c = c._next;
                n = new P(a, "transform", 0, 0, null, 2);
                this._linkCSSP(n, null, c);
                n.setRatio = x && xa ? Pa : qa ? db : cb;
                n.data = this._transform || Ia(a, l, !0);
                z.pop()
            }
            if (m) {
                for (; h;) {
                    for (a = h._next, c = k; c && c.pr > h.pr;) c = c._next;
                    (h._prev = c ? c._prev : e) ? h._prev._next = h: k = h;
                    (h._next = c) ? c._prev = h: e = h;
                    h = a
                }
                this._firstPT = k
            }
            return !0
        };
        s.parse = function (a, h, d, e) {
            var k, g, i, j, m, n, x, K, I, u = a.style;
            for (k in h) {
                m = h[k];
                g = w[k];
                if (g) d = g.parse(a, m, k, this, d, e, h);
                else if (g =
                    H(a, k, l) + "", K = "string" == typeof m, "color" === k || "fill" === k || "stroke" === k || -1 !== k.indexOf("Color") || K && V.test(m)) K || (m = Ua(m), m = (3 < m.length ? "rgba(" : "rgb(") + m.join(",") + ")"), d = la(u, k, g, m, !0, "transparent", d, 0, e);
                else if (!K || -1 === m.indexOf(" ") && -1 === m.indexOf(",")) {
                    i = parseFloat(g);
                    n = i || 0 === i ? g.substr((i + "").length) : "";
                    if ("" === g || "auto" === g)
                        if ("width" === k || "height" === k) {
                            i = a;
                            var s = k;
                            n = l;
                            var z = parseFloat("width" === s ? i.offsetWidth : i.offsetHeight),
                                s = ib[s],
                                D = s.length;
                            for (n = n || C(i, null); - 1 < --D;) z -= parseFloat(H(i,
                                "padding" + s[D], n, !0)) || 0, z -= parseFloat(H(i, "border" + s[D] + "Width", n, !0)) || 0;
                            i = z;
                            n = "px"
                        } else "left" === k || "top" === k ? (i = c(a, k, l), n = "px") : (i = "opacity" !== k ? 0 : 1, n = "");
                    I = K && "=" === m.charAt(1);
                    I ? (j = parseInt(m.charAt(0) + "1", 10), m = m.substr(2), j *= parseFloat(m), x = m.replace(ia, "")) : (j = parseFloat(m), x = K ? m.substr((j + "").length) || "" : "");
                    "" === x && (x = k in q ? q[k] : n);
                    m = j || 0 === j ? (I ? j + i : j) + x : h[k];
                    n !== x && "" !== x && (j || 0 === j) && (i || 0 === i) && (i = L(a, k, i, n), "%" === x ? (i /= L(a, k, 100, "%") / 100, !0 !== h.strictUnits && (g = i + "%")) : "em" === x ? i /=
                        L(a, k, 1, "em") : (j = L(a, k, j, x), x = "px"), I && (j || 0 === j) && (m = j + i + x));
                    I && (j += i);
                    !i && 0 !== i || !j && 0 !== j ? void 0 !== u[k] && (m || "NaN" != m + "" && null != m) ? (d = new P(u, k, j || i || 0, 0, d, -1, k, !1, 0, g, m), d.xs0 = "none" !== m || "display" !== k && -1 === k.indexOf("Style") ? m : g) : window.console && console.log("invalid " + k + " tween value: " + h[k]) : (d = new P(u, k, i, j - i, d, 0, k, !1 !== A && ("px" === x || "zIndex" === k), 0, g, m), d.xs0 = x)
                } else d = la(u, k, g, m, !0, null, d, 0, e);
                e && d && !d.plugin && (d.plugin = e)
            }
            return d
        };
        s.setRatio = function (a) {
            var c, h, d, e = this._firstPT;
            if (1 !==
                a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1.0E-6 === this._tween._rawPrevTime)
                    for (; e;) {
                        if (c = e.c * a + e.s, e.r ? c = 0 < c ? 0 | c + 0.5 : 0 | c - 0.5 : 1.0E-6 > c && -1.0E-6 < c && (c = 0), e.type)
                            if (1 === e.type)
                                if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + c + e.xs1 + e.xn1 + e.xs2;
                                else if (3 === d) e.t[e.p] = e.xs0 + c + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                        else if (4 === d) e.t[e.p] = e.xs0 + c + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                        else if (5 === d) e.t[e.p] = e.xs0 + c + e.xs1 + e.xn1 + e.xs2 +
                            e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                        else {
                            for (h = e.xs0 + c + e.xs1, d = 1; e.l > d; d++) h += e["xn" + d] + e["xs" + (d + 1)];
                            e.t[e.p] = h
                        } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                        else e.t[e.p] = c + e.xs0;
                        e = e._next
                    } else
                        for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                else
                    for (; e;) 2 !== e.type ? e.t[e.p] = e.e : e.setRatio(a), e = e._next
        };
        s._enableTransforms = function (a) {
            this._transformType = a || 3 === this._transformType ? 3 : 2;
            this._transform = this._transform || Ia(this._target, l, !0)
        };
        s._linkCSSP = function (a, c, h, d) {
            return a &&
                (c && (c._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), h ? h._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = c, a._prev = h), a
        };
        s._kill = function (a) {
            var c, h, e, g = a;
            if (a.autoAlpha || a.alpha) {
                g = {};
                for (h in a) g[h] = a[h];
                g.opacity = 1;
                g.autoAlpha && (g.visibility = 1)
            }
            return a.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next,
                c._next._next, e._prev), this._classNamePT = null), d.prototype._kill.call(this, g)
        };
        var La = function (a, c, h) {
            var d, e, g, i;
            if (a.slice)
                for (e = a.length; - 1 < --e;) La(a[e], c, h);
            else
                for (d = a.childNodes, e = d.length; - 1 < --e;) g = d[e], i = g.type, g.style && (c.push(Da(g)), h && h.push(g)), 1 !== i && 9 !== i && 11 !== i || !g.childNodes.length || La(g, c, h)
        };
        return u.cascadeTo = function (a, c, h) {
            var d, e, g;
            d = n.to(a, c, h);
            var i = [d],
                j = [],
                l = [],
                m = [],
                x = n._internals.reservedProps;
            for (a = d._targets || d.target, La(a, j, m), d.render(c, !0), La(a, l), d.render(0, !0),
                d._enabled(!0), d = m.length; - 1 < --d;)
                if (e = wa(m[d], j[d], l[d]), e.firstMPT) {
                    e = e.difs;
                    for (g in h) x[g] && (e[g] = h[g]);
                    i.push(n.to(m[d], c, e))
                }
            return i
        }, d.activate([u]), u
    }, !0);
    (function () {
        var d = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function (d, m, q) {
                return this._tween = q, !0
            }
        }).prototype;
        d._onInitAllProps = function () {
            for (var d, m, q, l = this._tween, z = l.vars.roundProps instanceof Array ? l.vars.roundProps : l.vars.roundProps.split(","), u = z.length, w = {}, s = l._propLookup.roundProps; - 1 < --u;) w[z[u]] =
                1;
            for (u = z.length; - 1 < --u;)
                for (d = z[u], m = l._firstPT; m;) q = m._next, m.pg ? m.t._roundProps(w, !0) : m.n === d && (this._add(m.t, d, m.s, m.c), q && (q._prev = m._prev), m._prev ? m._prev._next = q : l._firstPT === m && (l._firstPT = q), m._next = m._prev = null, l._propLookup[d] = s), m = q;
            return !1
        };
        d._add = function (d, m, q, l) {
            this._addTween(d, m, q, q + l, m, !0);
            this._overwriteProps.push(m)
        }
    })();
    window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.2.0",
        init: function (d, n) {
            var m;
            if ("function" != typeof d.setAttribute) return !1;
            this._target = d;
            this._proxy = {};
            for (m in n) this._addTween(this._proxy, m, parseFloat(d.getAttribute(m)), n[m], m) && this._overwriteProps.push(m);
            return !0
        },
        set: function (d) {
            this._super.setRatio.call(this, d);
            for (var n, d = this._overwriteProps, m = d.length; - 1 < --m;) n = d[m], this._target.setAttribute(n, this._proxy[n] + "")
        }
    });
    window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        version: "0.2.0",
        init: function (d, n) {
            "object" != typeof n && (n = {
                rotation: n
            });
            this.finals = {};
            var m, q, l, z, u, w, s = !0 === n.useRadians ? 2 * Math.PI : 360;
            for (m in n) "useRadians" !==
                m && (w = (n[m] + "").split("_"), q = w[0], l = parseFloat("function" != typeof d[m] ? d[m] : d[m.indexOf("set") || "function" != typeof d["get" + m.substr(3)] ? m : "get" + m.substr(3)]()), z = this.finals[m] = "string" == typeof q && "=" === q.charAt(1) ? l + parseInt(q.charAt(0) + "1", 10) * Number(q.substr(2)) : Number(q) || 0, u = z - l, w.length && (q = w.join("_"), -1 !== q.indexOf("short") && (u %= s, u !== u % (s / 2) && (u = 0 > u ? u + s : u - s)), -1 !== q.indexOf("_cw") && 0 > u ? u = (u + 9999999999 * s) % s - (0 | u / s) * s : -1 !== q.indexOf("ccw") && 0 < u && (u = (u - 9999999999 * s) % s - (0 | u / s) * s)), (1.0E-6 < u ||
                    -1.0E-6 > u) && (this._addTween(d, m, l, l + u, m), this._overwriteProps.push(m)));
            return !0
        },
        set: function (d) {
            if (1 !== d) this._super.setRatio.call(this, d);
            else
                for (d = this._firstPT; d;) d.f ? d.t[d.p](this.finals[d.p]) : d.t[d.p] = this.finals[d.p], d = d._next
        }
    })._autoCSS = !0;
    window._gsDefine("easing.Back", ["easing.Ease"], function (d) {
        var n, m, q, l = window.GreenSockGlobals || window,
            z = 2 * Math.PI,
            u = Math.PI / 2,
            w = l.com.greensock._class,
            s = function (a, e) {
                var g = w("easing." + a, function () {}, !0),
                    i = g.prototype = new d;
                return i.constructor = g, i.getRatio =
                    e, g
            },
            A = d.register || function () {},
            v = function (a, d, e, g) {
                d = w("easing." + a, {
                    easeOut: new d,
                    easeIn: new e,
                    easeInOut: new g
                }, !0);
                return A(d, a), d
            },
            j = function (a, d, e) {
                this.t = a;
                this.v = d;
                e && (this.next = e, e.prev = this, this.c = e.v - d, this.gap = e.t - a)
            },
            g = function (a, e) {
                var g = w("easing." + a, function (a) {
                        this._p1 = a || 0 === a ? a : 1.70158;
                        this._p2 = 1.525 * this._p1
                    }, !0),
                    i = g.prototype = new d;
                return i.constructor = g, i.getRatio = e, i.config = function (a) {
                    return new g(a)
                }, g
            },
            g = v("Back", g("BackOut", function (a) {
                return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) +
                    1
            }), g("BackIn", function (a) {
                return a * a * ((this._p1 + 1) * a - this._p1)
            }), g("BackInOut", function (a) {
                return 1 > (a *= 2) ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
            })),
            i = w("easing.SlowMo", function (a, d, e) {
                d = d || 0 === d ? d : 0.7;
                null == a ? a = 0.7 : 1 < a && (a = 1);
                this._p = 1 !== a ? d : 0;
                this._p1 = (1 - a) / 2;
                this._p2 = a;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = !0 === e
            }, !0),
            e = i.prototype = new d;
        return e.constructor = i, e.getRatio = function (a) {
            var d = a + (0.5 - a) * this._p;
            return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) *
                a : d - (a = 1 - a / this._p1) * a * a * a * d : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : d + (a - d) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : d
        }, i.ease = new i(0.7, 0.7), e.config = i.config = function (a, d, e) {
            return new i(a, d, e)
        }, n = w("easing.SteppedEase", function (a) {
            a = a || 1;
            this._p1 = 1 / a;
            this._p2 = a + 1
        }, !0), e = n.prototype = new d, e.constructor = n, e.getRatio = function (a) {
            return 0 > a ? a = 0 : 1 <= a && (a = 0.999999999), (this._p2 * a >> 0) * this._p1
        }, e.config = n.config = function (a) {
            return new n(a)
        }, m = w("easing.RoughEase", function (a) {
            for (var a =
                a || {}, e, g, i, l, m, n = a.taper || "none", q = [], u = 0, s = 0 | (a.points || 20), z = s, w = !1 !== a.randomize, v = !0 === a.clamp, A = a.template instanceof d ? a.template : null, a = "number" == typeof a.strength ? 0.4 * a.strength : 0.4; - 1 < --z;) e = w ? Math.random() : 1 / s * z, g = A ? A.getRatio(e) : e, "none" === n ? i = a : "out" === n ? (l = 1 - e, i = l * l * a) : "in" === n ? i = e * e * a : 0.5 > e ? (l = 2 * e, i = 0.5 * l * l * a) : (l = 2 * (1 - e), i = 0.5 * l * l * a), w ? g += Math.random() * i - 0.5 * i : z % 2 ? g += 0.5 * i : g -= 0.5 * i, v && (1 < g ? g = 1 : 0 > g && (g = 0)), q[u++] = {
                x: e,
                y: g
            };
            for (q.sort(function (a, d) {
                    return a.x - d.x
                }), e = new j(1, 1, null),
                z = s; - 1 < --z;) m = q[z], e = new j(m.x, m.y, e);
            this._prev = new j(0, 0, 0 !== e.t ? e : e.next)
        }, !0), e = m.prototype = new d, e.constructor = m, e.getRatio = function (a) {
            var d = this._prev;
            if (a > d.t) {
                for (; d.next && a >= d.t;) d = d.next;
                d = d.prev
            } else
                for (; d.prev && d.t >= a;) d = d.prev;
            return this._prev = d, d.v + (a - d.t) / d.gap * d.c
        }, e.config = function (a) {
            return new m(a)
        }, m.ease = new m, v("Bounce", s("BounceOut", function (a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) *
                a + 0.984375
        }), s("BounceIn", function (a) {
            return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
        }), s("BounceInOut", function (a) {
            var d = 0.5 > a;
            return a = d ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375, d ? 0.5 * (1 - a) : 0.5 * a + 0.5
        })), v("Circ", s("CircOut", function (a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), s("CircIn", function (a) {
            return -(Math.sqrt(1 -
                a * a) - 1)
        }), s("CircInOut", function (a) {
            return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })), q = function (a, e, g) {
            var i = w("easing." + a, function (a, d) {
                    this._p1 = a || 1;
                    this._p2 = d || g;
                    this._p3 = this._p2 / z * (Math.asin(1 / this._p1) || 0)
                }, !0),
                a = i.prototype = new d;
            return a.constructor = i, a.getRatio = e, a.config = function (a, d) {
                return new i(a, d)
            }, i
        }, v("Elastic", q("ElasticOut", function (a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * z / this._p2) + 1
        }, 0.3), q("ElasticIn", function (a) {
            return -(this._p1 *
                Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * z / this._p2))
        }, 0.3), q("ElasticInOut", function (a) {
            return 1 > (a *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * z / this._p2) : 0.5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * z / this._p2) + 1
        }, 0.45)), v("Expo", s("ExpoOut", function (a) {
            return 1 - Math.pow(2, -10 * a)
        }), s("ExpoIn", function (a) {
            return Math.pow(2, 10 * (a - 1)) - 0.001
        }), s("ExpoInOut", function (a) {
            return 1 > (a *= 2) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))
        })), v("Sine", s("SineOut", function (a) {
            return Math.sin(a *
                u)
        }), s("SineIn", function (a) {
            return -Math.cos(a * u) + 1
        }), s("SineInOut", function (a) {
            return -0.5 * (Math.cos(Math.PI * a) - 1)
        })), w("easing.EaseLookup", {
            find: function (a) {
                return d.map[a]
            }
        }, !0), A(l.SlowMo, "SlowMo", "ease,"), A(m, "RoughEase", "ease,"), A(n, "SteppedEase", "ease,"), g
    }, !0)
});
(function (d) {
    var n = d.GreenSockGlobals || d;
    if (!n.TweenLite) {
        var m, q, l, z, u, w = function (a) {
                for (var d = a.split("."), e = n, a = 0; d.length > a; a++) e[d[a]] = e = e[d[a]] || {};
                return e
            },
            s = w("com.greensock"),
            A = [].slice,
            v = function () {},
            j = function () {
                var a = Object.prototype.toString,
                    d = a.call([]);
                return function (e) {
                    return null != e && (e instanceof Array || "object" == typeof e && !!e.push && a.call(e) === d)
                }
            }(),
            g = {},
            i = function (a, e, j, l) {
                this.sc = g[a] ? g[a].sc : [];
                g[a] = this;
                this.gsClass = null;
                this.func = j;
                var m = [];
                this.check = function (q) {
                    for (var u,
                        c, s, z, v = e.length, A = v; - 1 < --v;)(u = g[e[v]] || new i(e[v], [])).gsClass ? (m[v] = u.gsClass, A--) : q && u.sc.push(this);
                    if (0 === A && j)
                        for (c = ("com.greensock." + a).split("."), s = c.pop(), z = w(c.join("."))[s] = this.gsClass = j.apply(j, m), l && (n[s] = z, "function" == typeof define && define.amd ? define((d.GreenSockAMDPath ? d.GreenSockAMDPath + "/" : "") + a.split(".").join("/"), [], function () {
                            return z
                        }) : "undefined" != typeof module && module.exports && (module.exports = z)), v = 0; this.sc.length > v; v++) this.sc[v].check()
                };
                this.check(!0)
            },
            e = d._gsDefine =
            function (a, d, e, g) {
                return new i(a, d, e, g)
            },
            a = s._class = function (a, d, g) {
                return d = d || function () {}, e(a, [], function () {
                    return d
                }, g), d
            };
        e.globals = n;
        var O = [0, 0, 1, 1],
            D = [],
            E = a("easing.Ease", function (a, d, e, g) {
                this._func = a;
                this._type = e || 0;
                this._power = g || 0;
                this._params = d ? O.concat(d) : O
            }, !0),
            ia = E.map = {},
            G = E.register = function (h, d, e, g) {
                for (var i, j, l, d = d.split(","), c = d.length, m = (e || "easeIn,easeOut,easeInOut").split(","); - 1 < --c;)
                    for (i = d[c], e = g ? a("easing." + i, null, !0) : s.easing[i] || {}, j = m.length; - 1 < --j;) l = m[j], ia[i + "." +
                        l] = ia[l + i] = e[l] = h.getRatio ? h : h[l] || new h
            };
        for (l = E.prototype, l._calcEnd = !1, l.getRatio = function (a) {
            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
            var d = this._type,
                e = this._power,
                g = 1 === d ? 1 - a : 2 === d ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
            return 1 === e ? g *= g : 2 === e ? g *= g * g : 3 === e ? g *= g * g * g : 4 === e && (g *= g * g * g * g), 1 === d ? 1 - g : 2 === d ? g : 0.5 > a ? g / 2 : 1 - g / 2
        }, m = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], q = m.length; - 1 < --q;) l = m[q] + ",Power" + q, G(new E(null, null, 1, q), l, "easeOut", !0), G(new E(null, null, 2, q), l, "easeIn" +
            (0 === q ? ",easeNone" : "")), G(new E(null, null, 3, q), l, "easeInOut");
        ia.linear = s.easing.Linear.easeIn;
        ia.swing = s.easing.Quad.easeInOut;
        var Q = a("events.EventDispatcher", function (a) {
            this._listeners = {};
            this._eventTarget = a || this
        });
        l = Q.prototype;
        l.addEventListener = function (a, d, e, g, i) {
            var i = i || 0,
                j, l = this._listeners[a],
                c = 0;
            for (null == l && (this._listeners[a] = l = []), a = l.length; - 1 < --a;) j = l[a], j.c === d && j.s === e ? l.splice(a, 1) : 0 === c && i > j.pr && (c = a + 1);
            l.splice(c, 0, {
                c: d,
                s: e,
                up: g,
                pr: i
            });
            this !== z || u || z.wake()
        };
        l.removeEventListener =
            function (a, d) {
                var e, g = this._listeners[a];
                if (g)
                    for (e = g.length; - 1 < --e;)
                        if (g[e].c === d) return g.splice(e, 1), void 0
            };
        l.dispatchEvent = function (a) {
            var d, e, g, i = this._listeners[a];
            if (i)
                for (d = i.length, e = this._eventTarget; - 1 < --d;) g = i[d], g.up ? g.c.call(g.s || e, {
                    type: a,
                    target: e
                }) : g.c.call(g.s || e)
        };
        var M = d.requestAnimationFrame,
            V = d.cancelAnimationFrame,
            ea = Date.now || function () {
                return (new Date).getTime()
            },
            S = ea();
        for (m = ["ms", "moz", "webkit", "o"], q = m.length; - 1 < --q && !M;) M = d[m[q] + "RequestAnimationFrame"], V = d[m[q] + "CancelAnimationFrame"] ||
            d[m[q] + "CancelRequestAnimationFrame"];
        a("Ticker", function (a, d) {
            var e, g, i, j, l, c = this,
                m = ea(),
                n = !1 !== d && M,
                q = function (a) {
                    S = ea();
                    c.time = (S - m) / 1E3;
                    var h, d = c.time - l;
                    (!e || 0 < d || !0 === a) && (c.frame++, l += d + (d >= j ? 0.004 : j - d), h = !0);
                    !0 !== a && (i = g(q));
                    h && c.dispatchEvent("tick")
                };
            Q.call(c);
            c.time = c.frame = 0;
            c.tick = function () {
                q(!0)
            };
            c.sleep = function () {
                null != i && (n && V ? V(i) : clearTimeout(i), g = v, i = null, c === z && (u = !1))
            };
            c.wake = function () {
                null !== i && c.sleep();
                g = 0 === e ? v : n && M ? M : function (a) {
                    return setTimeout(a, 0 | 1E3 * (l - c.time) + 1)
                };
                c === z && (u = !0);
                q(2)
            };
            c.fps = function (a) {
                return arguments.length ? (e = a, j = 1 / (e || 60), l = this.time + j, c.wake(), void 0) : e
            };
            c.useRAF = function (a) {
                return arguments.length ? (c.sleep(), n = a, c.fps(e), void 0) : n
            };
            c.fps(a);
            setTimeout(function () {
                n && (!i || 5 > c.frame) && c.useRAF(!1)
            }, 1500)
        });
        l = s.Ticker.prototype = new s.events.EventDispatcher;
        l.constructor = s.Ticker;
        var N = a("core.Animation", function (a, d) {
            if (this.vars = d = d || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(d.delay) || 0, this._timeScale = 1, this._active = !0 === d.immediateRender, this.data = d.data, this._reversed = !0 === d.reversed, fa) {
                u || z.wake();
                var e = this.vars.useFrames ? Z : fa;
                e.add(this, e._time);
                this.vars.paused && this.paused(!0)
            }
        });
        z = N.ticker = new s.Ticker;
        l = N.prototype;
        l._dirty = l._gc = l._initted = l._paused = !1;
        l._totalTime = l._time = 0;
        l._rawPrevTime = -1;
        l._next = l._last = l._onUpdate = l._timeline = l.timeline = null;
        l._paused = !1;
        var T = function () {
            u && 2E3 < ea() - S && z.wake();
            setTimeout(T, 2E3)
        };
        T();
        l.play = function (a, d) {
            return arguments.length && this.seek(a, d), this.reversed(!1).paused(!1)
        };
        l.pause = function (a, d) {
            return arguments.length && this.seek(a, d), this.paused(!0)
        };
        l.resume = function (a, d) {
            return arguments.length && this.seek(a, d), this.paused(!1)
        };
        l.seek = function (a, d) {
            return this.totalTime(Number(a), !1 !== d)
        };
        l.restart = function (a, d) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== d, !0)
        };
        l.reverse = function (a, d) {
            return arguments.length && this.seek(a || this.totalDuration(), d), this.reversed(!0).paused(!1)
        };
        l.render = function () {};
        l.invalidate = function () {
            return this
        };
        l.isActive =
            function () {
                var a, d = this._timeline,
                    e = this._startTime;
                return !d || !this._gc && !this._paused && d.isActive() && (a = d.rawTime()) >= e && e + this.totalDuration() / this._timeScale > a
            };
        l._enabled = function (a, d) {
            return u || z.wake(), this._gc = !a, this._active = this.isActive(), !0 !== d && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        };
        l._kill = function () {
            return this._enabled(!1, !1)
        };
        l.kill = function (a, d) {
            return this._kill(a, d), this
        };
        l._uncache = function (a) {
            for (a =
                a ? this : this.timeline; a;) a._dirty = !0, a = a.timeline;
            return this
        };
        l._swapSelfInParams = function (a) {
            for (var d = a.length, e = a.concat(); - 1 < --d;) "{self}" === a[d] && (e[d] = this);
            return e
        };
        l.eventCallback = function (a, d, e, g) {
            if ("on" === (a || "").substr(0, 2)) {
                var i = this.vars;
                if (1 === arguments.length) return i[a];
                null == d ? delete i[a] : (i[a] = d, i[a + "Params"] = j(e) && -1 !== e.join("").indexOf("{self}") ? this._swapSelfInParams(e) : e, i[a + "Scope"] = g);
                "onUpdate" === a && (this._onUpdate = d)
            }
            return this
        };
        l.delay = function (a) {
            return arguments.length ?
                (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        };
        l.duration = function (a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        };
        l.totalDuration = function (a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        };
        l.time =
            function (a, d) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, d)) : this._time
            };
        l.totalTime = function (a, d, e) {
            if (u || z.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !e && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var g = this._totalDuration,
                        i = this._timeline;
                    if (a > g && !e && (a = g), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? g - a : a) / this._timeScale,
                        i._dirty || this._uncache(!1), i._timeline)
                        for (; i._timeline;) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
                }
                this._gc && this._enabled(!0, !1);
                (this._totalTime !== a || 0 === this._duration) && this.render(a, d, !1)
            }
            return this
        };
        l.progress = l.totalProgress = function (a, d) {
            return arguments.length ? this.totalTime(this.duration() * a, d) : this._time / this.duration()
        };
        l.startTime = function (a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline &&
                this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        };
        l.timeScale = function (a) {
            if (!arguments.length) return this._timeScale;
            if (a = a || 1.0E-10, this._timeline && this._timeline.smoothChildTiming) {
                var d = this._pauseTime,
                    d = d || 0 === d ? d : this._timeline.totalTime();
                this._startTime = d - (d - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        };
        l.reversed = function (a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline &&
                !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        };
        l.paused = function (a) {
            if (!arguments.length) return this._paused;
            if (a != this._paused && this._timeline) {
                u || a || z.wake();
                var d = this._timeline,
                    e = d.rawTime(),
                    g = e - this._pauseTime;
                !a && d.smoothChildTiming && (this._startTime += g, this._uncache(!1));
                this._pauseTime = a ? e : null;
                this._paused = a;
                this._active = this.isActive();
                !a && 0 !== g && this._initted && this.duration() && this.render(d.smoothChildTiming ? this._totalTime :
                    (e - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !a && this._enabled(!0, !1), this
        };
        m = a("core.SimpleTimeline", function (a) {
            N.call(this, 0, a);
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        l = m.prototype = new N;
        l.constructor = m;
        l.kill()._gc = !1;
        l._first = l._last = null;
        l._sortChildren = !1;
        l.add = l.insert = function (a, d) {
            var e, g;
            if (a._startTime = Number(d || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                for (g = a._startTime; e && e._startTime > g;) e = e._prev;
            return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._timeline && this._uncache(!0), this
        };
        l._remove = function (a, d) {
            return a.timeline === this && (d || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last =
                a._prev), this._timeline && this._uncache(!0)), this
        };
        l.render = function (a, d, e) {
            var g, i = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; i;) g = i._next, (i._active || a >= i._startTime && !i._paused) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (a - i._startTime) * i._timeScale, d, e) : i.render((a - i._startTime) * i._timeScale, d, e)), i = g
        };
        l.rawTime = function () {
            return u || z.wake(), this._totalTime
        };
        var F = a("TweenLite", function (a, e, g) {
                if (N.call(this, e, g), this.render = F.prototype.render, null ==
                    a) throw "Cannot tween a null target.";
                this.target = a = "string" != typeof a ? a : F.selector(a) || a;
                var i, l;
                l = a.jquery || a.length && a !== d && a[0] && (a[0] === d || a[0].nodeType && a[0].style && !a.nodeType);
                g = this.vars.overwrite;
                if (this._overwrite = g = null == g ? aa[F.defaultOverwrite] : "number" == typeof g ? g >> 0 : aa[g], (l || a instanceof Array || a.push && j(a)) && "number" != typeof a[0])
                    for (this._targets = l = A.call(a, 0), this._propLookup = [], this._siblings = [], a = 0; l.length > a; a++) i = l[a], i ? "string" != typeof i ? i.length && i !== d && i[0] && (i[0] === d || i[0].nodeType &&
                        i[0].style && !i.nodeType) ? (l.splice(a--, 1), this._targets = l = l.concat(A.call(i, 0))) : (this._siblings[a] = ma(i, this, !1), 1 === g && 1 < this._siblings[a].length && ha(i, this, null, 1, this._siblings[a])) : (i = l[a--] = F.selector(i), "string" == typeof i && l.splice(a + 1, 1)) : l.splice(a--, 1);
                else this._propLookup = {}, this._siblings = ma(a, this, !1), 1 === g && 1 < this._siblings.length && ha(a, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && this.render(-this._delay, !1, !0)
            }, !0),
            W = function (a) {
                return a.length && a !== d && a[0] && (a[0] === d || a[0].nodeType && a[0].style && !a.nodeType)
            };
        l = F.prototype = new N;
        l.constructor = F;
        l.kill()._gc = !1;
        l.ratio = 0;
        l._firstPT = l._targets = l._overwrittenProps = l._startAt = null;
        l._notifyPluginsOfEnabled = !1;
        F.version = "1.11.5";
        F.defaultEase = l._ease = new E(null, null, 1, 1);
        F.defaultOverwrite = "auto";
        F.ticker = z;
        F.autoSleep = !0;
        F.selector = d.$ || d.jQuery || function (a) {
            return d.$ ? (F.selector = d.$, d.$(a)) : d.document ? d.document.getElementById("#" === a.charAt(0) ? a.substr(1) : a) :
                a
        };
        q = F._internals = {
            isArray: j,
            isSelector: W
        };
        var U = F._plugins = {},
            R = F._tweenLookup = {},
            Y = 0,
            da = q.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            },
            aa = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            Z = N._rootFramesTimeline = new m,
            fa = N._rootTimeline = new m;
        fa._startTime = z.time;
        Z._startTime = z.frame;
        fa._active = Z._active = !0;
        N._updateRoot = function () {
            if (fa.render((z.time - fa._startTime) * fa._timeScale, !1, !1), Z.render((z.frame - Z._startTime) * Z._timeScale, !1, !1), !(z.frame % 120)) {
                var a, d, e;
                for (e in R) {
                    for (d = R[e].tweens, a = d.length; - 1 < --a;) d[a]._gc && d.splice(a, 1);
                    0 === d.length && delete R[e]
                }
                if (e = fa._first, (!e || e._paused) &&
                    F.autoSleep && !Z._first && 1 === z._listeners.tick.length) {
                    for (; e && e._paused;) e = e._next;
                    e || z.sleep()
                }
            }
        };
        z.addEventListener("tick", N._updateRoot);
        var ma = function (a, d, e) {
                var g, i, j = a._gsTweenID;
                if (R[j || (a._gsTweenID = j = "t" + Y++)] || (R[j] = {
                    target: a,
                    tweens: []
                }), d && (g = R[j].tweens, g[i = g.length] = d, e))
                    for (; - 1 < --i;) g[i] === d && g.splice(i, 1);
                return R[j].tweens
            },
            ha = function (a, d, e, g, i) {
                var j, l, c;
                if (1 === g || 4 <= g) {
                    for (a = i.length, j = 0; a > j; j++)
                        if ((c = i[j]) !== d) c._gc || c._enabled(!1, !1) && (l = !0);
                        else if (5 === g) break;
                    return l
                }
                var m,
                    n = d._startTime + 1.0E-10,
                    q = [],
                    u = 0,
                    s = 0 === d._duration;
                for (j = i.length; - 1 < --j;)(c = i[j]) === d || c._gc || c._paused || (c._timeline !== d._timeline ? (m = m || ka(d, 0, s), 0 === ka(c, m, s) && (q[u++] = c)) : n >= c._startTime && c._startTime + c.totalDuration() / c._timeScale > n && ((s || !c._initted) && 2.0E-10 >= n - c._startTime || (q[u++] = c)));
                for (j = u; - 1 < --j;) c = q[j], 2 === g && c._kill(e, a) && (l = !0), (2 !== g || !c._firstPT && c._initted) && c._enabled(!1, !1) && (l = !0);
                return l
            },
            ka = function (a, d, e) {
                for (var g = a._timeline, i = g._timeScale, j = a._startTime; g._timeline;) {
                    if (j +=
                        g._startTime, i *= g._timeScale, g._paused) return -100;
                    g = g._timeline
                }
                return j /= i, j > d ? j - d : e && j === d || !a._initted && 2.0E-10 > j - d ? 1.0E-10 : (j += a.totalDuration() / a._timeScale / i) > d + 1.0E-10 ? 0 : j - d - 1.0E-10
            };
        l._init = function () {
            var a, d, e, g = this.vars,
                i = this._overwrittenProps;
            e = this._duration;
            var j = g.immediateRender,
                l = g.ease;
            if (g.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), g.startAt.overwrite = 0, g.startAt.immediateRender = !0, this._startAt = F.to(this.target, 0, g.startAt), j)
                    if (0 < this._time) this._startAt = null;
                    else if (0 !==
                    e) return
            } else if (g.runBackwards && 0 !== e)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else {
                    e = {};
                    for (a in g) da[a] && "autoCSS" !== a || (e[a] = g[a]);
                    if (e.overwrite = 0, e.data = "isFromStart", this._startAt = F.to(this.target, 0, e), g.immediateRender) {
                        if (0 === this._time) return
                    } else this._startAt.render(-1, !0)
                }
            if (this._ease = l ? l instanceof E ? g.easeParams instanceof Array ? l.config.apply(l, g.easeParams) : l : "function" == typeof l ? new E(l, g.easeParams) : ia[l] || F.defaultEase : F.defaultEase, this._easeType = this._ease._type,
                this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (a = this._targets.length; - 1 < --a;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], i ? i[a] : null) && (d = !0);
            else d = this._initProps(this.target, this._propLookup, this._siblings, i); if (d && F._onPluginEvent("_onInitAllProps", this), i && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
                for (e = this._firstPT; e;) e.s += e.c, e.c = -e.c, e = e._next;
            this._onUpdate = g.onUpdate;
            this._initted = !0
        };
        l._initProps =
            function (a, e, g, i) {
                var l, m, n, c, q;
                if (null == a) return !1;
                if (!this.vars.css && a.style && a !== d && a.nodeType && U.css && !1 !== this.vars.autoCSS) {
                    m = this.vars;
                    var u, s = {};
                    for (u in m) da[u] || u in a && "x" !== u && "y" !== u && "width" !== u && "height" !== u && "className" !== u && "border" !== u || U[u] && (!U[u] || !U[u]._autoCSS) || (s[u] = m[u], delete m[u]);
                    m.css = s
                }
                for (l in this.vars) {
                    if (m = this.vars[l], da[l]) m && (m instanceof Array || m.push && j(m)) && -1 !== m.join("").indexOf("{self}") && (this.vars[l] = this._swapSelfInParams(m, this));
                    else if (U[l] && (c = new U[l])._onInitTween(a,
                        this.vars[l], this)) {
                        for (this._firstPT = q = {
                            _next: this._firstPT,
                            t: c,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: l,
                            pg: !0,
                            pr: c._priority
                        }, m = c._overwriteProps.length; - 1 < --m;) e[c._overwriteProps[m]] = this._firstPT;
                        (c._priority || c._onInitAllProps) && (n = !0);
                        (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = e[l] = q = {
                            _next: this._firstPT,
                            t: a,
                            p: l,
                            f: "function" == typeof a[l],
                            n: l,
                            pg: !1,
                            pr: 0
                        }, q.s = q.f ? a[l.indexOf("set") || "function" != typeof a["get" + l.substr(3)] ? l : "get" + l.substr(3)]() : parseFloat(a[l]), q.c =
                        "string" == typeof m && "=" === m.charAt(1) ? parseInt(m.charAt(0) + "1", 10) * Number(m.substr(2)) : Number(m) - q.s || 0;
                    q && q._next && (q._next._prev = q)
                }
                return i && this._kill(i, a) ? this._initProps(a, e, g, i) : 1 < this._overwrite && this._firstPT && 1 < g.length && ha(a, this, e, this._overwrite, g) ? (this._kill(e, a), this._initProps(a, e, g, i)) : n
            };
        l.render = function (a, d, e) {
            var g, i, j, l, c = this._time,
                m = this._duration;
            if (a >= m) this._totalTime = this._time = m, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (g = !0, i = "onComplete"),
                0 === m && (l = this._rawPrevTime, (0 === a || 0 > l || 1.0E-10 === l) && l !== a && (e = !0, 1.0E-10 < l && (i = "onReverseComplete")), this._rawPrevTime = l = !d || a || 0 === l ? a : 1.0E-10);
            else if (1.0E-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== c || 0 === m && 1.0E-10 < this._rawPrevTime) && (i = "onReverseComplete", g = this._reversed), 0 > a ? (this._active = !1, 0 === m && (0 <= this._rawPrevTime && (e = !0), this._rawPrevTime = l = !d || a || 0 === this._rawPrevTime ? a : 1.0E-10)) : this._initted || (e = !0);
            else if (this._totalTime = this._time =
                a, this._easeType) {
                j = a / m;
                var n = this._easeType,
                    q = this._easePower;
                (1 === n || 3 === n && 0.5 <= j) && (j = 1 - j);
                3 === n && (j *= 2);
                1 === q ? j *= j : 2 === q ? j *= j * j : 3 === q ? j *= j * j * j : 4 === q && (j *= j * j * j * j);
                this.ratio = 1 === n ? 1 - j : 2 === n ? j : 0.5 > a / m ? j / 2 : 1 - j / 2
            } else this.ratio = this._ease.getRatio(a / m); if (this._time !== c || e) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    this._time && !g ? this.ratio = this._ease.getRatio(this._time / m) : g && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused &&
                    this._time !== c && 0 <= a && (this._active = !0), 0 === c && (this._startAt && (0 <= a ? this._startAt.render(a, d, e) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === m) && (d || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || D))), j = this._firstPT; j;) j.f ? j.t[j.p](j.c * this.ratio + j.s) : j.t[j.p] = j.c * this.ratio + j.s, j = j._next;
                this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, d, e), d || (this._time !== c || g) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams ||
                    D));
                i && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, d, e), g && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !d && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || D), 0 === m && 1.0E-10 === this._rawPrevTime && 1.0E-10 !== l && (this._rawPrevTime = 0)))
            }
        };
        l._kill = function (a, d) {
            if ("all" === a && (a = null), null == a && (null == d || d === this.target)) return this._enabled(!1, !1);
            var d = "string" != typeof d ? d || this._targets || this.target :
                F.selector(d) || d,
                e, g, i, l, m, c, n;
            if ((j(d) || W(d)) && "number" != typeof d[0])
                for (e = d.length; - 1 < --e;) this._kill(a, d[e]) && (c = !0);
            else {
                if (this._targets)
                    for (e = this._targets.length; - 1 < --e;) {
                        if (d === this._targets[e]) {
                            m = this._propLookup[e] || {};
                            this._overwrittenProps = this._overwrittenProps || [];
                            g = this._overwrittenProps[e] = a ? this._overwrittenProps[e] || {} : "all";
                            break
                        }
                    } else {
                        if (d !== this.target) return !1;
                        m = this._propLookup;
                        g = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    } if (m) {
                        e = a || m;
                        n = a !== g && "all" !== g && a !==
                            m && ("object" != typeof a || !a._tempKill);
                        for (i in e)(l = m[i]) && (l.pg && l.t._kill(e) && (c = !0), l.pg && 0 !== l.t._overwriteProps.length || (l._prev ? l._prev._next = l._next : l === this._firstPT && (this._firstPT = l._next), l._next && (l._next._prev = l._prev), l._next = l._prev = null), delete m[i]), n && (g[i] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
            }
            return c
        };
        l.invalidate = function () {
            return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate =
                null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        };
        l._enabled = function (a, d) {
            if (u || z.wake(), a && this._gc) {
                var e, g = this._targets;
                if (g)
                    for (e = g.length; - 1 < --e;) this._siblings[e] = ma(g[e], this, !0);
                else this._siblings = ma(this.target, this, !0)
            }
            return N.prototype._enabled.call(this, a, d), this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        };
        F.to = function (a, d, e) {
            return new F(a, d, e)
        };
        F.from = function (a,
            d, e) {
            return e.runBackwards = !0, e.immediateRender = 0 != e.immediateRender, new F(a, d, e)
        };
        F.fromTo = function (a, d, e, g) {
            return g.startAt = e, g.immediateRender = 0 != g.immediateRender && 0 != e.immediateRender, new F(a, d, g)
        };
        F.delayedCall = function (a, d, e, g, i) {
            return new F(d, 0, {
                delay: a,
                onComplete: d,
                onCompleteParams: e,
                onCompleteScope: g,
                onReverseComplete: d,
                onReverseCompleteParams: e,
                onReverseCompleteScope: g,
                immediateRender: !1,
                useFrames: i,
                overwrite: 0
            })
        };
        F.set = function (a, d) {
            return new F(a, 0, d)
        };
        F.getTweensOf = function (a, d) {
            if (null ==
                a) return [];
            var a = "string" != typeof a ? a : F.selector(a) || a,
                e, g, i, l;
            if ((j(a) || W(a)) && "number" != typeof a[0]) {
                for (e = a.length, g = []; - 1 < --e;) g = g.concat(F.getTweensOf(a[e], d));
                for (e = g.length; - 1 < --e;)
                    for (l = g[e], i = e; - 1 < --i;) l === g[i] && g.splice(e, 1)
            } else
                for (g = ma(a).concat(), e = g.length; - 1 < --e;)(g[e]._gc || d && !g[e].isActive()) && g.splice(e, 1);
            return g
        };
        F.killTweensOf = F.killDelayedCallsTo = function (a, d, e) {
            "object" == typeof d && (e = d, d = !1);
            for (var d = F.getTweensOf(a, d), g = d.length; - 1 < --g;) d[g]._kill(e, a)
        };
        var ca = a("plugins.TweenPlugin",
            function (a, d) {
                this._overwriteProps = (a || "").split(",");
                this._propName = this._overwriteProps[0];
                this._priority = d || 0;
                this._super = ca.prototype
            }, !0);
        if (l = ca.prototype, ca.version = "1.10.1", ca.API = 2, l._firstPT = null, l._addTween = function (a, d, e, g, i, j) {
                var l, c;
                return null != g && (l = "number" == typeof g || "=" !== g.charAt(1) ? Number(g) - e : parseInt(g.charAt(0) + "1", 10) * Number(g.substr(2))) ? (this._firstPT = c = {
                    _next: this._firstPT,
                    t: a,
                    p: d,
                    s: e,
                    c: l,
                    f: "function" == typeof a[d],
                    n: i || d,
                    r: j
                }, c._next && (c._next._prev = c), c) : void 0
            }, l.setRatio =
            function (a) {
                for (var d, e = this._firstPT; e;) d = e.c * a + e.s, e.r ? d = 0 | d + (0 < d ? 0.5 : -0.5) : 1.0E-6 > d && -1.0E-6 < d && (d = 0), e.f ? e.t[e.p](d) : e.t[e.p] = d, e = e._next
            }, l._kill = function (a) {
                var d, e = this._overwriteProps,
                    g = this._firstPT;
                if (null != a[this._propName]) this._overwriteProps = [];
                else
                    for (d = e.length; - 1 < --d;) null != a[e[d]] && e.splice(d, 1);
                for (; g;) null != a[g.n] && (g._next && (g._next._prev = g._prev), g._prev ? (g._prev._next = g._next, g._prev = null) : this._firstPT === g && (this._firstPT = g._next)), g = g._next;
                return !1
            }, l._roundProps = function (a,
                d) {
                for (var e = this._firstPT; e;)(a[this._propName] || null != e.n && a[e.n.split(this._propName + "_").join("")]) && (e.r = d), e = e._next
            }, F._onPluginEvent = function (a, d) {
                var e, g, i, j, l, c = d._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; c;) {
                        for (l = c._next, g = i; g && g.pr > c.pr;) g = g._next;
                        (c._prev = g ? g._prev : j) ? c._prev._next = c: i = c;
                        (c._next = g) ? g._prev = c: j = c;
                        c = l
                    }
                    c = d._firstPT = i
                }
                for (; c;) c.pg && "function" == typeof c.t[a] && c.t[a]() && (e = !0), c = c._next;
                return e
            }, ca.activate = function (a) {
                for (var d = a.length; - 1 < --d;) a[d].API === ca.API && (U[(new a[d])._propName] =
                    a[d]);
                return !0
            }, e.plugin = function (d) {
                if (!d || !d.propName || !d.init || !d.API) throw "illegal plugin definition.";
                var e, g = d.propName,
                    i = d.priority || 0,
                    j = d.overwriteProps,
                    l = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    m = a("plugins." + g.charAt(0).toUpperCase() + g.substr(1) + "Plugin", function () {
                        ca.call(this, g, i);
                        this._overwriteProps = j || []
                    }, !0 === d.global),
                    c = m.prototype = new ca(g);
                c.constructor = m;
                m.API = d.API;
                for (e in l) "function" == typeof d[e] && (c[l[e]] = d[e]);
                return m.version =
                    d.version, ca.activate([m]), m
            }, m = d._gsQueue) {
            for (q = 0; m.length > q; q++) m[q]();
            for (l in g) g[l].func || d.console.log("GSAP encountered missing dependency: com.greensock." + l)
        }
        u = !1
    }
})(window);
(window._gsQueue || (window._gsQueue = [])).push(function () {
    var d = document.documentElement,
        n = window,
        m = function (l, m) {
            var q = "x" === m ? "Width" : "Height",
                s = "scroll" + q,
                A = "client" + q,
                v = document.body;
            return l === n || l === d || l === v ? Math.max(d[s], v[s]) - (n["inner" + q] || Math.max(d[A], v[A])) : l[s] - l["offset" + q]
        },
        q = window._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.7.3",
            init: function (d, l, q) {
                return this._wdw = d === n, this._target = d, this._tween = q, "object" != typeof l && (l = {
                        y: l
                    }), this._autoKill = !1 !== l.autoKill, this.x = this.xPrev =
                    this.getX(), this.y = this.yPrev = this.getY(), null != l.x ? (this._addTween(this, "x", this.x, "max" === l.x ? m(d, "x") : l.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != l.y ? (this._addTween(this, "y", this.y, "max" === l.y ? m(d, "y") : l.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
            },
            set: function (d) {
                this._super.setRatio.call(this, d);
                var d = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    l = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    q = l - this.yPrev,
                    s = d - this.xPrev;
                this._autoKill && (!this.skipX && (7 < s || -7 > s) && m(this._target, "x") > d && (this.skipX = !0), !this.skipY && (7 < q || -7 > q) && m(this._target, "y") > l && (this.skipY = !0), this.skipX && this.skipY && this._tween.kill());
                this._wdw ? n.scrollTo(this.skipX ? d : this.x, this.skipY ? l : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x));
                this.xPrev = this.x;
                this.yPrev = this.y
            }
        }),
        l = q.prototype;
    q.max = m;
    l.getX = function () {
        return this._wdw ? null != n.pageXOffset ? n.pageXOffset : null != d.scrollLeft ? d.scrollLeft :
            document.body.scrollLeft : this._target.scrollLeft
    };
    l.getY = function () {
        return this._wdw ? null != n.pageYOffset ? n.pageYOffset : null != d.scrollTop ? d.scrollTop : document.body.scrollTop : this._target.scrollTop
    };
    l._kill = function (d) {
        return d.scrollTo_x && (this.skipX = !0), d.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, d)
    }
});
window._gsDefine && window._gsQueue.pop()();
(function (d) {
    d.fn.sparkle = function (n) {
        var n = d.extend({}, {
                x: 0,
                y: 0,
                scaleStart: 0.2,
                scaleEnd: 1,
                amount: 1,
                gravity: 1.7,
                lifetime: 1,
                delay: 0,
                duration: 0,
                maxDistance: 50,
                minDistance: 20,
                className: "spark",
                maxVariant: 5,
                elemKind: "div"
            }, n || {}),
            m = function (d) {
                d.remove()
            };
        return this.each(function () {
            for (var q = new TimelineLite({
                delay: n.delay
            }), l = 1; l <= n.amount; l++) {
                var z = d("<" + n.elemKind + "/>", {
                    "class": n.className
                }).addClass("s" + Math.round(Math.random() * n.maxVariant)).appendTo(this);
                TweenMax.set(z, {
                    scale: n.scaleStart,
                    autoAlpha: 0,
                    top: n.y,
                    left: n.x,
                    marginTop: -(z.outerHeight() / 2),
                    marginLeft: -(z.outerWidth() / 2)
                });
                var u = Math.random() * (n.maxDistance - n.minDistance) + n.minDistance,
                    w = 2 * Math.random() * Math.PI,
                    s = Math.sin(w) * u;
                flyY = Math.cos(w) * u;
                jump = Math.random(flyY);
                flightpath = {
                    curviness: 1,
                    values: [{
                        x: s,
                        y: flyY - jump
                    }, {
                        x: s * (Math.random() + 1),
                        y: flyY + u * n.gravity
                    }]
                };
                z = (new TimelineLite({
                    delay: n.duration / n.amount * l,
                    onComplete: m,
                    onCompleteParams: [z]
                })).add([TweenMax.to(z, 1.0E-4, {
                        autoAlpha: 1
                    }), TweenMax.to(z, n.lifetime, {
                        bezier: flightpath,
                        ease: Power1.easeOut
                    }),
                    TweenMax.to(z, 0.3 * n.lifetime, {
                        scale: n.scaleEnd
                    }), TweenMax.to(z, 0.5 * n.lifetime, {
                        autoAlpha: 0,
                        delay: 0.5 * n.lifetime,
                        ease: Power1.easeOut
                    })
                ]);
                q.add(z, 0)
            }
        })
    };
    d.fn.wrapEach = function (d, m) {
        return this.html(this.html().replace(d, m))
    }
})(jQuery);



