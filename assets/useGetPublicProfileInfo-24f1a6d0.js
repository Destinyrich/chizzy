!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "041fc50d-ee1d-563b-acb5-91de9a31abbf")
    } catch (e) {}
}();
import {aV as p, r as c, F as m} from "./index-4d92c338.js";
import {g as u} from "./getDocumentProxy-977bed7d.js";
async function w({initialUsername: s, isCreatorPage: a, history: i, getPublicProfileInfo: t}) {
    if (!s && !a)
        return null;
    let e = s;
    if (a)
        e = window.location.hostname.split(".")[0];
    else {
        const o = e.split("@")[0];
        let r = e.split("@")[1];
        r ? (r = r.toLowerCase(),
        e = `${o.toLowerCase()}@${r}`) : e = e.toLowerCase()
    }
    let n, f;
    const l = await p();
    if (l)
        n = l,
        f = !0;
    else {
        let o = await t(e);
        f = !!o,
        o && o.beacons_username && o.beacons_username !== e && (i.push(o.beacons_username),
        e = o.beacons_username,
        o = await t(e)),
        n = o
    }
    return {
        profileInfoDocData: n,
        profileInfoDocExists: f,
        usernameString: e
    }
}
function g() {
    const s = c.useContext(m)
      , a = c.useCallback(async t=>{
        const e = `profile_info/${t}`;
        return u(e)
    }
    , [s])
      , i = c.useCallback(async(t,e)=>{
        const n = `profile_info/${t}/pages/${e}`;
        return u(n)
    }
    , [s]);
    return {
        getPublicProfileInfo: a,
        getPublicProfileInfoPage: i
    }
}
export {w as g, g as u};
//# debugId=041fc50d-ee1d-563b-acb5-91de9a31abbf
//# sourceMappingURL=useGetPublicProfileInfo-24f1a6d0.js.map
\