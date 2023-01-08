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
    elements: Array<TextElementType>;
    store: StoreType;
};
export declare const FontFamilyInput: (({ elements, store }: InputProps) => JSX.Element) & {
    displayName: string;
};
export declare const FontSizeInput: (({ elements, store }: InputProps) => JSX.Element) & {
    displayName: string;
};
export declare const FontStyleGroup: (({ elements, store }: InputProps) => JSX.Element) & {
    displayName: string;
};
export declare const FontColorInput: (({ elements, store }: InputProps) => JSX.Element) & {
    displayName: string;
};
export declare const SpacingInput: (({ elements, store }: InputProps) => JSX.Element) & {
    displayName: string;
};
export declare const TextToolbar: (({ store, hideTextFontFamily, hideTextEffects, hideTextSpacing, hideTextBold, hideTextItalic, hideTextUnderline, components, }: PageProps) => JSX.Element) & {
    displayName: string;
};
export default TextToolbar;
