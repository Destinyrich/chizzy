!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "18731353-7b86-500c-92ef-343b1cdbc06d")
    } catch (e) {}
}();
import {aM as E, cw as P, cx as T} from "./index-4d92c338.js";
const R = async _=>{
    try {
        const A = await E({
            method: "get",
            url: "https://beacons.ai/api/document_service",
            params: {
                f: P(_)
            }
        });
        if (A.data.exists)
            return T(A.data.data)
    } catch {
        return null
    }
    return null
}
  , t = R;
export {t as g};
//# debugId=18731353-7b86-500c-92ef-343b1cdbc06d
//# sourceMappingURL=getDocumentProxy-977bed7d.js.map
