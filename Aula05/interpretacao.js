// Exercicio 1

const bool1 = true             
const bool2 = false             
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a.", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b.", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) // boolean
// Exercicio 2
// Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

// ele declarou os numeros como string entre aspas
let primeiroNumero = "100"
let segundoNumero = "43"

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
// Exercicio 3 // colocar o metodo Number() ou tirar as aspas