// Gerar um número aleatório entre 1 e 100 e pedir ao usuário para adivinhar o
// número: Utilize um loop while para gerar um número aleatório entre 1 e 100 e
// pedir ao usuário para adivinhar o número. Dê dicas ao usuário se o chute for maior
// ou menor que o número aleatório.
const readlineSync = require('readline-sync')

let result = Math.round(Math.random() * 100)
console.log('Guess the number')
let userAnswer;
let attemps = 0
while (userAnswer !== result) {
    userAnswer = Number(readlineSync.question('Type a number:'))
    attemps++
    if (userAnswer < result) {
        console.log('good guess, try a higher number')
    } else {
        console.log('good guess, try a smaller number')
    }
}
console.log("You're correct! the result is ", result)
console.log("You got in", attemps, "attempts")