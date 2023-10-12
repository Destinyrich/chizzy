!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "b57e49df-e805-509e-b2d2-1d04316d761a")
    } catch (e) {}
}();
import {a_ as S, j as a, aT as C, x as r, aC as T} from "./index-4d92c338.js";
function c({theme: e, intent: t, status: o}) {
    const n = o === "hover";
    switch (t) {
    case r.PRIMARY:
        return n ? e.palette.grey[800] : e.palette.grey[900];
    case r.SECONDARY:
        return "#00000000";
    case r.DESTRUCTIVE:
        return n ? `${e.palette.red.main}dd` : e.palette.red.main;
    case r.PRIMARY_INVERTED:
        return n ? e.palette.grey[100] : e.palette.white.main;
    case r.SUCCESS:
        return e.palette.green[n ? "border" : "main"];
    case r.SECONDARY_INVERTED:
        return e.palette.grey[900];
    case r.MEDIAKIT_PRIMARY:
        return n ? "#B877FC" : "#9900E1";
    default:
        return "#00000000"
    }
}
function R({theme: e, intent: t, status: o}) {
    const n = o === "hover";
    switch (t) {
    case r.PRIMARY:
        return "#00000000";
    case r.SECONDARY:
        return n ? e.palette.grey[800] : e.palette.grey[900];
    case r.DESTRUCTIVE:
        return "#00000000";
    case r.PRIMARY_INVERTED:
        return e.palette.white.main;
    case r.SUCCESS:
        return "#00000000";
    case r.SECONDARY_INVERTED:
        return `${e.palette.grey[600]} !important`;
    case r.MEDIAKIT_PRIMARY:
        return "#00000000";
    default:
        return e.palette.grey[900]
    }
}
function I({theme: e, intent: t, disabled: o}) {
    switch (t) {
    case r.PRIMARY:
        return e.palette.white.main;
    case r.SECONDARY:
        return e.palette.grey[900];
    case r.DESTRUCTIVE:
        return e.palette.white.main;
    case r.PRIMARY_INVERTED:
        return e.palette.grey[900];
    case r.SUCCESS:
        return e.palette.white.main;
    case r.SECONDARY_INVERTED:
        return o ? `${e.palette.grey[600]} !important` : e.palette.white.main;
    case r.MEDIAKIT_PRIMARY:
        return e.palette.white.main;
    default:
        return e.palette.grey[900]
    }
}
const D = S(e=>({
    root: {
        minHeight: 40,
        textTransform: "none",
        letterSpacing: "-0.012em",
        boxShadow: "none",
        backgroundColor: ({intent: t})=>c({
            theme: e,
            intent: t
        }),
        color: ({intent: t, disabled: o})=>I({
            theme: e,
            intent: t,
            disabled: o
        }),
        borderColor: ({intent: t})=>R({
            theme: e,
            intent: t
        }),
        fontSize: e.beaconsTypography.h3.fontSize,
        fontWeight: e.beaconsTypography.h3.fontWeight,
        "&:hover": {
            backgroundColor: ({intent: t})=>c({
                theme: e,
                intent: t,
                status: "hover"
            }),
            borderColor: ({intent: t})=>R({
                theme: e,
                intent: t,
                status: "hover"
            }),
            boxShadow: "none"
        },
        "&$disabled": {
            boxShadow: "none"
        },
        "&$fullWidth": {
            minHeight: 56,
            fontSize: e.beaconsTypography.h2.fontSize,
            fontWeight: e.beaconsTypography.h2.fontWeight
        }
    },
    disabled: {
        color: ({intent: t})=>t === r.SECONDARY_INVERTED && `${e.palette.grey[600]} !important`
    },
    fullWidth: {}
}));
function A({intent: e, size: t="large", variant: o="contained", loading: n=!1, disabled: i=!1, children: E, preIcon: l=void 0, postIcon: u=void 0, style: d={}, normalHeight: p=!1, ...g}) {
    const f = D({
        intent: e,
        disabled: i
    });
    let s = o;
    return e === r.PRIMARY || e === r.PRIMARY_INVERTED ? s = "contained" : (e === r.SECONDARY || e === r.SECONDARY_INVERTED) && (s = "outlined"),
    a.jsx(C, {
        size: t,
        variant: s,
        disabled: i || n,
        style: {
            minHeight: p && "inherit",
            ...d
        },
        classes: f,
        ...g,
        children: n ? a.jsx(N, {
            color: e === r.SECONDARY && (s === "outlined" || s === "text") ? "#1c1c1c" : "white"
        }) : a.jsxs(a.Fragment, {
            children: [!!l && a.jsxs(a.Fragment, {
                children: [l, " ", a.jsx("div", {
                    className: "mr-3"
                })]
            }), E, !!u && a.jsxs(a.Fragment, {
                children: [a.jsx("div", {
                    className: "ml-3"
                }), " ", u]
            })]
        })
    })
}
function N({color: e="white"}) {
    return a.jsx("span", {
        className: "mt-2",
        children: a.jsx(T, {
            size: 10,
            color: e
        })
    })
}
export {A as B};
//# debugId=b57e49df-e805-509e-b2d2-1d04316d761a
//# sourceMappingURL=ButtonV1-c477208d.js.map
