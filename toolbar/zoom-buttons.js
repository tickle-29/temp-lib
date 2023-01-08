"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ZoomButtons=exports.ZoomGroup=void 0;const react_1=__importDefault(require("react")),core_1=require("@blueprintjs/core"),popover2_1=require("@blueprintjs/popover2"),styled_1=__importDefault(require("../utils/styled")),mobx_react_lite_1=require("mobx-react-lite"),l10n_1=require("../utils/l10n"),Container=(0,styled_1.default)("div")`
  position: absolute;
  bottom: 5px;
  width: auto;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.8;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 4px lightgrey;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`,FACTOR=1.2,SCALE_VARIATIONS=[.1,.25,.5,.75,1,1.5,2,3];exports.ZoomGroup=(0,mobx_react_lite_1.observer)((({store:e})=>{const t=Math.max(2,e.scaleToFit),r=Math.min(.5,e.scaleToFit),o=e.scale<t,a=e.scale>r;return react_1.default.createElement(core_1.Navbar.Group,{align:core_1.Alignment.LEFT,style:{height:"35px"}},react_1.default.createElement(core_1.Button,{icon:"zoom-out",minimal:!0,onClick:()=>{e.setScale(e.scale/1.2)},disabled:!a}),react_1.default.createElement(popover2_1.Popover2,{content:react_1.default.createElement(core_1.Menu,{style:{minWidth:"80px"}},SCALE_VARIATIONS.map((t=>react_1.default.createElement(core_1.MenuItem,{key:t,text:Math.round(100*t)+"%",onClick:async()=>{e.setScale(t)}}))),react_1.default.createElement(core_1.MenuItem,{text:(0,l10n_1.t)("scale.reset"),onClick:async()=>{e.setScale(e.scaleToFit)}}))},react_1.default.createElement(core_1.Button,{minimal:!0},Math.round(100*e.scale)+"%")),react_1.default.createElement(core_1.Button,{icon:"zoom-in",minimal:!0,onClick:()=>{e.setScale(1.2*e.scale)},disabled:!o}))})),exports.ZoomButtons=(0,mobx_react_lite_1.observer)((({store:e})=>react_1.default.createElement(Container,null,react_1.default.createElement(core_1.Navbar,{style:{height:"35px",padding:"0 5px"}},react_1.default.createElement(exports.ZoomGroup,{store:e}))))),exports.default=exports.ZoomButtons;