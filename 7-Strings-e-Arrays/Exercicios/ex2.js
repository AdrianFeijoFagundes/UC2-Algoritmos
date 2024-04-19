// Peça para o usuário escrever uma frase e imprima no console a
// frase alterada, com:
// Todas as letras maiúsculas;
// Na língua do i (substituindo a vogal "o" por "i");
// O tamanho da frase.


const readlineSync = require('readline-sync')

const phrase = readlineSync.question('Escreva uma frase: ')

console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase().replaceAll('o','i'))
console.log(phrase.length)