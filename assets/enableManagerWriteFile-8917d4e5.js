!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "5191d308-424f-5c83-8ecf-334f6a7d8b54")
    } catch (e) {}
}();
import {l as n} from "./index-4d92c338.js";
async function l(i, e, a=!1) {
    if (!i.originalAuthUser && !i.originalUid)
        return;
    const r = i.originalAuthUser ? i.originalAuthUser.uid : i.originalUid;
    await n("user_profile", {
        action: "enable_manager_write_file",
        manager_firebase_uid: r,
        authUser: i,
        file_path: e,
        use_private_bucket: a
    })
}
export {l as e};
//# debugId=5191d308-424f-5c83-8ecf-334f6a7d8b54
//# sourceMappingURL=enableManagerWriteFile-8917d4e5.js.map

