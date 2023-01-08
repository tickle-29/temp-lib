/// <reference types="react" />
import { ElementType, StoreType } from '../model/store';
type ShapeProps = {
    store: StoreType;
    element: ElementType;
    onClick: Function;
};
export declare function registerShapeComponent(type: string, component: JSX.Element): void;
declare const Element: ((props: ShapeProps) => JSX.Element | null) & {
    displayName: string;
};
export default Element;
