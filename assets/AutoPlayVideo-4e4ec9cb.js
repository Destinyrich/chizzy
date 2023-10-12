!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b6561f01-9a0d-5b2d-a505-3116c43612f0")}catch(e){}}();
import{r as o,j as c}from"./index-4d92c338.js";import{p as d}from"./purify.es-0c4a0514.js";function h({onVideoRefReady:s,poster:r,src:i,style:n,videoClassName:a="",videoParentClassName:u=""}){const e=o.useRef();o.useEffect(()=>{var l;const t=(l=e==null?void 0:e.current)==null?void 0:l.children[0];t&&(t.controls=!1,t.playsinline=!0,t.loop=!0,t.muted=!0,t.setAttribute("muted",""),t.autoplay=!0,s&&s(t))},[s]);const p=o.useMemo(()=>d.sanitize(`
        <video
          class="${a}"
          autoplay
          loop
          muted
          playsinline
          poster="${r}"
          preload="metadata"
          style="height:100%;width:100%;"
          data-testid="${i}-profile"
        >
          <source src="${i}" type="video/mp4" />
          <track kind="captions" srcLang="en" label="english_captions" />
        </video>`),[r,i,a]);return c.jsx("div",{className:u,dangerouslySetInnerHTML:{__html:p},ref:e,style:{height:"100%",width:"100%",...n}})}export{h as A};
//# debugId=b6561f01-9a0d-5b2d-a505-3116c43612f0
//# sourceMappingURL=AutoPlayVideo-4e4ec9cb.js.map
