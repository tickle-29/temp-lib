"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SectionTab=void 0;const react_1=__importDefault(require("react")),styled_1=__importDefault(require("../utils/styled")),TabContainer=(0,styled_1.default)("div")`
  width: 100%;
  height: 72px;
  padding-top: 15px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;

  .bp4-dark &:hover,
  .bp4-dark &.active {
    color: #48aff0 !important;
  }

  &:hover,
  &.active {
    background-color: rgba(19, 124, 189, 0.2);
  }

  @media screen and (max-width: 500px) {
    height: 54px;
    padding-top: 9px;
    width: 72px;
  }
`,SectionTab=({children:e,name:t,onClick:a,active:i,iconSize:r})=>react_1.default.createElement(TabContainer,{onClick:a,className:"polotno-side-panel-tab"+(i?" active":"")},react_1.default.createElement("div",{style:{fontSize:(r||14)+"px"}},e),react_1.default.createElement("div",{style:{paddingTop:"5px"}},t));exports.SectionTab=SectionTab;