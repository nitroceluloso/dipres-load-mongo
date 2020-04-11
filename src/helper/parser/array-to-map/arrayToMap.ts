
/**
 * Converts an array into a Map, K => type of the key, T => type of the elements of array
 * @param array Array of elements to convert to Map
 * @param key Key to use in the Map
 */
export const arrayToMap = <K, T extends IndexSignature<any>>(array: Array<T>, key: string): Map<K, T> => {
    const pairArray = array.map((el: T) => [el[key], el]);
    return new Map(pairArray as any);
}