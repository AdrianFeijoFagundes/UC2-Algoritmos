//Pergunte ao usuário usando deadline: seu nome, idade e endereço, atribuindo os dados em variáveis e imprima-as no console;

const rl = require('readline-sync')

const nome = rl.question('Qual seu nome? ')
const idade = Number(rl.question('Qual sua idade? '))
const endereco = rl.question('Qual seu endereco? ')

console.log(`Dados pessoais:\n nome: ${nome} \n idade: ${idade} \n endereço: ${endereco}`)

