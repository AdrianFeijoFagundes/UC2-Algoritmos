const rl = require('readline-sync')

const nome = rl.question('Digite seu nome completo: ')
const idade = rl.question('Digite sua idade: ')
const cidade = rl.question('Digite a cidade onde mora: ')

const pessoa = {
    nome,
    idade,
    cidade 
}

console.log(pessoa)