const rl = require('readline-sync')

const numero = Number(rl.question('Digite um número: '))

for (let i = 0; i < numero + 1; i++) {
    if (i % 2 === 0) {
        console.log(i + ' é par')
    }
}