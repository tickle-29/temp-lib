/// <reference types="react" />
import { ImageElementType, StoreType } from '../model/store';
type ImageProps = {
    store: StoreType;
    element: ImageElementType;
};
export declare const setImageLoaderHook: (customImageLoaderHook: any) => void;
export declare const useImageLoader: (status: string, id: string) => void;
export declare const ImageElement: (({ element, store }: ImageProps) => JSX.Element) & {
    displayName: string;
};
export {};
