import { ElementType } from '../model/store';
export declare function getClientRect(element: ElementType): {
    x: number;
    y: number;
    width: number;
    height: number;
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
};
export declare function getTotalClientRect(elements: ElementType[]): {
    x: number;
    y: number;
    width: number;
    height: number;
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
};
