"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    static validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    static validateUrl(url) {
        const urlRegex = /^(http|https):\/\/[^ "]+$/;
        return urlRegex.test(url);
    }
    static validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=[]{}|;:,.<>?]).{8,}$/;
        return passwordRegex.test(password);
    }
    static validateHexColor(hexColor) {
        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        return hexColorRegex.test(hexColor);
    }
    static validateRgbColor(rgbColor) {
        const rgbColorRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
        return rgbColorRegex.test(rgbColor);
    }
    static validateRgbaColor(rgbaColor) {
        const rgbaColorRegex = /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0(\.\d{1})?|1)\)$/;
        return rgbaColorRegex.test(rgbaColor);
    }
    static validateHslColor(hslColor) {
        const hslColorRegex = /^hsl\((\d{1,3}), (\d{1,3})%, (\d{1,3})%\)$/;
        return hslColorRegex.test(hslColor);
    }
    static validateUuid(uuid) {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
        return uuidRegex.test(uuid);
    }
}
exports.Validator = Validator;
