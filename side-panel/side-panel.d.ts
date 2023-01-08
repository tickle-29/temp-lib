/// <reference types="react" />
import { StoreType } from '../model/store';
export { SectionTab } from './tab-button';
export { ImagesGrid } from './images-grid';
interface SectionTabProps {
    onClick: any;
    active: boolean;
}
export declare const TemplatesSection: {
    name: string;
    Tab: ((props: SectionTabProps) => JSX.Element) & {
        displayName: string;
    };
    Panel: ({ store }: {
        store: any;
    }) => JSX.Element;
};
export declare const TextSection: {
    name: string;
    Tab: ((props: SectionTabProps) => JSX.Element) & {
        displayName: string;
    };
    Panel: ({ store }: {
        store: any;
    }) => JSX.Element;
};
export declare const PhotosSection: {
    name: string;
    Tab: ((props: SectionTabProps) => JSX.Element) & {
        displayName: string;
    };
    Panel: ({ store }: {
        store: any;
    }) => JSX.Element;
};
export declare const ElementsSection: {
    name: string;
    Tab: ((props: SectionTabProps) => JSX.Element) & {
        displayName: string;
    };
    Panel: ({ store }: {
        store: any;
    }) => JSX.Element;
};
export declare const UploadSection: {
    name: string;
    Tab: ((props: SectionTabProps) => JSX.Element) & {
        displayName: string;
    };
    Panel: ({ store }: {
        store: any;
    }) => JSX.Element;
};
export declare const BackgroundSection: {
    name: string;
    Tab: ((props: SectionTabProps) => JSX.Element) & {
        displayName: string;
    };
    Panel: ({ store }: {
        store: any;
    }) => JSX.Element;
};
export declare const PagesSection: {
    name: string;
    Tab: ((props: SectionTabProps) => JSX.Element) & {
        displayName: string;
    };
    Panel: ({ store }: {
        store: any;
    }) => JSX.Element;
    visibleInList: boolean;
};
export declare const LayersSection: {
    name: string;
    Tab: ((props: SectionTabProps) => JSX.Element) & {
        displayName: string;
    };
    Panel: ({ store }: {
        store: any;
    }) => JSX.Element;
};
export declare const SizeSection: {
    name: string;
    Tab: ((props: SectionTabProps) => JSX.Element) & {
        displayName: string;
    };
    Panel: ({ store }: {
        store: any;
    }) => JSX.Element;
};
export declare const DEFAULT_SECTIONS: {
    name: string;
    Tab: ((props: SectionTabProps) => JSX.Element) & {
        displayName: string;
    };
    Panel: ({ store }: {
        store: any;
    }) => JSX.Element;
}[];
interface SidePanelProps {
    store: StoreType;
    sections?: typeof DEFAULT_SECTIONS;
    defaultSection?: string;
}
export declare const SidePanel: (({ store, sections, defaultSection }: SidePanelProps) => JSX.Element) & {
    displayName: string;
};
export default SidePanel;
