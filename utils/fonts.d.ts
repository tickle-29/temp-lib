import * as mobx from 'mobx';
export declare function isGoogleFontChanged(): boolean;
export declare function setGoogleFonts(list: string[] | 'default'): void;
export declare function getFontsList(): mobx.IObservableArray<string>;
type FontItem = {
    fontFamily: string;
    url: string;
};
export declare const globalFonts: mobx.IObservableArray<FontItem>;
export declare function addGlobalFont(font: FontItem): void;
export declare function removeGlobalFont(fontFamily: string): void;
export declare function replaceGlobalFonts(fonts: Array<FontItem>): void;
export declare const isFontLoaded: (fontName: string) => any;
export declare function loadFont(fontName: any): Promise<void>;
export declare function injectGoogleFont(fontName: any): void;
export declare function injectCustomFont(font: any): void;
export {};
