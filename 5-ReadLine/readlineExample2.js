const readline = require('readline')

const n1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

n1.question('Qual seu nome?',(nome)=> {
    console.log('seu nome é', nome)
    n1.close();
})
