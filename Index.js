const ContaCorrente = require('./ContaCorrente.js');
const ContaPoupança = require('./ContaPoupança.js');
const prompt = require('prompt-sync')();

let contasCorrentes = [];
let contasPoupanças = [];

/**
 * Função para criar uma nova conta com base no tipo, titular e saldo inicial
 * @param {string} tipo - Tipo da conta ('1' para corrente ou '2' para poupança)
 * @param {string} titular - Nome do titular da conta
 * @param {number} saldo - Saldo inicial da conta
 * @returns {Object} - Retorna a instância da conta criada ou null se o tipo for inválido
 */
function criarConta(tipo, titular, saldo) {
    if (tipo === '1') {
        return new ContaCorrente(titular, saldo);
    } else if (tipo === '2') {
        return new ContaPoupança(titular, saldo);
    } else {
        console.log('Tipo de conta inválido!');
        return null;
    }
}

/**
 * Função principal que inicia o programa e apresenta o menu inicial
 */
function main() {
    while (true) {
        // Tela inicial
        console.log('Bem-vindo ao banco!');
        console.log('Você deseja:');
        console.log('1 - Criar uma conta');
        console.log('2 - Acessar uma conta existente');
        console.log('3 - Sair');

        // Lendo a opção do usuário
        const opcao = parseInt(prompt('Escolha uma opção: '));
        switch (opcao) {
            case 1:
                criarNovaConta();
                break;
            case 2:
                acessarConta();
                break;
            case 3:
                console.log('Obrigado por usar o nosso banco!');
                // Encerrando o programa
                return;
            default:
                console.log('Opção inválida!');
        }
    }
}

/**
 * Função para criar uma nova conta
 */
function criarNovaConta() {
    console.log('Você deseja criar uma conta corrente ou poupança?');
    console.log('1 - Corrente');
    console.log('2 - Poupança');
    const tipo = prompt('Escolha uma opção: ');
    const titular = prompt('Digite o nome do titular: ');
    const saldo = parseFloat(prompt('Digite o valor do depósito inicial: '));
    const novaConta = criarConta(tipo, titular, saldo);
    if (novaConta) {
        if (tipo === '1') {
            contasCorrentes.push(novaConta);
        } else if (tipo === '2') {
            contasPoupanças.push(novaConta);
        }
        console.log('Conta criada com sucesso!');
    }
}

/**
 * Função para acessar uma conta existente
 */
function acessarConta() {
    console.log('Você deseja acessar uma conta corrente ou poupança?');
    console.log('1 - Corrente');
    console.log('2 - Poupança');
    const tipo = prompt('Escolha uma opção: ');
    const nome = prompt('Digite o nome do titular da conta: ');
    let conta;
    if (tipo === '1') {
        conta = contasCorrentes.find(conta => conta.getTitular() === nome);
    } else if (tipo === '2') {
        conta = contasPoupanças.find(conta => conta.getTitular() === nome);
    } else {
        console.log('Tipo de conta inválido!');
        return;
    }
    if (conta) {
        console.log('Conta encontrada!');
        opcoesDeConta(conta);
    } else {
        console.log('Conta não encontrada!');
    }
}

/**
 * Função para apresentar as opções de operações disponíveis para a conta
 * @param {Object} conta - A instância da conta que será manipulada
 */
function opcoesDeConta(conta) {
    // Se for uma conta corrente, apresenta a opção de transferência
    if (conta instanceof ContaCorrente) {
        while (true) {
            console.log('Você deseja:');
            console.log('1 - Depositar');
            console.log('2 - Sacar');
            console.log('3 - Aplicar juros');
            console.log('4 - Transferir');
            console.log('5 - Verificar saldo');
            console.log('6 - Voltar para a tela inicial');

            const opcao = parseInt(prompt('Escolha uma opção: '));
            switch (opcao) {
                case 1:
                    const deposito = parseFloat(prompt('Digite o valor do depósito: '));
                    conta.depositar(deposito);
                    break;
                case 2:
                    const saque = parseFloat(prompt('Digite o valor do saque: '));
                    conta.sacar(saque);
                    break;
                case 3:
                    conta.aplicarJuros();
                    break;    
                case 4:
                    transferirDinheiro(conta);
                    break;
                case 5:
                    console.log(`O saldo atual da conta é: R$ ${conta.getSaldo().toFixed(2)}`);
                    break;
                case 6:
                    console.log('Voltando para a tela inicial...');
                    return; // Retorna para a tela inicial
                default:
                    console.log('Opção inválida!');
            }
        }
    }
    // Se for uma conta poupança, não apresenta a opção de transferência
    else {
        while (true) {
            console.log('Você deseja:');
            console.log('1 - Depositar');
            console.log('2 - Sacar');
            console.log('3 - Aplicar rendimento');
            console.log('4 - Verificar saldo');
            console.log('5 - Voltar para a tela inicial');

            const opcao = parseInt(prompt('Escolha uma opção: '));
            switch (opcao) {
                case 1:
                    const deposito = parseFloat(prompt('Digite o valor do depósito: '));
                    conta.depositar(deposito);
                    break;
                case 2:
                    const saque = parseFloat(prompt('Digite o valor do saque: '));
                    conta.sacar(saque);
                    break;
                case 3:
                    conta.aplicarRendimento();
                    break;
                case 4:
                    console.log(`O saldo atual da conta é: R$ ${conta.getSaldo().toFixed(2)}`);
                    break;
                case 5:
                    console.log('Voltando para a tela inicial...');
                    return; // Retorna para a tela inicial
                default:
                    console.log('Opção inválida!');
            }
        }
    }
}

/**
 * Função para transferir dinheiro de uma conta para outra
 * @param {Object} contaOrigem - A instância da conta de origem
 */
function transferirDinheiro(contaOrigem) {
    console.log('Você deseja transferir para uma conta corrente ou poupança?');
    console.log('1 - Corrente');
    console.log('2 - Poupança');
    const tipoDestino = prompt('Escolha uma opção: ');
    const nomeDestino = prompt('Digite o nome do titular da conta de destino: ');
    let contaDestino;
    if (tipoDestino === '1') {
        contaDestino = contasCorrentes.find(conta => conta.getTitular() === nomeDestino);
    } else if (tipoDestino === '2') {
        contaDestino = contasPoupanças.find(conta => conta.getTitular() === nomeDestino);
    } else {
        console.log('Tipo de conta inválido!');
        return;
    }
    if (contaDestino) {
        const valor = parseFloat(prompt('Digite o valor da transferência: '));
        contaOrigem.transferir(valor, contaDestino);
    } else {
        console.log('Conta de destino não encontrada!');
    }
}

// Iniciando o programa
main();
