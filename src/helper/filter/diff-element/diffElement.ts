

export const getNewDiffElements = <K, T>(newElements: Map<K, T>, oldElements: Map<K, T>): Array<T> => {
    const diffElements: Array<T> = [];
    newElements.forEach((value: T, key: K) => {
        if (!oldElements.has(key)) diffElements.push(value);
    });
    return diffElements;
}