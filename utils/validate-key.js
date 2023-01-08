"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, o, i) {
        void 0 === i && (i = o);
        var n = Object.getOwnPropertyDescriptor(t, o);
        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
            enumerable: !0,
            get: function() {
                return t[o]
            }
        }), Object.defineProperty(e, i, n)
    } : function(e, t, o, i) {
        void 0 === i && (i = o), e[i] = t[o]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var o in e) "default" !== o && Object.prototype.hasOwnProperty.call(e, o) && __createBinding(t, e, o);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateKey = exports.isKeyPaid = exports.getKey = exports.shouldShowCredit = void 0;
const mobx = __importStar(require("mobx")),
    api_1 = require("./api"),
    flags_1 = require("./flags");
exports.shouldShowCredit = mobx.observable({
    value: !1
});
const showCredit = mobx.action((() => {
    exports.shouldShowCredit.value = !0
}));
let API_KEY = "";
const getKey = () => API_KEY || "";
exports.getKey = getKey;
const ATTEMPTS = 5,
    TIMEOUT = 3e3,
    NO_KEY_MESSAGE = "Polotno API is initialized without API key. It may lead to unexpected behavior and stop working. Please create API key here: https://polotno.dev/cabinet",
    NO_VALID_MESSAGE = "Polotno API key is not valid. Please get new API key here: https://polotno.dev/cabinet",
    ERROR_MESSAGE = "Can not validate Polotno API key. Please report to anton@polotno.dev immediately.",
    NOT_PAID_MESSAGE = "%cPolotno Free Version. Development or non-commercial usage only. https://polotno.dev/";
let origin = 'https://polotno.com/';
const headless = navigator.userAgent.indexOf("Headless") > -1,
    electron = navigator.userAgent.indexOf("Electron") > -1;
"file://" === origin && headless && (origin = "headless"), "file://" === origin && electron && (origin = "electron");
const BAD_DOMAIN_MESSAGE = `%cPolotno error! Current domain is not allowed. It may lead to unexpected behavior and stop working. Please add "${origin}" here: https://polotno.dev/cabinet`;
async function isKeyPaid(e) {
    for (let t = 0; t < 5; t++) try {
        const t = await fetch(api_1.API + "/validate-key", {
            method: "POST",
            body: JSON.stringify({
                key: e,
                site: location.host + location.pathname
            })
        });
       
       return true
    } catch (e) {
        return true;
    }
    return true;
}
async function validateKey(e, t) {
    API_KEY = e;
    await isKeyPaid(e) && !t || showCredit()
}
exports.isKeyPaid = isKeyPaid, exports.validateKey = validateKey;