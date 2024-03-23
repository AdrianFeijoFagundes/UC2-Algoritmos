const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Digite um número? ', (n1) => {
    rl.question('Digite outro número? ', (n2) => {
        let result = Number(n1) + Number(n2)
        console.log(result)
    }) 

})

rl2.question('Qual seu nome?', (nome) => {
    console.log(nome)
})
