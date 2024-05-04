const rl = require('readline-sync')

const numero = Number(rl.question('Digite um número: '))

let contador = 0

while (contador < numero + 1) {
    console.log(contador)
    contador++
}