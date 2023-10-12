!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "7453ed49-8958-53cb-8516-4fa9fe62b5e8")
    } catch (e) {}
}();
import {r as f, i as m} from "./createSvgIcon-d5208ee1.js";
import {j as _} from "./index-4d92c338.js";
import {m as u} from "./moneyFormatter-e5e94e12.js";
import {S as p} from "./STORE_DEFAULT_VALUES-5276f74a.js";
var A = (e=>(e.COMPACT = "compact",
e.FULL = "full",
e.RESPONSIVE = "responsive",
e))(A || {});
const y = [{
    display: "S",
    value: "small"
}, {
    display: "M",
    value: "medium"
}, {
    display: "L",
    value: "big"
}];
var h = (e=>(e.POPPINS = "Poppins",
e.MONTSERRAT = "Montserrat",
e.INTER = "Inter",
e.PLAYFAIR_DISPLAY = "Playfair Display",
e.MERRIWEATHER = "Merriweather",
e.LIBRE_BASKERVILLE = "Libre Baskerville",
e.PERMANENT_MARKET = "Permanent Marker",
e.AUDIOWIDE = "Audiowide",
e.FREDOKA_ONE = "Fredoka One",
e.SPACE_MONO = "Space Mono",
e.GLORIA_HALLELUJAH = "Gloria Hallelujah",
e.LA_BELLE_AURORE = "La Belle Aurore",
e))(h || {});
const g = [{
    name: "Poppins",
    font_family: "Poppins, sans-serif"
}, {
    name: "Montserrat",
    font_family: "Montserrat, sans-serif"
}, {
    name: "Inter",
    font_family: "Inter, sans-serif"
}, {
    name: "Playfair Display",
    font_family: "Playfair Display, sans-serif"
}, {
    name: "Merriweather",
    font_family: "Merriweather, serif"
}, {
    name: "Libre Baskerville",
    font_family: "Libre Baskerville, sans-serif"
}, {
    name: "Permanent Marker",
    font_family: "Permanent Marker, sans-serif"
}, {
    name: "Audiowide",
    font_family: "Audiowide, sans-serif"
}, {
    name: "Fredoka One",
    font_family: "Fredoka One, sans-serif"
}, {
    name: "Space Mono",
    font_family: "Space Mono, sans-serif"
}, {
    name: "Gloria Hallelujah",
    font_family: "Gloria Hallelujah, sans-serif"
}, {
    name: "La Belle Aurore",
    font_family: "La Belle Aurore, sans-serif"
}];
var l = {}
  , d = m;
Object.defineProperty(l, "__esModule", {
    value: !0
});
var E = l.default = void 0
  , I = d(f())
  , t = _
  , R = (0,
I.default)([(0,
t.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}, "0"), (0,
t.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
}, "1")], "Schedule");
E = l.default = R;
function T(e) {
    var n;
    const {files: a, title: i} = e;
    return !!((n = a == null ? void 0 : a.filter(s=>!!(s != null && s.item_filename))) != null && n.length) && !!i
}
function O(e) {
    const {price: a, preview_call_to_action: i} = e;
    return i || (a ? `Buy ${u(a, "usd")}` : p.PRICE_FREE_CTA)
}
const o = ["", "K", "M", "G"];
function c(e) {
    const a = o.findIndex((n,s)=>e / 1e3 ** (s + 1) < 1)
      , i = e / 1e3 ** a
      , r = `${o[a]}B`;
    return `${i == null ? void 0 : i.toFixed(2)} ${r}`
}
function C(e) {
    if (!e)
        return null;
    const {slot_time_in_minutes: a} = e;
    return a
}
function B(e, a) {
    var n;
    let i;
    return a != null && a.poster_image_url ? i = a.poster_image_url : (n = a == null ? void 0 : a.checkout_images) != null && n.length && (i = a.checkout_images[0].image_url),
    {
        hasChanged: e !== i,
        updatedThumbnailUrl: i
    }
}
export {A as E, g as F, y as H, C as a, c as b, h as c, E as d, B as e, O as g, T as i};
//# debugId=7453ed49-8958-53cb-8516-4fa9fe62b5e8
//# sourceMappingURL=storeItemUtils-61772fe7.js.map

