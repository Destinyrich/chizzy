!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "47da3d88-8e61-55fd-9f32-145e25f2fa02")
    } catch (e) {}
}();
import {r as x, aR as y, b_ as b, j as h, aT as E} from "./index-4d92c338.js";
import {P as g} from "./ProfileThemeContext-9f028f8f.js";
import {m as C} from "./mergeDeep-4cfe963b.js";
import {T as A} from "./TextField-d685ca72.js";
function w({style: c, children: l, onMouseEnter: r, onMouseLeave: t, disabled: n, allowOpacity: i=!1, invert: u=!1, ...f}) {
    const [m,s] = x.useState(!1);
    let o = x.useContext(g);
    o = C(y, o);
    const e = i ? o.components.opacity : "";
    let a;
    e !== "00" ? a = o.button.hover_background_color + e : a = `${o.button.hover_background_color}BB`;
    let _ = o.text.hover_color
      , p = o.button.background_color + e
      , d = o.text.color;
    const P = o.text.font_family
      , v = b(o);
    if (u) {
        const B = d
          , F = _
          , R = a
          , T = p;
        _ = B,
        d = F,
        p = R,
        a = T
    }
    const k = {
        ...{
            borderRadius: v,
            backgroundColor: p,
            color: d,
            fontFamily: P,
            textTransform: "none",
            opacity: n && .5,
            boxShadow: m ? "0px 2px 10px rgba(0, 0, 0, 0.25)" : "none",
            transform: m && "scale(1.02)"
        },
        ...c
    };
    return h.jsx(E, {
        style: k,
        onMouseEnter: ()=>{
            s(!0),
            r && r()
        }
        ,
        onMouseLeave: ()=>{
            s(!1),
            t && t()
        }
        ,
        disabled: n,
        ...f,
        children: l
    })
}
function G({style: c, InputProps: l, ...r}) {
    let t = x.useContext(g);
    t = C(y, t);
    const {opacity: n} = t.components
      , i = t.card.background_color + n
      , u = t.text.color
      , f = t.text.font_family
      , s = {
        borderRadius: b(t),
        backgroundColor: i
    }
      , o = {
        fontFamily: f,
        color: u
    }
      , e = {
        ...l
    };
    return e.style = {
        ...o,
        ...e.style
    },
    h.jsx(A, {
        variant: "standard",
        style: {
            ...s,
            ...c
        },
        InputProps: e,
        ...r
    })
}
export {w as P, G as a};
//# debugId=47da3d88-8e61-55fd-9f32-145e25f2fa02
//# sourceMappingURL=ProfileTextField-f53d2baf.js.map
