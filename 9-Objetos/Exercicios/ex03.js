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

filme.personagens = ['Sharon Tate', 'Cliff Booth', 'Rick Dalton']
filme.elenco[0] = 'Xuxa'

for (let i = 0; i < filme.elenco.length; i++ ) {
    console.log(`No filme ${filme.elenco[i]} interpreta ${filme.personagens[i]}`)

}
console.log(filme)