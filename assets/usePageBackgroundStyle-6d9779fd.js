!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "018c0335-0800-5f64-807b-cd3ae4fc7ce2")
    } catch (e) {}
}();
import {r as b, ce as e} from "./index-4d92c338.js";
function $({allowVerticalScroll: g, isComponent: c, isMobile: d}) {
    return b.useCallback(o=>{
        let a;
        c ? a = {
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            overflowY: g ? "auto" : "hidden",
            overflowX: "hidden",
            backgroundAttachment: "scroll",
            backgroundPosition: "center",
            maxHeight: 812
        } : d ? a = {
            content: "",
            display: "block",
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: -10,
            backgroundPosition: "center",
            WebkitBackgroundSize: "cover",
            MozBackgroundSize: "cover",
            OBackgroundSize: "cover",
            backgroundSize: "cover"
        } : a = {
            backgroundPosition: "50% 15%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
            overflow: "hidden auto",
            maxHeight: "100%"
        };
        const t = "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
        switch (o.background.type) {
        case e.SOLID:
            {
                const r = `linear-gradient(${o.background.background_color1}, ${o.background.background_color1})`
                  , n = `${t}, ${r}`;
                a = {
                    ...a,
                    backgroundImage: r,
                    desktopBackground: n
                };
                break
            }
        case e.GRADIENT_DOWN:
            {
                const r = `linear-gradient(${o.background.background_color1}, ${o.background.background_color2})`
                  , n = `${t}, ${r}`;
                a = {
                    ...a,
                    backgroundImage: r,
                    desktopBackground: n
                };
                break
            }
        case e.GRADIENT_UP:
            {
                const r = `linear-gradient(${o.background.background_color2}, ${o.background.background_color1})`
                  , n = `${t}, ${r}`;
                a = {
                    ...a,
                    backgroundImage: r,
                    desktopBackground: n
                };
                break
            }
        case e.DIAGONAL:
            {
                const r = `linear-gradient(to bottom right, ${o.background.background_color1}, ${o.background.background_color2})`
                  , n = `${t}, ${r}`;
                a = {
                    ...a,
                    backgroundImage: r,
                    desktopBackground: n
                };
                break
            }
        case e.RADIAL:
            {
                const r = `radial-gradient(${o.background.background_color1}, ${o.background.background_color2})`
                  , n = `${t}, ${r}`;
                a = {
                    ...a,
                    backgroundImage: r,
                    desktopBackground: n
                };
                break
            }
        case e.IMAGE:
            {
                let r = o.background.image;
                r.includes("unsplash") ? d || c ? r += "&q=80&fm=jpg&crop=entropy&fit=max&h=900" : r += "&q=80&fm=jpg&crop=entropy&fit=max&h=1080" : (d || c) && o.background.mobile_image && (r = o.background.mobile_image);
                let n = ""
                  , i = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),";
                o.background.filter === "dark" ? (n = "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.88)),",
                i = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),") : o.background.filter === "light" && (n = "linear-gradient(rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.88)),");
                const k = `${i} url("${r}")`;
                a = {
                    ...a,
                    backgroundImage: `${n} url("${r}")`,
                    desktopBackground: k
                };
                break
            }
        case e.VIDEO:
            break;
        default:
            return {
                backgroundColor: "#1c1c1c"
            }
        }
        return c || !d ? [a, {}] : [{}, a]
    }
    , [g, c, d])
}
export {$ as u};
//# debugId=018c0335-0800-5f64-807b-cd3ae4fc7ce2
//# sourceMappingURL=usePageBackgroundStyle-6d9779fd.js.map
