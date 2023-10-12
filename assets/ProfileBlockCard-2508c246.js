!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "2c5e8a12-cea0-5a5d-ae62-a3a7157e3a75")
    } catch (e) {}
}();
import {r as i, aR as c, b_ as x, j as d, ck as m, a_ as C} from "./index-4d92c338.js";
import {P as l} from "./ProfileThemeContext-9f028f8f.js";
import {m as p} from "./mergeDeep-4cfe963b.js";
import {C as h} from "./Card-2ab18e73.js";
const y = o=>o in m;
function b(o) {
    const e = o.split(",")[0];
    return y(e) ? m[e] : 400
}
function R({children: o, style: e={}, tag: t="div", ...s}) {
    let r = i.useContext(l);
    r = p(c, r);
    const n = t
      , a = r.text.font_family
      , {color: u} = r.text
      , f = b(a)
      , g = x(r);
    return d.jsx(n, {
        style: {
            borderRadius: g,
            color: u,
            fontFamily: a,
            fontWeight: f,
            ...e
        },
        ...s,
        children: o
    })
}
function P(o, e, t) {
    return o ? `0px 8px 0px rgba(0, 0, 0, 0.2), 0px 8px 0px ${t}${e}` : "none"
}
const F = C({
    root: {
        borderRadius: o=>x(o.theme),
        backgroundColor: o=>{
            const e = o.ignoreOpacity ? "FF" : o.theme.components.opacity;
            return o.theme.card.background_color + e
        }
        ,
        boxShadow: "none",
        padding: o=>o.padding
    }
});
function _(o) {
    const {ignoreOpacity: e, padding: t, children: s, ...r} = o;
    let n = i.useContext(l);
    n = p(c, n);
    const a = F({
        ...o,
        theme: n
    });
    return d.jsx(h, {
        classes: a,
        ...r,
        children: s
    })
}
function j({style: o, ...e}) {
    let t = i.useContext(l);
    return t = p(c, t),
    d.jsx(_, {
        padding: "24px 24px 36px",
        style: {
            boxShadow: P(t.card.shadow, t.components.opacity, t.card.background_color),
            border: t.card.outline ? `2px solid ${t.text.color}` : 0,
            ...o
        },
        ...e
    })
}
export {j as P, R as a, _ as b, P as g};
//# debugId=2c5e8a12-cea0-5a5d-ae62-a3a7157e3a75
//# sourceMappingURL=ProfileBlockCard-2508c246.js.map
