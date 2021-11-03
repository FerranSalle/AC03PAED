import {potencia} from "./potencia.ts";
import {aBinari} from "./aBinari.ts";
import {comptaImparells} from "./comptaImparells.ts";

try {
    const arr: number[] = [1, 5, 252, 24, 7, 82, 3];
    console.log(`Potencia: ${potencia(2, 10)}`)
    console.log(`Decimal a Binari: ${aBinari(11)}`)
    console.log(`Compta imparells: ${comptaImparells(arr, arr.length - 1)}`)

} catch (e) {
    console.log(e)
}
