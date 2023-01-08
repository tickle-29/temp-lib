"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SidePanel=exports.DEFAULT_SECTIONS=exports.SizeSection=exports.LayersSection=exports.PagesSection=exports.BackgroundSection=exports.UploadSection=exports.ElementsSection=exports.PhotosSection=exports.TextSection=exports.TemplatesSection=exports.ImagesGrid=exports.SectionTab=void 0;const react_1=__importDefault(require("react")),mobx_react_lite_1=require("mobx-react-lite"),core_1=require("@blueprintjs/core"),styled_1=__importDefault(require("../utils/styled")),screen_1=require("../utils/screen"),FaShapes_1=__importDefault(require("@meronex/icons/fa/FaShapes")),FdPageMultiple_1=__importDefault(require("@meronex/icons/fd/FdPageMultiple")),l10n_1=require("../utils/l10n"),tab_button_1=require("./tab-button");var tab_button_2=require("./tab-button");Object.defineProperty(exports,"SectionTab",{enumerable:!0,get:function(){return tab_button_2.SectionTab}});var images_grid_1=require("./images-grid");Object.defineProperty(exports,"ImagesGrid",{enumerable:!0,get:function(){return images_grid_1.ImagesGrid}});const text_panel_1=require("./text-panel"),size_panel_1=require("./size-panel"),upload_panel_1=require("./upload-panel"),photos_panel_1=require("./photos-panel"),background_panel_1=require("./background-panel"),elements_panel_1=require("./elements-panel"),pages_panel_1=require("./pages-panel"),templates_panel_1=require("./templates-panel"),layers_panel_1=require("./layers-panel");exports.TemplatesSection={name:"templates",Tab:(0,mobx_react_lite_1.observer)((e=>react_1.default.createElement(tab_button_1.SectionTab,Object.assign({name:(0,l10n_1.t)("sidePanel.templates")},e),react_1.default.createElement(core_1.Icon,{icon:"control"})))),Panel:({store:e})=>react_1.default.createElement(templates_panel_1.TemplatesPanel,{store:e})},exports.TextSection={name:"text",Tab:(0,mobx_react_lite_1.observer)((e=>react_1.default.createElement(tab_button_1.SectionTab,Object.assign({name:(0,l10n_1.t)("sidePanel.text")},e),react_1.default.createElement(core_1.Icon,{icon:"new-text-box"})))),Panel:({store:e})=>react_1.default.createElement(text_panel_1.TextPanel,{store:e})},exports.PhotosSection={name:"photos",Tab:(0,mobx_react_lite_1.observer)((e=>react_1.default.createElement(tab_button_1.SectionTab,Object.assign({name:(0,l10n_1.t)("sidePanel.photos")},e),react_1.default.createElement(core_1.Icon,{icon:"media"})))),Panel:({store:e})=>react_1.default.createElement(photos_panel_1.PhotosPanel,{store:e})},exports.ElementsSection={name:"elements",Tab:(0,mobx_react_lite_1.observer)((e=>react_1.default.createElement(tab_button_1.SectionTab,Object.assign({name:(0,l10n_1.t)("sidePanel.elements"),iconSize:16},e),react_1.default.createElement("span",{className:"bp4-icon"},react_1.default.createElement(FaShapes_1.default,null))))),Panel:({store:e})=>react_1.default.createElement(elements_panel_1.ElementsPanel,{store:e})},exports.UploadSection={name:"upload",Tab:(0,mobx_react_lite_1.observer)((e=>react_1.default.createElement(tab_button_1.SectionTab,Object.assign({name:(0,l10n_1.t)("sidePanel.upload")},e),react_1.default.createElement(core_1.Icon,{icon:"cloud-upload"})))),Panel:({store:e})=>react_1.default.createElement(upload_panel_1.UploadPanel,{store:e})},exports.BackgroundSection={name:"background",Tab:(0,mobx_react_lite_1.observer)((e=>react_1.default.createElement(tab_button_1.SectionTab,Object.assign({name:(0,l10n_1.t)("sidePanel.background")},e),react_1.default.createElement(core_1.Icon,{icon:"layout-grid"})))),Panel:({store:e})=>react_1.default.createElement(background_panel_1.BackgroundPanel,{store:e})},exports.PagesSection={name:"pages",Tab:(0,mobx_react_lite_1.observer)((e=>react_1.default.createElement(tab_button_1.SectionTab,Object.assign({name:(0,l10n_1.t)("sidePanel.pages")},e),react_1.default.createElement(FdPageMultiple_1.default,null)))),Panel:({store:e})=>react_1.default.createElement(pages_panel_1.PagesPanel,{store:e}),visibleInList:!1},exports.LayersSection={name:"layers",Tab:(0,mobx_react_lite_1.observer)((e=>react_1.default.createElement(tab_button_1.SectionTab,Object.assign({name:(0,l10n_1.t)("sidePanel.layers")},e),react_1.default.createElement(core_1.Icon,{icon:"layers"})))),Panel:({store:e})=>react_1.default.createElement(layers_panel_1.LayersPanel,{store:e})},exports.SizeSection={name:"size",Tab:(0,mobx_react_lite_1.observer)((e=>react_1.default.createElement(tab_button_1.SectionTab,Object.assign({name:(0,l10n_1.t)("sidePanel.resize")},e),react_1.default.createElement(core_1.Icon,{icon:"fullscreen"})))),Panel:({store:e})=>react_1.default.createElement(size_panel_1.SizePanel,{store:e})};const MoreTab=(0,mobx_react_lite_1.observer)((e=>react_1.default.createElement(tab_button_1.SectionTab,Object.assign({name:(0,l10n_1.t)("sidePanel.more")},e),react_1.default.createElement(core_1.Icon,{icon:"more"}))));exports.DEFAULT_SECTIONS=[exports.TemplatesSection,exports.TextSection,exports.PhotosSection,exports.ElementsSection,exports.UploadSection,exports.BackgroundSection,exports.LayersSection,exports.SizeSection];const SidePanelContainer=(0,styled_1.default)("div")`
  display: flex;
  height: 100% !important;
  padding: 0px !important;
  position: relative;

  @media screen and (max-width: 500px) {
    height: auto !important;
    width: 100%;
    position: relative;
  }
`,TabsWrap=(0,styled_1.default)("div",react_1.default.forwardRef)`
  @media screen and (min-width: 501px) {
    overflow-y: auto;
    overflow-x: hidden;
    min-width: 72px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    overflow: auto;
  }
`,TabsContainer=(0,styled_1.default)("div",react_1.default.forwardRef)`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    flex-direction: row;
    min-width: min-content;
  }
`,PanelContainer=(0,styled_1.default)("div")`
  padding: 10px !important;
  width: 350px;
  height: 100% !important;

  &.collapsed {
    width: 0px;
  }

  @media screen and (max-width: 500px) {
    position: absolute;
    bottom: 54px;
    z-index: 100;
    height: 50vh !important;
    width: 100%;
  }
`,MobileOverlay=(0,styled_1.default)("div")`
  display: none;

  @media screen and (max-width: 500px) {
    position: absolute;
    bottom: 72px;
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
  }
`,HideButtonContainer=(0,styled_1.default)("div")`
  position: absolute;
  right: -14px;
  top: 50%;
  height: 96px;
  width: 15px;
  fill: white;
  cursor: pointer;
  z-index: 10;

  .bp4-dark & {
    right: -13px;
  }

  & .stroke {
    stroke: rgba(0, 0, 0, 0.3);
    fill: none;
  }

  & .fill {
    fill: white;
  }

  .bp4-dark & .fill {
    fill: #383e47;
  }

  & .pointer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleY(2);
    font-size: 0.5rem;
    color: rgba(171, 179, 191, 0.6);
  }

  .bp4-dark & .pointer {
    color: rgba(171, 179, 191, 0.6);
  }

  &:hover .pointer {
    color: black;
  }

  .bp4-dark &:hover .pointer {
    color: white;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`,HideButton=({onClick:e})=>react_1.default.createElement(HideButtonContainer,{"data-popper-arrow":"true",onClick:e},react_1.default.createElement("svg",{width:"15",height:"96",viewBox:"0 0 16 96",xmlns:"http://www.w3.org/2000/svg"},react_1.default.createElement("path",{className:"fill stroke",d:"M 1 7 C 2 9 4 10 7.2 13.28 C 7.45 13.4625 7.6 13.6 7.7 13.8048 L 7.8 13.8 C 9.8 15.8 11.6 17.6 12.9 19.7 C 14 21.6 14.7 23.9 14.9 27 H 15 V 68 C 15 71.7 14.3 74.3 13 76.6 C 11.7 78.8 9.9 80.5 7.8 82.6344 L 7.79 82.6 C 7.6 82.8 7.4507 83 7.2729 83.2127 C 3.9102 86.5228 2 87 1 90"})),react_1.default.createElement("div",{className:"pointer"},"<"));exports.SidePanel=(0,mobx_react_lite_1.observer)((({store:e,sections:t,defaultSection:a})=>{var n;react_1.default.useLayoutEffect((()=>{e.openSidePanel(a||"photos")}),[]);const r=t||exports.DEFAULT_SECTIONS,o=r.filter((e=>{var t;return null===(t=e.visibleInList)||void 0===t||t})),l=null===(n=r.find((t=>t.name===e.openedSidePanel)))||void 0===n?void 0:n.Panel,i=(0,screen_1.useMobile)();react_1.default.useEffect((()=>{i?e.openSidePanel(""):e.openSidePanel(a||"photos")}),[i]);const s=react_1.default.useRef(null);return react_1.default.createElement(SidePanelContainer,{className:"bp4-navbar polotno-side-panel"+(e.openedSidePanel?"":" collapsed")},react_1.default.createElement(TabsWrap,{ref:s,className:"polotno-side-tabs-container"},react_1.default.createElement(TabsContainer,{className:"polotno-side-tabs-inner"},o.map((({name:t,Tab:a})=>react_1.default.createElement(a,{key:t,active:t===e.openedSidePanel,onClick:()=>{e.openSidePanel(t)}}))))),l&&react_1.default.createElement(PanelContainer,{className:"bp4-navbar polotno-panel-container",onClick:t=>{t.target.closest(".polotno-close-panel")&&i&&e.openSidePanel("")}},react_1.default.createElement(l,{store:e})),e.openedSidePanel&&react_1.default.createElement(MobileOverlay,{onClick:()=>e.openSidePanel("")}),e.openedSidePanel&&react_1.default.createElement(HideButton,{onClick:()=>e.openSidePanel("")}))})),exports.default=exports.SidePanel;