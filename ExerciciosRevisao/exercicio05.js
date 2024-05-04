const nomes = [
    '    Adrian Feijó Fagundes   ',
    '        Miqueias Feijó Fagundes                ',
    '    Joseane Sparremberger Feijó ',
    'Pedro Rogério Nunes     '
]

let nomesMinusculos = []
let nomesMaiusculos = []

for (let i = 0; i < nomes.length; i++) {
    nomesMinusculos[i] = nomes[i].toLowerCase().trim()
    nomesMaiusculos[i] = nomes[i].toUpperCase().trim()
}

console.log(nomesMinusculos, '\n')
console.log(nomesMaiusculos, '\n')

nomesMinusculos.forEach(item => console.log(`O nome ${item} tem a letra 'a'? ${item.includes('a') ? 'sim' : 'não'}`))

console.log('')
nomesMinusculos.map(item => {
   
    return console.log(item.replaceAll('a', '#'))
})