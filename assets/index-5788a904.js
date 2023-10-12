!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "7bd0706c-fd0f-5e21-a723-324050123f7c")
    } catch (e) {}
}();
import {r as o, i as N, j as C, l as K} from "./index-4d92c338.js";
import {C as a} from "./CDN_URLS-53881ca1.js";
import {u as S} from "./useDict-f6a9d9ab.js";
const A = `${a}/mk-setup-intro-screen-1.png`
  , O = `${a}/mk-setup-intro-screen-2.png`
  , R = `${a}/mk-setup-intro-screen-3.png`
  , I = `${a}/mk-setup-phyllo-setup.png`
  , x = `${a}/mk-setup-next-steps-1.png`
  , L = `${a}/mk-setup-next-steps-2.png`
  , g = `${a}/mk-setup-next-steps-3.png`
  , v = {
    INTRO_STARTED: "Media Kit Wizard Started",
    AUTO_SETUP_COMPLETED: "Media Kit Wizard Auto Setup Completed",
    BRAND_PARTNERSHIPS_BLOCK_FIRST_BRAND: "Media Kit Wizard Brand Partnerships First Brand Completed",
    PLATFORM_SELECTED: "Media Kit Wizard Platform Selected",
    CONNECTION_METHOD_SELECTED: "Media Kit Wizard Connection Method Selected",
    SCRAPE_STARTED: "Media Kit Scrape Started",
    WARM_STARTUP_FAILED: "Media Kit Warm Startup Failed",
    PARALLEL_SCRAPE_COMPLETED: "Media Kit Wizard Parallel Scrape Completed"
}
  , h = {
    PHYLLO: "phyllo",
    SCRAPE: "scrape"
}
  , n = {
    INTRO: "intro",
    PHYLLO_CONNECTION: "phyllo-connection",
    SETUP_COMPLETE: "setup-complete"
}
  , b = {
    [n.INTRO]: {
        title: "Setting up your Media Kit",
        description: "Automatically building your customized media kit.",
        imageSrcList: [A, O, R]
    },
    [n.PHYLLO_CONNECTION]: {
        title: "Connect your analytics",
        description: "Authenticate your socials to show detailed live statistics.",
        imageSrc: I
    },
    [n.SETUP_COMPLETE]: {
        title: "Setup Complete!",
        description: "Your Media Kit is live:",
        imageSrcList: [x, L, g]
    }
};
async function D(t) {
    return K("user_profile", {
        action: "get_validated_media_kit_document",
        authUser: t
    })
}
const r = o.createContext(null)
  , M = o.createContext(null);
function y({children: t}) {
    const e = N()
      , {value: s, updateValue: c} = S(void 0)
      , {value: u, updateValue: _} = S(void 0)
      , d = s == null ? void 0 : s.setup_wizard_completed_steps
      , T = d == null ? void 0 : d.includes(n.SETUP_COMPLETE);
    return o.useEffect(()=>{
        if (!(e != null && e.beacons_username))
            return;
        async function p() {
            var E, l;
            try {
                const i = await D(e)
                  , m = (E = i == null ? void 0 : i.data) == null ? void 0 : E.media_kit_document
                  , P = (l = i == null ? void 0 : i.data) == null ? void 0 : l.block_usage;
                _(P || {}, !1),
                c(m || {}, !1)
            } catch {
                _({}),
                c({})
            }
        }
        p()
    }
    , [e == null ? void 0 : e.beacons_username]),
    C.jsx(r.Provider, {
        value: {
            mediaKitDocument: s,
            setMediaKitDocument: c,
            isLoading: !s,
            hasCompletedSetupWizard: T
        },
        children: C.jsx(M.Provider, {
            value: {
                blockUsage: u,
                setBlockUsage: _,
                isLoading: !u
            },
            children: t
        })
    })
}
function W() {
    const t = o.useContext(M);
    if (!t)
        throw new Error("useMediaKitBlockUsageContext must be used within a MediaKitProvider");
    return t
}
function B() {
    if (!o.useContext(r))
        throw new Error("useMediaKitContext must be used within a MediaKitProvider");
    return o.useContext(r)
}
function H() {
    return o.useContext(r)
}
export {M as B, y as M, r as a, H as b, n as c, v as d, h as e, W as f, b as g, B as u};
//# debugId=7bd0706c-fd0f-5e21-a723-324050123f7c
//# sourceMappingURL=index-5788a904.js.map
