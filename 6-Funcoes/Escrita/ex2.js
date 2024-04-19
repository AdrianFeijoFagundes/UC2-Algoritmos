



// a) soma entre dois numeros
function sum(x, y) {
    return x + y
}
// b) verifica se o segundo número é maior ou igual
function maiorIgual(x,y) {
    return x <= y          
}
//c) retorna TRUE se for par e FALSE se for impar 
function evenOdd(number) {
    return number % 2 === 0 // quando o módulo da divisão é 0 é par ou seja a opercação vai retorna TRUE caso seja PAR
}
//d) recebe string e imprime a quantidade de caracteres e a string em caixa alta
function textLenght(string) {
    return `string lenght: ${string.length}\n string: ${string.toUpperCase()}` // 
}



//a
console.log(sum(10,2))
//b
console.log(maiorIgual(10,22))
//c
console.log(evenOdd(2))
//d
console.log(textLenght('Oi'))


