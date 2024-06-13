export declare class CollectionUtils {
    static unique<T>(arr: T[]): T[];
    static intersection<T>(arr1: T[], arr2: T[]): T[];
    static difference<T>(arr1: T[], arr2: T[]): T[];
    static chunk<T>(arr: T[], size: number): T[][];
    static flatten<T>(arr: T[][]): T[];
    static shuffle<T>(arr: T[]): T[];
    static frequencyMap<T>(arr: T[]): Map<T, number>;
    static average(arr: number[]): number;
    static sum(arr: number[]): number;
    static min(arr: number[]): number;
    static max(arr: number[]): number;
    static compact<T>(arr: (T | null | undefined)[]): T[];
    static pluck<T, K extends keyof T>(arr: T[], key: K): T[K][];
    static deepFlatten(arr: any[]): any[];
    static deepClone<T extends object>(obj: T, visitedObjects?: WeakMap<object, object>): T;
}
