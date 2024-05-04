const rl = require('readline-sync')

const numero1 = Number(rl.question('Digite um numero: '))
const numero2 = Number(rl.question('Digite outro numero: '))

console.log(`O resultado da operações de comparação entre ${numero1} e ${numero2}`)
console.log(`
    ${numero1} é igual estritamente a ${numero2}? ${numero1 === numero2}
    ${numero1} é diferente estritamente de ${numero2}? ${numero1 !== numero2}
    ${numero1} é maior que ${numero2}? ${numero1 > numero2}
    ${numero1} é maior ou igual a ${numero2}? ${numero1 >= numero2}
    ${numero1} é menor que ${numero2}? ${numero1 < numero2}
    ${numero1} é menor ou igual a ${numero2}? ${numero1 <= numero2}
`)