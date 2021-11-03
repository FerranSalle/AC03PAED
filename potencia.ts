/**
 * Rep dos enters positius a i b, i retorna a elevat b
 * @param a
 * @param b
 * @param total
 */
export function potencia(a: number, b: number, total?: number): number {
    if (a < 0 || b < 0) {
        throw Error(`${a} and ${b} must be >0`);
    }
    if (b > 0) {
        total = total ? total * a : a;
        return potencia(a, b - 1, total)
    } else {
        return total ? total : a;
    }
}
