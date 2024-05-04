let aluno = {
    nome : 'Adrian',
    idade : 21,
    curso : 'Desenlvimento de Sistemas'
}

console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos e faz o curso de ${aluno.curso}`)

aluno.notas = [7 ,6 ,8 ]

function calcularMedia(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma / array.length
}
console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos, faz o curso de ${aluno.curso}, suas notas são:`,  ...aluno.notas, `e sua média é ${calcularMedia(aluno.notas)}`)

aluno.endereco = {
    pais: 'Brasil',
    anoNaEscola: '1 ano técnico',
    rua: 'Rua sete',
    numero: 30,
    cidade: 'São Leopoldo',
    cep: '000000-00'
}

console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos, faz o curso de ${aluno.curso} esta no ${aluno.endereco.anoNaEscola}, ele mora na ${aluno.endereco.rua}, ${aluno.endereco.numero}, ${aluno.endereco.cidade}, cep ${aluno.endereco.cep}, ${aluno.endereco.pais}`)