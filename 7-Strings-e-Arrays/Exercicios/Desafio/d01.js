// Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
const readlineSync = require('readline-sync')

const phrase = '      o rato      roe    a roupa'// readlineSync.question('Insert phrase: ')

// Primeiro vai remover os espaços do começo e final, então separa as palavras, no entando o array ainda vai ter espeços se forem colocados varios espaços entre as frases
const phraseArray = phrase.split(' ') 

console.log(phraseArray)
// o filter vai remover as strings vazias do array, pois o javaScript indentifica elas como valores false
console.log(phraseArray.filter(item => item)) 