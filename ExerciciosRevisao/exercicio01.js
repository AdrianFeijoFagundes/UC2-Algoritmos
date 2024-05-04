const rl = require('readline-sync')

const anoDeNascimento = Number(rl.question('Em que ano voce nasceu?'))
const anoAtual = (rl.question('Em que ano estamos?'))
const idade = anoAtual - anoDeNascimento

console.log(idade)