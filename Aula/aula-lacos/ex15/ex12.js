// Simular um jogo de cara ou coroa: Utilize um loop while para simular um jogo de
// cara ou coroa. O jogo termina quando o usuário obtém o resultado desejado (cara
// ou coroa).

const readlineSync = require('readline-sync')

console.log('Toss a coin')
const choice = Number(readlineSync.question('Choice "1" for Heads or "0" for Tails: '))
let result;
let attemps = 0
do {
    attemps++
    result = Math.round(Math.random())
    switch (result) {
        case 0:
            console.log('Ops... the result is Tails!')
            break
        case 1:    
            console.log('Ops... the result is Heads!')
            break
    }
    
} while (choice !== result)

console.log(`It took ${attemps} attemps to get the desired result`)