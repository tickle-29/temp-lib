/// <reference types="react" />
import { StoreType } from '../model/store';
type Props = {
    store: StoreType;
    hideImageFlip?: boolean;
    hideImageEffects?: boolean;
    hideImageCrop?: boolean;
    hideImageFit?: boolean;
    hideImageRemoveBackground?: boolean;
    components?: any;
};
export declare const ImageToolbar: (({ store, hideImageFlip, hideImageEffects, hideImageCrop, hideImageFit, hideImageRemoveBackground, components, }: Props) => JSX.Element) & {
    displayName: string;
};
export default ImageToolbar;
