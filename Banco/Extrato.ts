export {Extrato}
import {cliente} from "./banco";
import { Banco } from "./banco";

class Extrato {
    mostraExtrato(){
        console.log(`Cliente: ${cliente.nome}\n Conta Corrente: ${cliente.contaCorrente}\n Conta Poupança: ${cliente.contaPoupanca}\n Seu inventimento foi dê: ${ cliente.ESaldo * 0.3}\n Seu saldo atual é: ${cliente.contaCorrente + cliente.contaPoupanca}`)
    }

}
var mE = new Extrato();
mE.mostraExtrato();
