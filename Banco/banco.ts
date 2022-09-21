export {cliente}
export class Banco{
    nome: string;
    contaCorrente: number;
    contaPoupanca: number;
    contaDeInvest: number;
    ESaldo: number;

    mostrarConta(): void {
        console.log(`O saldo do cliente ${cliente.nome} é ${cliente.ESaldo}`);
}
    mostrarContaCorrente(): void {
        console.log(`${cliente.nome} Valor disponível na conta corrente é de ${cliente.contaCorrente}`);
}
    mostrarContaPoupanca(): void {
        console.log(`Valor total da sua ${cliente.ESaldo}`)
}
    mostrarContaDeInvest(): void {
        console.log(`${cliente.nome} Seu insvestimento foi de ${cliente.contaDeInvest}`);
    }
    mostrarESaldo(): void {
        console.log(`${cliente.nome} Seu saldo atual é de ${cliente.ESaldo}`);
}
}
var cliente = new Banco()
        cliente.nome = "Renato Silva"
        cliente.contaCorrente = 1000
        cliente.contaPoupanca = 2000
        cliente.ESaldo = 3000
    
