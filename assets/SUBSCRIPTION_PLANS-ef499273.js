!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "382b8252-e632-5cc0-bbf8-26cb39994f8a")
    } catch (e) {}
}();
import {C as n} from "./CDN_URLS-53881ca1.js";
var t = (e=>(e.LINK_IN_BIO = "link-in-bio",
e.BUILD_EMAIL_LIST = "build-email-list",
e.CREATE_SELL_PRODUCTS = "create-sell-products",
e.GET_BRAND_DEALS = "get-brand-deals",
e))(t || {});
const r = "AI Text and Image Generation";
var o = (e=>(e.VIP = "vip",
e.EARLY_ENTREPRENEUR = "early_entrepreneur",
e.EMAILMARKETING_PRO_ANNUAL = "emailmarketing_pro_annual",
e.EMAILMARKETING_PRO_MONTHLY = "emailmarketing_pro_monthly",
e.ENTREPRENEUR = "entrepreneur",
e.ENTERPRISE = "enterprise",
e.ENTERPRISE_FREE = "enterprise_free",
e.ENTREPRENEUR_PLUS = "entrepreneur_plus",
e.ENTREPRENEUR_ANNUAL = "entrepreneur_annual",
e.LINKINBIO_PRO_ANNUAL = "linkinbio_pro_annual",
e.LINKINBIO_PRO_MONTHLY = "linkinbio_pro_monthly",
e.MANAGEMENT_GROWTH_MONTHLY = "management_growth_monthly",
e.MANAGEMENT_AGENCY_MONTHLY = "management_agency_monthly",
e.MANAGEMENT_PREMIER_MONTHLY = "management_premier_monthly",
e.MANAGEMENT_ENTERPRISE_MONTHLY = "management_enterprise_monthly",
e.MANAGEMENT_EARLYENTERPRISE_MONTHLY = "management_earlyenterprise_monthly",
e.MEDIAKIT_PRO_MONTHLY = "mediakit_pro_monthly",
e.STORE_PRO_MONTHLY = "store_pro_monthly",
e))(o || {})
  , a = (e=>(e.EMAILMARKETING = "emailmarketing",
e.LINKINBIO = "linkinbio",
e.MEDIAKIT = "mediakit",
e.STORE = "store",
e))(a || {});
const m = {
    linkinbio_pro_monthly: "https://assets-global.website-files.com/61910a75130a2bf663350b38/63c9c8c3c7dcb51c639b73f8_linkinbio-min.jpg",
    mediakit_pro_monthly: "https://assets-global.website-files.com/61910a75130a2bf663350b38/63cb13c3d805d577fcd6e5c0_splash_-_MK__2_-min.png",
    emailmarketing_pro_monthly: "https://assets-global.website-files.com/61734ecee390bd3fe4fbfbb4/64ca867ae38438560dbdccbe_Email-p-800.png",
    store_pro_monthly: "https://assets-global.
    -files.com/61734ecee390bd3fe4fbfbb4/649b32bf61488aa49f413b99_background-p-2600.png"
}
  , l = {
    emailmarketing_pro_monthly: {
        icon: `${n}/checkout-emailmarketing.webp`,
        title: "Email Marketing Pro",
        price: 20
    },
    linkinbio_pro_monthly: {
        icon: `${n}/checkout-linkinbio.webp`,
        title: "Link in Bio Pro",
        price: 10
    },
    mediakit_pro_monthly: {
        icon: `${n}/checkout-mediakit.webp`,
        title: "Media Kit Pro",
        price: 10
    },
    store_pro_monthly: {
        icon: `${n}/checkout-store.svg`,
        title: "Store Pro",
        price: 10
    }
}
  , s = {
    [t.LINK_IN_BIO]: ["linkinbio_pro_monthly", "store_pro_monthly", "emailmarketing_pro_monthly"],
    [t.CREATE_SELL_PRODUCTS]: ["store_pro_monthly", "linkinbio_pro_monthly", "emailmarketing_pro_monthly"],
    [t.BUILD_EMAIL_LIST]: ["emailmarketing_pro_monthly", "linkinbio_pro_monthly", "store_pro_monthly"],
    [t.GET_BRAND_DEALS]: ["mediakit_pro_monthly", "linkinbio_pro_monthly"]
};
function N(e, _) {
    switch (e) {
    case "emailmarketing_pro_monthly":
        return ["Create and send newsletters and automatic drip campaigns", "Build an email list from your link in bio", "Unlimited contact imports", r];
    case "store_pro_monthly":
        return ["Create and sell digital products from your link in bio", "0% sales fees (otherwise 9%)", "Remove Beacons branding from product pages and order emails", "Customize product page URLs", r];
    case "mediakit_pro_monthly":
        return ["Daily auto-updating social stats", "Custom media kit domain", "Priority support"];
    default:
        return [`Custom domain ${_ ? `(${_})` : "(first year of domain fees are free)"}`, "Remove Beacons branding", "Sell products and collect emails", "Advanced marketing features", "Integrated email marketing", r]
    }
}
const p = {
    entrepreneur: {
        title: "Entrepreneur (legacy)"
    },
    entrepreneur_annual: {
        title: "Entrepreneur Annual (legacy)"
    },
    entrepreneur_plus: {
        title: "Entrepreneur Plus (legacy)"
    },
    emailmarketing_pro_monthly: {
        title: "Email Marketing Pro (monthly)"
    },
    linkinbio_pro_annual: {
        title: "Link in Bio Pro (annual)"
    },
    linkinbio_pro_monthly: {
        title: "Link in Bio Pro (monthly)"
    },
    mediakit_pro_monthly: {
        title: "Media Kit Pro (monthly)"
    },
    store_pro_monthly: {
        title: "Store Pro (monthly)"
    },
    management_growth_monthly: {
        title: "Management Growth (monthly)"
    },
    management_agency_monthly: {
        title: "Management Agency (monthly)"
    },
    management_premier_monthly: {
        title: "Management Premier (monthly)"
    },
    management_enterprise_monthly: {
        title: "Management Enterprise (monthly)"
    },
    management_earlyenterprise_monthly: {
        title: "Management Early Enterprise (monthly)"
    }
};
export {r as A, s as B, o as E, l as S, t as a, m as b, p as c, a as d, N as g};
//# debugId=382b8252-e632-5cc0-bbf8-26cb39994f8a
//# sourceMappingURL=SUBSCRIPTION_PLANS-ef499273.js.map
