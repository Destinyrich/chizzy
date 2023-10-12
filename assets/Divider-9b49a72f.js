!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "05fe4857-fb93-5daf-915a-ac8eac3fcf95")
    } catch (e) {}
}();
import {j as t, e as a} from "./index-4d92c338.js";
function l({className: e="", halfThick: r=!1, fullWidth: i=!0, ...s}) {
    return t.jsx("div", {
        className: a({
            Divider: !0,
            [e]: !0,
            FullWidth: i,
            HalfThick: r
        }),
        ...s
    })
}
export {l as D};
//# debugId=05fe4857-fb93-5daf-915a-ac8eac3fcf95
//# sourceMappingURL=Divider-9b49a72f.js.map

