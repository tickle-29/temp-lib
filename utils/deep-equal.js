"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deepEqual=void 0;const deepEqual=function(e,t){if(e===t)return!0;if("object"==typeof e&&null!=e&&"object"==typeof t&&null!=t){if(Object.keys(e).length!=Object.keys(t).length)return!1;for(var r in e){if(!t.hasOwnProperty(r))return!1;if(!(0,exports.deepEqual)(e[r],t[r]))return!1}return!0}return!1};exports.deepEqual=deepEqual;