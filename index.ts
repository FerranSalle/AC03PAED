import {potencia} from "./potencia.ts";
import {aBinari} from "./aBinari.ts";
import {comptaImparells} from "./comptaImparells.ts";
const arr :[number] = [0];

function ompleArray(numbers:any,x?:number):void{
    x = x? x: arr.length-1;
    if (x >=1){
        arr.push(numbers[x])
        ompleArray(numbers, x-1);
    }
}
try {
    ompleArray([1, 5, 252, 24, 7, 82, 3]);
    console.log(`Potencia: ${potencia(2, 10)}`)
    console.log(`Decimal a Binari: ${aBinari(11)}`)
    console.log(`Compta imparells: ${comptaImparells(arr)}`)

} catch (e) {
    console.log(e)
}
