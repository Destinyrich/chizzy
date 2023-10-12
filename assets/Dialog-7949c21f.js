!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "58812fe0-2509-5242-8617-e198af2d0061")
    } catch (e) {}
}();
import {j as s, e as g, I as N, B as h} from "./index-4d92c338.js";
import {a as A} from "./beacons-34070ee3.js";
import {d as E} from "./Close-eb3987d1.js";
import {D as M} from "./Divider-9b49a72f.js";
import {M as _} from "./Dialog-60e23f85.js";
const x = {
    PRIMARY: "primary",
    PRIMARY_INVERTED: "primaryInverted"
}
  , I = {
    small: "380px",
    medium: "600px",
    large: "1080px",
    full: "unset"
};
function y({open: p, onBackClick: r, onClose: a, dialogStyle: R={}, dialogClassName: t="", children: l, className: n="", hideX: u=!1, intent: j=x.PRIMARY, maxWidth: f, title: i="", subtitle: d="", primaryButton: c=void 0, primaryButtonComponent: e=void 0, secondaryButton: m=void 0, lowerContentComponent: v=void 0, ...D}) {
    const o = !!c || !!e || !!m;
    return s.jsx(_, {
        className: `Account ${n}`,
        open: p,
        onClose: a,
        ...D,
        PaperProps: {
            style: {
                maxWidth: I[f]
            }
        },
        children: s.jsxs("div", {
            style: {
                maxWidth: I[f],
                ...R
            },
            className: g("p-4", {
                "bg-black text-white": j === x.PRIMARY_INVERTED,
                [t]: !!t
            }),
            children: [s.jsxs("div", {
                className: "flex justify-between items-start mb-4 box-border",
                children: [s.jsxs("div", {
                    className: "flex items-start gap-2",
                    children: [!!r && s.jsx(N, {
                        size: "small",
                        edge: "end",
                        onClick: r,
                        "aria-label": "dialog back button",
                        className: "p-0 mt-[1px]",
                        children: s.jsx(A, {
                            className: "text-gray-600"
                        })
                    }), s.jsx("div", {
                        children: !!i && s.jsx("div", {
                            className: "title mr-1",
                            children: i
                        })
                    })]
                }), !u && s.jsx(N, {
                    size: "small",
                    edge: "end",
                    onClick: b=>{
                        a == null || a(b, "escapeKeyDown")
                    }
                    ,
                    "aria-label": "close dialog",
                    className: "p-0 mt-[1px]",
                    children: s.jsx(E, {
                        style: {
                            fill: j === x.PRIMARY_INVERTED ? "var(--beacons-brand-white)" : void 0
                        }
                    })
                })]
            }), !!i && (!!d || !!l) && s.jsx(M, {
                fullWidth: !1,
                className: "my-4"
            }), !!d && s.jsx("div", {
                className: "mt-4",
                children: d
            }), !!l && s.jsx("div", {
                className: "mt-4",
                children: l
            }), o && s.jsxs("div", {
                className: "flex items-center justify-center gap-3 mt-4",
                children: [!!m && s.jsx("div", {
                    className: "flex-1",
                    children: s.jsx(h, {
                        variant: "outlined",
                        fullWidth: !0,
                        ...m
                    })
                }), s.jsxs("div", {
                    className: "flex-1",
                    children: [!e && !!c && s.jsx(h, {
                        fullWidth: !0,
                        ...c
                    }), !!e && e]
                })]
            }), !!v && s.jsx("div", {
                className: "mt-4",
                children: v
            })]
        })
    })
}
export {y as D};
//# debugId=58812fe0-2509-5242-8617-e198af2d0061
//# sourceMappingURL=Dialog-7949c21f.js.map
