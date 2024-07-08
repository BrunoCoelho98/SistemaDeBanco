# Sistema Bancário Simples

Este é um sistema bancário simples desenvolvido em JavaScript que permite criar contas correntes e poupança, realizar depósitos, saques, aplicar rendimentos/juros, transferir dinheiro entre contas e verificar o saldo.

## Funcionalidades

- Criar conta corrente ou poupança
- Acessar conta existente
- Realizar depósitos
- Realizar saques
- Aplicar rendimentos (para contas poupança) ou juros (para contas correntes)
- Transferir dinheiro entre contas
- Verificar saldo

## Como Executar

### Pré-requisitos

- Node.js instalado
- Pacote `prompt-sync` instalado (pode ser instalado via `npm install prompt-sync`)

### Passos para Execução

1. Clone este repositório ou baixe os arquivos.

2. Certifique-se de que os arquivos `ContaCorrente.js` e `ContaPoupança.js` estejam no mesmo diretório que o arquivo principal.

3. Execute o arquivo principal com o Node.js:

    ```bash
    node index.js
    ```

## Estrutura do Projeto

- `Conta.js`: Definição da classe Conta.
- `ContaCorrente.js`: Definição da classe ContaCorrente, herda de Conta.
- `ContaPoupança.js`: Definição da classe ContaPoupança, herda de Conta.
- `index.js`: Arquivo principal que contém a lógica do sistema bancário.


