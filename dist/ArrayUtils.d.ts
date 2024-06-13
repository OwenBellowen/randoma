export declare class ArrayUtils {
    static chunk<T>(array: T[], size: number): T[][];
    static countOccurrences<T>(array: T[], value: T): number;
    static flatten<T>(array: T[][]): T[];
    static removeDuplicates<T>(array: T[]): T[];
    static removeFalsy<T>(array: T[]): T[];
    static shuffle<T>(array: T[]): T[];
}
