!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "ee716b0f-bc4f-5e51-8081-431e577f07d9")
    } catch (e) {}
}();
import {r as u, a as y, g as _, s as p, c as i, _ as c, aE as m, a$ as M, b0 as z, u as I, d as j, j as s, e as B, f as P, a_ as T} from "./index-4d92c338.js";
import {r as $, i as b} from "./createSvgIcon-d5208ee1.js";
import {S as E} from "./SwitchBase-52e3ed86.js";
const D = a=>{
    const t = u.useRef({});
    return u.useEffect(()=>{
        t.current = a
    }
    ),
    t.current
}
  , ha = D;
function N(a) {
    return _("MuiSwitch", a)
}
const O = y("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"])
  , e = O
  , A = ["className", "color", "edge", "size", "sx"]
  , q = a=>{
    const {classes: t, edge: o, size: r, color: l, checked: h, disabled: v} = a
      , g = {
        root: ["root", o && `edge ${i(o)}`, `size ${i(r)}`],
        switchBase: ["switchBase", `color ${i(l)}`, h && "checked", v && "disabled"],
        thumb: ["thumb"],
        track: ["track"],
        input: ["input"]
    }
      , f = P(g, N, t);
    return c({}, t, f)
}
  , L = p("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (a,t)=>{
        const {ownerState: o} = a;
        return [t.root, o.edge && t[`edge ${i(o.edge)}`], t[`size ${i(o.size)}`]]
    }
})(({ownerState: a})=>c({
    display: "inline-flex",
    width: 34 + 12 * 2,
    height: 14 + 12 * 2,
    overflow: "hidden",
    padding: 12,
    boxSizing: "border-box",
    position: "relative",
    flexShrink: 0,
    zIndex: 0,
    verticalAlign: "middle",
    "@media print": {
        colorAdjust: "exact"
    }
}, a.edge === "start" && {
    marginLeft: -8
}, a.edge === "end" && {
    marginRight: -8
}, a.size === "small" && {
    width: 40,
    height: 24,
    padding: 7,
    [`& .${e.thumb}`]: {
        width: 16,
        height: 16
    },
    [`& .${e.switchBase}`]: {
        padding: 4,
        [`&.${e.checked}`]: {
            transform: "translateX(16px)"
        }
    }
}))
  , U = p(E, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (a,t)=>{
        const {ownerState: o} = a;
        return [t.switchBase, {
            [`& .${e.input}`]: t.input
        }, o.color !== "default" && t[`color ${i(o.color)}`]]
    }
})(({theme: a})=>({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    color: a.vars ? a.vars.palette.Switch.defaultColor : `${a.palette.mode === "light" ? a.palette.common.white : a.palette.grey[300]}`,
    transition: a.transitions.create(["left", "transform"], {
        duration: a.transitions.duration.shortest
    }),
    [`&.${e.checked}`]: {
        transform: "translateX(20px)"
    },
    [`&.${e.disabled}`]: {
        color: a.vars ? a.vars.palette.Switch.defaultDisabledColor : `${a.palette.mode === "light" ? a.palette.grey[100] : a.palette.grey[600]}`
    },
    [`&.${e.checked} + .${e.track}`]: {
        opacity: .5
    },
    [`&.${e.disabled} + .${e.track}`]: {
        opacity: a.vars ? a.vars.opacity.switchTrackDisabled : `${a.palette.mode === "light" ? .12 : .2}`
    },
    [`& .${e.input}`]: {
        left: "-100%",
        width: "300%"
    }
}), ({theme: a, ownerState: t})=>c({
    "&:hover": {
        backgroundColor: a.vars ? `rgba(${a.vars.palette.action.activeChannel} / ${a.vars.palette.action.hoverOpacity})` : m(a.palette.action.active, a.palette.action.hoverOpacity),
        "@media (hover: none)": {
            backgroundColor: "transparent"
        }
    }
}, t.color !== "default" && {
    [`&.${e.checked}`]: {
        color: (a.vars || a).palette[t.color].main,
        "&:hover": {
            backgroundColor: a.vars ? `rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})` : m(a.palette[t.color].main, a.palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        },
        [`&.${e.disabled}`]: {
            color: a.vars ? a.vars.palette.Switch[`${t.color}DisabledColor`] : `${a.palette.mode === "light" ? M(a.palette[t.color].main, .62) : z(a.palette[t.color].main, .55)}`
        }
    },
    [`&.${e.checked} + .${e.track}`]: {
        backgroundColor: (a.vars || a).palette[t.color].main
    }
}))
  , V = p("span", {
    name: "MuiSwitch",
    slot: "Track",
    overridesResolver: (a,t)=>t.track
})(({theme: a})=>({
    height: "100%",
    width: "100%",
    borderRadius: 14 / 2,
    zIndex: -1,
    transition: a.transitions.create(["opacity", "background-color"], {
        duration: a.transitions.duration.shortest
    }),
    backgroundColor: a.vars ? a.vars.palette.common.onBackground : `${a.palette.mode === "light" ? a.palette.common.black : a.palette.common.white}`,
    opacity: a.vars ? a.vars.opacity.switchTrack : `${a.palette.mode === "light" ? .38 : .3}`
}))
  , Y = p("span", {
    name: "MuiSwitch",
    slot: "Thumb",
    overridesResolver: (a,t)=>t.thumb
})(({theme: a})=>({
    boxShadow: (a.vars || a).shadows[1],
    backgroundColor: "currentColor",
    width: 20,
    height: 20,
    borderRadius: "50%"
}))
  , X = u.forwardRef(function(t, o) {
    const r = I({
        props: t,
        name: "MuiSwitch"
    })
      , {className: l, color: h="primary", edge: v=!1, size: g="medium", sx: f} = r
      , C = j(r, A)
      , n = c({}, r, {
        color: h,
        edge: v,
        size: g
    })
      , d = q(n)
      , R = s.jsx(Y, {
        className: d.thumb,
        ownerState: n
    });
    return s.jsxs(L, {
        className: B(d.root, l),
        sx: f,
        ownerState: n,
        children: [s.jsx(U, c({
            type: "checkbox",
            icon: R,
            checkedIcon: R,
            ref: o,
            ownerState: n
        }, C, {
            classes: c({}, d, {
                root: d.switchBase
            })
        })), s.jsx(V, {
            className: d.track,
            ownerState: n
        })]
    })
})
  , W = X;
var k = {}
  , H = b;
Object.defineProperty(k, "__esModule", {
    value: !0
});
var F = k.default = void 0
  , G = H($())
  , J = s
  , K = (0,
G.default)((0,
J.jsx)("path", {
    d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
}), "Share");
F = k.default = K;
const w = {
    PRIMARY: "primary",
    PRIMARY_INVERTED: "primaryInverted"
}
  , Q = T(a=>{
    const t = ({intent: r})=>r === w.PRIMARY_INVERTED ? `${a.palette.black} !important` : `${a.palette.white.main} !important`;
    return {
        root: {
            width: 28,
            height: 16,
            padding: 0,
            display: "flex"
        },
        switchBase: {
            color: t,
            padding: 2,
            "&$checked": {
                transform: "translateX(12px)",
                "& + $track": {
                    opacity: 1
                }
            }
        },
        checked: {
            color: t
        },
        thumb: {
            width: 12,
            height: 12,
            boxShadow: "none"
        },
        track: {
            backgroundColor: ({intent: r})=>r === w.PRIMARY_INVERTED ? `${a.palette.white.main} !important` : `${a.palette.black} !important`,
            borderRadius: 1e4
        }
    }
}
);
function Z({forwardedRef: a, classes: t, intent: o=w.PRIMARY, ...r}) {
    const l = Q({
        intent: o
    });
    return s.jsx(W, {
        classes: {
            ...l,
            ...t
        },
        ref: a,
        ...r
    })
}
const va = u.forwardRef((a,t)=>s.jsx(Z, {
    ...a,
    forwardedRef: t
}));
var S = {}
  , aa = b;
Object.defineProperty(S, "__esModule", {
    value: !0
});
var ta = S.default = void 0
  , ea = aa($())
  , oa = s
  , ra = (0,
ea.default)((0,
oa.jsx)("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonChecked");
ta = S.default = ra;
var x = {}
  , sa = b;
Object.defineProperty(x, "__esModule", {
    value: !0
});
var ia = x.default = void 0
  , ca = sa($())
  , la = s
  , na = (0,
ca.default)((0,
la.jsx)("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
}), "VisibilityOff");
ia = x.default = na;
export {W as M, va as S, F as a, ia as b, w as c, ta as d, e as s, ha as u};
//# debugId=ee716b0f-bc4f-5e51-8081-431e577f07d9
//# sourceMappingURL=VisibilityOff-5dc3800a.js.map
