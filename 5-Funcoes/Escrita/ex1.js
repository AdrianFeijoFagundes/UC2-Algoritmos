const user = 'Adrian'
const age =  21
const city = 'São Paulo'
const occupation = 'Estudante'

// utiliza diretamente os valores das váriaveis
function userData() {
    console.log(`Eu sou ${user}, tenho ${age} anos, moro em ${city} e sou ${occupation}.`)
}

// para imprimir a frase corretamente será necessário para os valores como argumentos na hora de chamar a função
function userDataTwo(user, age, city, occupation) {
    console.log(`Eu sou ${user}, tenho ${age} anos, moro em ${city} e sou ${occupation}.`)
}

userData()
userDataTwo('Arthur', 21, 'São leopoldo', 'desempregado')