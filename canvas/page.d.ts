/// <reference types="react" />
import { Vector2d } from 'konva/lib/types';
import { StoreType, PageType, ElementType } from '../model/store';
export declare function registerTransformerAttrs(type: any, attrs: any): void;
type DropCallback = (pos: Vector2d, element?: ElementType) => void;
declare let onDomDrop: DropCallback | null;
export declare const registerNextDomDrop: (callback: typeof onDomDrop) => void;
type PageProps = {
    store: StoreType;
    page: PageType;
    xPadding: number;
    yPadding: number;
    width: number;
    height: number;
    pageControlsEnabled?: boolean;
    backColor: string;
    pageBorderColor: string;
    activePageBorderColor: string;
    bleedColor: string;
    components: any;
};
declare const _default: (({ store, page, width, height, pageControlsEnabled, backColor, pageBorderColor, activePageBorderColor, components, bleedColor, }: PageProps) => JSX.Element) & {
    displayName: string;
};
export default _default;
