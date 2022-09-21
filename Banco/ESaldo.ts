export {mostrarESaldo}
import {cliente} from "./banco";
import { Banco } from "./banco";

class mostrarESaldo extends Banco { 
    mostrarESaldo() {
        console.log(`O saldo da ESaldo: ${cliente.ESaldo}`);
    }
}
    var ESaldo = new mostrarESaldo();
    ESaldo.mostrarESaldo();