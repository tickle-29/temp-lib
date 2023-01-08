/// <reference types="react" />
import { StoreType, PageType } from '../model/store';
export declare const PageControls: (({ store, page, xPadding, yPadding, }: {
    store: StoreType;
    page: PageType;
    xPadding: number;
    yPadding: number;
}) => JSX.Element) & {
    displayName: string;
};
