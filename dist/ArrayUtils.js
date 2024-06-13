"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = void 0;
class ArrayUtils {
    static chunk(array, size) {
        return array.reduce((chunks, item, index) => {
            if (index % size === 0) {
                chunks.push([item]);
            }
            else {
                chunks[chunks.length - 1].push(item);
            }
            return chunks;
        }, []);
    }
    static countOccurrences(array, value) {
        return array.reduce((count, item) => count + (item === value ? 1 : 0), 0);
    }
    static flatten(array) {
        return array.reduce((flattened, item) => flattened.concat(item), []);
    }
    static removeDuplicates(array) {
        return array.filter((item, index) => array.indexOf(item) === index);
    }
    static removeFalsy(array) {
        return array.filter(Boolean);
    }
    static shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
}
exports.ArrayUtils = ArrayUtils;
