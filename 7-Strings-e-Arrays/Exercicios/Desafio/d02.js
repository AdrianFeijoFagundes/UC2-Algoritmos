// Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
const readlineSync = require('readline-sync')

const fruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

const searchFruit = readlineSync.question('Qual fruta deseja pesquisar? ')



if (fruits.includes(searchFruit)) {
    console.log('O indice da fruta pesquisada é ' + fruits.indexOf(searchFruit))
    console.log(`O array de frutas contém ${fruits.length} itens`)
} else {
    console.log('O array não contém o item digitado')
    console.log('Verifique se digitou corretamente')
}