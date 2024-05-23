//20
//Crie um sistema de login que verifique se o nome de usuário e a senha estão corretos. Mas primeiro cadastre-o.
const rl = require('readline-sync')
const users = []

function addUser() {
    console.log('Registrando novo usuário')
    const user = {
        username: rl.question('usuário: '),
        senha: rl.question('senha: ')
    }
    return user
}
function login(users) {
    if (users.length == 0) {
        return console.log('Não temos nenhum usuário registrado')
    }
    const username =  rl.question('usuário: ')
    const senha = rl.question('senha: ')

    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && senha === users[i].senha) {
            console.log('Login efetuado com sucesso')
            console.log(users)
        } else {
            console.log('Usuario ou senha incorretos')
        }
    }
}

function main() {
    let continuar = true
    while (continuar) {
        console.log('Escolha uma opção: \n 1. Registrar novo usuário \n 2. Fazer login \n 3. Sair')
        const resposta = Number(rl.question('Digite uma opcao: '))
        
        switch (resposta) {
            case 1:
                users.push(addUser())
                break
            case 2:
                login(users)
                break
            case 3:
                return false
        }
        if (Number(rl.question('digite 1 para sair do programa: ')) === 1) {
            continuar = false    
        }
        
    }
}

main()