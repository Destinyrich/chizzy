!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "945096ec-52b5-5405-9b00-07f66c1f6418")
    } catch (e) {}
}();
import {a as r, C as L} from "./CDN_URLS-53881ca1.js";
import {E as o} from "./EEmailBlockTypes-0445d282.js";
import {r as a, cB as R, F as B, j as s, cC as x} from "./index-4d92c338.js";
import {e as D} from "./enableManagerWriteFile-8917d4e5.js";
import {B as y} from "./index-d8ab1de0.js";
import {v as P} from "./v4-a960c1f4.js";
import {E as n} from "./getLanguageAndCountryCode-2395f4b2.js";
const S = {
    DIGITAL_FILE: "digital-file",
    THUMBNAIL_IMAGE: "thumbnail-image",
    PRODUCT_IMAGE: "product-image",
    DESCRIPTION_IMAGE: "description-image"
};
function V({itemId: T, initialButtonText: m, onSuccessfulUpload: f, disabled: d=!1}) {
    const c = a.useContext(R)
      , _ = a.useContext(B)
      , A = a.useRef(null)
      , [O,i] = a.useState()
      , [g,E] = a.useState(!1);
    return s.jsxs(s.Fragment, {
        children: [s.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [s.jsx(y, {
                disabled: d || g,
                onClick: ()=>{
                    A.current.click()
                }
                ,
                color: "blue",
                children: m
            }), !!O && s.jsx("div", {
                className: "mt-2 text-bold",
                children: O
            })]
        }), s.jsx("input", {
            ref: A,
            style: {
                display: "none"
            },
            type: "file",
            onChange: async e=>{
                if (e.target.files[0]) {
                    e.persist();
                    const C = e.target.files[0].name
                      , M = C.split(".").pop().toLowerCase()
                      , u = e.target.files[0].size
                      , p = {
                        contentType: e.target.files[0].type
                    }
                      , N = P()
                      , I = `user_content/${c.uid}/store_files/${T}__ ${N}.${M}`;
                    if (!I)
                        return;
                    E(!0),
                    await D(c, I);
                    const G = _.getStorageRef(I);
                    _.uploadBytesResumable(G, e.target.files[0], p).on("stateChange", l=>{
                        const U = l.bytesTransferred / l.totalBytes * 100;
                        i(`Uploading file... ${U.toFixed(0)}%`)
                    }
                    , ()=>{
                        E(!1),
                        i("Upload failed. Please try again.")
                    }
                    , async()=>{
                        const l = x(I);
                        i("Processing... May take a minute..."),
                        f({
                            fileName: C,
                            itemSize: u,
                            downloadURL: l,
                            itemId: T,
                            metadata: p
                        }),
                        E(!1),
                        i(null)
                    }
                    )
                }
            }
        })]
    })
}
const Y = "UPLOAD"
  , t = {
    SOCIAL_ICONS: "SOCIAL_ICONS",
    MY_MEDIA: "MY_MEDIA",
    MY_POSTS: "MY_POSTS",
    STOCK_IMAGES: "STOCK_IMAGES",
    GIFS: "GIFS",
    GENERATE_IMAGES: "GENERATE_IMAGES"
}
  , v = {
    [t.SOCIAL_ICONS]: {
        TITLE: "Social Icons",
        SUBTITLE: "Choose from our suggested icons."
    },
    [t.MY_MEDIA]: {
        TITLE: "My Media",
        SUBTITLE: "Choose from your uploaded files.",
        TAG_SOURCE: `${r}/cortex-label.png`
    },
    [t.MY_POSTS]: {
        TITLE: "My Posts",
        SUBTITLE: "Choose from your social posts.",
        TAG_SOURCE: `${r}/cortex-label.png`,
        SAVE_LOCATION: "my-posts"
    },
    [t.STOCK_IMAGES]: {
        TITLE: "Stock Images",
        SUBTITLE: "Pick from over 3M+ stock photos.",
        TAG_SOURCE: `${L}/unsplash-label.svg`,
        SAVE_LOCATION: "stock-images"
    },
    [t.GIFS]: {
        TITLE: "GIFs",
        SUBTITLE: "Pick a GIF, clip, or animated sticker.",
        TAG_SOURCE: `${L}/giphy-label.svg`,
        SAVE_LOCATION: "gifs"
    },
    [t.GENERATE_IMAGES]: {
        TITLE: "AI Image Generation",
        SUBTITLE: "Unleash your creativity with AI-generated images.",
        TAG_SOURCE: `${r}/pro_icon.svg`,
        SAVE_LOCATION: "generated-images"
    }
}
  , w = {
    [n.LINK_IN_BIO]: {
        HEADER_BLOCK: "header-block",
        IMAGES_BLOCK: "image-block",
        LINKS_BLOCK: "links-block"
    },
    [n.EMAIL_MARKETING]: {
        LINKS_BLOCK: o.LINKS,
        IMAGES_BLOCK: o.IMAGES,
        HEADER_BLOCK: o.HEADER,
        VIDEOS_BLOCK: o.VIDEOS,
        STORE_BLOCK: o.STORE
    },
    [n.STORE]: {
        THUMBNAIL_IMAGE: S.THUMBNAIL_IMAGE,
        PRODUCT_IMAGE: S.PRODUCT_IMAGE,
        DESCRIPTION_IMAGE: S.DESCRIPTION_IMAGE
    },
    [n.MEDIA_KIT]: {
        LINKS_BLOCK: "links-block"
    }
}
  , z = "https://cdn.jsdelivr.net/npm/simple-icons@9.15.0/icons/";
export {v as S, Y as U, w as V, t as a, z as b, V as c};
//# debugId=945096ec-52b5-5405-9b00-07f66c1f6418
//# sourceMappingURL=constants-3b268537.js.map


