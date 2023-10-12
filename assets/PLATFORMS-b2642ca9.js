!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "3507e7af-7c2e-5d70-a4c7-bf79fe80b81c")
    } catch (e) {}
}();
const a = {
    APPLE: "apple",
    APPLEMUSIC: "applemusic",
    AMAZON: "amazon",
    ANCHORFM: "anchorfm",
    BANDCAMP: "bandcamp",
    BEACONS: "beacons",
    BEHANCE: "behance",
    BITLY: "bitly",
    CALENDLY: "calendly",
    CAMEO: "cameo",
    CANVA: "canva",
    CASHAPP: "cashapp",
    CLAPPER: "clapper",
    COLDEST: "coldest",
    CURRENTUS: "currentus",
    DEPOP: "depop",
    DISCORD: "discord",
    DISTROKID: "distrokid",
    ETSY: "etsy",
    FACEBOOK: "facebook",
    FANSLY: "fansly",
    GOFUNDME: "gofundme",
    GOODREADS: "goodreads",
    GOOGLE: "google",
    GOOGLEDOCS: "googledocs",
    GOOGLEDRIVE: "googledrive",
    GOOGLEFORM: "googleform",
    GOOGLEPLAY: "googleplay",
    HONEYGAIN: "honeygain",
    HOTMART: "hotmart",
    INSTAGRAM: "instagram",
    JOTFORM: "jotform",
    KOFI: "kofi",
    LIKETOKNOW: "liketoknow",
    LINKEDIN: "linkedin",
    LINKTREE: "linktree",
    MAILCHIMP: "mailchimp",
    MANYVIDS: "manyvids",
    MESSENGER: "messenger",
    MILKSHAKE: "milkshake",
    ONELINK: "onelink",
    ONLYFANS: "onlylink",
    OTHER: "other",
    PATREON: "patreon",
    PAYPAL: "paypal",
    PINTEREST: "pinterest",
    POCKETSTARS: "pocketstars",
    PORNHUB: "pornhub",
    REDBUBBLE: "redbubble",
    REDDIT: "reddit",
    SHOPEE: "shopee",
    SNAPCHAT: "snapchat",
    SOUNDCLOUD: "soundcloud",
    SPOTIFY: "spotify",
    TEESPRING: "teespring",
    TELEGRAM: "telegram",
    TELLONYM: "tellonym",
    TIKTOK: "tiktok",
    TINYYURL: "tinyurl",
    TOKOPEDIA: "tokopedia",
    TWITCH: "twitch",
    TWITTER: "twitter",
    VENMO: "venmo",
    VIMEO: "vimeo",
    VSCO: "vsco",
    WATTPAD: "wattpad",
    WHATSAPP: "whatsapp",
    YOUTUBE: "youtube"
}
  , o = {
    [a.APPLE]: {
        displayName: "Apple",
        color: "#000000",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/apple.png",
        urlMatchers: ["apps.apple.com", "podcasts.apple.com", "music.apple.com"]
    },
    [a.APPLEMUSIC]: {
        displayName: "Apple Music",
        color: "#000000",
        imageUrl: "https://cdn.beacons.ai/images/block_icons/music-block-apple-music.png",
        urlMatchers: ["music.apple.com"]
    },
    [a.AMAZON]: {
        displayName: "Amazon",
        color: "#F9A51B",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/amazon.png",
        urlMatchers: ["amazon.com", "amzn.to", "amazon.co.uk", "amazon.ca", "amazon.de"]
    },
    [a.ANCHORFM]: {
        displayName: "Anchor",
        color: "#5000B9",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/anchorfm.png",
        urlMatchers: ["anchor.fm"]
    },
    [a.BANDCAMP]: {
        displayName: "Bandcamp",
        color: "#000000",
        imageUrl: "https://cdn.beacons.ai/images/block_icons/music-block-bandcamp.png",
        urlMatchers: ["bandcamp.com"]
    },
    [a.BEACONS]: {
        displayName: "Beacons",
        color: "#000000",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/beacons.png",
        urlMatchers: ["beacons.ai", "beacons.page"]
    },
    [a.BEHANCE]: {
        displayName: "Behance",
        color: "#0057FF",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/behance.png",
        urlMatchers: ["behance.net"]
    },
    [a.BITLY]: {
        displayName: "Bitly",
        color: "#EE4E1D",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/bitly.png",
        urlMatchers: ["bit.ly"]
    },
    [a.CALENDLY]: {
        displayName: "Calendly",
        color: "#006BFF",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/calendly.png",
        urlMatchers: ["calendly.com", "calend.ly"]
    },
    [a.CAMEO]: {
        displayName: "Cameo",
        color: "#F8005B",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/cameo.png",
        urlMatchers: ["cameo"]
    },
    [a.CANVA]: {
        displayName: "Canva",
        color: "#7D2AE8",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/canva.png",
        urlMatchers: ["canva.com"]
    },
    [a.CASHAPP]: {
        displayName: "Cash App",
        color: "#00D54B",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/cashapp.png",
        urlMatchers: ["cash.app"]
    },
    [a.CLAPPER]: {
        displayName: "Clapper",
        color: "#FF6500",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/clapper.png",
        urlMatchers: ["newsclapper.com"]
    },
    [a.COLDEST]: {
        displayName: "The Coldest Water",
        color: "#6FBCDF",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/coldest.png",
        urlMatchers: ["thecoldestwater.com"]
    },
    [a.CURRENTUS]: {
        displayName: "Current",
        color: "#662D91",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/currentus.png",
        urlMatchers: ["crrnt.me"]
    },
    [a.DEPOP]: {
        displayName: "Depop",
        color: "#FF2300",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/depop.png",
        urlMatchers: ["depop.com"]
    },
    [a.DISCORD]: {
        displayName: "Discord",
        color: "#5865F2",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/discord.png",
        urlMatchers: ["discord.gg", "discord.com"]
    },
    [a.DISTROKID]: {
        displayName: "DistroKid",
        color: "#000000",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/distrokid.png",
        urlMatchers: ["distrokid.com"]
    },
    [a.ETSY]: {
        displayName: "Etsy",
        color: "#F1641E",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/etsy.png",
        urlMatchers: ["etsy.com", "etsy.me"]
    },
    [a.FACEBOOK]: {
        displayName: "Facebook",
        color: "#2D6DF5",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/facebook.png",
        urlMatchers: ["facebook.com"]
    },
    [a.FANSLY]: {
        displayName: "Fansly",
        color: "#2799F6",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/fansly.png",
        urlMatchers: ["fans.ly", "fansly.com"]
    },
    [a.GOFUNDME]: {
        displayName: "GoFundMe",
        color: "#00B964",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/gofundme.png",
        urlMatchers: ["gofund.me"]
    },
    [a.GOODREADS]: {
        displayName: "Goodreads",
        color: "#7A450F",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/goodreads.png",
        urlMatchers: ["goodreads.com"]
    },
    [a.GOOGLE]: {
        displayName: "Google",
        color: "#4285F4",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/google.png",
        urlMatchers: ["goo.gl", "google.com", "sites.google.com", "g.page"]
    },
    [a.GOOGLEDOCS]: {
        displayName: "Google Docs",
        color: "#518FF5",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/googledocs.png",
        urlMatchers: ["docs.google.com"]
    },
    [a.GOOGLEDRIVE]: {
        displayName: "Google Drive",
        color: "#FFBA00",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/googledrive.png",
        urlMatchers: ["drive.google.com"]
    },
    [a.GOOGLEFORM]: {
        displayName: "Google Forms",
        color: "#703DB4",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/googleforms.png",
        urlMatchers: ["forms.gle"]
    },
    [a.GOOGLEPLAY]: {
        displayName: "Google Play",
        color: "#01D6FF",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/googleplay.png",
        urlMatchers: ["play.google.com"]
    },
    [a.HONEYGAIN]: {
        displayName: "Honeygain",
        color: "#F9C900",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/honeygain.png",
        urlMatchers: ["r.honeygain.me"]
    },
    [a.HOTMART]: {
        displayName: "Hotmart",
        color: "#F04E23",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/hotmart.png",
        urlMatchers: ["go.hotmart.com"]
    },
    [a.INSTAGRAM]: {
        displayName: "Instagram",
        color: "#DF4D6C",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/instagram.png",
        urlMatchers: ["instagram.com"]
    },
    [a.JOTFORM]: {
        displayName: "Jotform",
        color: "#0A1551",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/jotform.png",
        urlMatchers: ["form.jotform.com"]
    },
    [a.KOFI]: {
        displayName: "Ko-fi",
        color: "#00B9FE",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/kofi.png",
        urlMatchers: ["ko-fi.com"]
    },
    [a.LIKETOKNOW]: {
        displayName: "LikeToKnowIt",
        color: "#E94B44",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/liketoknow.png",
        urlMatchers: ["liketoknow.it"]
    },
    [a.LINKEDIN]: {
        displayName: "LinkedIn",
        color: "#0073B1",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/linkedin.png",
        urlMatchers: ["linkedin.com"]
    },
    [a.LINKTREE]: {
        displayName: "Linktree",
        color: "#39E09B",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/linktree.png",
        urlMatchers: ["linktr.ee"]
    },
    [a.MAILCHIMP]: {
        displayName: "Mailchimp",
        color: "#FFE01B",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/mailchimp.png",
        urlMatchers: ["mailchi.mp"]
    },
    [a.MANYVIDS]: {
        displayName: "ManyVids",
        color: "#000000",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/manyvids.png",
        urlMatchers: ["manyvids.com"]
    },
    [a.MESSENGER]: {
        displayName: "Messenger",
        color: "#2782FF",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/messenger.png",
        urlMatchers: ["m.me"]
    },
    [a.MILKSHAKE]: {
        displayName: "Milkshake",
        color: "#FF4716",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/milkshake.png",
        urlMatchers: ["msha.ke"]
    },
    [a.ONELINK]: {
        displayName: "Onelink",
        color: "#4BDC96",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/onelink.png",
        urlMatchers: ["onelink"]
    },
    [a.ONLYFANS]: {
        displayName: "OnlyFans",
        color: "#00AFF0",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/onlyfans.png",
        urlMatchers: ["onlyfans.com"]
    },
    [a.OTHER]: {
        displayName: "Other",
        color: "#7048E8",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/globepurple.png"
    },
    [a.PATREON]: {
        displayName: "Patreon",
        color: "#FF424D",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/patreon.png",
        urlMatchers: ["patreon.com"]
    },
    [a.PAYPAL]: {
        displayName: "PayPal",
        color: "#2790C3",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/paypal.png",
        urlMatchers: ["paypal.com", "paypal.me"]
    },
    [a.PINTEREST]: {
        displayName: "Pinterest",
        color: "#E60023",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/pinterest.png",
        urlMatchers: ["pinterest.com", "pin.it"]
    },
    [a.POCKETSTARS]: {
        displayName: "PocketStars",
        color: "#FF595A",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/pocketstars.png",
        urlMatchers: ["pocketstars.com"]
    },
    [a.PORNHUB]: {
        displayName: "Pornhub",
        color: "#FF9000",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/pornhub.png",
        urlMatchers: ["pornhub.com"]
    },
    [a.REDBUBBLE]: {
        displayName: "Redbubble",
        color: "#E41321",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/redbubble.png",
        urlMatchers: ["redbubble.com"]
    },
    [a.REDDIT]: {
        displayName: "Reddit",
        color: "#FF4500",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/reddit.png",
        urlMatchers: ["reddit.com"]
    },
    [a.SHOPEE]: {
        displayName: "Shopee",
        color: "#EE4D2D",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/shopee.png",
        urlMatchers: ["shp.ee", "shopee.ph", "shopee.vn", "shopee.com.my", "shopee.co.id", "shopee.com.br"]
    },
    [a.SNAPCHAT]: {
        displayName: "Snapchat",
        color: "#FFFC00",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/snapchat.png",
        urlMatchers: ["snapchat.com"]
    },
    [a.SOUNDCLOUD]: {
        displayName: "SoundCloud",
        color: "#F37722",
        imageUrl: "https://cdn.beacons.ai/images/block_icons/music-block-soundcloud.png",
        urlMatchers: ["soundcloud.com"]
    },
    [a.SPOTIFY]: {
        displayName: "Spotify",
        color: "#1ED760",
        imageUrl: "https://cdn.beacons.ai/images/block_icons/music-block-spotify.png",
        urlMatchers: ["open.spotify.com", "spotify.com"]
    },
    [a.TEESPRING]: {
        displayName: "Teespring",
        color: "#282562",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/teespring.png",
        urlMatchers: ["teespring.com"]
    },
    [a.TELEGRAM]: {
        displayName: "Telegram",
        color: "#26A4E2",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/telegram.png",
        urlMatchers: ["t.me"]
    },
    [a.TELLONYM]: {
        displayName: "Tellonym",
        color: "#FC1375",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/tellonym.png",
        urlMatchers: ["tellonym.me"]
    },
    [a.TIKTOK]: {
        displayName: "TikTok",
        color: "#222222",
        imageUrl: "https://cdn.beacons.ai/images/block_icons/videos-block-tiktok.png",
        urlMatchers: ["tiktok.com"]
    },
    [a.TINYYURL]: {
        displayName: "TinyURL",
        color: "#17527D",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/tinyurl.png",
        urlMatchers: ["tinyurl.com"]
    },
    [a.TOKOPEDIA]: {
        displayName: "Tokopedia",
        color: "#03AC0E",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/tokopedia.png",
        urlMatchers: ["tokopedia.com"]
    },
    [a.TWITCH]: {
        displayName: "Twitch",
        color: "#9147FF",
        imageUrl: "https://cdn.beacons.ai/images/block_icons/videos-block-twitch.png",
        urlMatchers: ["twitch.tv", "m.twitch.tv"]
    },
    [a.TWITTER]: {
        displayName: "Twitter",
        color: "#1D9BF0",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/twitter.png",
        urlMatchers: ["twitter.com"]
    },
    [a.VENMO]: {
        displayName: "Venmo",
        color: "#008CFF",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/venmo.png",
        urlMatchers: ["venmo.com"]
    },
    [a.VIMEO]: {
        displayName: "Vimeo",
        color: "#008CFF",
        imageUrl: "https://cdn.beacons.ai/images/block_icons/videos-block-vimeo.png",
        urlMatchers: ["vimeo.com"]
    },
    [a.VSCO]: {
        displayName: "VSCO",
        color: "#000000",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/vsco.png",
        urlMatchers: ["vsco.co"]
    },
    [a.WATTPAD]: {
        displayName: "Wattpad",
        color: "#FF500A",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/wattpad.png",
        urlMatchers: ["wattpad.com"]
    },
    [a.WHATSAPP]: {
        displayName: "WhatsApp",
        color: "#128C7E",
        imageUrl: "https://cdn.beacons.ai/images/platform_icons/whatsapp.png",
        urlMatchers: ["api.whatsapp.com", "wa.me", "wa.link", "chat.whatsapp.com"]
    },
    [a.YOUTUBE]: {
        displayName: "YouTube",
        color: "#FF0000",
        imageUrl: "https://cdn.beacons.ai/images/block_icons/videos-block-youtube.png",
        urlMatchers: ["youtube.com", "youtu.be"]
    }
}
  , e = a;
export {e as P, o as a};
//# debugId=3507e7af-7c2e-5d70-a4c7-bf79fe80b81c
//# sourceMappingURL=PLATFORMS-b2642ca9.js.map

