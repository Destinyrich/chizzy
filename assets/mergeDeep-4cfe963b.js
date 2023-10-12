!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "76a884b5-a809-560b-a166-bed070002f86")
    } catch (e) {}
}();
import {a as n, c as f} from "./typeUtils-3c270e0f.js";
const c = e=>n(e) && !Array.isArray(e);
function l(e, i) {
    const r = {
        ...e
    };
    return c(e) && c(i) && Object.keys(i).forEach(s=>{
        const t = i[s];
        if (n(t)) {
            const a = f(e, s) ? e[s] : void 0
              , o = c(a) && c(t);
            !a || !o ? Object.assign(r, {
                [s]: t
            }) : n(a) && Object.assign(r, {
                [s]: l(a, t)
            })
        } else
            Object.assign(r, {
                [s]: t
            })
    }
    ),
    r
}
export {l as m};
//# debugId=76a884b5-a809-560b-a166-bed070002f86
//# sourceMappingURL=mergeDeep-4cfe963b.js.map
