!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "58277d14-50b2-59e1-bb39-4a4d762dbf21")
    } catch (e) {}
}();
import {R as s, j as c, e as n} from "./index-4d92c338.js";
import {A as x} from "./Avatar-b3380fc2.js";
const d = l=>{
    let t = "";
    return l.trim().split(" ").forEach(r=>{
        r && (t += r[0])
    }
    ),
    t.slice(0, 1).toUpperCase()
}
  , g = s.forwardRef(function({size: t="medium", shape: r="rounded", imageUrl: e, name: a, ...i}, o) {
    return c.jsx(x, {
        ...i,
        ref: o,
        src: e ?? void 0,
        alt: a,
        className: n({
            "w-6 h-6 text-small-bold": t === "tiny",
            "w-8 h-8 title-small": t === "small",
            "w-10 h-10 title-large": t === "medium",
            "w-12 h-12 title-large": t === "large",
            "w-16 h-16 title-xlarge": t === "xlarge",
            "w-24 h-24 title-xxlarge": t === "xxlarge",
            "!rounded-full": r === "circular"
        }, "bg-gray-300 rounded-8 text-black"),
        children: !e && !!a && d(a)
    })
})
  , f = g;
export {f as A, d as g};
//# debugId=58277d14-50b2-59e1-bb39-4a4d762dbf21
//# sourceMappingURL=Avatar-8718a395.js.map
