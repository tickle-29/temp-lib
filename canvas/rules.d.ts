/// <reference types="react" />
import { StoreType } from '../model/store';
type PageProps = {
    store: StoreType;
    xPadding: number;
    yPadding: number;
    width: number;
    height: number;
};
export declare const TopRules: (({ xPadding, yPadding, store, width, height }: PageProps) => JSX.Element) & {
    displayName: string;
};
export declare function LeftRules(): JSX.Element;
export {};
