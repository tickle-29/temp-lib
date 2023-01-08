export declare const shouldShowCredit: {
    value: boolean;
};
export declare const getKey: () => string;
export declare function isKeyPaid(key: string): Promise<any>;
export declare function validateKey(key: string, forceCredit: boolean): Promise<void>;
