/// <reference types="react" />
import { ElementType } from '../model/store';
type Props<ImageType> = {
    images: ImageType[] | undefined;
    onSelect: (image: ImageType, pos?: {
        x: number;
        y: number;
    }, element?: ElementType | undefined) => void;
    isLoading: boolean;
    getPreview: (image: ImageType) => string;
    loadMore?: false | undefined | null | (() => void);
    getCredit?: (image: ImageType) => any;
    getImageClassName?: (image: ImageType) => string;
    rowsNumber?: number;
    crossOrigin?: string;
    shadowEnabled?: boolean;
    itemHeight?: number;
    error?: any;
};
export declare const ImagesGrid: ({ images, onSelect, isLoading, getPreview, loadMore, getCredit, getImageClassName, rowsNumber, crossOrigin, shadowEnabled, itemHeight, error, }: Props<any>) => JSX.Element;
export {};
