const rl = require('readline-sync')

const numero1 = Number(rl.question('Digite um numero: '))
const numero2 = Number(rl.question('Digite outro numero: '))

const soma = numero1 + numero2
const subtracao = numero1 - numero2
const multiplicacao = numero1 * numero2
const divisao = numero1 / numero2
const modulo = numero1 % numero2

console.log(`O resultado da operações entre ${numero1} e ${numero2}`)
console.log(`
    ${numero1} + ${numero2} = ${soma} 
    ${numero1} - ${numero2} = ${subtracao} 
    ${numero1} * ${numero2} = ${multiplicacao} 
    ${numero1} / ${numero2} = ${divisao} 
    ${numero1} % ${numero2} = ${modulo} 
`)