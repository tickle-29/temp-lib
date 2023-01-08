"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var o=Object.getOwnPropertyDescriptor(t,a);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,o)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ImageElement=exports.useImageLoader=exports.setImageLoaderHook=void 0;const react_1=__importDefault(require("react")),mobx_react_lite_1=require("mobx-react-lite"),mobx_1=require("mobx"),react_konva_1=require("react-konva"),use_image_1=__importDefault(require("use-image")),konva_1=__importDefault(require("konva")),react_konva_utils_1=require("react-konva-utils"),highlighter_1=require("./highlighter"),loader_1=require("../utils/loader"),svg=__importStar(require("../utils/svg")),flags_1=require("../utils/flags"),apply_filters_1=require("./apply-filters"),use_fadein_1=require("./use-fadein");async function getFixedUrl(e){if(!(e.indexOf("data:image/svg+xml")>=0||e.indexOf(".svg")>=0))return e;const t=await svg.urlToString(e),a=svg.fixSize(t);return svg.svgToURL(a)}const useSizeFixer=e=>{const[t,a]=react_1.default.useState(e);return react_1.default.useEffect((()=>{(async()=>{const r=await getFixedUrl(e);r!==t&&a(r)})()}),[e]),t},useFlip=(e,t,a)=>{const r=react_1.default.useMemo((()=>{var r,o;const{flipX:i,flipY:n}=e,h="svg"===e.type||e.src.indexOf("data:image/svg+xml")>=0||e.src.indexOf(".svg")>=0;if(!i&&!n&&!h)return t;if(!t||!t.width||!t.height)return null;const c=document.createElement("canvas");let d=1;"svg"===e.type&&(d=Math.max(e.width/t.width*a,e.height/t.height*a)),c.width=Math.max(t.width*d,1),c.height=Math.max(t.height*d,1);let l=i?-c.width:0,s=n?-c.height:0;return null===(r=c.getContext("2d"))||void 0===r||r.scale(i?-1:1,n?-1:1),null===(o=c.getContext("2d"))||void 0===o||o.drawImage(t,l,s,c.width,c.height),c}),[e.flipX,e.flipY,t,e.width,e.height,a]);return react_1.default.useEffect((()=>()=>{r&&"CANVAS"===r.nodeName&&konva_1.default.Util.releaseCanvas(r)}),[r]),r};function getCrop(e,t){const a=t.width/t.height;let r,o;a>=e.width/e.height?(r=e.width,o=e.width/a):(r=e.height*a,o=e.height);return{x:(e.width-r)/2,y:(e.height-o)/2,width:r,height:o}}function downsample(e,t,a,r,o,i,n){for(var h=new ImageData(t,a),c=new Int32Array(e.data.buffer),d=e.width,l=new Int32Array(h.data.buffer),s=h.width,u=t/i,g=a/n,f=Math.round(1/u),m=Math.round(1/g),_=f*m,p=0;p<h.height;p++)for(var w=0;w<s;w++){for(var x=r+Math.round(w/u)+(o+Math.round(p/g))*d,v=0,y=0,M=0,b=0,E=0;E<m;E++)for(var k=0;k<f;k++){var I=c[x+k+E*d];v+=I<<24>>>24,y+=I<<16>>>24,M+=I<<8>>>24,b+=I>>>24}v=Math.round(v/_),y=Math.round(y/_),M=Math.round(M/_),b=Math.round(b/_),l[w+p*s]=b<<24|M<<16|y<<8|v}return h}function downScaleCanvas(e,t){var a,r;const o=document.createElement("canvas");o.width=e.width,o.height=e.height,null===(a=o.getContext("2d"))||void 0===a||a.drawImage(e,0,0,o.width,o.height);const i=downsample(o.getContext("2d").getImageData(0,0,o.width,o.height),Math.floor(o.width*t),Math.floor(o.height*t),0,0,o.width,o.height);return o.width=Math.floor(o.width*t),o.height=Math.floor(o.height*t),null===(r=o.getContext("2d"))||void 0===r||r.putImageData(i,0,0),o}const useMask=(e,t)=>{const[a,r]=useImageHook(e.maskSrc,"anonymous"),o=e.maskSrc?r:"loaded";return(0,exports.useImageLoader)(o,e.id),react_1.default.useMemo((()=>{if(!a)return t;if(!t||!t.width||!t.height)return t;const r=document.createElement("canvas");r.width=Math.max(t.width,1),r.height=Math.max(t.height,1);const o=r.getContext("2d");if(!o)return t;o.drawImage(t,0,0),o.globalCompositeOperation="source-in";const i=getCrop(a,e);return o.drawImage(a,i.x,i.y,i.width,i.height,0,0,t.width,t.height),r}),[t,a,e.width,e.height])},useCornerRadius=(e,t,a,r,o=0,i=!1)=>{const n=react_1.default.useMemo((()=>{if(t&&t.width&&t.height)return document.createElement("canvas")}),[t]);return react_1.default.useLayoutEffect((()=>{if(!n||!t)return;const h=Math.floor(Math.max(e.width*r,1)),c=Math.floor(Math.max(e.height*r,1));n.width=h,n.height=c;const d=n.getContext("2d");if(!d)return;const l=Math.min(o*r,h/2,c/2);l&&(d.beginPath(),d.moveTo(l,0),d.lineTo(h-l,0),d.arc(h-l,l,l,3*Math.PI/2,0,!1),d.lineTo(h,c-l),d.arc(h-l,c-l,l,0,Math.PI/2,!1),d.lineTo(l,c),d.arc(l,c-l,l,Math.PI/2,Math.PI,!1),d.lineTo(0,l),d.arc(l,l,l,Math.PI,3*Math.PI/2,!1),d.clip());const s=Math.max(e.width/a.width,e.height/a.height)*r,u=e.page._exporting&&flags_1.flags.imageDownScalingEnabled&&s<1&&!i,g=u?downScaleCanvas(t,s):t,f=u?{x:Math.floor(a.x*s),y:Math.floor(a.y*s),width:Math.floor(a.width*s),height:Math.floor(a.height*s)}:a;d.drawImage(g,f.x,f.y,f.width,f.height,0,0,n.width,n.height)}),[n,e.width,e.height,a.x,a.y,a.width,a.height,o,r,i,e.page._exporting]),react_1.default.useEffect((()=>()=>{n&&"CANVAS"===n.nodeName&&konva_1.default.Util.releaseCanvas(n)}),[n]),n},useClip=(e,t,a,r)=>{const o=useSizeFixer(e.clipSrc||""),[i]=useImageHook(o,"anonymous"),n=react_1.default.useMemo((()=>{if(t&&i)return document.createElement("canvas")}),[t,i]);react_1.default.useLayoutEffect((()=>{var r;if(!i)return;if(!t||!t.width||!t.height)return;if(!i||!i.width||!i.height)return;if(!n)return;const o=document.createElement("canvas"),h=Math.max(e.width/i.width*a,e.height/i.height*a);o.width=i.width*h,o.height=i.height*h,null===(r=o.getContext("2d"))||void 0===r||r.drawImage(i,0,0,o.width,o.height),n.width=Math.max(t.width,1),n.height=Math.max(t.height,1);const c=n.getContext("2d");c&&(c.save(),c.drawImage(o,0,0,t.width,t.height),konva_1.default.Util.releaseCanvas(o),c.globalCompositeOperation="source-in",c.drawImage(t,0,0,n.width,n.height),c.restore())}),[n,t,i,e.width,e.height,a,...r]);return e.clipSrc&&i?n:t},PLACEHOLDER_CANVAS=document.createElement("canvas"),LoadingPlaceholder=(0,mobx_react_lite_1.observer)((({element:e})=>{const t=Math.min(30,e.width/4,e.height/4),a=react_1.default.useRef(null);return react_1.default.useEffect((()=>{const e=a.current;if(!e)return;const t=new konva_1.default.Animation((t=>{e.rotate(((null==t?void 0:t.timeDiff)||0)/2)}),e.getLayer());return t.start(),()=>{t.stop()}})),react_1.default.createElement(react_konva_1.Group,{x:e.x,y:e.y,rotation:e.rotation,listening:!1,opacity:e.opacity,hideInExport:!e.showInExport},react_1.default.createElement(react_konva_1.Rect,{width:e.width,height:e.height,fill:"rgba(124, 173, 212, 0.8)"}),react_1.default.createElement(react_konva_1.Arc,{ref:a,x:e.width/2,y:e.height/2,fill:"white",outerRadius:Math.abs(t),innerRadius:Math.max(1,t-5),angle:270}))})),ErrorPlaceholder=(0,mobx_react_lite_1.observer)((({element:e})=>{const t="Can not load the image...",a=Math.max(10,Math.min(30,e.width/t.length));return react_1.default.createElement(react_konva_1.Group,{x:e.x,y:e.y,rotation:e.rotation,listening:!1,opacity:e.opacity,hideInExport:!e.showInExport},react_1.default.createElement(react_konva_1.Rect,{width:e.width,height:e.height,fill:"rgba(223, 102, 102, 0.8)"}),react_1.default.createElement(react_konva_1.Text,{text:t,fontSize:a,width:e.width,height:e.height,align:"center",fill:"white",verticalAlign:"middle",padding:5}))}));let useImageHook=use_image_1.default;const setImageLoaderHook=e=>{useImageHook=e};exports.setImageLoaderHook=setImageLoaderHook;const useImageLoader=(e,t)=>{const a=react_1.default.useRef(),r=()=>{var e;null===(e=a.current)||void 0===e||e.call(a),a.current=void 0};react_1.default.useEffect((()=>r),[]),react_1.default.useLayoutEffect((()=>{"loading"!==e||a.current||(a.current=(0,loader_1.incrementLoader)(`image ${t}`)),"loading"!==e&&r(),"failed"===e&&(0,loader_1.triggerLoadError)(`image ${t}`)}),[e])};exports.useImageLoader=useImageLoader;const usePreviousImage=({image:e,status:t,type:a})=>{const r=react_1.default.useRef();react_1.default.useEffect((()=>{r.current=e||r.current}),[e]);return"failed"!==t||"failed"!==t&&"svg"===a?r.current:void 0},useImageSource=e=>{const[t,a]=react_1.default.useReducer((e=>e+1),0),r=react_1.default.useRef("loading"),o=react_1.default.useRef(e.src),i=react_1.default.useRef(e.src);return i.current!==e.src&&(i.current=e.src,r.current="loading"),react_1.default.useEffect((()=>{if("image"===e.type)return;if(!e.src)return;let t=!1;return(async()=>{r.current="loading",a();const i=await svg.urlToString(e.src),n=svg.fixSize(i),h=svg.replaceColors(n,e.colorsReplace);t||(o.current=h,r.current="loaded",a())})(),()=>{t=!0}}),[e.src,JSON.stringify(e.colorsReplace)]),"image"===e.type?[e.src,"loaded"]:[o.current,r.current]};exports.ImageElement=(0,mobx_react_lite_1.observer)((({element:e,store:t})=>{var a;const[r,o]=react_1.default.useState(!1),i=react_1.default.useRef(null),n=react_1.default.useRef(null),[h,c]=react_1.default.useState(!1),d=t.selectedElements.indexOf(e)>=0,[l,s]=useImageSource(e),[u,g]=useImageHook(l,"anonymous"),f="svg"!==e.type||"loaded"===s?g:"loading";(0,exports.useImageLoader)(f,e.id);const m=usePreviousImage({image:u,status:g,type:e.type}),_=useMask(e,useFlip(e,u||m,t._elementsPixelRatio))||PLACEHOLDER_CANVAS;let{cropX:p,cropY:w,cropWidth:x,cropHeight:v}=e;"loaded"!==g&&(p=w=0,x=v=1);const y=_.width*x,M=_.height*v,b=e.width/e.height;let E,k;const I=y/M,S="svg"===e.type;S?(E=y,k=M):b>=I?(E=y,k=y/b):(E=M*b,k=M);const C={x:_.width*p,y:_.height*w,width:E,height:k},R=null!==(a=e.cornerRadius)&&void 0!==a?a:0;let O=useClip(e,useCornerRadius(e,_,C,t._elementsPixelRatio,R,r||e._cropModeEnabled||"svg"===e.type),t._elementsPixelRatio,[C,R,t._elementsPixelRatio]);const L=Math.max(e.width/E,e.height/k);react_1.default.useEffect((()=>{var t;if(!e._cropModeEnabled)return;const a=null===(t=i.current)||void 0===t?void 0:t.getStage();function r(t){e._cropModeEnabled&&t.target!==n.current&&e.toggleCropMode(!1)}function o(t){e._cropModeEnabled&&"CANVAS"!==t.target.nodeName&&e.toggleCropMode(!1)}return document.body.addEventListener("click",o),null==a||a.on("click",r),null==a||a.on("tap",r),()=>{document.body.removeEventListener("click",o),document.body.removeEventListener("touchstart",o),null==a||a.off("click",r),null==a||a.off("click",r)}}),[e._cropModeEnabled]),react_1.default.useLayoutEffect((()=>{if(r||e._cropModeEnabled)return;(0,apply_filters_1.applyFilter)(i.current,e);return(0,mobx_1.autorun)((()=>{(0,apply_filters_1.applyFilter)(i.current,e)}),{delay:100})}),[_,r,x,v,e._cropModeEnabled]),react_1.default.useLayoutEffect((()=>{var t;r||e._cropModeEnabled?null===(t=i.current)||void 0===t||t.clearCache():(0,apply_filters_1.applyFilter)(i.current,e)}),[r,e.width,e.height,e._cropModeEnabled]),react_1.default.useEffect((()=>{(0,apply_filters_1.applyFilter)(i.current,e)}),[e.shadowEnabled,e.shadowBlur,e.cornerRadius,e.shadowColor,e.shadowOffsetX,e.shadowOffsetY,e.shadowOpacity]);const P=react_1.default.useRef(null),X=react_1.default.useRef(null),Y=react_1.default.useRef(null);react_1.default.useLayoutEffect((()=>{e._cropModeEnabled&&(X.current.nodes([P.current]),Y.current.nodes([n.current]))}),[e._cropModeEnabled]);const H=t=>{Math.round(t.target.x())>0&&(t.target.x(0),t.target.scaleX(1)),Math.round(t.target.y())>0&&(t.target.y(0),t.target.scaleY(1));const a=t.target.width()*t.target.scaleX(),r=t.target.height()*t.target.scaleY(),o=Math.min(1,E/a),i=Math.min(1,k/r),n=1-o,h=Math.min(n,Math.max(0,Math.round(-t.target.x())/a)),c=1-i,d=Math.min(c,Math.max(0,Math.round(-t.target.y())/r));t.target.setAttrs({x:-h*_.width,y:-d*_.height,scaleX:1,scaleY:1}),e.set({cropX:h,cropY:d,cropWidth:o,cropHeight:i})},T=()=>{"svg"!==e.type&&e.contentEditable&&setTimeout((()=>{e.toggleCropMode(!0)}))},A="svg"===e.type&&m,D="loading"===g&&!A,W="failed"===g,F=!D&&!W,q=react_1.default.useRef({cropX:0,cropY:0,cropWidth:0,cropHeight:0}),z=F?e.opacity:0;(0,use_fadein_1.useFadeIn)(i,z);const B=e.selectable||"admin"===t.role;return react_1.default.createElement(react_1.default.Fragment,null,D&&react_1.default.createElement(LoadingPlaceholder,{element:e}),W&&react_1.default.createElement(ErrorPlaceholder,{element:e}),react_1.default.createElement(react_konva_1.Image,{ref:i,name:"element",id:e.id,image:O,x:e.x,y:e.y,width:e.width||1,height:e.height||1,rotation:e.rotation,opacity:z,shadowEnabled:e.shadowEnabled,shadowBlur:e.shadowBlur,shadowOffsetX:e.shadowOffsetX,shadowOffsetY:e.shadowOffsetY,shadowColor:e.shadowColor,shadowOpacity:e.shadowOpacity,customCrop:C,listening:B,draggable:e.draggable,hideInExport:!e.showInExport,onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},onDragStart:()=>{t.history.startTransaction()},onDragMove:t=>{e.set({x:t.target.x(),y:t.target.y()})},onDragEnd:a=>{e.set({x:a.target.x(),y:a.target.y()}),t.history.endTransaction()},onDblClick:T,onDblTap:T,onTransformStart:()=>{o(!0),t.history.startTransaction(),q.current={cropX:e.cropX,cropY:e.cropY,cropWidth:e.cropWidth,cropHeight:e.cropHeight}},onTransform:t=>{var a;const r=t.currentTarget,o=Math.abs(r.scaleX()-1)<1e-7?1:r.scaleX(),i=Math.abs(r.scaleY()-1)<1e-7?1:r.scaleY();r.scaleX(1),r.scaleY(1);const n=null===(a=t.target.getStage())||void 0===a?void 0:a.findOne("Transformer"),h=1-E/_.width,c=Math.min(h,Math.max(0,e.cropX)),d=1-k/_.height,l=Math.min(d,Math.max(0,e.cropY)),s=n.getActiveAnchor(),u=!(s.indexOf("middle")>=0||s.indexOf("center")>=0),g=!u&&o<1&&q.current.cropHeight>k/_.height;let f=u?e.cropWidth:e.cropWidth*o;g&&(f=e.cropWidth);const m=!u&&i<1&&q.current.cropWidth>E/_.width;let p=u?e.cropHeight:e.cropHeight*i;m&&(p=e.cropHeight),S&&(f=e.cropWidth,p=e.cropHeight),e.set({cropX:c,cropY:l,x:r.x(),y:r.y(),width:r.width()*o,height:r.height()*i,rotation:t.target.rotation(),cropWidth:Math.min(f,1-c),cropHeight:Math.min(p,1-l)})},onTransformEnd:a=>{const r=a.currentTarget;e.set({width:r.width(),height:r.height(),x:r.x(),y:r.y(),rotation:a.target.rotation(),cropWidth:E/_.width,cropHeight:k/_.height}),o(!1),t.history.endTransaction()}}),react_1.default.createElement(react_konva_1.Rect,{x:e.x,y:e.y,width:Math.max(e.width-e.borderSize,0),height:Math.max(e.height-e.borderSize,0),offsetX:-e.borderSize/2,offsetY:-e.borderSize/2,stroke:e.borderColor,strokeWidth:e.borderSize,listening:!1,visible:!!e.borderSize,rotation:e.rotation,cornerRadius:Math.max(0,R-e.borderSize),hideInExport:!e.showInExport}),e._cropModeEnabled&&react_1.default.createElement(react_konva_utils_1.Portal,{selector:".page-abs-container",enabled:!0},react_1.default.createElement(react_konva_1.Rect,{x:-1500,y:-1500,width:4500,height:4500,fill:"rgba(0,0,0,0.3)"}),react_1.default.createElement(react_konva_1.Image,{listening:!1,image:O,x:e.x,y:e.y,width:e.width,height:e.height,rotation:e.rotation,shadowEnabled:e.shadowEnabled,shadowBlur:e.shadowBlur}),react_1.default.createElement(react_konva_1.Group,{x:e.x,y:e.y,rotation:e.rotation,scaleX:L,scaleY:L},react_1.default.createElement(react_konva_1.Image,{image:_,ref:n,opacity:.4,draggable:!0,x:-e.cropX*_.width,y:-e.cropY*_.height,onDragMove:H,onTransform:H}),react_1.default.createElement(react_konva_1.Transformer,{ref:Y,anchorSize:20,enabledAnchors:["top-left","top-right","bottom-left","bottom-right"],boundBoxFunc:(e,t)=>t.width<5||t.height<5?e:t,rotateEnabled:!1,borderEnabled:!1,anchorCornerRadius:10,anchorStrokeWidth:2,borderStrokeWidth:2}),react_1.default.createElement(react_konva_1.Rect,{width:E,height:k,ref:P,listening:!1,onTransform:t=>{t.target.x()<-e.cropX*_.width-1e-9&&(t.target.x(-e.cropX*_.width),t.target.scaleX(1)),t.target.y()<-e.cropY*_.height-1e-9&&(t.target.y(-e.cropY*_.height),t.target.scaleY(1));const a=Math.min(1,Math.max(0,e.cropX+t.target.x()/_.width)),r=Math.min(1,Math.max(0,t.target.y()/_.height+e.cropY)),o=t.target.width()*t.target.scaleX(),i=t.target.height()*t.target.scaleY(),n=Math.min(1-a,o/_.width),h=Math.min(1-r,i/_.height),c=t.target.getAbsolutePosition(t.target.getParent().getParent());t.target.scale({x:1,y:1}),t.target.position({x:0,y:0}),e.set({x:c.x,y:c.y,cropX:a,cropY:r,cropWidth:n,cropHeight:h,width:Math.min(o*L,_.width*(1-a)*L),height:Math.min(i*L,_.height*(1-r)*L)})}}),react_1.default.createElement(react_konva_1.Transformer,{ref:X,enabledAnchors:["top-left","top-right","bottom-left","bottom-right"],boundBoxFunc:(e,t)=>t.width<5||t.height<5?e:t,keepRatio:!1,rotateEnabled:!1,anchorFill:"rgb(240, 240, 240)",anchorStrokeWidth:2,borderStrokeWidth:2}))),(h||d)&&react_1.default.createElement(highlighter_1.Highlighter,{element:e}))}));