!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "d189aec3-a2b3-5b08-b4ff-669840394e54")
    } catch (e) {}
}();
import {r as a, j as T, aR as t} from "./index-4d92c338.js";
import {S as n} from "./beacons_full-69d2fc55.js";
import {c as e, F as c} from "./canUseFeature-1928dc1b.js";
import {P as r} from "./ProfileGlobalsContext-8982728f.js";
import {P as I} from "./ProfileThemeContext-9f028f8f.js";
function L({headerTextColor: _, profileTheme: A}) {
    var E, P;
    return _ || (((E = A == null ? void 0 : A.background) == null ? void 0 : E.background_color1) === "#ffffff" || ((P = A == null ? void 0 : A.background) != null && P.filter ? A.background.filter === "light" : t.background.filter) ? "var(--beacons-gray-900)" : "white")
}
function p({color: _}) {
    var o;
    const A = a.useContext(I)
      , {displayUsername: R, headerTextColor: E, isComponent: P, subscriptionPlanIds: C} = a.useContext(r) || {};
    if (e(c.BRANDING, C) && !((o = A == null ? void 0 : A.page) != null && o.show_logo))
        return null;
    const s = new URLSearchParams({
        referral_type: "footer_logo",
        referring_user: R,
        utm_source: "beacons_user",
        utm_medium: "lib_footer_logo",
        utm_campaign: R
    });
    return T.jsx("div", {
        className: "FlexCenterCenter ProfileLogo",
        children: T.jsx("a", {
            href: P ? "#logo" : `https://beacons.ai/?${s}`,
            "aria-label": "home",
            children: T.jsx(n, {
                style: {
                    fill: _ || L({
                        headerTextColor: E,
                        profileTheme: A
                    }),
                    height: 35
                }
            })
        })
    })
}
export {p as B};
//# debugId=d189aec3-a2b3-5b08-b4ff-669840394e54
//# sourceMappingURL=BeaconsLogoComponent-02c5d68b.js.map
