!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "eef04bee-2c07-565d-b552-c9d15ffe22b5")
    } catch (e) {}
}();
import {j as s, e as g, I as f} from "./index-4d92c338.js";
import {d as t} from "./Close-eb3987d1.js";
import {B as d} from "./ButtonV1-c477208d.js";
import {M as E} from "./Dialog-60e23f85.js";
const c = {
    PRIMARY: "primary",
    PRIMARY_INVERTED: "primaryInverted"
};
function D({open: h, onClose: x, dialogStyle: o={}, dialogClassName: r="", children: m, title: n="", subtitle: j="", primaryButton: e=void 0, secondaryButton: i=void 0, tertiaryButton: l=void 0, hideX: R=!1, primaryButtonComponent: a=void 0, className: I="", intent: v=c.PRIMARY, ...M}) {
    const N = !!e || !!i || !!l;
    return s.jsx(E, {
        className: `Account ${I}`,
        open: h,
        onClose: x,
        ...M,
        children: s.jsxs("div", {
            style: {
                ...o
            },
            className: g("p-[10px] lg:p-3", {
                "bg-black text-white": v === c.PRIMARY_INVERTED,
                [r]: !!r
            }),
            children: [s.jsxs("div", {
                className: "flex items-center -mt-1 mb-4 box-border",
                children: [s.jsx("div", {
                    className: "FlexAuto MarginRightM",
                    children: !!n && s.jsx("div", {
                        className: "h2Text",
                        children: n
                    })
                }), !R && s.jsx(f, {
                    size: "small",
                    edge: "end",
                    onClick: x,
                    "aria-label": "close dialog",
                    children: s.jsx(t, {
                        style: {
                            fill: v === c.PRIMARY_INVERTED && "var(--beacons-brand-white)"
                        }
                    })
                })]
            }), !!j && s.jsx("div", {
                children: j
            }), !!m && s.jsx("div", {
                className: "MarginTopS",
                children: m
            }), N && s.jsxs("div", {
                className: "FlexCenter JustifySpaceBetween MarginTopM",
                children: [s.jsx("div", {
                    children: !!l && s.jsx(d, {
                        size: "small",
                        ...l
                    })
                }), s.jsxs("div", {
                    className: "FlexCenter JustifyEnd",
                    children: [s.jsx("div", {
                        className: "MarginRightXS",
                        children: !!i && s.jsx(d, {
                            size: "small",
                            ...i
                        })
                    }), s.jsxs("div", {
                        children: [!a && !!e && s.jsx(d, {
                            size: "small",
                            ...e
                        }), !!a && a]
                    })]
                })]
            })]
        })
    })
}
export {D};
//# debugId=eef04bee-2c07-565d-b552-c9d15ffe22b5
//# sourceMappingURL=DialogV1-d7e33d30.js.map
