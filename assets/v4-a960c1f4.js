
!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "7599f168-0edf-5353-8bce-5c51630dfca7")
    } catch (e) {}
}();
let c;
const p = new Uint8Array(16);
function r() {
    if (!c && (c = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
    !c))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return c(p)
}
const d = [];
for (let n = 0; n < 256; ++n)
    d.push((n + 256).toString(16).slice(1));
function y(n, t=0) {
    return (d[n[t + 0]] + d[n[t + 1]] + d[n[t + 2]] + d[n[t + 3]] + "-" + d[n[t + 4]] + d[n[t + 5]] + "-" + d[n[t + 6]] + d[n[t + 7]] + "-" + d[n[t + 8]] + d[n[t + 9]] + "-" + d[n[t + 10]] + d[n[t + 11]] + d[n[t + 12]] + d[n[t + 13]] + d[n[t + 14]] + d[n[t + 15]]).toLowerCase()
}
const m = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , i = {
    randomUUID: m
};
function U(n, t, o) {
    if (i.randomUUID && !t && !n)
        return i.randomUUID();
    n = n || {};
    const e = n.random || (n.rng || r)();
    if (e[6] = e[6] & 15 | 64,
    e[8] = e[8] & 63 | 128,
    t) {
        o = o || 0;
        for (let u = 0; u < 16; ++u)
            t[o + u] = e[u];
        return t
    }
    return y(e)
}
export {U as v};
//# debugId=7599f168-0edf-5353-8bce-5c51630dfca7
//# sourceMappingURL=v4-a960c1f4.js.map
