/// <reference types="react" />
import { StoreType, TextElementType } from '../model/store';
type PageProps = {
    store: StoreType;
    hideTextFontFamily?: boolean;
    hideTextSpacing?: boolean;
    hideTextEffects?: boolean;
    hideTextUnderline?: boolean;
    hideTextItalic?: boolean;
    hideTextBold?: boolean;
    components?: any;
};
type InputProps = {
    element: TextElementType;
    store: StoreType;
};
export declare const FontFamilyInput: (({ element, store }: InputProps) => JSX.Element) & {
    displayName: string;
};
export declare const FontSizeInput: (({ element }: InputProps) => JSX.Element) & {
    displayName: string;
};
export declare const FontStyleGroup: (({ element, store }: InputProps) => JSX.Element) & {
    displayName: string;
};
export declare const FontColorInput: (({ element, store }: InputProps) => JSX.Element) & {
    displayName: string;
};
export declare const SpacingInput: (({ element }: InputProps) => JSX.Element) & {
    displayName: string;
};
export declare const DirectionInput: (({ element }: InputProps) => JSX.Element) & {
    displayName: string;
};
export declare const HtmlToolbar: (({ store, hideTextFontFamily, hideTextEffects, hideTextSpacing, hideTextBold, hideTextItalic, hideTextUnderline, components, }: PageProps) => JSX.Element) & {
    displayName: string;
};
export {};
