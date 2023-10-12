!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "762a21b1-a9bf-5670-85f6-751f0d09fbe2")
    } catch (e) {}
}();
import {r as e, aG as E, b7 as l, aX as u, j as i, Q as p} from "./index-4d92c338.js";
function x(s) {
    return typeof s == "function" ? s() : s
}
const h = e.forwardRef(function(c, o) {
    const {children: t, container: a, disablePortal: r=!1} = c
      , [n,f] = e.useState(null)
      , m = E(e.isValidElement(t) ? t.ref : null, o);
    if (l(()=>{
        r || f(x(a) || document.body)
    }
    , [a, r]),
    l(()=>{
        if (n && !r)
            return u(o, n),
            ()=>{
                u(o, null)
            }
    }
    , [o, n, r]),
    r) {
        if (e.isValidElement(t)) {
            const d = {
                ref: m
            };
            return e.cloneElement(t, d)
        }
        return i.jsx(e.Fragment, {
            children: t
        })
    }
    return i.jsx(e.Fragment, {
        children: n && p.createPortal(t, n)
    })
});
export {h as P};
//# debugId=762a21b1-a9bf-5670-85f6-751f0d09fbe2
//# sourceMappingURL=Portal-e3c95b81.js.map

