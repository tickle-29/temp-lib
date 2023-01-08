/// <reference types="react" />
import { StoreType } from '../model/store';
type Props = {
    store: StoreType;
};
export declare const ZoomGroup: (({ store }: Props) => JSX.Element) & {
    displayName: string;
};
export declare const ZoomButtons: (({ store }: Props) => JSX.Element) & {
    displayName: string;
};
export default ZoomButtons;
