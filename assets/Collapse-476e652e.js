!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "02639cf9-fae1-5ad0-80ce-bdd0cfc3018f")
    } catch (e) {}
}();
import {g as ee, a as te, s as T, _ as o, r as c, u as ne, cq as ie, b2 as oe, d as re, b1 as se, aG as ae, j as C, e as le, f as de, b4 as P} from "./index-4d92c338.js";
function ce(n) {
    return ee("MuiCollapse", n)
}
te("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const pe = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"]
  , ue = n=>{
    const {orientation: t, classes: r} = n
      , p = {
        root: ["root", `${t}`],
        entered: ["entered"],
        hidden: ["hidden"],
        wrapper: ["wrapper", `${t}`],
        wrapperInner: ["wrapperInner", `${t}`]
    };
    return de(p, ce, r)
}
  , he = T("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (n,t)=>{
        const {ownerState: r} = n;
        return [t.root, t[r.orientation], r.state === "entered" && t.entered, r.state === "exited" && !r.in && r.collapsedSize === "0px" && t.hidden]
    }
})(({theme: n, ownerState: t})=>o({
    height: 0,
    overflow: "hidden",
    transition: n.transitions.create("height")
}, t.orientation === "horizontal" && {
    height: "auto",
    width: 0,
    transition: n.transitions.create("width")
}, t.state === "entered" && o({
    height: "auto",
    overflow: "visible"
}, t.orientation === "horizontal" && {
    width: "auto"
}), t.state === "exited" && !t.in && t.collapsedSize === "0px" && {
    visibility: "hidden"
}))
  , fe = T("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (n,t)=>t.wrapper
})(({ownerState: n})=>o({
    display: "flex",
    width: "100%"
}, n.orientation === "horizontal" && {
    width: "auto",
    height: "100%"
}))
  , me = T("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (n,t)=>t.wrapperInner
})(({ownerState: n})=>o({
    width: "100%"
}, n.orientation === "horizontal" && {
    width: "auto",
    height: "100%"
}))
  , U = c.forwardRef(function(t, r) {
    const p = ne({
        props: t,
        name: "MuiCollapse"
    })
      , {addEndListener: S, children: _, className: A, collapsedSize: g="0px", component: q, easing: $, in: D, onEnter: W, onEntered: j, onEntering: b, onExit: I, onExited: G, onExiting: M, orientation: F="vertical", style: z, timeout: a=ie.standard, TransitionComponent: k=oe} = p
      , B = re(p, pe)
      , x = o({}, p, {
        orientation: F,
        collapsedSize: g
    })
      , u = ue(x)
      , H = se()
      , L = c.useRef()
      , l = c.useRef(null)
      , R = c.useRef()
      , E = typeof g == "number" ? `${g}px` : g
      , h = F === "horizontal"
      , f = h ? "width" : "height";
    c.useEffect(()=>()=>{
        clearTimeout(L.current)
    }
    , []);
    const w = c.useRef(null)
      , J = ae(r, w)
      , d = e=>i=>{
        if (e) {
            const s = w.current;
            i === void 0 ? e(s) : e(s, i)
        }
    }
      , v = ()=>l.current ? l.current[h ? "clientWidth" : "clientHeight"] : 0
      , K = d((e,i)=>{
        l.current && h && (l.current.style.position = "absolute"),
        e.style[f] = E,
        W && W(e, i)
    }
    )
      , O = d((e,i)=>{
        const s = v();
        l.current && h && (l.current.style.position = "");
        const {duration: m, easing: y} = P({
            style: z,
            timeout: a,
            easing: $
        }, {
            mode: "enter"
        });
        if (a === "auto") {
            const N = H.transitions.getAutoHeightDuration(s);
            e.style.transitionDuration = `${N}ms`,
            R.current = N
        } else
            e.style.transitionDuration = typeof m == "string" ? m : `${m}ms`;
        e.style[f] = `${s}px`,
        e.style.transitionTimingFunction = y,
        b && b(e, i)
    }
    )
      , Q = d((e,i)=>{
        e.style[f] = "auto",
        j && j(e, i)
    }
    )
      , V = d(e=>{
        e.style[f] = `${v()}px`,
        I && I(e)
    }
    )
      , X = d(G)
      , Y = d(e=>{
        const i = v()
          , {duration: s, easing: m} = P({
            style: z,
            timeout: a,
            easing: $
        }, {
            mode: "exit"
        });
        if (a === "auto") {
            const y = H.transitions.getAutoHeightDuration(i);
            e.style.transitionDuration = `${y}ms`,
            R.current = y
        } else
            e.style.transitionDuration = typeof s == "string" ? s : `${s}ms`;
        e.style[f] = E,
        e.style.transitionTimingFunction = m,
        M && M(e)
    }
    )
      , Z = e=>{
        a === "auto" && (L.current = setTimeout(e, R.current || 0)),
        S && S(w.current, e)
    }
    ;
    return C.jsx(k, o({
        in: D,
        onEnter: K,
        onEntered: Q,
        onEntering: O,
        onExit: V,
        onExited: X,
        onExiting: Y,
        addEndListener: Z,
        nodeRef: w,
        timeout: a === "auto" ? null : a
    }, B, {
        children: (e,i)=>C.jsx(he, o({
            as: q,
            className: le(u.root, A, {
                entered: u.entered,
                exited: !D && E === "0px" && u.hidden
            }[e]),
            style: o({
                [h ? "minWidth" : "minHeight"]: E
            }, z),
            ownerState: o({}, x, {
                state: e
            }),
            ref: J
        }, i, {
            children: C.jsx(fe, {
                ownerState: o({}, x, {
                    state: e
                }),
                className: u.wrapper,
                ref: l,
                children: C.jsx(me, {
                    ownerState: o({}, x, {
                        state: e
                    }),
                    className: u.wrapperInner,
                    children: _
                })
            })
        }))
    }))
});
U.muiSupportAuto = !0;
const xe = U;
export {xe as C};
//# debugId=02639cf9-fae1-5ad0-80ce-bdd0cfc3018f
//# sourceMappingURL=Collapse-476e652e.js.map

