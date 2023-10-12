!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "df1356c9-7561-5e0b-a8ad-6499bdfa5e89")
    } catch (e) {}
}();
const _ = {
    BEACONS_USERNAME: "beaconsUsername",
    IS_BEACONS_TEAM: "isBeaconsTeam",
    MK_GATED_VISITOR_EMAILS: "_bVisitorEmails",
    MK_GATED_VISITOR_BRAND_DEAL: "_bVisitorBrandDeal",
    MK_GATED_VISITOR_APPROVED_ACCESS: "_bVisitorApprovedAccess",
    SIGNUP_SELF_REFERRAL: "_bSignupSelfRef",
    MK_VIEWED: "_bMediaKitViewed",
    LIB_VIEWED: "_bLinkInBioViewed",
    MK_GATED_HAS_ENTERED_PASSWORD: "_bVisitorHasEnteredPassword",
    SHOP_PAGE_PREVIEW: "_bShopPageIsViewedAsPreview",
    MANAGER_CONTACT_EMAIL: "_bManagerContactEmail",
    MANAGER_PORTAL_DEFAULT_ORGANIZATION_UID: "_bManagerDefaultOrganizationUid",
    REDIRECTED_FROM_LOGOUT: "_bRedirectedFromLogout"
}
  , E = _;
export {E as C};
//# debugId=df1356c9-7561-5e0b-a8ad-6499bdfa5e89
//# sourceMappingURL=COOKIE_NAMES-4ca3a26b.js.map
