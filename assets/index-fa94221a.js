!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "b724d0c4-d471-5072-972f-337caf211720")
    } catch (e) {}
}();
import {H as v, bn as Q, r as G, j as te} from "./index-4d92c338.js";
import {p as Se} from "./purify.es-0c4a0514.js";
const xe = (e,n)=>{
    const i = !!(n != null && n.stripe)
      , a = !!(n != null && n.paypal_marketplace)
      , u = !i && !a;
    return !!e.display && !u
}
  , Me = e=>!!e.display
  , He = e=>!!e.display
  , Ae = e=>{
    var n, i;
    return !!e.display && !!((n = e.followers_counts) != null && n.length) && !!((i = e.followers_counts) != null && i.filter(a=>a == null ? void 0 : a.display).length)
}
  , Le = e=>{
    var n;
    return !!(e != null && e.display) && !!((n = e == null ? void 0 : e.friends_list) != null && n.length)
}
  , Ce = e=>!!e.display
  , Ie = e=>{
    var n;
    return !!(e != null && e.display) && !!((n = e == null ? void 0 : e.images) != null && n.length)
}
  , Te = e=>{
    var a;
    const n = u=>e.link_type === Q.ONE_COLUMN_IMAGE || e.link_type === Q.MULTI_COLUMN_IMAGE || !!u.title
      , i = u=>{
        var d;
        return !!((d = u.url) != null && d.length) && n(u) && u.display
    }
    ;
    return !!(e != null && e.display) && !!((a = e == null ? void 0 : e.links) != null && a.length) && !!e.links.filter(i).length
}
  , Be = e=>!!(e != null && e.display)
  , $e = e=>{
    var n, i, a;
    return !!(e != null && e.display) && !!((n = e == null ? void 0 : e.music_urls) != null && n.length) && !!((a = (i = e == null ? void 0 : e.music_urls) == null ? void 0 : i[0]) != null && a.url)
}
  , Ne = e=>{
    var n;
    return !!(e != null && e.display) && !!((n = e == null ? void 0 : e.recent_requests) != null && n.length)
}
  , Ge = e=>{
    var n;
    return !!(e != null && e.display) && !!((n = e == null ? void 0 : e.menu) != null && n.length)
}
  , Re = e=>{
    var n;
    return !!(e != null && e.display) && (!!(e != null && e.shop_title) || !!(e != null && e.shop_subtitle) || !!((n = e == null ? void 0 : e.shop_contents) != null && n.filter(i=>(i == null ? void 0 : i.display_content) !== !1).length))
}
  , De = e=>!!(e != null && e.display)
  , we = e=>{
    var n, i, a;
    return !!(e != null && e.display) && !!((n = e == null ? void 0 : e.social_urls) != null && n.length) && !!((a = (i = e == null ? void 0 : e.social_urls) == null ? void 0 : i[0]) != null && a.url) && e.social_urls[0].url.includes("twitter.com")
}
  , Fe = e=>{
    var i;
    const n = a=>{
        var c;
        const u = (c = a.files) == null ? void 0 : c.filter(g=>!!(g != null && g.item_filename))
          , d = !!(u != null && u.length);
        return a.availability && !!a.title && d
    }
    ;
    return !!(e != null && e.display) && !!((i = e == null ? void 0 : e.store_items) != null && i.length) && !!e.store_items.filter(n).length
}
  , Ue = (e,n)=>{
    const i = !!(n != null && n.stripe)
      , a = !!(n != null && n.paypal_marketplace)
      , u = !i && !a;
    return !!e.display && !u
}
  , ze = e=>!!(e != null && e.display) && !!(e != null && e.description)
  , Xe = e=>{
    var n;
    return !!(e != null && e.display) && !!((n = e == null ? void 0 : e.videos) != null && n.length) && e.videos.some(i=>!!i.url)
}
  , Ke = e=>!!(e != null && e.display) && !!(e != null && e.integration_url)
  , Ve = e=>!!(e != null && e.display) && !!(e != null && e.title)
  , qe = {
    [v.BOOKING]: xe,
    [v.COMMUNITY]: Me,
    [v.EMAIL]: He,
    [v.FOLLOWERS]: Ae,
    [v.FRIENDS]: Le,
    [v.HEADER]: Ce,
    [v.IMAGES]: Ie,
    [v.LINKS]: Te,
    [v.MARKETPLACE]: Be,
    [v.MUSIC]: $e,
    [v.REQUEST_FEED]: Ne,
    [v.REQUESTS]: Ge,
    [v.SHOPPABLECONTENT]: Re,
    [v.SPACER]: De,
    [v.SOCIAL]: we,
    [v.STORE]: Fe,
    [v.SUPPORT]: Ue,
    [v.TEXT]: ze,
    [v.VIDEOS]: Xe,
    [v.INTEGRATIONS]: Ke,
    [v.MEDIA_KIT_IN_LIB]: Ve
}
  , Wt = qe;
function I() {
    return I = Object.assign ? Object.assign.bind() : function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
        }
        return e
    }
    ,
    I.apply(this, arguments)
}
const Ze = ["children", "options"]
  , Y = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e,n)=>(e[n.toLowerCase()] = n,
e), {
    for: "htmlFor"
})
  , J = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: "“"
}
  , Pe = ["style", "script"]
  , Qe = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi
  , Ye = /mailto:/i
  , Je = /\n{2,}$/
  , ne = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/
  , je = /^ *> ?/gm
  , We = /^ {2,}\n/
  , ke = /^(?:( *[-*_])){3,} *(?:\n *)+\n/
  , re = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/
  , se = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/
  , be = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/
  , et = /^(?:\n *)*\n/
  , tt = /\r\n?/g
  , nt = /^\[\^([^\]]+)](:.*)\n/
  , rt = /^\[\^([^\]]+)]/
  , st = /\f/g
  , it = /^\s*?\[(x|\s)\]/
  , ie = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/
  , ae = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/
  , ue = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/
  , K = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i
  , at = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi
  , le = /^<!--[\s\S]*?(?:-->)/
  , ut = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/
  , V = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i
  , lt = /^\{.*\}$/
  , pt = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/
  , ot = /^<([^ >]+@[^ >]+)>/
  , ct = /^<([^ >]+:\/[^ >]+)>/
  , dt = /-([a-z])?/gi
  , pe = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/
  , ft = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/
  , gt = /^!\[([^\]]*)\] ?\[([^\]]*)\]/
  , ht = /^\[([^\]]*)\] ?\[([^\]]*)\]/
  , yt = /(\[|\])/g
  , mt = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/
  , vt = /\t/g
  , Ot = /^ *\| */
  , _t = /(^ *\||\| *$)/g
  , Et = / *$/
  , St = /^ *:-+: *$/
  , xt = /^ *:-+ *$/
  , Mt = /^ *-+: *$/
  , Ht = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/
  , At = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/
  , Lt = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/
  , Ct = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/
  , It = /^\\([^0-9A-Za-z\s])/
  , Tt = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i
  , Bt = /^\n+/
  , $t = /^([ \t]*)/
  , Nt = /\\([^\\])/g
  , j = / *\n+$/
  , Gt = /(?:^|\n)( *)$/
  , q = "(?:\\d+\\.)"
  , Z = "(?:[*+-])";
function oe(e) {
    return "( *)(" + (e === 1 ? q : Z) + ") +"
}
const ce = oe(1)
  , de = oe(2);
function fe(e) {
    return new RegExp("^" + (e === 1 ? ce : de))
}
const Rt = fe(1)
  , Dt = fe(2);
function ge(e) {
    return new RegExp("^" + (e === 1 ? ce : de) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? q : Z) + " )[^\\n]*)*(\\n|$)","gm")
}
const he = ge(1)
  , ye = ge(2);
function me(e) {
    const n = e === 1 ? q : Z;
    return new RegExp("^( *)(" + n + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + n + " (?!" + n + " ))\\n*|\\s*\\n*$)")
}
const ve = me(1)
  , Oe = me(2);
function W(e, n) {
    const i = n === 1
      , a = i ? ve : Oe
      , u = i ? he : ye
      , d = i ? Rt : Dt;
    return {
        t(f, c, g) {
            const S = Gt.exec(g);
            return S && (c.o || !c._ && !c.u) ? a.exec(f = S[1] + f) : null
        },
        i: o.HIGH,
        l(f, c, g) {
            const S = i ? +f[2] : void 0
              , C = f[0].replace(Je, `
`).match(u);
            let B = !1;
            return {
                p: C.map(function($, t) {
                    const s = d.exec($)[0].length
                      , r = new RegExp("^ {1," + s + "}","gm")
                      , p = $.replace(r, "").replace(d, "")
                      , l = t === C.length - 1
                      , y = p.indexOf(`

`) !== -1 || l && B;
                    B = y;
                    const h = g._
                      , E = g.o;
                    let _;
                    g.o = !0,
                    y ? (g._ = !1,
                    _ = p.replace(j, `

`)) : (g._ = !0,
                    _ = p.replace(j, ""));
                    const x = c(_, g);
                    return g._ = h,
                    g.o = E,
                    x
                }),
                m: i,
                g: S
            }
        },
        h: (f,c,g)=>e(f.m ? "ol" : "ul", {
            key: g.k,
            start: f.g
        }, f.p.map(function(S, C) {
            return e("li", {
                key: C
            }, c(S, g))
        }))
    }
}
const wt = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/
  , Ft = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/
  , _e = [ne, re, se, ie, ue, ae, le, pe, he, ve, ye, Oe]
  , Ut = [..._e, /^[^\n]+(?:  \n|\n{2,})/, K, V];
function zt(e) {
    return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
}
function Xt(e) {
    return Mt.test(e) ? "right" : St.test(e) ? "center" : xt.test(e) ? "left" : null
}
function k(e, n, i) {
    const a = i.$;
    i.$ = !0;
    const u = n(e.trim(), i);
    i.$ = a;
    let d = [[]];
    return u.forEach(function(f, c) {
        f.type === "tableSeparator" ? c !== 0 && c !== u.length - 1 && d.push([]) : (f.type !== "text" || u[c + 1] != null && u[c + 1].type !== "tableSeparator" || (f.v = f.v.replace(Et, "")),
        d[d.length - 1].push(f))
    }),
    d
}
function Kt(e, n, i) {
    i._ = !0;
    const a = k(e[1], n, i)
      , u = e[2].replace(_t, "").split("|").map(Xt)
      , d = function(f, c, g) {
        return f.trim().split(`
`).map(function(S) {
            return k(S, c, g)
        })
    }(e[3], n, i);
    return i._ = !1,
    {
        S: u,
        A: d,
        L: a,
        type: "table"
    }
}
function b(e, n) {
    return e.S[n] == null ? {} : {
        textAlign: e.S[n]
    }
}
function A(e) {
    return function(n, i) {
        return i._ ? e.exec(n) : null
    }
}
function L(e) {
    return function(n, i) {
        return i._ || i.u ? e.exec(n) : null
    }
}
function M(e) {
    return function(n, i) {
        return i._ || i.u ? null : e.exec(n)
    }
}
function N(e) {
    return function(n) {
        return e.exec(n)
    }
}
function Vt(e, n, i) {
    if (n._ || n.u || i && !i.endsWith(`
`))
        return null;
    let a = "";
    e.split(`
`).every(d=>!_e.some(f=>f.test(d)) && (a += d + `
`,
    d.trim()));
    const u = a.trimEnd();
    return u == "" ? null : [a, u]
}
function T(e) {
    try {
        if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i))
            return
    } catch {
        return null
    }
    return e
}
function ee(e) {
    return e.replace(Nt, "$1")
}
function R(e, n, i) {
    const a = i._ || !1
      , u = i.u || !1;
    i._ = !0,
    i.u = !0;
    const d = e(n, i);
    return i._ = a,
    i.u = u,
    d
}
function qt(e, n, i) {
    const a = i._ || !1
      , u = i.u || !1;
    i._ = !1,
    i.u = !0;
    const d = e(n, i);
    return i._ = a,
    i.u = u,
    d
}
function Zt(e, n, i) {
    return i._ = !1,
    e(n, i)
}
const w = (e,n,i)=>({
    v: R(n, e[1], i)
});
function F() {
    return {}
}
function U() {
    return null
}
function Pt(...e) {
    return e.filter(Boolean).join(" ")
}
function z(e, n, i) {
    let a = e;
    const u = n.split(".");
    for (; u.length && (a = a[u[0]],
    a !== void 0); )
        u.shift();
    return a || i
}
var o;
function Qt(e, n={}) {
    n.overrides = n.overrides || {},
    n.slugify = n.slugify || zt,
    n.namedCodesToUnicode = n.namedCodesToUnicode ? I({}, J, n.namedCodesToUnicode) : J;
    const i = n.createElement || G.createElement;
    function a(t, s, ...r) {
        const p = z(n.overrides, `${t}.props`, {});
        return i(function(l, y) {
            const h = z(y, l);
            return h ? typeof h == "function" || typeof h == "object" && "render"in h ? h : z(y, `${l}.component`, l) : l
        }(t, n.overrides), I({}, s, p, {
            className: Pt(s == null ? void 0 : s.className, p.className) || void 0
        }), ...r)
    }
    function u(t) {
        let s = !1;
        n.forceInline ? s = !0 : n.forceBlock || (s = mt.test(t) === !1);
        const r = C(S(s ? t : `${t.trimEnd().replace(Bt, "")}

`, {
            _: s
        }));
        for (; typeof r[r.length - 1] == "string" && !r[r.length - 1].trim(); )
            r.pop();
        if (n.wrapper === null)
            return r;
        const p = n.wrapper || (s ? "span" : "div");
        let l;
        if (r.length > 1 || n.forceWrapper)
            l = r;
        else {
            if (r.length === 1)
                return l = r[0],
                typeof l == "string" ? a("span", {
                    key: "outer"
                }, l) : l;
            l = null
        }
        return G.createElement(p, {
            key: "outer"
        }, l)
    }
    function d(t) {
        const s = t.match(Qe);
        return s ? s.reduce(function(r, p, l) {
            const y = p.indexOf("=");
            if (y !== -1) {
                const h = function(m) {
                    return m.indexOf("-") !== -1 && m.match(ut) === null && (m = m.replace(dt, function(O, H) {
                        return H.toUpperCase()
                    })),
                    m
                }(p.slice(0, y)).trim()
                  , E = function(m) {
                    const O = m[0];
                    return (O === '"' || O === "'") && m.length >= 2 && m[m.length - 1] === O ? m.slice(1, -1) : m
                }(p.slice(y + 1).trim())
                  , _ = Y[h] || h
                  , x = r[_] = function(m, O) {
                    return m === "style" ? O.split(/;\s?/).reduce(function(H, D) {
                        const P = D.slice(0, D.indexOf(":"));
                        return H[P.replace(/(-[a-z])/g, Ee=>Ee[1].toUpperCase())] = D.slice(P.length + 1).trim(),
                        H
                    }, {}) : m === "href" ? T(O) : (O.match(lt) && (O = O.slice(1, O.length - 1)),
                    O === "true" || O !== "false" && O)
                }(h, E);
                typeof x == "string" && (K.test(x) || V.test(x)) && (r[_] = G.cloneElement(u(x.trim()), {
                    key: l
                }))
            } else
                p !== "style" && (r[Y[p] || p] = !0);
            return r
        }, {}) : null
    }
    const f = []
      , c = {}
      , g = {
        blockQuote: {
            t: M(ne),
            i: o.HIGH,
            l: (t,s,r)=>({
                v: s(t[0].replace(je, ""), r)
            }),
            h: (t,s,r)=>a("blockquote", {
                key: r.k
            }, s(t.v, r))
        },
        breakLine: {
            t: N(We),
            i: o.HIGH,
            l: F,
            h: (t,s,r)=>a("br", {
                key: r.k
            })
        },
        breakThematic: {
            t: M(ke),
            i: o.HIGH,
            l: F,
            h: (t,s,r)=>a("hr", {
                key: r.k
            })
        },
        codeBlock: {
            t: M(se),
            i: o.MAX,
            l: t=>({
                v: t[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                M: void 0
            }),
            h: (t,s,r)=>a("pre", {
                key: r.k
            }, a("code", I({}, t.O, {
                className: t.M ? `lang-${t.M}` : ""
            }), t.v))
        },
        codeFenced: {
            t: M(re),
            i: o.MAX,
            l: t=>({
                O: d(t[3] || ""),
                v: t[4],
                M: t[2] || void 0,
                type: "codeBlock"
            })
        },
        codeInline: {
            t: L(be),
            i: o.LOW,
            l: t=>({
                v: t[2]
            }),
            h: (t,s,r)=>a("code", {
                key: r.k
            }, t.v)
        },
        footnote: {
            t: M(nt),
            i: o.MAX,
            l: t=>(f.push({
                I: t[2],
                j: t[1]
            }),
            {}),
            h: U
        },
        footnoteReference: {
            t: A(rt),
            i: o.HIGH,
            l: t=>({
                v: t[1],
                B: `#${n.slugify(t[1])}`
            }),
            h: (t,s,r)=>a("a", {
                key: r.k,
                href: T(t.B)
            }, a("sup", {
                key: r.k
            }, t.v))
        },
        gfmTask: {
            t: A(it),
            i: o.HIGH,
            l: t=>({
                R: t[1].toLowerCase() === "x"
            }),
            h: (t,s,r)=>a("input", {
                checked: t.R,
                key: r.k,
                readOnly: !0,
                type: "checkbox"
            })
        },
        heading: {
            t: M(n.enforceAtxHeadings ? ae : ie),
            i: o.HIGH,
            l: (t,s,r)=>({
                v: R(s, t[2], r),
                T: n.slugify(t[2]),
                C: t[1].length
            }),
            h: (t,s,r)=>a(`h ${t.C}`, {
                id: t.T,
                key: r.k
            }, s(t.v, r))
        },
        headingSetext: {
            t: M(ue),
            i: o.MAX,
            l: (t,s,r)=>({
                v: R(s, t[1], r),
                C: t[2] === "=" ? 1 : 2,
                type: "heading"
            })
        },
        htmlComment: {
            t: N(le),
            i: o.HIGH,
            l: ()=>({}),
            h: U
        },
        image: {
            t: L(Ft),
            i: o.HIGH,
            l: t=>({
                D: t[1],
                B: ee(t[2]),
                F: t[3]
            }),
            h: (t,s,r)=>a("img", {
                key: r.k,
                alt: t.D || void 0,
                title: t.F || void 0,
                src: T(t.B)
            })
        },
        link: {
            t: A(wt),
            i: o.LOW,
            l: (t,s,r)=>({
                v: qt(s, t[1], r),
                B: ee(t[2]),
                F: t[3]
            }),
            h: (t,s,r)=>a("a", {
                key: r.k,
                href: T(t.B),
                title: t.F
            }, s(t.v, r))
        },
        linkAngleBraceStyleDetector: {
            t: A(ct),
            i: o.MAX,
            l: t=>({
                v: [{
                    v: t[1],
                    type: "text"
                }],
                B: t[1],
                type: "link"
            })
        },
        linkBareUrlDetector: {
            t: (t,s)=>s.N ? null : A(pt)(t, s),
            i: o.MAX,
            l: t=>({
                v: [{
                    v: t[1],
                    type: "text"
                }],
                B: t[1],
                F: void 0,
                type: "link"
            })
        },
        linkMailtoDetector: {
            t: A(ot),
            i: o.MAX,
            l(t) {
                let s = t[1]
                  , r = t[1];
                return Ye.test(r) || (r = "mailto:" + r),
                {
                    v: [{
                        v: s.replace("mailto:", ""),
                        type: "text"
                    }],
                    B: r,
                    type: "link"
                }
            }
        },
        orderedList: W(a, 1),
        unorderedList: W(a, 2),
        newlineCoalescer: {
            t: M(et),
            i: o.LOW,
            l: F,
            h: ()=>`
`
        },
        paragraph: {
            t: Vt,
            i: o.LOW,
            l: w,
            h: (t,s,r)=>a("p", {
                key: r.k
            }, s(t.v, r))
        },
        ref: {
            t: A(ft),
            i: o.MAX,
            l: t=>(c[t[1]] = {
                B: t[2],
                F: t[4]
            },
            {}),
            h: U
        },
        refImage: {
            t: L(gt),
            i: o.MAX,
            l: t=>({
                D: t[1] || void 0,
                P: t[2]
            }),
            h: (t,s,r)=>a("img", {
                key: r.k,
                alt: t.D,
                src: T(c[t.P].B),
                title: c[t.P].F
            })
        },
        refLink: {
            t: A(ht),
            i: o.MAX,
            l: (t,s,r)=>({
                v: s(t[1], r),
                Z: s(t[0].replace(yt, "\\$1"), r),
                P: t[2]
            }),
            h: (t,s,r)=>c[t.P] ? a("a", {
                key: r.k,
                href: T(c[t.P].B),
                title: c[t.P].F
            }, s(t.v, r)) : a("span", {
                key: r.k
            }, s(t.Z, r))
        },
        table: {
            t: M(pe),
            i: o.HIGH,
            l: Kt,
            h: (t,s,r)=>a("table", {
                key: r.k
            }, a("thead", null, a("tr", null, t.L.map(function(p, l) {
                return a("th", {
                    key: l,
                    style: b(t, l)
                }, s(p, r))
            }))), a("tbody", null, t.A.map(function(p, l) {
                return a("tr", {
                    key: l
                }, p.map(function(y, h) {
                    return a("td", {
                        key: h,
                        style: b(t, h)
                    }, s(y, r))
                }))
            })))
        },
        tableSeparator: {
            t: function(t, s) {
                return s.$ ? (s._ = !0,
                Ot.exec(t)) : null
            },
            i: o.HIGH,
            l: function() {
                return {
                    type: "tableSeparator"
                }
            },
            h: ()=>" | "
        },
        text: {
            t: N(Tt),
            i: o.MIN,
            l: t=>({
                v: t[0].replace(at, (s,r)=>n.namedCodesToUnicode[r] ? n.namedCodesToUnicode[r] : s)
            }),
            h: t=>t.v
        },
        textBolded: {
            t: L(Ht),
            i: o.MED,
            l: (t,s,r)=>({
                v: s(t[2], r)
            }),
            h: (t,s,r)=>a("strong", {
                key: r.k
            }, s(t.v, r))
        },
        textEmphasized: {
            t: L(At),
            i: o.LOW,
            l: (t,s,r)=>({
                v: s(t[2], r)
            }),
            h: (t,s,r)=>a("em", {
                key: r.k
            }, s(t.v, r))
        },
        textEscaped: {
            t: L(It),
            i: o.HIGH,
            l: t=>({
                v: t[1],
                type: "text"
            })
        },
        textMarked: {
            t: L(Lt),
            i: o.LOW,
            l: w,
            h: (t,s,r)=>a("mark", {
                key: r.k
            }, s(t.v, r))
        },
        textStrikethroughed: {
            t: L(Ct),
            i: o.LOW,
            l: w,
            h: (t,s,r)=>a("del", {
                key: r.k
            }, s(t.v, r))
        }
    };
    n.disableParsingRawHTML !== !0 && (g.htmlBlock = {
        t: N(K),
        i: o.HIGH,
        l(t, s, r) {
            const [,p] = t[3].match($t)
              , l = new RegExp(`^${p}`,"gm")
              , y = t[3].replace(l, "")
              , h = (E = y,
            Ut.some(O=>O.test(E)) ? Zt : R);
            var E;
            const _ = t[1].toLowerCase()
              , x = Pe.indexOf(_) !== -1;
            r.N = r.N || _ === "a";
            const m = x ? t[3] : h(s, y, r);
            return r.N = !1,
            {
                O: d(t[2]),
                v: m,
                G: x,
                H: x ? _ : t[1]
            }
        },
        h: (t,s,r)=>a(t.H, I({
            key: r.k
        }, t.O), t.G ? t.v : s(t.v, r))
    },
    g.htmlSelfClosing = {
        t: N(V),
        i: o.HIGH,
        l: t=>({
            O: d(t[2] || ""),
            H: t[1]
        }),
        h: (t,s,r)=>a(t.H, I({}, t.O, {
            key: r.k
        }))
    });
    const S = function(t) {
        let s = Object.keys(t);
        function r(p, l) {
            let y = []
              , h = "";
            for (; p; ) {
                let E = 0;
                for (; E < s.length; ) {
                    const _ = s[E]
                      , x = t[_]
                      , m = x.t(p, l, h);
                    if (m) {
                        const O = m[0];
                        p = p.substring(O.length);
                        const H = x.l(m, r, l);
                        H.type == null && (H.type = _),
                        y.push(H),
                        h = O;
                        break
                    }
                    E++
                }
            }
            return y
        }
        return s.sort(function(p, l) {
            let y = t[p].i
              , h = t[l].i;
            return y !== h ? y - h : p < l ? -1 : 1
        }),
        function(p, l) {
            return r(function(y) {
                return y.replace(tt, `
`).replace(st, "").replace(vt, "    ")
            }(p), l)
        }
    }(g)
      , C = (B = function(t) {
        return function(s, r, p) {
            return t[s.type].h(s, r, p)
        }
    }(g),
    function t(s, r={}) {
        if (Array.isArray(s)) {
            const p = r.k
              , l = [];
            let y = !1;
            for (let h = 0; h < s.length; h++) {
                r.k = h;
                const E = t(s[h], r)
                  , _ = typeof E == "string";
                _ && y ? l[l.length - 1] += E : E !== null && l.push(E),
                y = _
            }
            return r.k = p,
            l
        }
        return B(s, t, r)
    }
    );
    var B;
    const $ = u(e);
    return f.length ? a("div", null, $, a("footer", {
        key: "footer"
    }, f.map(function(t) {
        return a("div", {
            id: n.slugify(t.j),
            key: t.j
        }, t.j, C(S(t.I, {
            _: !0
        })))
    }))) : $
}
(function(e) {
    e[e.MAX = 0] = "MAX",
    e[e.HIGH = 1] = "HIGH",
    e[e.MED = 2] = "MED",
    e[e.LOW = 3] = "LOW",
    e[e.MIN = 4] = "MIN"
}
)(o || (o = {}));
const Yt = e=>{
    let {children: n, options: i} = e
      , a = function(u, d) {
        if (u == null)
            return {};
        var f, c, g = {}, S = Object.keys(u);
        for (c = 0; c < S.length; c++)
            d.indexOf(f = S[c]) >= 0 || (g[f] = u[f]);
        return g
    }(e, Ze);
    return G.cloneElement(Qt(n, i), a)
}
;
function X({children: e, ...n}) {
    return te.jsx("div", {
        ...n,
        children: e
    })
}
function kt({children: e, ...n}) {
    return te.jsx(Yt, {
        ...n,
        options: {
            overrides: {
                style: {
                    component: X
                },
                meta: {
                    component: X
                },
                script: {
                    component: X
                }
            }
        },
        children: Se.sanitize(e, {
            ADD_TAGS: ["iframe"],
            ADD_ATTR: ["frameborder", "scrolling"]
        })
    })
}
export {Wt as B, kt as M};
//# debugId=b724d0c4-d471-5072-972f-337caf211720
//# sourceMappingURL=index-fa94221a.js.map

