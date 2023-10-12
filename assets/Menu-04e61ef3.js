!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "85445e8e-13c3-57ab-9575-072d070eab2e")
    } catch (e) {}
}();
import {r, g as oe, a as ne, s as H, _ as M, u as se, d as N, j as F, e as X, f as re, b7 as Le, b9 as q, aG as ye, aY as De, b8 as J, bv as Ie, bp as Fe, b5 as Oe, b1 as $e} from "./index-4d92c338.js";
import "./react-is.production.min-a192e302.js";
import {g as ke, M as Ne} from "./Modal-6761fec1.js";
import {o as me, d as _e} from "./createSvgIcon-d5208ee1.js";
const ze = r.createContext({})
  , je = ze;
function He(t) {
    return oe("MuiList", t)
}
ne("MuiList", ["root", "padding", "dense", "subheader"]);
const Ke = ["children", "className", "component", "dense", "disablePadding", "subheader"]
  , Ae = t=>{
    const {classes: e, disablePadding: o, dense: m, subheader: f} = t;
    return re({
        root: ["root", !o && "padding", m && "dense", f && "subheader"]
    }, He, e)
}
  , We = H("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (t,e)=>{
        const {ownerState: o} = t;
        return [e.root, !o.disablePadding && e.padding, o.dense && e.dense, o.subheader && e.subheader]
    }
})(({ownerState: t})=>M({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative"
}, !t.disablePadding && {
    paddingTop: 8,
    paddingBottom: 8
}, t.subheader && {
    paddingTop: 0
}))
  , Ue = r.forwardRef(function(e, o) {
    const m = se({
        props: e,
        name: "MuiList"
    })
      , {children: f, className: b, component: d="ul", dense: c=!1, disablePadding: u=!1, subheader: h} = m
      , S = N(m, Ke)
      , y = r.useMemo(()=>({
        dense: c
    }), [c])
      , L = M({}, m, {
        component: d,
        dense: c,
        disablePadding: u
    })
      , g = Ae(L);
    return F.jsx(je.Provider, {
        value: y,
        children: F.jsxs(We, M({
            as: d,
            className: X(g.root, b),
            ref: o,
            ownerState: L
        }, S, {
            children: [h, f]
        }))
    })
})
  , Ge = Ue
  , Ve = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function ee(t, e, o) {
    return t === e ? t.firstChild : e && e.nextElementSibling ? e.nextElementSibling : o ? null : t.firstChild
}
function ge(t, e, o) {
    return t === e ? o ? t.firstChild : t.lastChild : e && e.previousElementSibling ? e.previousElementSibling : o ? null : t.lastChild
}
function xe(t, e) {
    if (e === void 0)
        return !0;
    let o = t.innerText;
    return o === void 0 && (o = t.textContent),
    o = o.trim().toLowerCase(),
    o.length === 0 ? !1 : e.repeating ? o[0] === e.keys[0] : o.indexOf(e.keys.join("")) === 0
}
function G(t, e, o, m, f, b) {
    let d = !1
      , c = f(t, e, e ? o : !1);
    for (; c; ) {
        if (c === t.firstChild) {
            if (d)
                return !1;
            d = !0
        }
        const u = m ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
        if (!c.hasAttribute("tabindex") || !xe(c, b) || u)
            c = f(t, c, o);
        else
            return c.focus(),
            !0
    }
    return !1
}
const Be = r.forwardRef(function(e, o) {
    const {actions: m, autoFocus: f=!1, autoFocusItem: b=!1, children: d, className: c, disabledItemsFocusable: u=!1, disableListWrap: h=!1, onKeyDown: S, variant: y="selectedMenu"} = e
      , L = N(e, Ve)
      , g = r.useRef(null)
      , K = r.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null
    });
    Le(()=>{
        f && g.current.focus()
    }
    , [f]),
    r.useImperativeHandle(m, ()=>({
        adjustStyleForScrollbar: (n,i)=>{
            const p = !g.current.style.width;
            if (n.clientHeight < g.current.clientHeight && p) {
                const P = `${ke(q(n))}px`;
                g.current.style[i.direction === "rtl" ? "paddingLeft" : "paddingRight"] = P,
                g.current.style.width = `calc(100% + ${P})`
            }
            return g.current
        }
    }), []);
    const O = n=>{
        const i = g.current
          , p = n.key
          , P = q(i).activeElement;
        if (p === "ArrowDown")
            n.preventDefault(),
            G(i, P, h, u, ee);
        else if (p === "ArrowUp")
            n.preventDefault(),
            G(i, P, h, u, ge);
        else if (p === "Home")
            n.preventDefault(),
            G(i, null, h, u, ee);
        else if (p === "End")
            n.preventDefault(),
            G(i, null, h, u, ge);
        else if (p.length === 1) {
            const a = K.current
              , E = p.toLowerCase()
              , D = performance.now();
            a.keys.length > 0 && (D - a.lastTime > 500 ? (a.keys = [],
            a.repeating = !0,
            a.previousKeyMatched = !0) : a.repeating && E !== a.keys[0] && (a.repeating = !1)),
            a.lastTime = D,
            a.keys.push(E);
            const A = P && !a.repeating && xe(P, a);
            a.previousKeyMatched && (A || G(i, P, !1, u, ee, a)) ? n.preventDefault() : a.previousKeyMatched = !1
        }
        S && S(n)
    }
      , x = ye(g, o);
    let s = -1;
    r.Children.forEach(d, (n,i)=>{
        if (!r.isValidElement(n)) {
            s === i && (s += 1,
            s >= d.length && (s = -1));
            return
        }
        n.props.disabled || (y === "selectedMenu" && n.props.selected || s === -1) && (s = i),
        s === i && (n.props.disabled || n.props.muiSkipListHighlight || n.type.muiSkipListHighlight) && (s += 1,
        s >= d.length && (s = -1))
    }
    );
    const $ = r.Children.map(d, (n,i)=>{
        if (i === s) {
            const p = {};
            return b && (p.autoFocus = !0),
            n.props.tabIndex === void 0 && y === "selectedMenu" && (p.tabIndex = 0),
            r.cloneElement(n, p)
        }
        return n
    }
    );
    return F.jsx(Ge, M({
        role: "menu",
        ref: x,
        className: c,
        onKeyDown: O,
        tabIndex: f ? 0 : -1
    }, L, {
        children: $
    }))
})
  , Ye = Be;
function Xe(t) {
    return oe("MuiPopover", t)
}
ne("MuiPopover", ["root", "paper"]);
const qe = ["onEntering"]
  , Je = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]
  , Qe = ["slotProps"];
function Pe(t, e) {
    let o = 0;
    return typeof e == "number" ? o = e : e === "center" ? o = t.height / 2 : e === "bottom" && (o = t.height),
    o
}
function ve(t, e) {
    let o = 0;
    return typeof e == "number" ? o = e : e === "center" ? o = t.width / 2 : e === "right" && (o = t.width),
    o
}
function be(t) {
    return [t.horizontal, t.vertical].map(e=>typeof e == "number" ? `${e}px` : e).join(" ")
}
function te(t) {
    return typeof t == "function" ? t() : t
}
const Ze = t=>{
    const {classes: e} = t;
    return re({
        root: ["root"],
        paper: ["paper"]
    }, Xe, e)
}
  , et = H(Ne, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (t,e)=>e.root
})({})
  , Me = H(De, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (t,e)=>e.paper
})({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0
})
  , tt = r.forwardRef(function(e, o) {
    var m, f, b;
    const d = se({
        props: e,
        name: "MuiPopover"
    })
      , {action: c, anchorEl: u, anchorOrigin: h={
        vertical: "top",
        horizontal: "left"
    }, anchorPosition: S, anchorReference: y="anchorEl", children: L, className: g, container: K, elevation: O=8, marginThreshold: x=16, open: s, PaperProps: $={}, slots: n, slotProps: i, transformOrigin: p={
        vertical: "top",
        horizontal: "left"
    }, TransitionComponent: P=Fe, transitionDuration: a="auto", TransitionProps: {onEntering: E}={}} = d
      , D = N(d.TransitionProps, qe)
      , A = N(d, Je)
      , C = (m = i == null ? void 0 : i.paper) != null ? m : $
      , W = r.useRef()
      , Q = ye(W, C.ref)
      , I = M({}, d, {
        anchorOrigin: h,
        anchorReference: y,
        elevation: O,
        marginThreshold: x,
        externalPaperSlotProps: C,
        transformOrigin: p,
        TransitionComponent: P,
        transitionDuration: a,
        TransitionProps: D
    })
      , U = Ze(I)
      , V = r.useCallback(()=>{
        if (y === "anchorPosition")
            return S;
        const l = te(u)
          , w = (l && l.nodeType === 1 ? l : q(W.current).body).getBoundingClientRect();
        return {
            top: w.top + Pe(w, h.vertical),
            left: w.left + ve(w, h.horizontal)
        }
    }
    , [u, h.horizontal, h.vertical, S, y])
      , B = r.useCallback(l=>({
        vertical: Pe(l, p.vertical),
        horizontal: ve(l, p.horizontal)
    }), [p.horizontal, p.vertical])
      , Y = r.useCallback(l=>{
        const v = {
            width: l.offsetWidth,
            height: l.offsetHeight
        }
          , w = B(v);
        if (y === "none")
            return {
                top: null,
                left: null,
                transformOrigin: be(w)
            };
        const ce = V();
        let z = ce.top - w.vertical
          , j = ce.left - w.horizontal;
        const ue = z + v.height
          , pe = j + v.width
          , de = me(te(u))
          , fe = de.innerHeight - x
          , he = de.innerWidth - x;
        if (z < x) {
            const T = z - x;
            z -= T,
            w.vertical += T
        } else if (ue > fe) {
            const T = ue - fe;
            z -= T,
            w.vertical += T
        }
        if (j < x) {
            const T = j - x;
            j -= T,
            w.horizontal += T
        } else if (pe > he) {
            const T = pe - he;
            j -= T,
            w.horizontal += T
        }
        return {
            top: `${Math.round(z)}px`,
            left: `${Math.round(j)}px`,
            transformOrigin: be(w)
        }
    }
    , [u, y, V, B, x])
      , [R,k] = r.useState(s)
      , _ = r.useCallback(()=>{
        const l = W.current;
        if (!l)
            return;
        const v = Y(l);
        v.top !== null && (l.style.top = v.top),
        v.left !== null && (l.style.left = v.left),
        l.style.transformOrigin = v.transformOrigin,
        k(!0)
    }
    , [Y])
      , we = (l,v)=>{
        E && E(l, v),
        _()
    }
      , Re = ()=>{
        k(!1)
    }
    ;
    r.useEffect(()=>{
        s && _()
    }
    ),
    r.useImperativeHandle(c, ()=>s ? {
        updatePosition: ()=>{
            _()
        }
    } : null, [s, _]),
    r.useEffect(()=>{
        if (!s)
            return;
        const l = _e(()=>{
            _()
        }
        )
          , v = me(u);
        return v.addEventListener("resize", l),
        ()=>{
            l.clear(),
            v.removeEventListener("resize", l)
        }
    }
    , [u, s, _]);
    let ie = a;
    a === "auto" && !P.muiSupportAuto && (ie = void 0);
    const Se = K || (u ? q(te(u)).body : void 0)
      , Z = (f = n == null ? void 0 : n.root) != null ? f : et
      , ae = (b = n == null ? void 0 : n.paper) != null ? b : Me
      , Ce = J({
        elementType: ae,
        externalSlotProps: M({}, C, {
            style: R ? C.style : M({}, C.style, {
                opacity: 0
            })
        }),
        additionalProps: {
            elevation: O,
            ref: Q
        },
        ownerState: I,
        className: X(U.paper, C == null ? void 0 : C.className)
    })
      , le = J({
        elementType: Z,
        externalSlotProps: (i == null ? void 0 : i.root) || {},
        externalForwardedProps: A,
        additionalProps: {
            ref: o,
            slotProps: {
                backdrop: {
                    invisible: !0
                }
            },
            container: Se,
            open: s
        },
        ownerState: I,
        className: X(U.root, g)
    })
      , {slotProps: Te} = le
      , Ee = N(le, Qe);
    return F.jsx(Z, M({}, Ee, !Ie(Z) && {
        slotProps: Te
    }, {
        children: F.jsx(P, M({
            appear: !0,
            in: s,
            onEntering: we,
            onExited: Re,
            timeout: ie
        }, D, {
            children: F.jsx(ae, M({}, Ce, {
                children: L
            }))
        }))
    }))
})
  , ot = tt;
function nt(t) {
    return oe("MuiMenu", t)
}
ne("MuiMenu", ["root", "paper", "list"]);
const st = ["onEntering"]
  , rt = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"]
  , it = {
    vertical: "top",
    horizontal: "right"
}
  , at = {
    vertical: "top",
    horizontal: "left"
}
  , lt = t=>{
    const {classes: e} = t;
    return re({
        root: ["root"],
        paper: ["paper"],
        list: ["list"]
    }, nt, e)
}
  , ct = H(ot, {
    shouldForwardProp: t=>Oe(t) || t === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (t,e)=>e.root
})({})
  , ut = H(Me, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (t,e)=>e.paper
})({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
})
  , pt = H(Ye, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (t,e)=>e.list
})({
    outline: 0
})
  , dt = r.forwardRef(function(e, o) {
    var m, f;
    const b = se({
        props: e,
        name: "MuiMenu"
    })
      , {autoFocus: d=!0, children: c, className: u, disableAutoFocusItem: h=!1, MenuListProps: S={}, onClose: y, open: L, PaperProps: g={}, PopoverClasses: K, transitionDuration: O="auto", TransitionProps: {onEntering: x}={}, variant: s="selectedMenu", slots: $={}, slotProps: n={}} = b
      , i = N(b.TransitionProps, st)
      , p = N(b, rt)
      , P = $e()
      , a = P.direction === "rtl"
      , E = M({}, b, {
        autoFocus: d,
        disableAutoFocusItem: h,
        MenuListProps: S,
        onEntering: x,
        PaperProps: g,
        transitionDuration: O,
        TransitionProps: i,
        variant: s
    })
      , D = lt(E)
      , A = d && !h && L
      , C = r.useRef(null)
      , W = (R,k)=>{
        C.current && C.current.adjustStyleForScrollbar(R, P),
        x && x(R, k)
    }
      , Q = R=>{
        R.key === "Tab" && (R.preventDefault(),
        y && y(R, "tabKeyDown"))
    }
    ;
    let I = -1;
    r.Children.map(c, (R,k)=>{
        r.isValidElement(R) && (R.props.disabled || (s === "selectedMenu" && R.props.selected || I === -1) && (I = k))
    }
    );
    const U = (m = $.paper) != null ? m : ut
      , V = (f = n.paper) != null ? f : g
      , B = J({
        elementType: $.root,
        externalSlotProps: n.root,
        ownerState: E,
        className: [D.root, u]
    })
      , Y = J({
        elementType: U,
        externalSlotProps: V,
        ownerState: E,
        className: D.paper
    });
    return F.jsx(ct, M({
        onClose: y,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: a ? "right" : "left"
        },
        transformOrigin: a ? it : at,
        slots: {
            paper: U,
            root: $.root
        },
        slotProps: {
            root: B,
            paper: Y
        },
        open: L,
        ref: o,
        transitionDuration: O,
        TransitionProps: M({
            onEntering: W
        }, i),
        ownerState: E
    }, p, {
        classes: K,
        children: F.jsx(pt, M({
            onKeyDown: Q,
            actions: C,
            autoFocus: d && (I === -1 || h),
            autoFocusItem: A,
            variant: s
        }, S, {
            className: X(D.list, S.className),
            children: c
        }))
    }))
})
  , Pt = dt;
export {je as L, Pt as M, ot as P, Ge as a, Ye as b};
//# debugId=85445e8e-13c3-57ab-9575-072d070eab2e
//# sourceMappingURL=Menu-04e61ef3.js.map

