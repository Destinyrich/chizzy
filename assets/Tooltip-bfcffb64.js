!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "41f6df8f-bcf7-53fa-a0db-68d7223f8865")
    } catch (e) {}
}();
import {r as R, g as Yt, a as Gt, d as tt, b9 as St, j as ee, _ as A, aG as ut, b7 as Wt, b8 as Pr, f as Kt, s as rt, bo as Or, u as Jt, c as Qt, aE as Zt, b1 as Tr, aW as Rr, aF as Er, e as Ye, bp as Nt, bq as Ge} from "./index-4d92c338.js";
import {P as Cr} from "./Portal-e3c95b81.js";
import {a as Ar, u as $r} from "./createSvgIcon-d5208ee1.js";
const Mr = {
    disableDefaultClasses: !1
}
  , Dr = R.createContext(Mr);
function jr(e) {
    const {disableDefaultClasses: t} = R.useContext(Dr);
    return r=>t ? "" : e(r)
}
var S = "top"
  , H = "bottom"
  , V = "right"
  , W = "left"
  , mt = "auto"
  , Fe = [S, H, V, W]
  , Te = "start"
  , We = "end"
  , Br = "clippingParents"
  , er = "viewport"
  , Be = "popper"
  , Lr = "reference"
  , Ft = Fe.reduce(function(e, t) {
    return e.concat([t + "-" + Te, t + "-" + We])
}, [])
  , tr = [].concat(Fe, [mt]).reduce(function(e, t) {
    return e.concat([t, t + "-" + Te, t + "-" + We])
}, [])
  , kr = "beforeRead"
  , Sr = "read"
  , Wr = "afterRead"
  , Nr = "beforeMain"
  , Fr = "main"
  , Ir = "afterMain"
  , Hr = "beforeWrite"
  , Vr = "write"
  , Ur = "afterWrite"
  , _r = [kr, Sr, Wr, Nr, Fr, Ir, Hr, Vr, Ur];
function re(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}
function F(e) {
    if (e == null)
        return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}
function ge(e) {
    var t = F(e).Element;
    return e instanceof t || e instanceof Element
}
function I(e) {
    var t = F(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}
function ht(e) {
    if (typeof ShadowRoot > "u")
        return !1;
    var t = F(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}
function zr(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(r) {
        var o = t.styles[r] || {}
          , n = t.attributes[r] || {}
          , i = t.elements[r];
        !I(i) || !re(i) || (Object.assign(i.style, o),
        Object.keys(n).forEach(function(l) {
            var s = n[l];
            s === !1 ? i.removeAttribute(l) : i.setAttribute(l, s === !0 ? "" : s)
        }))
    })
}
function qr(e) {
    var t = e.state
      , r = {
        popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    return Object.assign(t.elements.popper.style, r.popper),
    t.styles = r,
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function() {
        Object.keys(t.elements).forEach(function(o) {
            var n = t.elements[o]
              , i = t.attributes[o] || {}
              , l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : r[o])
              , s = l.reduce(function(a, c) {
                return a[c] = "",
                a
            }, {});
            !I(n) || !re(n) || (Object.assign(n.style, s),
            Object.keys(i).forEach(function(a) {
                n.removeAttribute(a)
            }))
        })
    }
}
const Xr = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: zr,
    effect: qr,
    requires: ["computeStyles"]
};
function te(e) {
    return e.split("-")[0]
}
var he = Math.max
  , et = Math.min
  , Re = Math.round;
function ft() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}
function rr() {
    return !/^((?!chrome|android).)*safari/i.test(ft())
}
function Ee(e, t, r) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !1);
    var o = e.getBoundingClientRect()
      , n = 1
      , i = 1;
    t && I(e) && (n = e.offsetWidth > 0 && Re(o.width) / e.offsetWidth || 1,
    i = e.offsetHeight > 0 && Re(o.height) / e.offsetHeight || 1);
    var l = ge(e) ? F(e) : window
      , s = l.visualViewport
      , a = !rr() && r
      , c = (o.left + (a && s ? s.offsetLeft : 0)) / n
      , p = (o.top + (a && s ? s.offsetTop : 0)) / i
      , v = o.width / n
      , y = o.height / i;
    return {
        width: v,
        height: y,
        top: p,
        right: c + v,
        bottom: p + y,
        left: c,
        x: c,
        y: p
    }
}
function gt(e) {
    var t = Ee(e)
      , r = e.offsetWidth
      , o = e.offsetHeight;
    return Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - o) <= 1 && (o = t.height),
    {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: r,
        height: o
    }
}
function or(e, t) {
    var r = t.getRootNode && t.getRootNode();
    if (e.contains(t))
        return !0;
    if (r && ht(r)) {
        var o = t;
        do {
            if (o && e.isSameNode(o))
                return !0;
            o = o.parentNode || o.host
        } while (o)
    }
    return !1
}
function ie(e) {
    return F(e).getComputedStyle(e)
}
function Yr(e) {
    return ["table", "td", "th"].indexOf(re(e)) >= 0
}
function ce(e) {
    return ((ge(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function ot(e) {
    return re(e) === "html" ? e : e.assignedSlot || e.parentNode || (ht(e) ? e.host : null) || ce(e)
}
function It(e) {
    return !I(e) || ie(e).position === "fixed" ? null : e.offsetParent
}
function Gr(e) {
    var t = /firefox/i.test(ft())
      , r = /Trident/i.test(ft());
    if (r && I(e)) {
        var o = ie(e);
        if (o.position === "fixed")
            return null
    }
    var n = ot(e);
    for (ht(n) && (n = n.host); I(n) && ["html", "body"].indexOf(re(n)) < 0; ) {
        var i = ie(n);
        if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
            return n;
        n = n.parentNode
    }
    return null
}
function Ie(e) {
    for (var t = F(e), r = It(e); r && Yr(r) && ie(r).position === "static"; )
        r = It(r);
    return r && (re(r) === "html" || re(r) === "body" && ie(r).position === "static") ? t : r || Gr(e) || t
}
function yt(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}
function ke(e, t, r) {
    return he(e, et(t, r))
}
function Kr(e, t, r) {
    var o = ke(e, t, r);
    return o > r ? r : o
}
function nr() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}
function ir(e) {
    return Object.assign({}, nr(), e)
}
function ar(e, t) {
    return t.reduce(function(r, o) {
        return r[o] = e,
        r
    }, {})
}
var Jr = function(t, r) {
    return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
        placement: r.placement
    })) : t,
    ir(typeof t != "number" ? t : ar(t, Fe))
};
function Qr(e) {
    var t, r = e.state, o = e.name, n = e.options, i = r.elements.arrow, l = r.modifiersData.popperOffsets, s = te(r.placement), a = yt(s), c = [W, V].indexOf(s) >= 0, p = c ? "height" : "width";
    if (!(!i || !l)) {
        var v = Jr(n.padding, r)
          , y = gt(i)
          , f = a === "y" ? S : W
          , P = a === "y" ? H : V
          , d = r.rects.reference[p] + r.rects.reference[a] - l[a] - r.rects.popper[p]
          , m = l[a] - r.rects.reference[a]
          , x = Ie(i)
          , E = x ? a === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0
          , b = d / 2 - m / 2
          , u = v[f]
          , g = E - y[p] - v[P]
          , h = E / 2 - y[p] / 2 + b
          , O = ke(u, h, g)
          , $ = a;
        r.modifiersData[o] = (t = {},
        t[$] = O,
        t.centerOffset = O - h,
        t)
    }
}
function Zr(e) {
    var t = e.state
      , r = e.options
      , o = r.element
      , n = o === void 0 ? "[data-popper-arrow]" : o;
    n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n),
    !n) || or(t.elements.popper, n) && (t.elements.arrow = n))
}
const eo = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Qr,
    effect: Zr,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};
function Ce(e) {
    return e.split("-")[1]
}
var to = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};
function ro(e, t) {
    var r = e.x
      , o = e.y
      , n = t.devicePixelRatio || 1;
    return {
        x: Re(r * n) / n || 0,
        y: Re(o * n) / n || 0
    }
}
function Ht(e) {
    var t, r = e.popper, o = e.popperRect, n = e.placement, i = e.variation, l = e.offsets, s = e.position, a = e.gpuAcceleration, c = e.adaptive, p = e.roundOffsets, v = e.isFixed, y = l.x, f = y === void 0 ? 0 : y, P = l.y, d = P === void 0 ? 0 : P, m = typeof p == "function" ? p({
        x: f,
        y: d
    }) : {
        x: f,
        y: d
    };
    f = m.x,
    d = m.y;
    var x = l.hasOwnProperty("x")
      , E = l.hasOwnProperty("y")
      , b = W
      , u = S
      , g = window;
    if (c) {
        var h = Ie(r)
          , O = "clientHeight"
          , $ = "clientWidth";
        if (h === F(r) && (h = ce(r),
        ie(h).position !== "static" && s === "absolute" && (O = "scrollHeight",
        $ = "scrollWidth")),
        h = h,
        n === S || (n === W || n === V) && i === We) {
            u = H;
            var C = v && h === g && g.visualViewport ? g.visualViewport.height : h[O];
            d -= C - o.height,
            d *= a ? 1 : -1
        }
        if (n === W || (n === S || n === H) && i === We) {
            b = V;
            var T = v && h === g && g.visualViewport ? g.visualViewport.width : h[$];
            f -= T - o.width,
            f *= a ? 1 : -1
        }
    }
    var D = Object.assign({
        position: s
    }, c && to)
      , L = p === !0 ? ro({
        x: f,
        y: d
    }, F(r)) : {
        x: f,
        y: d
    };
    if (f = L.x,
    d = L.y,
    a) {
        var j;
        return Object.assign({}, D, (j = {},
        j[u] = E ? "0" : "",
        j[b] = x ? "0" : "",
        j.transform = (g.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + d + "px)" : "translate3d(" + f + "px, " + d + "px, 0)",
        j))
    }
    return Object.assign({}, D, (t = {},
    t[u] = E ? d + "px" : "",
    t[b] = x ? f + "px" : "",
    t.transform = "",
    t))
}
function oo(e) {
    var t = e.state
      , r = e.options
      , o = r.gpuAcceleration
      , n = o === void 0 ? !0 : o
      , i = r.adaptive
      , l = i === void 0 ? !0 : i
      , s = r.roundOffsets
      , a = s === void 0 ? !0 : s
      , c = {
        placement: te(t.placement),
        variation: Ce(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: n,
        isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ht(Object.assign({}, c, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: l,
        roundOffsets: a
    })))),
    t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ht(Object.assign({}, c, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: a
    })))),
    t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
const no = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: oo,
    data: {}
};
var Ke = {
    passive: !0
};
function io(e) {
    var t = e.state
      , r = e.instance
      , o = e.options
      , n = o.scroll
      , i = n === void 0 ? !0 : n
      , l = o.resize
      , s = l === void 0 ? !0 : l
      , a = F(t.elements.popper)
      , c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && c.forEach(function(p) {
        p.addEventListener("scroll", r.update, Ke)
    }),
    s && a.addEventListener("resize", r.update, Ke),
    function() {
        i && c.forEach(function(p) {
            p.removeEventListener("scroll", r.update, Ke)
        }),
        s && a.removeEventListener("resize", r.update, Ke)
    }
}
const ao = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: io,
    data: {}
};
var so = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function Ze(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return so[t]
    })
}
var po = {
    start: "end",
    end: "start"
};
function Vt(e) {
    return e.replace(/start|end/g, function(t) {
        return po[t]
    })
}
function bt(e) {
    var t = F(e)
      , r = t.pageXOffset
      , o = t.pageYOffset;
    return {
        scrollLeft: r,
        scrollTop: o
    }
}
function wt(e) {
    return Ee(ce(e)).left + bt(e).scrollLeft
}
function lo(e, t) {
    var r = F(e)
      , o = ce(e)
      , n = r.visualViewport
      , i = o.clientWidth
      , l = o.clientHeight
      , s = 0
      , a = 0;
    if (n) {
        i = n.width,
        l = n.height;
        var c = rr();
        (c || !c && t === "fixed") && (s = n.offsetLeft,
        a = n.offsetTop)
    }
    return {
        width: i,
        height: l,
        x: s + wt(e),
        y: a
    }
}
function co(e) {
    var t, r = ce(e), o = bt(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, i = he(r.scrollWidth, r.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), l = he(r.scrollHeight, r.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), s = -o.scrollLeft + wt(e), a = -o.scrollTop;
    return ie(n || r).direction === "rtl" && (s += he(r.clientWidth, n ? n.clientWidth : 0) - i),
    {
        width: i,
        height: l,
        x: s,
        y: a
    }
}
function xt(e) {
    var t = ie(e)
      , r = t.overflow
      , o = t.overflowX
      , n = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + n + o)
}
function sr(e) {
    return ["html", "body", "#document"].indexOf(re(e)) >= 0 ? e.ownerDocument.body : I(e) && xt(e) ? e : sr(ot(e))
}
function Se(e, t) {
    var r;
    t === void 0 && (t = []);
    var o = sr(e)
      , n = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = F(o)
      , l = n ? [i].concat(i.visualViewport || [], xt(o) ? o : []) : o
      , s = t.concat(l);
    return n ? s : s.concat(Se(ot(l)))
}
function dt(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}
function uo(e, t) {
    var r = Ee(e, !1, t === "fixed");
    return r.top = r.top + e.clientTop,
    r.left = r.left + e.clientLeft,
    r.bottom = r.top + e.clientHeight,
    r.right = r.left + e.clientWidth,
    r.width = e.clientWidth,
    r.height = e.clientHeight,
    r.x = r.left,
    r.y = r.top,
    r
}
function Ut(e, t, r) {
    return t === er ? dt(lo(e, r)) : ge(t) ? uo(t, r) : dt(co(ce(e)))
}
function fo(e) {
    var t = Se(ot(e))
      , r = ["absolute", "fixed"].indexOf(ie(e).position) >= 0
      , o = r && I(e) ? Ie(e) : e;
    return ge(o) ? t.filter(function(n) {
        return ge(n) && or(n, o) && re(n) !== "body"
    }) : []
}
function vo(e, t, r, o) {
    var n = t === "clippingParents" ? fo(e) : [].concat(t)
      , i = [].concat(n, [r])
      , l = i[0]
      , s = i.reduce(function(a, c) {
        var p = Ut(e, c, o);
        return a.top = he(p.top, a.top),
        a.right = et(p.right, a.right),
        a.bottom = et(p.bottom, a.bottom),
        a.left = he(p.left, a.left),
        a
    }, Ut(e, l, o));
    return s.width = s.right - s.left,
    s.height = s.bottom - s.top,
    s.x = s.left,
    s.y = s.top,
    s
}
function pr(e) {
    var t = e.reference, r = e.element, o = e.placement, n = o ? te(o) : null, i = o ? Ce(o) : null, l = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, a;
    switch (n) {
    case S:
        a = {
            x: l,
            y: t.y - r.height
        };
        break;
    case H:
        a = {
            x: l,
            y: t.y + t.height
        };
        break;
    case V:
        a = {
            x: t.x + t.width,
            y: s
        };
        break;
    case W:
        a = {
            x: t.x - r.width,
            y: s
        };
        break;
    default:
        a = {
            x: t.x,
            y: t.y
        }
    }
    var c = n ? yt(n) : null;
    if (c != null) {
        var p = c === "y" ? "height" : "width";
        switch (i) {
        case Te:
            a[c] = a[c] - (t[p] / 2 - r[p] / 2);
            break;
        case We:
            a[c] = a[c] + (t[p] / 2 - r[p] / 2);
            break
        }
    }
    return a
}
function Ne(e, t) {
    t === void 0 && (t = {});
    var r = t
      , o = r.placement
      , n = o === void 0 ? e.placement : o
      , i = r.strategy
      , l = i === void 0 ? e.strategy : i
      , s = r.boundary
      , a = s === void 0 ? Br : s
      , c = r.rootBoundary
      , p = c === void 0 ? er : c
      , v = r.elementContext
      , y = v === void 0 ? Be : v
      , f = r.altBoundary
      , P = f === void 0 ? !1 : f
      , d = r.padding
      , m = d === void 0 ? 0 : d
      , x = ir(typeof m != "number" ? m : ar(m, Fe))
      , E = y === Be ? Lr : Be
      , b = e.rects.popper
      , u = e.elements[P ? E : y]
      , g = vo(ge(u) ? u : u.contextElement || ce(e.elements.popper), a, p, l)
      , h = Ee(e.elements.reference)
      , O = pr({
        reference: h,
        element: b,
        strategy: "absolute",
        placement: n
    })
      , $ = dt(Object.assign({}, b, O))
      , C = y === Be ? $ : h
      , T = {
        top: g.top - C.top + x.top,
        bottom: C.bottom - g.bottom + x.bottom,
        left: g.left - C.left + x.left,
        right: C.right - g.right + x.right
    }
      , D = e.modifiersData.offset;
    if (y === Be && D) {
        var L = D[n];
        Object.keys(T).forEach(function(j) {
            var U = [V, H].indexOf(j) >= 0 ? 1 : -1
              , _ = [S, H].indexOf(j) >= 0 ? "y" : "x";
            T[j] += L[_] * U
        })
    }
    return T
}
function mo(e, t) {
    t === void 0 && (t = {});
    var r = t
      , o = r.placement
      , n = r.boundary
      , i = r.rootBoundary
      , l = r.padding
      , s = r.flipVariations
      , a = r.allowedAutoPlacements
      , c = a === void 0 ? tr : a
      , p = Ce(o)
      , v = p ? s ? Ft : Ft.filter(function(P) {
        return Ce(P) === p
    }) : Fe
      , y = v.filter(function(P) {
        return c.indexOf(P) >= 0
    });
    y.length === 0 && (y = v);
    var f = y.reduce(function(P, d) {
        return P[d] = Ne(e, {
            placement: d,
            boundary: n,
            rootBoundary: i,
            padding: l
        })[te(d)],
        P
    }, {});
    return Object.keys(f).sort(function(P, d) {
        return f[P] - f[d]
    })
}
function ho(e) {
    if (te(e) === mt)
        return [];
    var t = Ze(e);
    return [Vt(e), t, Vt(t)]
}
function go(e) {
    var t = e.state
      , r = e.options
      , o = e.name;
    if (!t.modifiersData[o]._skip) {
        for (var n = r.mainAxis, i = n === void 0 ? !0 : n, l = r.altAxis, s = l === void 0 ? !0 : l, a = r.fallbackPlacements, c = r.padding, p = r.boundary, v = r.rootBoundary, y = r.altBoundary, f = r.flipVariations, P = f === void 0 ? !0 : f, d = r.allowedAutoPlacements, m = t.options.placement, x = te(m), E = x === m, b = a || (E || !P ? [Ze(m)] : ho(m)), u = [m].concat(b).reduce(function(oe, K) {
            return oe.concat(te(K) === mt ? mo(t, {
                placement: K,
                boundary: p,
                rootBoundary: v,
                padding: c,
                flipVariations: P,
                allowedAutoPlacements: d
            }) : K)
        }, []), g = t.rects.reference, h = t.rects.popper, O = new Map, $ = !0, C = u[0], T = 0; T < u.length; T++) {
            var D = u[T]
              , L = te(D)
              , j = Ce(D) === Te
              , U = [S, H].indexOf(L) >= 0
              , _ = U ? "width" : "height"
              , M = Ne(t, {
                placement: D,
                boundary: p,
                rootBoundary: v,
                altBoundary: y,
                padding: c
            })
              , B = U ? j ? V : W : j ? H : S;
            g[_] > h[_] && (B = Ze(B));
            var G = Ze(B)
              , z = [];
            if (i && z.push(M[L] <= 0),
            s && z.push(M[B] <= 0, M[G] <= 0),
            z.every(function(oe) {
                return oe
            })) {
                C = D,
                $ = !1;
                break
            }
            O.set(D, z)
        }
        if ($)
            for (var ye = P ? 3 : 1, be = function(K) {
                var ae = u.find(function(se) {
                    var k = O.get(se);
                    if (k)
                        return k.slice(0, K).every(function(q) {
                            return q
                        })
                });
                if (ae)
                    return C = ae,
                    "break"
            }, ue = ye; ue > 0; ue--) {
                var fe = be(ue);
                if (fe === "break")
                    break
            }
        t.placement !== C && (t.modifiersData[o]._skip = !0,
        t.placement = C,
        t.reset = !0)
    }
}
const yo = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: go,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};
function _t(e, t, r) {
    return r === void 0 && (r = {
        x: 0,
        y: 0
    }),
    {
        top: e.top - t.height - r.y,
        right: e.right - t.width + r.x,
        bottom: e.bottom - t.height + r.y,
        left: e.left - t.width - r.x
    }
}
function zt(e) {
    return [S, V, H, W].some(function(t) {
        return e[t] >= 0
    })
}
function bo(e) {
    var t = e.state
      , r = e.name
      , o = t.rects.reference
      , n = t.rects.popper
      , i = t.modifiersData.preventOverflow
      , l = Ne(t, {
        elementContext: "reference"
    })
      , s = Ne(t, {
        altBoundary: !0
    })
      , a = _t(l, o)
      , c = _t(s, n, i)
      , p = zt(a)
      , v = zt(c);
    t.modifiersData[r] = {
        referenceClippingOffsets: a,
        popperEscapeOffsets: c,
        isReferenceHidden: p,
        hasPopperEscaped: v
    },
    t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": p,
        "data-popper-escaped": v
    })
}
const wo = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: bo
};
function xo(e, t, r) {
    var o = te(e)
      , n = [W, S].indexOf(o) >= 0 ? -1 : 1
      , i = typeof r == "function" ? r(Object.assign({}, t, {
        placement: e
    })) : r
      , l = i[0]
      , s = i[1];
    return l = l || 0,
    s = (s || 0) * n,
    [W, V].indexOf(o) >= 0 ? {
        x: s,
        y: l
    } : {
        x: l,
        y: s
    }
}
function Po(e) {
    var t = e.state
      , r = e.options
      , o = e.name
      , n = r.offset
      , i = n === void 0 ? [0, 0] : n
      , l = tr.reduce(function(p, v) {
        return p[v] = xo(v, t.rects, i),
        p
    }, {})
      , s = l[t.placement]
      , a = s.x
      , c = s.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a,
    t.modifiersData.popperOffsets.y += c),
    t.modifiersData[o] = l
}
const Oo = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Po
};
function To(e) {
    var t = e.state
      , r = e.name;
    t.modifiersData[r] = pr({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
const Ro = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: To,
    data: {}
};
function Eo(e) {
    return e === "x" ? "y" : "x"
}
function Co(e) {
    var t = e.state
      , r = e.options
      , o = e.name
      , n = r.mainAxis
      , i = n === void 0 ? !0 : n
      , l = r.altAxis
      , s = l === void 0 ? !1 : l
      , a = r.boundary
      , c = r.rootBoundary
      , p = r.altBoundary
      , v = r.padding
      , y = r.tether
      , f = y === void 0 ? !0 : y
      , P = r.tetherOffset
      , d = P === void 0 ? 0 : P
      , m = Ne(t, {
        boundary: a,
        rootBoundary: c,
        padding: v,
        altBoundary: p
    })
      , x = te(t.placement)
      , E = Ce(t.placement)
      , b = !E
      , u = yt(x)
      , g = Eo(u)
      , h = t.modifiersData.popperOffsets
      , O = t.rects.reference
      , $ = t.rects.popper
      , C = typeof d == "function" ? d(Object.assign({}, t.rects, {
        placement: t.placement
    })) : d
      , T = typeof C == "number" ? {
        mainAxis: C,
        altAxis: C
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, C)
      , D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
      , L = {
        x: 0,
        y: 0
    };
    if (h) {
        if (i) {
            var j, U = u === "y" ? S : W, _ = u === "y" ? H : V, M = u === "y" ? "height" : "width", B = h[u], G = B + m[U], z = B - m[_], ye = f ? -$[M] / 2 : 0, be = E === Te ? O[M] : $[M], ue = E === Te ? -$[M] : -O[M], fe = t.elements.arrow, oe = f && fe ? gt(fe) : {
                width: 0,
                height: 0
            }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : nr(), ae = K[U], se = K[_], k = ke(0, O[M], oe[M]), q = b ? O[M] / 2 - ye - k - ae - T.mainAxis : be - k - ae - T.mainAxis, we = b ? -O[M] / 2 + ye + k + se + T.mainAxis : ue + k + se + T.mainAxis, J = t.elements.arrow && Ie(t.elements.arrow), nt = J ? u === "y" ? J.clientTop || 0 : J.clientLeft || 0 : 0, He = (j = D == null ? void 0 : D[u]) != null ? j : 0, Ve = B + q - He - nt, Q = B + we - He, xe = ke(f ? et(G, Ve) : G, B, f ? he(z, Q) : z);
            h[u] = xe,
            L[u] = xe - B
        }
        if (s) {
            var Ue, de = u === "x" ? S : W, _e = u === "x" ? H : V, X = h[g], Pe = g === "y" ? "height" : "width", ve = X + m[de], Oe = X - m[_e], pe = [S, W].indexOf(x) !== -1, me = (Ue = D == null ? void 0 : D[g]) != null ? Ue : 0, Z = pe ? ve : X - O[Pe] - $[Pe] - me + T.altAxis, Ae = pe ? X + O[Pe] + $[Pe] - me - T.altAxis : Oe, ze = f && pe ? Kr(Z, X, Ae) : ke(f ? Z : ve, X, f ? Ae : Oe);
            h[g] = ze,
            L[g] = ze - X
        }
        t.modifiersData[o] = L
    }
}
const Ao = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Co,
    requiresIfExists: ["offset"]
};
function $o(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}
function Mo(e) {
    return e === F(e) || !I(e) ? bt(e) : $o(e)
}
function Do(e) {
    var t = e.getBoundingClientRect()
      , r = Re(t.width) / e.offsetWidth || 1
      , o = Re(t.height) / e.offsetHeight || 1;
    return r !== 1 || o !== 1
}
function jo(e, t, r) {
    r === void 0 && (r = !1);
    var o = I(t)
      , n = I(t) && Do(t)
      , i = ce(t)
      , l = Ee(e, n, r)
      , s = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , a = {
        x: 0,
        y: 0
    };
    return (o || !o && !r) && ((re(t) !== "body" || xt(i)) && (s = Mo(t)),
    I(t) ? (a = Ee(t, !0),
    a.x += t.clientLeft,
    a.y += t.clientTop) : i && (a.x = wt(i))),
    {
        x: l.left + s.scrollLeft - a.x,
        y: l.top + s.scrollTop - a.y,
        width: l.width,
        height: l.height
    }
}
function Bo(e) {
    var t = new Map
      , r = new Set
      , o = [];
    e.forEach(function(i) {
        t.set(i.name, i)
    });
    function n(i) {
        r.add(i.name);
        var l = [].concat(i.requires || [], i.requiresIfExists || []);
        l.forEach(function(s) {
            if (!r.has(s)) {
                var a = t.get(s);
                a && n(a)
            }
        }),
        o.push(i)
    }
    return e.forEach(function(i) {
        r.has(i.name) || n(i)
    }),
    o
}
function Lo(e) {
    var t = Bo(e);
    return _r.reduce(function(r, o) {
        return r.concat(t.filter(function(n) {
            return n.phase === o
        }))
    }, [])
}
function ko(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(r) {
            Promise.resolve().then(function() {
                t = void 0,
                r(e())
            })
        }
        )),
        t
    }
}
function So(e) {
    var t = e.reduce(function(r, o) {
        var n = r[o.name];
        return r[o.name] = n ? Object.assign({}, n, o, {
            options: Object.assign({}, n.options, o.options),
            data: Object.assign({}, n.data, o.data)
        }) : o,
        r
    }, {});
    return Object.keys(t).map(function(r) {
        return t[r]
    })
}
var qt = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function Xt() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return !t.some(function(o) {
        return !(o && typeof o.getBoundingClientRect == "function")
    })
}
function Wo(e) {
    e === void 0 && (e = {});
    var t = e
      , r = t.defaultModifiers
      , o = r === void 0 ? [] : r
      , n = t.defaultOptions
      , i = n === void 0 ? qt : n;
    return function(s, a, c) {
        c === void 0 && (c = i);
        var p = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, qt, i),
            modifiersData: {},
            elements: {
                reference: s,
                popper: a
            },
            attributes: {},
            styles: {}
        }
          , v = []
          , y = !1
          , f = {
            state: p,
            setOptions: function(x) {
                var E = typeof x == "function" ? x(p.options) : x;
                d(),
                p.options = Object.assign({}, i, p.options, E),
                p.scrollParents = {
                    reference: ge(s) ? Se(s) : s.contextElement ? Se(s.contextElement) : [],
                    popper: Se(a)
                };
                var b = Lo(So([].concat(o, p.options.modifiers)));
                return p.orderedModifiers = b.filter(function(u) {
                    return u.enabled
                }),
                P(),
                f.update()
            },
            forceUpdate: function() {
                if (!y) {
                    var x = p.elements
                      , E = x.reference
                      , b = x.popper;
                    if (Xt(E, b)) {
                        p.rects = {
                            reference: jo(E, Ie(b), p.options.strategy === "fixed"),
                            popper: gt(b)
                        },
                        p.reset = !1,
                        p.placement = p.options.placement,
                        p.orderedModifiers.forEach(function(T) {
                            return p.modifiersData[T.name] = Object.assign({}, T.data)
                        });
                        for (var u = 0; u < p.orderedModifiers.length; u++) {
                            if (p.reset === !0) {
                                p.reset = !1,
                                u = -1;
                                continue
                            }
                            var g = p.orderedModifiers[u]
                              , h = g.fn
                              , O = g.options
                              , $ = O === void 0 ? {} : O
                              , C = g.name;
                            typeof h == "function" && (p = h({
                                state: p,
                                options: $,
                                name: C,
                                instance: f
                            }) || p)
                        }
                    }
                }
            },
            update: ko(function() {
                return new Promise(function(m) {
                    f.forceUpdate(),
                    m(p)
                }
                )
            }),
            destroy: function() {
                d(),
                y = !0
            }
        };
        if (!Xt(s, a))
            return f;
        f.setOptions(c).then(function(m) {
            !y && c.onFirstUpdate && c.onFirstUpdate(m)
        });
        function P() {
            p.orderedModifiers.forEach(function(m) {
                var x = m.name
                  , E = m.options
                  , b = E === void 0 ? {} : E
                  , u = m.effect;
                if (typeof u == "function") {
                    var g = u({
                        state: p,
                        name: x,
                        instance: f,
                        options: b
                    })
                      , h = function() {};
                    v.push(g || h)
                }
            })
        }
        function d() {
            v.forEach(function(m) {
                return m()
            }),
            v = []
        }
        return f
    }
}
var No = [ao, Ro, no, Xr, Oo, yo, Ao, eo, wo]
  , Fo = Wo({
    defaultModifiers: No
});
function Io(e) {
    return Yt("MuiPopper", e)
}
Gt("MuiPopper", ["root"]);
const Ho = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"]
  , Vo = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Uo(e, t) {
    if (t === "ltr")
        return e;
    switch (e) {
    case "bottom-end":
        return "bottom-start";
    case "bottom-start":
        return "bottom-end";
    case "top-end":
        return "top-start";
    case "top-start":
        return "top-end";
    default:
        return e
    }
}
function vt(e) {
    return typeof e == "function" ? e() : e
}
function _o(e) {
    return e.nodeType !== void 0
}
const zo = ()=>Kt({
    root: ["root"]
}, jr(Io))
  , qo = {}
  , Xo = R.forwardRef(function(t, r) {
    var o;
    const {anchorEl: n, children: i, direction: l, disablePortal: s, modifiers: a, open: c, placement: p, popperOptions: v, popperRef: y, slotProps: f={}, slots: P={}, TransitionProps: d} = t
      , m = tt(t, Ho)
      , x = R.useRef(null)
      , E = ut(x, r)
      , b = R.useRef(null)
      , u = ut(b, y)
      , g = R.useRef(u);
    Wt(()=>{
        g.current = u
    }
    , [u]),
    R.useImperativeHandle(y, ()=>b.current, []);
    const h = Uo(p, l)
      , [O,$] = R.useState(h)
      , [C,T] = R.useState(vt(n));
    R.useEffect(()=>{
        b.current && b.current.forceUpdate()
    }
    ),
    R.useEffect(()=>{
        n && T(vt(n))
    }
    , [n]),
    Wt(()=>{
        if (!C || !c)
            return;
        const _ = G=>{
            $(G.placement)
        }
        ;
        let M = [{
            name: "preventOverflow",
            options: {
                altBoundary: s
            }
        }, {
            name: "flip",
            options: {
                altBoundary: s
            }
        }, {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({state: G})=>{
                _(G)
            }
        }];
        a != null && (M = M.concat(a)),
        v && v.modifiers != null && (M = M.concat(v.modifiers));
        const B = Fo(C, x.current, A({
            placement: h
        }, v, {
            modifiers: M
        }));
        return g.current(B),
        ()=>{
            B.destroy(),
            g.current(null)
        }
    }
    , [C, s, a, c, v, h]);
    const D = {
        placement: O
    };
    d !== null && (D.TransitionProps = d);
    const L = zo()
      , j = (o = P.root) != null ? o : "div"
      , U = Pr({
        elementType: j,
        externalSlotProps: f.root,
        externalForwardedProps: m,
        additionalProps: {
            role: "tooltip",
            ref: E
        },
        ownerState: t,
        className: L.root
    });
    return ee.jsx(j, A({}, U, {
        children: typeof i == "function" ? i(D) : i
    }))
})
  , Yo = R.forwardRef(function(t, r) {
    const {anchorEl: o, children: n, container: i, direction: l="ltr", disablePortal: s=!1, keepMounted: a=!1, modifiers: c, open: p, placement: v="bottom", popperOptions: y=qo, popperRef: f, style: P, transition: d=!1, slotProps: m={}, slots: x={}} = t
      , E = tt(t, Vo)
      , [b,u] = R.useState(!0)
      , g = ()=>{
        u(!1)
    }
      , h = ()=>{
        u(!0)
    }
    ;
    if (!a && !p && (!d || b))
        return null;
    let O;
    if (i)
        O = i;
    else if (o) {
        const T = vt(o);
        O = T && _o(T) ? St(T).body : St(null).body
    }
    const $ = !p && a && (!d || b) ? "none" : void 0
      , C = d ? {
        in: p,
        onEnter: g,
        onExited: h
    } : void 0;
    return ee.jsx(Cr, {
        disablePortal: s,
        container: O,
        children: ee.jsx(Xo, A({
            anchorEl: o,
            direction: l,
            disablePortal: s,
            modifiers: c,
            ref: r,
            open: d ? !b : p,
            placement: v,
            popperOptions: y,
            popperRef: f,
            slotProps: m,
            slots: x
        }, E, {
            style: A({
                position: "fixed",
                top: 0,
                left: 0,
                display: $
            }, P),
            TransitionProps: C,
            children: n
        }))
    })
})
  , Go = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"]
  , Ko = rt(Yo, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e,t)=>t.root
})({})
  , Jo = R.forwardRef(function(t, r) {
    var o;
    const n = Or()
      , i = Jt({
        props: t,
        name: "MuiPopper"
    })
      , {anchorEl: l, component: s, components: a, componentsProps: c, container: p, disablePortal: v, keepMounted: y, modifiers: f, open: P, placement: d, popperOptions: m, popperRef: x, transition: E, slots: b, slotProps: u} = i
      , g = tt(i, Go)
      , h = (o = b == null ? void 0 : b.root) != null ? o : a == null ? void 0 : a.Root
      , O = A({
        anchorEl: l,
        container: p,
        disablePortal: v,
        keepMounted: y,
        modifiers: f,
        open: P,
        placement: d,
        popperOptions: m,
        popperRef: x,
        transition: E
    }, g);
    return ee.jsx(Ko, A({
        as: s,
        direction: n == null ? void 0 : n.direction,
        slots: {
            root: h
        },
        slotProps: u ?? c
    }, O, {
        ref: r
    }))
})
  , lr = Jo;
function Qo(e) {
    return Yt("MuiTooltip", e)
}
const Zo = Gt("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"])
  , le = Zo
  , en = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function tn(e) {
    return Math.round(e * 1e5) / 1e5
}
const rn = e=>{
    const {classes: t, disableInteractive: r, arrow: o, touch: n, placement: i} = e
      , l = {
        popper: ["popper", !r && "popperInteractive", o && "popperArrow"],
        tooltip: ["tooltip", o && "tooltipArrow", n && "touch", `tooltipPlacement ${Qt(i.split("-")[0])}`],
        arrow: ["arrow"]
    };
    return Kt(l, Qo, t)
}
  , on = rt(lr, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e,t)=>{
        const {ownerState: r} = e;
        return [t.popper, !r.disableInteractive && t.popperInteractive, r.arrow && t.popperArrow, !r.open && t.popperClose]
    }
})(({theme: e, ownerState: t, open: r})=>A({
    zIndex: (e.vars || e).zIndex.tooltip,
    pointerEvents: "none"
}, !t.disableInteractive && {
    pointerEvents: "auto"
}, !r && {
    pointerEvents: "none"
}, t.arrow && {
    [`&[data-popper-placement*="bottom"] .${le.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
            transformOrigin: "0 100%"
        }
    },
    [`&[data-popper-placement*="top"] .${le.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
            transformOrigin: "100% 0"
        }
    },
    [`&[data-popper-placement*="right"] .${le.arrow}`]: A({}, t.isRtl ? {
        right: 0,
        marginRight: "-0.71em"
    } : {
        left: 0,
        marginLeft: "-0.71em"
    }, {
        height: "1em",
        width: "0.71em",
        "&::before": {
            transformOrigin: "100% 100%"
        }
    }),
    [`&[data-popper-placement*="left"] .${le.arrow}`]: A({}, t.isRtl ? {
        left: 0,
        marginLeft: "-0.71em"
    } : {
        right: 0,
        marginRight: "-0.71em"
    }, {
        height: "1em",
        width: "0.71em",
        "&::before": {
            transformOrigin: "0 0"
        }
    })
}))
  , nn = rt("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e,t)=>{
        const {ownerState: r} = e;
        return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement ${Qt(r.placement.split("-")[0])}`]]
    }
})(({theme: e, ownerState: t})=>A({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Zt(e.palette.grey[700], .92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium
}, t.arrow && {
    position: "relative",
    margin: 0
}, t.touch && {
    padding: "8px 16px",
    fontSize: e.typography.pxToRem(14),
    lineHeight: `${tn(16 / 14)}em`,
    fontWeight: e.typography.fontWeightRegular
}, {
    [`.${le.popper}[data-popper-placement*="left"] &`]: A({
        transformOrigin: "right center"
    }, t.isRtl ? A({
        marginLeft: "14px"
    }, t.touch && {
        marginLeft: "24px"
    }) : A({
        marginRight: "14px"
    }, t.touch && {
        marginRight: "24px"
    })),
    [`.${le.popper}[data-popper-placement*="right"] &`]: A({
        transformOrigin: "left center"
    }, t.isRtl ? A({
        marginRight: "14px"
    }, t.touch && {
        marginRight: "24px"
    }) : A({
        marginLeft: "14px"
    }, t.touch && {
        marginLeft: "24px"
    })),
    [`.${le.popper}[data-popper-placement*="top"] &`]: A({
        transformOrigin: "center bottom",
        marginBottom: "14px"
    }, t.touch && {
        marginBottom: "24px"
    }),
    [`.${le.popper}[data-popper-placement*="bottom"] &`]: A({
        transformOrigin: "center top",
        marginTop: "14px"
    }, t.touch && {
        marginTop: "24px"
    })
}))
  , an = rt("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e,t)=>t.arrow
})(({theme: e})=>({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : Zt(e.palette.grey[700], .9),
    "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: "currentColor",
        transform: "rotate(45deg)"
    }
}));
let Je = !1
  , ct = null
  , Le = {
    x: 0,
    y: 0
};
function Qe(e, t) {
    return r=>{
        t && t(r),
        e(r)
    }
}
const sn = R.forwardRef(function(t, r) {
    var o, n, i, l, s, a, c, p, v, y, f, P, d, m, x, E, b, u, g;
    const h = Jt({
        props: t,
        name: "MuiTooltip"
    })
      , {arrow: O=!1, children: $, components: C={}, componentsProps: T={}, describeChild: D=!1, disableFocusListener: L=!1, disableHoverListener: j=!1, disableInteractive: U=!1, disableTouchListener: _=!1, enterDelay: M=100, enterNextDelay: B=0, enterTouchDelay: G=700, followCursor: z=!1, id: ye, leaveDelay: be=0, leaveTouchDelay: ue=1500, onClose: fe, onOpen: oe, open: K, placement: ae="bottom", PopperComponent: se, PopperProps: k={}, slotProps: q={}, slots: we={}, title: J, TransitionComponent: nt=Nt, TransitionProps: He} = h
      , Ve = tt(h, en)
      , Q = R.isValidElement($) ? $ : ee.jsx("span", {
        children: $
    })
      , xe = Tr()
      , Ue = xe.direction === "rtl"
      , [de,_e] = R.useState()
      , [X,Pe] = R.useState(null)
      , ve = R.useRef(!1)
      , Oe = U || z
      , pe = R.useRef()
      , me = R.useRef()
      , Z = R.useRef()
      , Ae = R.useRef()
      , [ze,Pt] = Ar({
        controlled: K,
        default: !1,
        name: "Tooltip",
        state: "open"
    });
    let ne = ze;
    const it = $r(ye)
      , $e = R.useRef()
      , qe = R.useCallback(()=>{
        $e.current !== void 0 && (document.body.style.WebkitUserSelect = $e.current,
        $e.current = void 0),
        clearTimeout(Ae.current)
    }
    , []);
    R.useEffect(()=>()=>{
        clearTimeout(pe.current),
        clearTimeout(me.current),
        clearTimeout(Z.current),
        qe()
    }
    , [qe]);
    const Ot = w=>{
        clearTimeout(ct),
        Je = !0,
        Pt(!0),
        oe && !ne && oe(w)
    }
      , Xe = Rr(w=>{
        clearTimeout(ct),
        ct = setTimeout(()=>{
            Je = !1
        }
        , 800 + be),
        Pt(!1),
        fe && ne && fe(w),
        clearTimeout(pe.current),
        pe.current = setTimeout(()=>{
            ve.current = !1
        }
        , xe.transitions.duration.shortest)
    }
    )
      , at = w=>{
        ve.current && w.type !== "touchstart" || (de && de.removeAttribute("title"),
        clearTimeout(me.current),
        clearTimeout(Z.current),
        M || Je && B ? me.current = setTimeout(()=>{
            Ot(w)
        }
        , Je ? B : M) : Ot(w))
    }
      , Tt = w=>{
        clearTimeout(me.current),
        clearTimeout(Z.current),
        Z.current = setTimeout(()=>{
            Xe(w)
        }
        , be)
    }
      , {isFocusVisibleRef: Rt, onBlur: cr, onFocus: ur, ref: fr} = Er()
      , [,Et] = R.useState(!1)
      , Ct = w=>{
        cr(w),
        Rt.current === !1 && (Et(!1),
        Tt(w))
    }
      , At = w=>{
        de || _e(w.currentTarget),
        ur(w),
        Rt.current === !0 && (Et(!0),
        at(w))
    }
      , $t = w=>{
        ve.current = !0;
        const N = Q.props;
        N.onTouchStart && N.onTouchStart(w)
    }
      , Mt = at
      , Dt = Tt
      , dr = w=>{
        $t(w),
        clearTimeout(Z.current),
        clearTimeout(pe.current),
        qe(),
        $e.current = document.body.style.WebkitUserSelect,
        document.body.style.WebkitUserSelect = "none",
        Ae.current = setTimeout(()=>{
            document.body.style.WebkitUserSelect = $e.current,
            at(w)
        }
        , G)
    }
      , vr = w=>{
        Q.props.onTouchEnd && Q.props.onTouchEnd(w),
        qe(),
        clearTimeout(Z.current),
        Z.current = setTimeout(()=>{
            Xe(w)
        }
        , ue)
    }
    ;
    R.useEffect(()=>{
        if (!ne)
            return;
        function w(N) {
            (N.key === "Escape" || N.key === "Esc") && Xe(N)
        }
        return document.addEventListener("keydown", w),
        ()=>{
            document.removeEventListener("keydown", w)
        }
    }
    , [Xe, ne]);
    const mr = ut(Q.ref, fr, _e, r);
    !J && J !== 0 && (ne = !1);
    const st = R.useRef()
      , hr = w=>{
        const N = Q.props;
        N.onMouseMove && N.onMouseMove(w),
        Le = {
            x: w.clientX,
            y: w.clientY
        },
        st.current && st.current.update()
    }
      , Me = {}
      , pt = typeof J == "string";
    D ? (Me.title = !ne && pt && !j ? J : null,
    Me["aria-describedby"] = ne ? it : null) : (Me["aria-label"] = pt ? J : null,
    Me["aria-labelledby"] = ne && !pt ? it : null);
    const Y = A({}, Me, Ve, Q.props, {
        className: Ye(Ve.className, Q.props.className),
        onTouchStart: $t,
        ref: mr
    }, z ? {
        onMouseMove: hr
    } : {})
      , De = {};
    _ || (Y.onTouchStart = dr,
    Y.onTouchEnd = vr),
    j || (Y.onMouseOver = Qe(Mt, Y.onMouseOver),
    Y.onMouseLeave = Qe(Dt, Y.onMouseLeave),
    Oe || (De.onMouseOver = Mt,
    De.onMouseLeave = Dt)),
    L || (Y.onFocus = Qe(At, Y.onFocus),
    Y.onBlur = Qe(Ct, Y.onBlur),
    Oe || (De.onFocus = At,
    De.onBlur = Ct));
    const gr = R.useMemo(()=>{
        var w;
        let N = [{
            name: "arrow",
            enabled: !!X,
            options: {
                element: X,
                padding: 4
            }
        }];
        return (w = k.popperOptions) != null && w.modifiers && (N = N.concat(k.popperOptions.modifiers)),
        A({}, k.popperOptions, {
            modifiers: N
        })
    }
    , [X, k])
      , je = A({}, h, {
        isRtl: Ue,
        arrow: O,
        disableInteractive: Oe,
        placement: ae,
        PopperComponentProp: se,
        touch: ve.current
    })
      , lt = rn(je)
      , jt = (o = (n = we.popper) != null ? n : C.Popper) != null ? o : on
      , Bt = (i = (l = (s = we.transition) != null ? s : C.Transition) != null ? l : nt) != null ? i : Nt
      , Lt = (a = (c = we.tooltip) != null ? c : C.Tooltip) != null ? a : nn
      , kt = (p = (v = we.arrow) != null ? v : C.Arrow) != null ? p : an
      , yr = Ge(jt, A({}, k, (y = q.popper) != null ? y : T.popper, {
        className: Ye(lt.popper, k == null ? void 0 : k.className, (f = (P = q.popper) != null ? P : T.popper) == null ? void 0 : f.className)
    }), je)
      , br = Ge(Bt, A({}, He, (d = q.transition) != null ? d : T.transition), je)
      , wr = Ge(Lt, A({}, (m = q.tooltip) != null ? m : T.tooltip, {
        className: Ye(lt.tooltip, (x = (E = q.tooltip) != null ? E : T.tooltip) == null ? void 0 : x.className)
    }), je)
      , xr = Ge(kt, A({}, (b = q.arrow) != null ? b : T.arrow, {
        className: Ye(lt.arrow, (u = (g = q.arrow) != null ? g : T.arrow) == null ? void 0 : u.className)
    }), je);
    return ee.jsxs(R.Fragment, {
        children: [R.cloneElement(Q, Y), ee.jsx(jt, A({
            as: se ?? lr,
            placement: ae,
            anchorEl: z ? {
                getBoundingClientRect: ()=>({
                    top: Le.y,
                    left: Le.x,
                    right: Le.x,
                    bottom: Le.y,
                    width: 0,
                    height: 0
                })
            } : de,
            popperRef: st,
            open: de ? ne : !1,
            id: it,
            transition: !0
        }, De, yr, {
            popperOptions: gr,
            children: ({TransitionProps: w})=>ee.jsx(Bt, A({
                timeout: xe.transitions.duration.shorter
            }, w, br, {
                children: ee.jsxs(Lt, A({}, wr, {
                    children: [J, O ? ee.jsx(kt, A({}, xr, {
                        ref: Pe
                    })) : null]
                }))
            }))
        }))]
    })
})
  , un = sn;
export {lr as M, un as T};
//# debugId=41f6df8f-bcf7-53fa-a0db-68d7223f8865
//# sourceMappingURL=Tooltip-bfcffb64.js.map

