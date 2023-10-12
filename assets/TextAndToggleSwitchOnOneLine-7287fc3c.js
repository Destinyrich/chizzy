!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "61c4551f-1b5f-584b-9c7b-f90eb215e523")
    } catch (e) {}
}();
import {j as e} from "./index-4d92c338.js";
import {ao as o} from "./BeaconsIcon-7e54ce15.js";
import {S as l} from "./VisibilityOff-5dc3800a.js";
import {T as c} from "./Tooltip-bfcffb64.js";
function f({state: i, text: t, onChange: a, toolTip: r, nowrap: s=!0, switchDataTestId: n}) {
    return e.jsxs("div", {
        className: "FlexCenter JustifySpaceBetween",
        children: [e.jsxs("div", {
            className: "FlexCenter",
            style: {
                whiteSpace: s ? "nowrap" : "normal"
            },
            children: [t, !!r && e.jsx(c, {
                title: r,
                arrow: !0,
                children: e.jsx(o, {
                    style: {
                        marginLeft: 4,
                        fontSize: 14
                    }
                })
            })]
        }), e.jsx("div", {
            "aria-label": `text and toggle switch - ${t}`,
            children: e.jsx(l, {
                color: "primary",
                checked: i,
                onChange: a,
                "data-testid": n
            })
        })]
    })
}
export {f as T};
//# debugId=61c4551f-1b5f-584b-9c7b-f90eb215e523
//# sourceMappingURL=TextAndToggleSwitchOnOneLine-7287fc3c.js.map

