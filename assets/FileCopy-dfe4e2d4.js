!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "3f759a60-64e6-56bd-b303-4cc10282ba29")
    } catch (e) {}
}();
import {r as f, i as n} from "./createSvgIcon-d5208ee1.js";
import {j as d} from "./index-4d92c338.js";
import {a} from "./IMediaKitBlocks-04d49109.js";
import {d as c} from "./typeUtils-3c270e0f.js";
var i = {}
  , s = n;
Object.defineProperty(i, "__esModule", {
    value: !0
});
var v = i.default = void 0
  , p = s(f())
  , m = d
  , _ = (0,
p.default)((0,
m.jsx)("path", {
    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
}), "Email");
v = i.default = _;
function V(t, e) {
    const r = c(e).find(l=>a(l) ? l.block_type === t : !1);
    if (a(r))
        return r
}
function z(t, e) {
    return e ? Object.keys(e).find(o=>{
        const r = e[o];
        return a(r) ? r.block_type === t : !1
    }
    ) : null
}
var u = {}
  , y = n;
Object.defineProperty(u, "__esModule", {
    value: !0
});
var j = u.default = void 0
  , x = y(f())
  , h = d
  , k = (0,
x.default)((0,
h.jsx)("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
}), "FileCopy");
j = u.default = k;
export {j as a, V as b, v as d, z as f};
//# debugId=3f759a60-64e6-56bd-b303-4cc10282ba29
//# sourceMappingURL=FileCopy-dfe4e2d4.js.map
