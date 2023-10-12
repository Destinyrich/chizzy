!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "580c6592-1126-55da-9fc3-2e7f55cec497")
    } catch (e) {}
}();
import {r as o, bg as e} from "./index-4d92c338.js";
function r() {
    const t = o.useContext(e);
    if (!t)
        throw new Error("useToastContext must be used within a ToastProvider");
    return t
}
export {r as u};
//# debugId=580c6592-1126-55da-9fc3-2e7f55cec497
//# sourceMappingURL=useToastContext-e230cadb.js.map
