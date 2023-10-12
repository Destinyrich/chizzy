import {r as a, b9 as f, bA as v, bB as _, c as g, t as S, aX as y, b7 as C, aW as E, aG as x, aF as R, bC as h} from "./index-4d92c338.js";
function N(...e) {
    return e.reduce((t,n)=>n == null ? t : function(...u) {
        t.apply(this, u),
        n.apply(this, u)
    }
    , ()=>{}
    )
}
function q(e, t=166) {
    let n;
    function r(...u) {
        const o = ()=>{
            e.apply(this, u)
        }
        ;
        clearTimeout(n),
        n = setTimeout(o, t)
    }
    return r.clear = ()=>{
        clearTimeout(n)
    }
    ,
    r
}
function F(e, t) {
    return ()=>null
}
function w(e, t) {
    return a.isValidElement(e) && t.indexOf(e.type.muiName) !== -1
}
function P(e) {
    return f(e).defaultView || window
}
function D(e, t) {
    return ()=>null
}
let c = 0;
function M(e) {
    const [t,n] = a.useState(e)
      , r = e || t;
    return a.useEffect(()=>{
        t == null && (c += 1,
        n(`mui-${c}`))
    }
    , [t]),
    r
}
const l = v["useId".toString()];
function T(e) {
    if (l !== void 0) {
        const t = l();
        return e ?? t
    }
    return M(e)
}
function V(e, t, n, r, u) {
    return null
}
function G({controlled: e, default: t, name: n, state: r="value"}) {
    const {current: u} = a.useRef(e !== void 0)
      , [o,p] = a.useState(t)
      , m = u ? e : o
      , b = a.useCallback(I=>{
        u || p(I)
    }
    , []);
    return [m, b]
}
var d = {
    exports: {}
};
(function(e) {
    function t(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }
    e.exports = t,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
)(d);
var O = d.exports
  , s = {};
const $ = {
    configure: e=>{
        _.configure(e)
    }
}
  , k = Object.freeze(Object.defineProperty({
    __proto__: null,
    capitalize: g,
    createChainedFunction: N,
    createSvgIcon: S,
    debounce: q,
    deprecatedPropType: F,
    isMuiElement: w,
    ownerDocument: f,
    ownerWindow: P,
    requirePropFactory: D,
    setRef: y,
    unstable_ClassNameGenerator: $,
    unstable_useEnhancedEffect: C,
    unstable_useId: T,
    unsupportedProp: V,
    useControlled: G,
    useEventCallback: E,
    useForkRef: x,
    useIsFocusVisible: R
}, Symbol.toStringTag, {
    value: "Module"
}))
  , z = h(k);
var i;
function U() {
    return i || (i = 1,
    function(e) {
        "use client";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return t.createSvgIcon
            }
        });
        var t = z
    }(s)),
    s
}
export {G as a, w as b, N as c, q as d, O as i, P as o, U as r, T as u};
!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "8f007ff9-b1ba-5cf1-bc85-5d721815cd1d")
    } catch (e) {}
}();
//# debugId=8f007ff9-b1ba-5cf1-bc85-5d721815cd1d
//# sourceMappingURL=createSvgIcon-d5208ee1.js.map
