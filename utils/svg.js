"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useSvgColors=exports.replaceColors=exports.sameColors=exports.fixSize=exports.getSvgSize=exports.svgToURL=exports.getColors=exports.urlToString=exports.urlToBase64=void 0;const konva_1=__importDefault(require("konva")),react_1=__importDefault(require("react")),gradient_1=require("./gradient");function isInsideDef(e){for(;e.parentNode;){if("defs"===e.nodeName)return!0;e=e.parentNode}return!1}function getElementColors(e){const t={fill:"",stroke:""};return e.getAttribute("fill")&&"none"!==e.getAttribute("fill")&&(t.fill=e.getAttribute("fill")),!t.fill&&e.style.fill&&"none"!==e.style.fill&&(t.fill=e.style.fill),e.getAttribute("stroke")&&(t.stroke=e.getAttribute("stroke")),!t.stroke&&e.style.stroke&&(t.stroke=e.style.stroke),t.stroke||t.fill||(t.fill="black"),t}const SVG_SHAPES=["path","rect","circle"];function getAllElementsWithColor(e){for(var t=[],r=e.getElementsByTagName("*"),o=0,s=r.length;o<s;o++){const e=r[o];isInsideDef(e)||(null!==e.getAttribute("fill")&&t.push(e),(null!==e.getAttribute("stroke")||e.style&&e.style.fill||SVG_SHAPES.indexOf(e.nodeName)>=0)&&t.push(e))}return t}async function urlToBase64(e){const t=await fetch(e);return svgToURL(await t.text())}async function urlToString(e){const t=await fetch(e,{mode:"cors"});return await t.text()}function getColors(e){const t=getAllElementsWithColor((new DOMParser).parseFromString(e,"image/svg+xml")),r=[];return t.forEach((e=>{const{fill:t,stroke:o}=getElementColors(e);[t,o].forEach((e=>{if(!e)return;konva_1.default.Util.colorToRGBA(e)&&-1===r.indexOf(e)&&r.push(e)}))})),r}function svgToURL(e){return"data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(e)))}async function getSvgSize(e){const t=await urlToString(e);const r=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement.getAttribute("viewBox"),[o,s,n,l]=(null==r?void 0:r.split(" "))||[];return{width:parseFloat(n),height:parseFloat(l)}}function fixSize(e){var t=(new DOMParser).parseFromString(e,"image/svg+xml");const r=t.documentElement.getAttribute("viewBox"),[o,s,n,l]=(null==r?void 0:r.split(" "))||[],i=t.documentElement.getAttribute("width");!i&&t.documentElement.setAttribute("width",n+"px");const a=t.documentElement.getAttribute("height");if((!a||a.indexOf("%")>=0)&&t.documentElement.setAttribute("height",l+"px"),i&&i.indexOf("%")>=0&&a&&-1===a.indexOf("%")){const e=parseFloat(a)/parseFloat(l);t.documentElement.setAttribute("width",e*parseFloat(n)+"px")}if(a&&a.indexOf("%")>=0&&i&&-1===i.indexOf("%")){const e=parseFloat(i)/parseFloat(n);t.documentElement.setAttribute("height",e*parseFloat(l)+"px")}return(new XMLSerializer).serializeToString(t)}exports.urlToBase64=urlToBase64,exports.urlToString=urlToString,exports.getColors=getColors,exports.svgToURL=svgToURL,exports.getSvgSize=getSvgSize,exports.fixSize=fixSize;const sameColors=(e,t)=>{if(!e||!t)return!1;const r=konva_1.default.Util.colorToRGBA(e),o=konva_1.default.Util.colorToRGBA(t);return r&&o?r.r===o.r&&r.g===o.g&&r.b===o.b&&r.a===o.a:void 0};function createGradient(e,t,r,o){var s=e.namespaceURI,n=document.createElementNS(s,"linearGradient");const l=konva_1.default.Util.degToRad(r+90),i=(Math.cos(l)+1)/2,a=(Math.sin(l)+1)/2,u=(Math.cos(l+Math.PI)+1)/2,c=(Math.sin(l+Math.PI)+1)/2;n.setAttribute("x1",100*i+"%"),n.setAttribute("y1",100*a+"%"),n.setAttribute("x2",100*u+"%"),n.setAttribute("y2",100*c+"%"),n.setAttribute("gradientUnits","userSpaceOnUse"),n.setAttribute("id",t);for(var f=0;f<o.length;f++){var g=o[f],p=document.createElementNS(s,"stop");for(var d in g)g.hasOwnProperty(d)&&p.setAttribute(d,g[d]);n.appendChild(p)}return(e.querySelector("defs")||e.insertBefore(document.createElementNS(s,"defs"),e.firstChild)).appendChild(n)}function replaceColors(e,t){var r=(new DOMParser).parseFromString(e,"image/svg+xml");const o=getAllElementsWithColor(r),s=Array.from(t.keys());o.forEach((e=>{const{fill:o,stroke:n}=getElementColors(e);[{prop:"fill",color:o},{prop:"stroke",color:n}].forEach((({prop:o,color:n})=>{const l=s.find((e=>(0,exports.sameColors)(e,n)));if(l){const s=t.get(l);if((0,gradient_1.isGradient)(s)){const{rotation:t,stops:n}=(0,gradient_1.parseColor)(s),l=n.map((e=>({offset:100*e.offset+"%","stop-color":e.color}))),i="color"+Math.round(1e8*Math.random());createGradient(r.children[0],i,t,l),e.style[o]=null,e.setAttribute(o,`url('#${i}')`)}else e.style[o]=t.get(l)}}))}));return svgToURL((new XMLSerializer).serializeToString(r))}exports.sameColors=sameColors,exports.replaceColors=replaceColors;const useSvgColors=e=>{const[t,r]=react_1.default.useState([]);return react_1.default.useEffect((()=>{let t=!1;return(async()=>{r([]);const o=getColors(await urlToString(e));t||r(o)})(),()=>{t=!0}}),[e]),t};exports.useSvgColors=useSvgColors;