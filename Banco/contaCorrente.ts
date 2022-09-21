export {contaCorrente}
import {cliente} from "./banco";
import { Banco } from "./banco";

class contaCorrente extends Banco { 
    mostrarCC() {
        console.log(`O saldo da CC: ${cliente.contaCorrente}`);
    }
}
    var CC = new contaCorrente();
    CC.mostrarCC();