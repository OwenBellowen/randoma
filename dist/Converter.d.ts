export declare class Converter {
    static hexToRgb(hexColor: string): `rgb(${number}, ${number}, ${number})`;
    static rgbToHex(rgbColor: string): string;
    static rgbToHsl(rgbColor: string): `hsl(${number}, ${number}%, ${number}%)`;
}
