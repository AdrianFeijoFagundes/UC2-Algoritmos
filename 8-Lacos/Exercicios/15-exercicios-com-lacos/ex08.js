// Ler 10 números do usuário e mostrar o maior e o menor número digitado:
// Utilize um loop for para ler 10 números do usuário e encontrar o maior e o menor
// número digitado. Mostre os resultados no console.
const readlineSync = require('readline-sync')


console.log('Type "OK" to verify numbers ')
let numbers = []
let input = ''

while (input.toUpperCase() !== 'OK' ) {
    input = (readlineSync.question('Type in a number: '))   
    if (Number(input) !== NaN) {
        numbers.push(Number(input))
    }
}
const verifyNumbers = (arr) => {
    let highestNumber = arr[0] 
    let lowestNumber = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highestNumber) {
            highestNumber = arr[i]
        }
        if (arr[i] < lowestNumber) {
            lowestNumber = arr[i]
        }
    } 
    return `the highestNumber is: ${highestNumber} \n the lowestNumber is: ${lowestNumber}`
}
console.log(verifyNumbers(numbers))