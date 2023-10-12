!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "b6bbef8d-2c36-593d-9399-9a95455fab77")
    } catch (e) {}
}();
import {r as e} from "./index-4d92c338.js";
function u(t=450) {
    const [i,s] = e.useState(window.innerWidth)
      , [r,o] = e.useState(window.innerWidth < t);
    return e.useEffect(()=>{
        const n = ()=>s(window.innerWidth);
        return window.addEventListener("resize", n),
        ()=>{
            window.removeEventListener("resize", n)
        }
    }
    , []),
    e.useEffect(()=>{
        o(i < t)
    }
    , [i, t]),
    r
}
export {u};
//# debugId=b6bbef8d-2c36-593d-9399-9a95455fab77
//# sourceMappingURL=useIsMobile-131a099e.js.map
