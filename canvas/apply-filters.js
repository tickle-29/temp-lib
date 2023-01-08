"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyFilter=void 0;const konva_1=__importDefault(require("konva"));function applyFilter(e,t){var l;const r={filters:[]};t.brightnessEnabled&&(r.filters.push(konva_1.default.Filters.Brighten),r.brightness=t.brightness),t.blurEnabled&&(r.filters.push(konva_1.default.Filters.Blur),r.blurRadius=t.blurRadius),t.sepiaEnabled&&r.filters.push(konva_1.default.Filters.Sepia),t.grayscaleEnabled&&r.filters.push(konva_1.default.Filters.Grayscale),e.setAttrs(r),r.filters.length?e.cache({pixelRatio:t.store._elementsPixelRatio}):e.clearCache(),null===(l=e.getLayer())||void 0===l||l.batchDraw()}exports.applyFilter=applyFilter;