//15
//Crie uma variável saudação que contenha a string “Olá, mundo!” e imprima-a no console.

const saudacao = "Olá mundo!"
console.log(saudacao)

//16
//Escreva uma função que inverta uma string fornecida pelo usuário.
function reverseString(string) {
    let arr = string.split('')
    string = arr.reverse().join('')
    return string
}
console.log(reverseString(saudacao))
