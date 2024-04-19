// Crie um programa tenha o seu nome e sua cor favorita e
// imprima a mensagem:
// "A cor favorita de FULANO é COR"
// Faça o exercício duas vezes, utilizando template strings e
//  concatenação


const readlineSync = require('readline-sync');



const nome = readlineSync.question("Qual o sua cor nome? ");
const corFavorita = readlineSync.question("Qual a sua cor favorita? ");


console.log("A cor favorita de "+ nome+ " é " + corFavorita)
console.log(`A cor favorita de  ${nome} é ${corFavorita}`)