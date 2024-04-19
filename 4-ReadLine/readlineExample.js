const readline = require('readline')

const n1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

n1.question('Qual sua idade?',(idade)=>{
    if (idade >= 18) {
        console.log('Voce é maior de idade.')
    } else {
        console.log('Voce é menor de idade.')
    }
    n1.close();
})

function sum(x,y) {
    let result= x + y
    
    return result 
}

c