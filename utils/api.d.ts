export declare const API = "https://api.polotno.dev/api";
export declare const URL = "https://api.polotno.dev";
type Params = {
    query: string;
    page: number;
};
export declare const URLS: {
    unsplashList: ({ query, page }: Params) => string;
    unsplashDownload: (id: any) => string;
    svgapiList: ({ query, page }: Params) => string;
    svgapiDownload: (path: any) => string;
    iconscoutList: ({ query, page }: Params) => string;
    iconscoutDownload: (id: any) => string;
    templateList: ({ query, page, sizeQuery, }: Params & {
        sizeQuery: string;
    }) => string;
};
export declare const getGoogleFontsListAPI: () => string;
export declare const getGoogleFontImage: (fontFamily: string) => string;
export declare const polotnoShapesList: () => string;
export declare const removeBackground: () => string;
export declare const templateList: (props: Params & {
    sizeQuery: string;
}) => string;
export declare const textTemplateList: () => string;
export declare const unsplashList: (props: Params) => string;
export declare const unsplashDownload: (id: string) => string;
export declare const svgapiList: (props: Params) => string;
export declare const svgapiDownload: (id: string) => string;
export declare const iconscoutList: (props: Params) => string;
export declare const iconscoutDownload: (id: string) => string;
export declare const setAPI: (key: string, getter: any) => void;
export {};
