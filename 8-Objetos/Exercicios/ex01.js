const filme = {
    titulo: 'Era uma vez em Hollywood',
    dataDeEstreia: 2019,
    classificacaoIndicativa:'18',
    elenco: ['Margot Robbie','Brad Pitt', 'Leornado DiCaprio'],
    diretor: 'Quentin Tarantino',
    assistido: true
}
console.log(`Título :${filme.titulo}`)
console.log(`Data de estreia:${filme.dataDeEstreia}`)
console.log(`Classificação Indicativa ${filme.classificacaoIndicativa}`)
console.log(`Elenco: ${filme['elenco']}`)
console.log(`Diretor: ${filme['diretor']}`)
console.log(`Eu assisti? ${ filme.assistido ? 'sim': 'não'}`)