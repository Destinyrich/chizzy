!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "204a3f59-8552-53ca-b0bf-6bd418f76d43")
    } catch (e) {}
}();
import {r as l} from "./index-4d92c338.js";
var O = {
    cm: !0,
    mm: !0,
    in: !0,
    px: !0,
    pt: !0,
    pc: !0,
    em: !0,
    ex: !0,
    ch: !0,
    rem: !0,
    vw: !0,
    vh: !0,
    vmin: !0,
    vmax: !0,
    "%": !0
};
function w(e) {
    if (typeof e == "number")
        return {
            value: e,
            unit: "px"
        };
    var r, n = (e.match(/^[0-9.]*/) || "").toString();
    n.includes(".") ? r = parseFloat(n) : r = parseInt(n, 10);
    var t = (e.match(/[^0-9]*$/) || "").toString();
    return O[t] ? {
        value: r,
        unit: t
    } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(r, "px.")),
    {
        value: r,
        unit: "px"
    })
}
function s(e) {
    var r = w(e);
    return "".concat(r.value).concat(r.unit)
}
var x = function(e, r, n) {
    var t = "react-spinners-".concat(e, "-").concat(n);
    if (typeof window > "u" || !window.document)
        return t;
    var a = document.createElement("style");
    document.head.appendChild(a);
    var i = a.sheet
      , o = `
    @keyframes `.concat(t, ` {
      `).concat(r, `
    }
  `);
    return i && i.insertRule(o, 0),
    t
}
  , c = globalThis && globalThis.__assign || function() {
    return c = Object.assign || function(e) {
        for (var r, n = 1, t = arguments.length; n < t; n++) {
            r = arguments[n];
            for (var a in r)
                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
        }
        return e
    }
    ,
    c.apply(this, arguments)
}
  , E = globalThis && globalThis.__rest || function(e, r) {
    var n = {};
    for (var t in e)
        Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
            r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (n[t[a]] = e[t[a]]);
    return n
}
  , _ = x("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function S(e) {
    var r = e.loading
      , n = r === void 0 ? !0 : r
      , t = e.color
      , a = t === void 0 ? "#000000" : t
      , i = e.speedMultiplier
      , o = i === void 0 ? 1 : i
      , p = e.cssOverride
      , f = p === void 0 ? {} : p
      , d = e.size
      , v = d === void 0 ? 15 : d
      , m = e.margin
      , g = m === void 0 ? 2 : m
      , y = E(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"])
      , h = c({
        display: "inherit"
    }, f)
      , u = function(b) {
        return {
            backgroundColor: a,
            width: s(v),
            height: s(v),
            margin: s(g),
            borderRadius: "100%",
            display: "inline-block",
            animation: "".concat(_, " ").concat(.75 / o, "s ").concat(b * .12 / o, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
            animationFillMode: "both"
        }
    };
    return n ? l.createElement("span", c({
        style: h
    }, y), l.createElement("span", {
        style: u(1)
    }), l.createElement("span", {
        style: u(2)
    }), l.createElement("span", {
        style: u(3)
    })) : null
}
export {S as P};
//# debugId=204a3f59-8552-53ca-b0bf-6bd418f76d43
//# sourceMappingURL=PulseLoader-bda91c68.js.map

