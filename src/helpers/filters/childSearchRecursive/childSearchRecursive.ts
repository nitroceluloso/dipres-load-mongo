

export const recursiveChildSearch = (
    column: CheerioElement,
    key: string,
    totalChildrenDep: number,
    childrenDeep: number
): string => {
    const columnChild = column.children[0];
    if(totalChildrenDep !== childrenDeep && columnChild) {
        return recursiveChildSearch(columnChild, key, totalChildrenDep, childrenDeep +1);
    } else {
        return (columnChild as any)[key];
    };
}