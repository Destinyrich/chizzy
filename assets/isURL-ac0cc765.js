!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "16077450-524c-5372-882b-9cfd6c2058c1")
    } catch (e) {}
}();
import {bh as U, bG as D, bH as C, bI as F, bJ as H} from "./index-4d92c338.js";
var p = {
    exports: {}
};
(function(d, o) {
    Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.default = R;
    var b = _(D)
      , m = _(C)
      , h = _(F)
      , w = _(H);
    function _(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function x(e, t) {
        return I(e) || E(e, t) || A(e, t) || q()
    }
    function q() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function A(e, t) {
        if (e) {
            if (typeof e == "string")
                return v(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
                return Array.from(e);
            if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return v(e, t)
        }
    }
    function v(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var r = 0, l = new Array(t); r < t; r++)
            l[r] = e[r];
        return l
    }
    function E(e, t) {
        if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
            var r = []
              , l = !0
              , i = !1
              , s = void 0;
            try {
                for (var f = e[Symbol.iterator](), n; !(l = (n = f.next()).done) && (r.push(n.value),
                !(t && r.length === t)); l = !0)
                    ;
            } catch (a) {
                i = !0,
                s = a
            } finally {
                try {
                    !l && f.return != null && f.return()
                } finally {
                    if (i)
                        throw s
                }
            }
            return r
        }
    }
    function I(e) {
        if (Array.isArray(e))
            return e
    }
    var S = {
        protocols: ["http", "https", "ftp"],
        require_tld: !0,
        require_protocol: !1,
        require_host: !0,
        require_port: !1,
        require_valid_protocol: !0,
        allow_underscores: !1,
        allow_trailing_dot: !1,
        allow_protocol_relative_urls: !1,
        allow_fragments: !0,
        allow_query_components: !0,
        validate_length: !0
    }
      , j = /^\[([^\]]+)\](?::([0-9]+))?$/;
    function O(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    }
    function y(e, t) {
        for (var r = 0; r < t.length; r++) {
            var l = t[r];
            if (e === l || O(l) && l.test(e))
                return !0
        }
        return !1
    }
    function R(e, t) {
        if ((0,
        b.default)(e),
        !e || /[\s<>]/.test(e) || e.indexOf("mailto:") === 0 || (t = (0,
        w.default)(t, S),
        t.validate_length && e.length >= 2083) || !t.allow_fragments && e.includes("#") || !t.allow_query_components && (e.includes("?") || e.includes("&")))
            return !1;
        var r, l, i, s, f, n, a, u;
        if (a = e.split("#"),
        e = a.shift(),
        a = e.split("?"),
        e = a.shift(),
        a = e.split("://"),
        a.length > 1) {
            if (r = a.shift().toLowerCase(),
            t.require_valid_protocol && t.protocols.indexOf(r) === -1)
                return !1
        } else {
            if (t.require_protocol)
                return !1;
            if (e.slice(0, 2) === "//") {
                if (!t.allow_protocol_relative_urls)
                    return !1;
                a[0] = e.slice(2)
            }
        }
        if (e = a.join("://"),
        e === "")
            return !1;
        if (a = e.split("/"),
        e = a.shift(),
        e === "" && !t.require_host)
            return !0;
        if (a = e.split("@"),
        a.length > 1) {
            if (t.disallow_auth || a[0] === "" || (l = a.shift(),
            l.indexOf(":") >= 0 && l.split(":").length > 2))
                return !1;
            var L = l.split(":")
              , g = x(L, 2)
              , k = g[0]
              , T = g[1];
            if (k === "" && T === "")
                return !1
        }
        s = a.join("@"),
        n = null,
        u = null;
        var c = s.match(j);
        if (c ? (i = "",
        u = c[1],
        n = c[2] || null) : (a = s.split(":"),
        i = a.shift(),
        a.length && (n = a.join(":"))),
        n !== null && n.length > 0) {
            if (f = parseInt(n, 10),
            !/^[0-9]+$/.test(n) || f <= 0 || f > 65535)
                return !1
        } else if (t.require_port)
            return !1;
        return t.host_whitelist ? y(i, t.host_whitelist) : i === "" && !t.require_host ? !0 : !(!(0,
        h.default)(i) && !(0,
        m.default)(i, t) && (!u || !(0,
        h.default)(u, 6)) || (i = i || u,
        t.host_blacklist && y(i, t.host_blacklist)))
    }
    d.exports = o.default,
    d.exports.default = o.default
}
)(p, p.exports);
var M = p.exports;
const $ = U(M);
export {M as a, $ as i};
//# debugId=16077450-524c-5372-882b-9cfd6c2058c1
//# sourceMappingURL=isURL-ac0cc765.js.map
