"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.triggerLoadError=exports.onLoadError=exports.whenLoaded=exports.decrementLoader=exports.incrementLoader=void 0;const use_fadein_1=require("../canvas/use-fadein");let loadCount=0,listeners=[];function incrementLoader(e){loadCount+=1;let r=!1;Date.now();const o=setTimeout((()=>{r||(triggerLoadError(`Timeout loading image ${e}`),console.error("Timeout triggered for loader. Some assets may not have loaded.",e),r=!0,decrementLoader())}),3e4);return()=>{r||(clearTimeout(o),decrementLoader())}}function decrementLoader(){loadCount-=1,0===loadCount&&(listeners.forEach((e=>e())),listeners=[])}function whenLoadedCallback(e){0===loadCount?e():listeners.push(e)}function whenLoaded(){return new Promise((e=>whenLoadedCallback((()=>{(0,use_fadein_1.isAnimationUsed)()?setTimeout(e,300):e(!0)}))))}exports.incrementLoader=incrementLoader,exports.decrementLoader=decrementLoader,exports.whenLoaded=whenLoaded;let errorListeners=[];function onLoadError(e){errorListeners.push(e)}function triggerLoadError(e){errorListeners.forEach((r=>r(e)))}exports.onLoadError=onLoadError,exports.triggerLoadError=triggerLoadError;