"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseColor=exports.isGradient=void 0;const gradient_parser_1=__importDefault(require("gradient-parser")),isGradient=e=>e.indexOf("linear-gradient")>=0;exports.isGradient=isGradient;const stopToColor=e=>"hex"===e.type?"#"+e.value:"literal"===e.type?e.value:`${e.type}(${e.value.join(",")})`,parseColor=e=>{if(!(0,exports.isGradient)(e))return{rotation:0,stops:[{offset:0,color:e},{offset:1,color:e}]};const t=gradient_parser_1.default.parse(e)[0];return{rotation:parseFloat(t.orientation.value),stops:t.colorStops.map(((e,o)=>({color:stopToColor(e),offset:e.length?parseFloat(e.length.value)/100:o/(t.colorStops.length-1)})))}};exports.parseColor=parseColor;