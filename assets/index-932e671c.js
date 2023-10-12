!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "f63063eb-927c-585f-ab20-0db4d85724b1")
    } catch (e) {}
}();
import {t as q, j as k, a as J, g as Q, s as D, c as t, _ as v, aE as C, r as s, u as X, d as Z, aG as oo, b6 as V, e as $, f as ao, l as eo} from "./index-4d92c338.js";
import {g as lo} from "./getCountryName-07af5367.js";
const ro = q(k.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function to(o) {
    return Q("MuiChip", o)
}
const no = J("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"])
  , r = no
  , io = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"]
  , co = o=>{
    const {classes: a, disabled: l, size: e, color: n, iconColor: c, onDelete: u, clickable: d, variant: p} = o
      , b = {
        root: ["root", p, l && "disabled", `size ${t(e)}`, `color ${t(n)}`, d && "clickable", d && `clickableColor ${t(n)}`, u && "deletable", u && `deletableColor ${t(n)}`, `${p}${t(n)}`],
        label: ["label", `label ${t(e)}`],
        avatar: ["avatar", `avatar ${t(e)}`, `avatarColor ${t(n)}`],
        icon: ["icon", `icon ${t(e)}`, `iconColor ${t(c)}`],
        deleteIcon: ["deleteIcon", `deleteIcon ${t(e)}`, `deleteIconColor ${t(n)}`, `deleteIcon ${t(p)}Color ${t(n)}`]
    };
    return ao(b, to, a)
}
  , so = D("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (o,a)=>{
        const {ownerState: l} = o
          , {color: e, iconColor: n, clickable: c, onDelete: u, size: d, variant: p} = l;
        return [{
            [`& .${r.avatar}`]: a.avatar
        }, {
            [`& .${r.avatar}`]: a[`avatar ${t(d)}`]
        }, {
            [`& .${r.avatar}`]: a[`avatarColor ${t(e)}`]
        }, {
            [`& .${r.icon}`]: a.icon
        }, {
            [`& .${r.icon}`]: a[`icon ${t(d)}`]
        }, {
            [`& .${r.icon}`]: a[`iconColor ${t(n)}`]
        }, {
            [`& .${r.deleteIcon}`]: a.deleteIcon
        }, {
            [`& .${r.deleteIcon}`]: a[`deleteIcon ${t(d)}`]
        }, {
            [`& .${r.deleteIcon}`]: a[`deleteIconColor ${t(e)}`]
        }, {
            [`& .${r.deleteIcon}`]: a[`deleteIcon ${t(p)}Color ${t(e)}`]
        }, a.root, a[`size ${t(d)}`], a[`color ${t(e)}`], c && a.clickable, c && e !== "default" && a[`clickableColor ${t(e)})`], u && a.deletable, u && e !== "default" && a[`deletableColor ${t(e)}`], a[p], a[`${p}${t(e)}`]]
    }
})(({theme: o, ownerState: a})=>{
    const l = o.palette.mode === "light" ? o.palette.grey[700] : o.palette.grey[300];
    return v({
        maxWidth: "100%",
        fontFamily: o.typography.fontFamily,
        fontSize: o.typography.pxToRem(13),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        color: (o.vars || o).palette.text.primary,
        backgroundColor: (o.vars || o).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: "nowrap",
        transition: o.transitions.create(["background-color", "box-shadow"]),
        outline: 0,
        textDecoration: "none",
        border: 0,
        padding: 0,
        verticalAlign: "middle",
        boxSizing: "border-box",
        [`&.${r.disabled}`]: {
            opacity: (o.vars || o).palette.action.disabledOpacity,
            pointerEvents: "none"
        },
        [`& .${r.avatar}`]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: o.vars ? o.vars.palette.Chip.defaultAvatarColor : l,
            fontSize: o.typography.pxToRem(12)
        },
        [`& .${r.avatarColorPrimary}`]: {
            color: (o.vars || o).palette.primary.contrastText,
            backgroundColor: (o.vars || o).palette.primary.dark
        },
        [`& .${r.avatarColorSecondary}`]: {
            color: (o.vars || o).palette.secondary.contrastText,
            backgroundColor: (o.vars || o).palette.secondary.dark
        },
        [`& .${r.avatarSmall}`]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: o.typography.pxToRem(10)
        },
        [`& .${r.icon}`]: v({
            marginLeft: 5,
            marginRight: -6
        }, a.size === "small" && {
            fontSize: 18,
            marginLeft: 4,
            marginRight: -4
        }, a.iconColor === a.color && v({
            color: o.vars ? o.vars.palette.Chip.defaultIconColor : l
        }, a.color !== "default" && {
            color: "inherit"
        })),
        [`& .${r.deleteIcon}`]: v({
            WebkitTapHighlightColor: "transparent",
            color: o.vars ? `rgba(${o.vars.palette.text.primaryChannel} / 0.26)` : C(o.palette.text.primary, .26),
            fontSize: 22,
            cursor: "pointer",
            margin: "0 5px 0 -6px",
            "&:hover": {
                color: o.vars ? `rgba(${o.vars.palette.text.primaryChannel} / 0.4)` : C(o.palette.text.primary, .4)
            }
        }, a.size === "small" && {
            fontSize: 16,
            marginRight: 4,
            marginLeft: -4
        }, a.color !== "default" && {
            color: o.vars ? `rgba(${o.vars.palette[a.color].contrastTextChannel} / 0.7)` : C(o.palette[a.color].contrastText, .7),
            "&:hover, &:active": {
                color: (o.vars || o).palette[a.color].contrastText
            }
        })
    }, a.size === "small" && {
        height: 24
    }, a.color !== "default" && {
        backgroundColor: (o.vars || o).palette[a.color].main,
        color: (o.vars || o).palette[a.color].contrastText
    }, a.onDelete && {
        [`&.${r.focusVisible}`]: {
            backgroundColor: o.vars ? `rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))` : C(o.palette.action.selected, o.palette.action.selectedOpacity + o.palette.action.focusOpacity)
        }
    }, a.onDelete && a.color !== "default" && {
        [`&.${r.focusVisible}`]: {
            backgroundColor: (o.vars || o).palette[a.color].dark
        }
    })
}
, ({theme: o, ownerState: a})=>v({}, a.clickable && {
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: o.vars ? `rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))` : C(o.palette.action.selected, o.palette.action.selectedOpacity + o.palette.action.hoverOpacity)
    },
    [`&.${r.focusVisible}`]: {
        backgroundColor: o.vars ? `rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))` : C(o.palette.action.selected, o.palette.action.selectedOpacity + o.palette.action.focusOpacity)
    },
    "&:active": {
        boxShadow: (o.vars || o).shadows[1]
    }
}, a.clickable && a.color !== "default" && {
    [`&:hover, &.${r.focusVisible}`]: {
        backgroundColor: (o.vars || o).palette[a.color].dark
    }
}), ({theme: o, ownerState: a})=>v({}, a.variant === "outlined" && {
    backgroundColor: "transparent",
    border: o.vars ? `1px solid ${o.vars.palette.Chip.defaultBorder}` : `1px solid ${o.palette.mode === "light" ? o.palette.grey[400] : o.palette.grey[700]}`,
    [`&.${r.clickable}:hover`]: {
        backgroundColor: (o.vars || o).palette.action.hover
    },
    [`&.${r.focusVisible}`]: {
        backgroundColor: (o.vars || o).palette.action.focus
    },
    [`& .${r.avatar}`]: {
        marginLeft: 4
    },
    [`& .${r.avatarSmall}`]: {
        marginLeft: 2
    },
    [`& .${r.icon}`]: {
        marginLeft: 4
    },
    [`& .${r.iconSmall}`]: {
        marginLeft: 2
    },
    [`& .${r.deleteIcon}`]: {
        marginRight: 5
    },
    [`& .${r.deleteIconSmall}`]: {
        marginRight: 3
    }
}, a.variant === "outlined" && a.color !== "default" && {
    color: (o.vars || o).palette[a.color].main,
    border: `1px solid ${o.vars ? `rgba(${o.vars.palette[a.color].mainChannel} / 0.7)` : C(o.palette[a.color].main, .7)}`,
    [`&.${r.clickable}:hover`]: {
        backgroundColor: o.vars ? `rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : C(o.palette[a.color].main, o.palette.action.hoverOpacity)
    },
    [`&.${r.focusVisible}`]: {
        backgroundColor: o.vars ? `rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.focusOpacity})` : C(o.palette[a.color].main, o.palette.action.focusOpacity)
    },
    [`& .${r.deleteIcon}`]: {
        color: o.vars ? `rgba(${o.vars.palette[a.color].mainChannel} / 0.7)` : C(o.palette[a.color].main, .7),
        "&:hover, &:active": {
            color: (o.vars || o).palette[a.color].main
        }
    }
}))
  , uo = D("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (o,a)=>{
        const {ownerState: l} = o
          , {size: e} = l;
        return [a.label, a[`label ${t(e)}`]]
    }
})(({ownerState: o})=>v({
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: "nowrap"
}, o.size === "small" && {
    paddingLeft: 8,
    paddingRight: 8
}));
function G(o) {
    return o.key === "Backspace" || o.key === "Delete"
}
const po = s.forwardRef(function(a, l) {
    const e = X({
        props: a,
        name: "MuiChip"
    })
      , {avatar: n, className: c, clickable: u, color: d="default", component: p, deleteIcon: b, disabled: m=!1, icon: g, label: _, onClick: x, onDelete: f, onKeyDown: I, onKeyUp: P, size: A="medium", variant: w="filled", tabIndex: S, skipFocusWhenDisabled: E=!1} = e
      , j = Z(e, io)
      , L = s.useRef(null)
      , W = oo(L, l)
      , M = i=>{
        i.stopPropagation(),
        f && f(i)
    }
      , B = i=>{
        i.currentTarget === i.target && G(i) && i.preventDefault(),
        I && I(i)
    }
      , Y = i=>{
        i.currentTarget === i.target && (f && G(i) ? f(i) : i.key === "Escape" && L.current && L.current.blur()),
        P && P(i)
    }
      , R = u !== !1 && x ? !0 : u
      , O = R || f ? V : p || "div"
      , F = v({}, e, {
        component: O,
        disabled: m,
        size: A,
        color: d,
        iconColor: s.isValidElement(g) && g.props.color || d,
        onDelete: !!f,
        clickable: R,
        variant: w
    })
      , y = co(F)
      , H = O === V ? v({
        component: p || "div",
        focusVisibleClassName: y.focusVisible
    }, f && {
        disableRipple: !0
    }) : {};
    let N = null;
    f && (N = b && s.isValidElement(b) ? s.cloneElement(b, {
        className: $(b.props.className, y.deleteIcon),
        onClick: M
    }) : k.jsx(ro, {
        className: $(y.deleteIcon),
        onClick: M
    }));
    let h = null;
    n && s.isValidElement(n) && (h = s.cloneElement(n, {
        className: $(y.avatar, n.props.className)
    }));
    let U = null;
    return g && s.isValidElement(g) && (U = s.cloneElement(g, {
        className: $(y.icon, g.props.className)
    })),
    k.jsxs(so, v({
        as: O,
        className: $(y.root, c),
        disabled: R && m ? !0 : void 0,
        onClick: x,
        onKeyDown: B,
        onKeyUp: Y,
        ref: W,
        tabIndex: E && m ? -1 : S,
        ownerState: F
    }, H, j, {
        children: [h || U, k.jsx(uo, {
            className: $(y.label),
            ownerState: F,
            children: _
        }), N]
    }))
})
  , _o = po
  , fo = {
    INSTAGRAM: "instagram",
    TIKTOK: "tiktok",
    YOUTUBE: "youtube",
    TWITTER: "twitter",
    TWITCH: "twitch",
    FACEBOOK: "facebook"
};
function Co(o) {
    return o != null && o.length ? o.map(({code: a, value: l})=>({
        name: lo(a),
        value: l
    })) : null
}
const vo = [{
    key: "ALL",
    label: "All"
}, {
    key: "FEMALE",
    label: "Female"
}, {
    key: "MALE",
    label: "Male"
}]
  , bo = ["13-17", "18-24", "25-34", "35-44", "45-54"];
function go(o) {
    return o ? vo.reduce((a,{key: l, label: e})=>(a[e] = bo.map(n=>{
        var c;
        return {
            name: n,
            value: (c = o[l]) == null ? void 0 : c[n]
        }
    }
    ),
    a), {}) : null
}
function yo(o, a) {
    const l = a.platform === "youtube" ? a.metrics.find(e=>e.name === "subscribers") : a.metrics.find(e=>e.name === "followers");
    if (l != null && l.count_prev && l.count) {
        const e = o.totalFollowerCount ? o.totalFollowerCount + l.count : 0
          , n = o.totalFollowerCountPrev ? o.totalFollowerCountPrev + l.count_prev : 0;
        return {
            netFollowerCount: e - n,
            platforms: [...(o == null ? void 0 : o.platforms) || [], {
                followerCount: l.count,
                followerCountPrev: l.count_prev,
                name: a.platform,
                netFollowerCount: l.count - l.count_prev,
                timeUpdated: a.time_updated,
                timeUpdatedPrev: a == null ? void 0 : a.time_updated_prev
            }],
            totalFollowerCount: e,
            totalFollowerCountPrev: n
        }
    }
    return {
        ...o,
        platforms: [...o.platforms, {
            followerCount: 0,
            followerCountPrev: 0,
            name: a.platform,
            netFollowerCount: 0,
            timeUpdated: a.time_updated,
            timeUpdatedPrev: a.time_updated_prev
        }]
    }
}
function $o(o) {
    return o.reduce(yo, {
        netFollowerCount: 0,
        platforms: [],
        totalFollowerCount: 0,
        totalFollowerCountPrev: 0
    })
}
function mo(o, a) {
    if (!o)
        return [];
    const l = [];
    if (a === fo.INSTAGRAM) {
        const e = {
            name: "commentsAndLikes",
            comments: o.average_comments,
            likes: o.average_likes
        };
        l.push(e)
    } else {
        const e = {
            name: "likesAndViews",
            likes: o.average_likes,
            views: o.average_views
        }
          , n = {
            name: "commentsAndShares",
            comments: o.average_comments,
            shares: o.average_shares
        };
        l.push(e, n)
    }
    return l
}
const T = {
    twitch: {
        contents: "videos"
    },
    twitter: {
        contents: "tweets"
    },
    youtube: {
        contents: "videos"
    }
};
function ko(o) {
    return o.map(({engagement_metrics: a, unique_content_metrics: l, gender_age_summary: e, metrics: n, most_recent_posts: c, platform: u, phyllo_account_id: d, phyllo_profile_id: p, platform_profile_url: b, sponsored_posts: m, time_updated: g, top_countries: _, username: x, is_verified: f, source: I, reach: P})=>({
        engagementMetrics: mo(a, u),
        uniqueContentMetrics: l,
        genderAgeSummary: go(e),
        mediaKitEngagementMetrics: a,
        metrics: n.map(({name: A, count: w, count_prev: S})=>{
            var E;
            return {
                name: ((E = T == null ? void 0 : T[u]) == null ? void 0 : E[A]) || A,
                count: w,
                countPrev: S
            }
        }
        ),
        mostRecentPosts: c,
        platform: u,
        phylloAccountId: d,
        phylloProfileId: p,
        platformProfileUrl: b,
        sponsoredPosts: m,
        timeUpdated: g,
        topCountries: Co(_),
        username: x,
        isVerified: f,
        source: I,
        reach: P
    }))
}
function K(o) {
    return o != null && o.length ? {
        followerGrowthStatistics: $o(o),
        socialStatistics: ko(o),
        isEmpty: !1,
        isLoading: !1
    } : {
        followerGrowthStatistics: null,
        socialStatistics: null,
        isEmpty: !0,
        isLoading: !1
    }
}
const z = s.createContext(null);
async function xo(o) {
    var a;
    try {
        const l = await eo("user_profile", {
            action: "get_cross_platform_analytics",
            firebase_uid: o
        })
          , e = (a = l == null ? void 0 : l.data) == null ? void 0 : a.cpa_data;
        return K(e)
    } catch {
        return K([])
    }
}
function Io({firebaseUid: o}) {
    const a = Po()
      , [l,e] = s.useState({
        isLoading: !0,
        isEmpty: !0,
        socialStatistics: null,
        followerGrowthStatistics: null
    });
    return s.useEffect(()=>{
        async function n() {
            if (!o)
                return;
            const c = await xo(o);
            e(c)
        }
        if (!(a != null && a.isLoading)) {
            if (a) {
                e(a);
                return
            }
            n()
        }
    }
    , [o, a]),
    {
        crossPlatformAnalytics: l,
        setCrossPlatformAnalytics: e
    }
}
function wo({firebaseUid: o, children: a}) {
    const {crossPlatformAnalytics: l, setCrossPlatformAnalytics: e} = Io({
        firebaseUid: o
    });
    return k.jsx(z.Provider, {
        value: {
            ...l,
            setCrossPlatformAnalytics: e
        },
        children: a
    })
}
function So() {
    const o = s.useContext(z);
    if (o === null)
        throw new Error("useCrossPlatformAnalyticsContext must be used within a CrossPlatformAnalyticsProvider");
    return o
}
function Po() {
    return s.useContext(z)
}
export {wo as C, _o as M, fo as S, z as a, So as b, xo as f, K as t, Io as u};
//# debugId=f63063eb-927c-585f-ab20-0db4d85724b1
//# sourceMappingURL=index-932e671c.js.map

