// Crie um array com pelo menos 5 raças de cachorro
// Peça para o usuário inserir um número de 0 a 4
// Imprima no console a raça correspondente à posição escolhida
// pelo usuário
const readlineSync = require('readline-sync')

const dogsList = [
    'German Shepard','Labrador Retriever','Golden Retriever','Australian Shepard','Pomeraniam Lulu','Dobermann'
]


const chosenBreed = Number(readlineSync.question('Choose a number between 0 and 4?'))

console.log(dogsList[chosenBreed])