//Escreva uma função que encontre o maior número em um array de números.
const array = [1,2,5,7,9,6,10,30,3,8]
function maiorNumero(array) {
    let number = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > number) {
            number = array[i]
        }
    }

    return number
}

console.log(maiorNumero(array))

//Escreva um código que verifique se uma variável numero é par ou ímpar.
let number = 10
if (number % 2 === 0) {
    console.log('É um número par')
} else {
    console.log('É um número impar')
}