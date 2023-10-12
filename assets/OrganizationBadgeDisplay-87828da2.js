!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "bb684092-6c3e-5378-a241-9a7c74e54775")
    } catch (e) {}
}();
import {l as g, j as r, e as s} from "./index-4d92c338.js";
import {i as d} from "./isURL-ac0cc765.js";
import {g as c} from "./Avatar-8718a395.js";
import {A as m} from "./Avatar-b3380fc2.js";
const u = {
    DEFAULT: "default",
    SLIM: "slim"
};
function _(a) {
    const i = a.badge_data;
    if (!i || i.length === 0)
        return [];
    const e = i[0];
    return [{
        organizationName: e.organization_name,
        organizationLogoUrl: e.organization_logo_url,
        managerUsername: e.manager_username,
        showBadgeInLibHeader: e.show_badge_in_lib_header,
        showBadgeInMkHeader: e.show_badge_in_mk_header,
        showBadgeInLibFooter: e.show_badge_in_lib_footer,
        showBadgeInMkFooter: e.show_badge_in_mk_footer,
        badgeSize: e.badge_size,
        badgeUrl: e.badge_url,
        badgeLabel: e.badge_label
    }]
}
async function j(a) {
    const i = await g("public_actions", {
        action: "get_organization_badge_data_for_user",
        firebase_uid: a
    });
    return _(i.data)
}
function x({badgeUrl: a, children: i}) {
    if (!a)
        return r.jsx("div", {
            children: i
        });
    const e = d(a, {
        require_protocol: !0
    }) ? a : `https://${a}`;
    return r.jsx("a", {
        href: e,
        target: "_blank",
        className: "no-underline",
        rel: "noreferrer",
        children: i
    })
}
function b({badgeInfo: a, agencyName: i, agencyLogoUrl: e}) {
    const t = a.badgeSize || u.DEFAULT
      , n = t === "slim";
    return r.jsx(x, {
        badgeUrl: a.badgeUrl,
        children: r.jsxs("div", {
            className: s({
                "p-2": !n,
                "p-1": n
            }, "shadow-md rounded-4 flex flex-row items-center gap-2 bg-white/[0.6] font-poppins"),
            children: [r.jsx(m, {
                src: e,
                alt: i,
                className: "w-8 h-8 title-small bg-gray-300 rounded-4 text-black",
                children: !e && !!i && c(i)
            }), r.jsxs("div", {
                className: "flex flex-col items-start gap-0.5",
                children: [t === "default" && r.jsx("div", {
                    className: "detail text-[#1c1c1c80]",
                    children: a.badgeLabel || "Represented by"
                }), r.jsx("div", {
                    className: s({
                        "text-small-bold": !n,
                        detail: n
                    }, "text-black tracking-normal"),
                    children: i
                })]
            })]
        })
    })
}
function L({creatorBadgeInfo: a, visibilityKey: i, shouldCenterBadges: e=!1}) {
    return a != null && a.length ? r.jsx("div", {
        className: s({
            "justify-center": e
        }, "flex flex-row flex-wrap gap-2 items-center w-full"),
        children: a.map(t=>{
            const n = t.organizationName
              , o = t.organizationLogoUrl
              , l = t.managerUsername;
            return (t == null ? void 0 : t[i]) ? r.jsx(b, {
                agencyLogoUrl: o,
                agencyName: n || `${l}'s Management Agency`,
                badgeInfo: t
            }, n) : null
        }
        )
    }) : null
}
export {u as B, L as O, b as a, j as f};
//# debugId=bb684092-6c3e-5378-a241-9a7c74e54775
//# sourceMappingURL=OrganizationBadgeDisplay-87828da2.js.map

