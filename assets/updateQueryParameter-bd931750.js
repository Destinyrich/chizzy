!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "d76be88f-2c8a-5a2d-ac9e-4f0af9b0362c")
    } catch (e) {}
}();
function f(e, s, t) {
    const n = e.indexOf("#")
      , a = n === -1 ? "" : e.substr(n);
    e = n === -1 ? e : e.substr(0, n);
    const c = new RegExp(`([?&])${s}=.*?(&|$)`,"i")
      , $ = e.indexOf("?") !== -1 ? "&" : "?";
    return t === null ? (e = e.replace(new RegExp(`([?&]?)${s}=[^&]*`,"i"), ""),
    e.slice(-1) === "?" && (e = e.slice(0, -1)),
    e.indexOf("?") === -1 && (e = e.replace(/&/, "?"))) : e.match(c) ? e = e.replace(c, `$1 ${s}=${t}$2`) : e = `${e + $ + s}=${t}`,
    e + a
}
export {f as u};
//# debugId=d76be88f-2c8a-5a2d-ac9e-4f0af9b0362c
//# sourceMappingURL=updateQueryParameter-bd931750.js.map
