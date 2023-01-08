"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createDemoApp=exports.createPolotnoApp=exports.PolotnoApp=exports.WorkspaceWrap=exports.SidePanelWrap=exports.PolotnoContainer=void 0;const react_1=__importDefault(require("react")),client_1=__importDefault(require("react-dom/client")),workspace_1=__importDefault(require("./canvas/workspace")),toolbar_1=__importDefault(require("./toolbar/toolbar")),side_panel_1=__importDefault(require("./side-panel/side-panel")),zoom_buttons_1=__importDefault(require("./toolbar/zoom-buttons")),download_button_1=require("./toolbar/download-button"),styled_1=__importDefault(require("./utils/styled")),store_1=require("./model/store");exports.PolotnoContainer=(0,styled_1.default)("div")`
  display: flex;
  height: 100%;
  width: 100%;
  max-height: 100vh;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`,exports.SidePanelWrap=(0,styled_1.default)("div")`
  height: 100%;
  width: auto;
  max-height: 100vh;

  @media screen and (max-width: 500px) {
    height: auto;
    width: 100vw;
  }
`,exports.WorkspaceWrap=(0,styled_1.default)("div")`
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  flex-direction: column;
  position: relative;
`;const PolotnoApp=({store:e,style:t})=>react_1.default.createElement(exports.PolotnoContainer,{className:"polotno-app-container",style:t},react_1.default.createElement(exports.SidePanelWrap,null,react_1.default.createElement(side_panel_1.default,{store:e})),react_1.default.createElement(exports.WorkspaceWrap,null,react_1.default.createElement(toolbar_1.default,{store:e,components:{ActionControls:()=>react_1.default.createElement(download_button_1.DownloadButton,{store:e})}}),react_1.default.createElement(workspace_1.default,{store:e}),react_1.default.createElement(zoom_buttons_1.default,{store:e})));function createPolotnoApp({container:e,key:t,showCredit:o}){const r=(0,store_1.createStore)({key:t,showCredit:o}),a=client_1.default.createRoot(e);return a.render(react_1.default.createElement(exports.PolotnoApp,{store:r})),r.addPage(),r.history.clear(),{store:r,root:a}}exports.PolotnoApp=PolotnoApp,exports.createPolotnoApp=createPolotnoApp,exports.createDemoApp=createPolotnoApp;