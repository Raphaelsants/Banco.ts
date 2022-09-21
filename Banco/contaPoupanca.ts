export {contaPoupanca}
import {cliente} from "./banco";
import { Banco } from "./banco";

class contaPoupanca extends Banco { 
    mostrarCP() {
        console.log(`Saldo da CP: ${cliente.contaPoupanca}`);
    }
}
    var CP = new contaPoupanca();
    CP.mostrarCP();
