!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "bc86c39d-bb0a-599a-88ad-dc7a481640ef")
    } catch (e) {}
}();
import {j as t, r as a, aR as Ve, b_ as he, a_ as Ke, cl as Ee, p as Se, l as de, H as ze, bV as Ye, cm as be, e as xe, c3 as We, cn as Ge, co as Q} from "./index-4d92c338.js";
import {g as Ze} from "./BeaconsIcon-7e54ce15.js";
import {d as Le} from "./dayjs.min-181a18c7.js";
import {u as qe, A as Je} from "./utc-099884cc.js";
import {C as Te, U as Xe, a as Qe} from "./locations-1e856d5f.js";
import {B as ke, M as et} from "./index-fa94221a.js";
import {c as tt, F as st} from "./canUseFeature-1928dc1b.js";
import {E as at} from "./getLanguageAndCountryCode-2395f4b2.js";
import {b as lt, a as _, g as Ce, P as Ie} from "./ProfileBlockCard-2508c246.js";
import {a as P, P as we} from "./ProfileTextField-f53d2baf.js";
import {P as me} from "./ProfileGlobalsContext-8982728f.js";
import {P as _e} from "./ProfileThemeContext-9f028f8f.js";
import {m as nt} from "./mergeDeep-4cfe963b.js";
import {N as rt} from "./NativeSelect-49a83097.js";
import {C as it} from "./Collapse-476e652e.js";
import {L as ot, D as dt} from "./DatePicker-a6b0beaa.js";
const ct = {
    ccom: "com",
    cm: "com",
    cmo: "com",
    cmom: "com",
    coom: "com",
    comm: "com",
    con: "com",
    nete: "net",
    new: "net",
    nnet: "net",
    nte: "net",
    omc: "com",
    orga: "org",
    ort: "org",
    rog: "org",
    vom: "com",
    xom: "com",
    xorg: "org"
}
  , Ne = ["gmail", "yahoo", "outlook", "hotmail", "icloud"];
function je(e) {
    return ct[e] ?? ""
}
function mt(e) {
    let n = e.length
      , r = "";
    if (Ne.includes(e.toLowerCase()))
        return r;
    for (const m of Ne) {
        const d = ut(m, e);
        d < n && d <= 2 && (n = d,
        r = m)
    }
    return r
}
function ut(e, n) {
    let r = e.toLowerCase().trim()
      , m = n.toLowerCase().trim();
    if (r === m)
        return 0;
    r.length > m.length && ([r,m] = [m, r]);
    const d = r.length
      , f = m.length;
    if (d === 0)
        return f;
    if (f === 0)
        return d;
    const c = []
      , h = [];
    for (let u = 0; u < d + 1; u += 1)
        c[u] = u,
        h[u] = 0;
    for (let u = 1; u < f + 1; u += 1) {
        h[0] = u;
        for (let p = 1; p < d + 1; p += 1) {
            const E = r[p - 1] === m[u - 1] ? 0 : 1;
            h[p] = Math.min(h[p - 1] + 1, c[p - 1] + E, c[p] + 1)
        }
        h.forEach((p,E)=>{
            c[E] = p
        }
        )
    }
    return h[h.length - 1]
}
const ce = {
    BEACONS: "beacons",
    MAILCHIMP: "mailchimp",
    SUBSTACK: "substack",
    ZAPIER: "zapier"
};
function pt(e) {
    return t.jsx(lt, {
        padding: "24px",
        ...e
    })
}
function ye({children: e, onChange: n, options: r, style: m, value: d, ...f}) {
    let c = a.useContext(_e);
    c = nt(Ve, c);
    const {opacity: h} = c.components
      , u = c.card.background_color + h
      , p = c.text.color
      , E = c.text.font_family
      , i = he(c);
    return t.jsx("div", {
        style: {
            borderRadius: i,
            border: `2px solid ${c.text.color}`
        },
        children: t.jsx(rt, {
            sx: {
                "& .MuiNativeSelect-select": {
                    backgroundColor: u,
                    fontFamily: E,
                    color: d ? p : `${p}80`
                }
            },
            onChange: n,
            value: d,
            inputProps: {
                className: "!bg-transparent p-3"
            },
            ...f,
            children: e
        })
    })
}
Le.extend(qe);
const Ae = Ke({
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    }
});
function pe(e) {
    return e.replace(/[^0-9]/g, "").length >= 15
}
function ht(e) {
    return !/[a-zA-Z]/g.test(e) && e.length >= 7
}
function Pe(e) {
    return e == null ? void 0 : e.split(".").slice(1).join(".")
}
function Dt({block: e, blockId: n}) {
    const {currentPageId: r, isComponent: m, firebaseUid: d, setCommunityDialogState: f, socialReferrer: c, subscriptionPlanIds: h, sessionToken: u} = a.useContext(me)
      , [p,E] = a.useState(!1)
      , [i,w] = a.useState("")
      , [o,v] = a.useState("")
      , [F,b] = a.useState(!1)
      , [C,R] = a.useState("")
      , [L,M] = a.useState("")
      , [I,y] = a.useState("")
      , [N,U] = a.useState("")
      , [j,D] = a.useState("")
      , [S,Y] = a.useState("")
      , [T,W] = a.useState("")
      , [A,H] = a.useState("")
      , [O,$] = a.useState(Te[0].label)
      , [l,g] = a.useState("")
      , [x,V] = a.useState("")
      , [k,K] = a.useState(!1)
      , [ue,ee] = a.useState(!1)
      , [te,se] = a.useState(!1)
      , J = z=>{
        w(z),
        b("")
    }
      , ae = a.useCallback(async()=>{
        var fe;
        if (m)
            return;
        const z = tt(st.THIRD_PARTY_EMAIL_SYNC, h) || e.email_destination !== ce.BEACONS
          , {information_type: B, show_email_field: re, show_phone_number_field: ie} = e
          , G = B ? B === Q.EMAIL : re
          , Z = B ? B === Q.SMS : ie
          , Fe = Pe(i.split("@")[1])
          , Me = !je(Fe)
          , oe = e.form_style === Ee.LINK
          , De = !G || G && Se(i) && Me
          , Oe = !Z || Z && ht(o)
          , $e = oe || !e.show_name_field || e.show_name_field && !!C
          , Be = oe || !e.show_first_name_field || e.show_first_name_field && !!L
          , Re = oe || !e.show_last_name_field || e.show_last_name_field && !!I
          , Ue = oe || !e.show_custom_field || !e.custom_field_text || e.show_custom_field && !!l;
        let X = !1;
        if (De ? b(!1) : (b(!0),
        X = !0),
        Oe ? se(!1) : (se(!0),
        X = !0),
        !$e || !Be || !Re ? (K(!0),
        X = !0) : K(!1),
        Ue ? ee(!1) : (ee(!0),
        X = !0),
        X)
            return;
        if (pe(C) || pe(i) || pe(l)) {
            E(!0),
            e != null && e.join_community_prompt_enabled && f(()=>({
                title: e.success_message,
                open: !0,
                acquisitionChannel: "email_sms_block"
            }));
            return
        }
        const q = C || `${L} ${I}`.trim();
        if (e.email_destination === ce.MAILCHIMP && z) {
            const ge = (fe = e == null ? void 0 : e.mailchimp) == null ? void 0 : fe.id;
            ge && await de("user_profile", {
                action: "add_mailchimp_email",
                firebase_uid: d,
                list_id: ge,
                email: i,
                full_name: q || null,
                custom: l || null
            })
        } else
            e.email_destination === ce.ZAPIER && e.zapier_webhook_url && z ? await de("user_profile", {
                action: "send_email_sms_to_zapier_webhook",
                webhook_url: e.zapier_webhook_url,
                email: G ? i : null,
                sms: Z ? o : null,
                full_name: q || null,
                custom: l || null,
                title: e.placeholder_text ? e.placeholder_text : null,
                block_id: n
            }) : e.email_destination === ce.SUBSTACK && e.substack_url && z && await de("user_profile", {
                action: "subscribe_to_substack",
                substack_url: e.substack_url,
                email: i
            });
        const He = new Date().getTime() / 1e3;
        await de("link_actions", {
            action: "add_email_to_list",
            email: i || null,
            time_added: He,
            firebase_uid: d,
            full_name: q || null,
            birthdate: x || null,
            address_line_1: N || null,
            address_line_2: j || null,
            city: S || null,
            region: T || null,
            country: O && e.show_country_field ? O : null,
            postal_code: A || null,
            custom: l || null,
            phone_number: o || null,
            origin_platform: c,
            source_app: at.LINK_IN_BIO,
            source_item_id: r,
            source_sub_item_id: n,
            subscriber_id: u
        }),
        E(!0),
        e != null && e.join_community_prompt_enabled && f(()=>({
            title: e.success_message,
            open: !0,
            acquisitionChannel: "email_sms_block"
        }))
    }
    , [N, j, x, e, n, S, O, r, l, i, d, L, C, m, I, o, A, u, f, c, T, h])
      , le = ke[ze.EMAIL](e)
      , s = a.useMemo(()=>{
        if (!Se(i))
            return "";
        const [z,B] = i == null ? void 0 : i.split("@")
          , [re] = B == null ? void 0 : B.split(".")
          , ie = Pe(B)
          , G = mt(re)
          , Z = je(ie);
        return !G && !Z ? "" : `${z}@${G || re}.${Z || ie}`
    }
    , [i])
      , ne = ()=>{
        w(s),
        b("")
    }
    ;
    return le ? e.form_style === Ee.LINK ? t.jsx(xt, {
        block: e,
        email: i,
        setEmail: J,
        phoneNumber: o,
        setPhoneNumber: v,
        emailError: F,
        phoneNumberError: te,
        onSubmit: ae,
        submitted: p,
        blockId: n,
        correctedEmail: s,
        onAcceptSuggestion: ne
    }) : t.jsx(_t, {
        block: e,
        email: i,
        setEmail: J,
        phoneNumber: o,
        setPhoneNumber: v,
        emailError: F,
        onSubmit: ae,
        submitted: p,
        fullName: C,
        setFullName: R,
        firstName: L,
        setFirstName: M,
        lastName: I,
        setLastName: y,
        addressLine1: N,
        setAddressLine1: U,
        addressLine2: j,
        setAddressLine2: D,
        city: S,
        setCity: Y,
        region: T,
        setRegion: W,
        postalCode: A,
        setPostalCode: H,
        country: O,
        setCountry: $,
        birthdate: x,
        setBirthdate: V,
        customFieldValue: l,
        setCustomFieldValue: g,
        nameError: k,
        customFieldError: ue,
        phoneNumberError: te,
        blockId: n,
        correctedEmail: s,
        onAcceptSuggestion: ne
    }) : null
}
function xt({block: e, email: n, setEmail: r, phoneNumber: m, setPhoneNumber: d, emailError: f, phoneNumberError: c, onSubmit: h, submitted: u, blockId: p, correctedEmail: E, onAcceptSuggestion: i}) {
    var D;
    const {displayUsername: w} = a.useContext(me)
      , o = a.useContext(_e)
      , v = he(o)
      , [F,b] = a.useState(!1)
      , [C,R] = a.useState(!1)
      , L = Ae()
      , M = `You're all set! Be sure to look out for my emails from: ${w}@my.beacons.email. Or add me as a contact!`
      , I = `Subscribe to ${w}`;
    if (u)
        return t.jsx(_, {
            className: "FlexCenterCenter",
            tag: "center",
            style: {
                height: 65,
                fontWeight: "bold"
            },
            children: e.success_message || M
        });
    const y = o.card.outline ? `2px solid ${o.text.color}` : 0
      , {information_type: N, show_email_field: U} = e
      , j = N ? N === Q.EMAIL : U;
    return t.jsxs("center", {
        "data-testid": p,
        style: o.components.theme === Ye.FULL_WIDTH ? {
            paddingLeft: 20,
            paddingRight: 20
        } : {},
        children: [t.jsxs("form", {
            onSubmit: S=>{
                S.preventDefault(),
                h()
            }
            ,
            children: [t.jsx(P, {
                placeholder: e.placeholder_text || I,
                value: j ? n : m,
                onChange: S=>{
                    j ? r(S.target.value) : d(S.target.value)
                }
                ,
                error: j ? f : c,
                InputProps: {
                    classes: L,
                    inputProps: {
                        "aria-label": j ? "email input" : "phone number input"
                    }
                },
                className: "EmailTextField LinkStyle",
                style: {
                    height: o.card.outline ? 42 : 46,
                    borderRadius: `${v}px 0px 0px ${v}px`,
                    borderLeft: y,
                    borderTop: y,
                    borderBottom: y,
                    boxShadow: Ce(o.card.shadow, o.components.opacity, o.card.background_color)
                },
                onFocus: ()=>b(!0),
                onBlur: ()=>b(!1)
            }), t.jsx(we, {
                "aria-label": "profile email block submit button",
                variant: "contained",
                type: "submit",
                className: "EmailButton LinkStyle",
                style: {
                    borderRadius: `0px ${v}px ${v}px 0px`,
                    borderLeft: `2px solid ${o.text.color}`,
                    borderTop: y,
                    borderBottom: y,
                    borderRight: y,
                    boxShadow: Ce(o.card.shadow, o.components.opacity, o.card.background_color)
                },
                children: e.submit_text || be
            })]
        }), f && t.jsx(_, {
            style: {
                marginTop: 6
            },
            children: "Please enter a valid email."
        }), E && t.jsxs(_, {
            tag: "center",
            style: {
                marginTop: 8
            },
            children: ["Did you mean", " ", t.jsxs("span", {
                className: "cursor-pointer underline",
                role: "button",
                tabIndex: 0,
                onClick: i,
                children: [E, "?"]
            })]
        }), c && t.jsx(_, {
            style: {
                marginTop: 6
            },
            children: "Please enter a valid phone number."
        }), e.legal_enabled && !!e.legal_text && (F || !!n) && t.jsxs(t.Fragment, {
            children: [t.jsx(_, {
                tag: "center",
                className: xe("mt-2 text-12", {
                    LineClamp1: !C
                }),
                children: t.jsx(_, {
                    tag: e.legal_url ? "a" : "div",
                    href: e.legal_url,
                    target: "_blank",
                    rel: "noreferrer",
                    children: e.legal_text
                })
            }), ((D = e.legal_text) == null ? void 0 : D.length) > 50 && t.jsx(_, {
                tag: "center",
                className: "mt-2 text-12 cursor-pointer",
                onClick: ()=>R(S=>!S),
                children: C ? "Less" : "More"
            })]
        })]
    })
}
function _t({block: e, email: n, setEmail: r, phoneNumber: m, setPhoneNumber: d, emailError: f, onSubmit: c, submitted: h, fullName: u, setFullName: p, firstName: E, setFirstName: i, lastName: w, setLastName: o, addressLine1: v, setAddressLine1: F, addressLine2: b, setAddressLine2: C, city: R, setCity: L, region: M, setRegion: I, postalCode: y, setPostalCode: N, country: U, setCountry: j, birthdate: D, setBirthdate: S, customFieldValue: Y, setCustomFieldValue: T, nameError: W, customFieldError: A, phoneNumberError: H, blockId: O, correctedEmail: $, onAcceptSuggestion: l}) {
    const {displayUsername: g} = a.useContext(me)
      , x = `You're all set! Be sure to look out for my emails from: ${g}@my.beacons.email. Or add me as a contact!`
      , V = `Subscribe to ${g}`;
    return h ? t.jsx(pt, {
        children: t.jsx(_, {
            tag: "center",
            style: {
                fontSize: 20,
                fontWeight: "bold"
            },
            children: t.jsx(et, {
                children: e.success_message || x
            })
        })
    }) : e.collapse_style === We.COLLAPSED ? t.jsx("div", {
        "data-testid": O,
        children: t.jsx(ft, {
            title: e.placeholder_text || V,
            children: t.jsx(ve, {
                block: e,
                email: n,
                setEmail: r,
                emailError: f,
                phoneNumber: m,
                setPhoneNumber: d,
                onSubmit: c,
                submitted: h,
                fullName: u,
                setFullName: p,
                firstName: E,
                setFirstName: i,
                lastName: w,
                setLastName: o,
                addressLine1: v,
                setAddressLine1: F,
                addressLine2: b,
                setAddressLine2: C,
                city: R,
                setCity: L,
                region: M,
                setRegion: I,
                postalCode: y,
                setPostalCode: N,
                country: U,
                setCountry: j,
                birthdate: D,
                setBirthdate: S,
                customFieldValue: Y,
                setCustomFieldValue: T,
                nameError: W,
                customFieldError: A,
                phoneNumberError: H,
                correctedEmail: $,
                onAcceptSuggestion: l
            })
        })
    }) : t.jsxs(Ie, {
        "data-testid": O,
        children: [t.jsx(_, {
            tag: "center",
            style: {
                fontSize: 18,
                fontWeight: "bold"
            },
            children: e.placeholder_text || V
        }), t.jsx(ve, {
            block: e,
            email: n,
            setEmail: r,
            phoneNumber: m,
            setPhoneNumber: d,
            emailError: f,
            onSubmit: c,
            submitted: h,
            fullName: u,
            setFullName: p,
            firstName: E,
            setFirstName: i,
            lastName: w,
            setLastName: o,
            addressLine1: v,
            setAddressLine1: F,
            addressLine2: b,
            setAddressLine2: C,
            city: R,
            setCity: L,
            region: M,
            setRegion: I,
            postalCode: y,
            setPostalCode: N,
            country: U,
            setCountry: j,
            birthdate: D,
            setBirthdate: S,
            customFieldValue: Y,
            setCustomFieldValue: T,
            nameError: W,
            customFieldError: A,
            phoneNumberError: H,
            correctedEmail: $,
            onAcceptSuggestion: l
        })]
    })
}
function ft({children: e, title: n}) {
    const [r,m] = a.useState(!1);
    return t.jsxs(Ie, {
        className: "relative transition-all",
        padding: 16,
        children: [t.jsx(_, {
            children: t.jsxs("div", {
                className: "cursor-pointer flex items-center justify-center",
                onClick: ()=>m(d=>!d),
                role: "button",
                tabIndex: "0",
                children: [t.jsx("div", {
                    className: "title",
                    children: n
                }), t.jsx("div", {
                    className: xe("absolute right-4 flex items-center transition-transform", {
                        "rotate-180": r
                    }),
                    children: t.jsx(Ze, {})
                })]
            })
        }), t.jsx(it, {
            in: r,
            timeout: "auto",
            children: e
        })]
    })
}
function ve({block: e, email: n, setEmail: r, phoneNumber: m, setPhoneNumber: d, emailError: f, onSubmit: c, fullName: h, setFullName: u, firstName: p, setFirstName: E, lastName: i, setLastName: w, addressLine1: o, setAddressLine1: v, addressLine2: F, setAddressLine2: b, city: C, setCity: R, region: L, setRegion: M, postalCode: I, setPostalCode: y, country: N, setCountry: U, birthdate: j, setBirthdate: D, customFieldValue: S, setCustomFieldValue: Y, nameError: T, customFieldError: W, phoneNumberError: A, correctedEmail: H, onAcceptSuggestion: O}) {
    var le;
    const {isComponent: $} = a.useContext(me)
      , l = a.useContext(_e)
      , g = he(l)
      , x = Ae()
      , [V,k] = a.useState(!1)
      , {information_type: K, show_email_field: ue, show_phone_number_field: ee} = e
      , te = K ? K === Q.EMAIL : ue
      , se = K ? K === Q.SMS : ee
      , J = N === "United States"
      , ae = N === "Canada";
    return t.jsxs(t.Fragment, {
        children: [t.jsx(_, {
            tag: "center",
            className: "mt-3",
            children: e.description || Ge
        }), t.jsx("form", {
            onSubmit: s=>{
                s.preventDefault(),
                c()
            }
            ,
            children: t.jsxs("center", {
                className: "mt-4",
                children: [e.show_name_field && t.jsx("div", {
                    className: "mt-3",
                    children: t.jsx(P, {
                        placeholder: "Full Name",
                        value: h,
                        onChange: s=>u(s.target.value),
                        error: T,
                        InputProps: {
                            classes: x,
                            inputProps: {
                                "aria-label": "email name input"
                            }
                        },
                        className: "EmailTextField CardStyle",
                        style: {
                            borderRadius: g,
                            border: `2px solid ${l.text.color}`
                        }
                    })
                }), e.show_first_name_field && t.jsx("div", {
                    className: "mt-3",
                    children: t.jsx(P, {
                        placeholder: "First Name",
                        value: p,
                        onChange: s=>E(s.target.value),
                        error: T,
                        InputProps: {
                            classes: x,
                            inputProps: {
                                "aria-label": "email first name input"
                            }
                        },
                        className: "EmailTextField CardStyle",
                        style: {
                            borderRadius: g,
                            border: `2px solid ${l.text.color}`
                        }
                    })
                }), e.show_last_name_field && t.jsx("div", {
                    className: "mt-3",
                    children: t.jsx(P, {
                        placeholder: "Last Name",
                        value: i,
                        onChange: s=>w(s.target.value),
                        error: T,
                        InputProps: {
                            classes: x,
                            inputProps: {
                                "aria-label": "email last name input"
                            }
                        },
                        className: "EmailTextField CardStyle",
                        style: {
                            borderRadius: g,
                            border: `2px solid ${l.text.color}`
                        }
                    })
                }), T && t.jsx(_, {
                    tag: "center",
                    style: {
                        marginTop: 6
                    },
                    children: "Name field cannot be blank."
                }), te && t.jsx("div", {
                    className: "mt-3",
                    children: t.jsx(P, {
                        placeholder: "Email",
                        value: n,
                        onChange: s=>r(s.target.value),
                        error: f,
                        InputProps: {
                            classes: x,
                            inputProps: {
                                "aria-label": "email input multiple card"
                            }
                        },
                        className: "EmailTextField CardStyle",
                        style: {
                            borderRadius: g,
                            border: `2px solid ${l.text.color}`
                        }
                    })
                }), f && t.jsx(_, {
                    tag: "center",
                    style: {
                        marginTop: 6
                    },
                    children: "Please enter a valid email."
                }), H && t.jsxs(_, {
                    tag: "center",
                    style: {
                        marginTop: 8
                    },
                    children: ["Did you mean", " ", t.jsxs("span", {
                        className: "cursor-pointer underline",
                        role: "button",
                        tabIndex: 0,
                        onClick: O,
                        children: [H, "?"]
                    })]
                }), se && t.jsx("div", {
                    className: "mt-3",
                    children: t.jsx(P, {
                        placeholder: "Phone Number",
                        value: m,
                        onChange: s=>d(s.target.value),
                        error: A,
                        InputProps: {
                            classes: x,
                            inputProps: {
                                "aria-label": "phone number input"
                            }
                        },
                        className: "EmailTextField CardStyle",
                        style: {
                            borderRadius: g,
                            border: `2px solid ${l.text.color}`
                        }
                    })
                }), A && t.jsx(_, {
                    tag: "center",
                    style: {
                        marginTop: 6
                    },
                    children: "Please enter a valid phone number."
                }), e.show_address_line_1_field && t.jsx("div", {
                    className: "mt-3",
                    children: t.jsx(P, {
                        placeholder: "Address",
                        value: o,
                        onChange: s=>v(s.target.value),
                        InputProps: {
                            classes: x,
                            inputProps: {
                                "aria-label": "email address line 1 input"
                            }
                        },
                        className: "EmailTextField CardStyle",
                        style: {
                            borderRadius: g,
                            border: `2px solid ${l.text.color}`
                        }
                    })
                }), e.show_address_line_2_field && t.jsx("div", {
                    className: "mt-3",
                    children: t.jsx(P, {
                        placeholder: "Apt. / Suite (optional)",
                        value: F,
                        onChange: s=>b(s.target.value),
                        InputProps: {
                            classes: x,
                            inputProps: {
                                "aria-label": "email address line 2 input"
                            }
                        },
                        className: "EmailTextField CardStyle",
                        style: {
                            borderRadius: g,
                            border: `2px solid ${l.text.color}`
                        }
                    })
                }), e.show_city_field && t.jsx("div", {
                    className: "mt-3",
                    children: t.jsx(P, {
                        placeholder: "City / Town",
                        value: C,
                        onChange: s=>R(s.target.value),
                        InputProps: {
                            classes: x,
                            inputProps: {
                                "aria-label": "email city input"
                            }
                        },
                        className: "EmailTextField CardStyle",
                        style: {
                            borderRadius: g,
                            border: `2px solid ${l.text.color}`
                        }
                    })
                }), e.show_region_field && t.jsx("div", {
                    children: J || ae ? t.jsx("div", {
                        className: "mt-3",
                        children: t.jsx(ye, {
                            fullWidth: !0,
                            disableUnderline: !0,
                            value: L,
                            onChange: s=>{
                                M(s.target.value)
                            }
                            ,
                            children: J ? t.jsxs(t.Fragment, {
                                children: [t.jsx("option", {
                                    hidden: !0,
                                    children: "Select State"
                                }), Xe.map(s=>t.jsx("option", {
                                    value: s.label,
                                    children: s.label
                                }, s.code))]
                            }) : t.jsxs(t.Fragment, {
                                children: [t.jsx("option", {
                                    hidden: !0,
                                    children: "Select Province"
                                }), Qe.map(s=>t.jsx("option", {
                                    value: s.label,
                                    children: s.label
                                }, s.code))]
                            })
                        })
                    }) : t.jsx("div", {
                        className: "mt-3",
                        children: t.jsx(P, {
                            placeholder: "State / Province / Region",
                            value: L,
                            onChange: s=>M(s.target.value),
                            InputProps: {
                                classes: x,
                                inputProps: {
                                    "aria-label": "email region input"
                                }
                            },
                            className: "EmailTextField CardStyle",
                            style: {
                                borderRadius: g,
                                border: `2px solid ${l.text.color}`
                            }
                        })
                    })
                }), e.show_postal_code_field && t.jsx("div", {
                    className: "mt-3",
                    children: t.jsx(P, {
                        placeholder: "Zip / Postal Code",
                        value: I,
                        onChange: s=>y(s.target.value),
                        InputProps: {
                            classes: x,
                            inputProps: {
                                "aria-label": "email postal code input"
                            }
                        },
                        className: "EmailTextField CardStyle",
                        style: {
                            border: `2px solid ${l.text.color}`
                        }
                    })
                }), e.show_country_field && t.jsx("div", {
                    className: "mt-3",
                    children: t.jsxs(ye, {
                        fullWidth: !0,
                        disableUnderline: !0,
                        name: "country",
                        value: N,
                        onChange: s=>{
                            U(s.target.value)
                        }
                        ,
                        children: [t.jsx("option", {
                            hidden: !0,
                            children: "Select Country"
                        }), Te.map(s=>t.jsx("option", {
                            value: s.label,
                            children: s.label
                        }, `option-${s.code}`))]
                    })
                }), e.show_birthdate_field && t.jsx(ot, {
                    dateAdapter: Je,
                    children: t.jsx("div", {
                        className: "mt-3 ",
                        children: t.jsx(dt, {
                            value: Le(j),
                            onChange: s=>{
                                if ($)
                                    return;
                                const ne = new Date(s);
                                D(ne)
                            }
                            ,
                            disableFuture: !0,
                            slots: {
                                textField: P
                            },
                            slotProps: {
                                textField: {
                                    className: "EmailTextField CardStyle !pr-3 !box-border !h-full",
                                    style: {
                                        borderRadius: g,
                                        border: `2px solid ${l.text.color}`
                                    },
                                    InputProps: {
                                        classes: x
                                    },
                                    inputProps: {
                                        placeholder: "Birthday"
                                    }
                                }
                            },
                            inputProps: {
                                readOnly: !0
                            }
                        })
                    })
                }), e.show_custom_field && !!e.custom_field_text && t.jsx("div", {
                    className: "mt-3 ",
                    children: t.jsx(P, {
                        placeholder: e.custom_field_text,
                        value: S,
                        onChange: s=>Y(s.target.value),
                        InputProps: {
                            classes: x,
                            inputProps: {
                                "aria-label": "email custom input"
                            }
                        },
                        className: "EmailTextField CardStyle",
                        style: {
                            borderRadius: g,
                            border: `2px solid ${l.text.color}`
                        }
                    })
                }), W && t.jsx(_, {
                    tag: "center",
                    style: {
                        marginTop: 6
                    },
                    children: "Field cannot be blank."
                }), t.jsx("div", {
                    className: "mt-4",
                    children: t.jsx(we, {
                        "aria-label": "profile email block submit button",
                        variant: "contained",
                        type: "submit",
                        className: "EmailButton CardStyle",
                        invert: !0,
                        style: {
                            borderRadius: g
                        },
                        children: e.submit_text || be
                    })
                })]
            })
        }), e.legal_enabled && !!e.legal_text && t.jsxs(t.Fragment, {
            children: [t.jsx(_, {
                tag: "center",
                className: xe("mt-2 text-12", {
                    LineClamp1: !V
                }),
                children: t.jsx(_, {
                    tag: e.legal_url ? "a" : "div",
                    href: $ ? "#" : e.legal_url,
                    target: $ ? void 0 : "_blank",
                    rel: $ ? void 0 : "noreferrer",
                    children: e.legal_text
                })
            }), ((le = e.legal_text) == null ? void 0 : le.length) > 50 && t.jsx(_, {
                tag: "center",
                className: "mt-2 text-12 cursor-pointer",
                onClick: ()=>k(s=>!s),
                children: V ? "Less" : "More"
            })]
        })]
    })
}
export {ce as E, Dt as J, pt as P, ht as i};
//# debugId=bc86c39d-bb0a-599a-88ad-dc7a481640ef
//# sourceMappingURL=Email-acefa7ff.js.map
