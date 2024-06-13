"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionUtils = void 0;
class CollectionUtils {
    static unique(arr) {
        return Array.from(new Set(arr));
    }
    static intersection(arr1, arr2) {
        const set1 = new Set(arr1);
        return arr2.filter(item => set1.has(item));
    }
    static difference(arr1, arr2) {
        const set2 = new Set(arr2);
        return arr1.filter(item => !set2.has(item));
    }
    static chunk(arr, size) {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    }
    static flatten(arr) {
        return arr.reduce((acc, val) => acc.concat(val), []);
    }
    static shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    static frequencyMap(arr) {
        const map = new Map();
        arr.forEach(item => map.set(item, (map.get(item) || 0) + 1));
        return map;
    }
    static average(arr) {
        return arr.reduce((acc, val) => acc + val, 0) / arr.length;
    }
    static sum(arr) {
        return arr.reduce((acc, val) => acc + val, 0);
    }
    static min(arr) {
        return Math.min(...arr);
    }
    static max(arr) {
        return Math.max(...arr);
    }
    static compact(arr) {
        return arr.filter(Boolean);
    }
    static pluck(arr, key) {
        return arr.map(item => item[key]);
    }
    static deepFlatten(arr) {
        return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(CollectionUtils.deepFlatten(val)) : acc.concat(val), []);
    }
    static deepClone(obj, visitedObjects = new WeakMap()) {
        if (obj === null || typeof obj !== 'object') {
            return obj; // Primitive values or null are returned as is
        }
        if (visitedObjects.has(obj)) {
            return visitedObjects.get(obj); // Handle circular references
        }
        const clone = (Array.isArray(obj) ? [] : {});
        visitedObjects.set(obj, clone);
        if (obj instanceof Date) {
            return new Date(obj.getTime()); // Handle Date objects
        }
        if (obj instanceof Map) {
            const clonedMap = new Map();
            obj.forEach((value, key) => clonedMap.set(this.deepClone(key, visitedObjects), this.deepClone(value, visitedObjects)));
            return clonedMap;
        }
        if (obj instanceof Set) {
            const clonedSet = new Set();
            obj.forEach(value => clonedSet.add(this.deepClone(value, visitedObjects)));
            return clonedSet;
        }
        if (obj instanceof RegExp || obj instanceof Function) {
            return obj; // Handle RegExp and Function objects
        }
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                clone[key] = this.deepClone(obj[key], visitedObjects);
            }
        }
        return clone;
    }
}
exports.CollectionUtils = CollectionUtils;
