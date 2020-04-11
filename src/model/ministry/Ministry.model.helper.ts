
const ministryKeysToDelete = new Set(["ministerio", "de", "del", "la", "las"]);

export const clearWordsFromName = (val: string, index: number) => {
    if(index > 2) return true;

    return !ministryKeysToDelete.has(val.toLocaleLowerCase());
}