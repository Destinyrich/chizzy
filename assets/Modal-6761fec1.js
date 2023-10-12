!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "8fc90c17-eebc-575d-b168-1547660ee9db")
    } catch (e) {}
}();
import {r as d, aG as V, b9 as $, j as O, aW as oe, bz as Ee, _ as E, b1 as xe, d as X, b2 as ve, b3 as ye, b4 as re, g as ce, a as de, s as J, u as ue, e as G, f as fe, b8 as se} from "./index-4d92c338.js";
import {o as Q, c as ie} from "./createSvgIcon-d5208ee1.js";
import {P as Re} from "./Portal-e3c95b81.js";
function ke(e) {
    const t = e.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t)
}
const Te = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Pe(e) {
    const t = parseInt(e.getAttribute("tabindex") || "", 10);
    return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t
}
function Ce(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
        return !1;
    const t = n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);
    let o = t(`[name="${e.name}"]:checked`);
    return o || (o = t(`[name="${e.name}"]`)),
    o !== e
}
function Se(e) {
    return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Ce(e))
}
function Ie(e) {
    const t = []
      , o = [];
    return Array.from(e.querySelectorAll(Te)).forEach((n,s)=>{
        const r = Pe(n);
        r === -1 || !Se(n) || (r === 0 ? t.push(n) : o.push({
            documentOrder: s,
            tabIndex: r,
            node: n
        }))
    }
    ),
    o.sort((n,s)=>n.tabIndex === s.tabIndex ? n.documentOrder - s.documentOrder : n.tabIndex - s.tabIndex).map(n=>n.node).concat(t)
}
function Ne() {
    return !0
}
function Me(e) {
    const {children: t, disableAutoFocus: o=!1, disableEnforceFocus: n=!1, disableRestoreFocus: s=!1, getTabbable: r=Ie, isEnabled: i=Ne, open: l} = e
      , p = d.useRef(!1)
      , x = d.useRef(null)
      , b = d.useRef(null)
      , g = d.useRef(null)
      , R = d.useRef(null)
      , y = d.useRef(!1)
      , c = d.useRef(null)
      , F = V(t.ref, c)
      , P = d.useRef(null);
    d.useEffect(()=>{
        !l || !c.current || (y.current = !o)
    }
    , [o, l]),
    d.useEffect(()=>{
        if (!l || !c.current)
            return;
        const a = $(c.current);
        return c.current.contains(a.activeElement) || (c.current.hasAttribute("tabIndex") || c.current.setAttribute("tabIndex", "-1"),
        y.current && c.current.focus()),
        ()=>{
            s || (g.current && g.current.focus && (p.current = !0,
            g.current.focus()),
            g.current = null)
        }
    }
    , [l]),
    d.useEffect(()=>{
        if (!l || !c.current)
            return;
        const a = $(c.current)
          , m = T=>{
            const {current: w} = c;
            if (w !== null) {
                if (!a.hasFocus() || n || !i() || p.current) {
                    p.current = !1;
                    return
                }
                if (!w.contains(a.activeElement)) {
                    if (T && R.current !== T.target || a.activeElement !== R.current)
                        R.current = null;
                    else if (R.current !== null)
                        return;
                    if (!y.current)
                        return;
                    let N = [];
                    if ((a.activeElement === x.current || a.activeElement === b.current) && (N = r(c.current)),
                    N.length > 0) {
                        var L, I;
                        const D = !!((L = P.current) != null && L.shiftKey && ((I = P.current) == null ? void 0 : I.key) === "Tab")
                          , A = N[0]
                          , u = N[N.length - 1];
                        typeof A != "string" && typeof u != "string" && (D ? u.focus() : A.focus())
                    } else
                        w.focus()
                }
            }
        }
          , v = T=>{
            P.current = T,
            !(n || !i() || T.key !== "Tab") && a.activeElement === c.current && T.shiftKey && (p.current = !0,
            b.current && b.current.focus())
        }
        ;
        a.addEventListener("focusin", m),
        a.addEventListener("keydown", v, !0);
        const k = setInterval(()=>{
            a.activeElement && a.activeElement.tagName === "BODY" && m(null)
        }
        , 50);
        return ()=>{
            clearInterval(k),
            a.removeEventListener("focusin", m),
            a.removeEventListener("keydown", v, !0)
        }
    }
    , [o, n, s, i, l, r]);
    const C = a=>{
        g.current === null && (g.current = a.relatedTarget),
        y.current = !0,
        R.current = a.target;
        const m = t.props.onFocus;
        m && m(a)
    }
      , S = a=>{
        g.current === null && (g.current = a.relatedTarget),
        y.current = !0
    }
    ;
    return O.jsxs(d.Fragment, {
        children: [O.jsx("div", {
            tabIndex: l ? 0 : -1,
            onFocus: S,
            ref: x,
            "data-testid": "sentinelStart"
        }), d.cloneElement(t, {
            ref: F,
            onFocus: C
        }), O.jsx("div", {
            tabIndex: l ? 0 : -1,
            onFocus: S,
            ref: b,
            "data-testid": "sentinelEnd"
        })]
    })
}
function we(e) {
    const t = $(e);
    return t.body === e ? Q(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
}
function U(e, t) {
    t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
}
function ae(e) {
    return parseInt(Q(e).getComputedStyle(e).paddingRight, 10) || 0
}
function Fe(e) {
    const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1
      , n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
    return o || n
}
function le(e, t, o, n, s) {
    const r = [t, o, ...n];
    [].forEach.call(e.children, i=>{
        const l = r.indexOf(i) === -1
          , p = !Fe(i);
        l && p && U(i, s)
    }
    )
}
function q(e, t) {
    let o = -1;
    return e.some((n,s)=>t(n) ? (o = s,
    !0) : !1),
    o
}
function Ae(e, t) {
    const o = []
      , n = e.container;
    if (!t.disableScrollLock) {
        if (we(n)) {
            const i = ke($(n));
            o.push({
                value: n.style.paddingRight,
                property: "padding-right",
                el: n
            }),
            n.style.paddingRight = `${ae(n) + i}px`;
            const l = $(n).querySelectorAll(".mui-fixed");
            [].forEach.call(l, p=>{
                o.push({
                    value: p.style.paddingRight,
                    property: "padding-right",
                    el: p
                }),
                p.style.paddingRight = `${ae(p) + i}px`
            }
            )
        }
        let r;
        if (n.parentNode instanceof DocumentFragment)
            r = $(n).body;
        else {
            const i = n.parentElement
              , l = Q(n);
            r = (i == null ? void 0 : i.nodeName) === "HTML" && l.getComputedStyle(i).overflowY === "scroll" ? i : n
        }
        o.push({
            value: r.style.overflow,
            property: "overflow",
            el: r
        }, {
            value: r.style.overflowX,
            property: "overflow-x",
            el: r
        }, {
            value: r.style.overflowY,
            property: "overflow-y",
            el: r
        }),
        r.style.overflow = "hidden"
    }
    return ()=>{
        o.forEach(({value: r, el: i, property: l})=>{
            r ? i.style.setProperty(l, r) : i.style.removeProperty(l)
        }
        )
    }
}
function Be(e) {
    const t = [];
    return [].forEach.call(e.children, o=>{
        o.getAttribute("aria-hidden") === "true" && t.push(o)
    }
    ),
    t
}
class Oe {
    constructor() {
        this.containers = void 0,
        this.modals = void 0,
        this.modals = [],
        this.containers = []
    }
    add(t, o) {
        let n = this.modals.indexOf(t);
        if (n !== -1)
            return n;
        n = this.modals.length,
        this.modals.push(t),
        t.modalRef && U(t.modalRef, !1);
        const s = Be(o);
        le(o, t.mount, t.modalRef, s, !0);
        const r = q(this.containers, i=>i.container === o);
        return r !== -1 ? (this.containers[r].modals.push(t),
        n) : (this.containers.push({
            modals: [t],
            container: o,
            restore: null,
            hiddenSiblings: s
        }),
        n)
    }
    mount(t, o) {
        const n = q(this.containers, r=>r.modals.indexOf(t) !== -1)
          , s = this.containers[n];
        s.restore || (s.restore = Ae(s, o))
    }
    remove(t, o=!0) {
        const n = this.modals.indexOf(t);
        if (n === -1)
            return n;
        const s = q(this.containers, i=>i.modals.indexOf(t) !== -1)
          , r = this.containers[s];
        if (r.modals.splice(r.modals.indexOf(t), 1),
        this.modals.splice(n, 1),
        r.modals.length === 0)
            r.restore && r.restore(),
            t.modalRef && U(t.modalRef, o),
            le(r.container, t.mount, t.modalRef, r.hiddenSiblings, !1),
            this.containers.splice(s, 1);
        else {
            const i = r.modals[r.modals.length - 1];
            i.modalRef && U(i.modalRef, !1)
        }
        return n
    }
    isTopModal(t) {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === t
    }
}
function Le(e) {
    return typeof e == "function" ? e() : e
}
function De(e) {
    return e ? e.props.hasOwnProperty("in") : !1
}
const $e = new Oe;
function je(e) {
    const {container: t, disableEscapeKeyDown: o=!1, disableScrollLock: n=!1, manager: s=$e, closeAfterTransition: r=!1, onTransitionEnter: i, onTransitionExited: l, children: p, onClose: x, open: b, rootRef: g} = e
      , R = d.useRef({})
      , y = d.useRef(null)
      , c = d.useRef(null)
      , F = V(c, g)
      , [P,C] = d.useState(!b)
      , S = De(p);
    let a = !0;
    (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (a = !1);
    const m = ()=>$(y.current)
      , v = ()=>(R.current.modalRef = c.current,
    R.current.mount = y.current,
    R.current)
      , k = ()=>{
        s.mount(v(), {
            disableScrollLock: n
        }),
        c.current && (c.current.scrollTop = 0)
    }
      , T = oe(()=>{
        const f = Le(t) || m().body;
        s.add(v(), f),
        c.current && k()
    }
    )
      , w = d.useCallback(()=>s.isTopModal(v()), [s])
      , L = oe(f=>{
        y.current = f,
        f && (b && w() ? k() : c.current && U(c.current, a))
    }
    )
      , I = d.useCallback(()=>{
        s.remove(v(), a)
    }
    , [a, s]);
    d.useEffect(()=>()=>{
        I()
    }
    , [I]),
    d.useEffect(()=>{
        b ? T() : (!S || !r) && I()
    }
    , [b, I, S, r, T]);
    const N = f=>h=>{
        var B;
        (B = f.onKeyDown) == null || B.call(f, h),
        !(h.key !== "Escape" || !w()) && (o || (h.stopPropagation(),
        x && x(h, "escapeKeyDown")))
    }
      , D = f=>h=>{
        var B;
        (B = f.onClick) == null || B.call(f, h),
        h.target === h.currentTarget && x && x(h, "backdropClick")
    }
    ;
    return {
        getRootProps: (f={})=>{
            const h = Ee(e);
            delete h.onTransitionEnter,
            delete h.onTransitionExited;
            const B = E({}, h, f);
            return E({
                role: "presentation"
            }, B, {
                onKeyDown: N(B),
                ref: F
            })
        }
        ,
        getBackdropProps: (f={})=>{
            const h = f;
            return E({
                "aria-hidden": !0
            }, h, {
                onClick: D(h),
                open: b
            })
        }
        ,
        getTransitionProps: ()=>{
            const f = ()=>{
                C(!1),
                i && i()
            }
              , h = ()=>{
                C(!0),
                l && l(),
                r && I()
            }
            ;
            return {
                onEnter: ie(f, p.props.onEnter),
                onExited: ie(h, p.props.onExited)
            }
        }
        ,
        rootRef: F,
        portalRef: L,
        isTopModal: w,
        exited: P,
        hasTransition: S
    }
}
const He = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]
  , _e = {
    entering: {
        opacity: 1
    },
    entered: {
        opacity: 1
    }
}
  , Ue = d.forwardRef(function(t, o) {
    const n = xe()
      , s = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen
    }
      , {addEndListener: r, appear: i=!0, children: l, easing: p, in: x, onEnter: b, onEntered: g, onEntering: R, onExit: y, onExited: c, onExiting: F, style: P, timeout: C=s, TransitionComponent: S=ve} = t
      , a = X(t, He)
      , m = d.useRef(null)
      , v = V(m, l.ref, o)
      , k = u=>M=>{
        if (u) {
            const f = m.current;
            M === void 0 ? u(f) : u(f, M)
        }
    }
      , T = k(R)
      , w = k((u,M)=>{
        ye(u);
        const f = re({
            style: P,
            timeout: C,
            easing: p
        }, {
            mode: "enter"
        });
        u.style.webkitTransition = n.transitions.create("opacity", f),
        u.style.transition = n.transitions.create("opacity", f),
        b && b(u, M)
    }
    )
      , L = k(g)
      , I = k(F)
      , N = k(u=>{
        const M = re({
            style: P,
            timeout: C,
            easing: p
        }, {
            mode: "exit"
        });
        u.style.webkitTransition = n.transitions.create("opacity", M),
        u.style.transition = n.transitions.create("opacity", M),
        y && y(u)
    }
    )
      , D = k(c)
      , A = u=>{
        r && r(m.current, u)
    }
    ;
    return O.jsx(S, E({
        appear: i,
        in: x,
        nodeRef: m,
        onEnter: w,
        onEntered: L,
        onEntering: T,
        onExit: N,
        onExited: D,
        onExiting: I,
        addEndListener: A,
        timeout: C
    }, a, {
        children: (u,M)=>d.cloneElement(l, E({
            style: E({
                opacity: 0,
                visibility: u === "exited" && !x ? "hidden" : void 0
            }, _e[u], P, l.props.style),
            ref: v
        }, M))
    }))
})
  , Ke = Ue;
function We(e) {
    return ce("MuiBackdrop", e)
}
de("MuiBackdrop", ["root", "invisible"]);
const ze = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"]
  , Ye = e=>{
    const {classes: t, invisible: o} = e;
    return fe({
        root: ["root", o && "invisible"]
    }, We, t)
}
  , qe = J("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: o} = e;
        return [t.root, o.invisible && t.invisible]
    }
})(({ownerState: e})=>E({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent"
}, e.invisible && {
    backgroundColor: "transparent"
}))
  , Ge = d.forwardRef(function(t, o) {
    var n, s, r;
    const i = ue({
        props: t,
        name: "MuiBackdrop"
    })
      , {children: l, className: p, component: x="div", components: b={}, componentsProps: g={}, invisible: R=!1, open: y, slotProps: c={}, slots: F={}, TransitionComponent: P=Ke, transitionDuration: C} = i
      , S = X(i, ze)
      , a = E({}, i, {
        component: x,
        invisible: R
    })
      , m = Ye(a)
      , v = (n = c.root) != null ? n : g.root;
    return O.jsx(P, E({
        in: y,
        timeout: C
    }, S, {
        children: O.jsx(qe, E({
            "aria-hidden": !0
        }, v, {
            as: (s = (r = F.root) != null ? r : b.Root) != null ? s : x,
            className: G(m.root, p, v == null ? void 0 : v.className),
            ownerState: E({}, a, v == null ? void 0 : v.ownerState),
            classes: m,
            ref: o,
            children: l
        }))
    }))
})
  , Ve = Ge;
function Xe(e) {
    return ce("MuiModal", e)
}
de("MuiModal", ["root", "hidden", "backdrop"]);
const Je = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"]
  , Qe = e=>{
    const {open: t, exited: o, classes: n} = e;
    return fe({
        root: ["root", !t && o && "hidden"],
        backdrop: ["backdrop"]
    }, Xe, n)
}
  , Ze = J("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e,t)=>{
        const {ownerState: o} = e;
        return [t.root, !o.open && o.exited && t.hidden]
    }
})(({theme: e, ownerState: t})=>E({
    position: "fixed",
    zIndex: (e.vars || e).zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0
}, !t.open && t.exited && {
    visibility: "hidden"
}))
  , et = J(Ve, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e,t)=>t.backdrop
})({
    zIndex: -1
})
  , tt = d.forwardRef(function(t, o) {
    var n, s, r, i, l, p;
    const x = ue({
        name: "MuiModal",
        props: t
    })
      , {BackdropComponent: b=et, BackdropProps: g, className: R, closeAfterTransition: y=!1, children: c, container: F, component: P, components: C={}, componentsProps: S={}, disableAutoFocus: a=!1, disableEnforceFocus: m=!1, disableEscapeKeyDown: v=!1, disablePortal: k=!1, disableRestoreFocus: T=!1, disableScrollLock: w=!1, hideBackdrop: L=!1, keepMounted: I=!1, onBackdropClick: N, open: D, slotProps: A, slots: u} = x
      , M = X(x, Je)
      , f = E({}, x, {
        closeAfterTransition: y,
        disableAutoFocus: a,
        disableEnforceFocus: m,
        disableEscapeKeyDown: v,
        disablePortal: k,
        disableRestoreFocus: T,
        disableScrollLock: w,
        hideBackdrop: L,
        keepMounted: I
    })
      , {getRootProps: h, getBackdropProps: B, getTransitionProps: pe, portalRef: he, isTopModal: me, exited: Z, hasTransition: ee} = je(E({}, f, {
        rootRef: o
    }))
      , _ = E({}, f, {
        exited: Z
    })
      , j = Qe(_)
      , K = {};
    if (c.props.tabIndex === void 0 && (K.tabIndex = "-1"),
    ee) {
        const {onEnter: H, onExited: W} = pe();
        K.onEnter = H,
        K.onExited = W
    }
    const te = (n = (s = u == null ? void 0 : u.root) != null ? s : C.Root) != null ? n : Ze
      , ne = (r = (i = u == null ? void 0 : u.backdrop) != null ? i : C.Backdrop) != null ? r : b
      , z = (l = A == null ? void 0 : A.root) != null ? l : S.root
      , Y = (p = A == null ? void 0 : A.backdrop) != null ? p : S.backdrop
      , be = se({
        elementType: te,
        externalSlotProps: z,
        externalForwardedProps: M,
        getSlotProps: h,
        additionalProps: {
            ref: o,
            as: P
        },
        ownerState: _,
        className: G(R, z == null ? void 0 : z.className, j == null ? void 0 : j.root, !_.open && _.exited && (j == null ? void 0 : j.hidden))
    })
      , ge = se({
        elementType: ne,
        externalSlotProps: Y,
        additionalProps: g,
        getSlotProps: H=>B(E({}, H, {
            onClick: W=>{
                N && N(W),
                H != null && H.onClick && H.onClick(W)
            }
        })),
        className: G(Y == null ? void 0 : Y.className, g == null ? void 0 : g.className, j == null ? void 0 : j.backdrop),
        ownerState: _
    });
    return !I && !D && (!ee || Z) ? null : O.jsx(Re, {
        ref: he,
        container: F,
        disablePortal: k,
        children: O.jsxs(te, E({}, be, {
            children: [!L && b ? O.jsx(ne, E({}, ge)) : null, O.jsx(Me, {
                disableEnforceFocus: m,
                disableAutoFocus: a,
                disableRestoreFocus: T,
                isEnabled: me,
                open: D,
                children: d.cloneElement(c, K)
            })]
        }))
    })
})
  , st = tt;
export {Ve as B, Ke as F, st as M, Me as a, ke as g};
//# debugId=8fc90c17-eebc-575d-b168-1547660ee9db
//# sourceMappingURL=Modal-6761fec1.js.map
