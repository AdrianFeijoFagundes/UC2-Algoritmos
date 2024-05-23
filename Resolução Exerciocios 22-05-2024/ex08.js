//Crie um array com 3 objetos user dentro dele, cada objeto deve ter as propriedades: username, email, number phone. Depois pergunte ao usuário qual ele deseja saber usando readlinee imprima o desejado;

const rl = require('readline-sync')

const users = [
    {
        id: 1,
        username: 'Adrian Fagundes', 
        email:'adrianfagundes@gmail.com',
        phone: '(51) 9 9706-2938'
    },
    {
        id: 2,
        username: 'João Silva', 
        email:'joaosilva@gmail.com',
        phone: '(51) 9 9664-2965'
    },
    {
        id: 3,
        username: 'Emanuel Gomes', 
        email:'emanuelgomes@gmail.com',
        phone: '(51) 9 9776-7778'
    },
]
function pesquisarPorId(array) {
    const idPesquisado = Number(rl.question('Qual o ID do usuário? '))

    console.log(array[idPesquisado - 1])
}
function pesquisarPorUsername(array) {
    const usernamePesquisado = rl.question('Qual o username do usuário? ')
    let cont = 0
    console.log('Dados dos usuários correspondentes com:', usernamePesquisado)
    for (let i = 0; i < array.length; i++) {
        if (array[i].username.toUpperCase().includes(usernamePesquisado.toUpperCase())) {
            console.log(array[i].id)
            console.log(array[i].username)
            console.log(array[i].email)
            console.log(array[i].phone)
            cont++
        }
    }
    if (cont === 0) {
        console.log('Nunhum resultado')
    }
}
function consultarUsuarios(array) {
    console.log('Todos os usuários: ')
    for (let i = 0; i < array.length; i++) {
        console.log('')
        console.log(array[i].id)
        console.log(array[i].username)
        console.log(array[i].email)
        console.log(array[i].phone)
    }
}

function main() {
    let continuar = true
    while (continuar) {
        console.log('Escolha uma opção: \n 1. Consultar todos usuários \n 2. Buscar usuário por ID \n 3. Buscar usuario por Username')
        const resposta = Number(rl.question('Digite uma opcao: '))
        
        switch (resposta) {
            case 1:
                consultarUsuarios(users)
                break
            case 2:
                pesquisarPorId(users)
                break
            case 3:
                pesquisarPorUsername(users)
                return false
        }
        if (Number(rl.question('digite 1 para sair do programa: ')) === 1) {
            continuar = false    
        }
        
    }
}

main()