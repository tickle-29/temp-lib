"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ElementsPanel=exports.NounprojectPanel=void 0;const react_1=__importDefault(require("react")),mobx_state_tree_1=require("mobx-state-tree"),core_1=require("@blueprintjs/core"),images_grid_1=require("./images-grid"),swr_1=__importDefault(require("swr")),image_1=require("../utils/image"),svg_1=require("../utils/svg"),styled_1=__importDefault(require("../utils/styled")),l10n_1=require("../utils/l10n"),use_api_1=require("../utils/use-api"),api_1=require("../utils/api"),validate_key_1=require("../utils/validate-key"),iconToSrc=async e=>{const t=await fetch(`${api_1.API}/download-nounproject?id=${e}&KEY=${(0,validate_key_1.getKey)()}`),a=await t.text();return await(0,svg_1.svgToURL)(a)},NounContainer=(0,styled_1.default)("div")`
  height: 100%;
  overflow: hidden;

  .bp4-dark & img {
    filter: invert(1);
  }
`,limit=20,NounprojectPanel=({store:e,query:t})=>{const{data:a,isLoading:r,loadMore:i,setQuery:l}=(0,use_api_1.useInfiniteAPI)({getAPI:({page:e,query:t})=>`${api_1.API}/get-nounproject?query=${t}&offset=${20*(e-1)}&KEY=${(0,validate_key_1.getKey)()}`,getSize:e=>1});return react_1.default.useEffect((()=>{l(t)}),[t]),react_1.default.createElement(NounContainer,null,react_1.default.createElement(images_grid_1.ImagesGrid,{shadowEnabled:!1,images:null==a?void 0:a.map((e=>e.icons)).flat(),getPreview:e=>e.preview_url_84,isLoading:r,onSelect:async(t,a,r)=>{if(r&&"image"===r.type&&r.contentEditable){const e=await iconToSrc(t.id);return void r.set({clipSrc:e})}e.history.transaction((async()=>{var r;const i=((null==a?void 0:a.x)||e.width/2)-100,l=((null==a?void 0:a.y)||e.height/2)-100,o=null===(r=e.activePage)||void 0===r?void 0:r.addElement({type:"svg",width:200,height:200,x:i,y:l}),s=await iconToSrc(t.id);(0,mobx_state_tree_1.isAlive)(o)&&await o.set({src:s})}))},rowsNumber:4,loadMore:i}))};exports.NounprojectPanel=NounprojectPanel;const BasicShapes=({store:e})=>{const{data:t}=(0,swr_1.default)((0,api_1.polotnoShapesList)(),use_api_1.fetcher);return react_1.default.createElement(images_grid_1.ImagesGrid,{shadowEnabled:!1,rowsNumber:3,images:null==t?void 0:t.items,getPreview:e=>e.url,isLoading:!t,itemHeight:100,onSelect:async(t,a,r)=>{var i;const{width:l,height:o}=await(0,image_1.getImageSize)(t.url),s=await(0,svg_1.urlToBase64)(t.url);if(r&&"image"===r.type&&r.contentEditable)return void r.set({clipSrc:s});const n=((null==a?void 0:a.x)||e.width/2)-l/2,u=((null==a?void 0:a.y)||e.height/2)-o/2;null===(i=e.activePage)||void 0===i||i.addElement({type:"svg",width:l,height:o,x:n,y:u,src:s,keepRatio:!1})}})},ElementsPanel=({store:e})=>{const t=react_1.default.useRef(),[a,r]=react_1.default.useState(""),[i,l]=react_1.default.useState(a);react_1.default.useEffect((()=>(t.current=setTimeout((()=>{l(a)}),500),()=>{clearTimeout(t.current)})),[a]);const o=!!i;return react_1.default.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},react_1.default.createElement(core_1.InputGroup,{leftIcon:"search",placeholder:(0,l10n_1.t)("sidePanel.searchPlaceholder"),onChange:e=>{r(e.target.value)},style:{marginBottom:"20px"}}),o&&react_1.default.createElement(exports.NounprojectPanel,{query:i,store:e}),!o&&react_1.default.createElement(BasicShapes,{store:e}))};exports.ElementsPanel=ElementsPanel;