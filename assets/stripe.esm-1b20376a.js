!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "8bebb909-bb46-583c-8ad0-fd63f7f073e7")
    } catch (e) {}
}();
import {R as s, cf as u} from "./index-4d92c338.js";
function H(r, e) {
    var t = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(r);
        e && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(r, o).enumerable
        })),
        t.push.apply(t, n)
    }
    return t
}
function J(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e] != null ? arguments[e] : {};
        e % 2 ? H(Object(t), !0).forEach(function(n) {
            ne(r, n, t[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n))
        })
    }
    return r
}
function U(r) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? U = function(e) {
        return typeof e
    }
    : U = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ,
    U(r)
}
function ne(r, e, t) {
    return e in r ? Object.defineProperty(r, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[e] = t,
    r
}
function W(r, e) {
    return ye(r) || he(r, e) || Ce(r, e) || Se()
}
function ye(r) {
    if (Array.isArray(r))
        return r
}
function he(r, e) {
    var t = r && (typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"]);
    if (t != null) {
        var n = [], o = !0, a = !1, f, y;
        try {
            for (t = t.call(r); !(o = (f = t.next()).done) && (n.push(f.value),
            !(e && n.length === e)); o = !0)
                ;
        } catch (i) {
            a = !0,
            y = i
        } finally {
            try {
                !o && t.return != null && t.return()
            } finally {
                if (a)
                    throw y
            }
        }
        return n
    }
}
function Ce(r, e) {
    if (r) {
        if (typeof r == "string")
            return Q(r, e);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        if (t === "Object" && r.constructor && (t = r.constructor.name),
        t === "Map" || t === "Set")
            return Array.from(r);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
            return Q(r, e)
    }
}
function Q(r, e) {
    (e == null || e > r.length) && (e = r.length);
    for (var t = 0, n = new Array(e); t < e; t++)
        n[t] = r[t];
    return n
}
function Se() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var F = function(e) {
    var t = s.useRef(e);
    return s.useEffect(function() {
        t.current = e
    }, [e]),
    t.current
}
  , R = function(e) {
    return e !== null && U(e) === "object"
}
  , Ee = function(e) {
    return R(e) && typeof e.then == "function"
}
  , ge = function(e) {
    return R(e) && typeof e.elements == "function" && typeof e.createToken == "function" && typeof e.createPaymentMethod == "function" && typeof e.confirmCardPayment == "function"
}
  , Z = "[object Object]"
  , be = function r(e, t) {
    if (!R(e) || !R(t))
        return e === t;
    var n = Array.isArray(e)
      , o = Array.isArray(t);
    if (n !== o)
        return !1;
    var a = Object.prototype.toString.call(e) === Z
      , f = Object.prototype.toString.call(t) === Z;
    if (a !== f)
        return !1;
    if (!a && !n)
        return e === t;
    var y = Object.keys(e)
      , i = Object.keys(t);
    if (y.length !== i.length)
        return !1;
    for (var E = {}, g = 0; g < y.length; g += 1)
        E[y[g]] = !0;
    for (var b = 0; b < i.length; b += 1)
        E[i[b]] = !0;
    var C = Object.keys(E);
    if (C.length !== y.length)
        return !1;
    var j = e
      , O = t
      , S = function(x) {
        return r(j[x], O[x])
    };
    return C.every(S)
}
  , ae = function(e, t, n) {
    return R(e) ? Object.keys(e).reduce(function(o, a) {
        var f = !R(t) || !be(e[a], t[a]);
        return n.includes(a) ? (f && console.warn("Unsupported prop change: options.".concat(a, " is not a mutable property.")),
        o) : f ? J(J({}, o || {}), {}, ne({}, a, e[a])) : o
    }, null) : null
}
  , we = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details."
  , ee = function(e) {
    if (e === null || ge(e))
        return e;
    throw new Error(we)
}
  , Pe = function(e) {
    if (Ee(e))
        return {
            tag: "async",
            stripePromise: Promise.resolve(e).then(ee)
        };
    var t = ee(e);
    return t === null ? {
        tag: "empty"
    } : {
        tag: "sync",
        stripe: t
    }
}
  , K = s.createContext(null);
K.displayName = "ElementsContext";
var xe = function(e, t) {
    if (!e)
        throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
    return e
}
  , G = s.createContext(null);
G.displayName = "CartElementContext";
var Re = function(e, t) {
    if (!e)
        throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
    return e
}
  , je = function(e) {
    var t = e.stripe
      , n = e.options
      , o = e.children
      , a = s.useMemo(function() {
        return Pe(t)
    }, [t])
      , f = s.useState(null)
      , y = W(f, 2)
      , i = y[0]
      , E = y[1]
      , g = s.useState(null)
      , b = W(g, 2)
      , C = b[0]
      , j = b[1]
      , O = s.useState(function() {
        return {
            stripe: a.tag === "sync" ? a.stripe : null,
            elements: a.tag === "sync" ? a.stripe.elements(n) : null
        }
    })
      , S = W(O, 2)
      , v = S[0]
      , x = S[1];
    s.useEffect(function() {
        var h = !0
          , L = function(N) {
            x(function(I) {
                return I.stripe ? I : {
                    stripe: N,
                    elements: N.elements(n)
                }
            })
        };
        return a.tag === "async" && !v.stripe ? a.stripePromise.then(function(P) {
            P && h && L(P)
        }) : a.tag === "sync" && !v.stripe && L(a.stripe),
        function() {
            h = !1
        }
    }, [a, v, n]);
    var A = F(t);
    s.useEffect(function() {
        A !== null && A !== t && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
    }, [A, t]);
    var k = F(n);
    return s.useEffect(function() {
        if (v.elements) {
            var h = ae(n, k, ["clientSecret", "fonts"]);
            h && v.elements.update(h)
        }
    }, [n, k, v.elements]),
    s.useEffect(function() {
        var h = v.stripe;
        !h || !h._registerWrapper || !h.registerAppInfo || (h._registerWrapper({
            name: "react-stripe-js",
            version: "2.1.2"
        }),
        h.registerAppInfo({
            name: "react-stripe-js",
            version: "2.1.2",
            url: "https://stripe.com/docs/stripe-js/react"
        }))
    }, [v.stripe]),
    s.createElement(K.Provider, {
        value: v
    }, s.createElement(G.Provider, {
        value: {
            cart: i,
            setCart: E,
            cartState: C,
            setCartState: j
        }
    }, o))
};
je.propTypes = {
    stripe: u.any,
    options: u.object
};
var B = function(e) {
    var t = s.useContext(K);
    return xe(t, e)
}
  , te = function(e) {
    var t = s.useContext(G);
    return Re(t, e)
}
  , Ue = function() {
    var e = B("calls useElements()")
      , t = e.elements;
    return t
}
  , We = function() {
    var e = B("calls useStripe()")
      , t = e.stripe;
    return t
};
u.func.isRequired;
var m = function(e, t, n) {
    var o = !!n
      , a = s.useRef(n);
    s.useEffect(function() {
        a.current = n
    }, [n]),
    s.useEffect(function() {
        if (!o || !e)
            return function() {}
            ;
        var f = function() {
            a.current && a.current.apply(a, arguments)
        };
        return e.on(t, f),
        function() {
            e.off(t, f)
        }
    }, [o, t, e, a])
}
  , Oe = function(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
  , c = function(e, t) {
    var n = "".concat(Oe(e), "Element")
      , o = function(i) {
        var E = i.id
          , g = i.className
          , b = i.options
          , C = b === void 0 ? {} : b
          , j = i.onBlur
          , O = i.onFocus
          , S = i.onReady
          , v = i.onChange
          , x = i.onEscape
          , A = i.onClick
          , k = i.onLoadError
          , h = i.onLoaderStart
          , L = i.onNetworksChange
          , P = i.onCheckout
          , N = i.onLineItemClick
          , I = i.onConfirm
          , ue = i.onCancel
          , ce = i.onShippingAddressChange
          , le = i.onShippingRateChange
          , fe = B("mounts <".concat(n, ">"))
          , $ = fe.elements
          , pe = s.useState(null)
          , V = W(pe, 2)
          , p = V[0]
          , de = V[1]
          , w = s.useRef(null)
          , q = s.useRef(null)
          , Y = te("mounts <".concat(n, ">"))
          , M = Y.setCart
          , D = Y.setCartState;
        m(p, "blur", j),
        m(p, "focus", O),
        m(p, "escape", x),
        m(p, "click", A),
        m(p, "loaderror", k),
        m(p, "loaderstart", h),
        m(p, "networkschange", L),
        m(p, "lineitemclick", N),
        m(p, "confirm", I),
        m(p, "cancel", ue),
        m(p, "shippingaddresschange", ce),
        m(p, "shippingratechange", le);
        var _;
        e === "cart" ? _ = function(X) {
            D(X),
            S && S(X)
        }
        : S && (e === "expressCheckout" ? _ = S : _ = function() {
            S(p)
        }
        ),
        m(p, "ready", _);
        var me = e === "cart" ? function(d) {
            D(d),
            v && v(d)
        }
        : v;
        m(p, "change", me);
        var ve = e === "cart" ? function(d) {
            D(d),
            P && P(d)
        }
        : P;
        m(p, "checkout", ve),
        s.useLayoutEffect(function() {
            if (w.current === null && $ && q.current !== null) {
                var d = $.create(e, C);
                e === "cart" && M && M(d),
                w.current = d,
                de(d),
                d.mount(q.current)
            }
        }, [$, C, M]);
        var z = F(C);
        return s.useEffect(function() {
            if (w.current) {
                var d = ae(C, z, ["paymentRequest"]);
                d && w.current.update(d)
            }
        }, [C, z]),
        s.useLayoutEffect(function() {
            return function() {
                if (w.current && typeof w.current.destroy == "function")
                    try {
                        w.current.destroy(),
                        w.current = null
                    } catch {}
            }
        }, []),
        s.createElement("div", {
            id: E,
            className: g,
            ref: q
        })
    }
      , a = function(i) {
        B("mounts <".concat(n, ">")),
        te("mounts <".concat(n, ">"));
        var E = i.id
          , g = i.className;
        return s.createElement("div", {
            id: E,
            className: g
        })
    }
      , f = t ? a : o;
    return f.propTypes = {
        id: u.string,
        className: u.string,
        onChange: u.func,
        onBlur: u.func,
        onFocus: u.func,
        onReady: u.func,
        onEscape: u.func,
        onClick: u.func,
        onLoadError: u.func,
        onLoaderStart: u.func,
        onNetworksChange: u.func,
        onCheckout: u.func,
        onLineItemClick: u.func,
        onConfirm: u.func,
        onCancel: u.func,
        onShippingAddressChange: u.func,
        onShippingRateChange: u.func,
        options: u.object
    },
    f.displayName = n,
    f.__elementType = e,
    f
}
  , l = typeof window > "u";
c("auBankAccount", l);
var Be = c("card", l);
c("cardNumber", l);
c("cardExpiry", l);
c("cardCvc", l);
c("fpxBank", l);
c("iban", l);
c("idealBank", l);
c("p24Bank", l);
c("epsBank", l);
var $e = c("payment", l);
c("expressCheckout", l);
var qe = c("paymentRequestButton", l);
c("linkAuthentication", l);
c("address", l);
c("shippingAddress", l);
c("cart", l);
c("paymentMethodMessaging", l);
c("affirmMessage", l);
c("afterpayClearpayMessage", l);
var oe = "https://js.stripe.com/v3"
  , Ae = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/
  , re = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used"
  , ke = function() {
    for (var e = document.querySelectorAll('script[src^="'.concat(oe, '"]')), t = 0; t < e.length; t++) {
        var n = e[t];
        if (Ae.test(n.src))
            return n
    }
    return null
}
  , Le = function(e) {
    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : ""
      , n = document.createElement("script");
    n.src = "".concat(oe).concat(t);
    var o = document.head || document.body;
    if (!o)
        throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
    return o.appendChild(n),
    n
}
  , Ne = function(e, t) {
    !e || !e._registerWrapper || e._registerWrapper({
        name: "stripe-js",
        version: "2.1.0",
        startTime: t
    })
}
  , T = null
  , Ie = function(e) {
    return T !== null || (T = new Promise(function(t, n) {
        if (typeof window > "u" || typeof document > "u") {
            t(null);
            return
        }
        if (window.Stripe && e && console.warn(re),
        window.Stripe) {
            t(window.Stripe);
            return
        }
        try {
            var o = ke();
            o && e ? console.warn(re) : o || (o = Le(e)),
            o.addEventListener("load", function() {
                window.Stripe ? t(window.Stripe) : n(new Error("Stripe.js not available"))
            }),
            o.addEventListener("error", function() {
                n(new Error("Failed to load Stripe.js"))
            })
        } catch (a) {
            n(a);
            return
        }
    }
    )),
    T
}
  , _e = function(e, t, n) {
    if (e === null)
        return null;
    var o = e.apply(void 0, t);
    return Ne(o, n),
    o
}
  , ie = Promise.resolve().then(function() {
    return Ie(null)
})
  , se = !1;
ie.catch(function(r) {
    se || console.warn(r)
});
var Me = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    se = !0;
    var o = Date.now();
    return ie.then(function(a) {
        return _e(a, t, o)
    })
};
export {Be as C, je as E, qe as P, Ue as a, $e as b, Me as l, We as u};
//# debugId=8bebb909-bb46-583c-8ad0-fd63f7f073e7
//# sourceMappingURL=stripe.esm-1b20376a.js.map
