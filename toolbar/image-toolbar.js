"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ImageToolbar=void 0;const react_1=__importDefault(require("react")),mobx_react_lite_1=require("mobx-react-lite"),core_1=require("@blueprintjs/core"),element_container_1=require("./element-container"),styled_1=__importDefault(require("../utils/styled")),filters_picker_1=__importDefault(require("./filters-picker")),flip_button_1=__importDefault(require("./flip-button")),flags_1=require("../utils/flags"),remove_background_button_1=require("./remove-background-button"),l10n_1=require("../utils/l10n"),FitButton=({element:e,store:t})=>react_1.default.createElement(core_1.Button,{text:(0,l10n_1.t)("toolbar.fitToBackground"),minimal:!0,onClick:()=>{const{page:t}=e;e.set({x:-t.bleed,y:-t.bleed,width:t.computedWidth+2*t.bleed,height:t.computedHeight+2*t.bleed,rotation:0,cropX:0,cropY:0,cropWidth:1,cropHeight:1})}}),CropButton=({element:e,store:t})=>react_1.default.createElement(core_1.Button,{text:(0,l10n_1.t)("toolbar.crop"),minimal:!0,onClickCapture:t=>{t.stopPropagation(),e.toggleCropMode(!0)}}),RemoveClipButton=({element:e,store:t})=>react_1.default.createElement(core_1.Button,{text:(0,l10n_1.t)("toolbar.removeClip"),minimal:!0,onClickCapture:t=>{e.set({clipSrc:""})}}),PROPS_MAP={ImageFlip:flip_button_1.default,ImageFilters:filters_picker_1.default,ImageFitToBackground:FitButton,ImageCrop:CropButton,ImageRemoveClip:RemoveClipButton,ImageRemoveBackground:remove_background_button_1.RemoveBackgroundButton},Container=(0,styled_1.default)("div")`
  @media screen and (max-width: 500px) {
    width: auto;
  }
`;exports.ImageToolbar=(0,mobx_react_lite_1.observer)((({store:e,hideImageFlip:t,hideImageEffects:r,hideImageCrop:o,hideImageFit:a,hideImageRemoveBackground:l,components:n})=>{const i=e.selectedElements[0],c=i._cropModeEnabled,u=react_1.default.useRef({});react_1.default.useEffect((()=>{c&&(u.current={x:i.x,y:i.y,width:i.width,height:i.height,cropX:i.cropX,cropY:i.cropY,cropWidth:i.cropWidth,cropHeight:i.cropHeight})}),[c]);const m=[!t&&"ImageFlip",!r&&"ImageFilters",!a&&"ImageFitToBackground",!o&&"ImageCrop",i.clipSrc&&"ImageRemoveClip",!l&&flags_1.flags.removeBackgroundEnabled&&"ImageRemoveBackground"].filter((e=>!!e)),_=(0,element_container_1.extendToolbar)({type:"image",usedItems:m,components:n});return react_1.default.createElement(react_1.default.Fragment,null,!c&&react_1.default.createElement(element_container_1.ElementContainer,{items:_,itemRender:t=>{const r=n[t]||PROPS_MAP[t];return react_1.default.createElement(r,{element:i,store:e,key:t})}}),c&&react_1.default.createElement(core_1.Navbar.Group,null,react_1.default.createElement(core_1.Button,{text:(0,l10n_1.t)("toolbar.cropDone"),minimal:!0,icon:"tick",onClickCapture:e=>{i.toggleCropMode(!1)}}),react_1.default.createElement(core_1.Button,{text:(0,l10n_1.t)("toolbar.cropCancel"),minimal:!0,icon:"cross",onClickCapture:e=>{i.set(Object.assign({},u.current)),i.toggleCropMode(!1)}})))})),exports.default=exports.ImageToolbar;