// Calcular a média de 5 números: Utilize um loop for para ler 5 números do usuário
// e calcular a média dos números digitados. Mostre a média no console.
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