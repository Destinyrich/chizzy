!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "38d8018f-a7fc-5104-aa64-da0b67a956b5")
    } catch (e) {}
}();
function a(e) {
    return e ? e.charAt(0).toUpperCase() + e.slice(1) : ""
}
export {a as c};
//# debugId=38d8018f-a7fc-5104-aa64-da0b67a956b5
//# sourceMappingURL=capitalize-51430b4a.js.map


