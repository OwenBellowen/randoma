export class CollectionUtils {
    public static unique<T>(arr: T[]): T[] {
        return Array.from(new Set(arr));
    }

    public static intersection<T>(arr1: T[], arr2: T[]): T[] {
        const set1 = new Set(arr1);
        return arr2.filter(item => set1.has(item));
    }

    public static difference<T>(arr1: T[], arr2: T[]): T[] {
        const set2 = new Set(arr2);
        return arr1.filter(item => !set2.has(item));
    }

    public static chunk<T>(arr: T[], size: number): T[][] {
        const result: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    }

    public static flatten<T>(arr: T[][]): T[] {
        return arr.reduce((acc, val) => acc.concat(val), []);
    }

    public static shuffle<T>(arr: T[]): T[] {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    public static frequencyMap<T>(arr: T[]): Map<T, number> {
        const map = new Map<T, number>();
        arr.forEach(item => map.set(item, (map.get(item) || 0) + 1));
        return map;
    }

    public static average(arr: number[]): number {
        return arr.reduce((acc, val) => acc + val, 0) / arr.length;
    }

    public static sum(arr: number[]): number {
        return arr.reduce((acc, val) => acc + val, 0);
    }

    public static min(arr: number[]): number {
        return Math.min(...arr);
    }

    public static max(arr: number[]): number {
        return Math.max(...arr);
    }

    public static compact<T>(arr: (T | null | undefined)[]): T[] {
        return arr.filter(Boolean) as T[];
    }

    public static pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
        return arr.map(item => item[key]);
    }

    public static deepFlatten(arr: any[]): any[] {
        return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(CollectionUtils.deepFlatten(val)) : acc.concat(val), []);
    }

    public static deepClone<T extends object>(obj: T, visitedObjects: WeakMap<object, object> = new WeakMap()): T {
        if (obj === null || typeof obj !== 'object') {
            return obj; // Primitive values or null are returned as is
        }

        if (visitedObjects.has(obj)) {
            return visitedObjects.get(obj) as T; // Handle circular references
        }

        const clone = (Array.isArray(obj) ? [] : {}) as T;
        visitedObjects.set(obj, clone);

        if (obj instanceof Date) {
            return new Date(obj.getTime()) as T; // Handle Date objects
        }

        if (obj instanceof Map) {
            const clonedMap = new Map<any, any>();
            obj.forEach((value, key) => clonedMap.set(this.deepClone(key, visitedObjects), this.deepClone(value, visitedObjects)));
            return clonedMap as unknown as T;
        }

        if (obj instanceof Set) {
            const clonedSet = new Set<any>();
            obj.forEach(value => clonedSet.add(this.deepClone(value, visitedObjects)));
            return clonedSet as unknown as T;
        }

        if (obj instanceof RegExp || obj instanceof Function) {
            return obj; // Handle RegExp and Function objects
        }

        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                clone[key] = this.deepClone(obj[key] as object, visitedObjects) as T[Extract<keyof T, string>];
            }
        }

        return clone;
    }
}
