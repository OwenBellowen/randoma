export declare class Password {
    static generateRandomPassword(length: number): string;
    static generatePassword(length: number, strength: "weak" | "medium" | "strong"): string;
}
