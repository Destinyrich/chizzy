!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "1135ba2b-f744-5853-a610-49ed10f46e50")
    } catch (e) {}
}();
import {r as e, j as o} from "./index-4d92c338.js";
const i = e.createContext({
    forceRefresh: ()=>{}
})
  , n = i;
function a({children: t}) {
    const [,r] = e.useReducer(s=>s + 1, 0);
    return o.jsx(n.Provider, {
        value: {
            forceRefresh: r
        },
        children: t
    })
}
export {a as U, n as a};
//# debugId=1135ba2b-f744-5853-a610-49ed10f46e50
//# sourceMappingURL=index-e47d228f.js.map
