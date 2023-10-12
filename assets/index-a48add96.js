!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "09c997e1-fd19-5917-8172-4f63dfaf3c71")
    } catch (e) {}
}();
import {bS as un, bT as Dt, l as Z, j as t, aT as Ls, r as l, y as na, bU as ee, aR as k, bV as K, e as I, bW as re, H as g, bX as An, bM as Y, b1 as dn, bY as ne, p as Ke, bZ as Bt, q as ve, a_ as pn, D as En, b_ as pt, m as Et, I as Ye, a6 as mn, b$ as Tn, bn as oe, c0 as Ns, aM as Pn, c1 as ia, c2 as fn, aI as Cn, c3 as Rn, B as hn, C as Pe, h as pe, c4 as Os, F as xn, M as js, R as vt, c5 as We, c6 as he, c7 as gn, c8 as bn, c9 as Sn, ca as Ut, cb as vs, E as yn, cc as In, cd as Ln, aS as ot, aC as Nn, ce as Us, a4 as ws} from "./index-4d92c338.js";
import {H as On} from "./Helmet-7bfac4c8.js";
import {D as mt} from "./DEFAULT_PROFILE_PICTURE-8eea7853.js";
import {S as oa} from "./beacons_full-69d2fc55.js";
import {u as ra} from "./useToastContext-e230cadb.js";
import {U as jn} from "./index-e47d228f.js";
import {a as la, b as He, S as rt, c as vn, C as _e, d as Je, L as Xe, e as kt, i as be, f as Ue, h as Un, g as ca, j as wn, k as Mn, l as Dn, m as Bn, n as _a, u as kn, o as Ft, p as Fn, q as Kn, r as lt, s as St, v as Hn, t as Ms, V as Gn, P as Yn} from "./VideoBackground-89c0b8d8.js";
import {s as ua} from "./syntheticLinkClick-01aa71fa.js";
import {D as Vn, A as $n, g as Ds, a as Wn} from "./getLanguageAndCountryCode-2395f4b2.js";
import {g as yt} from "./getSocialReferrerPlatform-207f0c43.js";
import {u as ct} from "./useDict-f6a9d9ab.js";
import {u as le} from "./useIsMobile-131a099e.js";
import {S as zn} from "./SuspensionPage-6c21da3b.js";
import {c as qn, F as Zn} from "./canUseFeature-1928dc1b.js";
import {H as Aa} from "./HomeContainer-e1a9c640.js";
import {C as Bs} from "./COOKIE_NAMES-4ca3a26b.js";
import {O as ks, f as Qn} from "./OrganizationBadgeDisplay-87828da2.js";
import {u as Jn} from "./usePageBackgroundStyle-6d9779fd.js";
import {b as Xn, a as ei, d as ti} from "./VisibilityOff-5dc3800a.js";
import {B as da} from "./BeaconsLogoComponent-02c5d68b.js";
import {M as Kt} from "./Dialog-60e23f85.js";
import {m as $} from "./mergeDeep-4cfe963b.js";
import {E as ce, d as si, g as pa, a as Ea} from "./storeItemUtils-61772fe7.js";
import {B as ie, M as _t} from "./index-fa94221a.js";
import {P as x} from "./ProfileGlobalsContext-8982728f.js";
import {P as M} from "./ProfileThemeContext-9f028f8f.js";
import {C as ai} from "./CDN_URLS-53881ca1.js";
import {B as Ht} from "./Badge-af36a42d.js";
import {T as Fs} from "./Typography-ccfa5a08.js";
import {u as ni, v as ma, n as ii, o as Gt, r as Ta, q as oi, S as ri, p as Pa, w as li, x as ci, y as _i, z as ui, A as Ai, C as di, D as pi, E as Ei, G as fa, H as mi, J as Ti, K as Pi, M as fi, N as Ci, O as Ri, P as hi, Q as xi, R as gi, U as bi, V as Si, X as yi, Z as Ii, _ as Li, $ as Ni, a0 as Oi, a1 as ji, a2 as vi, a3 as Ui, a4 as wi, a5 as Mi, a6 as Di, a7 as Bi, a8 as ki, a9 as Fi, aa as Ki, ab as Hi, ac as Gi, ad as Yi, ae as Vi, af as $i, ag as Wi, ah as zi, ai as qi, aj as Zi, ak as Ca, al as Qi, am as Ji, an as Xi, g as eo} from "./BeaconsIcon-7e54ce15.js";
import {a as h, P as Ce, b as fe, g as Tt} from "./ProfileBlockCard-2508c246.js";
import {G as Ze} from "./Grid-4499a730.js";
import {D as et} from "./DialogV1-d7e33d30.js";
import {T as de} from "./TextField-0a574c54.js";
import {C as Ra, l as Ks, E as to, u as so, a as ao, P as no} from "./stripe.esm-1b20376a.js";
import {B as io, P as oo, a as ro, b as Yt, O as Vt} from "./PayPal-4b5ad9ee.js";
import {P as xe, a as lo} from "./ProfileTextField-f53d2baf.js";
import {G as co} from "./index-15bf1856.js";
import {B as ut} from "./ButtonV1-c477208d.js";
import {v as At} from "./v4-a960c1f4.js";
import {d as tt} from "./Close-eb3987d1.js";
import {P as ha, J as xa} from "./Email-acefa7ff.js";
import {r as Pt, i as ft} from "./createSvgIcon-d5208ee1.js";
import {u as _o, g as uo} from "./useGetPublicProfileInfo-24f1a6d0.js";
import {p as Ao} from "./purify.es-0c4a0514.js";
import {u as qe} from "./updateQueryParameter-bd931750.js";
import {b as po} from "./constants-3b268537.js";
import {b as Eo, a as mo, u as To} from "./index-5788a904.js";
import {E as Po} from "./IMediaKitBlocks-04d49109.js";
import {b as fo, a as Co, d as Ro} from "./FileCopy-dfe4e2d4.js";
import {d as It} from "./Launch-b25fe1f6.js";
import {c as ho} from "./index-15bc05d3.js";
import {P as Ne, a as Lt} from "./PLATFORMS-b2642ca9.js";
import {D as xo} from "./Dialog-7949c21f.js";
import {D as go, T as ga, a as ba, S as bo} from "./Tabs-b74e3190.js";
import {C as So, b as yo} from "./index-932e671c.js";
import {T as Io} from "./TextAndToggleSwitchOnOneLine-7287fc3c.js";
import {d as Lo} from "./LocalMall-048d9e35.js";
import {u as No} from "./useTwitterEmbedRef-de024405.js";
import {m as Hs} from "./moneyFormatter-e5e94e12.js";
import {S as $t} from "./STORE_DEFAULT_VALUES-5276f74a.js";
import {C as Gs} from "./Collapse-476e652e.js";
function Ys(e, s, a, n=!0) {
    var i;
    const {isTikTok: o} = s;
    if (s != null && s.suspend_account)
        return !1;
    if (e != null && e.selected_smart_link && un(e.selected_smart_link.smart_link_scheduling)) {
        const r = e.selected_smart_link;
        if (!(r != null && r.id) || !((i = r == null ? void 0 : r.url) != null && i.trim()))
            return !1;
        if (!!o && Dt(r))
            return a(!0),
            !1;
        if (n) {
            let c = r.url;
            c.startsWith("http") || (c = `http://${c}`);
            try {
                new URL(c),
                Z("public_actions", {
                    id: r.id,
                    action: "link_click"
                }),
                la({
                    linkType: "link_in_bio",
                    url: c,
                    linkId: r.id
                }),
                ua(c)
            } catch {
                return !1
            }
        }
        return !0
    }
    return !1
}
function V(e) {
    return e.toLowerCase().replace(/[^a-z0-9-]/g, "")
}
function Oo({ageVerification: e, setAgeVerification: s}) {
    let a = "Confirm that you are willing to see potentially sensitive content."
      , n = "I confirm"
      , o = "Go back";
    return e.age !== "on" && (a = "Confirm that you are of legal age to view this content.",
    n = `I am ${e.age} or older`,
    o = `I am under ${e.age}`),
    t.jsx(Kt, {
        fullScreen: !0,
        open: !!e,
        children: t.jsxs("div", {
            className: "bg-gray-900 flex flex-col items-center justify-between h-full w-screen pb-16",
            children: [t.jsxs("div", {
                className: "mt-12 px-6 text-center text-white",
                children: [t.jsx(Xn, {
                    className: "fill-white"
                }), t.jsx("div", {
                    className: "font-bold text-28 mt-6",
                    children: "Sensitive Content"
                }), t.jsx("div", {
                    className: "mt-6",
                    children: a
                }), t.jsx(Ls, {
                    className: "border border-white border-solid font-bold mt-6 normal-case rounded-full text-16",
                    color: "inherit",
                    fullWidth: !0,
                    onClick: ()=>s(!1),
                    variant: "outlined",
                    children: n
                }), t.jsx(Ls, {
                    className: "font-bold mt-6 normal-case text-16",
                    color: "inherit",
                    fullWidth: !0,
                    href: "https://beacons.ai",
                    children: o
                })]
            }), t.jsx(da, {
                color: "#ffffff"
            })]
        })
    })
}
var Oe = (e=>(e.NICKNAME = "nickname",
e.LOGO = "logo",
e))(Oe || {});
function wt({profilePicture: e, defaultOpacity: s=1, verified: a, width: n, fontSize: o="inherit", username: i="", num_followers: r=-1, vip: _, headerProfilePictureBorderRadius: c, headerProfilePictureBorder: u, headerProfilePictureColor1: A}) {
    const [E,T] = l.useState(s)
      , d = u === "none" ? `${A}00` : A
      , m = {
        width: n,
        height: n,
        borderRadius: c,
        opacity: s ? E : "2px solid white",
        border: `2px solid ${d}`
    };
    if (a === void 0 || e === void 0)
        return null;
    const p = c === "1e4px" || c === 100 ? "circular" : "rectangular";
    return t.jsxs("div", {
        children: [t.jsx(Ht, {
            overlap: p,
            badgeContent: t.jsx(He, {
                verified: a,
                vip: _
            }),
            children: t.jsx("img", {
                alt: "profile",
                src: e,
                style: m,
                onMouseEnter: ()=>T(1),
                onMouseLeave: ()=>T(s)
            })
        }), i && t.jsx("div", {
            style: {
                color: "white",
                opacity: E,
                marginTop: 5
            },
            children: t.jsx(Fs, {
                variant: "caption",
                style: {
                    fontSize: o
                },
                children: t.jsx("strong", {
                    children: i.split("@")[0]
                })
            })
        }), r !== -1 && t.jsx("div", {
            style: {
                color: "white",
                opacity: E,
                marginBottom: 10
            },
            children: t.jsx(Fs, {
                variant: "caption",
                style: {
                    fontSize: o
                },
                children: `${na(r)} followers`
            })
        })]
    })
}
function je({socialLinks: e, headerType: s, color: a="#ffffff", display: n=null}) {
    const o = le()
      , [i,r] = l.useState(!1);
    let _ = s;
    s === ce.RESPONSIVE && (o ? _ = ce.COMPACT : _ = ce.FULL);
    const {iconSize: c} = ee[_].big
      , {iconPadding: u} = ee[_].big
      , A = {
        fill: a,
        width: c,
        height: c,
        padding: u,
        filter: a.toLowerCase() === "#ffffff" ? "drop-shadow(0px 0.5px 1px rgba(0,0,0,0.25))" : void 0
    };
    return e ? t.jsxs("div", {
        className: "TextAlignCenter",
        style: {
            display: n,
            flexFlow: "row wrap",
            alignItems: "center"
        },
        children: [e.map(E=>t.jsx(vo, {
            social: E,
            iconStyle: A,
            setOpen: r
        }, E.platform)), t.jsx(rt, {
            open: i,
            setOpen: r
        })]
    }) : null
}
const jo = {
    instagram: {
        label: "Instagram",
        baseUrl: "instagram.com/",
        socialIcon: e=>t.jsx(ii, {
            style: e
        })
    },
    tiktok: {
        label: "TikTok",
        baseUrl: "tiktok.com/@",
        socialIcon: e=>t.jsx(Gt, {
            style: e
        })
    },
    youtube: {
        label: "YouTube",
        baseUrl: "youtube.com/",
        socialIcon: e=>t.jsx(Ta, {
            style: e
        })
    },
    twitter: {
        label: "Twitter",
        baseUrl: "twitter.com/",
        socialIcon: e=>t.jsx(oi, {
            style: e
        })
    },
    facebook: {
        label: "Facebook",
        baseUrl: "facebook.com/",
        socialIcon: e=>t.jsx(ri, {
            style: e
        })
    },
    twitch: {
        label: "Twitch",
        baseUrl: "twitch.tv/",
        socialIcon: e=>t.jsx(Pa, {
            style: e
        })
    },
    snapchat: {
        label: "Snapchat",
        baseUrl: "snapchat.com/add/",
        socialIcon: e=>t.jsx(li, {
            style: e
        })
    },
    pinterest: {
        label: "Pinterest",
        baseUrl: "pinterest.com/",
        socialIcon: e=>t.jsx(ci, {
            style: e
        })
    },
    spotify: {
        label: "Spotify",
        baseUrl: "",
        socialIcon: e=>t.jsx(_i, {
            style: e
        })
    },
    soundcloud: {
        label: "SoundCloud",
        baseUrl: "soundcloud.com/",
        socialIcon: e=>t.jsx(ui, {
            style: e
        })
    },
    applemusic: {
        label: "Apple Music",
        baseUrl: "",
        socialIcon: e=>t.jsx(Ai, {
            style: e
        })
    },
    applebooks: {
        label: "Apple Books",
        baseUrl: "",
        socialIcon: e=>t.jsx(di, {
            style: e
        })
    },
    applepodcasts: {
        label: "Apple Podcasts",
        baseUrl: "",
        socialIcon: e=>t.jsx(pi, {
            style: e
        })
    },
    appletv: {
        label: "Apple TV",
        baseUrl: "",
        socialIcon: e=>t.jsx(Ei, {
            style: e
        })
    },
    vimeo: {
        label: "Vimeo",
        baseUrl: "vimeo.com/",
        socialIcon: e=>t.jsx(fa, {
            style: e
        })
    },
    reddit: {
        label: "Reddit",
        baseUrl: "reddit.com/",
        socialIcon: e=>t.jsx(mi, {
            style: e
        })
    },
    patreon: {
        label: "Patreon",
        baseUrl: "patreon.com/",
        socialIcon: e=>t.jsx(Ti, {
            style: e
        })
    },
    whatsapp: {
        label: "WhatsApp",
        baseUrl: "wa.me/",
        socialIcon: e=>t.jsx(Pi, {
            style: e
        })
    },
    linkedin: {
        label: "LinkedIn",
        baseUrl: "linkedin.com/in/",
        socialIcon: e=>t.jsx(fi, {
            style: e
        })
    },
    github: {
        label: "GitHub",
        baseUrl: "github.com/",
        socialIcon: e=>t.jsx(Ci, {
            style: e
        })
    },
    gitlab: {
        label: "GitLab",
        baseUrl: "https://gitlab.com/",
        socialIcon: e=>t.jsx(Ri, {
            style: e
        })
    },
    substack: {
        label: "Substack",
        baseUrl: "",
        socialIcon: e=>t.jsx(hi, {
            style: e
        })
    },
    beehiiv: {
        label: "Beehiiv",
        baseUrl: "",
        socialIcon: e=>t.jsx(xi, {
            style: e
        })
    },
    onlyfans: {
        label: "Onlyfans",
        baseUrl: "onlyfans.com/",
        socialIcon: e=>t.jsx(gi, {
            style: e
        })
    },
    cashapp: {
        label: "CashApp",
        baseUrl: "cash.app/$",
        socialIcon: e=>t.jsx(bi, {
            style: e
        })
    },
    discord: {
        label: "Discord",
        baseUrl: "",
        socialIcon: e=>t.jsx(Si, {
            style: e
        })
    },
    venmo: {
        label: "Venmo",
        baseUrl: "venmo.com/",
        socialIcon: e=>t.jsx(yi, {
            style: e
        })
    },
    amazon: {
        label: "Amazon",
        baseUrl: "",
        socialIcon: e=>t.jsx(Ii, {
            style: e
        })
    },
    pandora: {
        label: "Pandora",
        baseUrl: "",
        socialIcon: e=>t.jsx(Li, {
            style: e
        })
    },
    deezer: {
        label: "Deezer",
        baseUrl: "deezer.com/",
        socialIcon: e=>t.jsx(Ni, {
            style: e
        })
    },
    tidal: {
        label: "Tidal",
        baseUrl: "",
        socialIcon: e=>t.jsx(Oi, {
            style: e
        })
    },
    bandcamp: {
        label: "Bandcamp",
        baseUrl: "",
        socialIcon: e=>t.jsx(ji, {
            style: e
        })
    },
    google_play_store: {
        label: "Google Play",
        baseUrl: "",
        socialIcon: e=>t.jsx(vi, {
            style: e
        })
    },
    ios_app_store: {
        label: "App Store",
        baseUrl: "",
        socialIcon: e=>t.jsx(Ui, {
            style: e
        })
    },
    medium: {
        label: "Medium",
        baseUrl: "",
        socialIcon: e=>t.jsx(wi, {
            style: e
        })
    },
    phone: {
        label: "SMS",
        baseUrl: "",
        socialIcon: e=>t.jsx(ma, {
            style: e
        })
    },
    telegram: {
        label: "Telegram",
        baseUrl: "",
        socialIcon: e=>t.jsx(Mi, {
            style: e
        })
    },
    quikplace: {
        label: "QuikPlace",
        baseUrl: "",
        socialIcon: e=>t.jsx(Di, {
            style: e
        })
    },
    fanhouse: {
        label: "Fanhouse",
        baseUrl: "",
        socialIcon: e=>t.jsx(Bi, {
            style: e
        })
    },
    clubhouse: {
        label: "Clubhouse",
        baseUrl: "",
        socialIcon: e=>t.jsx(ki, {
            style: e
        })
    },
    famous_birthdays: {
        label: "Famous Birthdays",
        baseUrl: "",
        socialIcon: e=>t.jsx(Fi, {
            style: e
        })
    },
    flipboard: {
        label: "Flipboard",
        baseUrl: "flipboard.com/@",
        socialIcon: e=>t.jsx(Ki, {
            style: e
        })
    },
    goodreads: {
        label: "Goodreads",
        baseUrl: "",
        socialIcon: e=>t.jsx(Hi, {
            style: e
        })
    },
    mastodon: {
        label: "Mastodon",
        baseUrl: "https://mastodon.social/@",
        socialIcon: e=>t.jsx(Gi, {
            style: e
        })
    },
    steam: {
        label: "Steam",
        baseUrl: "steamcommunity.com/id/",
        socialIcon: e=>t.jsx(Yi, {
            style: e
        })
    },
    tumblr: {
        label: "Tumblr",
        baseUrl: "tumblr.com/",
        socialIcon: e=>t.jsx(Vi, {
            style: e
        })
    },
    imdb: {
        label: "IMDb",
        baseUrl: "https://www.imdb.com/name/nm",
        socialIcon: e=>t.jsx($i, {
            style: e
        })
    },
    threads: {
        label: "Threads",
        baseUrl: "https://www.threads.net/@",
        socialIcon: e=>t.jsx(Wi, {
            style: e
        })
    },
    stereo: {
        label: "Stereo",
        baseUrl: "https://stereo.com/",
        socialIcon: e=>t.jsx(zi, {
            style: e
        })
    }
};
function vo({social: e, iconStyle: s, setOpen: a}) {
    var d;
    const {isComponent: n, isTikTok: o, firebaseUid: i} = l.useContext(x)
      , r = jo[e.platform]
      , {url: _, isRestrictedLink: c} = l.useMemo(()=>{
        let m = e.value;
        !m.startsWith("https://") && !m.startsWith("http://") && r && (m.toLowerCase().includes(r.baseUrl) || (m = r.baseUrl + m),
        m.toLowerCase().startsWith("http") || (m = `https://${m}`)),
        m = vn(m);
        const P = o && Dt({
            url: m
        });
        return (n || P) && (m = "#"),
        {
            url: m,
            isRestrictedLink: P
        }
    }
    , [n, o, r, e])
      , u = l.useCallback(m=>{
        if (i)
            try {
                Z("public_actions", {
                    action: "social_link_clicked",
                    platform: m,
                    firebase_uid: i
                })
            } catch {}
    }
    , [i])
      , A = l.useCallback(()=>{
        if (n)
            return;
        if (c) {
            a(!0);
            return
        }
        u("email");
        const m = `mailto:${e.value}`;
        window.location.href = m
    }
    , [n, c, u, a, e])
      , E = l.useCallback(()=>{
        if (n)
            return;
        if (c) {
            a(!0);
            return
        }
        u("phone");
        const m = `sms:${e.value}`;
        window.location.href = m
    }
    , [n, c, u, a, e])
      , T = l.useCallback(m=>{
        if (!n) {
            if (c) {
                a(!0);
                return
            }
            u(m)
        }
    }
    , [n, c, u, a]);
    return (d = e == null ? void 0 : e.value) != null && d.trim() ? e.platform === "email" ? t.jsxs("a", {
        href: "#email",
        onClick: A,
        onAuxClick: A,
        "aria-label": "email",
        children: [t.jsx("title", {
            children: "email"
        }), t.jsx(ni, {
            style: s
        })]
    }) : e.platform === "phone" ? t.jsxs("a", {
        href: "#phone",
        onClick: E,
        onAuxClick: E,
        "aria-label": "phone",
        children: [t.jsx("title", {
            children: "phone"
        }), t.jsx(ma, {
            style: s
        })]
    }) : t.jsxs("a", {
        href: _,
        "aria-label": r.baseUrl,
        onClick: ()=>T(e.platform),
        onAuxClick: ()=>T(e.platform),
        children: [t.jsx("title", {
            children: r.baseUrl
        }), r.socialIcon(s)]
    }) : null
}
function dt({headerColor: e, headerSize: s, headerBio: a}) {
    if (!a)
        return null;
    const n = (e == null ? void 0 : e.toLowerCase()) === "#ffffff" ? "0px 0.5px 1px rgba(0,0,0,0.25)" : void 0
      , o = {
        color: e,
        fontSize: ee.full[s].bioAndLocationFontSize,
        marginBottom: ee.full[s].spaceBelowBio,
        textShadow: n,
        fontWeight: 400
    };
    return t.jsx("div", {
        className: "mt-1",
        children: t.jsx(h, {
            style: o,
            children: a
        })
    })
}
function Mt({displayUsername: e, headerColor: s, verified: a, headerSize: n, vip: o}) {
    let i = l.useContext(M);
    i = $(k, i);
    const r = ee.compact[n].fontSize
      , [_,c] = l.useState(r)
      , u = i.text.font_family
      , A = (s == null ? void 0 : s.toLowerCase()) === "#ffffff" ? "0px 0.5px 1px rgba(0,0,0,0.25)" : void 0;
    return l.useEffect(()=>{
        if (e === void 0)
            return;
        const T = document.createElement("canvas").getContext("2d");
        let d = r + 1
          , m = 8
          , p = Math.ceil((m + d) / 2);
        const P = n === "small" ? 240 : 230;
        if (T.font = `${d - 1}px ${u}`,
        !(T != null && T.measureText(e)) || T.measureText(e).width < P)
            c(d - 1);
        else {
            for (; m !== d; )
                p = Math.ceil((m + d) / 2),
                T.font = `${p}px ${u}`,
                T.measureText(e).width > P ? d = p - 1 : m = p;
            c(p - 1)
        }
    }
    , [e, i]),
    e === void 0 ? null : t.jsxs(h, {
        style: {
            fontSize: _,
            color: s
        },
        children: [!!e && t.jsx("span", {
            style: {
                marginLeft: n === "big" ? 8 : void 0,
                textShadow: A
            },
            children: e
        }), t.jsx(He, {
            verified: a,
            vip: o
        })]
    })
}
const Uo = {
    small: 32,
    medium: 48,
    big: 80
};
function Ge({headerLogoUrl: e, headerSize: s, verified: a, vip: n}) {
    return t.jsx("div", {
        className: "flex justify-center",
        children: t.jsx(Ht, {
            badgeContent: t.jsx(He, {
                verified: a,
                vip: n
            }),
            children: t.jsx("img", {
                src: e,
                alt: "header logo url",
                style: {
                    height: Uo[s]
                }
            })
        })
    })
}
function wo({blockId: e, displayUsername: s, headerBannerImage: a, headerBio: n, headerColor: o, headerDisplayNameType: i, headerLogoUrl: r, headerSize: _, isComponent: c, profilePicUrl: u, socialLinks: A, verified: E, headerProfilePictureBorderRadius: T, headerProfilePictureBorder: d, headerProfilePictureColor1: m, headerProfilePictureWidth: p, vip: P}) {
    const C = !!c
      , R = Math.floor(p / 2)
      , b = a || `${ai}/default-banner-dark.webp`;
    return C ? t.jsxs("div", {
        "data-testid": e,
        "aria-label": `banner header block ${c} preview component`,
        className: "flex flex-col items-center -mx-5 w-[calc(100%+40px)] pb-4",
        children: [t.jsx("img", {
            src: b,
            alt: "header banner",
            className: "w-full"
        }), t.jsx("div", {
            className: "flex",
            style: {
                marginTop: `-${R}px`
            },
            children: t.jsx(wt, {
                verified: E,
                profilePicture: u,
                vip: P,
                width: p,
                headerProfilePictureBorderRadius: T,
                headerProfilePictureBorder: d,
                headerProfilePictureColor1: m
            })
        }), t.jsxs("div", {
            className: "w-full text-center mt-3",
            children: [i === Oe.NICKNAME || !r ? t.jsx(Mt, {
                displayUsername: s,
                verified: !1,
                headerColor: o,
                headerSize: _,
                vip: !1
            }) : t.jsx(Ge, {
                headerLogoUrl: r,
                headerSize: _,
                verified: !1,
                vip: !1
            }), t.jsx(dt, {
                headerColor: o,
                headerSize: _,
                headerBio: n
            }), t.jsx("div", {
                className: "mt-2",
                children: t.jsx(je, {
                    color: o,
                    headerType: "full",
                    socialLinks: A
                })
            })]
        })]
    }) : t.jsxs("div", {
        "data-testid": e,
        "aria-label": "banner header block in profile",
        className: "flex flex-col items-center -mx-5 w-[calc(100%+40px)] pb-4",
        children: [t.jsx("img", {
            src: b,
            alt: "header banner",
            className: "w-full lg:rounded-8"
        }), t.jsx("div", {
            className: "flex",
            style: {
                marginTop: `-${R}px`
            },
            children: t.jsx(wt, {
                verified: E,
                profilePicture: u,
                vip: P,
                width: p,
                headerProfilePictureBorderRadius: T,
                headerProfilePictureBorder: d,
                headerProfilePictureColor1: m
            })
        }), t.jsxs("div", {
            className: "w-full text-center z-10 mt-3",
            children: [i === Oe.NICKNAME || !r ? t.jsx(Mt, {
                displayUsername: s,
                headerColor: o,
                headerSize: _,
                verified: !1,
                vip: !1
            }) : t.jsx(Ge, {
                headerLogoUrl: r,
                headerSize: _,
                verified: !1,
                vip: !1
            }), t.jsx("div", {
                className: "mt-1",
                children: t.jsx(dt, {
                    headerColor: o,
                    headerSize: _,
                    headerBio: n
                })
            }), t.jsx("div", {
                className: "mt-2",
                children: t.jsx(je, {
                    color: o,
                    headerType: "full",
                    socialLinks: A
                })
            })]
        })]
    })
}
function Vs({headerBio: e, style: s}) {
    return e ? t.jsx(h, {
        style: s,
        children: e
    }) : null
}
function $s({headerLocation: e, style: s}) {
    return e ? t.jsxs(h, {
        style: s,
        children: [t.jsx(qi, {
            style: {
                marginRight: 2,
                marginBottom: -2
            },
            fontSize: "inherit"
        }), e]
    }) : null
}
function Sa({headerColor: e, headerSize: s, headerType: a, headerLocation: n, headerBio: o}) {
    const i = le()
      , {isComponent: r} = l.useContext(x)
      , _ = (e == null ? void 0 : e.toLowerCase()) === "#ffffff" ? "0px 0.5px 1px rgba(0,0,0,0.25)" : void 0
      , c = a === ce.COMPACT || a === ce.RESPONSIVE && (i || r) ? ce.COMPACT : ce.FULL
      , u = c === ce.FULL ? 40 : 0
      , A = {
        color: e,
        fontSize: ee[c][s].bioAndLocationFontSize,
        marginBottom: ee[c][s].spaceBelowBio,
        textShadow: _,
        paddingLeft: u,
        paddingRight: u
    }
      , E = {
        color: e,
        fontSize: ee[c][s].bioAndLocationFontSize,
        opacity: ee[c][s].locationOpacity,
        marginBottom: ee[c][s].spaceBelowLocation,
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textShadow: _,
        borderRadius: 0,
        width: c === ce.COMPACT ? 220 : null,
        paddingLeft: u,
        paddingRight: u
    };
    return c === ce.COMPACT ? t.jsxs("div", {
        style: {
            marginTop: ee.compact[s].bioAndLocationMarginTop,
            marginLeft: ee.compact[s].bioAndLocationMarginLeft
        },
        children: [t.jsx(Vs, {
            style: A,
            headerBio: o
        }), t.jsx($s, {
            style: E,
            headerLocation: n
        })]
    }) : t.jsxs("div", {
        style: {
            marginTop: ee.full[s].bioAndLocationMarginTop
        },
        children: [t.jsx($s, {
            style: E,
            headerLocation: n
        }), t.jsx(Vs, {
            style: A,
            headerBio: o
        })]
    })
}
function Mo({profilePicUrl: e, headerSize: s, headerType: a, headerColor: n, headerDisplayNameType: o, headerBio: i, headerLocation: r, headerLogoUrl: _, headerProfilePictureBorderRadius: c, headerProfilePictureBorder: u, headerProfilePictureColor1: A, headerProfilePictureWidth: E, socialLinks: T, verified: d, displayUsername: m, vip: p, blockId: P}) {
    let C = l.useContext(M);
    C = $(k, C);
    const R = !i && !r;
    return t.jsxs("div", {
        style: C.components.theme === K.FULL_WIDTH ? {
            marginLeft: 20,
            marginRight: 20
        } : {},
        "data-testid": P,
        "aria-label": "header block compact header",
        children: [t.jsxs("div", {
            className: "HeaderContainer",
            children: [t.jsx("div", {
                style: {
                    marginRight: ee.compact[s].profPicMarginRight
                },
                children: t.jsx(Do, {
                    profilePicUrl: e,
                    headerProfilePictureBorderRadius: c,
                    headerProfilePictureBorder: u,
                    headerProfilePictureColor1: A,
                    headerProfilePictureWidth: E
                })
            }), t.jsxs("div", {
                children: [t.jsxs("div", {
                    children: [o === Oe.NICKNAME || !_ ? t.jsx(Mt, {
                        displayUsername: m,
                        verified: d,
                        headerColor: n,
                        headerSize: s,
                        vip: p
                    }) : t.jsx(Ge, {
                        headerLogoUrl: _,
                        headerSize: s,
                        verified: !1,
                        vip: !1
                    }), t.jsx(Sa, {
                        headerColor: n,
                        headerLocation: r,
                        headerBio: i,
                        headerSize: s,
                        headerType: a
                    })]
                }), R && t.jsx("div", {
                    style: {
                        marginTop: ee.compact[s].spaceBelowUsername
                    },
                    children: t.jsx(je, {
                        socialLinks: T,
                        color: n,
                        display: "flex",
                        headerType: a
                    })
                })]
            })]
        }), !R && t.jsx(je, {
            socialLinks: T,
            color: n,
            display: "flex",
            headerType: a
        })]
    })
}
function Do({profilePicUrl: e, headerProfilePictureBorderRadius: s, headerProfilePictureBorder: a, headerProfilePictureColor1: n, headerProfilePictureWidth: o}) {
    const i = a === "none" ? `${n}00` : n
      , r = {
        width: o,
        borderRadius: s,
        border: `2px solid ${i}`
    };
    return e === void 0 ? null : t.jsx("img", {
        alt: "profile",
        src: e,
        style: r
    })
}
function Bo({profilePicUrl: e, headerSize: s, headerType: a, headerColor: n, headerDisplayNameType: o, headerBio: i, headerLocation: r, headerLogoUrl: _, headerProfilePictureBorderRadius: c, headerProfilePictureBorder: u, headerProfilePictureColor1: A, headerProfilePictureWidth: E, socialLinks: T, verified: d, displayUsername: m, vip: p, blockId: P}) {
    const C = m || void 0
      , R = ee.full[s].fontSize
      , b = (n == null ? void 0 : n.toLowerCase()) === "#ffffff" ? "0px 0.5px 1px rgba(0,0,0,0.25)" : void 0;
    return t.jsxs("center", {
        "data-testid": P,
        "aria-label": "header block full header",
        children: [t.jsx(wt, {
            width: E,
            verified: d,
            profilePicture: e,
            vip: p,
            headerProfilePictureBorderRadius: c,
            headerProfilePictureBorder: u,
            headerProfilePictureColor1: A
        }), o === Oe.NICKNAME || !_ ? t.jsx(h, {
            style: {
                fontSize: R,
                color: n,
                marginTop: ee.full[s].spaceAboveUsername,
                textShadow: b
            },
            children: !!C && C
        }) : t.jsx("div", {
            style: {
                marginTop: ee.full[s].spaceAboveUsername
            },
            children: t.jsx(Ge, {
                headerLogoUrl: _,
                headerSize: s,
                verified: !1,
                vip: !1
            })
        }), t.jsx(Sa, {
            headerColor: n,
            headerLocation: r,
            headerBio: i,
            headerSize: s,
            headerType: a
        }), !!T && t.jsx("div", {
            style: {
                marginTop: ee.full[s].spaceBelowUsername
            },
            children: t.jsx(je, {
                color: n,
                socialLinks: T,
                headerType: a
            })
        })]
    })
}
function Ws({profilePicUrl: e, headerSize: s, headerType: a, headerColor: n, headerDisplayNameType: o, headerBio: i, headerLocation: r, headerLogoUrl: _, headerProfilePictureBorderRadius: c, headerProfilePictureBorder: u, headerProfilePictureColor1: A, headerProfilePictureWidth: E, socialLinks: T, verified: d, displayUsername: m, vip: p, blockId: P}) {
    const {isComponent: C} = l.useContext(x)
      , R = le();
    return a === ce.COMPACT || a === ce.RESPONSIVE && (R || C) ? t.jsx(Mo, {
        profilePicUrl: e,
        socialLinks: T,
        headerSize: s,
        headerType: a,
        headerColor: n,
        headerDisplayNameType: o,
        headerBio: i,
        headerLocation: r,
        headerLogoUrl: _,
        displayUsername: m,
        verified: d,
        headerProfilePictureBorderRadius: c,
        headerProfilePictureBorder: u,
        headerProfilePictureColor1: A,
        headerProfilePictureWidth: E,
        vip: p,
        blockId: P
    }) : t.jsx(Bo, {
        profilePicUrl: e,
        socialLinks: T,
        headerSize: s,
        headerType: a,
        headerColor: n,
        headerDisplayNameType: o,
        headerBio: i,
        headerLocation: r,
        headerLogoUrl: _,
        displayUsername: m,
        verified: d,
        headerProfilePictureBorderRadius: c,
        headerProfilePictureBorder: u,
        headerProfilePictureColor1: A,
        headerProfilePictureWidth: E,
        vip: p,
        blockId: P
    })
}
const ko = {
    small: 18,
    medium: 24,
    big: 32
};
function zs({displayUsername: e, headerColor: s, verified: a, headerSize: n, vip: o}) {
    let i = l.useContext(M);
    i = $(k, i);
    const r = ko[n]
      , [_,c] = l.useState(r)
      , u = i.text.font_family
      , A = (s == null ? void 0 : s.toLowerCase()) === "#ffffff" ? "0px 0.5px 1px rgba(0,0,0,0.25)" : void 0;
    return l.useEffect(()=>{
        if (e === void 0)
            return;
        const T = document.createElement("canvas").getContext("2d");
        let d = r + 1
          , m = 8
          , p = Math.ceil((m + d) / 2);
        const P = n === "small" ? 240 : 230;
        if (T.font = `${d - 1}px ${u}`,
        !(T != null && T.measureText(e)) || T.measureText(e).width < P)
            c(d - 1);
        else {
            for (; m !== d; )
                p = Math.ceil((m + d) / 2),
                T.font = `${p}px ${u}`,
                T.measureText(e).width > P ? d = p - 1 : m = p;
            c(p - 1)
        }
    }
    , [e, i]),
    e === void 0 ? null : t.jsxs(h, {
        "aria-label": "profile tag",
        style: {
            fontSize: _,
            color: s,
            marginBottom: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        children: [!!e && t.jsx("span", {
            className: "font-bold",
            style: {
                textShadow: A
            },
            children: e
        }), t.jsx(He, {
            verified: a,
            vip: o
        })]
    })
}
function Fo({backgroundColor: e, blockId: s, headerDisplayNameType: a, displayUsername: n, headerLogoUrl: o, headerBio: i, headerColor: r, headerSize: _, isComponent: c, isHamburgerMenu: u, profilePicUrl: A, showSubscribeOrShareButton: E, socialLinks: T, verified: d, vip: m}) {
    const p = le();
    return !c ? t.jsxs("div", {
        "data-testid": s,
        "aria-label": "portrait header block in profile",
        className: I("flex flex-col items-center relative h-[480px] -mx-5 w-[calc(100%+40px)] lg:h-[520px] lg:max-w-[420px] lg:mx-auto lg:mt-0 pb-4", {
            "-mt-[72px]": E && p || u,
            "-mt-[40px]": !E && !u
        }),
        children: [t.jsx("img", {
            alt: "beacons profile avatar",
            src: A,
            className: "object-cover h-full w-full lg:rounded-16"
        }), t.jsxs("div", {
            className: "absolute bottom-0 w-full text-center z-10",
            children: [a === Oe.NICKNAME || !o ? t.jsx(zs, {
                displayUsername: n,
                headerColor: r,
                headerSize: _,
                verified: d,
                vip: m
            }) : t.jsx(Ge, {
                headerLogoUrl: o,
                headerSize: _,
                verified: d,
                vip: m
            }), t.jsx(dt, {
                headerColor: r,
                headerSize: _,
                headerBio: i
            }), t.jsx("div", {
                className: "mt-2",
                children: t.jsx(je, {
                    color: r,
                    headerType: "full",
                    socialLinks: T
                })
            })]
        }), t.jsxs("div", {
            className: "absolute w-full top-0 h-[480px] lg:h-[520px]",
            children: [t.jsx("div", {
                className: "absolute bottom-0 w-full h-36",
                style: {
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, ${e} 100%)`
                }
            }), t.jsx("div", {
                className: "absolute bottom-0 w-full h-24",
                style: {
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, ${e} 100%)`
                }
            })]
        })]
    }) : t.jsxs("div", {
        "data-testid": s,
        "aria-label": `portrait header block ${c} preview component`,
        className: I("flex flex-col items-center relative -mx-5 w-[calc(100%+40px)] h-[480px] pb-4", {
            "-mt-[72px]": E || u,
            "-mt-[40px]": !E && !u
        }),
        children: [t.jsx("img", {
            alt: "beacons profile",
            src: A,
            className: "object-cover h-full w-full"
        }), t.jsxs("div", {
            className: "absolute bottom-0 w-full text-center z-10",
            children: [a === Oe.NICKNAME || !o ? t.jsx(zs, {
                displayUsername: n,
                headerColor: r,
                headerSize: _,
                verified: d,
                vip: m
            }) : t.jsx(Ge, {
                headerLogoUrl: o,
                headerSize: _,
                verified: d,
                vip: m
            }), t.jsx(dt, {
                headerColor: r,
                headerSize: _,
                headerBio: i
            }), t.jsx("div", {
                className: "mt-2",
                children: t.jsx(je, {
                    color: r,
                    headerType: "full",
                    socialLinks: T
                })
            })]
        }), t.jsxs("div", {
            className: "absolute w-full top-0 h-[480px]",
            children: [t.jsx("div", {
                className: "absolute -bottom-1 w-full h-36",
                style: {
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, ${e} 100%)`
                }
            }), t.jsx("div", {
                className: "absolute -bottom-1 w-full h-24",
                style: {
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, ${e} 100%)`
                }
            })]
        })]
    })
}
const Ko = ["email", "instagram", "tiktok", "youtube", "twitter", "facebook", "twitch", "snapchat", "pinterest", "spotify", "applemusic", "soundcloud", "vimeo", "patreon", "whatsapp", "linkedin"];
function ya({block: e, blockId: s, isHamburgerMenu: a, shouldDisplayAuthoritativeHeader: n}) {
    const o = le()
      , {isComponent: i, profilePicUrl: r, displayUsername: _, verified: c, vip: u} = l.useContext(x);
    let A = l.useContext(M);
    A = $(k, A);
    const {header_banner_image: E, header_layout: T, header_type: d, social_array: m, social_links: p, header_size: P, header_display_name_type: C, nickname: R, header_logo_url: b, header_bio: S, header_location: O, header_profile_picture_border_radius: y, header_profile_picture_border: v, header_profile_picture_width_compact: B, header_profile_picture_width_full: te} = e
      , L = R || `${_}`;
    let U = m;
    const H = d === ce.COMPACT && T === re.CLASSIC || d === ce.RESPONSIVE && (o || i) ? B : te;
    if (m === null && p && (U = Ko.map(se=>({
        platform: se,
        value: p[se] ? p[se] : ""
    }))),
    !(n ?? ie[g.HEADER](e)))
        return null;
    const q = A.text.header_text_color || e.header_color
      , D = A.text.header_text_color || e.header_profile_picture_color1
      , F = A.background.background_color1
      , J = A.show_subscribe_button || A.show_share_button;
    switch (T) {
    case re.CLASSIC:
        return t.jsx(Ws, {
            profilePicUrl: r,
            socialLinks: U,
            headerSize: P,
            headerType: d,
            headerColor: q,
            headerDisplayNameType: C,
            headerBio: S,
            headerLocation: O,
            headerLogoUrl: b,
            displayUsername: L,
            verified: c,
            headerProfilePictureBorderRadius: y,
            headerProfilePictureBorder: v,
            headerProfilePictureColor1: D,
            headerProfilePictureWidth: H,
            vip: u,
            blockId: s
        });
    case re.PORTRAIT:
        return t.jsx(Fo, {
            backgroundColor: F,
            blockId: s,
            headerDisplayNameType: C,
            displayUsername: L,
            headerLogoUrl: b,
            headerBio: S,
            headerSize: P,
            headerColor: q,
            isComponent: i,
            isHamburgerMenu: a,
            profilePicUrl: r,
            showSubscribeOrShareButton: J,
            socialLinks: U,
            verified: c,
            vip: u
        });
    case re.BANNER:
        return t.jsx(wo, {
            blockId: s,
            displayUsername: L,
            headerBannerImage: E,
            headerBio: S,
            headerSize: P,
            headerColor: q,
            headerDisplayNameType: C,
            headerLogoUrl: b,
            isComponent: i,
            profilePicUrl: r,
            socialLinks: U,
            verified: c,
            headerProfilePictureBorderRadius: y,
            headerProfilePictureBorder: v,
            headerProfilePictureColor1: D,
            headerProfilePictureWidth: H,
            vip: u
        });
    default:
        return t.jsx(Ws, {
            profilePicUrl: r,
            socialLinks: U,
            headerSize: P,
            headerType: d,
            headerColor: q,
            headerDisplayNameType: C,
            headerBio: S,
            headerLocation: O,
            headerLogoUrl: b,
            displayUsername: L,
            verified: c,
            headerProfilePictureBorderRadius: y,
            headerProfilePictureBorder: v,
            headerProfilePictureColor1: D,
            headerProfilePictureWidth: H,
            vip: u,
            blockId: s
        })
    }
}
function Ho({authoritativeHeaderBlock: e, authoritativeHeaderBlockId: s, blockGallery: a, isComponent: n, onBlockClick: o, pages: i, refs: r, shouldDisplayAuthoritativeHeader: _, showShareButton: c, showSubscribeButton: u}) {
    let A = l.useContext(M);
    A = $(k, A);
    const E = le()
      , T = (e == null ? void 0 : e.header_layout) === re.BANNER
      , d = (e == null ? void 0 : e.header_layout) === re.CLASSIC;
    if (!e || !s)
        return null;
    const m = i == null ? void 0 : i.reduce((C,R)=>R.display ? C + 1 : C, 0)
      , p = A.page.navigation === An.HAMBURGER && m > 1
      , P = u || c || p;
    return t.jsx(Ze, {
        item: !0,
        className: I("w-full mb-4", {
            Infinite: a,
            "mt-12": !n && !E && (T || !d && !P),
            "mt-0": !n && !E && P
        }),
        ref: r[s],
        onClick: o,
        children: t.jsx(ya, {
            block: {
                ...Y[g.HEADER].defaultBlock,
                ...e
            },
            blockId: s,
            isHamburgerMenu: p,
            shouldDisplayAuthoritativeHeader: _
        })
    }, e.id)
}
const Go = l.forwardRef(function(s, a) {
    const {component: n, options: o, textColor: i, ...r} = s
      , _ = dn()
      , [c,u] = l.useState(null);
    return l.useImperativeHandle(a, ()=>({
        focus: ()=>{
            c !== null && c.focus()
        }
    }), [c]),
    t.jsx(n, {
        onReady: u,
        options: {
            ...o,
            iconStyle: "solid",
            style: {
                base: {
                    iconColor: i || "#c4f0ff",
                    color: i || "#424770",
                    fontSize: "16px",
                    fontFamily: _.typography.fontFamily,
                    "::placeholder": {
                        color: i || "#aab7c4"
                    }
                },
                invalid: {
                    iconColor: _.palette.red.main,
                    color: _.palette.red.main
                }
            }
        },
        ...r
    })
});
function Yo({InputLabelProps: e, InputProps: s={}, inputProps: a, helperText: n, textColor: o, ...i}) {
    return t.jsx(de, {
        fullWidth: !0,
        InputLabelProps: {
            ...e,
            shrink: !0
        },
        InputProps: {
            ...s,
            inputProps: {
                ...a,
                ...s.inputProps,
                textColor: o,
                component: Ra
            },
            inputComponent: Go
        },
        helperText: n,
        error: !!n,
        sx: {
            input: {
                color: o
            }
        },
        ...i
    })
}
const qs = "create_request_stripe";
function Wt({order: e, setSuccessfullyPaid: s, allowPay: a=!0, retrievePaymentIntent: n, beaconsOrigin: o=io.LINK_IN_BIO, paymentSuccessEndpoint: i="pay_for_order", setSuccessfulPaymentCallback: r=void 0, uploadProgress: _=void 0, dynamicHidePayment: c=!1, isPreview: u=!1, ctaBackgroundColor: A, ctaTextColor: E, textColor: T}) {
    const {paymentProperties: d} = l.useContext(x)
      , m = !!(d != null && d.stripe)
      , p = d == null ? void 0 : d.stripe_account
      , P = !!(d != null && d.paypal_marketplace)
      , C = l.useMemo(()=>p ? Ks("pk_live_KK0oDptvu4DEJVZB0cAyVFTc00IIHAc1Y4", {
        stripeAccount: p
    }) : Ks("pk_live_KK0oDptvu4DEJVZB0cAyVFTc00IIHAc1Y4"), [p])
      , R = e.bid === 0 || e.discounted_bid === 0;
    return !m && !R ? t.jsxs("div", {
        style: {
            textAlign: "center",
            color: "#999999",
            fontSize: 12,
            marginTop: 8
        },
        children: [!P && "Credit card,", " Apple Pay, Google Pay not available."]
    }) : t.jsx(to, {
        stripe: C,
        children: t.jsx(Vo, {
            order: e,
            setSuccessfullyPaid: s,
            allowPay: a,
            beaconsOrigin: o,
            paymentSuccessEndpoint: i,
            retrievePaymentIntent: n,
            setSuccessfulPaymentCallback: r,
            uploadProgress: _,
            dynamicHidePayment: c,
            isPreview: u,
            ctaBackgroundColor: A,
            ctaTextColor: E,
            textColor: T
        })
    })
}
function Vo({order: e, setSuccessfullyPaid: s, allowPay: a, beaconsOrigin: n, paymentSuccessEndpoint: o, retrievePaymentIntent: i, setSuccessfulPaymentCallback: r, uploadProgress: _, dynamicHidePayment: c, isPreview: u, ctaBackgroundColor: A, ctaTextColor: E, textColor: T}) {
    const {paymentProperties: d, socialReferrer: m} = l.useContext(x)
      , p = so()
      , P = ao()
      , [C,R] = l.useState("")
      , [b,S] = l.useState("")
      , [O,y] = l.useState("")
      , [v,B] = l.useState(!1)
      , te = !!(d != null && d.paypal_marketplace)
      , [L,U] = l.useState(null)
      , H = a && (!!C || e.bid === 0 || e.discounted_bid === 0)
      , W = d == null ? void 0 : d.stripe_account;
    l.useEffect(()=>{
        if (!e || !o || !p || u)
            return;
        (async()=>{
            const F = p.paymentRequest({
                country: "US",
                currency: "usd",
                total: {
                    label: "Beacons",
                    amount: 100
                },
                requestPayerName: !0,
                requestPayerEmail: !0
            });
            await F.canMakePayment() && U(F)
        }
        )()
    }
    , [p]);
    const Q = async D=>{
        try {
            const F = await Z("manage_order", {
                action: o,
                timestamp: new Date().getTime(),
                charge: D,
                origin_platform: m,
                stripe_account: W,
                beacons_origin: n,
                ...e,
                payin_method: "credit_card"
            });
            F.data.error_message ? (s(!1),
            y("Payment was not successful.")) : (s(!0),
            r !== void 0 && r(F.data))
        } catch {
            s(!1),
            y("Payment unsuccessful.")
        }
    }
      , q = async D=>{
        B(!0),
        D.preventDefault();
        const F = await i(D);
        if (!F) {
            S("This user has not set up their payment information. We have notified them to set it up."),
            B(!1);
            return
        }
        if (F === "deny") {
            S("There was an error with the payment. Ask the page owner to contact us for help."),
            B(!1);
            return
        }
        let J, se;
        if (e.bid > 0 && e.discounted_bid !== 0 ? (se = P.getElement(Ra),
        J = await p.confirmCardPayment(F, {
            payment_method: {
                card: se,
                billing_details: {
                    name: C,
                    email: e.email
                }
            }
        })) : J = {
            paymentIntent: {
                amount: 0,
                status: "succeeded",
                id: null
            }
        },
        J.error)
            Z("manage_order", {
                action: "track_order_status",
                firebase_uid: e.firebase_uid,
                beacons_username: e.creator_username,
                oid: Math.floor(Math.random() * 1e13)
            }),
            S("Payment not successful.");
        else {
            const ae = J.paymentIntent.status === "succeeded"
              , Se = J.paymentIntent.status === "requires_capture" && o === qs;
            (ae || Se) && await Q(J.paymentIntent)
        }
        B(!1)
    }
    ;
    return t.jsxs("form", {
        onSubmit: D=>q(D),
        "aria-label": "stripe payment form",
        children: [t.jsxs("div", {
            style: {
                display: (e.bid === 0 || e.discounted_bid === 0) && c ? "none" : "initial"
            },
            children: [t.jsxs("div", {
                style: {
                    marginTop: "15px"
                },
                children: [!!L && t.jsxs("div", {
                    className: "relative",
                    children: [!a && t.jsx("div", {
                        label: "one-click payment button cover",
                        className: "absolute top-0 left-0 w-full h-full z-10 bg-gray-100 bg-opacity-50",
                        onClick: D=>{
                            D.preventDefault(),
                            D.stopPropagation()
                        }
                        ,
                        tabIndex: 0,
                        role: "button"
                    }), t.jsx(no, {
                        options: {
                            style: {
                                paymentRequestButton: {
                                    type: "default",
                                    theme: "dark",
                                    height: "40px"
                                }
                            },
                            paymentRequest: L
                        },
                        className: "PaymentRequestButton",
                        onClick: ()=>{
                            L.update({
                                total: {
                                    label: o,
                                    amount: e.bid
                                }
                            }),
                            L.on("paymentmethod", async D=>{
                                if (!a) {
                                    D.complete("fail"),
                                    S("Please fill all required fields.");
                                    return
                                }
                                const F = await i(D)
                                  , J = await p.confirmCardPayment(F, {
                                    payment_method: D.paymentMethod.id
                                }, {
                                    handleActions: !1
                                });
                                if (J.error)
                                    D.complete("fail"),
                                    y("Payment unsuccessful."),
                                    S("Payment did not succeed.");
                                else {
                                    D.complete("success");
                                    const se = J.paymentIntent.status === "succeeded"
                                      , ae = J.paymentIntent.status === "requires_capture" && o === qs;
                                    (se || ae) && Q(J.paymentIntent)
                                }
                                B(!1)
                            }
                            )
                        }
                    })]
                }), (!!L || te) && t.jsx("div", {
                    className: "mt-4 text-center text-14 font-semibold",
                    children: "or pay with card"
                })]
            }), t.jsx("div", {
                className: "mt-4",
                children: t.jsx(de, {
                    label: "Name on card",
                    id: "Name on card",
                    value: C,
                    onChange: D=>R(D.target.value),
                    placeholder: "Full Name",
                    autoComplete: "name",
                    InputProps: {
                        startAdornment: " "
                    },
                    fullWidth: !0
                })
            }), t.jsx("div", {
                className: "mt-3",
                "aria-label": "Credit card number container",
                children: t.jsx(Yo, {
                    onChange: D=>{
                        var F;
                        (F = D == null ? void 0 : D.error) != null && F.message ? S(D.error.message) : S("")
                    }
                    ,
                    label: "Credit Card",
                    helperText: b,
                    textColor: T
                })
            })]
        }), t.jsx("div", {
            className: "mt-3",
            children: t.jsx(oo, {
                order: e,
                payErrorMessage: O,
                paymentMethod: ro.CARD,
                buttonDisabled: !!b || !H,
                sendingPayment: v,
                uploadProgress: _,
                ctaBackgroundColor: A,
                ctaTextColor: E
            })
        })]
    })
}
function zt({open: e, setOpen: s, mainCta: a, additionalInformation: n, children: o, acquisitionChannel: i}) {
    const {profilePicUrl: r, setCommunityDialogState: _} = l.useContext(x);
    return t.jsxs(et, {
        open: e,
        onClose: ()=>s(!1),
        title: a,
        children: [t.jsx(co, {
            fonts: [{
                font: "Poppins",
                weights: [400, 600, 700]
            }]
        }), !!r && t.jsx("div", {
            style: {
                textAlign: "center"
            },
            children: t.jsx("img", {
                className: "MarginM",
                src: r,
                onError: c=>{
                    c.target.src = mt
                }
                ,
                alt: "profile",
                style: {
                    height: 100,
                    borderRadius: "50%"
                }
            })
        }), t.jsx("div", {
            className: "text-small MarginBottomM",
            children: n
        }), o, t.jsx("div", {
            children: t.jsx(ut, {
                intent: "primary",
                fullWidth: !0,
                onClick: ()=>{
                    _(c=>({
                        ...c,
                        open: !0,
                        acquisitionChannel: i
                    })),
                    s(!1)
                }
                ,
                children: "Join community"
            })
        }), t.jsx("div", {
            className: "MarginTopS",
            children: t.jsx(ut, {
                onClick: ()=>s(!1),
                fullWidth: !0,
                intent: "secondary",
                children: "Done"
            })
        })]
    })
}
function $o({block: e, blockId: s}) {
    const {isComponent: a, paymentProperties: n} = l.useContext(x)
      , [o,i] = l.useState(!1)
      , r = ie[g.BOOKING](e, n);
    return !r && a === ne ? t.jsx(_e, {
        title: "Appointments",
        cta: "Set up payments to remove this temporary placeholder."
    }) : r ? t.jsxs(Ce, {
        "data-testid": s,
        children: [!!e.cover_image && t.jsx("div", {
            children: t.jsx("div", {
                style: {
                    backgroundImage: `url(${e.cover_image})`,
                    height: 0,
                    paddingTop: "66%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    margin: "-24px -24px 0px"
                }
            })
        }), t.jsx(h, {
            className: I({
                h2Text: !0,
                MarginTopM: !!e.cover_image
            }),
            children: e.session_title
        }), t.jsx(h, {
            className: "mt-3",
            children: t.jsx(_t, {
                children: e.session_description
            })
        }), t.jsxs(h, {
            className: "flex items-center mt-3 text-16",
            children: [t.jsx(si, {
                style: {
                    height: 20
                }
            }), e.session_length, t.jsx("div", {
                className: "ml-6",
                children: Number(e.price) === 0 ? "Free" : `$ ${e.price}`
            })]
        }), t.jsx("div", {
            className: "mt-4",
            children: t.jsx(xe, {
                invert: !0,
                fullWidth: !0,
                variant: "contained",
                className: "EmailButton CardStyle",
                onClick: ()=>{
                    a || i(!0)
                }
                ,
                "aria-label": e.button_title,
                children: e.button_title
            })
        }), t.jsx(Wo, {
            open: o,
            setOpen: i,
            block: e,
            blockId: s
        })]
    }) : null
}
function Wo({open: e, setOpen: s, block: a, blockId: n}) {
    var O;
    const {disablePayments: o, displayUsername: i, firebaseUid: r} = l.useContext(x)
      , {value: _, updateValue: c} = ct({
        email: "",
        id: At(),
        bid: a.price * 100,
        status: "booking",
        name: "",
        instructions: "",
        creator_username: i,
        firebase_uid: r,
        booking_method: a.booking_method,
        calendly_event_uri: a.calendly_event_uri,
        session_title: a.session_title,
        session_description: a.session_description,
        session_length: a.session_length,
        block_id: n
    })
      , [u,A] = l.useState(!1)
      , [E,T] = l.useState(void 0)
      , [d,m] = l.useState(!1)
      , p = l.useMemo(()=>d && _.email && !Ke(_.email) ? "Email invalid" : "", [d, _.email])
      , P = Ke(_.email) && _.bid <= Bt
      , C = l.useCallback(y=>async()=>o ? (await ve(1e4),
    "deny") : _.bid > 0 ? (await Z("manage_order", {
        action: "create_payment_intent",
        order: y,
        order_type: "booking"
    })).data.client_secret : "freeOrder", [o, _])
      , R = l.useCallback(y=>{
        T(y),
        window.gtag && window.gtag("event", "purchase", {
            value: _.bid,
            currency: "USD",
            transaction_id: _.id,
            affiliation: "Booking",
            items: [{
                name: "Booking"
            }]
        })
    }
    , [_])
      , b = `Thank you for supporting ${i}!`
      , S = `You will get an email at ${_.email} with instructions on how to book your appointment.`;
    return u ? t.jsx(zt, {
        open: e,
        setOpen: s,
        mainCta: b,
        additionalInformation: S,
        acquisitionChannel: "booking_block",
        children: !!((O = E == null ? void 0 : E.item) != null && O.calendly_link) && t.jsx("div", {
            className: "MarginTopM MarginBottomM",
            children: t.jsx("a", {
                href: E.item.calendly_link,
                target: "_blank",
                rel: "noreferrer",
                style: {
                    color: "initial"
                },
                children: "Click here to book now."
            })
        })
    }) : t.jsxs(et, {
        open: e,
        onClose: ()=>s(!1),
        scroll: "body",
        children: [t.jsx("div", {
            children: t.jsx(de, {
                label: "Your email",
                id: "Your email",
                placeholder: "name@example.com",
                value: _.email,
                onChange: y=>c({
                    email: y.target.value
                }),
                onBlur: ()=>m(!0),
                error: !!p,
                helperText: p,
                autoFocus: !0,
                type: "email",
                autoComplete: "email",
                InputProps: {
                    startAdornment: " "
                },
                fullWidth: !0
            })
        }), t.jsx("div", {
            className: "mt-3",
            children: t.jsx(de, {
                label: "Your name",
                id: "Your name",
                placeholder: "Jane Doe",
                value: _.name,
                onChange: y=>c({
                    name: y.target.value
                }),
                InputProps: {
                    startAdornment: " "
                },
                autoComplete: "name",
                fullWidth: !0
            })
        }), t.jsx("div", {
            className: "mt-3",
            children: t.jsx(de, {
                label: "Your message",
                id: "Your message",
                value: _.instructions,
                onChange: y=>{
                    _.instructions.length > 250 || c({
                        instructions: y.target.value
                    })
                }
                ,
                helperText: `${_.instructions.length}/250`,
                InputProps: {
                    startAdornment: " "
                },
                fullWidth: !0,
                multiline: !0
            })
        }), t.jsxs("div", {
            className: "mt-6",
            children: [t.jsx(Yt, {
                orderInfo: _,
                allowPay: P,
                orderType: Vt.BOOKING,
                paymentSuccessEndpoint: "complete_booking_purchase_paypal",
                setSuccessfullyPaid: A,
                setSuccessfulPaymentCallback: R,
                dynamicHidePayment: !0
            }), t.jsx(Wt, {
                order: _,
                setSuccessfullyPaid: A,
                allowPay: P,
                paymentSuccessEndpoint: "complete_booking_purchase_stripe",
                setSuccessfulPaymentCallback: R,
                retrievePaymentIntent: C(_),
                dynamicHidePayment: !0
            })]
        })]
    })
}
function zo({block: e, blockId: s}) {
    const a = En()
      , {firebaseUid: n} = l.useContext(x);
    let o = l.useContext(M);
    o = $(k, o);
    const [i,r] = l.useState(void 0)
      , [_,c] = l.useState(void 0)
      , [u,A] = l.useState("")
      , [E,T] = l.useState(!0);
    l.useEffect(()=>{
        (async()=>{
            try {
                const p = await Z("public_actions", {
                    action: "get_community_members",
                    firebase_uid: n,
                    show_leaderboard: !!(e != null && e.show_leaderboard)
                });
                r(p.data.most_recent_members),
                c(p.data.member_leaderboard)
            } catch {}
        }
        )()
    }
    , []),
    l.useEffect(()=>{
        const m = new URLSearchParams(a.search)
          , p = m.get("community_picture")
          , P = m.get("community_username");
        let C = m.get("community_note");
        if (C && !(e != null && e.show_new_comments_by_default) && (C = "Left a note 💌"),
        !(!p || !P))
            if (T(!1),
            !i)
                r([{
                    beacons_username: P,
                    profile_picture_url: p
                }]);
            else {
                let R = [...i];
                if (!!R.find(O=>O.beacons_username === P))
                    return;
                R = [{
                    beacons_username: P,
                    profile_picture_url: p,
                    note: C,
                    display_note: !!(e != null && e.show_new_comments_by_default)
                }].concat(R),
                r(R)
            }
    }
    , [a]);
    const d = ie[g.COMMUNITY](e);
    return !i || !d ? null : t.jsxs(Ce, {
        "data-testid": s,
        children: [!!e.community_title && t.jsx(h, {
            tag: "center",
            style: {
                fontSize: 18,
                fontWeight: "bold"
            },
            children: e.community_title
        }), t.jsx(h, {
            tag: "center",
            className: "MarginTopS",
            style: {
                fontSize: 14
            },
            children: i != null && i.length || _ != null && _.length ? "Recently joined" : "Be the first to get featured on this page"
        }), !!i.length && t.jsx("div", {
            style: {
                height: 1,
                borderTop: `1px solid ${o.text.color}`
            }
        }), !!(e != null && e.show_leaderboard) && t.jsx(Xo, {
            featuredMembers: _
        }), i.map(m=>t.jsx(Ia, {
            communityMember: m
        }, m.beacons_username)), E && t.jsxs(t.Fragment, {
            children: [t.jsx("div", {
                className: "MarginTopM",
                children: t.jsx(Zo, {
                    joinCommunityNote: u,
                    setJoinCommunityNote: A,
                    notePlaceholder: e.note_placeholder
                })
            }), t.jsx("div", {
                className: "MarginTopS",
                children: t.jsx(Qo, {
                    setJoinCommunityNote: A,
                    joinCommunityNote: u
                })
            })]
        })]
    })
}
const qo = pn({
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },
    input: {
        paddingLeft: 16,
        paddingRight: 16
    }
});
function Zo({joinCommunityNote: e, setJoinCommunityNote: s, notePlaceholder: a}) {
    const n = l.useContext(M)
      , o = pt(n)
      , i = qo()
      , r = 140;
    return t.jsx(lo, {
        placeholder: a || "Leave a note here...",
        value: e,
        multiline: !0,
        onChange: _=>{
            _.target.value.length <= r && s(_.target.value)
        }
        ,
        InputProps: {
            classes: i,
            inputProps: {
                "aria-label": a
            }
        },
        style: {
            borderRadius: o,
            border: `2px solid ${n.text.color}`,
            padding: "5px 0px",
            marginRight: 1,
            width: "calc(100% - 5px)"
        }
    })
}
function Qo({joinCommunityNote: e}) {
    const {beaconsUsername: s, isComponent: a, setCommunityDialogState: n} = l.useContext(x);
    return t.jsx(xe, {
        invert: !0,
        className: "EmailButton CardStyle",
        variant: "contained",
        type: "submit",
        onClick: ()=>{
            a || n(o=>({
                ...o,
                open: !0,
                cta: `Get featured on ${s}'s page.`,
                acquisitionChannel: "community_block",
                joinCommunityNote: e
            }))
        }
        ,
        children: "Join community"
    })
}
const Jo = ["Top supporter 🎁", "Top advocate 🔥", "Top believer 💘"];
function Xo({featuredMembers: e}) {
    return e ? e.map((s,a)=>t.jsx(Ia, {
        communityMember: s,
        badge: Jo[a]
    }, a)) : null
}
function Ia({communityMember: e, badge: s}) {
    const {isComponent: a} = l.useContext(x);
    let n = l.useContext(M);
    n = $(k, n);
    const o = a ? null : `https://beacons.ai/${e.beacons_username}`;
    let i;
    return e.note && (i = e.display_note ? `"${e.note}"` : e.note),
    t.jsxs("div", {
        children: [t.jsx("div", {
            children: t.jsxs("div", {
                className: "CommunityMemberContainer MarginTopM MarginBottomS",
                children: [t.jsx("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: o,
                    style: {
                        textDecoration: "none",
                        cursor: "pointer"
                    },
                    children: t.jsx("img", {
                        className: "CommunityMemberProfPic",
                        src: e.profile_picture_url,
                        alt: "Community member",
                        onError: r=>{
                            r.target.src = mt
                        }
                    })
                }), t.jsxs("div", {
                    className: "CommunityMemberInfo",
                    children: [t.jsxs("div", {
                        className: "FlexCenter",
                        children: [t.jsx(h, {
                            style: {
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            },
                            children: e.beacons_username
                        }), !!s && t.jsx(h, {
                            className: "MarginLeftXS",
                            style: {
                                fontSize: 12,
                                color: n.text.hover_color,
                                backgroundColor: n.button.hover_background_color,
                                whiteSpace: "nowrap",
                                padding: "0px 4px",
                                marginBottom: 4
                            },
                            children: s
                        })]
                    }), t.jsx(h, {
                        children: i || t.jsx("span", {
                            style: {
                                opacity: .75,
                                fontStyle: "italic"
                            },
                            children: "Joined community"
                        })
                    })]
                })]
            })
        }), t.jsx("div", {
            style: {
                height: 1,
                borderTop: `1px solid ${n.text.color}`
            }
        })]
    })
}
function er({dialogState: e, setDialogState: s}) {
    const a = Et()
      , {beaconsUsername: n, firebaseUid: o, profilePicUrl: i, socialReferrer: r} = l.useContext(x)
      , [_,c] = l.useState("")
      , [u,A] = l.useState("");
    l.useEffect(()=>{
        const d = new URLSearchParams(window.location.search).get("community");
        c(d)
    }
    , []);
    const E = l.useCallback(()=>{
        s(T=>({
            ...T,
            open: !1
        }))
    }
    , [s]);
    return l.useEffect(()=>{
        const T = d=>{
            if (typeof d.data == "string" && d.data.startsWith("closeCommunityDialog")) {
                E();
                let m = d.data.split(";")[1];
                if (m) {
                    m = window.encodeURIComponent(m);
                    const p = d.data.split(";")[2]
                      , P = d.data.split(";")[3];
                    let C = `${window.location.pathname}?community_picture=${m}&community_username=${p}`;
                    P && (C += `&community_note=${P}`),
                    a.push(C)
                }
            }
        }
        ;
        return window.addEventListener("message", T),
        ()=>window.removeEventListener("message", T)
    }
    , [E, a, s]),
    l.useEffect(()=>{
        const T = new URLSearchParams({
            community: _,
            f: o,
            op: r,
            p: i,
            u: n,
            utm_source: "beacons_user",
            utm_medium: "lib_community",
            utm_campaign: n,
            utm_content: e.acquisitionChannel
        });
        e.title && T.set("t", e.title),
        e.cta && T.set("cta", e.cta),
        e.acquisitionChannel && T.set("a", e.acquisitionChannel),
        e.joinCommunityNote && T.set("cn", e.joinCommunityNote);
        const d = `https://account.beacons.ai ${mn}?${T}`;
        A(d)
    }
    , [n, _, e, o, i, r]),
    u ? t.jsxs(Kt, {
        open: e.open,
        onClose: E,
        children: [t.jsx("div", {
            style: {
                textAlign: "end"
            },
            children: t.jsx(Ye, {
                onClick: E,
                size: "small",
                children: t.jsx(tt, {})
            })
        }), t.jsx("div", {
            children: t.jsx("iframe", {
                referrerPolicy: "origin",
                src: u,
                title: "community",
                frameBorder: "no",
                style: {
                    width: "100%",
                    border: "none",
                    height: 425
                }
            })
        })]
    }) : null
}
var qt = {}
  , tr = ft;
Object.defineProperty(qt, "__esModule", {
    value: !0
});
var La = qt.default = void 0;
nr(l);
var sr = tr(Pt())
  , ar = t;
function Na(e) {
    if (typeof WeakMap != "function")
        return null;
    var s = new WeakMap
      , a = new WeakMap;
    return (Na = function(n) {
        return n ? a : s
    }
    )(e)
}
function nr(e, s) {
    if (!s && e && e.__esModule)
        return e;
    if (e === null || typeof e != "object" && typeof e != "function")
        return {
            default: e
        };
    var a = Na(s);
    if (a && a.has(e))
        return a.get(e);
    var n = {}
      , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
            var r = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            r && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = e[i]
        }
    return n.default = e,
    a && a.set(e, n),
    n
}
var ir = (0,
sr.default)((0,
ar.jsx)("path", {
    d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
}), "Twitter");
La = qt.default = ir;
const or = e=>l.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 24 24",
    ...e
}, l.createElement("defs", null, l.createElement("radialGradient", {
    id: "radial0",
    gradientUnits: "userSpaceOnUse",
    cx: 69.445,
    cy: 150.625427,
    fx: 69.445,
    fy: 150.625427,
    r: 160.888077,
    gradientTransform: "matrix(1,0,0,1,0.000000000000000111,0.000000000000000111)"
}, l.createElement("stop", {
    offset: 0,
    style: {
        stopColor: "rgb(100%,86.666667%,33.333334%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .328,
    style: {
        stopColor: "rgb(100%,32.941177%,24.705882%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .348,
    style: {
        stopColor: "rgb(98.823529%,32.156864%,27.058825%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .504,
    style: {
        stopColor: "rgb(90.196079%,27.843139%,44.313726%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .643,
    style: {
        stopColor: "rgb(83.529413%,24.313726%,56.862748%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .761,
    style: {
        stopColor: "rgb(80.000001%,22.352941%,64.313728%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .841,
    style: {
        stopColor: "rgb(78.431374%,21.568628%,67.058825%)",
        stopOpacity: 1
    }
})), l.createElement("radialGradient", {
    id: "radial1",
    gradientUnits: "userSpaceOnUse",
    cx: 42.23317,
    cy: 19.852751,
    fx: 42.23317,
    fy: 19.852751,
    r: 106.829918,
    gradientTransform: "matrix(1,0,0,1,0.000000000000000111,0.000000000000000111)"
}, l.createElement("stop", {
    offset: 0,
    style: {
        stopColor: "rgb(25.490198%,40.784314%,78.823531%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .999,
    style: {
        stopColor: "rgb(25.490198%,40.784314%,78.823531%)",
        stopOpacity: 0
    }
})), l.createElement("radialGradient", {
    id: "radial2",
    gradientUnits: "userSpaceOnUse",
    cx: 69.445,
    cy: 150.625427,
    fx: 69.445,
    fy: 150.625427,
    r: 160.888077,
    gradientTransform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
}, l.createElement("stop", {
    offset: 0,
    style: {
        stopColor: "rgb(100%,86.666667%,33.333334%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .328,
    style: {
        stopColor: "rgb(100%,32.941177%,24.705882%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .348,
    style: {
        stopColor: "rgb(98.823529%,32.156864%,27.058825%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .504,
    style: {
        stopColor: "rgb(90.196079%,27.843139%,44.313726%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .643,
    style: {
        stopColor: "rgb(83.529413%,24.313726%,56.862748%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .761,
    style: {
        stopColor: "rgb(80.000001%,22.352941%,64.313728%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .841,
    style: {
        stopColor: "rgb(78.431374%,21.568628%,67.058825%)",
        stopOpacity: 1
    }
})), l.createElement("radialGradient", {
    id: "radial3",
    gradientUnits: "userSpaceOnUse",
    cx: 42.23317,
    cy: 19.852751,
    fx: 42.23317,
    fy: 19.852751,
    r: 106.829918,
    gradientTransform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
}, l.createElement("stop", {
    offset: 0,
    style: {
        stopColor: "rgb(25.490198%,40.784314%,78.823531%)",
        stopOpacity: 1
    }
}), l.createElement("stop", {
    offset: .999,
    style: {
        stopColor: "rgb(25.490198%,40.784314%,78.823531%)",
        stopOpacity: 0
    }
}))), l.createElement("g", {
    id: "surface3533300"
}, l.createElement("path", {
    style: {
        fillRule: "nonzero",
        fill: "url(#radial0)",
        strokeWidth: 10,
        strokeLinecap: "butt",
        strokeLinejoin: "round",
        stroke: "rgb(100%,100%,100%)",
        strokeOpacity: 1,
        strokeMiterlimit: 10
    },
    d: "M 121.880646 150.466877 L 50.232006 150.523204 C 34.460292 150.551368 21.561284 137.65236 21.53312 121.880646 L 21.476793 50.232006 C 21.448629 34.460292 34.347637 21.561284 50.091187 21.53312 L 121.767991 21.476793 C 137.539705 21.448629 150.438713 34.347637 150.466877 50.091187 L 150.523204 121.767991 C 150.551368 137.539705 137.65236 150.438713 121.880646 150.466877 Z M 121.880646 150.466877 ",
    transform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
}), l.createElement("path", {
    style: {
        fillRule: "nonzero",
        fill: "url(#radial1)",
        strokeWidth: 10,
        strokeLinecap: "butt",
        strokeLinejoin: "round",
        stroke: "rgb(100%,100%,100%)",
        strokeOpacity: 1,
        strokeMiterlimit: 10
    },
    d: "M 121.880646 150.466877 L 50.232006 150.523204 C 34.460292 150.551368 21.561284 137.65236 21.53312 121.880646 L 21.476793 50.232006 C 21.448629 34.460292 34.347637 21.561284 50.091187 21.53312 L 121.767991 21.476793 C 137.539705 21.448629 150.438713 34.347637 150.466877 50.091187 L 150.523204 121.767991 C 150.551368 137.539705 137.65236 150.438713 121.880646 150.466877 Z M 121.880646 150.466877 ",
    transform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
}), l.createElement("path", {
    style: {
        fillRule: "nonzero",
        fill: "rgb(100%,100%,100%)",
        fillOpacity: 1,
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "round",
        stroke: "rgb(100%,100%,100%)",
        strokeOpacity: 1,
        strokeMiterlimit: 10
    },
    d: "M 85.999999 111.093921 C 72.171586 111.093921 60.906076 99.828411 60.906076 85.999999 C 60.906076 72.171586 72.171586 60.906076 85.999999 60.906076 C 99.828411 60.906076 111.093921 72.171586 111.093921 85.999999 C 111.093921 99.828411 99.828411 111.093921 85.999999 111.093921 Z M 85.999999 68.087838 C 76.114514 68.087838 68.087838 76.114514 68.087838 85.999999 C 68.087838 95.885483 76.114514 103.912159 85.999999 103.912159 C 95.885483 103.912159 103.912159 95.885483 103.912159 85.999999 C 103.912159 76.114514 95.885483 68.087838 85.999999 68.087838 Z M 85.999999 68.087838 ",
    transform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
}), l.createElement("path", {
    style: {
        fillRule: "nonzero",
        fill: "rgb(100%,100%,100%)",
        fillOpacity: 1,
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "round",
        stroke: "rgb(100%,100%,100%)",
        strokeOpacity: 1,
        strokeMiterlimit: 10
    },
    d: "M 107.488958 59.131758 C 107.488958 56.146398 109.911042 53.752477 112.868239 53.752477 C 115.853599 53.752477 118.24752 56.146398 118.24752 59.131758 C 118.24752 62.088955 115.853599 64.511039 112.868239 64.511039 C 109.911042 64.511039 107.488958 62.088955 107.488958 59.131758 Z M 107.488958 59.131758 ",
    transform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
}), l.createElement("path", {
    style: {
        fillRule: "nonzero",
        fill: "rgb(100%,100%,100%)",
        fillOpacity: 1,
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "round",
        stroke: "rgb(100%,100%,100%)",
        strokeOpacity: 1,
        strokeMiterlimit: 10
    },
    d: "M 107.488958 132.58288 L 64.511039 132.58288 C 50.682626 132.58288 39.417117 121.345535 39.417117 107.488958 L 39.417117 64.511039 C 39.417117 50.654462 50.682626 39.417117 64.511039 39.417117 L 107.488958 39.417117 C 121.317371 39.417117 132.58288 50.654462 132.58288 64.511039 L 132.58288 107.488958 C 132.58288 121.345535 121.317371 132.58288 107.488958 132.58288 Z M 64.511039 46.570715 C 54.625554 46.570715 46.570715 54.625554 46.570715 64.511039 L 46.570715 107.488958 C 46.570715 117.374443 54.625554 125.429282 64.511039 125.429282 L 107.488958 125.429282 C 117.374443 125.429282 125.429282 117.374443 125.429282 107.488958 L 125.429282 64.511039 C 125.429282 54.625554 117.374443 46.570715 107.488958 46.570715 Z M 64.511039 46.570715 ",
    transform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
}), l.createElement("path", {
    style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "url(#radial2)"
    },
    d: "M 16.976562 20.941406 L 7.039062 20.949219 C 4.851562 20.953125 3.0625 19.164062 3.058594 16.976562 L 3.050781 7.039062 C 3.046875 4.851562 4.835938 3.0625 7.019531 3.058594 L 16.960938 3.050781 C 19.148438 3.046875 20.9375 4.835938 20.941406 7.019531 L 20.949219 16.960938 C 20.953125 19.148438 19.164062 20.9375 16.976562 20.941406 Z M 16.976562 20.941406 "
}), l.createElement("path", {
    style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "url(#radial3)"
    },
    d: "M 16.976562 20.941406 L 7.039062 20.949219 C 4.851562 20.953125 3.0625 19.164062 3.058594 16.976562 L 3.050781 7.039062 C 3.046875 4.851562 4.835938 3.0625 7.019531 3.058594 L 16.960938 3.050781 C 19.148438 3.046875 20.9375 4.835938 20.941406 7.019531 L 20.949219 16.960938 C 20.953125 19.148438 19.164062 20.9375 16.976562 20.941406 Z M 16.976562 20.941406 "
}), l.createElement("path", {
    style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(100%,100%,100%)",
        fillOpacity: 1
    },
    d: "M 12 15.480469 C 10.082031 15.480469 8.519531 13.917969 8.519531 12 C 8.519531 10.082031 10.082031 8.519531 12 8.519531 C 13.917969 8.519531 15.480469 10.082031 15.480469 12 C 15.480469 13.917969 13.917969 15.480469 12 15.480469 Z M 12 9.515625 C 10.628906 9.515625 9.515625 10.628906 9.515625 12 C 9.515625 13.371094 10.628906 14.484375 12 14.484375 C 13.371094 14.484375 14.484375 13.371094 14.484375 12 C 14.484375 10.628906 13.371094 9.515625 12 9.515625 Z M 12 9.515625 "
}), l.createElement("path", {
    style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(100%,100%,100%)",
        fillOpacity: 1
    },
    d: "M 16.472656 8.273438 C 16.472656 8.683594 16.140625 9.019531 15.726562 9.019531 C 15.316406 9.019531 14.980469 8.683594 14.980469 8.273438 C 14.980469 7.859375 15.316406 7.527344 15.726562 7.527344 C 16.140625 7.527344 16.472656 7.859375 16.472656 8.273438 Z M 16.472656 8.273438 "
}), l.createElement("path", {
    style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(100%,100%,100%)",
        fillOpacity: 1
    },
    d: "M 14.980469 18.460938 L 9.019531 18.460938 C 7.101562 18.460938 5.539062 16.902344 5.539062 14.980469 L 5.539062 9.019531 C 5.539062 7.097656 7.101562 5.539062 9.019531 5.539062 L 14.980469 5.539062 C 16.898438 5.539062 18.460938 7.097656 18.460938 9.019531 L 18.460938 14.980469 C 18.460938 16.902344 16.898438 18.460938 14.980469 18.460938 Z M 9.019531 6.53125 C 7.648438 6.53125 6.53125 7.648438 6.53125 9.019531 L 6.53125 14.980469 C 6.53125 16.351562 7.648438 17.46875 9.019531 17.46875 L 14.980469 17.46875 C 16.351562 17.46875 17.46875 16.351562 17.46875 14.980469 L 17.46875 9.019531 C 17.46875 7.648438 16.351562 6.53125 14.980469 6.53125 Z M 9.019531 6.53125 "
})));
function rr({block: e, blockId: s}) {
    const {firebaseUid: a, isComponent: n} = l.useContext(x)
      , [o,i] = l.useState([])
      , r = l.useRef(void 0);
    l.useEffect(()=>{
        (async()=>{
            var E;
            let A = !0;
            if (r != null && r.current && e.friends_list.length === r.current.length && (A = e.friends_list.some((T,d)=>T.firebase_uid ? r.current.findIndex(p=>T.firebase_uid === p.firebase_uid) !== d : !1)),
            !!A && (E = e.friends_list) != null && E.length)
                try {
                    const T = await Z("public_actions", {
                        action: "get_friends_list_info",
                        firebase_uid: a,
                        friends_list: e.friends_list
                    });
                    i(T.data.info),
                    r.current = T.data.info
                } catch {}
        }
        )()
    }
    , [e.friends_list, a, n]);
    const _ = ie[g.FRIENDS](e)
      , c = !!o && !!o.length || _;
    return !c && n === ne ? t.jsx(_e, {
        title: "Friends",
        cta: "Add a friend to remove this temporary placeholder."
    }) : c ? t.jsxs(Ce, {
        "data-testid": s,
        children: [!!e.friends_title && t.jsx(h, {
            tag: "center",
            style: {
                fontSize: 18,
                fontWeight: "bold"
            },
            children: e.friends_title
        }), !!e.friends_subtitle && t.jsx(h, {
            tag: "center",
            className: "MarginTopS",
            style: {
                fontSize: 14
            },
            children: e.friends_subtitle
        }), t.jsx("div", {
            className: "MarginTopM",
            children: t.jsx(Ze, {
                container: !0,
                direction: "row",
                justifyContent: "center",
                alignItems: "flex-start",
                spacing: 2,
                children: o.map((u,A)=>t.jsx(lr, {
                    friend: u,
                    userFriend: e.friends_list[A]
                }, A))
            })
        })]
    }) : null
}
function lr({friend: e, userFriend: s}) {
    const {isComponent: a} = l.useContext(x)
      , [n,o] = l.useState(!1)
      , i = l.useCallback(async T=>{
        if (a || n || !T)
            return;
        o(!0);
        const d = ["twitter", "instagram", "tiktok"];
        (e.firebase_uid || s.firebase_uid || d.includes(s.platform) && s.platform_verified) && Z("user_profile", {
            action: "track_friends_link_click",
            friend_id: e.id ? e.id : s.id
        }),
        await ve(250),
        window.location.href = T
    }
    , [e, s, a, n]);
    if (!e || !s)
        return null;
    const r = 80;
    let _ = e.profile_picture_url;
    _ || (_ = s.profile_picture_url),
    _ || (_ = mt);
    let c = s.nickname;
    c || (c = e == null ? void 0 : e.beacons_username),
    c || (c = s == null ? void 0 : s.beacons_username),
    c || (c = s == null ? void 0 : s.platform_username),
    c || (c = "");
    let u = null;
    a || (e.firebase_uid ? u = `https://beacons.ai/${e.beacons_username}` : s.firebase_uid ? u = `https://beacons.ai/${e.beacons_username}` : s.platform === "twitter" && s.platform_verified ? u = `https://twitter.com/${s.platform_username}` : s.platform === "instagram" && s.platform_verified ? u = `https://instagram.com/${s.platform_username}` : s.platform === "tiktok" && s.platform_verified && (u = `https://tiktok.com/@${s.platform_username}`));
    let A = null;
    e.firebase_uid ? A = t.jsx(He, {
        verified: !!e.firebase_uid
    }) : s.firebase_uid ? A = t.jsx(He, {
        verified: !!s.firebase_uid
    }) : s.platform === "twitter" && s.platform_verified ? A = t.jsx(La, {
        style: {
            fill: "#1DA1F2",
            color: "#1DA1F2",
            height: 20.21
        },
        stroke: "white",
        strokeWidth: 1
    }) : s.platform === "instagram" && s.platform_verified ? A = t.jsx(or, {
        style: {
            height: 19
        }
    }) : s.platform === "tiktok" && s.platform_verified && (A = t.jsx(Gt, {
        style: {
            height: 17,
            width: 17,
            stroke: "white",
            strokeWidth: 10
        }
    }));
    const E = null;
    return t.jsx(Ze, {
        item: !0,
        "aria-label": `friend grid item - ${c}`,
        children: t.jsx("a", {
            href: E,
            style: {
                textDecoration: "none",
                cursor: "pointer"
            },
            onClick: ()=>i(u),
            onAuxClick: ()=>i(u),
            children: t.jsxs("div", {
                children: [t.jsx("div", {
                    children: t.jsx(Ht, {
                        overlap: "circular",
                        badgeContent: A,
                        children: t.jsx("img", {
                            src: _,
                            style: {
                                width: r,
                                height: r,
                                borderRadius: 1e4
                            },
                            alt: "friend"
                        })
                    })
                }), t.jsx("div", {
                    children: t.jsx(h, {
                        style: {
                            maxWidth: r + 10,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            borderRadius: 0,
                            textAlign: "center"
                        },
                        children: c
                    })
                })]
            })
        })
    })
}
function cr() {
    const {cookie_notice: e, isComponent: s} = l.useContext(x)
      , a = l.useContext(M)
      , n = le()
      , [o,i] = l.useState(!0);
    return s || !(e != null && e.display) ? null : t.jsx(Tn, {
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        open: o,
        children: t.jsx("div", {
            children: t.jsx(ha, {
                ignoreOpacity: !0,
                children: t.jsxs("div", {
                    style: {
                        display: "flex",
                        alignItems: n ? "flex-start" : "center"
                    },
                    children: [t.jsxs(h, {
                        children: ["We use cookies to provide you with a great user experience. By using this website, you agree to our", " ", t.jsx("a", {
                            href: "https://beacons.ai/i/cookie-notice",
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                color: "inherit"
                            },
                            children: "use of cookies."
                        })]
                    }), t.jsx(Ye, {
                        size: "small",
                        onClick: ()=>i(!1),
                        children: t.jsx(tt, {
                            style: {
                                fill: a.text.color
                            }
                        })
                    })]
                })
            })
        })
    })
}
function _r({image: e, blockId: s, fullWidth: a}) {
    const n = l.useContext(M)
      , {isComponent: o} = l.useContext(x)
      , [i,r] = l.useMemo(()=>e.aspect_ratio ? e.aspect_ratio.split(":") : [], [e.aspect_ratio])
      , _ = l.useMemo(()=>({
        margin: a && n.components.theme !== K.FULL_WIDTH ? "0 -20px" : "0"
    }), [a, n])
      , c = l.useMemo(()=>({
        paddingTop: `${r / i * 100}%`,
        borderRadius: n.components.theme === K.ROUND && !a ? "25px" : "0",
        width: "100%"
    }), [r, i, a, n.components.theme]);
    return t.jsx("div", {
        "data-testid": s,
        style: _,
        children: e.aspect_ratio ? t.jsx("div", {
            className: I({
                "cursor-pointer hover:opacity-70": !!e.url
            }),
            style: {
                ...c,
                backgroundImage: `url(${e.source})`,
                backgroundPosition: "center",
                backgroundSize: "cover"
            },
            onClick: ()=>{
                e.url && !o && (window.location = e.url)
            }
            ,
            role: "button",
            tabIndex: 0,
            "aria-label": "link"
        }) : t.jsx("span", {
            onClick: ()=>{
                e.url && !o && (window.location = e.url)
            }
            ,
            role: "button",
            tabIndex: 0,
            "aria-label": "link",
            children: t.jsx("img", {
                "aria-label": "block image",
                src: e.source,
                alt: "image_block upload",
                className: I("w-full object-cover", {
                    "cursor-pointer hover:opacity-90": !!e.url
                }),
                style: c
            })
        })
    })
}
function ur({block: e, blockId: s}) {
    const {isComponent: a} = l.useContext(x)
      , n = ie[g.IMAGES](e);
    return !n && a === ne ? t.jsx(_e, {
        title: "Image",
        cta: "Upload an image to remove this temporary placeholder."
    }) : n ? t.jsx(_r, {
        blockId: s,
        image: e.images[0],
        fullWidth: e.full_width
    }) : null
}
const N = {
    BUYMEACOFFEE: "buymeacoffee",
    KIT: "kit",
    KOFI: "kofi",
    LAYLO: "laylo",
    OPENSEA: "opensea",
    PIETRA: "pietra",
    PROVECHO: "provecho",
    PROXI: "proxi",
    QUIKPLACE: "quikplace",
    RUNTHEWORLD: "runtheworld",
    SPLIT: "split",
    WHYM: "whym",
    SHOPMYSHELF: "shopmyshelf",
    BOOKVID: "bookvid",
    TREND: "trend",
    OASIS: "oasis",
    TOPMATE: "topmate",
    BANDSINTOWN: "bandsintown",
    DEVELOPER: "developer"
}
  , ze = {
    [N.KOFI]: {
        name: N.KOFI,
        label: "Ko-fi",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-kofi.png",
        subtitle: "Accept donations and memberships.",
        helpLink: "https://ko-fi.com",
        longDescription: "Feature your Ko-fi donation panel to have all donations go directly to your Ko-fi account.",
        textfieldLabel: "Ko-fi username or profile URL",
        height: 247,
        textTransform: e=>e.includes("ko-fi.com/") && e.includes("embed=true") ? e : `https://ko-fi.com/${e.includes("ko-fi.com/") ? e.split("ko-fi.com/")[1].split("?")[0].split("#")[0] : e.trim()}/?compact=true&hidefeed=true&widget=true&embed=true`
    },
    [N.OPENSEA]: {
        name: N.OPENSEA,
        label: "OpenSea",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-opensea.png",
        subtitle: "Showcase your OpenSea NFT collection.",
        helpLink: "https://help.beacons.ai/en/articles/6439803-find-nft-embed-urls",
        longDescription: "Showcase and promote your OpenSea NFT collections",
        textfieldLabel: "OpenSea URL",
        height: 200,
        textTransform: e=>e.includes("opensea.io/") ? e : ""
    },
    [N.LAYLO]: {
        name: N.LAYLO,
        label: "Laylo",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-laylo.png",
        subtitle: "Promote new content to your fans.",
        helpLink: "https://laylo.com",
        longDescription: "Capture your fans' contact info and message them anytime you drop content, merch, or events.",
        textfieldLabel: "Laylo username or profile URL",
        height: 200,
        additionalOptions: [{
            label: "Theme",
            value: "theme",
            defaultValue: "light",
            updater: (e,s)=>qe(e, "theme", s),
            options: [{
                label: "Light",
                value: "light"
            }, {
                label: "Dark",
                value: "dark"
            }]
        }],
        textTransform: e=>e.includes("laylo.com") && e.includes("profile/embed") ? e : `https://laylo.com/${e.includes("laylo.com/") ? e.split("laylo.com/")[1].split("?")[0].split("#")[0] : e.trim()}/profile/embed`
    },
    [N.SPLIT]: {
        name: N.SPLIT,
        label: "Split",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-split.png",
        subtitle: "Split product profits with your audience.",
        helpLink: "https://www.split.co/?utm_source=beacons_splitblock",
        longDescription: "Showcase commissionable products and 'split' the commission with your audience.",
        textfieldLabel: "Split username or SplitPage URL",
        height: 300,
        textTransform: e=>e.includes("split.co/splitblock/") ? e : `https://www.split.co/splitblock/${e.includes("split.co/") ? e.split("split.co/")[1].split("?")[0].split("#")[0] : e.trim()}`
    },
    [N.QUIKPLACE]: {
        name: N.QUIKPLACE,
        label: "QuikPlace",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-quikplace.png",
        subtitle: "Display your QuikPlace profile.",
        helpLink: "https://quikplace.io/apply-influencer",
        longDescription: "Display your QuikPlace influencer profile, including your promotional offerings and price points.",
        textfieldLabel: "QuikPlace profile URL",
        height: 350,
        textTransform: e=>e.includes("quikplace.io") && e.includes("embed?id=") ? e : `https://quikplace.io/embed?id=${e.includes("quikplace.io") ? e.split("quikplace.io/influencer/")[1].split("?")[0].split("#")[0] : e.trim()}`
    },
    [N.PIETRA]: {
        name: N.PIETRA,
        label: "Pietra",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-pietra.png",
        subtitle: "Display your Pietra shop. ",
        helpLink: "https://pietrastudio.com/sell-on-pietra/register",
        longDescription: "Display your Pietra shop",
        textfieldLabel: "Pietra shop URL",
        height: 400,
        textTransform: e=>{
            const s = e.includes("www.pietrastudio.com");
            return s && e.includes("/embed/shop") ? e : `https://www.pietrastudio.com/embed/shop/${s ? e.split("pietrastudio.com/designers/")[1].split("?")[0].split("#")[0] : e.trim()}`
        }
    },
    [N.RUNTHEWORLD]: {
        name: N.RUNTHEWORLD,
        label: "RunTheWorld",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-runtheworld.png",
        subtitle: "Promote a RunTheWorld event.",
        helpLink: "https://www.runtheworld.today/app/get-started?from=organizer_center",
        longDescription: "Feature and promote an upcoming RunTheWorld event.",
        textfieldLabel: "Event page URL",
        height: 300,
        textTransform: e=>e.includes("runtheworld.today") && e.includes("/integration/") ? e : `https://www.runtheworld.today/app/integration/${e.includes("runtheworld.today/app/invitation/") ? e.split("runtheworld.today/app/invitation/")[1].split("?")[0].split("#")[0] : e}`
    },
    [N.KIT]: {
        name: N.KIT,
        label: "Kit",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-kit.png",
        subtitle: "Display your Kit collection.",
        helpLink: "https://kit.co/",
        longDescription: "Display your Kit collection.",
        textfieldLabel: "Kit collection URL",
        height: 300,
        textTransform: e=>e.includes("kit.co/v2/embed") ? e : e.includes("kit.co") ? `https://kit.co/v2/embed?url=${encodeURIComponent(e)}` : ""
    },
    [N.WHYM]: {
        name: N.WHYM,
        label: "WHYM.",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-whym.png",
        subtitle: "Sell one-page product collections.",
        helpLink: "https://www.whymwallet.com/seller",
        longDescription: "Let customers browse & buy from one-page product collections. Speed up your sales with Whym.",
        textfieldLabel: "Whym link URL",
        height: 400,
        textTransform: e=>{
            if (e.includes("whymwallet.com/beaconsai"))
                return e;
            let s = e;
            return e.includes("whym.cc/buy/") && (s = e.split("whym.cc/buy/")[1].split("?")[0].split("#")[0]),
            e.includes("whymwallet.com/buy/") && (s = e.split("whymwallet.com/buy/")[1].split("?")[0].split("#")[0]),
            `https://my.whymwallet.com/beaconsai/${s}`
        }
    },
    [N.PROVECHO]: {
        name: N.PROVECHO,
        label: "Provecho",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-provecho.png",
        subtitle: "Display your recipes.",
        helpLink: "https://www.provecho.bio/waitlist/user",
        longDescription: "Display your recipes",
        textfieldLabel: "Provecho username or profile URL",
        height: 360,
        textTransform: e=>e.includes("www.provecho.bio/beacons/") ? e : `https://www.provecho.bio/beacons/${e.includes("provecho.bio/") ? e.split("provecho.bio/")[1].split("?")[0].split("#")[0] : e}`
    },
    [N.BUYMEACOFFEE]: {
        name: N.BUYMEACOFFEE,
        label: "Buy Me a Coffee",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-buymeacoffee.png",
        subtitle: "Display your Buy Me a Coffee donation panel.",
        helpLink: "https://www.buymeacoffee.com/",
        longDescription: "Feature your Buy Me a Coffee donation panel",
        textfieldLabel: "BMC username",
        height: 290,
        textTransform: e=>`https://www.buymeacoffee.com/widget/page/${e.includes("buymeacoffee.com/widget/page/") ? e.split("buymeacoffee.com/widget/page/")[1].split("?")[0].split("#")[0] : e}?compact=true&hide_recents=true`
    },
    [N.PROXI]: {
        name: N.PROXI,
        label: "Proxi",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-proxi.png",
        subtitle: "Highlight your favorite spots.",
        helpLink: "https://www.proxi.co/templates",
        longDescription: "Highlight your favorite spots.",
        textfieldLabel: "Map embed url",
        height: 350,
        textTransform: e=>e
    },
    [N.SHOPMYSHELF]: {
        name: N.SHOPMYSHELF,
        label: "Shop My Shelf",
        image: "https://cdn.beacons.ai/images/integration_icons/shopmyshelf_logo.png",
        subtitle: "Copy the URL to a specific list.",
        helpLink: "https://shoplist.us/welcome#apply",
        longDescription: "Share your favorite products in beauty & fashion and earn when your audience buys",
        textfieldLabel: "URL for a specific list",
        height: 360,
        textTransform: e=>{
            var n;
            const s = (n = e.split("://")[1] || e) == null ? void 0 : n.split("/")[0]
              , a = e.replace(/[^0-9]+/g, "");
            return `https://${s}/collections/embed/${a}`
        }
    },
    [N.BOOKVID]: {
        name: N.BOOKVID,
        label: "Bookvid",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-bookvid.png",
        subtitle: "Display your Bookvid booking page.",
        helpLink: " https://bookvid.com/",
        longDescription: "Feature your Bookvid booking page and get paid for Zoom calls with Venmo.",
        textfieldLabel: "Bookvid username",
        height: 300,
        textTransform: e=>`https://bookvid.com/${e.includes("bookvid.com/") ? e.split("bookvid.com/")[1].split("?")[0].split("#")[0].split("/")[0] : e}/embed`
    },
    [N.TREND]: {
        name: N.TREND,
        label: "Trend",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-trend.png",
        subtitle: "Display your creator portfolio.",
        helpLink: "https://creators.trend.io/",
        longDescription: "Feature your Trend creator portfolio and get hired by brands.",
        textfieldLabel: "Username or Profile URL",
        height: 360,
        textTransform: e=>`https://creators.trend.io/beacons-embed/${!!(e != null && e.includes("creators.trend.io/")) && e.split("creators.trend.io/")[1].split("?")[0].split("#")[0].split("/").pop() || e}`
    },
    [N.OASIS]: {
        name: N.OASIS,
        label: "Oasis",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-oasis.png",
        subtitle: "Get booked for social collabs and manage all your campaigns!",
        helpLink: "https://www.thisisoasis.com",
        longDescription: "Get booked for social collabs with one click and manage all your campaigns in one place.",
        textfieldLabel: "Enter Oasis Profile URL",
        height: 280,
        textTransform: e=>{
            var a;
            return `https://thisisoasis.com/${e != null && e.includes("thisisoasis.com/") ? (a = e.split("thisisoasis.com/")[1]) == null ? void 0 : a.split("/")[0] : e}/beacon`
        }
    },
    [N.TOPMATE]: {
        name: N.TOPMATE,
        label: "Topmate",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-topmate.png",
        subtitle: "Let followers book paid calls with you.",
        helpLink: "https://topmate.click/beacons",
        longDescription: "Let your followers book paid 1:1 sessions with you!",
        textfieldLabel: "Enter Topmate Profile URL",
        height: 400,
        textTransform: e=>`https://topmate.io/beacons/${!!(e != null && e.includes("topmate.io/")) && e.split("topmate.io/")[1].split("?")[0].split("#")[0].split("/").pop() || e}`
    },
    [N.BANDSINTOWN]: {
        name: N.BANDSINTOWN,
        label: "Bandsintown",
        image: "https://cdn.beacons.ai/images/block_icons/integrations-block-bandsintown.png",
        subtitle: "Share your tour dates.",
        helpLink: "https://manager.bandsintown.com/",
        longDescription: "Share tour dates and sell tickets to your fans.",
        textfieldLabel: "Bandsintown widget code",
        height: 400,
        textTransform: e=>e
    },
    [N.DEVELOPER]: {
        name: N.DEVELOPER,
        label: "Developer",
        image: "https://cdn.beacons.ai/images/block_icons/tablet-pen.svg",
        subtitle: "The iframe URL is passed straight through.",
        longDescription: "Developer block for cool developers like you!",
        textfieldLabel: "iframe URL",
        height: 350,
        textTransform: e=>e
    }
};
function Ar({block: e, blockId: s}) {
    const {isComponent: a} = l.useContext(x)
      , n = l.useMemo(()=>{
        var _;
        let r = 250;
        return (e == null ? void 0 : e.integration_type) === "developer" && (e != null && e.developer_height) ? r = e.developer_height : (_ = ze[e == null ? void 0 : e.integration_type]) != null && _.height && (r = ze[e.integration_type].height),
        r
    }
    , [e])
      , o = l.useMemo(()=>{
        var r;
        return !((r = ze[e.integration_type]) != null && r.additionalOptions) || !e.additional_values ? e.integration_url : ze[e.integration_type].additionalOptions.reduce((_,c)=>{
            const u = e.additional_values[c.value];
            return u ? c.updater(_, u) : _
        }
        , e.integration_url)
    }
    , [e])
      , i = ie[g.INTEGRATIONS](e);
    return !i && a === ne ? t.jsx(_e, {
        title: "Integrations",
        cta: "Select and configure an integration to remove this temporary placeholder."
    }) : i ? e != null && e.integration_url.includes("opensea.io") ? t.jsx(pr, {
        blockId: s,
        url: e.integration_url
    }) : (e == null ? void 0 : e.integration_type) === N.BANDSINTOWN ? t.jsx(dr, {
        blockId: s,
        url: e.integration_url
    }) : t.jsx(fe, {
        "data-testid": s,
        style: {
            backgroundColor: "#FFFFFF00",
            position: "relative",
            pointerEvents: !!a && "none"
        },
        children: t.jsx("iframe", {
            src: o,
            title: "integration",
            style: {
                border: "none",
                width: "100%",
                display: "block",
                height: n
            },
            scrolling: "no"
        })
    }) : null
}
function dr({url: e, blockId: s}) {
    const {isComponent: a} = l.useContext(x);
    l.useEffect(()=>{
        const o = document.createElement("script");
        o.src = "https://widgetv3.bandsintown.com/main.min.js",
        document.body.appendChild(o)
    }
    , [e]);
    const n = l.useMemo(()=>Ao.sanitize(e, {
        ALLOWED_TAGS: ["a"]
    }), [e]);
    return t.jsx(fe, {
        "data-testid": s,
        style: {
            backgroundColor: "#FFFFFF00",
            position: "relative",
            pointerEvents: !!a && "none",
            height: ze[N.BANDSINTOWN].height
        },
        dangerouslySetInnerHTML: {
            __html: n
        }
    }, n)
}
function pr({url: e, blockId: s}) {
    const {isComponent: a} = l.useContext(x)
      , n = e.split("/")
      , o = n[n.length - 2]
      , i = n[n.length - 1];
    return l.useEffect(()=>{
        const r = document.createElement("script");
        r.src = "https://unpkg.com/embeddable-nfts/dist/nft-card.min.js",
        document.body.appendChild(r)
    }
    , []),
    t.jsx(fe, {
        "data-testid": s,
        style: {
            padding: 0,
            backgroundColor: "#FFFFFF00",
            position: "relative"
        },
        children: t.jsx("nft-card", {
            contractAddress: o,
            tokenId: i,
            width: "100%",
            horizontal: "true",
            style: {
                pointerEvents: !!a && "none"
            }
        })
    })
}
function Er({href: e, isLastLink: s, animationClassname: a, linkProperties: n, handleLinkClick: o, imagePlaceholderStyle: i, remainingTime: r, linkTextColor: _, linkBackgroundColor: c}) {
    var m;
    const {iconBackground: u, getBackgroundImage: A, textColor: E} = Je({
        hasOpacity: !0,
        initialTextColor: _
    })
      , T = n == null ? void 0 : n.picture
      , d = A({
        picture: T,
        imagePlaceholderStyle: i
    });
    return t.jsx("div", {
        className: I("w-48 inline-block break-words shrink-0", {
            "mr-4": !s
        }),
        children: t.jsx(Xe, {
            href: e,
            linkProperties: n,
            handleLinkClick: o,
            children: t.jsxs(h, {
                className: `${a} overflow-hidden mb-2 h-full hover:scale-[1.02]`,
                children: [t.jsx(kt, {
                    linkType: oe.CAROUSEL,
                    picture: T,
                    backgroundImage: d,
                    iconBackground: u,
                    iconFillColor: E
                }), t.jsx("div", {
                    className: "whitespace-pre-line w-full h-full",
                    style: {
                        backgroundColor: c
                    },
                    children: t.jsxs(h, {
                        className: "title-small cursor-pointer px-4 py-3",
                        style: {
                            color: _
                        },
                        children: [n.title, be((m = n == null ? void 0 : n.countdown) == null ? void 0 : m.unix_time) ? t.jsx(Ue, {
                            remainingTime: r
                        }) : t.jsx("div", {
                            className: "text-small mt-2",
                            children: n.subtitle
                        })]
                    })
                })]
            })
        })
    })
}
function Nt({href: e, animationClassname: s, linkProperties: a, handleLinkClick: n, rightImage: o, shouldAddTopMargin: i, imagePlaceholderStyle: r, centerLeftRightText: _, remainingTime: c, linkTextColor: u}) {
    var R;
    const {backgroundColor: A, iconBackground: E, getBackgroundImage: T, textColor: d} = Je({
        hasOpacity: !0,
        initialTextColor: u
    })
      , m = a == null ? void 0 : a.picture
      , p = T({
        picture: m,
        imagePlaceholderStyle: r
    })
      , P = Ns(_, "center", o, "flex-end", "flex-start")
      , C = Ns(_, "center", o, "right", "left");
    return t.jsx(Xe, {
        href: e,
        linkProperties: a,
        handleLinkClick: n,
        children: t.jsxs(h, {
            className: `${s} LeftRightImageLink hover:scale-[1.02]`,
            style: {
                flexDirection: o ? "row-reverse" : "row",
                marginTop: i && 16
            },
            children: [t.jsx(kt, {
                linkType: oe.LEFT_RIGHT_IMAGE_TEXT,
                picture: a.picture,
                backgroundImage: p,
                iconBackground: E,
                iconFillColor: d
            }), t.jsx("div", {
                className: "TextSideWrapper",
                style: {
                    backgroundColor: A,
                    justifyContent: P,
                    width: "100%"
                },
                children: t.jsxs(h, {
                    className: "TextSide",
                    style: {
                        textAlign: C,
                        color: d,
                        wordBreak: "break-word"
                    },
                    children: [a.title, be((R = a == null ? void 0 : a.countdown) == null ? void 0 : R.unix_time) ? t.jsx(Ue, {
                        remainingTime: c
                    }) : t.jsx("div", {
                        className: "LinkSubtitle",
                        children: a.subtitle
                    })]
                })
            })]
        })
    })
}
function mr({href: e, animationClassname: s, linkProperties: a, handleLinkClick: n, imagePlaceholderStyle: o, usingColorFilter: i, multiColumnImageLinkNumColumns: r, remainingTime: _, linkTextColor: c}) {
    var m;
    const {iconBackground: u, getBackgroundImage: A, textColor: E} = Je({
        initialTextColor: c
    })
      , T = a == null ? void 0 : a.picture
      , d = A({
        picture: T,
        usingColorFilter: i,
        imagePlaceholderStyle: o
    });
    return t.jsx(Xe, {
        href: e,
        linkProperties: a,
        handleLinkClick: n,
        children: t.jsxs(h, {
            className: `${s} ImageOverlay twoColumnImage hover:scale-[1.02]`,
            tag: "center",
            style: {
                height: 0,
                paddingTop: "50%",
                paddingBottom: "50%"
            },
            children: [t.jsx(kt, {
                linkType: oe.MULTI_COLUMN_IMAGE,
                picture: T,
                iconBackground: u,
                backgroundImage: d,
                iconFillColor: E
            }), t.jsxs(h, {
                className: "LinkTitleWrapper",
                style: {
                    color: E,
                    padding: 18 - r * 4,
                    wordBreak: "break-word"
                },
                children: [t.jsx("div", {
                    className: "LinkTitle",
                    children: a.title
                }), be((m = a == null ? void 0 : a.countdown) == null ? void 0 : m.unix_time) ? t.jsx(Ue, {
                    remainingTime: _
                }) : t.jsx("div", {
                    className: "LinkSubtitle",
                    children: a.subtitle
                })]
            })]
        })
    })
}
function Oa({picture: e="", iconBackground: s, iconFillColor: a, aspectRatioPercentage: n, backgroundImage: o}) {
    const [i,r] = e == null ? void 0 : e.split(";source=");
    if (r === "simpleicons") {
        const u = Un(a);
        return t.jsx("div", {
            role: "figure",
            "aria-label": `image ${i} ${oe.ONE_COLUMN_IMAGE}`,
            alt: "link",
            className: "w-full bg-contain bg-center bg-no-repeat",
            style: {
                backgroundImage: `url(${po}${i}.svg)`,
                paddingTop: n,
                borderRadius: "inherit",
                filter: u
            }
        })
    }
    if (Object.values(Zi).includes(i)) {
        const {Icon: u} = Ca[i];
        return t.jsx("div", {
            style: {
                background: s,
                borderRadius: "inherit"
            },
            children: t.jsx(u, {
                "aria-label": `icon ${e} ${oe.ONE_COLUMN_IMAGE}`,
                fill: a,
                style: {
                    width: n,
                    height: "100%"
                }
            })
        })
    }
    return t.jsx("div", {
        role: "figure",
        "aria-label": `image ${e} ${oe.ONE_COLUMN_IMAGE}`,
        className: "w-full bg-cover bg-center",
        style: {
            backgroundImage: o,
            paddingTop: n,
            borderRadius: "inherit"
        }
    })
}
function Tr({href: e, animationClassname: s, linkProperties: a, handleLinkClick: n, shouldAddTopMargin: o, imagePlaceholderStyle: i, usingColorFilter: r, remainingTime: _, imageAspectRatio: c, linkTextColor: u}) {
    var R;
    const {iconBackground: A, getBackgroundImage: E, textColor: T} = Je({
        initialTextColor: u
    })
      , d = a == null ? void 0 : a.picture
      , m = E({
        picture: d,
        usingColorFilter: r,
        imagePlaceholderStyle: i
    });
    let p = 16
      , P = 9;
    c && ([p,P] = c.split(":"));
    const C = `${P / p * 100}%`;
    return t.jsx(Xe, {
        href: e,
        linkProperties: a,
        handleLinkClick: n,
        children: t.jsxs(h, {
            className: `${s} hover:scale-[1.02]`,
            tag: "center",
            style: {
                marginTop: o && 16,
                position: "relative",
                cursor: "pointer"
            },
            children: [t.jsx(Oa, {
                picture: d,
                iconFillColor: T,
                backgroundImage: m,
                iconBackground: A,
                aspectRatioPercentage: C
            }), t.jsx("div", {
                className: "PaddingL",
                style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "fit-content"
                },
                children: t.jsxs(h, {
                    style: {
                        color: T,
                        wordBreak: "break-word"
                    },
                    children: [t.jsx("div", {
                        className: "LinkTitle",
                        children: a.title
                    }), be((R = a == null ? void 0 : a.countdown) == null ? void 0 : R.unix_time) ? t.jsx(Ue, {
                        remainingTime: _
                    }) : t.jsx("div", {
                        className: "LinkSubtitle",
                        children: a.subtitle
                    })]
                })
            })]
        })
    })
}
function Pr({href: e, animationClassname: s, linkProperties: a, handleLinkClick: n, shouldAddTopMargin: o, imagePlaceholderStyle: i, usingColorFilter: r, remainingTime: _, imageAspectRatio: c, linkTextColor: u}) {
    var R;
    const {iconBackground: A, getBackgroundImage: E, textColor: T} = Je({
        initialTextColor: u
    })
      , d = a == null ? void 0 : a.picture
      , m = E({
        picture: d,
        usingColorFilter: r,
        imagePlaceholderStyle: i
    });
    let p = 16
      , P = 9;
    c && ([p,P] = c.split(":"));
    const C = `${P / p * 100}%`;
    return t.jsx(Xe, {
        href: e,
        linkProperties: a,
        handleLinkClick: n,
        children: t.jsxs(h, {
            className: I(`${s} cursor-pointer overflow-hidden relative hover:scale-[1.02]`, {
                "mt-4": o
            }),
            tag: "center",
            children: [t.jsx(Oa, {
                picture: d,
                iconFillColor: T,
                backgroundImage: m,
                iconBackground: A,
                aspectRatioPercentage: C
            }), t.jsx("div", {
                className: "w-full h-[30%] absolute bottom-0",
                style: {
                    background: "linear-gradient(0deg, black, transparent)"
                }
            }), t.jsx("div", {
                className: "absolute left-1/2 bottom-6 translate-x-[-50%] box-border",
                children: t.jsxs(h, {
                    style: {
                        wordBreak: "break-word"
                    },
                    children: [t.jsx("div", {
                        className: "text-18 font-bold !text-white",
                        children: a.title
                    }), be((R = a == null ? void 0 : a.countdown) == null ? void 0 : R.unix_time) ? t.jsx(Ue, {
                        remainingTime: _
                    }) : t.jsx("div", {
                        className: "text-12 whitespace-pre-wrap !text-white",
                        children: a.subtitle
                    })]
                })
            })]
        })
    })
}
const Ot = 55;
function fr({href: e, animationClassname: s, handleLinkClick: a, linkProperties: n, isLastLink: o, clickDisabled: i, isShadowOn: r, linkOutline: _, theme: c, remainingTime: u, linkTextColor: A}) {
    var P;
    const E = le()
      , T = Tt(r, c.components.opacity, c.button.background_color);
    let d = {
        color: A,
        fontSize: "15px",
        textTransform: "none",
        boxShadow: T
    }
      , m = {
        objectFit: "cover"
    }
      , p = _ ? A : "#FFFFFF00";
    switch (c.components.theme) {
    case K.SQUARE:
        d = {
            ...d,
            minHeight: 65,
            margin: "16px 0px",
            border: `2px solid ${p}`
        };
        break;
    case K.ROUND:
        d = {
            ...d,
            minHeight: 65,
            margin: "16px 0px",
            border: `2px solid ${p}`
        },
        m = {
            ...m,
            borderRadius: "50%"
        };
        break;
    case K.FULL_WIDTH:
        p === "#FFFFFF00" && (p = "#BBBBBB"),
        d = {
            ...d,
            minHeight: 64,
            borderTop: `1px solid ${p}`,
            borderBottom: o && `1px solid ${p}`,
            borderRight: E || i ? void 0 : `1px solid ${p}`,
            borderLeft: E || i ? void 0 : `1px solid ${p}`,
            boxShadow: "none"
        };
        break;
    case K.CUSTOM:
        d = {
            ...d,
            minHeight: 65,
            margin: "16px 0px",
            border: `2px solid ${p}`
        },
        m = {
            ...m,
            borderRadius: c.components.custom_border_radius
        };
        break
    }
    return t.jsx("center", {
        className: `${s} RowLink`,
        style: {
            position: "relative"
        },
        children: t.jsxs(xe, {
            variant: "contained",
            size: "large",
            fullWidth: !0,
            style: {
                ...d,
                display: "flex",
                paddingLeft: 0,
                paddingRight: 0
            },
            href: e,
            target: n != null && n.open_in_new_tab ? "_blank" : void 0,
            onClick: a,
            onAuxClick: a,
            allowOpacity: !0,
            "aria-label": n.title,
            rel: I({
                nofollow: !0,
                noopener: !0,
                noreferrer: !!(n != null && n.open_in_new_tab)
            }),
            children: [t.jsx("div", {
                className: "flex items-center justify-center",
                style: {
                    width: Ot,
                    minWidth: Ot
                },
                children: !!n.picture && t.jsx(ca, {
                    picture: n.picture,
                    iconFillColor: A,
                    imageStyle: m
                })
            }), t.jsxs("div", {
                style: {
                    paddingRight: Ot,
                    width: "100%",
                    minWidth: 0
                },
                children: [t.jsx("div", {
                    style: {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    },
                    children: n.title
                }), be((P = n == null ? void 0 : n.countdown) == null ? void 0 : P.unix_time) ? t.jsx(Ue, {
                    remainingTime: u
                }) : t.jsx("div", {
                    className: "LinkSubtitle",
                    style: {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    },
                    children: n.subtitle
                })]
            })]
        })
    })
}
function Cr({href: e, animationClassname: s, handleLinkClick: a, linkProperties: n, isLastLink: o, clickDisabled: i, isShadowOn: r, linkOutline: _, theme: c, remainingTime: u, linkTextColor: A}) {
    var P;
    const E = le()
      , T = Tt(r, c.components.opacity, c.button.background_color);
    let d = {
        color: A,
        fontSize: "15px",
        textTransform: "none",
        boxShadow: T
    }
      , m = {
        width: "100%",
        height: "auto",
        objectFit: "cover"
    }
      , p = _ ? A : "#FFFFFF00";
    switch (c.components.theme) {
    case K.SQUARE:
        d = {
            ...d,
            minHeight: 65,
            margin: "16px 0px",
            border: `2px solid ${p}`
        };
        break;
    case K.ROUND:
        d = {
            ...d,
            minHeight: 65,
            margin: "16px 0px",
            border: `2px solid ${p}`
        },
        m = {
            ...m,
            borderRadius: "50%"
        };
        break;
    case K.FULL_WIDTH:
        p === "#FFFFFF00" && (p = "#BBBBBB"),
        d = {
            ...d,
            minHeight: 65,
            borderTop: `1px solid ${p}`,
            borderBottom: o && `1px solid ${p}`,
            borderRight: E || i ? void 0 : `1px solid ${p}`,
            borderLeft: E || i ? void 0 : `1px solid ${p}`,
            boxShadow: "none"
        };
        break;
    case K.CUSTOM:
        d = {
            ...d,
            minHeight: 65,
            margin: "16px 0px",
            border: `2px solid ${p}`
        },
        m = {
            ...m,
            borderRadius: c.components.custom_border_radius
        };
        break
    }
    return t.jsx("center", {
        className: `${s} RowLink relative`,
        children: t.jsxs(xe, {
            variant: "contained",
            size: "large",
            fullWidth: !0,
            style: {
                ...d,
                display: "flex",
                paddingLeft: 0,
                paddingRight: 0
            },
            href: e,
            target: n != null && n.open_in_new_tab ? "_blank" : void 0,
            onClick: a,
            onAuxClick: a,
            allowOpacity: !0,
            "aria-label": n.title,
            rel: I({
                nofollow: !0,
                noopener: !0,
                noreferrer: !!(n != null && n.open_in_new_tab)
            }),
            children: [t.jsx("div", {
                className: "w-24 h-24 box-border overflow-hidden flex items-center justify-center ml-4",
                children: !!(n != null && n.picture) && t.jsx(ca, {
                    picture: n.picture,
                    iconFillColor: A,
                    imageStyle: m
                })
            }), t.jsxs("div", {
                className: "flex flex-col justify-end text-right w-full min-w-0 px-4",
                children: [t.jsx("div", {
                    className: "overflow-hidden truncate font-bold",
                    children: n.title
                }), be((P = n == null ? void 0 : n.countdown) == null ? void 0 : P.unix_time) ? t.jsx(Ue, {
                    remainingTime: u
                }) : t.jsx("div", {
                    className: "text-[.8em] whitespace-pre-wrap break-words",
                    children: n.subtitle
                })]
            })]
        })
    })
}
function Rr() {
    const e = window.location.hostname;
    return !["beacons.ai", "beacons.page"].includes(e)
}
function hr(e) {
    return e && e.animation ? `${e.animation}_small_infinite` : ""
}
function Zs({linkProperties: e, clickDisabled: s, utmMedium: a, utmSource: n, index: o, block: i, isTikTok: r, onRestrictedLinkClick: _, isLastLink: c=!1}) {
    var J;
    const u = le()
      , A = i.box_shadow
      , E = !!(i != null && i.center_left_right_text)
      , T = i.link_outline
      , d = i.link_type
      , m = i.placeholder_color1
      , p = i.placeholder_color2
      , P = i.placeholder_gradient_style
      , C = !!(i != null && i.using_color_filter)
      , R = i == null ? void 0 : i.multi_column_image_link_num_columns
      , b = i == null ? void 0 : i.one_column_image_aspect_ratio;
    let S = l.useContext(M);
    S = $(k, S);
    const {socialReferrer: O, displayUsername: y} = l.useContext(x)
      , v = (J = e == null ? void 0 : e.countdown) == null ? void 0 : J.unix_time
      , {remainingTime: B} = wn(v)
      , te = Rr()
      , L = !!r && Dt(e) && !te
      , U = Mn(s, e, a, n, L, B, y)
      , H = l.useCallback(async se=>{
        if (se.button === 2)
            return;
        const ae = u && se.button === 0;
        if (ae && se.preventDefault(),
        !s && !be(v)) {
            try {
                Z("public_actions", {
                    id: e.id,
                    action: "link_click",
                    social_referrer: O
                }),
                Pn({
                    method: "post",
                    url: "https://beacons.ai/api/rtanalytics/link_click",
                    data: {
                        linkId: e.id,
                        referrer: window.document.referrer
                    },
                    headers: {
                        "X-Beacons-Release": "10.266.0"
                    }
                }),
                la({
                    linkId: e.id,
                    url: U,
                    linkType: "link_in_bio"
                })
            } catch {}
            _(L),
            U && ae && (await ve(200),
            ua(U))
        } else
            se.preventDefault()
    }
    , [L, s, U, u, e.id, _, v, O])
      , W = hr(e)
      , Q = Dn(m, p, P)
      , q = S.text.link_text_color || S.text.color
      , D = S.button.background_color
      , F = o > 0 && S.components.theme !== K.FULL_WIDTH;
    switch (d) {
    case oe.LEFT_RIGHT_IMAGE_TEXT:
        return t.jsx(Nt, {
            href: U,
            animationClassname: W,
            linkProperties: e,
            handleLinkClick: H,
            rightImage: !!(o % 2),
            shouldAddTopMargin: F,
            imagePlaceholderStyle: Q,
            theme: S,
            centerLeftRightText: E,
            remainingTime: B,
            linkTextColor: q
        });
    case oe.IMAGE_AND_TEXT_RIGHT:
        return t.jsx(Nt, {
            href: U,
            animationClassname: W,
            linkProperties: e,
            handleLinkClick: H,
            rightImage: !1,
            shouldAddTopMargin: F,
            imagePlaceholderStyle: Q,
            theme: S,
            centerLeftRightText: E,
            remainingTime: B,
            linkTextColor: q
        });
    case oe.IMAGE_AND_TEXT_LEFT:
        return t.jsx(Nt, {
            href: U,
            animationClassname: W,
            linkProperties: e,
            handleLinkClick: H,
            rightImage: !0,
            shouldAddTopMargin: F,
            imagePlaceholderStyle: Q,
            theme: S,
            centerLeftRightText: E,
            remainingTime: B,
            linkTextColor: q
        });
    case oe.ONE_COLUMN_IMAGE:
        return t.jsx(Tr, {
            href: U,
            animationClassname: W,
            linkProperties: e,
            handleLinkClick: H,
            shouldAddTopMargin: F,
            imagePlaceholderStyle: Q,
            usingColorFilter: C,
            remainingTime: B,
            imageAspectRatio: b,
            linkTextColor: q
        });
    case oe.MULTI_COLUMN_IMAGE:
        return t.jsx(mr, {
            href: U,
            animationClassname: W,
            linkProperties: e,
            handleLinkClick: H,
            imagePlaceholderStyle: Q,
            usingColorFilter: C,
            multiColumnImageLinkNumColumns: R,
            remainingTime: B,
            linkTextColor: q
        });
    case oe.CLASSIC_LARGE:
        return t.jsx(Cr, {
            href: U,
            animationClassname: W,
            handleLinkClick: H,
            isLastLink: c,
            linkProperties: e,
            clickDisabled: s,
            isShadowOn: A,
            linkOutline: T,
            theme: S,
            remainingTime: B,
            imagePlaceholderStyle: Q,
            linkTextColor: q
        });
    case oe.IMAGE_CARD:
        return t.jsx(Pr, {
            href: U,
            animationClassname: W,
            linkProperties: e,
            handleLinkClick: H,
            shouldAddTopMargin: F,
            imagePlaceholderStyle: Q,
            usingColorFilter: C,
            remainingTime: B,
            imageAspectRatio: b,
            linkTextColor: q
        });
    case oe.CAROUSEL:
        return t.jsx(Er, {
            href: U,
            isLastLink: c,
            animationClassname: W,
            linkProperties: e,
            handleLinkClick: H,
            imagePlaceholderStyle: Q,
            remainingTime: B,
            linkTextColor: q,
            linkBackgroundColor: D
        });
    default:
        return t.jsx(fr, {
            href: U,
            animationClassname: W,
            handleLinkClick: H,
            isLastLink: c,
            linkProperties: e,
            clickDisabled: s,
            isShadowOn: A,
            linkOutline: T,
            theme: S,
            remainingTime: B,
            linkTextColor: q
        })
    }
}
function xr({block: e, blockId: s}) {
    const {headerTextColor: a, isComponent: n, isTikTok: o, utmMedium: i, utmSource: r} = l.useContext(x)
      , _ = l.useContext(M)
      , [c,u] = l.useState(!1)
      , {links: A} = e
      , E = e.link_type
      , T = e == null ? void 0 : e.multi_column_image_link_num_columns
      , d = n ? "Component" : ""
      , m = l.useCallback(y=>{
        y && u(!0)
    }
    , [])
      , p = ie[g.LINKS](e);
    if (!p && n === ne)
        return t.jsx(_e, {
            title: "Links",
            cta: "Add a link to remove this temporary placeholder."
        });
    const P = _.components.theme === K.FULL_WIDTH;
    let C = {};
    if (E === oe.MULTI_COLUMN_IMAGE && (C = {
        gridTemplateColumns: `repeat(${T}, minmax(0, 1fr))`
    },
    P || (C.gridGap = 20 - 4 * T)),
    !p)
        return null;
    const R = A.filter(y=>Bn(y, E))
      , b = e == null ? void 0 : e.description
      , S = e == null ? void 0 : e.headline;
    return (e == null ? void 0 : e.collapse_style) === ia.COLLAPSED ? t.jsxs("div", {
        "data-testid": s,
        children: [t.jsx(_a, {
            description: b,
            headline: S,
            isFullWidth: P,
            children: t.jsx("div", {
                "aria-label": "links block link buttons",
                className: I("Links mt-4", E, d),
                style: C,
                children: !!R && R.map((y,v)=>t.jsx(Zs, {
                    linkProperties: y,
                    isLastLink: v === R.length - 1,
                    clickDisabled: n,
                    utmMedium: i,
                    utmSource: r,
                    index: v,
                    block: e,
                    isTikTok: o,
                    onRestrictedLinkClick: m
                }, y.id))
            })
        }), t.jsx(rt, {
            open: c,
            setOpen: u
        })]
    }) : t.jsxs("div", {
        "data-testid": s,
        children: [!!S && t.jsx(h, {
            className: "text-center",
            style: {
                color: a
            },
            children: t.jsx("div", {
                className: "title",
                children: S
            })
        }), !!b && t.jsx(h, {
            className: I("text-16 text-center", {
                "mt-1": !!S
            }),
            style: {
                color: a
            },
            children: b
        }), t.jsxs("div", {
            "aria-label": "links block link buttons",
            className: I("Links", E, d, {
                "mt-4": !!b || !!S
            }),
            style: C,
            children: [!!R && R.map((y,v)=>t.jsx(Zs, {
                linkProperties: y,
                isLastLink: v === R.length - 1,
                clickDisabled: n,
                utmMedium: i,
                utmSource: r,
                index: v,
                block: e,
                isTikTok: o,
                onRestrictedLinkClick: m
            }, y.id)), t.jsx(rt, {
                open: c,
                setOpen: u
            })]
        })]
    })
}
function gr(e) {
    const s = {
        ...fn,
        ...e
    };
    return {
        header: {
            color: s.headerTextColor,
            type: "full",
            size: "small"
        },
        text: {
            color: s.buttonTextColor,
            hover_color: s.buttonTextHoverColor,
            font_family: "Roboto,sans-serif"
        },
        button: {
            background_color: s.buttonBackgroundColor.substring(0, 7),
            hover_background_color: s.buttonBackgroundHoverColor.substring(0, 7)
        },
        card: {
            background_color: s.buttonBackgroundColor.substring(0, 7)
        },
        background: {
            image: s.backgroundStyle.split("@")[1] ? s.backgroundStyle.split("@")[1] : "",
            background_color1: s.backgroundColor,
            background_color2: s.backgroundColor2,
            filter: "none",
            type: s.backgroundStyle.split("@")[0]
        },
        links: {
            border_color: !0
        },
        components: {
            theme: "square",
            opacity: s.buttonBackgroundColor.length === 9 && s.buttonBackgroundColor.endsWith("BB") ? "BB" : ""
        }
    }
}
function br({pixelId: e}) {
    return l.useEffect(()=>{
        if (!e)
            return;
        window.facebookPixelId = e;
        const s = document.createElement("script");
        s.type = "text/javascript",
        s.src = "/third-party-scripts/facebook-pixel.js",
        document.head.appendChild(s);
        const a = document.createElement("noscript")
          , n = document.createElement("img");
        n.height = "1",
        n.width = "1";
        try {
            n.style = "display:none"
        } catch {}
        n.src = `https://www.facebook.com/tr?id=${e}&ev=PageView&noscript=1`,
        a.appendChild(n),
        document.head.appendChild(a)
    }
    , [e]),
    null
}
function Sr({tiktokPixelId: e}) {
    return l.useEffect(()=>{
        if (!e)
            return;
        window.tiktokPixelId = e;
        const s = document.createElement("script");
        s.type = "text/javascript",
        s.src = "/third-party-scripts/tiktok-pixel.js",
        document.head.appendChild(s)
    }
    , [e]),
    null
}
function yr({block: e, blockId: s}) {
    const {isComponent: a, beaconsUsername: n} = l.useContext(x)
      , {mediaKitDocument: o, hasCompletedSetupWizard: i} = To()
      , r = l.useMemo(()=>fo(Po.HEADER, o), [o])
      , _ = !!r && i
      , c = a === ne
      , u = l.useMemo(()=>{
        const A = window.location.origin
          , E = A === "https://beacons.ai" ? `${A}/${n}/mediakit` : `${A}/mediakit`;
        return qe(E, "origin", "lib")
    }
    , [n]);
    return !_ && c ? t.jsx(_e, {
        title: "Media Kit",
        cta: "Create your media kit to remove this temporary placeholder."
    }) : !_ && !c ? null : t.jsx(Ce, {
        "data-testid": s,
        className: I("relative hover:opacity-70", {
            "pointer-events-none": !!a
        }),
        padding: 0,
        children: t.jsxs("a", {
            href: u,
            style: {
                textDecoration: "none"
            },
            children: [t.jsx("div", {
                className: "w-full h-48 bg-black",
                children: !!(r != null && r.header_background_image_url) && t.jsx("img", {
                    className: "w-full h-48 opacity-30",
                    alt: "media kit background",
                    src: r.header_background_image_url
                })
            }), t.jsx(h, {
                className: "absolute w-full top-6",
                children: t.jsxs("div", {
                    className: "flex flex-col items-center text-white",
                    children: [t.jsx("div", {
                        className: "title",
                        children: e.title
                    }), t.jsx("div", {
                        className: "number-headline",
                        children: e.title_display_name || (r == null ? void 0 : r.nickname)
                    }), !!(r != null && r.header_creator_categories) && t.jsx("div", {
                        className: "flex flex-wrap items-center justify-center max-w-md mt-2",
                        children: r.header_creator_categories.map(({value: A})=>t.jsx("span", {
                            className: "px-3 py-2 mt-1 ml-2 border border-white border-solid rounded-full detail",
                            children: A
                        }, A))
                    })]
                })
            }), t.jsxs(h, {
                className: "p-6",
                children: [t.jsx("span", {
                    className: "uppercase opacity-50 text-12",
                    children: e.call_to_action
                }), t.jsx("div", {
                    className: "mt-2 font-bold text-22",
                    children: "View My Media Kit →"
                })]
            })]
        })
    })
}
function Ir({block: e, blockId: s}) {
    const {beaconsUsername: a} = l.useContext(x)
      , {username: n} = Cn()
      , o = n || a
      , i = Eo()
      , {mediaKitDocument: r, isLoading: _, hasCompletedSetupWizard: c} = kn(i == null ? void 0 : i.mediaKitDocument, o);
    return t.jsx(mo.Provider, {
        value: {
            mediaKitDocument: r,
            setMediaKitDocument: ()=>{}
            ,
            isLoading: _,
            hasCompletedSetupWizard: c
        },
        children: t.jsx(yr, {
            block: e,
            blockId: s
        })
    })
}
const Qe = {
    SPOTIFY: 380,
    SOUNDCLOUD: 351,
    SOUNDCLOUD_PLAYLIST: 450,
    APPLE_MUSIC: 450,
    BANDCAMP: 380
};
function Lr({block: e, blockId: s}) {
    var r, _, c, u;
    const {isComponent: a} = l.useContext(x)
      , n = ie[g.MUSIC](e);
    if (!n && a === ne)
        return t.jsx(_e, {
            title: "Music",
            cta: "Add a music embed URL to remove this temporary placeholder."
        });
    if (!n)
        return null;
    const o = (_ = (r = e.music_urls) == null ? void 0 : r[0]) == null ? void 0 : _.url
      , i = (u = (c = e.music_urls) == null ? void 0 : c[0]) == null ? void 0 : u.custom_height;
    return o.includes("spotify.com") ? t.jsx(Nr, {
        url: o,
        blockId: s,
        customHeight: i
    }) : o.includes("soundcloud.com") ? t.jsx(Or, {
        url: o,
        blockId: s,
        customHeight: i
    }) : o.includes("music.apple.com") || o.includes("podcasts.apple.com") ? t.jsx(jr, {
        url: o,
        blockId: s,
        customHeight: i
    }) : o.includes("bandcamp.com") ? t.jsx(vr, {
        url: o,
        blockId: s,
        customHeight: i
    }) : null
}
function Nr({url: e, blockId: s, customHeight: a}) {
    const {isComponent: n} = l.useContext(x)
      , o = a || Qe.SPOTIFY;
    return t.jsx(fe, {
        style: {
            backgroundColor: "#FFFFFF00",
            position: "relative",
            pointerEvents: n && "none"
        },
        "data-testid": s,
        children: t.jsx("iframe", {
            className: "w-full",
            style: {
                height: o
            },
            src: e,
            frameBorder: "0",
            allow: "encrypted-media",
            title: "spotify"
        })
    })
}
function Or({url: e, blockId: s, customHeight: a}) {
    const {isComponent: n} = l.useContext(x);
    let o = a;
    return o || (e.includes("playlists") ? o = Qe.SOUNDCLOUD_PLAYLIST : o = Qe.SOUNDCLOUD),
    t.jsx(fe, {
        style: {
            backgroundColor: "#FFFFFF00",
            position: "relative",
            pointerEvents: n && "none"
        },
        "data-testid": s,
        children: t.jsx("iframe", {
            className: "w-full",
            style: {
                height: o
            },
            scrolling: "no",
            frameBorder: "no",
            src: e,
            title: "soundcloud"
        })
    })
}
function jr({url: e, blockId: s, customHeight: a}) {
    const {isComponent: n} = l.useContext(x)
      , o = a || Qe.APPLE_MUSIC;
    return t.jsx(fe, {
        style: {
            backgroundColor: "#f8f8f8",
            pointerEvents: n && "none"
        },
        "data-testid": s,
        children: t.jsx("iframe", {
            className: "w-full",
            style: {
                height: o
            },
            allow: "autoplay *; encrypted-media *;",
            frameBorder: "0",
            sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation",
            src: e,
            title: "applemusic"
        })
    })
}
function vr({url: e, blockId: s, customHeight: a}) {
    const {isComponent: n} = l.useContext(x)
      , o = a || Qe.BANDCAMP;
    return t.jsx("div", {
        style: {
            pointerEvents: n && "none"
        },
        "data-testid": s,
        children: t.jsx("iframe", {
            className: "w-full border-0",
            style: {
                height: o
            },
            src: e,
            seamless: !0,
            title: "bandcamp"
        })
    })
}
function Ur({block: e}) {
    var n, o;
    const {isComponent: s} = l.useContext(x)
      , a = (o = (n = e.nft_urls) == null ? void 0 : n[0]) == null ? void 0 : o.url;
    return !a && s === ne ? t.jsx(_e, {
        title: "NFT",
        cta: "Add a NFT embed URL to remove this temporary placeholder."
    }) : a && a.includes("opensea.io") ? t.jsx(wr, {
        url: a
    }) : null
}
function wr({url: e}) {
    const {isComponent: s} = l.useContext(x)
      , a = e.split("/")
      , n = a[a.length - 2]
      , o = a[a.length - 1];
    return l.useEffect(()=>{
        const i = document.createElement("script");
        i.src = "https://unpkg.com/embeddable-nfts/dist/nft-card.min.js",
        document.body.appendChild(i)
    }
    , []),
    t.jsx(fe, {
        style: {
            backgroundColor: "#FFFFFF00",
            position: "relative"
        },
        children: t.jsx("nft-card", {
            contractAddress: n,
            tokenId: o,
            width: "100%",
            horizontal: "true",
            style: {
                pointerEvents: s && "none"
            }
        })
    })
}
var Zt = {}
  , Mr = ft;
Object.defineProperty(Zt, "__esModule", {
    value: !0
});
var ja = Zt.default = void 0
  , Dr = Mr(Pt())
  , Br = t
  , kr = (0,
Dr.default)((0,
Br.jsx)("path", {
    d: "M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z"
}), "Flag");
ja = Zt.default = kr;
const Be = {
    FACEBOOK: "https://www.facebook.com/sharer.php?u=",
    LINKEDIN: "https://www.linkedin.com/sharing/share-offsite/?url=",
    TWITTER: "https://twitter.com/intent/tweet?text=Check%20out%20this%20Beacons%20page!%20-%20",
    WHATSAPP: "https://wa.me/?text=Check%20out%20this%20Beacons%20page!%20-%20",
    MESSENGER: "https://www.messenger.com/new",
    EMAIL: "mailto:?subject= Check out this Beacons page! &body= Check out this Beacons page! - "
};
function jt({children: e, platform: s, href: a}) {
    return t.jsx("a", {
        "aria-label": `${s} share dialog link`,
        href: a,
        target: "_blank",
        rel: "noreferrer",
        className: "w-full hover:bg-gray-200 no-underline text-black flex items-center box-border p-2 border border-gray-200 border-solid rounded-8",
        children: e
    })
}
function Fr({open: e, onClose: s, displayUsername: a, profilePicUrl: n}) {
    const {sendToastMessage: o} = ra()
      , i = window.location
      , r = `${i.host}${i.pathname}`
      , _ = `${i.protocol}//${r}`
      , c = [{
        platform: Ne.FACEBOOK,
        content: "Share on Facebook",
        href: `${Be.FACEBOOK}${_}`
    }, {
        platform: Ne.LINKEDIN,
        content: "Share on LinkedIn",
        href: `${Be.LINKEDIN}${_}`
    }, {
        platform: Ne.TWITTER,
        content: "Share on Twitter",
        href: `${Be.TWITTER}${_}`
    }, {
        platform: Ne.WHATSAPP,
        content: "Share via WhatsApp",
        href: `${Be.WHATSAPP}${_}`
    }, {
        platform: Ne.MESSENGER,
        content: "Share via Messenger",
        href: `${Be.MESSENGER}`
    }];
    return t.jsxs(et, {
        open: e,
        onClose: s,
        primaryButton: {
            children: "Close",
            intent: "primary",
            onClick: s
        },
        hideX: !0,
        maxWidth: "xs",
        fullWidth: !0,
        children: [t.jsxs("center", {
            className: "pb-4",
            children: [t.jsx("img", {
                src: n,
                alt: "profile",
                style: {
                    height: 48,
                    width: 48
                },
                className: "rounded-full"
            }), t.jsx("div", {
                className: "truncate font-semibold uppercase pt-2",
                children: `Share @${a}'s Beacons`
            })]
        }), t.jsx(Ye, {
            size: "small",
            edge: "end",
            onClick: s,
            "aria-label": "close dialog",
            style: {
                position: "absolute",
                top: 12,
                right: 12
            },
            children: t.jsx(tt, {})
        }), t.jsxs("div", {
            "aria-label": "copy to clipboard share dialog button",
            role: "button",
            tabIndex: "0",
            onClick: ()=>{
                o("Link copied!"),
                ho(_)
            }
            ,
            className: "cursor-pointer hover:bg-gray-200 no-underline font-bold flex items-center p-2 py-3 border border-gray-200 border-solid rounded-8",
            children: [t.jsx("img", {
                alt: `${Lt[Ne.BEACONS].displayName} share dialog icon`,
                className: "rounded-4 mx-0.5 my-0 h-6 w-6 border border-gray-100 border-solid",
                src: Lt[Ne.BEACONS].imageUrl
            }), t.jsx("div", {
                className: "max-w-full truncate mx-2",
                children: r
            }), t.jsx(Co, {
                color: "disabled",
                className: "ml-auto !w-5 !h-5"
            })]
        }), t.jsx("hr", {
            className: "border border-gray-200 border-solid"
        }), t.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [c.map(({platform: u, content: A, href: E})=>{
                const {displayName: T, imageUrl: d} = Lt[u];
                return t.jsxs(jt, {
                    platform: u,
                    href: E,
                    children: [t.jsx("img", {
                        alt: `${T} share dialog icon`,
                        className: "rounded-4 mx-0.5 my-0 h-6 w-6 border border-gray-100 border-solid",
                        src: d
                    }), t.jsx("div", {
                        className: "mx-2",
                        children: A
                    }), t.jsx(It, {
                        color: "disabled",
                        className: "ml-auto !w-5 !h-5"
                    })]
                }, u)
            }
            ), t.jsxs(jt, {
                platform: "email",
                href: `${Be.EMAIL}${_}`,
                children: [t.jsx(Ro, {
                    className: "rounded-4 mx-0.5 my-0 h-6 w-6 border border-gray-100 border-solid"
                }), t.jsx("div", {
                    className: "mx-2",
                    children: "Share via Email"
                }), t.jsx(It, {
                    color: "disabled",
                    className: "ml-auto !w-5 !h-5"
                })]
            }), t.jsxs(jt, {
                platform: "report",
                href: "https://beacons.ai/i/report-violation",
                children: [t.jsx(ja, {
                    className: "rounded-4 mx-0.5 my-0 h-6 w-6 border border-gray-100 border-solid !fill-red"
                }), t.jsx("div", {
                    className: "mx-2",
                    children: "Report page"
                }), t.jsx(It, {
                    color: "disabled",
                    className: "ml-auto !w-5 !h-5"
                })]
            })]
        })]
    })
}
function Kr() {
    const e = navigator.userAgent || navigator.vendor || window.opera;
    return e ? /iPad|iPhone|iPod/.test(e) && !window.MSStream || e.includes("Mac") : !1
}
function Hr({borderRadius: e, isMobile: s, displayUsername: a, profilePicUrl: n}) {
    const [o,i] = l.useState(!1)
      , {isComponent: r} = l.useContext(x)
      , _ = async()=>{
        if (!r)
            if (navigator.share && s)
                try {
                    const A = window.location;
                    await navigator.share({
                        url: A.href
                    })
                } catch {}
            else
                i(!0)
    }
      , c = l.useCallback(()=>{
        i(!1)
    }
    , [])
      , u = Kr();
    return t.jsxs(t.Fragment, {
        children: [t.jsx(Ye, {
            size: "small",
            onClick: _,
            "aria-label": "launch share profile dialog",
            className: "w-8 h-8 z-50 bg-gray-100 flex items-center justify-center hover:bg-gray-100 hover:opacity-70",
            style: {
                borderRadius: e
            },
            children: u || r ? t.jsx(Qi, {
                alt: "share dialog icon",
                className: "h-5 w-5 text-gray-700"
            }) : t.jsx(ei, {
                alt: "share dialog icon",
                className: "h-5 w-5 text-gray-700"
            })
        }), t.jsx(Fr, {
            open: o,
            onClose: c,
            displayUsername: a,
            profilePicUrl: n
        })]
    })
}
var Qt = {}
  , Gr = ft;
Object.defineProperty(Qt, "__esModule", {
    value: !0
});
var va = Qt.default = void 0
  , Yr = Gr(Pt())
  , Vr = t
  , $r = (0,
Yr.default)((0,
Vr.jsx)("path", {
    d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
}), "NotificationsOutlined");
va = Qt.default = $r;
function Wr({baseProfileInfo: e, borderRadius: s, displayUsername: a, profilePicUrl: n}) {
    const o = l.useContext(M)
      , {isComponent: i} = l.useContext(x)
      , [r,_] = l.useState(!1)
      , c = l.useMemo(()=>{
        var T;
        return ((T = e == null ? void 0 : e.page_layout.find(d=>{
            const m = d == null ? void 0 : d.block_id
              , p = e == null ? void 0 : e[m];
            return (p == null ? void 0 : p.block_type) === g.EMAIL && !!(p != null && p.display)
        }
        )) == null ? void 0 : T.block_id) || "global"
    }
    , [e])
      , u = e == null ? void 0 : e[c]
      , A = u ? {
        ...Y[g.EMAIL].defaultBlock,
        ...u,
        collapse_style: Rn.EXPOSED
    } : {
        ...Y[g.EMAIL].defaultBlock,
        display: !0,
        show_name_field: !0
    };
    return t.jsxs(t.Fragment, {
        children: [t.jsx(hn, {
            variant: "secondary",
            size: "tiny",
            preIcon: t.jsx(va, {
                className: "text-gray-700 text-18"
            }),
            className: "!bg-gray-100 z-50",
            onClick: ()=>{
                i || _(!0)
            }
            ,
            style: {
                borderRadius: s,
                fontFamily: o.text.font_family
            },
            children: t.jsx("div", {
                className: "text-gray-700 text-small-bold",
                children: "Subscribe"
            })
        }), t.jsxs(xo, {
            open: r,
            onClose: ()=>_(!1),
            fullWidth: !0,
            maxWidth: "medium",
            className: "Profile",
            children: [t.jsxs("div", {
                className: "flex flex-col items-center mb-4",
                children: [t.jsx("img", {
                    src: n,
                    alt: "profile",
                    style: {
                        height: 80,
                        width: 80
                    },
                    className: "rounded-full"
                }), t.jsx("div", {
                    className: "title mt-4 text-center",
                    style: {
                        fontFamily: o.text.font_family
                    },
                    children: `Subscribe to ${a}`
                })]
            }), t.jsx(M.Provider, {
                value: {
                    ...k,
                    card: {
                        ...k.card,
                        outline: !0
                    },
                    components: {
                        ...k.components,
                        custom_border_radius: s,
                        theme: o.components.theme
                    }
                },
                children: t.jsx(xa, {
                    block: A,
                    blockId: c
                })
            })]
        })]
    })
}
function Ae({baseProfileInfo: e, isMobile: s, displayUsername: a, profilePicUrl: n}) {
    const o = l.useContext(M)
      , i = pt(o);
    return !o.show_subscribe_button && !o.show_share_button ? null : t.jsxs("div", {
        className: "flex",
        children: [o.show_subscribe_button && t.jsx("div", {
            className: I({
                "mr-2": o.show_share_button
            }),
            children: t.jsx(Wr, {
                baseProfileInfo: e,
                borderRadius: i,
                displayUsername: a,
                profilePicUrl: n
            })
        }), o.show_share_button && t.jsx("div", {
            className: "ml-auto",
            children: t.jsx(Hr, {
                borderRadius: i,
                isMobile: s,
                displayUsername: a,
                profilePicUrl: n
            })
        })]
    })
}
function Jt({accountMatch: e, pages: s, theme: a}) {
    const n = Et()
      , {displayUsername: o, isComponent: i, isCreatorPage: r} = l.useContext(x)
      , _ = pt(a)
      , [c,u] = l.useState(!1);
    return t.jsxs(t.Fragment, {
        children: [t.jsx(Ye, {
            className: "!bg-gray-100 z-50 w-8 h-8",
            onClick: ()=>{
                var A;
                if (!i)
                    u(!0);
                else {
                    let E = "home";
                    (A = e == null ? void 0 : e.params) != null && A.page && (E = e.params.page),
                    n.push(`${Pe}/${E}/home?pageManagement=1`)
                }
            }
            ,
            style: {
                borderRadius: _
            },
            children: t.jsx(Ji, {
                className: "text-gray-700"
            })
        }), t.jsx(go, {
            anchor: "left",
            open: c,
            onClose: ()=>u(!1),
            children: t.jsxs("div", {
                className: "ProfileHamburgerNavigation",
                style: {
                    backgroundColor: a.button.background_color,
                    height: "100vh"
                },
                children: [t.jsx("div", {
                    onClick: ()=>u(!1),
                    style: {
                        display: "flex",
                        flexDirection: "row-reverse"
                    },
                    role: "button",
                    tabIndex: "0",
                    children: t.jsx(tt, {
                        style: {
                            fill: a.text.color
                        }
                    })
                }), s.map(A=>A.display ? t.jsx(h, {
                    onClick: ()=>{
                        r ? n.push(`/${V(A.page_title)}`) : n.push(`/${o}/${V(A.page_title)}`),
                        u(!1)
                    }
                    ,
                    children: A.page_title
                }, A.page_id) : null)]
            })
        })]
    })
}
function zr({pages: e, baseProfileInfo: s, isMobile: a, displayUsername: n, profilePicUrl: o}) {
    var d, m, p;
    const i = pe(`${Pe}/:page/:panel?`)
      , r = pe("/:username/:page?")
      , _ = pe("/:page?");
    let c = l.useContext(M);
    c = $(k, c);
    const {isComponent: u, isCreatorPage: A} = l.useContext(x);
    if (!e || e.length < 2)
        return t.jsx("div", {
            className: I("absolute w-full top-4", {
                "lg:top-16": !u
            }),
            children: t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: a,
                displayUsername: n,
                profilePicUrl: o
            })
        });
    let E = "home";
    if (u) {
        const P = (d = i == null ? void 0 : i.params) == null ? void 0 : d.page
          , C = e.find(R=>R.page_id === P);
        C && (E = C.page_title)
    } else
        A ? (m = _ == null ? void 0 : _.params) != null && m.page && (E = _.params.page) : (p = r == null ? void 0 : r.params) != null && p.page && (E = r.params.page);
    if (e.reduce((P,C)=>C.display ? P + 1 : P, 0) < 2)
        return t.jsx("div", {
            className: I("absolute w-full top-4", {
                "lg:top-16": !u
            }),
            children: t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: a,
                displayUsername: n,
                profilePicUrl: o
            })
        });
    switch (c.page.navigation) {
    case "toptabs":
        return t.jsx("div", {
            className: I("absolute w-full top-4", {
                "lg:top-16": !u
            }),
            children: t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: a,
                displayUsername: n,
                profilePicUrl: o
            })
        });
    default:
        return t.jsxs("div", {
            className: I("max-h-12 flex justify-between absolute w-full top-4", {
                "lg:top-16": !u
            }),
            children: [t.jsx(Jt, {
                accountMatch: i,
                pages: e,
                pageTitle: E,
                theme: c
            }), t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: a,
                displayUsername: n,
                profilePicUrl: o
            })]
        })
    }
}
function qr({pages: e, baseProfileInfo: s, headerLayout: a, isMobile: n, displayUsername: o, profilePicUrl: i}) {
    var m, p, P;
    const r = pe(`${Pe}/:page/:panel?`)
      , _ = pe("/:username/:page?")
      , c = pe("/:page?");
    let u = l.useContext(M);
    u = $(k, u);
    const {isComponent: A, isCreatorPage: E} = l.useContext(x);
    if (a && a !== re.CLASSIC)
        return null;
    if (!e || e.length < 2)
        return t.jsx("div", {
            className: "py-4",
            children: t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: n,
                displayUsername: o,
                profilePicUrl: i
            })
        });
    let T = "home";
    if (A) {
        const C = (m = r == null ? void 0 : r.params) == null ? void 0 : m.page
          , R = e.find(b=>b.page_id === C);
        R && (T = R.page_title)
    } else
        E ? (p = c == null ? void 0 : c.params) != null && p.page && (T = c.params.page) : (P = _ == null ? void 0 : _.params) != null && P.page && (T = _.params.page);
    if (e.reduce((C,R)=>R.display ? C + 1 : C, 0) < 2)
        return t.jsx("div", {
            className: "py-4",
            children: t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: n,
                displayUsername: o,
                profilePicUrl: i
            })
        });
    switch (u.page.navigation) {
    case "toptabs":
        return t.jsxs("div", {
            className: "pb-4",
            children: [t.jsx(Qs, {
                accountMatch: r,
                pages: e,
                theme: u,
                pageTitle: T
            }), t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: n,
                displayUsername: o,
                profilePicUrl: i
            })]
        });
    case "bottomtabs":
        return t.jsxs("div", {
            className: "py-4",
            children: [t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: n,
                displayUsername: o,
                profilePicUrl: i
            }), t.jsx(Qs, {
                accountMatch: r,
                pages: e,
                theme: u,
                pageTitle: T,
                isTop: !1
            })]
        });
    default:
        return t.jsxs("div", {
            className: "flex justify-between pt-4 pb-6",
            children: [t.jsx(Jt, {
                accountMatch: r,
                pages: e,
                pageTitle: T,
                theme: u
            }), t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: n,
                displayUsername: o,
                profilePicUrl: i
            })]
        })
    }
}
function Qs({accountMatch: e, pages: s, pageTitle: a, theme: n, isTop: o=!0}) {
    const i = Et()
      , r = le()
      , {displayUsername: _, isComponent: c, isCreatorPage: u} = l.useContext(x)
      , A = o ? n.components.opacity : "ff"
      , E = n.card.background_color + A
      , T = c ? "transparent" : n.text.color;
    let d = V(a);
    s.find(C=>V(C.page_title) === d && C.display) || (d = !1);
    const P = !(n.components.theme === "fullWidth") && o;
    return t.jsxs(Ft, {
        maxWidth: "sm",
        className: I("translate-x-[-50%] ml-[50%] !py-0 h-12", {
            "fixed bottom-9 z-[1000] left-0 !px-0": !o,
            "mb-4": o,
            "max-w-full": !!c
        }),
        style: {
            paddingLeft: c && 0,
            paddingRight: c && 0
        },
        children: [!o && t.jsx("div", {
            style: {
                height: 36
            }
        }), t.jsx(ga, {
            value: d,
            scrollButtons: c ? !1 : "auto",
            variant: !r && !c ? "fullWidth" : "scrollable",
            onChange: (C,R)=>{
                var b;
                if (!c)
                    u ? i.push(`/${V(R)}`) : i.push(`/${_}/${V(R)}`);
                else {
                    let S = "home";
                    if (!!((b = e == null ? void 0 : e.params) != null && b.page)) {
                        const y = s.filter(v=>V(v.page_title) === V(R));
                        y != null && y.length && (S = y[0].page_id)
                    }
                    i.push(`${Pe}/${S}/home`)
                }
            }
            ,
            className: I({
                "-mx-5": P
            }),
            style: {
                backgroundColor: E,
                width: P ? "calc(100% + 40px)" : "100%"
            },
            TabIndicatorProps: {
                style: {
                    height: 4,
                    backgroundColor: T
                }
            },
            children: s.map((C,R)=>C.display ? t.jsx(ba, {
                className: I("normal-case max-w-[150px] max-h-[75px] min-w-[72px] border-b-4 border-solid border-transparent", {
                    "!pr-12": o && R === s.length - 1 && r
                }),
                value: V(C.page_title),
                href: `/${_}/${V(C.page_title)}`,
                onClick: b=>b.preventDefault(),
                label: C.page_title,
                style: {
                    color: n.text.color,
                    fontFamily: n.text.font_family
                }
            }, C.page_id) : null)
        })]
    })
}
function Zr({pages: e, baseProfileInfo: s, isMobile: a, displayUsername: n, profilePicUrl: o}) {
    var d, m, p;
    const i = pe(`${Pe}/:page/:panel?`)
      , r = pe("/:username/:page?")
      , _ = pe("/:page?");
    let c = l.useContext(M);
    c = $(k, c);
    const {isComponent: u, isCreatorPage: A} = l.useContext(x);
    if (!e || e.length < 2)
        return t.jsx("div", {
            className: "py-4",
            children: t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: a,
                displayUsername: n,
                profilePicUrl: o
            })
        });
    let E = "home";
    if (u) {
        const P = (d = i == null ? void 0 : i.params) == null ? void 0 : d.page
          , C = e.find(R=>R.page_id === P);
        C && (E = C.page_title)
    } else
        A ? (m = _ == null ? void 0 : _.params) != null && m.page && (E = _.params.page) : (p = r == null ? void 0 : r.params) != null && p.page && (E = r.params.page);
    if (e.reduce((P,C)=>C.display ? P + 1 : P, 0) < 2)
        return t.jsx("div", {
            className: "py-4",
            children: t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: a,
                displayUsername: n,
                profilePicUrl: o
            })
        });
    switch (c.page.navigation) {
    case "toptabs":
        return t.jsx("div", {
            className: "py-4",
            children: t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: a,
                displayUsername: n,
                profilePicUrl: o
            })
        });
    default:
        return t.jsxs("div", {
            className: "max-h-12 flex justify-between py-4",
            children: [t.jsx(Jt, {
                accountMatch: i,
                pages: e,
                pageTitle: E,
                theme: c
            }), t.jsx(Ae, {
                baseProfileInfo: s,
                isMobile: a,
                displayUsername: n,
                profilePicUrl: o
            })]
        })
    }
}
function Qr({pages: e, baseProfileInfo: s, headerLayout: a, isMobile: n, displayUsername: o, profilePicUrl: i}) {
    switch (a) {
    case re.PORTRAIT:
        return t.jsx(Zr, {
            pages: e,
            baseProfileInfo: s,
            isMobile: n,
            displayUsername: o,
            profilePicUrl: i
        });
    case re.BANNER:
        return t.jsx(zr, {
            pages: e,
            baseProfileInfo: s,
            isMobile: n,
            displayUsername: o,
            profilePicUrl: i
        });
    case re.CLASSIC:
    default:
        return t.jsx(qr, {
            pages: e,
            baseProfileInfo: s,
            isMobile: n,
            displayUsername: o,
            profilePicUrl: i
        })
    }
}
function Jr({authoritativeHeaderBlock: e, pages: s}) {
    var A, E, T;
    const a = pe(`${Pe}/:page/:panel?`)
      , n = pe("/:username/:page?")
      , o = pe("/:page?");
    let i = l.useContext(M);
    i = $(k, i);
    const {isComponent: r, isCreatorPage: _} = l.useContext(x);
    if ((e == null ? void 0 : e.header_layout) !== re.PORTRAIT && (e == null ? void 0 : e.header_layout) !== re.BANNER)
        return null;
    let c = "home";
    if (r) {
        const d = (A = a == null ? void 0 : a.params) == null ? void 0 : A.page
          , m = s.find(p=>p.page_id === d);
        m && (c = m.page_title)
    } else
        _ ? (E = o == null ? void 0 : o.params) != null && E.page && (c = o.params.page) : (T = n == null ? void 0 : n.params) != null && T.page && (c = n.params.page);
    if (s.reduce((d,m)=>m.display ? d + 1 : d, 0) < 2)
        return null;
    switch (i.page.navigation) {
    case "toptabs":
        return t.jsx("div", {
            className: "w-full mb-4 -mt-4",
            children: t.jsx(Xr, {
                accountMatch: a,
                pages: s,
                theme: i,
                pageTitle: c
            })
        });
    default:
        return null
    }
}
function Xr({accountMatch: e, pages: s, pageTitle: a, theme: n, paddingTop: o, isTop: i=!0}) {
    const r = Et()
      , _ = le()
      , {displayUsername: c, isComponent: u, isCreatorPage: A} = l.useContext(x)
      , E = u ? "transparent" : n.text.color;
    let T = V(a);
    return s.find(m=>V(m.page_title) === T && m.display) || (T = !1),
    t.jsxs(Ft, {
        maxWidth: "sm",
        className: I("!py-0 h-12", {
            "fixed bottom-9 z-[1000] left-0 !px-0": !i,
            "mb-2": i,
            "max-w-full": !!u
        }),
        style: {
            paddingLeft: u && 0,
            paddingRight: u && 0
        },
        children: [!i && t.jsx("div", {
            style: {
                height: o
            }
        }), t.jsx(ga, {
            value: T,
            scrollButtons: u ? !1 : "auto",
            variant: !_ && !u ? "fullWidth" : "scrollable",
            onChange: (m,p)=>{
                var P;
                if (!u)
                    A ? r.push(`/${V(p)}`) : r.push(`/${c}/${V(p)}`);
                else {
                    let C = "home";
                    if (!!((P = e == null ? void 0 : e.params) != null && P.page)) {
                        const b = s.filter(S=>V(S.page_title) === V(p));
                        b != null && b.length && (C = b[0].page_id)
                    }
                    r.push(`${Pe}/${C}/home`)
                }
            }
            ,
            style: {
                background: "transparent"
            },
            TabIndicatorProps: {
                style: {
                    height: 4,
                    backgroundColor: E
                }
            },
            children: s.map(m=>m.display ? t.jsx(ba, {
                className: I("normal-case max-w-[150px] max-h-[75px] min-w-[72px] border-b-4 border-solid border-transparent"),
                value: V(m.page_title),
                href: `/${c}/${V(m.page_title)}`,
                onClick: p=>p.preventDefault(),
                label: m.page_title,
                style: {
                    color: n.text.color,
                    fontFamily: n.text.font_family
                }
            }, m.page_id) : null)
        })]
    })
}
function el({block: e}) {
    const s = l.useContext(M)
      , {isComponent: a} = l.useContext(x)
      , {socialStatistics: n} = yo()
      , o = Fn(n)
      , i = a === ne;
    if (!(o != null && o.length) && i)
        return t.jsx(_e, {
            title: "Follower count",
            cta: "Connect a social account to remove this temporary placeholder."
        });
    if (!(o != null && o.length))
        return null;
    const r = Kn(e == null ? void 0 : e.followers_counts, o);
    return r.every(({display: c})=>!c) ? null : t.jsx("div", {
        className: "flex items-center gap-2",
        children: r.map(({platform: c, platform_profile_id: u, display: A})=>{
            if (!A)
                return null;
            const E = o.find(({platformProfileId: d})=>d === u);
            if ((E == null ? void 0 : E.count) === void 0 || (E == null ? void 0 : E.count) === null)
                return null;
            const {Icon: T} = Ca[c];
            return t.jsx("a", {
                "aria-label": `profile followers ${c} - link`,
                href: (E == null ? void 0 : E.url) || "",
                rel: "noreferrer",
                target: "_blank",
                className: I({
                    "cursor-pointer": !!(E != null && E.url)
                }, "flex-1 text-center no-underline"),
                children: t.jsx(Ce, {
                    className: "!p-2",
                    style: {},
                    children: t.jsxs(h, {
                        children: [t.jsx(T, {
                            fill: s.text.color,
                            "aria-label": `profile followers ${c} logo`,
                            className: "h-6 w-6"
                        }), (E == null ? void 0 : E.count) && t.jsx("div", {
                            children: na(E.count)
                        })]
                    })
                })
            }, u)
        }
        )
    })
}
function tl({block: e, blockId: s}) {
    const {firebaseUid: a} = l.useContext(x);
    return t.jsx(So, {
        firebaseUid: a,
        children: t.jsx(el, {
            block: e,
            blockId: s
        })
    })
}
const sl = e=>l.createElement("svg", {
    width: 17,
    height: 21,
    viewBox: "0 0 17 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
}, l.createElement("path", {
    d: "M1 13.9078C1.00001 13.5518 1.02953 13.2273 1.08687 12.9316C1.60967 9.76976 4.45905 4.86813 8.73361 1.3182C8.9391 1.14755 9.24332 1.31968 9.21695 1.58548C8.81313 5.65538 9.41132 8.14833 10.2264 9.429C10.6841 10.1481 11.6772 10.4098 12.3579 9.8968C13.1139 9.32712 13.1784 8.3488 13.2444 7.3483C13.249 7.27831 13.2536 7.20822 13.2585 7.13814C13.2701 6.97114 13.4687 6.89882 13.5826 7.02143C15.7503 9.35322 15.7503 12.2654 15.7503 13.9078C15.7503 13.9077 15.7503 13.9078 15.7503 13.9078C15.7503 17.4004 12.4484 20.2318 8.37516 20.2318C4.30197 20.2318 1 17.4004 1 13.9078C1 13.9078 1 13.9077 1 13.9078Z",
    fill: "#FF5C00"
}), l.createElement("path", {
    d: "M1 13.9078C1.00001 13.5518 1.02953 13.2273 1.08687 12.9316C1.60967 9.76976 4.45905 4.86813 8.73361 1.3182C8.9391 1.14755 9.24332 1.31968 9.21695 1.58548C8.81313 5.65538 9.41132 8.14833 10.2264 9.429C10.6841 10.1481 11.6772 10.4098 12.3579 9.8968C13.1139 9.32712 13.1784 8.3488 13.2444 7.3483C13.249 7.27831 13.2536 7.20822 13.2585 7.13814C13.2701 6.97114 13.4687 6.89882 13.5826 7.02143C15.7503 9.35322 15.7503 12.2654 15.7503 13.9078M1 13.9078C1 17.4004 4.30197 20.2318 8.37516 20.2318C12.4484 20.2318 15.7503 17.4004 15.7503 13.9078M1 13.9078C1 13.9077 1 13.9078 1 13.9078ZM15.7503 13.9078C15.7503 13.9078 15.7503 13.9077 15.7503 13.9078Z",
    stroke: "#FF5C00",
    strokeWidth: 1.5
}))
  , al = e=>l.createElement("svg", {
    width: 19,
    height: 17,
    viewBox: "0 0 19 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
}, l.createElement("path", {
    d: "M15.7201 2.07555C13.5201 0.575545 10.8034 1.27555 9.33677 2.99221C7.8701 1.27555 5.15343 0.567212 2.95343 2.07555C1.78677 2.87555 1.05343 4.22554 1.00343 5.65055C0.886766 8.88388 3.75343 11.4755 8.12843 15.4505L8.21177 15.5255C8.8451 16.1005 9.8201 16.1005 10.4534 15.5172L10.5451 15.4339C14.9201 11.4672 17.7784 8.87555 17.6701 5.64221C17.6201 4.22555 16.8868 2.87555 15.7201 2.07555Z",
    fill: "#FF0000",
    stroke: "#FF0000",
    strokeWidth: 1.5
}))
  , nl = e=>l.createElement("svg", {
    width: 21,
    height: 19,
    viewBox: "0 0 21 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
}, l.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.34085 6.23646L10.9575 1.6198C11.4408 1.12813 12.2242 1.12813 12.7158 1.61147C13.0158 1.91147 13.1408 2.33647 13.0575 2.75313L12.2658 6.5698H16.9742C18.7658 6.5698 19.9742 8.40313 19.2742 10.0531L16.5575 16.3948C16.2908 17.0031 15.6908 17.4031 15.0242 17.4031H7.52418C6.60751 17.4031 5.85751 16.6531 5.85751 15.7365V7.41147C5.85751 6.9698 6.03251 6.5448 6.34085 6.23646ZM1.46969 17.0843C1.45232 17.0838 1.43462 17.0833 1.41667 17.0833C1.39871 17.0833 1.38102 17.0838 1.36365 17.0843C1.15927 17.0903 1 17.0949 1 16.25V7.91666C1 7.07181 1.15927 7.07641 1.36364 7.08232C1.38102 7.08282 1.39871 7.08333 1.41667 7.08333C1.43462 7.08333 1.45232 7.08282 1.46969 7.08232C1.67406 7.07641 1.83333 7.07181 1.83333 7.91666V16.25C1.83333 17.0949 1.67406 17.0903 1.46969 17.0843Z",
    fill: "#0085FF",
    stroke: "#0085FF",
    strokeWidth: 1.5
}));
function Ua({style: e, src: s, alt: a, poster: n=void 0, ...o}) {
    let i = l.useContext(M);
    i = $(k, i);
    const _ = {
        borderRadius: pt(i),
        maxWidth: "100%",
        ...e
    };
    let c;
    return n || !Os(s, "video") ? c = s : c = `${s}#t=0.1`,
    Os(c, "video") ? t.jsxs("video", {
        style: _,
        poster: n,
        ...o,
        children: [t.jsx("source", {
            src: c,
            type: "video/mp4"
        }), t.jsx("track", {
            kind: "captions",
            srcLang: "en",
            label: "english_captions"
        })]
    }) : t.jsx("img", {
        src: c,
        alt: a,
        style: _,
        ...o
    })
}
function il() {
    const {recentVideoInteractions: e} = l.useContext(x)
      , [s,a] = l.useState([]);
    function n(u, A) {
        return A.filter(E=>E.content_id === u)
    }
    function o(u, A) {
        const E = ["like", "fire", "love"]
          , T = []
          , d = A.map(P=>{
            T.push(P.reaction_type);
            const C = (localStorage == null ? void 0 : localStorage.getItem(P.content_id + P.reaction_type)) === "true";
            return {
                reaction_count: P.reaction_count,
                reaction_type: P.reaction_type,
                content_id: P.content_id,
                toggled: C || !1
            }
        }
        )
          , p = E.filter(P=>!T.includes(P)).map(P=>({
            reaction_count: 0,
            reaction_type: P,
            content_id: u,
            toggled: !1
        }));
        return d.concat(p).sort((P,C)=>P.reaction_type.localeCompare(C.reaction_type))
    }
    l.useEffect(()=>{
        async function u() {
            if (e && !s.length) {
                const A = e.flatMap(E=>[E.request_content_id, E.response_content_id]);
                if (!A.length)
                    return;
                try {
                    const T = (await Z("manage_order", {
                        action: "get_reactions",
                        content_ids: A
                    })).data.content_reaction_info
                      , d = e.map(m=>{
                        const p = n(m.request_content_id, T)
                          , P = n(m.response_content_id, T);
                        return [o(m.request_content_id, p), o(m.response_content_id, P)]
                    }
                    );
                    a(d)
                } catch (E) {
                    console.log(E)
                }
            }
        }
        u()
    }
    , [e]);
    async function i(u) {
        try {
            await Z("manage_order", {
                action: "set_reactions",
                content_id: u.content_id,
                reaction_type: u.reaction_type,
                should_increment: u.toggled
            })
        } catch (A) {
            console.log(A)
        }
    }
    const r = u=>A=>E=>{
        const T = [...s]
          , d = T[u][A][E]
          , {toggled: m} = d
          , {reaction_count: p} = d;
        d.reaction_count = m ? p - 1 : p + 1,
        d.toggled = !m,
        localStorage == null || localStorage.setItem(d.content_id + d.reaction_type, d.toggled),
        T[u][A][E] = d,
        a(T),
        i(d)
    }
    ;
    if (!e || e.length === 0)
        return null;
    const _ = 3
      , c = e.slice(0, _);
    return t.jsx("center", {
        children: t.jsxs(fe, {
            style: {
                maxWidth: 450,
                paddingBottom: 15
            },
            children: [t.jsx(h, {
                tag: "center",
                style: {
                    marginTop: "15px",
                    fontSize: 18,
                    fontWeight: "bold"
                },
                children: "My recent requests"
            }), c.map((u,A)=>t.jsx(ol, {
                order: u,
                orderReactions: s[A],
                reactionSetter: r(A)
            }, u.id))]
        })
    })
}
function ol({order: e, orderReactions: s, reactionSetter: a}) {
    return t.jsxs("div", {
        style: {
            maxWidth: "450px"
        },
        children: [t.jsx(rl, {
            order: e,
            orderReactions: s,
            reactionSetter: a
        }), t.jsx(ll, {
            order: e,
            orderReactions: s,
            reactionSetter: a
        })]
    })
}
function rl({order: e, orderReactions: s, reactionSetter: a}) {
    let n = l.useContext(M);
    n = $(k, n);
    const o = 0;
    return e.media_instructions ? t.jsxs(h, {
        style: {
            marginTop: 15,
            borderTop: `1px solid ${n.text.color}33`,
            borderRadius: 0
        },
        tag: "center",
        children: [t.jsxs(h, {
            style: {
                marginTop: 10
            },
            children: [e.name && t.jsxs("span", {
                children: [e.name.split(" ")[0], "'s request: "]
            }), t.jsx(h, {
                style: {
                    marginTop: 5,
                    marginBottom: 5
                },
                tag: "p",
                children: e.instructions
            })]
        }), t.jsx(Ua, {
            controls: !0,
            src: `${e.media_instructions}?alt=media`,
            alt: "media instructions",
            autoPlay: !1
        }), !!s && s.length && t.jsx(h, {
            children: t.jsx(wa, {
                reactions: s[o],
                reactionSetter: a(o)
            })
        })]
    }) : null
}
const Js = (e,s)=>{
    const a = e.split(".");
    return a.pop(),
    a[a.length - 1] = a[a.length - 1] + s,
    a.join(".")
}
;
function ll({order: e, orderReactions: s, reactionSetter: a}) {
    const {displayUsername: n} = l.useContext(x)
      , o = 1
      , i = "_stitched.mp4?alt=media";
    let r = Js(e.video_url, i);
    const _ = "_poster.png?alt=media";
    let c = Js(e.video_url, _);
    e.media_instructions && (r = e.video_url,
    c = null);
    const u = 0
      , A = e.media_instructions ? null : "2px solid";
    return t.jsxs(h, {
        style: {
            marginTop: 10,
            borderTop: A,
            borderRadius: u
        },
        tag: "center",
        children: [t.jsx(h, {
            style: {
                marginBottom: 5,
                marginTop: 5
            },
            children: e.media_instructions ? t.jsxs("span", {
                children: [n.split("@")[0], "'s response: "]
            }) : e.name && t.jsxs("span", {
                children: [e.name.split(" ")[0], "'s request: "]
            })
        }), t.jsx(Ua, {
            controls: !0,
            src: r,
            autoPlay: !1,
            poster: c,
            alt: "response"
        }), !!s && s.length && t.jsx(wa, {
            reactions: s[o],
            reactionSetter: a(o)
        })]
    })
}
function wa({reactions: e, reactionSetter: s}) {
    const a = {
        like: t.jsx(nl, {}),
        love: t.jsx(al, {}),
        fire: t.jsx(sl, {})
    };
    return t.jsx("center", {
        style: {
            display: "flex",
            justifyContent: "space-between",
            maxWidth: 250
        },
        children: e.map((n,o)=>{
            const i = n.toggled ? "bold" : "normal"
              , r = n.toggled ? "rgb(0,0,0,0.1)" : null;
            return t.jsxs(xe, {
                variant: "text",
                onClick: ()=>s(o),
                style: {
                    fontWeight: i,
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: r
                },
                children: [a[n.reaction_type], " ", !!n.reaction_count && t.jsx("span", {
                    style: {
                        marginLeft: 5
                    },
                    children: n.reaction_count
                })]
            }, n.reaction_type)
        }
        )
    })
}
var Xt = {}
  , cl = ft;
Object.defineProperty(Xt, "__esModule", {
    value: !0
});
var Ma = Xt.default = void 0
  , _l = cl(Pt())
  , ul = t
  , Al = (0,
_l.default)((0,
ul.jsx)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked");
Ma = Xt.default = Al;
function dl({minBid: e, setMinBid: s, orderInfo: a, open: n, setOpen: o, setOrderInfo: i, setSuccessfullyPaid: r}) {
    const _ = l.useContext(xn)
      , {disablePayments: c} = l.useContext(x)
      , [u,A] = l.useState(!1)
      , [E,T] = l.useState("")
      , [d,m] = l.useState(0)
      , p = l.useMemo(()=>u && a.email && !Ke(a.email) ? "Email invalid" : "", [u, a.email]);
    l.useEffect(()=>{
        e === void 0 && s(a.bid)
    }
    , [e, s, a]);
    const P = l.useCallback(async O=>{
        const y = O.name.split(".").pop().toLowerCase()
          , v = `requests/${a.id}.${y}`;
        console.log(v);
        const B = {
            contentType: O.type
        }
          , te = _.getStorageRef(v)
          , L = _.uploadBytesResumable(te, O, B);
        return new Promise((U,H)=>{
            L.on("state_changed", W=>{
                const Q = W.bytesTransferred / W.totalBytes * 100;
                m(Q),
                console.log(`Upload is ${Q}% done`)
            }
            , W=>{
                console.log("Unsuccessful upload"),
                H(W)
            }
            , ()=>{
                U("")
            }
            )
        }
        )
    }
    , [_, a])
      , C = l.useCallback(async O=>{
        if (O != null && O.preventDefault && O.preventDefault(),
        c)
            return await ve(1e4),
            "deny";
        if (typeof a.media_instructions == "object" && await P(a.media_instructions),
        a.bid > 0) {
            const y = await Z("manage_order", {
                action: "create_payment_intent",
                order: a,
                order_type: "request"
            });
            return console.log(y),
            y.data.client_secret
        }
        return "freeOrder"
    }
    , [c, a, P])
      , R = l.useCallback(()=>{
        window.gtag && window.gtag("event", "purchase", {
            value: a.bid,
            currency: "USD",
            transaction_id: a.id,
            affiliation: "Requests",
            items: [{
                name: "Requests"
            }]
        })
    }
    , [a]);
    if (!a || !a.instructions || e === void 0)
        return null;
    const b = a.instructions.split("[Request prompt: ")[1].split("]")[0]
      , S = a.creator_username.length > 0 && a.instructions.length > b.length + 18 && a.name.length > 0 && Ke(a.email) && a.bid <= Bt;
    return t.jsxs(et, {
        title: `Send ${a.creator_username} a request`,
        open: n,
        onClose: ()=>o(!1),
        scroll: "body",
        children: [t.jsx("div", {
            children: b
        }), t.jsx("div", {
            className: "MarginTopM",
            children: t.jsx(de, {
                label: "Your email",
                id: "Your email",
                placeholder: "jane@example.com",
                InputProps: {
                    startAdornment: " "
                },
                value: a.email,
                onChange: O=>i({
                    email: O.target.value
                }),
                onBlur: ()=>A(!0),
                error: !!p,
                helperText: p,
                type: "email",
                autoComplete: "email",
                fullWidth: !0
            })
        }), t.jsx("div", {
            className: "MarginTopS",
            children: t.jsx(de, {
                label: "Your name",
                id: "Your name",
                placeholder: "Jane Doe",
                InputProps: {
                    startAdornment: " "
                },
                value: a.name,
                onChange: O=>i({
                    name: O.target.value
                }),
                autoComplete: "name",
                fullWidth: !0
            })
        }), t.jsx("div", {
            className: "MarginTopS",
            children: t.jsx(de, {
                label: "Your request",
                id: "Your request",
                placeholder: "I would like...",
                InputProps: {
                    startAdornment: " "
                },
                value: E,
                onChange: O=>{
                    E.length <= 250 && T(O.target.value.slice(0, 250))
                }
                ,
                onBlur: ()=>{
                    i({
                        instructions: `[Request prompt: ${b}] ${E}`
                    })
                }
                ,
                helperText: `${E.length}/250`,
                multiline: !0,
                fullWidth: !0
            })
        }), t.jsx("div", {
            className: "MarginTopS",
            children: t.jsx(pl, {
                orderInfo: a,
                setOrderInfo: i
            })
        }), e !== 0 && t.jsx("div", {
            className: "MarginTopL",
            children: t.jsx(Io, {
                state: a.make_private,
                text: "Make request private",
                onChange: ()=>i({
                    make_private: !a.make_private
                })
            })
        }), t.jsx("div", {
            className: "MarginTopL",
            children: t.jsx(El, {
                minBid: e,
                orderInfo: a,
                setOrderInfo: i
            })
        }), t.jsx("div", {
            className: "MarginTopL",
            children: t.jsx(Yt, {
                orderInfo: {
                    ...a,
                    media_instructions: typeof a.media_instructions == "object" ? js(`/requests/${a.id}.${a.media_instructions.name.split(".").pop().toLowerCase()}`) : ""
                },
                allowPay: S,
                orderType: Vt.REQUEST,
                paymentSuccessEndpoint: "create_request_paypal",
                setSuccessfullyPaid: r,
                isRequest: !0,
                dynamicHidePayment: !0,
                setSuccessfulPaymentCallback: R
            })
        }), t.jsx(Wt, {
            order: {
                ...a,
                media_instructions: typeof a.media_instructions == "object" ? js(`/requests/${a.id}.${a.media_instructions.name.split(".").pop().toLowerCase()}`) : ""
            },
            retrievePaymentIntent: C,
            setSuccessfullyPaid: r,
            allowPay: S,
            paymentSuccessEndpoint: "create_request_stripe",
            uploadProgress: d,
            dynamicHidePayment: !0,
            setSuccessfulPaymentCallback: R
        })]
    })
}
function pl({orderInfo: e, setOrderInfo: s}) {
    const {isComponent: a} = l.useContext(x);
    return typeof e.media_instructions == "object" ? t.jsx(ut, {
        intent: "primary",
        fullWidth: !0,
        onClick: ()=>s({
            media_instructions: ""
        }),
        children: "Reupload video/image"
    }) : t.jsxs("label", {
        htmlFor: "mediaUpload",
        children: [t.jsx("input", {
            accept: "video/mp4,video/x-m4v,video/*,image/*",
            id: "mediaUpload",
            style: {
                display: "none"
            },
            disabled: a,
            type: "file",
            onChange: n=>{
                n.target.files[0] && s({
                    media_instructions: n.target.files[0]
                })
            }
        }), t.jsx(ut, {
            intent: "primary",
            component: "span",
            fullWidth: !0,
            normalHeight: !0,
            children: "Upload video or image"
        })]
    })
}
function El({minBid: e, orderInfo: s, setOrderInfo: a}) {
    const [n,o] = l.useState(void 0)
      , [i,r] = l.useState("");
    return l.useEffect(()=>{
        o(s.bid),
        r(e === 0 ? "optional" : `minimum  $ ${e / 100}`)
    }
    , [e, s.bid]),
    t.jsx(de, {
        label: `Request cost (${i})`,
        id: `Request cost (${i})`,
        value: `${n / 100}`,
        onChange: _=>{
            const c = /^[0-9\b]+$/;
            if (_.target.value === "" || c.test(_.target.value)) {
                const u = Number(_.target.value) * 100;
                o(u)
            }
        }
        ,
        onBlur: ()=>{
            n >= e ? (a({
                bid: n
            }),
            e !== 0 && r(t.jsxs("span", {
                style: {
                    color: "#1c1c1c"
                },
                children: ["minimum $", e / 100]
            }))) : (a({
                bid: e
            }),
            o(e),
            r(t.jsxs("span", {
                style: {
                    color: "red",
                    fontWeight: "bold"
                },
                children: ["minimum $", e / 100]
            })))
        }
        ,
        InputProps: {
            startAdornment: "$",
            inputProps: {
                pattern: "[0-9]*",
                inputMode: "numeric"
            }
        },
        fullWidth: !0
    })
}
function ml({orderInfo: e, open: s, setOpen: a}) {
    const n = `Thank you for ${e.bid === 0 ? "your request" : `supporting ${e.creator_username}`}!`
      , o = t.jsxs("span", {
        children: ["You will get a confirmation email at ", t.jsx("strong", {
            children: e.email
        }), ". Please make sure to check your spam and promotions folders in case it gets misplaced.", " ", e.bid > 0 && t.jsxs("span", {
            children: ["Your card will only be charged once", " ", t.jsx("strong", {
                children: e.creator_username
            }), " responds. Otherwise, the", " ", t.jsxs("strong", {
                children: ["$", e.bid / 100]
            }), " hold on your card will be removed.", " "]
        }), "Join ", t.jsx("strong", {
            children: e.creator_username
        }), "'s community to receive future updates."]
    });
    return t.jsx(zt, {
        open: s,
        setOpen: a,
        mainCta: n,
        additionalInformation: o,
        acquisitionChannel: "requests_block"
    })
}
function Tl({block: e, blockId: s}) {
    const {isComponent: a, displayUsername: n, firebaseUid: o} = l.useContext(x)
      , i = e.request_form_title
      , {menu: r} = e
      , _ = e.skip_manual_approval_of_requests
      , [c] = l.useState(At())
      , {value: u, updateValue: A} = ct(()=>{
        var y, v, B;
        const R = Date.now() / 1e3
          , b = (y = r[0]) != null && y.fee ? r[0].fee * 100 : 0
          , S = (v = r[0]) != null && v.service ? r[0].service : "Ask anything!"
          , O = (B = r[0]) != null && B.request_id ? r[0].request_id : null;
        return {
            bid: b,
            instructions: `[Request prompt: ${S}]`,
            creator_username: n,
            firebase_uid: o,
            time_created: R,
            request_content_id: At(),
            media_url: "",
            name: "",
            status: _ ? "open" : "created",
            make_private: !1,
            email: "",
            request_id: O
        }
    }
    )
      , [E,T] = l.useState(void 0)
      , [d,m] = l.useState(!1)
      , [p,P] = l.useState(0);
    l.useEffect(()=>{
        A({
            id: c
        })
    }
    , [c]),
    l.useEffect(()=>{
        var R;
        A({
            bid: ((R = r[0]) == null ? void 0 : R.fee) * 100
        }),
        P(0)
    }
    , [r]);
    const C = ie[g.REQUESTS](e);
    return !u || !C ? null : t.jsxs(Ce, {
        "data-testid": s,
        children: [t.jsx(h, {
            tag: "center",
            style: {
                fontSize: 18,
                fontWeight: "bold"
            },
            "aria-label": "requests title",
            children: i
        }), t.jsx("div", {
            className: "MarginTopM",
            children: t.jsx(Pl, {
                menu: r,
                setMinBid: T,
                setOrderInfo: A,
                selected: p,
                setSelected: P
            })
        }), t.jsx("div", {
            className: "MarginTopM",
            children: t.jsx(xe, {
                variant: "contained",
                className: "CardButton",
                onClick: ()=>{
                    a || m(!0)
                }
                ,
                invert: !0,
                fullWidth: !0,
                "aria-label": `Start ${u.bid === 0 ? "Free" : `$ ${u.bid / 100}`} Request`,
                children: t.jsxs("span", {
                    style: {
                        padding: 6
                    },
                    children: ["Start ", u.bid === 0 ? "Free" : `$ ${u.bid / 100}`, " Request"]
                })
            })
        }), t.jsx(fl, {
            minBid: E,
            setMinBid: T,
            orderInfo: u,
            setOrderInfo: A,
            open: d,
            setOpen: m
        })]
    })
}
function Pl({setMinBid: e, setOrderInfo: s, menu: a, selected: n, setSelected: o}) {
    let i = l.useContext(M);
    i = $(k, i);
    const r = l.useCallback(_=>{
        s({
            bid: a[_].fee * 100,
            instructions: `[Request prompt: ${a[_].service}]`,
            request_id: a[_].request_id
        }),
        e(a[_].fee * 100),
        o(_)
    }
    , [a, s, e, o]);
    return a.length === 1 ? t.jsx(h, {
        className: "TextAlignCenter",
        "aria-label": "single request service",
        children: t.jsx(_t, {
            children: a[0].service
        })
    }) : t.jsx(h, {
        children: a.map((_,c)=>t.jsx("div", {
            style: {
                borderTop: c === 0 && `1px solid ${i.text.color}33`,
                borderBottom: `1px solid ${i.text.color}33`
            },
            className: "RequestForm",
            children: t.jsxs("div", {
                className: "FlexStart JustifySpaceBetween CursorPointer MarginTopS MarginBottomS",
                onClick: ()=>r(c),
                role: "button",
                tabIndex: "0",
                children: [t.jsx("span", {
                    children: c === n ? t.jsx(ti, {
                        style: {
                            fontSize: 20,
                            fill: i.text.color
                        }
                    }) : t.jsx(Ma, {
                        style: {
                            fontSize: 20,
                            fill: i.text.color
                        }
                    })
                }), t.jsx("span", {
                    style: {
                        marginLeft: 8,
                        marginRight: 8,
                        flex: "1 1 auto"
                    },
                    "aria-label": `multiple request service ${c}`,
                    children: t.jsx(_t, {
                        children: _.service
                    })
                }), t.jsxs("span", {
                    "aria-label": `multiple request fee ${c}`,
                    children: ["$", _.fee]
                })]
            })
        }, _.service))
    })
}
function fl({minBid: e, setMinBid: s, orderInfo: a, setOrderInfo: n, open: o, setOpen: i}) {
    const [r,_] = l.useState(!1);
    return o ? r ? t.jsx(ml, {
        orderInfo: a,
        open: o,
        setOpen: i
    }) : t.jsx(dl, {
        minBid: e,
        setMinBid: s,
        orderInfo: a,
        setOrderInfo: n,
        open: o,
        setOpen: i,
        setSuccessfullyPaid: _
    }) : null
}
const Da = "https://cdn.beacons.ai/images/file_icons/image.svg";
function Cl({block: e, blockId: s}) {
    const {isComponent: a} = l.useContext(x);
    let n = l.useContext(M);
    n = $(k, n);
    const o = n.components.theme === K.FULL_WIDTH
      , [i,r] = l.useState(-1)
      , [_,c] = l.useState([])
      , u = l.useRef(void 0);
    l.useEffect(()=>{
        (async()=>{
            const m = e.shop_contents.flatMap(b=>b.shop_products)
              , p = [...new Set(m)].sort();
            if (!p.length)
                return;
            let P = !0;
            if (u != null && u.current && p.length === u.current.length && (P = !u.current.every((b,S)=>b === p[S])),
            !P)
                return;
            u.current = p;
            const R = await Z(a ? "user_profile" : "public_actions", {
                action: "get_profile_content_shopping_products",
                product_ids: p
            });
            c(R.data.products)
        }
        )()
    }
    , [e, a]);
    let A = "8px 12px";
    o && (A = "0px");
    const E = l.useCallback(d=>{
        Z("user_profile", {
            action: "content_shopping_content_click",
            content_id: d
        })
    }
    , [])
      , T = ie[g.SHOPPABLECONTENT](e);
    return !T && a === ne ? t.jsx(_e, {
        title: "TikTok shopping",
        cta: "Add a title, subtitle, or TikTok video remove this temporary placeholder."
    }) : T ? t.jsxs(h, {
        "data-testid": s,
        children: [(!!e.shop_title || !!e.shop_subtitle) && t.jsxs(ha, {
            className: I({
                MarginBottomS: !o
            }),
            children: [!!e.shop_title && t.jsx(h, {
                tag: "center",
                style: {
                    fontSize: 18,
                    fontWeight: "bold"
                },
                children: e.shop_title
            }), !!e.shop_subtitle && t.jsx(h, {
                tag: "center",
                style: {
                    fontSize: 16,
                    marginTop: 8
                },
                children: e.shop_subtitle
            })]
        }), t.jsx("div", {
            className: "Grid2",
            style: {
                gap: A
            },
            children: e.shop_contents.map((d,m)=>d.display_content === !1 ? null : t.jsxs("div", {
                className: "ProfileShoppableContent",
                onClick: ()=>{
                    a || (r(m),
                    E(d.content_id))
                }
                ,
                role: "button",
                tabIndex: "0",
                children: [t.jsx(h, {
                    "aria-label": "profile tag",
                    className: "ProfileShoppableContentImage",
                    style: {
                        backgroundImage: `url(${d.thumbnail}), url(${Da})`
                    },
                    tag: "center"
                }), t.jsx(Lo, {
                    style: {
                        position: "absolute",
                        bottom: "5%",
                        left: "6%",
                        zIndex: 100,
                        fill: "white"
                    }
                })]
            }, d.content_id))
        }), t.jsx(hl, {
            open: i,
            setOpen: r,
            products: _,
            currentContent: e.shop_contents[i],
            title: e.shop_title
        })]
    }) : null
}
const Rl = vt.forwardRef(function(s, a) {
    return t.jsx(bo, {
        direction: "down",
        ref: a,
        ...s
    })
});
function hl({open: e, setOpen: s, products: a, currentContent: n, title: o}) {
    const i = le()
      , [r,_] = l.useState([]);
    l.useEffect(()=>{
        if (!a || !a.length || !n)
            return;
        const A = n.shop_products.map(E=>a.findIndex(T=>T.product_id === E)).map(E=>E < 0 ? null : a[E]);
        _(A)
    }
    , [a, n]);
    const c = l.useCallback(u=>()=>{
        u && Z("user_profile", {
            action: "content_shopping_product_click",
            content_id: n.content_id,
            product_id: u
        })
    }
    , [n]);
    return !a || !n ? null : t.jsx(Kt, {
        open: e >= 0,
        onClose: ()=>s(-1),
        fullScreen: i,
        TransitionComponent: Rl,
        children: t.jsxs(fe, {
            style: {
                maxWidth: !i && 400,
                borderRadius: 0,
                height: "100%",
                overflow: "auto"
            },
            children: [t.jsxs("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                },
                children: [t.jsx(h, {
                    style: {
                        fontSize: 16,
                        marginLeft: 4
                    },
                    children: o
                }), t.jsx(Ye, {
                    onClick: ()=>s(-1),
                    size: "large",
                    children: t.jsx(tt, {})
                })]
            }), t.jsxs("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                    justifyItems: "center"
                },
                children: [t.jsx("div", {
                    style: {
                        gridRow: "auto / span 2",
                        marginTop: -120
                    },
                    children: t.jsx(gl, {
                        videoId: n.tiktok_video_id
                    })
                }), r.map(u=>t.jsx(xl, {
                    product: u,
                    trackProductClick: c(u == null ? void 0 : u.product_id)
                }, u == null ? void 0 : u.product_id))]
            }), t.jsx("div", {
                style: {
                    height: "1vh"
                }
            })]
        })
    })
}
function xl({product: e, trackProductClick: s}) {
    let a = l.useContext(M);
    a = $(k, a);
    const n = a.components.theme === K.FULL_WIDTH;
    let o = {
        margin: "0px 4px 4px"
    }
      , i = {};
    if (n && (o = {},
    i = {
        margin: "0px 4px"
    }),
    !e)
        return null;
    const r = e.product_url.trim() ? e.product_url : null;
    return t.jsxs("a", {
        href: r,
        className: "ProfileShoppableProduct",
        onClick: s,
        onAuxClick: s,
        children: [t.jsx(h, {
            className: "ProfileShoppableProductImage",
            style: {
                backgroundImage: `url(${(e == null ? void 0 : e.product_photo_url) || Da})`,
                ...o
            },
            tag: "center"
        }), t.jsxs("div", {
            className: "ProfileShoppableProductTextContainer",
            children: [t.jsx(h, {
                style: {
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    ...i,
                    ...o
                },
                children: e.product_title
            }), t.jsxs(h, {
                style: {
                    ...o,
                    ...i
                },
                children: ["$", e.product_price]
            })]
        })]
    })
}
function gl({videoId: e}) {
    const {isTikTok: s} = l.useContext(x);
    let a = l.useContext(M);
    if (s)
        return null;
    const n = `https://tiktok.com/embed/${e}`;
    a = $(k, a);
    const o = a.components.theme === K.FULL_WIDTH;
    let i = {
        margin: "0px 4px 4px"
    };
    return o && (i = {}),
    e ? t.jsx(h, {
        className: "ShoppingTiktokWrapper",
        style: i,
        children: t.jsx("iframe", {
            style: {
                height: "100%",
                marginLeft: 5,
                width: "95%",
                overflow: "hidden",
                transform: "scale(.95)",
                borderRadius: 8
            },
            title: "tiktok",
            src: n,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: 1,
            frameBorder: "0",
            scrolling: "no"
        })
    }) : null
}
function bl({block: e, blockId: s}) {
    var _, c;
    const {isComponent: a} = l.useContext(x)
      , n = (c = (_ = e.social_urls) == null ? void 0 : _[0]) == null ? void 0 : c.url
      , [o,i] = l.useState(!0);
    l.useEffect(()=>{
        (async()=>{
            i(!1),
            await ve(500),
            i(!0)
        }
        )()
    }
    , [n]);
    const r = ie[g.SOCIAL](e);
    return !r && a === ne ? t.jsx(_e, {
        title: "Twitter",
        cta: "Add a Twitter URL to remove this temporary placeholder."
    }) : r && o ? t.jsx(Sl, {
        blockId: s,
        url: n
    }) : null
}
function Sl({url: e, blockId: s}) {
    var c, u, A;
    const a = l.useContext(M)
      , {isComponent: n} = l.useContext(x)
      , {ref: o} = No(e, 650)
      , i = e.includes("/status/")
      , r = n ? "Component" : ""
      , _ = i ? "TwitterTweetWrapper" : "TwitterTimelineWrapper";
    return t.jsx("center", {
        "data-testid": s,
        children: t.jsx(fe, {
            className: `${_} ${a.components.theme} ${r}`,
            style: {
                pointerEvents: n && "none",
                borderRadius: ((c = a == null ? void 0 : a.components) == null ? void 0 : c.theme) !== K.ROUND ? 14 : 25,
                marginLeft: ((u = a == null ? void 0 : a.components) == null ? void 0 : u.theme) === K.FULL_WIDTH && 20,
                marginRight: ((A = a == null ? void 0 : a.components) == null ? void 0 : A.theme) === K.FULL_WIDTH && 20
            },
            children: t.jsx("div", {
                ref: o,
                className: i ? "TwitterTweetEmbed" : "TwitterTimelineEmbed"
            })
        })
    })
}
function yl({block: e, blockId: s}) {
    const a = ie[g.SPACER](e)
      , {headerTextColor: n} = l.useContext(x);
    if (!a)
        return null;
    const o = e.height
      , i = (e == null ? void 0 : e.seperator_style) ?? We.NONE
      , r = n;
    switch (i) {
    case We.THIN:
        return t.jsx("div", {
            "data-testid": s,
            style: {
                height: o
            },
            className: "flex items-center",
            children: t.jsx("div", {
                className: "h-px w-full",
                style: {
                    backgroundColor: r
                }
            })
        });
    case We.THICK:
        return t.jsx("div", {
            "aria-label": "thick line separator",
            "data-testid": s,
            style: {
                height: o
            },
            className: "flex items-center",
            children: t.jsx("div", {
                className: "h-1 w-full",
                style: {
                    backgroundColor: r
                }
            })
        });
    case We.DASHED:
        return t.jsx("div", {
            "data-testid": s,
            style: {
                height: o
            },
            className: "flex items-center",
            children: t.jsx("div", {
                className: "w-full h-px border-0 border-b-2 border-dashed border-separate",
                style: {
                    backgroundColor: r
                }
            })
        });
    case We.ELLIPSES:
        return t.jsx("div", {
            "data-testid": s,
            style: {
                height: o
            },
            className: "flex items-center",
            children: t.jsxs("div", {
                className: "flex items-center justify-center w-full",
                children: [t.jsx("div", {
                    className: "w-3 h-3 rounded-full",
                    style: {
                        backgroundColor: r
                    }
                }), t.jsx("div", {
                    className: "w-3 h-3 rounded-full mx-2",
                    style: {
                        backgroundColor: r
                    }
                }), t.jsx("div", {
                    className: "w-3 h-3 rounded-full",
                    style: {
                        backgroundColor: r
                    }
                })]
            })
        });
    default:
        return t.jsx("div", {
            "data-testid": s,
            style: {
                height: o
            }
        })
    }
}
function Ba({storeItemId: e, beaconsUsername: s, pageViewSource: a=lt.DIRECT, referrer: n, utm: o, hostname: i, isProfilePage: r=!1}) {
    let c = l.useMemo(()=>{
        const A = `https://${i}/shop/${e}`
          , E = `https://shop.beacons.ai/${s}/${e}`;
        return r ? "https://beacons.ai".endsWith(i) ? E : A : i ? A : E
    }
    , [s, i, r, e]);
    return a === lt.DIRECT || (c = qe(c, St.PAGE_VIEW_SOURCE, a)),
    n && (c = qe(c, St.REFERRER, encodeURIComponent(n))),
    o && (c = qe(c, St.UTM, encodeURIComponent(o))),
    c.toString()
}
const Il = "Buy now";
function ka({storeItem: e}) {
    const {price: s, preview_call_to_action: a} = e;
    return a ? t.jsxs("div", {
        className: "truncate",
        children: [" ", a]
    }) : s ? t.jsx("div", {
        children: Il
    }) : t.jsx("div", {
        children: $t.PRICE_FREE_CTA
    })
}
function Fa({appointmentLength: e}) {
    return t.jsxs("div", {
        className: "flex items-center gap-1",
        children: [t.jsx(Xi, {
            className: "w-4 h-4"
        }), t.jsx("span", {
            children: `${e}min`
        })]
    })
}
const Te = {
    LARGE: "large",
    SMALL: "small",
    CAROUSEL: "carousel",
    TEXT_LEFT: "text-left",
    TEXT_RIGHT: "text-right"
};
function Ka({price: e, strikethroughPrice: s, inline: a=!0, className: n}) {
    const o = Hs(e, "usd");
    if (s) {
        const i = Math.round((1 - e / s) * 100);
        return t.jsxs("div", {
            className: I("flex gap-1", {
                "flex-col": !a,
                [n]: !!n
            }),
            children: [t.jsx("div", {
                className: "font-bold text-16",
                children: o
            }), t.jsxs("div", {
                className: "opacity-70 flex gap-2 items-center",
                children: [t.jsx("span", {
                    className: "line-through",
                    children: Hs(s, "usd")
                }), t.jsxs("span", {
                    children: ["(", i, "% off)"]
                })]
            })]
        })
    }
    return t.jsx("div", {
        className: I("font-bold text-16", {
            [n]: !!n
        }),
        children: o
    })
}
function Ll({borderRadius: e, backgroundImage: s, variant: a, enableBorder: n}) {
    const {isLargeCard: o, isCarouselCard: i, isSmallCard: r, isTextLeftCard: _, isTextRightCard: c, isHorizontalCard: u} = Ha({
        variant: a
    });
    return n ? t.jsx("div", {
        role: "figure",
        style: {
            backgroundImage: s,
            borderRadius: e ? `${e}px` : null
        },
        className: I("bg-cover bg-center", {
            "m-4 w-[calc(80%_-_16px)] pt-[calc(45%_-_10px)]": u,
            "order-2 ml-0": _,
            "order-1": !_,
            "mr-0": c,
            "m-4 mb-0 w-auto pt-[calc(100%_-_32px)]": o || i || r
        })
    }) : t.jsx("div", {
        role: "figure",
        style: {
            backgroundImage: s
        },
        className: I("bg-cover bg-center", {
            "pt-[45%] w-[80%]": u,
            "pt-[100%] w-full": !u,
            "order-2": _,
            "order-1": !_
        })
    })
}
function Ha({variant: e}) {
    const s = e === Te.LARGE
      , a = e === Te.CAROUSEL
      , n = e === Te.SMALL
      , o = e === Te.TEXT_LEFT
      , i = e === Te.TEXT_RIGHT;
    return {
        isLargeCard: s,
        isCarouselCard: a,
        isSmallCard: n,
        isTextLeftCard: o,
        isTextRightCard: i,
        isHorizontalCard: o || i
    }
}
function ke({enableBorder: e, item: s, variant: a=Te.LARGE}) {
    var H;
    let n = l.useContext(M);
    n = $(k, n);
    const {color: o} = n.text
      , {shadow: i, background_color: r, outline: _} = n.card
      , {opacity: c} = n.components
      , u = r + c;
    let A;
    (n.components.theme === K.ROUND || n.components.theme === K.CUSTOM) && (A = n.components.custom_border_radius);
    const {isComponent: E} = l.useContext(x)
      , T = Ba({
        storeItemId: s.id,
        beaconsUsername: s.beacons_username,
        pageViewSource: lt.LIB_STORE_BLOCK,
        referrer: window.location,
        hostname: window.location.host,
        isProfilePage: !0
    })
      , d = E ? null : T
      , {appointment_config: m, title: p, checkout_images: P, poster_image_url: C, price: R, strikethrough_price: b} = s
      , S = `url(${C || ((H = P == null ? void 0 : P[0]) == null ? void 0 : H.image_url) || $t.POSTER_IMAGE})`
      , O = pa(s)
      , y = Ea(m)
      , {isLargeCard: v, isCarouselCard: B, isSmallCard: te, isTextLeftCard: L, isHorizontalCard: U} = Ha({
        variant: a
    });
    return t.jsxs("a", {
        href: d,
        className: I("relative cursor-pointer mt-4 flex overflow-hidden no-underline", {
            "col-span-1": te,
            "flex-col": !U,
            "w-48 shrink-0 mr-4 last:mr-0": B
        }),
        style: {
            border: _ ? `2px solid ${o}` : null,
            backgroundColor: u,
            borderRadius: A ? `${A}px` : null,
            boxShadow: Tt(i, c, u)
        },
        children: [t.jsx(Ll, {
            borderRadius: A,
            variant: a,
            backgroundImage: S,
            enableBorder: e
        }), t.jsx("div", {
            className: I("w-full text-left", {
                "order-1": L,
                "order-2": !L,
                "h-auto": U,
                "h-full": !U
            }),
            children: t.jsxs("div", {
                className: "flex flex-col justify-between h-full box-border p-4",
                children: [t.jsx(h, {
                    style: {
                        wordBreak: "break-word"
                    },
                    className: I({
                        "mb-4": v || B,
                        "mb-3": te
                    }),
                    children: t.jsx(h, {
                        className: "cursor-pointer LineClamp2 text-16 !rounded-none",
                        children: p
                    })
                }), !!y && t.jsx(h, {
                    className: I("!rounded-none", {
                        "mb-4": v || B,
                        "mb-3": te || U
                    }),
                    children: t.jsx(Fa, {
                        appointmentLength: y
                    })
                }), t.jsxs("div", {
                    className: "flex flex-col",
                    children: [t.jsx(h, {
                        children: t.jsx(Ka, {
                            price: R,
                            strikethroughPrice: b,
                            inline: v,
                            className: I({
                                "mb-3": v || B,
                                "mb-2": te || U
                            })
                        })
                    }), t.jsx(xe, {
                        variant: "contained",
                        className: I("CardButton font-bold", {
                            "h-10": v || B,
                            "h-8": te || U
                        }),
                        href: d,
                        invert: !0,
                        "aria-label": O,
                        onClick: W=>{
                            W.stopPropagation()
                        }
                        ,
                        children: t.jsx(ka, {
                            storeItem: s
                        })
                    })]
                })]
            })
        })]
    })
}
const Nl = 0;
function Ol({item: e}) {
    var C;
    const {isComponent: s} = l.useContext(x)
      , a = le()
      , n = Ba({
        storeItemId: e.id,
        beaconsUsername: e.beacons_username,
        pageViewSource: lt.LIB_STORE_BLOCK,
        referrer: window.location,
        hostname: window.location.host,
        isProfilePage: !0
    })
      , [o,i] = l.useState(Nl)
      , r = s ? null : n
      , {appointment_config: _, title: c, checkout_images: u, poster_image_url: A, price: E, strikethrough_price: T} = e
      , d = pa(e)
      , m = Ea(_)
      , p = s || a
      , P = ((C = u == null ? void 0 : u[o]) == null ? void 0 : C.image_url) || A;
    return t.jsxs(h, {
        tag: "center",
        className: "w-full flex flex-col gap-3 p-5 box-border relative overflow-hidden mt-4",
        style: {
            background: "linear-gradient(180deg, #E5E5E5 0%, rgba(0, 0, 0, 0.8) 100%)",
            color: "#fff"
        },
        children: [t.jsx("div", {
            className: "bg-cover opacity-30 absolute top-0 left-0 h-full w-full bg-gray-700 z-0 bg-center blur-lg",
            style: {
                backgroundImage: `url(${P})`
            }
        }), (u == null ? void 0 : u.length) > 1 && t.jsx("div", {
            className: "flex w-full z-10 mt-2",
            children: [...Array(u.length)].map((R,b)=>t.jsx("div", {
                className: I("h-1 bg-white transition-all ", {
                    "ml-1": !!b,
                    "opacity-50": o < b
                }),
                style: {
                    width: `${100 / u.length}%`
                }
            }, b))
        }), t.jsx("div", {
            className: I("flex items-center justify-center z-10 max-w-full cursor-pointer", {
                "h-[400px]": p,
                "h-[600px]": !p
            }),
            role: "button",
            tabIndex: 0,
            onClick: ()=>{
                (u == null ? void 0 : u.length) > 1 && i((o + 1) % (u == null ? void 0 : u.length))
            }
            ,
            children: t.jsx("img", {
                src: P,
                alt: "Checkout preview",
                className: I("max-w-full", {
                    "max-h-[400px]": p,
                    "max-h-[600px]": !p
                })
            })
        }), t.jsxs("div", {
            className: "flex flex-col h-full box-border gap-4 z-10",
            children: [t.jsx(h, {
                style: {
                    wordBreak: "break-word"
                },
                children: t.jsx(h, {
                    className: "cursor-pointer LineClamp2 text-16 !rounded-none text-left",
                    style: {
                        color: "white"
                    },
                    children: c
                })
            }), !!m && t.jsx(h, {
                className: "!rounded-none",
                style: {
                    color: "white"
                },
                children: t.jsx(Fa, {
                    appointmentLength: m
                })
            }), t.jsxs("div", {
                className: "flex items-center justify-between",
                children: [t.jsx(Ka, {
                    price: E,
                    strikethroughPrice: T,
                    inline: !1,
                    className: "items-start"
                }), t.jsx(xe, {
                    variant: "contained",
                    className: "CardButton font-bold h-10",
                    href: r,
                    invert: !0,
                    "aria-label": d,
                    children: t.jsx(ka, {
                        storeItem: e
                    })
                })]
            })]
        })]
    })
}
function Xs({enableBorder: e, layoutType: s, item: a, index: n}) {
    switch (s) {
    case he.IMAGE_AND_TEXT_RIGHT:
        return t.jsx(ke, {
            enableBorder: e,
            item: a,
            variant: Te.TEXT_RIGHT
        });
    case he.ALTERNATING_IMAGE_TEXT:
        return t.jsx(ke, {
            enableBorder: e,
            item: a,
            variant: n % 2 === 0 ? Te.TEXT_RIGHT : Te.TEXT_LEFT
        });
    case he.CAROUSEL:
        return t.jsx(ke, {
            enableBorder: e,
            item: a,
            variant: Te.CAROUSEL
        });
    case he.ONE_COLUMN_IMAGE:
        return t.jsx(ke, {
            enableBorder: e,
            item: a
        });
    case he.GRID:
        return t.jsx(ke, {
            enableBorder: e,
            item: a,
            variant: Te.SMALL
        });
    case he.STORY_CARD:
        return t.jsx(Ol, {
            item: a
        });
    default:
        return t.jsx(ke, {
            enableBorder: e,
            item: a,
            variant: Te.TEXT_LEFT
        })
    }
}
function jl() {
    let e = l.useContext(M);
    e = $(k, e);
    let s;
    return (e.components.theme === K.ROUND || e.components.theme === K.CUSTOM) && (s = e.components.custom_border_radius),
    t.jsxs(Ce, {
        style: {
            border: `2px dashed ${e.text.color}AA`,
            position: "relative"
        },
        className: "cursor-pointer",
        children: [t.jsx(h, {
            className: "my-2",
            style: {
                fontSize: "1.2rem",
                color: e.text.color,
                fontWeight: "bold"
            },
            tag: "center",
            children: "This is an empty store block"
        }), t.jsx(h, {
            className: "my-2",
            style: {
                color: e.text.color
            },
            tag: "center",
            children: "Let's make it pop by adding some products here"
        }), t.jsx("div", {
            role: "figure",
            style: {
                backgroundImage: `url(${$t.POSTER_IMAGE})`,
                borderRadius: s ? `${s}px` : ""
            },
            className: "mx-auto bg-cover bg-center pt-[45%] w-[50%]"
        })]
    })
}
function vl({block: e, blockId: s}) {
    const {isComponent: a, headerTextColor: n} = l.useContext(x)
      , o = l.useContext(M)
      , i = e.store_items
      , r = e.layout_type
      , _ = !!e.enable_border
      , c = l.useCallback(p=>{
        var b;
        const P = (b = p.files) == null ? void 0 : b.filter(S=>!!(S != null && S.item_filename))
          , C = !!(P != null && P.length);
        return p.availability && !!p.title && C
    }
    , [])
      , u = ie[g.STORE](e);
    if (!u && a === ne)
        return t.jsx(jl, {});
    if (!u)
        return null;
    const A = o.components.theme === K.FULL_WIDTH
      , E = (e == null ? void 0 : e.collapse_style) === ia.COLLAPSED
      , T = (e == null ? void 0 : e.store_title) || "Products"
      , d = e == null ? void 0 : e.store_subtitle
      , m = I({
        "carousel mt-4": r === he.CAROUSEL,
        "grid grid-cols-2 gap-3": r === he.GRID,
        "flex flex-col gap-3": r === he.STORY_CARD
    });
    return E ? t.jsx(_a, {
        description: d,
        headline: T,
        isFullWidth: A,
        children: t.jsx("div", {
            className: "mt-4",
            children: t.jsx("div", {
                "aria-label": "layout classes",
                className: m,
                children: i.map((p,P)=>c(p) ? t.jsx(Xs, {
                    enableBorder: _,
                    item: p,
                    layoutType: r,
                    index: P
                }, p.id) : null)
            })
        })
    }) : t.jsxs("center", {
        children: [(!!e.store_title || !!e.store_subtitle) && t.jsxs("div", {
            "data-testid": s,
            children: [!!e.store_title && t.jsx(h, {
                tag: "center",
                className: "text-18 !font-bold",
                style: {
                    color: n
                },
                children: e.store_title
            }), !!e.store_subtitle && t.jsx(h, {
                tag: "center",
                className: "mt-3 text-14",
                style: {
                    color: n
                },
                children: e.store_subtitle
            })]
        }), t.jsx("div", {
            className: m,
            children: i.map((p,P)=>c(p) ? t.jsx(Xs, {
                enableBorder: _,
                item: p,
                layoutType: r,
                index: P
            }, p.id) : null)
        })]
    })
}
function Ul({block: e, blockId: s}) {
    const {form_style: a, support_description: n} = e
      , {isComponent: o, paymentProperties: i} = l.useContext(x)
      , r = ie[g.SUPPORT](e, i);
    return !r && o === ne ? t.jsx(_e, {
        title: "Support",
        cta: "Set up payments to remove this temporary placeholder."
    }) : r ? a === gn.BUTTON.value ? t.jsx(ea, {
        block: e,
        blockId: s
    }) : t.jsxs(Ce, {
        children: [t.jsx(h, {
            tag: "center",
            style: {
                fontSize: 18,
                fontWeight: "bold"
            },
            children: e.card_title
        }), !!n && t.jsx("div", {
            className: "MarginTopS TextAlignCenter",
            children: t.jsx(h, {
                style: {
                    fontSize: 14
                },
                children: n
            })
        }), t.jsx("div", {
            className: "MarginTopM",
            children: t.jsx(ea, {
                block: e,
                blockId: s,
                cardMode: !0
            })
        })]
    }) : null
}
function ea({block: e, blockId: s, cardMode: a}) {
    const n = l.useContext(M)
      , {isComponent: o} = l.useContext(x)
      , [i,r] = l.useState(!1);
    return t.jsxs("div", {
        style: !a && n.components.theme === K.FULL_WIDTH ? {
            paddingLeft: 20,
            paddingRight: 20
        } : {},
        children: [t.jsx(xe, {
            "data-testid": s,
            variant: "contained",
            className: a && "CardButton",
            fullWidth: !0,
            onClick: ()=>{
                o || (r(!0),
                window.gtag && window.gtag("event", "begin_checkout", {
                    currency: "USD",
                    items: [{
                        name: "Support"
                    }]
                }))
            }
            ,
            style: a ? {} : {
                height: 65,
                fontSize: "15px",
                boxShadow: Tt(n.card.shadow, n.components.opacity, n.card.background_color),
                border: n.card.outline ? `2px solid ${n.text.color}` : 0
            },
            allowOpacity: !a,
            invert: a,
            "aria-label": e.button_text,
            children: t.jsx("span", {
                style: {
                    padding: a && 6
                },
                children: e.button_text
            })
        }), t.jsx(wl, {
            open: i,
            setOpen: r,
            block: e
        })]
    })
}
function wl({open: e, setOpen: s, block: a}) {
    const {disablePayments: n, displayUsername: o, firebaseUid: i} = l.useContext(x)
      , [r,_] = l.useState(bn)
      , [c,u] = l.useState(!1);
    l.useEffect(()=>{
        _({
            bid: a.unit_price * 100,
            creator_username: o,
            id: At(),
            status: "donation",
            firebase_uid: i,
            name: "",
            email: "",
            instructions: ""
        })
    }
    , []);
    const A = l.useCallback(async()=>{
        if (n)
            return await ve(1e4),
            "deny";
        const E = await Z("manage_order", {
            action: "create_payment_intent",
            order: r,
            order_type: "support"
        });
        return console.log(E),
        E.data.client_secret
    }
    , [n, r]);
    return c ? t.jsx(Dl, {
        email: r.email,
        open: e,
        setOpen: s
    }) : t.jsx(Ml, {
        orderInfo: r,
        open: e,
        setOpen: s,
        setOrderInfo: _,
        setSuccessfullyPaid: u,
        createPaymentIntent: A,
        block: a
    })
}
function Ml({orderInfo: e, setOrderInfo: s, open: a, setOpen: n, setSuccessfullyPaid: o, createPaymentIntent: i, block: r}) {
    const {displayUsername: _} = l.useContext(x)
      , [c,u] = l.useState(1)
      , [A,E] = l.useState(!1)
      , T = l.useMemo(()=>A && e.email && !Ke(e.email) ? "Email invalid" : "", [A, e.email])
      , d = l.useMemo(()=>!!e.email && e.email.length !== 0 && Ke(e.email) && e.bid > 0 && e.bid <= Bt, [e.email, e.bid])
      , m = l.useCallback(()=>{
        window.gtag && window.gtag("event", "purchase", {
            value: e.bid,
            currency: "USD",
            transaction_id: e.id,
            affiliation: "Support",
            items: [{
                name: "Support"
            }]
        })
    }
    , [e]);
    return t.jsxs(et, {
        title: `Buy ${_} a ${r.support_item}`,
        open: a,
        onClose: ()=>n(!1),
        scroll: "body",
        children: [!!r.support_description && t.jsx("div", {
            children: r.support_description
        }), t.jsxs("div", {
            className: "FlexCenter MarginTopS",
            children: [t.jsx(de, {
                value: c,
                onChange: p=>{
                    const P = /^[0-9\b]+$/;
                    (p.target.value === "" || P.test(p.target.value)) && u(Number(p.target.value))
                }
                ,
                onBlur: p=>{
                    const P = /^[0-9\b]+$/;
                    (p.target.value === "" || P.test(p.target.value)) && s({
                        ...e,
                        bid: r.unit_price * Number(p.target.value) * 100
                    })
                }
                ,
                InputProps: {
                    startAdornment: "#",
                    inputProps: {
                        pattern: "[0-9]*",
                        inputMode: "numeric",
                        "aria-label": "support item quantity"
                    }
                },
                error: !c,
                style: {
                    width: 72
                }
            }), t.jsxs("span", {
                className: "MarginLeftXS",
                children: ["x ", `$ ${r.unit_price} each = $ ${e.bid / 100} Total`]
            })]
        }), c === 0 && t.jsx("div", {
            style: {
                marginTop: 2,
                color: "red",
                fontSize: "0.8rem"
            },
            children: "Minimum is 1 item."
        }), t.jsx("div", {
            className: "MarginTopS",
            children: t.jsx(de, {
                label: "Your email",
                id: "Your email",
                placeholder: "john@example.com",
                InputProps: {
                    startAdornment: " "
                },
                value: e.email,
                onChange: p=>{
                    s({
                        ...e,
                        email: p.target.value
                    })
                }
                ,
                onBlur: ()=>E(!0),
                type: "email",
                autoComplete: "email",
                error: !!T,
                helperText: T,
                fullWidth: !0
            })
        }), t.jsx("div", {
            className: "MarginTopS",
            children: t.jsx(de, {
                label: "Your name (optional)",
                id: "Your name (optional)",
                value: e.name,
                InputProps: {
                    startAdornment: " "
                },
                onChange: p=>{
                    s({
                        ...e,
                        name: p.target.value
                    })
                }
                ,
                fullWidth: !0,
                autoComplete: "name"
            })
        }), t.jsx("div", {
            className: "MarginTopS",
            children: t.jsx(de, {
                label: "Your message (optional)",
                id: "Your message (optional)",
                value: e.instructions,
                InputProps: {
                    startAdornment: " "
                },
                onChange: p=>{
                    s({
                        ...e,
                        instructions: p.target.value
                    })
                }
                ,
                fullWidth: !0,
                multiline: !0
            })
        }), t.jsxs("div", {
            className: "MarginTopL",
            children: [t.jsx(Yt, {
                orderInfo: e,
                allowPay: d,
                orderType: Vt.SUPPORT,
                paymentSuccessEndpoint: "complete_support_payment_paypal",
                setSuccessfullyPaid: o,
                retrievePaymentIntent: i,
                setSuccessfulPaymentCallback: m
            }), t.jsx(Wt, {
                order: e,
                setSuccessfullyPaid: o,
                allowPay: d,
                paymentSuccessEndpoint: "successful_support_payment_stripe",
                retrievePaymentIntent: i,
                setSuccessfulPaymentCallback: m
            })]
        })]
    })
}
function Dl({email: e, open: s, setOpen: a}) {
    const {displayUsername: n} = l.useContext(x)
      , o = `Thank you for supporting ${n}!`
      , i = t.jsxs("span", {
        children: ["You will get an email at ", t.jsx("strong", {
            children: e
        }), " to confirm your transaction. Please make sure to check your spam and promotions folders in case it gets misplaced. Join ", t.jsx("strong", {
            children: n
        }), "'s community to receive future updates."]
    });
    return t.jsx(zt, {
        open: s,
        setOpen: a,
        mainCta: o,
        additionalInformation: i,
        acquisitionChannel: "support_block"
    })
}
function Bl({block: e, blockId: s}) {
    var i;
    const {isComponent: a} = l.useContext(x)
      , n = ie[g.TEXT](e);
    if (!n && a === ne)
        return t.jsx(_e, {
            title: "Text",
            cta: "Type some text to remove this temporary placeholder."
        });
    if (!n)
        return null;
    const o = (i = e.description) == null ? void 0 : i.replace(/ {3,}$/gm, "  ");
    return t.jsxs(Ce, {
        "data-testid": s,
        children: [!!(e != null && e.title) && t.jsx(h, {
            "aria-label": `text title - ${e.title}`,
            className: "!font-semibold uppercase text-10",
            tag: "center",
            children: e.title
        }), t.jsx(h, {
            children: t.jsx("div", {
                "aria-label": "text description container",
                className: I({
                    "mt-4": !!(e != null && e.title),
                    "text-center": !!(e != null && e.center_text)
                }),
                children: t.jsx(_t, {
                    "aria-label": `text description ${o}`,
                    children: o
                })
            })
        })]
    })
}
function kl({headline: e, description: s}) {
    const {headerTextColor: a} = l.useContext(x);
    return t.jsxs(h, {
        style: {
            color: a,
            textAlign: "center"
        },
        children: [t.jsx("div", {
            className: "font-semibold text-18",
            children: e
        }), t.jsx("div", {
            className: "mt-2",
            children: s
        })]
    })
}
function Fl({block: e, children: s}) {
    const [a,n] = l.useState(!1)
      , {videos: o, headline: i, description: r, thumbnail: _} = e
      , c = _ || o[0].thumbnail;
    return t.jsxs(t.Fragment, {
        children: [t.jsxs(Ce, {
            className: "!p-4 text-center",
            children: [t.jsxs(h, {
                className: "cursor-pointer flex items-center justify-between gap-2 relative",
                onClick: ()=>n(u=>!u),
                role: "button",
                tabIndex: 0,
                children: [c ? t.jsx("img", {
                    className: "h-12 w-12 flex-none object-cover overflow-hidden rounded-8",
                    alt: "video thumbnail",
                    src: c
                }) : t.jsx("div", {
                    className: "w-12"
                }), t.jsx("div", {
                    className: "title",
                    children: i || "Videos"
                }), t.jsx("div", {
                    className: "w-12"
                }), t.jsx(eo, {
                    className: I("absolute right-0 flex items-center transition-all", {
                        "rotate-180": a
                    })
                })]
            }), t.jsx(Gs, {
                in: a,
                timeout: "auto",
                children: !!r && t.jsx(h, {
                    className: "!font-normal text-16 mt-2",
                    children: r
                })
            })]
        }), t.jsx(Gs, {
            in: a,
            timeout: "auto",
            children: s
        })]
    })
}
function ta({block: e, hasHeader: s}) {
    const {videos: a, layout: n, autopilot_on: o, autopilot_url: i} = e
      , r = l.useMemo(()=>!o || !i ? null : a.find(_=>_.id === vs), [o, i, a]);
    return t.jsxs("div", {
        className: I("flex items-center gap-4", {
            "overflow-x-auto pb-2": n === Ut.CAROUSEL,
            "flex-col": n !== Ut.CAROUSEL,
            "mt-4": s
        }),
        children: [!!r && t.jsx(sa, {
            url: r.url
        }), a.map(_=>_.id === vs ? null : t.jsx(sa, {
            url: _.url
        }, _.id || _.url))]
    })
}
function Kl({block: e, blockId: s}) {
    const {isComponent: a} = l.useContext(x);
    let n = l.useContext(M);
    n = $(k, n);
    const {collapse_style: o, layout: i, headline: r, description: _} = e
      , c = ie[g.VIDEOS](e);
    if (!c && a === ne) {
        const u = {
            backgroundColor: n.text.color
        }
          , A = {
            fill: n.card.background_color,
            height: 20,
            width: 20
        };
        return t.jsx(_e, {
            title: "Videos",
            cta: "Add a video embed URL to remove this temporary placeholder.",
            children: t.jsxs("div", {
                className: "flex justify-center items-center mb-3",
                children: [t.jsx("div", {
                    className: "IconBackgroundCircle",
                    style: u,
                    children: t.jsx(Gt, {
                        style: A
                    })
                }), t.jsx("div", {
                    className: "IconBackgroundCircle",
                    style: u,
                    children: t.jsx(Ta, {
                        style: A
                    })
                }), t.jsx("div", {
                    className: "IconBackgroundCircle",
                    style: u,
                    children: t.jsx(fa, {
                        style: A
                    })
                }), t.jsx("div", {
                    className: "IconBackgroundCircle",
                    style: u,
                    children: t.jsx(Pa, {
                        style: A
                    })
                })]
            })
        })
    }
    return c ? o === Sn.COLLAPSED || i === Ut.COLLAPSIBLE ? t.jsx("div", {
        "data-testid": s,
        children: t.jsx(Fl, {
            block: e,
            children: t.jsx(ta, {
                block: e,
                hasHeader: !0
            })
        })
    }) : t.jsxs("div", {
        "data-testid": s,
        children: [t.jsx(kl, {
            headline: r,
            description: _
        }), t.jsx(ta, {
            block: e,
            hasHeader: !!r || !!_
        })]
    }) : null
}
const Fe = {
    YOUTUBE: "YoutubeVideo",
    TIKTOK: "TiktokVideo",
    VIMEO: "VimeoVideo",
    TWITCH: "TwitchVideo"
};
function Hl(e) {
    return e.includes("youtu") ? Fe.YOUTUBE : e.includes("tiktok") ? Fe.TIKTOK : e.includes("vimeo") ? Fe.VIMEO : e.includes("twitch") ? Fe.TWITCH : ""
}
function Gl(e) {
    let s = {};
    return e === Fe.TIKTOK && (s = {
        transform: "scale(0.96)",
        marginTop: -14
    }),
    s
}
function sa({url: e}) {
    const {isComponent: s} = l.useContext(x)
      , {isTikTok: a} = l.useContext(x)
      , n = Hl(e);
    if (a && n === Fe.TIKTOK || e === "")
        return null;
    const i = Gl(n);
    let r = e;
    return r.includes("twitch.tv") && (r += `&parent=${window.location.hostname}&autoplay=false`),
    t.jsx(fe, {
        className: `${n}Wrapper ${s}`,
        style: {
            pointerEvents: s && "none",
            backgroundColor: "#FFFFFF00"
        },
        children: t.jsx("iframe", {
            "aria-label": "video iframe",
            title: "url",
            className: n,
            style: {
                overflow: "hidden",
                ...i
            },
            src: r,
            frameBorder: "0",
            scrolling: "no",
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: 1
        })
    })
}
const aa = new yn;
async function Yl(e, s) {
    var r;
    const n = Date.now()
      , o = e.email_verification_last_checked
      , i = (n - o) / 1e3;
    if (!o || i > 30) {
        const _ = await Z("user_profile", {
            action: "check_email_verification_from_profile",
            firebase_uid: e.firebase_uid,
            beacons_username: e.beacons_username
        })
          , c = !!((r = _ == null ? void 0 : _.data) != null && r.email_verified);
        s(!c)
    }
}
function Vl({username: e}) {
    return e ? t.jsxs(Aa, {
        children: [t.jsxs("center", {
            style: {
                marginTop: 50
            },
            children: ["The page for ", t.jsxs("strong", {
                children: [e, " "]
            }), "has been set to private until the email address of the owner is verified."]
        }), t.jsx("center", {
            style: {
                marginTop: 50
            },
            children: t.jsx("a", {
                href: "https://beacons.ai",
                "aria-label": "home",
                children: t.jsx(oa, {
                    fill: "#1c1c1c",
                    height: 35
                })
            })
        })]
    }) : null
}
function $l({username: e, message: s}) {
    return e ? t.jsxs(Aa, {
        children: [t.jsxs("center", {
            style: {
                marginTop: 50
            },
            children: ["No Beacons account associated with ", t.jsx("strong", {
                children: e
            }), "."]
        }), t.jsx("a", {
            href: "https://airtable.com/shrxCTVQxzNkWOiK9",
            "aria-label": "home",
            children: !!s && t.jsx("center", {
                style: {
                    marginTop: 32
                },
                children: s
            })
        }), t.jsx("center", {
            style: {
                marginTop: 50
            },
            children: t.jsx("a", {
                href: "https://beacons.ai",
                "aria-label": "home",
                children: t.jsx(oa, {
                    fill: "#1c1c1c",
                    height: 35
                })
            })
        })]
    }) : null
}
function Wl({block: e, blockId: s}) {
    switch (e.block_type) {
    case g.BOOKING:
        return t.jsx($o, {
            block: {
                ...Y[g.BOOKING].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.COMMUNITY:
        return t.jsx(zo, {
            block: {
                ...Y[g.COMMUNITY].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.EMAIL:
        return t.jsx(xa, {
            block: {
                ...Y[g.EMAIL].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.FOLLOWERS:
        return t.jsx(tl, {
            block: {
                ...Y[g.FOLLOWERS].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.FRIENDS:
        return t.jsx(rr, {
            block: {
                ...Y[g.FRIENDS].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.HEADER:
        return t.jsx(ya, {
            block: {
                ...Y[g.HEADER].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.IMAGES:
        return t.jsx(ur, {
            block: {
                ...Y[g.IMAGES].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.INTEGRATIONS:
        return t.jsx(Ar, {
            block: {
                ...Y[g.INTEGRATIONS].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.LINKS:
        return t.jsx(xr, {
            block: {
                ...Y[g.LINKS].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.MARKETPLACE:
        return null;
    case g.MUSIC:
        return t.jsx(Lr, {
            block: {
                ...Y[g.MUSIC].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.NFT:
        return t.jsx(Ur, {
            block: {
                ...Y[g.NFT].defaultBlock,
                ...e
            }
        });
    case g.REQUEST_FEED:
        return t.jsx(il, {});
    case g.REQUESTS:
        return t.jsx(Tl, {
            block: {
                ...Y[g.REQUESTS].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.SHOPPABLECONTENT:
        return t.jsx(Cl, {
            block: {
                ...Y[g.SHOPPABLECONTENT].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.SOCIAL:
        return t.jsx(bl, {
            block: {
                ...Y[g.SOCIAL].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.SPACER:
        return t.jsx(yl, {
            block: {
                ...Y[g.SPACER].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.STORE:
        return t.jsx(vl, {
            block: {
                ...Y[g.STORE].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.SUPPORT:
        return t.jsx(Ul, {
            block: {
                ...Y[g.SUPPORT].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.TEXT:
        return t.jsx(Bl, {
            block: {
                ...Y[g.TEXT].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.VIDEOS:
        return t.jsx(Kl, {
            block: {
                ...Y[g.VIDEOS].defaultBlock,
                ...e
            },
            blockId: s
        });
    case g.MEDIA_KIT_IN_LIB:
        return t.jsx(Ir, {
            block: {
                ...Y[g.MEDIA_KIT_IN_LIB].defaultBlock,
                ...e
            },
            blockId: s
        });
    default:
        return null
    }
}
function zl(e, s, a, n) {
    var r, _;
    const o = window.location.hostname;
    let i;
    e ? i = `https://${o}` : i = `https://${o}/${s}`,
    a !== "home" && (i += `/${n}`),
    (r = window.document.querySelector('meta[property="og:url"]')) == null || r.setAttribute("content", i),
    (_ = window.document.querySelector('link[rel="canonical"]')) == null || _.setAttribute("href", i)
}
function ql({match: e, history: s, accountInformation: a, baseAccountInformation: n, highlightBlockId: o, isComponent: i=!1, isCreatorPage: r=!1, allowVerticalScroll: _=!0, onSelectHighlightBlock: c, blockGallery: u=!1, shouldShowToastMessages: A=!0}) {
    var Ts, Ps, fs, Cs, Rs, hs;
    const {sendToastMessage: E} = ra()
      , {getPublicProfileInfo: T, getPublicProfileInfoPage: d} = _o()
      , m = le()
      , p = pe(`${Pe}/:page/:panel?`)
      , [P,C] = l.useState(void 0)
      , [R,b] = l.useState(void 0)
      , [S,O] = l.useState(!0)
      , [y,v] = l.useState({
        open: !1,
        title: ""
    })
      , [B,te] = l.useState(!1)
      , [L,U] = l.useState(void 0)
      , {value: H, updateValue: W} = ct({})
      , [Q,q] = l.useState(void 0)
      , [D,F] = l.useState(void 0)
      , [J,se] = l.useState(void 0)
      , [ae,Se] = l.useState(void 0)
      , [es,ts] = l.useState(void 0)
      , [Ga,Ya] = l.useState("")
      , [Ct,Va] = l.useState(void 0)
      , [$a,Wa] = l.useState(void 0)
      , [za,ss] = l.useState(void 0)
      , [Rt,qa] = l.useState("")
      , [ht,Za] = l.useState(void 0)
      , [Ee,Qa] = l.useState(void 0)
      , [as,ns] = l.useState("")
      , [is,os] = l.useState("")
      , [rs,Ja] = l.useState(void 0)
      , [ls,Xa] = l.useState(void 0)
      , [cs,en] = l.useState(void 0)
      , [_s,tn] = l.useState(void 0)
      , [ge,sn] = l.useState(void 0)
      , {value: me, updateValue: us} = ct(void 0)
      , [an] = l.useState(void 0)
      , st = l.useRef(null)
      , ye = vt.useMemo(()=>me ? me.page_layout.reduce((f,w)=>(f[w.block_id] = vt.createRef(),
    f), {}) : null, [me]);
    l.useEffect(()=>{
        var f;
        (st == null ? void 0 : st.current) !== o && (st.current = o,
        !(!o || !((f = ye == null ? void 0 : ye[o]) != null && f.current) || m) && ye[o].current.scrollIntoView({
            behavior: "smooth",
            block: u ? "end" : "center"
        }))
    }
    , [u, ye, o, m]),
    l.useEffect(()=>{
        async function f() {
            const G = await Qn(L.firebase_uid);
            sn(G)
        }
        !!(L != null && L.should_show_organization_badge) && (L != null && L.firebase_uid) && f()
    }
    , [L == null ? void 0 : L.firebase_uid, L == null ? void 0 : L.should_show_organization_badge]);
    const As = l.useCallback((f,w)=>async()=>{
        var G, j;
        if (!(i !== ne || w.block_id === o)) {
            if (f.block_type === g.HEADER)
                s.push(`${Pe}/${Vn}/${$n.CUSTOMIZE}`);
            else {
                const z = o ? (G = me == null ? void 0 : me[o]) == null ? void 0 : G.block_type : null;
                let X = "home";
                (j = p == null ? void 0 : p.params) != null && j.page && (X = p.params.page),
                z && z === f.block_type && (s.push(`${Pe}/${X}`),
                await ve(100)),
                c && c();
                const ue = `${f.block_type}?b=${w.block_id}`;
                s.push(`${Pe}/${X}/${ue}`)
            }
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            }),
            A && E(`Now editing ${f.block_type} block`)
        }
    }
    , [i, o, me, (Ts = p == null ? void 0 : p.params) == null ? void 0 : Ts.page, c, s, A, E])
      , ds = l.useCallback(async(f,w)=>{
        var nt, $e, De, it, xs, gs, bs, Ss, ys, Is;
        se(!!f.verified),
        ((nt = f == null ? void 0 : f.sensitive_content) == null ? void 0 : nt.age) !== "off" && ts(f == null ? void 0 : f.sensitive_content),
        f.pages && Va(f.pages);
        const G = ($e = f.page_layout[0]) == null ? void 0 : $e.block_id
          , j = f[G];
        (j == null ? void 0 : j.block_type) === g.HEADER && (Za(G),
        Qa(j)),
        f.suspend_account && Wa(!0),
        f != null && f.email_verification_start_time_unix_ms && Ln(f.email_verification_start_time_unix_ms) <= 0 && (ss(!0),
        i || Yl(f, ss));
        let z;
        f.page_appearance ? z = $(k, f.page_appearance) : f.link_colors ? (z = gr(f.link_colors),
        z = $(k, z)) : z = k,
        b(z),
        Ya(z.text.font_family);
        const X = qn(Zn.MARKETING_FEATURES, f.subscription_plan_ids);
        let ue, Ie;
        X && ((De = f == null ? void 0 : f.marketing) != null && De.utm_medium || (it = f == null ? void 0 : f.marketing) != null && it.utm_source) && (ue = f.marketing.utm_medium,
        Ie = f.marketing.utm_source);
        const bt = !(f != null && f.socialReferrer) || (f == null ? void 0 : f.socialReferrer) === "direct" ? yt() : f.socialReferrer
          , at = {
            beaconsUsername: f.beacons_username,
            firebaseUid: f.firebase_uid,
            profilePicUrl: f.profile_picture_url,
            recentVideoInteractions: f.recent_video_interactions,
            subscriptionPlanIds: f.subscription_plan_ids,
            utmMedium: ue,
            utmSource: Ie,
            vip: "is_reserved"in f,
            cookie_notice: f.cookie_notice,
            paymentProperties: f.payment_properties,
            isTikTok: !!(f != null && f.isTikTok),
            sessionToken: f == null ? void 0 : f.sessionToken,
            socialReferrer: bt
        };
        C(at);
        const Le = Hn(f, w);
        if (X && ((xs = f == null ? void 0 : f.marketing) != null && xs.meta_description))
            os(f.marketing.meta_description);
        else {
            const _n = Le.metaDescription;
            os(_n)
        }
        X && ((gs = f == null ? void 0 : f.marketing) != null && gs.meta_title) ? ns(f.marketing.meta_title) : ns(Le.metaTitle),
        X && ((bs = f == null ? void 0 : f.marketing) != null && bs.facebook_pixel && Ja(f.marketing.facebook_pixel),
        (Ss = f == null ? void 0 : f.marketing) != null && Ss.tiktok_pixel && Xa(f.marketing.tiktok_pixel),
        (ys = f == null ? void 0 : f.marketing) != null && ys.google_analytics && en(f.marketing.google_analytics),
        (Is = f == null ? void 0 : f.marketing) != null && Is.google_analytics_4 && tn(f.marketing.google_analytics_4))
    }
    , [i]);
    l.useEffect(()=>{
        async function f() {
            var at;
            const w = await uo({
                initialUsername: (at = e.params) == null ? void 0 : at.username,
                isCreatorPage: r,
                history: s,
                getPublicProfileInfo: T
            });
            if (!w)
                return;
            function G() {
                F(!1),
                O(!1),
                Se(e.params.username.split("@")[0])
            }
            const {profileInfoDocData: j, profileInfoDocExists: z, usernameString: X} = w;
            let[ue,Ie] = X.split("@");
            if (!(z || Ie)) {
                G();
                return
            }
            if (Ie && (Ie = Ie.toLowerCase()),
            ue = ue.toLowerCase(),
            z) {
                j.profile_picture_url ? q(j.profile_picture_url) : q(mt),
                j.beacons_username ? Se(j.beacons_username.split("@")[0]) : Se(ue),
                F(!0);
                const Le = {
                    ...ot,
                    ...j
                };
                U(Le),
                ds(Le, ue),
                new URLSearchParams(window.location.search).get("community") && v(De=>({
                    ...De,
                    open: !0,
                    acquisitionChannel: "deeplink"
                }))
            } else {
                se(!1),
                G();
                return
            }
            if (O(!1),
            j != null && j.firebase_uid) {
                const Le = !(j != null && j.socialReferrer) || (j == null ? void 0 : j.socialReferrer) === "direct" ? yt() : j.socialReferrer;
                if (!!!(j != null && j.suspend_account)) {
                    const {language: $e, countryCode: De} = Ds();
                    try {
                        await Z("public_actions", {
                            action: "page_visit",
                            country_code: De,
                            firebase_uid: j.firebase_uid,
                            language: $e,
                            social_referrer: Le
                        }),
                        await Ms({
                            pageType: "link_in_bio",
                            firebaseUid: j.firebase_uid
                        })
                    } catch (it) {
                        console.error(it)
                    }
                }
            } else
                j && !j.firebase_uid && Z("public_actions", {
                    action: "track_unclaimed_page_visit",
                    beacons_username: j.beacons_username ? j.beacons_username : window.location.href
                });
            const bt = new URLSearchParams(window.location.search);
            qa(!!bt.get("qa_view"))
        }
        !i && !a && f()
    }
    , []),
    l.useEffect(()=>{
        (async()=>{
            if (!L || !ae)
                return;
            let w = L;
            if (e.params.page && L.pages) {
                const z = L.pages.find(ue=>V(ue.page_title) === V(e.params.page))
                  , X = z == null ? void 0 : z.page_id;
                X && X !== "home" && (H[X] ? w = H[X] : (w = await d(ae, X),
                w && W({
                    [X]: w
                }))),
                zl(r, ae, X, V(e.params.page))
            }
            const G = {
                ...ot,
                ...w
            };
            Ys(G, L, te) || us(G, !1)
        }
        )()
    }
    , [L, ae, e.params.page]),
    l.useEffect(()=>{
        if (a !== void 0 && n !== void 0) {
            if (!i && a.firebase_uid) {
                const G = !(n != null && n.socialReferrer) || (n == null ? void 0 : n.socialReferrer) === "direct" ? yt() : n.socialReferrer
                  , {language: j, countryCode: z} = Ds();
                try {
                    Z("public_actions", {
                        action: "page_visit",
                        country_code: z,
                        firebase_uid: a.firebase_uid,
                        language: j,
                        social_referrer: G
                    }),
                    Ms({
                        pageType: "link_in_bio",
                        firebaseUid: a.firebase_uid
                    })
                } catch (ue) {
                    console.error(ue)
                }
                if (Ys(a, n, te))
                    return
            }
            const f = {
                ...ot,
                ...a
            }
              , w = {
                ...ot,
                ...n
            };
            us(f, !1),
            ds(w, w.beacons_username),
            r && U(w),
            q(f.profile_picture_url),
            Se(f.beacons_username.split("@")[0]),
            F(!0),
            O(!1)
        }
    }
    , [a, n]),
    l.useEffect(()=>{
        !P || !window.navigator.cookieEnabled || (aa.set(Bs.SIGNUP_SELF_REFERRAL, P.beaconsUsername, {
            httpOnly: !1,
            secure: !1,
            expires: new Date(new Date().setDate(new Date().getDate() + 7))
        }),
        aa.set(Bs.LIB_VIEWED, P.beaconsUsername, {
            httpOnly: !1,
            secure: !1
        }))
    }
    , [P]);
    const nn = Jn({
        allowVerticalScroll: _,
        isComponent: i,
        isMobile: m
    });
    if (!D && D !== void 0)
        return t.jsx($l, {
            username: ae
        });
    if (!i && $a && !Rt)
        return t.jsx(zn, {
            message: "Link in Bio not available."
        });
    if (!i && za)
        return t.jsx(Vl, {
            username: ae
        });
    const Ve = !m && !i
      , ps = [re.PORTRAIT, re.BANNER].includes(Ee == null ? void 0 : Ee.header_layout)
      , we = ps && Ve;
    let Re, Es = {};
    if (R) {
        if ([Re,Es] = nn(R),
        (Ee == null ? void 0 : Ee.header_layout) === re.PORTRAIT) {
            const f = "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))"
              , w = `linear-gradient(${R.background.background_color1}, ${R.background.background_color1})`
              , G = `${f}, ${w}`;
            Re = {
                ...Re,
                backgroundImage: w,
                desktopBackground: G
            }
        }
    } else
        Re = {
            backgroundColor: "#1c1c1c"
        };
    const on = Re.backgroundImage
      , Me = {};
    if (we && (Re.backgroundImage = "none",
    Re.paddingTop = "72px",
    Me.backgroundImage = on,
    Me.borderRadius = "24px",
    Me.width = "720px",
    Me.height = "fit-content",
    Me.marginBottom = "144px"),
    S || !me)
        return t.jsx("center", {
            style: {
                paddingTop: 50,
                background: "#f2f2f2",
                height: "100vh"
            },
            children: t.jsx(Nn, {
                size: 10,
                color: "#1c1c1c"
            })
        });
    let ms = "100%";
    Ve && R.background.desktop_mode === "portrait" && R.background.type !== Us.VIDEO && !we && (ms = 1024);
    let xt = R.text.header_text_color;
    if (!xt) {
        const f = Object.values(me).find(w=>(w == null ? void 0 : w.block_type) === g.HEADER);
        xt = (f == null ? void 0 : f.header_color) || R.text.color
    }
    const gt = (Ps = L == null ? void 0 : L.pages) == null ? void 0 : Ps.find(f=>f != null && f.page_title && (e != null && e.params.page) ? V(f.page_title) === V(e.params.page) : !1)
      , rn = (gt == null ? void 0 : gt.page_id) || Wn
      , ln = !!((fs = ge == null ? void 0 : ge.filter(({showBadgeInLibHeader: f})=>!!f)) != null && fs.length)
      , cn = !!((Cs = ge == null ? void 0 : ge.filter(({showBadgeInLibFooter: f})=>!!f)) != null && Cs.length);
    return t.jsx("div", {
        className: Ve ? "PageFrameWrapper" : "h-full",
        style: {
            backgroundImage: Ve && !we && Re.desktopBackground || we && `url("${Q}")`
        },
        children: t.jsx("div", {
            className: Ve ? "PageFrame" : "h-full",
            style: {
                width: ms
            },
            children: t.jsx("div", {
                className: I(`Profile h-full ${i}`, {
                    "w-full flex justify-center": we
                }),
                style: Re,
                children: t.jsxs("div", {
                    "aria-label": "profile background style",
                    style: Me,
                    children: [m && t.jsx("div", {
                        style: Es
                    }), !i && t.jsxs(On, {
                        children: [t.jsx("title", {
                            children: as
                        }), t.jsx("meta", {
                            name: "description",
                            content: is
                        }), t.jsx("meta", {
                            property: "og:title",
                            content: as
                        }), t.jsx("meta", {
                            property: "og:type",
                            content: "profile"
                        }), t.jsx("meta", {
                            property: "profile:username",
                            content: ae
                        }), t.jsx("meta", {
                            property: "og:description",
                            content: is
                        }), t.jsx("meta", {
                            property: "og:image",
                            content: Q
                        }), t.jsx("link", {
                            rel: "shortcut icon",
                            href: (Rs = R.page) != null && Rs.favicon ? R.page.favicon : "/favicon.ico"
                        })]
                    }), !ps && R.background.type === Us.VIDEO && t.jsx(Gn, {
                        video: R.background.video
                    }), t.jsx(Yn, {
                        fontFamily: Ga
                    }), t.jsx(jn, {
                        children: t.jsx(M.Provider, {
                            value: R,
                            children: t.jsx(x.Provider, {
                                value: {
                                    ...P,
                                    isComponent: i,
                                    marketplaceItems: an,
                                    displayUsername: ae,
                                    verified: J,
                                    isCreatorPage: r,
                                    setCommunityDialogState: v,
                                    headerTextColor: xt,
                                    currentPageId: rn
                                },
                                children: t.jsxs(Ft, {
                                    maxWidth: "sm",
                                    style: {
                                        minHeight: !i && !we && "100vh"
                                    },
                                    children: [!!es && !i && t.jsx(Oo, {
                                        ageVerification: es,
                                        setAgeVerification: ts
                                    }), t.jsxs("div", {
                                        role: "region",
                                        "aria-label": "profile page",
                                        className: "relative",
                                        children: [t.jsx(Qr, {
                                            pages: Ct,
                                            baseProfileInfo: L,
                                            headerLayout: Ee == null ? void 0 : Ee.header_layout,
                                            isMobile: m,
                                            displayUsername: ae,
                                            profilePicUrl: Q
                                        }), t.jsxs(Ze, {
                                            container: !0,
                                            children: [t.jsx(Ho, {
                                                authoritativeHeaderBlock: Ee,
                                                authoritativeHeaderBlockId: ht,
                                                blockGallery: u,
                                                isComponent: i,
                                                onBlockClick: As(Ee, {
                                                    block_id: ht
                                                }),
                                                pages: Ct,
                                                refs: ye,
                                                shouldDisplayAuthoritativeHeader: (hs = me.header_options) == null ? void 0 : hs.display,
                                                showShareButton: R.show_share_button,
                                                showSubscribeButton: R.show_subscribe_button
                                            }), ln && t.jsxs(t.Fragment, {
                                                children: [t.jsx("div", {
                                                    className: "w-full",
                                                    children: t.jsx(ks, {
                                                        creatorBadgeInfo: ge,
                                                        visibilityKey: "showBadgeInLibHeader",
                                                        shouldCenterBadges: !0
                                                    })
                                                }), t.jsx("div", {
                                                    className: "!mt-[75px]"
                                                })]
                                            }), t.jsx(Jr, {
                                                authoritativeHeaderBlock: Ee,
                                                pages: Ct
                                            }), me.page_layout.filter(f=>f.block_id !== ht).map(f=>{
                                                const {block_id: w} = f
                                                  , G = me[w]
                                                  , z = w === o ? "HighlightBlock" : "";
                                                return G != null && G.display ? t.jsx(Ze, {
                                                    item: !0,
                                                    className: `Section ${z} ${u && "Infinite"}`,
                                                    ref: ye[w],
                                                    onClick: As(G, f),
                                                    children: t.jsx(Wl, {
                                                        block: G,
                                                        blockId: w
                                                    })
                                                }, w) : null
                                            }
                                            )]
                                        }), cn && t.jsx("div", {
                                            className: "w-full",
                                            children: t.jsx(ks, {
                                                creatorBadgeInfo: ge,
                                                visibilityKey: "showBadgeInLibFooter",
                                                shouldCenterBadges: !0
                                            })
                                        }), t.jsx("div", {
                                            className: "mt-12",
                                            children: t.jsx(da, {})
                                        }), t.jsx(cr, {}), t.jsx(er, {
                                            dialogState: y,
                                            setDialogState: v
                                        })]
                                    })]
                                })
                            })
                        })
                    }), !!cs && !Rt && t.jsx(ws, {
                        trackingId: cs
                    }), !!_s && !Rt && t.jsx(ws, {
                        trackingId: _s
                    }), t.jsx(rt, {
                        open: B,
                        setOpen: te
                    }), !!rs && t.jsx(br, {
                        pixelId: rs
                    }), !!ls && t.jsx(Sr, {
                        tiktokPixelId: ls
                    })]
                })
            })
        })
    })
}
const Zl = In(ql)
  , o_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Zl
}, Symbol.toStringTag, {
    value: "Module"
}));
export {Oe as E, N as I, Zl as P, ze as a, Wt as b, Ys as c, La as d, o_ as i, V as s, Ba as u};
//# debugId=09c997e1-fd19-5917-8172-4f63dfaf3c71
//# sourceMappingURL=index-a48add96.js.map
