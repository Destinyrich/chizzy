!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "ffbac9d7-d48d-5d93-afa2-4f7a3465fa65")
    } catch (e) {}
}();
import {_ as u, bQ as W, c as l, bR as k, r as v, d as R, j as $, e as G, f as S, g as T, s as M, u as P} from "./index-4d92c338.js";
import {s as j} from "./styled-e56531a2.js";
const y = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"]
  , L = W()
  , N = j("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (a,e)=>{
        const {ownerState: o} = a;
        return [e.root, e[`maxWidth ${l(String(o.maxWidth))}`], o.fixed && e.fixed, o.disableGutters && e.disableGutters]
    }
})
  , _ = a=>k({
    props: a,
    name: "MuiContainer",
    defaultTheme: L
})
  , U = (a,e)=>{
    const o = i=>T(e, i)
      , {classes: p, fixed: c, disableGutters: x, maxWidth: t} = a
      , s = {
        root: ["root", t && `maxWidth ${l(String(t))}`, c && "fixed", x && "disableGutters"]
    };
    return S(s, o, p)
}
;
function w(a={}) {
    const {createStyledComponent: e=N, useThemeProps: o=_, componentName: p="MuiContainer"} = a
      , c = e(({theme: t, ownerState: s})=>u({
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        display: "block"
    }, !s.disableGutters && {
        paddingLeft: t.spacing(2),
        paddingRight: t.spacing(2),
        [t.breakpoints.up("sm")]: {
            paddingLeft: t.spacing(3),
            paddingRight: t.spacing(3)
        }
    }), ({theme: t, ownerState: s})=>s.fixed && Object.keys(t.breakpoints.values).reduce((i,n)=>{
        const d = n
          , r = t.breakpoints.values[d];
        return r !== 0 && (i[t.breakpoints.up(d)] = {
            maxWidth: `${r}${t.breakpoints.unit}`
        }),
        i
    }
    , {}), ({theme: t, ownerState: s})=>u({}, s.maxWidth === "xs" && {
        [t.breakpoints.up("xs")]: {
            maxWidth: Math.max(t.breakpoints.values.xs, 444)
        }
    }, s.maxWidth && s.maxWidth !== "xs" && {
        [t.breakpoints.up(s.maxWidth)]: {
            maxWidth: `${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`
        }
    }));
    return v.forwardRef(function(s, i) {
        const n = o(s)
          , {className: d, component: r="div", disableGutters: b=!1, fixed: f=!1, maxWidth: C="lg"} = n
          , g = R(n, y)
          , m = u({}, n, {
            component: r,
            disableGutters: b,
            fixed: f,
            maxWidth: C
        })
          , h = U(m, p);
        return $.jsx(c, u({
            as: r,
            ownerState: m,
            className: G(h.root, d),
            ref: i
        }, g))
    })
}
const z = w({
    createStyledComponent: M("div", {
        name: "MuiContainer",
        slot: "Root",
        overridesResolver: (a,e)=>{
            const {ownerState: o} = a;
            return [e.root, e[`maxWidth ${l(String(o.maxWidth))}`], o.fixed && e.fixed, o.disableGutters && e.disableGutters]
        }
    }),
    useThemeProps: a=>P({
        props: a,
        name: "MuiContainer"
    })
})
  , O = z;
export {O as C};
//# debugId=ffbac9d7-d48d-5d93-afa2-4f7a3465fa65
//# sourceMappingURL=Container-cc2d692b.js.map
