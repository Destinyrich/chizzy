!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "9d50ff33-9665-5ea7-bb63-4f89164661f3")
    } catch (e) {}
}();
import {r as i} from "./index-4d92c338.js";
const a = (r,e,n)=>{
    const o = r.reduce((f,c)=>{
        const h = c.font.replace(/ +/g, "+")
          , l = (c.weights || []).join(",");
        return [...f, h + (l && `:${l}`)]
    }
    , []).join("|")
      , t = document.createElement("link");
    return t.rel = "stylesheet",
    t.href = `https://fonts.googleapis.com/css?family=${o}`,
    e && Array.isArray(e) && e.length > 0 && (t.href += `&subset=${e.join(",")}`),
    n && (t.href += `&display=${n}`),
    t
}
;
function u({fonts: r, subsets: e, display: n=null}) {
    const [o,t] = i.useState(a(r, e, n));
    return i.useEffect(()=>(document.head.appendChild(o),
    ()=>document.head.removeChild(o)), [o]),
    i.useEffect(()=>{
        t(a(r, e, n))
    }
    , [r, e, n]),
    null
}
export {u as G};
//# debugId=9d50ff33-9665-5ea7-bb63-4f89164661f3
//# sourceMappingURL=index-15bf1856.js.map
