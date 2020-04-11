
export const strToUnicode = (text: string = ""): number => {
    const stringArray = text.split("");
    const charValueArray = stringArray.map((char: string) => char.charCodeAt(0));

    return (charValueArray.length)? charValueArray.reduce((prev, act) => prev + act) : 0;
}