const readlineSync = require('readline-sync')

const playerOnePokemons = []

const playerTwoPokemons = []


function addPokemon(array) {
    const name = readlineSync.question('Name: ') 
    const type = readlineSync.question('Type: ') 
    const healthPoints = Number(readlineSync.question('HP: ')) 
    const attack = Number(readlineSync.question('ATK: ')) 
    const defense = Number(readlineSync.question('DEF: ')) 

    const pokemon = {
        name,
        type,
        healthPoints,
        attack,
        defense
    }

    array.push(pokemon)
}
function battle() {
    console.log()
}
function selectTrainer() {
    if(readlineSync.question(`Adicionar pokemon na equipe do treinador 1 ou 2? 1/2`)) {
        addPokemon(playerOnePokemons)
    } else {
        addPokemon(playerTwoPokemons)
    }
}
function menu() {
    const trainer1 = readlineSync.question(`Qual o nome do primeiro treinador? `)
    const trainer2 = readlineSync.question(`Qual o nome do segundo treinador?` )
    
    console.log('--------------------')
    console.log(`        MENU        `)
    console.log('--------------------')
    console.log(`1.Cadastrar Pokemon `)
    console.log(`2.Listar Equipes    `)
    console.log(`3.Iniciar Batalha   `)
    console.log(`4.Jogar Novamente   `)
    console.log(`5.Sair              `)
    

    const option = Number(readlineSync.question('Escolha uma opcao: '))
    while(option !== 5) {
        switch(option) {
            case 1:
                selectTrainer()
                break
            case 2:
                console.log(playerOnePokemons)
                console.log(playerTwoPokemons)
                break
            case 5:
                return false   
            default:
    
                break        
        }
        return true        
    }

}



function main() {
    console.log('--------------------------')
    console.log('---BEM VINDO TREINADOR----')
    console.log('--------------------------')
    let endApp = true
    while(endApp === true) {
        endApp = menu()    
    }
    console.clear()
    console.log('End system...')
}

main()