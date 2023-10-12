!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "9ad6b4a9-76f6-5c4a-8749-7878d8153d94")
    } catch (e) {}
}();
var t = (n=>(n.AI_BRAND_OUTREACH = "ai-brand-outreach",
n.AUDIENCE_MANAGER = "audience-manager",
n.EARLY_PAY = "early-pay",
n.EMAIL_MARKETING = "email-marketing",
n.INCOME_DASHBOARD = "income-dashboard",
n.INVOICING = "invoicing",
n.LAB = "lab",
n.LINK_IN_BIO = "link-in-bio",
n.LINK_SHORTENER = "link-shortener",
n.MEDIA_KIT = "media-kit",
n.POST_ACTIVITY = "post-activity",
n.PRICING_CALCULATOR = "pricing-calculator",
n.W_9_GENERATOR = "w-9-generator",
n.STORE = "store",
n.QR_CODE_GENERATOR = "qr-code-generator",
n))(t || {});
const i = t
  , c = "home"
  , g = "home"
  , A = {
    ADVANCED: "siteSettings",
    AI: "insights",
    CUSTOMIZE: "design-appearance",
    CHOOSE_THEME: "choose-theme",
    COMMUNITY_INFO: "audience-community",
    CONNECTIONS: "connections",
    EMAIL_LIST: "audience-emailList",
    HOME: "home",
    MANAGERS: "managers",
    PAGE_MANAGEMENT: "page-management",
    PAGE_ANALYTICS: "audience-analytics",
    QR_CODE: "qrCode",
    REFERRALS: "referrals"
}
  , r = 4;
function E() {
    var a;
    const n = (a = window == null ? void 0 : window.navigator) == null ? void 0 : a.language;
    if (!n)
        return {
            language: null,
            countryCode: null
        };
    if (n.length < r)
        return {
            language: null,
            countryCode: null
        };
    const e = n.split("-").map(o=>o.toLowerCase());
    return {
        language: e[0],
        countryCode: e[e.length - 1]
    }
}
export {A, g as D, i as E, c as a, E as g};
//# debugId=9ad6b4a9-76f6-5c4a-8749-7878d8153d94
//# sourceMappingURL=getLanguageAndCountryCode-2395f4b2.js.map
