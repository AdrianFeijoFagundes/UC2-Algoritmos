// Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra,você vai fornecer algumas informações:

// Nome completo;
// Tipo de jogo: IN indica internacional; e DO indica doméstico;
// Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// Categoria: pode ser as opções 1, 2, 3 ou 4;
// Quantidade de ingressos
// O sistema deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Junto nesta pasta há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

const ask = require('readline-sync')

console.log("Estamos vendendo ingressos")
const tipo = ask.question("Tem jogos internacionais ou domesticos? Digite DO ou IN\n")
console.log("voce escolheu:", tipo)
const etapa = ask.question("O jogo esta em qual etapa? digite SF (semi-final), DT(Decisao de terceiro lugar) ou FI(final)/\n")
console.log("voce escolheu:", etapa)
const categoria = ask.question("e um jogo em qual categoria? 1, 2, 3 ou 4\n")
console.log("voce escolheu:", categoria)
const ingressos = Number(ask.question("Quantos ingressos voce deseja?\n"))
const cliente = ask.question("Qual seu nome?\n")

let valorIngresso

switch(etapa) {
    case 'SF': 
        switch (categoria) {
            case '1':
                valorIngresso = 1320; 
                break
            case '2':
                valorIngresso = 880;
                break
            case '3':
                valorIngresso = 550;
                break
            case '4':
                valorIngresso = 220;
                break
            default:
                console.log('A categoria informada não é valida.')
                process.exit(1)
                break
        }
        break  
    case 'DT':  
        switch (categoria) {
            case '1':
                valorIngresso = 660;
                break
            case '2':
                valorIngresso = 440;
                break
            case '3':
                valorIngresso = 330;
                break
            case '4':
                valorIngresso = 170;
                break
            default:
                console.log('A categoria informada não é valida.')
                process.exit(1)
                break
        }
        break  
    case 'FI':
        switch (categoria) {
            case '1':
                valorIngresso = 1980;
                break
            case '2':
                valorIngresso = 1320;
                break
            case '3':
                valorIngresso = 880;
                break
            case '4':
                valorIngresso = 330;
                break
            default:
                console.log('A categoria informada não é valida.')
                process.exit(1)
                break
        }
        break  
    default:
        console.log('A etapa informada não é válida')
        process.exit(1)
        break
}

if (tipo === 'IN') {
    valorIngresso = valorIngresso * 4.10
    
}



let valorTotal = valorIngresso * ingressos

console.log('\n---Dados da compra---') 
console.log('Nome do cliente:'  , cliente) 
console.log('Tipo do jogo:',  tipo) 
console.log('Etapa do jogo:',  etapa) 
console.log('Categoria:',  categoria) 
console.log('\nQuantidade de Ingressos:', ingressos) 
console.log('Valor do ingresso: R$', valorIngresso)
console.log('Valor total: R$', valorTotal)