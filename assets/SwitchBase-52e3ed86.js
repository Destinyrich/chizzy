!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "72907672-fc90-549a-802f-37d073920d41")
    } catch (e) {}
}();
import {g as W, a as A, s as F, b6 as D, _ as d, r as G, d as H, j as x, e as J, c as K, f as M} from "./index-4d92c338.js";
import {u as Q} from "./useFormControl-5548d690.js";
import {a as T} from "./createSvgIcon-d5208ee1.js";
function V(e) {
    return W("PrivateSwitchBase", e)
}
A("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const X = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]
  , Y = e=>{
    const {classes: a, checked: i, disabled: l, edge: o} = e
      , r = {
        root: ["root", i && "checked", l && "disabled", o && `edge ${K(o)}`],
        input: ["input"]
    };
    return M(r, V, a)
}
  , Z = F(D)(({ownerState: e})=>d({
    padding: 9,
    borderRadius: "50%"
}, e.edge === "start" && {
    marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
    marginRight: e.size === "small" ? -3 : -12
}))
  , ee = F("input")({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
})
  , se = G.forwardRef(function(a, i) {
    const {autoFocus: l, checked: o, checkedIcon: r, className: y, defaultChecked: h, disabled: w, disableFocusRipple: p=!1, edge: S=!1, icon: R, id: I, inputProps: P, inputRef: j, name: z, onBlur: f, onChange: m, onFocus: g, readOnly: E, required: N=!1, tabIndex: U, type: c, value: b} = a
      , _ = H(a, X)
      , [k,q] = T({
        controlled: o,
        default: !!h,
        name: "SwitchBase",
        state: "checked"
    })
      , t = Q()
      , v = s=>{
        g && g(s),
        t && t.onFocus && t.onFocus(s)
    }
      , L = s=>{
        f && f(s),
        t && t.onBlur && t.onBlur(s)
    }
      , O = s=>{
        if (s.nativeEvent.defaultPrevented)
            return;
        const C = s.target.checked;
        q(C),
        m && m(s, C)
    }
    ;
    let n = w;
    t && typeof n > "u" && (n = t.disabled);
    const $ = c === "checkbox" || c === "radio"
      , u = d({}, a, {
        checked: k,
        disabled: n,
        disableFocusRipple: p,
        edge: S
    })
      , B = Y(u);
    return x.jsxs(Z, d({
        component: "span",
        className: J(B.root, y),
        centerRipple: !0,
        focusRipple: !p,
        disabled: n,
        tabIndex: null,
        role: void 0,
        onFocus: v,
        onBlur: L,
        ownerState: u,
        ref: i
    }, _, {
        children: [x.jsx(ee, d({
            autoFocus: l,
            checked: o,
            defaultChecked: h,
            className: B.input,
            disabled: n,
            id: $ ? I : void 0,
            name: z,
            onChange: O,
            readOnly: E,
            ref: j,
            required: N,
            ownerState: u,
            tabIndex: U,
            type: c
        }, c === "checkbox" && b === void 0 ? {} : {
            value: b
        }, P)), k ? r : R]
    }))
})
  , ne = se;
export {ne as S};
//# debugId=72907672-fc90-549a-802f-37d073920d41
//# sourceMappingURL=SwitchBase-52e3ed86.js.map
