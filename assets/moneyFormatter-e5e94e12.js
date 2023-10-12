!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "2acb1554-85f7-5fae-8ac6-a6918cada14d")
    } catch (e) {}
}();
const n = {
    aud: {
        currency: "aud",
        minorUnitDivisor: 100,
        minimumCharge: 50
    },
    cad: {
        currency: "cad",
        minorUnitDivisor: 100,
        minimumCharge: 50
    },
    eur: {
        currency: "eur",
        minorUnitDivisor: 100,
        minimumCharge: 50
    },
    gbp: {
        currency: "gbp",
        minorUnitDivisor: 100,
        minimumCharge: 30
    },
    jpy: {
        currency: "jpy",
        minorUnitDivisor: 1,
        minimumCharge: 50
    },
    mxn: {
        currency: "mxn",
        minorUnitDivisor: 100,
        minimumCharge: 1e3
    },
    usd: {
        currency: "usd",
        minorUnitDivisor: 100,
        minimumCharge: 50
    }
};
function a(m, i) {
    const r = Math.round(m) / n[i].minorUnitDivisor
      , o = Math.round(Math.log10(n[i].minorUnitDivisor));
    return new Intl.NumberFormat(window.navigator.language,{
        localeMatcher: "best fit",
        style: "currency",
        currency: i,
        maximumFractionDigits: o,
        minimumFractionDigits: r % 1 === 0 ? 0 : 2
    }).format(r)
}
export {a as m};
//# debugId=2acb1554-85f7-5fae-8ac6-a6918cada14d
//# sourceMappingURL=moneyFormatter-e5e94e12.js.map
