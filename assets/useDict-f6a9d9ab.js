!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "f68a1345-5519-587b-86dd-f9e579ecebab")
    } catch (e) {}
}();
import {r as s} from "./index-4d92c338.js";
function i(o) {
    const [t,e] = s.useState(o)
      , a = s.useCallback((u,c=!0)=>{
        const r = typeof u == "function" ? u(t) : u;
        e(c ? n=>({
            ...n,
            ...r
        }) : r)
    }
    , [t]);
    return {
        value: t,
        updateValue: a,
        setValue: e
    }
}
export {i as u};
//# debugId=f68a1345-5519-587b-86dd-f9e579ecebab
//# sourceMappingURL=useDict-f6a9d9ab.js.map
