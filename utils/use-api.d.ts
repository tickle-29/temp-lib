export declare const fetcher: (url: any) => Promise<any>;
type GET_FUNC = (params: {
    query: string;
    page: number;
}) => string;
export declare const useInfiniteAPI: ({ defaultQuery, timeout, getAPI, getSize, }: {
    defaultQuery?: string | undefined;
    timeout?: number | undefined;
    getAPI: GET_FUNC;
    getSize?: ((firstResult: any) => number) | undefined;
}) => {
    setQuery: (query: any) => void;
    isLoading: boolean;
    loadMore: () => void;
    isReachingEnd: any;
    data: any[] | undefined;
    items: any;
    hasMore: boolean;
    reset: import("swr/_internal").KeyedMutator<any[]>;
    error: any;
};
export {};
