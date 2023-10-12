!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "368a3302-ed22-505b-bb9d-a45f2388562f")
    } catch (e) {}
}();
import {a_ as e, j as p} from "./index-4d92c338.js";
import {T as c} from "./TextField-d685ca72.js";
const f = e(o=>({
    root: {
        overflow: "hidden",
        backgroundColor: "#ffffff",
        "&:hover $notchedOutline": {
            borderColor: o.palette.grey[600]
        },
        "&$error": {
            borderColor: o.palette.red.main,
            borderWidth: 1
        },
        "&$focused": {
            backgroundColor: "#ffffff",
            color: o.palette.grey[900],
            borderColor: o.palette.grey[900]
        },
        "&$disabled": {
            backgroundColor: "#ffffff",
            color: o.palette.grey[500],
            borderColor: o.palette.grey[500]
        },
        "&$focused $notchedOutline": {
            borderWidth: 1
        },
        "&$focused:not($error) $notchedOutline": {
            borderColor: o.palette.grey[900]
        }
    },
    error: {},
    focused: {},
    disabled: {},
    notchedOutline: {}
}))
  , u = e(o=>({
    root: {
        color: o.palette.grey[900],
        "&$focused:not($error)": {
            color: o.palette.grey[900]
        }
    },
    focused: {},
    error: {}
}))
  , i = e(o=>({
    root: {
        color: o.palette.grey[900]
    }
}));
function g({variant: o="outlined", InputProps: r, InputLabelProps: t, FormHelperTextProps: s, ...l}) {
    const d = f()
      , n = u()
      , a = i();
    return p.jsx(c, {
        InputProps: {
            classes: d,
            ...r
        },
        InputLabelProps: {
            classes: n,
            ...t
        },
        FormHelperTextProps: {
            classes: a,
            ...s
        },
        variant: o,
        ...l
    })
}
export {g as T};
//# debugId=368a3302-ed22-505b-bb9d-a45f2388562f
//# sourceMappingURL=TextField-0a574c54.js.map
