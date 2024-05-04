const rl = require('readline-sync')

function calcularMedia(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma / array.length
}

const numeros = []

for (let i = 0; i < 5; i++ ) {
    numeros.push(Number(rl.question('Digite um número: ')))
}

console.log(calcularMedia(numeros))