export declare function getImageSize(url: any): Promise<any>;
type Size = {
    width: number;
    height: number;
};
export declare function getCrop(elementSize: Size, originalImageSize: Size): {
    cropX: number;
    cropY: number;
    cropWidth: number;
    cropHeight: number;
};
export {};
