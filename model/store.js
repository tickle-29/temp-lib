"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o);var s=Object.getOwnPropertyDescriptor(t,o);s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,n,s)}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&__createBinding(t,e,o);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(o[n[s]]=e[n[s]])}return o},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createStore=exports.Store=exports.Font=exports.Page=exports.GroupElement=exports.registerShapeModel=exports.SVGElement=exports.ImageElement=exports.TextElement=exports.Element=exports.Node=void 0;const mobx_state_tree_1=require("mobx-state-tree"),history_1=require("./history"),nanoid_1=require("nanoid"),konva_1=__importDefault(require("konva")),download_1=require("../utils/download"),pdf_1=require("../utils/pdf"),validate_key_1=require("../utils/validate-key"),fonts=__importStar(require("../utils/fonts")),loader_1=require("../utils/loader"),unit_1=require("../utils/unit"),deep_equal_1=require("../utils/deep-equal"),wait_1=require("../utils/wait");(0,mobx_state_tree_1.setLivelinessChecking)("ignore");const forEveryChild=(e,t)=>{e.children&&e.children.forEach((e=>{t(e),forEveryChild(e,t)}))};exports.Node=mobx_state_tree_1.types.model("Node",{id:mobx_state_tree_1.types.identifier,type:"none",name:"",opacity:1,custom:mobx_state_tree_1.types.frozen(),visible:!0,selectable:!0,removable:!0,alwaysOnTop:!1,showInExport:!0}).postProcessSnapshot((e=>{const t=Object.assign({},e),o={};for(var n in t)"_"!==n[0]&&(o[n]=e[n]);return o})).views((e=>({get locked(){return!(e.draggable||e.contentEditable||e.styleEditable||e.resizable)},get page(){return(0,mobx_state_tree_1.getParentOfType)(e,exports.Page)},get store(){return(0,mobx_state_tree_1.getParentOfType)(e,exports.Store)},get top(){let t=e;for(;;){if(!(0,mobx_state_tree_1.hasParentOfType)(t,exports.GroupElement))return t;t=(0,mobx_state_tree_1.getParentOfType)(t,exports.GroupElement)}},get parent(){return(0,mobx_state_tree_1.hasParentOfType)(e,exports.GroupElement)?(0,mobx_state_tree_1.getParentOfType)(e,exports.GroupElement):(0,mobx_state_tree_1.hasParentOfType)(e,exports.Page)?(0,mobx_state_tree_1.getParentOfType)(e,exports.Page):(0,mobx_state_tree_1.hasParentOfType)(e,exports.Store)?(0,mobx_state_tree_1.getParentOfType)(e,exports.Store):null}}))).actions((e=>({toJSON:()=>Object.assign({},(0,mobx_state_tree_1.getSnapshot)(e))}))).actions((e=>({clone(t={}){const o=e.toJSON();return t.id=t.id||(0,nanoid_1.nanoid)(10),forEveryChild(o,(e=>{e.id=(0,nanoid_1.nanoid)(10)})),Object.assign(o,t),e.page.addElement(o)},set(t){Object.assign(e,t)},moveUp(){e.page.moveElementsUp([e.id])},moveTop(){e.page.moveElementsTop([e.id])},moveDown(){e.page.moveElementsDown([e.id])},moveBottom(){e.page.moveElementsBottom([e.id])},beforeDestroy(){e.store.history.endTransaction()}}))),exports.Element=exports.Node.named("Element").props({x:0,y:0,width:100,height:100,rotation:0,opacity:1,blurEnabled:!1,blurRadius:10,brightnessEnabled:!1,brightness:0,sepiaEnabled:!1,grayscaleEnabled:!1,shadowEnabled:!1,shadowBlur:5,shadowOffsetX:0,shadowOffsetY:0,shadowColor:"black",shadowOpacity:1,visible:!0,draggable:!0,resizable:!0,selectable:!0,contentEditable:!0,styleEditable:!0,alwaysOnTop:!1,showInExport:!0}).preProcessSnapshot((e=>{const t=Object.assign(Object.assign({},e),{x:e.x||0,y:e.y||0});return"width"in e&&(t.width=t.width||1),"height"in e&&(t.height=t.height||1),e.locked&&(t.draggable=!1,t.contentEditable=!1,t.styleEditable=!1,t.resizable=!1),t})),exports.TextElement=exports.Element.named("Text").props({type:"text",text:"",placeholder:"",fontSize:14,fontFamily:"Roboto",fontStyle:"normal",fontWeight:"normal",textDecoration:"",fill:"black",align:"center",width:100,height:0,verticalAlign:"top",strokeWidth:0,stroke:"black",lineHeight:mobx_state_tree_1.types.optional(mobx_state_tree_1.types.union(mobx_state_tree_1.types.number,mobx_state_tree_1.types.string),1.2),letterSpacing:0,_editModeEnabled:!1}).preProcessSnapshot((e=>Object.assign({},e))).actions((e=>({toggleEditMode(t){e._editModeEnabled=null!=t?t:!e._editModeEnabled,e._editModeEnabled?e.store.history.startTransaction():e.store.history.endTransaction()}}))),exports.ImageElement=exports.Element.named("Image").props({type:"image",width:100,height:100,src:"",cropX:0,cropY:0,cropWidth:1,cropHeight:1,cornerRadius:0,flipX:!1,flipY:!1,clipSrc:"",borderColor:"black",borderSize:0,_cropModeEnabled:!1}).actions((e=>({toggleCropMode(t){e._cropModeEnabled=null!=t?t:!e._cropModeEnabled,e._cropModeEnabled?e.store.history.startTransaction():e.store.history.endTransaction()}}))),exports.SVGElement=exports.Element.named("SVG").props({type:"svg",src:"",maskSrc:"",__svgString:"",cropX:0,cropY:0,cropWidth:1,cropHeight:1,keepRatio:!0,flipX:!1,flipY:!1,width:100,height:100,borderColor:"black",borderSize:0,cornerRadius:0,colorsReplace:mobx_state_tree_1.types.map(mobx_state_tree_1.types.string)}).preProcessSnapshot((e=>Object.assign(Object.assign({},e),{src:e.src||e.svgSource}))).actions((e=>({replaceColor(t,o){e.colorsReplace.set(t,o)}})));const ADDITIONAL_TYPES=[];function registerShapeModel(e){const t=e.type;if(!t)throw new Error('You must pass "type" attribute to custom model.');const o=exports.Element.named(t).props(e);TYPES_MAP[t]=o,ADDITIONAL_TYPES.push(o)}exports.registerShapeModel=registerShapeModel;const additionalTypesUnion=[...new Array(20)].map(((e,t)=>mobx_state_tree_1.types.late((()=>ADDITIONAL_TYPES[t])))),ElementTypes=mobx_state_tree_1.types.union({dispatcher:e=>{const t=TYPES_MAP[e.type];if(!t)throw new Error(`Unknown element type: "${e.type}"`);return t}},exports.SVGElement,exports.TextElement,exports.ImageElement,mobx_state_tree_1.types.late((()=>exports.GroupElement)),...additionalTypesUnion);exports.GroupElement=exports.Node.named("Group").props({type:"group",children:mobx_state_tree_1.types.array(ElementTypes)}).views((e=>({get draggable(){let t=!0;return forEveryChild(e,(e=>{e.draggable||(t=!1)})),t},get resizable(){let t=!0;return forEveryChild(e,(e=>{e.resizable||(t=!1)})),t},get contentEditable(){let t=!0;return forEveryChild(e,(e=>{e.contentEditable||(t=!1)})),t},get styleEditable(){let t=!0;return forEveryChild(e,(e=>{e.styleEditable||(t=!1)})),t}}))).actions((e=>({set(t){var{draggable:o,contentEditable:n,styleEditable:s,resizable:i}=t,a=__rest(t,["draggable","contentEditable","styleEditable","resizable"]);void 0!==o&&forEveryChild(e,(e=>{e.set({draggable:o})})),void 0!==n&&forEveryChild(e,(e=>{e.set({contentEditable:n})})),void 0!==s&&forEveryChild(e,(e=>{e.set({styleEditable:s})})),void 0!==i&&forEveryChild(e,(e=>{e.set({resizable:i})})),Object.assign(e,a)}})));const TYPES_MAP={svg:exports.SVGElement,text:exports.TextElement,image:exports.ImageElement,group:exports.GroupElement};function createStore({key:e,showCredit:t}={key:"",showCredit:!1}){const o=exports.Store.create();return(0,validate_key_1.validateKey)(e,t),o}exports.Page=mobx_state_tree_1.types.model("Page",{id:mobx_state_tree_1.types.identifier,children:mobx_state_tree_1.types.array(ElementTypes),width:mobx_state_tree_1.types.optional(mobx_state_tree_1.types.union(mobx_state_tree_1.types.number,mobx_state_tree_1.types.literal("auto")),"auto"),height:mobx_state_tree_1.types.optional(mobx_state_tree_1.types.union(mobx_state_tree_1.types.number,mobx_state_tree_1.types.literal("auto")),"auto"),background:"white",bleed:0,custom:mobx_state_tree_1.types.frozen(),_exporting:!1}).postProcessSnapshot((e=>{const t=Object.assign({},e),o={};for(var n in t)"_"!==n[0]&&(o[n]=e[n]);return o})).views((e=>({get store(){return(0,mobx_state_tree_1.getParentOfType)(e,exports.Store)}}))).views((e=>({get computedWidth(){return"auto"===e.width?e.store.width:e.width},get computedHeight(){return"auto"===e.height?e.store.height:e.height}}))).actions((e=>({toJSON:()=>JSON.parse(JSON.stringify((0,mobx_state_tree_1.getSnapshot)(e))),_forEachElementUp(t,o){const n=t.map((t=>({id:t,index:e.children.findIndex((e=>e.id===t))})));n.sort(((e,t)=>t.index-e.index));for(const{index:s}of n){if(-1==s)continue;const n=s<e.children.length-1&&e.children[s+1],i=t.indexOf(null==n?void 0:n.id)>=0;s===e.children.length-1||i||o(s)}},_forEachElementDown(t,o){const n=t.map((t=>({id:t,index:e.children.findIndex((e=>e.id===t))})));n.sort(((e,t)=>e.index-t.index));for(const{index:s}of n){if(-1==s)continue;const n=s>0&&e.children[s-1],i=t.indexOf(null==n?void 0:n.id)>=0;0===s||i||o(s)}return!1}}))).actions((e=>({clone(t={}){const o=e.toJSON();o.children.forEach((e=>{e.id=(0,nanoid_1.nanoid)(10),forEveryChild(e,(e=>{e.id=(0,nanoid_1.nanoid)(10)}))}));const n=Object.assign(Object.assign(Object.assign({},o),{id:(0,nanoid_1.nanoid)(10)}),t),s=e.store.addPage(n),i=e.store.pages.indexOf(e);s.setZIndex(i+1),s.select()},setZIndex(t){e.store.setPageZIndex(e.id,t)},set(t){Object.assign(e,t)},select(){e.store.selectPage(e.id)},addElement(t){const o=TYPES_MAP[t.type];if(!o)return void console.error("Can not find model with type "+t.type);t.children&&t.children.forEach((e=>{e.id=(0,nanoid_1.nanoid)(10)}));const n=o.create(Object.assign({id:(0,nanoid_1.nanoid)(10)},t));return e.children.push(n),n.selectable&&e.store.selectElements([n.id]),n},canMoveElementsUp(t){let o=!1;return e._forEachElementUp(t,(()=>{o=o||!0})),o},moveElementsUp(t){e._forEachElementUp(t,(t=>{const o=e.children[t];(0,mobx_state_tree_1.detach)(o),e.children.splice(t+1,0,o)}))},canMoveElementsTop(e){return this.canMoveElementsUp(e)},moveElementsTop(t){const o=[],n=[];e.children.forEach((e=>{t.indexOf(e.id)>=0?o.push(e):n.push(e)})),e.children.replace(n.concat(o))},canMoveElementsDown(t){let o=!1;return e._forEachElementDown(t,(()=>{o=o||!0})),o},moveElementsDown(t){e._forEachElementDown(t,(t=>{const o=e.children[t];(0,mobx_state_tree_1.detach)(o),e.children.splice(t-1,0,o)}))},canMoveElementsBottom(e){return this.canMoveElementsDown(e)},moveElementsBottom(t){const o=[],n=[];e.children.forEach((e=>{t.indexOf(e.id)>=0?o.push(e):n.push(e)})),e.children.replace(o.concat(n))},setElementZIndex(t,o){const n=e.children.find((e=>e.id===t));n&&((0,mobx_state_tree_1.detach)(n),e.children.remove(n),e.children.splice(o,0,n))},setSize({width:t,height:o},{useMagic:n}){e.width=t,e.height=o}}))).actions((e=>({moveElementUp(t){console.warn("page.moveElementUp(id) is deprecated. Please use page.moveElementsUp([id1, id2]) instead."),e.moveElementsUp([t])},moveElementDown(t){console.warn("page.moveElementDown(id) is deprecated. Please use page.moveElementsDown([id1, id2]) instead."),e.moveElementsDown([t])},moveElementTop(t){console.warn("page.moveElementTop(id) is deprecated. Please use page.moveElementsTop([id1, id2]) instead."),e.moveElementsTop([t])},moveElementBottom(t){console.warn("page.moveElementBottom(id) is deprecated. Please use page.moveElementsBottom([id1, id2]) instead."),e.moveElementsBottom([t])}}))),exports.Font=mobx_state_tree_1.types.model("Font",{fontFamily:mobx_state_tree_1.types.string,url:mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string,""),styles:mobx_state_tree_1.types.frozen()}).preProcessSnapshot((e=>Object.assign(Object.assign({},e),{fontFamily:e.fontFamily||e.name}))),exports.Store=mobx_state_tree_1.types.model("Store",{role:"",pages:mobx_state_tree_1.types.array(exports.Page),fonts:mobx_state_tree_1.types.array(exports.Font),width:1080,height:1080,scale:1,scaleToFit:1,unit:"px",dpi:72,bleedVisible:!1,rulesVisible:!1,openedSidePanel:"",selectedElementsIds:mobx_state_tree_1.types.array(mobx_state_tree_1.types.string),history:mobx_state_tree_1.types.optional(history_1.UndoManager,{targetPath:"../pages"}),_elementsPixelRatio:2,_activePageId:""}).views((e=>({get _bleedVisible(){return console.warn("store._bleedVisible is deprecated. Please use store.bleedVisible instead."),e.bleedVisible},get selectedElements(){return e.selectedElementsIds.map((t=>{for(const o of e.pages)for(const e of o.children)if(e.id===t)return e})).filter((e=>!!e))},get selectedShapes(){const t=[];return e.selectedElementsIds.forEach((o=>{for(const n of e.pages)for(const e of n.children)e.id===o&&"group"!==e.type&&t.push(e),"group"===e.type&&e.id===o&&t.push(...e.children)})),t},get activePage(){return e.pages.slice().find((t=>t.id===e._activePageId))||(e.pages.length?e.pages[0]:null)}}))).actions((e=>({afterCreate(){e.history.canUndo},setUnit({unit:t,dpi:o}){e.unit=t||e.unit,e.dpi=o||e.dpi},setRole(t){e.role=t},getElementById(t){for(const o of e.pages)for(const e of o.children){if(e.id===t)return e;if("group"===e.type){const o=e.children.find((e=>e.id===t));if(o)return o}}},addPage(t){const o=exports.Page.create(Object.assign({id:(0,nanoid_1.nanoid)(10)},t));return e.pages.push(o),e._activePageId=o.id,o},selectPage(t){e._activePageId=t},selectElements(t){const o=t.map((t=>e.getElementById(t))).sort(((e,t)=>e.page.children.indexOf(e)-e.page.children.indexOf(t))).filter((e=>!!e)).map((e=>e.id));e.selectedElementsIds=(0,mobx_state_tree_1.cast)(o)},toggleBleed(t){e.bleedVisible=null!=t?t:!e.bleedVisible},toggleRulers(t){e.rulesVisible=null!=t?t:!e.rulesVisible},openSidePanel(t){e.openedSidePanel=t},setScale(t){e.scale=t},_setScaleToFit(t){e.scaleToFit=t},setElementsPixelRatio(t){e._elementsPixelRatio=t},setSize(t,o,n){if(n){const n=t/e.width,s=o/e.height;for(const t of e.pages)for(const e of t.children)e.set({x:e.x*n,y:e.y*s}),"text"===e.type?e.set({fontSize:e.fontSize*n,width:Math.max(e.width*n,2)}):"image"===e.type?e.set({width:e.width*n,height:e.height*s}):"svg"===e.type&&e.set({width:Math.max(e.width*n,2),height:Math.max(e.height*n,2)})}e.width=t,e.height=o},setPageZIndex(t,o){const n=e.pages.find((e=>e.id===t));n&&((0,mobx_state_tree_1.detach)(n),e.pages.remove(n),e.pages.splice(o,0,n))},deletePages(t){const o=e.pages.indexOf(e.activePage);t.forEach((t=>{const o=e.pages.find((e=>e.id===t));(0,mobx_state_tree_1.destroy)(o)}));const n=Math.min(e.pages.length-1,o),s=e.pages[n];s&&(e._activePageId=s.id),e.selectedElementsIds=(0,mobx_state_tree_1.cast)(e.selectedElementsIds.filter((t=>e.getElementById(t))))},groupElements(t){const o=t.map((t=>e.getElementById(t)));o.forEach((e=>{e&&(0,mobx_state_tree_1.detach)(e)}));const n=e.activePage,s=exports.GroupElement.create({id:(0,nanoid_1.nanoid)(10),children:(0,mobx_state_tree_1.cast)(o)});return n.children.push(s),e.selectedElementsIds=(0,mobx_state_tree_1.cast)([s.id]),s},ungroupElements(t){const o=t.map((t=>e.getElementById(t))),n=[];o.forEach((e=>{if(e&&"group"===e.type){const t=e.page,o=t.children.indexOf(e);e.children.forEach((e=>{n.push(e.id)})),e.children.forEach((e=>{(0,mobx_state_tree_1.detach)(e),t.children.push(e)})),t.children.splice(o,1)}})),e.selectedElementsIds=(0,mobx_state_tree_1.cast)(n)},deleteElements(t){t.forEach((t=>{e.pages.forEach((e=>{const o=e.children.find((e=>e.id===t));o&&(0,mobx_state_tree_1.destroy)(o)}))})),e.selectedElementsIds=(0,mobx_state_tree_1.cast)(e.selectedElementsIds.filter((t=>e.getElementById(t))))},on(t,o){if("change"===t){let t=e.toJSON();return(0,mobx_state_tree_1.onSnapshot)(e,(n=>{const s=e.toJSON();!(0,deep_equal_1.deepEqual)(t,s)&&(t=s,o(s))}))}},async _toCanvas({pixelRatio:t,ignoreBackground:o,pageId:n,mimeType:s,includeBleed:i}={}){var a;const r=t||1;n=n||(null===(a=e.pages[0])||void 0===a?void 0:a.id);const l=e.pages.find((e=>e.id===n));if(!l)throw new Error(`No page for export with id ${n}`);null==l||l.set({_exporting:!0});const d=await(0,wait_1.waitTillAvailable)((()=>konva_1.default.stages.find((e=>e.getAttr("pageId")===n))));if(!d)throw new Error(`Export is failed. Can not find stage for page ${n}. Looks like <Workspace /> component is not mounted, but it is required in order to process the export.`);await e.waitLoading();const c=d.findOne(".page-container");d.find("Transformer").forEach((e=>e.visible(!1))),c.find(".page-background").forEach((e=>e.shadowEnabled(!1))),c.find(".page-background").forEach((e=>e.strokeEnabled(!1))),c.find(".highlighter").forEach((e=>e.visible(!1)));const p=c.findOne(".page-background-group"),_=p.clip();p.clip({x:null,y:null,width:null,height:null});const m=c.findOne(".elements-container"),g=m.clip();m.clip({x:null,y:null,width:null,height:null});const h=c.find((e=>e.getAttr("hideInExport")));h.forEach((e=>{e.setAttr("oldVisible",e.visible()),e.hide()}));const u=c.find((e=>!e.visible()&&e.getAttr("editModeEnabled")));u.forEach((e=>{e.setAttr("oldVisible",e.visible()),e.show()})),o&&c.find(".page-background").forEach((e=>e.hide()));const f=i?l.bleed:0;let b=f;e.bleedVisible&&i?b=0:e.bleedVisible&&!i&&(b=-l.bleed);const x=document.createElement("canvas");x.width=(l.computedWidth+2*f)*r,x.height=(l.computedHeight+2*f)*r;const E=x.getContext("2d");"image/jpeg"===s&&(E.fillStyle="white",E.fillRect(0,0,x.width,x.height));const y=c.toCanvas({x:c.x()-b*c.scaleX(),y:c.y()-b*c.scaleY(),width:(l.computedWidth+2*f)*c.scaleX(),height:(l.computedHeight+2*f)*c.scaleY(),pixelRatio:1/c.scaleX()*r});return E.drawImage(y,0,0),konva_1.default.Util.releaseCanvas(y),o&&c.find(".page-background").forEach((e=>e.show())),h.forEach((e=>{e.visible(e.getAttr("oldVisible"))})),u.forEach((e=>{e.visible(e.getAttr("oldVisible"))})),c.find(".page-background").forEach((e=>e.shadowEnabled(!0))),c.find(".page-background").forEach((e=>e.strokeEnabled(!0))),d.find("Transformer").forEach((e=>e.visible(!0))),c.find(".highlighter").forEach((e=>e.visible(!0))),p.clip(_),m.clip(g),null==l||l.set({_exporting:!1}),x},async toDataURL({pixelRatio:t,ignoreBackground:o,pageId:n,mimeType:s,includeBleed:i,quality:a}={}){const r=await e._toCanvas({pixelRatio:t,ignoreBackground:o,pageId:n,mimeType:s,includeBleed:i}),l=r.toDataURL(s,a);return konva_1.default.Util.releaseCanvas(r),l},async toBlob({pixelRatio:t,ignoreBackground:o,pageId:n,mimeType:s,includeBleed:i,quality:a}={}){const r=await e._toCanvas({pixelRatio:t,ignoreBackground:o,pageId:n,mimeType:s,includeBleed:i}),l=new Promise((e=>{r.toBlob(e,s,a)}));return konva_1.default.Util.releaseCanvas(r),l},async saveAsImage(t={}){var{fileName:o}=t,n=__rest(t,["fileName"]);const s=n.mimeType||"image/png",i=s.split("/")[1];(0,download_1.downloadFile)(await e.toDataURL(n),o||"polotno."+i,s)},async _toPDF(t){const o=t.dpi||e.dpi,n=t.parallel||1,s=t.unit||("px"===e.unit?"mm":e.unit),i=t.pixelRatio||1,a=t.pageIds||e.pages.map((e=>e.id)),r=e.pages.filter((e=>a.includes(e.id))),l=await(0,pdf_1.getJsPDF)(),d=e=>(0,unit_1.pxToUnit)({px:e,unit:s,dpi:o}),c=r[0]||{},p=t.includeBleed?c.bleed:0,_=d(c.computedWidth+2*p),m=d(c.computedHeight+2*p);var g=new l({unit:s,orientation:_>m?"landscape":"portrait",format:[_,m],compress:!0});g.deletePage(1);const h=e._elementsPixelRatio;e.setElementsPixelRatio(i),await new Promise((e=>setTimeout(e)));const u=((e,t)=>{for(var o=[],n=0;n<e.length;n+=t)o.push(e.slice(n,n+t));return o})(r,n);for(const o of u){const n=o.map((async o=>{const n=t.includeBleed?o.bleed:0,s=d(o.computedWidth+2*n),a=d(o.computedHeight+2*n);let r=0,l=i;for(;r<10;){r+=1,2===r&&console.error("Polotno can not export PDF with current settings. Quality is automatically reduced.");const n=await e.toDataURL(Object.assign(Object.assign({},t),{pageId:o.id,pixelRatio:l}));if(n.length>20)return{url:n,width:s,height:a};l*=.8}}));(await Promise.all(n)).forEach((({url:e,width:t,height:o})=>{g.addPage([t,o],t>o?"landscape":"portrait"),g.addImage(e,0,0,t,o,void 0,"FAST")}))}return e.setElementsPixelRatio(h),g},toPDFDataURL:async t=>(await e._toPDF(Object.assign({mimeType:"image/jpeg"},t))).output("datauristring"),async saveAsPDF(t={}){var{fileName:o}=t,n=__rest(t,["fileName"]);(await e._toPDF(Object.assign({mimeType:"image/jpeg"},n))).save(o||"polotno.pdf")},async waitLoading(){await new Promise((e=>setTimeout(e,50))),await(0,loader_1.whenLoaded)()},toJSON:()=>({width:e.width,height:e.height,fonts:(0,mobx_state_tree_1.getSnapshot)(e.fonts),pages:(0,mobx_state_tree_1.getSnapshot)(e.pages),unit:e.unit,dpi:e.dpi}),loadJSON(t,o=!1){var n;const s=Object.assign({},t),i=e.pages.indexOf(e.activePage);let a=null===(n=s.pages[i]||s.pages[0])||void 0===n?void 0:n.id;s._activePageId=a;const r=Object.assign({},(0,mobx_state_tree_1.getSnapshot)(e));Object.assign(r,s),r.history=o?e.history.toJSON():{history:[],undoIdx:-1},(0,mobx_state_tree_1.applySnapshot)(e,r)},addFont(t){e.removeFont(t.fontFamily),e.fonts.push(t),e.loadFont(t.fontFamily)},removeFont(t){e.fonts.filter((e=>e.fontFamily===t)).forEach((e=>(0,mobx_state_tree_1.destroy)(e)))},async loadFont(t){const o=e.fonts.find((e=>e.fontFamily===t))||fonts.globalFonts.find((e=>e.fontFamily===t));o?fonts.injectCustomFont(o):fonts.injectGoogleFont(t),await fonts.loadFont(t)}}))),exports.createStore=createStore,exports.default=createStore;