/*
2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`

*/

const user1 = {
    nome: 'Natam',
    idade: 17,
    profissao: 'jovem-aprendiz'
    }
const user2 = {
    nome: 'Adrian',
    idade: 21,
    profissao: 'desempregado'
    }

function devolveArray(objeto) {
    return [
    objeto.nome,
    objeto.nome.length,  
    objeto.idade,
    objeto.profissao,
    objeto.profissao.length
    ]   
}

console.log(devolveArray(user1))
console.log(devolveArray(user2))