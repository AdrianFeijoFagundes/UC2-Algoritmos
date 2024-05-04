const rl = require('readline-sync')

function soma(x, y) {
    return x + y
}



const numero1 = Number(rl.question('Digite um numero: '))
const numero2 = Number(rl.question('Digite outro numero: '))


console.log(`${numero1} + ${numero1} = ${soma(numero1, numero2)}`)