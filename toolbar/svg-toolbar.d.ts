/// <reference types="react" />
import { StoreType } from '../model/store';
type Props = {
    store: StoreType;
    hideSvgEffects?: boolean;
    components?: any;
};
export declare const SvgToolbar: (({ store, hideSvgEffects, components }: Props) => JSX.Element) & {
    displayName: string;
};
export default SvgToolbar;
