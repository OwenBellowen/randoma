export declare class Generator {
    static generateRandomNumber(min: number, max: number): number;
    static generateRandomString(length: number): string;
    static generateRandomHexColor(): string;
    static generateRandomRgbColor(): `rgb(${number}, ${number}, ${number})`;
    static generateRandomRgbaColor(): `rgba(${number}, ${number}, ${number}, ${string})`;
    static generateRandomHslColor(): `hsl(${number}, ${number}%, ${number}%)`;
    static generateUuid(): string;
    static generateRandomDate(start: Date, end: Date): Date;
    static generateRandomBoolean(): boolean;
}
