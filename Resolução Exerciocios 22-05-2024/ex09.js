//Pergunte ao usuário qual sua idade, caso for maior de 16 anos cadastre o usuário em um banco de dados, no caso o banco de dados seria um array e a forma de cadastro seria adicionando um objeto nesse array. Caso seja menor, diga que não pode se cadastrar devido a sua idade.

const rl = require('readline-sync')
const users = []

const idade = Number(rl.question('Qual sua idade: '))

if (idade < 16) {
    console.log('Você tem apenas', idade, 'anos ainda não pode realizar o cadastro')
} else {
    const user = {
        nome: rl.question('Qual seu nome: '),
        idade: idade,
        ocupacao: rl.question('Qual sua ocupacao(emprego) no momento? ')
    }
    users.push(user)
}

console.log(users)