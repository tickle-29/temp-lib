/// <reference types="react" />
import { StoreType, TextElementType } from '../model/store';
type ShapeProps = {
    store: StoreType;
    element: TextElementType;
};
export declare function isRTLText(string: string): boolean;
export declare function getDir(string: string): "ltr" | "rtl";
export declare const useFontLoader: (store: StoreType, fontFamily: string) => any[];
export declare const useTextColor: (element: TextElementType) => {
    fill: any;
    fillLinearGradientStartPointX?: undefined;
    fillLinearGradientStartPointY?: undefined;
    fillLinearGradientColorStops?: undefined;
    fillLinearGradientEndPointX?: undefined;
    fillLinearGradientEndPointY?: undefined;
    fillPriority?: undefined;
} | {
    fillLinearGradientStartPointX: number;
    fillLinearGradientStartPointY: number;
    fillLinearGradientColorStops: never[];
    fillLinearGradientEndPointX: number;
    fillLinearGradientEndPointY: number;
    fill: any;
    fillPriority: string;
};
export declare const TextElement: (({ element, store }: ShapeProps) => JSX.Element) & {
    displayName: string;
};
export {};
