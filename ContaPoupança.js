const Conta = require('./Conta.js');

class ContaPoupança extends Conta {
    constructor(titular, saldo) {
        super(titular, saldo);
        this.rendimento = 0.05;
    }

    aplicarRendimento() {
        this.saldo += this.saldo * this.rendimento;
        console.log('Rendimento aplicado com sucesso!');
    }


}

module.exports = ContaPoupança;