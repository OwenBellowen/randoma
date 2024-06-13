export class StringUtils {
    public static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    public static reverse(str: string): string {
        return str.split('').reverse().join('');
    }

    public static isPalindrome(str: string): boolean {
        const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleaned === this.reverse(cleaned);
    }

    public static truncate(str: string, maxLength: number, ellipsis: string = "..."): string {
        return str.length > maxLength ? str.slice(0, maxLength - ellipsis.length) + ellipsis : str;
    }

    public static countWords(str: string): number {
        return str.trim().split(/\s+/).length;
    }

    public static countVowels(str: string): number {
        return (str.match(/[aeiou]/gi) || []).length;
    }

    public static removeDuplicates(str: string): string {
        return [...new Set(str.split(''))].join('');
    }

    public static randomize(str: string): string {
        const chars = str.split('');
        for (let i = chars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [chars[i], chars[j]] = [chars[j], chars[i]];
        }
        return chars.join('');
    }

    public static toCamelCase(str: string): string {
        return str.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
    }

    public static toSnakeCase(str: string): string {
        return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    }

    public static toKebabCase(str: string): string {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    public static toTitleCase(str: string): string {
        return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }
}
