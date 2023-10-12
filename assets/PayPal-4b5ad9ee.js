!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "dedf88e2-a470-5574-b3bf-d15bebbd8a53")
    } catch (e) {}
}();
import {j as e, aC as h, B as r, r as s, l as G, e as p, w as Q} from "./index-4d92c338.js";
import {e as q} from "./CDN_URLS-53881ca1.js";
import {r as w, i as k} from "./createSvgIcon-d5208ee1.js";
import {u as J} from "./useIsMobile-131a099e.js";
import {P as X} from "./ProfileGlobalsContext-8982728f.js";
const ee = {
    CARD: "card",
    US_BANK_ACCOUNT: "us_bank_account"
};
var S = {}
  , te = k;
Object.defineProperty(S, "__esModule", {
    value: !0
});
var f = S.default = void 0
  , se = te(w())
  , _e = e
  , ae = (0,
se.default)((0,
_e.jsx)("path", {
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
}), "Lock");
f = S.default = ae;
function Ae({sendingPayment: t, uploadProgress: a, order: _}) {
    return t ? a ? [e.jsx(h, {
        size: 10,
        color: "#a6a6a6",
        css: {
            display: "inline",
            marginRight: "10px"
        }
    }, 0), e.jsxs("span", {
        children: ["Uploading... ", a.toFixed(0), "%"]
    }, 1)] : e.jsx("span", {
        style: {
            marginTop: 4
        },
        children: e.jsx(h, {
            size: 10,
            color: "white"
        })
    }) : _.bid === 0 || _.discounted_bid === 0 ? "Submit" : _.discounted_bid ? e.jsxs("div", {
        className: "flex items-center",
        children: [e.jsx(f, {
            className: "mr-2"
        }), "Secure Pay", e.jsxs("div", {
            className: "mx-2 line-through",
            children: [" $", _.bid / 100]
        }), "$", (_.discounted_bid / 100).toFixed(2)]
    }) : e.jsxs("div", {
        className: "flex items-center",
        children: [e.jsx(f, {
            className: "mr-2"
        }), "Secure Pay $", _.bid / 100]
    })
}
function Te({buttonDisabled: t, order: a, payErrorMessage: _, paymentMethod: d, sendingPayment: o, uploadProgress: T, ctaBackgroundColor: P, ctaTextColor: C}) {
    const m = a.bid === 0 || a.discounted_bid === 0
      , R = o || t;
    return e.jsxs("div", {
        children: [e.jsx(r, {
            "aria-label": "secure stripe payment button",
            type: "submit",
            intent: "primary",
            disabled: R,
            fullWidth: !0,
            normalHeight: !0,
            style: P && !R ? {
                backgroundColor: P,
                color: C
            } : void 0,
            children: e.jsx(Ae, {
                sendingPayment: o,
                uploadProgress: T,
                order: a
            })
        }), !o && _ && e.jsx("div", {
            className: "text-center font-bold text-12 mt-2",
            children: _
        }), !m && e.jsx(e.Fragment, {
            children: d === ee.US_BANK_ACCOUNT ? e.jsx("div", {
                className: "text-center text-gray-500 mt-2 text-12",
                children: "Your information is secured using AES-256 encryption."
            }) : e.jsxs(e.Fragment, {
                children: [e.jsx("div", {
                    className: "text-center text-gray-500 mt-2 text-12",
                    children: "Your card is secured using AES-256 encryption."
                }), e.jsx("div", {
                    className: "flex justify-center",
                    children: e.jsx("img", {
                        alt: "credit card logo",
                        src: `${q}/logos/credit_card_logos_transparent.webp`,
                        className: "h-10"
                    })
                })]
            })
        })]
    })
}
const ie = {
    PRODUCT_PAGE: "product-page",
    LINK_IN_BIO: "link-in-bio"
}
  , Re = {
    BOOKING: "booking",
    PAYMENT_LINK: "payment_link",
    REQUEST: "request",
    STORE: "store_purchase",
    SUPPORT: "support"
};
var b = {}
  , ce = k;
Object.defineProperty(b, "__esModule", {
    value: !0
});
var O = b.default = void 0
  , Ee = ce(w())
  , re = e
  , ne = (0,
Ee.default)((0,
re.jsx)("path", {
    d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
}), "CreditCard");
O = b.default = ne;
const F = t=>s.createElement("svg", {
    width: 24,
    height: 32,
    viewBox: "0 0 24 32",
    preserveAspectRatio: "xMinYMin meet",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
}, s.createElement("path", {
    fill: "#009cde",
    opacity: 1,
    d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157"
}), s.createElement("path", {
    fill: "#012169",
    opacity: 1,
    d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157"
}), s.createElement("path", {
    fill: "#003087",
    opacity: 1,
    d: "M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z"
}))
  , L = t=>s.createElement("svg", {
    viewBox: "0 0 101 32",
    preserveAspectRatio: "xMinYMin meet",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
}, s.createElement("path", {
    fill: "#003087",
    d: "M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"
}), s.createElement("path", {
    fill: "#003087",
    d: "M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"
}), s.createElement("path", {
    fill: "#003087",
    d: "M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"
}), s.createElement("path", {
    fill: "#009cde",
    d: "M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"
}), s.createElement("path", {
    fill: "#009cde",
    d: "M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"
}), s.createElement("path", {
    fill: "#009cde",
    d: "M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"
}));
function ue({orderInfo: t, allowPay: a, allowCreditCard: _, orderType: d, paymentSuccessEndpoint: o, setSuccessfullyPaid: T, setSuccessfulPaymentCallback: P, isRequest: C, dynamicHidePayment: m, beaconsOrigin: R=ie.LINK_IN_BIO, isPreview: U=!1}) {
    const {paymentProperties: A, socialReferrer: v} = s.useContext(X)
      , n = J()
      , [y,V] = s.useState(!1)
      , [I,j] = s.useState(void 0)
      , [M,g] = s.useState("")
      , [u,N] = s.useState(!1)
      , [D,z] = s.useState(!1)
      , B = !!(A != null && A.disable_payments)
      , x = !!(A != null && A.paypal_marketplace);
    if (s.useEffect(()=>{
        if (!x || !A || U)
            return;
        const l = document.createElement("script")
          , c = C ? "authorize" : "capture"
          , E = !!(A != null && A.paypal_marketplace) ? `https://www.paypal.com/sdk/js?currency=USD&intent=${c}&client-id=Ab4p25Ko9wma0ivaRaxmrmyS0ORLMesJQA1ZHM8bpT5fz_h7RwcrA4IS93YJqDudEvklj1U2QKBxwpVY&merchant-id=${A.paypal_marketplace}` : `https://www.paypal.com/sdk/js?currency=USD&intent=${c}&client-id=AcgSzUtGFcu23ftZ92moLEXAxNAK3sfblgdfQLmKGf5KNUMDTUi-2e6Yc6eOH8BtRXIh06I2BPNBdtk5`;
        l.src = E,
        l.onload = ()=>V(!0),
        document.body.appendChild(l)
    }
    , [x, C, A, U]),
    s.useEffect(()=>{
        if (!y)
            return ()=>{}
            ;
        const l = _ ? void 0 : window.paypal.FUNDING.PAYPAL
          , c = window.paypal.Buttons({
            createOrder: async()=>{
                const i = await G("manage_order", {
                    action: "generate_paypal_intent",
                    amount: t.bid / 100,
                    beacons_order_id: t.id,
                    beacons_username: t.creator_username,
                    firebase_uid: t.firebase_uid,
                    order_type: d,
                    is_request: !!C,
                    discount_code_id: t.discount_code_id
                });
                console.log(i);
                const E = i.data.order_info.order_id;
                return E || (g("Something went wrong. Please try again."),
                null)
            }
            ,
            onApprove: async(i,E)=>{
                console.info("onApprove: ", i),
                j({
                    actions: E,
                    data: i
                })
            }
            ,
            onError: i=>{
                console.info("onError: ", i)
            }
            ,
            fundingSource: l
        });
        return c.render("#paypal-button-container"),
        ()=>c.close()
    }
    , [_, y, t.bid, t.id, t.firebase_uid, t.creator_username, t.discount_code_id, C, d]),
    s.useEffect(()=>{
        (async()=>{
            if (!I)
                return;
            N(!0);
            const {data: c} = I;
            j(void 0);
            const i = (c == null ? void 0 : c.paymentSource) === "card";
            i && z(!0);
            const E = await G("manage_order", {
                action: o,
                paypal_order_id: c.orderID,
                order: {
                    ...t,
                    payin_method: i ? "credit_card" : "paypal"
                },
                origin_platform: v,
                beacons_origin: R
            });
            console.log(E);
            const H = E.data.error_message;
            if (H) {
                g(H),
                N(!1);
                return
            }
            T && T(!0),
            P && P(E.data),
            N(!1)
        }
        )()
    }
    , [I, t, o, T, P, v, R]),
    !x)
        return null;
    const Z = a && !u && !B
      , K = !a
      , $ = a && u && !D
      , W = a && u && D
      , Y = a && !u && !!B;
    return e.jsxs("div", {
        style: {
            display: (t.bid === 0 || t.discounted_bid === 0) && m ? "none" : "initial"
        },
        children: [e.jsx("div", {
            "aria-label": "paypal button container",
            id: "paypal-button-container",
            style: {
                display: Z ? "inherit" : "none"
            }
        }), e.jsxs("div", {
            className: p({
                "flex flex-col": K,
                hidden: !K
            }),
            children: [e.jsx(r, {
                fullWidth: !0,
                disabled: !0,
                style: {
                    height: n ? 35 : 45,
                    borderRadius: 4
                },
                children: e.jsx(L, {
                    style: {
                        height: 22
                    }
                })
            }), e.jsxs("div", {
                className: p({
                    hidden: !_
                }, "flex flex-col"),
                children: [e.jsx("div", {
                    className: "mt-3"
                }), e.jsx(r, {
                    fullWidth: !0,
                    disabled: !0,
                    style: {
                        height: n ? 35 : 45,
                        borderRadius: 4
                    },
                    children: e.jsxs("div", {
                        className: "flex items-center justify-center",
                        children: [e.jsx(F, {
                            style: {
                                height: 22
                            }
                        }), e.jsx("div", {
                            className: "-ml-1 text-16",
                            children: "Pay Later"
                        })]
                    })
                }), e.jsx("div", {
                    className: "mt-3"
                }), e.jsx(r, {
                    fullWidth: !0,
                    disabled: !0,
                    preIcon: e.jsx(O, {
                        className: "-mr-1 mb-0.5 h-8 w-8"
                    }),
                    style: {
                        height: n ? 35 : 45,
                        borderRadius: 4
                    },
                    children: e.jsx("div", {
                        className: "text-16",
                        children: "Debit or Credit Card"
                    })
                }), e.jsxs("div", {
                    className: "mt-3 flex items-center justify-center",
                    children: [e.jsx("div", {
                        className: "text-[11px] text-gray-500 italic mr-1",
                        children: "Powered by"
                    }), e.jsx(L, {
                        style: {
                            height: 16
                        }
                    })]
                })]
            })]
        }), e.jsxs("div", {
            className: p({
                "flex flex-col": Y,
                hidden: !Y
            }, "cursor-pointer"),
            children: [e.jsx(r, {
                fullWidth: !0,
                style: {
                    backgroundColor: "#ffc439",
                    height: n ? 35 : 45,
                    borderRadius: 4
                },
                children: e.jsx(L, {
                    style: {
                        height: 22
                    }
                })
            }), e.jsxs("div", {
                className: p({
                    hidden: !_
                }, "flex flex-col"),
                children: [e.jsx("div", {
                    className: "mt-3"
                }), e.jsx(r, {
                    fullWidth: !0,
                    style: {
                        backgroundColor: "#ffc439",
                        height: n ? 35 : 45,
                        borderRadius: 4
                    },
                    children: e.jsxs("div", {
                        className: "flex items-center justify-center",
                        children: [e.jsx(F, {
                            style: {
                                height: 22
                            }
                        }), e.jsx("div", {
                            className: "-ml-1 text-gray-800 text-16",
                            children: "Pay Later"
                        })]
                    })
                }), e.jsx("div", {
                    className: "mt-3"
                }), e.jsx(r, {
                    fullWidth: !0,
                    preIcon: e.jsx(O, {
                        className: "-mr-1 mb-0.5 h-8 w-8"
                    }),
                    style: {
                        backgroundColor: "#2C2E2F",
                        height: n ? 35 : 45,
                        borderRadius: 4
                    },
                    children: e.jsx("div", {
                        className: "text-16",
                        children: "Debit or Credit Card"
                    })
                }), e.jsxs("div", {
                    className: "mt-3 flex items-center justify-center",
                    children: [e.jsx("div", {
                        className: "text-[11px] text-gray-500 italic mr-1",
                        children: "Powered by"
                    }), e.jsx(L, {
                        style: {
                            height: 16
                        }
                    })]
                })]
            })]
        }), e.jsx("div", {
            style: {
                display: $ ? "flex" : "none",
                height: n ? 35 : 45,
                backgroundColor: "#ffc439",
                justifyContent: "center",
                alignItems: "center"
            },
            children: e.jsx(h, {
                color: "white",
                size: 10
            })
        }), e.jsx("div", {
            style: {
                display: W ? "flex" : "none"
            },
            className: "w-full justify-center",
            children: e.jsx(r, {
                size: Q.FAB,
                fullWidth: !0,
                style: {
                    backgroundColor: "#0070ba"
                },
                className: "max-w-[400px]",
                children: e.jsx(h, {
                    color: "white",
                    size: 10
                })
            })
        }), !!M && e.jsx("center", {
            className: "text-small ErrorText MarginTopS",
            children: M
        })]
    })
}
export {ie as B, Re as O, Te as P, L as S, ee as a, ue as b, f as d};
//# debugId=dedf88e2-a470-5574-b3bf-d15bebbd8a53
//# sourceMappingURL=PayPal-4b5ad9ee.js.map
