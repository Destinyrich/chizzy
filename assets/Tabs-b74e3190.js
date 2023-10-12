!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "2761f691-f0d0-5e47-8b05-9d6862ea95f5")
    } catch (e) {}
}();
import {r as a, b1 as it, d as G, aG as ne, j as v, _ as d, b2 as le, b3 as se, b4 as Dt, g as ct, a as dt, s as j, b5 as ae, aY as ie, c as et, u as ut, e as L, f as pt, b6 as Ft, t as jt, b7 as ce, b8 as at, aW as xt, b9 as de} from "./index-4d92c338.js";
import {M as ue} from "./Modal-6761fec1.js";
import {o as ft, d as gt} from "./createSvgIcon-d5208ee1.js";
import "./react-is.production.min-a192e302.js";
let tt;
function Ht() {
    if (tt)
        return tt;
    const t = document.createElement("div")
      , e = document.createElement("div");
    return e.style.width = "10px",
    e.style.height = "1px",
    t.appendChild(e),
    t.dir = "rtl",
    t.style.fontSize = "14px",
    t.style.width = "4px",
    t.style.height = "1px",
    t.style.position = "absolute",
    t.style.top = "-1000px",
    t.style.overflow = "scroll",
    document.body.appendChild(t),
    tt = "reverse",
    t.scrollLeft > 0 ? tt = "default" : (t.scrollLeft = 1,
    t.scrollLeft === 0 && (tt = "negative")),
    document.body.removeChild(t),
    tt
}
function pe(t, e) {
    const o = t.scrollLeft;
    if (e !== "rtl")
        return o;
    switch (Ht()) {
    case "negative":
        return t.scrollWidth - t.clientWidth + o;
    case "reverse":
        return t.scrollWidth - t.clientWidth - o;
    default:
        return o
    }
}
const fe = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function be(t, e, o) {
    const r = e.getBoundingClientRect()
      , l = o && o.getBoundingClientRect()
      , i = ft(e);
    let h;
    if (e.fakeTransform)
        h = e.fakeTransform;
    else {
        const f = i.getComputedStyle(e);
        h = f.getPropertyValue("-webkit-transform") || f.getPropertyValue("transform")
    }
    let m = 0
      , u = 0;
    if (h && h !== "none" && typeof h == "string") {
        const f = h.split("(")[1].split(")")[0].split(",");
        m = parseInt(f[4], 10),
        u = parseInt(f[5], 10)
    }
    return t === "left" ? l ? `translateX(${l.right + m - r.left}px)` : `translateX(${i.innerWidth + m - r.left}px)` : t === "right" ? l ? `translateX(-${r.right - l.left - m}px)` : `translateX(-${r.left + r.width - m}px)` : t === "up" ? l ? `translateY(${l.bottom + u - r.top}px)` : `translateY(${i.innerHeight + u - r.top}px)` : l ? `translateY(-${r.top - l.top + r.height - u}px)` : `translateY(-${r.top + r.height - u}px)`
}
function he(t) {
    return typeof t == "function" ? t() : t
}
function lt(t, e, o) {
    const r = he(o)
      , l = be(t, e, r);
    l && (e.style.webkitTransform = l,
    e.style.transform = l)
}
const me = a.forwardRef(function(e, o) {
    const r = it()
      , l = {
        enter: r.transitions.easing.easeOut,
        exit: r.transitions.easing.sharp
    }
      , i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen
    }
      , {addEndListener: h, appear: m=!0, children: u, container: f, direction: x="down", easing: k=l, in: g, onEnter: B, onEntered: M, onEntering: T, onExit: E, onExited: A, onExiting: P, style: $, timeout: z=i, TransitionComponent: D=le} = e
      , N = G(e, fe)
      , S = a.useRef(null)
      , V = ne(u.ref, S, o)
      , y = c=>w=>{
        c && (w === void 0 ? c(S.current) : c(S.current, w))
    }
      , C = y((c,w)=>{
        lt(x, c, f),
        se(c),
        B && B(c, w)
    }
    )
      , X = y((c,w)=>{
        const F = Dt({
            timeout: z,
            style: $,
            easing: k
        }, {
            mode: "enter"
        });
        c.style.webkitTransition = r.transitions.create("-webkit-transform", d({}, F)),
        c.style.transition = r.transitions.create("transform", d({}, F)),
        c.style.webkitTransform = "none",
        c.style.transform = "none",
        T && T(c, w)
    }
    )
      , J = y(M)
      , W = y(P)
      , I = y(c=>{
        const w = Dt({
            timeout: z,
            style: $,
            easing: k
        }, {
            mode: "exit"
        });
        c.style.webkitTransition = r.transitions.create("-webkit-transform", w),
        c.style.transition = r.transitions.create("transform", w),
        lt(x, c, f),
        E && E(c)
    }
    )
      , U = y(c=>{
        c.style.webkitTransition = "",
        c.style.transition = "",
        A && A(c)
    }
    )
      , Q = c=>{
        h && h(S.current, c)
    }
      , _ = a.useCallback(()=>{
        S.current && lt(x, S.current, f)
    }
    , [x, f]);
    return a.useEffect(()=>{
        if (g || x === "down" || x === "right")
            return;
        const c = gt(()=>{
            S.current && lt(x, S.current, f)
        }
        )
          , w = ft(S.current);
        return w.addEventListener("resize", c),
        ()=>{
            c.clear(),
            w.removeEventListener("resize", c)
        }
    }
    , [x, g, f]),
    a.useEffect(()=>{
        g || _()
    }
    , [g, _]),
    v.jsx(D, d({
        nodeRef: S,
        onEnter: C,
        onEntered: J,
        onEntering: X,
        onExit: I,
        onExited: U,
        onExiting: W,
        addEndListener: Q,
        appear: m,
        in: g,
        timeout: z
    }, N, {
        children: (c,w)=>a.cloneElement(u, d({
            ref: V,
            style: d({
                visibility: c === "exited" && !g ? "hidden" : void 0
            }, $, u.props.style)
        }, w))
    }))
})
  , xe = me;
function ve(t) {
    return ct("MuiDrawer", t)
}
dt("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const ge = ["BackdropProps"]
  , Se = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"]
  , Xt = (t,e)=>{
    const {ownerState: o} = t;
    return [e.root, (o.variant === "permanent" || o.variant === "persistent") && e.docked, e.modal]
}
  , we = t=>{
    const {classes: e, anchor: o, variant: r} = t
      , l = {
        root: ["root"],
        docked: [(r === "permanent" || r === "persistent") && "docked"],
        modal: ["modal"],
        paper: ["paper", `paperAnchor ${et(o)}`, r !== "temporary" && `paperAnchorDocked ${et(o)}`]
    };
    return pt(l, ve, e)
}
  , ye = j(ue, {
    name: "MuiDrawer",
    slot: "Root",
    overridesResolver: Xt
})(({theme: t})=>({
    zIndex: (t.vars || t).zIndex.drawer
}))
  , Wt = j("div", {
    shouldForwardProp: ae,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: Xt
})({
    flex: "0 0 auto"
})
  , Ce = j(ie, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (t,e)=>{
        const {ownerState: o} = t;
        return [e.paper, e[`paperAnchor ${et(o.anchor)}`], o.variant !== "temporary" && e[`paperAnchorDocked ${et(o.anchor)}`]]
    }
})(({theme: t, ownerState: e})=>d({
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flex: "1 0 auto",
    zIndex: (t.vars || t).zIndex.drawer,
    WebkitOverflowScrolling: "touch",
    position: "fixed",
    top: 0,
    outline: 0
}, e.anchor === "left" && {
    left: 0
}, e.anchor === "top" && {
    top: 0,
    left: 0,
    right: 0,
    height: "auto",
    maxHeight: "100%"
}, e.anchor === "right" && {
    right: 0
}, e.anchor === "bottom" && {
    top: "auto",
    left: 0,
    bottom: 0,
    right: 0,
    height: "auto",
    maxHeight: "100%"
}, e.anchor === "left" && e.variant !== "temporary" && {
    borderRight: `1px solid ${(t.vars || t).palette.divider}`
}, e.anchor === "top" && e.variant !== "temporary" && {
    borderBottom: `1px solid ${(t.vars || t).palette.divider}`
}, e.anchor === "right" && e.variant !== "temporary" && {
    borderLeft: `1px solid ${(t.vars || t).palette.divider}`
}, e.anchor === "bottom" && e.variant !== "temporary" && {
    borderTop: `1px solid ${(t.vars || t).palette.divider}`
}))
  , Ot = {
    left: "right",
    right: "left",
    top: "down",
    bottom: "up"
};
function Be(t) {
    return ["left", "right"].indexOf(t) !== -1
}
function Ee(t, e) {
    return t.direction === "rtl" && Be(e) ? Ot[e] : e
}
const Te = a.forwardRef(function(e, o) {
    const r = ut({
        props: e,
        name: "MuiDrawer"
    })
      , l = it()
      , i = {
        enter: l.transitions.duration.enteringScreen,
        exit: l.transitions.duration.leavingScreen
    }
      , {anchor: h="left", BackdropProps: m, children: u, className: f, elevation: x=16, hideBackdrop: k=!1, ModalProps: {BackdropProps: g}={}, onClose: B, open: M=!1, PaperProps: T={}, SlideProps: E, TransitionComponent: A=xe, transitionDuration: P=i, variant: $="temporary"} = r
      , z = G(r.ModalProps, ge)
      , D = G(r, Se)
      , N = a.useRef(!1);
    a.useEffect(()=>{
        N.current = !0
    }
    , []);
    const S = Ee(l, h)
      , y = d({}, r, {
        anchor: h,
        elevation: x,
        open: M,
        variant: $
    }, D)
      , C = we(y)
      , X = v.jsx(Ce, d({
        elevation: $ === "temporary" ? x : 0,
        square: !0
    }, T, {
        className: L(C.paper, T.className),
        ownerState: y,
        children: u
    }));
    if ($ === "permanent")
        return v.jsx(Wt, d({
            className: L(C.root, C.docked, f),
            ownerState: y,
            ref: o
        }, D, {
            children: X
        }));
    const J = v.jsx(A, d({
        in: M,
        direction: Ot[S],
        timeout: P,
        appear: N.current
    }, E, {
        children: X
    }));
    return $ === "persistent" ? v.jsx(Wt, d({
        className: L(C.root, C.docked, f),
        ownerState: y,
        ref: o
    }, D, {
        children: J
    })) : v.jsx(ye, d({
        BackdropProps: d({}, m, g, {
            transitionDuration: P
        }),
        className: L(C.root, C.modal, f),
        open: M,
        ownerState: y,
        onClose: B,
        hideBackdrop: k,
        ref: o
    }, D, z, {
        children: J
    }))
})
  , io = Te;
function Pe(t) {
    return ct("MuiTab", t)
}
const Re = dt("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"])
  , q = Re
  , ke = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"]
  , Ie = t=>{
    const {classes: e, textColor: o, fullWidth: r, wrapped: l, icon: i, label: h, selected: m, disabled: u} = t
      , f = {
        root: ["root", i && h && "labelIcon", `textColor ${et(o)}`, r && "fullWidth", l && "wrapped", m && "selected", u && "disabled"],
        iconWrapper: ["iconWrapper"]
    };
    return pt(f, Pe, e)
}
  , Me = j(Ft, {
    name: "MuiTab",
    slot: "Root",
    overridesResolver: (t,e)=>{
        const {ownerState: o} = t;
        return [e.root, o.label && o.icon && e.labelIcon, e[`textColor ${et(o.textColor)}`], o.fullWidth && e.fullWidth, o.wrapped && e.wrapped]
    }
})(({theme: t, ownerState: e})=>d({}, t.typography.button, {
    maxWidth: 360,
    minWidth: 90,
    position: "relative",
    minHeight: 48,
    flexShrink: 0,
    padding: "12px 16px",
    overflow: "hidden",
    whiteSpace: "normal",
    textAlign: "center"
}, e.label && {
    flexDirection: e.iconPosition === "top" || e.iconPosition === "bottom" ? "column" : "row"
}, {
    lineHeight: 1.25
}, e.icon && e.label && {
    minHeight: 72,
    paddingTop: 9,
    paddingBottom: 9,
    [`& > .${q.iconWrapper}`]: d({}, e.iconPosition === "top" && {
        marginBottom: 6
    }, e.iconPosition === "bottom" && {
        marginTop: 6
    }, e.iconPosition === "start" && {
        marginRight: t.spacing(1)
    }, e.iconPosition === "end" && {
        marginLeft: t.spacing(1)
    })
}, e.textColor === "inherit" && {
    color: "inherit",
    opacity: .6,
    [`&.${q.selected}`]: {
        opacity: 1
    },
    [`&.${q.disabled}`]: {
        opacity: (t.vars || t).palette.action.disabledOpacity
    }
}, e.textColor === "primary" && {
    color: (t.vars || t).palette.text.secondary,
    [`&.${q.selected}`]: {
        color: (t.vars || t).palette.primary.main
    },
    [`&.${q.disabled}`]: {
        color: (t.vars || t).palette.text.disabled
    }
}, e.textColor === "secondary" && {
    color: (t.vars || t).palette.text.secondary,
    [`&.${q.selected}`]: {
        color: (t.vars || t).palette.secondary.main
    },
    [`&.${q.disabled}`]: {
        color: (t.vars || t).palette.text.disabled
    }
}, e.fullWidth && {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: "none"
}, e.wrapped && {
    fontSize: t.typography.pxToRem(12)
}))
  , $e = a.forwardRef(function(e, o) {
    const r = ut({
        props: e,
        name: "MuiTab"
    })
      , {className: l, disabled: i=!1, disableFocusRipple: h=!1, fullWidth: m, icon: u, iconPosition: f="top", indicator: x, label: k, onChange: g, onClick: B, onFocus: M, selected: T, selectionFollowsFocus: E, textColor: A="inherit", value: P, wrapped: $=!1} = r
      , z = G(r, ke)
      , D = d({}, r, {
        disabled: i,
        disableFocusRipple: h,
        selected: T,
        icon: !!u,
        iconPosition: f,
        label: !!k,
        fullWidth: m,
        textColor: A,
        wrapped: $
    })
      , N = Ie(D)
      , S = u && k && a.isValidElement(u) ? a.cloneElement(u, {
        className: L(N.iconWrapper, u.props.className)
    }) : u
      , V = C=>{
        !T && g && g(C, P),
        B && B(C)
    }
      , y = C=>{
        E && !T && g && g(C, P),
        M && M(C)
    }
    ;
    return v.jsxs(Me, d({
        focusRipple: !h,
        className: L(N.root, l),
        ref: o,
        role: "tab",
        "aria-selected": T,
        disabled: i,
        onClick: V,
        onFocus: y,
        ownerState: D,
        tabIndex: T ? 0 : -1
    }, z, {
        children: [f === "top" || f === "start" ? v.jsxs(a.Fragment, {
            children: [S, k]
        }) : v.jsxs(a.Fragment, {
            children: [k, S]
        }), x]
    }))
})
  , co = $e
  , ze = jt(v.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft")
  , De = jt(v.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function We(t) {
    return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2
}
function Le(t, e, o, r={}, l=()=>{}
) {
    const {ease: i=We, duration: h=300} = r;
    let m = null;
    const u = e[t];
    let f = !1;
    const x = ()=>{
        f = !0
    }
      , k = g=>{
        if (f) {
            l(new Error("Animation cancelled"));
            return
        }
        m === null && (m = g);
        const B = Math.min(1, (g - m) / h);
        if (e[t] = i(B) * (o - u) + u,
        B >= 1) {
            requestAnimationFrame(()=>{
                l(null)
            }
            );
            return
        }
        requestAnimationFrame(k)
    }
    ;
    return u === o ? (l(new Error("Element already at target position")),
    x) : (requestAnimationFrame(k),
    x)
}
const Ae = ["onChange"]
  , Ne = {
    width: 99,
    height: 99,
    position: "absolute",
    top: -9999,
    overflow: "scroll"
};
function Fe(t) {
    const {onChange: e} = t
      , o = G(t, Ae)
      , r = a.useRef()
      , l = a.useRef(null)
      , i = ()=>{
        r.current = l.current.offsetHeight - l.current.clientHeight
    }
    ;
    return ce(()=>{
        const h = gt(()=>{
            const u = r.current;
            i(),
            u !== r.current && e(r.current)
        }
        )
          , m = ft(l.current);
        return m.addEventListener("resize", h),
        ()=>{
            h.clear(),
            m.removeEventListener("resize", h)
        }
    }
    , [e]),
    a.useEffect(()=>{
        i(),
        e(r.current)
    }
    , [e]),
    v.jsx("div", d({
        style: Ne,
        ref: l
    }, o))
}
function je(t) {
    return ct("MuiTabScrollButton", t)
}
const He = dt("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"])
  , Xe = He
  , Oe = ["className", "slots", "slotProps", "direction", "orientation", "disabled"]
  , Ye = t=>{
    const {classes: e, orientation: o, disabled: r} = t;
    return pt({
        root: ["root", o, r && "disabled"]
    }, je, e)
}
  , Ve = j(Ft, {
    name: "MuiTabScrollButton",
    slot: "Root",
    overridesResolver: (t,e)=>{
        const {ownerState: o} = t;
        return [e.root, o.orientation && e[o.orientation]]
    }
})(({ownerState: t})=>d({
    width: 40,
    flexShrink: 0,
    opacity: .8,
    [`&.${Xe.disabled}`]: {
        opacity: 0
    }
}, t.orientation === "vertical" && {
    width: "100%",
    height: 40,
    "& svg": {
        transform: `rotate(${t.isRtl ? -90 : 90}deg)`
    }
}))
  , Ue = a.forwardRef(function(e, o) {
    var r, l;
    const i = ut({
        props: e,
        name: "MuiTabScrollButton"
    })
      , {className: h, slots: m={}, slotProps: u={}, direction: f} = i
      , x = G(i, Oe)
      , g = it().direction === "rtl"
      , B = d({
        isRtl: g
    }, i)
      , M = Ye(B)
      , T = (r = m.StartScrollButtonIcon) != null ? r : ze
      , E = (l = m.EndScrollButtonIcon) != null ? l : De
      , A = at({
        elementType: T,
        externalSlotProps: u.startScrollButtonIcon,
        additionalProps: {
            fontSize: "small"
        },
        ownerState: B
    })
      , P = at({
        elementType: E,
        externalSlotProps: u.endScrollButtonIcon,
        additionalProps: {
            fontSize: "small"
        },
        ownerState: B
    });
    return v.jsx(Ve, d({
        component: "div",
        className: L(M.root, h),
        ref: o,
        role: null,
        ownerState: B,
        tabIndex: null
    }, x, {
        children: f === "left" ? v.jsx(T, d({}, A)) : v.jsx(E, d({}, P))
    }))
})
  , _e = Ue;
function Ke(t) {
    return ct("MuiTabs", t)
}
const qe = dt("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"])
  , vt = qe
  , Ge = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"]
  , Lt = (t,e)=>t === e ? t.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t.firstChild
  , At = (t,e)=>t === e ? t.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t.lastChild
  , st = (t,e,o)=>{
    let r = !1
      , l = o(t, e);
    for (; l; ) {
        if (l === t.firstChild) {
            if (r)
                return;
            r = !0
        }
        const i = l.disabled || l.getAttribute("aria-disabled") === "true";
        if (!l.hasAttribute("tabindex") || i)
            l = o(t, l);
        else {
            l.focus();
            return
        }
    }
}
  , Je = t=>{
    const {vertical: e, fixed: o, hideScrollbar: r, scrollableX: l, scrollableY: i, centered: h, scrollButtonsHideMobile: m, classes: u} = t;
    return pt({
        root: ["root", e && "vertical"],
        scroller: ["scroller", o && "fixed", r && "hideScrollbar", l && "scrollableX", i && "scrollableY"],
        flexContainer: ["flexContainer", e && "flexContainerVertical", h && "centered"],
        indicator: ["indicator"],
        scrollButtons: ["scrollButtons", m && "scrollButtonsHideMobile"],
        scrollableX: [l && "scrollableX"],
        hideScrollbar: [r && "hideScrollbar"]
    }, Ke, u)
}
  , Qe = j("div", {
    name: "MuiTabs",
    slot: "Root",
    overridesResolver: (t,e)=>{
        const {ownerState: o} = t;
        return [{
            [`& .${vt.scrollButtons}`]: e.scrollButtons
        }, {
            [`& .${vt.scrollButtons}`]: o.scrollButtonsHideMobile && e.scrollButtonsHideMobile
        }, e.root, o.vertical && e.vertical]
    }
})(({ownerState: t, theme: e})=>d({
    overflow: "hidden",
    minHeight: 48,
    WebkitOverflowScrolling: "touch",
    display: "flex"
}, t.vertical && {
    flexDirection: "column"
}, t.scrollButtonsHideMobile && {
    [`& .${vt.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
            display: "none"
        }
    }
}))
  , Ze = j("div", {
    name: "MuiTabs",
    slot: "Scroller",
    overridesResolver: (t,e)=>{
        const {ownerState: o} = t;
        return [e.scroller, o.fixed && e.fixed, o.hideScrollbar && e.hideScrollbar, o.scrollableX && e.scrollableX, o.scrollableY && e.scrollableY]
    }
})(({ownerState: t})=>d({
    position: "relative",
    display: "inline-block",
    flex: "1 1 auto",
    whiteSpace: "nowrap"
}, t.fixed && {
    overflowX: "hidden",
    width: "100%"
}, t.hideScrollbar && {
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
        display: "none"
    }
}, t.scrollableX && {
    overflowX: "auto",
    overflowY: "hidden"
}, t.scrollableY && {
    overflowY: "auto",
    overflowX: "hidden"
}))
  , to = j("div", {
    name: "MuiTabs",
    slot: "FlexContainer",
    overridesResolver: (t,e)=>{
        const {ownerState: o} = t;
        return [e.flexContainer, o.vertical && e.flexContainerVertical, o.centered && e.centered]
    }
})(({ownerState: t})=>d({
    display: "flex"
}, t.vertical && {
    flexDirection: "column"
}, t.centered && {
    justifyContent: "center"
}))
  , eo = j("span", {
    name: "MuiTabs",
    slot: "Indicator",
    overridesResolver: (t,e)=>e.indicator
})(({ownerState: t, theme: e})=>d({
    position: "absolute",
    height: 2,
    bottom: 0,
    width: "100%",
    transition: e.transitions.create()
}, t.indicatorColor === "primary" && {
    backgroundColor: (e.vars || e).palette.primary.main
}, t.indicatorColor === "secondary" && {
    backgroundColor: (e.vars || e).palette.secondary.main
}, t.vertical && {
    height: "100%",
    width: 2,
    right: 0
}))
  , oo = j(Fe, {
    name: "MuiTabs",
    slot: "ScrollbarSize"
})({
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
        display: "none"
    }
})
  , Nt = {}
  , ro = a.forwardRef(function(e, o) {
    const r = ut({
        props: e,
        name: "MuiTabs"
    })
      , l = it()
      , i = l.direction === "rtl"
      , {"aria-label": h, "aria-labelledby": m, action: u, centered: f=!1, children: x, className: k, component: g="div", allowScrollButtonsMobile: B=!1, indicatorColor: M="primary", onChange: T, orientation: E="horizontal", ScrollButtonComponent: A=_e, scrollButtons: P="auto", selectionFollowsFocus: $, slots: z={}, slotProps: D={}, TabIndicatorProps: N={}, TabScrollButtonProps: S={}, textColor: V="primary", value: y, variant: C="standard", visibleScrollbar: X=!1} = r
      , J = G(r, Ge)
      , W = C === "scrollable"
      , I = E === "vertical"
      , U = I ? "scrollTop" : "scrollLeft"
      , Q = I ? "top" : "left"
      , _ = I ? "bottom" : "right"
      , c = I ? "clientHeight" : "clientWidth"
      , w = I ? "height" : "width"
      , F = d({}, r, {
        component: g,
        allowScrollButtonsMobile: B,
        indicatorColor: M,
        orientation: E,
        vertical: I,
        scrollButtons: P,
        textColor: V,
        variant: C,
        visibleScrollbar: X,
        fixed: !W,
        hideScrollbar: W && !X,
        scrollableX: W && !I,
        scrollableY: W && I,
        centered: f && !W,
        scrollButtonsHideMobile: !B
    })
      , O = Je(F)
      , Yt = at({
        elementType: z.StartScrollButtonIcon,
        externalSlotProps: D.startScrollButtonIcon,
        ownerState: F
    })
      , Vt = at({
        elementType: z.EndScrollButtonIcon,
        externalSlotProps: D.endScrollButtonIcon,
        ownerState: F
    })
      , [St,Ut] = a.useState(!1)
      , [K,wt] = a.useState(Nt)
      , [yt,_t] = a.useState(!1)
      , [Ct,Kt] = a.useState(!1)
      , [Bt,qt] = a.useState(!1)
      , [Et,Gt] = a.useState({
        overflow: "hidden",
        scrollbarWidth: 0
    })
      , Tt = new Map
      , H = a.useRef(null)
      , Z = a.useRef(null)
      , Pt = ()=>{
        const n = H.current;
        let s;
        if (n) {
            const b = n.getBoundingClientRect();
            s = {
                clientWidth: n.clientWidth,
                scrollLeft: n.scrollLeft,
                scrollTop: n.scrollTop,
                scrollLeftNormalized: pe(n, l.direction),
                scrollWidth: n.scrollWidth,
                top: b.top,
                bottom: b.bottom,
                left: b.left,
                right: b.right
            }
        }
        let p;
        if (n && y !== !1) {
            const b = Z.current.children;
            if (b.length > 0) {
                const R = b[Tt.get(y)];
                p = R ? R.getBoundingClientRect() : null
            }
        }
        return {
            tabsMeta: s,
            tabMeta: p
        }
    }
      , ot = xt(()=>{
        const {tabsMeta: n, tabMeta: s} = Pt();
        let p = 0, b;
        if (I)
            b = "top",
            s && n && (p = s.top - n.top + n.scrollTop);
        else if (b = i ? "right" : "left",
        s && n) {
            const Y = i ? n.scrollLeftNormalized + n.clientWidth - n.scrollWidth : n.scrollLeft;
            p = (i ? -1 : 1) * (s[b] - n[b] + Y)
        }
        const R = {
            [b]: p,
            [w]: s ? s[w] : 0
        };
        if (isNaN(K[b]) || isNaN(K[w]))
            wt(R);
        else {
            const Y = Math.abs(K[b] - R[b])
              , nt = Math.abs(K[w] - R[w]);
            (Y >= 1 || nt >= 1) && wt(R)
        }
    }
    )
      , bt = (n,{animation: s=!0}={})=>{
        s ? Le(U, H.current, n, {
            duration: l.transitions.duration.standard
        }) : H.current[U] = n
    }
      , Rt = n=>{
        let s = H.current[U];
        I ? s += n : (s += n * (i ? -1 : 1),
        s *= i && Ht() === "reverse" ? -1 : 1),
        bt(s)
    }
      , kt = ()=>{
        const n = H.current[c];
        let s = 0;
        const p = Array.from(Z.current.children);
        for (let b = 0; b < p.length; b += 1) {
            const R = p[b];
            if (s + R[c] > n) {
                b === 0 && (s = n);
                break
            }
            s += R[c]
        }
        return s
    }
      , Jt = ()=>{
        Rt(-1 * kt())
    }
      , Qt = ()=>{
        Rt(kt())
    }
      , Zt = a.useCallback(n=>{
        Gt({
            overflow: null,
            scrollbarWidth: n
        })
    }
    , [])
      , te = ()=>{
        const n = {};
        n.scrollbarSizeListener = W ? v.jsx(oo, {
            onChange: Zt,
            className: L(O.scrollableX, O.hideScrollbar)
        }) : null;
        const p = W && (P === "auto" && (yt || Ct) || P === !0);
        return n.scrollButtonStart = p ? v.jsx(A, d({
            slots: {
                StartScrollButtonIcon: z.StartScrollButtonIcon
            },
            slotProps: {
                startScrollButtonIcon: Yt
            },
            orientation: E,
            direction: i ? "right" : "left",
            onClick: Jt,
            disabled: !yt
        }, S, {
            className: L(O.scrollButtons, S.className)
        })) : null,
        n.scrollButtonEnd = p ? v.jsx(A, d({
            slots: {
                EndScrollButtonIcon: z.EndScrollButtonIcon
            },
            slotProps: {
                endScrollButtonIcon: Vt
            },
            orientation: E,
            direction: i ? "left" : "right",
            onClick: Qt,
            disabled: !Ct
        }, S, {
            className: L(O.scrollButtons, S.className)
        })) : null,
        n
    }
      , It = xt(n=>{
        const {tabsMeta: s, tabMeta: p} = Pt();
        if (!(!p || !s)) {
            if (p[Q] < s[Q]) {
                const b = s[U] + (p[Q] - s[Q]);
                bt(b, {
                    animation: n
                })
            } else if (p[_] > s[_]) {
                const b = s[U] + (p[_] - s[_]);
                bt(b, {
                    animation: n
                })
            }
        }
    }
    )
      , Mt = xt(()=>{
        W && P !== !1 && qt(!Bt)
    }
    );
    a.useEffect(()=>{
        const n = gt(()=>{
            H.current && ot()
        }
        )
          , s = ft(H.current);
        s.addEventListener("resize", n);
        let p;
        return typeof ResizeObserver < "u" && (p = new ResizeObserver(n),
        Array.from(Z.current.children).forEach(b=>{
            p.observe(b)
        }
        )),
        ()=>{
            n.clear(),
            s.removeEventListener("resize", n),
            p && p.disconnect()
        }
    }
    , [ot]),
    a.useEffect(()=>{
        const n = Array.from(Z.current.children)
          , s = n.length;
        if (typeof IntersectionObserver < "u" && s > 0 && W && P !== !1) {
            const p = n[0]
              , b = n[s - 1]
              , R = {
                root: H.current,
                threshold: .99
            }
              , Y = mt=>{
                _t(!mt[0].isIntersecting)
            }
              , nt = new IntersectionObserver(Y,R);
            nt.observe(p);
            const re = mt=>{
                Kt(!mt[0].isIntersecting)
            }
              , zt = new IntersectionObserver(re,R);
            return zt.observe(b),
            ()=>{
                nt.disconnect(),
                zt.disconnect()
            }
        }
    }
    , [W, P, Bt, x == null ? void 0 : x.length]),
    a.useEffect(()=>{
        Ut(!0)
    }
    , []),
    a.useEffect(()=>{
        ot()
    }
    ),
    a.useEffect(()=>{
        It(Nt !== K)
    }
    , [It, K]),
    a.useImperativeHandle(u, ()=>({
        updateIndicator: ot,
        updateScrollButtons: Mt
    }), [ot, Mt]);
    const $t = v.jsx(eo, d({}, N, {
        className: L(O.indicator, N.className),
        ownerState: F,
        style: d({}, K, N.style)
    }));
    let rt = 0;
    const ee = a.Children.map(x, n=>{
        if (!a.isValidElement(n))
            return null;
        const s = n.props.value === void 0 ? rt : n.props.value;
        Tt.set(s, rt);
        const p = s === y;
        return rt += 1,
        a.cloneElement(n, d({
            fullWidth: C === "fullWidth",
            indicator: p && !St && $t,
            selected: p,
            selectionFollowsFocus: $,
            onChange: T,
            textColor: V,
            value: s
        }, rt === 1 && y === !1 && !n.props.tabIndex ? {
            tabIndex: 0
        } : {}))
    }
    )
      , oe = n=>{
        const s = Z.current
          , p = de(s).activeElement;
        if (p.getAttribute("role") !== "tab")
            return;
        let R = E === "horizontal" ? "ArrowLeft" : "ArrowUp"
          , Y = E === "horizontal" ? "ArrowRight" : "ArrowDown";
        switch (E === "horizontal" && i && (R = "ArrowRight",
        Y = "ArrowLeft"),
        n.key) {
        case R:
            n.preventDefault(),
            st(s, p, At);
            break;
        case Y:
            n.preventDefault(),
            st(s, p, Lt);
            break;
        case "Home":
            n.preventDefault(),
            st(s, null, Lt);
            break;
        case "End":
            n.preventDefault(),
            st(s, null, At);
            break
        }
    }
      , ht = te();
    return v.jsxs(Qe, d({
        className: L(O.root, k),
        ownerState: F,
        ref: o,
        as: g
    }, J, {
        children: [ht.scrollButtonStart, ht.scrollbarSizeListener, v.jsxs(Ze, {
            className: O.scroller,
            ownerState: F,
            style: {
                overflow: Et.overflow,
                [I ? `margin ${i ? "Left" : "Right"}` : "marginBottom"]: X ? void 0 : -Et.scrollbarWidth
            },
            ref: H,
            children: [v.jsx(to, {
                "aria-label": h,
                "aria-labelledby": m,
                "aria-orientation": E === "vertical" ? "vertical" : null,
                className: O.flexContainer,
                ownerState: F,
                onKeyDown: oe,
                ref: Z,
                role: "tablist",
                children: ee
            }), St && $t]
        }), ht.scrollButtonEnd]
    }))
})
  , uo = ro;
export {io as D, De as K, xe as S, uo as T, co as a, ze as b, Ee as g, Be as i, vt as t};
//# debugId=2761f691-f0d0-5e47-8b05-9d6862ea95f5
//# sourceMappingURL=Tabs-b74e3190.js.map


