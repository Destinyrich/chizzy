!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "bb7d2537-38ba-583d-9f4b-16189f702a90")
    } catch (e) {}
}();
import "./index-4d92c338.js";
import {a as t, c as A, i as n} from "./typeUtils-3c270e0f.js";
var a = (r=>(r.BRAND_LOGOS = "brand_logos",
r.BRAND_PARTNERSHIPS = "brand_partnerships",
r.COLLABORATIONS = "collaborations",
r.CONTACT_INFO = "contact_info",
r.FOLLOWERS = "followers",
r.FOLLOWER_GROWTH_RATE = "follower_growth_rate",
r.HEADER = "header",
r.RATES = "rates",
r.SOCIAL_ANALYTICS_INSTAGRAM = "social_analytics_instagram",
r.SOCIAL_ANALYTICS_TIKTOK = "social_analytics_tiktok",
r.SOCIAL_ANALYTICS_YOUTUBE = "social_analytics_youtube",
r.SOCIAL_ANALYTICS_TWITTER = "social_analytics_twitter",
r.SOCIAL_ANALYTICS_TWITCH = "social_analytics_twitch",
r.SOCIAL_ANALYTICS_FACEBOOK = "social_analytics_facebook",
r.TEXT = "text",
r.LINKS = "links",
r))(a || {});
const s = Object.values(a)
  , O = r=>n(r) ? s.includes(r) : !1
  , I = r=>!t(r) || !A(r, "block_type") ? !1 : O(r.block_type)
  , S = r=>_=>I(_) ? _.block_type === r : !1
  , C = S("header");
export {a as E, I as a, C as i};
//# debugId=bb7d2537-38ba-583d-9f4b-16189f702a90
//# sourceMappingURL=IMediaKitBlocks-04d49109.js.map


