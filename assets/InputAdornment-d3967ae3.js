!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "568163ed-4e7f-5c1f-a3a6-e0d3bab6c883")
    } catch (e) {}
}();
import {a as y, g as A, s as C, _ as c, r as f, u as I, d as j, j as a, e as L, c as m, f as $} from "./index-4d92c338.js";
import {u as z, F as R} from "./useFormControl-5548d690.js";
import {T} from "./Typography-ccfa5a08.js";
function F(n) {
    return A("MuiInputAdornment", n)
}
const _ = y("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"])
  , b = _;
var g;
const M = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]
  , N = (n,t)=>{
    const {ownerState: e} = n;
    return [t.root, t[`position ${m(e.position)}`], e.disablePointerEvents === !0 && t.disablePointerEvents, t[e.variant]]
}
  , S = n=>{
    const {classes: t, disablePointerEvents: e, hiddenLabel: o, position: s, size: r, variant: l} = n
      , d = {
        root: ["root", e && "disablePointerEvents", s && `position ${m(s)}`, l, o && "hiddenLabel", r && `size ${m(r)}`]
    };
    return $(d, F, t)
}
  , U = C("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: N
})(({theme: n, ownerState: t})=>c({
    display: "flex",
    height: "0.01em",
    maxHeight: "2em",
    alignItems: "center",
    whiteSpace: "nowrap",
    color: (n.vars || n).palette.action.active
}, t.variant === "filled" && {
    [`&.${b.positionStart}&:not(.${b.hiddenLabel})`]: {
        marginTop: 16
    }
}, t.position === "start" && {
    marginRight: 8
}, t.position === "end" && {
    marginLeft: 8
}, t.disablePointerEvents === !0 && {
    pointerEvents: "none"
}))
  , w = f.forwardRef(function(t, e) {
    const o = I({
        props: t,
        name: "MuiInputAdornment"
    })
      , {children: s, className: r, component: l="div", disablePointerEvents: d=!1, disableTypography: x=!1, position: u, variant: v} = o
      , E = j(o, M)
      , i = z() || {};
    let p = v;
    v && i.variant,
    i && !p && (p = i.variant);
    const h = c({}, o, {
        hiddenLabel: i.hiddenLabel,
        size: i.size,
        disablePointerEvents: d,
        position: u,
        variant: p
    })
      , P = S(h);
    return a.jsx(R.Provider, {
        value: null,
        children: a.jsx(U, c({
            as: l,
            ownerState: h,
            className: L(P.root, r),
            ref: e
        }, E, {
            children: typeof s == "string" && !x ? a.jsx(T, {
                color: "text.secondary",
                children: s
            }) : a.jsxs(f.Fragment, {
                children: [u === "start" ? g || (g = a.jsx("span", {
                    className: "notranslate",
                    children: "​"
                })) : null, s]
            })
        }))
    })
})
  , k = w;
export {k as I};
//# debugId=568163ed-4e7f-5c1f-a3a6-e0d3bab6c883
//# sourceMappingURL=InputAdornment-d3967ae3.js.map
