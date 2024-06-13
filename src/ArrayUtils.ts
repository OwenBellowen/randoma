export class ArrayUtils {
    public static chunk<T>(array: T[], size: number): T[][] {
        return array.reduce((chunks, item, index) => {
            if (index % size === 0) {
                chunks.push([item]);
            } else {
                chunks[chunks.length - 1].push(item);
            }
            return chunks;
        }, [] as T[][]);
    }

    public static countOccurrences<T>(array: T[], value: T): number {
        return array.reduce((count, item) => count + (item === value ? 1 : 0), 0);
    }

    public static flatten<T>(array: T[][]): T[] {
        return array.reduce((flattened, item) => flattened.concat(item), [] as T[]);
    }

    public static removeDuplicates<T>(array: T[]): T[] {
        return array.filter((item, index) => array.indexOf(item) === index);
    }

    public static removeFalsy<T>(array: T[]): T[] {
        return array.filter(Boolean);
    }

    public static shuffle<T>(array: T[]): T[] {
        return array.sort(() => Math.random() - 0.5);
    }
}