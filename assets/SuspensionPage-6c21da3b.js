!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "60e854fa-4700-5dc8-940c-33f6d376d39a")
    } catch (e) {}
}();
import {j as A} from "./index-4d92c338.js";
import {H as E} from "./HomeContainer-e1a9c640.js";
import {S as P} from "./beacons_full-69d2fc55.js";
function a({message: _}) {
    return A.jsxs(E, {
        children: [A.jsx("center", {
            className: "mt-12",
            children: _
        }), A.jsx("div", {
            className: "flex justify-center",
            children: A.jsx("a", {
                href: "https://airtable.com/shrxCTVQxzNkWOiK9",
                "aria-label": "home",
                children: A.jsx("center", {
                    className: "mt-9",
                    children: "Contact us for support."
                })
            })
        }), A.jsxs("div", {
            className: "mt-12 flex justify-center gap-4 text-14",
            children: [A.jsx("a", {
                href: "https://airtable.com/shrxCTVQxzNkWOiK9",
                "aria-label": "home",
                className: "text-gray-600",
                children: A.jsx("center", {
                    children: "Copyright"
                })
            }), A.jsx("a", {
                href: "https://airtable.com/shrxCTVQxzNkWOiK9",
                "aria-label": "home",
                className: "text-gray-600",
                children: A.jsx("center", {
                    children: "Law Enforcement"
                })
            })]
        }), A.jsx("center", {
            className: "mt-9",
            children: A.jsx("a", {
                href: "https://beacons.ai",
                "aria-label": "home",
                children: A.jsx(P, {
                    className: "fill-gray-900 h-9"
                })
            })
        })]
    })
}
export {a as S};
//# debugId=60e854fa-4700-5dc8-940c-33f6d376d39a
//# sourceMappingURL=SuspensionPage-6c21da3b.js.map

