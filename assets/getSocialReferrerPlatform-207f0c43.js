!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "e2aebffd-346b-5efc-88e2-1a574c1b05b9")
    } catch (e) {}
}();
function r() {
    const e = navigator.userAgent || "";
    return !!e && (e.toLowerCase().includes("musical_ly") || e.toLowerCase().includes("bytelocale") || e.toLowerCase().includes("bytefulllocale") || e.toLowerCase().includes("bytedance") || e.toLowerCase().includes("trill") || e.toLowerCase().includes("tiktok"))
}
function o() {
    const e = document.referrer || ""
      , t = navigator.userAgent || "";
    return t.toLowerCase().includes("instagram") ? "instagram" : r() ? "tiktok" : t.toLowerCase().includes("fb") ? "facebook" : e.includes("instagram.com") ? "instagram" : e.includes("tiktok.com") ? "tiktok" : e.includes("t.co") ? "twitter" : e.includes("facebook.com") ? "facebook" : e.includes("youtube.com") ? "youtube" : "direct"
}
export {r as d, o as g};
//# debugId=e2aebffd-346b-5efc-88e2-1a574c1b05b9
//# sourceMappingURL=getSocialReferrerPlatform-207f0c43.js.map
