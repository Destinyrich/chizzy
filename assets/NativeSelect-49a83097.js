!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "16a639f4-cf40-574a-a4d1-dc90b492833c")
    } catch (e) {}
}();
import {r as o, u as I, d as l, _ as n, j as p, e as P, f as j} from "./index-4d92c338.js";
import {b as _, N as w, g, A as y, I as E} from "./TextField-d685ca72.js";
import {u as F} from "./useFormControl-5548d690.js";
const b = ["className", "children", "classes", "IconComponent", "input", "inputProps", "variant"]
  , A = ["root"]
  , D = a=>{
    const {classes: e} = a;
    return j({
        root: ["root"]
    }, g, e)
}
  , R = p.jsx(E, {})
  , i = o.forwardRef(function(e, r) {
    const s = I({
        name: "MuiNativeSelect",
        props: e
    })
      , {className: u, children: m, classes: c={}, IconComponent: d=y, input: t=R, inputProps: N} = s
      , f = l(s, b)
      , v = F()
      , x = _({
        props: s,
        muiFormControl: v,
        states: ["variant"]
    })
      , C = n({}, s, {
        classes: c
    })
      , S = D(C)
      , h = l(c, A);
    return p.jsx(o.Fragment, {
        children: o.cloneElement(t, n({
            inputComponent: w,
            inputProps: n({
                children: m,
                classes: h,
                IconComponent: d,
                variant: x.variant,
                type: void 0
            }, N, t ? t.props.inputProps : {}),
            ref: r
        }, f, {
            className: P(S.root, t.props.className, u)
        }))
    })
});
i.muiName = "Select";
const T = i;
export {T as N};
//# debugId=16a639f4-cf40-574a-a4d1-dc90b492833c
//# sourceMappingURL=NativeSelect-49a83097.js.map

