!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "7fa00b18-763d-546a-8149-65a40a456c47")
    } catch (e) {}
}();
import {t as C, j as u, a as j, g as w, s as m, _ as n, r as p, u as I, d as S, e as D, f as M} from "./index-4d92c338.js";
const P = C(u.jsx("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function z(a) {
    return w("MuiAvatar", a)
}
const F = j("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"])
  , B = F
  , N = ["alt", "children", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]
  , U = a=>{
    const {classes: e, variant: t, colorDefault: r} = a;
    return M({
        root: ["root", t, r && "colorDefault"],
        img: ["img"],
        fallback: ["fallback"]
    }, z, e)
}
  , _ = m("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (a,e)=>{
        const {ownerState: t} = a;
        return [e.root, e[t.variant], t.colorDefault && e.colorDefault]
    }
})(({theme: a, ownerState: e})=>n({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: a.typography.fontFamily,
    fontSize: a.typography.pxToRem(20),
    lineHeight: 1,
    borderRadius: "50%",
    overflow: "hidden",
    userSelect: "none"
}, e.variant === "rounded" && {
    borderRadius: (a.vars || a).shape.borderRadius
}, e.variant === "square" && {
    borderRadius: 0
}, e.colorDefault && n({
    color: (a.vars || a).palette.background.default
}, a.vars ? {
    backgroundColor: a.vars.palette.Avatar.defaultBg
} : {
    backgroundColor: a.palette.mode === "light" ? a.palette.grey[400] : a.palette.grey[600]
})))
  , E = m("img", {
    name: "MuiAvatar",
    slot: "Img",
    overridesResolver: (a,e)=>e.img
})({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4
})
  , L = m(P, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (a,e)=>e.fallback
})({
    width: "75%",
    height: "75%"
});
function q({crossOrigin: a, referrerPolicy: e, src: t, srcSet: r}) {
    const [o,l] = p.useState(!1);
    return p.useEffect(()=>{
        if (!t && !r)
            return;
        l(!1);
        let i = !0;
        const s = new Image;
        return s.onload = ()=>{
            i && l("loaded")
        }
        ,
        s.onerror = ()=>{
            i && l("error")
        }
        ,
        s.crossOrigin = a,
        s.referrerPolicy = e,
        s.src = t,
        r && (s.srcset = r),
        ()=>{
            i = !1
        }
    }
    , [a, e, t, r]),
    o
}
const T = p.forwardRef(function(e, t) {
    const r = I({
        props: e,
        name: "MuiAvatar"
    })
      , {alt: o, children: l, className: i, component: s="div", imgProps: h, sizes: A, src: f, srcSet: v, variant: y="circular"} = r
      , R = S(r, N);
    let c = null;
    const k = q(n({}, h, {
        src: f,
        srcSet: v
    }))
      , b = f || v
      , x = b && k !== "error"
      , d = n({}, r, {
        colorDefault: !x,
        component: s,
        variant: y
    })
      , g = U(d);
    return x ? c = u.jsx(E, n({
        alt: o,
        src: f,
        srcSet: v,
        sizes: A,
        ownerState: d,
        className: g.img
    }, h)) : l != null ? c = l : b && o ? c = o[0] : c = u.jsx(L, {
        ownerState: d,
        className: g.fallback
    }),
    u.jsx(_, n({
        as: s,
        ownerState: d,
        className: D(g.root, i),
        ref: t
    }, R, {
        children: c
    }))
})
  , H = T;
export {H as A, B as a};
//# debugId=7fa00b18-763d-546a-8149-65a40a456c47
//# sourceMappingURL=Avatar-b3380fc2.js.map
