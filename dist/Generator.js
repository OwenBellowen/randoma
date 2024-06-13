"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
class Generator {
    static generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static generateRandomString(length) {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let randomString = "";
        for (let i = 0; i < length; i++) {
            randomString += chars[Math.floor(Math.random() * chars.length)];
        }
        return randomString;
    }
    static generateRandomHexColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    static generateRandomRgbColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    static generateRandomRgbaColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = Math.random().toFixed(1);
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    static generateRandomHslColor() {
        const h = Math.floor(Math.random() * 361);
        const s = Math.floor(Math.random() * 101);
        const l = Math.floor(Math.random() * 101);
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    static generateUuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    static generateRandomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    static generateRandomBoolean() {
        return Math.random() < 0.5;
    }
}
exports.Generator = Generator;
