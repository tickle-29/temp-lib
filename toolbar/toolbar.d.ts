/// <reference types="react" />
import { StoreType } from '../model/store';
type ToolbarProps = {
    store: StoreType;
    downloadButtonEnabled?: boolean;
    hideTextFontFamily?: boolean;
    hideTextSpacing?: boolean;
    hideTextEffects?: boolean;
    hideImageFlip?: boolean;
    hideImageEffects?: boolean;
    hideImageCrop?: boolean;
    hideImageFit?: boolean;
    hideImageRemoveBackground?: boolean;
    hideSvgEffects?: boolean;
    hidePosition?: boolean;
    hideOpacity?: boolean;
    hideDuplicate?: boolean;
    hideLock?: boolean;
    hideRemove?: boolean;
    components?: any;
};
export declare function registerToolbarComponent(type: string, reactComponent: any): void;
export declare const Toolbar: (({ store, downloadButtonEnabled, hideTextFontFamily, hideTextSpacing, hideTextEffects, hideImageFlip, hideImageEffects, hideImageCrop, hideImageFit, hideImageRemoveBackground, hideSvgEffects, hidePosition, hideOpacity, hideDuplicate, hideLock, hideRemove, components, }: ToolbarProps) => JSX.Element) & {
    displayName: string;
};
export default Toolbar;
