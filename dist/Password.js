"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
class Password {
    static generateRandomPassword(length) {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
        let randomPassword = "";
        for (let i = 0; i < length; i++) {
            randomPassword += chars[Math.floor(Math.random() * chars.length)];
        }
        return randomPassword;
    }
    static generatePassword(length, strength) {
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
exports.Password = Password;
