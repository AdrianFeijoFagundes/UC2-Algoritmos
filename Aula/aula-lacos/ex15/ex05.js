// calcular media informada pelo usuario
const readlineSync = require('readline-sync')


console.log('Type "OK" to calculate media ')
let numbers = []
let input = ''
while (input.toUpperCase() === 'OK') {
    let input = (readlineSync.question('Type in a number: '))   
    if (Number(input) === NaN) {
        numbers.push(input)
    }
}

function calcMedia(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]    
    }
    let media = sum / arr.length
    return media
}

console.log(calcMedia(numbers))