export {contaDeInvest}
import {cliente} from "./banco";
import { Banco } from "./banco";

class contaDeInvest extends Banco { 
    mostrarCDI() {
        console.log(`O saldo da CDI: ${cliente.contaDeInvest}`);
    }
}
    var CDI = new contaDeInvest();
    CDI.mostrarCDI();