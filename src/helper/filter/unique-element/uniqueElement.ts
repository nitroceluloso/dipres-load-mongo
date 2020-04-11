
import { strToUnicode } from "../../parser/string-to-unicode/stringToUnicode";

export const getUniqueElements = <T, R>(list: Array<T>, resource: string, key: string): Map<number, R> => {

    const uniquesElements = new Map();
    list.forEach((el: T) => {
        const rawElement = (el as any)[resource];
        const value = strToUnicode(rawElement[key]);
        if(!uniquesElements.has(value)) uniquesElements.set(value, rawElement);
    });

    return uniquesElements;
}