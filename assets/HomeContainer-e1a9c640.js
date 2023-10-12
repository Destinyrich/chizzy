!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "6ab54528-654d-5895-b56f-c4257fddf50a")
    } catch (e) {}
}();
import {j as s} from "./index-4d92c338.js";
import {G as c} from "./index-15bf1856.js";
import {u as r} from "./useIsMobile-131a099e.js";
import {C as d} from "./Container-cc2d692b.js";
function m({minWidth: e="980px"}) {
    const i = r();
    return s.jsx("div", {
        children: i ? s.jsx("div", {
            className: "BackgroundImage Mobile",
            children: s.jsx("img", {
                src: "/images/background_mobile.png",
                alt: "background_mobile"
            })
        }) : s.jsxs("div", {
            style: {
                minWidth: e
            },
            children: [s.jsx("div", {
                className: "BackgroundImage Left",
                children: s.jsx("img", {
                    src: "/images/background_left.png",
                    alt: "background_left"
                })
            }), s.jsx("div", {
                className: "BackgroundImage Right",
                children: s.jsx("img", {
                    src: "/images/background_right.png",
                    alt: "background_right"
                })
            })]
        })
    })
}
function j({children: e, minWidth: i="1130px", showCircles: a=!0, mobileContainerStyle: n={}, containerStyle: o, ...g}) {
    const t = r();
    return s.jsxs("div", {
        className: "Home",
        ...g,
        children: [s.jsx(c, {
            fonts: [{
                font: "Poppins",
                weights: [400, 600, 700]
            }]
        }), a && s.jsx(m, {
            minWidth: i
        }), s.jsx(d, {
            maxWidth: "lg",
            style: t ? {
                ...o,
                ...n
            } : {
                paddingLeft: 80,
                paddingRight: 80,
                minWidth: i,
                ...o
            },
            children: e
        })]
    })
}
export {j as H};
//# debugId=6ab54528-654d-5895-b56f-c4257fddf50a
//# sourceMappingURL=HomeContainer-e1a9c640.js.map

