"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useSnap=void 0;const react_1=__importDefault(require("react")),konva_1=__importDefault(require("konva")),math_1=require("../utils/math");var GUIDELINE_OFFSET=5;function getObjectSnappingEdges(e){const t=e.__getNodeRect(),n=(0,math_1.getClientRect)(Object.assign(Object.assign({},t),{rotation:konva_1.default.Util.radToDeg(t.rotation)})),a=e.getAbsolutePosition();return{vertical:[{guide:n.x,offset:a.x-n.x,snap:"start"},{guide:n.x+n.width/2,offset:a.x-n.x-n.width/2,snap:"center"},{guide:n.x+n.width,offset:a.x-n.x-n.width,snap:"end"}],horizontal:[{guide:n.y,offset:a.y-n.y,snap:"start"},{guide:n.y+n.height/2,offset:a.y-n.y-n.height/2,snap:"center"},{guide:n.y+n.height,offset:a.y-n.y-n.height,snap:"end"}]}}function getGuides(e,t){var n=[],a=[];e.vertical.forEach((e=>{t.vertical.forEach((t=>{var a=Math.abs(e-t.guide);a<GUIDELINE_OFFSET&&n.push({lineGuide:e,diff:a,snap:t.snap,offset:t.offset})}))})),e.horizontal.forEach((e=>{t.horizontal.forEach((t=>{var n=Math.abs(e-t.guide);n<GUIDELINE_OFFSET&&a.push({lineGuide:e,diff:n,snap:t.snap,offset:t.offset})}))}));var i=[];const r=n.sort(((e,t)=>e.diff-t.diff)),s=a.sort(((e,t)=>e.diff-t.diff));var o=r[0],d=s[0];if(o){r.filter((e=>Math.abs(e.diff-o.diff)<.1)).forEach((e=>{i.push(Object.assign({orientation:"V"},e))}))}if(d){s.filter((e=>Math.abs(e.diff-d.diff)<.1)).forEach((e=>{i.push(Object.assign({orientation:"H"},e))}))}return i}function useSnap(e){const t=e=>e.hasName("element")||e.hasName("page-background")||e.hasName("elements-area");function n(n){var a;const i=null===(a=e.current)||void 0===a?void 0:a.getStage();var r=[],s=[];return i.find(t).forEach((e=>{if(!(n.indexOf(e)>=0)){var t=e.getClientRect({skipShadow:!0,skipStroke:!0});r.push(t.x,t.x+t.width,t.x+t.width/2),s.push(t.y,t.y+t.height,t.y+t.height/2)}})),{vertical:r,horizontal:s}}function a(t){var n;const a=null===(n=e.current)||void 0===n?void 0:n.getLayer(),i=null==a?void 0:a.children.find((e=>"line-guides"===e.name()));t.forEach((e=>{if("H"===e.orientation){var t=new konva_1.default.Line({points:[-6e3,e.lineGuide,6e3,e.lineGuide],stroke:"rgb(0, 161, 255)",strokeWidth:1,name:"guid-line",dash:[4,6]});null==i||i.add(t),a.batchDraw()}else if("V"===e.orientation){t=new konva_1.default.Line({points:[e.lineGuide,-6e3,e.lineGuide,6e3],stroke:"rgb(0, 161, 255)",strokeWidth:1,name:"guid-line",dash:[4,6]});null==i||i.add(t)}}))}const i=e=>{e.target.getLayer().children.find((e=>"line-guides"===e.name())).destroyChildren();var t=getGuides(n(e.target.nodes()),getObjectSnappingEdges(e.target));if(!t.length)return;a(t);const i=e.target.getAbsolutePosition(),r=Object.assign({},i);t.forEach((e=>{switch(e.snap){case"start":case"center":case"end":switch(e.orientation){case"V":r.x=e.lineGuide+e.offset;break;case"H":r.y=e.lineGuide+e.offset}}}));const s=r.x-i.x,o=r.y-i.y;e.evt.ctrlKey||e.evt.metaKey||e.target.nodes().forEach((e=>{const t=e.getAbsolutePosition();e.setAbsolutePosition({x:t.x+s,y:t.y+o})}))},r=(t,i,r)=>{const s=e.current,o=s.getLayer();if(o.children.find((e=>"line-guides"===e.name())).destroyChildren(),"rotater"===s.getActiveAnchor())return i;if(Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2))>50)return i;if(!o)return i;var d=getGuides(n(s.nodes()),{vertical:[{guide:i.x,offset:0,snap:"start"}],horizontal:[{guide:i.y,offset:0,snap:"start"}]});if(!d.length)return i;a(d);if(r.ctrlKey||r.metaKey)return i;let f=i.x,u=i.x;d.forEach((e=>{switch(e.orientation){case"V":f=e.lineGuide;break;case"H":u=e.lineGuide}}));const c=Math.abs(i.x-f)<10,l=Math.abs(i.y-u)<10;return c&&!l?{x:f,y:t.y}:l&&!c?{x:t.x,y:u}:c&&l?{x:f,y:u}:i},s=e=>{if(!e.target)return;const t=e.target.getLayer();t.children.find((e=>"line-guides"===e.name())).destroyChildren(),t.batchDraw()};react_1.default.useEffect((()=>{e.current&&(e.current.anchorDragBoundFunc(r),e.current.on("dragstart",(()=>{setTimeout((()=>{const e=[...konva_1.default.DD._dragElements.entries()];e.reverse(),konva_1.default.DD._dragElements.clear(),e.forEach((([e,t])=>{konva_1.default.DD._dragElements.set(e,t)}))}))})),e.current.on("dragmove",i),e.current.on("dragend",s),e.current.on("transformend",s))}),[])}exports.useSnap=useSnap;