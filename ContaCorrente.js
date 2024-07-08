const Conta = require('./Conta.js');

class ContaCorrente extends Conta {
    constructor(titular, saldo) {
        super(titular, saldo);
        this.juros = 0.02;
    }

    aplicarJuros() {
        this.saldo += this.saldo * this.juros;
        console.log('Juros aplicados com sucesso!');
    }

    // Método para transferir dinheiro de uma conta para outra
    transferir(valor, conta) {
        // Verifica se a conta passada é a mesma que a conta de origem
        if (conta === this) {
            console.log('Não é possível transferir para a mesma conta!');
            return;
        }
        if (valor <= this.saldo) {
            this.saldo -= valor;
            conta.depositar(valor);
            console.log('Transferência realizada com sucesso!');
        } else {
            console.log('Saldo insuficiente');
        }
    }
}

module.exports = ContaCorrente;