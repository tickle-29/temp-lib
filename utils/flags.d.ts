export declare const flags: {
    imageDownScalingEnabled: boolean;
    removeBackgroundEnabled: boolean;
    htmlRenderEnabled: boolean;
    forceTextFitEnabled: boolean;
    textVerticalResizeEnabled: boolean;
    textOverflow: string;
};
export declare function setTextVerticalResizeEnabled(value: boolean): void;
export declare function useRemoveBackground(value: boolean): void;
export declare function useHtmlTextRender(value: boolean): void;
export declare function setDownScalingEnabled(value: boolean): void;
export declare function useDownScaling(value: boolean): void;
export declare function setForceTextFit(value: boolean): void;
export declare function setTextOverflow(value: 'resize' | 'ellipsis' | 'change-font-size'): void;
