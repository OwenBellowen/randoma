export declare class Validator {
    static validateEmail(email: string): boolean;
    static validateUrl(url: string): boolean;
    static validatePassword(password: string): boolean;
    static validateHexColor(hexColor: string): boolean;
    static validateRgbColor(rgbColor: string): boolean;
    static validateRgbaColor(rgbaColor: string): boolean;
    static validateHslColor(hslColor: string): boolean;
    static validateUuid(uuid: string): boolean;
}
