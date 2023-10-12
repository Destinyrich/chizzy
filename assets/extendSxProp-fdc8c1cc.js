!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "5ba73df2-67f7-563a-ba42-60af8ea11a09")
    } catch (e) {}
}();
import {d as c, _ as i, bK as a, bL as f} from "./index-4d92c338.js";
const x = ["sx"]
  , P = t=>{
    var s, o;
    const n = {
        systemProps: {},
        otherProps: {}
    }
      , r = (s = t == null || (o = t.theme) == null ? void 0 : o.unstable_sxConfig) != null ? s : a;
    return Object.keys(t).forEach(e=>{
        r[e] ? n.systemProps[e] = t[e] : n.otherProps[e] = t[e]
    }
    ),
    n
}
;
function m(t) {
    const {sx: s} = t
      , o = c(t, x)
      , {systemProps: n, otherProps: r} = P(o);
    let e;
    return Array.isArray(s) ? e = [n, ...s] : typeof s == "function" ? e = (...u)=>{
        const l = s(...u);
        return f(l) ? i({}, n, l) : n
    }
    : e = i({}, n, s),
    i({}, r, {
        sx: e
    })
}
export {m as e};
//# debugId=5ba73df2-67f7-563a-ba42-60af8ea11a09
//# sourceMappingURL=extendSxProp-fdc8c1cc.js.map
