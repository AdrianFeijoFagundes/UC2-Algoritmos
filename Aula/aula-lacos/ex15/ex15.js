// Criar um programa que lê uma frase do usuário e conta o número de vogais e
// consoantes na frase: Utilize um loop for para iterar sobre a frase e contar o
// número de vogais e consoantes. Mostre os resultados no console.

const readlineSync = require('readline-sync')

const phrase = 'abcdefghijklmnopqrstuvwxyz áãâ'//readlineSync.question('Insert a phrase: ')

const filterPhrase = phrase.toLowerCase().trim().split('').filter((item) => {
    return item !== ' '
})
const vowelList = ['a','e','i','o','u']
let vowel = 0
let consonant = 0
for (let i = 0; i < filterPhrase.length; i++) {


    if(!vowelList.includes(filterPhrase[i]) && filterPhrase[i] >= 'a' && filterPhrase[i] <= 'z') {
       consonant++ 
    } else if (vowelList.includes(filterPhrase[i])) {
        vowel++
    }
    

}
console.log(filterPhrase)
console.log(vowel, consonant)

//observações: caso a letra tenha assento ou seja um sinal como virgula ou ponto ele não será adicionado nem como vogal nem como consoante