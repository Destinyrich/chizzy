!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "a9e54d4e-62c6-572b-963c-83d3302bc310")
    } catch (e) {}
}();
import {a as _, g as K, r as c, s as d, c as i, _ as r, aY as P, u as X, b1 as z, d as H, j as s, e as f, f as V} from "./index-4d92c338.js";
import {B as q, M as G, F as J} from "./Modal-6761fec1.js";
import {u as O} from "./createSvgIcon-d5208ee1.js";
function Q(e) {
    return K("MuiDialog", e)
}
const Z = _("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"])
  , W = Z
  , aa = c.createContext({})
  , ea = aa
  , oa = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"]
  , ra = d(q, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (e,a)=>a.backdrop
})({
    zIndex: -1
})
  , ia = e=>{
    const {classes: a, scroll: o, maxWidth: l, fullWidth: n, fullScreen: u} = e
      , m = {
        root: ["root"],
        container: ["container", `scroll ${i(o)}`],
        paper: ["paper", `paperScroll ${i(o)}`, `paperWidth ${i(String(l))}`, n && "paperFullWidth", u && "paperFullScreen"]
    };
    return V(m, Q, a)
}
  , la = d(G, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (e,a)=>a.root
})({
    "@media print": {
        position: "absolute !important"
    }
})
  , ta = d("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e,a)=>{
        const {ownerState: o} = e;
        return [a.container, a[`scroll ${i(o.scroll)}`]]
    }
})(({ownerState: e})=>r({
    height: "100%",
    "@media print": {
        height: "auto"
    },
    outline: 0
}, e.scroll === "paper" && {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}, e.scroll === "body" && {
    overflowY: "auto",
    overflowX: "hidden",
    textAlign: "center",
    "&:after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
    }
}))
  , sa = d(P, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e,a)=>{
        const {ownerState: o} = e;
        return [a.paper, a[`scrollPaper ${i(o.scroll)}`], a[`paperWidth ${i(String(o.maxWidth))}`], o.fullWidth && a.paperFullWidth, o.fullScreen && a.paperFullScreen]
    }
})(({theme: e, ownerState: a})=>r({
    margin: 32,
    position: "relative",
    overflowY: "auto",
    "@media print": {
        overflowY: "visible",
        boxShadow: "none"
    }
}, a.scroll === "paper" && {
    display: "flex",
    flexDirection: "column",
    maxHeight: "calc(100% - 64px)"
}, a.scroll === "body" && {
    display: "inline-block",
    verticalAlign: "middle",
    textAlign: "left"
}, !a.maxWidth && {
    maxWidth: "calc(100% - 64px)"
}, a.maxWidth === "xs" && {
    maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
    [`&.${W.paperScrollBody}`]: {
        [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
            maxWidth: "calc(100% - 64px)"
        }
    }
}, a.maxWidth && a.maxWidth !== "xs" && {
    maxWidth: `${e.breakpoints.values[a.maxWidth]}${e.breakpoints.unit}`,
    [`&.${W.paperScrollBody}`]: {
        [e.breakpoints.down(e.breakpoints.values[a.maxWidth] + 32 * 2)]: {
            maxWidth: "calc(100% - 64px)"
        }
    }
}, a.fullWidth && {
    width: "calc(100% - 64px)"
}, a.fullScreen && {
    margin: 0,
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    maxHeight: "none",
    borderRadius: 0,
    [`&.${W.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
    }
}))
  , na = c.forwardRef(function(a, o) {
    const l = X({
        props: a,
        name: "MuiDialog"
    })
      , n = z()
      , u = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen
    }
      , {"aria-describedby": m, "aria-labelledby": B, BackdropComponent: M, BackdropProps: S, children: $, className: w, disableEscapeKeyDown: k=!1, fullScreen: j=!1, fullWidth: F=!1, maxWidth: R="sm", onBackdropClick: C, onClose: x, open: D, PaperComponent: T=P, PaperProps: y={}, scroll: N="paper", TransitionComponent: A=J, transitionDuration: v=u, TransitionProps: E} = l
      , I = H(l, oa)
      , p = r({}, l, {
        disableEscapeKeyDown: k,
        fullScreen: j,
        fullWidth: F,
        maxWidth: R,
        scroll: N
    })
      , h = ia(p)
      , g = c.useRef()
      , U = t=>{
        g.current = t.target === t.currentTarget
    }
      , L = t=>{
        g.current && (g.current = null,
        C && C(t),
        x && x(t, "backdropClick"))
    }
      , b = O(B)
      , Y = c.useMemo(()=>({
        titleId: b
    }), [b]);
    return s.jsx(la, r({
        className: f(h.root, w),
        closeAfterTransition: !0,
        components: {
            Backdrop: ra
        },
        componentsProps: {
            backdrop: r({
                transitionDuration: v,
                as: M
            }, S)
        },
        disableEscapeKeyDown: k,
        onClose: x,
        open: D,
        ref: o,
        onClick: L,
        ownerState: p
    }, I, {
        children: s.jsx(A, r({
            appear: !0,
            in: D,
            timeout: v,
            role: "presentation"
        }, E, {
            children: s.jsx(ta, {
                className: f(h.container),
                onMouseDown: U,
                ownerState: p,
                children: s.jsx(sa, r({
                    as: T,
                    elevation: 24,
                    role: "dialog",
                    "aria-describedby": m,
                    "aria-labelledby": b
                }, y, {
                    className: f(h.paper, y.className),
                    ownerState: p,
                    children: s.jsx(ea.Provider, {
                        value: Y,
                        children: $
                    })
                }))
            })
        }))
    }))
})
  , ua = na;
export {ua as M, W as d};
//# debugId=a9e54d4e-62c6-572b-963c-83d3302bc310
//# sourceMappingURL=Dialog-60e23f85.js.map
