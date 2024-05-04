const rl = require('readline-sync')

const nome = rl.question('Digite seu nome completo: ')

console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log('A string tem' + nome.length + 'caracteres.')