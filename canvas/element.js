"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.registerShapeComponent=void 0;const react_1=__importDefault(require("react")),mobx_react_lite_1=require("mobx-react-lite"),text_element_1=require("./text-element"),image_element_1=require("./image-element"),html_element_1=require("./html-element"),react_konva_1=require("react-konva"),flags_1=require("../utils/flags"),GroupElement=(0,mobx_react_lite_1.observer)((e=>{const{element:t,store:r}=e,{children:n}=t,l=t.selectable||"admin"===r.role;return react_1.default.createElement(react_konva_1.Group,{opacity:t.opacity,listening:l},n.map((t=>react_1.default.createElement(Element,Object.assign({},e,{key:t.id,store:r,element:t})))))})),SHAPES_TYPES={text:text_element_1.TextElement,image:image_element_1.ImageElement,svg:image_element_1.ImageElement,group:GroupElement};function registerShapeComponent(e,t){SHAPES_TYPES[e]=t}exports.registerShapeComponent=registerShapeComponent;const Element=(0,mobx_react_lite_1.observer)((e=>{let t=SHAPES_TYPES[e.element.type];return"text"===e.element.type&&flags_1.flags.htmlRenderEnabled&&(t=html_element_1.HTMLElement),e.element.visible?t?react_1.default.createElement(t,Object.assign({},e)):(console.error("Can not find component for "+e.element.type),null):null}));exports.default=Element;