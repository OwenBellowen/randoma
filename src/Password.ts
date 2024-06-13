export class Password {
    public static generateRandomPassword(length: number): string {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
        let randomPassword = "";
        for (let i = 0; i < length; i++) {
            randomPassword += chars[Math.floor(Math.random() * chars.length)];
        }
        return randomPassword;
    }

    public static generatePassword(length: number, strength: "weak" | "medium" | "strong"): string {
        const chars = {
            weak: "abcdefghijklmnopqrstuvwxyz",
            medium: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            strong: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
        };
        let randomPassword = "";
        for (let i = 0; i < length; i++) {
            randomPassword += chars[strength][Math.floor(Math.random() * chars[strength].length)];
        }
        return randomPassword;
    }
}