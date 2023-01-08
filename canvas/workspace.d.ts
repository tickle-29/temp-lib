/// <reference types="react" />
import { StoreType } from '../model/store';
export declare const Workspace: (({ store, pageControlsEnabled, backgroundColor, pageBorderColor, activePageBorderColor, bleedColor, components, }: {
    store: StoreType;
    pageControlsEnabled?: boolean | undefined;
    backgroundColor?: string | undefined;
    pageBorderColor?: string | undefined;
    bleedColor?: string | undefined;
    activePageBorderColor?: string | undefined;
    components?: any;
}) => JSX.Element) & {
    displayName: string;
};
export default Workspace;
