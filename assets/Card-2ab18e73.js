!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "8340674b-f708-54c9-94c1-8f5b8539b830")
    } catch (e) {}
}();
import {g as d, a as u, s as C, aY as p, r as f, u as m, d as x, _ as n, j as y, e as R, f as g} from "./index-4d92c338.js";
function h(s) {
    return d("MuiCard", s)
}
u("MuiCard", ["root"]);
const j = ["className", "raised"]
  , v = s=>{
    const {classes: e} = s;
    return g({
        root: ["root"]
    }, h, e)
}
  , w = C(p, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (s,e)=>e.root
})(()=>({
    overflow: "hidden"
}))
  , M = f.forwardRef(function(e, o) {
    const t = m({
        props: e,
        name: "MuiCard"
    })
      , {className: i, raised: r=!1} = t
      , l = x(t, j)
      , a = n({}, t, {
        raised: r
    })
      , c = v(a);
    return y.jsx(w, n({
        className: R(c.root, i),
        elevation: r ? 8 : void 0,
        ref: o,
        ownerState: a
    }, l))
})
  , _ = M;
export {_ as C};
//# debugId=8340674b-f708-54c9-94c1-8f5b8539b830
//# sourceMappingURL=Card-2ab18e73.js.map
