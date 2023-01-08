/// <reference types="react" />
import { StoreType } from './model/store';
export declare const PolotnoContainer: any;
export declare const SidePanelWrap: any;
export declare const WorkspaceWrap: any;
export declare const PolotnoApp: ({ store, style, }: {
    store: StoreType;
    style?: any;
}) => JSX.Element;
export declare function createPolotnoApp({ container, key, showCredit }: {
    container: any;
    key: any;
    showCredit: any;
}): {
    store: {
        role: string;
        pages: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            children: import("mobx-state-tree").IArrayType<any>;
            width: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            height: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            background: import("mobx-state-tree").IType<string | undefined, string, string>;
            bleed: import("mobx-state-tree").IType<number | undefined, number, number>;
            custom: import("mobx-state-tree").IType<any, any, any>;
            _exporting: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        }, {
            readonly store: any;
        } & {
            readonly computedWidth: any;
            readonly computedHeight: any;
        } & {
            toJSON(): any;
            _forEachElementUp(ids: string[], callback: Function): void;
            _forEachElementDown(ids: string[], callback: Function): false;
        } & {
            clone(attrs?: {}): any;
            setZIndex(zIndex: any): void;
            set(attrs: any): void;
            select(): void;
            addElement(attrs: any): any;
            canMoveElementsUp(ids: string[]): false;
            moveElementsUp(ids: string[]): void;
            canMoveElementsTop(ids: string[]): any;
            moveElementsTop(ids: string[]): void;
            canMoveElementsDown(ids: string[]): false;
            moveElementsDown(ids: string[]): void;
            canMoveElementsBottom(ids: string[]): any;
            moveElementsBottom(ids: string[]): void;
            setElementZIndex(id: any, zIndex: any): void;
            setSize({ width, height }: {
                width: any;
                height: any;
            }, { useMagic }: {
                useMagic: any;
            }): void;
        } & {
            moveElementUp(id: any): void;
            moveElementDown(id: any): void;
            moveElementTop(id: any): void;
            moveElementBottom(id: any): void;
        }, import("mobx-state-tree")._NotCustomized, {}>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            children: import("mobx-state-tree").IArrayType<any>;
            width: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            height: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            background: import("mobx-state-tree").IType<string | undefined, string, string>;
            bleed: import("mobx-state-tree").IType<number | undefined, number, number>;
            custom: import("mobx-state-tree").IType<any, any, any>;
            _exporting: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        }, {
            readonly store: any;
        } & {
            readonly computedWidth: any;
            readonly computedHeight: any;
        } & {
            toJSON(): any;
            _forEachElementUp(ids: string[], callback: Function): void;
            _forEachElementDown(ids: string[], callback: Function): false;
        } & {
            clone(attrs?: {}): any;
            setZIndex(zIndex: any): void;
            set(attrs: any): void;
            select(): void;
            addElement(attrs: any): any;
            canMoveElementsUp(ids: string[]): false;
            moveElementsUp(ids: string[]): void;
            canMoveElementsTop(ids: string[]): any;
            moveElementsTop(ids: string[]): void;
            canMoveElementsDown(ids: string[]): false;
            moveElementsDown(ids: string[]): void;
            canMoveElementsBottom(ids: string[]): any;
            moveElementsBottom(ids: string[]): void;
            setElementZIndex(id: any, zIndex: any): void;
            setSize({ width, height }: {
                width: any;
                height: any;
            }, { useMagic }: {
                useMagic: any;
            }): void;
        } & {
            moveElementUp(id: any): void;
            moveElementDown(id: any): void;
            moveElementTop(id: any): void;
            moveElementBottom(id: any): void;
        }, import("mobx-state-tree")._NotCustomized, {}>>>;
        fonts: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
            fontFamily: import("mobx-state-tree").ISimpleType<string>;
            url: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            styles: import("mobx-state-tree").IType<any, any, any>;
        }, {}, any, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            fontFamily: import("mobx-state-tree").ISimpleType<string>;
            url: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            styles: import("mobx-state-tree").IType<any, any, any>;
        }, {}, any, import("mobx-state-tree")._NotCustomized>>>;
        width: number;
        height: number;
        scale: number;
        scaleToFit: number;
        unit: string;
        dpi: number;
        bleedVisible: boolean;
        rulesVisible: boolean;
        openedSidePanel: string;
        selectedElementsIds: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").ISimpleType<string>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").ISimpleType<string>>>;
        history: {
            history: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IType<any, any, any>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IType<any, any, any>>>;
            undoIdx: number;
            targetPath: string;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            readonly canUndo: boolean;
            readonly canRedo: boolean;
        } & {
            startTransaction(): void;
            endTransaction(skipSave?: boolean | undefined): void;
            ignore(func: any, skipStateReplacement?: boolean): Promise<void>;
            transaction(func: any): Promise<void>;
            requestAddState(state: any): void;
            addUndoState(): void;
            afterCreate(): void;
            clear(): void;
            beforeDestroy(): void;
            undo(): void;
            redo(): void;
            replaceState(): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            history: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IType<any, any, any>>;
            undoIdx: import("mobx-state-tree").IType<number | undefined, number, number>;
            targetPath: import("mobx-state-tree").IType<string | undefined, string, string>;
        }, {
            readonly canUndo: boolean;
            readonly canRedo: boolean;
        } & {
            startTransaction(): void;
            endTransaction(skipSave?: boolean | undefined): void;
            ignore(func: any, skipStateReplacement?: boolean): Promise<void>;
            transaction(func: any): Promise<void>;
            requestAddState(state: any): void;
            addUndoState(): void;
            afterCreate(): void;
            clear(): void;
            beforeDestroy(): void;
            undo(): void;
            redo(): void;
            replaceState(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        _elementsPixelRatio: number;
        _activePageId: string;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        readonly _bleedVisible: boolean;
        readonly selectedElements: any[];
        readonly selectedShapes: any[];
        readonly activePage: ({
            id: string;
            children: import("mobx-state-tree").IMSTArray<any> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<any>>;
            width: number | "auto";
            height: number | "auto";
            background: string;
            bleed: number;
            custom: any;
            _exporting: boolean;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            readonly store: any;
        } & {
            readonly computedWidth: any;
            readonly computedHeight: any;
        } & {
            toJSON(): any;
            _forEachElementUp(ids: string[], callback: Function): void;
            _forEachElementDown(ids: string[], callback: Function): false;
        } & {
            clone(attrs?: {}): any;
            setZIndex(zIndex: any): void;
            set(attrs: any): void;
            select(): void;
            addElement(attrs: any): any;
            canMoveElementsUp(ids: string[]): false;
            moveElementsUp(ids: string[]): void;
            canMoveElementsTop(ids: string[]): any;
            moveElementsTop(ids: string[]): void;
            canMoveElementsDown(ids: string[]): false;
            moveElementsDown(ids: string[]): void;
            canMoveElementsBottom(ids: string[]): any;
            moveElementsBottom(ids: string[]): void;
            setElementZIndex(id: any, zIndex: any): void;
            setSize({ width, height }: {
                width: any;
                height: any;
            }, { useMagic }: {
                useMagic: any;
            }): void;
        } & {
            moveElementUp(id: any): void;
            moveElementDown(id: any): void;
            moveElementTop(id: any): void;
            moveElementBottom(id: any): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            children: import("mobx-state-tree").IArrayType<any>;
            width: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            height: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            background: import("mobx-state-tree").IType<string | undefined, string, string>;
            bleed: import("mobx-state-tree").IType<number | undefined, number, number>;
            custom: import("mobx-state-tree").IType<any, any, any>;
            _exporting: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        }, {
            readonly store: any;
        } & {
            readonly computedWidth: any;
            readonly computedHeight: any;
        } & {
            toJSON(): any;
            _forEachElementUp(ids: string[], callback: Function): void;
            _forEachElementDown(ids: string[], callback: Function): false;
        } & {
            clone(attrs?: {}): any;
            setZIndex(zIndex: any): void;
            set(attrs: any): void;
            select(): void;
            addElement(attrs: any): any;
            canMoveElementsUp(ids: string[]): false;
            moveElementsUp(ids: string[]): void;
            canMoveElementsTop(ids: string[]): any;
            moveElementsTop(ids: string[]): void;
            canMoveElementsDown(ids: string[]): false;
            moveElementsDown(ids: string[]): void;
            canMoveElementsBottom(ids: string[]): any;
            moveElementsBottom(ids: string[]): void;
            setElementZIndex(id: any, zIndex: any): void;
            setSize({ width, height }: {
                width: any;
                height: any;
            }, { useMagic }: {
                useMagic: any;
            }): void;
        } & {
            moveElementUp(id: any): void;
            moveElementDown(id: any): void;
            moveElementTop(id: any): void;
            moveElementBottom(id: any): void;
        }, import("mobx-state-tree")._NotCustomized, {}>>) | null;
    } & {
        afterCreate(): void;
        setUnit({ unit, dpi }: {
            unit: any;
            dpi: any;
        }): void;
        setRole(role: string): void;
        getElementById(id: string): any;
        addPage(attrs?: any): {
            id: string;
            children: import("mobx-state-tree").IMSTArray<any> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<any>>;
            width: number | "auto";
            height: number | "auto";
            background: string;
            bleed: number;
            custom: any;
            _exporting: boolean;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            readonly store: any;
        } & {
            readonly computedWidth: any;
            readonly computedHeight: any;
        } & {
            toJSON(): any;
            _forEachElementUp(ids: string[], callback: Function): void;
            _forEachElementDown(ids: string[], callback: Function): false;
        } & {
            clone(attrs?: {}): any;
            setZIndex(zIndex: any): void;
            set(attrs: any): void;
            select(): void;
            addElement(attrs: any): any;
            canMoveElementsUp(ids: string[]): false;
            moveElementsUp(ids: string[]): void;
            canMoveElementsTop(ids: string[]): any;
            moveElementsTop(ids: string[]): void;
            canMoveElementsDown(ids: string[]): false;
            moveElementsDown(ids: string[]): void;
            canMoveElementsBottom(ids: string[]): any;
            moveElementsBottom(ids: string[]): void;
            setElementZIndex(id: any, zIndex: any): void;
            setSize({ width, height }: {
                width: any;
                height: any;
            }, { useMagic }: {
                useMagic: any;
            }): void;
        } & {
            moveElementUp(id: any): void;
            moveElementDown(id: any): void;
            moveElementTop(id: any): void;
            moveElementBottom(id: any): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            children: import("mobx-state-tree").IArrayType<any>;
            width: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            height: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            background: import("mobx-state-tree").IType<string | undefined, string, string>;
            bleed: import("mobx-state-tree").IType<number | undefined, number, number>;
            custom: import("mobx-state-tree").IType<any, any, any>;
            _exporting: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        }, {
            readonly store: any;
        } & {
            readonly computedWidth: any;
            readonly computedHeight: any;
        } & {
            toJSON(): any;
            _forEachElementUp(ids: string[], callback: Function): void;
            _forEachElementDown(ids: string[], callback: Function): false;
        } & {
            clone(attrs?: {}): any;
            setZIndex(zIndex: any): void;
            set(attrs: any): void;
            select(): void;
            addElement(attrs: any): any;
            canMoveElementsUp(ids: string[]): false;
            moveElementsUp(ids: string[]): void;
            canMoveElementsTop(ids: string[]): any;
            moveElementsTop(ids: string[]): void;
            canMoveElementsDown(ids: string[]): false;
            moveElementsDown(ids: string[]): void;
            canMoveElementsBottom(ids: string[]): any;
            moveElementsBottom(ids: string[]): void;
            setElementZIndex(id: any, zIndex: any): void;
            setSize({ width, height }: {
                width: any;
                height: any;
            }, { useMagic }: {
                useMagic: any;
            }): void;
        } & {
            moveElementUp(id: any): void;
            moveElementDown(id: any): void;
            moveElementTop(id: any): void;
            moveElementBottom(id: any): void;
        }, import("mobx-state-tree")._NotCustomized, {}>>;
        selectPage(id: any): void;
        selectElements(ids: string[]): void;
        toggleBleed(bleedVisible?: boolean | undefined): void;
        toggleRulers(rulesVisible?: boolean | undefined): void;
        openSidePanel(panelName: string): void;
        setScale(scale: number): void;
        _setScaleToFit(scale: number): void;
        setElementsPixelRatio(ratio: number): void;
        setSize(width: number, height: number, useMagic?: boolean | undefined): void;
        setPageZIndex(id: any, zIndex: any): void;
        deletePages(ids: string[]): void;
        groupElements(ids: string[]): any;
        ungroupElements(ids: string[]): void;
        deleteElements(ids: string[]): void;
        on(event: any, callback: any): import("mobx-state-tree").IDisposer | undefined;
        _toCanvas({ pixelRatio, ignoreBackground, pageId, mimeType, includeBleed, }?: import("./model/store").ExportOptions): Promise<HTMLCanvasElement>;
        toDataURL({ pixelRatio, ignoreBackground, pageId, mimeType, includeBleed, quality, }?: import("./model/store").ExportOptions): Promise<any>;
        toBlob({ pixelRatio, ignoreBackground, pageId, mimeType, includeBleed, quality, }?: import("./model/store").ExportOptions): Promise<unknown>;
        saveAsImage({ fileName, ...exportProps }?: import("./model/store").ExportOptions & {
            fileName?: string | undefined;
        }): Promise<void>;
        _toPDF(exportProps: import("./model/store").PDFExportOptions): Promise<any>;
        toPDFDataURL(exportProps: import("./model/store").ExportOptions): Promise<any>;
        saveAsPDF({ fileName, ...exportProps }?: import("./model/store").ExportOptions & {
            fileName?: string | undefined;
            dpi?: number | undefined;
        }): Promise<void>;
        waitLoading(): Promise<void>;
        toJSON(): {
            width: number;
            height: number;
            fonts: import("mobx-state-tree").ModelSnapshotType<{
                fontFamily: import("mobx-state-tree").ISimpleType<string>;
                url: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                styles: import("mobx-state-tree").IType<any, any, any>;
            }>[];
            pages: {}[];
            unit: string;
            dpi: number;
        };
        loadJSON(json: any, keepHistory?: boolean): void;
        addFont(font: {
            fontFamily: string;
            url: string;
        }): void;
        removeFont(fontFamily: string): void;
        loadFont(fontFamily: any): Promise<void>;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        role: import("mobx-state-tree").IType<string | undefined, string, string>;
        pages: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            children: import("mobx-state-tree").IArrayType<any>;
            width: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            height: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            background: import("mobx-state-tree").IType<string | undefined, string, string>;
            bleed: import("mobx-state-tree").IType<number | undefined, number, number>;
            custom: import("mobx-state-tree").IType<any, any, any>;
            _exporting: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        }, {
            readonly store: any;
        } & {
            readonly computedWidth: any;
            readonly computedHeight: any;
        } & {
            toJSON(): any;
            _forEachElementUp(ids: string[], callback: Function): void;
            _forEachElementDown(ids: string[], callback: Function): false;
        } & {
            clone(attrs?: {}): any;
            setZIndex(zIndex: any): void;
            set(attrs: any): void;
            select(): void;
            addElement(attrs: any): any;
            canMoveElementsUp(ids: string[]): false;
            moveElementsUp(ids: string[]): void;
            canMoveElementsTop(ids: string[]): any;
            moveElementsTop(ids: string[]): void;
            canMoveElementsDown(ids: string[]): false;
            moveElementsDown(ids: string[]): void;
            canMoveElementsBottom(ids: string[]): any;
            moveElementsBottom(ids: string[]): void;
            setElementZIndex(id: any, zIndex: any): void;
            setSize({ width, height }: {
                width: any;
                height: any;
            }, { useMagic }: {
                useMagic: any;
            }): void;
        } & {
            moveElementUp(id: any): void;
            moveElementDown(id: any): void;
            moveElementTop(id: any): void;
            moveElementBottom(id: any): void;
        }, import("mobx-state-tree")._NotCustomized, {}>>;
        fonts: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            fontFamily: import("mobx-state-tree").ISimpleType<string>;
            url: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            styles: import("mobx-state-tree").IType<any, any, any>;
        }, {}, any, import("mobx-state-tree")._NotCustomized>>;
        width: import("mobx-state-tree").IType<number | undefined, number, number>;
        height: import("mobx-state-tree").IType<number | undefined, number, number>;
        scale: import("mobx-state-tree").IType<number | undefined, number, number>;
        scaleToFit: import("mobx-state-tree").IType<number | undefined, number, number>;
        unit: import("mobx-state-tree").IType<string | undefined, string, string>;
        dpi: import("mobx-state-tree").IType<number | undefined, number, number>;
        bleedVisible: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        rulesVisible: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        openedSidePanel: import("mobx-state-tree").IType<string | undefined, string, string>;
        selectedElementsIds: import("mobx-state-tree").IArrayType<import("mobx-state-tree").ISimpleType<string>>;
        history: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            history: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IType<any, any, any>>;
            undoIdx: import("mobx-state-tree").IType<number | undefined, number, number>;
            targetPath: import("mobx-state-tree").IType<string | undefined, string, string>;
        }, {
            readonly canUndo: boolean;
            readonly canRedo: boolean;
        } & {
            startTransaction(): void;
            endTransaction(skipSave?: boolean | undefined): void;
            ignore(func: any, skipStateReplacement?: boolean): Promise<void>;
            transaction(func: any): Promise<void>;
            requestAddState(state: any): void;
            addUndoState(): void;
            afterCreate(): void;
            clear(): void;
            beforeDestroy(): void;
            undo(): void;
            redo(): void;
            replaceState(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        _elementsPixelRatio: import("mobx-state-tree").IType<number | undefined, number, number>;
        _activePageId: import("mobx-state-tree").IType<string | undefined, string, string>;
    }, {
        readonly _bleedVisible: boolean;
        readonly selectedElements: any[];
        readonly selectedShapes: any[];
        readonly activePage: ({
            id: string;
            children: import("mobx-state-tree").IMSTArray<any> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<any>>;
            width: number | "auto";
            height: number | "auto";
            background: string;
            bleed: number;
            custom: any;
            _exporting: boolean;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            readonly store: any;
        } & {
            readonly computedWidth: any;
            readonly computedHeight: any;
        } & {
            toJSON(): any;
            _forEachElementUp(ids: string[], callback: Function): void;
            _forEachElementDown(ids: string[], callback: Function): false;
        } & {
            clone(attrs?: {}): any;
            setZIndex(zIndex: any): void;
            set(attrs: any): void;
            select(): void;
            addElement(attrs: any): any;
            canMoveElementsUp(ids: string[]): false;
            moveElementsUp(ids: string[]): void;
            canMoveElementsTop(ids: string[]): any;
            moveElementsTop(ids: string[]): void;
            canMoveElementsDown(ids: string[]): false;
            moveElementsDown(ids: string[]): void;
            canMoveElementsBottom(ids: string[]): any;
            moveElementsBottom(ids: string[]): void;
            setElementZIndex(id: any, zIndex: any): void;
            setSize({ width, height }: {
                width: any;
                height: any;
            }, { useMagic }: {
                useMagic: any;
            }): void;
        } & {
            moveElementUp(id: any): void;
            moveElementDown(id: any): void;
            moveElementTop(id: any): void;
            moveElementBottom(id: any): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            children: import("mobx-state-tree").IArrayType<any>;
            width: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            height: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            background: import("mobx-state-tree").IType<string | undefined, string, string>;
            bleed: import("mobx-state-tree").IType<number | undefined, number, number>;
            custom: import("mobx-state-tree").IType<any, any, any>;
            _exporting: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        }, {
            readonly store: any;
        } & {
            readonly computedWidth: any;
            readonly computedHeight: any;
        } & {
            toJSON(): any;
            _forEachElementUp(ids: string[], callback: Function): void;
            _forEachElementDown(ids: string[], callback: Function): false;
        } & {
            clone(attrs?: {}): any;
            setZIndex(zIndex: any): void;
            set(attrs: any): void;
            select(): void;
            addElement(attrs: any): any;
            canMoveElementsUp(ids: string[]): false;
            moveElementsUp(ids: string[]): void;
            canMoveElementsTop(ids: string[]): any;
            moveElementsTop(ids: string[]): void;
            canMoveElementsDown(ids: string[]): false;
            moveElementsDown(ids: string[]): void;
            canMoveElementsBottom(ids: string[]): any;
            moveElementsBottom(ids: string[]): void;
            setElementZIndex(id: any, zIndex: any): void;
            setSize({ width, height }: {
                width: any;
                height: any;
            }, { useMagic }: {
                useMagic: any;
            }): void;
        } & {
            moveElementUp(id: any): void;
            moveElementDown(id: any): void;
            moveElementTop(id: any): void;
            moveElementBottom(id: any): void;
        }, import("mobx-state-tree")._NotCustomized, {}>>) | null;
    } & {
        afterCreate(): void;
        setUnit({ unit, dpi }: {
            unit: any;
            dpi: any;
        }): void;
        setRole(role: string): void;
        getElementById(id: string): any;
        addPage(attrs?: any): {
            id: string;
            children: import("mobx-state-tree").IMSTArray<any> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<any>>;
            width: number | "auto";
            height: number | "auto";
            background: string;
            bleed: number;
            custom: any;
            _exporting: boolean;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            readonly store: any;
        } & {
            readonly computedWidth: any;
            readonly computedHeight: any;
        } & {
            toJSON(): any;
            _forEachElementUp(ids: string[], callback: Function): void;
            _forEachElementDown(ids: string[], callback: Function): false;
        } & {
            clone(attrs?: {}): any;
            setZIndex(zIndex: any): void;
            set(attrs: any): void;
            select(): void;
            addElement(attrs: any): any;
            canMoveElementsUp(ids: string[]): false;
            moveElementsUp(ids: string[]): void;
            canMoveElementsTop(ids: string[]): any;
            moveElementsTop(ids: string[]): void;
            canMoveElementsDown(ids: string[]): false;
            moveElementsDown(ids: string[]): void;
            canMoveElementsBottom(ids: string[]): any;
            moveElementsBottom(ids: string[]): void;
            setElementZIndex(id: any, zIndex: any): void;
            setSize({ width, height }: {
                width: any;
                height: any;
            }, { useMagic }: {
                useMagic: any;
            }): void;
        } & {
            moveElementUp(id: any): void;
            moveElementDown(id: any): void;
            moveElementTop(id: any): void;
            moveElementBottom(id: any): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            children: import("mobx-state-tree").IArrayType<any>;
            width: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            height: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<number | "auto", number | "auto", number | "auto">, [undefined]>;
            background: import("mobx-state-tree").IType<string | undefined, string, string>;
            bleed: import("mobx-state-tree").IType<number | undefined, number, number>;
            custom: import("mobx-state-tree").IType<any, any, any>;
            _exporting: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        }, {
            readonly store: any;
        } & {
            readonly computedWidth: any;
            readonly computedHeight: any;
        } & {
            toJSON(): any;
            _forEachElementUp(ids: string[], callback: Function): void;
            _forEachElementDown(ids: string[], callback: Function): false;
        } & {
            clone(attrs?: {}): any;
            setZIndex(zIndex: any): void;
            set(attrs: any): void;
            select(): void;
            addElement(attrs: any): any;
            canMoveElementsUp(ids: string[]): false;
            moveElementsUp(ids: string[]): void;
            canMoveElementsTop(ids: string[]): any;
            moveElementsTop(ids: string[]): void;
            canMoveElementsDown(ids: string[]): false;
            moveElementsDown(ids: string[]): void;
            canMoveElementsBottom(ids: string[]): any;
            moveElementsBottom(ids: string[]): void;
            setElementZIndex(id: any, zIndex: any): void;
            setSize({ width, height }: {
                width: any;
                height: any;
            }, { useMagic }: {
                useMagic: any;
            }): void;
        } & {
            moveElementUp(id: any): void;
            moveElementDown(id: any): void;
            moveElementTop(id: any): void;
            moveElementBottom(id: any): void;
        }, import("mobx-state-tree")._NotCustomized, {}>>;
        selectPage(id: any): void;
        selectElements(ids: string[]): void;
        toggleBleed(bleedVisible?: boolean | undefined): void;
        toggleRulers(rulesVisible?: boolean | undefined): void;
        openSidePanel(panelName: string): void;
        setScale(scale: number): void;
        _setScaleToFit(scale: number): void;
        setElementsPixelRatio(ratio: number): void;
        setSize(width: number, height: number, useMagic?: boolean | undefined): void;
        setPageZIndex(id: any, zIndex: any): void;
        deletePages(ids: string[]): void;
        groupElements(ids: string[]): any;
        ungroupElements(ids: string[]): void;
        deleteElements(ids: string[]): void;
        on(event: any, callback: any): import("mobx-state-tree").IDisposer | undefined;
        _toCanvas({ pixelRatio, ignoreBackground, pageId, mimeType, includeBleed, }?: import("./model/store").ExportOptions): Promise<HTMLCanvasElement>;
        toDataURL({ pixelRatio, ignoreBackground, pageId, mimeType, includeBleed, quality, }?: import("./model/store").ExportOptions): Promise<any>;
        toBlob({ pixelRatio, ignoreBackground, pageId, mimeType, includeBleed, quality, }?: import("./model/store").ExportOptions): Promise<unknown>;
        saveAsImage({ fileName, ...exportProps }?: import("./model/store").ExportOptions & {
            fileName?: string | undefined;
        }): Promise<void>;
        _toPDF(exportProps: import("./model/store").PDFExportOptions): Promise<any>;
        toPDFDataURL(exportProps: import("./model/store").ExportOptions): Promise<any>;
        saveAsPDF({ fileName, ...exportProps }?: import("./model/store").ExportOptions & {
            fileName?: string | undefined;
            dpi?: number | undefined;
        }): Promise<void>;
        waitLoading(): Promise<void>;
        toJSON(): {
            width: number;
            height: number;
            fonts: import("mobx-state-tree").ModelSnapshotType<{
                fontFamily: import("mobx-state-tree").ISimpleType<string>;
                url: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                styles: import("mobx-state-tree").IType<any, any, any>;
            }>[];
            pages: {}[];
            unit: string;
            dpi: number;
        };
        loadJSON(json: any, keepHistory?: boolean): void;
        addFont(font: {
            fontFamily: string;
            url: string;
        }): void;
        removeFont(fontFamily: string): void;
        loadFont(fontFamily: any): Promise<void>;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    root: any;
};
export declare const createDemoApp: typeof createPolotnoApp;
