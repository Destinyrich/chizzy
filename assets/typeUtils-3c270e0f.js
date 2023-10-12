!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "7ed90e01-374f-508d-9851-aca92d120d30")
    } catch (e) {}
}();
const t = r=>r == null
  , e = r=>r != null
  , u = r=>e(r) && typeof r == "object"
  , a = r=>e(r) && typeof r == "string"
  , c = r=>e(r) && typeof r == "number"
  , f = r=>e(r) && Array.isArray(r)
  , o = (r,n)=>t(r) || t(n) || !u(r) ? !1 : n in r
  , l = r=>t(r) ? [] : Object.values(r)
  , O = r=>t(r) ? [] : Object.keys(r)
  , b = r=>t(r) ? [] : Object.entries(r);
function y(r) {
    return `Was not never ${r}`
}
function d(r, n) {
    return r.flatMap((s,i)=>i === r.length - 1 ? [s] : [s, n])
}
export {u as a, t as b, o as c, l as d, b as e, c as f, O as g, e as h, a as i, f as j, d as k, y as l};
//# debugId=7ed90e01-374f-508d-9851-aca92d120d30
//# sourceMappingURL=typeUtils-3c270e0f.js.map
