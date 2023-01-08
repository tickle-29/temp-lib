/// <reference types="react" />
import { StoreType } from '../model/store';
type Props = {
    size?: number;
    onChange: (color: string) => void;
    value: string;
    store: StoreType;
    gradientEnabled?: boolean;
    style?: any;
    children?: any;
};
export declare const ColorPicker: ({ value, onChange, size, store, gradientEnabled, children, style, }: Props) => JSX.Element;
export default ColorPicker;
