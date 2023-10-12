!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "293c79fd-c36f-545b-a467-392751ff16ed")
    } catch (e) {}
}();
import {r as s} from "./index-4d92c338.js";
function d(t, n) {
    const e = s.useRef(null);
    return s.useEffect(()=>{
        const c = t.includes("/status/")
          , o = t.split("/")
          , i = o[o.length - 1]
          , r = document.createElement("script");
        r.async = 1,
        r.src = "https://platform.twitter.com/widgets.js",
        r.onload = ()=>{
            try {
                if (c) {
                    if (!e.current)
                        return;
                    window.twttr.widgets.createTweet(i, e.current, {
                        align: "center",
                        width: n
                    })
                } else {
                    if (!e.current)
                        return;
                    window.twttr.widgets.createTimeline({
                        sourceType: "url",
                        url: t
                    }, e.current, {
                        height: 450,
                        chrome: "nofooter, noborders, noheader"
                    })
                }
            } catch (u) {
                console.error(u)
            }
        }
        ,
        document.body.appendChild(r)
    }
    , [t, n]),
    {
        ref: e
    }
}
export {d as u};
//# debugId=293c79fd-c36f-545b-a467-392751ff16ed
//# sourceMappingURL=useTwitterEmbedRef-de024405.js.map
