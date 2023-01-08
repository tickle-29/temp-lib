/// <reference types="react" />
import { TextElementType, StoreType } from '../model/store';
export declare const quillRef: {
    enabled: boolean;
    currentFormat: {};
    editor: {
        instance: any;
    };
};
type ShapeProps = {
    store: StoreType;
    element: TextElementType;
    onClick: Function;
};
export declare const HTMLElement: (({ element, store }: ShapeProps) => JSX.Element) & {
    displayName: string;
};
export {};
