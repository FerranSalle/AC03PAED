export function comptaImparells(arr: number[], end: number): number {
    if (arr === undefined) throw Error("L'array no pot estar buit")
    if (end > -1) {
        if (arr[end] % 2 !== 0) {
            return 1 + comptaImparells(arr, end - 1)
        }
        if (arr[end] % 2 === 0) {
            return comptaImparells(arr, end - 1);
        }
    } else {
        return 0;
    }
    return comptaImparells(arr, end - 1);
}

