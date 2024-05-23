const rl = require('readline-sync')

//Crie um objeto pessoa, com as seguintes propriedades: Nome, Idade, Altura, Peso. Depois imprima no console.

const pessoa = {
    nome:'Adrian', 
    idade: 21,
    altura: 1.79,
    peso: 79.7,
}
console.log(pessoa)

//Crie um objeto user, com as mesmas propriedades do exercício anterior, porém pergunte ao usuário as informações a respeito dele.

const user = {
    nome: rl.question('Qual seu nome? '), 
    idade: Number(rl.question('Qual sua idade? ')),
    altura: Number(rl.question('Qual sua altura? ')),
    peso: Number(rl.question('Qual seu peso? ')),
}
console.log(user)