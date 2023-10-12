!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "3a91bcd3-2f74-597b-8881-eb7f274fe020")
    } catch (e) {}
}();
function c(t, i={}) {
    if (!t)
        return;
    const e = document.createElement("a");
    e.setAttribute("href", t),
    Object.entries(i).forEach(([n,o])=>e.setAttribute(n, o)),
    e.style.visibility = "hidden",
    e.rel = "nofollow noopener",
    document.body.appendChild(e),
    e.click(),
    document.body.removeChild(e)
}
export {c as s};
//# debugId=3a91bcd3-2f74-597b-8881-eb7f274fe020
//# sourceMappingURL=syntheticLinkClick-01aa71fa.js.map
