!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "6301382a-e48f-55c3-9c01-1223e891da7c")
    } catch (e) {}
}();
import {R as x, j as n, a_ as W, m as H, r as N, e as u, aT as k, P as Y, I as K} from "./index-4d92c338.js";
import {B as j} from "./BeaconsIcon-7e54ce15.js";
import {e as X, a as Z} from "./typeUtils-3c270e0f.js";
import {M as F} from "./Menu-04e61ef3.js";
import {P as V} from "./PulseLoader-bda91c68.js";
const S = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    OUTLINED: "outlined",
    TEXT: "text"
}
  , i = {
    BLACK: "black",
    RED: "red",
    BLUE: "blue",
    PURPLE: "purple",
    GREEN: "green",
    CLEAR: "clear",
    GRADIENT_PINK: "gradient-pink"
}
  , ye = {
    MICRO: "micro",
    TINY: "tiny",
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large"
}
  , q = x.forwardRef(({"aria-label": t, size: e=8, ...r},a)=>n.jsx("div", {
    ref: a,
    ...r,
    children: n.jsx(V, {
        size: e,
        color: "var(--beacons-gray-300)",
        "aria-label": t
    })
}));
function D({theme: t, color: e, variant: r, unclickable: a}) {
    if (a)
        return t.palette.grey[200];
    if (r === "outlined" || r === "text")
        return "transparent";
    const s = r === "secondary"
      , l = s ? "light" : "main";
    switch (e) {
    case i.RED:
        return t.palette.red[l];
    case i.BLUE:
        return t.palette.blue[l];
    case i.PURPLE:
        return t.palette.purple[l];
    case i.GREEN:
        return t.palette.green[l];
    case i.CLEAR:
        return t.palette.white[l];
    default:
        return s ? t.palette.grey[300] : t.palette.grey[900]
    }
}
function M({theme: t, color: e, variant: r}) {
    if (r !== "outlined")
        return "transparent";
    switch (e) {
    case i.RED:
        return t.palette.red.border;
    case i.BLUE:
        return t.palette.blue.main;
    case i.PURPLE:
        return t.palette.purple.main;
    case i.GREEN:
        return t.palette.green.main;
    case i.CLEAR:
        return t.palette.white.main;
    default:
        return t.palette.grey[300]
    }
}
function J({theme: t, color: e, variant: r}) {
    if (r === S.PRIMARY && e !== i.CLEAR)
        return t.palette.white.main;
    if (r === S.PRIMARY && e === i.CLEAR)
        return t.palette.grey[900];
    switch (e) {
    case i.RED:
        return t.palette.red.main;
    case i.BLUE:
        return t.palette.blue.main;
    case i.PURPLE:
        return t.palette.purple.main;
    case i.GREEN:
        return t.palette.green.main;
    case i.CLEAR:
        return t.palette.white.main;
    case i.GRADIENT_PINK:
        return t.palette.white.main;
    default:
        return t.palette.grey[900]
    }
}
function Q({theme: t, color: e}) {
    switch (e) {
    case i.GRADIENT_PINK:
        return `linear-gradient(135deg, ${t.palette.orange}, ${t.palette.pink})`;
    default:
        return "none"
    }
}
const z = W(t=>({
    root: {
        textTransform: "none",
        letterSpacing: "-0.012em",
        boxShadow: "none",
        borderRadius: ({borderRadius: e})=>e || "initial",
        backgroundColor: ({color: e, unclickable: r, variant: a})=>D({
            theme: t,
            color: e,
            unclickable: r,
            variant: a
        }),
        backgroundImage: ({color: e})=>Q({
            theme: t,
            color: e
        }),
        color: ({color: e, variant: r})=>J({
            theme: t,
            color: e,
            variant: r
        }),
        borderColor: ({color: e, variant: r})=>M({
            theme: t,
            color: e,
            variant: r
        }),
        borderStyle: "solid",
        borderWidth: ({borderWidth: e})=>e || "1px",
        fontSize: t.beaconsTypography.h3.fontSize,
        fontWeight: t.beaconsTypography.h3.fontWeight,
        "&:hover": {
            backgroundColor: ({color: e, variant: r, unclickable: a})=>D({
                theme: t,
                color: e,
                variant: r,
                unclickable: a
            }),
            borderColor: ({color: e, variant: r})=>M({
                theme: t,
                color: e,
                variant: r
            }),
            boxShadow: "none",
            opacity: "var(--hover-opacity)"
        },
        padding: ({padding: e})=>e || "initial",
        height: ({height: e})=>e || "initial",
        width: ({width: e})=>e || "initial",
        minWidth: ({width: e})=>e || "unset"
    },
    fullWidth: {}
}))
  , E = x.forwardRef(({color: t="black", variant: e="primary", loading: r=!1, disabled: a=!1, normalHeight: s=!1, fullWidth: l=!1, children: o, href: c, onClick: p, to: d, padding: R, height: b, width: m, borderRadius: T, borderWidth: h, textClassName: I, loaderSize: f, "aria-label": A, Component: B=k, ...g},_)=>{
    const C = a || r;
    m = m ?? (l ? "100%" : void 0);
    const $ = z({
        color: t,
        variant: e,
        unclickable: C,
        padding: R,
        height: b,
        width: m,
        borderRadius: T,
        borderWidth: h
    })
      , L = H()
      , v = N.useCallback(G=>{
        d && (G.preventDefault(),
        L.push(d))
    }
    , [L, d]);
    return !!d && (p = v,
    c = d),
    n.jsx(B, {
        ref: _,
        href: c,
        classes: $,
        disabled: C,
        style: {
            minHeight: s ? "inherit" : "initial"
        },
        onClick: p,
        "aria-label": A,
        ...g,
        children: r ? n.jsx(q, {
            size: f
        }) : n.jsx("div", {
            className: u("flex items-center justify-center gap-1 w-max", I),
            children: o
        })
    })
}
);
function P(t, e) {
    const r = e === "primary";
    switch (t) {
    case "red":
        return r ? "white" : "red";
    case "blue":
        return r ? "white" : "blue";
    case "purple":
        return r ? "white" : "purple";
    case "green":
        return r ? "white" : "green";
    case "clear":
        return r ? "gray-900" : "white";
    case "gradient-pink":
        return "white";
    case "black":
    default:
        return r ? "white" : "gray-900"
    }
}
function y({size: t, name: e, color: r="black", variant: a="primary"}) {
    const s = u({
        12: t === "micro",
        16: t === "tiny",
        20: t === "medium" || t === "small",
        24: t === "large"
    });
    return n.jsx(j, {
        name: e,
        size: parseInt(s, 10),
        color: P(r, a)
    })
}
const ee = {
    micro: "24px",
    tiny: "32px",
    small: "40px",
    medium: "48px",
    large: "56px"
}
  , te = {
    micro: "0px 8px",
    tiny: "0px 12px",
    small: "0px 12px",
    medium: "0px 12px",
    large: "0px 12px"
}
  , re = {
    micro: "4px",
    tiny: "4px",
    small: "8px",
    medium: "8px",
    large: "8px"
}
  , ae = {
    micro: "detail",
    tiny: "text-small-bold uppercase",
    small: "text-bold",
    medium: "text-bold",
    large: "title-small"
}
  , ne = x.forwardRef(function({size: e="medium", preIconName: r=void 0, postIconName: a=void 0, children: s, color: l, variant: o, uppercase: c, ...p}, d) {
    return n.jsxs(E, {
        ref: d,
        color: l,
        variant: o,
        ...p,
        padding: te[e],
        borderRadius: re[e],
        height: ee[e],
        textClassName: u(ae[e], {
            uppercase: c
        }),
        children: [!!r && n.jsx(y, {
            name: r,
            size: e,
            color: l,
            variant: o
        }), s, !!a && n.jsx(y, {
            name: a,
            size: e,
            color: l,
            variant: o
        })]
    })
})
  , he = ne;
function U({name: t, color: e, variant: r}) {
    return n.jsx(j, {
        name: t,
        size: 24,
        color: P(e, r)
    })
}
const Ie = x.forwardRef(({size: t="medium", preIconName: e=void 0, postIconName: r=void 0, color: a="black", variant: s="primary", children: l, ...o},c)=>n.jsxs(E, {
    ref: c,
    color: a,
    variant: s,
    ...o,
    borderRadius: "1e4px",
    padding: u({
        "0px 48px": t === "medium",
        "0px 64px": t === "large"
    }),
    height: u({
        "48px": t === "medium",
        "72px": t === "large"
    }),
    textClassName: u({
        "title-large": t === "large",
        "title-small": t === "medium"
    }),
    children: [!!e && n.jsx(U, {
        name: e,
        color: a,
        variant: s
    }), l, !!r && n.jsx(U, {
        name: r,
        color: a,
        variant: s
    })]
}))
  , le = X(Y).reduce((t,[e,r])=>{
    const a = e.split("-")[0];
    return Z(r) ? Object.entries(r).forEach(([s,l])=>{
        t[`${a}-${s}`] = l
    }
    ) : t[a] = r,
    t
}
, {})
  , se = x.forwardRef(function({noGutters: e=!1, color: r="grey-300", direction: a="horizontal"}, s) {
    return n.jsx("div", {
        ref: s,
        className: u({
            "h-px w-full": a === "horizontal" && !e,
            "h-px -mx-4": a === "horizontal" && e,
            "w-px flex-shrink-0 self-stretch": a === "vertical" && !e,
            "w-px flex-shrink-0 self-stretch -my-4": a === "vertical" && e
        }),
        style: {
            background: le[r]
        }
    })
})
  , ie = se
  , w = {
    micro: "24px",
    tiny: "32px",
    small: "40px",
    medium: "48px",
    large: "56px"
}
  , oe = {
    micro: "4px",
    tiny: "4px",
    small: "8px",
    medium: "8px",
    large: "8px"
}
  , ce = {
    micro: "detail",
    tiny: "text-small-bold uppercase",
    small: "text-bold",
    medium: "text-bold",
    large: "title-small"
}
  , ue = {
    micro: 12,
    tiny: 16,
    small: 20,
    medium: 20,
    large: 24
}
  , pe = {
    micro: "0px 8px",
    tiny: "0px 12px",
    small: "0px 12px",
    medium: "0px 12px",
    large: "0px 12px"
}
  , Te = x.forwardRef(({menuContent: t, size: e="medium", preIconName: r=void 0, postIconName: a=void 0, color: s="black", variant: l="primary", loading: o, disabled: c, normalHeight: p, children: d, fullWidth: R, onOpenDropdownClick: b, ...m},T)=>{
    const [h,I] = N.useState(!1)
      , f = N.useRef(null)
      , A = _=>{
        b == null || b(_),
        I(!0)
    }
      , B = ()=>{
        I(!1)
    }
      , g = oe[e];
    return n.jsxs("div", {
        className: u("flex items-stretch", {
            "w-full": R,
            "w-max": !R
        }),
        children: [n.jsx("div", {
            className: "flex-1 flex items-stretch",
            children: n.jsxs(E, {
                ref: T,
                color: s,
                variant: l,
                loading: o,
                disabled: c,
                normalHeight: p,
                ...m,
                padding: pe[e],
                borderRadius: `${g} 0px 0px ${g}`,
                height: w[e],
                textClassName: ce[e],
                fullWidth: R,
                children: [!!r && n.jsx(y, {
                    name: r,
                    size: e
                }), d, !!a && n.jsx(y, {
                    name: a,
                    size: e
                })]
            })
        }), l !== "outlined" && n.jsx(ie, {
            direction: "vertical",
            color: "transparent"
        }), n.jsx(E, {
            ref: f,
            color: s,
            variant: l,
            disabled: c || o,
            normalHeight: p,
            borderRadius: `0px ${g} ${g} 0px`,
            height: w[e],
            width: w[e],
            borderWidth: u({
                "1px": l === "primary" || l === "secondary",
                "1px 1px 1px 0px": l === "outlined"
            }),
            ...m,
            onClick: A,
            children: n.jsx("div", {
                className: u("grid place-items-center", {
                    "rotate-180": h
                }),
                children: n.jsx(j, {
                    name: "arrow-drop-down",
                    size: ue[e],
                    color: P(s, l)
                })
            })
        }), n.jsx(F, {
            open: h,
            anchorEl: f == null ? void 0 : f.current,
            onClose: B,
            children: t
        })]
    })
}
)
  , Ae = {
    ROUNDED: "rounded",
    CIRCULAR: "circular"
}
  , de = {
    micro: "4px",
    tiny: "4px",
    small: "8px",
    medium: "8px",
    large: "8px"
}
  , O = {
    micro: "24px",
    tiny: "32px",
    small: "40px",
    medium: "48px",
    large: "56px"
}
  , xe = {
    micro: 4,
    tiny: 4,
    small: 6,
    medium: 8,
    large: 8
}
  , Be = x.forwardRef(function({size: e="medium", shape: r="circular", variant: a="text", color: s, children: l, iconName: o, ...c}, p) {
    return n.jsx(E, {
        ref: p,
        ...c,
        borderRadius: r === "circular" ? "9999px" : de[e],
        width: O[e],
        height: O[e],
        color: s,
        variant: a,
        loaderSize: xe[e],
        Component: r === "circular" ? K : k,
        children: n.jsx(y, {
            name: o,
            size: e,
            color: s,
            variant: a
        })
    })
});
export {he as B, ie as D, Ie as F, Be as I, q as L, i as a, Te as b, ye as c, Ae as d, S as e};
//# debugId=6301382a-e48f-55c3-9c01-1223e891da7c
//# sourceMappingURL=index-d8ab1de0.js.map
