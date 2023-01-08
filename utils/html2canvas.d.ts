export declare function detectSize(html: any): {
    width: number;
    height: number;
};
export declare function htmlToCanvas({ html, width, height, fontFamily, padding, font, }: {
    html: any;
    width: any;
    height: any;
    fontFamily: any;
    padding: any;
    font: any;
}): Promise<HTMLCanvasElement>;
