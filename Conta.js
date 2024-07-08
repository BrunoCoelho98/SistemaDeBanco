class Conta {
    constructor(titular ,saldo) {
        this.saldo = this.depositar(saldo);
        this.titular = titular;
    }
    
    depositar(valor) {
        // Checa se o valor é um número positivo
        if (valor < 0) {
            console.log('Valor inválido para depósito');
            return 0;
        }
        this.saldo += valor;
        console.log('Depósito realizado com sucesso!');
        return valor;
    }
    
    sacar(valor) {
        // Checa se o valor é um número positivo
        if (valor <= 0) {
            console.log('Valor inválido para saque');
        }
        else if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log('Saque realizado com sucesso!');
        } else {
            console.log('Saldo insuficiente');        
        }
    }
    
    getSaldo() {
        return this.saldo;
    }

    getTitular() {
        return this.titular;
    }

}

module.exports = Conta;