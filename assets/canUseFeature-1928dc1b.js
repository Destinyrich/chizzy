!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "452b0b55-9be0-5bff-b9df-716a5ff6df3f")
    } catch (e) {}
}();
import {H as o} from "./index-4d92c338.js";
import {E as P} from "./SUBSCRIPTION_PLANS-ef499273.js";
const {EARLY_ENTREPRENEUR: a, ENTREPRENEUR: _, ENTREPRENEUR_ANNUAL: I, ENTERPRISE: N, ENTERPRISE_FREE: e, ENTREPRENEUR_PLUS: M, VIP: R, EMAILMARKETING_PRO_MONTHLY: r, LINKINBIO_PRO_ANNUAL: L, LINKINBIO_PRO_MONTHLY: t, MEDIAKIT_PRO_MONTHLY: O, STORE_PRO_MONTHLY: s, MANAGEMENT_GROWTH_MONTHLY: m, MANAGEMENT_AGENCY_MONTHLY: G, MANAGEMENT_PREMIER_MONTHLY: c, MANAGEMENT_ENTERPRISE_MONTHLY: u, MANAGEMENT_EARLYENTERPRISE_MONTHLY: l} = P
  , D = {
    header: 50,
    text: 50,
    videos: 50,
    links: 50,
    requests: 50,
    requestfeed: 50,
    support: 1,
    email: 50,
    marketplace: 50,
    store: 50,
    music: 50,
    spacer: 50,
    friends: 50,
    social: 50,
    shoppablecontent: 50,
    nft: 50,
    community: 1,
    images: 50,
    integrations: 50,
    booking: 50,
    [o.FOLLOWERS]: 10,
    [o.MEDIA_KIT_IN_LIB]: 10
}
  , C = {
    header: 50,
    text: 50,
    videos: 50,
    links: 50,
    requests: 50,
    requestfeed: 50,
    support: 1,
    email: 50,
    marketplace: 50,
    store: 50,
    music: 50,
    spacer: 50,
    friends: 50,
    social: 50,
    shoppablecontent: 50,
    nft: 50,
    community: 1,
    images: 50,
    integrations: 50,
    booking: 50,
    [o.FOLLOWERS]: 50,
    [o.MEDIA_KIT_IN_LIB]: 50
}
  , E = {
    AI_IMAGE_GENERATION: "aiImageGeneration",
    CUSTOM_DOMAIN: "customDomain",
    MARKETING_FEATURES: "marketingFeatures",
    IS_PAID: "isPaid",
    IS_DIRECTLY_PAID: "isDirectlyPaid",
    YOUTUBE_AUTOPILOT: "youtubeAutopilot",
    ADD_MANAGER: "addManager",
    THIRD_PARTY_EMAIL_SYNC: "thirdPartyEmailSync",
    MULTIPLE_PAGES: "multiplePages",
    BRANDING: "branding",
    BLOCK_QUOTAS: "blockQuotas",
    DELETE_ACCOUNT: "deleteAccount",
    LIVE_CHAT: "liveChat",
    DAILY_MEDIA_KIT_STAT_UPDATES: "dailyStatUpdates",
    ANNUAL_PLAN_BANNER: "annualPlanBanner",
    CIRCLE_COMMUNITY: "circleCommunity",
    AUDIENCE_MANAGER_IMPORT: "audienceManagerImport",
    MANAGED_USERS_LIMIT: "managedUsersLimit",
    MANAGEMENT_REPORTS_LIMIT: "managementReportsLimit",
    MANAGEMENT_TEAMMATES_LIMIT: "managementTeammatesLimit",
    TARGET_INDIVIDUAL_EMAILS: "targetIndividualEmails",
    CUSTOM_STORE_SLUG: "customStoreSlug",
    MULTIPLE_GOOGLE_CALENDARS: "multipleGoogleCalendars",
    EMAIL_MARKETING_PRO: "emailMarketingPro",
    ALL_LIB_FONTS: "allLibFonts"
}
  , S = {
    [E.AI_IMAGE_GENERATION]: [a, _, I, N, e, M, R, r, L, t, O, s],
    [E.CUSTOM_DOMAIN]: [a, _, I, M, N, e, O, L, t, s],
    [E.DELETE_ACCOUNT]: [],
    [E.MORE_PAGES]: [a, _, I, M, N, e, L, t],
    [E.MARKETING_FEATURES]: [a, _, I, M, N, e, L, t, R],
    [E.IS_PAID]: [_, I, M, N, e, L, t, R],
    [E.YOUTUBE_AUTOPILOT]: [_, I, M, N, e, L, t, R],
    [E.THIRD_PARTY_EMAIL_SYNC]: [_, I, M, N, e, L, t, R],
    [E.BRANDING]: [a, _, I, M, N, e, L, t, s],
    [E.LIVE_CHAT]: [M],
    [E.IS_DIRECTLY_PAID]: [_, I, M, L, t, O],
    [E.DAILY_MEDIA_KIT_STAT_UPDATES]: [a, _, I, M, O],
    [E.ANNUAL_PLAN_BANNER]: [_, t],
    [E.CIRCLE_COMMUNITY]: [a],
    [E.MULTIPLE_PAGES]: [_, I, M, N, e, L, t, R],
    [E.BLOCK_QUOTAS]: [_, I, M, N, e, L, t, R],
    [E.AUDIENCE_MANAGER_IMPORT]: [r],
    [E.TARGET_INDIVIDUAL_EMAILS]: [r],
    [E.CUSTOM_STORE_SLUG]: [a, _, I, N, e, M, R, s],
    [E.MULTIPLE_GOOGLE_CALENDARS]: [a, _, I, N, e, M, R, s],
    [E.EMAIL_MARKETING_PRO]: [r],
    [E.ALL_LIB_FONTS]: [a, _, I, M, N, e, L, t, R]
}
  , F = 100
  , U = {
    [m]: {
        [E.MANAGED_USERS_LIMIT]: 30,
        [E.MANAGEMENT_REPORTS_LIMIT]: 5,
        [E.MANAGEMENT_TEAMMATES_LIMIT]: 5
    },
    [G]: {
        [E.MANAGED_USERS_LIMIT]: 75,
        [E.MANAGEMENT_REPORTS_LIMIT]: 10,
        [E.MANAGEMENT_TEAMMATES_LIMIT]: 10
    },
    [c]: {
        [E.MANAGED_USERS_LIMIT]: 200,
        [E.MANAGEMENT_REPORTS_LIMIT]: 50,
        [E.MANAGEMENT_TEAMMATES_LIMIT]: 25
    },
    [u]: {
        [E.MANAGED_USERS_LIMIT]: 5e3,
        [E.MANAGEMENT_REPORTS_LIMIT]: 1e3,
        [E.MANAGEMENT_TEAMMATES_LIMIT]: 50
    },
    [l]: {
        [E.MANAGED_USERS_LIMIT]: 5e3,
        [E.MANAGEMENT_REPORTS_LIMIT]: 1e3,
        [E.MANAGEMENT_TEAMMATES_LIMIT]: 50
    }
};
function k(T, i) {
    const A = i || [];
    return T === E.DELETE_ACCOUNT ? !A.length : T === E.MULTIPLE_PAGES ? Y(A) : T === E.BLOCK_QUOTAS ? p(A) : T === E.MANAGED_USERS_LIMIT ? d(A) : T === E.MANAGEMENT_TEAMMATES_LIMIT ? g(A) : T === E.MANAGEMENT_REPORTS_LIMIT ? B(A) : T === E.TARGET_INDIVIDUAL_EMAILS ? f(A) : !(A != null && A.length) || !S[T] ? !1 : S[T].some(n=>i.includes(n))
}
function d(T) {
    const i = T.map(A=>{
        var n;
        return ((n = U[A]) == null ? void 0 : n[E.MANAGED_USERS_LIMIT]) || 10
    }
    );
    return Math.max(...i)
}
function g(T) {
    const i = T.map(A=>{
        var n;
        return ((n = U[A]) == null ? void 0 : n[E.MANAGEMENT_TEAMMATES_LIMIT]) || 0
    }
    );
    return Math.max(...i)
}
function B(T) {
    const i = T.map(A=>{
        var n;
        return ((n = U[A]) == null ? void 0 : n[E.MANAGEMENT_REPORTS_LIMIT]) || 1
    }
    );
    return Math.max(...i)
}
function Y(T) {
    return S[E.MULTIPLE_PAGES].some(A=>T.includes(A)) ? 5 : 2
}
function p(T) {
    return S[E.BLOCK_QUOTAS].some(A=>T.includes(A)) ? C : D
}
function f(T) {
    return S[E.TARGET_INDIVIDUAL_EMAILS].some(A=>T.includes(A)) ? 200 : 10
}
export {E as F, U as M, F as T, k as c};
//# debugId=452b0b55-9be0-5bff-b9df-716a5ff6df3f
//# sourceMappingURL=canUseFeature-1928dc1b.js.map
