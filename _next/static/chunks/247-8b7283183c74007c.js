(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9361).Z,i=n(4941).Z,r=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,l=e.unoptimized,u=void 0!==l&&l,h=e.priority,m=void 0!==h&&h,S=e.loading,_=e.lazyRoot,C=void 0===_?null:_,k=e.lazyBoundary,E=e.className,L=e.quality,M=e.width,I=e.height,O=e.style,P=e.objectFit,q=e.objectPosition,N=e.onLoadingComplete,B=e.placeholder,U=void 0===B?"empty":B,Z=e.blurDataURL,T=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=s.useContext(g.ImageConfigContext),W=s.useMemo((function(){var e=y||D||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[D]),H=T,V=n?"responsive":"intrinsic";"layout"in H&&(H.layout&&(V=H.layout),delete H.layout);var G=A;if("loader"in H){if(H.loader){var F=H.loader;G=function(e){e.config;var t=c(e,["config"]);return F(t)}}delete H.loader}var K="";if(function(e){return"object"===typeof e&&(z(e)||function(e){return void 0!==e.src}(e))}(t)){var J=z(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(Z=Z||J.blurDataURL,K=J.src,(!V||"fill"!==V)&&(I=I||J.height,M=M||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var Q=!m&&("lazy"===S||"undefined"===typeof S);((t="string"===typeof t?t:K).startsWith("data:")||t.startsWith("blob:"))&&(u=!0,Q=!1);b.has(t)&&(Q=!1);v&&(u=!0);var X,Y=i(s.useState(!1),2),$=Y[0],ee=Y[1],te=i(p.useIntersection({rootRef:C,rootMargin:k||"200px",disabled:!Q}),3),ne=te[0],oe=te[1],ie=te[2],re=!Q||oe,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:q},se=j(M),de=j(I),fe=j(L);0;var pe=Object.assign({},O,ce),ge="blur"!==U||$?{}:{backgroundSize:P||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(Z,'")')};if("fill"===V)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof se&&"undefined"!==typeof de){var he=de/se,me=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===V?(ae.display="block",ae.position="relative",ue=!0,le.paddingTop=me):"intrinsic"===V?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ue=!0,le.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===V&&(ae.display="inline-block",ae.position="relative",ae.width=se,ae.height=de)}else 0;var ve={src:w,srcSet:void 0,sizes:void 0};re&&(ve=x({config:W,src:t,unoptimized:u,layout:V,width:se,quality:fe,sizes:n,loader:G}));var ye=t;0;var be;0;var we=(o(be={},"imagesrcset",ve.srcSet),o(be,"imagesizes",ve.sizes),be),Se=s.default.useLayoutEffect,ze=s.useRef(N),xe=s.useRef(t);s.useEffect((function(){ze.current=N}),[N]),Se((function(){xe.current!==t&&(ie(),xe.current=t)}),[ie,t]);var je=a({isLazy:Q,imgAttributes:ve,heightInt:de,widthInt:se,qualityInt:fe,layout:V,className:E,imgStyle:pe,blurStyle:ge,loading:S,config:W,unoptimized:u,placeholder:U,loader:G,srcString:ye,onLoadingCompleteRef:ze,setBlurComplete:ee,setIntersection:ne,isVisible:re,noscriptSizes:n},H);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:ae},ue?s.default.createElement("span",{style:le},X?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,s.default.createElement(R,Object.assign({},je))),m?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},we))):null)};var a=n(6495).Z,l=n(2648).Z,u=n(1598).Z,c=n(7273).Z,s=u(n(7294)),d=l(n(5443)),f=n(9309),p=n(7190),g=n(9977),h=(n(3794),n(2392));var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://acre-website.s3.ap-northeast-1.amazonaws.com/",loader:"akamai",dangerouslyAllowSVG:!1}||{},v=m.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://acre-website.s3.ap-northeast-1.amazonaws.com/",loader:"akamai",dangerouslyAllowSVG:!1},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var S=new Map([["default",function(e){var t=e.config,n=e.src,o=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(o,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,o=e.width,i=e.quality,r=new URL("".concat(t.path).concat(C(n))),a=r.searchParams;a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||o.toString()),i&&a.set("q",i.toString());return r.href}],["cloudinary",function(e){var t=e.config,n=e.src,o=e.width,i=e.quality,r=["f_auto","c_limit","w_"+o,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(C(n))}],["akamai",function(e){var t=e.config,n=e.src,o=e.width;return"".concat(t.path).concat(C(n),"?imwidth=").concat(o)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,o=e.unoptimized,i=e.layout,a=e.width,l=e.quality,u=e.sizes,c=e.loader;if(o)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,o){var i=e.deviceSizes,a=e.allSizes;if(o&&("fill"===n||"responsive"===n)){for(var l,u=/(^|\s)(1?\d?\d)vw/g,c=[];l=u.exec(o);l)c.push(parseInt(l[2]));if(c.length){var s,d=.01*(s=Math).min.apply(s,r(c));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:r(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,u),d=s.widths,f=s.kind,p=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(e,o){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:o+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:d[p]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",o=S.get(n);if(o)return o(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function _(e,t,n,o,i,r){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===o&&r(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var R=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),o=e.qualityInt,i=e.layout,r=e.className,l=e.imgStyle,u=e.blurStyle,d=e.isLazy,f=e.placeholder,p=e.loading,g=e.srcString,h=e.config,m=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,z=e.onError,j=(e.isVisible,e.noscriptSizes),A=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=d?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":i,className:r,style:a({},l,u),ref:s.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&_(e,g,0,f,y,b)}),[w,g,i,f,y,b]),onLoad:function(e){_(e.currentTarget,g,0,f,y,b),S&&S(e)},onError:function(e){"blur"===f&&b(!0),z&&z(e)}})),(d||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},A,x({config:h,src:g,unoptimized:m,layout:i,width:n,quality:o,sizes:j,loader:v}),{decoding:"async","data-nimg":i,style:l,className:r,loading:p}))))};function C(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(2648).Z,r=n(7273).Z,a=i(n(7294)),l=n(6273),u=n(2725),c=n(3462),s=n(1018),d=n(7190),f=n(1210),p=n(8684),g="undefined"!==typeof a.default.useTransition,h={};function m(e,t,n,o){if(e&&l.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var i=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;h[t+"%"+n+(i?"%"+i:"")]=!0}}var v=a.default.forwardRef((function(e,t){var n,i=e.href,v=e.as,y=e.children,b=e.prefetch,w=e.passHref,S=e.replace,z=e.soft,x=e.shallow,j=e.scroll,A=e.locale,_=e.onClick,R=e.onMouseEnter,C=e.onTouchStart,k=e.legacyBehavior,E=void 0===k?!0!==Boolean(!1):k,L=r(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,!E||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var M=!1!==b,I=o(g?a.default.useTransition():[],2)[1],O=a.default.useContext(c.RouterContext),P=a.default.useContext(s.AppRouterContext);P&&(O=P);var q,N=a.default.useMemo((function(){var e=o(l.resolveHref(O,i,!0),2),t=e[0],n=e[1];return{href:t,as:v?l.resolveHref(O,v):n||t}}),[O,i,v]),B=N.href,U=N.as,Z=a.default.useRef(B),T=a.default.useRef(U);E&&(q=a.default.Children.only(n));var D=E?q&&"object"===typeof q&&q.ref:t,W=o(d.useIntersection({rootMargin:"200px"}),3),H=W[0],V=W[1],G=W[2],F=a.default.useCallback((function(e){T.current===U&&Z.current===B||(G(),T.current=U,Z.current=B),H(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[U,D,B,G,H]);a.default.useEffect((function(){var e=V&&M&&l.isLocalURL(B),t="undefined"!==typeof A?A:O&&O.locale,n=h[B+"%"+U+(t?"%"+t:"")];e&&!n&&m(O,B,U,{locale:t})}),[U,B,V,A,M,O]);var K={ref:F,onClick:function(e){E||"function"!==typeof _||_(e),E&&q.props&&"function"===typeof q.props.onClick&&q.props.onClick(e),e.defaultPrevented||function(e,t,n,o,i,r,a,u,c,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"softPush"in t&&"softReplace"in t?t[r?i?"softReplace":"softPush":i?"replace":"push"](n):t[i?"replace":"push"](n,o,{shallow:a,locale:c,scroll:u})};s?s(d):d()}}(e,O,B,U,S,z,x,j,A,P?I:void 0)},onMouseEnter:function(e){E||"function"!==typeof R||R(e),E&&q.props&&"function"===typeof q.props.onMouseEnter&&q.props.onMouseEnter(e),l.isLocalURL(B)&&m(O,B,U,{priority:!0})},onTouchStart:function(e){E||"function"!==typeof C||C(e),E&&q.props&&"function"===typeof q.props.onTouchStart&&q.props.onTouchStart(e),l.isLocalURL(B)&&m(O,B,U,{priority:!0})}};if(!E||w||"a"===q.type&&!("href"in q.props)){var J="undefined"!==typeof A?A:O&&O.locale,Q=O&&O.isLocaleDomain&&f.getDomainLocale(U,J,O.locales,O.domainLocales);K.href=Q||p.addBasePath(u.addLocale(U,J,O&&O.defaultLocale))}return E?a.default.cloneElement(q,K):a.default.createElement("a",Object.assign({},L,K),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,s=i.useRef(),d=o(i.useState(!1),2),f=d[0],p=d[1],g=o(i.useState(null),2),h=g[0],m=g[1];i.useEffect((function(){if(a){if(s.current&&(s.current(),s.current=void 0),c||f)return;return h&&h.tagName&&(s.current=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:r,elements:i},u.push(n),l.set(n,t),t}(n),i=o.id,r=o.observer,a=o.elements;return a.set(e,t),r.observe(e),function(){if(a.delete(e),r.unobserve(e),0===a.size){r.disconnect(),l.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(h,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!f){var e=r.requestIdleCallback((function(){return p(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[h,c,n,t,f]);var v=i.useCallback((function(){p(!1)}),[]);return[m,f,v]};var i=n(7294),r=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),i=o.default.createContext(null);t.AppRouterContext=i;var r=o.default.createContext(null);t.LayoutRouterContext=r;var a=o.default.createContext(null);t.GlobalLayoutRouterContext=a},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)}}]);