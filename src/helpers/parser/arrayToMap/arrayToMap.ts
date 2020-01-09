
/**
 * Converts an array into a Map, K => type of the key, T => type of the elements of array
 * @param array Array of elements to convert to Map
 * @param key Key to use in the Map
 */
export const arrayToMap = <K, T>(array: Array<T>, key: string): Map<K, T> => {
    const dictionary = new Map<K, T>();
    array.forEach((el: T) => {
        const val = (el as any)[key];
        if(!dictionary.has((val))) dictionary.set(val, el);
    });
    return dictionary;
}