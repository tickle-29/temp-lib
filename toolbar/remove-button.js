"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.RemoveButton=void 0;const react_1=__importDefault(require("react")),mobx_react_lite_1=require("mobx-react-lite"),core_1=require("@blueprintjs/core"),popover2_1=require("@blueprintjs/popover2"),l10n_1=require("../utils/l10n");exports.RemoveButton=(0,mobx_react_lite_1.observer)((({store:e})=>{const t=e.selectedElements.filter((e=>e.removable));return react_1.default.createElement(popover2_1.Tooltip2,{content:(0,l10n_1.t)("toolbar.removeElements"),disabled:!t.length,position:"bottom"},react_1.default.createElement(core_1.Button,{icon:"trash",minimal:!0,onClick:()=>{e.deleteElements(t.map((e=>e.id)))},disabled:!t.length,style:{marginLeft:"auto"}}))}));