export declare function incrementLoader(id: any): () => void;
export declare function decrementLoader(): void;
export declare function whenLoaded(): Promise<unknown>;
export declare function onLoadError(func: Function): void;
export declare function triggerLoadError(error: string): void;
