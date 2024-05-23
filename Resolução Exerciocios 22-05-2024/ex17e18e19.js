//17
//Compare duas variáveis numéricas e imprima qual delas é maior.
const number1 = 10
const number2 = 20
if (number1 > number2) {
    console.log(number1, 'é maior')
} else if (number1 < number2) {
    console.log(number2, 'é maior')
}
//18
//Crie um código que compare arrays diferentes e inverta o que possui o maior número decaracteres.
const arr1 = [1,2,3,4,6,7,8,9,10]
const arr2 = [1,2,3,4,6,7,8,9,10,11,12,13,14,15]
let arrayInvertido = []
if (arr1.length > arr2.length) {
    arrayInvertido.push(...arr1.reverse())
} else {
    arrayInvertido.push(...arr2.reverse())
}
console.log(arrayInvertido)
//19
//Use o operador lógico && para verificar se duas condições são verdadeiras.
let number = 10

if (number % 2 === 0 && number % 5 === 0) {
    console.log(number, 'é divisivel por 2 e por 5')
}