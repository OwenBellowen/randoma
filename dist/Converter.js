"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Converter = void 0;
class Converter {
    static hexToRgb(hexColor) {
        const hex = hexColor.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }
    static rgbToHex(rgbColor) {
        const rgb = rgbColor.match(/^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/);
        if (!rgb)
            return "#000000";
        const r = parseInt(rgb[1]);
        const g = parseInt(rgb[2]);
        const b = parseInt(rgb[3]);
        return `#${((r << 16) + (g << 8) + b).toString(16).padStart(6, "0")}`;
    }
    static rgbToHsl(rgbColor) {
        const rgb = rgbColor.match(/^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/);
        if (!rgb)
            return "hsl(0, 0%, 0%)";
        const r = parseInt(rgb[1]) / 255;
        const g = parseInt(rgb[2]) / 255;
        const b = parseInt(rgb[3]) / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = (max + min) / 2;
        let s = (max + min) / 2;
        let l = (max + min) / 2;
        if (max === min) {
            h = 0;
            s = 0;
        }
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        h = Math.round(h * 360);
        s = Math.round(s * 100);
        l = Math.round(l * 100);
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
}
exports.Converter = Converter;
