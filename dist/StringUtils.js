"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
class StringUtils {
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static reverse(str) {
        return str.split('').reverse().join('');
    }
    static isPalindrome(str) {
        const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleaned === this.reverse(cleaned);
    }
    static truncate(str, maxLength, ellipsis = "...") {
        return str.length > maxLength ? str.slice(0, maxLength - ellipsis.length) + ellipsis : str;
    }
    static countWords(str) {
        return str.trim().split(/\s+/).length;
    }
    static countVowels(str) {
        return (str.match(/[aeiou]/gi) || []).length;
    }
    static removeDuplicates(str) {
        return [...new Set(str.split(''))].join('');
    }
    static randomize(str) {
        const chars = str.split('');
        for (let i = chars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [chars[i], chars[j]] = [chars[j], chars[i]];
        }
        return chars.join('');
    }
    static toCamelCase(str) {
        return str.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
    }
    static toSnakeCase(str) {
        return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    }
    static toKebabCase(str) {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
    static toTitleCase(str) {
        return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }
}
exports.StringUtils = StringUtils;
