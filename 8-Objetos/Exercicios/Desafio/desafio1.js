// Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.


const readlineSync = require('readline-sync')

const nome = readlineSync.question('Qual seu nome?')
const idade = Number(readlineSync.question('Qual sua idade?'))
const profissao = readlineSync.question('Qual sua profissão?')



const usuario = {
    nome: nome,
    idade: idade,
    profissao: profissao
}

console.log(usuario)
console.log(typeof usuario)
