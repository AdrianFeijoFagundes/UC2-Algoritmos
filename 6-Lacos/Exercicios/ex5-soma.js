const readlineSync = require('readline-sync')

let input
let sum = 0
while (input !== 0) {
    input = Number(readlineSync.question('Type in a number: '))   
    sum += input
}
console.log(sum)