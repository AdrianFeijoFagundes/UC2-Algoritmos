// Exercício de Média: Declare três variáveis, nota1, nota2 e nota3, atribua valores a elas representando notas de um estudante, e então calcule a média das três notas. Armazene o resultado em uma variável chamada media e exiba o valor da média.


let nota1 = 7
let nota2 = 8
let nota3 = 6

let media = (nota1 + nota2 + nota3)/3

function calcularMedia(...valores) {
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    let resultado = soma / valores.length
    return resultado
}

console.log(media)
console.log(calcularMedia(7,8,6)) 