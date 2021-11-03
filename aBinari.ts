/**
 * Rep un enter estrictament positiu i retorna el seu equivalent amb binari
 * @param a
 * @param binari opcional
 */
export function aBinari(a: number, binari: number[] = [0]): string {
    if (a < 0) {
        throw Error(`${a}  must be >0`);
    }
    const b = a % 2;
    binari.push(b);
    if (a > 0) {
        return aBinari(Math.floor(a / 2), binari)
    } else {
        return swapBinary(binari, binari.length - 2);
    }
}

/**
 * Function to swap array of int and return string
 * @param arr
 * @param x
 * @param swaped
 */
function swapBinary(arr: number[], x: number, swaped: string=''): string {
    if (x > 0) {
        swaped += arr[x];
        return `${swapBinary(arr, x - 1, swaped)}`
    } else {
        return swaped
    }
}