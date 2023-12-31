!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "99123afe-f573-53b9-803c-a2017c39eef6")
    } catch (e) {}
}();
import {a as ro, g as ao, s as A, c as i, _ as u, r as io, u as no, d as to, b8 as D, e as M, j as U, f as so} from "./index-4d92c338.js";
import {u as F} from "./VisibilityOff-5dc3800a.js";
function lo(r) {
    const {badgeContent: o, invisible: a=!1, max: l=99, showZero: e=!1} = r
      , c = F({
        badgeContent: o,
        max: l
    });
    let t = a;
    a === !1 && o === 0 && !e && (t = !0);
    const {badgeContent: n, max: g=l} = t ? c : r
      , p = n && Number(n) > g ? `${g}+` : n;
    return {
        badgeContent: n,
        invisible: t,
        max: g,
        displayValue: p
    }
}
function eo(r) {
    return ao("MuiBadge", r)
}
const co = ro("MuiBadge", ["root", "badge", "dot", "standard", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft", "invisible", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "overlapRectangular", "overlapCircular", "anchorOriginTopLeftCircular", "anchorOriginTopLeftRectangular", "anchorOriginTopRightCircular", "anchorOriginTopRightRectangular", "anchorOriginBottomLeftCircular", "anchorOriginBottomLeftRectangular", "anchorOriginBottomRightCircular", "anchorOriginBottomRightRectangular"])
  , s = co
  , go = ["anchorOrigin", "className", "classes", "component", "components", "componentsProps", "children", "overlap", "color", "invisible", "max", "badgeContent", "slots", "slotProps", "showZero", "variant"]
  , O = 10
  , x = 4
  , po = r=>{
    const {color: o, anchorOrigin: a, invisible: l, overlap: e, variant: c, classes: t={}} = r
      , n = {
        root: ["root"],
        badge: ["badge", c, l && "invisible", `anchorOrigin ${i(a.vertical)}${i(a.horizontal)}`, `anchorOrigin ${i(a.vertical)}${i(a.horizontal)}${i(e)}`, `overlap ${i(e)}`, o !== "default" && `color ${i(o)}`]
    };
    return so(n, eo, t)
}
  , vo = A("span", {
    name: "MuiBadge",
    slot: "Root",
    overridesResolver: (r,o)=>o.root
})({
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle",
    flexShrink: 0
})
  , uo = A("span", {
    name: "MuiBadge",
    slot: "Badge",
    overridesResolver: (r,o)=>{
        const {ownerState: a} = r;
        return [o.badge, o[a.variant], o[`anchorOrigin ${i(a.anchorOrigin.vertical)}${i(a.anchorOrigin.horizontal)}${i(a.overlap)}`], a.color !== "default" && o[`color ${i(a.color)}`], a.invisible && o.invisible]
    }
})(({theme: r, ownerState: o})=>u({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    boxSizing: "border-box",
    fontFamily: r.typography.fontFamily,
    fontWeight: r.typography.fontWeightMedium,
    fontSize: r.typography.pxToRem(12),
    minWidth: O * 2,
    lineHeight: 1,
    padding: "0 6px",
    height: O * 2,
    borderRadius: O,
    zIndex: 1,
    transition: r.transitions.create("transform", {
        easing: r.transitions.easing.easeInOut,
        duration: r.transitions.duration.enteringScreen
    })
}, o.color !== "default" && {
    backgroundColor: (r.vars || r).palette[o.color].main,
    color: (r.vars || r).palette[o.color].contrastText
}, o.variant === "dot" && {
    borderRadius: x,
    height: x * 2,
    minWidth: x * 2,
    padding: 0
}, o.anchorOrigin.vertical === "top" && o.anchorOrigin.horizontal === "right" && o.overlap === "rectangular" && {
    top: 0,
    right: 0,
    transform: "scale(1) translate(50%, -50%)",
    transformOrigin: "100% 0%",
    [`&.${s.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
    }
}, o.anchorOrigin.vertical === "bottom" && o.anchorOrigin.horizontal === "right" && o.overlap === "rectangular" && {
    bottom: 0,
    right: 0,
    transform: "scale(1) translate(50%, 50%)",
    transformOrigin: "100% 100%",
    [`&.${s.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
    }
}, o.anchorOrigin.vertical === "top" && o.anchorOrigin.horizontal === "left" && o.overlap === "rectangular" && {
    top: 0,
    left: 0,
    transform: "scale(1) translate(-50%, -50%)",
    transformOrigin: "0% 0%",
    [`&.${s.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
    }
}, o.anchorOrigin.vertical === "bottom" && o.anchorOrigin.horizontal === "left" && o.overlap === "rectangular" && {
    bottom: 0,
    left: 0,
    transform: "scale(1) translate(-50%, 50%)",
    transformOrigin: "0% 100%",
    [`&.${s.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
    }
}, o.anchorOrigin.vertical === "top" && o.anchorOrigin.horizontal === "right" && o.overlap === "circular" && {
    top: "14%",
    right: "14%",
    transform: "scale(1) translate(50%, -50%)",
    transformOrigin: "100% 0%",
    [`&.${s.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
    }
}, o.anchorOrigin.vertical === "bottom" && o.anchorOrigin.horizontal === "right" && o.overlap === "circular" && {
    bottom: "14%",
    right: "14%",
    transform: "scale(1) translate(50%, 50%)",
    transformOrigin: "100% 100%",
    [`&.${s.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
    }
}, o.anchorOrigin.vertical === "top" && o.anchorOrigin.horizontal === "left" && o.overlap === "circular" && {
    top: "14%",
    left: "14%",
    transform: "scale(1) translate(-50%, -50%)",
    transformOrigin: "0% 0%",
    [`&.${s.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
    }
}, o.anchorOrigin.vertical === "bottom" && o.anchorOrigin.horizontal === "left" && o.overlap === "circular" && {
    bottom: "14%",
    left: "14%",
    transform: "scale(1) translate(-50%, 50%)",
    transformOrigin: "0% 100%",
    [`&.${s.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
    }
}, o.invisible && {
    transition: r.transitions.create("transform", {
        easing: r.transitions.easing.easeInOut,
        duration: r.transitions.duration.leavingScreen
    })
}))
  , ho = io.forwardRef(function(o, a) {
    var l, e, c, t, n, g;
    const p = no({
        props: o,
        name: "MuiBadge"
    })
      , {anchorOrigin: P={
        vertical: "top",
        horizontal: "right"
    }, className: k, component: V, components: $={}, componentsProps: C={}, children: E, overlap: R="rectangular", color: B="default", invisible: H=!1, max: Z=99, badgeContent: y, slots: d, slotProps: v, showZero: z=!1, variant: h="standard"} = p
      , q = to(p, go)
      , {badgeContent: T, invisible: G, max: J, displayValue: K} = lo({
        max: Z,
        invisible: H,
        badgeContent: y,
        showZero: z
    })
      , Q = F({
        anchorOrigin: P,
        color: B,
        overlap: R,
        variant: h,
        badgeContent: y
    })
      , _ = G || T == null && h !== "dot"
      , {color: X=B, overlap: Y=R, anchorOrigin: S=P, variant: N=h} = _ ? Q : p
      , I = N !== "dot" ? K : void 0
      , f = u({}, p, {
        badgeContent: T,
        invisible: _,
        max: J,
        displayValue: I,
        showZero: z,
        anchorOrigin: S,
        color: X,
        overlap: Y,
        variant: N
    })
      , L = po(f)
      , W = (l = (e = d == null ? void 0 : d.root) != null ? e : $.Root) != null ? l : vo
      , j = (c = (t = d == null ? void 0 : d.badge) != null ? t : $.Badge) != null ? c : uo
      , m = (n = v == null ? void 0 : v.root) != null ? n : C.root
      , b = (g = v == null ? void 0 : v.badge) != null ? g : C.badge
      , w = D({
        elementType: W,
        externalSlotProps: m,
        externalForwardedProps: q,
        additionalProps: {
            ref: a,
            as: V
        },
        ownerState: f,
        className: M(m == null ? void 0 : m.className, L.root, k)
    })
      , oo = D({
        elementType: j,
        externalSlotProps: b,
        ownerState: f,
        className: M(L.badge, b == null ? void 0 : b.className)
    });
    return U.jsxs(W, u({}, w, {
        children: [E, U.jsx(j, u({}, oo, {
            children: I
        }))]
    }))
})
  , bo = ho;
export {bo as B};
//# debugId=99123afe-f573-53b9-803c-a2017c39eef6
//# sourceMappingURL=Badge-af36a42d.js.map
